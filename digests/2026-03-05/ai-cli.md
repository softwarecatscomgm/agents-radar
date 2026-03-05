# AI CLI Tools Community Digest 2026-03-05

> Generated: 2026-03-05 11:35 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
AI CLI tools are rapidly evolving, with a strong push towards enhanced plugin systems, improved TUI experiences, and broader IDE integration. Users are actively reporting and requesting features related to stability, resource management, and cross-platform compatibility, indicating a maturing but still developing ecosystem.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| OpenAI Codex | 8 | 7 | 1 | 🟢 rapid |
| OpenCode | 7 | 7 | 1 | 🟡 steady |

### Shared Directions
- Expanding plugin/skill extensibility for custom workflows. (OpenAI Codex, OpenCode)
- Improving Terminal User Interface (TUI) stability and features. (OpenAI Codex, OpenCode)
- Addressing critical stability and performance bugs. (OpenAI Codex, OpenCode)
- Enhancing IDE integration for seamless development. (OpenAI Codex, OpenCode)
- Addressing cross-platform compatibility, particularly macOS and Windows. (OpenAI Codex, OpenCode)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| OpenAI Codex | Unified execution & plugin ecosystem | Developers, power users | Extensive features, plugin-first |
| OpenCode | Workspace integration & TUI | Developers, content creators | Broad adoptability, user-friendly |

### Trend Signals
- Demand for robust macOS Intel support.
- Concerns over AI tool resource consumption.
- Push for seamless IDE integration and remote workflows.
- Importance of stable and intuitive TUI experiences.
- Need for reliable usage metering and rate limit handling.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| #83 | skill-quality-analyzer & skill-security-analyzer | N/A | OPEN | Meta skills for marketplace, analyzing skill quality and security. |
| #514 | document-typography | N/A | OPEN | Controls typographic quality in AI-generated documents, preventing common issues. |
| #210 | frontend-design | N/A | OPEN | Improves clarity and actionability for frontend design guidance in Claude. |
| #95 | system documentation and flowcharts | N/A | OPEN | Comprehensive system documentation and workflow visualization for evidence management. |
| #509 | CONTRIBUTING.md | N/A | OPEN | Adds contribution guidelines to improve community health metrics. |
| #181 | SAP-RPT-1-OSS predictor skill | N/A | OPEN | Enables predictive analytics on SAP data using SAP's open-source tabular model. |

### Demand Trends
- Enhancing AI agent safety and governance with policy enforcement and trust scoring.
- Package manager solutions for AI agents, simplifying skill deployment and management.
- Improving developer experience by ensuring skills adhere to best practices and documentation.
- Integrating with external services (e.g., Google Workspace) for expanded AI assistant capabilities.

### Pending Skills
- PR #514: `document-typography` skill for controlling typographic quality in AI documents. [github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)
- PR #181: `SAP-RPT-1-OSS predictor skill` for predictive analytics on SAP business data. [github.com/anthropics/skills/pull/181](https://github.com/anthropics/skills/pull/181)
- PR #154: `shodh-memory` skill for persistent context and memory in AI agents. [github.com/anthropics/skills/pull/154](https://github.com/anthropics/skills/pull/154)

### TL;DR
Community members are requesting better governance and packaging for AI agents, alongside core functionality enhancements.

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- A new plugin system for loading skills, MCP entries, and app connectors has been introduced.
- Significant activity on issues related to macOS support, CLI usage metering, and TUI output truncation.
- Substantial PR work on unified execution, sandboxing, and real-time session context.

### Releases
- rust-v0.110.0: Plugin system loaded from config/marketplace, TUI multi-agent flow expanded, and more.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|----------------|
| #10410 | [OPEN] [enhancement, app] Codex Desktop App: macOS Intel (x86_64) support | 97 | 119 | Direct request for broader macOS compatibility for the desktop application. |
| #13186 | [CLOSED] [bug, rate-limits, CLI] Possible Codex usage metering anomaly on Plus (very small tasks consuming large 5h + weekly quota) | 92 | 10 | Indicates potential issues with how usage is tracked and billed for Plus users. |
| #2558 | [OPEN] [bug, TUI] Codex client output truncated when scrolling in Zellij | 38 | 83 | Affects usability of the TUI within a popular terminal multiplexer. |
| #2998 | [OPEN] [enhancement, extension] IDE-integrated diff / approval | 34 | 103 | Proposed feature to bring CLI's approval flow to IDE extensions. |
| #10450 | [OPEN] [enhancement, app] Remote Development in Codex Desktop App | 34 | 243 | High-impact feature request for extending desktop app capabilities. |
| #11013 | [CLOSED] [bug, CLI] Model changes to Medium uninstructed | 28 | 6 | Suggests unexpected behavior in model selection for CLI users. |
| #12161 | [OPEN] [bug, windows-os, extension] Codex IDE keeps getting stuck on "Thinking" | 17 | 6 | Recurring problem impacting user experience with IDE extensions on Windows. |
| #9224 | [OPEN] [enhancement, CLI] Codex Remote Control | 13 | 96 | Feature for controlling CLI remotely, enhancing accessibility and workflow. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #13571 | feat: bind package manager | OPEN | Integrates package manager functionality into Codex. |
| #13534 | Stabilize flaky tests | OPEN | Aims to improve the reliability of CI tests by addressing flakiness. |
| #13525 | feat: skills for artifacts | OPEN | Introduces skills directly related to artifact management. |
| #13510 | add @plugin mentions | OPEN | Enables explicit `@plugin` mentions for better plugin interaction. |
| #13562 | fix(tui): fully repaint inline status after history inserts | OPEN | Corrects TUI rendering issues after history updates. |
| #13432 | refactor: route zsh-fork through unified exec | OPEN | Refactors execution flow to leverage unified exec for zsh-fork. |
| #13392 | refactor: prepare unified exec for zsh-fork backend | CLOSED | Prepares unified execution for the zsh-fork backend integration. |
| #13560 | Append realtime startup context to initial session update | OPEN | Enhances real-time session initialization with startup context. |

