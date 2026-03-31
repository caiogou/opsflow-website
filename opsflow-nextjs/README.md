# OpsFlow Advisory — Website

## Como publicar no Vercel (sem conhecimento técnico)

### OPÇÃO A — GitHub + Vercel (recomendado)

1. Crie conta gratuita em **github.com**
2. Clique em "New repository" → nome: `opsflow-website` → Create
3. Faça upload de todos os ficheiros desta pasta para o repositório
4. Crie conta gratuita em **vercel.com** → "Continue with GitHub"
5. Clique "Add New Project" → selecione `opsflow-website`
6. Clique **Deploy** — o site fica online em 2 minutos
7. Em "Domains" → adicione `opsflow-advisory.ch`

### OPÇÃO B — Vercel CLI

```bash
npm install
npm run dev        # testar localmente em localhost:3000
npx vercel         # publicar no Vercel
```

## Estrutura do projeto

```
opsflow-nextjs/
├── app/
│   ├── layout.tsx      # SEO metadata, fonts
│   ├── page.tsx        # Home page principal
│   └── globals.css     # Estilos globais + Tailwind
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Credentials.tsx
│   ├── Testimonials.tsx
│   ├── CTAFooter.tsx
│   └── LogoIcon.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Para atualizar conteúdo

- **Serviços**: editar `components/Services.tsx`
- **Cases/Testimonials**: editar `components/Testimonials.tsx`
- **Email de contacto**: substituir `caio@opsflow-advisory.ch` em todos os ficheiros
- **Domínio**: atualizar `app/layout.tsx` linha `metadataBase`

## Cores da marca

- Navy: `#0f2a4a`
- Teal: `#1a9e8f`
- Teal light: `#4ab8ae`
