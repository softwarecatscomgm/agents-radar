# AI CLI Tools Community Digest 2026-03-13

> Generated: 2026-03-13 11:33 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI tool landscape is dynamic, with distinct approaches to integrating LLM capabilities into developer workflows. While Claude Code and OpenAI Codex grapple with core stability and performance issues, OpenCode showcases a focus on broader model support and enhanced user experience features.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 8 | 8 | 0 | 🟡 steady |
| OpenAI Codex | 8 | 8 | 7 | 🟢 rapid |
| OpenCode | 8 | 8 | 1 | 🟡 steady |

### Shared Directions
- Improved TUI stability and responsiveness across various terminals and OS. (Claude Code, OpenAI Codex, OpenCode)
- Enhanced context management and memory persistence for longer, more complex tasks. (Claude Code, OpenAI Codex)
- Platform-specific bug fixes and feature parity, particularly for Windows and macOS. (Claude Code, OpenAI Codex, OpenCode)
- Streamlined OAuth and multi-account management for professional users. (OpenCode)
- Integration robustness with external tools and IDEs. (Claude Code, OpenCode)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Extending capabilities via plugins; core stability | Developers needing broad AI assistance | Plugin-centric, feature acquisition |
| OpenAI Codex | Advanced agent capabilities; IDE integration | Power users demanding sophisticated automation | Agent-focused, deep IDE integration |
| OpenCode | Broad model support; UI polish | Developers with diverse model needs | Model-agnostic, UX refinement |

### Trend Signals
- Growing demand for robust, reliable TUI experiences in command-line AI tools.
- Persistent challenges with LLM context window limitations and memory management.
- Increasing importance of cross-platform compatibility and native desktop app features.
- High user interest in advanced agentic behaviors and complex task orchestration.
- User frustration with performance bottlenecks, hanging, and unresponsiveness.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| #514 | document-typography | N/A | OPEN | Improves typographic quality control for AI-generated documents by preventing common layout issues. |
| #83 | skill-quality-analyzer and skill-security-analyzer | N/A | OPEN | Meta skills for analyzing Claude Skill quality and security across multiple dimensions. |
| #335 | masonry-generate-image-and-videos | N/A | OPEN | Enables AI-powered image and video generation via the Masonry CLI. |
| #210 | frontend-design | N/A | OPEN | Enhances frontend design skill clarity and actionability for direct Claude execution. |
| #154 | shodh-memory | N/A | OPEN | Provides persistent context and memory for AI agents across conversations. |
| #486 | ODT skill | N/A | OPEN | Facilitates OpenDocument text creation, template filling, and ODT to HTML parsing. |

### Demand Trends
- Enhancing AI agent system safety with governance patterns and trust scoring.
- Broadening skill utility to include complex document formats like ODT.
- Improving the developer experience for skill creation and maintenance.
- Integrating Claude with essential productivity suites like Google Workspace.
- Developing robust mechanisms for managing and auditing codebases.

### Pending Skills
- **#514 document-typography** [OPEN](https://github.com/anthropics/skills/pull/514): Prevents typographic problems like orphan words and widow paragraphs in AI documents.
- **#83 skill-quality-analyzer and skill-security-analyzer** [OPEN](https://github.com/anthropics/skills/pull/83): Adds meta skills for comprehensive quality and security analysis of Claude Skills.
- **#335 masonry-generate-image-and-videos** [OPEN](https://github.com/anthropics/skills/pull/335): Introduces a skill for AI-powered image and video generation.
- **#154 shodh-memory** [OPEN](https://github.com/anthropics/skills/pull/154): Adds persistent context/memory for AI agents across conversations.
- **#486 ODT skill** [OPEN](https://github.com/anthropics/skills/pull/486): Enables creation, template filling, and parsing of OpenDocument text files.

### TL;DR
The community is focused on improving the reliability, security, and direct usability of AI-generated content and code through enhanced skills.

---

