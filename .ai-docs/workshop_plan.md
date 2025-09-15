# Amp Workshop Plan (90 minutes)

## Audience
- Engineers new to Amp (first-time users) and curious evaluators

## Outcomes
By the end, attendees will be able to:
- Explain what Amp is and when to use it.
- Use Amp in VS Code and via CLI on a shared starter repository.
- Apply core features: TODO workflow, subagents (Task subagent tool), Oracle, CLI, thread sharing, AGENTS.md, permissions.
- Use file mentions and image uploads to ground prompts with concrete context.
- Run verification gates (typecheck → lint → test → build) and ship a small PR.

## Workshop starter repository (clone-and-go)
- URL: https://github.com/YOURORG/amp-workshop-starter (replace before event)
- Purpose: single repo everyone clones in the first 10 minutes; contains bite-sized challenges showcasing Amp features.
- Structure (suggested):
  - apps/express-api: small Express app with a few routes, tests, and intentional gaps
  - apps/ts-lib: tiny TypeScript lib with a failing test and a deprecation to refactor
  - docs/AGENTS.md: pre-seeded with build/test commands and project structure
  - .amp/permissions.json: safe-by-default rules (block destructive shell; ask for network)
  - .github/: optional Actions workflow for PR checks
  - issues/: seed markdown issues for each sprint (1–6)
  - challenges/: reference inputs for some tasks
  - solutions/: reference solutions for facilitators (not advertised to attendees)
