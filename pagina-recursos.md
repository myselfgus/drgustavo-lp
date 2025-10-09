# PÁGINA /RECURSOS (OPCIONAL)

## OBJETIVO
Fornecer materiais educativos úteis para pacientes atuais e potenciais. Reduzir perguntas repetitivas. Estabelecer autoridade pedagógica. SEO para termos informativos. Valor agregado além da consulta.

---

## DECISÃO: IMPLEMENTAR?

### Prós
✅ Diferenciação (poucos médicos fazem)
✅ SEO para queries informacionais
✅ Reduz perguntas básicas
✅ Valor percebido aumenta
✅ Material para compartilhar

### Contras
❌ Requer criação de conteúdo adicional
❌ Manutenção (atualizar materiais)
❌ Pode ser subutilizado inicialmente

### Recomendação
**Implementar de forma minimalista:**
- Começar com 3-4 recursos essenciais
- Expandir conforme demanda
- Não criar página se não tiver conteúdo de qualidade

---

## ESTRUTURA GERAL

```
/recursos → Index com lista de recursos
/recursos/[slug] → Recurso individual (página ou PDF)
```

---

## LAYOUT - INDEX

```
┌─────────────────────────────────────────┐
│ [Dr. Gustavo Mendes]  Recursos  Início  │ ← Header
├─────────────────────────────────────────┤
│                                         │
│              [8% vazio]                 │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │  Recursos                         │  │
│  │                                   │  │
│  │  Materiais educativos sobre       │  │
│  │  saúde mental e neurodiversidade  │  │
│  │                                   │  │
│  │  ─────────────────────            │  │
│  │                                   │  │
│  │  PARA PACIENTES                   │  │
│  │                                   │  │
│  │  ┌──────────────────────────┐    │  │
│  │  │                          │    │  │
│  │  │  Como se preparar para   │    │  │
│  │  │  primeira consulta       │    │  │
│  │  │                          │    │  │
│  │  │  [Ler →]                 │    │  │
│  │  └──────────────────────────┘    │  │
│  │                                   │  │
│  │  ┌──────────────────────────┐    │  │
│  │  │                          │    │  │
│  │  │  Guia de uso terapêutico │    │  │
│  │  │  do canabidiol           │    │  │
│  │  │                          │    │  │
│  │  │  [Download PDF →]        │    │  │
│  │  └──────────────────────────┘    │  │
│  │                                   │  │
│  │  ─────────────────────            │  │
│  │                                   │  │
│  │  PARA PROFISSIONAIS               │  │
│  │                                   │  │
│  │  ┌──────────────────────────┐    │  │
│  │  │                          │    │  │
│  │  │  Protocolo de prescrição │    │  │
│  │  │  de canabidiol           │    │  │
│  │  │                          │    │  │
│  │  │  [Download PDF →]        │    │  │
│  │  └──────────────────────────┘    │  │
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

---

## COMPOSIÇÃO

### Container Principal

**Max-width:** 1000px
**Margin:** 0 auto
**Padding lateral:** 40px (desktop) / 24px (mobile)
**Padding vertical:** 80px (top) / 80px (bottom)

### Grid de Cards

**Desktop:** 2 colunas (se tiver 4+ recursos) ou 1 coluna (se poucos)
**Tablet:** 2 colunas
**Mobile:** 1 coluna
**Gap:** 40px

---

## TIPOGRAFIA - INDEX

### Título Página

**"Recursos"**
- Size: 36px (desktop) / 28px (mobile)
- Weight: 300 (Light)
- Color: #1A1A1A
- Text-align: center
- Margin-bottom: 16px

### Subtítulo

**"Materiais educativos sobre..."**
- Size: 18px (desktop) / 16px (mobile)
- Weight: 400
- Color: #666666
- Text-align: center
- Line-height: 1.6
- Margin-bottom: 48px

### Seções (H2)

**"PARA PACIENTES"**
- Size: 14px
- Weight: 600
- Color: #1A1A1A
- Text-transform: uppercase
- Letter-spacing: 0.08em
- Margin-bottom: 24px
- Margin-top: 48px (não na primeira)

---

## CARD DE RECURSO

### Estrutura

```
┌────────────────────────┐
│                        │
│  [Ícone opcional]      │
│                        │
│  Título do Recurso     │
│                        │
│  Breve descrição       │
│  do conteúdo...        │
│                        │
│  [Ler →] ou            │
│  [Download PDF →]      │
│                        │
└────────────────────────┘
```

### Estilo

**Container:**
- Background: #FAFAF8 (ou transparent)
- Border: 1px solid #E5E5E5 (ou none)
- Border-radius: 8px (ou 0 se preferir)
- Padding: 32px
- Transition: all 0.3s ease
- Hover: shadow, translateY(-4px)

**Título:**
- Size: 22px
- Weight: 600
- Color: #1A1A1A
- Margin-bottom: 12px

**Descrição:**
- Size: 16px
- Weight: 400
- Color: #666666
- Line-height: 1.6
- Margin-bottom: 20px

**Link/Botão:**
- Size: 14px
- Weight: 500
- Color: #1A1A1A
- Text-decoration: none
- Display: inline-block
- Hover: underline, translateX(4px)

---

## RECURSOS SUGERIDOS

### Para Pacientes

**1. Como se preparar para primeira consulta**
- Formato: Página web ou PDF
- Conteúdo:
  - O que levar (histórico médico, lista de medicamentos)
  - Informações úteis para compartilhar
  - O que esperar da consulta de 2 horas
  - Como aproveitar melhor o tempo

**2. Guia de uso terapêutico do canabidiol**
- Formato: PDF
- Conteúdo:
  - O que é canabidiol
  - Para que serve (indicações)
  - Como funciona no organismo
  - Posologia básica
  - Efeitos esperados
  - Legislação brasileira
  - Dúvidas frequentes
  - Disclaimer: não substitui consulta

**3. TDAH em adultos: mitos e verdades**
- Formato: Página web
- Conteúdo:
  - Diferença TDAH criança vs. adulto
  - Sintomas em adultos
  - Mitos comuns
  - Tratamento
  - Como buscar ajuda

**4. Entendendo o TEA (Transtorno do Espectro Autista)**
- Formato: Página web ou PDF
- Conteúdo:
  - O que é espectro
  - Diagnóstico em adultos
  - Masking e camuflagem
  - Estratégias de apoio
  - Recursos adicionais

**5. Estratégias para ansiedade no dia a dia**
- Formato: Página web
- Conteúdo:
  - Técnicas de respiração
  - Grounding (ancoragem)
  - Quando buscar ajuda profissional
  - Não substitui tratamento

### Para Profissionais da Saúde

**1. Protocolo de prescrição de canabidiol**
- Formato: PDF
- Conteúdo:
  - Critérios de indicação
  - Dosagem inicial e titulação
  - Monitoramento
  - Efeitos adversos
  - Interações medicamentosas
  - Documentação necessária
  - Referências científicas

**2. Abordagem dimensional em psiquiatria**
- Formato: PDF ou artigo longo
- Conteúdo:
  - Limitações do modelo categorial (DSM)
  - Vantagens do modelo dimensional
  - Aplicação prática
  - Casos clínicos
  - Referências

**3. Uso de IA na prática clínica psiquiátrica**
- Formato: Página web
- Conteúdo:
  - Ferramentas disponíveis
  - Casos de uso
  - Limitações e ética
  - Como implementar

---

## PÁGINA INDIVIDUAL DE RECURSO

### Layout (se for página web, não PDF)

```
┌─────────────────────────────────────────┐
│ [Header]                                │
├─────────────────────────────────────────┤
│                                         │
│  [Breadcrumb]                           │
│  Recursos > Como se preparar            │
│                                         │
│  [Título do Recurso]                    │
│                                         │
│  [Conteúdo]                             │
│  Similar a layout de artigo do blog     │
│  Max-width: 680px                       │
│                                         │
│  ─────────────────                      │
│                                         │
│  Pronto para agendar sua consulta?      │
│  [Agendar →]                            │
│                                         │
└─────────────────────────────────────────┘
```

**Tipografia:** Similar a artigos do blog

---

## ANIMAÇÕES

### Cards - Hover

```css
.recurso-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.recurso-card:hover .link {
  transform: translateX(4px);
}
```

### Entrada

- Fade in geral
- Cards com stagger (100ms delay)

---

## RESPONSIVIDADE

### Desktop (>1024px)
- Grid: 2 colunas (se 4+ recursos)
- Card padding: 32px

### Mobile (<768px)
- Grid: 1 coluna
- Card padding: 24px
- Font sizes reduzidos

---

## SEO

### Meta Tags (Index)

```html
<title>Recursos - Dr. Gustavo Mendes | Guias sobre Saúde Mental</title>
<meta name="description" content="Materiais educativos gratuitos sobre TDAH, autismo, canabidiol medicinal e saúde mental. Guias práticos para pacientes e profissionais.">
```

### Meta Tags (Recurso Individual)

```html
<title>[Título do Recurso] - Dr. Gustavo Mendes</title>
<meta name="description" content="[Descrição do recurso]">
```

---

## CONSIDERAÇÕES LEGAIS

### Disclaimers Necessários

**Em todos os materiais para pacientes:**
```
IMPORTANTE: Este material é informativo e não 
substitui consulta médica. Não inicie ou altere 
tratamentos sem orientação profissional.
```

**Posição:** Footer de cada recurso, fonte pequena

### Canabidiol

**Disclaimer específico:**
```
A prescrição de canabidiol requer avaliação médica 
individualizada. Este guia é educativo e não 
constitui prescrição médica.
```

---

## FORMATO DOS MATERIAIS

### Opção A - Páginas Web

**Prós:**
✅ SEO melhor
✅ Sempre atualizável
✅ Mobile-friendly
✅ Rastreável (analytics)

**Contras:**
❌ Não "levável"
❌ Precisa internet

### Opção B - PDFs

**Prós:**
✅ Downloadable
✅ Printable
✅ Compartilhável
✅ Offline

**Contras:**
❌ Pior para SEO
❌ Difícil atualizar (versões antigas circulam)
❌ Não rastreável

### Recomendação

**Hybrid:**
- Guias básicos: páginas web
- Protocolos técnicos: PDF
- Checklist/formulários: PDF

---

## DOWNLOADS

### Tracking

**Se PDF:**
- Google Analytics event tracking
- Quantos downloads por recurso
- Qual mais popular

### Hosting

**Opções:**
- Mesmo servidor do site
- S3/Cloud storage
- CDN para performance

---

## ACESSO RESTRITO (OPCIONAL)

### Para Profissionais

**Opção 1 - Aberto:**
- Qualquer um acessa
✅ Mais alcance
❌ Menos exclusivo

**Opção 2 - Cadastro simples:**
- Email + nome + CRM
✅ Lead capture
❌ Fricção

**Opção 3 - Apenas mediante contato:**
- "Entre em contato para receber"
❌ Máxima fricção

**Recomendação:** Opção 1 (aberto) - mais valor agregado

---

## ATUALIZAÇÃO

**Frequência:**
- Revisar anualmente
- Atualizar se legislação mudar (canabidiol)
- Versionar PDFs (v1.0, v2.0)

**Changelog:**
- Indicar data última atualização
- "Atualizado em: Janeiro 2025"

---

## CHECKLIST DE CRIAÇÃO DE RECURSO

Antes de publicar cada material:

- [ ] Conteúdo revisado por você
- [ ] Disclaimer legal incluído
- [ ] Fontes citadas (se aplicável)
- [ ] Gramática revisada
- [ ] Design profissional (se PDF)
- [ ] Testado em mobile (se web)
- [ ] PDF otimizado (< 5MB)
- [ ] Acessível (contraste, alt texts)
- [ ] Meta tags configuradas
- [ ] Analytics tracking configurado

---

## PROMOÇÃO DOS RECURSOS

### Onde Mencionar

**1. Nas seções do site:**
- Seção 4 (Método): link para "preparação"
- Seção 3 (Para Quem): links para guias TDAH/TEA

**2. No blog:**
- CTA no final dos artigos
- "Baixe nosso guia completo sobre..."

**3. Após agendamento:**
- Email automático com recursos relevantes
- Ex: agendou → envia "Como se preparar"

**4. Redes sociais (se usar):**
- Post sobre cada novo recurso

---

## MÉTRICAS DE SUCESSO

**Acompanhar:**
- Views por recurso
- Downloads (PDFs)
- Tempo médio na página (web)
- Bounce rate
- Conversões (agendar após ler)

**Benchmarks:**
- 20%+ dos visitantes exploram recursos
- Recursos geram 5-10% de conversões

---

## ALTERNATIVAS SE NÃO IMPLEMENTAR

Se decidir não criar página /recursos:

**Opção A:**
- Incorporar 1-2 recursos no blog
- Ex: "Como se preparar" vira artigo

**Opção B:**
- Apenas PDF downloadable mencionado em seção específica
- Link direto sem página index

**Opção C:**
- Recursos apenas para pacientes agendados
- Email após confirmação

---

## DECISÃO RECOMENDADA

### Fase 1 (Launch)

**NÃO implementar página /recursos ainda**

**Razões:**
- Foco em conteúdo essencial primeiro (6 seções + blog)
- Criar recursos de qualidade leva tempo
- Validar demanda antes de investir

**Alternativa:**
- Criar apenas "Como se preparar para primeira consulta"
- Enviar via email após agendamento
- Não precisa página dedicada

### Fase 2 (3-6 meses pós-launch)

**Implementar /recursos se:**
- Receber perguntas repetidas sobre temas específicos
- Tiver tempo para criar materiais de qualidade
- Blog estiver funcionando bem (prova que conteúdo agrega)

**Começar com:**
- 3-4 recursos essenciais
- Formato simples (páginas web)
- Expandir conforme feedback

---

## CHECKLIST DE DECISÃO

Implementar /recursos agora?

- [ ] Tenho pelo menos 3 materiais de qualidade prontos?
- [ ] Tenho tempo para manter atualizado?
- [ ] Há demanda clara dos pacientes?
- [ ] Outras prioridades já estão concluídas?

**Se todas respostas forem "sim":** Implementar

**Se alguma for "não":** Adiar para fase 2

---

## NOTAS FINAIS

1. **Qualidade > Quantidade:** 3 recursos excelentes > 10 medianos
2. **Foco no valor:** Material deve ser genuinamente útil, não marketing disfarçado
3. **Atualização:** Comprometimento de longo prazo
4. **Legal:** Disclaimer em tudo que for clínico
5. **Analytics:** Medir para saber o que funciona

---

**TODAS AS PÁGINAS ESPECIFICADAS!**

**Páginas criadas:**
1. ✅ /blog (index + artigos individuais)
2. ✅ /curriculo
3. ✅ /publicacoes
4. ✅ /recursos (opcional - recomendação: adiar)

**Site completo:**
- 6 seções principais
- 4 páginas separadas (3 essenciais + 1 opcional)
- Navegação definida
- Conteúdo estruturado
- Design especificado
- Animações detalhadas

**Pronto para próxima fase!**
