# AI CLI Tools Community Digest 2026-03-18

> Generated: 2026-03-18 11:48 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI landscape shows significant activity with ongoing battles against persistent bugs, particularly around authentication, rate limits, and terminal usability. Feature development is heavily focused on enhancing plugin ecosystems, agent capabilities, and user control over conversational output.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 9 | 8 | 1 | 🟢 |
| OpenAI Codex | 8 | 9 | 3 | 🟢 |
| OpenCode | 8 | 8 | 0 | 🟡 |

### Shared Directions
- Robust authentication and authorization mechanisms (Claude Code, OpenAI Codex, OpenCode)
- Improved terminal interaction, including copy/paste fidelity and scrolling behavior (Claude Code, OpenAI Codex)
- Enhanced plugin architecture and state management for greater flexibility (Claude Code, OpenAI Codex)
- Increased agent autonomy and sophisticated model interaction capabilities (Claude Code, OpenAI Codex)
- Addressing rate limiting and cost efficiency for end-users (Claude Code, OpenAI Codex, OpenCode)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Plugin extensibility & reliability | Developers, AI researchers | Modular, hook-based architecture |
| OpenAI Codex | Agent capabilities & IDE integration | Developers, enterprise teams | Robust agentic framework |
| OpenCode | Core functionality & ease of use | General AI users, developers | Streamlined workflow, TUI focus |

### Trend Signals
- User frustration with token burning and unexpected costs.
- Demand for more predictable and stable agent execution.
- Growing importance of granular control over AI conversational flow.
- Need for seamless integration with existing developer workflows.
- Ongoing challenges with cross-platform compatibility and sandboxing.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 0 | document-typography | 0 | OPEN | Automates typographic quality control for generated documents, fixing orphans and widows. |
| 1 | skill-quality-analyzer | 0 | OPEN | Analyzes Claude Skills quality across structure, documentation, and resource utilization. |
| 2 | frontend-design | 0 | OPEN | Improves frontend design skill clarity and actionability for better AI guidance. |
| 3 | SAP-RPT-1-OSS predictor | 0 | OPEN | Predicts SAP business data using SAP's open-source tabular foundation model. |
| 4 | codebase-inventory-audit | 0 | OPEN | Audits codebases for orphaned code, documentation gaps, and infrastructure bloat. |
| 5 | ODT skill | 0 | OPEN | Creates OpenDocument text files, fills templates, and parses ODT to HTML. |

### Demand Trends
- Address security concerns regarding community skills impersonating official Anthropic ones.
- Improve `skill-creator` to be more token-efficient and follow best practices.
- Investigate and resolve issues with skills disappearing or failing to load.
- Enable seamless integration and usage of skills with external platforms like AWS Bedrock.
- Standardize skills through MCP (Machine Communication Protocol) for better API interaction.

### Pending Skills
- #514: Add document-typography skill: typographic quality control for generated documents (https://github.com/anthropics/skills/pull/514)
- #83: Add skill-quality-analyzer and skill-security-analyzer to marketplace (https://github.com/anthropics/skills/pull/83)
- #210: Improve frontend-design skill clarity and actionability (https://github.com/anthropics/skills/pull/210)
- #181: Add SAP-RPT-1-OSS predictor skill (https://github.com/anthropics/skills/pull/181)
- #486: Add ODT skill — OpenDocument text creation and template filling and parse ODT to HTML (https://github.com/anthropics/skills/pull/486)

### TL;DR
Address foundational issues around skill security, discoverability, and reliability.

---

### Highlights
- New `StopFailure` hook event added for API error handling.
- Persistent plugin state introduced with `${CLAUDE_PLUGIN_DATA}`.
- Ongoing high activity on phone verification, copy/paste indentation, and agent-scoped MCP configuration issues.

