# CLAUDE.md - Dr. Gustavo Mendes e Silva Site

## INFORMAÇÕES ESSENCIAIS DO PROJETO

### Sobre o Projeto
- **Proprietário:** Dr. Gustavo Mendes e Silva (médico psiquiatra)
- **Objetivo:** Site de divulgação profissional para atrair novos pacientes e facilitar agendamento de consultas
- **Público-alvo:**
  - Pessoas que buscam psiquiatria humanizada e compreensão real
  - Neurodivergentes (TDAH, TEA) cansados de serem "corrigidos"
  - Quem questiona rótulos fáceis e busca entender o porquê, não só o quê
  - Quem busca canabidiol com rigor científico, não modismo

### Tom de Comunicação
- **Inspiracional e transformacional** - NÃO marketing de vendas
- **Comunicação direta, precisa, sem floreios** (Dr. Gustavo tem TEA)
- Objetivo: inspirar confiança e coragem nas pessoas para serem donas do seu destino

---

## INFORMAÇÕES DE CONTATO

### Telefones (ambos são telefone E WhatsApp)
- **(17) 2110-1228** - São José do Rio Preto
- **(11) 94545-1146** - São Paulo

### Endereço
**Localização Privilegiada:**
- Rua Amadeu Segundo Cherubini, 504
- Jd. Panorama • São José do Rio Preto/SP
- C&W Unidade Amadeu

### Informações Profissionais
- **CRM-SP:** 218133
- **Certificações:** Society of Cannabis Clinicians (SCC), International Association for Cannabinoid Medicines (IACM)
- **Atendimento:** Presencial e online (apenas São José do Rio Preto)

---

## ÁREAS DE ATUAÇÃO

1. TDAH
2. Autismo (TEA)
3. Ansiedade
4. Depressão
5. Canabidiol (CBD)
6. Cuidados Paliativos
7. Traumas / Luto
8. Insônia

---

## DIFERENCIAIS

- **Consultas de 2 horas** (primeira consulta)
- **Análise comportamental com IA**
- **Abordagem humanizada** - compreender, não apenas diagnosticar
- **Tratamento com canabidiol** baseado em evidências científicas
- **Relatórios detalhados** - paciente entende o que está acontecendo

---

## STACK TÉCNICO

### Framework e Infraestrutura
- **Framework:** Astro 4.x
- **Deployment:** Cloudflare Workers (Workers-first, não Pages)
- **Config:** wrangler.jsonc (NÃO wrangler.toml)
- **Compatibility:** compatibility_date = "2025-03-07"

### Cloudflare Services
- **D1 Database:** `1189d5ea-8769-4d66-adb8-d4cbc04a3af4`
- **R2 Bucket:** `drgustavomendes-assets`
- **KV Namespace:** `ee0f09bcb97149ecb64f09d4276d0332`
- **AI Gateway:** `voither` (observability + cache)
- **Workers AI:** DeepSeek R1 (`@cf/deepseek-ai/deepseek-r1-distill-qwen-32b`)
  - Max tokens: 4096
  - Temperature: 0.5-0.7

### AI Integration
- **DeepSeek R1 acessível via:** `./ask-deepseek.sh "sua pergunta"`
- **Uso:** Consultar ANTES de implementar qualquer código
- **Endpoint:** Via AI Gateway para observability

---

## ESTRUTURA DO SITE

### Página Principal - 6 Seções Fullscreen

#### Seção 1 - Hero
- "Você não precisa de mais diagnósticos."
- "Você precisa se entender."
- Dr. Gustavo Mendes e Silva
- Psiquiatria · São José do Rio Preto

#### Seção 2 - Manifesto
- A psiquiatria tradicional categoriza. Eu busco compreender padrões.
- Consultas de 2 horas não são luxo. São o tempo necessário para pensar junto.
- Inteligência artificial não substitui escuta. Ela libera minha mente para estar presente.
- Você não é um diagnóstico do DSM. Você é um sistema complexo em busca de coerência.

#### Seção 3 - Para Quem
- Para quem questiona rótulos fáceis
- Para quem quer entender o porquê, não só o quê
- Para neurodivergentes cansados de serem "corrigidos"
- Para quem busca canabidiol com rigor científico, não modismo
- Para quem percebe que sintomas são linguagem, não falhas

#### Seção 4 - Método
- Primeira consulta: 2 horas de análise sem pressa
- Você fala, eu ouço e estruturo padrões com IA
- Construímos hipóteses juntos – seu insight importa
- Tratamento co-criado: medicação, canabidiol, estratégias comportamentais
- Relatórios detalhados – você entende o que está acontecendo
- Reavaliações: acompanhamento real, não receita automática

#### Seção 5 - Credenciais + Prova Social
**Lado Esquerdo:**
- Médico Psiquiatra
- CRM-SP 218133
- Certificado em Canabidiol: SCC, IACM
- Experiência: CAPS, emergências psiquiátricas, casos complexos

