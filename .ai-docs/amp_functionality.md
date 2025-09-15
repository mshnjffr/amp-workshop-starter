# Amp Functionality (from the Owner’s Manual)

## Core
- Unconstrained token usage: large contexts (>100k tokens) for better results.
- Best model usage: automatically uses the most capable models.
- Raw model power: minimal abstraction between you and the LLM.
- Evolves with new models: frequent upgrades to latest foundation models.

## Tools & Subagents
- Subagents: parallel, independent task execution for complex work.
- Oracle: high-reasoning model for deep reviews, planning, debugging.
- Built-in tools: code search/reads, diffs, diagnostics, file edits.
- Custom tools (MCP): extend Amp via MCP servers for domain tasks.
- Toolboxes: lightweight scripts to extend behavior without full MCP.
- Permissions: granular allow/deny/ask rules per tool or command.

## IDE / UX
- Amp Tab: AI code suggestions in-editor (completions).
- Keyboard shortcuts: fast access to actions, commands, and threads.
- File mentioning: reference files/lines in prompts for precision.
- Image uploads: attach images for visual context when needed.
- Layout customization: arrange Amp panel in supported IDEs.

## CLI & CI
- Interactive CLI: chat from terminal in project context.
- Execute mode (-x): run non-interactive prompts as single-shot tasks.
- Shell mode ($): run shell commands and include outputs in context.
- Incognito shell ($$): run shell commands without logging outputs to context.
- Slash commands: quick built-in or custom actions via /commands.
- Streaming JSON (--stream-json): structured output for integrations.
- CI/CD integration: use Amp in pipelines with env vars and tokens.

## Code Understanding & Editing
- Fix code errors: identify and resolve type/test/build failures.
- Run and fix tests: execute suites and address failures.
- Refactor code: rename/replace patterns, modularize.
- Add features: implement small features end-to-end.
- Code review: analyze diffs for security, performance, quality, tests.
- Find code: locate routes, auth, configs, deprecated APIs.
- Git integration: `git blame`, `git diff`, branch/commit operations.
- Plan first: design/plan changes before edits when requested.

## Collaboration & Threads
- Thread sharing: share URLs to collaborate and document work.
- Thread management: compact or new thread with summary to manage context.
- File change tracking: review, revert, and link edits to threads.

## Security & Controls
- Permissions UI: manage allow/deny/ask rules; demo safety before shell.
- Account/security controls: manage API keys, org settings.
- Regional restrictions: signup/usage constraints where applicable.

## Integrations
- VS Code extension: primary environment.
- Cursor & VSCodium: Code OSS forks support.
- JetBrains integration: enable via `amp --jetbrains`.
- Examples & guides: official scenarios for OpenAPI, review bots, automation.
