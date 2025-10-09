# PÁGINA /PUBLICAÇÕES

## OBJETIVO
Apresentar produção científica e acadêmica. Credibilidade para pares, instituições acadêmicas, e pacientes que valorizam embasamento científico. Diferenciação através de trabalhos publicados.

---

## ESTRUTURA GERAL

Página única com todas as publicações organizadas por tipo.

URL: /publicacoes

---

## LAYOUT VISUAL

### Estrutura da Página

```
===========================================
HEADER
[Dr. Gustavo Mendes] [Publicações] [Início]
===========================================

[8% espaço superior vazio]

─────────────────────────────────────────
CONTAINER CENTRALIZADO (max-width: 900px)
─────────────────────────────────────────

    Publicações Científicas
    
    ═══════════════════════════════════
    
    ARTIGOS EM PERIÓDICOS
    
    • Título do artigo completo
      Revista, ano, volume, páginas
      [DOI] [PDF]
    
    • Título do artigo 2
      Revista, ano, volume, páginas
      [DOI] [PDF]
    
    ═══════════════════════════════════
    
    CAPÍTULOS DE LIVROS
    
    • Título do capítulo
      In: Título do livro
      Editora, ano, páginas
      [Link]
    
    ═══════════════════════════════════
    
    APRESENTAÇÕES EM CONGRESSOS
    
    • Título da apresentação
      Congresso, local, ano
      [Resumo]

─────────────────────────────────────────

[10% espaço inferior vazio]

===========================================
FOOTER
Blog · Currículo · Publicações
===========================================
```

---

## COMPOSIÇÃO

### Container Principal

- Max-width: 900px (mais largo para títulos longos)
- Margin: 0 auto (centralizado)
- Padding lateral: 40px (desktop) / 24px (mobile)
- Padding vertical: 80px (top e bottom)

### Organização do Conteúdo

**Ordem cronológica reversa** (mais recente primeiro)

**Agrupamento por tipo:**
1. Artigos em periódicos (maior prestígio)
2. Capítulos de livros
3. Apresentações em congressos
4. Outros (resumos, pôsteres, etc.)

---

## TIPOGRAFIA

### Título da Página

**"Publicações Científicas"**
- Font: Inter / SF Pro Display
- Size: 36px (desktop) / 28px (mobile)
- Weight: 300 (Light)
- Color: #1A1A1A
- Line-height: 1.2
- Margin-bottom: 48px
- Text-align: left

### Seções (H2)

**"ARTIGOS EM PERIÓDICOS"**
- Size: 14px
- Weight: 600
- Color: #1A1A1A
- Text-transform: uppercase
- Letter-spacing: 0.08em
- Margin-top: 48px (primeira seção: 0)
- Margin-bottom: 32px
- Border-bottom: 1px solid #E5E5E5
- Padding-bottom: 8px

### Título da Publicação

**"Título do artigo completo sem abreviações"**
- Size: 18px (desktop) / 17px (mobile)
- Weight: 600
- Color: #1A1A1A
- Line-height: 1.5
- Margin-bottom: 8px

### Referência Bibliográfica

**"Revista, ano, volume, páginas"**
- Size: 15px
- Weight: 400
- Color: #666666
- Line-height: 1.6
- Margin-bottom: 8px

### Botões/Links

**"[DOI]" "[PDF]" "[Link]"**
- Size: 14px
- Weight: 400
- Color: #1A1A1A
- Text-decoration: none
- Border: 1px solid #E5E5E5
- Padding: 4px 12px
- Border-radius: 3px
- Display: inline-block
- Margin-right: 8px
- Margin-bottom: 32px

**Hover:**
- Background: #F5F5F5
- Border-color: #1A1A1A

---

## FORMATO DE CITAÇÃO

### Artigos em Periódicos

**Formato simplificado para web:**

```
Título completo do artigo
Nome da Revista, 2024, vol. 15, n. 3, p. 45-62
[DOI] [PDF]
```

**Exemplo real:**

```
O uso terapêutico de canabidiol em transtornos de ansiedade: 
uma revisão sistemática
Revista Brasileira de Psiquiatria, 2023, vol. 45, n. 2, p. 123-135
[DOI: 10.1590/rbp.2023.0045] [PDF]
```

### Capítulos de Livros

**Formato:**

```
Título do capítulo
In: [Editor]. Título do livro. 
Cidade: Editora, ano. p. XX-XX.
[Link]
```

**Exemplo:**

