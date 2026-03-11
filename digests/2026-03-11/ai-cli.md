# AI CLI Tools Community Digest 2026-03-11

> Generated: 2026-03-11 11:35 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI tool landscape shows active development with a strong focus on plugin ecosystems and addressing platform-specific bugs. IDE integrations, robust TUI experiences, and flexible configuration are key areas of user demand, while underlying reliability and permission systems remain persistent challenges for some projects.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 9 | 8 | 0 | 🟡 steady |
| OpenAI Codex | 11 | 9 | 4 | 🟢 rapid |
| OpenCode | 8 | 8 | 0 | 🟡 steady |

### Shared Directions
- Improving TUI stability and cross-terminal compatibility. (Claude Code, OpenAI Codex, OpenCode)
- Addressing Windows-specific bugs and usability issues. (Claude Code, OpenAI Codex, OpenCode)
- Enhancing plugin SDKs and enabling specialized task workflows. (Claude Code, OpenCode)
- Resolving persistent authentication and connectivity problems. (OpenAI Codex, OpenCode)
- Improving CLI performance and resource management. (Claude Code, OpenCode)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Plugin ecosystem, robust tooling | Developers, writers | Extensible, task-specific |
| OpenAI Codex | Core CLI functionality, TUI, integrations | General developers | Feature-rich, integrated |
| OpenCode | TUI, privacy, model flexibility | Developers, privacy-conscious | Customizable, secure |

### Trend Signals
- Growing demand for specialized AI plugins in CLI environments.
- Persistent challenges with OS-specific integrations and compatibility layers.
- User concerns around AI privacy and data handling in CLI applications.
- Increased focus on refining terminal user interfaces for seamless interaction.
- Ongoing efforts to enhance LLM provider integration and performance.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 1 | document-typography | 0 | OPEN | Controls typographic quality in AI-generated documents, preventing orphans and widows. |
| 2 | frontend-design | 0 | OPEN | Improves clarity and actionability of frontend design guidance for Claude. |
| 3 | skill-quality-analyzer | 0 | OPEN | Analyzes skill quality across structure, documentation, and resources. |
| 4 | system-documentation | 0 | OPEN | Adds comprehensive system documentation and flowcharts for evidence management. |
| 5 | CONTRIBUTING.md | 0 | OPEN | Adds a CONTRIBUTING.md file to enhance community health metrics. |
| 6 | SAP-RPT-1-OSS predictor | 0 | OPEN | Predicts SAP business data using SAP's open-source tabular foundation model. |

### Demand Trends
- Need for robust agent governance and safety patterns in AI systems.
- Solutions for managing duplicate or disappearing skills impacting user workflows.
- Integration strategies for skills with external services like AWS Bedrock and Google Workspaces.
- Enhanced tooling for skill creation and management, including better documentation and validation.
- Addressing security concerns around community skills impersonating official ones.

