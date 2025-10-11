# OTIAdriver — Web v1 (Azul 💙 / Verde 💚)

Site base da OTIAdriver para deploy rápido na **Vercel**.

## 📦 Estrutura
- `index.html` — Home com seções de Recursos, Planos e Entrar
- `style.css` — Tema Azul/Verde e layout responsivo
- `script.js` — Login (demo) e placeholders de checkout Mercado Pago
- `assets/` — Logo, favicon e ilustração
- `components/` — Pasta reservada para futuros componentes

## 🚀 Como publicar (GitHub → Vercel)
1. Crie um repositório no GitHub (ex.: `otiadriver`).
2. Envie estes arquivos (arraste e solte pela web).
3. Na Vercel: **Add New Project** → escolha o repositório → Deploy.
4. Conecte o domínio: `Settings > Domains` → `otiadriver.com.br`.
5. (DNS) No Registro.br, aponte para Vercel:
   - **A** @ → `76.76.21.21`
   - **CNAME** www → `cname.vercel-dns.com`
   *ou* use os NS `ns1.vercel-dns.com` e `ns2.vercel-dns.com`.

## 💳 Mercado Pago (placeholder)
Edite `script.js` e substitua `SEU_ID_FREE` e `SEU_ID_PREMIUM` pelos seus links/preferências do Mercado Pago.

## 🔐 OAuth Google (futuro)
Trocar o login demo por OAuth (ex.: Firebase Authentication) quando desejar.
