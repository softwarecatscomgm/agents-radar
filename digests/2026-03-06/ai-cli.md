# AI CLI Tools Community Digest 2026-03-06

> Generated: 2026-03-06 11:31 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
AI CLI tools are actively evolving, with a strong focus on core functionality, developer experience, security, and provider integration. Significant effort is being directed towards refining TUI interactions, enhancing security through sandboxing and data sanitization, and ensuring cross-platform stability. Emerging trends point towards better control over AI workflows and more robust API integrations.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 8 | 5 | 1 | 🟡 steady |
| OpenAI Codex | 8 | 9 | 7 | 🟢 rapid |
| OpenCode | 8 | 8 | 3 | 🟡 steady |

### Shared Directions
- Enhanced security and data sanitization for tool usage. (Claude Code, OpenAI Codex)
- Improved TUI and CLI interaction for better user experience. (Claude Code, OpenAI Codex, OpenCode)
- Stability and performance fixes, especially for Windows users. (Claude Code, OpenAI Codex, OpenCode)
- Better control over workflow elements and experimental features. (Claude Code, OpenAI Codex)
- API integration and provider compatibility improvements. (Claude Code, OpenCode)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Developer workflow, tool use | Developers, OSS contributors | Feature-rich client, active community |
| OpenAI Codex | Agent-based execution, memory | Developers, AI engineers | Extensible platform, rapid iteration |
| OpenCode | Cross-platform AI CLI | Developers, OSS users | Stable, secure, feature-complete |

### Trend Signals
- Growing concerns around security and potential malware flags on Windows.
- Increasing demand for advanced feature control and API customization.
- Persistent issues with cross-platform compatibility and specific OS bugs.
- Strong community drive for standardized skill locations and OAuth integration.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 514 | document-typography | 0 | OPEN | Fixes typographic issues like orphans and widows in AI-generated documents. |
| 83 | skill-quality-analyzer / skill-security-analyzer | 0 | OPEN | Analyzes skills for quality and security, evaluating structure, documentation, and security. |
| 210 | frontend-design | 0 | OPEN | Improves clarity and actionability of frontend design instructions for AI. |
| 95 | system-documentation-and-flowcharts | 0 | OPEN | Provides comprehensive system documentation and visual flowcharts for evidence management. |
| 147 | codebase-inventory-audit | 0 | OPEN | Audits codebases to find orphaned code, gaps, and bloat, producing a status report. |
| 181 | SAP-RPT-1-OSS predictor | 0 | OPEN | Uses SAP's open-source tabular model for predictive analytics on SAP business data. |

### Demand Trends
- Improved skill creation and best practices for the `skill-creator`.
- A standardized package manager for AI agents and skills (MCPs).
- Safety and governance patterns for AI agent systems.
- Better integration and usability with external services like AWS Bedrock.
- Enhanced documentation and clarity for existing and new skills.

### Pending Skills
- #514: `document-typography` skill for fixing common typographic errors in documents. [https://github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)
- #83: `skill-quality-analyzer` and `skill-security-analyzer` to be added to the marketplace for evaluating skills. [https://github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)
- #154: `shodh-memory` skill for persistent context and memory across AI agent conversations. [https://github.com/anthropics/skills/pull/154](https://github.com/anthropics/skills/pull/154)
- #509: `CONTRIBUTING.md` to improve community health metrics for the repository. [https://github.com/anthropics/skills/pull/509](https://github.com/anthropics/skills/pull/509)

### TL;DR
The community is prioritizing better documentation, skill analysis, and robust utility skills for diverse applications.

---

### Highlights
- New release v2.1.70 addresses API errors with `ANTHROPIC_BASE_URL` and custom Bedrock inference.
- Active discussions continue on core functionalities like tool usage, permissions, and TUI rendering.
- New plugins and utility PRs are being integrated, including automated issue triage and a `konami` plugin.