```
Neurodiversidade e o paradigma dimensional em psiquiatria
In: Silva, J.P. (Ed.). Novas Perspectivas em Saúde Mental.
São Paulo: Editora Médica, 2024. p. 78-95.
[Link]
```

### Apresentações em Congressos

**Formato:**

```
Título da apresentação
Nome do Congresso, Cidade, ano
Tipo: oral/pôster
[Resumo]
```

**Exemplo:**

```
Inteligência artificial no apoio ao diagnóstico de TDAH adulto
XXI Congresso Brasileiro de Psiquiatria, Brasília, 2023
Apresentação oral
[Resumo]
```

---

## LINKS E RECURSOS

### DOI (Digital Object Identifier)

**URL padrão:**
```
https://doi.org/10.1590/rbp.2023.0045
```

**Botão:**
- Texto: "DOI: 10.1590/..." ou apenas "DOI"
- Abre em nova aba
- Atributo: target="_blank" rel="noopener"

### PDF

**Se disponível:**
- Botão: "PDF"
- Download ou visualização inline
- Opcional: mostrar tamanho "PDF (2.5 MB)"

**Se não disponível:**
- Não mostrar botão
- Ou: "PDF (sob solicitação)"

### Links Externos

**PubMed, SciELO, ResearchGate:**
- Botão com nome da plataforma
- Abre em nova aba
- Ícone externo opcional

---

## ANIMAÇÕES

### Entrada da Página

**Fade in geral:**
- Opacity: 0 → 1
- Duration: 600ms
- Easing: ease-out
- Delay: 200ms

### Items (opcional)

**Stagger suave:**
- Cada publicação: fade in + translateY(20px → 0)
- Delay incremental: 50ms entre items
- Duration: 400ms
- Scroll-triggered

### Botões

**Hover:**
```css
.link-btn:hover {
  background: #F5F5F5;
  border-color: #1A1A1A;
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
```

---

## RESPONSIVIDADE

### Desktop (maior que 1024px)
- Max-width: 900px
- Padding lateral: 40px
- Font sizes completos

### Tablet (768px - 1024px)
- Max-width: 700px
- Padding lateral: 32px
- Font sizes: -2px

### Mobile (menor que 768px)
- Max-width: 100%
- Padding lateral: 24px
- Font sizes reduzidos:
  - Título página: 28px
  - Título publicação: 17px → 16px
  - Referência: 15px → 14px
- Links podem empilhar verticalmente

---

## ESTADOS ESPECIAIS

### Sem Publicações Ainda

**Mensagem alternativa:**

```
Publicações Científicas

Trabalhos em desenvolvimento.

Atualmente estou focado em compartilhar conhecimento 
através do blog, onde publico artigos sobre psiquiatria, 
neurodiversidade e abordagens inovadoras em saúde mental.

[Ler artigos do blog →]

Esta página será atualizada conforme novos trabalhos 
científicos forem publicados.
```

**Estilo:**
- Text-align: center
- Color: #666666
- Line-height: 1.7
- Max-width: 600px
- Margin: auto

### Publicações No Prelo

**Indicação:**

```
Título do artigo
Revista [nome], 2025 (no prelo)
Publicação prevista para março/2025
```

**Estilo:**
- Usar "(no prelo)" ou "(in press)"
- Cor levemente diferente para destacar status

---

## SEO

### Meta Tags

```html
<title>Publicações Científicas - Dr. Gustavo Mendes | Psiquiatria</title>
<meta name="description" content="Artigos científicos, capítulos de livros e apresentações em congressos do Dr. Gustavo Mendes sobre psiquiatria, neurodiversidade e canabidiol medicinal.">
<meta name="robots" content="index, follow">
```

### Structured Data (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Título do artigo",
  "author": {
    "@type": "Person",
    "name": "Dr. Gustavo Mendes e Silva"
  },
  "datePublished": "2023",
  "publisher": {
    "@type": "Organization",
    "name": "Nome da Revista"
  },
  "url": "https://doi.org/..."
}
```

---

## ACESSIBILIDADE

### HTML Semântico

```html
<main>
  <h1>Publicações Científicas</h1>
  
  <section aria-labelledby="artigos">
    <h2 id="artigos">Artigos em Periódicos</h2>
    
    <article>
      <h3>Título do artigo</h3>
      <p class="referencia">Revista, 2023, vol. 45, p. 123-135</p>
      <nav aria-label="Links da publicação">
        <a href="https://doi.org/..." target="_blank" rel="noopener">
          DOI
          <span class="sr-only">(abre em nova aba)</span>
        </a>
        <a href="/publicacoes/artigo.pdf" download>PDF</a>
      </nav>
    </article>
  </section>
  
  <section aria-labelledby="capitulos">
    <h2 id="capitulos">Capítulos de Livros</h2>
    <!-- conteúdo -->
  </section>
