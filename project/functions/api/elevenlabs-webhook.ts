/**
 * ElevenLabs Webhook Handler
 *
 * Recebe chamadas do agente de voz e processa agendamentos
 * Fluxo: Coleta dados → Cria reserva → Gera link de pagamento → Retorna ao agente
 */

export interface Env {
  D1: D1Database;
  ELEVENLABS_WEBHOOK_SECRET: string;
  STRIPE_SECRET_KEY: string;
  MERCADOPAGO_ACCESS_TOKEN?: string;
  CAL_COM_API_KEY: string;
  WHATSAPP_API_KEY?: string;
  SITE_URL: string;
}

interface AppointmentRequest {
  patient_name: string;
  patient_phone: string;
  patient_email?: string;
  appointment_type: 'primeira_consulta' | 'retorno';
  modality: 'presencial' | 'online';
  main_reason: string;
  preferred_dates?: string[];
  preferred_times?: string[];
  conversation_id?: string;
}

interface ReservationResponse {
  success: boolean;
  message: string;
  data?: {
    reservation_id: string;
    payment_link: string;
    expires_at: string;
    price: string;
    expires_in_minutes: number;
  };
  error?: string;
}

// Constantes
const RESERVATION_EXPIRY_MINUTES = 15;
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW_HOURS = 1;

const PRICES = {
  primeira_consulta: 80000, // R$ 800,00 em centavos
  retorno: 40000 // R$ 400,00 em centavos
};

/**
 * POST /api/elevenlabs-webhook
 * Handler principal do webhook
 */
