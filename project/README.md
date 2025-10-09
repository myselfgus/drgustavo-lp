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
- **Hosting:** Cloudflare Workers (via Wrangler)
- **Edge Runtime:** Cloudflare Workers
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
| `npm run build` | Gera o pacote de produção em `./dist/` com `_worker.js` |
| `npm run preview` | Preview do build localmente |
| `npm run deploy` | Executa `npm run build` e publica via `wrangler deploy` |

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

### 3. Cloudflare Workers

O deploy é feito com Wrangler usando o `wrangler.jsonc` deste projeto. Ajuste `account_id` e demais bindings conforme seu ambiente.

```bash
wrangler login
npm run deploy  # executa build e wrangler deploy
```

Se preferir rodar localmente como Worker:

```bash
npm run build
wrangler dev dist/_worker.js/index.js
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

- Pipeline recomendado: GitHub Actions rodando `npm run deploy` para publicar no Worker `drgustavomendes`.
- Deploy manual:

```bash
npm run deploy
```

O comando acima garante o build e usa `wrangler deploy` para publicar o Worker e servir os assets presentes em `dist/`.

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

**Desenvolvido com Astro + Cloudflare Workers** 🚀