### Highlights
- Significant bug activity on Windows and macOS, particularly concerning TUI and IDE integrations.
- Several new plugins and feature requests indicate ongoing development in extending Claude's capabilities and memory management.
- Multiple issues highlight user frustration with performance, hanging, and unresponsiveness.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#769](https://github.com/anthropics/claude-code/issues/769) | [BUG] In-progress Call causes Screen Flickering | 284 | 280 | Major TUI bug impacting usability and visual experience. |
| [#6836](https://github.com/anthropics/claude-code/issues/6836) | [Meta] tool_use/tool_result block mismatch causing bad conversation state (150+ reports) | 42 | 20 | Widespread core issue corrupting conversation state. |
| [#28951](https://github.com/anthropics/claude-code/issues/28951) | [BUG] Remote control (/rc) not supported in VS Code extension | 37 | 23 | Essential IDE functionality missing for VS Code users. |
| [#26224](https://github.com/anthropics/claude-code/issues/26224) | [BUG] [URGENT!!!] Claude Code is hanging / freezing / stuck on heaps of prompts for 5-20minutes or more. | 33 | 38 | Critical performance issue causing extreme delays and unresponsiveness. |
| [#8660](https://github.com/anthropics/claude-code/issues/8660) | [BUG] Edit preview/diff not showing in VSCode extension UI when confirming changes | 31 | 50 | VS Code bug hindering confirmation of code changes. |
| [#20171](https://github.com/anthropics/claude-code/issues/20171) | [BUG] Phantom 'Generating...' state - UI stuck after task completion, 0 tokens consumed | 18 | 12 | UI bug where Claude appears to work but is unresponsive. |
| [#28590](https://github.com/anthropics/claude-code/issues/28590) | [BUG] Tried to Download Claude Desktop for the first time in OS Tahoe 26.3 and keep getting Failure to Launch error message | 14 | 0 | Critical desktop app launch failure on a specific OS version. |
| [#27298](https://github.com/anthropics/claude-code/issues/27298) | Feature Request: Layered memory system for persistent cross-session context | 14 | 1 | Enhancing session memory is crucial for real-world productivity. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#33918](https://github.com/anthropics/claude-code/pull/33918) | feat: add voice-mode plugin with /voice command | OPEN | Enables `/voice` command for voice mode functionality. |
| [#33809](https://github.com/anthropics/claude-code/pull/33809) | feat: add deny-with-reason plugin | OPEN | Allows denying tool calls with configurable reasons. |
| [#33710](https://github.com/anthropics/claude-code/pull/33710) | Add complete town simulator game with entities, systems, and rendering | OPEN | Integrates a complex town simulator game. |
| [#23348](https://github.com/anthropics/claude-code/pull/23348) | feat(plugin): Add windows-null-redirect-fix plugin to prevent null file creation | OPEN | Fixes issue with unintended 'nul' file creation on Windows. |
| [#30596](https://github.com/anthropics/claude-code/pull/30596) | docs: add CLAUDE.md with codebase structure and conventions | CLOSED | Documents codebase structure, conventions, and dev setup. |
| [#16215](https://github.com/anthropics/claude-code/pull/16215) | fix(docs): fix broken CONTRIBUTING and LICENSE links in plugin docs | CLOSED | Corrects broken documentation links for plugins. |
| [#32890](https://github.com/anthropics/claude-code/pull/32890) | fix: Update stale Task tool references to Agent tool in plugin docs | OPEN | Updates documentation to reflect the Agent tool name change. |
| [#31087](https://github.com/anthropics/claude-code/pull/31087) | [BUG] CLI started in VS Code integrated terminal opens 3 blank VS Code windows (Windows) | CLOSED | Fixes odd behavior of multiple window openings from VS Code terminal. |

### Trends
- [pain] Frequent reports of Claude Code freezing, hanging, and becoming unresponsive are a major concern.
- [pain] UI glitches like screen flickering and phantom "generating" states disrupt user experience.
- [pain] Issues with VS Code integration, especially around rendering and window management, are recurring.
- [feature] Strong interest in enhancing memory and context management for longer, more productive sessions.
- [feature] Ongoing development of new plugins to extend Claude's functionality and integrate external tools.
- [pain] Performance issues related to API streaming and token handling need immediate attention.
- [feature] Requests for improved desktop application features like multi-window support are emerging.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Critical bug #14048 regarding Codex CLI hanging indefinitely on all prompts has been closed after extensive user reports.
- Significant development in agent capabilities with PRs focusing on smart approvals, subagent delivery, and watchdog runtimes.
- Several issues highlight ongoing "thinking" or responsiveness problems across different platforms and IDEs.

### Releases
- `rust-v0.115.0-alpha.18` 0.115.0-alpha.18
- `rust-v0.115.0-alpha.17` 0.115.0-alpha.17
- `rust-v0.115.0-alpha.16` 0.115.0-alpha.16
- `rust-v0.115.0-alpha.15` 0.115.0-alpha.15
- `rust-v0.115.0-alpha.14` 0.115.0-alpha.14
- `rust-v0.115.0-alpha.13` 0.115.0-alpha.13
- `rust-v0.115.0-alpha.12` 0.115.0-alpha.12

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #14048 | [CLOSED] All models — Codex CLI hangs indefinitely on all prompts, no response generated | 128 | 77 | Critical CLI issue impacting all models resolved. |
| #10410 | [OPEN] Codex Desktop App: macOS Intel (x86_64) support | 116 | 153 | High demand for macOS Intel support in the desktop app. |
| #5957 | [OPEN] Auto compaction causes GPT-5-Codex to lose the plot. It forgets it is mid-task, forgets it has edited files and stops. | 24 | 8 | Core functionality issue affecting complex tasks. |
| #12161 | [OPEN] Codex IDE keeps getting stuck on "Thinking" | 23 | 13 | Widespread responsiveness issue across IDEs. |
| #14331 | [OPEN] The GPT-5.3-Codex model does NOT WORK in PAID ACCOUNT | 19 | 2 | Critical bug preventing paid users from accessing a key model. |
| #2926 | [CLOSED] Allow customizing the status line | 16 | 55 | User request for improved UI customization. |
| #11734 | [CLOSED] gpt-5-3-codex model not available anymore in list | 15 | 0 | Model availability issue impacting user workflows. |
| #13747 | [CLOSED] Codex App bundles codex-cli 0.108.0-alpha.12 and fails on macOS, while standalone codex-cli 0.105.0 works on the same machine | 14 | 0 | Platform-specific bundling issue causing app failure. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #13860 | add smart approvals to app-server and tui | OPEN | Adds runtime controls for automated and manual smart approvals. |
| #13465 | Standardize context fragment handling | OPEN | Unifies context injection around typed fragments and envelopes. |
| #14170 | queue slash commands in tui | OPEN | Allows slash commands to be queued instead of failing during turns. |
| #14506 | tui: add ephemeral /btw side-question threads | OPEN | Implements `/btw` command for isolated, temporary side-question threads. |
| #14563 | core: preserve compaction tail writes and cap retry loop | OPEN | Fixes compaction race conditions and prevents infinite retry loops. |
| #13455 | Add turn-scoped ephemeral context | OPEN | Introduces turn-scoped ephemeral context via app-server parameter. |
| #14434 | generate an internal json schema for `RolloutLine` | OPEN | Creates JSON schema for analyzing Codex rollout logs. |
| #14568 | fix: support split carveouts in windows elevated sandbox | OPEN | Fixes Windows sandbox to support split filesystem policies. |

### Trends
- [pain] Repeated issues with the Codex IDE/App getting stuck on "Thinking" or failing to respond.
- [pain] Context management and auto-compaction are causing data loss, task drift, and infinite loops.
- [feature] Significant development in agent functionality, including smart approvals, subagents, and watchdogs.
- [pain] Several platform-specific bugs reported for Windows and macOS, particularly with the desktop app and sandboxing.
- [feature] Enhancements to the TUI, including queuing slash commands and new ephemeral thread types.
- [pain] Model availability and access issues are impacting users, especially with paid accounts.
- [pain] Authentication and login flows are experiencing bugs on Windows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- v1.2.25 released, supporting non-OpenAI Azure models and improving type safety.
- Significant discussion around TUI stability in tmux and macOS, with a fix released in v1.2.25.
- Ongoing focus on improving OAuth handling and multi-account support.

### Releases
- v1.2.25: Support non-OpenAI Azure models, internal signatures, type safety, and removed external sourcemaps.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #4283 | [OPEN] [bug, opentui] Copy To Clipboard is not working | 67 | 51 | Core functionality for sharing code snippets is broken. |
| #4340 | [CLOSED] [discussion, windows] [FEATURE]: Add Windows arm64 support | 30 | 23 | Expanding platform compatibility for Windows users. |
| #16351 | [CLOSED] [bug, opentui] TUI broken in tmux after 1.2.17 (found root cause) | 22 | 13 | TUI instability impacts users in a common development environment. |
| #8417 | [OPEN] [bug] Gemini Bad Request with Github Copilot | 19 | 5 | Integration issue impacting Gemini model usage with Copilot. |
| #11830 | [OPEN] feat: Multi-Account OAuth Support with Auto-Relogin | 15 | 9 | Essential for power users managing multiple accounts. |
| #16331 | [OPEN] [bug, core] Permissions ignored | 14 | 3 | Security and configuration issues with file access permissions. |
| #9674 | [OPEN] [bug, windows] The `<tool_call>` tag cannot be rendered correctly, results in the conversation being interrupted and failing to proceed automatically | 13 | 7 | Tool integration breaks conversational flow. |
| #15092 | [OPEN] [bug, core] Minimax M2.5 experience is weird | 12 | 0 | Unexplained behavior with a specific model. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #17331 | feat(opencode): require session ids for tool definitions | OPEN | Enhances tool definitions to include session context. |
| #13854 | fix(tui): stop streaming markdown/code after message completes | OPEN | Fixes TUI to stop streaming for completed messages. |
| #12594 | fix: re-enable TodoReadTool with shared rendering logic | OPEN | Restores `TodoReadTool` functionality. |
| #17034 | fix(tui): correct pasted preview replacement for CJK and multi-width characters | OPEN | Improves TUI preview handling for international characters. |
| #17329 | perf(app): use cursor session history loading | CLOSED | Optimizes desktop session history loading. |
| #17216 | [contributor, Vouched] Remove prompt mode toggle | CLOSED | Simplifies UI by removing redundant toggle. |
| #14468 | feat(opencode): add LiteLLM provider with auto model discovery | OPEN | Adds LiteLLM support with automatic model discovery. |
| #17327 | [contributor, Vouched] tui: open Status in sidebar modal | OPEN | Improves accessibility of the Status panel. |

### Trends
- [pain] TUI stability and rendering issues across different environments (tmux, macOS).
- [pain] Clipboard copy functionality regressions in the TUI.
- [feature] Enhanced OAuth support, including multi-account and auto-relogin.
- [pain] Intermittent bugs with specific model integrations (Gemini, Minimax M2.5).
- [feature] Requests for better project and session management commands.
- [pain] Platform-specific issues on Windows (ARM64 support) and general platform stability.
- [pain] Performance and timeout issues with larger local models.
- [pain] Permissions and tool usage issues impacting core functionality.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*