# AI CLI Tools Community Digest 2026-03-01

> Generated: 2026-03-01 11:22 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI landscape in early 2026 shows distinct paths: Claude Code focuses on stability and plugin integration, OpenAI Codex is pushing core agent and remote dev features, while OpenCode tackles Windows TUI issues and new platform integrations. Cross-tool development increasingly highlights security, platform support, and enhanced developer experience.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 11 | 9 | 0 | 🟡 steady |
| OpenAI Codex | 10 | 8 | 0 | 🟡 steady |
| OpenCode | 10 | 8 | 0 | 🟡 steady |

### Shared Directions
- Cross-platform stability, particularly for Windows (Claude Code, OpenAI Codex, OpenCode)
- Enhanced plugin/skill/tooling integration (Claude Code, OpenAI Codex)
- Improved user interface and terminal interaction (OpenCode, OpenAI Codex)
- New AI provider and platform integrations (OpenCode, Claude Code)
- Security enhancements and sandboxing (OpenCode, Claude Code)
- Internationalization and localized pricing (Claude Code)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Plugin ecosystem, code security | Developers needing specialized code ops | Modular, plugin-centric |
| OpenAI Codex | Core agent, remote dev | Professional developers, enterprise | Feature-rich, developer workflow |
| OpenCode | TUI usability, platform support | Developers requiring broad platform access | Provider-agnostic, cross-platform UX |

### Trend Signals
- Growing demand for secure code execution environments.
- Increased focus on cross-platform developer experience.
- Integration of enterprise AI platforms (e.g., GitLab Duo).
- User calls for localized pricing and accessibility.
- Persistent challenges with terminal-based interactions.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 1 | skill-quality-analyzer and skill-security-analyzer | N/A | OPEN | Meta skills for comprehensive quality and security analysis of Claude Skills. |
| 2 | frontend-design | N/A | OPEN | Improves clarity and actionability of frontend design guidance for Claude. |
| 3 | Add comprehensive system documentation and flowcharts | N/A | OPEN | Detailed documentation for the evidence management system architecture and workflows. |
| 4 | codebase-inventory-audit | N/A | OPEN | Skill for auditing codebase, identifying issues, and generating status reports. |
| 5 | Add masonry-generate-image-and-videos skill | N/A | OPEN | AI-powered image and video generation via Masonry CLI. |
| 6 | Configure skills in Claude user preferences | N/A | OPEN | Guides skill configuration and introduces preference-based skills. |

### Demand Trends
- Enhanced tooling for skill creation, analysis, and validation.
- Integration and bridging capabilities with external platforms (e.g., Telegram, AWS Bedrock).
- Skills focused on advanced AI governance, safety, and ethical patterns.
- Robust documentation and examples for community learning and adoption.
- Improved management and organization of skills, including versioning and deletion.

### Pending Skills
- PR #362: Fix skill-creator UTF-8 panic on multi-byte characters (Fixes potential Rust panics with UTF-8 strings.) https://github.com/anthropics/skills/pull/362
- PR #284: Fix(skill-creator): specify utf-8 encoding when reading SKILL.md (Ensures consistent SKILL.md reading across environments.) https://github.com/anthropics/skills/pull/284
- PR #282: docs(webapp-testing): add requirements.txt for dependencies (Adds dependencies for webapp-testing skill.) https://github.com/anthropics/skills/pull/282
- PR #361: Detect unquoted YAML special characters in description fields (Prevents YAML parsing errors in skill descriptions.) https://github.com/anthropics/skills/pull/361
- PR #147: Add codebase-inventory-audit skill (Comprehensive codebase audit skill for cleanup and documentation.) https://github.com/anthropics/skills/pull/147

### TL;DR
The community is focused on enhancing skill creation, analysis, and integration tooling, alongside developing robust governance and external platform bridging capabilities for AI agents.

---

