# qwertic.xyz

Personal site of Qwertic (Regi Voda). AI engineer, full stack.

## Stack

- Astro, static output
- Self-hosted fonts via Fontsource (Archivo, Martian Mono, Permanent Marker)
- Cloudflare Pages

## Develop

```sh
pnpm install
pnpm dev
```

## Content

Everything on the page lives in `src/data/site.ts`: tickets, stations, record, tools and contact links.

- `BOOKING_URL`: set it to a scheduling link. While it is empty, "Book a call" opens an email.
- CV: put a PDF at `public/Regi_Voda_CV.pdf` and the download link appears on the service record.

## Deploy (Cloudflare Pages)

Connect the repo in the Cloudflare dashboard with:

- Build command: `pnpm build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=22`

Then point qwertic.xyz at the Pages project.
