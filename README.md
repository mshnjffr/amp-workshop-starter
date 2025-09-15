# BlackRock Amp Workshop Starter

A minimal monorepo scaffold for an Amp-powered workshop with two future apps: `ts-lib` and `express-api`. This repo only includes root scaffolding, docs, safe permissions, and CI.

## Setup

- Prereqs: Node >= 18
- Install: `npm ci` (no packages yet, placeholder)

## Commands (root)

- Typecheck: `npm run typecheck`
- Test: `npm test`
- Build: `npm run build`
- Format: `npm run format`

These are placeholders until `apps/` workspaces are added (`apps/*`).

## Sprint Overview

- Sprint 1: Workspace skeletons, base tsconfig, minimal ts-lib stub and tests
- Sprint 2: express-api skeleton, one endpoint, integration tests
- Sprint 3: Hardening (lint, Prettier), docs, examples, polish

See issues for details:
- `issues/sprint-1.md`
- `issues/sprint-2.md`
- `issues/sprint-3.md`

## Docs

- Workshop conventions and commands: see `docs/AGENTS.md`

## Notes

- No dependencies are installed yet. CI validates the scaffold and will evolve as apps are added.
