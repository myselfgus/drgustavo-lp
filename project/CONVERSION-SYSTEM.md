# Sistema de Conversão Agêntico

## Arquitetura

```
User Click → /api/conversion → DeepSeek R1 (AI Gateway) → Tool Calling → D1 + Meta API
                                      ↓
                               LLM decide tudo:
                               - Qualidade do lead (0-10)
                               - Salvar ou ignorar
                               - Enviar ao Meta ou não
                               - Valor da conversão
```

## Como Funciona

### 1. **Frontend (Declarativo)**

Qualquer botão de conversão chama `/api/conversion`:

```javascript
await fetch('/api/conversion', {
  method: 'POST',
  body: JSON.stringify({
    event_type: 'schedule_click', // ou 'whatsapp_click'
    event_data: {
      location: 'hero',
      session_id: sessionStorage.getItem('session_id')
    }
  })
});
```

### 2. **Backend (Agêntico)**

O Worker (`/api/conversion.ts`) **NÃO** tem lógica hardcoded. Tudo é decidido pelo LLM:

**Ferramentas disponíveis para o LLM:**

- `save_lead` - Salva no D1 (contact_submissions)
- `score_lead_quality` - Analisa qualidade 0-10
- `send_to_meta` - Envia ao Meta Conversions API
- `query_analytics` - Consulta histórico do usuário

**Processo:**

1. LLM recebe evento + contexto (IP, User-Agent, Referrer)
2. LLM decide autonomamente:
   - "É lead real ou click acidental?"
   - "Qual a qualidade? (0-10)"
   - "Devo salvar no banco?"
   - "Devo enviar ao Meta?"
3. LLM executa tool calls
4. Resultados salvos no KV para auditoria

### 3. **Meta Integration**

**Pixel (Client-Side):**
- ✅ Já funciona (instalado)
- ❌ Bloqueado por iOS/Safari (~40% perda)

**Conversions API (Server-Side):**
- 🔄 Preparado no código
- ⏳ Aguardando `META_ACCESS_TOKEN`

**Como ativar:**

```bash
# No Cloudflare Dashboard
wrangler secret put META_ACCESS_TOKEN
# Cole o token do Meta Business Manager
```

Quando tiver token, o LLM automaticamente usa `send_to_meta` para leads de alta qualidade (score >= 7).

## Rastreamento Atual

**Eventos rastreados:**

| Evento | Tipo Meta | Valor Estimado |
|--------|-----------|----------------|
| Click "Agendar" (Hero) | Lead | R$ 800 |
| Click "Agendar" (Header) | Lead | R$ 800 |
| Click WhatsApp | Contact | R$ 400 |

**LLM ajusta valores baseado em:**
- Qualidade do lead
- Histórico de navegação
- Origem do tráfego

## Dados Salvos

**D1 - `contact_submissions`:**

```sql
id, name, email, phone, message, source, metadata, created_at
```

**Metadata inclui:**
- IP, User-Agent, Referrer
- Event type, event data
- AI score (se calculado)

**KV - Cache de decisões:**

```
conversion:{timestamp} = {
  event_type,
  ip,
  agent_decision: "Raciocínio do LLM",
  tools_executed: [...]
}
```

## Consultar Conversões

**Via Wrangler:**

```bash
# Últimos 10 leads
wrangler d1 execute drgustavomendes-db --remote --command \
  "SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 10"

# Leads de alta qualidade (metadata contém score >= 7)
wrangler d1 execute drgustavomendes-db --remote --command \
  "SELECT * FROM contact_submissions WHERE metadata LIKE '%\"score\":7%' OR metadata LIKE '%\"score\":8%' OR metadata LIKE '%\"score\":9%' OR metadata LIKE '%\"score\":10%'"
```

**Dashboard (futuro):**
- Criar endpoint `/api/leads` para visualização
- Filtros: data, score, source, Meta enviado

## Vantagens

✅ **LLM decide tudo** - sem lógica hardcoded
✅ **Filtragem inteligente** - ignora clicks acidentais
✅ **Scoring automático** - qualidade 0-10
✅ **Meta otimizado** - só envia leads valiosos
✅ **Auditável** - todas decisões salvas no KV
✅ **Evolutivo** - adicionar tools sem mudar lógica

## Próximos Passos

1. **Conseguir Meta Access Token** (quando possível)
2. **Criar dashboard `/admin/leads`** para visualização
3. **Adicionar tool `analyze_user_journey`** - análise completa de sessão
4. **Integrar ElevenLabs Agent** - pré-qualificação por voz
5. **Retargeting automático** - LLM cria audiences no Meta

## Debug

**Ver decisões do agente:**

```bash
# Ver últimas conversões processadas
wrangler kv:key list --namespace-id=ee0f09bcb97149ecb64f09d4276d0332 --prefix="conversion:"
```

**Logs do Worker:**

```bash
wrangler tail
# Click num botão e veja o raciocínio do LLM em tempo real
```

## Filosofia

**Por que agêntico?**

Porque cada lead é único. Hardcoding regras como "todo click em Agendar = lead" polui o banco e desperdiça budget do Meta.

O LLM analisa contexto:
- Usuário chegou pelo Google Ads ou orgânico?
- Navegou 5 páginas ou saiu direto?
- User-Agent é bot ou humano?
- Horário comercial ou madrugada?

E toma decisão inteligente sobre salvar, ignorar, ou escalar ao Meta.

---

**Desenvolvido com:** Cloudflare Workers + AI Gateway + DeepSeek R1