export async function onRequestPost(
  context: { request: Request; env: Env }
): Promise<Response> {
  const { request, env } = context;

  try {
    // 1. Validar autenticação
    const isAuthenticated = await validateAuth(request, env);
    if (!isAuthenticated) {
      return jsonResponse(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // 2. Parse e validação dos dados
    const data: AppointmentRequest = await request.json();
    const validation = validateAppointmentData(data);
    if (!validation.valid) {
      return jsonResponse(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    // 3. Rate limiting (anti-spam)
    const rateLimitCheck = await checkRateLimit(env, data.patient_phone);
    if (!rateLimitCheck.allowed) {
      return jsonResponse({
        success: false,
        message: 'Desculpe, você atingiu o limite de tentativas. Por favor, tente novamente mais tarde ou entre em contato via WhatsApp: (17) 2110-1228',
        error: 'rate_limit_exceeded'
      }, { status: 429 });
    }

    // 4. Calcular preço
    const priceCents = PRICES[data.appointment_type];
    const priceFormatted = formatPrice(priceCents);

    // 5. Criar reserva no D1
    const reservationId = crypto.randomUUID();
    const expiresAt = new Date(
      Date.now() + RESERVATION_EXPIRY_MINUTES * 60 * 1000
    );

    await createReservation(env, {
      id: reservationId,
      ...data,
      priceCents,
      expiresAt,
    });

    // 6. Gerar link de pagamento
    const paymentLink = await createPaymentLink(env, {
      reservationId,
      amount: priceCents,
      description: `Consulta - Dr. Gustavo Mendes - ${data.patient_name}`,
      customerInfo: {
        name: data.patient_name,
        phone: data.patient_phone,
        email: data.patient_email,
      },
    });

    // 7. Log do evento
    await logEvent(env, reservationId, 'payment_link_generated', {
      payment_link: paymentLink,
      price_cents: priceCents,
    });

    // 8. Retornar resposta ao agente
    const response: ReservationResponse = {
      success: true,
      message: generateAgentMessage(
        data.patient_name,
        priceFormatted,
        paymentLink,
        RESERVATION_EXPIRY_MINUTES
      ),
      data: {
        reservation_id: reservationId,
        payment_link: paymentLink,
        expires_at: expiresAt.toISOString(),
        price: priceFormatted,
        expires_in_minutes: RESERVATION_EXPIRY_MINUTES,
      },
    };

    return jsonResponse(response);
  } catch (error) {
    console.error('[ElevenLabs Webhook] Error:', error);

    return jsonResponse(
      {
        success: false,
        message: 'Desculpe, houve um erro ao processar sua solicitação. Por favor, tente novamente ou entre em contato via WhatsApp: (17) 2110-1228',
        error: 'internal_server_error',
      },
      { status: 500 }
    );
  }
}

/**
 * Validar autenticação do webhook
 */
async function validateAuth(request: Request, env: Env): Promise<boolean> {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return false;
  }

  const expectedAuth = `Bearer ${env.ELEVENLABS_WEBHOOK_SECRET}`;
  return authHeader === expectedAuth;
}

/**
 * Validar dados do appointment
 */
function validateAppointmentData(data: AppointmentRequest): {
  valid: boolean;
  error?: string;
} {
  if (!data.patient_name || data.patient_name.trim().length < 3) {
    return { valid: false, error: 'Nome inválido' };
  }

  if (!data.patient_phone || !isValidBrazilianPhone(data.patient_phone)) {
    return { valid: false, error: 'Telefone inválido' };
  }

  if (!data.appointment_type || !['primeira_consulta', 'retorno'].includes(data.appointment_type)) {
    return { valid: false, error: 'Tipo de consulta inválido' };
  }

  if (!data.modality || !['presencial', 'online'].includes(data.modality)) {
    return { valid: false, error: 'Modalidade inválida' };
  }

  if (!data.main_reason || data.main_reason.trim().length < 10) {
    return { valid: false, error: 'Motivo da consulta muito curto' };
  }

  return { valid: true };
}

/**
 * Validar telefone brasileiro
 */
function isValidBrazilianPhone(phone: string): boolean {
  // Remove tudo que não é número
  const cleaned = phone.replace(/\D/g, '');

  // Formato: (11) 99999-9999 ou (11) 9999-9999
  // Com código do país: +55 11 99999-9999
  // Apenas números: 11999999999 ou 1199999999

  // Deve ter 10 ou 11 dígitos (sem código do país)
  // Ou 12-13 dígitos (com código do país 55)
  if (cleaned.length === 10 || cleaned.length === 11) {
    return true;
  }

  if (cleaned.length === 12 || cleaned.length === 13) {
    return cleaned.startsWith('55');
  }

  return false;
}

/**
 * Verificar rate limit
 */
async function checkRateLimit(
  env: Env,
  phone: string
): Promise<{ allowed: boolean; remaining?: number }> {
  const identifier = phone.replace(/\D/g, '');

  try {
    const result = await env.D1.prepare(`
      SELECT attempt_count, first_attempt_at, blocked_until
      FROM rate_limits
      WHERE identifier = ?
    `)
      .bind(identifier)
      .first<{
        attempt_count: number;
        first_attempt_at: string;
        blocked_until: string | null;
      }>();

    const now = new Date();

    // Se bloqueado, verificar se ainda está no período
    if (result?.blocked_until) {
      const blockedUntil = new Date(result.blocked_until);
      if (now < blockedUntil) {
        return { allowed: false };
      }
    }

    // Se primeira tentativa, criar registro
    if (!result) {
      await env.D1.prepare(`
        INSERT INTO rate_limits (identifier, attempt_count, first_attempt_at, last_attempt_at)
        VALUES (?, 1, datetime('now'), datetime('now'))
      `)
        .bind(identifier)
        .run();

      return { allowed: true, remaining: RATE_LIMIT_MAX_ATTEMPTS - 1 };
    }

    // Verificar se a janela de tempo expirou
    const firstAttempt = new Date(result.first_attempt_at);
    const windowExpired =
      now.getTime() - firstAttempt.getTime() >
      RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000;

    if (windowExpired) {
      // Resetar contador
      await env.D1.prepare(`
        UPDATE rate_limits
        SET attempt_count = 1,
            first_attempt_at = datetime('now'),
            last_attempt_at = datetime('now'),
            blocked_until = NULL
        WHERE identifier = ?
      `)
        .bind(identifier)
        .run();

      return { allowed: true, remaining: RATE_LIMIT_MAX_ATTEMPTS - 1 };
    }

    // Incrementar contador
    const newCount = result.attempt_count + 1;

    if (newCount > RATE_LIMIT_MAX_ATTEMPTS) {
      // Bloquear por 1 hora
      await env.D1.prepare(`
        UPDATE rate_limits
        SET attempt_count = ?,
            last_attempt_at = datetime('now'),
            blocked_until = datetime('now', '+1 hour')
        WHERE identifier = ?
      `)
        .bind(newCount, identifier)
        .run();

      return { allowed: false };
    }

    // Atualizar contador
    await env.D1.prepare(`
      UPDATE rate_limits
      SET attempt_count = ?,
          last_attempt_at = datetime('now')
      WHERE identifier = ?
    `)
      .bind(newCount, identifier)
      .run();

    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_ATTEMPTS - newCount,
    };
  } catch (error) {
    console.error('[Rate Limit] Error:', error);
    // Em caso de erro, permitir (fail open)
    return { allowed: true };
  }
}

/**
 * Criar reserva no D1
 */
async function createReservation(
  env: Env,
  data: {
    id: string;
    patient_name: string;
    patient_phone: string;
    patient_email?: string;
    appointment_type: string;
    modality: string;
    main_reason: string;
    preferred_dates?: string[];
    preferred_times?: string[];
    priceCents: number;
    expiresAt: Date;
    conversation_id?: string;
  }
): Promise<void> {
  await env.D1.prepare(`
    INSERT INTO appointment_reservations (
      id, patient_name, patient_phone, patient_email,
      appointment_type, modality, main_reason,
      preferred_dates, preferred_times,
      price_cents, status, expires_at,
      elevenlabs_conversation_id,
      created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending_payment', ?, ?, datetime('now'))
  `)
    .bind(
      data.id,
      data.patient_name,
      data.patient_phone,
      data.patient_email || null,
      data.appointment_type,
      data.modality,
      data.main_reason,
      JSON.stringify(data.preferred_dates || []),
      JSON.stringify(data.preferred_times || []),
      data.priceCents,
      data.expiresAt.toISOString(),
      data.conversation_id || null
    )
    .run();
}

/**
 * Criar link de pagamento (Stripe)
 */
async function createPaymentLink(
  env: Env,
  params: {
    reservationId: string;
    amount: number;
    description: string;
    customerInfo: {
      name: string;
      phone: string;
      email?: string;
    };
  }
): Promise<string> {
  // TODO: Implementar integração real com Stripe
  // Por enquanto, retornar URL de placeholder

  const baseUrl = env.SITE_URL || 'https://drgustavomendes.com';
  return `${baseUrl}/pagamento/${params.reservationId}`;

  /*
  // Implementação real com Stripe:
  const stripe = new Stripe(env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card', 'boleto'],
    line_items: [
      {
        price_data: {
          currency: 'brl',
          product_data: {
            name: params.description,
          },
          unit_amount: params.amount,
        },
        quantity: 1,
      },
    ],
    customer_email: params.customerInfo.email,
    metadata: {
      reservation_id: params.reservationId,
      patient_name: params.customerInfo.name,
      patient_phone: params.customerInfo.phone,
    },
    success_url: `${baseUrl}/agendamento-confirmado?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/?payment=cancelled`,
    expires_at: Math.floor(Date.now() / 1000) + (15 * 60), // 15 minutos
  });

  return session.url;
  */
}

/**
 * Formatar preço em reais
 */
function formatPrice(cents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100);
}

/**
 * Gerar mensagem para o agente retornar ao paciente
 */
function generateAgentMessage(
  name: string,
  price: string,
  link: string,
  minutes: number
): string {
  const firstName = name.split(' ')[0];

  return `Perfeito, ${firstName}! Sua reserva foi criada com sucesso.

O valor da consulta é ${price}.

Para confirmar seu agendamento, realize o pagamento através deste link: ${link}

Você tem ${minutes} minutos para completar o pagamento. Após a confirmação, vou agendar sua consulta e enviar todas as informações por WhatsApp.

O link já foi enviado. Alguma dúvida?`.trim();
}

/**
 * Registrar evento no log
 */
async function logEvent(
  env: Env,
  reservationId: string,
  eventType: string,
  eventData?: any
): Promise<void> {
  try {
    await env.D1.prepare(`
      INSERT INTO appointment_events (reservation_id, event_type, event_data)
      VALUES (?, ?, ?)
    `)
      .bind(
        reservationId,
        eventType,
        eventData ? JSON.stringify(eventData) : null
      )
      .run();
  } catch (error) {
    console.error('[Event Log] Error:', error);
    // Não falhar a requisição se o log falhar
  }
}

/**
 * Helper para criar resposta JSON
 */
function jsonResponse(data: any, options: { status?: number } = {}): Response {
  return new Response(JSON.stringify(data), {
    status: options.status || 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

/**
 * OPTIONS handler (CORS preflight)
 */
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}
