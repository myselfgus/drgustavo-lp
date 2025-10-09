# STACK TÉCNICA - SITE DR. GUSTAVO MENDES

## INFRAESTRUTURA BASE

### Cloudflare Ecosystem

**Plataforma principal:** Cloudflare Pages + Workers
- Deploy automático via Git
- Edge computing (baixa latência global)
- SSL/HTTPS automático
- Cache inteligente
- Analytics incluído

**Por que Cloudflare:**
- ✅ Performance excepcional (edge)
- ✅ Custo zero ou muito baixo
- ✅ Workers AI disponível
- ✅ Integração nativa com todos os serviços
- ✅ Escalabilidade automática
- ✅ DDoS protection included

---

## FRAMEWORK E BUILD

### Opção A: Astro (RECOMENDADO)

**Por que Astro:**
- ✅ Perfeito para sites de conteúdo
- ✅ Zero JS por padrão (performance)
- ✅ SSG + SSR híbrido
- ✅ Funciona perfeitamente com Cloudflare Workers
- ✅ Content Collections (blog built-in)
- ✅ MDX support nativo
- ✅ Componentes de qualquer framework (React, Vue, etc)
- ✅ Otimização de imagens automática
- ✅ Sintaxe simples e produtiva

**Setup:**
```bash
npm create astro@latest drgustavomendes-site
cd drgustavomendes-site
npm install
```

**Configuração Cloudflare:**
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'hybrid', // SSG + SSR onde necessário
  adapter: cloudflare({
    mode: 'directory',
  }),
  vite: {
    ssr: {
      external: ['node:buffer'],
    },
  },
});
```

### Opção B: Next.js 15 (Alternativa)

**Por que Next.js:**
- ✅ Ecossistema maduro
- ✅ App Router moderno
- ✅ React Server Components
- ✅ Funciona com Cloudflare (com ajustes)

**Contras para este projeto:**
- ❌ Mais pesado que Astro
- ❌ Mais JS no cliente
- ❌ Menos otimizado para Workers

**Recomendação:** Usar Astro para este projeto específico

---

## ESTRUTURA DE ARQUIVOS (ASTRO)

```
drgustavomendes-site/
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Manifesto.astro
│   │   ├── ParaQuem.astro
│   │   ├── Metodo.astro
│   │   ├── Credenciais.astro
│   │   ├── Contato.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   └── CalEmbed.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── PageLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro             # Home (6 seções)
│   │   ├── blog/
│   │   │   ├── index.astro         # Blog index
│   │   │   └── [slug].astro        # Artigo individual
│   │   ├── curriculo.astro
│   │   ├── publicacoes.astro
│   │   └── recursos.astro          # Opcional
│   │
│   ├── content/
│   │   ├── config.ts               # Content Collections config
│   │   └── blog/
│   │       ├── artigo-1.md
│   │       ├── artigo-2.md
│   │       └── artigo-3.md
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── animations.css
│   │   └── variables.css
│   │
│   ├── lib/
│   │   ├── cal.ts                  # Cal.com integration
│   │   └── utils.ts
│   │
│   └── env.d.ts
│
├── public/
│   ├── images/
│   │   ├── gustavo-profile.jpg
│   │   └── blog/
│   ├── pdfs/
│   │   └── curriculo.pdf
│   └── favicon.svg
│
├── functions/                       # Cloudflare Workers
│   ├── api/
│   │   └── chat.ts                 # Workers AI chatbot
│   └── _middleware.ts
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── wrangler.toml                   # Cloudflare config
└── README.md
```

---

## DEPENDÊNCIAS (package.json)

```json
{
  "name": "drgustavomendes-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "deploy": "wrangler pages deploy dist"
  },
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/cloudflare": "^10.0.0",
    "@astrojs/mdx": "^2.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "@calcom/embed-react": "^1.4.0"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.0.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0",
    "wrangler": "^3.0.0"
  }
}
```

---

## CLOUDFLARE SERVICES

### Cloudflare Pages

**Função:** Hospedagem principal do site
**Setup:**
1. Conectar repo GitHub
2. Build command: `npm run build`
3. Build output: `dist/`
4. Auto-deploy em cada commit

**Configuração:**
```toml
# wrangler.toml
name = "drgustavomendes"
compatibility_date = "2024-01-01"

[site]
bucket = "./dist"

