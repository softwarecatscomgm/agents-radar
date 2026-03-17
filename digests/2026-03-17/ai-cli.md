# AI CLI Tools Community Digest 2026-03-17

> Generated: 2026-03-17 11:44 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
As of March 17, 2026, AI CLI tools are actively addressing authentication, token consumption, and core functionality issues. New features focus on enhanced image handling, improved developer environments, and plugin integration, while user pain points revolve around stability, cost, and intuitive usability.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 9 | 8 | 1 | 🟢 |
| OpenAI Codex | 8 | 8 | 5 | 🟢 |
| OpenCode | 8 | 8 | 0 | 🟡 |

### Shared Directions
- Robust authentication and token management (Claude Code, OpenAI Codex, OpenCode)
- Improved streaming and reconnection stability (Claude Code, OpenAI Codex, OpenCode)
- Enhanced TUI and VS Code integration for better user experience (Claude Code, OpenAI Codex, OpenCode)
- Greater control over environment and configuration settings (Claude Code, OpenAI Codex)
- Plugin and extension ecosystem expansion (Claude Code, OpenAI Codex)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Context, sandboxing, enterprise integration | Developers, enterprise teams | Advanced reasoning, safety controls |
| OpenAI Codex | Multimedia, developer environments | Developers, creative professionals | Cutting-edge modality support |
| OpenCode | Cost efficiency, custom providers | Budget-conscious developers | Flexible API integrations |

### Trend Signals
- Persistent authentication challenges impacting broad adoption.
- Demand for richer, higher-fidelity media input/output capabilities.
- Growing importance of robust plugin and external tool integration.
- User sensitivity to token consumption costs and predictability.
- Critical need for stable, predictable core AI model behavior.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| #514 | document-typography | undefined | OPEN | Typographic quality control for AI-generated documents. |
| #210 | frontend-design | undefined | OPEN | Improve clarity, actionability, and coherence of frontend design guidance. |
| #83 | skill-quality-analyzer, skill-security-analyzer | undefined | OPEN | Meta skills for analyzing skill quality and security. |
| #181 | SAP-RPT-1-OSS predictor | undefined | OPEN | Predictive analytics on SAP business data using a tabular foundation model. |
| #486 | ODT skill | undefined | OPEN | OpenDocument text creation, template filling, and ODT to HTML parsing. |
| #335 | masonry-generate-image-and-videos | undefined | OPEN | AI-powered image and video generation from text prompts. |

### Demand Trends
- Security concerns around community skills impersonating official Anthropic ones.
- Need for updated `skill-creator` to align with best practices and token efficiency.
- Proposals for agent governance and safety patterns in AI agent systems.
- Investigation into skill triggering issues with `run_eval.py`.

### Pending Skills
- PR #629: [session-memory](https://github.com/anthropics/skills/pull/629) - Persistently stores technical facts across context compaction.
- PR #514: [document-typography](https://github.com/anthropics/skills/pull/514) - Controls typographic quality in AI-generated documents.
- PR #486: [ODT skill](https://github.com/anthropics/skills/pull/486) - Handles OpenDocument text creation and parsing.
- PR #181: [SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181) - Predicts SAP business data using a new foundation model.
- PR #335: [masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335) - Enables AI image and video generation.

### TL;DR
Addressing skill security vulnerabilities and improving the `skill-creator`'s efficiency and adherence to best practices are the current top priorities.

---

### Highlights
- Claude Opus 4.6 output token limits increased to 64k default and 128k upper bound.
- New `allowRead` sandbox setting allows re-enabling read access within `denyRead` regions.
- Significant user engagement around model context window issues and authentication failures.

