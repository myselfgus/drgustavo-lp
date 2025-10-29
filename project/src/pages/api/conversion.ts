// Conversion tracking agêntico - LLM decide tudo
// Via AI Gateway "voither" + DeepSeek R1
import type { APIRoute } from 'astro';

interface AIResponse {
  response?: string;
  tool_calls?: Array<{
    name: string;
    arguments: any;
  }>;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const { env } = locals.runtime;

  try {
    const body = await request.json() as { event_type: string; event_data: any };
    const { event_type, event_data } = body;

    // Headers úteis
    const ip = request.headers.get('CF-Connecting-IP');
    const userAgent = request.headers.get('User-Agent');
    const referrer = request.headers.get('Referer');

    // Ferramentas que o LLM pode usar
    const tools = [
      {
        name: "save_lead",
        description: "Salva lead no D1 database (contact_submissions). Use quando detectar intenção de conversão real.",
        parameters: {
          type: "object",
          properties: {
            name: { type: "string", description: "Nome do lead (pode ser 'Anônimo' se não souber)" },
            email: { type: "string", description: "Email se disponível" },
            phone: { type: "string", description: "Telefone se disponível" },
            source: { type: "string", description: "Origem: 'cal', 'whatsapp', 'hero', 'header'" },
            message: { type: "string", description: "Mensagem ou contexto" },
            metadata: { type: "string", description: "JSON string com dados extras" }
          },
          required: ["source"]
        }
      },
      {
        name: "score_lead_quality",
        description: "Analisa qualidade do lead baseado em comportamento e contexto. Retorna score 0-10.",
        parameters: {
          type: "object",
          properties: {
            event_type: { type: "string" },
            user_agent: { type: "string" },
            referrer: { type: "string" },
            page_context: { type: "string", description: "Onde estava no site" }
          },
          required: ["event_type"]
        }
      },
      {
        name: "send_to_meta",
        description: "Envia conversão para Meta Conversions API (quando token disponível). Só use para leads de ALTA qualidade.",
        parameters: {
          type: "object",
          properties: {
            event_name: {
              type: "string",
              enum: ["Lead", "Contact", "Schedule", "ViewContent"],
              description: "Tipo de evento Meta"
            },
            value: { type: "number", description: "Valor estimado em BRL (ex: 700 para consulta)" },
            lead_score: { type: "number", description: "Score de qualidade 0-10" }
          },
          required: ["event_name"]
        }
      },
      {
        name: "query_analytics",
        description: "Consulta histórico de analytics para contexto adicional",
        parameters: {
          type: "object",
          properties: {
            session_id: { type: "string", description: "ID da sessão do usuário" },
            lookback_hours: { type: "number", description: "Horas para olhar para trás (default: 24)" }
          }
        }
      }
    ];

    // LLM decide autonomamente via AI Gateway
    const gatewayResponse = await fetch(
      'https://gateway.ai.cloudflare.com/v1/1a481f7cdb7027c30174a692c89cbda1/voither/workers-ai/@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.CF_API_KEY as string}`,
          'cf-aig-authorization': env.CF_AIG_AUTHORIZATION as string,
          'Content-Type': 'application/json'
        } as HeadersInit,
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `Você é um agente autônomo de conversão para um site de psiquiatria.

OBJETIVO: Processar eventos de conversão e tomar decisões inteligentes.

REGRAS:
1. Analise a QUALIDADE do lead (score_lead_quality) antes de salvar
2. Só salve leads REAIS (score >= 5) com save_lead
3. Só envie ao Meta leads de ALTA qualidade (score >= 7) com send_to_meta
4. Use query_analytics para obter contexto se precisar
5. Seja criterioso - não polua o banco com clicks acidentais

VALORES DE CONVERSÃO:
- Agendamento (Schedule): R$ 800
- Contato WhatsApp (Contact): R$ 400
- Lead genérico: R$ 300

Decida autonomamente as ações necessárias.`
            },
            {
              role: 'user',
              content: `Novo evento de conversão:

Tipo: ${event_type}
Dados: ${JSON.stringify(event_data)}
IP: ${ip}
User-Agent: ${userAgent}
Referrer: ${referrer}

Analise este evento e decida:
1. É um lead real ou click acidental?
2. Qual a qualidade estimada (0-10)?
3. Devo salvar no banco?
4. Devo enviar ao Meta?
5. Que valor atribuir?

Execute as ferramentas necessárias.`
            }
          ],
          tools,
          max_tokens: 800,
          temperature: 0.6
        })
      }
    );

    const aiResponse = await gatewayResponse.json() as AIResponse;

    // Processa tool calls do LLM
    const results: any[] = [];

    if (aiResponse.tool_calls && aiResponse.tool_calls.length > 0) {
      for (const toolCall of aiResponse.tool_calls) {
        const { name, arguments: args } = toolCall;
        let toolResult: any;

        switch (name) {
          case 'save_lead':
            // Salva lead no D1
            const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
            const metadata = args.metadata || JSON.stringify({
              ip,
              user_agent: userAgent,
              referrer,
              event_type,
              event_data
            });

            await env.DB.prepare(`
              INSERT INTO contact_submissions
              (id, name, email, phone, message, source, metadata, created_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(
              leadId,
              args.name || 'Anônimo',
              args.email || null,
              args.phone || null,
              args.message || `Evento: ${event_type}`,
              args.source,
              metadata,
              Math.floor(Date.now() / 1000)
            ).run();

            toolResult = {
              success: true,
              lead_id: leadId,
              message: 'Lead salvo com sucesso'
            };
            break;

          case 'score_lead_quality':
            // LLM analisa qualidade
            const scoreResponse = await env.AI.run('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', {
              messages: [
                {
                  role: 'system',
                  content: 'Analise a qualidade deste lead. Retorne APENAS um número de 0-10.'
                },
                {
                  role: 'user',
                  content: `Evento: ${args.event_type}
User-Agent: ${args.user_agent}
Referrer: ${args.referrer}
Contexto: ${args.page_context || 'Desconhecido'}

Score 0-10 (apenas número):`
                }
              ],
              max_tokens: 10,
              temperature: 0.3
            });

            const score = parseFloat((scoreResponse as any).response?.trim() || '5') || 5;
            toolResult = { success: true, score: Math.min(10, Math.max(0, score)) };
            break;

          case 'send_to_meta':
            // Preparado para Meta Conversions API
            const metaToken = env.META_ACCESS_TOKEN;
            const pixelId = env.META_PIXEL_ID || '1322449488789217';

            if (metaToken) {
              // Token disponível - envia ao Meta
              const metaPayload = {
                data: [{
                  event_name: args.event_name,
                  event_time: Math.floor(Date.now() / 1000),
                  action_source: 'website',
                  user_data: {
                    client_ip_address: ip,
                    client_user_agent: userAgent
                  },
                  custom_data: {
                    currency: 'BRL',
                    value: args.value || 500,
                    lead_quality_score: args.lead_score || 7
                  }
                }],
                access_token: metaToken
              };

              const metaResponse = await fetch(
                `https://graph.facebook.com/v18.0/${pixelId}/events`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(metaPayload)
                }
              );

              const metaResult = await metaResponse.json();
              toolResult = {
                success: true,
                meta_response: metaResult,
                message: 'Enviado ao Meta Conversions API'
              };
            } else {
              // Sem token - salva para envio futuro
              toolResult = {
                success: false,
                message: 'META_ACCESS_TOKEN não configurado. Lead salvo para envio futuro.',
                fallback: 'pixel_only'
              };
            }
            break;

          case 'query_analytics':
            const lookback = args.lookback_hours || 24;
            const analyticsData = await env.DB.prepare(`
              SELECT section, timestamp, scroll_depth
              FROM analytics
              WHERE session_id = ?
              AND timestamp > datetime('now', '-${lookback} hours')
              ORDER BY timestamp DESC
              LIMIT 50
            `).bind(args.session_id).all();

            toolResult = {
              success: true,
              data: analyticsData.results
            };
            break;

          default:
            toolResult = { success: false, error: 'Ferramenta desconhecida' };
        }

        results.push({ tool: name, arguments: args, result: toolResult });
      }

      // Salva decisão do agente no KV (analytics)
      await env.SITE_CACHE.put(`conversion:${Date.now()}`, JSON.stringify({
        timestamp: new Date().toISOString(),
        event_type,
        ip,
        agent_decision: aiResponse.response,
        tools_executed: results
      }), { expirationTtl: 2592000 }); // 30 dias

      return new Response(JSON.stringify({
        status: 'processed',
        agent_reasoning: aiResponse.response,
        actions_taken: results.map(r => ({
          action: r.tool,
          success: r.result.success
        }))
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // LLM decidiu não agir
    return new Response(JSON.stringify({
      status: 'no_action',
      reason: aiResponse.response || 'LLM decidiu ignorar este evento'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    console.error('Conversion error:', error);
    return new Response(JSON.stringify({
      error: error.message,
      stack: error.stack
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const prerender = false;
