# SEÇÃO 6 - CONTATO

## OBJETIVO
Facilitar conversão de forma elegante e sem fricção. Não é "venda agressiva", é disponibilização clara de como dar o próximo passo. Cal.com integrado, informações práticas, e acesso a conteúdo adicional.

---

## CONTEÚDO TEXTUAL

### Título Principal
```
Agende sua consulta
```

### Informações Práticas

**Localização:**
```
São José do Rio Preto
Atendimento presencial e online
```

**Duração:**
```
Primeira consulta: 2 horas
Retornos: 1 hora
```

### Call to Action
```
[Cal.com embed - calendário visual]
```

### Alternativa de Contato
```
Dúvidas? Fale pelo WhatsApp
```

### Footer - Links Navegação

```
Blog · Currículo · Publicações · Recursos
```

### Footer - Informações Legais (opcional)

```
© 2025 Dr. Gustavo Mendes e Silva
CRM-SP 218133
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
│                                      [ ]│
│                                      [ ]│
│                                      [ ]│
│                                      [•]│ ← Dot 6 ativo
│                                         │
│           [15% VAZIO SUPERIOR]          │
│                                         │
│                                         │
│         Agende sua consulta             │
│                                         │
│            [gap 32px]                   │
│                                         │
│      São José do Rio Preto              │
│   Atendimento presencial e online       │
│                                         │
│            [gap 20px]                   │
│                                         │
│      Primeira consulta: 2 horas         │
│           Retornos: 1 hora              │
│                                         │
│            [gap 48px]                   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │   [CAL.COM EMBED]               │   │
│   │   Calendário visual             │   │
│   │   com slots disponíveis         │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│            [gap 32px]                   │
│                                         │
│   Dúvidas? Fale pelo WhatsApp           │
│                                         │
│            [20% VAZIO]                  │
│                                         │
│  ─────────────────────────────────────  │ ← linha sutil
│                                         │
│   Blog · Currículo · Publicações        │
│                                         │
│   © 2025 Dr. Gustavo Mendes e Silva     │
│            CRM-SP 218133                │
│                                         │
└─────────────────────────────────────────┘
```

### Composição

**Alinhamento:**
- Tudo centralizado horizontal
- Título, infos, Cal.com, WhatsApp: centro da tela
- Footer: centro também

**Distribuição Vertical:**
- 15% superior: vazio
- ~50% meio: conteúdo principal (título → Cal.com → WhatsApp)
- 20% inferior: vazio antes do footer
- ~15% footer: links e copyright

**Cal.com Container:**
- Max-width: 600px (desktop)
- Max-width: 100% (mobile, minus padding)
- Centralizado
- Background: branco se fundo for off-white, ou card com sutil elevation