[[pages_build_output_dir]]
dir = "./dist"
```

### Cloudflare Workers

**Uso no projeto:**
- Workers AI para chatbot/análise
- API routes dinâmicas
- Middleware para analytics

**Exemplo - Chatbot com Workers AI:**
```typescript
// functions/api/chat.ts
export async function onRequest(context: EventContext<Env, any, any>) {
  const { request, env } = context;
  
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  
  const { message } = await request.json();
  
  // Workers AI - Llama modelo
  const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
    messages: [
      { 
        role: 'system', 
        content: 'Você é um assistente do Dr. Gustavo Mendes, psiquiatra. Responda perguntas sobre saúde mental de forma empática e profissional.' 
      },
      { role: 'user', content: message }
    ],
  });
  
  return Response.json(response);
}
```

### Cloudflare D1 (Database)

**Uso no projeto:**
- Blog posts (alternativa a MDX files)
- Depoimentos
- Analytics customizado

**Setup:**
```bash
wrangler d1 create drgustavomendes-db
```

**Schema exemplo:**
```sql
-- Blog posts
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Depoimentos
CREATE TABLE testimonials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  initials TEXT NOT NULL,
  content TEXT NOT NULL,
  approved BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Cloudflare R2 (Storage)

**Uso no projeto:**
- PDFs (currículo, recursos)
- Imagens de alta qualidade
- Arquivos de publicações

**Setup:**
```bash
wrangler r2 bucket create drgustavomendes-assets
```

**Integração:**
```typescript
// Upload PDF para R2
const upload = await env.BUCKET.put('curriculo.pdf', pdfBuffer, {
  httpMetadata: {
    contentType: 'application/pdf',
  },
});
```

### Cloudflare KV

**Uso no projeto:**
- Cache de artigos do blog
- Configurações dinâmicas
- Feature flags

**Setup:**
```bash
wrangler kv:namespace create SITE_CACHE
```

### Workers AI

**Modelos disponíveis para o projeto:**

**1. @cf/meta/llama-3-8b-instruct**
- Chatbot de dúvidas sobre saúde mental
- Triagem de questões comuns
- Não substitui consulta médica

**2. @cf/mistral/mistral-7b-instruct**
- Análise de sentimento em mensagens
- Classificação de urgência
- Sugestão de recursos relevantes

**3. @cf/huggingface/distilbert-sst-2-int8**
- Análise de sentimento rápida
- Feedback em formulários

**Exemplo - Chatbot integrado:**
```typescript
// src/components/ChatWidget.astro
---
// Componente client-side
---
<div id="chat-widget">
  <button id="chat-toggle">💬 Dúvidas?</button>
  <div id="chat-box" hidden>
    <div id="messages"></div>
    <input type="text" id="chat-input" placeholder="Digite sua pergunta..." />
  </div>
</div>

<script>
  const chatInput = document.getElementById('chat-input');
  const messagesDiv = document.getElementById('messages');
  
  chatInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
      const message = chatInput.value;
      
      // Adiciona mensagem do usuário
      messagesDiv.innerHTML += `<p><strong>Você:</strong> ${message}</p>`;
      
      // Chama Workers AI
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      
      const data = await response.json();
      
      // Adiciona resposta
      messagesDiv.innerHTML += `<p><strong>Assistente:</strong> ${data.response}</p>`;
      
      chatInput.value = '';
    }
  });
</script>
```

---

## SEO - CONFIGURAÇÃO COMPLETA

### Astro SEO Component

```astro
---
// src/components/SEO.astro
export interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

const {
  title,
  description,
  canonical = Astro.url.href,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  noindex = false,
} = Astro.props;

const siteName = 'Dr. Gustavo Mendes - Psiquiatria';
const fullTitle = title.includes('Dr. Gustavo') ? title : `${title} - ${siteName}`;
---

<!-- Primary Meta Tags -->
<title>{fullTitle}</title>
<meta name="title" content={fullTitle} />
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />

<!-- Robots -->
{noindex && <meta name="robots" content="noindex, nofollow" />}
{!noindex && <meta name="robots" content="index, follow" />}

<!-- Open Graph / Facebook -->
<meta property="og:type" content={ogType} />
<meta property="og:url" content={canonical} />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(ogImage, Astro.url).href} />
<meta property="og:site_name" content={siteName} />
<meta property="og:locale" content="pt_BR" />

{publishedTime && <meta property="article:published_time" content={publishedTime} />}
{modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content={canonical} />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={new URL(ogImage, Astro.url).href} />

<!-- Additional -->
<meta name="author" content="Dr. Gustavo Mendes e Silva" />
<meta name="language" content="Portuguese" />
<meta name="geo.region" content="BR-SP" />
<meta name="geo.placename" content="São José do Rio Preto" />
```

