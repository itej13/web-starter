# Plan

## Goal & users
<!-- Who is this for, what must they be able to do, what does success look like? -->

## Pages
| Route | Purpose | Data it shows/changes |
|---|---|---|
| `/` | | |

## Data model
<!-- Tables/entities and fields. "None" if the site stores nothing. -->

## API contract
<!-- One row per endpoint/server action. Frontend and backend build against this in parallel. -->
| Method + path | Input | Output | Auth |
|---|---|---|---|

## Stack
<!-- Prefilled for this template. Keep it unless the project really differs; every /webteam agent reads its paths and commands here. -->
- Framework: Next.js 16 (App Router) · Language: TypeScript · Styling: Tailwind CSS v4
- Source: web-starter
- Read before coding: `AGENTS.md`, then the relevant guide in `node_modules/next/dist/docs/`
- Commands: check `npm run check` · e2e `npm run e2e` · dev `npm run dev` (port 3000) · build `npm run build`
- Deploy: Vercel · preview `vercel deploy`

### Ownership
| Paths (globs) | Owner | Notes |
|---|---|---|
| `docs/PLAN.md` | web-planner | |
| `app/globals.css`, `components/ui/**` | web-designer | |
| `app/**/page.tsx`, `app/**/layout.tsx`, `app/**/loading.tsx`, `app/**/error.tsx`, `components/**` (not `ui/`), `lib/content/**` | web-frontend | may only append paths to `site.routes` in `lib/site.ts` |
| `app/api/**`, `lib/server/**`, `db/**`, `proxy.ts`, `next.config.ts`, `app/**/actions.ts` | web-backend | |
| `e2e/**`, `playwright.config.ts` | web-tester | |
| `lib/site.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/**/opengraph-image.*` | web-seo | every field except the `site.routes` appends |
| `.github/**`, `instrumentation.ts`, `vercel.ts`, `.env.example` | web-ship | |
| security / performance | review agents | fix inside a finding's file only when its owner isn't running |

- **Unit tests** (`*.test.ts`) belong to the owner of the file they test. web-tester adds one only where the owner left none, and never rewrites an owner's test.
- **A file not in this table:** ask the orchestrator before creating it; don't guess.

## Layers needed
| # | Layer | Needed? | Notes |
|---|---|---|---|
| 1 | Planning | yes | this file |
| 2 | Design | | |
| 3 | Frontend | | |
| 4 | Backend | | |
| 5 | Database | | |
| 6 | Hosting/deploy | | |
| 7 | Security | | |
| 8 | Performance | | |
| 9 | SEO | | |
| 10 | Testing | | |
| 11 | Monitoring/analytics | | |
