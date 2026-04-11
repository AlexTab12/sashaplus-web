# sashaplus-web

The official website for **Sasha+** — hosted at [sashaplus.app](https://sashaplus.app).

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, value props, App Store CTA |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/support` | Support / FAQ |

## Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Adding content later

**New page:** Create `app/your-page/page.tsx`. Use `<LegalPage>` for legal/support pages or build a custom layout for marketing pages.

**New home section:** Add a `<section>` block in `app/page.tsx`. The TODO comments mark exactly where screenshots and feature highlights go.

**Update legal docs:** Edit the relevant `app/privacy/page.tsx`, `app/terms/page.tsx`, or `app/support/page.tsx`. Remember to update the "Last updated" date in the `<LegalPage>` prop.

## Deployment

Push to `main` → Vercel auto-deploys. That's it.

## Domain (Cloudflare + Vercel)

See deployment guide in the project docs.