### Structured Data (JSON-LD)

```astro
---
// src/components/StructuredData.astro
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://drgustavomendes.com/#medicalbusiness",
      "name": "Dr. Gustavo Mendes e Silva - Psiquiatria",
      "url": "https://drgustavomendes.com",
      "logo": "https://drgustavomendes.com/images/logo.png",
      "image": "https://drgustavomendes.com/images/gustavo-profile.jpg",
      "description": "Psiquiatria humanizada com consultas de 2 horas e análise comportamental assistida por IA. Especialista em TDAH, autismo e neurodiversidade.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São José do Rio Preto",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "medicalSpecialty": "Psychiatry",
      "telephone": "+55-XX-XXXX-XXXX",
      "priceRange": "$$"
    },
    {
      "@type": "Physician",
      "@id": "https://drgustavomendes.com/#physician",
      "name": "Dr. Gustavo Mendes e Silva",
      "jobTitle": "Médico Psiquiatra",
      "medicalSpecialty": "Psychiatry",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Medical License",
        "identifier": "CRM-SP 218133"
      },
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Society of Cannabis Clinicians"
        },
        {
          "@type": "Organization",
          "name": "International Association for Cannabinoid Medicines"
        }
      ],
      "knowsAbout": [
        "Psychiatry",
        "ADHD",
        "Autism Spectrum Disorder",
        "Neurodiversity",
        "Medical Cannabis",
        "Palliative Care"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://drgustavomendes.com/#website",
      "url": "https://drgustavomendes.com",
      "name": "Dr. Gustavo Mendes",
      "description": "Psiquiatria humanizada e neurodiversidade",
      "inLanguage": "pt-BR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://drgustavomendes.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

### Sitemap Automático

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://drgustavomendes.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/api/'), // Excluir API routes
      changefreq: 'weekly',
      priority: 0.7,
      customPages: [
        'https://drgustavomendes.com',
        'https://drgustavomendes.com/blog',
        'https://drgustavomendes.com/curriculo',
        'https://drgustavomendes.com/publicacoes',
      ],
    }),
  ],
});
```

### robots.txt

```
# public/robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://drgustavomendes.com/sitemap-index.xml
```

---

## PERFORMANCE OPTIMIZATION

### Imagens

**Astro Image Optimization:**
```astro
---
import { Image } from 'astro:assets';
import profilePhoto from '../images/gustavo-profile.jpg';
---

<Image
  src={profilePhoto}
  alt="Dr. Gustavo Mendes"
  width={800}
  height={800}
  format="webp"
  quality={85}
  loading="lazy"
/>
```

**Cloudflare Images (alternativa):**
- Resize automático
- Format optimization (WebP/AVIF)
- Cache global
- URL: `/cdn-cgi/image/width=800,format=auto/image.jpg`

### CSS

**Critical CSS inline:**
```astro
---
// BaseLayout.astro
---
<head>
  <style is:inline>
    /* Critical CSS para above-the-fold */
    body { margin: 0; font-family: system-ui; }
    .hero { min-height: 100vh; }
  </style>
  <link rel="stylesheet" href="/styles/global.css" />
</head>
```

**CSS Variables:**
```css
/* styles/variables.css */
:root {
  /* Colors */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-text-tertiary: #999999;
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAFAF8;
  --color-border: #E5E5E5;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: Georgia, serif;
  
  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;
  
  /* Breakpoints (uso em media queries) */
  --screen-sm: 768px;
  --screen-md: 1024px;
  --screen-lg: 1280px;
}
```

### Fonts

**Opção A - System Fonts (Recomendado):**
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
               system-ui, sans-serif;
}
```

**Opção B - Google Fonts (optimizado):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Opção C - Self-hosted:**
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-display: swap;
  font-weight: 100 900;
}
```

### JavaScript

**Astro Islands (partial hydration):**
```astro
---
import ChatWidget from './ChatWidget.tsx';
---

<!-- Só hidrata quando visível -->
<ChatWidget client:visible />

<!-- Só hidrata quando idle -->
<CalEmbed client:idle />

<!-- Só hidrata no media query -->
<MobileMenu client:media="(max-width: 768px)" />
```

---

## CAL.COM INTEGRATION

### Setup Cal.com

