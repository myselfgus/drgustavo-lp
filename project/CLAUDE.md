# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## INFORMAÇÕES ESSENCIAIS DO PROJETO

### Sobre o Projeto
- **Proprietário:** Dr. Gustavo Mendes e Silva (médico psiquiatra)
- **Objetivo:** Site de divulgação profissional para atrair novos pacientes e facilitar agendamento de consultas
- **Público-alvo:**
  - Pessoas que buscam psiquiatria humanizada e compreensão real
  - Neurodivergentes (TDAH, TEA) cansados de serem "corrigidos"
  - Quem questiona rótulos fáceis e busca entender o porquê, não só o quê
  - Quem busca canabidiol com rigor científico, não modismo

### Tom de Comunicação
- **Inspiracional e transformacional** - NÃO marketing de vendas
- **Comunicação direta, precisa, sem floreios** (Dr. Gustavo tem TEA)
- Objetivo: inspirar confiança e coragem nas pessoas para serem donas do seu destino

---

## INFORMAÇÕES DE CONTATO

### Telefones (ambos são telefone E WhatsApp)
- **(17) 2110-1228** - São José do Rio Preto
- **(11) 94545-1146** - São Paulo

### Endereço
**Localização Privilegiada:**
- Rua Amadeu Segundo Cherubini, 504
- Jd. Panorama • São José do Rio Preto/SP
- C&W Unidade Amadeu

### Informações Profissionais
- **CRM-SP:** 218133
- **Certificações:** Society of Cannabis Clinicians (SCC), International Association for Cannabinoid Medicines (IACM)
- **Atendimento:** Presencial e online (apenas São José do Rio Preto)

---

## ÁREAS DE ATUAÇÃO

1. TDAH
2. Autismo (TEA)
3. Ansiedade
4. Depressão
5. Canabidiol (CBD)
6. Cuidados Paliativos
7. Traumas / Luto
8. Insônia

---

## DIFERENCIAIS

- **Consultas de 2 horas** (primeira consulta)
- **Análise comportamental com IA**
- **Abordagem humanizada** - compreender, não apenas diagnosticar
- **Tratamento com canabidiol** baseado em evidências científicas
- **Relatórios detalhados** - paciente entende o que está acontecendo

---

## STACK TÉCNICO

### Framework e Infraestrutura
- **Framework:** Astro 4.x with `hybrid` output mode
- **Deployment:** Cloudflare Workers (Workers-first, não Pages)
- **Config:** wrangler.jsonc (NÃO wrangler.toml)
- **Compatibility:** compatibility_date = "2025-03-07"
- **Site URL:** https://drgustavomendes.com
- **Adapter:** `@astrojs/cloudflare` with platformProxy enabled

### Cloudflare Services Bindings
All bindings are configured in `wrangler.jsonc`:

- **D1 Database:**
  - Binding: `DB`
  - Database Name: `drgustavomendes-db`
  - Database ID: `1189d5ea-8769-4d66-adb8-d4cbc04a3af4`

- **R2 Bucket:**
  - Binding: `R2_ASSETS`
  - Bucket Name: `drgustavomendes-assets`

- **KV Namespace:**
  - Binding: `SITE_CACHE`
  - ID: `ee0f09bcb97149ecb64f09d4276d0332`

- **Workers AI:**
  - Binding: `AI`
  - Gateway ID: `voither` (observability + cache, 1h TTL)
  - Model: DeepSeek R1 (`@cf/deepseek-ai/deepseek-r1-distill-qwen-32b`)
  - Max tokens: 4096
  - Temperature: 0.5-0.7

- **Assets:**
  - Binding: `ASSETS`
  - Directory: `./dist/`
  - HTML Handling: `auto-trailing-slash`
  - Not Found: `single-page-application` mode

### AI Integration
- **DeepSeek R1 acessível via:** `./ask-deepseek.sh "sua pergunta"`
- **Uso:** Consultar ANTES de implementar qualquer código
- **Endpoint:** Via AI Gateway para observability

### Third-Party Integrations
- **ElevenLabs ConvAI:** Voice agent (agent ID: `agent_4301k53hd1fke37983rze0nvdct4`)
- **Cal.com:** Appointment scheduling modal
- **Cloudflare Web Analytics:** Optional beacon via `PUBLIC_CF_BEACON_TOKEN` env var

---

## ESTRUTURA DO SITE

### Página Principal - 6 Seções Fullscreen

#### Seção 1 - Hero
- "Você não precisa de mais diagnósticos."
- "Você precisa se entender."
- Dr. Gustavo Mendes e Silva
- Psiquiatria · São José do Rio Preto

