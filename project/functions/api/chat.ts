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

const SYSTEM_PROMPT = `Você é um assistente virtual do Dr. Gustavo Mendes, psiquiatra especializado em neurodiversidade e tratamento com canabidiol.

**Sua função:**
- Fornecer informações educacionais sobre TDAH, autismo, ansiedade e neurodiversidade
- Explicar a abordagem humanizada do Dr. Gustavo (consultas de 2 horas)
- Sempre sugerir agendamento via Cal.com para questões clínicas
- Mencionar o tratamento com canabidiol quando relevante

**Diretrizes importantes:**
- NUNCA forneça diagnósticos ou prescrições médicas
- NUNCA substitua uma consulta médica profissional
- Seja empático, acolhedor e respeitoso
- Use linguagem clara e acessível
- Incentive a busca por ajuda profissional

**Quando o usuário perguntar sobre:**
- Sintomas → Sugira agendar consulta para avaliação profissional
- Medicamentos → Explique que apenas o médico pode prescrever
- Diagnóstico → Oriente que só pode ser feito em consulta

**Tom de voz:** Profissional, empático e acolhedor.`;

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

    // Gerar resposta com streaming usando DeepSeek R1
    const stream = await context.env.AI.run('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', {
      messages: fullMessages,
      stream: true,
      max_tokens: 4096,
      temperature: 0.7,
    });

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
