# PÁGINA /BLOG

## OBJETIVO
Estabelecer autoridade conceitual através de artigos densos sobre psiquiatria, neurodiversidade, IA e abordagens não-tradicionais. SEO orgânico. Educar antes de converter.

---

## ESTRUTURA GERAL

### Hierarquia de Páginas
```
/blog → Index (grid de artigos)
/blog/[slug] → Artigo individual
/blog/categoria/[nome] → Filtro por categoria (opcional)
```

---

## PÁGINA INDEX (/blog)

### Conteúdo Textual

**Título Principal:**
```
Blog
```

**Subtítulo (opcional):**
```
Reflexões sobre psiquiatria, neurodiversidade e tecnologia
```

---

## LAYOUT - PÁGINA INDEX

### Estrutura Visual

```
┌─────────────────────────────────────────┐
│ [Dr. Gustavo Mendes]    Blog    Início │ ← Header
├─────────────────────────────────────────┤
│                                         │
│              [10% vazio]                │
│                                         │
│                 Blog                    │
│                                         │
│   Reflexões sobre psiquiatria,          │
│   neurodiversidade e tecnologia         │
│                                         │
│              [8% vazio]                 │
│                                         │
│  ┌────────┬────────┬────────┐          │
│  │        │        │        │          │
│  │ Card 1 │ Card 2 │ Card 3 │          │
│  │        │        │        │          │
│  │        │        │        │          │
│  └────────┴────────┴────────┘          │
│                                         │
│  ┌────────┬────────┬────────┐          │
│  │        │        │        │          │
│  │ Card 4 │ Card 5 │ Card 6 │          │
│  │        │        │        │          │
│  │        │        │        │          │
│  └────────┴────────┴────────┘          │
│                                         │
│           [Paginação]                   │
│                                         │
│              [10% vazio]                │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│   Blog · Currículo · Publicações        │
│   © 2025 Dr. Gustavo Mendes             │
│                                         │
└─────────────────────────────────────────┘
```

### Composição

**Grid de Artigos:**
- Desktop: 3 colunas
- Tablet: 2 colunas  
- Mobile: 1 coluna
- Gap entre cards: 40px (horizontal e vertical)
- Max-width container: 1200px
- Padding lateral: 10% (desktop) / 5% (tablet) / 24px (mobile)

