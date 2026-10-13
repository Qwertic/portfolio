# qwertic.xyz

Personal site of Qwertic (Regi Voda). AI lead across the full stack.

## Stack

- Astro, static output
- Self-hosted fonts via Fontsource (Alegreya Sans, Alegreya Sans SC)
- Cloudflare Pages

## Develop

```sh
bun install
bun run dev
```

## Content

Content lives in `src/data/`:

- `site.ts`: contact links, work, experience, open-source tools.
- `explorer.ts`: the "Should this use AI?" decision tree (questions and outcomes, no model involved).
- `decisions.ts`: the rules under "Where AI belongs", by layer.

The design system is `MASTER.md` (tokens, theses, components); `src/styles/global.css` implements it.

- `BOOKING_URL`: the scheduling link behind every "Book a call". If empty, it falls back to an email.
- CV: `public/Regi_Voda_CV.pdf` (the phone-free web build of the CV). Remove it and the download link disappears.

## Deploy (Cloudflare Pages)

Connect the repo in the Cloudflare dashboard with:

- Build command: `bun run build`
- Output directory: `dist`
- Environment variables: `BUN_VERSION=1.3.6`, `NODE_VERSION=22`

Then point qwertic.xyz at the Pages project.
