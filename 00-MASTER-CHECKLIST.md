# SITE DR. GUSTAVO MENDES - DECISÕES CONSOLIDADAS
## Checklist Master de Referência

---

## 1. FILOSOFIA DO PROJETO

✅ **Objetivo:** Site aspiracional que inspira, não vende
✅ **Público:** Médicos e pessoas que buscam qualidade estética única
✅ **Diferencial:** Minimalismo intencional, não marketing de saúde tradicional
✅ **Tom:** Transformacional ("versão melhor de si"), não promocional
✅ **Estética:** Clean, espaço em branco como respiro, cada elemento tem propósito

---

## 2. ESTRUTURA GERAL

### Página Principal - 6 Seções Fullscreen

✅ **Seção 1:** Hero - Impacto inicial  
✅ **Seção 2:** Manifesto - Filosofia da abordagem  
✅ **Seção 3:** Para Quem - Identificação do público  
✅ **Seção 4:** Método - Como funciona na prática  
✅ **Seção 5:** Credenciais - Confiança + prova social  
✅ **Seção 6:** Contato - Conversão (Cal.com + WhatsApp)

### Páginas Separadas (tradicionais)

✅ `/blog` - Artigos conceituais  
✅ `/curriculo` - CV completo + PDF download  
✅ `/publicacoes` - Papers e trabalhos acadêmicos  
✅ `/recursos` - Guias e materiais (opcional)

---

## 3. NAVEGAÇÃO

### Top Bar Minimalista
✅ Logo à esquerda: "Dr. Gustavo Mendes" (clicável, volta ao topo)  
✅ Botão à direita: "Agendar" (sempre visível)  
✅ Estado inicial: transparente  
✅ Após scroll: backdrop-blur com background semi-transparente  
✅ Auto-hide ao rolar, reaparece ao parar ou rolar para cima

### Side Dots (Navegação entre Seções)
✅ Posição: lado direito, meio da tela (40px da borda)  
✅ Quantidade: 6 dots (uma para cada seção)  
✅ Visual: dots pequenos (4px inativos, 6px ativo)  
✅ Hover: mostra label da seção discretamente  
✅ Click: scroll suave para seção  
✅ Mobile: ocultar ou mover para bottom