```typescript
// src/lib/cal.ts
export const initCal = () => {
  if (typeof window === 'undefined') return;
  
  (function (C, A, L) {
    let p = function (a: any, ar: any) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.q) { cal.q = []; }
      cal.q.push(ar);
    };
    let cal = C.Cal;
    cal.ns = {};
    cal.q = cal.q || [];
    d.head.appendChild(d.createElement("script")).src =
      "https://app.cal.com/embed/embed.js";
  })(window, document);
};
```

### Componente Cal.com

```astro
---
// src/components/CalEmbed.astro
---

<div id="cal-embed" data-cal-link="drgustavomendes/consulta-inicial"></div>

<script>
  import { initCal } from '../lib/cal';
  
  initCal();
  
  Cal("init", { origin: "https://cal.com" });
  
  Cal("inline", {
    elementOrSelector: "#cal-embed",
    calLink: "drgustavomendes/consulta-inicial",
    layout: "month_view",
    config: {
      theme: "light",
      branding: {
        brandColor: "#1A1A1A"
      }
    }
  });
</script>

<style>
  #cal-embed {
    max-width: 600px;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
</style>
```

---

## ANALYTICS

### Cloudflare Web Analytics

**Setup (zero JavaScript):**
```html
<!-- Adicionar ao <head> -->
<script 
  defer 
  src='https://static.cloudflareinsights.com/beacon.min.js' 
  data-cf-beacon='{"token": "SEU_TOKEN_AQUI"}'
>
</script>
```

**Métricas disponíveis:**
- Pageviews
- Unique visitors
- Core Web Vitals
- Device/Browser breakdown
- Geographic data

### Custom Events (Workers Analytics Engine)

```typescript
// Tracking agendamento completado
export async function onRequestPost(context: EventContext) {
  const { env } = context;
  
  await env.ANALYTICS.writeDataPoint({
    blobs: ['appointment_scheduled'],
    doubles: [1],
    indexes: ['appointment_source'],
  });
  
  return new Response('OK');
}
```

---

## ENVIRONMENT VARIABLES

```bash
# .dev.vars (desenvolvimento)
CAL_API_KEY=cal_live_xxxxx
OPENAI_API_KEY=sk-xxxxx  # Se usar além de Workers AI
CLOUDFLARE_ACCOUNT_ID=xxxxx
CLOUDFLARE_API_TOKEN=xxxxx
```

```toml
# wrangler.toml (produção)
[env.production]
vars = { ENVIRONMENT = "production" }

[[env.production.kv_namespaces]]
binding = "SITE_CACHE"
id = "xxxxx"

[[env.production.r2_buckets]]
binding = "ASSETS"
bucket_name = "drgustavomendes-assets"

[[env.production.d1_databases]]
binding = "DB"
database_name = "drgustavomendes-db"
database_id = "xxxxx"

[[env.production.ai]]
binding = "AI"
```

---

## DEPLOYMENT

### Setup Inicial

```bash
# 1. Install Wrangler
npm install -g wrangler

# 2. Login Cloudflare
wrangler login

# 3. Create Pages project
wrangler pages project create drgustavomendes

# 4. Deploy
npm run build
wrangler pages deploy dist
```

### CI/CD com GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: drgustavomendes
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

### Custom Domain

```bash
# Configurar domínio customizado
wrangler pages domains add drgustavomendes.com drgustavomendes

# DNS records (configurar no Cloudflare Dashboard):
# drgustavomendes.com CNAME drgustavomendes.pages.dev
# www.drgustavomendes.com CNAME drgustavomendes.pages.dev
```

---

## SECURITY

### Headers de Segurança

```typescript
// functions/_middleware.ts
export async function onRequest(context: EventContext) {
  const response = await context.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://app.cal.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
  );
  
  return response;
}
```

### Rate Limiting

```typescript
// functions/api/_middleware.ts
import { createRateLimiter } from '@cloudflare/workers-rate-limiter';

export async function onRequest(context: EventContext) {
  const limiter = createRateLimiter({
    kv: context.env.RATE_LIMIT_KV,
    keyPrefix: 'api',
    maxRequests: 10,
    windowSeconds: 60,
  });
  
  const { success } = await limiter.limit(context.request.headers.get('CF-Connecting-IP'));
  
  if (!success) {
    return new Response('Rate limit exceeded', { status: 429 });
  }
  
  return context.next();
}
```

---

## MONITORING

### Cloudflare Logs

```bash
# Real-time logs
wrangler pages deployment tail

# Filtrar erros
wrangler pages deployment tail --status error
```

### Error Tracking