### Highlights
- Significant activity on Windows-specific bugs, particularly around API connectivity and installation issues.
- New plugins are being integrated to enhance code security and address specific use cases like unverified assertions.
- Ongoing discussion and feature requests related to pricing and internationalization.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #24918 | [CLOSED] [BUG] Cowork Windows - Cannot connect to Claude API from workspace (Windows 11 Home) | 96 | 50 | Critical for Windows users trying to use Claude API from workspace. |
| #17432 | [OPEN] Feature Request: India-Specific Pricing Plans (INR) for Claude & Claude Code | 46 | 117 | Addresses user demand for localized pricing and affordability. |
| #28892 | [OPEN] [BUG] Claude Desktop cannot install on Windows - redirects to Microsoft Store during installation | 42 | 12 | Blocks new Windows users from installing Claude Desktop. |
| #7107 | [CLOSED] [BUG] claude outputs a bun warning | 18 | 6 | Minor but persistent warning on macOS affecting user experience. |
| #27801 | [OPEN] [BUG] Cowork: "Failed to start Claude's workspace" — VM service not running, persists after reboot | 14 | 7 | Prevents users from launching or using Cowork workspaces. |
| #26172 | [OPEN] [BUG] Skills are not loading to Claude Cowork on Mac | 14 | 7 | Hinders functionality and productivity for Mac users of Cowork. |
| #28322 | [OPEN] [BUG] /remote-control (/rc) not recognized as built-in command in existing session | 13 | 6 | Intercepts use of a key CLI command during active sessions. |
| #17637 | [CLOSED] Hooks don't receive tool input for Read/Glob; permission patterns don't match tilde paths | 12 | 1 | Impacts tool integration and path handling logic for Windows users. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #29759 | fix: RTL text rendering regression in VSCode webview since v2.1.63 (fixes #29754) | OPEN | Corrects Arabic text display issues in VSCode extension. |
| #29757 | docs(plugin-dev): clarify skill naming in skill-development guide | OPEN | Improves documentation for skill naming conventions. |
| #29755 | feat: add verified-code-answers plugin to fix unverified assertions (fixes #29753) | OPEN | Introduces plugin to differentiate verified vs. unverified answers. |
| #29732 | feat: Add push-guardrails plugin to prevent accidental code exposure | OPEN | Adds plugin to prevent unintentional exposure of private code. |
| #29731 | docs: use lowercase hyphenated format for skill name examples | OPEN | Standardizes skill name examples in documentation. |
| #29668 | fix: handle unbound PROMPT_PARTS array in ralph-wiggum setup | OPEN | Resolves a crash in a shell script setup. |
| #29656 | Fix GitHub Actions shell injection vulnerability | OPEN | Secures GitHub Actions against shell injection. |
| #29606 | edit redme.md | OPEN | Updates the README file. |

### Trends
- [pain] Persistent issues with Windows environments, especially API connectivity and installation failures.
- [pain] Cowork functionality disruptions, including VM service failures and skill loading problems on macOS.
- [feature] Integration of new plugins for enhanced code security and assertion verification.
- [feature] Ongoing improvements to developer documentation for plugin and skill development.
- [pain] Authentication and subscription status inaccuracies impacting user access to pro features.
- [feature] User requests for internationalized pricing, specifically INR for India.
- [pain] Problems with CLI command recognition and hook behavior, particularly with bash commands.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- WebSocket connection issues are causing retries and fallbacks to HTTPS, impacting user experience.
- High demand for remote development support and improvements to agent/tooling functionalities.
- Several bug reports surfaced for the CLI and desktop app regarding authentication, UI updates, and model display.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #13041 | [OPEN] WebSocket upgrade succeeds then server closes with 1008 Policy (falls back to HTTPS) | 29 | 25 | Affects WebSocket stability, leading to fallback and potential errors. |
| #10450 | [OPEN] [enhancement, app] Feature Request: Support Remote Development (SSH / Remote Hosts) in Codex Desktop App | 29 | 215 | Major feature request for enhanced dev workflows. |
| #12764 | [OPEN] [bug, auth, CLI] The codex cli giving: 401 unauthorized | 28 | 0 | Critical authentication issue for CLI users. |
| #13106 | [CLOSED] [bug, app] Regression after v26.227.1448 (747): streaming UI updates don’t render while app is focused (updates appear only after focus change) | 18 | 18 | UI update bug impacting app responsiveness. |
| #1980 | [OPEN] [enhancement, agent] Adhere to XDG Base Desktop Specification on Linux platforms | 16 | 65 | Enhances Linux user experience and standards compliance. |
| #3493 | [CLOSED] [bug, TUI] Codex CLI: File suggestion bug (“no matches”) | 13 | 5 | Bug in file suggestion feature impacting CLI utility. |
| #12241 | [OPEN] [bug, CLI, tool-calls] Failed to apply patch consantly | 11 | 1 | Persistent patching failures for CLI users. |
| #12161 | [OPEN] [bug, windows-os, extension] Codex IDE keeps getting stuck on "Thinking" | 11 | 2 | IDE extension performance issue causing unresponsiveness. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #12864 | feat: load from plugins | OPEN | Enables loading plugins via config.toml. |
| #13096 | Make rollout reconstruction resumable for backtracking | OPEN | Improves state management for rollbacks and backtracking. |
| #12293 | request_user_input: partially submit committed answers on interrupt | OPEN | Handles user input interruption more gracefully. |
| #13156 | feat(tui): add native team command + Shift+Down agent picker | OPEN | Introduces team commands and a new agent picker shortcut. |
| #13155 | feat(core): persist native teams and add team task tools | OPEN | Implements persistent teams and related task management tools. |
| #13157 | docs: add README fork notes for native agent teams | OPEN | Documents new native agent team features in README. |
| #11841 | [oai] fix(core): preserve non-app MCP tools in apps mode | CLOSED | Restores non-app MCP tools when apps mode is enabled. |
| #11647 | [oai] update terminal image | CLOSED | Updates the terminal example image in the README. |

