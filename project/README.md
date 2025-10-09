# Dr. Gustavo Mendes - Site Oficial

Site aspiracional de psiquiatria humanizada, focado em neurodiversidade e tratamento com canabidiol.

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
