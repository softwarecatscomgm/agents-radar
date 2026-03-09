# AI CLI Tools Community Digest 2026-03-09

> Generated: 2026-03-09 11:36 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI landscape shows a dynamic mix of focus on core functionality, plugin expansion, and user experience improvements. While Claude Code and OpenCode grapple with platform-specific bugs and resource management, OpenAI Codex emphasizes stability and broader application integration.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | High (75) | High (8) | None | 🟢 rapid |
| OpenAI Codex | High (70) | High (8) | 3 | 🟡 steady |
| OpenCode | Medium (51) | High (8) | 1 | 🟡 steady |

### Shared Directions
- **Platform Stability:** Addressing bugs and performance issues across Windows, macOS, and Linux (Claude Code, OpenAI Codex, OpenCode).
- **Enhanced TUI/CLI Usability:** Improving interactive elements, command execution, and input/output handling (Claude Code, OpenAI Codex, OpenCode).
- **Plugin Ecosystem Growth:** Integrating new tools and expanding functionality through plugins/extensions (Claude Code, OpenAI Codex).
- **Model Integration & Context:** Supporting larger context windows and new model versions (Claude Code, OpenAI Codex, OpenCode).
- **Credential & Permission Management:** Refining how tools handle API keys, permissions, and server access (Claude Code, OpenCode).

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Cowork & Plugins | Developers, Researchers | Active feature development, community contributions. |
| OpenAI Codex | Desktop App & Extensions | General Users, Developers | Broad platform support, stability focus. |
| OpenCode | Core CLI & MCP | Developers, Teams | Resource optimization, MCP integration. |

### Trend Signals
- Increasing demand for cross-platform consistency and robust error handling.
- Significant user interest in intuitive voice/dictation input methods.
- Growing need for granular control over tool and model configurations.
- Focus on reducing memory footprint and improving long-term stability.
- Community-driven plugin development becoming a key differentiator.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 514 | document-typography | undefined | OPEN | Controls typographic quality in AI-generated documents (orphans, widows, alignment). |
| 486 | ODT skill | undefined | OPEN | Creates, fills templates, and parses OpenDocument Text files to HTML. |
| 522 | plan-task skill | undefined | OPEN | Persists AI plans and task progress across sessions via Markdown files. |
| 521 | record-knowledge skill | undefined | OPEN | Remembers and shares AI knowledge across sessions using tagged Markdown entries. |
| 181 | SAP-RPT-1-OSS predictor skill | undefined | OPEN | Predicts on SAP business data using SAP's open-source tabular foundation model. |
| 210 | frontend-design skill | undefined | OPEN | Improves clarity and actionability for front-end design instructions in AI. |

### Demand Trends
- Enhanced AI agent safety and governance patterns (e.g., policy enforcement, trust scoring).
- Standardized skill integration and exposure mechanisms (e.g., MCPs).
- Improved documentation and community contribution guidelines for the skills repository.
- Robust error handling and stability for skill management APIs.
- Streamlined development workflows for creating and testing new skills.