**Lado Direito:**
- Áreas de atuação: TDAH, TEA, Ansiedade, Depressão, CBD, Cuidados Paliativos, Traumas, Luto, Insônia

**Depoimentos:**
- "Pela primeira vez um médico entendeu que meu TDAH não é defeito – é arquitetura cognitiva diferente." - R.L.

#### Seção 6 - Contato
- Agende sua consulta
- São José do Rio Preto
- Atendimento presencial e online
- Primeira consulta: 2 horas / Retornos: 1 hora
- Cal.com embed
- WhatsApp: (17) 2110-1228 ou (11) 94545-1146

### Páginas Separadas
- `/blog` - Artigos, projetos de pesquisa e obras editoriais
- `/curriculo` - CV completo + PDF download

---

## DESIGN SYSTEM

### Cores
- **Texto primário:** `#1A1A1A`, `#2C2C2C`
- **Texto secundário:** `#666666`
- **Texto terciário:** `#999999`
- **Background primário:** `#FFFFFF`
- **Background secundário:** `#FAFAF8`
- **Border:** `#E5E5E5`

### Tipografia
- **Font:** System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI")
- **Pesos:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold)
- **Tamanhos Desktop:** 14px a 56px
- **Tamanhos Mobile:** 15px a 32px
- **Line-height:** 1.2 a 1.8

### Animações
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Duração:** 200ms (rápido) a 800ms (lento)
- **GPU-accelerated:** apenas `transform` e `opacity`
- **Acessibilidade:** `prefers-reduced-motion` suportado

### Espaçamento
- 70% espaço em branco no Hero
- Seções fullscreen (100vh)
- Padding: 24px mobile, 40-80px desktop

---

## NAVEGAÇÃO

### Top Bar
- Logo à esquerda: "Dr. Gustavo Mendes e Silva" (clicável, volta ao topo)
- Botão à direita: "Agendar" (sempre visível)
- Estado inicial: transparente
- Após scroll: backdrop-blur com background semi-transparente
- Auto-hide ao rolar, reaparece ao parar ou rolar para cima

### WhatsApp Button
- Posição: bottom-right fixo
- Visual: ícone minimalista outline
- Cor: integrada ao design (#2C2C2C)
- Link: `https://wa.me/5517211011228?text=Olá,%20vim%20do%20site`

### Agendamento
- **Sistema:** Cal.com
- **Integração:** Modal (não link externo)
- **Link:** drgustavomendes/consulta-inicial

---

## REGRAS IMPORTANTES

### Desenvolvimento
- ❌ Código fake, placeholder, localhost
- ❌ Funções inexistentes
- ❌ Simplificações enganosas
- ✅ TODO código é para PRODUÇÃO
- ✅ Consultar DeepSeek R1 ANTES de implementar código

### Comunicação
- ❌ Linguagem de marketing ou vendas
- ❌ Floreios ou enfeites textuais
- ✅ Direta, precisa, objetiva
- ✅ Inspiracional e transformacional

### SEO e Metadados
- ✅ Telefones: (17) 2110-1228 e (11) 94545-1146
- ✅ Endereço completo: Rua Amadeu Segundo Cherubini, 504 - Jd. Panorama, SJRP/SP
- ✅ Todas as 8 áreas de atuação
- ✅ Schema.org completo (MedicalBusiness + Physician)

---

## WORKFLOW DE DESENVOLVIMENTO

### Antes de implementar QUALQUER código:
1. Consultar DeepSeek R1: `./ask-deepseek.sh "sua pergunta"`
2. Analisar resposta do modelo
3. Implementar seguindo specs + sugestão do modelo
4. Verificar conformidade com especificações

### Estrutura de arquivos (stack-tecnica.md)
```
src/
├── components/
│   ├── Hero.astro, Manifesto.astro, ParaQuem.astro
│   ├── Metodo.astro, Credenciais.astro, Contato.astro
│   ├── Header.astro, Footer.astro
│   ├── BlogCard.astro, CalEmbed.astro
│   ├── SEO.astro, StructuredData.astro
├── layouts/
│   ├── BaseLayout.astro, BlogLayout.astro, PageLayout.astro
├── pages/
│   ├── index.astro (6 seções)
│   ├── blog/, curriculo.astro, publicacoes.astro
```

---

## COMANDOS ÚTEIS

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Deploy
npm run deploy

# Consultar DeepSeek R1
./ask-deepseek.sh "sua pergunta aqui"

# Wrangler
wrangler pages deploy dist
wrangler d1 execute drgustavomendes-db --command "SELECT * FROM blog_posts"
```

---

## PRÓXIMOS PASSOS

1. Implementar Hero.astro seguindo `/Users/gustavo/drg-page/secao-01-hero.md`
2. Implementar demais seções (2-6)
3. Criar páginas separadas (blog, currículo, publicações)
4. Testar responsividade
5. Deploy para produção

---

**Última atualização:** 2025-10-09
**Desenvolvido com:** Astro + Cloudflare Workers + DeepSeek R1