**Fundo:**
- Branco puro (#FFFFFF) ou off-white (#FAFAF8)
- Clean, minimalista

---

## CARD DE ARTIGO

### Estrutura do Card

```
┌─────────────────────┐
│                     │
│   [Imagem 16:9]     │
│                     │
├─────────────────────┤
│                     │
│  Psiquiatria        │
│  Dimensional        │
│                     │
│  Uma nova           │
│  perspectiva...     │
│                     │
│  15 min · 12/01/25  │
│                     │
└─────────────────────┘
```

### Elementos do Card

**Imagem:**
- Aspect ratio: 16:9
- Object-fit: cover
- Background: #F5F5F5 (placeholder enquanto carrega)
- Lazy loading
- Alt text descritivo

**Título:**
- Size: 22px (desktop) / 20px (mobile)
- Weight: 600
- Color: #1A1A1A
- Line-height: 1.3
- Margin: 20px (top) / 12px (bottom)
- Max-lines: 2 (ellipsis se maior)

**Excerpt (resumo):**
- Size: 16px
- Weight: 400
- Color: #666666
- Line-height: 1.6
- Margin-bottom: 16px
- Max-lines: 3 (ellipsis)

**Meta Info:**
- Size: 14px
- Weight: 400
- Color: #999999
- Format: "15 min · 12/01/25"
- Separator: · (middle dot)

**Card Container:**
- Background: transparent
- Border: none (ou 1px solid rgba(0,0,0,0.05) se preferir)
- Border-radius: 0 (ou 8px se preferir cantos arredondados)
- Transition: all 0.3s ease
- Cursor: pointer

---

## TIPOGRAFIA - INDEX

### Título Página

**"Blog"**
- Font: Inter, SF Pro Display
- Size: 48px (desktop) / 36px (mobile)
- Weight: 300 (Light)
- Color: #1A1A1A
- Text-align: center
- Margin-bottom: 16px

### Subtítulo Página

**"Reflexões sobre..."**
- Size: 18px (desktop) / 16px (mobile)
- Weight: 400
- Color: #666666
- Text-align: center
- Line-height: 1.6
- Max-width: 600px
- Margin: 0 auto

---

## ANIMAÇÕES - INDEX

### Cards - Entrada

**Grid fade in:**
- Stagger animation
- Cada card aparece com delay incremental
- Card 1: delay 0ms
- Card 2: delay 100ms
- Card 3: delay 200ms
- etc.

**Animação individual:**
```css
@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: cardFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

### Card - Hover

```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.card:hover img {
  transform: scale(1.05);
}

.card:hover .title {
  color: #000000;
}
```

### Transições

- Card hover: 0.3s ease
- Imagem scale: 0.5s ease

---

## PÁGINA ARTIGO (/blog/[slug])

### Layout

```
┌─────────────────────────────────────────┐
│ [Dr. Gustavo Mendes]    Blog    Início │ ← Header
├─────────────────────────────────────────┤
│                                         │
│              [8% vazio]                 │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │  [Breadcrumb]                     │  │
│  │  Blog > Artigo                    │  │
│  │                                   │  │
│  │  [Título do Artigo]               │  │
│  │  Subtítulo ou excerpt             │  │
│  │                                   │  │
│  │  15 min · 12 janeiro 2025         │  │
│  │                                   │  │
│  │  ─────────────────                │  │
│  │                                   │  │
│  │  [Conteúdo do artigo]             │  │
│  │                                   │  │
│  │  Parágrafo 1...                   │  │
│  │                                   │  │
│  │  ## Subtítulo                     │  │
│  │                                   │  │
│  │  Parágrafo 2...                   │  │
│  │                                   │  │
│  │  [Imagem se houver]               │  │
│  │                                   │  │
│  │  Parágrafo 3...                   │  │
│  │                                   │  │
│  │  ─────────────────                │  │
│  │                                   │  │
│  │  Interessado em                   │  │
│  │  conversar sobre isso?            │  │
│  │  [Agendar consulta →]             │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│              [10% vazio]                │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│   Blog · Currículo · Publicações        │
│                                         │
└─────────────────────────────────────────┘
```

### Composição Artigo

**Container:**
- Max-width: 680px (legibilidade ótima)
- Margin: 0 auto
- Padding lateral: 24px (mobile) / 40px (tablet)

**Espaçamentos:**
- Entre parágrafos: 24px
- Entre seções (H2): 48px
- Antes/depois imagens: 40px

---

## TIPOGRAFIA - ARTIGO

### Título Artigo (H1)

- Size: 48px (desktop) / 36px (mobile)
- Weight: 600 (Semi-bold)
- Color: #1A1A1A
- Line-height: 1.2
- Margin-bottom: 16px

### Subtítulo/Excerpt

- Size: 22px (desktop) / 20px (mobile)
- Weight: 400
- Color: #666666
- Line-height: 1.5
- Margin-bottom: 24px

### Meta Info

- Size: 14px
- Weight: 400
- Color: #999999
- Margin-bottom: 40px

### Corpo do Texto (Parágrafos)

- Font: Georgia, Merriweather, ou serif (melhor para leitura longa)
- Alternativa: Inter/SF Pro com weight 400
- Size: 19px (desktop) / 17px (mobile)
- Weight: 400
- Color: #2C2C2C
- Line-height: 1.75 (generoso para leitura)
- Margin-bottom: 24px

### Subtítulos (H2)

- Size: 32px (desktop) / 28px (mobile)
- Weight: 600
- Color: #1A1A1A
- Line-height: 1.3
- Margin-top: 48px
- Margin-bottom: 24px

### Subtítulos (H3)

- Size: 24px (desktop) / 22px (mobile)
- Weight: 600
- Color: #1A1A1A
- Line-height: 1.4
- Margin-top: 36px
- Margin-bottom: 16px

### Links no Texto

- Color: #1A1A1A
- Text-decoration: underline
- Font-weight: 500
- Hover: color: #000000

### Listas

- Margin-left: 24px
- List-style: disc (ul) / decimal (ol)
- Li margin-bottom: 12px
- Li color: #2C2C2C

### Blockquotes

```css
blockquote {
  border-left: 4px solid #E5E5E5;
  padding-left: 24px;
  margin: 32px 0;
  font-style: italic;
  color: #666666;
  font-size: 21px;
  line-height: 1.7;
}
```

### Code Blocks (se necessário)

```css
code {
  background: #F5F5F5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 16px;
  color: #E83E8C;
}

pre code {
  display: block;
  padding: 20px;
  overflow-x: auto;
  line-height: 1.6;
  color: #2C2C2C;
}
```

---

## CTA NO FINAL DO ARTIGO

### Conteúdo

```
────────────────────────────

Interessado em conversar sobre isso?

[Agendar consulta →]
```

### Estilo

**Container:**
- Border-top: 1px solid #E5E5E5
- Padding-top: 48px
- Margin-top: 64px
- Text-align: center

**Texto:**
- Size: 18px
- Weight: 400
- Color: #666666
- Margin-bottom: 24px

**Botão/Link:**
- Size: 16px
- Weight: 500
- Color: #1A1A1A
- Border: 1px solid #1A1A1A
- Padding: 12px 32px
- Border-radius: 4px (ou 0 se preferir)
- Hover: background #1A1A1A, color #FFFFFF
- Transition: all 0.3s ease

---

## BREADCRUMB

```
Blog > Psiquiatria Dimensional
```

**Estilo:**
- Size: 14px
- Weight: 400
- Color: #999999
- Margin-bottom: 24px
- Links: hover underline

---

## NAVEGAÇÃO ENTRE ARTIGOS (OPCIONAL)

No final do artigo, antes do footer:

```
┌──────────────────────────────────────┐
│                                      │
│  ← Artigo Anterior    Próximo →     │
│                                      │
└──────────────────────────────────────┘
```

---

## RESPONSIVIDADE

### Desktop (>1024px)
- Grid: 3 colunas
- Card width: ~360px
- Artigo: 680px max-width
- Font sizes completos

### Tablet (768px - 1024px)
- Grid: 2 colunas
- Card width: ~45%
- Artigo: 680px max-width
- Font sizes: -2px

### Mobile (<768px)
- Grid: 1 coluna
- Card width: 100%
- Artigo: 100% (padding 24px)
- Font sizes reduzidos
- Título artigo: 36px → 28px
- Corpo: 19px → 17px

---

## SEO - BLOG

### Meta Tags (Index)

```html
<title>Blog - Dr. Gustavo Mendes | Psiquiatria e Neurodiversidade</title>
<meta name="description" content="Artigos sobre psiquiatria dimensional, neurodiversidade, uso terapêutico de IA e abordagens não-tradicionais em saúde mental.">
```

### Meta Tags (Artigo)

```html
<title>[Título do Artigo] - Dr. Gustavo Mendes</title>
<meta name="description" content="[Excerpt do artigo - primeiras 155 caracteres]">
<meta property="og:type" content="article">
<meta property="og:title" content="[Título]">
<meta property="og:description" content="[Excerpt]">
<meta property="og:image" content="[URL imagem destacada]">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data (Artigo)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Título do Artigo",
  "image": "URL da imagem",
  "datePublished": "2025-01-12",
  "dateModified": "2025-01-12",
  "author": {
    "@type": "Person",
    "name": "Dr. Gustavo Mendes e Silva",
    "url": "https://drgustavomendes.com"
  },
  "publisher": {
    "@type": "Person",
    "name": "Dr. Gustavo Mendes e Silva"
  },
  "description": "Excerpt do artigo"
}
```

---

## CATEGORIAS/TAGS (OPCIONAL)

Se implementar sistema de categorias:

**Categorias sugeridas:**
- Neurodiversidade
- TDAH
- Autismo (TEA)
- Canabidiol
- Inteligência Artificial
- Psiquiatria Dimensional
- Cuidados Paliativos

**Display:**
- Tag no card: pequena, sutil
- Página de categoria: /blog/categoria/neurodiversidade
- Filtro no index (opcional)

---

## ACESSIBILIDADE

**HTML Semântico:**
```html
<main>
  <h1>Blog</h1>
  
  <section aria-label="Artigos do blog">
    <article>
      <a href="/blog/artigo-1">
        <img src="..." alt="Descrição da imagem">
        <h2>Título do Artigo</h2>
        <p>Excerpt...</p>
        <time datetime="2025-01-12">12 janeiro 2025</time>
      </a>
    </article>
    <!-- repetir -->
  </section>
