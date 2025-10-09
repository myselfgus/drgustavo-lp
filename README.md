<<<<<<< HEAD
# Dr. Gustavo Mendes - Landing Page

> Um site aspiracional e minimalista para consultas psiquiátricas — projetado para inspirar transformação.

[![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🎯 Filosofia do Projeto

**"Você não precisa de mais diagnósticos. Você precisa se entender."**

Este site incorpora o conceito de **minimalismo intencional** — cada elemento serve a um propósito. O design foca em transformação ao invés de promoção, direcionado a médicos e indivíduos que buscam cuidado mental pensado e de alta qualidade.

### Princípios Fundamentais

- **70% de espaço vazio** para respiro visual
- **Animações sutis e intencionais** que melhoram sem distrair
- **Hierarquia clara de informação** com espaçamento generoso
- **Performance em primeiro lugar** usando padrões modernos da web

## 📋 Status Atual

Este é um **repositório de planejamento** contendo especificações detalhadas para:

- ✅ Estratégia de conteúdo e mensagens
- ✅ Sistema de design (tipografia, cores, espaçamento)
- ✅ Arquitetura e stack tecnológico
- ✅ Estrutura de componentes
- ⏳ Implementação em progresso

## 🏗️ Arquitetura

### Stack Tecnológico

| Camada | Tecnologia |
|--------|-----------|
| Framework | [Astro 4.x](https://astro.build) com adaptador Cloudflare |
| Hospedagem | Cloudflare Pages + Workers |
| Banco de Dados | Cloudflare D1 (opcional, para blog/depoimentos) |
| Armazenamento | Cloudflare R2 (PDFs, imagens) |
| Cache | Cloudflare KV |
| Chatbot IA | Cloudflare Workers AI |
| Agendamento | [Cal.com](https://cal.com) em modal embarcado |
| Analytics | Cloudflare Web Analytics |
| Deploy | GitHub Actions → Cloudflare Pages |

### Estrutura do Site

```
Homepage: 6 seções fullscreen
├── 1. Hero        → Impacto inicial + proposta de valor
├── 2. Manifesto   → Filosofia (4 pares contrastantes)
├── 3. Para Quem   → Identificação do público-alvo
├── 4. Método      → Como funcionam as consultas
├── 5. Credenciais → Credenciais + depoimentos
└── 6. Contato     → Conversão (Cal.com + WhatsApp)

Páginas tradicionais:
├── /blog          → Artigos conceituais (grid 3 colunas)
├── /curriculo     → CV completo + download PDF
├── /publicacoes   → Artigos acadêmicos
└── /recursos      → Guias e materiais (opcional)
```

## 🎨 Sistema de Design

### Tipografia

- **Fontes:** Inter / SF Pro Display / Helvetica Neue
- **Pesos:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)
- **Tamanhos:** 14px–64px com hierarquia clara
- **Altura de linha:** 1.6–1.8 para legibilidade

### Paleta de Cores

```css
--bg-primary:   #FAFAF8   /* Branco quente off-white */
--bg-secondary: #FFFFFF   /* Branco puro */
--text-primary: #2C2C2C   /* Quase preto */
--text-secondary: #666666 /* Cinza médio */
--text-tertiary: #999999  /* Cinza claro */
--border: #E5E5E5         /* Cinza muito claro */
```

As seções alternam entre backgrounds primário e secundário para ritmo visual.

### Princípios de Animação

- **Performance:** Animar apenas `transform` e `opacity` (aceleração GPU)
- **Timing:** 0.6–0.8s com easing `cubic-bezier(0.16, 1, 0.3, 1)`
- **Gatilhos:** Baseados em scroll com IntersectionObserver
- **Escalonamento:** 0.1s de delay para itens de lista
- **Acessibilidade:** Sempre respeitar `prefers-reduced-motion`

## 🧩 Estrutura de Componentes (Planejada)

```
src/
├── components/
│   ├── Hero.astro           # Seção 1: Primeira impressão
│   ├── Manifesto.astro      # Seção 2: Filosofia
│   ├── ParaQuem.astro       # Seção 3: Público-alvo
│   ├── Metodo.astro         # Seção 4: Metodologia
│   ├── Credenciais.astro    # Seção 5: Credenciais
│   ├── Contato.astro        # Seção 6: Contato/CTA
│   ├── Header.astro         # Barra de navegação superior
│   └── CalEmbed.astro       # Integração Cal.com
├── layouts/
│   ├── BaseLayout.astro     # Template base
│   ├── BlogLayout.astro     # Artigos do blog
│   └── PageLayout.astro     # Páginas tradicionais
├── pages/
│   ├── index.astro          # Homepage
│   ├── blog/                # Artigos do blog
│   ├── curriculo.astro      # Página de CV
│   ├── publicacoes.astro    # Publicações
│   └── recursos.astro       # Recursos
├── content/
│   └── blog/                # Posts do blog em Markdown
└── styles/
    ├── global.css           # Estilos globais
    ├── animations.css       # Definições de animação
    └── variables.css        # Propriedades customizadas CSS
```

## 📄 Documentação

- **[CLAUDE.md](./CLAUDE.md)** — Especificações técnicas detalhadas para desenvolvimento assistido por IA
- **Sistema de Navegação** — Barra superior (auto-hide), pontos laterais (nav seções), botão WhatsApp
- **Performance** — Lazy loading, imagens otimizadas, JavaScript mínimo


## 📝 Licença

© 2025 Dr. Gustavo Mendes. Todos os direitos reservados.

---

**Construído com cuidado para aqueles que buscam transformação.**
=======
Site de psiquiatria humanizada com uso de IA para análise comportamental e tratamento personalizado.

**Localização:** São José do Rio Preto - SP (presencial e online)

**Áreas de atuação:** TDAH, Autismo (TEA), Ansiedade, Depressão, Canabidiol (CBD), Cuidados Paliativos, Traumas/Luto, Insônia.

**Público-alvo:**
- Pessoas que buscam psiquiatria humanizada e compreensão real
- Neurodivergentes (TDAH, TEA) cansados de serem "corrigidos"
- Quem questiona rótulos fáceis e busca entender o porquê, não só o quê
- Quem busca canabidiol com rigor científico, não modismo

**Objetivo do site:** Divulgação profissional para atrair novos pacientes e facilitar agendamento de consultas.

**Tom de comunicação:** Inspiracional e transformacional - sem marketing de vendas. Comunicação direta, precisa, sem floreios.

## 🚀 Stack Técnico

- **Framework:** Astro 4.x
- **Hosting:** Cloudflare Pages
- **Edge Functions:** Cloudflare Workers
- **Styling:** CSS puro com variáveis
- **Analytics:** Cloudflare Web Analytics
- **Agendamento:** Cal.com (embedded modal)

## 📁 Estrutura do Projeto

```
project/
├── src/
│   ├── components/      # Componentes Astro
│   ├── layouts/         # Layouts base
│   ├── pages/           # Páginas e rotas
│   ├── content/         # Content Collections (blog)
│   ├── styles/          # Estilos globais
│   └── lib/             # Utilitários
├── public/              # Assets estáticos
├── functions/           # Cloudflare Workers (API routes)
└── package.json
```

## 🛠️ Comandos

| Comando | Ação |
| --- | --- |
| `npm install` | Instalar dependências |
| `npm run dev` | Iniciar servidor de desenvolvimento (`localhost:4321`) |
| `npm run build` | Build de produção em `./dist/` |
| `npm run preview` | Preview do build localmente |
| `npm run deploy` | Deploy para Cloudflare Pages |

## 🎨 Design System

### Cores

- **Texto primário:** `#1A1A1A`
- **Texto secundário:** `#666666`
- **Background primário:** `#FFFFFF`
- **Background secundário:** `#FAFAF8`

### Tipografia

- **Font:** System fonts (SF Pro Display, Inter fallback)
- **Pesos:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)
- **Tamanhos:** 14px a 64px com hierarquia clara

### Animações

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Duração:** 200ms (rápido) a 800ms (lento)
- **GPU-accelerated:** Usa apenas `transform` e `opacity`
- **Acessibilidade:** Respeita `prefers-reduced-motion`

## 📄 Páginas

### Página Principal (6 Seções Fullscreen)

1. **Hero** - Impacto inicial
2. **Manifesto** - Filosofia da abordagem
3. **Para Quem** - Identificação do público
4. **Método** - Como funciona
5. **Credenciais** - Confiança + prova social
6. **Contato** - Conversão (Cal.com + WhatsApp)

### Páginas Separadas

- `/blog` - Artigos conceituais
- `/curriculo` - CV completo + PDF
- `/publicacoes` - Papers e trabalhos acadêmicos
- `/recursos` - Guias e materiais (opcional)

## 🔧 Configuração

### 1. Variáveis de Ambiente

Copie `.env.example` para `.env` e configure:

```bash
cp .env.example .env
```

### 2. Cal.com

Crie uma conta em [cal.com](https://cal.com) e configure:
- Event Type: "Consulta Inicial"
- Duração: 120 minutos
- Customize o link: `drgustavomendes/consulta-inicial`

### 3. Cloudflare Pages

```bash
wrangler login
wrangler pages project create drgustavomendes
npm run build
npm run deploy
```

## 📱 Responsividade

- **Desktop:** `>1024px` - Layout completo
- **Tablet:** `768px - 1024px` - Ajustes proporcionais
- **Mobile:** `<768px` - Layout otimizado

## ♿ Acessibilidade

- Contrast ratio mínimo 4.5:1 (WCAG AA)
- Navegação por teclado funcional
- Screen reader friendly
- `prefers-reduced-motion` suportado

## 🚀 Deploy

O site é automaticamente deployado via GitHub Actions quando há push para `main`.

Ou deploy manual:

```bash
npm run build
npm run deploy
```

## 📝 Próximos Passos

- [ ] Adicionar conteúdo do blog
- [ ] Configurar Cal.com account
- [ ] Adicionar número de WhatsApp
- [ ] Criar imagens Open Graph
- [ ] Testar em múltiplos dispositivos

## 🤝 Suporte

Para questões técnicas, consulte:
- [Astro Docs](https://docs.astro.build)
- [Cloudflare Docs](https://developers.cloudflare.com)
- [Cal.com Docs](https://cal.com/docs)

---

**Desenvolvido com Astro + Cloudflare** 🚀
>>>>>>> 1b4e76d (5)
