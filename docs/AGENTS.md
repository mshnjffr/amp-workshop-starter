# Amp Workshop Guide (Monorepo)

## Commands (gate order)

- Typecheck: `npm run typecheck` (root aggregates workspaces)
- Lint: add later (e.g., ESLint), run before tests
- Tests: `npm test` (root; or per workspace via `npm test -w <name>`)
- Build: `npm run build`

Acceptance order: Typecheck → Lint → Tests → Build.

## Repo Structure

- Root: `package.json` with workspaces `apps/*`
- Workspaces (to be added):
  - `apps/ts-lib` (TypeScript library)
  - `apps/express-api` (Express server)
- Tooling: minimal; add ESLint/Prettier later
- CI: GitHub Actions Node 18

## Naming & Style

- TypeScript-first, `.ts` for source, `.test.ts` for tests
- 2-space indent, LF, UTF-8, newline at EOF (see .editorconfig)
- File names: kebab-case; exported types in `PascalCase`
- Functions: `camelCase`; constants: `SCREAMING_SNAKE_CASE`

## Guardrails

- Simple-first: prefer local fixes to cross-file changes
- Reuse-first: mirror existing patterns, error handling, I/O, types
- No surprise edits: if >3 files or multiple subsystems, propose plan first
- No new deps without approval

## Amp Conventions

- Keep prompts concise; specify goals, constraints, and acceptance criteria
- Use explicit file paths and link to lines when discussing code
- Run verification gates in order; report counts succinctly

## Per-Workspace Commands (when created)

- Run test in `ts-lib`: `npm test -w ts-lib`
- Typecheck `ts-lib`: `npm run typecheck -w ts-lib`
- Run test in `express-api`: `npm test -w express-api`
- Typecheck `express-api`: `npm run typecheck -w express-api`

## Prompt Examples

- "Add a function `sum(a: number, b: number): number` to ts-lib with unit tests; update exports."
- "Create `/healthz` endpoint in express-api returning `{ status: 'ok' }`; add supertest."
- "Run typecheck and fix any TypeScript errors in express-api only."
