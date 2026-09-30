# qwertic.xyz

Personal site of Qwertic (Regi Voda). AI engineer, full stack.

## Stack

- Astro, static output
- Self-hosted fonts via Fontsource (Archivo, Martian Mono, Permanent Marker)
- Cloudflare Pages

## Develop

```sh
bun install
bun run dev
```

## Content

Everything on the page lives in `src/data/site.ts`: tickets, stations, record, tools and contact links.

- `BOOKING_URL`: set it to a scheduling link. While it is empty, "Book a call" opens an email.
- CV: put a PDF at `public/Regi_Voda_CV.pdf` and the download link appears on the service record.

## Deploy (Cloudflare Pages)

Connect the repo in the Cloudflare dashboard with:

- Build command: `bun run build`
- Output directory: `dist`
- Environment variables: `BUN_VERSION=1.3.6`, `NODE_VERSION=22`

Then point qwertic.xyz at the Pages project.