</main>
```

**Contraste:**
- Títulos (#1A1A1A) em fundo claro: excelente
- Corpo (#2C2C2C) em fundo claro: excelente
- Meta (#999999) em fundo claro: OK (4.5:1)

**Navegação:**
- Tab order lógico
- Focus states visíveis
- Skip to content link

---

## PERFORMANCE

**Otimizações:**
- Imagens: lazy loading, webp format
- Pagination: limit 12 artigos por página
- Infinite scroll: evitar (paginação é melhor para SEO)
- Cache: static generation quando possível

---

## CONTEÚDO INICIAL SUGERIDO

**4 Artigos para Launch:**

1. **Psiquiatria Dimensional: pelo fim do diagnóstico tradicional**
   - Excerpt: Uma nova perspectiva sobre como entendemos e classificamos a saúde mental, movendo-se além de rótulos rígidos...
   - 15 min

2. **Disruptura cognitiva: apoiar o paciente**
   - Excerpt: Estratégias para auxiliar pacientes a quebrar padrões de pensamento negativos e construir nova arquitetura mental...
   - 12 min

3. **IA na saúde: rehumanizar a clínica**
   - Excerpt: Como a tecnologia, bem aplicada, pode liberar o médico para focar no que mais importa: a conexão humana...
   - 10 min

4. **TDAH em adultos: além do estereótipo infantil**
   - Excerpt: Desmistificando o TDAH adulto e entendendo como a condição se manifesta diferentemente ao longo da vida...
   - 18 min

---

## CHECKLIST DE IMPLEMENTAÇÃO

- [ ] CMS escolhido (Markdown, Contentful, WordPress headless?)
- [ ] Slug structure definida (/blog/[slug])
- [ ] Imagens destacadas preparadas (16:9, min 1200x675px)
- [ ] Font escolhida para corpo dos artigos (serif ou sans?)
- [ ] Syntax highlighting se usar code blocks
- [ ] Sitemap.xml incluindo blog posts
- [ ] RSS feed (opcional mas recomendado)
- [ ] Share buttons? (Twitter, LinkedIn, WhatsApp)
- [ ] Reading progress bar? (opcional)
- [ ] Table of contents? (para artigos longos)

---

## NOTAS FINAIS

1. **Tom dos artigos:** Conceitual, não simplista. Para público inteligente.
2. **Frequência:** Qualidade > quantidade. 1-2 artigos/mês é suficiente.
3. **SEO:** Focar em long-tail keywords ("psiquiatria dimensional", "TDAH arquitetura cognitiva")
4. **Evergreen content:** Artigos que permanecem relevantes (não notícias)
5. **Call to action:** Sutil no final, não agressivo

---

**PRÓXIMA PÁGINA:** /curriculo
