export async function onRequest(context: any) {
  const { request, env } = context;

  try {
    // Pega insights do cache (KV)
    const cachedInsights = await env.KV.get('insights:latest');

    // Pega estatísticas atualizadas do D1
    const stats = await env.DB.prepare(`
      SELECT
        section,
        COUNT(*) as views,
        AVG(scroll_depth) as avg_scroll,
        COUNT(DISTINCT session_id) as unique_sessions,
        ROUND(100.0 * COUNT(CASE WHEN scroll_depth < 50 THEN 1 END) / COUNT(*), 1) as taxa_abandono
      FROM analytics
      WHERE timestamp > datetime('now', '-7 days')
      GROUP BY section
      ORDER BY views DESC
    `).all();

    // Total de eventos
    const total = await env.DB.prepare(`
      SELECT
        COUNT(*) as total_events,
        COUNT(DISTINCT session_id) as total_sessions
      FROM analytics
      WHERE timestamp > datetime('now', '-7 days')
    `).first();

    const response = {
      insights: cachedInsights ? JSON.parse(cachedInsights) : null,
      stats: stats.results,
      summary: {
        total_events: total.total_events,
        total_sessions: total.total_sessions,
        period: 'Últimos 7 dias'
      }
    };

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // 5 minutos
      }
    });
  } catch (error: any) {
    console.error('Insights error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
