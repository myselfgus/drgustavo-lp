/// <reference types="astro/client" />

// Cloudflare Runtime Types
type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    // Adicione locals customizados aqui se necessário
  }
}

// Cloudflare Bindings Environment
interface Env {
  // D1 Database
  DB: D1Database;

  // R2 Storage
  R2_ASSETS: R2Bucket;

  // KV Storage
  SITE_CACHE: KVNamespace;

  // Workers AI
  AI: Ai;

  // Vectorize (quando configurado)
  // BLOG_INDEX: VectorizeIndex;

  // Analytics Engine (quando configurado)
  // ANALYTICS: AnalyticsEngineDataset;

  // Queues (quando configurado)
  // EMAIL_QUEUE: Queue;

  // Durable Objects (quando configurado)
  // CHAT_SESSIONS: DurableObjectNamespace;

  // Browser Rendering (quando configurado)
  // BROWSER: Fetcher;
}

// Extend Astro.locals with Cloudflare runtime
declare namespace Astro {
  interface Locals extends Runtime {}
}

// Content Collections Types
declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}
