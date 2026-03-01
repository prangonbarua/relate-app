# Hackathon Tech Stack Research: Aplicativo para pais imigrantes + autismo
|||SET|||
**Data:** 28/02/2026 | **Tempo de construção:** 10 horas (8h30 - 18h30)
|||SET|||
---
|||SET|||
## 1. RESUMO DA PILHA RECOMENDADA
|||SET|||
| Camada | Tecnologia | Por que |
|-------|-----------|-----|
| **Estrutura** | Next.js 16 (Roteador de aplicativos) | SSR para SEO, rotas API, suporte PWA, implantação Vercel |
| **Andaime** | `create-t3-app` ou iniciador Nextbase | Caminho mais rápido para pilha completa digitada |
| **Idioma** | TypeScript em todo | Segurança do tipo ponta a ponta |
| **API de back-end** | tRPC (via pilha T3) OU rotas API Next.js + cliente Supabase | Padrão zero e com segurança de tipo |
| **Banco de dados** | Supabase (PostgreSQL) | Nível gratuito, autenticação, tempo real, pgvector, RLS |
| **ORM** | Prisma | Tipos gerados automaticamente, ferramentas de migração |
| **Autorização** | Autenticação Supabase | Login anônimo, OTP por telefone, e-mail/senha, sem necessidade de PII |
| **i18n** | próximo-intl | Integração nativa Next.js, suporte RSC, pacote pequeno, suporte RTL |
| **IU** | shadcn/ui + Tailwind CSS | Componentes de copiar e colar, propriedade total, Radix a11y, pronto para RTL |
| **Bate-papo com IA** | SDK Vercel AI + API Claude (Haiku 4.5) | Streaming, gancho useChat, econômico |
| **BD de vetor** | Supabase pgvetor | Mesma base de dados, sem serviço extra, RLS em vetores |
| **Incorporações** | OpenAI text-embedding-3-small | Tokens de US$ 0,02/1 milhão, 5x mais baratos que ada-002 |
| **API de tradução** | API de tradução do Google Cloud | 500 mil caracteres gratuitos/mês, mais de 130 idiomas, sem armazenamento de dados |
| **PWA** | Serwist (@serwist/next) | Sucessor moderno do next-pwa, suporte offline |
| **Implantação** | Vercel (nível gratuito) | Implantação Next.js com configuração zero, largura de banda de 100 GB |
| **Fórum** | Personalizado com Supabase Realtime | Atualizações em tempo real, RLS para moderação |
|||SET|||
**Custo mensal total estimado (Hackathon/Demo): $0** -- Todos os serviços acima têm níveis gratuitos suficientes para uma demonstração de hackathon.
|||SET|||
---
|||SET|||
## 2. ESTRUTURA DE REAÇÃO

**Date:** 2026-02-28 | **Build Time:** 10 Hours (8:30 AM - 6:30 PM)

---

## 1. RECOMMENDED STACK SUMMARY

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 16 (App Router) | SSR for SEO, API routes, PWA support, Vercel deploy |
| **Scaffold** | `create-t3-app` or Nextbase starter | Fastest path to typed full-stack |
| **Language** | TypeScript throughout | End-to-end type safety |
| **Backend API** | tRPC (via T3 stack) OR Next.js API routes + Supabase client | Type-safe, zero boilerplate |
| **Database** | Supabase (PostgreSQL) | Free tier, auth, realtime, pgvector, RLS |
| **ORM** | Prisma | Auto-generated types, migration tooling |
| **Auth** | Supabase Auth | Anonymous sign-in, phone OTP, email/password, no PII required |
| **i18n** | next-intl | Native Next.js integration, RSC support, tiny bundle, RTL support |
| **UI** | shadcn/ui + Tailwind CSS | Copy-paste components, full ownership, Radix a11y, RTL ready |
| **AI Chat** | Vercel AI SDK + Claude API (Haiku 4.5) | Streaming, useChat hook, cost-effective |
| **Vector DB** | Supabase pgvector | Same database, no extra service, RLS on vectors |
| **Embeddings** | OpenAI text-embedding-3-small | $0.02/1M tokens, 5x cheaper than ada-002 |
| **Translation API** | Google Cloud Translation API | Free 500K chars/month, 130+ languages, no data storage |
| **PWA** | Serwist (@serwist/next) | Modern next-pwa successor, offline support |
| **Deployment** | Vercel (free tier) | Zero-config Next.js deploy, 100GB bandwidth |
| **Forum** | Custom with Supabase Realtime | Real-time updates, RLS for moderation |

**Total Estimated Monthly Cost (Hackathon/Demo): $0** -- All services above have free tiers sufficient for a hackathon demo.

---

## 2. REACT FRAMEWORK

### Recomendação: Next.js 16 (Roteador de aplicativos)
|||SET|||
**Por que Next.js em vez de Vite+React para ESTE aplicativo:**
- SSR/SSG para SEO (importante para páginas de recursos que devem ser descobertas por pais imigrantes pesquisando no Google)
- Rotas de API integradas eliminam a necessidade de servidor back-end separado
- App Router com React Server Components = zero JS de cliente para conteúdo traduzido
- Suporte nativo ao manifesto PWA via `app/manifest.ts`
- A implantação do Vercel tem configuração zero
- next-intl funciona nativamente com RSC (traduções renderizadas no lado do servidor = 0 bytes para o cliente)
|||SET|||
**Quando Vite seria melhor:**
- SPA puro sem necessidades de SEO
- Inicialização mais rápida do servidor de desenvolvimento (benefício marginal para hackathon de 10 horas)
- Modelo mental mais simples (sem distinção de componentes servidor/cliente)
|||SET|||
**Configuração do PWA com Serwist (próximo sucessor do PWA):**
```bash
npm install @serwist/next @serwist/precaching @serwist/sw idb
```
|||SET|||
Principais estratégias off-line:
- **CacheFirst** para ativos estáticos (`/_next/static/`) - hash de conteúdo, nunca altera
- **NetworkFirst** para respostas de API e conteúdo dinâmico
- **StaleWhileRevalidate** para arquivos de tradução e páginas de recursos
- IndexedDB para armazenamento de dados offline (perfis infantis, recursos salvos)
|||SET|||
**IMPORTANTE:** Next.js 16 usa Turbopack por padrão, mas Serwist requer Webpack. Você precisará configurar a compilação adequadamente.
|||SET|||
**Manifesto PWA** (suporte integrado a Next.js):
```datilografado
//app/manifest.ts
importar tipo { MetadataRoute } de 'próximo'
|||SET|||
exportar função padrão manifest(): MetadataRoute.Manifest {
  retornar {
    nome: 'Ponte ASD',
    nome_curto: 'Ponte ASD',
    descrição: 'Apoiar famílias de imigrantes com crianças autistas',
    start_url: '/',
    exibição: 'autônomo',
    cor_de_fundo: '#ffffff',
    theme_color: '#4F46E5',
    ícones: [
      {src: '/icon-192.png', tamanhos: '192x192', tipo: 'imagem/png' },
      {src: '/icon-512.png', tamanhos: '512x512', tipo: 'imagem/png' },
    ],
  }
}
```

**Why Next.js over Vite+React for THIS app:**
- SSR/SSG for SEO (important for resource pages that should be discoverable by immigrant parents searching Google)
- Built-in API routes eliminate need for separate backend server
- App Router with React Server Components = zero client JS for translated content
- Native PWA manifest support via `app/manifest.ts`
- Vercel deployment is zero-config
- next-intl works natively with RSC (translations rendered server-side = 0 bytes to client)

**When Vite would be better:**
- Pure SPA with no SEO needs
- Faster dev server startup (marginal benefit for 10-hour hackathon)
- Simpler mental model (no server/client component distinction)

**PWA Setup with Serwist (next-pwa successor):**
```bash
npm install @serwist/next @serwist/precaching @serwist/sw idb
```

Key offline strategies:
- **CacheFirst** for static assets (`/_next/static/`) -- content-hashed, never change
- **NetworkFirst** for API responses and dynamic content
- **StaleWhileRevalidate** for translation files and resource pages
- IndexedDB for offline data storage (child profiles, saved resources)

**IMPORTANT:** Next.js 16 uses Turbopack by default, but Serwist requires Webpack. You will need to configure the build accordingly.

**PWA Manifest** (built-in Next.js support):
```typescript
// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ASD Bridge',
    short_name: 'ASD Bridge',
    description: 'Supporting immigrant families with autistic children',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4F46E5',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
```

**Fontes:**
- [Comparação completa entre Vite e Next.js 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Guia Next.js PWA](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Introdução ao Serwist](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA com Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Construindo PWA em Next.js com Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)
|||SET|||
---
|||SET|||
## 3. BACKEND DO TYPESCRIPT
|||SET|||
### Recomendação: Rotas API Next.js + Cliente Supabase (primário) OU tRPC (se estiver usando T3)
|||SET|||
**Opção A: Rotas API Next.js + Supabase (MAIS SIMPLES para hackathon)**
- Nenhum servidor back-end separado
- O cliente Supabase JS lida com consultas de banco de dados, autenticação, tempo real
- Rotas de API para chat de IA, chamadas de API de tradução e qualquer lógica do lado do servidor
- Mais rápido de configurar
|||SET|||
**Opção B: tRPC via T3 Stack (MELHOR DX se a equipe souber)**
- Segurança do tipo ponta a ponta entre frontend e backend
- Preenchimento automático para chamadas de API no frontend
- Funciona com Prisma para tipos gerados
- `create-t3-app` estrutura tudo
|||SET|||
```bash
# Opção A: Next.js simples + Supabase
npx create-next-app@latest meu-app --typescript --tailwind --eslint --app --src-dir
|||SET|||
# Opção B: Pilha T3
npx create-t3-app@mais recente meu aplicativo
# Selecione: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
```

---

## 3. TYPESCRIPT BACKEND

### Recommendation: Next.js API Routes + Supabase Client (primary) OR tRPC (if using T3)

**Option A: Next.js API Routes + Supabase (SIMPLEST for hackathon)**
- No separate backend server
- Supabase JS client handles DB queries, auth, realtime
- API routes for AI chat, translation API calls, and any server-side logic
- Fastest to set up

**Option B: tRPC via T3 Stack (BEST DX if team knows it)**
- End-to-end type safety between frontend and backend
- Auto-completion for API calls in the frontend
- Works with Prisma for generated types
- `create-t3-app` scaffolds everything

```bash
# Option A: Plain Next.js + Supabase
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir

# Option B: T3 Stack
npx create-t3-app@latest my-app
# Select: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
```

