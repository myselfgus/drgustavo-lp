# SEÇÃO 3 - PARA QUEM

## OBJETIVO
Criar identificação profunda. A pessoa precisa pensar "isso é comigo" ou "não é para mim" de forma clara. Filtro aspiracional que atrai o público certo e repele o errado (aquele que busca solução rápida/superficial).

---

## CONTEÚDO TEXTUAL

### Estrutura: 5 Frases de Identificação

**Frase 1:**
```
Para quem questiona rótulos fáceis.
```

**Frase 2:**
```
Para quem quer entender o porquê, 
não só o quê.
```

**Frase 3:**
```
Para neurodivergentes cansados 
de serem "corrigidos".
```

**Frase 4:**
```
Para quem busca canabidiol com rigor científico,
não modismo.
```

**Frase 5:**
```
Para quem percebe que sintomas são linguagem,
não falhas.
```

### Links Contextuais (ao final, discretos)

```
Entenda mais sobre:
TDAH em adultos · Neurodiversidade · Canabidiol terapêutico
```

---

## NARRATIVA VISUAL

### Layout

```
┌─────────────────────────────────────────┐
│ [Dr. Gustavo Mendes]         [Agendar] │ ← Top bar
├─────────────────────────────────────────┤
│                                      [ ]│
│                                      [ ]│
│                                      [•]│ ← Dot 3 ativo
│                                      [ ]│
│                                         │
│           [20% VAZIO SUPERIOR]          │
│                                         │
│                                         │
│        Para quem questiona              │
│           rótulos fáceis.               │
│                                         │
│              [espaço]                   │
│                                         │
│        Para quem quer entender          │
│       o porquê, não só o quê.           │
│                                         │
│              [espaço]                   │
│                                         │
│      Para neurodivergentes cansados     │
│        de serem "corrigidos".           │
│                                         │
│              [espaço]                   │
│                                         │
│   Para quem busca canabidiol com        │
│     rigor científico, não modismo.      │
│                                         │
│              [espaço]                   │
│                                         │
│   Para quem percebe que sintomas        │
│       são linguagem, não falhas.        │
│                                         │
│           [20% VAZIO INFERIOR]          │
│                                         │
│     Entenda mais sobre:                 │
│  TDAH · Neurodiversidade · Canabidiol   │
│                                         │
└─────────────────────────────────────────┘
```

### Composição

**Alinhamento:**
- Texto: centralizado horizontal
- Vertical: distribuição equilibrada com espaços generosos

**Distribuição Espacial:**
- 20% superior: vazio (respiro)
- 60% meio: 5 frases com gaps
- 20% inferior: vazio + links contextuais

**Gaps entre frases:**
- Desktop: 100px
- Mobile: 60px

