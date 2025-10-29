export async function onRequest(context: any) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const data = await request.json();
    const { section, timestamp, scroll_depth, session_id } = data;

    const userAgent = request.headers.get('User-Agent') || '';
    const referrer = request.headers.get('Referer') || '';

    // Salva no D1
    await env.DB.prepare(`
      INSERT INTO analytics (section, timestamp, scroll_depth, session_id, user_agent, referrer)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(section, timestamp, scroll_depth, session_id, userAgent, referrer).run();

    // Verifica se chegou a 100 eventos (análise com IA)
    const count = await env.DB.prepare('SELECT COUNT(*) as total FROM analytics').first();

    if (count.total % 100 === 0) {
      // Pega estatísticas dos últimos 7 dias
      const stats = await env.DB.prepare(`
        SELECT
          section,
          COUNT(*) as views,
          AVG(scroll_depth) as avg_scroll,
          COUNT(DISTINCT session_id) as unique_sessions
        FROM analytics
        WHERE timestamp > datetime('now', '-7 days')
        GROUP BY section
        ORDER BY views DESC
      `).all();

      // Análise com DeepSeek via AI Gateway
      const aiResponse = await env.AI.run('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', {
        messages: [
          {
            role: 'system',
            content: 'Você é um analista de conversão para sites médicos. Seja direto, prático e objetivo. Responda sempre em JSON válido.'
          },
          {
            role: 'user',
            content: `Analise estes dados de comportamento em um site de psiquiatria:

${JSON.stringify(stats.results, null, 2)}

Identifique:
1. Qual seção tem pior desempenho (menor scroll_depth ou menos views)?
2. Por que isso pode estar acontecendo? (hipótese baseada nos dados)
3. Ação específica e prática para melhorar conversão.

Responda APENAS em formato JSON:
{
  "problema": "descrição curta",
  "causa_provavel": "hipótese",
  "acao_sugerida": "ação específica",
  "secao_problema": "nome da seção"
}`
          }
        ],
        max_tokens: 300,
        temperature: 0.7
      });

      // Salva insight no KV (cache de 7 dias)
      await env.KV.put('insights:latest', JSON.stringify({
        timestamp: new Date().toISOString(),
        total_events: count.total,
        ai_analysis: aiResponse.response,
        stats: stats.results
      }), { expirationTtl: 604800 }); // 7 dias
    }

    return new Response('ok', { status: 200 });
  } catch (error: any) {
    console.error('Track error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