```typescript
// functions/_middleware.ts
export async function onRequest(context: EventContext) {
  try {
    return await context.next();
  } catch (error) {
    // Log para Cloudflare Analytics
    console.error('Error:', error);
    
    // Enviar para serviço externo (opcional)
    await fetch('https://logs.sentry.io/api/...', {
      method: 'POST',
      body: JSON.stringify({ error: error.message }),
    });
    
    return new Response('Internal Server Error', { status: 500 });
  }
}
```

---

## TESTING

### Unit Tests

```bash
npm install -D vitest @vitest/ui
```

```typescript
// src/lib/utils.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from './utils';

describe('formatDate', () => {
  it('formats date correctly', () => {
    expect(formatDate('2024-01-15')).toBe('15 de janeiro de 2024');
  });
});
```

### E2E Tests (Playwright)

```bash
npm install -D @playwright/test
```

```typescript
// tests/e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:4321');
  
  await expect(page.locator('h1')).toContainText('Você não precisa');
  
  // Testa scroll para seção 2
  await page.locator('[aria-label="Scroll para Manifesto"]').click();
  await expect(page.locator('#manifesto')).toBeVisible();
});
```

---

## CHECKLIST DE SETUP

### Inicial
- [ ] Criar repo GitHub
- [ ] Setup Astro project
- [ ] Configurar Cloudflare Pages
- [ ] Conectar repo ao Pages
- [ ] Custom domain configurado
- [ ] SSL/HTTPS ativo

### Desenvolvimento
- [ ] Componentes base criados
- [ ] Layouts definidos
- [ ] CSS variables configurados
- [ ] Tipografia implementada
- [ ] Animações CSS escritas
- [ ] Responsividade testada

### Integrações
- [ ] Cal.com account criado
- [ ] Cal.com embedded e testado
- [ ] Workers AI configurado
- [ ] D1 database criada (se usar)
- [ ] R2 bucket criado (se usar)
- [ ] KV namespace criado (se usar)

### SEO
- [ ] Sitemap.xml gerado
- [ ] robots.txt configurado
- [ ] Meta tags em todas as páginas
- [ ] Structured data implementado
- [ ] Open Graph images criados
- [ ] Google Search Console setup
- [ ] Cloudflare Analytics ativado

### Performance
- [ ] Imagens otimizadas
- [ ] Fonts carregando corretamente
- [ ] Critical CSS inline
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals OK

### Segurança
- [ ] Security headers configurados
- [ ] Rate limiting implementado
- [ ] CSP policy definido
- [ ] HTTPS redirect ativo

### Launch
- [ ] Conteúdo finalizado
- [ ] Testes em todos os browsers
- [ ] Mobile testado em devices reais
- [ ] Forms testados
- [ ] Cal.com agendamento testado
- [ ] 404 page customizada
- [ ] Backup configurado

---

## CUSTOS ESTIMADOS

### Cloudflare Pages
- **Free tier:** 500 builds/mês, bandwidth ilimitado
- **Custo:** $0

### Cloudflare Workers
- **Free tier:** 100k requests/dia
- **Custo esperado:** $0 (dentro do free tier)

### Workers AI
- **Free tier:** 10k neurons/dia
- **Custo esperado:** $0-5/mês

### D1 Database
- **Free tier:** 5GB storage, 5M reads/dia
- **Custo esperado:** $0

### R2 Storage
- **Free tier:** 10GB storage
- **Custo esperado:** $0-2/mês

### Cal.com
- **Free tier:** calendário básico
- **Pro:** $12/mês (features extras)

### Domínio
- **.com:** ~$12/ano

**Total estimado:** $0-5/mês (+ domínio)

---

## RECURSOS E DOCUMENTAÇÃO

### Oficial
- Astro Docs: https://docs.astro.build
- Cloudflare Docs: https://developers.cloudflare.com
- Workers AI: https://developers.cloudflare.com/workers-ai
- Cal.com Embed: https://cal.com/docs/embedding

### Community
- Astro Discord: https://astro.build/chat
- Cloudflare Discord: https://discord.cloudflare.com

### Learning
- Astro Tutorial: https://docs.astro.build/en/tutorial
- Workers Playground: https://workers.cloudflare.com/playground

---

## NEXT STEPS

1. **Setup inicial:** Criar projeto Astro + conectar Cloudflare
2. **Componentes:** Implementar 6 seções + páginas
3. **Conteúdo:** Popular com textos finais
4. **Integrações:** Cal.com + Workers AI (chatbot)
5. **SEO:** Implementar todas as otimizações
6. **Testing:** Testar em todos os devices
7. **Launch:** Deploy para produção

**Pronto para começar a implementação?**
