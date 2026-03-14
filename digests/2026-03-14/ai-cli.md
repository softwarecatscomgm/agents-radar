# AI CLI Tools Community Digest 2026-03-14

> Generated: 2026-03-14 11:26 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI tool landscape is dynamic, marked by intense focus on stability and core functionality. User-driven enhancements for TUI improvements and plugin development are prevalent, while persistent issues with model interpretation and resource management remain critical challenges across platforms.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 8 | 7 | 1 | 🟡 steady |
| OpenAI Codex | 6 | 8 | 5 | 🟢 rapid |
| OpenCode | 8 | 8 | 1 | 🟡 steady |

### Shared Directions
- Enhancing Text User Interface (TUI) features and usability. (Claude Code, OpenAI Codex, OpenCode)
- Improving agent capabilities and subagent monitoring. (Claude Code, OpenAI Codex)
- Strengthening security features and access controls. (Claude Code, OpenAI Codex)
- Addressing core model interpretation and instruction adherence issues. (Claude Code)
- Resolving persistent bugs related to file operations and data handling. (OpenCode, OpenAI Codex)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Prompt Adherence & Extensibility | Developers, AI Researchers | Plugin-centric, API-driven |
| OpenAI Codex | Core Stability & LSP | Developers, Enterprise | Feature-rich, Integrated Dev |
| OpenCode | Performance & File Ops | General Users, Devs | UI-focused, Local Dev Env |

### Trend Signals
- Demand for robust LSP integration for enhanced code intelligence.
- Critical need for stable and predictable AI model instruction following.
- User-driven feature requests for improved TUI interactions.
- Ongoing battle against high resource consumption and performance bottlenecks.
- Importance of secure execution environments and sensitive data protection.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 514 | document-typography | undefined | OPEN | Typographic quality control for AI-generated documents, preventing common errors. |
| 335 | masonry-generate-image-and-videos | undefined | OPEN | AI skill for generating images and videos from text prompts and managing jobs. |
| 154 | shodh-memory | undefined | OPEN | Persistent memory system for AI agents to maintain context across conversations. |
| 83 | skill-quality-analyzer | undefined | OPEN | Meta-skill analyzing Claude Skills for quality across structure, examples, and more. |
| 210 | frontend-design | undefined | OPEN | Improves clarity and actionability for AI design guidance within conversations. |
| 521 | record-knowledge | undefined | OPEN | Persists Claude Code knowledge across sessions as tagged Markdown entries. |

### Demand Trends
- Enhanced AI agent governance and safety patterns for systems.
- Tools for code analysis, cleanup, and security auditing.
- Simplified integration with external services like Google Workspace.
- Improved documentation and system understanding of AI components.
- Robust handling of various document formats (e.g., ODT).

### Pending Skills
- PR #514: `document-typography` - Enhances document quality by preventing typographic errors. [https://github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)
- PR #335: `masonry-generate-image-and-videos` - Adds AI image and video generation capabilities. [https://github.com/anthropics/skills/pull/335](https://github.com/anthropics/skills/pull/335)
- PR #154: `shodh-memory` - Introduces a persistent memory system for AI agents. [https://github.com/anthropics/skills/pull/154](https://github.com/anthropics/skills/pull/154)
- PR #83: `skill-quality-analyzer` - A meta-skill to analyze the quality of other skills. [https://github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)
- PR #210: `frontend-design` - Improves the clarity and actionability of front-end design guidance. [https://github.com/anthropics/skills/pull/210](https://github.com/anthropics/skills/pull/210)

### TL;DR
The community is actively seeking to expand Claude's capabilities and improve its reliability through new automation skills and better quality control mechanisms.

---

### Highlights
- MCP elicitation support introduced, allowing structured mid-task input.
- New `Elicitation` and `ElicitationResult` hooks enable response interception.
- Significant increase in bug reports related to model interpretation and memory adherence.