### Releases
- v2.1.77: Increased default output token limits for Opus 4.6, added `allowRead` sandbox setting, and updated `/copy` command option.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [34229](https://github.com/anthropics/claude-code/issues/34229) | [invalid] [BUG] Phone verification | 292 | 360 | Critical user authentication flow broken. |
| [12421](https://github.com/anthropics/claude-code/issues/12421) | [bug, has repro, api:bedrock, platform:macos, area:auth] [BUG] `"awsAuthRefresh":` setting causes constant repeated auth attempts | 23 | 21 | Recurring authentication failures blocking usage. |
| [3134](https://github.com/anthropics/claude-code/issues/3134) | [bug, has repro, platform:macos, area:tui] [BUG] Terminal Paste Corruption from Bracketed Paste Mode | 18 | 28 | Terminal usability issue affecting copy-pasting. |
| [26457](https://github.com/anthropics/claude-code/issues/26457) | [bug] [BUG] Reopening of Claude Desktop Installation Fails on Windows 11 - Signature Verification & Unable to Load #25385 | 16 | 3 | Installation failure on Windows blocking desktop use. |
| [32450](https://github.com/anthropics/claude-code/issues/32450) | [bug, has repro, platform:windows, area:mcp, platform:vscode] Google Drive claude.ai connector not loading in VS Code extension despite being connected in claude.ai | 15 | 9 | VS Code extension integration issues with cloud connectors. |
| [33949](https://github.com/anthropics/claude-code/issues/33949) | [bug, has repro, platform:windows, area:core] SSE streaming hangs indefinitely (no timeout) + ESC cannot fully cancel (queue auto-restart) — root cause analysis with fix proposals | 14 | 9 | Core functionality (streaming) hangs without timeout. |
| [33603](https://github.com/anthropics/claude-code/issues/33603) | [bug, platform:windows, area:model, memory, platform:vscode] CLAUDE.md hard rules and persistent memory instructions consistently ignored — violations escalate with each session despite repeated explicit reinforcement | 9 | 1 | Model not respecting project-specific instructions. |
| [16585](https://github.com/anthropics/claude-code/issues/16585) | [CLOSED] [bug, has repro, platform:windows, area:tools] Plugins from third-party marketplaces don't appear in /plugin list | 9 | 1 | Third-party plugin discoverability issue. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [35168](https://github.com/anthropics/claude-code/pull/35168) | Add Etudes plugin | OPEN | Adds a sprint coaching plugin for builders. |
| [35106](https://github.com/anthropics/claude-code/pull/35106) | Fix typos in settings README and code-simplifier agent | OPEN | Corrects minor textual errors in documentation and agent. |
| [35039](https://github.com/anthropics/claude-code/pull/35039) | Fix: Remove 'set -u' to handle empty PROMPT_PARTS array in ralph-loop | OPEN | Resolves error when running ralph-loop without arguments. |
| [30521](https://github.com/anthropics/claude-code/pull/30521) | Add gpg-pinentry-guard plugin to prevent broken GPG signing prompts | OPEN | Prevents broken GPG prompts during git commits. |
| [34951](https://github.com/anthropics/claude-code/pull/34951) | feat: add automatic GitHub/GitLab detection and GitLab support for /code-review | OPEN | Extends code review command to support GitLab. |
| [34798](https://github.com/anthropics/claude-code/pull/34798) | Root cause analysis: terminal scrolls to top during agent execution (Ink cursorUp+eraseLines) | CLOSED | Adds a freeze/unfreeze toggle for terminal scroll issues. |
| [34930](https://github.com/anthropics/claude-code/pull/34930) | docs(plugins): add Community Plugins section to README | OPEN | Links to external community plugin marketplaces. |
| [34789](https://github.com/anthropics/claude-code/pull/34789) | Add Windows workaround for Chrome extension bridge connection failure | CLOSED | Provides a workaround for Chrome extension bridge issues on Windows. |

### Trends
- [pain] Authentication issues persist, especially GCP/AWS related.
- [pain] Model API behavior is inconsistent, with context window and instruction following being major concerns.
- [feature] Users desire more control over configuration and environment variables.
- [pain] Terminal scrolling and display artifacts are recurring problems across platforms.
- [feature] Enhanced support for cloud connectors (Google Drive) and integrations (VS Code) is requested.
- [pain] Plugin discoverability and integration, particularly from third-party sources, needs improvement.
- [pain] Users report instances of silent model degradation or unavailability without clear notification.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- New `view_image` and `codex.emitImage(..., detail: "original")` functionality enables high-precision visual tasks with full-resolution image inspection.
- `js_repl` now exposes `codex.cwd` and `codex.homeDir` for enhanced JavaScript environment interaction.
- Multiple ongoing issues highlight authentication problems, rapid token consumption, and reconnection issues across different platforms and tools.

### Releases
- rust-v0.116.0-alpha.3: Release 0.116.0-alpha.3
- rust-v0.116.0-alpha.2: Release 0.116.0-alpha.2
- rust-v0.115.0: Supported models can now request full-resolution image inspection; `js_repl` exposes `codex.cwd` and `codex.homeDir`.
- rust-v0.116.0-alpha.1: Release 0.116.0-alpha.1
- rust-v0.115.0-alpha.27: Release 0.115.0-alpha.27

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #10410 | [OPEN] [enhancement, app] Codex Desktop App: macOS Intel (x86_64) support | 131 | 178 | Crucial for macOS users on Intel hardware, expanding accessibility. |
| #12764 | [OPEN] [bug, windows-os, auth, agent] The codex cli giving: 401 unauthorized | 75 | 4 | Prevents CLI usage and access to services due to authentication failure. |
| #14593 | [OPEN] [bug, extension, rate-limits] Still burning tokens very fast with today's VS Code extension update | 71 | 45 | High token usage impacts costs and user experience for VS Code users. |
| #14209 | [OPEN] [bug, app] The reconnecting issue is even worse than last days. | 38 | 16 | Persistent connection problems disrupt workflow and usability. |
| #9634 | [OPEN] [bug, auth, CLI] Your access token could not be refreshed because your refresh token was already used. Please log out and sign in again. | 30 | 4 | Authentication token issues prevent CLI access and require re-authentication. |
| #8865 | [OPEN] [bug, azure] Facing frequent stream disconnection issue while using Codex CLI | 25 | 8 | Frequent disconnections hinder reliable use of the CLI with Azure OpenAI. |
| #13917 | [OPEN] [bug, windows-os, app] Codex desktop on Windows cannot start PowerShell host in session (8009001d) | 17 | 0 | Prevents Windows users from running PowerShell within the desktop app. |
| #12564 | [OPEN] [enhancement, extension] VS Code Extension: Allow renaming task/thread titles to improve history navigation | 16 | 0 | Enhances usability by allowing users to organize and identify threads better. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #14843 | Fix agent jobs finalization race and reduce status polling churn | OPEN | Improves job completion reliability and reduces unnecessary status checks. |
| #14506 | tui: add ephemeral /btw side-question threads | OPEN | Introduces temporary threads for side questions via a slash command. |
| #13637 | feat(rollout): preserve fork references across replay | OPEN | Enables forks to reuse parent history rather than duplicating it. |
| #14912 | fix(core): prevent turn completion while unified_exec processes are running | OPEN | Stops turns from completing before background processes finish. |
| #14914 | fix(tui): keep user prompt visible in tmux truncation | OPEN | Ensures user prompts remain visible in tmux even with window truncation. |
| #13702 | fix(subagents) share execpolicy by default | OPEN | Propagates subagent approval to the execpolicy by default. |
| #14707 | [oai] Log host app-server auth decisions for auth 401s | OPEN | Logs authentication decisions to help debug 401 errors. |
| #14891 | fix(linux-sandbox): preserve detached children | OPEN | Prevents detached child processes from exiting when the parent command finishes. |

### Trends
- [pain] Recurring authentication errors (401 unauthorized, token refresh issues) across CLI and applications.
- [pain] Rapid token consumption and unexpected usage spikes impacting business and pro users.
- [pain] Frequent stream disconnection and reconnection issues impacting CLI and application stability.
- [feature] Enhanced image processing capabilities for higher precision visual tasks (`detail: "original"`).
- [feature] Improved JavaScript environment interaction via `js_repl` (`codex.cwd`, `codex.homeDir`).
- [pain] macOS Intel support remains a highly requested feature for the desktop app.
- [feature] New ephemeral side-question threads for focused, temporary explorations within the TUI.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- Copilot auth is rapidly consuming premium requests due to incorrect "user" designation for agent-initiated calls.
- Several users are reporting "SSE read timed out" errors, particularly during file writing operations.
- Paste functionality (Ctrl+V) is broken in the TUI on Windows and in some VSCode keybindings, causing significant friction.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #8030 | [CLOSED] Copilot auth now sets far too many requests as "user" consuming premium requests rapidly | 193 | 64 | Agent requests incorrectly billed, rapidly depleting quotas. |
| #3936 | [OPEN] [bug] Github Enterprise authorization | 54 | 14 | Fails user login for GitHub Enterprise deployments. |
| #8598 | [CLOSED] [bug] Copilot requested model not supported | 42 | 8 | Newer Copilot models inaccessible in OpenCode despite VSCode support. |
| #17318 | [OPEN] [bug, core] Error： SSE read timed out | 35 | 25 | Halts file writing processes mid-operation. |
| #16331 | [OPEN] [bug, core] Permissions ignored | 25 | 4 | Security configuration for file access is bypassed. |
| #5674 | [OPEN] Custom OpenAI-compatible provider options not being passed to API calls | 21 | 11 | Custom provider configurations are not applied correctly. |
| #16129 | [OPEN] [core] What is the specific context size of Github Copilot, is it only 128K? | 17 | 0 | User inquiry about Copilot context limits for purchase decisions. |
| #7048 | [OPEN] [bug, opentui] Copy Text "Copied to clipboard" does never work | 15 | 6 | Inability to copy text directly from TUI interfaces. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #13854 | [OPEN] [needs:issue] fix(tui): stop streaming markdown/code after message completes | OPEN | Correctly renders completed messages in TUI by stopping streaming. |
| #17948 | fix: inline review comment submit and layout | OPEN | Fixes inline review comment submission and display issues. |
| #17857 | [CLOSED] fix(app): avoid prompt tooltip Switch on startup | CLOSED | Prevents desktop startup crashes related to prompt tooltip. |
| #13561 | [CLOSED] [needs:title] SignPath CLI Signing | CLOSED | Adds SignPath code signing to Windows CLI builds. |
| #17803 | Remove CLI from electron app | OPEN | Removes bundled CLI from Electron app, improving structure. |
| #17942 | feat: FSharp wasm added | OPEN | Integrates F# language support via WASM. |
| #17943 | fix(project): use path-aware project identity to prevent clone collisions | OPEN | Prevents project ID collisions with multiple local repo clones. |
| #17930 | feat: add provider racing — parallel streams, first response wins | OPEN | Introduces parallel provider calls, returning the first successful response. |

### Trends
- [pain] Frequent "SSE read timed out" errors during file writing.
- [pain] Inconsistent Copilot authentication impacting request billing.
- [pain] Paste and copy functionality failures in TUI and VSCode.
- [pain] Issues with GitHub Enterprise and custom OpenAI-compatible provider setups.
- [pain] Problems with tool call processing and context management.
- [feature] Desire for improved session data persistence within project folders.
- [pain] Web UI rendering and CSP/CORS issues impacting accessibility.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*