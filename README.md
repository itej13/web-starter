# web-starter

**A Next.js template where the "boring" layers of a website are done before you write your first feature.**

Most projects skip the same things under deadline pressure: tests, CI, error logging, analytics, SEO basics. They're not hard, they're just never the priority on day one. This template makes them the default, so every project starts with them already working.

Stack: **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel**.

It's also the base layout for [webteam](https://github.com/itej13/webteam), a supervised team of Claude Code subagents that builds a site on top of it.

---

## What's pre-wired

| Layer | What you get | Where |
|---|---|---|
| Code quality | ESLint (Next config) + strict TypeScript, `npm run typecheck` | `eslint.config.mjs`, `tsconfig.json` |
| Testing | Vitest for unit tests (`*.test.ts` next to the code) with an example test | `lib/site.test.ts` |
| | Playwright smoke tests against the production build: home page renders, `sitemap.xml` and `robots.txt` are served | `e2e/smoke.e2e.ts`, `playwright.config.ts` |
| CI | GitHub Actions on every push and PR: lint → typecheck → unit tests → build → Playwright | `.github/workflows/ci.yml` |
| SEO | Site-wide metadata with title template, Open Graph and Twitter cards; generated `sitemap.xml` and `robots.txt` from one route list | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `lib/site.ts` |
| Analytics | Vercel Web Analytics + Speed Insights (Core Web Vitals); no-ops until enabled in the Vercel dashboard | `app/layout.tsx` |
| Error logging | Structured JSON logging of every server error (route, method, digest) via Next's `onRequestError` hook; shows up in Vercel runtime logs | `instrumentation.ts` |
| Config | One place for site name, description, URL and public routes; `.env.example` documents every env var | `lib/site.ts`, `.env.example` |
| Theming | Light/dark color tokens via CSS variables, Geist fonts via `next/font` | `app/globals.css` |
| AI-assistant guidance | `CLAUDE.md` with a definition of done; `docs/PLAN.md` template (with the stack, commands and file-ownership table prefilled) and `docs/STATUS.md` | `CLAUDE.md`, `docs/` |

### Deliberately not included
A database, auth, and Sentry. Not every site needs them, and each one adds accounts, env vars and cost. Add them when your plan says the site stores data or has users (the `web-backend` and `web-ship` agents in webteam do this through the Vercel Marketplace).

---

## Use it

**GitHub template** (creates your own repo):

```bash
gh repo create my-site --template itej13/web-starter --private --clone
cd my-site && npm install
```

**Or just copy it:**

```bash
npx degit itej13/web-starter my-site
cd my-site && git init && npm install
```

Then:

1. Edit `lib/site.ts`: name, description, and the list of public routes.
2. `cp .env.example .env.local` and set `NEXT_PUBLIC_SITE_URL`.
3. `npm run dev`.
4. Push to GitHub and import the repo in Vercel. Every PR gets a preview URL, and CI runs the full check.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run check` | Lint + typecheck + unit tests + production build (exactly what CI runs before e2e) |
| `npm test` | Unit tests only (Vitest) |
| `npm run e2e` | Playwright smoke tests against the built app (run `npm run build` first; first time: `npx playwright install chromium`) |
| `npm run build` / `npm start` | Production build / serve it |

## Definition of done

The `CLAUDE.md` in this repo turns these into defaults for Claude Code (and good habits for humans):

- `npm run check` and `npm run e2e` pass.
- Every new public route is in `site.routes` and has its own metadata.
- Logic with branches (parsing, money, auth, validation) has a unit test next to it.
- Server input is validated at the API boundary; no secrets in code; new env vars are in `.env.example`.
- Images use `next/image`; interactive elements are keyboard-reachable and labelled.

## Project layout

```
app/
  layout.tsx        root layout: metadata, fonts, Analytics, SpeedInsights
  page.tsx          home page
  sitemap.ts        sitemap.xml from site.routes
  robots.ts         robots.txt
  globals.css       Tailwind v4 + theme tokens
lib/
  site.ts           site identity + absoluteUrl()
  site.test.ts      example unit test
e2e/
  smoke.e2e.ts      Playwright smoke tests
docs/
  PLAN.md           planning template (users, pages, data, API contract, layers needed)
  STATUS.md         per-layer status with evidence
instrumentation.ts  server error logging
.github/workflows/ci.yml
```

## Building with the agent team

With [webteam](https://github.com/itej13/webteam) installed, run this in Claude Code inside a project made from this template:

```
/webteam <describe the site>
```

## License

MIT
