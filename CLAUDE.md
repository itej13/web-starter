@AGENTS.md

## Definition of done (every change)
- `npm run check` passes (lint, typecheck, unit tests, build), then `npm run e2e` passes.
- New public route → added to `site.routes` in `lib/site.ts` and has its own `metadata`.
- Logic with a branch (parsing, money, auth, validation) → one unit test next to it (`*.test.ts`).
- Server input is validated at the API boundary. No secrets in code; new env vars go in `.env.example`.
- Images use `next/image`; interactive elements are keyboard-reachable and labelled.

## File ownership (multi-agent runs)
One writer per area. The table lives in `docs/PLAN.md` § Stack › Ownership, the single source every /webteam agent reads.

## Multi-agent workflow
Run `/webteam` to build with the agent team. Progress lives in `docs/STATUS.md`.
