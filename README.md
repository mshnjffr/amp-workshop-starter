# Amp Workshop Starter

A minimal monorepo to run a highly interactive Amp workshop. It includes two apps and safety/guide rails:
- apps/ts-lib: a tiny TypeScript library with a deprecated API and an intentionally failing test (Sprint 1)
- apps/express-api: a small Express API with routes and an intentionally failing validation test (Sprint 3)
- docs/AGENTS.md: commands, conventions, and verification gates
- .amp/permissions.json: safe-by-default permissions (deny destructive commands, ask for network)

Repo URL: https://github.com/mshnjffr/amp-workshop-starter

## Quickstart

- Clone and install
```bash
git clone https://github.com/mshnjffr/amp-workshop-starter.git
cd amp-workshop-starter
npm install
```

- Amp setup
  - Install the "Amp by Sourcegraph" VS Code extension
  - Optional CLI: `npm install -g @sourcegraph/amp`

## Workspace commands

TypeScript lib (apps/ts-lib):
```bash
npm run typecheck -w apps/ts-lib
npm test -w apps/ts-lib
npm run build -w apps/ts-lib
```

Express API (apps/express-api):
```bash
npm run typecheck -w apps/express-api
npm test -w apps/express-api
npm run build -w apps/express-api
```

Note: One test in each workspace is intentionally failing to drive workshop sprints.

## Workshop sprints

- Sprint 1 (verification gates): Fix the failing test/type error in ts-lib, then re-run typecheck/tests.
- Sprint 2 (subagents): Refactor deprecated `getUserInfo` -> `getUserProfile` across ts-lib, update imports, and run tests.
- Sprint 3 (CLI/OpenAPI): Use `amp -x` to generate an OpenAPI spec for express-api OR complete a small targeted refactor + tests.

See issues:
- issues/sprint-1.md
- issues/sprint-2.md
- issues/sprint-3.md

## Conventions

- Follow docs/AGENTS.md for commands, verification gates, and prompt examples
- Use the permissions in .amp/permissions.json to stay safe (no destructive shell)
- Prefer small, verifiable diffs; run typecheck → lint → test → build

## Links
- Workshop plan: .ai-docs/workshop_plan.md
- Amp manual: https://ampcode.com/manual