**Por que NÃO Expressar/Fastificar:**
- Adiciona complexidade de implantação (servidor separado para host)
- Nenhum benefício em relação às rotas da API Next.js para este caso de uso
- 30-60 minutos extras de configuração que você não tem
|||SET|||
**Por que NÃO sem servidor (funções Lambda/Netlify):**
- As rotas da API Next.js no Vercel SÃO sem servidor por padrão
- Não há necessidade de infraestrutura de funções separadas
|||SET|||
**Fontes:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [Guia T3 Stack 2025](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Criar aplicativo T3](https://create.t3.gg/)
- [tRPC Oficial](https://trpc.io/)
|||SET|||
---
|||SET|||
## 4. BANCO DE DADOS
|||SET|||
### Recomendação: Supabase (PostgreSQL)
|||SET|||
**Por que a Supabase vence neste projeto:**
|||SET|||
| Recurso | Supabase | Base de fogo | Escala Planetária |
|---------|----------|----------|------------|
| Armazenamento de banco de dados de nível gratuito | 500 MB | 1 GB (Faísca) | Nível gratuito descontinuado |
| Autenticação incluída | Sim (50K MAU grátis) | Sim (50K MAU grátis) | Não |
| Tempo real | Sim (mudanças no Postgres) | Sim (melhor da categoria) | Não |
| Pesquisa vetorial (pgvector) | Sim, integrado | Não | Não |
| Suporte SQL | PostgreSQL completo | Somente NoSQL | MySQL |
| RLS (segurança em nível de linha) | Sim, baseado em SQL | Regras de segurança do Firebase | Não |
| Autenticação anônima | Sim, integrado | Sim | N/A |
| Código aberto | Sim | Não | Parcialmente |
| Portabilidade de dados | Completo (é Postgres) | Aprisionamento de fornecedor | Compatível com MySQL |

**Why NOT Serverless (Lambda/Netlify Functions):**
- Next.js API routes on Vercel ARE serverless by default
- No need for separate function infrastructure

**Sources:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [T3 Stack 2025 Guide](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Create T3 App](https://create.t3.gg/)
- [tRPC Official](https://trpc.io/)

---

## 4. DATABASE

### Recommendation: Supabase (PostgreSQL)

**Why Supabase wins for this project:**

| Feature | Supabase | Firebase | PlanetScale |
|---------|----------|----------|-------------|
| Free tier DB storage | 500 MB | 1 GB (Spark) | Discontinued free tier |
| Auth included | Yes (50K MAU free) | Yes (50K MAU free) | No |
| Realtime | Yes (Postgres Changes) | Yes (best-in-class) | No |
| Vector search (pgvector) | Yes, built-in | No | No |
| SQL support | Full PostgreSQL | NoSQL only | MySQL |
| RLS (Row Level Security) | Yes, SQL-based | Firebase Security Rules | No |
| Anonymous auth | Yes, built-in | Yes | N/A |
| Open source | Yes | No | Partially |
| Data portability | Full (it is Postgres) | Vendor lock-in | MySQL compatible |

**Nível gratuito Supabase (2026):**
- 2 projetos ativos
- 500 MB de armazenamento de banco de dados
- Saída de banco de dados de 2 GB
- 50.000 MAU (autenticação)
- 1 GB de armazenamento de arquivos
- 500.000 invocações de funções de borda
- Não é necessário cartão de crédito, nunca expira
|||SET|||
**Por que Supabase em vez de Firebase para ESTE aplicativo:**
1. pgvector para pesquisa de recursos de IA (sem necessidade de serviço extra)
2. SQL completo para consultas complexas (marcos secundários, rastreamento de habilidades)
3. RLS para acesso anônimo ao fórum com preservação de privacidade
4. Portabilidade de dados (não restrita ao ecossistema Google)
5. Melhor para dados relacionais (usuário -> filhos -> habilidades -> marcos)
|||SET|||
**Integração Prisma:**
```prisma
banco de dados da fonte de dados {
  provedor = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```
|||SET|||
**Fontes:**
- [Revisão do Supabase vs Firebase 2026](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025- which-one-actually-scales-with-you-2374)
- [Preços Supabase 2026](https://uibakery.io/blog/supabase-pricing)
- [Limites de nível gratuito da Supabase](https://supabase.com/pricing)
|||SET|||
---
|||SET|||
## 5. AUTENTICAÇÃO
|||SET|||
### Recomendação: Supabase Auth com login anônimo + telefone OTP + e-mail/senha
|||SET|||
**PRINCÍPIO DE DESIGN CRÍTICO para este público:**
O aplicativo deve ser utilizável SEM fornecer informações de identificação pessoal. Muitos pais imigrantes (especialmente os indocumentados) não usarão um aplicativo que exija ID/SSN do governo, verificação de nome real, coleta de endereço ou e-mail obrigatório.

**Why Supabase over Firebase for THIS app:**
1. pgvector for AI resource search (no extra service needed)
2. Full SQL for complex queries (child milestones, skill tracking)
3. RLS for privacy-preserving anonymous forum access
4. Data portability (not locked into Google ecosystem)
5. Better for relational data (user -> children -> skills -> milestones)

**Prisma Integration:**
```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

**Sources:**
- [Supabase vs Firebase 2026 Review](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-which-one-actually-scales-with-you-2374)
- [Supabase Pricing 2026](https://uibakery.io/blog/supabase-pricing)
- [Supabase Free Tier Limits](https://supabase.com/pricing)

---

## 5. AUTHENTICATION

### Recommendation: Supabase Auth with Anonymous Sign-In + Phone OTP + Email/Password

**CRITICAL DESIGN PRINCIPLE for this audience:**
The app must be usable WITHOUT providing personally identifiable information. Many immigrant parents (especially undocumented) will not use an app that requires government ID/SSN, real name verification, address collection, or mandatory email.

**Níveis de autenticação (confiança progressiva):**
|||SET|||
| Nível | Método | O que ele desbloqueia | PII obrigatório |
|------|--------|----------------|-------------|
| 1 | Login anônimo | Navegue pelos recursos, use o bate-papo AI, veja o fórum | Nenhum |
| 2 | Telefone OTP | Postar no fórum, salvar perfis infantis | Somente número de telefone |
| 3 | E-mail + senha | Conta completa com recuperação | Endereço de e-mail |
|||SET|||
**Autenticação Anônima Supabase:**
```datilografado
// Faça login anonimamente – sem necessidade de PII
const {dados, erro} = aguardar supabase.auth.signInAnonymously()
|||SET|||
// Mais tarde, o usuário pode vincular um número de telefone
const {dados, erro} = aguardar supabase.auth.updateUser({
  telefone: '+1234567890',
})
```
|||SET|||
**Configuração OTP do telefone:**
Supabase suporta autenticação por telefone via Twilio, MessageBird, Textlocal e Vonage. Os usuários recebem um PIN de 6 dígitos via SMS, válido por 60 segundos.
|||SET|||
**Segurança para usuários anônimos:**
- Habilite CAPTCHA (recomendado Cloudflare Turnstile - gratuito) para evitar abusos
- Limite de taxa baseado em IP: 30 solicitações/hora (ajustável no painel Supabase)
- As políticas RLS podem distinguir usuários anônimos de usuários autenticados por meio da declaração JWT `is_anonymous`
|||SET|||
**Por que NÃO é funcionário deste aplicativo:**
- Sem login anônimo integrado
- $ 0,02/MAU após 10K (Supabase: 50K grátis)
- UI exagerada para este caso de uso
- Adiciona dependência externa
|||SET|||
**Por que NÃO Auth0:**
- Configuração complexa para hackathon
- Sem autenticação anônima
- Nível gratuito limitado a 7.500 MAU

| Tier | Method | What It Unlocks | PII Required |
|------|--------|----------------|--------------|
| 1 | Anonymous sign-in | Browse resources, use AI chat, view forum | None |
| 2 | Phone OTP | Post in forum, save child profiles | Phone number only |
| 3 | Email + password | Full account with recovery | Email address |

**Supabase Anonymous Auth:**
```typescript
// Sign in anonymously -- no PII needed
const { data, error } = await supabase.auth.signInAnonymously()

// Later, user can link a phone number
const { data, error } = await supabase.auth.updateUser({
  phone: '+1234567890',
})
```

**Phone OTP Setup:**
Supabase supports phone auth via Twilio, MessageBird, Textlocal, and Vonage. Users receive a 6-digit PIN via SMS, valid for 60 seconds.

**Security for Anonymous Users:**
- Enable CAPTCHA (Cloudflare Turnstile recommended -- free) to prevent abuse
- IP-based rate limit: 30 requests/hour (adjustable in Supabase dashboard)
- RLS policies can distinguish anonymous vs. authenticated users via `is_anonymous` JWT claim

**Why NOT Clerk for this app:**
- No built-in anonymous login
- $0.02/MAU after 10K (Supabase: 50K free)
- Overkill UI for this use case
- Adds external dependency

**Why NOT Auth0:**
- Complex setup for hackathon
- No anonymous auth
- Free tier limited to 7,500 MAU

**Fontes:**
- [Inscrições anônimas da Supabase](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Login do telefone Supabase](https://supabase.com/docs/guides/auth/phone-login)
- [Autenticação de funcionário vs Supabase](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Segurança de logins anônimos](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)
|||SET|||
---
|||SET|||
## 6. INTERNACIONALIZAÇÃO (i18n)
|||SET|||
### Recomendação: next-intl
|||SET|||
**Por que next-intl em vez de react-i18next ou react-intl:**
|||SET|||
| Recurso | próximo-intl | reagir-i18próximo | reagir-intl |
|---------|-----------|---------------|------------|
| Suporte ao roteador de aplicativos Next.js | Nativo | Através do invólucro | Através do invólucro |
| Suporte a componentes de servidor | Integrado (0 cliente JS) | Requer configuração | Requer configuração |
| Tamanho do pacote | ~4 KB | ~8 KB | ~12 KB |
| Suporte RTL | Integrado | Manual | Manual |
| Formas plurais (árabe: 6 formas) | UTI Automática | Configuração manual | UTI Automática |
| Segurança de tipo | TypeScript primeiro | Bom | Bom |
|||SET|||
**Instalação:**
```bash
npm instala next-intl rtl-detect
npm install --save-dev @types/rtl-detect
```
|||SET|||
**Configuração RTL para árabe, farsi, urdu:**
```datilografado
//ganchos/useTextDirection.ts
importar {useLocale} de 'next-intl';
importar {isRtlLang} de 'rtl-detect';

---

## 6. INTERNATIONALIZATION (i18n)

### Recommendation: next-intl

**Why next-intl over react-i18next or react-intl:**

| Feature | next-intl | react-i18next | react-intl |
|---------|-----------|---------------|------------|
| Next.js App Router support | Native | Via wrapper | Via wrapper |
| Server Component support | Built-in (0 client JS) | Requires setup | Requires setup |
| Bundle size | ~4KB | ~8KB | ~12KB |
| RTL support | Built-in | Manual | Manual |
| Plural forms (Arabic: 6 forms) | Automatic ICU | Manual config | Automatic ICU |
| Type safety | TypeScript-first | Good | Good |

**Installation:**
```bash
npm install next-intl rtl-detect
npm install --save-dev @types/rtl-detect
```

**RTL Setup for Arabic, Farsi, Urdu:**
```typescript
// hooks/useTextDirection.ts
import { useLocale } from 'next-intl';
import { isRtlLang } from 'rtl-detect';

função de exportação useTextDirection() {
  const locale = useLocale();
  retornar isRtlLang (localidade)? 'rtl' : 'ltr';
}
|||SET|||
//app/[locale]/layout.tsx
função padrão de exportação LocaleLayout({filhos, parâmetros: {locale } }) {
  direção const = isRtlLang(locale)? 'rtl' : 'ltr';
  retornar (
    <html lang={locale} dir={direção}>
      <body>{filhos}</body>
    </html>
  );
}
```
|||SET|||
**Estrutura do arquivo de tradução:**
```
mensagens/
  pt/
    common.json # Strings de UI compartilhadas (botões, navegação, erros)
    auth.json # Login, inscrição, perfil
    resources.json # Biblioteca de recursos
    forum.json # Fórum/comunidade
    ai-chat.json #Assistente de IA
    child-profile.json # Rastreamento infantil
    skills.json #Cartões de habilidades
  ar/ # Árabe (RTL)
  es/ # espanhol
  zh/# Chinês (simplificado)
  fa/ # Farsi/Persa (RTL)
  seu/ # Urdu (RTL)
```
|||SET|||
**Idiomas prioritários para MVP:** Inglês (padrão), espanhol, árabe (RTL para demonstrar capacidade técnica), chinês (simplificado).
|||SET|||
**CSS para RTL – use propriedades lógicas do Tailwind:**
- `pl-4` -> `ps-4` (preenchimento-inline-start)
- `pr-4` -> `pe-4` (preenchimento-inline-end)
- `texto-esquerdo` -> `texto-início`
- `text-right` -> `text-end`
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `me-auto`
|||SET|||
**Tradução automática para conteúdo do fórum:**
|||SET|||
| Serviço | Nível gratuito | Preço após grátis | Idiomas | Privacidade |
|--------|-----------|-----------------|-----------|---------|
| Tradução do Google Cloud | 500 mil caracteres/mês (permanente) | Caracteres de US$ 20/1 milhão | 130+ | Nenhum dado armazenado/utilizado para treinamento |
| ProfundoL | 500 mil caracteres/mês | $ 25/1 milhão de caracteres + $ 5,49/mês | 30+ | Os dados do nível gratuito podem ser armazenados |
| Amazon Traduzir | 2 milhões de caracteres/mês (apenas 12 meses) | Caracteres de US$ 15/1 milhão | 75+ | Nenhum dado armazenado |
|||SET|||
**Recomendação:** Google Cloud Translation API: nível gratuito permanente, maior cobertura de idiomas (mais de 130 idiomas, incluindo todos os idiomas RTL de destino), fortes garantias de privacidade (sem dados armazenados ou usados ​​para treinamento).

// app/[locale]/layout.tsx
export default function LocaleLayout({ children, params: { locale } }) {
  const direction = isRtlLang(locale) ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={direction}>
      <body>{children}</body>
    </html>
  );
}
```

**Translation File Structure:**
```
messages/
  en/
    common.json       # Shared UI strings (buttons, nav, errors)
    auth.json          # Login, signup, profile
    resources.json     # Resource library
    forum.json         # Forum/community
    ai-chat.json       # AI assistant
    child-profile.json # Child tracking
    skills.json        # Skill cards
  ar/                  # Arabic (RTL)
  es/                  # Spanish
  zh/                  # Chinese (Simplified)
  fa/                  # Farsi/Persian (RTL)
  ur/                  # Urdu (RTL)
```

**Priority Languages for MVP:** English (default), Spanish, Arabic (RTL to demonstrate technical capability), Chinese (Simplified).

**CSS for RTL -- use Tailwind logical properties:**
- `pl-4` -> `ps-4` (padding-inline-start)
- `pr-4` -> `pe-4` (padding-inline-end)
- `text-left` -> `text-start`
- `text-right` -> `text-end`
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `me-auto`

**Machine Translation for Forum Content:**

| Service | Free Tier | Price After Free | Languages | Privacy |
|---------|-----------|-----------------|-----------|---------|
| Google Cloud Translation | 500K chars/month (permanent) | $20/1M chars | 130+ | No data stored/used for training |
| DeepL | 500K chars/month | $25/1M chars + $5.49/mo | 30+ | Free tier data may be stored |
| Amazon Translate | 2M chars/month (12 months only) | $15/1M chars | 75+ | No data stored |

**Recommendation:** Google Cloud Translation API -- permanent free tier, largest language coverage (130+ languages including all target RTL languages), strong privacy guarantees (no data stored or used for training).

**Fontes:**
- [Documentação do next-intl](https://next-intl.dev/)
- [Guia completo next-intl 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl vs react-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Suporte RTL Next.js](https://lingo.dev/en/nextjs-i18n/right-to-left-Languages)
- [Preços do Google Cloud Translation](https://cloud.google.com/translate/pricing)
- [DeepL x Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)
|||SET|||
---
|||SET|||
## 7. BIBLIOTECA DE COMPONENTES DE UI
|||SET|||
### Recomendação: shadcn/ui + Tailwind CSS
|||SET|||
**Por que shadcn/ui:**
- Os componentes são copiados e colados em seu projeto (propriedade total, sem atualizações de dependências com que se preocupar)
- Construído em primitivos de UI Radix (compatível com WAI-ARIA, navegação por teclado, suporte a leitor de tela)
- Tailwind CSS nativo (propriedades lógicas para RTL)
- Mais de 40 componentes disponíveis
- Suporte RTL por meio de modelos
- Modo escuro/claro integrado
- Zero sobrecarga de tempo de execução
|||SET|||
**Instalação:**
```bash
npx shadcn@latest init
npx shadcn@latest adicionar botão cartão diálogo formulário de entrada guias de folha avatar crachá comando acordeão brinde
```
|||SET|||
**Componentes principais para este aplicativo:**
- `Cartão` -- Cartões de recursos, cartões de habilidade, cartões de perfil infantil
- `Dialog` / `Sheet` - Interações modais, alternador de idioma
- `Form` + `Input` -- Formulários de perfil infantil, criação de postagem no fórum
- `Tabs` -- Navegação entre seções
- `Avatar` -- Exibição do usuário do fórum (com opção anônima)
- `Badge` -- Níveis de habilidade, tags de idioma
- `Accordion` -- FAQ, detalhes do recurso
- `Command` -- Paleta de pesquisa de recursos
- `Toast` - Notificações
|||SET|||
**Acessibilidade integrada:**
- Todos os componentes baseados em Radix incluem funções e atributos ARIA automaticamente
- A navegação pelo teclado funciona imediatamente (Tab, Enter, Escape, teclas de seta)
- Gerenciamento de foco e captura de foco em modais
- Anúncios de leitores de tela para conteúdo dinâmico
- `aria-describedby` vinculado automaticamente em erros de validação
- `aria-invalid` definido em erros de formulário

---

## 7. UI COMPONENT LIBRARY

### Recommendation: shadcn/ui + Tailwind CSS

**Why shadcn/ui:**
- Components are copy-pasted into your project (full ownership, no dependency updates to worry about)
- Built on Radix UI primitives (WAI-ARIA compliant, keyboard navigation, screen reader support)
- Tailwind CSS native (logical properties for RTL)
- 40+ components available
- RTL support via templates
- Dark/light mode built-in
- Zero runtime overhead

**Installation:**
```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog input form sheet tabs avatar badge accordion command toast
```

**Key Components for This App:**
- `Card` -- Resource cards, skill cards, child profile cards
- `Dialog` / `Sheet` -- Modal interactions, language switcher
- `Form` + `Input` -- Child profile forms, forum post creation
- `Tabs` -- Navigation between sections
- `Avatar` -- Forum user display (with anonymous option)
- `Badge` -- Skill levels, language tags
- `Accordion` -- FAQ, resource details
- `Command` -- Search palette for resources
- `Toast` -- Notifications

**Accessibility Built-In:**
- All Radix-based components include ARIA roles and attributes automatically
- Keyboard navigation works out of the box (Tab, Enter, Escape, Arrow keys)
- Focus management and focus trapping in modals
- Screen reader announcements for dynamic content
- `aria-describedby` linked automatically on validation errors
- `aria-invalid` set on form errors

**Por que NÃO Chakra UI:** Tempo de execução mais pesado (CSS-in-JS), estilo baseado em prop menos flexível do que as classes de utilitário Tailwind, menor impulso do ecossistema em 2025-2026.
|||SET|||
**Por que NÃO Material UI:** Pacote muito pesado, a linguagem de design do Google pode parecer clínica para um aplicativo comunitário, mais difícil de personalizar profundamente.
|||SET|||
**Fontes:**
- [Guia shadcn/ui 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Componentes shadcn/ui acessíveis](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [Comparação de bibliotecas React UI 2025](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)
|||SET|||
---
|||SET|||
## 8. RECURSO DE FÓRUM / COMUNIDADE
|||SET|||
### Arquitetura: Construção Personalizada com Supabase Realtime
|||SET|||
**Modelo de dados (SQL):**
```sql
- Categorias do fórum
CRIAR TABELA forum_categories (
  id UUID CHAVE PRIMÁRIA PADRÃO gen_random_uuid(),
  name_key TEXTO NÃO NULO,
  description_key TEXTO,
  ícone TEXTO,
  sort_order INTEIRO PADRÃO 0,
  criado_em TIMESTAMPTZ PADRÃO AGORA()
);
|||SET|||
- Postagens no fórum (tópicos)
CRIAR TABELA forum_posts (
  id UUID CHAVE PRIMÁRIA PADRÃO gen_random_uuid(),
  categoria_id REFERÊNCIAS UUID forum_categories(id),
  autor_id REFERÊNCIAS UUID auth.users(id),
  is_anonymous BOOLEAN DEFAULT falso,
  nome_exibição TEXTO,
  título TEXTO NÃO NULO,
  conteúdo TEXTO NÃO NULO,
  idioma_original TEXT DEFAULT 'en',
  upvote_count INTEIRO PADRÃO 0,
  comment_count INTEIRO PADRÃO 0,
  is_pinned BOOLEAN DEFAULT falso,
  is_moderado BOOLEAN DEFAULT falso,
  criado_em TIMESTAMPTZ PADRÃO AGORA(),
  atualizado_em TIMESTAMPTZ PADRÃO AGORA()
);

**Why NOT Material UI:** Very heavy bundle, Google's design language may feel clinical for a community app, harder to customize deeply.

**Sources:**
- [shadcn/ui Guide 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Accessible shadcn/ui Components](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [React UI Libraries 2025 Comparison](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)

---

## 8. FORUM / COMMUNITY FEATURE

### Architecture: Custom Build with Supabase Realtime

**Data Model (SQL):**
```sql
-- Forum categories
CREATE TABLE forum_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_key TEXT NOT NULL,
  description_key TEXT,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Forum posts (threads)
CREATE TABLE forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES forum_categories(id),
  author_id UUID REFERENCES auth.users(id),
  is_anonymous BOOLEAN DEFAULT false,
  display_name TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  original_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT false,
  is_moderated BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

- Comentários em postagens
CRIAR TABELA forum_comments (
  id UUID CHAVE PRIMÁRIA PADRÃO gen_random_uuid(),
  post_id REFERÊNCIAS UUID forum_posts(id) EM DELETE CASCADE,
  parent_id REFERÊNCIAS UUID forum_comments(id),
  autor_id REFERÊNCIAS UUID auth.users(id),
  is_anonymous BOOLEAN DEFAULT falso,
  nome_exibição TEXTO,
  conteúdo TEXTO NÃO NULO,
  idioma_original TEXT DEFAULT 'en',
  upvote_count INTEIRO PADRÃO 0,
  criado_em TIMESTAMPTZ PADRÃO AGORA()
);
|||SET|||
- Votos positivos
CRIAR TABELA forum_upvotes (
  id UUID CHAVE PRIMÁRIA PADRÃO gen_random_uuid(),
  user_id REFERÊNCIAS UUID auth.users(id),
  post_id REFERÊNCIAS UUID forum_posts(id),
  comment_id REFERÊNCIAS UUID forum_comments(id),
  criado_em TIMESTAMPTZ PADRÃO AGORA(),
  ÚNICO(user_id, post_id),
  ÚNICO(user_id, comment_id)
);
|||SET|||
- Traduções em cache
CRIAR TABELA forum_translations (
  id UUID CHAVE PRIMÁRIA PADRÃO gen_random_uuid(),
  source_type TEXTO NÃO NULO,
  source_id UUID NÃO NULO,
  idioma_alvo TEXTO NÃO NULO,
  texto_título traduzido,
  TEXTO traduzido_content NÃO NULO,
  criado_em TIMESTAMPTZ PADRÃO AGORA(),
  UNIQUE(id_fonte, idioma_alvo)
);
```
|||SET|||
**Atualizações em tempo real:**
```datilografado
const canal = supabase
  .channel('postagens no fórum')
  .on('postgres_changes', {
    evento: 'INSERIR',
    esquema: 'público',
    tabela: 'postagens_do fórum',
    filtro: `category_id=eq.${categoryId}`
  }, (carga útil) => {
    //Adiciona nova postagem à UI
  })
  .subscrever()
```
|||SET|||
**Segurança de postagem anônima:**
- Postagens de usuários anônimos (autenticação anônima Supabase) podem ser sinalizadas de forma diferente
- A política RLS verifica a declaração `is_anonymous` no JWT
- Exibir pseudônimos (por exemplo, "Parent #4827") em vez de nomes em branco
|||SET|||
**Moderação (MVP):** Botão de relatório simples em cada postagem/comentário. Sinalizador de administrador para ocultar conteúdo denunciado. Futuro: moderação de conteúdo baseada em IA por meio da API Claude.
|||SET|||
**Tradução sob demanda:** Postagens armazenadas no idioma original. O botão "Traduzir" aciona a API Google Cloud Translation. Tradução armazenada em cache na tabela `forum_translations`. Solicitações subsequentes para o mesmo idioma atendidas pelo cache.
|||SET|||
**Fontes:**
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
- [extensão de comentários supabase](https://github.com/malerba118/supabase-comments-extension)
- [Construa um fórum comunitário com Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [RSL Supabase](https://supabase.com/docs/guides/database/postgres/row-level-security)

-- Upvotes
CREATE TABLE forum_upvotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  post_id UUID REFERENCES forum_posts(id),
  comment_id UUID REFERENCES forum_comments(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, post_id),
  UNIQUE(user_id, comment_id)
);

-- Cached translations
CREATE TABLE forum_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_type TEXT NOT NULL,
  source_id UUID NOT NULL,
  target_language TEXT NOT NULL,
  translated_title TEXT,
  translated_content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(source_id, target_language)
);
```

**Real-Time Updates:**
```typescript
const channel = supabase
  .channel('forum-posts')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'forum_posts',
    filter: `category_id=eq.${categoryId}`
  }, (payload) => {
    // Add new post to UI
  })
  .subscribe()
```

**Anonymous Posting Safety:**
- Posts from anonymous users (Supabase anonymous auth) can be flagged differently
- RLS policy checks `is_anonymous` claim in JWT
- Display pseudonyms (e.g., "Parent #4827") instead of blank names

**Moderation (MVP):** Simple report button on each post/comment. Admin flag to hide reported content. Future: AI-powered content moderation via Claude API.

**On-Demand Translation:** Posts stored in original language. "Translate" button triggers Google Cloud Translation API. Translation cached in `forum_translations` table. Subsequent requests for same language served from cache.

**Sources:**
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Build Community Forum with Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)

---
|||SET|||
## 9. INTEGRAÇÃO DE IA
|||SET|||
### Arquitetura: Vercel AI SDK + Claude API + Supabase pgvector RAG
|||SET|||
**Fluxo de dados:**
```
Pergunta do usuário (multilíngue)
  -> [Google Translate to English] (se não for inglês)
  -> [Gerar incorporação] (text-embedding-3-small)
  -> [Pesquisa de similaridade pgvector Supabase]
  -> [Documentos de contexto recuperados]
  -> [API Claude com prompt do sistema + contexto + pergunta do usuário]
  -> [Resposta em inglês]
  -> [Google Translate to User's Language] (se não for inglês)
  -> Exibido ao usuário (transmitido)
```
|||SET|||
**Configuração do SDK Vercel AI:**
```bash
npm instalar ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```
|||SET|||
```datilografado
//app/api/chat/route.ts
importar { antrópico } de '@ai-sdk/antrópico';
importar {streamText} de 'ai';
|||SET|||
exportar função assíncrona POST(req: Solicitação) {
  const {mensagens, localidade} = aguardar req.json();
  const resultado = streamText({
    modelo: antrópico('claude-3-5-haiku-20241022'),
    sistema: SYSTEM_PROMPT,
    mensagens: mensagens aumentadas,
  });
  retornar resultado.toDataStreamResponse();
}
```
|||SET|||
```datilografado
// Lado do cliente: componentes/AiChat.tsx
'usar cliente';
importar { useChat } de '@ai-sdk/react';

## 9. AI INTEGRATION

### Architecture: Vercel AI SDK + Claude API + Supabase pgvector RAG

**Data Flow:**
```
User Question (multilingual)
  -> [Google Translate to English] (if not English)
  -> [Generate Embedding] (text-embedding-3-small)
  -> [Supabase pgvector Similarity Search]
  -> [Retrieved Context Documents]
  -> [Claude API with System Prompt + Context + User Question]
  -> [Response in English]
  -> [Google Translate to User's Language] (if not English)
  -> Displayed to User (streamed)
```

**Vercel AI SDK Setup:**
```bash
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```

```typescript
// app/api/chat/route.ts
import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages, locale } = await req.json();
  const result = streamText({
    model: anthropic('claude-3-5-haiku-20241022'),
    system: SYSTEM_PROMPT,
    messages: augmentedMessages,
  });
  return result.toDataStreamResponse();
}
```

```typescript
// Client-side: components/AiChat.tsx
'use client';
import { useChat } from '@ai-sdk/react';

função de exportação AiChat() {
  const {mensagens, entrada, handleInputChange, handleSubmit, isLoading } = useChat({
    API: '/API/chat',
  });
  // UI de bate-papo com respostas de streaming
}
```
|||SET|||
**Seleção de modelo de Claude para Hackathon:**
|||SET|||
| Modelo | Entrada/1 milhão de tokens | Saída/1 milhão de tokens | Melhor para |
|-------|----------------|-------------------|----------|
| Claude Haiku 4.5 | US$ 1,00 | US$ 5,00 | **Respostas de bate-papo (RECOMENDADO)** |
| Soneto de Claude 4.5 | US$ 3,00 | US$ 15,00 | Raciocínio complexo |
| Cláudio Opus 4.5 | US$ 5,00 | US$ 25,00 | Exagero para bate-papo |
|||SET|||
**Recomendação:** Claude Haiku 4.5 – rápido (baixa latência para streaming), barato (ótimo para orçamento de hackathon) e capaz o suficiente para perguntas e respostas de recursos e orientação geral.
|||SET|||
**Prompt do sistema (Segurança em primeiro lugar para informações de saúde):**
```
Você é um assistente de IA que ajuda pais imigrantes de crianças
com Transtorno do Espectro Autista (TEA). Você fornece informações sobre:
- Recursos, terapias e programas educacionais de ASD
- Navegando nos sistemas de saúde e educação dos EUA
- Processos IEP (Programa de Educação Individualizada)
- Programas de apoio governamentais e sem fins lucrativos disponíveis
- Marcos gerais de desenvolvimento
|||SET|||
DIRETRIZES CRÍTICAS DE SEGURANÇA:
- Você NÃO é médico. Recomendo sempre consultar profissionais de saúde.
- Nunca diagnostique ou sugira tratamentos médicos específicos.
- Sempre inclua um aviso ao discutir tópicos médicos/de desenvolvimento.
- Se um usuário descrever uma emergência médica, direcione-o para ligar para o 911.
- Seja culturalmente sensível e evite suposições sobre a estrutura familiar.
- Use uma linguagem simples e clara.
- Quando não tiver certeza, diga “Não sei” em vez de adivinhar.
- Nunca colete ou solicite informações de identificação pessoal.
```
|||SET|||
**Configuração RAG do Supabase pgvector:**
```sql
CRIAR EXTENSÃO SE NÃO EXISTIR vetor;
|||SET|||
Recursos CREATE TABLE (
  id UUID CHAVE PRIMÁRIA PADRÃO gen_random_uuid(),
  título TEXTO NÃO NULO,
  conteúdo TEXTO NÃO NULO,
  categoria TEXTO NÃO NULO,
  source_url TEXTO,
  estado TEXTO,
  idioma TEXT DEFAULT 'en',
  vetor de incorporação (1536),
  criado_em TIMESTAMPTZ PADRÃO AGORA(),
  atualizado_em TIMESTAMPTZ PADRÃO AGORA()
);

**Claude Model Selection for Hackathon:**

| Model | Input/1M tokens | Output/1M tokens | Best For |
|-------|----------------|-------------------|----------|
| Claude Haiku 4.5 | $1.00 | $5.00 | **Chat responses (RECOMMENDED)** |
| Claude Sonnet 4.5 | $3.00 | $15.00 | Complex reasoning |
| Claude Opus 4.5 | $5.00 | $25.00 | Overkill for chat |

**Recommendation:** Claude Haiku 4.5 -- fast (low latency for streaming), cheap (great for hackathon budget), and capable enough for resource Q&A and general guidance.

**System Prompt (Safety-First for Health Info):**
```
You are a supportive AI assistant helping immigrant parents of children
with Autism Spectrum Disorder (ASD). You provide information about:
- ASD resources, therapies, and educational programs
- Navigating the US healthcare and education systems
- IEP (Individualized Education Program) processes
- Available government and nonprofit support programs
- General developmental milestones

CRITICAL SAFETY GUIDELINES:
- You are NOT a doctor. Always recommend consulting healthcare professionals.
- Never diagnose or suggest specific medical treatments.
- Always include a disclaimer when discussing medical/developmental topics.
- If a user describes a medical emergency, direct them to call 911.
- Be culturally sensitive and avoid assumptions about family structure.
- Use simple, clear language.
- When unsure, say "I don't know" rather than guessing.
- Never collect or ask for personal identifying information.
```

**Supabase pgvector RAG Setup:**
```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  source_url TEXT,
  state TEXT,
  language TEXT DEFAULT 'en',
  embedding vector(1536),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CRIAR ÍNDICE EM recursos USANDO hnsw (incorporando vector_cosine_ops);
|||SET|||
CRIAR OU SUBSTITUIR FUNÇÃO match_resources(
  vetor query_embedding (1536),
  match_threshold FLOAT DEFAULT 0,7,
  match_count INT PADRÃO 5
)
TABELA DE RETORNOS (id UUID, título TEXT, conteúdo TEXT, categoria TEXT, similaridade FLOAT)
IDIOMA plpgsql AS $$
COMEÇAR
  CONSULTA DE RETORNO
  SELECIONE r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) Similaridade AS
  DE recursos r
  ONDE 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  LIMIT contagem_correspondência;
FIM;
$$;
```
|||SET|||
**Modelo de incorporação:** Use OpenAI `text-embedding-3-small` (US$ 0,02/1 milhão de tokens, 1536 dimensões, 5x mais barato que ada-002 com melhor desempenho).
|||SET|||
**Atalho do Hackathon:** Preencha previamente a tabela de recursos com 20 a 50 recursos selecionados sobre autismo, IEPs, tipos de terapia e organizações de apoio. Gere incorporações para eles durante a configuração, em vez de criar um pipeline de ingestão completo.
|||SET|||
**Fontes:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Guia Next.js](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Preços da API Claude](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude for Healthcare 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI e vetores](https://supabase.com/docs/guides/ai)
- [Embeddings OpenAI](https://platform.openai.com/docs/guides/embeddings)
- [incorporação de texto-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Construa RAG com Claude e pgvector](https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot com Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)
|||SET|||
---
|||SET|||
## 10. ACESSIBILIDADE
|||SET|||
### Estratégia de Conformidade WCAG 2.2 AA

CREATE OR REPLACE FUNCTION match_resources(
  query_embedding vector(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE (id UUID, title TEXT, content TEXT, category TEXT, similarity FLOAT)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) AS similarity
  FROM resources r
  WHERE 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
```

**Embedding Model:** Use OpenAI `text-embedding-3-small` ($0.02/1M tokens, 1536 dimensions, 5x cheaper than ada-002 with better performance).

**Hackathon Shortcut:** Pre-populate the resources table with 20-50 curated resources about autism, IEPs, therapy types, and support organizations. Generate embeddings for these during setup rather than building a full ingestion pipeline.

**Sources:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Next.js Guide](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude for Healthcare 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI & Vectors](https://supabase.com/docs/guides/ai)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Build RAG with Claude & pgvector](https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot with Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)

---

## 10. ACCESSIBILITY

### WCAG 2.2 AA Compliance Strategy

**Princípios-chave para este público:**
1. **Acessibilidade cognitiva** – Layouts previsíveis, hierarquia visual clara (importante para pais estressados/sobrecarregados E para considerações relacionadas ao autismo)
2. **Baixo suporte à alfabetização** -- Dicas visuais, ícones ao lado do texto, linguagem simples
3. **Acessibilidade multilíngue** – Os leitores de tela devem funcionar com idiomas RTL
4. **Acessibilidade motorizada** – Grandes alvos de toque (mín. 44x44px de acordo com WCAG 2.2)
|||SET|||
**Integrado via shadcn/ui + Radix:**
- Todos os componentes incluem funções/atributos ARIA automaticamente
- Navegação pelo teclado (Tab, Enter, Escape, teclas de seta)
- Gerenciamento de foco e captura de foco em modais
- Anúncios de leitores de tela para conteúdo dinâmico
- `aria-describedby` vinculado a erros de validação
- `aria-invalid` definido em erros de formulário
|||SET|||
**Bibliotecas Adicionais:**
```bash
npm install -D @axe-core/react # Registra problemas do a11y no console do navegador
npm install -D eslint-plugin-jsx-a11y # Lint para problemas a11y
```
|||SET|||
**Contraste de cores:** WCAG AA requer 4,5:1 para texto normal e 3:1 para texto grande. Fornece alternância de modo de alto contraste.
|||SET|||
**Considerações de design específicas para autismo:**
- Fontes sem serifa (por exemplo, Inter, system-ui) – mais fáceis de ler para usuários neurodivergentes
- Navegação consistente e previsível em todas as páginas
- Animações mínimas (respeite `prefere movimento reduzido`)
- Limites visuais claros entre seções
- Evite sobrecarga sensorial (cores suaves, sem piscar)
- Alternância de linguagem simples para simplificação de conteúdo
|||SET|||
```datilografado
// Nos componentes, respeite as preferências de movimento:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```
|||SET|||
**Fontes:**
- [WCAG 2.2 em React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Guia WCAG 2025 de contraste de cores](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [Práticas recomendadas de acessibilidade do React](https://rtcamp.com/handbook/react-best-practices/accessibility/)
|||SET|||
---

**Built-In via shadcn/ui + Radix:**
- All components include ARIA roles/attributes automatically
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Focus management and focus trapping in modals
- Screen reader announcements for dynamic content
- `aria-describedby` linked on validation errors
- `aria-invalid` set on form errors

**Additional Libraries:**
```bash
npm install -D @axe-core/react          # Logs a11y issues to browser console
npm install -D eslint-plugin-jsx-a11y   # Lint for a11y issues
```

**Color Contrast:** WCAG AA requires 4.5:1 for normal text, 3:1 for large text. Provide high-contrast mode toggle.

**Autism-Specific Design Considerations:**
- Sans-serif fonts (e.g., Inter, system-ui) -- easier to read for neurodivergent users
- Consistent, predictable navigation across all pages
- Minimal animations (respect `prefers-reduced-motion`)
- Clear visual boundaries between sections
- Avoid sensory overload (muted colors, no flashing)
- Simple language toggle for content simplification

```typescript
// In components, respect motion preferences:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```

**Sources:**
- [WCAG 2.2 in React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Color Contrast WCAG 2025 Guide](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [React Accessibility Best Practices](https://rtcamp.com/handbook/react-best-practices/accessibility/)

---

## 11. IMPLANTAÇÃO
|||SET|||
### Recomendação: nível gratuito Vercel
|||SET|||
**Por que Vercel:** Construído pelos criadores do Next.js – nenhuma configuração necessária. Basta `git push` para implantar.
|||SET|||
**Limites de nível gratuito:**
- 100 GB de largura de banda/mês
- 100 mil invocações de função sem servidor/mês
- Implantações ilimitadas
- Tempo limite de função de 10 segundos (suficiente para streaming de IA)
- Suporte de domínio personalizado
|||SET|||
**Variáveis de Ambiente:**
```bash
# .env.local (nunca confirme isso)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Somente no lado do servidor
ANTHROPIC_API_KEY=sk-ant-... # Somente no lado do servidor
OPENAI_API_KEY=sk-... # Somente no lado do servidor (para embeddings)
GOOGLE_TRANSLATE_API_KEY=... # Somente no lado do servidor
```
|||SET|||
**IMPORTANTE:** Variáveis ​​prefixadas com `NEXT_PUBLIC_` são expostas ao navegador. As chaves de API NÃO devem ter este prefixo.
|||SET|||
**Dicas de demonstração:** Implante no Vercel antecipadamente (na primeira hora). Use URLs de visualização para compartilhar com os jurados. Proteção por senha disponível para implantações de visualização.
|||SET|||
**Fontes:**
- [Implantando Next.js no Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Implantação de aplicativos Next.js 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [Variáveis de ambiente Vercel](https://vercel.com/docs/environment-variables)

### Recommendation: Vercel Free Tier

**Why Vercel:** Built by the creators of Next.js -- zero configuration needed. Just `git push` to deploy.

**Free Tier Limits:**
- 100 GB bandwidth/month
- 100K serverless function invocations/month
- Unlimited deployments
- 10-second function timeout (sufficient for AI streaming)
- Custom domain support

**Environment Variables:**
```bash
# .env.local (never commit this)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...       # Server-side only
ANTHROPIC_API_KEY=sk-ant-...           # Server-side only
OPENAI_API_KEY=sk-...                  # Server-side only (for embeddings)
GOOGLE_TRANSLATE_API_KEY=...           # Server-side only
```

**IMPORTANT:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. API keys must NOT have this prefix.

**Demo Tips:** Deploy to Vercel early (within first hour). Use preview URLs for sharing with judges. Password protection available for preview deployments.

**Sources:**
- [Deploying Next.js on Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Deploying Next.js Apps 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---
|||SET|||
## 12. PRIVACIDADE E SEGURANÇA
|||SET|||
### Arquitetura de privacidade por design
|||SET|||
**PRINCÍPIO ORIENTADOR:** Este aplicativo atende uma população vulnerável. As violações da privacidade podem ter consequências no mundo real (risco de deportação para famílias indocumentadas). A segurança não é opcional.
|||SET|||
**Considerações sobre HIPAA:** O aplicativo NÃO é uma entidade coberta e provavelmente NÃO precisa de conformidade total com HIPAA. No entanto, se armazenar qualquer informação relacionada à saúde sobre crianças, trate-a como confidencial. Melhor abordagem: minimize o que você armazena no servidor.
|||SET|||
**Considerações sobre a COPPA (crianças menores de 13 anos):** Se os pais forem os únicos usuários, a COPPA será menos restritiva, mas ainda relevante para o armazenamento de dados de crianças. A atualização da COPPA de 2025 introduz requisitos mais rígidos de minimização de dados. **Recomendação:** Projete o aplicativo apenas para PAIS, não para crianças usarem diretamente.
|||SET|||
**Arquitetura de dados – O que armazenar e onde:**
|||SET|||
| Tipo de dados | Local de armazenamento | Criptografia |
|-----------|-------|-----------|
| Nome da criança | Lado do cliente (localStorage/IndexedDB) | AES-256 opcional do lado do cliente |
| Diagnóstico da criança | Lado do cliente | Criptografia AES-256 do lado do cliente |
| Habilidades/marcos da criança | Supabase (criptografado em repouso) | Padrão da Supabase |
| Postagens no fórum | Supabase | Em repouso (padrão Supabase) |
| Histórico de bate-papo de IA | Apenas do lado do cliente (sessionStorage) | Efêmero, não persistiu |
| Idioma preferido do usuário | Metadados do usuário Supabase | Padrão |
| Tokens de usuários anônimos | Autenticação Supabase | Padrão JWT |

## 12. PRIVACY AND SECURITY

### Privacy-by-Design Architecture

**GUIDING PRINCIPLE:** This app serves a vulnerable population. Privacy violations could have real-world consequences (deportation risk for undocumented families). Security is not optional.

**HIPAA Considerations:** The app is NOT a covered entity and likely does NOT need full HIPAA compliance. However, if storing any health-related information about children, treat it as sensitive. Best approach: minimize what you store server-side.

**COPPA Considerations (Children Under 13):** If parents are the only users, COPPA is less restrictive but still relevant for storing children's data. The 2025 COPPA update introduces stricter data minimization requirements. **Recommendation:** Design the app for PARENTS only, not for children to use directly.

**Data Architecture -- What to Store Where:**

| Data Type | Storage Location | Encryption |
|-----------|-----------------|------------|
| Child's name | Client-side (localStorage/IndexedDB) | Optional client-side AES-256 |
| Child's diagnosis | Client-side | AES-256 client-side encryption |
| Child's skills/milestones | Supabase (encrypted at rest) | Supabase default |
| Forum posts | Supabase | At rest (Supabase default) |
| AI chat history | Client-side only (sessionStorage) | Ephemeral, not persisted |
| User's preferred language | Supabase user metadata | Standard |
| Anonymous user tokens | Supabase auth | JWT standard |

**Políticas de RLS:**
```sql
-- Os usuários só podem ver seus próprios perfis infantis
CRIAR POLÍTICA "Os usuários podem ver os próprios filhos"
  ON child_profiles PARA SELECIONAR
  USANDO (auth.uid() = parent_id);
|||SET|||
- Usuários anônimos podem ler postagens do fórum
CRIAR POLÍTICA "Qualquer pessoa pode ler postagens"
  EM forum_posts PARA SELECIONAR
  USANDO (é_moderado = falso);
|||SET|||
-- Somente usuários autenticados podem postar
CRIAR POLÍTICA "Usuários autenticados podem postar"
  EM forum_posts PARA INSERIR
  COM CHECK (auth.uid() NÃO É NULO);
```
|||SET|||
**O que NÃO fazer:**
- NÃO armazene o status de imigração em lugar nenhum, nunca
- NÃO exija nomes reais
- NÃO armazene endereços IP em logs de aplicativos
- NÃO use análises de rastreamento (sem Google Analytics - use Plausível ou nada)
- NÃO armazene conversas de bate-papo de IA no servidor
- NÃO requer serviços de localização
|||SET|||
**Fontes:**
- [HIPAA e aplicativos de saúde](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [Conformidade com a COPPA 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Guia do aplicativo Zero-Knowledge Health] (https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Guia completo do Supabase RLS 2026](https://vibeappscanner.com/supabase-row-level-security)
|||SET|||
---
|||SET|||
## 13. ESTRATÉGIA DE HACKATHON E ORÇAMENTO DE TEMPO
|||SET|||
### Plano de construção de 10 horas (8h30 - 18h30)

-- Anonymous users can read forum posts
CREATE POLICY "Anyone can read posts"
  ON forum_posts FOR SELECT
  USING (is_moderated = false);

-- Only authenticated users can post
CREATE POLICY "Authenticated users can post"
  ON forum_posts FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);
```

**What NOT to Do:**
- Do NOT store immigration status anywhere, ever
- Do NOT require real names
- Do NOT store IP addresses in application logs
- Do NOT use tracking analytics (no Google Analytics -- use Plausible or nothing)
- Do NOT store AI chat conversations server-side
- Do NOT require location services

**Sources:**
- [HIPAA & Health Apps](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [COPPA Compliance 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Zero-Knowledge Health App Guide](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Supabase RLS Complete Guide 2026](https://vibeappscanner.com/supabase-row-level-security)

---

## 13. HACKATHON STRATEGY & TIME BUDGET

### 10-Hour Build Plan (8:30 AM - 6:30 PM)

**Priorização de recursos (método MoSCoW):**
|||SET|||
| Prioridade | Recurso | Estado | Husa. Tempo |
|----------|--------|--------|-----------|
| **DEVE** | UI multilíngue (EN + ES + AR) | Construir totalmente | 1,5 horas |
| **DEVE** | Assistente de bate-papo AI (com RAG) | Construir totalmente | 2 horas |
| **DEVE** | Biblioteca de recursos (navegável + pesquisável) | Construir totalmente | 1 hora |
| **DEVE** | Autenticação anônima + telefone | Construir totalmente | 1 hora |
| **DEVE** | Perfil infantil com rastreamento de habilidades | Construir totalmente | 1,5 horas |
| **DEVE** | Fórum da comunidade | Construir básico (sem tempo real) | 1 hora |
| **DEVE** | Acesso off-line PWA | Construir (configuração do Serwist) | 0,5h |
| **PODERIA** | postagem no fórum tradução | Esboço com simulação | 0,5h |
| **PODERIA** | Modo escuro/alto contraste | Alternância rápida | 0,25h |
| **NÃO** | Sistema de moderação completo | Apenas simulação de demonstração | -- |
| **NÃO** | Notificações push | Pular totalmente | -- |
| **NÃO** | Conteúdo de vídeo | Pular totalmente | -- |
|||SET|||
### Cronograma Detalhado
|||SET|||
```
8h30 - 9h00 (30 min) CONFIGURAÇÃO DO PROJETO
  - Andaime com create-t3-app ou iniciador Nextbase
  - Criação de projetos Supabase + tabelas
  - Pipeline de implantação Vercel (implantar shell vazio)
  - Instalar dependências principais
  - Variáveis de ambiente configuradas
|||SET|||
9h00 - 10h00 (60 min) FUNDAÇÃO
  - Componente de layout com i18n (cabeçalho, navegação, alternador de idioma)
  - componentes shadcn/ui instalados
  - Suporte RTL conectado
  - Autenticação Supabase: UI anônima + login por e-mail
  - Estrutura dos arquivos de tradução (EN + ES + AR)
|||SET|||
10h00 - 11h30 (90 min) RECURSO PRINCIPAL #1: AI CHAT
  - Vercel AI SDK + configuração de Claude Haiku
  - Rota API para chat com streaming
  - Componente UI de bate-papo com gancho useChat
  - Alerta do sistema com grades de segurança
  - Pré-preencher 20 recursos no pgvector
  - Pipeline RAG (consulta incorporada -> pesquisa -> prompt de aumento)
|||SET|||
11h30 - 12h00 (30 min) IMPLEMENTAÇÃO DO MEIO DA MANHÃ + TESTE
  - Implantar no Vercel
  - Teste no celular
  - Corrigir bugs críticos
|||SET|||
12h00 - 12h30 (30 min) ALMOÇO

| Priority | Feature | Status | Est. Time |
|----------|---------|--------|-----------|
| **MUST** | Multi-language UI (EN + ES + AR) | Build fully | 1.5 hr |
| **MUST** | AI Chat Assistant (with RAG) | Build fully | 2 hr |
| **MUST** | Resource Library (browsable + searchable) | Build fully | 1 hr |
| **MUST** | Anonymous + phone auth | Build fully | 1 hr |
| **MUST** | Child profile with skill tracking | Build fully | 1.5 hr |
| **SHOULD** | Community forum | Build basic (no real-time) | 1 hr |
| **SHOULD** | PWA offline access | Build (Serwist setup) | 0.5 hr |
| **COULD** | Forum post translation | Stub with mock | 0.5 hr |
| **COULD** | Dark mode / high contrast | Quick toggle | 0.25 hr |
| **WON'T** | Full moderation system | Demo mock only | -- |
| **WON'T** | Push notifications | Skip entirely | -- |
| **WON'T** | Video content | Skip entirely | -- |

### Detailed Schedule

```
8:30 - 9:00  (30 min)  PROJECT SETUP
  - Scaffold with create-t3-app or Nextbase starter
  - Supabase project creation + tables
  - Vercel deployment pipeline (deploy empty shell)
  - Install core deps
  - Environment variables configured

9:00 - 10:00  (60 min)  FOUNDATION
  - Layout component with i18n (header, nav, language switcher)
  - shadcn/ui components installed
  - RTL support wired up
  - Supabase auth: anonymous + email sign-in UI
  - Translation files structure (EN + ES + AR)

10:00 - 11:30  (90 min)  CORE FEATURE #1: AI CHAT
  - Vercel AI SDK + Claude Haiku setup
  - API route for chat with streaming
  - Chat UI component with useChat hook
  - System prompt with safety guardrails
  - Pre-populate 20 resources in pgvector
  - RAG pipeline (embed query -> search -> augment prompt)

11:30 - 12:00  (30 min)  MID-MORNING DEPLOY + TEST
  - Deploy to Vercel
  - Test on mobile
  - Fix critical bugs

12:00 - 12:30  (30 min)  LUNCH

12h30 - 13h30 (60 min) RECURSO PRINCIPAL #2: BIBLIOTECA DE RECURSOS
  - Cartões de recursos com filtragem de categoria
  - Funcionalidade de pesquisa
  - Páginas de detalhes de recursos
  - Dados iniciais: 20-50 recursos selecionados
|||SET|||
13h30 - 15h00 (90 min) RECURSO PRINCIPAL #3: PERFIL DA CRIANÇA + HABILIDADES
  - Formulário de criação de perfil infantil
  - Componentes do cartão de habilidade
  - UI de rastreamento de marcos
  - Armazenamento do lado do cliente para dados confidenciais
  - Visualização do painel de perfil
|||SET|||
3h00 - 4h00 (60 min) RECURSO #4: FÓRUM DA COMUNIDADE (BÁSICO)
  - Visualização da lista de postagens do fórum
  - Criar formulário de postagem
  - Sistema básico de comentários
  - Organização baseada em categorias
|||SET|||
4h00 - 4h30 (30 min) PWA + TRADUÇÕES
  - Configuração do trabalhador de serviço Serwist
  - Preencha as chaves de tradução para ES e AR
  - Teste o layout RTL com árabe
|||SET|||
4h30 - 5h30 (60 min) POLIMENTO E PREPARAÇÃO DE DEMO
  - Corrigir bugs da interface do usuário
  - Adicionar estados de carregamento e tratamento de erros
  - Alternar modo de alto contraste (se houver tempo)
  - Faça capturas de tela para apresentação
  - Grave backup de vídeo de demonstração
|||SET|||
5h30 - 6h00 (30 min) IMPLEMENTAÇÃO FINAL + APRESENTAÇÃO
  - Implantação final do Vercel
  - Teste todos os recursos de ponta a ponta
  - Prepare um roteiro de pitch de 3 minutos
|||SET|||
6h00 - 6h30 (30 min) BUFFER / APRESENTAÇÃO
```
|||SET|||
### O que simular/esboçar:
- **Moderação do fórum:** Basta ocultar postagens denunciadas com uma sinalização, sem painel de administração
- **Tradução do fórum:** O botão "Traduzir" mostra o carregamento e o texto original (ou o Google Tradutor, se for o caso)
- **Fluxo de redefinição de senha:** Use e-mails padrão do Supabase
- **Avatares de usuários:** Iniciais ou ícone padrão, sem upload
- **Painel de administração:** Ignorar completamente

1:30 - 3:00  (90 min)  CORE FEATURE #3: CHILD PROFILE + SKILLS
  - Child profile creation form
  - Skill card components
  - Milestone tracking UI
  - Client-side storage for sensitive data
  - Profile dashboard view

3:00 - 4:00  (60 min)  FEATURE #4: COMMUNITY FORUM (BASIC)
  - Forum post list view
  - Create post form
  - Basic comment system
  - Category-based organization

4:00 - 4:30  (30 min)  PWA + TRANSLATIONS
  - Serwist service worker setup
  - Fill in translation keys for ES and AR
  - Test RTL layout with Arabic

4:30 - 5:30  (60 min)  POLISH & DEMO PREP
  - Fix UI bugs
  - Add loading states and error handling
  - High contrast mode toggle (if time)
  - Take screenshots for presentation
  - Record demo video backup

5:30 - 6:00  (30 min)  FINAL DEPLOY + PRESENTATION
  - Final Vercel deployment
  - Test all features end-to-end
  - Prepare 3-minute pitch script

6:00 - 6:30  (30 min)  BUFFER / PRESENTATION
```

### What to Mock/Stub:
- **Forum moderation:** Just hide reported posts with a flag, no admin panel
- **Forum translation:** "Translate" button shows loading then original text (or Google Translate if time)
- **Password reset flow:** Use Supabase default emails
- **User avatars:** Initials or default icon, no upload
- **Admin dashboard:** Skip entirely

### Dicas de otimização de demonstração:
1. **Comece com a história** -- "Conheça Fátima, uma mãe síria que acabou de se mudar para os EUA. Seu filho de 4 anos foi recentemente diagnosticado com autismo. Ela não fala inglês. Ela não sabe por onde começar."
2. **Mostrar a mudança de idioma** - Mude de inglês para árabe ao vivo. O RTL flip é visualmente impressionante para os juízes.
3. **Demonstre o bate-papo com IA** - Faça uma pergunta em espanhol. Mostre-o fornecendo recursos.
4. **Mostrar capacidade off-line** - Desligue o WiFi e mostre que o aplicativo ainda funciona.
5. **Enfatize a privacidade** -- "Não é necessário nome real. Não é necessário e-mail. Ela pode usar este aplicativo com segurança."
|||SET|||
**Fontes:**
- [Do zero à demonstração em 36 horas](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [Priorização de recursos MVP](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Dicas de demonstração do Hackathon (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Guia do Pitch Deck do Hackathon](https://www.inknarrates.com/post/hackathon-pitch-deck)
|||SET|||
---
|||SET|||
## 14. BOILERPLATE E MODELOS
|||SET|||
### Opção 1: create-t3-app (RECOMENDADO para equipes familiarizadas com tRPC)
```bash
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
```
- GitHub: https://github.com/t3-oss/create-t3-app
- Inclui: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- Você adiciona: Supabase, next-intl, shadcn/ui, Vercel AI SDK
|||SET|||
### Opção 2: Nextbase Starter (RECOMENDADO para configuração mais simples)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Inclui: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- Você adiciona: next-intl, shadcn/ui, Vercel AI SDK, Prisma (opcional)
|||SET|||
### Opção 3: Vercel Supabase Starter
- Modelo: https://vercel.com/templates/next.js/supabase
- Modelo oficial Vercel/Supabase com autenticação SSR
|||SET|||
### Opção 4: supa-next-starter
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Inclui: Next.js, Supabase, Tailwind, shadcn/ui (já integrado)

**Sources:**
- [From Zero to Demo in 36 Hours](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [MVP Feature Prioritization](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Hackathon Demo Tips (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Hackathon Pitch Deck Guide](https://www.inknarrates.com/post/hackathon-pitch-deck)

---

## 14. BOILERPLATE & TEMPLATES

### Option 1: create-t3-app (RECOMMENDED for teams familiar with tRPC)
```bash
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
```
- GitHub: https://github.com/t3-oss/create-t3-app
- Includes: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- You add: Supabase, next-intl, shadcn/ui, Vercel AI SDK

### Option 2: Nextbase Starter (RECOMMENDED for simpler setup)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Includes: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- You add: next-intl, shadcn/ui, Vercel AI SDK, Prisma (optional)

### Option 3: Vercel Supabase Starter
- Template: https://vercel.com/templates/next.js/supabase
- Official Vercel/Supabase template with SSR auth

### Option 4: supa-next-starter
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Includes: Next.js, Supabase, Tailwind, shadcn/ui (already integrated)

### Após o andaime, adicione:
```bash
npm instala next-intl rtl-detect
npm instalar ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm install @serwist/next @serwist/precaching @serwist/sw
npx shadcn@latest init
npx shadcn@latest adicionar botão cartão diálogo formulário de entrada guias de folha avatar crachá comando acordeão brinde
npm install -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```
|||SET|||
### Projetos de Referência:
- **supabase-comments-extension** (GitHub: malerba118/supabase-comments-extension) -- Comentários, respostas, reações
- **ojasskapre/nextjs-starter-template** -- Interfaces de bate-papo Next.js + Supabase + LLM
- **shwosner/realtime-chat-supabase-react** -- Bate-papo em tempo real com Supabase
|||SET|||
---
|||SET|||
## 15. PROJETO DE ESQUEMA
|||SET|||
### Esquema Prisma Completo
|||SET|||
```prisma
cliente gerador {
  provedor = "prisma-client-js"
}
|||SET|||
banco de dados da fonte de dados {
  provedor = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
|||SET|||
// USUÁRIO E AUTENTICAÇÃO
modelo UserProfile {
  id String @id @default(uuid())
  authId String @unique
  Exibir Sequência?
  preferidoLocale String @default("en")
  criadoAt DateTime @default(now())
  atualizadoAt DateTime @updatedAt
  crianças ChildProfile[]
  postagem no fórum Postagem no fórum[]
  fórumComments FórumComment[]
  votos positivos FórumUpvote[]
}

### Reference Projects:
- **supabase-comments-extension** (GitHub: malerba118/supabase-comments-extension) -- Comments, replies, reactions
- **ojasskapre/nextjs-starter-template** -- Next.js + Supabase + LLM chat interfaces
- **shwosner/realtime-chat-supabase-react** -- Realtime chat with Supabase

---

## 15. SCHEMA DESIGN

### Complete Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// USER & AUTHENTICATION
model UserProfile {
  id              String    @id @default(uuid())
  authId          String    @unique
  displayName     String?
  preferredLocale String    @default("en")
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  children        ChildProfile[]
  forumPosts      ForumPost[]
  forumComments   ForumComment[]
  upvotes         ForumUpvote[]
}

// PERFIS DE CRIANÇAS E RASTREAMENTO DE HABILIDADES
modelo PerfilCriança {
  id String @id @default(uuid())
  string parentId
  pai UserProfile @relation(campos: [parentId], referências: [id])
  apelido String
  nascimentoAno Int?
  diagnósticoData DataHora?
  habilidades SkillCard[]
  marcos Marco[]
  criadoAt DateTime @default(now())
  atualizadoAt DateTime @updatedAt
  @@index([parentId])
}
|||SET|||
modelo SkillCategory {
  id String @id @default(uuid())
  nomeKey String
  ícone String?
  sortOrder Int @default(0)
  habilidades SkillCard[]
}
|||SET|||
modelo SkillCard {
  id String @id @default(uuid())
  Cadeia de caracteres childId
  filho ChildProfile @relation(campos: [childId], referências: [id], onDelete: Cascade)
  categoriaId String
  categoria SkillCategory @relation(campos: [categoryId], referências: [id])
  nomeKey String
  nível Int @default(0)
  notas String?
  lastAssessed DateTime @default(agora())
  criadoAt DateTime @default(now())
  atualizadoAt DateTime @updatedAt
  @@index([childId])
  @@index([categoriaId])
}
|||SET|||
modelo Marco {
  id String @id @default(uuid())
  Cadeia de caracteres childId
  filho ChildProfile @relation(campos: [childId], referências: [id], onDelete: Cascade)
  titleKey String
  descrição String?
  alcançadoData DataHora?
  categoria String
  criadoAt DateTime @default(now())
  @@index([childId])
}
|||SET|||
// RECURSOS (incorporação de vetores tratada via SQL bruto/pgvector)
modelo de recurso {
  id String @id @default(uuid())
  sequência de título
  string de conteúdo @db.Text
  resumo String?
  categoria String
  subcategoria String?
  stringUrldefonte?
  string de estado?
  string de idioma @default("en")
  tags String[]
  criadoAt DateTime @default(now())
  atualizadoAt DateTime @updatedAt
  @@índice([categoria])
  @@índice([estado])
}
|||SET|||
// FÓRUM / COMUNIDADE
modelo FórumCategoria {
  id String @id @default(uuid())
  nomeKey String
  descriçãoKey String?
  ícone String?
  sortOrder Int @default(0)
  postagens FórumPost[]
}
|||SET|||
modelo Postagem do Fórum {
  id String @id @default(uuid())
  categoriaId String
  categoria FórumCategoria @relation(campos: [categoryId], referências: [id])
  sequência de ID do autor
  autor UserProfile @relation(campos: [authorId], referências: [id])
  isAnonymous Booleano @default(falso)
  sequência de título
  string de conteúdo @db.Text
  String originalLang @default("en")
  voto positivoCount Int @default(0)
  comentarCount Int @default(0)
  isPinned Booleano @default(falso)
  isHidden Booleano @default(falso)
  reportCount Int @default(0)
  comentários FórumComment[]
  votos positivos FórumUpvote[]
  traduções FórumTradução[]
  criadoAt DateTime @default(now())
  atualizadoAt DateTime @updatedAt
  @@index([categoriaId])
  @@index([authorId])
  @@index([criadoEm])
}
|||SET|||
modelo FórumComment {
  id String @id @default(uuid())
  sequência de postId
  postar ForumPost @relation(campos: [postId], referências: [id], onDelete: Cascade)
  string parentId?
  fórum paiComentário? @relation("CommentReplies", campos: [parentId], referências: [id])
  respostas ForumComment[] @relation("CommentReplies")
  sequência de ID do autor
  autor UserProfile @relation(campos: [authorId], referências: [id])
  isAnonymous Booleano @default(falso)
  string de conteúdo @db.Text
  String originalLang @default("en")
  voto positivoCount Int @default(0)
  isHidden Booleano @default(falso)
  reportCount Int @default(0)
  votos positivos FórumUpvote[]
  traduções FórumTradução[]
  criadoAt DateTime @default(now())
  @@index([postId])
  @@index([parentId])
}

model SkillCategory {
  id          String    @id @default(uuid())
  nameKey     String
  icon        String?
  sortOrder   Int       @default(0)
  skills      SkillCard[]
}

model SkillCard {
  id              String    @id @default(uuid())
  childId         String
  child           ChildProfile @relation(fields: [childId], references: [id], onDelete: Cascade)
  categoryId      String
  category        SkillCategory @relation(fields: [categoryId], references: [id])
  nameKey         String
  level           Int       @default(0)
  notes           String?
  lastAssessed    DateTime  @default(now())
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  @@index([childId])
  @@index([categoryId])
}

model Milestone {
  id              String    @id @default(uuid())
  childId         String
  child           ChildProfile @relation(fields: [childId], references: [id], onDelete: Cascade)
  titleKey        String
  description     String?
  achievedDate    DateTime?
  category        String
  createdAt       DateTime  @default(now())
  @@index([childId])
}

// RESOURCES (vector embedding handled via raw SQL / pgvector)
model Resource {
  id          String    @id @default(uuid())
  title       String
  content     String    @db.Text
  summary     String?
  category    String
  subcategory String?
  sourceUrl   String?
  state       String?
  language    String    @default("en")
  tags        String[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  @@index([category])
  @@index([state])
}

// FORUM / COMMUNITY
model ForumCategory {
  id              String    @id @default(uuid())
  nameKey         String
  descriptionKey  String?
  icon            String?
  sortOrder       Int       @default(0)
  posts           ForumPost[]
}

model ForumPost {
  id              String    @id @default(uuid())
  categoryId      String
  category        ForumCategory @relation(fields: [categoryId], references: [id])
  authorId        String
  author          UserProfile @relation(fields: [authorId], references: [id])
  isAnonymous     Boolean   @default(false)
  title           String
  content         String    @db.Text
  originalLang    String    @default("en")
  upvoteCount     Int       @default(0)
  commentCount    Int       @default(0)
  isPinned        Boolean   @default(false)
  isHidden        Boolean   @default(false)
  reportCount     Int       @default(0)
  comments        ForumComment[]
  upvotes         ForumUpvote[]
  translations    ForumTranslation[]
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  @@index([categoryId])
  @@index([authorId])
  @@index([createdAt])
}

model ForumComment {
  id              String    @id @default(uuid())
  postId          String
  post            ForumPost @relation(fields: [postId], references: [id], onDelete: Cascade)
  parentId        String?
  parent          ForumComment? @relation("CommentReplies", fields: [parentId], references: [id])
  replies         ForumComment[] @relation("CommentReplies")
  authorId        String
  author          UserProfile @relation(fields: [authorId], references: [id])
  isAnonymous     Boolean   @default(false)
  content         String    @db.Text
  originalLang    String    @default("en")
  upvoteCount     Int       @default(0)
  isHidden        Boolean   @default(false)
  reportCount     Int       @default(0)
  upvotes         ForumUpvote[]
  translations    ForumTranslation[]
  createdAt       DateTime  @default(now())
  @@index([postId])
  @@index([parentId])
}

modelo FórumUpvote {
  id String @id @default(uuid())
  String de ID do usuário
  usuário UserProfile @relation(campos: [userId], referências: [id])
  sequência de postId?
  postar FórumPostar? @relation(campos: [postId], referências: [id], onDelete: Cascade)
  commentId String?
  comentar FórumComentário? @relation(campos: [commentId], referências: [id], onDelete: Cascade)
  criadoAt DateTime @default(now())
  @@unique([userId, postId])
  @@unique([userId, commentId])
}
|||SET|||
modelo FórumTradução {
  id String @id @default(uuid())
  sequência de postId?
  postar FórumPostar? @relation(campos: [postId], referências: [id], onDelete: Cascade)
  commentId String?
  comentar FórumComentário? @relation(campos: [commentId], referências: [id], onDelete: Cascade)
  cadeia de caracteres targetLang
  String de título traduzido?
  String de conteúdo traduzido @db.Text
  criadoAt DateTime @default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```
|||SET|||
### Categorias de dados iniciais
|||SET|||
**Categorias de Habilidades:** Comunicação, Habilidades Sociais, Vida Diária, Habilidades Motoras, Acadêmicas, Processamento Sensorial, Regulação Emocional
|||SET|||
**Categorias do fórum:** Apresentações e boas-vindas, terapia e tratamentos (ABA/OT/Speech), ajuda escolar e IEP, dicas para a vida diária, questões jurídicas e de imigração, navegação em saúde, histórias e marcos de sucesso, suporte geral
|||SET|||
**Categorias de recursos:** Tipos e provedores de terapia, recursos educacionais e IEP, direitos legais e defesa, assistência financeira, organizações comunitárias, ferramentas e aplicativos on-line, livros e mídia, recursos específicos do estado
|||SET|||
---
|||SET|||
## PACKAGE.JSON RESUMO DE DEPENDÊNCIAS

model ForumTranslation {
  id                String    @id @default(uuid())
  postId            String?
  post              ForumPost? @relation(fields: [postId], references: [id], onDelete: Cascade)
  commentId         String?
  comment           ForumComment? @relation(fields: [commentId], references: [id], onDelete: Cascade)
  targetLang        String
  translatedTitle   String?
  translatedContent String    @db.Text
  createdAt         DateTime  @default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```

### Seed Data Categories

**Skill Categories:** Communication, Social Skills, Daily Living, Motor Skills, Academic, Sensory Processing, Emotional Regulation

**Forum Categories:** Introductions & Welcome, Therapy & Treatments (ABA/OT/Speech), School & IEP Help, Daily Life Tips, Legal & Immigration Questions, Healthcare Navigation, Success Stories & Milestones, General Support

**Resource Categories:** Therapy Types & Providers, Education & IEP Resources, Legal Rights & Advocacy, Financial Assistance, Community Organizations, Online Tools & Apps, Books & Media, State-Specific Resources

---

## PACKAGE.JSON DEPENDENCIES SUMMARY

```json
{
  "dependências": {
    "próximo": "^16.0.0",
    "reagir": "^19.0.0",
    "react-dom": "^19.0.0",
    "datilografado": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "prisma": "^6.0.0",
    "@prisma/cliente": "^6.0.0",
    "próximo-intl": "^4.0.0",
    "rtl-detectar": "^1.1.2",
    "ai": "^6.0.0",
    "@ai-sdk/antrópico": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/react": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "autoridade de variação de classe": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.450.0",
    "@servwist/next": "^9.0.0",
    "@servwist/precaching": "^9.0.0",
    "@servwist/sw": "^9.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "zod": "^3.23.0",
    "forma de gancho de reação": "^7.53.0",
    "@hookform/resolvers": "^3.9.0"
  },
  "devDependências": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-detect": "^1.0.0"
  }
}
```
|||SET|||
---
|||SET|||
## REFERÊNCIA RÁPIDA: PRINCIPAIS LINKS DE DOCUMENTAÇÃO
|||SET|||
| Ferramenta | Documentação |
|------|-------------|
| Próximo.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Autenticação Supabase | https://supabase.com/docs/guides/auth |
| Supabase em tempo real | https://supabase.com/docs/guides/realtime |
| Supabase pgvetor | https://supabase.com/docs/guides/ai |
| próximo-intl | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| Vercel AI SDK | https://ai-sdk.dev/docs/introduction |
| Cláudio API | https://platform.claude.com/docs |
| Prisma | https://www.prisma.io/docs |
| Servidor PWA | https://serwist.pages.dev/docs/next/getting-started |
| CSS de vento favorável | https://tailwindcss.com/docs |
| Tradução do Google Cloud | https://cloud.google.com/translate/docs |
| Incorporações OpenAI | https://platform.openai.com/docs/guides/embeddings |
| Implantação Vercel | https://vercel.com/docs |
|||SET|||
---
|||SET|||
Esta pesquisa cobre todas as 10 áreas solicitadas, além da estratégia de hackathon, arquitetura de privacidade, opções padronizadas e design de esquema completo. A pilha é projetada para que cada serviço se encaixe nos níveis gratuitos do hackathon, a autenticação preserva a privacidade de usuários indocumentados e o orçamento de tempo é realista para uma construção de 10 horas. Tentei salvar isso como um arquivo em `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md`, mas a permissão de gravação do arquivo foi negada. Se quiser que eu salve isso em disco, você pode conceder permissão de gravação e eu criarei o arquivo.
---
|||SET|||
## Pesquisa adicional (atualizado em março de 2026)
|||SET|||
### Melhor biblioteca i18n para mais de 10 idiomas (React + TypeScript)

---

## QUICK REFERENCE: KEY DOCUMENTATION LINKS

| Tool | Documentation |
|------|--------------|
| Next.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Supabase Auth | https://supabase.com/docs/guides/auth |
| Supabase Realtime | https://supabase.com/docs/guides/realtime |
| Supabase pgvector | https://supabase.com/docs/guides/ai |
| next-intl | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| Vercel AI SDK | https://ai-sdk.dev/docs/introduction |
| Claude API | https://platform.claude.com/docs |
| Prisma | https://www.prisma.io/docs |
| Serwist PWA | https://serwist.pages.dev/docs/next/getting-started |
| Tailwind CSS | https://tailwindcss.com/docs |
| Google Cloud Translation | https://cloud.google.com/translate/docs |
| OpenAI Embeddings | https://platform.openai.com/docs/guides/embeddings |
| Vercel Deployment | https://vercel.com/docs |

---

This research covers all 10 areas you requested plus the hackathon strategy, privacy architecture, boilerplate options, and complete schema design. The stack is designed so that every service fits within free tiers for the hackathon, the authentication is privacy-preserving for undocumented users, and the time budget is realistic for a 10-hour build. I attempted to save this as a file to `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` but file write permission was denied. If you would like me to save this to disk, you can grant the Write permission and I will create the file.
---

## Additional Research (Updated March 2026)

### Best i18n Library for 10+ Languages (React + TypeScript)

**Recomendado: react-i18next** — 2,1 milhões de downloads semanais, solução React i18n mais popular.
- Construído no ecossistema i18next com plugins para detecção de idioma, carregamento assíncrono, plurais complexos
Pacote: 22,2 kB (i18next 15,1kB + react-i18next 7,1kB)
- Suporta arquivos de tradução JSON – fácil de adicionar idiomas de forma incremental
- Fonte: [Blog de frases](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)
|||SET|||
**Alternativa leve: LinguiJS** — 10,4 kB no total (metade do tamanho), sintaxe de mensagem ICU, suporte a TypeScript.
|||SET|||
**Para velocidade de hackathon**: react-i18next com arquivos de tradução JSON. Comece com inglês + espanhol, adicione outros idiomas por meio de arquivos JSON. Use a API do Google Translate ou DeepL para traduções iniciais.
|||SET|||
Fonte: [Guia GloryWebs 2026](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)
|||SET|||
### Limites de nível gratuito da Supabase (2026)
|||SET|||
- **2 projetos ativos** (pausado após 1 semana de inatividade)
- **500 MB** de armazenamento de banco de dados (CPU compartilhada)
- **2 GB** saída de banco de dados/mês
- **50.000** usuários ativos mensais (autenticação)
- **1 GB** de armazenamento de arquivos
- **2 GB** saída de armazenamento
- **500.000** invocações de funções de borda/mês
- Sem backups, sem SLA no plano gratuito
|||SET|||
Fonte: [Preços da Supabase](https://supabase.com/pricing), [Detalhamento da UI Bakery](https://uibakery.io/blog/supabase-pricing)
|||SET|||
**Para hackathon**: 500 MB é mais que suficiente. Mesmo com 10.000 usuários armazenando perfil + dados infantis + postagens no fórum, você usaria <50 MB. O limite de autenticação de 50 mil MAU também é muito generoso para uma demonstração.

**Lightweight alternative: LinguiJS** — 10.4 kB total (half the size), ICU message syntax, TypeScript support.

**For hackathon speed**: react-i18next with JSON translation files. Start with English + Spanish, add other languages via JSON files. Use Google Translate API or DeepL for initial translations.

Source: [GloryWebs 2026 Guide](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)

### Supabase Free Tier Limits (2026)

- **2 active projects** (paused after 1 week inactivity)
- **500 MB** database storage (shared CPU)
- **2 GB** database egress/month
- **50,000** monthly active users (auth)
- **1 GB** file storage
- **2 GB** storage egress
- **500,000** edge function invocations/month
- No backups, no SLA on free plan

Source: [Supabase Pricing](https://supabase.com/pricing), [UI Bakery Breakdown](https://uibakery.io/blog/supabase-pricing)

**For hackathon**: 500 MB is more than enough. Even with 10,000 users each storing profile + child data + forum posts, you'd use <50 MB. The 50K MAU auth limit is also very generous for a demo.
