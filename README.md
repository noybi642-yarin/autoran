# AUTORAN — אוטורן

Website rebuild for AUTORAN, an independent multi-brand automotive dealership
(Hyundai, Mitsubishi, JAECOO, OMODA, ORA). Hebrew-first, RTL, mobile-first.

> **Status:** Phase 1A (foundations) + 1B (homepage) — awaiting review.
> Other routes are intentionally not built yet and show the Hebrew 404 page.

## Run locally

Requires Node.js ≥ 20.9.

```bash
npm install
npm run dev          # http://localhost:3000 (development)
# or, closer to production:
npm run build && npm start
```

Checks:

```bash
npm run lint
npm run typecheck
```

## Stack

- Next.js 16 (App Router, Cache Components, static prerendering) · TypeScript
- Tailwind CSS v4 (tokens in `src/app/globals.css` via `@theme`)
- `lucide-react` for the few icons used
- Heebo (Hebrew + Latin) via `next/font` — self-hosted at build time
- Vercel-compatible; no paid services

## Architecture

```
src/
  app/                    Routes (App Router). layout.tsx sets lang="he" dir="rtl".
    page.tsx              Homepage — composes sections only
    not-found.tsx         Hebrew 404
    sitemap.ts robots.ts  SEO (lists live routes only; noindex until approved)
    globals.css           Design tokens: colours, type scale, radii, motion
  content/                ← All business content. No UI here.
    types.ts              Content model incl. verification status
    site.ts               Name, nav, CTAs, hero/featured selections
    brands.ts             Five brands + taglines + theme tokens
    vehicles.ts           Vehicle catalog (no specs until verified)
    locations.ts          Showrooms + service centre, link helpers
    legal.ts              Future accessibility / privacy / cookie pages
  components/
    layout/               Header, MobileMenu, NavLink, Footer, SkipLink
    home/                 Homepage sections
    ui/                   Container, ButtonLink, SectionHeader, MediaFrame…
    brand/Logo.tsx        Original logo slot
    seo/JsonLd.tsx        Safe JSON-LD script
  lib/                    Small helpers (cx, structured data)
```

### Content rules baked into the code

- **Verification status.** Every vehicle and location has a `verification`
  field. Unverified opening hours and brand-per-location lists are stored but
  not rendered.
- **No invented imagery.** `MediaFrame` renders authorised photography when an
  `ImageAsset` is supplied. Otherwise it shows a generic line drawing and a
  visible “תמונה רשמית ממתינה לאישור” badge. The drawing is not any real model.
- **Original logo only.** Put the supplied file in `public/brand/` and set
  `site.logo` in `src/content/site.ts`. Until then the header shows the
  business name in a dashed “placeholder” frame.
- **No financial terms.** Financing copy is general and carries a disclaimer.

### Environment variables

See `.env.example`. Nothing is required for local preview.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (default `https://www.autoran.co.il`) |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `true` only on the approved production deploy; otherwise pages are `noindex` and robots.txt disallows all |

Google Sheets credentials arrive in Phase 1F (server-side only).

## Phases

| Phase | Scope | Status |
| --- | --- | --- |
| 1A | Architecture, tokens, typography, RTL, header, footer | ✅ Ready for review |
| 1B | Homepage | ✅ Ready for review |
| 1C | Brand pages | Not started — awaits homepage approval |
| 1D | Vehicle detail template | Not started |
| 1E | Financing, trade-in, test drive, service, locations pages | Not started |
| 1F | Forms + Google Sheets | Not started |
| 1G | QA | Not started |

Open content questions: [`docs/CONTENT_STATUS.md`](docs/CONTENT_STATUS.md).
