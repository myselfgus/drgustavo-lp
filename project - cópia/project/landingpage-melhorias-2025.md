# Recomendações de Evolução – Landing Page (Outubro/2025)

## 1. Narrativa e Conteúdo
- **Hero com micro-story**: transformar o par `Você não precisa...` (src/components/Hero.astro) em estrutura 3 blocos (dor → método → prova social). Inserir microcopy abaixo do CTA com tempo de agenda médio e disponibilidade híbrida para reduzir fricção. Complementar com selo "Primeira consulta em até X dias" apoiado em dado real.
- **Manifesto orientado a evidências**: cada par de afirmações (src/components/Manifesto.astro) pode terminar com insight curto apoiado em estatística ou referência (ex.: "92% dos pacientes relatam..."), linkando para artigo específico do blog; ativa reciprocidade e reforça autoridade científica.
- **Seção "Para quem" segmentada por persona**: reescrever frases para refletir perfis claros (adultos com TDAH, pais de autistas, profissionais em burnout). Complementar cards expansíveis com dores típicas e resultados esperados, favorecendo identificação rápida.
- **Método com entregáveis tangíveis**: agregar ao `processo-lista` elementos visuais (badges) e dados mensuráveis (tempo de resposta, periodicidade de follow-ups). Incluir vídeo curto (30s) ou áudio do próprio médico explicando a sessão de 2h para humanizar.
- **Credenciais + resultado clínico**: adicionar minicaso (estudo de caso anonimisado) com métrica de melhora (escala Likert ou PHQ-9) e explicitar participação em pesquisas atuais (link para ClinicalTrials ou preprints). Considerar embed de artigo no formato timeline.
- **Contato com prova social**: inserir snippet de reviews auditadas (Doctoralia, Google) com schema `Review` e selo de conformidade ética. Adicionar FAQ collapsible abordando custo, cobertura e política de canabidiol.

