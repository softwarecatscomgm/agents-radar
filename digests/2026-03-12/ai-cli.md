# AI CLI Tools Community Digest 2026-03-12

> Generated: 2026-03-12 11:33 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI tool landscape is characterized by ongoing efforts to enhance model reliability and user experience. Key themes include robust agent behavior, seamless integration with development workflows, and addressing critical performance and authentication issues. Developers are actively refining core functionalities while responding to community requests for broader platform support and advanced feature sets.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 68 | 8 | 2 | 🟡 |
| OpenAI Codex | 58 | 8 | 7 | 🟡 |
| OpenCode | 45 | 8 | 0 | 🟡 |

### Shared Directions
- **Model Reliability and Instruction Following:** Crucial for consistent AI agent behavior. (Claude Code, OpenAI Codex, OpenCode)
- **TUI/CLI Usability and Performance:** Addressing hangings, slowness, and interaction glitches. (Claude Code, OpenAI Codex, OpenCode)
- **Platform Support and Integration:** Expanding reach (Windows ARM64) and enhancing IDE connectivity. (OpenCode, OpenAI Codex)
- **Security and Authentication:** Mitigating vulnerabilities and resolving access issues. (Claude Code, OpenAI Codex)
- **Tooling and Execution Stability:** Fixing issues with tool calls, builds, and Bun crashes. (OpenAI Codex, OpenCode)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | Agent capabilities, security | Developers, enterprise | Context-aware, memory management |
| OpenAI Codex | Core functionality, IDE integration | Developers, SaaS | Powerful LLM, extensible SDK |
| OpenCode | Stability, user experience | Developers, Linux/Windows | Feature-rich, community-driven |

### Trend Signals
- Persistent demand for more reliable model instruction following.
- High user interest in deeper IDE and remote development integration.
- Ongoing challenges with tool execution stability and dependency management.
- Growing need for platform-agnostic CLI and application support.
- User experience friction points around authentication and TUI/CLI responsiveness.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 1 | document-typography | undefined | OPEN | Controls typographic quality in AI documents, preventing orphans and widows. |
| 2 | skill-quality-analyzer | undefined | OPEN | Analyzes skill quality across structure, documentation, and examples. |
| 3 | frontend-design | undefined | OPEN | Improves clarity and actionability of frontend design instructions. |
| 4 | shodh-memory | undefined | OPEN | Adds persistent context for AI agents across conversations. |
| 5 | codebase-inventory-audit | undefined | OPEN | Audits codebases for orphaned code, gaps, and bloat. |
| 6 | ODT skill | undefined | OPEN | Creates, fills templates, and parses ODT files to HTML. |

### Demand Trends
- Enhanced skill creation tooling and best practices.
- Robust security and trust mechanisms for community skills.
- Improved user experience for skill management and discovery.
- Broader integration with external services and platforms (e.g., Google Workspace, SAP).
- Demand for AI governance and safety patterns in agent systems.

### Pending Skills
- PR #514: Add document-typography skill: https://github.com/anthropics/skills/pull/514 - Enhances document quality by addressing typographic issues.
- PR #83: Add skill-quality-analyzer and skill-security-analyzer to marketplace: https://github.com/anthropics/skills/pull/83 - Introduces meta-skills for analyzing skill quality and security.
- PR #210: Improve frontend-design skill clarity and actionability: https://github.com/anthropics/skills/pull/210 - Refines the frontend-design skill for better AI execution.
- PR #154: Add shodh-memory skill: persistent context for AI agents: https://github.com/anthropics/skills/pull/154 - Enables persistent memory for AI agents.
- PR #147: Add codebase-inventory-audit skill: https://github.com/anthropics/skills/pull/147 - Provides a comprehensive skill for codebase inspection.

### TL;DR
The community is focused on robust skill development, quality assurance, and secure integration.

---

### Highlights
- New `v2.1.74` release includes actionable context suggestions and `autoMemoryDirectory` setting.
- Significant focus on memory leak investigations and fixes across multiple issues.
- Several new bugs reported related to agent behavior and TUI interactions.