### Releases
- v2.1.70: Fixes API 400 errors with `ANTHROPIC_BASE_URL` and custom Bedrock inference.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #10153 | [BUG] Incorrect escaping inside backticks: `!` is escaped as `\!` | 20 | 14 | Core text rendering issue in code blocks. |
| #18653 | [FEATURE] Tool result transform hook for content sanitization | 15 | 15 | Enhances tool security and data handling. |
| #12513 | [BUG] Option to disable automatic worktree creation for solo developers | 13 | 21 | User control over core workflow for individuals. |
| #13456 | [BUG] Claude Code Edit tool fails on files with CRLF line endings | 11 | 4 | Critical bug for Windows users editing specific file types. |
| #25149 | [BUG] Claude Desktop installer falsely detects Windows S Mode | 10 | 8 | Installer issue impacting Windows 10 IoT Enterprise users. |
| #17609 | tmpclaude-*-cwd temporary files are not cleaned up automatically | 8 | 24 | Cleanliness issue impacting project directories. |
| #20861 | [BUG] /context command header shows 0k tokens while breakdown shows ~108k tokens | 7 | 3 | Inaccurate token usage reporting in TUI. |
| #22893 | [BUG] "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1" does not suppress anthropic-beta "advanced-tool-use-2025-11-20" | 5 | 5 | Issue with controlling experimental feature flags. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #28714 | feat: add automated issue triage and weekly digest via Claude API | OPEN | Automates issue triage and generates weekly digests. |
| #31356 | docs: Add comprehensive README for security-guidance plugin | OPEN | Documents the security-guidance plugin comprehensively. |
| #31291 | Add konami plugin | OPEN | Introduces a fun, interactive `konami` code plugin. |
| #31204 | Add AI Learning Roadmap interactive canvas application | OPEN | Adds an interactive canvas app for AI learning paths. |
| #31141 | Improve error handling and output in test-hook.sh | OPEN | Enhances error reporting in test scripts. |

### Trends
- [pain] Persistent issues with text escaping and rendering in specific contexts.
- [feature] Growing need for enhanced security and data sanitization with tool usage.
- [pain] Bugs related to file handling (line endings, temp file cleanup) on Windows.
- [feature] Increasing demand for better control over workflow elements like worktree creation.
- [pain] Community workarounds emerge for broken permission matching system.
- [feature] API integration and provider compatibility issues remain a focus.
- [pain] Inconsistent token reporting and UI rendering bugs in the TUI.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Several alpha releases (0.112.x) were pushed, indicating rapid development.
- Significant user-reported issues include "401 unauthorized" errors, usage dropping quickly, and app performance problems (high CPU, hanging).
- New PRs focus on memory management, sandboxing, feedback logging, and API ID persistence.

### Releases
- rust-v0.112.0-alpha.4: Release 0.112.0-alpha.4
- rust-v0.112.0-alpha.3: Release 0.112.0-alpha.3
- rust-v0.112.0-alpha.2: Release 0.112.0-alpha.2
- rust-v0.112.0-alpha.1: Release 0.112.0-alpha.1
- rust-v0.111.0: Fast mode enabled by default; `js_repl` supports local file imports.
- rust-v0.111.0-alpha.2: Release 0.111.0-alpha.2

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #12764 | [OPEN] [bug, windows-os, CLI] The codex cli giving: 401 unauthorized | 43 | 1 | Widespread authentication failures disrupt CLI usage. |
| #13568 | [OPEN] [bug, rate-limits] Usage dropping too quickly | 36 | 12 | Users report rapid depletion and unexpected credit consumption. |
| #10500 | [OPEN] [bug, app] VS Code Codex: Text prompts rejected after uploading SVG file | 14 | 1 | File uploads cause prompt rejections in VS Code extension. |
| #11981 | [OPEN] [bug, app] Codex app 100% CPU Usage even when only one agent is running | 9 | 0 | App consumes excessive CPU resources, impacting system performance. |
| #11427 | [OPEN] [enhancement, app] Open multiple Terminals in Codex App | 8 | 12 | Users desire the ability to open multiple terminals simultaneously. |
| #13555 | [OPEN] [bug, CLI, regression] Bug: codex fails with "Missing optional dependency @openai/codex-linux-x64" on Ubuntu x86_64 | 7 | 0 | Critical dependency missing on Ubuntu, preventing CLI use. |
| #13328 | [OPEN] [bug, TUI, CLI] the codex no response | 7 | 4 | Responses are blocked or time out, hindering interaction. |
| #13025 | [OPEN] [bug, mcp, app] Codex Desktop ignores project .codex/config.toml MCP server (Serena) and only loads ~/.codex/config.toml | 7 | 4 | Project-specific config is ignored, affecting server setup. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #13734 | feat: prune old memories in DB | OPEN | Optimizes memory usage by cleaning old database entries. |
| #13584 | feat: artifact sandboxing | OPEN | Introduces sandboxing for artifacts to enhance security. |
| #13688 | Add timestamps to feedback log lines | OPEN | Improves debugging by adding timestamps to feedback logs. |
| #13707 | [oai] memories: make prompts branch-aware | OPEN | Enhances memory extraction with branch awareness. |
| #13692 | Add guardian approval MVP | OPEN | Implements an MVP for guardian approval workflows. |
| #13465 | Standardize context fragment handling | OPEN | Unifies context fragment handling for consistency. |
| #13640 | app-server: Add streaming and tty/pty capabilities to `command/exec` | OPEN | Enables streaming and TTY/PTY features for command execution. |
| #13711 | feat: structured plugin parsing | OPEN | Adds structured parsing for plugins and TUI support. |