### Trends
- [pain] WebSocket connection instability and fallback to HTTPS are recurring issues.
- [feature] Strong user demand for remote development support via SSH/remote hosts.
- [pain] Authentication errors (401 Unauthorized) are impacting CLI users.
- [feature] Enhancements to agent capabilities and tool integration (plugins, teams, MCPs) are actively being developed.
- [pain] UI update regressions and responsiveness issues in the desktop app are reported.
- [feature] Improvements to user input handling and error recovery are being incorporated.
- [pain] Cross-platform consistency issues (e.g., TUI colors, file EOL) are present.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- Critical memory leak reported for Linux users, causing system instability and OOM kills.
- New feature request to integrate GitLab Duo Agent Platform workflow models.
- Multiple reports of TUI copy/paste issues on Windows, especially in VS Code terminal.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #2242 | [OPEN] Is there a way to sandbox the agent ? | 22 | 28 | Security concern: controlling agent access to files outside the directory. |
| #12954 | [OPEN] [discussion] [FEATURE]: 5.3 Codex for Github Copilot provider | 13 | 103 | Early adoption of new Codex model for improved AI coding assistance. |
| #14734 | [CLOSED] [bug, windows, perf] Latest opencode update on latest Bun is unusable. | 10 | 0 | Critical bug causing crashes/segfaults on Windows with Bun. |
| #9790 | [CLOSED] [bug, opentui, windows] opencode cli鼠标拖动终端窗口，就会触发退出+乱码 | 10 | 0 | Usability issue: terminal interaction causes crashes and corruption on Windows. |
| #15560 | [OPEN] [core, needs:compliance] feat: integrate GitLab Duo Agent Platform (DAP) workflow models | 9 | 0 | Extends provider support to new GitLab AI workflow capabilities. |
| #13230 | [OPEN] [perf] [Critical] Memory leak causes kernel soft lockups (356s, 7/8 CPUs), OOM kills (111GB virt/21GB RSS), and total system death on Linux | 9 | 10 | Severe performance issue causing system-wide failure on Linux. |
| #15212 | [OPEN] [bug, opentui, windows] Cannot select text in chat messages - mouse capture stuck in prompt field ( VSCode terminal) | 7 | 0 | Major usability roadblock in VS Code terminal for text interaction. |
| #5046 | [OPEN] [bug, opentui] Can't copy text from opencode through mouse selection in Windows Terminal | 6 | 2 | Common problem: difficulty copying text from TUI on Windows. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #7984 | feat(opencode): Add Databricks provider support | OPEN | Enables connection to Databricks LLM endpoints. |
| #15559 | fix(tui): decode percent-encoded file URIs in initial prompts | OPEN | Fixes file path rendering in TUI prompts. |
| #15557 | [contributor, needs:compliance] feat: integrate GitLab Duo Agent Platform (DAP) workflow models | OPEN | Adds GitLab workflow model support. |
| #13854 | fix(tui): stop streaming markdown/code after message completes | OPEN | Ensures complete rendering of completed messages. |
| #10275 | feat(bun): track provider packages for automatic cleanup | OPEN | Manages provider package dependencies for automatic cleanup. |
| #12822 | [contributor] fix(env): remove Env namespace, use direct process.env access | OPEN | Simplifies environment variable handling. |
| #14958 | [contributor] fix(opencode): add thinking variants support for SAP AI provider | OPEN | Harmonizes thinking/reasoning support for SAP AI. |
| #15401 | [contributor] fix(nix): include .github/TEAM_MEMBERS in fileset | OPEN | Corrects Nix build by including necessary files. |

### Trends
- [bug] Persistent issues with copy/paste functionality in the TUI on Windows.
- [pain] Critical performance problems, especially memory leaks on Linux.
- [feature] Integration of new AI models and platforms (GitLab DAP, Databricks provider).
- [pain] Crashes and instability reported with specific dependency versions (Bun).
- [feature] Enhancements to TUI interactivity and display (prompt focus, file URI decoding).
- [bug] Problems with tool execution and response handling (invalid models, missing IDs).
- [feature] Request for improved sandboxing and agent security controls.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*