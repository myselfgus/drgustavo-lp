# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **planning repository** for Dr. Gustavo Mendes' psychiatry website - an aspirational, minimalist site that inspires rather than sells. The repository currently contains detailed specification documents for content, design, and architecture. No code has been implemented yet.

**Philosophy:** Transformational ("versão melhor de si"), not promotional. Minimalismo intencional where every element has purpose. Targeted at physicians and people seeking unique aesthetic quality.

## Technology Stack (Planned)

- **Framework:** Astro 4.x with Cloudflare adapter
- **Hosting:** Cloudflare Pages + Workers
- **Database:** Cloudflare D1 (optional, for blog posts/testimonials)
- **Storage:** Cloudflare R2 (PDFs, high-quality images)
- **Cache:** Cloudflare KV
- **AI Integration:** Cloudflare Workers AI (chatbot functionality)
- **Scheduling:** Cal.com embedded modal
- **Analytics:** Cloudflare Web Analytics
- **Deployment:** GitHub Actions → Cloudflare Pages

## Project Structure (Planned)

```
src/
├── components/        # Astro components for each section
│   ├── Hero.astro           # Section 1
│   ├── Manifesto.astro      # Section 2
│   ├── ParaQuem.astro       # Section 3
│   ├── Metodo.astro         # Section 4
│   ├── Credenciais.astro    # Section 5
│   ├── Contato.astro        # Section 6
│   ├── Header.astro         # Top bar navigation
│   └── CalEmbed.astro       # Cal.com integration
├── layouts/
│   ├── BaseLayout.astro     # Base template
│   ├── BlogLayout.astro     # Blog articles
│   └── PageLayout.astro     # Traditional pages
├── pages/
│   ├── index.astro          # Homepage (6 fullscreen sections)
│   ├── blog/                # Blog articles
│   ├── curriculo.astro      # CV page
│   ├── publicacoes.astro    # Publications
│   └── recursos.astro       # Resources (optional)
├── content/                 # Content Collections
│   └── blog/                # Markdown blog posts
└── styles/
    ├── global.css           # Global styles
    ├── animations.css       # Animation definitions
    └── variables.css        # CSS variables
```

## Site Architecture

### Main Page: 6 Fullscreen Sections

1. **Hero** - Initial impact ("Você não precisa de mais diagnósticos. Você precisa se entender.")
2. **Manifesto** - Philosophy (4 contrasting pairs explaining approach)
3. **Para Quem** - Target audience identification
4. **Método** - How consultations work
5. **Credenciais** - Credentials + social proof + testimonials
6. **Contato** - Conversion (Cal.com + WhatsApp)

### Traditional Pages (Separate Routes)

- `/blog` - Conceptual articles (3-column grid, minimalist cards)
- `/curriculo` - Full CV + PDF download
- `/publicacoes` - Academic papers and works
- `/recursos` - Guides and materials (optional)

## Design System

### Typography

- **Font Family:** Inter, SF Pro Display, or Helvetica Neue (modern, clean)
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)
- **Sizes:** 14px to 64px with clear hierarchy
- **Line-height:** 1.6-1.8 for readability
- **Letter-spacing:** Adjusted per size (-0.02em for large titles)

### Color Palette