### Pending Skills
- [Add document-typography skill](https://github.com/anthropics/skills/pull/514): Controls typographic quality in AI-generated documents (orphans, widows, alignment).
- [Add ODT skill — OpenDocument text creation and template filling and parse ODT to HTML](https://github.com/anthropics/skills/pull/486): Creates, fills templates, and parses OpenDocument Text files to HTML.
- [Add plan-task skill](https://github.com/anthropics/skills/pull/522): Persists AI plans and task progress across sessions via Markdown files.
- [Add record-knowledge skill](https://github.com/anthropics/skills/pull/521): Remembers and shares AI knowledge across sessions using tagged Markdown entries.
- [Add frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210): Improves clarity and actionability for front-end design instructions in AI.

### TL;DR
The community is focused on stability, enhanced functionality for persistent AI memory and planning, and critical documentation improvements for both users and contributors.

---

### Highlights
- Active development focus on `Cowork` functionality, with multiple related bug reports.
- Significant user interest in MCP Tool Filtering and improved permission handling features.
- Several new plugin contributions and documentation clarifications merged or proposed.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| [#24918](https://github.com/anthropics/claude-code/issues/24918) | [CLOSED] [BUG] Cowork Windows - Cannot connect to Claude API from workspace (Windows 11 Home) | 99 | 51 | Critical Windows connectivity issue impacting API access for users. |
| [#7328](https://github.com/anthropics/claude-code/issues/7328) | [OPEN] [FEATURE] MCP Tool Filtering: Allow Selective Enable/Disable of Individual Tools from Servers | 84 | 222 | High demand for granular control over server tools. |
| [#24964](https://github.com/anthropics/claude-code/issues/24964) | [OPEN] [BUG] Cowork: Folder picker rejects folders outside home directory, symlinks/junctions also blocked | 79 | 91 | Prevents use of essential development folders on Windows/macOS. |
| [#9258](https://github.com/anthropics/claude-code/issues/9258) | [OPEN] [BUG] History Sessions lost in Vscode plugin | 31 | 28 | Data loss concern affecting VS Code users. |
| [#29583](https://github.com/anthropics/claude-code/issues/29583) | [OPEN] [BUG] Cowork: Cannot use folders outside home directory on Windows (secondary drive) | 31 | 18 | Further Windows user restriction for Cowork folders. |
| [#15897](https://github.com/anthropics/claude-code/issues/15897) | [OPEN] [BUG] updatedInput PreToolUse response does not work when multiple PreToolUse hooks are executed | 10 | 2 | Affects advanced tool usage with multiple hooks. |
| [#28158](https://github.com/anthropics/claude-code/issues/28158) | [OPEN] [BUG] CLAUDE.md Instructions Systematically Ignored / Suspected Model Substitution - Opus 4.6 | 5 | 5 | Potential model behavior deviation impacting prompt adherence. |
| [#31904](https://github.com/anthropics/claude-code/issues/31904) | [OPEN] [BUG] Shift+Enter no longer inserts backslash \ for multiline input in VS Code terminal | 4 | 1 | Input formatting issue in VS Code terminal. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| [#32430](https://github.com/anthropics/claude-code/pull/32430) | Clarify plugin examples versus built-ins | OPEN | Explains plugin examples and their relation to built-in features. |
| [#32142](https://github.com/anthropics/claude-code/pull/32142) | Add usage transparency plugin for quota troubleshooting | OPEN | Helps users diagnose quota and access issues. |
| [#32408](https://github.com/anthropics/claude-code/pull/32408) | Add Paper Writing Plugin with guided academic argument development | OPEN | Introduces a structured plugin for academic writing assistance. |
| [#31543](https://github.com/anthropics/claude-code/pull/31543) | docs: clarify that piped commands need separate permission entries | OPEN | Improves documentation on command permissions for piped/chained commands. |
| [#32278](https://github.com/anthropics/claude-code/pull/32278) | Add i18n-spinner-tips plugin: bilingual dev tips in 8 languages | OPEN | Provides development tips in multiple languages during Claude's thinking time. |
| [#32250](https://github.com/anthropics/claude-code/pull/32250) | feat(feature-dev): add iterative PR workflow to implementation phase | OPEN | Reframes implementation into iterative stages with PRs. |
| [#32136](https://github.com/anthropics/claude-code/pull/32136) | Add BrewLab concept document for specialty coffee brewing app | OPEN | Documents the concept for a coffee brewing application. |
| [#28908](https://github.com/anthropics/claude-code/issues/28908) | CLOSED [duplicate] Auto-compaction spawns unbounded parallel subagents, ignores SUBAGENT_MODEL setting | CLOSED | Spawning issue with auto-compaction impacting subagent settings. |

### Trends
- [bug] Recurring issues with Cowork folder handling on Windows and macOS.
- [pain] Users experiencing API connection failures, particularly on Windows.
- [feature] Strong interest in enhancing tool management and permissions.
- [bug] Problems with VS Code integration, including session loss and input issues.
- [feature] Demand for better introspection into agent behavior and token usage.
- [bug] Agent behavior inconsistencies, such as ignoring instructions or refusing shell access.
- [feature] Ongoing contributions and requests for new plugins and enhanced workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Added `@plugin` mentions for direct plugin referencing in chat, enhancing context inclusion.
- New model-selection surfaced in TUI picker flow for updated model catalog changes.
- Significant focus on stabilizing flaky tests across various components of the project.

### Releases
- rust-v0.113.0-alpha.1: 0.113.0-alpha.1
- rust-v0.112.0: Added `@plugin` mentions and updated model-selection surface in TUI picker.
- rust-v0.112.0-alpha.13: 0.112.0-alpha.13

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| https://github.com/openai/codex/issues/10410 | [enhancement, app] Codex Desktop App: macOS Intel (x86_64) support | 109 | 136 | User demand for broader macOS hardware compatibility for the desktop app. |
| https://github.com/openai/codex/issues/14048 | [bug, windows-os, CLI] GPT-5.4 high — Codex CLI hangs indefinitely on all prompts, no response generated | 51 | 24 | Critical CLI issue impacting core functionality and Gpt-5.4 model. |
| https://github.com/openai/codex/issues/11325 | [enhancement, app] [Codex App] Manual /compact command | 29 | 38 | User request for essential functionality parity between CLI and Desktop App. |
| https://github.com/openai/codex/issues/3000 | [enhancement, extension, TUI] Voice dictation / microphone input | 24 | 79 | High demand for intuitive voice input features in the UI. |
| https://github.com/openai/codex/issues/12161 | [bug, windows-os, extension] Codex IDE keeps getting stuck on "Thinking" | 20 | 7 | Recurring "thinking" state bug affecting IDE extension users. |
| https://github.com/openai/codex/issues/9046 | [bug, context] Codex ran out of room in the model's context window. Start a new thread or clear earlier history before retrying. | 14 | 0 | Core context management issue impacting chat reliability. |
| https://github.com/openai/codex/issues/12836 | [bug, TUI] Error using /copy | 13 | 0 | CLIPBOARD interaction failure in TUI environment. |
| https://github.com/openai/codex/issues/10428 | [enhancement, app] Support adding custom editors in "Open In" menu | 9 | 19 | User desire for extendable application integration in the app. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| https://github.com/openai/codex/pull/14060 | Stabilize resumed rollout messages | OPEN | Improves reliability of tests for resumed rollouts. |
| https://github.com/openai/codex/pull/13593 | Stabilize flaky tests | OPEN | Aims to fix root causes of flaky tests without masking issues. |
| https://github.com/openai/codex/pull/14013 | Stabilize pipe process stdin round-trip test | OPEN | Enhances stability and cross-platform compatibility of pipe testing. |
| https://github.com/openai/codex/pull/12640 | Update models.json | OPEN | Automates updates to the project's models configuration file. |
| https://github.com/openai/codex/pull/14061 | Stabilize unicode shell command test | OPEN | Fixes flakiness in tests involving unicode shell command execution. |
| https://github.com/openai/codex/pull/14058 | Stabilize plan item app-server tests | OPEN | Improves stability of tests for app-server plan item functionality. |
| https://github.com/openai/codex/pull/14052 | Stabilize app list update ordering test | CLOSED | Addresses flakiness in app list update ordering tests. |
| https://github.com/openai/codex/pull/14012 | fix(core): update active item logic for interleaved streamed items | OPEN | Fixes bug in core streaming for interleaved response items. |

### Trends
- [pain] Recurring "stuck in thinking" state across CLI, IDE extensions, and desktop apps.
- [feature] Increased requests for enhanced TUI controls and user interaction methods.
- [pain] Issues with GPT-5.4 model stability and specific command execution.
- [feature] User demand for macOS Intel support in the desktop application.
- [feature] Desire for more flexible plugin integration and contextual awareness.
- [pain] Clipboard interaction failures and general TUI usability issues.
- [feature] Interest in alternative installation methods for the Windows app.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- New release v1.2.22 addresses TUI core issues and database path tests.
- Several critical bugs related to memory leaks and TUI functionality are being actively worked on.
- Feature requests for enhanced OAuth MCP integration and improved large token support highlight user needs.

### Releases
- v1.2.22: Core fixes and improvements for TUI and database handling.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #988 | [CLOSED] Feature request: add MCP remote using oauth | 33 | 78 | Simplifies and secures MCP server setup via OAuth. |
| #12338 | [OPEN] [bug, zen] 1M tokens for Opus 4.6 | 23 | 24 | Issue with exceeding 200k token limit for Opus 4.6. |
| #13984 | [OPEN] [bug, core] can not copy and paste in opencode CLI | 16 | 3 | Users unable to copy/paste in CLI, despite visual indication. |
| #3875 | [CLOSED] [discussion] [FEATURE]: Remote Figma MCP support | 16 | 0 | Request for remote Figma MCP support integration. |
| #5636 | [OPEN] [bug] HTTP 405 on Figma MCP | 16 | 16 | Figma MCP server authentication failing with 405 error. |
| #14273 | [CLOSED] [bug, zen] [bug] Free usage exceeded. Add creddits (when using Zen free models) | 12 | 0 | Error when free Zen models exceeded, despite available balance. |
| #12405 | [OPEN] [bug, windows] Error: Connection reset by server | 9 | 0 | Connection reset errors observed on Windows clients. |
| #16129 | [OPEN] [core] What is the specific context size of Github Copilot, is it only 128K? | 9 | 0 | Question about GitHub Copilot's context size limitations. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #15018 | fix: For non-anthropic providers, combine system prompts (allows Qwen 3.5 to work) | OPEN | Fixes Qwen 3.5 and other providers by combining system prompts. |
| #16737 | [Vouched] feat(app): new composer | OPEN | Introduces a new composer component for the application. |
| #16736 | [needs:title, needs:compliance] Main | OPEN | Placeholder PR for main changes, requires title & compliance. |
| #13854 | fix(tui): stop streaming markdown/code after message completes | OPEN | Prevents TUI from skipping last row by correctly handling streaming. |
| #16730 | fix(opencode): reduce memory usage and database bloat in long-running instances | OPEN | Addresses memory bloat and database growth in persistent instances. |
| #15646 | fix: prevent memory leaks from SSE streams, LSP, Bus, and process cleanup | OPEN | Fixes multiple memory leaks across various subsystems. |
| #16346 | fix(opencode): unbounded memory growth during active usage | OPEN | Resolves memory leaks causing virtual memory increases. |
| #15364 | feat: add Azerbaijani README | OPEN | Adds an Azerbaijani translation for the main README file. |

### Trends
- [feature] OAuth 2.1 integration for MCP remote servers.
- [pain] Persistent memory leaks causing resource consumption.
- [pain] TUI rendering and input issues, especially within tmux.
- [feature] Enhanced large context window support for models like Opus 4.6 and GPT-5.4.
- [pain] Copy/paste functionality broken in the CLI.
- [feature] Request for clearer plan modes with an "Accept and clear" option.
- [pain] Authentication and connection errors with various MCP providers (Figma, OpenAI).

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*