### WhatsApp Button
✅ Posição: bottom-right fixo  
✅ Visual: ícone minimalista outline (não verde padrão)  
✅ Cor: integrada ao design (#2C2C2C ou similar)  
✅ Comportamento: abre WhatsApp com mensagem pré-preenchida  
✅ Link: `https://wa.me/[NÚMERO]?text=Olá,%20vim%20do%20site`

### Links Contextuais (dentro das seções)
✅ **Seção 2 (Manifesto):** Link para Blog ao final  
✅ **Seção 3 (Para Quem):** Links para artigos específicos (TDAH, TEA, CBD)  
✅ **Seção 4 (Método):** Link para guia de preparação  
✅ **Seção 5 (Credenciais):** Links para Currículo + Publicações  
✅ **Seção 6 (Contato):** Footer com todos os links (backup)

---

## 4. AGENDAMENTO

✅ **Sistema:** Cal.com  
✅ **Integração:** Modal (não link externo)  
✅ **Trigger:** Botão "Agendar" (top bar ou seção 6)  
✅ **Visual:** Modal centralizado com Cal.com embed  
✅ **Customização:** Cores do Cal.com combinando com site  
✅ **Fechamento:** X, ESC, ou click fora

---

## 5. CHAT / COMUNICAÇÃO

❌ **Sem chat no site** (decisão: direto para WhatsApp é melhor)  
✅ **Apenas botão WhatsApp** fixo bottom-right

---

## 6. DESIGN VISUAL

### Paleta de Cores (a definir mais especificamente)
✅ Fundo principal: off-white quente (#FAFAF8 ou similar)  
✅ Textos principais: quase preto (#2C2C2C, #1A1A1A)  
✅ Textos secundários: cinza médio (#666666)  
✅ Acentos: a definir (roxo/azul sutis possíveis)  
✅ Alternância de fundos entre seções para ritmo visual

### Tipografia
✅ **Família:** Inter, SF Pro Display, ou Helvetica Neue (modernas, clean)  
✅ **Pesos:** Light (300), Regular (400), Medium (500), Semi-bold (600)  
✅ **Hierarquia clara:** tamanhos variando de 14px a 64px  
✅ **Line-height:** generoso (1.6-1.8) para legibilidade  
✅ **Letter-spacing:** ajustado conforme tamanho (-0.02em em títulos grandes)

### Espaçamento
✅ Muito espaço em branco (70% vazio em Hero)  
✅ Seções fullscreen (100vh)  
✅ Padding lateral: 24px mobile, 40-80px desktop  
✅ Gaps generosos entre elementos

---

## 7. ANIMAÇÕES

### Princípios Gerais
✅ Sutis, não exageradas  
✅ Fade in + translate Y para texto  
✅ Scroll-triggered (aparecem ao entrar na viewport)  
✅ Stagger para listas (0.1s delay entre itens)  
✅ Transitions suaves (0.6-0.8s)  
✅ Easing: cubic-bezier(0.16, 1, 0.3, 1) ou ease-out  
✅ Respeitar `prefers-reduced-motion`

### Performance
✅ Usar `transform` e `opacity` (GPU-accelerated)  
✅ `will-change` em elementos animados  
✅ Lazy load de seções abaixo do fold

---

## 8. CONTEÚDO TEXTUAL POR SEÇÃO

### Seção 1 - Hero
✅ "Você não precisa de mais diagnósticos."  
✅ "Você precisa se entender."  
✅ Dr. Gustavo Mendes  
✅ Psiquiatria · São José do Rio Preto

### Seção 2 - Manifesto
✅ A psiquiatria tradicional categoriza. Eu busco compreender padrões.  
✅ Consultas de 2 horas não são luxo. São o tempo necessário para pensar junto.  
✅ Inteligência artificial não substitui escuta. Ela libera minha mente para estar presente.  
✅ Você não é um diagnóstico do DSM. Você é um sistema complexo em busca de coerência.  
✅ Link: "Leia mais sobre essa abordagem no blog →"

### Seção 3 - Para Quem
✅ Para quem questiona rótulos fáceis.  
✅ Para quem quer entender o porquê, não só o quê.  
✅ Para neurodivergentes cansados de serem "corrigidos".  
✅ Para quem busca canabidiol com rigor científico, não modismo.  
✅ Para quem percebe que sintomas são linguagem, não falhas.  
✅ Links: Artigos sobre TDAH, neurodiversidade, canabidiol

### Seção 4 - Método
✅ Como trabalhamos  
✅ → Primeira consulta: 2 horas de análise sem pressa  
✅ → Você fala, eu ouço e estruturo padrões com IA  
✅ → Construímos hipóteses juntos – seu insight importa  
✅ → Tratamento co-criado: medicação, canabidiol, estratégias comportamentais  
✅ → Relatórios detalhados – você entende o que está acontecendo  
✅ → Reavaliações: acompanhamento real, não receita automática  
✅ Link: "Como se preparar para primeira consulta →"

### Seção 5 - Credenciais + Prova Social
**Lado Esquerdo:**  
✅ Médico Psiquiatra  
✅ CRM-SP 218133  
✅ Certificado em Canabidiol: SCC, IACM  
✅ Experiência: CAPS, emergências psiquiátricas, casos complexos  
✅ Links: Ver currículo completo → / Publicações científicas →

**Lado Direito:**  
✅ Áreas de atuação  
✅ TDAH · Autismo (TEA) · Ansiedade · Depressão · Canabidiol medicinal · Cuidados paliativos · Traumas · Luto · Insônia

**Depoimento:**  
✅ "Pela primeira vez um médico entendeu que meu TDAH não é defeito – é arquitetura cognitiva diferente." - R.L.  
✅ (Adicionar mais 1-2 depoimentos)

### Seção 6 - Contato
✅ Agende sua consulta  
✅ São José do Rio Preto  
✅ Atendimento presencial e online  
✅ Primeira consulta: 2 horas / Retornos: 1 hora  
✅ [Cal.com embed]  
✅ Dúvidas? [WhatsApp]  
✅ Footer: Blog · Currículo · Publicações · Recursos

---

## 9. PÁGINAS SEPARADAS - ESTRUTURA

### /blog
✅ Grid de artigos (3 colunas desktop)  
✅ Cards minimalistas: imagem + título + tempo de leitura  
✅ Sem sidebar, sem tags visuais excessivas  
✅ Página de artigo: max-width 680px, tipografia para leitura longa  
✅ CTA sutil no final: "Agendar consulta"

### /curriculo
✅ Layout tradicional mas clean  
✅ Botão download PDF destacado  
✅ Seções: Formação / Certificações / Experiência / Áreas de atuação  
✅ Duas colunas em desktop (opcional timeline visual)

### /publicacoes
✅ Lista acadêmica reversa cronológica  
✅ Formato: Título / Revista, ano, volume / [DOI/Link] [PDF]  
✅ Seções: Artigos / Capítulos de livros / Apresentações (se houver)

### /recursos (opcional)
✅ Materiais educativos para pacientes e profissionais  
✅ PDFs ou páginas de guias  
✅ Sem paywall ou cadastro

---

## 10. RESPONSIVIDADE

### Desktop (>1024px)
✅ Layout completo conforme especificado  
✅ Seções fullscreen (100vh)  
✅ Dots visíveis lado direito

### Tablet (768px - 1024px)
✅ Font sizes reduzidos proporcionalmente (-10%)  
✅ Ajustes de padding  
✅ Top bar mantido

### Mobile (<768px)
✅ Font sizes específicos (definidos por seção)  
✅ Top bar vira hamburguer (se necessário) ou mantém simplificado  
✅ Dots ocultados ou movidos para bottom  
✅ WhatsApp button menor mas sempre visível  
✅ Seções fullscreen mantidas

---

## 11. ACESSIBILIDADE

✅ Contrast ratio: mínimo 4.5:1 (WCAG AA)  
✅ Skip to content link (hidden)  
✅ Animações respeitam `prefers-reduced-motion`  
✅ Alt texts em todas as imagens  
✅ Navegação por teclado funcional  
✅ Labels adequados em formulários e botões

---

## 12. SEO

✅ Títulos semânticos (H1, H2, H3)  
✅ Meta descriptions únicas por página  
✅ URLs amigáveis (/blog/titulo-do-artigo)  
✅ Structured data (Schema.org para médico/localização)  
✅ Sitemap.xml  
✅ Performance otimizada (Core Web Vitals)

---

## 13. INFORMAÇÕES FALTANTES (A DEFINIR)

⚠️ Número de WhatsApp para link  
⚠️ URL do Cal.com  
⚠️ Depoimentos adicionais (2-3 no total)  
⚠️ Fotos/imagens específicas a usar  
⚠️ Textos completos do currículo  
⚠️ Artigos do blog (conteúdo)  
⚠️ Paleta de cores final (hex codes específicos)  
⚠️ Fonte final escolhida (Inter, SF Pro, ou outra)

---

## 14. PROIBIÇÕES (Do UserPreferences)

❌ Código fake, simulado, placeholder, localhost  
❌ Funções e recursos inexistentes  
❌ Comportamentos que enganem o usuário  
❌ Simplificação deliberada de arquiteturas  
✅ TODO CÓDIGO GERADO É PARA PRODUÇÃO

---

## 15. STACK TÉCNICO (A DEFINIR)

⚠️ Framework: Next.js, Astro, ou outro?  
⚠️ Hosting: Vercel, Netlify, Cloudflare Pages?  
⚠️ CMS para blog: Markdown, Contentful, ou outro?  
⚠️ Biblioteca de animações: Framer Motion, GSAP?  
⚠️ Forms: React Hook Form, Formik?

---

## 16. CHECKLIST DE PROGRESSO

### Conteúdo
- [x] Seção 1 - Hero (completa)
- [ ] Seção 2 - Manifesto
- [ ] Seção 3 - Para Quem
- [ ] Seção 4 - Método
- [ ] Seção 5 - Credenciais
- [ ] Seção 6 - Contato
- [ ] Página Blog (estrutura)
- [ ] Página Currículo (conteúdo)
- [ ] Página Publicações (lista)
- [ ] Página Recursos (opcional)

### Design
- [ ] Paleta de cores final
- [ ] Fonte escolhida e licenciada
- [ ] Imagens selecionadas/criadas
- [ ] Ícones/ilustrações (se necessário)
- [ ] Protótipo visual (Figma?)

### Desenvolvimento
- [ ] Stack definido
- [ ] Estrutura de projeto
- [ ] Componentes base
- [ ] Sistema de animações
- [ ] Integração Cal.com
- [ ] Integração WhatsApp
- [ ] Blog funcional
- [ ] Deploy pipeline

### Testes
- [ ] Performance (Lighthouse)
- [ ] Acessibilidade (WAVE, axe)
- [ ] Cross-browser (Chrome, Safari, Firefox)
- [ ] Mobile (iOS, Android)
- [ ] SEO (validação)

---

## NOTAS IMPORTANTES

1. Este é um site aspiracional, não promocional
2. Cada elemento deve ter propósito claro
3. Minimalismo não é apenas estético - é filosófico
4. Links contextuais > menu pesado
5. WhatsApp direto > chat intermediário
6. Cal.com modal > link externo
7. 6 seções é o equilíbrio entre enxuto e completo
8. Gustavo tem TEA - comunicação direta, precisa, sem floreios
9. Sempre buscar práticas atuais via pesquisa web antes de codificar

---

**ÚLTIMA ATUALIZAÇÃO:** [DATA ATUAL]  
**PRÓXIMO PASSO:** Seção 2 - Manifesto