#### Seção 2 - Manifesto
- A psiquiatria tradicional categoriza. Eu busco compreender padrões.
- Consultas de 2 horas não são luxo. São o tempo necessário para pensar junto.
- Inteligência artificial não substitui escuta. Ela libera minha mente para estar presente.
- Você não é um diagnóstico do DSM. Você é um sistema complexo em busca de coerência.

#### Seção 3 - Para Quem
- Para quem questiona rótulos fáceis
- Para quem quer entender o porquê, não só o quê
- Para neurodivergentes cansados de serem "corrigidos"
- Para quem busca canabidiol com rigor científico, não modismo
- Para quem percebe que sintomas são linguagem, não falhas

#### Seção 4 - Método
- Primeira consulta: 2 horas de análise sem pressa
- Você fala, eu ouço e estruturo padrões com IA
- Construímos hipóteses juntos – seu insight importa
- Tratamento co-criado: medicação, canabidiol, estratégias comportamentais
- Relatórios detalhados – você entende o que está acontecendo
- Reavaliações: acompanhamento real, não receita automática

#### Seção 5 - Credenciais + Prova Social
**Lado Esquerdo:**
- Médico Psiquiatra
- CRM-SP 218133
- Certificado em Canabidiol: SCC, IACM
- Experiência: CAPS, emergências psiquiátricas, casos complexos

**Lado Direito:**
- Áreas de atuação: TDAH, TEA, Ansiedade, Depressão, CBD, Cuidados Paliativos, Traumas, Luto, Insônia

**Depoimentos:**
- "Pela primeira vez um médico entendeu que meu TDAH não é defeito – é arquitetura cognitiva diferente." - R.L.

#### Seção 6 - Contato
- Agende sua consulta
- São José do Rio Preto
- Atendimento presencial e online
- Primeira consulta: 2 horas / Retornos: 1 hora
- Cal.com embed
- WhatsApp: (17) 2110-1228 ou (11) 94545-1146

### Páginas Separadas
- `/blog` - Artigos, projetos de pesquisa e obras editoriais
- `/blog/[slug]` - Dynamic blog post pages
- `/curriculo` - CV completo + PDF download
- `/publicacoes` - Publications page

---

## DESIGN SYSTEM

All design tokens are defined in `src/styles/variables.css` using CSS custom properties.