</main>
```

### Contraste de Cores

- Títulos (#1A1A1A) em fundo claro: excelente (14:1)
- Texto (#666666) em fundo claro: bom (5.74:1)
- Links (#1A1A1A) em fundo claro: excelente

### Navegação por Teclado

- Tab order lógico
- Focus states visíveis em todos os links
- Skip to content link disponível

---

## DIREITOS AUTORAIS E ÉTICA

### Considerações Legais

**Antes de hospedar PDFs:**
- Verificar direitos autorais
- Preprints: sempre OK
- Open access: OK
- Artigos pagos: apenas link DOI

**Alternativas seguras:**
- Link para repositório institucional
- Link para ResearchGate profile
- Link para Google Scholar profile

### Citações de Coautores

**Mostrar todos os autores:**
- Ético e completo
- Formato: "Mendes, G.S.; Silva, J.P.; Costa, A.L."

**Se muitos autores:**
- "Mendes, G.S.; Silva, J.P. et al."
- Usar "et al." após 3-4 autores

---

## INTEGRAÇÕES EXTERNAS

### Google Scholar

**Badge no footer da página:**
```
Perfil completo: [Google Scholar] [ResearchGate] [ORCID]
```

### ORCID

**ID único de pesquisador:**
- Badge oficial ORCID
- Link para perfil
- Aumenta credibilidade acadêmica

---

## CHECKLIST DE IMPLEMENTAÇÃO

Para cada publicação adicionada:

- [ ] Título completo e correto
- [ ] Todos os autores listados
- [ ] Referência bibliográfica completa
- [ ] Ano de publicação
- [ ] Volume/número/páginas (artigos)
- [ ] DOI verificado e funcional
- [ ] PDF disponível (se possível)
- [ ] Direitos autorais verificados
- [ ] Link alternativo (PubMed, SciELO)
- [ ] Structured data adicionado
- [ ] Mobile testado

---

## CONTEÚDO EXEMPLO

### Template de Publicação - Artigo

```
Psiquiatria dimensional: além do modelo categorial do DSM-5
Revista de Psiquiatria Clínica, 2024, vol. 51, n. 2, p. 87-102
[DOI: 10.1590/rpc.2024.0051] [PDF]
```

### Template de Publicação - Capítulo

```
Canabidiol no tratamento de transtornos de ansiedade: 
evidências e protocolos
In: Machado, R.S. (Ed.). Terapias Inovadoras em Psiquiatria.
Rio de Janeiro: Guanabara Koogan, 2024. p. 145-168.
[Link]
```

### Template de Publicação - Congresso

```
Uso de inteligência artificial na análise comportamental 
de pacientes com TDAH
XXII Congresso Brasileiro de Psiquiatria, São Paulo, 2024
Apresentação oral
[Resumo PDF]
```

---

## INFORMAÇÕES NECESSÁRIAS

Para completar a página, coletar:

- [ ] Lista completa de publicações
- [ ] Dados bibliográficos precisos
- [ ] DOIs de todos os artigos
- [ ] Permissões para PDFs
- [ ] Coautores de cada trabalho
- [ ] Datas exatas de publicação
- [ ] Links para versões online
- [ ] Google Scholar profile
- [ ] ORCID ID
- [ ] ResearchGate profile (se houver)

---

## NOTAS FINAIS

**Manutenção:**
- Atualizar quando nova publicação sair
- Revisar links periodicamente (DOIs podem mudar)
- Adicionar publicações no prelo

**Ordem:**
- Sempre mais recente primeiro
- Facilita encontrar trabalhos atuais
- Padrão acadêmico

**Transparência:**
- Indicar claramente status (publicado, no prelo)
- Não inflar CV com trabalhos não publicados
- Honestidade > aparência

**Qualidade:**
- Apenas trabalhos relevantes
- Peer-reviewed quando possível
- Contribuições significativas

---

## DECISÃO FINAL

**Se tiver publicações:** Implementar página completa

**Se não tiver ainda:** Usar placeholder elegante com link para blog

**Fase inicial:** OK começar sem publicações, adicionar depois

---

PÁGINA COMPLETA E REVISADA