### Releases
- v2.1.74: Added actionable suggestions to `/context` command and `autoMemoryDirectory` setting.
- v2.1.73: Introduced `modelOverrides` and improved SSL error guidance.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #33120 | [BUG] API Error: Rate limit reached on Cowork only - account-specific, persists across machines | 34 | 6 | Critical for Cowork functionality, impacting specific accounts. |
| #26224 | [BUG] Claude Code is hanging / freezing / stuck on heaps of prompts for 5-20minutes or more. | 29 | 36 | Major performance issue causing significant user delays. |
| #30112 | [BUG]Cowork network egress allowlist not working - custom domains blocked with 403 blocked-by-allowlist | 11 | 7 | Network blocking issue affecting custom domains in Cowork. |
| #17240 | Claude ignores explicit user instructions within session, breaks promises immediately, pattern persists despite repeated corrections | 8 | 2 | Persistent model obedience issue affecting reliability. |
| #11947 | [BUG] Prompt-based Stop hook cannot response correct JSON | 7 | 4 | Tooling issue impacting structured output. |
| #29384 | [Bug] --worktree flag causes CLI to hang indefinitely | 7 | 4 | CLI command hangs, blocking workflow. |
| #31841 | Model ignores in-context rules on first attempt, self-corrects only after failure or user intervention | 6 | 0 | Model inconsistency in applying rules. |
| #24361 | [BUG] Cannot exit /config settings screen — Esc key does not work | 6 | 0 | UI usability issue preventing configuration exits. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #33472 | feat(code-review): pass confirmed=true when posting inline comments | CLOSED | Prevents test comments on customer PRs after GraphQL errors. |
| #30636 | Update 25+ stale documentation URLs to new canonical domains | OPEN | Updates documentation links to new primary domains. |
| #33443 | fix: Update Dockerfile to use native installer | OPEN | Uses native installer and Node.js 24.14 in Dockerfile. |
| #33397 | fix(code-review): reduced permission prompts, prevented unnecessary cd calls | OPEN | Reduces code-review plugin permission prompts. |
| #33390 | feat(plugins): hook-integrity-guard security plugin | OPEN | Protects Claude from modifying its own security infrastructure. |
| #33351 | docs: add workaround for false-positive update banner on brew/winget | OPEN | Documents workaround for update banner issues. |
| #33312 | fix(ralph-loop): escape special characters in ARGUMENTS to prevent bash injection (#33309) | OPEN | Prevents bash injection in `ARGUMENTS`. |
| #33234 | fix(commit-commands): handle initial commit when no commits exist yet | OPEN | Fixes commit command for repositories without prior commits. |

### Trends
- [pain] Multiple reports of high memory usage, particularly involving ArrayBuffers.
- [pain] Issues with TUI elements not working as expected (e.g., Esc key, text visibility).
- [pain] Model inconsistencies in following instructions and applying rules.
- [feature] Enhancements to agent capabilities and security plugins are ongoing.
- [feature] Continued work on improving developer environment setup (Dockerfile, DevContainer).
- [pain] Worktree CLI hangs indefinitely, impacting user workflows.
- [pain] Rate limiting errors impacting specific functionalities like Cowork.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Critical bug #14048 ([CLOSED]) concerning Codex CLI hanging indefinitely on all prompts has seen significant community engagement.
- Multiple ongoing issues related to the Codex Desktop App and CLI stability and performance continue to be reported and discussed.
- Several PRs focus on refining core functionalities like permissions, context handling, and sandboxing, with new Python SDK additions.