### Releases
- v2.1.76: Added MCP elicitation support and new Elicitation hooks.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #7229 | [FEATURE] Terminal window title settings | 29 | 39 | User-requested TUI enhancement for better session identification. |
| #34229 | [BUG] Phone verification | 14 | 24 | Critical functionality bug impacting user access. |
| #29214 | Remote Control: mobile app shows permission prompts despite --dangerously-skip-permissions | 14 | 23 | Permissions issue for remote users. |
| #27957 | Add option to disable 'Command contains quoted characters in flag names' warning | 10 | 36 | User frustration with frequent, sometimes unnecessary, warnings. |
| #33603 | CLAUDE.md hard rules and persistent memory instructions consistently ignored — violations escalate with each session despite repeated explicit reinforcement | 7 | 0 | Persistent model behavior issue impacting instruction following. |
| #32166 | [MODEL] Opus 4.6 does not read prompts properly — substitutes its own interpretation, causes rabbit holes | 6 | 4 | Core model interpretation problem affecting usability. |
| #30616 | [BUG] Single session startup triggers 429 rate limit on client_data endpoint, causing false "1 MCP server failed" status | 5 | 2 | Authentication/API issue causing false alarms. |
| #19630 | [BUG] Syntax highlighting colors word after slash command blue | 5 | 2 | Minor but persistent TUI bug with slash commands. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #34286 | Harden sensitive file guard confirmation flow | OPEN | Improves security for sensitive file operations. |
| #34257 | Add sensitive-file-guard plugin to protect infrastructure files | OPEN | Protects critical infrastructure files from accidental changes. |
| #34251 | feat(plugins): add agent-status plugin for subagent monitoring | OPEN | Enhances visibility into subagent status and logs. |
| #34010 | Add three new client websites and building inspection AI app | CLOSED | Integrates multiple new client projects. |
| #34168 | feat(plugins): Sessions plugin for listing and deleting sessions | OPEN | Adds essential session management commands. |
| #32755 | feat(plugins): add edit-verifier plugin for post-edit verification | OPEN | Verifies edits made by the Edit tool to prevent silent failures. |

### Trends
- [pain] Persistent issues with Claude Opus models not adhering to prompts or memory instructions.
- [pain] Users experiencing data loss or unexpected behavior due to Claude Code autonomously running commands.
- [pain] Bugs related to context window behavior, including early compaction and incorrect size reporting.
- [feature] User requests for improved TUI features, such as terminal title settings.
- [pain] Cross-platform bugs affecting permissions and tool execution on different operating systems (WSL, macOS, Windows).
- [feature] Development of plugins for enhanced security and agent monitoring.
- [pain] Issues with hooks and environment variables (`$CLAUDE_PROJECT_DIR`, `${CLAUDE_PLUGIN_ROOT}`) causing command failures.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Intense focus on stabilizing the CLI, with multiple bug reports and PRs addressing hangs, context loss, and rate limit issues.
- Development continues on advanced features like LSP integration and enhanced subagent capabilities.
- Active refinement of the TUI and app experience, addressing UI bugs and proposing usability improvements.

### Releases
- rust-v0.115.0-alpha.23: Release 0.115.0-alpha.23
- rust-v0.115.0-alpha.22: Release 0.115.0-alpha.22
- rust-v0.115.0-alpha.21: Release 0.115.0-alpha.21
- rust-v0.115.0-alpha.20: Release 0.115.0-alpha.20
- rust-v0.115.0-alpha.19: Release 0.115.0-alpha.19

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #14048 | [CLOSED] [bug, agent] All models — Codex CLI hangs indefinitely on all prompts, no response generated | 129 | 78 | Critical CLI functionality broken, impacting all model interactions. |
| #10410 | [OPEN] [enhancement, app] Codex Desktop App: macOS Intel (x86_64) support | 118 | 161 | Broad user base needs macOS Intel compatibility for the desktop app. |
| #8745 | [OPEN] [enhancement, CLI, agent] LSP integration (auto-detect + auto-install) for Codex CLI | 34 | 173 | Key enhancement for improved code analysis and developer workflow. |
| #14593 | [OPEN] [bug, extension, rate-limits] Still burning tokens very fast with today's VS Code extension update | 26 | 13 | Continues to impact users with unexpected and rapid token consumption. |
| #12100 | [CLOSED] [bug, custom-model] Model metadata for `gpt-5.4-codex` not found. Defaulting to fallback metadata; this can degrade performance and cause issues | 20 | 4 | Affects custom model users, impacting performance and reliability. |
| #10917 | [OPEN] [bug, app] Thread disappeared that was inside a Project and on a Worktree | 18 | 4 | Data loss issue within the application, affecting project continuity. |
| #4106 | [OPEN] [enhancement, context] Control over auto-compaction parameters | 17 | 60 | User control over context management is crucial for long coding sessions. |
| #5181 | [OPEN] [enhancement] Semantic codebase indexing and search | 16 | 29 | Important feature for navigating and understanding large codebases effectively. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #14663 | Triage flaky tests from recent CI history | OPEN | Investigates and documents CI test flakiness. |
| #14501 | dynamic tool calls: add param `exposeToContext` to optionally hide tool | CLOSED | Allows selective exposure of tools in dynamic tool calls. |
| #14678 | v8-musl: Add custom build for v8 with musl | OPEN | Integrates a custom V8 build for improved compatibility. |
| #14674 | fix: fix symlinked writable roots in sandbox policies | OPEN | Corrects sandbox policy handling for symlinked roots. |
| #12481 | [oai] fix(core): auto-unarchive resume targets safely | OPEN | Enhances safe handling of archived session resumes. |
| #14676 | feat(tui): add /setup-sandbox wizard | OPEN | Introduces a guided wizard for sandbox setup in the TUI. |
| #12618 | fix(linux-sandbox): avoid nested proxy netns setup for subagent commands | CLOSED | Resolves network namespace setup issues for subagents on Linux. |
| #10431 | feat(devcontainer): add separate secure customer profile | OPEN | Distinguishes customer and contributor dev environments for security. |

