# SEÇÃO 1 - HERO

## OBJETIVO
Criar disrupção cognitiva imediata. Fazer a pessoa parar, questionar e sentir que está em um espaço diferente.

---

## CONTEÚDO TEXTUAL

### Hierarquia de Mensagens

**Linha 1 (Provocação):**
```
Você não precisa de mais diagnósticos.
```

**Linha 2 (Proposta):**
```
Você precisa se entender.
```

**Linha 3 (Identidade):**
```
Dr. Gustavo Mendes
```

**Linha 4 (Contexto):**
```
Psiquiatria · São José do Rio Preto
```

---

## NARRATIVA VISUAL

### Layout
```
┌─────────────────────────────────────────┐
│ [Dr. Gustavo Mendes]         [Agendar] │ ← Top bar (transparente inicial)
├─────────────────────────────────────────┤
│                                      [•]│
│                                      [ ]│ ← Dots (lado direito)
│                                      [ ]│
│                                      [ ]│
│              70% VAZIO                  │
│                                         │
│     Você não precisa de mais            │
│          diagnósticos.                  │
│                                         │
│                                         │
│     Você precisa se entender.           │
│                                         │
│                                         │
│              20% VAZIO                  │
│                                         │
│         Dr. Gustavo Mendes              │
│    Psiquiatria · São José do Rio Preto  │
│                                         │
│              10% VAZIO                  │
│                                         │
│                [↓]                      │ ← Indicador de scroll (sutil)
└─────────────────────────────────────────┘
```

### Composição

**Distribuição Espacial:**
- 70% superior: vazio (respiro, tensão visual)
- 20% meio: mensagens principais
- 10% inferior: identidade + scroll indicator

**Alinhamento:**
- Texto: centralizado horizontal
- Vertical: golden ratio (38% do topo para linha 1)

