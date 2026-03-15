# AI CLI Tools Community Digest 2026-03-15

> Generated: 2026-03-15 11:28 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI landscape is characterized by rapid feature development and ongoing struggles with reliability, security, and user experience. Key areas of focus include enhanced context management, improved agent control, and robust TUI development, while critical issues like security vulnerabilities, performance degradation, and token management persist across tools.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 33,000+ | 3 | 0 | 🟡 |
| OpenAI Codex | 10,000+ | 7 | 1 | 🟢 |
| OpenCode | 17,000+ | 7 | 0 | 🟡 |

### Shared Directions
- **Enhanced Context Management:** Mechanisms for better memory, selective restoration, and exposing context usage (Claude Code, OpenAI Codex).
- **TUI/UX Improvements:** Streamlining user interaction, command handling, and visual feedback within terminal interfaces (OpenAI Codex, OpenCode).
- **Agent & Tooling Safety/Reliability:** Addressing issues with permissions, command execution, and preventing unauthorized actions (Claude Code, OpenCode).
- **Performance & Stability:** Tackling memory leaks, high CPU usage, and overall system responsiveness (OpenCode, OpenAI Codex).
- **Configuration & Customization:** Enabling easier settings management and tool adaptation (Claude Code, OpenAI Codex).

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|--------|-------------|----------|
| Claude Code | Agent robustness & security | Developers needing advanced CLI agents | Rule-based permissions, proactive security |
| OpenAI Codex | Developer workflow & integration | VS Code ecosystem, broader app users | LSP, app-server architecture, TUI |
| OpenCode | Copilot integration & performance | Developers using Copilot, macOS users | Direct Copilot auth, performance tuning |

### Trend Signals
- Urgent need for robust security sandboxing for AI agents.
- Developer demand for granular control over context window and memory.
- Increased focus on cross-platform stability, particularly macOS.
- User frustration with opaque token usage and rate limits.
- Growing importance of efficient TUI development for CLI experiences.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 514 | document-typography | undefined | OPEN | Improves AI document quality by preventing typographic issues like orphans and widows. |
| 83 | skill-quality-analyzer and skill-security-analyzer | undefined | OPEN | Meta skills for analyzing Claude skill quality, security, and marketability. |
| 210 | frontend-design | undefined | OPEN | Enhances frontend-design skill for clearer, actionable instructions within Claude conversations. |
| 154 | shodh-memory | undefined | OPEN | Provides persistent context for AI agents, enabling memory retention across conversations. |
| 486 | ODT skill | undefined | OPEN | Enables `.odt` (OpenDocument Text) creation, template filling, and parsing to HTML. |
| 335 | masonry-generate-image-and-videos | undefined | OPEN | AI-powered skill for generating images and videos from text prompts. |

### Demand Trends
- Enhanced safety and governance for AI agent systems.
- Improved integration and functionality with external services like Google Workspace.
- Standardization and better documentation for skill development and marketplace integration.
- Solutions for managing and auditing codebases, including documentation and efficiency.
- Robust error handling and system stability for skill deployment and management.

### Pending Skills
- PR #514: Adds `document-typography` skill for controlling typographic quality in AI-generated documents. [https://github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)
- PR #486: Introduces an ODT skill for creating, filling templates, and parsing `.odt` files to HTML. [https://github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)
- PR #335: Adds `masonry-generate-image-and-videos` skill for AI-powered image and video generation. [https://github.com/anthropics/skills/pull/335](https://github.com/anthropics/skills/pull/335)
- PR #83: Incorporates `skill-quality-analyzer` and `skill-security-analyzer` into the marketplace. [https://github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)
- PR #154: Introduces `shodh-memory` skill for persistent context and memory across AI agent conversations. [https://github.com/anthropics/skills/pull/154](https://github.com/anthropics/skills/pull/154)

### TL;DR
The community's top ask is for robust infrastructure enabling seamless skill development, discoverability, and reliable execution, with a focus on security and quality assurance.

---

### Highlights
- **Major Security/Bug Reports:** Several critical issues surfaced, including `.env` file exposure to the bash environment, frequent directory tracking loss, and unauthorized commits.
- **Context Window & Memory Enhancements:** Feature requests focus on better context management, including file-backed summaries and selective restoration, as well as exposing context usage to hooks.
- **Permissions & Tooling Issues:** Persistent problems with bash command permission matching, tool errors, and agent execution safety continue to be reported.