### Releases
- v2.1.78: Added `StopFailure` hook and `${CLAUDE_PLUGIN_DATA}` variable for plugins.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #34229 | [BUG] Phone verification | 421 | 492 | Critical for user onboarding and authentication. |
| #18170 | Copy/paste from terminal includes unwanted indentation and trailing spaces | 55 | 108 | Affects code snippet usability and correctness. |
| #4476 | Implement Agent-Scoped MCP Configuration with Strict Isolation | 39 | 183 | Enhances agent security and modularity. |
| #2118 | [BUG] Semi-infinite scrolling in terminal | 27 | 30 | Disrupts user interaction and readability. |
| #30457 | [BUG] Google Drive connector shows connected but tools not exposed in Cowork | 25 | 14 | Impacts integration functionality for users. |
| #22846 | [BUG] WebFetch returns 403 on Wikipedia and other sites despite successful preflight check | 8 | 6 | Data retrieval tool failures are critical. |
| #33154 | [BUG] Cowork forces claude-opus-4-6[1m] (1M context) causing instant rate limit errors on Max plan | 6 | 0 | Affects performance and cost for advanced users. |
| #18544 | [FEATURE] Add setting to disable automatic background task completion notifications | 6 | 7 | User control over conversational noise. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #35710 | fix(critical): Add tool-mutex plugin to prevent Wof.sys BSOD caused by parallel fs enumeration | OPEN | Prevents Windows BSOD from parallel file enumeration. |
| #35684 | Add bridge-fix plugin: fixes Chrome extension bridge connection failure | OPEN | Resolves Chrome extension bridge connection issues. |
| #35683 | Add scroll-fix plugin: fixes terminal scroll-to-top regression (all platforms) | OPEN | Fixes terminal scroll-to-top issues across platforms. |
| #34798 | Root cause analysis: terminal scrolls to top during agent execution (Ink cursorUp+eraseLines) | CLOSED | Analyzes and proposes fix for terminal scrolling issues. |
| #34789 | Add Windows workaround for Chrome extension bridge connection failure | CLOSED | Patches CLI and native host for Chrome extension bugs. |
| #35543 | fix: [bug] resultmessage never emitted in headless sdk mode when | CLOSED | Fixes missing result messages in headless SDK mode. |
| #35168 | Add Etudes plugin | OPEN | Integrates a sprint coaching plugin. |
| #33312 | fix(ralph-loop): escape special characters in ARGUMENTS to prevent bash injection (#33309) | OPEN | Prevents bash injection in command arguments. |

### Trends
- [bug] Persistent issues with API errors and rate limiting.
- [pain] Inconsistent copy/paste behavior from the terminal.
- [feature] Growing requests for enhanced plugin functionality and state management.
- [bug] Multiple reports of permission prompt issues, especially on macOS and in WSL.
- [pain] Terminal rendering and scrolling regressions impacting usability.
- [bug] MCP (Model Configuration Protocol) communication issues and type handling.
- [feature] Interest in integrated knowledge bases and better accessibility.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Token burning issue with VS Code extension and frequent reconnections in the desktop app remain highly discussed issues.
- Significant PR activity focuses on enhancing plugin and agent capabilities, including product-scoped plugins and subagent model management.
- Several recent PRs address core functionalities like executor routing, sandboxing improvements, and filesystem integration for enhanced stability and feature sets.

