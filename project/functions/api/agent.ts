// Sistema Agêntico - LLM decide tudo sozinho
export async function onRequest(context: any) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { event } = await request.json();

    // Define as ferramentas que o LLM pode usar
    const tools = [
      {
        name: "query_analytics",
        description: "Executa queries SQL no banco de dados de analytics para obter insights sobre comportamento dos visitantes",
        parameters: {
          type: "object",
          properties: {
            sql: {
              type: "string",
              description: "Query SQL para executar no D1. Tabela disponível: analytics (columns: id, section, timestamp, scroll_depth, session_id, user_agent, referrer)"
            }
          },
          required: ["sql"]
        }
      },
      {
        name: "save_insight",
        description: "Salva um insight importante no cache KV para uso futuro",
        parameters: {
          type: "object",
          properties: {
            key: {
              type: "string",
              description: "Chave para salvar no KV"
            },
            value: {
              type: "string",
              description: "Valor JSON para salvar"
            },
            ttl: {
              type: "number",
              description: "Tempo de vida em segundos (padrão: 604800 = 7 dias)"
            }
          },
          required: ["key", "value"]
        }
      },
      {
        name: "analyze_conversion",
        description: "Analisa padrões de conversão e sugere otimizações",
        parameters: {
          type: "object",
          properties: {
            focus: {
              type: "string",
              description: "Foco da análise: 'abandono', 'engajamento', 'conversao', 'geral'"
            }
          }
        }
      }
    ];

    // Primeira chamada ao LLM - ele decide o que fazer
    let aiResponse = await env.AI.run('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', {
      messages: [
        {
          role: 'system',
          content: `Você é um agente autônomo especialista em otimização de conversão para sites médicos.

Seu objetivo: Analisar dados comportamentais e sugerir melhorias para aumentar conversão.

Ferramentas disponíveis: query_analytics, save_insight, analyze_conversion

Quando receber um evento:
1. Decida qual ferramenta usar
2. Execute análises necessárias
3. Identifique problemas e oportunidades
4. Sugira ações específicas e práticas

Seja direto, objetivo e baseado em dados.`
        },
        {
          role: 'user',
          content: `Novo evento recebido: ${JSON.stringify(event)}

Analise este evento e decida autonomamente:
1. Que dados você precisa consultar?
2. Que análises fazer?
3. Que insights gerar?
4. Que ações sugerir?

Use as ferramentas disponíveis.`
        }
      ],
      tools,
      max_tokens: 500,
      temperature: 0.7
    });

    // Processa as tool calls do LLM
    const results: any[] = [];

    if (aiResponse.tool_calls && aiResponse.tool_calls.length > 0) {
      for (const toolCall of aiResponse.tool_calls) {
        const { name, arguments: args } = toolCall;

        let toolResult: any;

        // Executa a ferramenta que o LLM pediu
        switch (name) {
          case 'query_analytics':
            const queryResult = await env.DB.prepare(args.sql).all();
            toolResult = { success: true, data: queryResult.results };
            break;

          case 'save_insight':
            const ttl = args.ttl || 604800;
            await env.KV.put(args.key, args.value, { expirationTtl: ttl });
            toolResult = { success: true, message: 'Insight salvo com sucesso' };
            break;

          case 'analyze_conversion':
            // Query padrão de conversão
            const conversionData = await env.DB.prepare(`
              SELECT
                section,
                COUNT(*) as total,
                AVG(scroll_depth) as avg_scroll,
                COUNT(DISTINCT session_id) as unique_users
              FROM analytics
              WHERE timestamp > datetime('now', '-7 days')
              GROUP BY section
            `).all();
            toolResult = { success: true, data: conversionData.results };
            break;

          default:
            toolResult = { success: false, error: 'Ferramenta desconhecida' };
        }

        results.push({ tool: name, result: toolResult });
      }

      // Segunda chamada ao LLM - ele analisa os resultados das ferramentas
      const finalResponse = await env.AI.run('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', {
        messages: [
          {
            role: 'system',
            content: 'Você é um analista de conversão. Baseado nos dados obtidos, forneça insights práticos e ações específicas.'
          },
          {
            role: 'user',
            content: `Resultados das ferramentas que você pediu:
${JSON.stringify(results, null, 2)}

Agora forneça:
1. Principal insight descoberto
2. Problema identificado (se houver)
3. Ação específica recomendada
4. Impacto esperado

Responda em JSON:
{
  "insight": "...",
  "problema": "...",
  "acao": "...",
  "impacto": "..."
}`
          }
        ],
        max_tokens: 400,
        temperature: 0.7
      });

      // Salva a análise final automaticamente
      await env.KV.put('agent:latest_analysis', JSON.stringify({
        timestamp: new Date().toISOString(),
        event,
        tool_calls: results,
        analysis: finalResponse.response
      }), { expirationTtl: 604800 });

      return new Response(JSON.stringify({
        status: 'success',
        analysis: finalResponse.response,
        tools_used: results.map(r => r.tool)
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      status: 'no_action',
      message: 'LLM decidiu não executar ferramentas'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('Agent error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