- **Background Primary:** Off-white warm (#FAFAF8 or similar)
- **Background Secondary:** Pure white (#FFFFFF)
- **Text Primary:** Near-black (#2C2C2C, #1A1A1A)
- **Text Secondary:** Medium gray (#666666)
- **Text Tertiary:** Light gray (#999999)
- **Border:** Very light gray (#E5E5E5)
- Sections alternate backgrounds for visual rhythm

### Spacing

- **Mobile padding:** 24px lateral
- **Desktop padding:** 40-80px lateral
- **Sections:** Fullscreen (100vh)
- **Generous gaps:** between elements
- **70% empty space** in Hero section

### Animations

**Principles:**
- Subtle, not exaggerated
- Fade in + translate Y for text
- Scroll-triggered (IntersectionObserver)
- Stagger for lists (0.1s delay between items)
- Smooth transitions (0.6-0.8s)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` or ease-out
- Always respect `prefers-reduced-motion`

**Performance:**
- Use `transform` and `opacity` only (GPU-accelerated)
- Apply `will-change` to animated elements
- Lazy load sections below the fold

## Navigation System

### Top Bar (Minimalist)

- **Logo left:** "Dr. Gustavo Mendes" (clickable, returns to top)
- **Button right:** "Agendar" (always visible)
- **Initial state:** Transparent
- **After scroll:** `backdrop-blur` with semi-transparent background
- **Auto-hide:** Hides on scroll down, reappears on scroll up or stop

### Side Dots (Section Navigation)

- **Position:** Right side, middle of screen (40px from edge)
- **Quantity:** 6 dots (one per section)
- **Visual:** Small dots (4px inactive, 6px active)
- **Hover:** Shows section label discretely
- **Click:** Smooth scroll to section
- **Mobile:** Hide or move to bottom

### WhatsApp Button

- **Position:** Bottom-right fixed
- **Visual:** Minimalist outline icon (not standard green)
- **Color:** Integrated with design (#2C2C2C or similar)
- **Link:** `https://wa.me/[NUMBER]?text=Olá,%20vim%20do%20site`

### Contextual Links (Within Sections)

- Section 2 (Manifesto): Link to Blog
- Section 3 (Para Quem): Links to specific articles (ADHD, ASD, CBD)
- Section 4 (Método): Link to preparation guide
- Section 5 (Credenciais): Links to CV + Publications
- Section 6 (Contato): Footer with all links (backup)

## Key Integrations

### Cal.com

- **System:** Cal.com embedded modal (not external link)
- **Trigger:** "Agendar" button (top bar or section 6)
- **Visual:** Centered modal with Cal.com embed
- **Customization:** Colors matching site theme
- **Close:** X button, ESC key, or click outside

**Implementation:**
```typescript
// Use Cal.com embed script
Cal("inline", {
  elementOrSelector: "#cal-embed",
  calLink: "drgustavomendes/consulta-inicial",
  layout: "month_view",
  config: { theme: "light", branding: { brandColor: "#1A1A1A" } }
});
```

### Cloudflare Workers AI (Planned)

**Use case:** Chatbot for mental health questions (does not replace medical consultation)

**Models:**
- `@cf/meta/llama-3-8b-instruct` - Main chatbot
- `@cf/mistral/mistral-7b-instruct` - Sentiment analysis

**Implementation location:** `functions/api/chat.ts`

## Development Commands

### Setup (When Implementation Begins)

```bash
# Create Astro project
npm create astro@latest drgustavomendes-site

# Install dependencies
npm install

# Add Cloudflare adapter
npm install @astrojs/cloudflare

# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login
```

### Development

```bash
# Start dev server
npm run dev                    # Astro dev server at http://localhost:4321

# Build for production
npm run build                  # Output to dist/

# Preview production build
npm run preview

# Deploy to Cloudflare Pages
wrangler pages deploy dist
```

### Testing (Planned)

```bash
# Unit tests
npm run test                   # Vitest

# E2E tests
npm run test:e2e              # Playwright

# Performance audit
npm run lighthouse            # Lighthouse CI
```

## Implementation Guidelines

### Content Sections - Critical Details

**Hero (Section 1):**
- 70% white space in upper portion
- Staged animation: background → line 1 (0.4s delay) → line 2 (1.6s delay) → identity (2.2s)
- Scroll indicator appears at 2.8s with pulse animation
- See `secao-01-hero.md` for complete specifications

**Manifesto (Section 2):**
- Split screen: 50% text (left) / 50% elegant void or abstract image (right)
- 4 contrasting pairs: traditional approach vs. new approach
- Each pair: light weight + gray color (problem) → medium weight + black (solution)
- Gaps: 60px between pairs (desktop), 40px (mobile)
- See `secao-02-manifesto.md` for complete specifications

**All Sections:**
- Refer to `00-MASTER-CHECKLIST.md` for complete content and structure
- Check individual `secao-XX-*.md` files for detailed specifications

### Accessibility Requirements

- **Contrast ratio:** Minimum 4.5:1 (WCAG AA)
- **Skip to content** link (hidden, keyboard accessible)
- **Animations:** Respect `prefers-reduced-motion`
- **Alt texts:** All images must have descriptive alt text
- **Keyboard navigation:** All interactive elements accessible
- **Semantic HTML:** Proper heading hierarchy (H1, H2, H3)
- **ARIA labels:** On navigation elements and sections

### SEO Requirements

- **Meta tags:** Unique title and description per page
- **Structured data:** Schema.org for Physician and MedicalBusiness
- **Sitemap:** Auto-generated via `@astrojs/sitemap`
- **URLs:** Friendly format (`/blog/titulo-do-artigo`)
- **Performance:** Core Web Vitals optimized, Lighthouse score > 90

### Performance Standards

- **First Paint:** < 1s
- **Images:** WebP format, lazy loaded, optimized via Astro Image or Cloudflare Images
- **Fonts:** System fonts preferred, or self-hosted with `font-display: swap`
- **CSS:** Critical CSS inline, rest loaded asynchronously
- **JS:** Astro Islands for partial hydration (`client:visible`, `client:idle`)

### Security

**Headers (via Cloudflare Workers middleware):**
```typescript
'X-Frame-Options': 'DENY'
'X-Content-Type-Options': 'nosniff'
'Referrer-Policy': 'strict-origin-when-cross-origin'
'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://app.cal.com; ..."
```

**Rate limiting:** Implement on API routes using Cloudflare Workers

## Prohibited Practices

From UserPreferences - **CRITICAL:**

❌ No fake, simulated, placeholder, or localhost code
❌ No non-existent functions or features
❌ No behaviors that deceive the user
❌ No deliberate simplification of architectures
✅ **ALL GENERATED CODE IS FOR PRODUCTION**

## Important Context

- **Dr. Gustavo has ASD:** Communication should be direct, precise, without embellishments
- **Target audience:** Physicians and quality-seeking individuals
- **Tone:** Transformational, not promotional
- **Philosophy:** Each element must have clear purpose
- **No chat widget:** Direct to WhatsApp is preferred (already decided)

## Reference Documents

- `00-MASTER-CHECKLIST.md` - Master reference for all decisions and structure
- `STACK-TECNICA.md` - Complete technical stack specifications
- `secao-01-hero.md` through `secao-06-contato.md` - Detailed section specs
- `pagina-*.md` - Specifications for individual pages (blog, CV, publications)

## Current Status

**This is a planning repository.** No code implementation has started yet.

**Next steps when implementation begins:**

1. Create Astro project with Cloudflare adapter
2. Set up project structure (components, layouts, pages)
3. Implement design system (CSS variables, typography)
4. Build 6 main sections sequentially
5. Integrate Cal.com and WhatsApp
6. Implement blog functionality
7. Add traditional pages (CV, publications)
8. Set up Cloudflare Workers for AI chatbot
9. Configure CI/CD with GitHub Actions
10. Performance optimization and testing

## Design Philosophy Reminders

When implementing:

- **Minimalism is philosophical, not just aesthetic**
- **70% empty space in Hero is intentional** - creates tension and impact
- **Animations should be subtle** - enhance, don't distract
- **Links are contextual** - embedded in natural reading flow, not heavy menus
- **This is aspirational, not promotional** - focus on transformation, understanding, patterns
- **Each element serves a purpose** - question every addition
- **White space is a feature** - resist urge to fill it