### Cores (CSS Variables)
**Neutral Scale:**
- `--gray-50` to `--gray-900` (f8f9f7 → 151613)
- `--text-primary`: var(--gray-900) (#151613)
- `--text-secondary`: var(--gray-600) (#5d615b)
- `--text-tertiary`: var(--gray-500) (#7f837c)
- `--text-inverse`: #ffffff
- `--bg-primary`: #ffffff
- `--bg-secondary`: var(--gray-50) (#f8f9f7)
- `--bg-tertiary`: var(--gray-100) (#f0f1ec)
- `--bg-dark`: #121310

**Accent Palette:**
- `--accent-sage`: #7da87b
- `--accent-petrol`: #1f3e46
- `--accent-gold`: #d2a857

**Brand Tokens:**
- `--brand-primary`: var(--accent-petrol)
- `--brand-secondary`: var(--accent-sage)
- `--brand-highlight`: var(--accent-gold)

**Borders:**
- `--border-subtle`: var(--gray-200)
- `--border-soft`: rgba(21, 22, 19, 0.08)
- `--border-strong`: rgba(21, 22, 19, 0.12)

### Tipografia
**Font Families:**
- `--font-sans`: 'Inter Tight', 'Inter', system-ui
- `--font-serif`: 'Fraunces', 'Times New Roman', serif
- `--font-mono`: 'IBM Plex Mono', monospace

**Font Weights:**
- `--font-light`: 300
- `--font-regular`: 400
- `--font-medium`: 500
- `--font-semibold`: 600
- `--font-bold`: 700

**Fluid Type Scale (clamp):**
- `--text-hero-xl`: clamp(1.65rem, 4.5vw, 3rem)
- `--text-hero-display`: clamp(1.5rem, 3.75vw, 2.63rem)
- `--text-title-lg`: clamp(1.31rem, 3vw, 1.95rem)
- `--text-title-md`: clamp(1.01rem, 2.25vw, 1.5rem)
- `--text-body`: clamp(0.71rem, 0.98vw, 0.86rem)

**Line Heights:**
- `--leading-tight`: 1.2
- `--leading-normal`: 1.4
- `--leading-relaxed`: 1.6
- `--leading-loose`: 1.8

### Animações
**Timing:**
- `--transition-fast`: 0.18s ease
- `--transition-base`: 0.28s cubic-bezier(0.16, 1, 0.3, 1)
- `--transition-slow`: 0.6s cubic-bezier(0.16, 1, 0.3, 1)
- `--ease-smooth`: cubic-bezier(0.16, 1, 0.3, 1)

**Durations:**
- `--duration-fast`: 160ms
- `--duration-normal`: 360ms
- `--duration-slow`: 640ms

**Implementation:**
- All animations use IntersectionObserver for scroll-triggered reveals
- Animations defined with `[data-animate]` and `[data-stagger]` attributes
- GPU-accelerated: apenas `transform` e `opacity`
- Respects `prefers-reduced-motion` (all durations set to 0ms)
- Global animation setup in BaseLayout.astro

### Espaçamento
**Base Scale:**
- `--space-2xs`: 4px → `--space-3xl`: 128px
- `--padding-mobile`: 20px
- `--padding-tablet`: 40px
- `--padding-desktop`: 80px

**Section Gaps (Fluid):**
- `--gap-section`: clamp(48px, 12vw, 160px)
- `--gap-stack-lg`: clamp(32px, 6vw, 96px)
- `--gap-stack-md`: clamp(20px, 4vw, 64px)

### Other Tokens
**Shadows:** `--shadow-sm`, `--shadow-md`, `--shadow-lg`
**Border Radius:** `--radius-sm` (6px) → `--radius-full` (9999px)
**Z-Index:** `--z-header` (1000), `--z-dots` (900), `--z-whatsapp` (950), `--z-modal` (1100)

---

## NAVEGAÇÃO

### Top Bar
- Logo à esquerda: "Dr. Gustavo Mendes e Silva" (clicável, volta ao topo)
- Botão à direita: "Agendar" (sempre visível)
- Estado inicial: transparente
- Após scroll: backdrop-blur com background semi-transparente
- Auto-hide ao rolar, reaparece ao parar ou rolar para cima

### WhatsApp Button
- Posição: bottom-right fixo
- Visual: ícone minimalista outline
- Cor: integrada ao design (#2C2C2C)
- Link: `https://wa.me/5517211011228?text=Olá,%20vim%20do%20site`

### Agendamento
- **Sistema:** Cal.com
- **Integração:** Modal (não link externo)
- **Link:** drgustavomendes/consulta-inicial

---

## REGRAS IMPORTANTES

### Desenvolvimento
- ❌ Código fake, placeholder, localhost
- ❌ Funções inexistentes
- ❌ Simplificações enganosas
- ✅ TODO código é para PRODUÇÃO
- ✅ Consultar DeepSeek R1 ANTES de implementar código

### Comunicação
- ❌ Linguagem de marketing ou vendas
- ❌ Floreios ou enfeites textuais
- ✅ Direta, precisa, objetiva
- ✅ Inspiracional e transformacional

### SEO e Metadados
- ✅ Telefones: (17) 2110-1228 e (11) 94545-1146
- ✅ Endereço completo: Rua Amadeu Segundo Cherubini, 504 - Jd. Panorama, SJRP/SP
- ✅ Todas as 8 áreas de atuação
- ✅ Schema.org completo (MedicalBusiness + Physician)

---

## WORKFLOW DE DESENVOLVIMENTO

### Antes de implementar QUALQUER código:
1. Consultar DeepSeek R1: `./ask-deepseek.sh "sua pergunta"`
2. Analisar resposta do modelo
3. Implementar seguindo specs + sugestão do modelo
4. Verificar conformidade com especificações

### Arquitetura do Código

**Estrutura de componentes implementada:**
```
src/
├── components/              # Componentes Astro
│   ├── Hero.astro          # Seção 1
│   ├── Manifesto.astro     # Seção 2
│   ├── Credenciais.astro   # Seção 3 (implementado)
│   ├── ParaQuem.astro      # Seção 4
│   ├── Metodo.astro        # Seção 5
│   ├── Programas.astro     # Seção adicional
│   ├── Depoimentos.astro   # Testimonials section
│   ├── Localizacao.astro   # Location section
│   ├── Contato.astro       # Seção final
│   ├── Header.astro        # Top navigation bar
│   ├── Footer.astro        # Footer component
│   ├── SideDots.astro      # Section navigation dots
│   ├── WhatsAppButton.astro # Floating WhatsApp button
│   ├── CalEmbed.astro      # Cal.com modal integration
│   ├── ElevenLabsAgent.astro # Voice agent widget
│   ├── BlogCard.astro      # Blog post card
│   ├── SEO.astro           # SEO meta tags
│   └── StructuredData.astro # Schema.org JSON-LD
├── layouts/
│   ├── BaseLayout.astro    # Main layout with Header, SideDots, animations
│   ├── BlogLayout.astro    # Blog post layout
│   └── PageLayout.astro    # Static page layout
├── pages/
│   ├── index.astro         # Homepage (9 sections currently)
│   ├── blog/
│   │   ├── index.astro     # Blog listing
│   │   └── [slug].astro    # Dynamic blog post
│   ├── curriculo.astro     # CV page
│   └── publicacoes.astro   # Publications page
├── styles/
│   ├── global.css          # Global reset and base styles
│   ├── variables.css       # Design tokens (colors, typography, spacing)
│   ├── animations.css      # Animation definitions
│   ├── components/
│   │   ├── header.css
│   │   └── side-dots.css
│   ├── sections/           # Section-specific styles
│   │   ├── hero.css
│   │   ├── manifesto.css
│   │   ├── credenciais.css
│   │   ├── para-quem.css
│   │   ├── metodo.css
│   │   ├── programas.css
│   │   ├── depoimentos.css
│   │   ├── localizacao.css
│   │   └── contato.css
│   └── pages/
│       └── blog.css
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── env.d.ts            # TypeScript environment types
functions/
└── _middleware.ts          # Cloudflare Workers middleware
```

**Page Structure - Homepage (`index.astro`):**
The homepage currently has **9 sections** (not 6 as originally planned):
1. Hero
2. Manifesto
3. Credenciais
4. ParaQuem
5. Metodo
6. Programas (adicional)
7. Depoimentos (adicional)
8. Localizacao (adicional)
9. Contato

**Key Architecture Patterns:**

1. **Component-Based Sections:** Each major section is a self-contained Astro component with its own CSS file
2. **Shared Layouts:** `BaseLayout.astro` provides global structure (Header, SideDots, animation setup, Cal.com embed)
3. **Animation System:** Centralized IntersectionObserver-based reveal animations in BaseLayout
4. **Design Tokens:** All design values in CSS custom properties (`variables.css`)
5. **Hybrid Rendering:** Uses Astro's `hybrid` mode - static by default, opt-in to SSR with `export const prerender = false`
6. **Edge Middleware:** Cloudflare Workers middleware in `functions/_middleware.ts` for request processing

---

## COMANDOS DE DESENVOLVIMENTO

### Comandos npm (executar na pasta `project/`)

```bash
# Instalar dependências
npm install

# Desenvolvimento local (porta 4321)
npm run dev

# Build para produção
npm run build
# Output: dist/ com _worker.js para Cloudflare Workers

# Preview do build
npm run preview

# Type checking
npm run astro check

# Deploy completo (build + wrangler deploy)
npm run deploy
```

### Comandos Wrangler

```bash
# Login no Cloudflare
wrangler login

# Deploy manual do Worker
wrangler deploy
# ou especificando config:
wrangler deploy --config wrangler.jsonc

# Dev local como Worker (após build)
wrangler dev dist/_worker.js/index.js

# Executar query no D1
wrangler d1 execute drgustavomendes-db --command "SELECT * FROM blog_posts"

# Listar databases D1
wrangler d1 list

# Listar R2 buckets
wrangler r2 bucket list

# Listar KV namespaces
wrangler kv namespace list

# Ver logs do Worker
wrangler tail

# Consultar DeepSeek R1 (se script disponível)
../ask-deepseek.sh "sua pergunta aqui"
```

### Build Output

O build Astro com adapter Cloudflare gera:
- `dist/_worker.js/` - Worker entry point
- `dist/` - Static assets servidos pelo binding ASSETS
- Worker combina SSR + static file serving

---

## IMPORTANTE: STATUS ATUAL DO PROJETO

**Este projeto está em PRODUÇÃO ativa, não é mais planejamento.**

✅ **Implementado:**
- Todas as 9 seções da homepage
- Design system completo com CSS variables
- Sistema de animações com IntersectionObserver
- Header com auto-hide
- Side navigation dots
- WhatsApp button
- Cal.com integration
- ElevenLabs voice agent
- SEO e structured data
- Blog infrastructure (pages + layouts)
- Cloudflare Workers deployment config
- All Cloudflare bindings (D1, R2, KV, AI, Assets)

🚧 **Próximos passos:**
- Popular blog posts em D1 ou content collections
- Adicionar conteúdo real em curriculo.astro e publicacoes.astro
- Otimizar imagens e assets
- Configurar analytics (PUBLIC_CF_BEACON_TOKEN)
- Testar responsividade em mais dispositivos

---

---

**Última atualização:** 2025-10-16
**Desenvolvido com:** Astro 4.x + Cloudflare Workers + DeepSeek R1 AI
