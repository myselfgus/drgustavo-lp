// Middleware para Cloudflare Workers
export async function onRequest(context: any) {
  return context.next();
}
