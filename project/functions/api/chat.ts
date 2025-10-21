/**
 * Chatbot com Workers AI (Llama-3-8B)
 * Streaming response via Server-Sent Events
 */

import type { PagesFunction } from '@cloudflare/workers-types';

interface Env {
  AI: Ai;
  DB: D1Database;
  SITE_CACHE: KVNamespace;
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  sessionId?: string;
}

const SYSTEM_PROMPT = `Você é um assistente de navegação do site do Dr. Gustavo Mendes e Silva, psiquiatra autista em São José do Rio Preto.

**INFORMAÇÕES DO SITE:**

**O Método:**
- Consultas de 2 horas (primeira consulta: R$ 900, retornos: R$ 500)
- Você leva pra casa: narrativa fenomenológica da sua história em texto literário, manual personalizado de medicações, mapa de alta planejada
- Acompanhamento intensivo: retornos quinzenais + contato semanal nos primeiros meses
- Psicoterapia ACT: 12 sessões por R$ 3.000 (prazo definido, não prolonga terapias)
- **Objetivo:** Alta planejada - "Serei o último psiquiatra que você precisará"

**Valores (não condições):**
- Autonomia > Dependência (metas concretas de alta desde primeira consulta)
- Compreensão > Rótulos (narrativa fenomenológica gera insights acelerados)
- Presença > Automação (IA cuida das anotações, médico 100% presente)
- Plenitude > Sintomas (ACT focada em valores, sonhos, paixões)

**Diferenciais únicos:**
- Dr. Gustavo é autista - entende padrões cognitivos diferentes por experiência vivida
- Ex-CAPS - criou modelo para libertar pacientes da dependência do sistema
- Atendimento domiciliar para crianças neurodivergentes (binômio criança-cuidador)
- Valores sociais: 50% desconto vítimas violência, 20% profissionais saúde

**Onde encontrar:**
- Narrativa fenomenológica: /narrativa-fenomenologica
- Currículo: /curriculo
- Blog: /blog
- Agendar: botão "Agendar consulta" (abre Cal.com)

**SUA FUNÇÃO:**
- Ajudar visitantes a navegar o site
- Responder dúvidas sobre o método, valores e diferenciais
- Explicar conceitos (narrativa fenomenológica, alta planejada, ACT)
- Direcionar para agendamento quando apropriado

**NUNCA:**
- Fornecer diagnósticos ou prescrições
- Substituir consulta médica
- Promover como "melhor" ou "único" (seja factual)

**Tom:** Direto, honesto, sem marketing exagerado. Foco em informar, não vender.`;

type ChatContext = Parameters<PagesFunction<Env>>[0];
type WorkerResponse = import('@cloudflare/workers-types').Response;

const asWorkerResponse = (response: Response): WorkerResponse =>
  response as unknown as WorkerResponse;

const handleChatRequest = async (
  context: ChatContext,
): Promise<WorkerResponse> => {
  // Apenas POST
  if (context.request.method !== 'POST') {
    return asWorkerResponse(new Response('Method not allowed', {
      status: 405,
    }));
  }

  try {
    const { messages, sessionId }: ChatRequest = await context.request.json();

    if (!messages || !Array.isArray(messages)) {
      return asWorkerResponse(new Response('Invalid messages format', {
        status: 400,
      }));
    }

    // Adicionar system prompt
    const fullMessages: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    // Gerar resposta com streaming usando Llama 3.1 8B (mais confiável)
    // Fallback: se falhar, tenta modelo menor
    let stream;
    const models = [
      '@cf/meta/llama-3.1-8b-instruct',      // Principal
      '@cf/meta/llama-3-8b-instruct',        // Fallback 1
      '@cf/mistral/mistral-7b-instruct-v0.1' // Fallback 2
    ];

    for (const model of models) {
      try {
        stream = await context.env.AI.run(model as any, {
          messages: fullMessages,
          stream: true,
          max_tokens: 2048,
          temperature: 0.7,
        });
        break; // Se funcionou, sai do loop
      } catch (error) {
        console.warn(`Model ${model} failed, trying next...`);
        if (model === models[models.length - 1]) {
          // Último modelo também falhou
          throw error;
        }
      }
    }

    if (!stream) {
      throw new Error('All AI models failed');
    }

    // Salvar conversa no D1 (assíncrono, não bloqueia response)
    if (sessionId) {
      context.waitUntil(
        saveConversation(
          context.env.DB,
          sessionId,
          messages[messages.length - 1].content,
          stream
        )
      );
    }

    // Retornar stream
    return asWorkerResponse(new Response(stream as ReadableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    }));
  } catch (error) {
    console.error('Chat error:', error);
    return asWorkerResponse(new Response(
      JSON.stringify({
        error: 'Erro ao processar mensagem. Tente novamente.'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    ));
  }
};

export const onRequest: PagesFunction<Env> = (context) =>
  handleChatRequest(context);

// Salvar conversa no D1 (background task)
async function saveConversation(
  db: D1Database,
  sessionId: string,
  userMessage: string,
  stream: ReadableStream
): Promise<void> {
  try {
    // Coletar resposta completa do stream
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let assistantResponse = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      assistantResponse += decoder.decode(value, { stream: true });
    }

    // Salvar no D1
    await db.prepare(`
      INSERT INTO chat_sessions (id, session_id, user_message, assistant_response, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      crypto.randomUUID(),
      sessionId,
      userMessage,
      assistantResponse,
      Math.floor(Date.now() / 1000)
    ).run();
  } catch (error) {
    console.error('Failed to save conversation:', error);
  }
}