### Releases
(No releases in the past 24 hours)

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
#401 | [BUG] Claude loads my projects .env into its bash environment (!) | 58 | 54 | Critical security risk: sensitive env vars exposed to CLI. |
#3471 | [BUG] Too many edit file errors | 51 | 34 | Frequent file edit failures hinder workflow and productivity. |
#1669 | [BUG] Claude Code frequently loses track of which directory it is in | 41 | 70 | Directory confusion leads to errors and dangerous execution. |
#17428 | [Feature Request] Enhanced /compact with file-backed summaries and selective restoration | 38 | 83 | Improved memory handling and context management for complex projects. |
#5513 | Feature Request: Add /reloadSettings command to reload configuration without restart | 19 | 79 | Streamlines configuration updates without disruptive restarts. |
#2254 | Disable the welcome banner | 16 | 56 | User preference for a cleaner, less intrusive terminal experience. |
#16561 | Feature: Parse compound Bash commands and match each component against permissions | 15 | 80 | Enhances security by granularly evaluating complex shell commands. |
#33403 | [BUG] slash command /btw shown in tips but returns 'Unknown skill' when feature flag isn't enabled. | 7 | 0 | Inconsistent command availability leads to user confusion. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
#34545 | fix: cap task .output file size and delete on cleanup | OPEN | Prevents massive output files and cleans them up. |
#34168 | feat(plugins): Sessions plugin for listing and deleting sessions | OPEN | Adds essential session management commands. |
#34399 | Claude/ai fitness optimization a t7jd | OPEN | Potential AI model performance improvements. |
#34516 | Add two professional client websites: Remontti Työrönkainen and LVI Kruunu | CLOSED | Adds example client website projects. |

### Trends
- [pain] Security vulnerabilities: `.env` exposure, unauthorized commits, and unsafe shell execution by agents.
- [pain] Agent reliability: Frequent directory tracking loss, edit file errors, and failure to halt runaway agents.
- [feature] Context window and memory management: Requests for file-backed summaries and exposing context usage to hooks.
- [pain] Permissions and command handling: Issues with bash glob matching and compound command evaluation.
- [pain] Skill discovery and execution: `.claude/skills` not being discovered and inconsistencies with command availability.
- [feature] Configuration and workflow enhancement: `/reloadSettings` command and portable project memory across devices.
- [pain] System stability: Reports of excessive memory usage and process spawning causing DoS.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Continued heavy focus on TUI improvements, including routing session lifecycles through the app-server and adding ephemeral threads.
- Addressing persistent issues with rate limits and token usage, particularly for business/team accounts.
- Enhancements for macOS Intel support and refactoring of app-server interactions are underway.

### Releases
- rust-v0.115.0-alpha.24: 0.115.0-alpha.24

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #10410 | [enhancement, app] Codex Desktop App: macOS Intel (x86_64) support | 123 | 166 | Crucial for broader macOS adoption and accessibility. |
| #14593 | [bug, extension, rate-limits] Still burning tokens very fast with today's VS Code extension update | 47 | 22 | Impacts cost and user experience for paid accounts. |
| #8745 | [enhancement, CLI, agent] LSP integration (auto-detect + auto-install) for Codex CLI | 35 | 176 | Improves developer workflow and intelligence in CLI. |
| #11325 | [enhancement, app] [Codex App] Manual /compact command | 33 | 60 | Adds manual control parity with CLI version. |
| #12661 | [bug, windows-os, extension] Markdown file:// links open in default browser (Edge) instead of VS Code editor | 23 | 25 | Hinders seamless navigation within VS Code. |
| #5237 | [bug, sandbox] Codex reads files outside working directory without my permission | 22 | 16 | Security concern regarding unauthorized file access. |
| #3557 | [bug, tool-calls] Codex CLI timeout because of sandboxed environment | 17 | 5 | Limits CLI utility for certain execution contexts. |
| #3550 | [enhancement, extension] Scope Codex chats to VS Code projects/workspaces | 14 | 42 | Enhances organization and context management in VS Code. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #14733 | Show turn-context diffs when backtracking | OPEN | Visualizes historical session state changes in TUI. |
| #14727 | Use managed config for guardian prompt overrides | OPEN | Allows centralized configuration of guardian prompts. |
| #14668 | Reuse guardian session across approvals | OPEN | Optimizes guardian review performance by reusing sessions. |
| #14717 | Move TUI on top of app server (parallel code) | OPEN | Creates a parallel TUI implementation using the app server. |
| #14506 | tui: add ephemeral /btw side-question threads | OPEN | Introduces isolated side-question threads in TUI. |
| #14170 | queue slash commands in tui | OPEN | Enables queuing of slash commands in TUI instead of failing. |
| #13861 | register experimental app-server enum variants | CLOSED | Registers experimental enum variants for the app server. |
| #14710 | Move TUI on top of app server (in place) | OPEN | Refactors TUI to run on top of the app server. |

