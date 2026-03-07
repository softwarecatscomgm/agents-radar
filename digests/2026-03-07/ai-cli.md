# AI CLI Tools Community Digest 2026-03-07

> Generated: 2026-03-07 11:22 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI landscape is rapidly evolving, with core tools like Claude Code and OpenAI Codex addressing critical stability and feature gaps. OpenCode, while newer, is quickly iterating on usability and platform-specific fixes. All are grappling with enhancing developer experience through better plugin support and robust execution environments.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 9 | 8 | 1 | 🟢 |
| OpenAI Codex | 8 | 8 | 6 | 🟡 |
| OpenCode | 8 | 8 | 0 | 🟡 |

### Shared Directions
- **Robust Execution & Sandboxing:** Enhancing agent interruption handling, guardian approvals, and sandboxing policies for safer and more reliable code execution. (OpenAI Codex, Claude Code)
- **Plugin Development & Ecosystem:** Improving developer experience through better documentation, schema validation, and support for diverse hook types. (Claude Code, OpenCode)
- **Platform-Specific Bug Fixes:** Addressing critical issues on Windows, including path handling, MCP subsystem failures, and security flagging. (OpenCode, OpenAI Codex, Claude Code)
- **API Call & Tool Usage Reliability:** Resolving errors in tool execution, response handling, and ensuring API calls are processed without data loss. (OpenCode, Claude Code)
- **Usability Enhancements:** Implementing features like Vim motion support and better TUI rendering for improved user interaction. (OpenCode, Claude Code)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Recurring tasks, plugin dev | Developers, CI/CD | Feature-rich, plugin-centric |
| OpenAI Codex | Agent control, robustness | Professional developers, teams | Evolving agent framework |
| OpenCode | Usability, Windows support | General developers, beginners | Rapid iteration, platform focus |

### Trend Signals
- Growing demand for integrated voice dictation and microphone input in CLI interfaces.
- Increased user friction around rate limits, usage tracking, and API authentication.
- Community drive for standardized skill locations and better ecosystem agent discoverability.
- Persistent issues with core tool integration (bash, file editing) impacting CLI reliability.
- Strong focus on developer experience for building and extending AI agent functionality.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 514 | document-typography | N/A | OPEN | Improves typographic quality by preventing widow words, orphan paragraphs, and numbering misalignment. |
| 83 | skill-quality-analyzer & skill-security-analyzer | N/A | OPEN | Meta skills for analyzing quality and security of Claude Skills. |
| 210 | frontend-design | N/A | OPEN | Enhances clarity and actionability of frontend design guidance for Claude. |
| 95 | system-documentation-flowcharts | N/A | OPEN | Provides comprehensive system documentation and flowcharts for evidence management. |
| 147 | codebase-inventory-audit | N/A | OPEN | Audits codebases to identify orphaned code, gaps, and bloat for cleanup. |
| 181 | SAP-RPT-1-OSS predictor | N/A | OPEN | Predicts SAP business data using SAP's open-source tabular foundation model. |

### Demand Trends
- Making skills work with AWS Bedrock integration.
- Standardizing skill interfaces using MCPs.
- Implementing agent governance patterns for AI systems.
- Enhancing the `skill-creator` for better efficiency and adherence to guidelines.
- Addressing the need for community contribution guidelines in the skills repo.