### Releases
- rust-v0.115.0-alpha.11: 0.115.0-alpha.11
- rust-v0.115.0-alpha.9: 0.115.0-alpha.9
- rust-v0.115.0-alpha.7: 0.115.0-alpha.7
- rust-v0.115.0-alpha.6: 0.115.0-alpha.6
- rust-v0.115.0-alpha.5: 0.115.0-alpha.5
- rust-v0.115.0-alpha.4: 0.115.0-alpha.4
- rust-v0.114.0-alpha.7: 0.114.0-alpha.7

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#14048](https://github.com/openai/codex/issues/14048) | [CLOSED] [bug, agent] All models — Codex CLI hangs indefinitely on all prompts, no response generated | 127 | 77 | Core CLI functionality compromised; reports span multiple versions and models. |
| [#12764](https://github.com/openai/codex/issues/12764) | [OPEN] [bug, windows-os, CLI] The codex cli giving: 401 unauthorized | 66 | 2 | Authentication errors preventing CLI usage; impacts Windows users. |
| [#10450](https://github.com/openai/codex/issues/10450) | [OPEN] [enhancement, app] Remote Development in Codex Desktop App | 47 | 320 | Feature request for enhanced IDE integration in the desktop app. |
| [#9115](https://github.com/openai/codex/issues/9115) | [OPEN] [bug, TUI] Zellij Incompatibility | 19 | 27 | Terminal UI issue affecting specific terminal multiplexers. |
| [#11678](https://github.com/openai/codex/issues/11678) | [OPEN] [bug, windows-os, TUI] Typing on the CLI since 0.100 is very slow | 15 | 2 | Performance degradation in CLI typing; specifically on Windows. |
| [#12852](https://github.com/openai/codex/issues/12852) | [CLOSED] [bug, app] Codex Desktop threads stuck in “Thinking” and cannot be stopped unless background process is force-killed | 14 | 0 | Desktop app threads freezing; requires manual termination. |
| [#6080](https://github.com/openai/codex/issues/6080) | [OPEN] [bug, TUI] Image pasting issue | 13 | 4 | Issue with image ingestion in the TUI. |
| [#5946](https://github.com/openai/codex/issues/5946) | [OPEN] [bug, tool-calls] Dotnet build execution takes indefinite amount of time without success | 12 | 12 | Tool call failures for specific build commands. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#14446](https://github.com/openai/codex/pull/14446) | Add Python SDK public API and examples | OPEN | Provides public Python SDK, examples, and documentation setup. |
| [#14437](https://github.com/openai/codex/pull/14437) | Dispatch tools when code mode is not awaited directly | OPEN | Improves tool dispatching for code mode workers and request handling. |
| [#14426](https://github.com/openai/codex/pull/14426) | Decouple request permissions and request permissions tool features | OPEN | Separates request permissions logic for better flexibility. |
| [#13860](https://github.com/openai/codex/pull/13860) | add smart approvals to app-server and tui | OPEN | Integrates Smart Approvals into the app-server and TUI. |
| [#14435](https://github.com/openai/codex/pull/14435) | Add Python app-server SDK | OPEN | Introduces the Python app-server SDK component. |
| [#14173](https://github.com/openai/codex/pull/14173) | fix: preserve split filesystem semantics in linux sandbox | OPEN | Ensures correct filesystem behavior within the Linux sandbox. |
| [#13644](https://github.com/openai/codex/pull/13644) | fix: preserve zsh-fork escalation fds in unified-exec PTYs | OPEN | Fixes file descriptor handling for `zsh-fork` in `unified-exec`. |
| [#12610](https://github.com/openai/codex/pull/12610) | [oai] tui: add /fork turn picker UI | OPEN | Enables UI for forking conversations from any turn in TUI. |

### Trends
- [pain] Codex CLI intermittently hangs or fails to generate responses.
- [pain] Authentication errors (401 Unauthorized) persist for CLI users, especially on Windows.
- [feature] Users are requesting enhanced remote development capabilities within the Codex Desktop App.
- [pain] Performance issues, like slow typing in the CLI and stuck threads in the Desktop App, are recurring.
- [feature] Enhancements for managing and preserving context across multiple compactions are desired.
- [pain] Compatibility issues with specific terminal environments (e.g., Zellij) and bugs related to tool execution are reported.
- [pain] Linux sandbox behavior and security features (e.g., trusted directories) are subjects of ongoing discussion and refinement.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- OpenTUI sees multiple bug reports focusing on rendering and interaction issues, particularly with Chinese text and input.
- Several core bugs are being addressed, including tool JSON malformation, Bun crashes, and connection errors related to certificates, as well as a new issue with tool execution being aborted.
- Feature requests highlight the desire for improved model fallback mechanisms, enhanced Windows support, and better integration with development environments like JetBrains IDEs.

### Releases
(No releases in the past 24 hours)

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #11112 | [BUG] always stuck at  “Preparing write...” | 40 | 19 | Ongoing critical issue impacting core functionality of writing to files. |
| #3765 | [BUG] Failed to initialize OpenTUI render library: Failed to open library. | 29 | 0 | Blocks core OpenTUI functionality upon initial setup. |
| #4340 | [FEATURE]: Add Windows arm64 support | 24 | 22 | Addresses critical platform support for broader adoption. |
| #8785 | [BUG] Bun has crashed | 18 | 5 | Indicates instability with a core runtime dependency. |
| #7602 | [FEATURE]: Native Model Fallback / Failover Support | 17 | 49 | High demand for enhanced model resilience and reliability. |
| #4035 | [FEATURE]: Ability to ignore AGENTS.md | 15 | 4 | Feature request to improve context management and control. |
| #7891 | [BUG] OpenCode TUI Chinese Text Display Issue | 14 | 0 | Affects usability for a significant user base in non-English locales. |
| #7934 | On macOS 12.6.8 M1, the desktop version displays a blank page after installation. | 13 | 1 | Major blocker for macOS users on specific hardware. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #15614 | fix(acp): backfill missing text chunks from part updates | OPEN | Fixes delayed/truncated assistant output in ACP/JetBrains plugins. |
| #13854 | fix(tui): stop streaming markdown/code after message completes | OPEN | Prevents incomplete rendering of messages in TUI. |
| #17172 | fix: route prompt input to parent session when viewing subagent | OPEN | Correctly routes input for subagent sessions. |
| #16073 | fix: improve compaction continuation to prevent agent from stopping | OPEN | Ensures agents continue working after compaction. |
| #17170 | fix(cli): remove stray dot from --help logo | OPEN | Minor visual fix for CLI help output. |
| #11161 | fix(opencode): prevent plugin deduplication collision for index.js entry points | OPEN | Resolves plugin loading conflicts with specific entry points. |
| #16686 | fix(app): reuse open project root for nested folders | OPEN | Prevents duplicate project entries when opening nested folders. |
| #17154 | fix(cost): charge cached tokens at input rate when provider has no cache pricing | OPEN | Corrects cost calculation for caching scenarios. |

### Trends
- [bug] Recurring issues with OpenTUI rendering, text display (especially Chinese), and input handling.
- [bug] Stability concerns with Bun crashes and general "tool execution aborted" errors persist.
- [feature] Strong user interest in enhancing model fallback and failover capabilities.
- [feature] Demand for improved Windows support, particularly ARM64 architecture.
- [pain] Users experiencing difficulties with certificate verification errors affecting model fetching.
- [pain] OAuth token expiration leading to frequent re-logins is a recurring user experience issue.
- [feature] Requests for better integration within IDEs (JetBrains) and more control over context management (AGENTS.md).

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*