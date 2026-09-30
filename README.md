# qwertic.xyz

Personal site of Qwertic (Regi Voda). AI engineer, full stack.

## Stack

- Astro, static output
- Self-hosted fonts via Fontsource (Anybody, Schibsted Grotesk)
- Cloudflare Pages

## Develop

```sh
bun install
bun run dev
```

## Content

Everything on the page lives in `src/data/site.ts`: work, stack, experience, tools and contact links. The design system is in `DESIGN.md`.

- `BOOKING_URL`: the scheduling link behind every "Book a call". If empty, it falls back to an email.
- CV: `public/Regi_Voda_CV.pdf` (the phone-free web build of the CV). Remove it and the download link disappears.

## Deploy (Cloudflare Pages)

Connect the repo in the Cloudflare dashboard with:

- Build command: `bun run build`
- Output directory: `dist`
- Environment variables: `BUN_VERSION=1.3.6`, `NODE_VERSION=22`

Then point qwertic.xyz at the Pages project.
