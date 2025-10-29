# Deployment Instructions

## Cloudflare Workers CI/CD Setup

Este projeto está configurado para fazer deploy automático no Cloudflare Workers via GitHub Actions.

### Worker Configuration

- **Worker Name:** drgustavomendes
- **Account ID:** 1a481f7cdb7027c30174a692c89cbda1
- **Worker URL:** https://drgustavomendes.voither.workers.dev

### GitHub Secrets Required

Para que o CI/CD funcione, você precisa configurar os seguintes secrets no GitHub:

1. **CLOUDFLARE_API_TOKEN**
   - Acesse: https://dash.cloudflare.com/profile/api-tokens
   - Crie um token com as permissões:
     - Account - Workers Scripts - Edit
     - Account - Workers KV Storage - Edit (se usar KV)
     - Account - D1 - Edit (se usar D1)
     - Account - R2 - Edit (se usar R2)
   - Ou use o template "Edit Cloudflare Workers"

2. **CLOUDFLARE_ACCOUNT_ID**
   - Valor: `1a481f7cdb7027c30174a692c89cbda1`
   - Você pode encontrar isso em: https://dash.cloudflare.com/ → selecione sua conta → Account ID na barra lateral

### Como adicionar secrets no GitHub

1. Vá para o repositório no GitHub
2. Clique em **Settings** → **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Adicione cada secret:
   - Nome: `CLOUDFLARE_API_TOKEN`
   - Valor: [seu token da Cloudflare]
   - Nome: `CLOUDFLARE_ACCOUNT_ID`
   - Valor: `1a481f7cdb7027c30174a692c89cbda1`

### Deploy Workflow

O deploy acontece automaticamente quando você faz push para:
- Branch `main`
- Branch `master`

Você também pode fazer deploy manual através de:
- GitHub Actions → Deploy to Cloudflare Workers → Run workflow

### Manual Deploy

Se preferir fazer deploy manual localmente:

```bash
cd project
npm install
npm run build
wrangler deploy
```

### Verificar Deploy

Após o deploy, verifique:
- ✅ GitHub Actions: https://github.com/[seu-usuario]/drgustavo-lp/actions
- 🌐 Site: https://drgustavomendes.voither.workers.dev
- 📊 Dashboard: https://dash.cloudflare.com/ → Workers & Pages → drgustavomendes

### Troubleshooting

**Erro: "Authentication error"**
- Verifique se o CLOUDFLARE_API_TOKEN está correto e tem as permissões necessárias

**Erro: "Account not found"**
- Verifique se o CLOUDFLARE_ACCOUNT_ID está correto

**Erro: "Build failed"**
- Verifique os logs do GitHub Actions
- Tente rodar `npm run build` localmente para identificar o erro

### Resources Bindings

O worker tem acesso aos seguintes recursos da Cloudflare:

- **D1 Database:** drgustavomendes-db (binding: `DB`)
- **R2 Bucket:** drgustavomendes-assets (binding: `R2_ASSETS`)
- **KV Namespace:** SITE_CACHE (id: `ee0f09bcb97149ecb64f09d4276d0332`)
- **Workers AI:** Enabled (binding: `AI`)

Certifique-se de que esses recursos existem na sua conta Cloudflare antes de fazer deploy.