## 2. Refinamento Estético
- **Sistema visual modular**: migrar estilos embutidos das seções para partials em `src/styles/sections/*.css` e usar tokens consistentes (hoje coexistem `--text-*` e `--color-text-*`, ver src/styles/global.css). Isso facilita dark theme opcional.
- **Paleta contemporânea**: complementar neutros atuais (`#1A1A1A`, `#FAFAF8`) com acentos biomórficos (verde sálvia #7DA87B, azul petróleo #264653) aplicados em gradientes suaves ou linhas de destaque; mantém sobriedade médica sem ficar plano.
- **Componentização das texturas**: consolidar o `noise` SVG em um util (ex.: `NoiseLayer` via CSS `mask-image`) para padronizar intensidade e reduzir repetição.
- **Layouts menos rígidos**: substituir `height: 100vh` global (src/styles/global.css) por `min-height` com `clamp()` e permitir `auto` quando o conteúdo exceder viewport. Evita scroll interno e melhora acessibilidade em `Manifesto/Credenciais`.
- **SideDots responsivo**: adaptar `nav.side-dots` para usar `position: sticky` em desktop e transformar em progress bar discreta em mobile (via `scroll-timeline` quando suportado).

## 3. Tipografia e Fontes
- **Variable fonts de 2025**: considerar Inter Tight variable para corpo e pairing com serif de alto contraste (ex.: `Fraunces Variable` ou `Cormorant Upright`) nos títulos do manifesto para reforçar voz editorial. Alternativa paga: `Söhne Mono` para detalhes técnicos (CRM, certificações) criando contraste contemporâneo.
- **Sistema de escalas fluidas**: usar `clamp()` para todos os tamanhos principais (Hero, Manifesto, Para Quem) com breakpoints suaves; garante legibilidade em displays 4K e tablets verticais.
- **Ligaduras e OpenType**: ativar ligações contextuais e variações óticas para reforçar a sofisticação (quando fontes suportarem). Incluir fallback local para reduzir `FOIT`.

## 4. Motion & Interatividade
- **Trilha de motion centrada em narrativa**: unificar animações com `Motion One` ou `Framer Motion for Astro` (via `@astrojs/react`) para gerir estados e preferências de movimento a partir de um único provider. Substitui scripts customizados duplicados em cada componente.
- **Scroll-sints (2025)**: aplicar `Scroll-Driven animations API` (`scroll-timeline`, `view-timeline`) para manifestar progressivo do manifesto e `Para Quem`, reduzindo JS e garantindo suavidade nativa em Safari 18+.
- **Microinterações informadas**: animar CTA `Agendar` com efeito `magnetic button` sutil (3D tilt) e feedback háptico em mobile via Vibration API (opt-in). Implementar highlights nas frases já percorridas usando gradientes animados em CSS.
- **Lenis + Smooth wheel**: substituir `documentElement.scrollBehavior` inline (src/layouts/BaseLayout.astro:70) por `Lenis` ou `Smooth Scrollbar` com fallback; entrega rolagem consistente em iOS/macOS sem interferir em `scrollIntoView`.

## 5. Stack & Bibliotecas Modernas
- **Imagens e mídia**: adicionar `@astrojs/image` + `vite-imagetools` para otimização automática dos assets (hero, depoimentos). Considere `<picture>` com `webp` + `avif`.
- **Design tokens**: integrar `Panda CSS` ou `vanilla-extract` para tokens tipográficos/cores centralizados, mantendo leveza sem Tailwind. Em 2025 ambos têm ótimo suporte Astro.
- **Analytics focado em privacidade**: integrar `Plausible` (self-host) ou `Pirsch` com stream para Sentry Replays, garantindo rastreio de conversão com LGPD-compliant.
- **Forms e automações**: caso abra captação, usar `Formbricks` ou `TALLY embed` com sincronização para CRM médico (ZenDesk Health / HeyDoc).
- **Infra Edge**: como já usa `@astrojs/cloudflare`, aproveitar KV para cache de conteúdo do blog e micro-serviço para dados dinâmicos (ex.: agenda disponível) com fallback offline.

## 6. Acessibilidade & Compliance
- **Estruturar heading hierarchy**: garantir apenas um `<h1>` no Hero e subsequentes `h2/h3` coerentes. Hoje múltiplos `<p>` carregam peso sem semântica; transformar em `h2` + `span` para VoiceOver.
- **Modo alto contraste**: oferecer toggle que energiza paleta com `var(--text-primary)` sobre `--bg-secondary` > 4.5:1. Utilize `color-scheme` em `<html>` para suportar tema escuro nativo.
- **LGPD & consentimento**: adicionar banner de consentimento granular e página de política de privacidade (linkada no rodapé). Integrar script Cal apenas mediante consentimento "Funcional".

## 7. Conteúdo Dinâmico & SEO
- **Blog destacado**: usar `content collections` do Astro (já presente) para puxar automaticamente últimos artigos na Home (cards horizontais com `BlogCard.astro`). Aumenta tempo de sessão e reforça autoridade.
- **FAQ estruturado**: implementar `FAQPage` schema e `HowTo` para processos terapêuticos, aumentando rich snippets.
- **Sitemap segmentado**: já usa `@astrojs/sitemap`, mas separar `blog` e `institucional` em índices específicos para rastreamento Analytics (útil em Search Console 2025).
- **OpenGraph dinâmico**: gerar imagens OG com `@astrojs/og` (novo em 2025) usando retrato do médico e headline do manifesto; aumenta CTR social.

## 8. Performance & Observabilidade
- **Core Web Vitals**: remover scripts inline repetidos, delegando listeners via util (ex.: `useIntersectionObserver`). Auditar LCP do Hero (usar `content-visibility: auto`).
- **Monitoramento**: manter `cf-beacon`, mas complementar com `Lighthouse CI` no pipeline e `Replay.io` para replays anônimos (útil em casos de bug no modal Cal).
- **Testes**: criar `@vitest/browser` smoke tests para Key UI (modal Cal abre, scroll dots funcionam) com `Playwright Component` experimental para Astro.

---
- Build atual (`npm run build`) finaliza sem erros (16:11:46) — baseline de referência para futuras mudanças.