### Trends
- [enhancement] macOS Intel (x86_64) support for the Desktop App remains a high priority.
- [pain] Token burn rate and rate-limit exclusions for team/business accounts are ongoing issues.
- [enhancement] LSP integration for Codex CLI is a key feature request for improved developer experience.
- [pain] Sandboxing issues causing timeouts and unexpected file access persist.
- [enhancement] TUI enhancements for controlling command folding, queuing commands, and ephemeral threads are actively being developed.
- [pain] File link handling in VS Code extension and unexpected file access are recurring bugs.
- [enhancement] Scoping chats to VS Code projects is desired for better organization.
- [pain] Issues with MCP server connections and authentication continue to be reported.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- Copilot auth issues are rapidly consuming premium requests, demanding urgent attention.
- Severe memory leaks and kernel panics on macOS are impacting system stability.
- Multiple critical bugs surfaced post-update (v1.2.25), including SSE timeouts and TUI crashes.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #8030 | [OPEN] Copilot auth now sets far too many requests as "user" consuming premium requests rapidly | 183 | 62 | Devs losing premium quota due to incorrect Copilot request attribution. |
| #12687 | [OPEN] [bug, perf] [BUG/PERF] Severe Memory Leak and Disk Swell leading to System Kernel Panic (macOS) | 41 | 0 | Critical stability issues on macOS impacting user productivity. |
| #3472 | [OPEN] [bug] Context awareness | 28 | 17 | User confusion regarding advertised "context awareness" feature. |
| #17318 | [OPEN] [bug, core] Error： SSE read timed out | 24 | 15 | Prevents file writing, blocking core development workflows. |
| #9836 | [OPEN] [opentui, discussion] [FEATURE]: Allow to Shift + enter to edit in next line without enter | 17 | 16 | Improves multi-line message composition UX in TUI. |
| #4804 | [CLOSED] [bug, opentui, perf] High CPU usage | 16 | 4 | Persistent high CPU consumption on macOS affects system performance. |
| #16129 | [OPEN] [core] What is the specific context size of Github Copilot, is it only 128K? | 14 | 0 | User seeks clarity on model capabilities for purchasing decisions. |
| #6527 | [OPEN] [CRITICAL Security Issue/Bug] Plan mode restrictions bypassed when spawning sub-agents | 12 | 5 | Security flaw allowing unauthorized file modifications. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #17587 | fix(app): reflect configured reasoning effort in web ui | OPEN | Ensures web UI accurately shows configured reasoning settings. |
| #13854 | fix(tui): stop streaming markdown/code after message completes | OPEN | Fixes TUI table rendering for completed messages. |
| #17585 | fix(opencode): update isLocal function to recognize pre-release versions and prevents update expect its from dev | OPEN | Prevents incorrect plugin updates for local development versions. |
| #17571 | Feat/beam rag | CLOSED | Improves RAG module structure and adds experimental data. |
| #17577 | feat(opencode): add model override for task tool subagents | OPEN | Allows overriding model for subagents called by the task tool. |
| #17214 | fix(desktop): remote server switching | OPEN | Fixes provider tree rebuild issue when switching servers. |
| #17565 | fix: filter empty message content for all providers to prevent LiteLLM proxy sanitization artifact | CLOSED | Prevents unwanted messages from LiteLLM proxy sanitization. |
| #17579 | fix(opencode): ignore whitespace-only prompts | OPEN | Prevents sessions breaking from whitespace-only prompts. |

### Trends
- [pain] Copilot auth incorrectly attributing requests is costing users premium quota.
- [pain] Significant performance and stability issues on macOS (memory leaks, kernel panics, high CPU).
- [pain] Post-update bugs (v1.2.25) causing SSE timeouts and TUI crashes are critical blockers.
- [feature] Enhancements for TUI usability, including smarter keybindings and commands like `/edit`.
- [feature] Improved sub-agent control, allowing model overrides and better context caching for specific providers.
- [pain] Inconsistent context awareness and LLM context size understanding cause user confusion.
- [pain] Rate limit and error handling needs improvement, especially for sub-agents in the TUI.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*