- Branching and tags:
  - main: starting point
  - tags: checkpoint-1, checkpoint-2, checkpoint-3 (for time recovery)
  - branches: solutions/* for facilitator reference

## Prerequisites (share ≥3 days in advance)
- Tools
  - VS Code (latest) or Code OSS forks (e.g., VSCodium)
  - Node.js 18+ and npm
  - Git with a GitHub account
- Install Amp
  - VS Code: install the “Amp by Sourcegraph” extension from the Marketplace
  - CLI: `npm install -g @sourcegraph/amp`
- Access
  - Read access to the workshop starter repo above
  - Optional: AMP_API_KEY (if using Oracle in the session)
- Offline/backup
  - Provide a zipped copy of the starter repo and a short setup video for air-gapped attendees

## Reference links
- Manual: https://ampcode.com/manual
- Examples & guides: https://github.com/sourcegraph/amp-examples-and-guides/tree/main/examples
  - OpenAPI generation: https://github.com/sourcegraph/amp-examples-and-guides/blob/main/examples/openapi-spec-generation/README.md
  - Amp + Code Search (context when relevant): https://github.com/sourcegraph/amp-examples-and-guides/blob/main/examples/amp%2Bcodesearch/README.md
  - GitHub review bot: https://github.com/sourcegraph/amp-examples-and-guides/blob/main/examples/automation/github-review-bot/README.md
  - SonarQube automation: https://github.com/sourcegraph/amp-examples-and-guides/blob/main/examples/automation/sonarqube-amp/README.md

## Room setup
- Projector showing VS Code and terminal
- Stable internet; pre-clone the starter repo and run `npm ci` to cache deps
- Timer visible for segment pacing; shared chat or GitHub Discussions for submissions

## Format and facilitation mechanics
- Highly interactive: ~55–60 minutes hands-on sprints, ~30–35 minutes demos/discussion
- Participants work in short sprints (5–15 min) with clear acceptance criteria
- Submissions: post thread links and PRs in a pinned GitHub Discussion topic
- Light leaderboard: track completed sprints; celebrate 2–3 volunteers live

## Agenda (90 minutes)
1) Welcome, outcomes, repo clone and setup (10 min)
- Goal: everyone has the repo cloned, `npm ci` done, Amp installed
- Safety: show permissions rules; remind no destructive shell commands
- Core principles: best models, large-context prompts, raw model power

2) Guided micro-tour: Amp UI + first thread (10 min)
- Open a fresh thread; demonstrate TODO planning and thread sharing (post link)
- Show AGENTS.md and permissions file in the repo; explain how Amp uses them
- File mentions and images: paste a file mention (e.g., apps/ts-lib/src/index.ts) and, if applicable, add an image to ground a prompt

3) Hands-on Sprint 1 (Feature: verification gates) (12 min)
- Task: “Run typecheck and fix the first error in apps/ts-lib; re-run typecheck and commit”
- Tip: include a file mention to the failing file in your prompt
- Prompts: see Detailed sprint prompts below

4) Feature spotlight: Subagents (Task subagent tool) (5 min) + Micro-exercise (5 min)
- Explain when to use subagents; show a 1–2 minute example
- Micro-ex: Use a subagent to update 2 files in apps/ts-lib with disjoint writes

5) Hands-on Sprint 2 (Feature: subagents) (13 min)
- Task: Refactor a deprecated call across 2–3 files; commit a small diff; run tests

6) Feature spotlight: Oracle + CLI (shell modes) + Custom tools (9 min)
- Oracle: quick code review of a PR diff; note token/cost and optional availability
- CLI: demo `amp -x '...'` and shell modes
  - `$ <cmd>`: include command output in the thread (e.g., `$ npm run test -w apps/ts-lib`)
  - `$$ <cmd>`: run without adding output to context (useful for noisy logs)
  - Mention slash commands briefly if configured
- Custom tools: introduce MCP servers and Toolboxes as ways to extend Amp; point to manual for setup

7) Hands-on Sprint 3 (Feature: CLI / OpenAPI) (12 min)
- Option A: Express OpenAPI quickstart in apps/express-api
  - `amp -x "Analyze all Express routes in apps/express-api/src/routes/ and generate OpenAPI documentation"`
- Option B: Small targeted refactor with tests in ts-lib
- Optional: Use `$ npm run test -w apps/ts-lib` vs. `$$ npm run test -w apps/ts-lib` and observe thread context differences

8) Wrap-up and share-out (6 min)
- Volunteers show thread links and PRs
- Next steps and advanced examples

## Detailed sprint prompts and acceptance criteria
- Sprint 1: Fix-and-verify loop
  - Prompt: “Run typecheck and show the first 3 errors only. Propose the smallest fix for error 1. Make the change, then re-run typecheck. Stop after the first error is fixed and typecheck is clean. Use a file mention for the failing file.”
  - Accept: typecheck clean for apps/ts-lib; small, readable diff
- Sprint 2: Subagents (multi-file refactor)
  - Prompt: “Replace calls to deprecated function `getUserInfo` with `getUserProfile` across apps/ts-lib. Update imports. Use a subagent if it reduces turnaround. Run tests and summarize results.”
  - Accept: all refs updated; tests pass; single concise commit
- Sprint 3: CLI / OpenAPI
  - CLI Prompt A (OpenAPI): `amp -x "Analyze all Express routes in apps/express-api/src/routes/ and generate OpenAPI documentation"`
  - CLI Prompt B (refactor): `amp -x "Find all TODO comments in apps/ts-lib and turn the highest-priority one into a small PR with a passing test"`
  - Accept: new openapi.yaml or PR with small refactor and passing tests

## Safety and permissions
- Use the repo’s .amp/permissions.json to block destructive commands (e.g., `rm -rf`, `docker rm -f`)
- Call out that attendees should not paste secrets; avoid global installs inside prompts
- Demonstrate the permissions UI and how to set deny/ask rules

## Best practices to narrate while you work
- Start with a TODO plan in the thread; work in small, verifiable steps
- Prefer the smallest local fix; mirror existing code patterns
- Run verification gates (typecheck → lint → test → build) and report counts
- Use file mentions and images to ground prompts when relevant
- Share threads for transparency; use “New Thread with Summary” if context drifts

## Optional alternative lab tracks
- Beginner (Hello Amp): list TODOs, fix one, run verification gates, share thread
- Intermediate (Workflow automation): generate OpenAPI, update AGENTS.md, add a deny rule to permissions
- Advanced (CI-integrated bot): GitHub Action that runs `amp -x` for PR checks and uses Oracle for review comments
- Advanced+ (Custom tools): connect a simple MCP server or Toolbox script to add a project-specific action (facilitator-guided)

## Success metrics
- During session: ≥80% complete Sprint 1, ≥60% complete Sprint 2 or 3
- After session: each attendee shares a thread link and at least one PR

## Follow-up email template
Subject: Thanks for joining the Amp workshop — resources inside

Hi all,

Thanks for attending the Amp workshop. Here are the resources we used:
- Manual: https://ampcode.com/manual
- Starter repo: https://github.com/YOURORG/amp-workshop-starter
- Examples & guides: https://github.com/sourcegraph/amp-examples-and-guides/tree/main/examples
- Today’s sprint prompts: captured in the workshop thread

Next steps:
- Try the OpenAPI exercise on a real service
- Pilot the fix-and-verify loop on your next bug
- Experiment with the CLI for small automations (`amp -x`, `$`, `$$`)
- Explore custom tools (MCP/Toolboxes) as follow-up

Reply with your thread link if you want feedback.

Thanks!