### Trends
- [pain] CLI hangs and unresponsiveness remain a critical issue impacting core functionality.
- [pain] Rate limit consumption unpredictability persists, causing user frustration and unexpected costs.
- [feature] Integration of advanced language tooling (LSP) is a key user demand for enhanced code intelligence.
- [feature] Core application stability and data integrity (thread disappearance) require urgent attention.
- [feature] Expanded platform support (macOS Intel) and alternative installation methods (Windows installer) are crucial for broader adoption.
- [feature] User control over model behavior (auto-compaction) and semantic search are highly desired.
- [feature] Improvements to agent capabilities, including subagent communication and custom model configurations, are actively being developed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- New release v1.2.26 introduces schema conversion bridge and Bun serialization improvements.
- Significant activity around rendering performance and file write issues.
- Multiple feature requests emerge for enhanced UI elements and improved provider support.

### Releases
- v1.2.26: Scaffold effect-to-zod bridge, serialize config for Bun, support text attachments, paginate session history.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #811 | [CLOSED] Text rendering is VERY slow (and CPU usage is really high even when idle) | 84 | 14 | High CPU/slow rendering severely impacts user experience. |
| #4283 | [OPEN] [bug, opentui] Copy To Clipboard is not working | 70 | 52 | Core functionality of copying output is broken for users. |
| #11112 | [OPEN] [bug] always stuck at “Preparing write...” | 41 | 19 | Frequent failure on essential file writing tasks. |
| #17318 | [OPEN] [bug, core] Error： SSE read timed out | 20 | 10 | Timeouts disrupt file writing operations. |
| #13546 | [OPEN] [bug, windows] [Bug] Custom OpenAI-compatible provider errors with "Unknown parameter: 'reasoningSummary'" for GPT-5 series models | 15 | 11 | Compatibility issues with custom OpenAI endpoints and newer models. |
| #7992 | [OPEN] opencode connect OpenAI fails!!! | 14 | 1 | Persistent issues connecting to OpenAI. |
| #2756 | [OPEN] Vue LSP not reporting diagnostics | 12 | 0 | Language Server Protocol issues hinder Vue development. |
| #6527 | [OPEN] [CRITICAL Security Issue/Bug] Plan mode restrictions bypassed when spawning sub-agents | 11 | 5 | Security vulnerability allowing unintended access. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #17470 | fix(app): agent switch should not reset thinking level | OPEN | Fixes agent switching to retain thinking state. |
| #17462 | chore: add Claude local files | CLOSED | Adds local Claude configuration files. |
| #15929 | feat(worktree): add shutdown script for worktree deletion | OPEN | Enables custom scripts for worktree cleanup. |
| #17460 | feat(tui): collapsible long responses and thinking blocks | CLOSED | Collapses long text blocks in the TUI to save space. |
| #17461 | fix(windows): replace broken symlinks and fix type errors | CLOSED | Resolves Windows symlink issues and TS errors. |
| #17410 | fix(app): defer provider and agent fetches from blocking bootstrap | OPEN | Improves app startup by deferring non-essential fetches. |
| #17465 | feat(tui): add double/triple click copy selection | OPEN | Enhances text selection and copying in the TUI. |
| #17455 | feat(rag): add local retrieval pipeline and search tooling | OPEN | Introduces a local RAG pipeline and search capabilities. |

### Trends
- [pain] Persistent issues with text rendering performance and high CPU usage.
- [pain] "Preparing write..." and "SSE read timed out" errors disrupt file operations.
- [pain] Copy-to-clipboard functionality is unreliable for many users.
- [feature] Requests for enhanced TUI features like collapsible blocks and better tab management.
- [feature] Improvements needed for custom OpenAI-compatible provider integration.
- [feature] Demand for more intuitive file path handling in the chat interface ([feature] Clickable file paths).
- [feature] Interest in new retrieval pipelines and local RAG capabilities ([feature] Local retrieval pipeline).

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*