**Fundo:**
- Opção A: Branco puro (#FFFFFF)
- Opção B: Off-white (#FAFAF8) 
- Opção C: Cinza claríssimo (#F7F7F7)

**Recomendação:** Off-white (#FAFAF8) - consistente com Hero, mais suave

**Footer:**
- Border-top: 1px solid rgba(0,0,0,0.08)
- Padding-top: 40px
- Separação clara mas elegante

---

## TIPOGRAFIA

### Título Principal

**"Agende sua consulta"**
- Font: Inter, SF Pro Display
- Size: 48px (desktop) / 32px (mobile)
- Weight: 300 (Light)
- Color: #1A1A1A
- Line-height: 1.2
- Text-align: center
- Margin-bottom: 32px

### Informações Práticas

**"São José do Rio Preto"**
- Size: 20px (desktop) / 18px (mobile)
- Weight: 500 (Medium)
- Color: #2C2C2C
- Line-height: 1.5
- Text-align: center

**"Atendimento presencial e online"**
- Size: 18px (desktop) / 16px (mobile)
- Weight: 400
- Color: #666666
- Line-height: 1.5
- Text-align: center
- Margin-top: 8px

**Gap:** 20px

**"Primeira consulta: 2 horas"**
- Size: 16px
- Weight: 400
- Color: #666666
- Line-height: 1.6
- Text-align: center

**"2 horas"** e **"1 hora"**
- Weight: 600 (destaque)
- Color: #1A1A1A

**"Retornos: 1 hora"**
- Size: 16px
- Weight: 400
- Color: #666666
- Line-height: 1.6
- Text-align: center

### Texto WhatsApp

**"Dúvidas? Fale pelo WhatsApp"**
- Size: 16px
- Weight: 400
- Color: #666666 (default)
- Color hover: #1A1A1A
- Text-align: center
- Link: underline no hover
- Transition: all 0.2s ease

### Footer - Links

**"Blog · Currículo · Publicações · Recursos"**
- Size: 14px
- Weight: 400
- Color: #999999 (default)
- Color hover: #1A1A1A
- Separator (·): opacity 0.4
- Text-decoration: none (default)
- Text-decoration hover: underline
- Line-height: 1.8

### Footer - Copyright

**"© 2025 Dr. Gustavo Mendes e Silva"**
- Size: 13px
- Weight: 400
- Color: #CCCCCC
- Line-height: 1.6
- Margin-top: 16px

**"CRM-SP 218133"**
- Size: 13px
- Weight: 400
- Color: #CCCCCC
- Line-height: 1.6

---

## CAL.COM INTEGRATION

### Embed Configuration

**Método de integração:**
- Inline embed (não modal nesta seção)
- JavaScript SDK do Cal.com
- Customização visual para match com site

**Customização Visual:**
```javascript
Cal("init", {
  theme: "light",
  styles: {
    branding: {
      brandColor: "#1A1A1A"  // cor principal do site
    }
  },
  hideEventTypeDetails: false,
  layout: "month_view"
});
```

**Container:**
```css
.cal-embed-container {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);  /* elevation sutil */
  background: #FFFFFF;
}
```

**Responsive:**
- Desktop: 600px width
- Tablet: 90% width
- Mobile: 100% width (minus 24px padding lateral)

**Loading State:**
```
[Skeleton loader com pulse animation]
enquanto Cal.com carrega
```

---

## ANIMAÇÕES

### Entrada da Seção (vindo da Seção 5)

**Trigger:** Scroll atinge 60% da Seção 5

**Background transition:**
- Mantém consistência (sem mudança brusca)
- Se Seção 5 era off-white, mantém
- Fade in: opacity 0 → 1
- Duration: 600ms

### Título

**Entrada:**
- Fade in + translateY(30px → 0)
- Opacity: 0 → 1
- Duration: 700ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Delay: 400ms

### Informações Práticas

**Stagger sequencial:**

*Localização:*
- Fade in
- Delay: 700ms
- Duration: 500ms

*Formato (presencial/online):*
- Fade in
- Delay: 850ms
- Duration: 500ms

*Duração consultas:*
- Fade in
- Delay: 1000ms
- Duration: 500ms

### Cal.com Embed

**Container entrada:**
- Fade in + scale(0.98 → 1)
- Opacity: 0 → 1
- Duration: 800ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Delay: 1300ms

**Shadow subtle pulse (opcional):**
```css
@keyframes subtle-pulse-shadow {
  0%, 100% {
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  50% {
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  }
}

/* Aplicar apenas uma vez ao aparecer */
animation: subtle-pulse-shadow 2s ease-in-out 1;
```

### WhatsApp Link

**Entrada:**
- Fade in
- Delay: 1800ms
- Duration: 400ms

**Hover:**
```css
transition: all 0.2s ease;

&:hover {
  color: #1A1A1A;
  text-decoration: underline;
  transform: translateY(-2px);
}
```

### Footer

**Entrada:**
- Fade in quando scroll atinge 80% da seção
- Opacity: 0 → 1
- Duration: 600ms
- Não animar no primeiro load (apenas scroll-triggered)

**Links hover:**
```css
transition: all 0.2s ease;

&:hover {
  color: #1A1A1A;
  text-decoration: underline;
}
```

### Scroll para Topo (comportamento)

**Click no logo (top bar):**
- Smooth scroll para Seção 1 (Hero)
- Duration: 1200ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

---

## RESPONSIVIDADE

### Desktop (>1024px)
- Layout conforme especificado
- Cal.com: 600px width
- Font sizes completos
- Padding lateral: 10%

### Tablet (768px - 1024px)
- Cal.com: 90% width (max 600px)
- Font sizes: -2px
- Padding lateral: 8%

### Mobile (<768px)
- Título: 32px
- Infos: 16-18px
- Cal.com: 100% width (minus 24px padding)
- Padding lateral: 24px
- Footer: links stack vertical (um por linha)
- WhatsApp: pode ter ícone maior

---

## ESTADOS INTERATIVOS

### Cal.com Slots

**Horário disponível (hover):**
- Background: lighten 5%
- Cursor: pointer
- Border: subtle highlight

**Horário selecionado:**
- Background: brand color
- Color: white
- Clear visual feedback

### WhatsApp Link

```css
.whatsapp-link {
  color: #666666;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
}

.whatsapp-link:hover {
  color: #1A1A1A;
  text-decoration: underline;
  transform: translateY(-2px);
}

.whatsapp-link:active {
  transform: translateY(0);
}
```

### Footer Links

```css
.footer-link {
  color: #999999;
  text-decoration: none;
  transition: all 0.2s ease;
}

.footer-link:hover {
  color: #1A1A1A;
  text-decoration: underline;
}
```

---

## CONSIDERAÇÕES TÉCNICAS

### Cal.com Setup

**Script loading:**
```html
<script type="text/javascript">
  (function (C, A, L) {
    let p = function (a, ar) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.q) {
        cal.q = [];
      }
      cal.q.push(ar);
    };
    // ... resto do script Cal.com
  })(window, document);
</script>
```

**Initialization:**
```javascript
Cal("init", {
  origin: "https://cal.com"
});

Cal("inline", {
  elementOrSelector: "#cal-embed",
  calLink: "drgustavomendes/consulta-inicial",  // seu link Cal.com
  layout: "month_view",
  config: {
    theme: "light",
    branding: {
      brandColor: "#1A1A1A"
    }
  }
});
```

**Loading optimization:**
- Lazy load Cal.com script
- Show skeleton while loading
- Error handling se Cal.com falhar

### Performance

**Otimizações:**
- Cal.com script: async loading
- Intersection Observer para footer animation
- Minimal JS para interações
- CSS transitions > JS animations

### Acessibilidade

**HTML Semântico:**
```html
<section aria-label="Agendamento de consulta">
  <h1>Agende sua consulta</h1>
  
  <div class="info-pratica">
    <p>
      <strong>São José do Rio Preto</strong><br>
      Atendimento presencial e online
    </p>
    
    <p>
      Primeira consulta: <strong>2 horas</strong><br>
      Retornos: <strong>1 hora</strong>
    </p>
  </div>
  
  <div id="cal-embed" role="application" aria-label="Calendário de agendamento">
    <!-- Cal.com injeta aqui -->
  </div>
  
  <p>
    Dúvidas? 
    <a href="https://wa.me/[NUMERO]" aria-label="Falar pelo WhatsApp">
      Fale pelo WhatsApp
    </a>
  </p>
  
  <footer role="contentinfo">
    <nav aria-label="Links do site">
      <a href="/blog">Blog</a>
      <span aria-hidden="true">·</span>
      <a href="/curriculo">Currículo</a>
      <span aria-hidden="true">·</span>
      <a href="/publicacoes">Publicações</a>
    </nav>
    
    <p class="copyright">
      <small>
        © 2025 Dr. Gustavo Mendes e Silva<br>
        CRM-SP 218133
      </small>
    </p>
  </footer>
</section>
```

**Keyboard Navigation:**
- Tab order lógico
- Cal.com embed é keyboard-accessible
- Footer links acessíveis
- Focus states visíveis

**Screen Readers:**
- Cal.com embed tem role="application"
- Labels descritivos
- Landmarks (section, footer, nav)

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
  
  .cal-embed-container {
    animation: none;
    transform: none;
    opacity: 1;
  }
}
```

### SEO

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. Gustavo Mendes e Silva - Psiquiatria",
  "image": "[URL da imagem]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São José do Rio Preto",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "telephone": "[TELEFONE]",
  "medicalSpecialty": "Psychiatry",
  "availableService": {
    "@type": "MedicalProcedure",
    "name": "Consulta Psiquiátrica",
    "description": "Primeira consulta de 2 horas"
  }
}
```

**Meta tags (página home):**
```html
<title>Dr. Gustavo Mendes - Psiquiatria Humanizada | São José do Rio Preto</title>
<meta name="description" content="Psiquiatria com consultas de 2 horas, análise comportamental com IA e tratamento personalizado em São José do Rio Preto. CRM-SP 218133.">
```

---

## CONEXÕES NARRATIVAS

### Vindo da Seção 5 (Credenciais)

**Credenciais:** Estabelece confiança e expertise
→ **Contato:** Facilita ação baseada na confiança

**Transição Conceitual:**
- Credenciais = validação ("posso confiar")
- Contato = conversão ("quero agendar")

**Transição Visual:**
- Split screen → Centralizado
- Densidade informacional → Simplicidade focada
- Prova/validação → Call to action

**Transição de Tom:**
- Credenciais = factual, validador
- Contato = facilitador, sem pressão

### Fechamento da Jornada

**Jornada completa:**
1. Hero: provocação ("você precisa se entender")
2. Manifesto: filosofia (como trabalho diferente)
3. Para Quem: identificação (isso é para você?)
4. Método: processo (assim que funciona)
5. Credenciais: validação (por que confiar)
6. Contato: conversão ← **momento de decisão**

**Último momento:**
- Sem pressão vendedora
- Cal.com = autonomia (escolha próprio horário)
- WhatsApp = alternativa low-commitment
- Footer = acesso a mais conteúdo se não pronto

---

## VARIAÇÕES CONSIDERADAS

### Cal.com vs. Form

**Cal.com inline:** ✅
- Visual, mostra disponibilidade
- Self-service (autonomia)
- Profissional
- Reduz fricção

**Formulário tradicional:**
❌ Mais fricção
❌ Precisa resposta manual
❌ Menos transparente
❌ Mais genérico

### WhatsApp Position

**Abaixo Cal.com:** ✅
- Sequência lógica (agenda ou pergunta)
- Não compete com CTA principal
- Alternativa clara

**Acima Cal.com:**
❌ Pode distrair da conversão
❌ Inverte prioridade

**Apenas botão fixo (sem texto aqui):**
✅ Também funciona
❌ Menos explícito para quem tem dúvidas

**Recomendação:** Manter texto + botão fixo

### Footer Content

**Apenas links:**
❌ Sem contexto legal
❌ Sem copyright

**Links + copyright:** ✅
- Completo
- Profissional
- Legal

**Links + mapa:**
❌ Muito pesado para footer
❌ Endereço completo não necessário aqui

### CTA Language

**"Agende sua consulta":** ✅
- Direto
- Sem pressão
- Clear

**"Reserve seu horário":**
✅ Funciona também
❌ Menos pessoal

**"Marque uma avaliação":**
❌ "Avaliação" soa clínico demais
❌ Menos acolhedor

---

## FLUXOS ALTERNATIVOS

### Usuário não agenda imediatamente

**Opções disponíveis:**
1. Footer links → explora mais conteúdo (blog, CV)
2. WhatsApp → faz perguntas
3. Botão fixo "Agendar" (top bar) → retorna quando pronto
4. Salva site → volta depois

**Não bloqueamos:** Nenhuma popup "Aguarde, não vá embora!"

### Usuário agenda com sucesso

**Pós-agendamento:**
- Cal.com mostra confirmação
- Email automático enviado
- Página de confirmação (se Cal.com redirecionar)

**Follow-up:**
- Email com preparação para consulta
- Link para recurso "/recursos/preparacao"
- WhatsApp com mensagem de boas-vindas (opcional)

---

## CHECKLIST DE REVISÃO

- [ ] Cal.com account criado
- [ ] Cal.com link configurado (drgustavomendes/consulta-inicial)
- [ ] Tipos de evento criados (primeira consulta, retorno)
- [ ] Duração correta (2h primeira, 1h retorno)
- [ ] Buffer times configurados
- [ ] Limite diário de consultas
- [ ] WhatsApp número definido e testado
- [ ] Links footer todos funcionais
- [ ] Cal.com customization (cores) aplicada
- [ ] Loading state implementado
- [ ] Error handling se Cal.com falhar
- [ ] Mobile testado (calendário responsivo)
- [ ] Confirmação por email configurada (Cal.com)
- [ ] Timezone correto (America/Sao_Paulo)

---

## NOTAS DE IMPLEMENTAÇÃO

1. **Cal.com setup é crítico:** Testar extensivamente antes do launch
2. **Fallback:** Se Cal.com estiver down, mostrar mensagem com WhatsApp
3. **Analytics:** Track conversions (quantos clicam, quantos completam)
4. **A/B test:** Testar posição WhatsApp (antes/depois Cal.com)
5. **Loading:** Skeleton deve ser similar ao calendário final (não genérico)
6. **Mobile:** Garantir que calendário Cal.com é touch-friendly
7. **Timezone:** Explicitamente configurar para evitar confusão
8. **No-shows:** Cal.com pode enviar lembretes automáticos

---

## INTEGRAÇÕES FUTURAS (OPCIONAL)

### Email Marketing
- Capture email no Cal.com
- Add to mailing list (ConvertKit, Mailchimp)
- Série de boas-vindas

### CRM
- Cal.com → Zapier → CRM
- Track pipeline de agendamentos
- Follow-up automatizado

### Analytics
- Cal.com events → Google Analytics
- Track: views, starts, completions
- Funil de conversão

### Chat Recovery
- Usuário abandona agendamento
- Email recovery (se forneceu email)
- "Complete seu agendamento"

---

## ALINHAMENTO COM FILOSOFIA DO PROJETO

✅ **Sem pressão:** Cal.com dá autonomia, não força decisão  
✅ **Transparente:** Mostra slots disponíveis, sem esconder informação  
✅ **Acessível:** Múltiplas formas de contato (Cal.com, WhatsApp)  
✅ **Profissional:** Integração elegante, não formulário genérico  
✅ **Conteúdo disponível:** Footer mantém acesso a mais informação  
✅ **Clean:** Foco na ação, sem distrações  

---

## MÉTRICAS DE SUCESSO

**Acompanhar:**
- % de visitantes que chegam à Seção 6
- % que iniciam agendamento (clicam em slot)
- % que completam agendamento
- % que clicam WhatsApp (alternativa)
- Bounce rate na seção
- Tempo médio na seção

**Benchmarks desejados:**
- 60%+ chegam à Seção 6 (scroll depth)
- 15-25% iniciam agendamento
- 60-70% completam (dos que iniciam)
- Taxa de conversão total: ~10-15%

---

**SITE COMPLETO:** Todas as 6 seções especificadas!

**Próximos passos sugeridos:**
1. Revisar todas as seções para consistência
2. Definir paleta de cores exata (hex codes)
3. Escolher fonte definitiva
4. Criar protótipo visual (Figma?)
5. Implementação técnica
