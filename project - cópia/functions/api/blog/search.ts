/**
 * Busca semântica no blog usando Workers AI + Vectorize
 *
 * NOTA: Vectorize precisa ser configurado via CLI primeiro:
 * wrangler vectorize create drgustavomendes-blog-search --dimensions=768 --metric=cosine
 */

import type { PagesFunction } from '@cloudflare/workers-types';

interface Env {
  AI: Ai;
  DB: D1Database;
  SITE_CACHE: KVNamespace;
  // BLOG_INDEX?: VectorizeIndex; // Quando Vectorize estiver configurado
}

interface SearchRequest {
  query: string;
  limit?: number;
}

type SearchContext = Parameters<PagesFunction<Env>>[0];
type WorkerResponse = import('@cloudflare/workers-types').Response;

const asWorkerResponse = (response: Response): WorkerResponse =>
  response as unknown as WorkerResponse;

const handleSearchRequest = async (
  context: SearchContext,
): Promise<WorkerResponse> => {
  if (context.request.method !== 'POST') {
    return asWorkerResponse(new Response('Method not allowed', {
      status: 405,
    }));
  }

  try {
    const { query, limit = 5 }: SearchRequest = await context.request.json();

    if (!query || query.trim().length < 2) {
      return asWorkerResponse(new Response(
        JSON.stringify({ error: 'Query muito curta' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      ));
    }

    // Verificar cache primeiro
    const cacheKey = `search:${query.toLowerCase()}`;
    const cached = await context.env.SITE_CACHE.get(cacheKey, 'json');

    if (cached) {
      return asWorkerResponse(new Response(JSON.stringify(cached), {
        headers: {
          'Content-Type': 'application/json',
          'X-Cache': 'HIT'
        }
      }));
    }

    // ===== OPÇÃO 1: Busca SQL tradicional (fallback) =====
    const sqlResults = await context.env.DB.prepare(`
      SELECT id, title, slug, description, published_at
      FROM blog_posts
      WHERE draft = 0
        AND (
          title LIKE ? OR
          description LIKE ? OR
          content LIKE ?
        )
      ORDER BY published_at DESC
      LIMIT ?
    `).bind(
      `%${query}%`,
      `%${query}%`,
      `%${query}%`,
      limit
    ).all();

    // ===== OPÇÃO 2: Busca semântica com Vectorize (quando configurado) =====
    /*
    if (context.env.BLOG_INDEX) {
      // Gerar embedding da query
      const embedding = await context.env.AI.run('@cf/baai/bge-base-en-v1.5', {
        text: query
      });

      // Buscar no Vectorize
      const vectorResults = await context.env.BLOG_INDEX.query(
        embedding.data[0],
        { topK: limit }
      );

      // Buscar posts completos no D1
      const postIds = vectorResults.matches.map(m => m.id);
      const posts = await context.env.DB.prepare(`
        SELECT id, title, slug, description, published_at
        FROM blog_posts
        WHERE id IN (${postIds.map(() => '?').join(',')})
      `).bind(...postIds).all();

      // Ordenar por score do Vectorize
      const orderedPosts = postIds
        .map(id => posts.results.find(p => p.id === id))
        .filter(Boolean);

      const response = {
        query,
        results: orderedPosts,
        method: 'vectorize'
      };

      // Cache por 1 hora
      await context.env.SITE_CACHE.put(
        cacheKey,
        JSON.stringify(response),
        { expirationTtl: 3600 }
      );

      return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json', 'X-Cache': 'MISS' }
      });
    }
    */

    // Resposta com busca SQL
    const response = {
      query,
      results: sqlResults.results,
      method: 'sql'
    };

    // Cache por 1 hora
    await context.env.SITE_CACHE.put(
      cacheKey,
      JSON.stringify(response),
      { expirationTtl: 3600 }
    );

    // Salvar query para analytics
    context.waitUntil(
      context.env.DB.prepare(`
        INSERT INTO search_queries (id, query, results_count, created_at)
        VALUES (?, ?, ?, ?)
      `).bind(
        crypto.randomUUID(),
        query,
        sqlResults.results.length,
        Math.floor(Date.now() / 1000)
      ).run()
    );

    return asWorkerResponse(new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
        'X-Cache': 'MISS'
      }
    }));

  } catch (error) {
    console.error('[Search Error]', error);
    return asWorkerResponse(new Response(
      JSON.stringify({ error: 'Erro ao buscar' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    ));
  }
};

export const onRequest: PagesFunction<Env> = (context) =>
  handleSearchRequest(context);
