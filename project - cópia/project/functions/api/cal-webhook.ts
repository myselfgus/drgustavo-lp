/**
 * Webhook do Cal.com para processar agendamentos
 * Salva no D1 e pode enfileirar email de confirmação
 */

import type { PagesFunction } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
  SITE_CACHE: KVNamespace;
  // EMAIL_QUEUE?: Queue; // Quando configurado
}

interface CalWebhookPayload {
  triggerEvent: 'BOOKING_CREATED' | 'BOOKING_RESCHEDULED' | 'BOOKING_CANCELLED';
  payload: {
    id: number;
    uid: string;
    title: string;
    startTime: string;
    endTime: string;
    attendees: Array<{
      name: string;
      email: string;
      timeZone: string;
    }>;
    metadata: Record<string, any>;
    responses: Record<string, any>;
  };
}

type CalContext = Parameters<PagesFunction<Env>>[0];
type WorkerResponse = import('@cloudflare/workers-types').Response;

const asWorkerResponse = (response: Response): WorkerResponse =>
  response as unknown as WorkerResponse;

const handleCalWebhook = async (
  context: CalContext,
): Promise<WorkerResponse> => {
  // Apenas POST
  if (context.request.method !== 'POST') {
    return asWorkerResponse(new Response('Method not allowed', {
      status: 405,
    }));
  }

  try {
    const webhookData: CalWebhookPayload = await context.request.json();

    console.log('[Cal.com Webhook]', webhookData.triggerEvent, webhookData.payload.uid);

    // Processar apenas agendamentos criados
    if (webhookData.triggerEvent === 'BOOKING_CREATED') {
      const { payload } = webhookData;
      const attendee = payload.attendees[0]; // Primeiro participante

      // Salvar no D1
      await context.env.DB.prepare(`
        INSERT INTO contact_submissions (
          id,
          name,
          email,
          phone,
          message,
          source,
          metadata,
          created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        crypto.randomUUID(),
        attendee.name,
        attendee.email,
        payload.responses?.phone || null,
        `Consulta agendada: ${payload.title}`,
        'cal',
        JSON.stringify({
          cal_event_id: payload.uid,
          cal_booking_id: payload.id,
          start_time: payload.startTime,
          end_time: payload.endTime,
          timezone: attendee.timeZone,
          responses: payload.responses
        }),
        Math.floor(Date.now() / 1000)
      ).run();

      // Enfileirar email (quando Queue estiver configurado)
      /*
      if (context.env.EMAIL_QUEUE) {
        await context.env.EMAIL_QUEUE.send({
          to: attendee.email,
          template: 'booking_confirmation',
          data: {
            name: attendee.name,
            date: new Date(payload.startTime).toLocaleDateString('pt-BR'),
            time: new Date(payload.startTime).toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit'
            })
          }
        });
      }
      */

      return asWorkerResponse(new Response(JSON.stringify({
        success: true,
        message: 'Agendamento processado com sucesso'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));
    }

    // Outros eventos (rescheduled, cancelled)
    return asWorkerResponse(new Response(JSON.stringify({
      success: true,
      message: `Evento ${webhookData.triggerEvent} recebido`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }));

  } catch (error) {
    console.error('[Cal Webhook Error]', error);
    return asWorkerResponse(new Response(JSON.stringify({
      error: 'Erro ao processar webhook'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    }));
  }
};

export const onRequest: PagesFunction<Env> = (context) =>
  handleCalWebhook(context);