### Releases
- rust-v0.116.0-alpha.6: Release 0.116.0-alpha.6
- rust-v0.116.0-alpha.5: Release 0.116.0-alpha.5
- rust-v0.116.0-alpha.4: Release 0.116.0-alpha.4

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#14593](https://github.com/openai/codex/issues/14593) | [bug, extension, rate-limits] Still burning tokens very fast with today's VS Code extension update | 100 | 49 | High token usage frustrates users and impacts costs. |
| [#12764](https://github.com/openai/codex/issues/12764) | [bug, windows-os, auth, agent] The codex cli giving: 401 unauthorized | 78 | 4 | Authentication failures prevent CLI usage. |
| [#14209](https://github.com/openai/codex/issues/14209) | [bug, app] The reconnecting issue is even worse than last days. | 41 | 16 | Persistent connection issues degrade user experience. |
| [#2153](https://github.com/openai/codex/issues/2153) | [enhancement, CLI] ChatGPT integration | 26 | 93 | User demand for seamless ChatGPT/Codex interaction. |
| [#13917](https://github.com/openai/codex/issues/13917) | [bug, windows-os, app] Codex desktop on Windows cannot start PowerShell host in session (8009001d) | 17 | 0 | Prevents essential Windows development workflows. |
| [#8648](https://github.com/openai/codex/issues/8648) | [bug, context] Codex replies to earlier messages instead of latest one in conversations | 17 | 7 | Incorrect context leads to irrelevant and confusing responses. |
| [#9203](https://github.com/openai/codex/issues/9203) | [enhancement, TUI, agent] Please make "/undo" back | 16 | 91 | Lost undo functionality hinders productivity and error recovery. |
| [#2880](https://github.com/openai/codex/issues/2880) | [enhancement, TUI] Copy/Export Message as Markdown | 13 | 38 | Lack of Markdown export limits external documentation. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#15041](https://github.com/openai/codex/pull/15041) | feat: support product-scoped plugins. | OPEN | Enables plugins to be tied to specific product scopes. |
| [#15048](https://github.com/openai/codex/pull/15048) | Configure a subagent_models_manager | OPEN | Adds configuration for managing subagent models. |
| [#15040](https://github.com/openai/codex/pull/15040) | Route app-server command/exec through executor backend | OPEN | Centralizes command execution via a unified backend. |
| [#14821](https://github.com/openai/codex/pull/14821) | feat: add memory citation to agent message | CLOSED | Integrates memory citations into agent message responses. |
| [#15020](https://github.com/openai/codex/pull/15020) | fix: harden plugin feature gating | OPEN | Improves robustness of plugin feature enablement checks. |
| [#14172](https://github.com/openai/codex/pull/14172) | fix: support split carveouts in windows restricted-token sandbox | OPEN | Enhances Windows sandbox for specific carveout scenarios. |
| [#15034](https://github.com/openai/codex/pull/15034) | Inject executor-aware filesystem into app-server | OPEN | Integrates executor-aware filesystem into app-server. |
| [#15033](https://github.com/openai/codex/pull/15033) | Load remote repo skills through session environment | OPEN | Loads remote skills using session environment context. |

### Trends
- [pain] Ongoing issues with token consumption in VS Code extension.
- [pain] Users report frequent disconnections and stability problems in the desktop app.
- [feature] Strong demand for enhanced ChatGPT integration and cross-platform compatibility.
- [feature] Requests for improved undo functionality and better context handling in conversations.
- [feature] Ongoing development around plugin architecture and agent capabilities.
- [pain] Authentication errors (401 Unauthorized) persist for the CLI.
- [feature] Users desire more flexible IDE integration and output formatting options.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- Copilot auth is rapidly consuming premium requests, flagged as user-initiated when they should be agent-initiated.
- SSE read timeouts are occurring during file writing operations in OpenCode.
- Database corruption issues are reported when running OpenCode locally and in Docker concurrently with shared configuration.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #8030 | [CLOSED] Copilot auth now sets far too many requests as "user" consuming premium requests rapidly | 199 | 64 | Incorrectly uses premium tokens on agent requests, costing users money. |
| #17318 | [OPEN] [bug, core] Error： SSE read timed out | 40 | 30 | File writing errors disrupt workflows and prevent data persistence. |
| #3743 | [OPEN] [bug, help-wanted, model-problem] Loop in certain models | 18 | 9 | Models get stuck in infinite loops, halting progress and requiring intervention. |
| #10975 | [OPEN] [opentui, discussion] [FEATURE]: Can use ctrl+c twice to close the tui? | 17 | 2 | Users seek familiar keyboard shortcuts for exiting the TUI. |
| #14194 | [OPEN] [bug, core] Running opencode locally and in docker while sharing config corrupts the database | 13 | 8 | Concurrent local/Docker use corrupts database, causing data loss/instability. |
| #9111 | [CLOSED] OAuth token expires after inactivity causing 'Token refresh failed: 400' | 11 | 1 | Frequent re-login needed due to expired tokens after inactivity. |
| #11232 | [OPEN] Feature Request: Native Scheduling for Opencode | 6 | 0 | Users need built-in scheduling, reducing reliance on external tools. |
| #17295 | [OPEN] [windows] Windows: opencode upgrade fails to detect installation method (returns unknown) | 5 | 0 | Upgrade process on Windows is broken, preventing smooth updates. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #18081 | Update themes.mdx | OPEN | Updates documentation related to themes. |
| #18079 | Upgrade opentui to 0.1.88 | OPEN | Updates the opentui library to a newer version. |
| #15985 | docs: add MPM-Coding to ecosystem | CLOSED | Adds a new project to the ecosystem documentation. |
| #13854 | fix(tui): stop streaming markdown/code after message completes | OPEN | Corrects TUI streaming logic for completed messages. |
| #17995 | feat: add ReScript LSP support | OPEN | Adds Language Server Protocol support for ReScript. |
| #18058 | feat: ignore unrecognized fields in MCP config entries | OPEN | Makes MCP configuration more robust to unknown fields. |
| #17804 | fix(app): reinitialize SDK providers when switching servers | OPEN | Ensures SDK providers are reset when changing servers. |
| #13324 | fix(provider): split Bedrock 1M context models into explicit 200K and 1M variants | OPEN | Differentiates Bedrock models based on context window size. |

### Trends
- [pain] Copilot auth is miscategorizing requests, leading to rapid premium token depletion.
- [pain] SSE read timeouts are a recurring issue during file operations.
- [pain] Database corruption occurs with concurrent local and Docker usage.
- [pain] Windows users face upgrade detection issues and blank desktop screens.
- [feature] Users are requesting enhanced TUI controls, like double-click copy.
- [feature] Request for native scheduling capabilities within OpenCode.
- [pain] Long context models are not fully leveraging advertised context windows in OpenCode.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*