**Fundo:**
- **Fundo escuro** (contraste forte com Seção 2 branca)
- Opção A: Preto profundo (#0A0A0A)
- Opção B: Cinza grafite escuro (#1A1A1A)
- Opção C: Azul escuro profundo (#0F1419)

**Recomendação:** Opção B (cinza grafite #1A1A1A) - elegante, sério, não "dramático" demais

**Textura/Pattern (opcional):**
- Noise sutil 3% opacity (adiciona profundidade)
- Ou: gradiente radial muito sutil do centro (5% mais claro)

---

## TIPOGRAFIA

### Estrutura Geral

Todas as frases seguem padrão similar, com variações de ênfase:

**Base:**
- Font: Inter, SF Pro Display, ou Helvetica Neue
- Color: #FFFFFF (branco puro)
- Line-height: 1.4
- Text-align: center
- Max-width: 800px (centralizado)

### Frase 1: "Para quem questiona rótulos fáceis."

- Size: 36px (desktop) / 26px (mobile)
- Weight: 400 (Regular)
- "questiona" → weight 500 (ênfase sutil)

### Frase 2: "Para quem quer entender o porquê, não só o quê."

- Size: 36px (desktop) / 26px (mobile)
- Weight: 400
- "o porquê" → weight 600 (destaque)
- "não só o quê" → weight 300 + opacity 0.7 (contraste)

### Frase 3: "Para neurodivergentes cansados de serem "corrigidos"."

- Size: 36px (desktop) / 26px (mobile)
- Weight: 400
- "neurodivergentes" → weight 600 (palavra-chave importante)
- ""corrigidos"" → aspas visuais + italic (ironia/crítica)

### Frase 4: "Para quem busca canabidiol com rigor científico, não modismo."

- Size: 36px (desktop) / 26px (mobile)
- Weight: 400
- "rigor científico" → weight 600
- "não modismo" → weight 300 + opacity 0.7

### Frase 5: "Para quem percebe que sintomas são linguagem, não falhas."

- Size: 36px (desktop) / 26px (mobile)
- Weight: 400
- "linguagem" → weight 600
- "não falhas" → weight 300 + opacity 0.7

### Links Contextuais

**Título "Entenda mais sobre:"**
- Size: 14px
- Weight: 500
- Color: rgba(255, 255, 255, 0.5)
- Letter-spacing: 0.05em
- Margin-bottom: 12px

**Links:**
- Size: 16px
- Weight: 400
- Color: rgba(255, 255, 255, 0.7) (default)
- Color hover: #FFFFFF
- Separator: · (middle dot, opacity 0.3)
- Text-decoration: none (default)
- Text-decoration hover: underline
- Transition: all 0.2s ease

---

## ANIMAÇÕES

### Entrada da Seção (vindo da Seção 2)

**Trigger:** Scroll atinge 60% da Seção 2

**Background transition:**
- Branco (#FFFFFF) → Escuro (#1A1A1A)
- Duration: 800ms
- Easing: ease-in-out
- Gradual blend, não corte abrupto

### Animação das Frases (Scroll-Triggered Individual)

**Comportamento:** Cada frase anima quando scroll a traz para viewport

**Sistema de Stacking Visual:**
- Frases anteriores permanecem visíveis mas com opacity reduzida
- Apenas a frase "atual" (centralizada) está em 100% opacity
- Cria efeito de "stack" progressivo

**Frase 1 - Entrada:**

*Trigger:* Scroll traz seção para 30% visível

- Fade in + translateY(40px → 0)
- Opacity: 0 → 1
- Duration: 700ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Delay: 0ms

**Frase 2 - Entrada:**

*Trigger:* Frase entra em 50% do viewport

- Fade in + translateY(40px → 0)
- Opacity: 0 → 1
- Duration: 700ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- **Frase 1:** opacity reduz para 0.4 (efeito stack)

**Frase 3 - Entrada:**

*Trigger:* Frase entra em 50% do viewport

- Mesma animação
- **Frases anteriores:** opacity 0.4
- **Frase 3:** opacity 1

**Frase 4 - Entrada:**

- Mesma animação
- Stack effect continua

**Frase 5 - Entrada:**

- Mesma animação
- Stack effect continua

### Comportamento do Stack Effect

```css
/* Exemplo de lógica */
.frase {
  opacity: 0.4;  /* default (já passou) */
  transition: opacity 0.5s ease;
}

.frase.active {
  opacity: 1;  /* frase atual centralizada */
}

.frase.upcoming {
  opacity: 0;  /* ainda não apareceu */
}
```

### Links Contextuais

**Entrada:**
- Fade in após Frase 5 completar animação
- Delay: 600ms
- Duration: 500ms
- Translate: Y(20px → 0)

**Hover individual nos links:**
```css
transition: all 0.2s ease;

&:hover {
  color: #FFFFFF;
  text-decoration: underline;
  transform: translateY(-2px);
}
```

### Transição para Seção 4 (Scroll)

**Para Quem (Seção 3) - Saída:**
- Fade out progressivo durante scroll
- Opacity: 1 → 0 (entre 70-100% de scroll)
- Background mantém escuro até 80% scroll
- Frases: translateY(0 → -50px) com parallax

**Método (Seção 4) - Entrada:**
- Background: escuro → claro (transição gradual)
- Fade in progressivo
- Opacity: 0 → 1 (começa em 60% scroll da Seção 3)
- Conteúdo: translateY(30px → 0)

---

## RESPONSIVIDADE

### Desktop (>1024px)
- Layout conforme especificado
- Font-size: 36px
- Gaps: 100px
- Max-width texto: 800px
- Padding lateral: 80px

### Tablet (768px - 1024px)
- Font-size: 30px
- Gaps: 80px
- Max-width texto: 700px
- Padding lateral: 60px

### Mobile (<768px)
- Font-size: 26px
- Gaps: 60px
- Max-width texto: 100% (minus padding)
- Padding lateral: 24px
- Frases podem quebrar em 2-3 linhas (OK)
- Links: stack vertical (um por linha)

---

## ESTADOS INTERATIVOS

### Hover nos Links

```
Link TDAH:
- Default: rgba(255,255,255,0.7)
- Hover: #FFFFFF + underline + translateY(-2px)

Link Neurodiversidade:
- Mesma interação

Link Canabidiol:
- Mesma interação
```

### Click nos Links

- Navegação suave para artigo específico do blog
- Ou: abre modal com preview do artigo (opcional)
- Ou: vai para /blog#[categoria]

---

## CONSIDERAÇÕES TÉCNICAS

### Performance

**Otimizações:**
- Background escuro: solid color (não gradient complexo)
- Animações: apenas transform/opacity
- Intersection Observer para scroll triggers
- Will-change aplicado apenas durante animação

**Exemplo de trigger:**
```javascript
const observerOptions = {
  threshold: 0.5,  // 50% visível
  rootMargin: "0px 0px -20% 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Reduzir opacity das anteriores
    }
  });
}, observerOptions);
```

### Acessibilidade

**HTML Semântico:**
```html
<section 
  aria-label="Para quem é este atendimento"
  class="secao-para-quem"
>
  <h2 class="sr-only">Perfil do Público</h2>
  
  <p class="frase">Para quem questiona rótulos fáceis.</p>
  <p class="frase">Para quem quer entender o porquê...</p>
  <!-- etc -->
  
  <nav aria-label="Artigos relacionados">
    <p class="label">Entenda mais sobre:</p>
    <a href="/blog/tdah">TDAH em adultos</a>
    <a href="/blog/neurodiversidade">Neurodiversidade</a>
    <a href="/blog/canabidiol">Canabidiol terapêutico</a>
  </nav>
</section>
```

**Contraste:**
- Branco (#FFFFFF) em fundo escuro (#1A1A1A)
- Ratio: 16.56:1 (excelente, supera WCAG AAA)

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .frase {
    animation: none;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### SEO

**Structured Data (opcional):**
```json
{
  "@type": "MedicalBusiness",
  "medicalSpecialty": [
    "TDAH",
    "Autismo",
    "Ansiedade",
    "Canabidiol"
  ]
}
```

---

## CONEXÕES NARRATIVAS

### Vindo da Seção 2 (Manifesto)

**Manifesto:** Explica COMO o médico trabalha (filosofia)
→ **Para Quem:** Descreve QUEM se beneficia dessa abordagem

**Transição Conceitual:**
- Manifesto = terceira pessoa, geral ("Eu busco...")
- Para Quem = segunda pessoa, específico ("Para você que...")

**Transição Visual:**
- Branco (clareza) → Escuro (intimidade)
- Densidade/estrutura → Espaçamento/contemplação
- Split screen → Centralizado
- Racional → Emocional

**Transição de Tom:**
- Manifesto = declarativo, assertivo
- Para Quem = convidativo, identificador

### Indo para Seção 4 (Método)

**Para Quem:** Estabelece quem se identifica
→ **Método:** Explica como funciona na prática

**Transição Conceitual:**
- Para Quem = identificação pessoal
- Método = processo concreto

**Transição Visual:**
- Escuro → Claro (volta à praticidade)
- Centralizado → Assimétrico/estruturado
- Emocional → Pragmático

**Lógica da Jornada:**
1. Hero: provocação
2. Manifesto: filosofia
3. Para Quem: identificação ← **filtro aspiracional**
4. Método: como funciona (só quem se identificou chega aqui)

---

## VARIAÇÕES CONSIDERADAS

### Número de Frases

**3 frases:**
❌ Pouco específico
❌ Não cobre diversidade do público

**5 frases:** ✅ 
- Cobre principais perfis
- Ritmo adequado de scroll
- Não cansa

**7+ frases:**
❌ Cansativo
❌ Perde impacto

### Estilo Visual

**Fundo claro com texto escuro:**
❌ Não cria contraste com Seção 2
❌ Perde oportunidade de criar momento íntimo

**Fundo escuro com texto branco:** ✅
- Contraste marcante
- Cria atmosfera diferente
- Intimidade, seriedade

**Gradientes ou imagens de fundo:**
❌ Distrairiam do texto identificador
✅ Solid color mantém foco

### Animações Alternativas

**Todas as frases aparecem juntas:**
❌ Perde progressão
❌ Muito conteúdo de uma vez

**Stack effect com opacity:** ✅
- Cria progressão
- Mantém contexto (frases anteriores visíveis)
- Interessante visualmente

**Typewriter effect:**
❌ Clichê
❌ Lento demais

---

## COPY ALTERNATIVO (PARA CONSIDERAÇÃO)

Se quiser testar variações:

**Frase 1 Alt:**
"Para quem rejeita diagnósticos fáceis."

**Frase 3 Alt:**
"Para neurodivergentes que não querem ser 'normalizados'."

**Frase 5 Alt:**
"Para quem vê sintomas como comunicação, não erro."

---

## CHECKLIST DE REVISÃO

- [ ] Textos finais das 5 frases aprovados
- [ ] Cor de fundo escuro definida (hex code)
- [ ] Ênfases tipográficas confirmadas (palavras em bold)
- [ ] Links para artigos do blog definidos
- [ ] Stack effect testado (opacity progressiva funciona?)
- [ ] Timing das animações adequado ao ritmo de leitura
- [ ] Transição de/para outras seções suave
- [ ] Contraste validado (WCAG AAA)
- [ ] Mobile testado (frases quebram bem?)
- [ ] Links contextuais funcionais

---

## NOTAS DE IMPLEMENTAÇÃO

1. **Stack effect é crucial:** Testar diferentes opacities (0.3, 0.4, 0.5) para frases "passadas"
2. **Scroll speed:** Animação deve ser rápida o suficiente para não frustrar, mas dar tempo de ler
3. **Mobile:** Considerar reduzir gaps para 50px (cabe melhor na tela)
4. **A/B test:** Testar ordem das frases (qual é mais impactante primeiro?)
5. **Analytics:** Medir scroll depth - quantos chegam até Frase 5?

---

## ALINHAMENTO COM FILOSOFIA DO PROJETO

✅ **Filtro aspiracional:** "Não é para todos" - atrai certo, repele errado  
✅ **Tom direto:** Sem floreios, comunicação clara (TEA-friendly)  
✅ **Identificação profunda:** Frases específicas, não genéricas  
✅ **Visual único:** Fundo escuro raro em sites médicos  
✅ **Minimalismo:** Apenas texto essencial, sem distrações  
✅ **Links contextuais:** Aprofundamento disponível mas não forçado  

---

**PRÓXIMA SEÇÃO:** Seção 4 - Método (volta à praticidade, explica processo)