### Trends
- [feature] Plugin system for loading skills and connectors.
- [pain] macOS Intel support limitations persist.
- [pain] Usage metering and rate limit anomalies are being reported.
- [feature] IDE-integrated diff/approval workflow requested.
- [pain] TUI output issues in specific terminal multiplexers like Zellij.
- [feature] Remote control capabilities for CLI users.
- [pain] Windows OS and extension bugs continue to surface.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- Core rework of workspace integration and adaptor interface.
- TUI improvements include default scrollbars and subprocess management.
- Significant activity around performance issues, build failures, and cross-platform compatibility.

### Releases
- v1.2.17: Core workspace integration rework, TUI improvements, and desktop enhancements.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #2072 | [OPEN] Support for Cursor? | 55 | 124 | Integrates third-party IDEs for broader adoption. |
| #5363 | [OPEN] [bug, perf] opencode eating 70gb of memory? | 36 | 15 | Crucial for stability and resource management. |
| #6918 | [OPEN] [bug, nix] qwen3-coder fails to call edit tool | 33 | 17 | Addresses a core functionality failure with specific models. |
| #4276 | [CLOSED] Is zen/big-pickle glm 4.6? | 21 | 1 | Aids in understanding model capabilities and context. |
| #3691 | [CLOSED] [bug, opentui] Opencode is able to crash the terminal | 20 | 2 | Essential for TUI stability and user experience. |
| #7846 | [OPEN] [opentui] [FEATURE]: Add /skills command to list and quick-invoke skills | 17 | 31 | Enhances TUI usability and command discoverability. |
| #4197 | [OPEN] Set timout for long running commands | 16 | 10 | Improves control over execution and prevents hangs. |
| #13282 | [OPEN] [bug, windows, perf] OpenCode 1.1.59 crashes immediately on chat (Bun AVX crash) | 13 | 0 | Critical for Windows stability and specific hardware. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #16163 | [OPEN] [contributor] feat(nix): add opencode-electron derivation | OPEN | Enables Nix packaging for the desktop client. |
| #16162 | [OPEN] [needs:issue, needs:compliance] fix: clear tool output and attachments during compaction prune | OPEN | Prevents unbounded storage growth from old tool outputs. |
| #16161 | [OPEN] [contributor] desktop: remove unnecessary macOS entitlements | OPEN | Reduces unnecessary macOS permission requests. |
| #16146 | [OPEN] [needs:issue, contributor] fix(app): Fixes #16141 overlay happen in first user message. | OPEN | Addresses a UI issue with message overlays. |
| #13854 | [OPEN] [needs:issue] fix(tui): stop streaming markdown/code after message completes | OPEN | Ensures complete rendering of messages in TUI. |
| #15573 | [OPEN] [contributor] feat: integrate GitLab Duo Agent Platform (DAP) workflow models | OPEN | Adds support for GitLab Duo Agent Platform models. |
| #16158 | [OPEN] docs: add OpenGUI to ecosystem projects | OPEN | Documents a community-built GUI client. |
| #12286 | [CLOSED] [needs:issue] feat: add OPENCODE_RESPECT_LSP_DIAGNOSTICS flag to ensure LSP diagnostics are always processed | CLOSED | Flags to control LSP diagnostic processing. |

### Trends
- [pain] High memory consumption (#5363).
- [pain] Crashes and stability issues on Windows (#13282, #7669, #9875).
- [pain] Tool call failures with specific models (#6918, #6346).
- [pain] Terminal blanking or crashing issues in TUI (#3691, #6464).
- [feature] Enhancements to TUI functionality and command input (#7846, #15571).
- [feature] Integration with new LLM providers and capabilities (#2072, #15573).
- [pain] Database corruption and synchronization issues (#14194).

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*