### Pending Skills
- [PR #514](https://github.com/anthropics/skills/pull/514): `document-typography` skill for improved typographic quality control.
- [PR #210](https://github.com/anthropics/skills/pull/210): Refines `frontend-design` skill for better clarity and actionability.
- [PR #83](https://github.com/anthropics/skills/pull/83): Integrates `skill-quality-analyzer` and `skill-security-analyzer` into the marketplace.
- [PR #181](https://github.com/anthropics/skills/pull/181): Adds `SAP-RPT-1-OSS-predictor` for predictive analytics on SAP data.
- [PR #154](https://github.com/anthropics/skills/pull/154): Introduces `shodh-memory` skill for persistent AI agent context.

### TL;DR
Enhancing skill creation, management, and security is paramount, with a growing need for robust agent governance and simplified integration with external services.

---

### Highlights
- Major focus on bug fixes, especially for Windows and IDE integrations, with several critical issues updated.
- Significant influx of new plugins and enhancements for specialized tasks like testing, architecture explanation, and academic writing.
- Ongoing concerns around permission matching and core functionalities highlight persistent pain points.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#29583](https://github.com/anthropics/claude-code/issues/29583) | [BUG] Cowork: Cannot use folders outside home directory on Windows (secondary drive) | 35 | 30 | Critical Windows bug blocking standard file access. |
| [#8245](https://github.com/anthropics/claude-code/issues/8245) | [BUG] System prompt wastes >10k tokens on large git repos that cannot be disabled | 19 | 10 | High token waste impacting performance on large codebases. |
| [#16691](https://github.com/anthropics/claude-code/issues/16691) | [Bug] Claude in Chrome Native Host crashes on Windows 11 - Bun internal assertion failure | 14 | 14 | Major crash bug affecting Windows 11 Chrome integration. |
| [#13301](https://github.com/anthropics/claude-code/issues/13301) | [BUG] Claude Code unable to connect to PyCharm by using the dedicated Plugin or via PyCharm's terminals | 12 | 1 | IDE integration failure for PyCharm users. |
| [#18049](https://github.com/anthropics/claude-code/issues/18049) | [BUG] Error: Claude Code process exited with code 3 | 12 | 7 | Unspecified but frequent process exit error. |
| [#25149](https://github.com/anthropics/claude-code/issues/25149) | [BUG] Claude Desktop installer falsely detects Windows S Mode on Windows 10 IoT Enterprise LTSC | 12 | 9 | Installer false positive impacting specific Windows deployments. |
| [#6275](https://github.com/anthropics/claude-code/issues/6275) | Prompt Input: Unexpected Text Loss on Up Arrow Key Press | 11 | 22 | User data loss during prompt input is highly frustrating. |
| [#26761](https://github.com/anthropics/claude-code/issues/26761) | [BUG] Claude (Opus 4.6) repeatedly executes actions out of order, ignoring a carefully designed workflow | 11 | 1 | Workflow execution integrity seriously compromised. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#33070](https://github.com/anthropics/claude-code/pull/33070) | feat: add reframe plugin for debugging and design problem-solving | OPEN | Adds plugin for debugging/design via cognitive frameworks. |
| [#32408](https://github.com/anthropics/claude-code/pull/32408) | Add Paper Writing Plugin with guided academic argument development | OPEN | New plugin for structured academic paper content generation. |
| [#33015](https://github.com/anthropics/claude-code/pull/33015) | feat: Add tmp-cleanup plugin to mitigate /tmp file leak (#8856) | OPEN | Cleans up temporary files from Bash tool invocations. |
| [#32980](https://github.com/anthropics/claude-code/pull/32980) | feat: add /create-test command and plugin | OPEN | Generates unit tests from source code analysis. |
| [#32979](https://github.com/anthropics/claude-code/pull/32979) | feat: add explain-architecture plugin | OPEN | Generates architecture diagrams from code analysis. |
| [#30519](https://github.com/anthropics/claude-code/issues/30519) | Permissions matching is fundamentally broken — 30+ open issues, no staff engagement, community building workarounds | OPEN | Major ongoing issue with permission matching system. |
| [#16561](https://github.com/anthropics/claude-code/issues/16561) | Feature: Parse compound Bash commands and match each component against permissions | OPEN | Enhancement request for granular Bash command permission checks. |
| [#32870](https://github.com/anthropics/claude-code/issues/32870) | [BUG] claude.exe triggers Windows BSOD via Wof.sys during directory listing (NtQueryDirectoryFileEx) | OPEN | Critical Windows bug causing system crashes. |

### Trends
- [bug] Persistent issues with IDE integrations across Windows and Linux platforms.
- [bug] Recurring problems with Bash tool execution and environment variable handling.
- [pain] Concerns about the fundamental reliability and effectiveness of the permission matching system.
- [feature] Strong user interest in new plugins for specialized tasks like testing, architecture, and writing.
- [pain] Unexpected text loss in prompt input and core workflow execution failures impacting usability.
- [feature] Enhancements requested for configuration options and better user feedback in the status line.
- [bug] Critical bugs affecting Windows users, including installation failures and system crashes.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- New `rust-v0.115.0-alpha` releases indicate ongoing development, with `v0.114.0` adding experimental code mode and hooks engine.
- Significant user issues persist around CLI hangs (14048), macOS Intel app support (10410), and "401 unauthorized" errors (12764).
- Active PRs focus on TUI improvements (12334, 14170), tool handling (14325, 14274), and deeper configuration/auth mechanisms (14178, 14304, 14313).

### Releases
- rust-v0.115.0-alpha.3: Release 0.115.0-alpha.3
- rust-v0.115.0-alpha.2: Release 0.115.0-alpha.2
- rust-v0.115.0-alpha.1: Release 0.115.0-alpha.1
- rust-v0.114.0: Added experimental code mode and hooks engine.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #14048 | [CLOSED] [bug, agent] All models — Codex CLI hangs indefinitely on all prompts, no response generated | 122 | 77 | Critical bug causing complete CLI unresponsiveness. |
| #10410 | [OPEN] [enhancement, app] Codex Desktop App: macOS Intel (x86_64) support | 112 | 147 | Essential feature parity for Intel Mac users. |
| #12764 | [OPEN] [bug, windows-os, CLI] The codex cli giving: 401 unauthorized | 62 | 1 | Widespread authentication failures impacting CLI usage. |
| #2558 | [OPEN] [bug, TUI] Codex client output truncated when scrolling in Zellij | 43 | 88 | Usability issue in popular terminal multiplexer. |
| #8745 | [OPEN] [enhancement, CLI, agent] LSP integration (auto-detect + auto-install) for Codex CLI | 31 | 165 | Major developer experience enhancement request. |
| #14209 | [OPEN] [bug, app] The reconnecting issue is even worse than last days. | 29 | 15 | Persistent connection stability problems on macOS. |
| #10601 | [OPEN] [bug, windows-os, sandbox, CLI] Sandbox setup error on Windows | 18 | 3 | Significant barrier to using sandbox features on Windows. |
| #9115 | [OPEN] [bug, TUI] Zellij Incompatibility | 18 | 26 | Another TUI incompatibility, impacting terminal workflows. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #12334 | [oai] feat(tui): add /title terminal title configuration | OPEN | Improves terminal tab/window identification for TUI. |
| #14325 | fix(config): accept bool or table for tools.web_search | OPEN | Backwards-compatible configuration for web search tools. |
| #14170 | queue slash commands in tui | OPEN | Prevents TUI command failures during active turns. |
| #13860 | add guardian assessment thread items | OPEN | Shows automatic approval review state in thread history. |
| #14313 | Defer initial context insertion until the first turn | OPEN | Optimizes session startup by delaying context seeding. |
| #14262 | [sdk-v2] Add support for `builtinTools` and `manualToolExecution` | OPEN | Enhances Responses API with new tool execution capabilities. |
| #14178 | login: add custom CA support for login flows | OPEN | Enables custom CA certificates for secure login. |
| #14312 | Responses: set x-client-request-id as convesration_id when talking to responses | CLOSED | Improves request tracking to the Responses API. |

### Trends
- [pain] CLI hangs and unresponsiveness remain a critical user issue.
- [pain] Authentication errors (401) and connection drops are frequent.
- [feature] TUI enhancements (terminal titles, command queuing) are actively being developed.
- [feature] Tooling and configuration flexibility (web search, dynamic tools) are ongoing focus areas.
- [feature] Support for various platforms (macOS Intel) and integrations (LSP) are requested.
- [pain] Sandbox setup and usage on Windows present persistent challenges.
- [pain] Model behavior shifts and perceived limitations (early stopping, unanswered questions) cause user confusion.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- OpenCL team actively addressing TUI and Windows specific issues, with multiple related PRs merged.
- Persistent issues with AI model behavior and request handling continue to be a focus, with several bugs reported and PRs aiming to fix them.
- Plugin SDK enhancements and documentation clarity are ongoing development themes.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #10416 | [OPEN] OpenCode is not private by default? | 43 | 18 | Session naming uses external LLMs, potentially compromising privacy. |
| #2999 | [OPEN] [windows] Provide means to disable Ctrl-C | 27 | 18 | Ctrl+C crashes OpenCL on Windows terminals, hindering usability. |
| #16351 | [OPEN] [bug, opentui] TUI broken in tmux after 1.2.17 (found root cause) | 20 | 12 | TUI intermittently breaks in tmux, making input and interaction impossible. |
| #8417 | [OPEN] [bug] Gemini Bad Request with Github Copilot | 18 | 5 | Gemini models fail with Copilot authentication due to "Bad Request". |
| #8585 | [OPEN] copilot provider models is so much slower lately | 17 | 8 | Copilot models in OpenCL are experiencing significant slowdowns. |
| #16470 | [OPEN] [bug, core] Code output unreadable in light mode | 17 | 6 | Formatted code is invisible in light mode, making content unreadable. |
| #7602 | [DISCUSSION] [FEATURE]: Native Model Fallback / Failover Support | 15 | 49 | Lacks ability to define fallback between different models on failure. |
| #4804 | [CLOSED] [bug, opentui, perf] High CPU usage | 15 | 4 | CPU usage steadily increases and remains high even when idle on MacOS. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #17017 | [needs:issue, needs:compliance] fix: fixes an ACP interoperability issue when OpenCode is used with the Agent Client Protocol Python SDK over `stdio` | OPEN | Fixes ACP interoperability with Python SDK via `stdio`. |
| #17016 | [needs:issue, needs:compliance] fix: fixes an ACP interoperability issue when OpenCode is used with the Agent Client Protocol Python SDK over `stdio` | CLOSED | Fixes ACP interoperability with Python SDK via `stdio`. |
| #13854 | [needs:issue] fix(tui): stop streaming markdown/code after message completes | OPEN | Prevents streaming markdown/code after a message is fully received. |
| #17015 | Fix/issue 16982 agent current undefined | OPEN | Fixes TUI crash due to undefined `agent.current()` in certain scenarios. |
| #16941 | [contributor] feat(plugin): add getAuth, route, model.select and AuthLoaderResult to plugin SDK | OPEN | Enhances plugin SDK for authentication and routing capabilities. |
| #17013 | [contributor, needs:compliance] fix(app): skip editor reconcile during IME composition | OPEN | Prevents editor re-renders from disrupting IME input. |
| #17010 | fix(session): use parentID instead of message ID ordering in prompt loop | OPEN | Fixes infinite assistant loop in web sessions by correcting prompt ordering. |
| #8546 | feat(cli): rework server for webui (safe by default) | CLOSED | Reworks CLI server for web UI with safer default configurations. |

### Trends
- [pain] TUI stability and compatibility issues across different terminal multiplexers (tmux, WezTerm).
- [pain] Windows-specific issues, including keyboard shortcuts (Ctrl+C) and general usability problems.
- [feature] Enhancements to the Plugin SDK for greater functionality and integration.
- [pain] Performance degradation and slowness reported with LLM providers.
- [pain] Issues with code readability and rendering, particularly in different color modes.
- [pain] Persistent "Bad Request" errors and authentication problems with specific LLMs and providers.
- [feature] Improving documentation clarity and consistency for installation and features.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*