### Trends
- [pain] Frequent "401 Unauthorized" errors and authentication issues with the CLI.
- [pain] Rapid usage dropping and unexpected credit consumption impacting user plans.
- [pain] Application performance issues: high CPU, unresponsiveness, and hangs.
- [feature] Enhancements for managing multiple terminals and improving TUI/CLI interactions.
- [feature] Work on memory management and database optimization.
- [feature] Improved sandboxing and security features.
- [feature] Plugin system enhancements and marketplace integration.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- Critical fix released in v1.2.20 addresses significant memory leaks from fsmonitor daemons.
- New GPT-5.4 model support added, alongside replacements for Bun-specific APIs with Node.js equivalents for broader compatibility.
- Several security-related issues are being reported, including antivirus alerts and trojan detections on Windows.

### Releases
- v1.2.20: Core memory leak fix, Bun.which replacement, TUI stdin restore.
- v1.2.19: GPT-5.4 added, Bun API replacements, SHA1 hash used.
- v1.2.18: SIGHUP signal handling, TUI onClick handlers, auth login options.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #988 | [CLOSED] Feature request: add MCP remote using oauth | 32 | 77 | Simplifies and secures MCP server installation via OAuth 2.1. |
| #13312 | [OPEN] Codex 5.3 not working with copilot | 24 | 44 | Users report Codex 5.3 is not supported by Copilot plugin. |
| #8204 | [OPEN] [windows] Windows antivirus alert when running OpenCode. | 14 | 2 | Antivirus is flagging OpenCode on Windows. |
| #16314 | [OPEN] [bug, windows] Trojan: Script/Wacatac.H!m! | 14 | 0 | Post-update (1.2.20), OpenCode triggers trojan alerts and won't open. |
| #7074 | [CLOSED] [bug, opentui, windows] [Windows] CTRL_C_EVENT not handled by bun (umbrella issue) | 12 | 0 | Unhandled CTRL_C_EVENT in Windows terminals after Ctrl+C. |
| #10986 | [OPEN] [discussion] [FEATURE]: Support standard skills location at `.agents/skills/` | 12 | 10 | Proposes a standardized directory for agent skills. |
| #7698 | [OPEN] [bug, opentui] Numpad Enter should have the same behavior as the regular Enter | 8 | 3 | Numpad Enter key is not submitting prompts in TUI. |
| #14925 | [OPEN] [bug, windows, core] CrowdStrike Detection: ripgrep Command Flagged as Malware | 7 | 0 | CrowdStrike flags ripgrep executing from OpenCode install directory. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #13854 | fix(tui): stop streaming markdown/code after message completes | OPEN | Fixes incomplete message rendering in TUI by stopping stream on completion. |
| #12594 | fix: re-enable TodoReadTool with shared rendering logic | OPEN | Re-enables `TodoReadTool` and shares rendering logic with other tools. |
| #16315 | fix(mcp): show auth-required status for streamable HTTP 401 | CLOSED | Handles 401/Unauthorized for streamable HTTP with OAuth requirements. |
| #15269 | feat(ui): make edited file references clickable in desktop session UI | OPEN | Makes file references in session output clickable to open files. |
| #14287 | fix(project): repair split project IDs across worktrees | OPEN | Corrects distinct `project.id` values for repos within Git worktrees. |
| #15250 | feat(app): view archived sessions & unarchive | OPEN | Adds functionality to view and unarchive sessions in settings. |
| #15266 | feat(app): changelog with PR links | OPEN | Introduces a Changelog feature in Settings with links to pull requests. |
| #16337 | feat: prompt footer space for plugin to render usage details | OPEN | Adds space in TUI model footer for plugins to display usage details. |

### Trends
- [pain] Multiple reports of antivirus and security software flagging OpenCode or its components on Windows.
- [feature] Continued discussion and requests for enhanced OAuth integration for server connections.
- [pain] Users are experiencing issues with specific AI models not being supported or crashing providers.
- [feature] Interest in standardizing agent skill locations and improving prompt engineering capabilities.
- [pain] Performance issues including memory leaks and high CPU usage are being reported, especially on Windows.
- [feature] Request for improved TUI interactions, such as Numpad Enter functionality and better handling of terminal resize events.
- [pain] Stability issues such as infinite loops and agents stopping after tool execution are being investigated.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*