**Fundo:**
- Opção A: Branco puro (#FFFFFF)
- Opção B: Off-white levemente quente (#FAFAF8)
- Opção C: Cinza claríssimo (#F5F5F5)

**Recomendação:** Opção B (off-white quente) - menos clínico, mais humano

---

## TIPOGRAFIA

### Linha 1: "Você não precisa de mais diagnósticos."

**Font:** Inter, SF Pro Display, ou Helvetica Neue
**Size:** 56px (desktop) / 32px (mobile)
**Weight:** 300 (Light)
**Color:** #2C2C2C (quase preto, não puro)
**Letter-spacing:** -0.02em (ligeiramente condensado)
**Line-height:** 1.2

**Tratamento especial:**
- "não precisa" → weight 500 (médio) para contraste sutil
- Ou: toda frase em 300 (mais elegante)

### Linha 2: "Você precisa se entender."

**Font:** Mesma da Linha 1
**Size:** 56px (desktop) / 32px (mobile)
**Weight:** 500 (Medium) - contraste com Linha 1
**Color:** #1A1A1A (mais escuro que Linha 1)
**Letter-spacing:** -0.02em
**Line-height:** 1.2

**Espaçamento entre Linha 1 e 2:**
- Gap: 80px (desktop) / 48px (mobile)
- Cria tensão e pausa para absorção

### Linha 3: "Dr. Gustavo Mendes"

**Font:** Mesma família
**Size:** 20px (desktop) / 18px (mobile)
**Weight:** 500
**Color:** #1A1A1A
**Letter-spacing:** 0
**Line-height:** 1.4

### Linha 4: "Psiquiatria · São José do Rio Preto"

**Font:** Mesma família
**Size:** 16px (desktop) / 15px (mobile)
**Weight:** 400
**Color:** #666666 (cinza médio)
**Letter-spacing:** 0.01em
**Line-height:** 1.4

**Espaçamento entre Linha 3 e 4:**
- Gap: 8px

---

## ELEMENTOS ADICIONAIS

### Scroll Indicator (↓)

**Posicionamento:** 
- Bottom: 40px
- Centralizado horizontal

**Visual:**
- Ícone: seta para baixo (chevron ou custom)
- Size: 24px
- Color: #999999 (cinza claro)
- Stroke-width: 1.5px

**Comportamento:**
- Pulse animation infinita (sobe/desce 8px)
- Fade out ao começar scroll
- Clicável (scroll suave para Seção 2)

### Top Bar

**Estado inicial:**
- Background: transparente
- Logo color: #2C2C2C
- Botão "Agendar": outline, #2C2C2C

**Estado após scroll:**
- Background: rgba(250, 250, 248, 0.95) com backdrop-blur(10px)
- Sombra sutil: 0 1px 3px rgba(0,0,0,0.05)

### Dots Navigation

**Visual:**
- Dot 1 (Hero): ativo - 6px, #2C2C2C
- Dots 2-6: inativos - 4px, #CCCCCC
- Posição: 50% vertical, 40px da direita

---

## ANIMAÇÕES

### Sequência de Entrada (Page Load)

**Total duration:** 3.2s

**0.0s - 0.8s:**
- Fundo fade in (opacity 0 → 1)
- Easing: ease-out
- Background aparece

**0.4s - 1.4s:**
- Linha 1 "Você não precisa de mais diagnósticos."
- Fade in + translate Y (30px → 0)
- Opacity: 0 → 1
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

**1.6s - 2.6s:**
- Linha 2 "Você precisa se entender."
- Fade in + translate Y (30px → 0)
- Opacity: 0 → 1
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

**2.2s - 3.2s:**
- Linhas 3 e 4 (nome + info)
- Fade in (sem translate)
- Opacity: 0 → 1
- Easing: ease-out

**2.8s - início:**
- Scroll indicator
- Fade in + pulse animation inicia
- Opacity: 0 → 1

**Simultâneo (0.2s):**
- Top bar logo fade in
- Dots fade in
- WhatsApp button fade in

### Scroll Indicator Animation (Loop Infinito)

```css
@keyframes pulse-scroll {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.6;
  }
}

animation: pulse-scroll 2s ease-in-out infinite;
```

### Transição para Seção 2 (Scroll)

**Trigger:** Usuário scrolla ou clica em scroll indicator

**Hero (Seção 1) - Saída:**
- Fade out progressivo conforme scroll
- Opacity: 1 → 0 (ao atingir 80% de scroll)
- Parallax sutil: texto sobe mais devagar que background
- Transform: translateY(0 → -50px)

**Manifesto (Seção 2) - Entrada:**
- Fade in progressivo
- Opacity: 0 → 1 (começa em 60% scroll da Seção 1)
- Slide up: translateY(30px → 0)

**Smooth scroll:**
- Duration: 800ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

---

## RESPONSIVIDADE

### Desktop (>1024px)
- Layout conforme especificado acima
- Tipografia em tamanhos completos

### Tablet (768px - 1024px)
- Font sizes: -10%
- Gaps mantidos proporcionais
- Top bar: sem mudanças

### Mobile (<768px)
- Linha 1 e 2: 32px
- Linha 3: 18px
- Linha 4: 15px
- Gap entre Linha 1 e 2: 48px (reduzido de 80px)
- Padding lateral: 24px
- Scroll indicator: 32px do bottom

---

## ESTADOS INTERATIVOS

### Hover em "Agendar" (Top Bar)

```
Estado default:
- Border: 1px solid #2C2C2C
- Background: transparent
- Color: #2C2C2C

Estado hover:
- Background: #2C2C2C
- Color: #FFFFFF
- Transform: translateY(-1px)
- Transition: all 200ms ease
```

### Click no Scroll Indicator

```
- Smooth scroll para Seção 2
- Indicator fade out durante scroll
- Cursor: pointer
- Hover: scale(1.1)
```

---

## CONSIDERAÇÕES TÉCNICAS

### Performance
- Animações usando `transform` e `opacity` (GPU-accelerated)
- `will-change: transform, opacity` nos elementos animados
- Lazy load de elementos abaixo do fold (Seção 2+)

### Acessibilidade
- Contrast ratio: mínimo 4.5:1 (WCAG AA)
- Skip to content link (hidden, teclado)
- Animações respeitam `prefers-reduced-motion`
- Alt text no scroll indicator: "Rolar para próxima seção"

### SEO
```html
<h1>Você não precisa de mais diagnósticos. Você precisa se entender.</h1>
<p>Dr. Gustavo Mendes - Psiquiatria em São José do Rio Preto</p>
```

---

## CONEXÃO COM SEÇÃO 2

### Narrativa
Seção 1 cria **questionamento** ("Você não precisa de mais diagnósticos")
→ Seção 2 oferece **alternativa conceitual** ("Eu busco compreender padrões")

### Visual
Seção 1: minimalismo extremo, vazio, tensão
→ Seção 2: densidade textual, estrutura, manifesto

### Cor
Seção 1: off-white quente (#FAFAF8)
→ Seção 2: pode ser branco puro ou cinza médio (contraste)

### Ritmo
Seção 1: pausa, absorção, contemplação
→ Seção 2: argumentação, densidade, convicção

---

## NOTAS DE IMPLEMENTAÇÃO

1. Testar timing das animações com usuários reais (pode precisar ajustar velocidades)
2. Scroll indicator só aparece em desktop (em mobile, scroll é intuitivo)
3. Considerar A/B test de headlines alternativas
4. Garantir que texto funciona em português e inglês (se necessário no futuro)
5. Parallax deve ser sutil - não causar motion sickness

---

## ALTERNATIVAS CONSIDERADAS (E POR QUE NÃO)

❌ **Foto grande do médico:** quebra minimalismo, foca em pessoa não conceito
❌ **Vídeo de background:** distrai, pesa página, não agregaria valor
❌ **Animação de texto tipo "typewriter":** clichê de landing pages
❌ **CTA grande "Agende Agora":** agressivo demais, quebra experiência contemplativa
❌ **Múltiplas frases/benefícios:** dilui impacto, vira texto de vendas

---

## CHECKLIST DE REVISÃO

- [ ] Textos finais aprovados
- [ ] Fonte licenciada/disponível
- [ ] Cores definidas (código hex)
- [ ] Animações testadas em dispositivos reais
- [ ] Performance otimizada (< 1s first paint)
- [ ] Acessibilidade validada
- [ ] Mobile testado em iOS e Android
- [ ] Transição para Seção 2 suave
- [ ] Top bar funcional em todos os estados
- [ ] WhatsApp button posicionado corretamente