### Pending Skills
- [PR #514](https://github.com/anthropics/skills/pull/514) `document-typography`: Addresses common typographic issues in generated documents.
- [PR #83](https://github.com/anthropics/skills/pull/83) `skill-quality-analyzer` & `skill-security-analyzer`: Adds meta-skills for quality and security analysis.
- [PR #210](https://github.com/anthropics/skills/pull/210) `frontend-design`: Improves clarity and actionability of frontend design skills.
- [PR #154](https://github.com/anthropics/skills/pull/154) `shodh-memory`: Introduces a persistent memory system for AI agents.
- [PR #147](https://github.com/anthropics/skills/pull/147) `codebase-inventory-audit`: A skill for auditing codebases for cleanup and documentation.

### TL;DR
The community is actively seeking to improve skill quality, developer experience, and broaden integration capabilities, with a particular focus on foundational elements like documentation and quality analysis.

---

### Highlights
- New `/loop` command and cron scheduling for recurring prompts.
- Significant memory leak issues remain top concerns.
- Multiple PRs focus on improving plugin development and documentation.

### Releases
- v2.1.71: Added `/loop` command for recurring prompts and cron scheduling tools.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #4953 | Claude Code Memory Leak - Process Grows to 120+ GB RAM and Gets OOM Killed | 67 | 57 | Severe memory leak impacting usability on Linux systems. |
| #22543 | Cowork feature creates 10GB VM bundle that severely degrades performance | 38 | 98 | Cowork feature causing extreme performance degradation. |
| #3505 | [BUG] Bash commands always timeout after 2 minutes despite successful completion | 15 | 1 | Bash commands have a fixed 2-minute timeout. |
| #11225 | [BUG] Complex bash syntax fails with preprocessing (reproducible, workaround exists but inconsistent) | 13 | 3 | Complex bash syntax issues under preprocessing. |
| #20369 | Orphaned subagent process leaks memory when parent terminal session terminated | 11 | 0 | Subagents leak memory after termination, requiring manual kill. |
| #25057 | [BUG] Shift+Enter in Claude for Windows No Longer Works for NewLine | 8 | 8 | Shift+Enter newline functionality broken on Windows. |
| #26996 | [BUG] Edit tool silently converts tabs to spaces, causing repeated match failures on tab-indented files | 8 | 8 | Edit tool mangles tab indentation, breaking file matching. |
| #31757 | Sandbox UI: tab cycling not working on /sandbox screen | 6 | 3 | Sandbox UI tab navigation broken. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #31732 | feat(feature-dev): add dry-run preview and iterative PR workflow | OPEN | Enhances feature development with dry-run and iterative PRs. |
| #31728 | docs(plugin-dev): document MCP server deduplication behavior | OPEN | Clarifies how duplicate MCP servers are handled. |
| #31723 | feat(plugin-dev): add HTTP hook type support to validate-hook-schema.sh | OPEN | Adds HTTP hook support to schema validation script. |
| #31721 | Fix hookify plugin imports missing CLAUDE_PLUGIN_ROOT fallback | OPEN | Resolves missing `CLAUDE_PLUGIN_ROOT` for Python hooks. |
| #31717 | Fix hooks.json schema to use direct format across all plugins | OPEN | Standardizes `hooks.json` schema for consistency. |
| #31701 | fix: respect $TMPDIR and os.tmpdir() instead of hardcoding /tmp/claude | OPEN | Fixes hardcoded `/tmp/claude` paths for broader compatibility. |
| #31699 | feat(code-review): add --model flag to override agent model selection | OPEN | Allows overriding agent models in code review. |
| #31698 | fix(code-review): strengthen step 1 gating agent reliability | OPEN | Improves reliability of the initial code review gating. |

### Trends
- [pain] Ongoing severe memory leaks in core components.
- [pain] Performance degradation related to features like "Cowork".
- [pain] Cross-platform inconsistencies and bugs (Windows, macOS, Linux).
- [pain] Issues with core tools like bash execution and file editing.
- [feature] Enhancements for automated and recurring tasks with `/loop` and cron.
- [feature] Focus on improving plugin development experience and documentation.
- [feature] New features for code review and editing safety.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Significant increase in rate-limit related bugs and user complaints, particularly concerning swift downgrades and recalculation issues.
- Multiple reports of "stream disconnected before completion" errors across CLI and app usage, indicating network or backend connectivity problems.
- Active development on agent interruption handling, guardian approvals, and sandboxing policies points towards ongoing improvements in robust execution and security.

### Releases
- rust-v0.112.0-alpha.10: Release 0.112.0-alpha.10
- rust-v0.112.0-alpha.9: Release 0.112.0-alpha.9
- rust-v0.112.0-alpha.8: Release 0.112.0-alpha.8
- rust-v0.112.0-alpha.7: Release 0.112.0-alpha.7
- rust-v0.112.0-alpha.6: Release 0.112.0-alpha.6
- rust-v0.112.0-alpha.5: Release 0.112.0-alpha.5

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #13568 | [OPEN] [bug, rate-limits] Usage dropping too quickly | 159 | 46 | Users report rapid usage limit downgrades and credit consumption. |
| #12764 | [OPEN] [bug, windows-os, CLI] The codex cli giving: 401 unauthorized | 50 | 1 | Users experience 401 errors and disconnected CLI streams. |
| #3000 | [OPEN] [enhancement, extension, TUI] Voice dictation / microphone input | 21 | 77 | High demand for voice input integration in the Codex UI. |
| #10665 | [OPEN] [enhancement, codex-web, azure] Feature Request: Native Azure DevOps (Azure Repos) Integration for Codex | 11 | 25 | Request for native integration with Azure DevOps repositories. |
| #1721 | [OPEN] [enhancement] Add Langfuse Tracing Integration in Codex CLI | 10 | 9 | Proposal to integrate Langfuse for better code generation observability. |
| #13567 | [CLOSED] [bug, CLI, app] The week limit moved from March 9 to March 11 and usage did not get recalculated properly | 8 | 2 | Issues with week limit reset and incorrect usage recalculation. |
| #13025 | [OPEN] [bug, mcp, app] Codex Desktop ignores project .codex/config.toml MCP server (Serena) and only loads ~/.codex/config.toml | 8 | 6 | Desktop app fails to load project-specific MCP configuration. |
| #13245 | [OPEN] [bug, CLI] Stream disconnected before completion: error sending request for url (https://chatgpt.com/backend-api/codex/responses) | 8 | 3 | Frequent "stream disconnected" errors impacting CLI functionality. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #13692 | Add guardian approval MVP | OPEN | Introduces guardian reviewer workflow for approvals. |
| #13593 | Stabilize flaky tests | OPEN | Improves test stability, especially for Windows and app-server. |
| #13777 | Fix subagent notifications after interruptive resend | OPEN | Corrects subagent notification logic after interruptions. |
| #13850 | feat: make interrupt state not final for multi-agents | OPEN | Allows agents to recover and re-process after interruption. |
| #13829 | add js_repl polling and reuse unified_exec managed process lifecycle | OPEN | Enables polling mode for JS REPL and reuses managed processes. |
| #13702 | fix(subagents) share execpolicy by default | OPEN | Propagates execution policy changes to subagents by default. |
| #13448 | seatbelt: honor split filesystem sandbox policies | OPEN | Enhances macOS Seatbelt policy generation for sandboxing. |
| #13670 | Add Fast mode status-line indicator | CLOSED | Adds a visual indicator for "Fast mode" in the status line. |

### Trends
- [pain] Frequent "stream disconnected" errors across CLI and app usage.
- [pain] Issues with rate limit calculation, sudden downgrades, and usage resets.
- [feature] Strong user interest in voice dictation and microphone input for the UI.
- [feature] Requests for enhanced integration with Azure DevOps and expanded Git repository support.
- [pain] Authentication and reauthentication issues with MCP servers.
- [feature] Ongoing work on advanced agent control, interruption handling, and sandboxing.
- [pain] Windows-specific bugs affecting app, CLI, and tooling compatibility (e.g., path handling, NVM, gh CLI).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- Vim motion support in input boxes is a highly requested feature, mirroring capabilities in ClaudeCode.
- Multiple Windows-specific bugs are actively being addressed, including a Trojan detection issue and unresponsive MCP subsystem.
- Enhancements to tool usage, model support, and plugin integration are ongoing.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #1764 | [tui, discussion] [FEATURE]: vim motions in input box | 26 | 109 | Improves user experience for text input, similar to other editors. |
| #16314 | [bug, windows] Trojan: Script/Wacatac.H!m! | 17 | 0 | Prevents OpenCode from launching on Windows due to security software flagging it. |
| #10986 | [discussion] [FEATURE]: Support standard skills location at `.agents/skills/` | 13 | 10 | Standardizes skill directory, aiding agent development and organization. |
| #1662 | AI_APICallError: `tool_use` ids were found without `tool_result` blocks immediately after | 13 | 4 | Indicates issues with tool execution and response handling in API calls. |
| #3523 | [bug] [BUG] tools[21].function.name': string too long. Expected a string with maximum length 64, but got a string with length 65 instead. | 11 | 0 | Causes silent failures when tool names exceed length limits. |
| #14273 | [CLOSED] [bug, zen] [bug] Free usage exceeded. Add creddits (when using Zen free models) | 10 | 0 | Prevents usage of free models even with sufficient balance. |
| #13791 | [bug, web] Models output duplicate responses | 9 | 0 | Leads to redundant and unhelpful output from models. |
| #11398 | [bug] Infinite loop | 8 | 2 | Indicates a critical issue preventing normal operation. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #16464 | feat: @-mention for files outside the working directory | OPEN | Enables referencing files outside the current workspace. |
| #13854 | fix(tui): stop streaming markdown/code after message completes | OPEN | Correctly renders full messages in TUI by fixing streaming logic. |
| #6763 | fix(windows): path handling fixes for Windows | CLOSED | Addresses numerous path-related issues on Windows systems. |
| #14678 | feat: tiny change to use subagent `color` as left `border-color` for `InlineTool` subagent messages | OPEN | Improves visual distinction of subagent messages in chat. |
| #15893 | fix: re-read files after formatting in apply_patch | OPEN | Ensures accurate file state after applying patches and formatting. |
| #16451 | docs: add nerve-agent to ecosystem agents list | CLOSED | Adds a new agent to the ecosystem documentation. |
| #10275 | feat(bun): track provider packages for automatic cleanup | OPEN | Optimizes package management by tracking provider dependencies. |
| #12822 | [contributor] fix(env): remove Env namespace, use direct process.env access | OPEN | Simplifies environment variable handling, resolving past issues. |

### Trends
- [feature] Vim motions in input boxes for improved usability.
- [pain] Windows-specific issues: Trojan detection, MCP subsystem failure, "Operation not permitted" errors.
- [feature] Enhancements for tool usage and API call error handling.
- [feature] Support for new models (e.g., Grok 4.2) and provider configurations.
- [pain] Duplicate responses from models and infinite loop bugs.
- [feature] Improvements to plugin integration and ecosystem agent listings.
- [pain] Documentation mismatches with actual behavior for keybindings.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*