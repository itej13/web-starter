@AGENTS.md

## Definition of done (every change)
- `npm run check` passes (lint, typecheck, unit tests, build), then `npm run e2e` passes.
- New public route → added to `site.routes` in `lib/site.ts` and has its own `metadata`.
- Logic with a branch (parsing, money, auth, validation) → one unit test next to it (`*.test.ts`).
- Server input is validated at the API boundary. No secrets in code; new env vars go in `.env.example`.
- Images use `next/image`; interactive elements are keyboard-reachable and labelled.

## File ownership (multi-agent runs; one writer per area)
| Area | Owner agent |
|---|---|
| `docs/PLAN.md` | web-planner |
| `app/globals.css`, `components/ui/**` | web-designer |
| `app/**/page.tsx`, `app/**/layout.tsx`, `components/**` (not `ui/`) | web-frontend |
| `app/api/**`, `lib/server/**`, `db/**`, `proxy.ts` | web-backend |
| `**/*.test.ts`, `e2e/**` | web-tester |
| `app/sitemap.ts`, `app/robots.ts`, `lib/site.ts`, `app/**/opengraph-image.*` | web-seo |
| `.github/**`, `instrumentation.ts`, `vercel.ts`, `.env.example` | web-ship |
| security / performance | review agents: fix inside their findings' file only when the owner is not running |

## Multi-agent workflow
Run `/webteam` to build with the agent team. Progress lives in `docs/STATUS.md`.
