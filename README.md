# Amp Workshop Starter

A hands-on repo to learn Amp through three short sprints. You will:
- Use Amp inside VS Code and via the CLI
- Fix failing tests with a tight verify loop
- Try subagents, shell modes ($ and $$), and thread sharing
- Optionally generate an OpenAPI spec for an Express app

Repo home: https://github.com/mshnjffr/amp-workshop-starter

## What’s in this repo
- apps/ts-lib: tiny TypeScript library with a deprecated API and one failing test
- apps/express-api: small Express API with one failing validation test
- docs/AGENTS.md: build/test commands, guardrails, conventions
- .amp/permissions.json: safe defaults (deny destructive shell, ask on network)
- .ai-docs/workshop_plan.md: the facilitator’s agenda and example solutions

## Prerequisites
- Node 18+
- VS Code (or Code OSS variant) + “Amp by Sourcegraph” extension
- Git
- Optional: Amp CLI (`npm install -g @sourcegraph/amp`)

## First-time setup (5 minutes)
1) Clone and install dependencies
```bash
git clone https://github.com/mshnjffr/amp-workshop-starter.git
cd amp-workshop-starter
npm install
```
2) Open the folder in VS Code and install the Amp extension (if not already).
3) Confirm permissions are safe in `.amp/permissions.json`.

## How the sprints work
- Each sprint has a small failing test or refactor. You’ll drive Amp to plan → edit → verify.
- “Verification gates” are the order we use: typecheck → lint → tests → build.
- We run commands per workspace (using `-w <workspace>`). This scopes actions to just that app.

## Commands you’ll use (per workspace)
These are standard npm scripts used by Amp and you.
- Typecheck: validates TypeScript types only (no output files)
```bash
npm run typecheck -w apps/ts-lib
npm run typecheck -w apps/express-api
```
- Test: runs the Vitest test suites
```bash
npm test -w apps/ts-lib
npm test -w apps/express-api
```
- Build: compiles TypeScript to `dist/`
```bash
npm run build -w apps/ts-lib
npm run build -w apps/express-api
```
What you should see:
- On first run, each workspace has 1 intentionally failing test. Your task is to make it pass.

## Sprint 1 — Verification loop (ts-lib)
Goal: Fix the failing test in the library using the smallest safe change.
- Start an Amp thread and paste this prompt:
```text
Run typecheck for apps/ts-lib and show the first error only. Propose the smallest fix. Make the change, then re-run typecheck and tests. Stop after the first error/test is clean.
```
- Manual commands if needed:
```bash
npm run typecheck -w apps/ts-lib
npm test -w apps/ts-lib
```
- Expected outcome: tests in `apps/ts-lib` pass with a small, readable diff.

## Sprint 2 — Subagents refactor (ts-lib)
Goal: Replace deprecated `getUserInfo` with `getUserProfile` across the lib and tests.
- Prompt idea:
```text
Replace calls to deprecated function getUserInfo with getUserProfile across apps/ts-lib. Update imports. Use a subagent if it helps. Run tests and summarize results.
```
- Verify:
```bash
npm test -w apps/ts-lib
```
- Expected outcome: no remaining references to `getUserInfo`; tests green.

## Sprint 3 — CLI / OpenAPI (express-api)
Choose one path:
- A) Generate an OpenAPI spec with the CLI:
```bash
amp -x "Analyze all Express routes in apps/express-api/src/routes/ and generate OpenAPI documentation"
```
- B) Make the failing test pass by validating `email` in POST /users, then:
```bash
npm run typecheck -w apps/express-api
npm test -w apps/express-api
```
Tip: Demo shell modes
- `$ npm test -w apps/express-api` includes test output in the Amp thread
- `$$ npm test -w apps/express-api` runs without adding output to the thread

## Using Amp effectively
- Start with a TODO list in your thread: plan your steps
- Use file mentions like `apps/ts-lib/src/index.ts` to ground the model
- Share your thread URL for reviews
- See conventions in docs/AGENTS.md

## Troubleshooting
- If installs are slow, ensure Node 18+ and a clean `npm cache verify`
- If context gets noisy, start a new Amp thread with a short summary
- Permissions blocking? Adjust `.amp/permissions.json` (stay safe) or ask the facilitator

## Links
- Workshop plan: .ai-docs/workshop_plan.md
- Conventions and commands: docs/AGENTS.md
- Amp manual: https://ampcode.com/manual
