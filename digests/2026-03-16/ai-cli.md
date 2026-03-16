# AI CLI Tools Community Digest 2026-03-16

> Generated: 2026-03-16 11:50 UTC | Tools tracked: 3

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

### Ecosystem Snapshot
The AI CLI tool landscape is characterized by a rapid pace of development, with a strong emphasis on enhancing terminal user interface (TUI) stability, improving IDE integrations, and refining core functionality like authentication and context management. Users consistently express demand for more robust and predictable performance, especially across different operating systems.

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
| Claude Code | 34229 | 10 | 0 | 🟢 |
| OpenAI Codex | 14593 | 9 | 2 | 🟡 |
| OpenCode | 17318 | 8 | 1 | 🟢 |

### Shared Directions
- **TUI Stability & UX**: Addressing screen flickering, readability issues, and unwanted UI interactions. (Claude Code, OpenCode)
- **Platform Compatibility**: Resolving OS-specific bugs, especially on Windows. (Claude Code, OpenAI Codex, OpenCode)
- **Authentication & Billing Clarity**: Fixing auth errors and ensuring accurate plan/subscription displays. (Claude Code, OpenAI Codex)
- **IDE Integration**: Improving VS Code extensions and developer workflows. (Claude Code, OpenAI Codex)
- **Context Management**: Enhancing control over context limits and compaction. (OpenAI Codex, OpenCode)
- **Tool Execution Reliability**: Ensuring commands and custom providers function as expected. (Claude Code, OpenAI Codex, OpenCode)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
| Claude Code | TUI & IDE Integration | Developers using Claude | Direct API access, VS Code |
| OpenAI Codex | Core Functionality & Windows | Developers, enterprise users | Robust SDKs, platform focus |
| OpenCode | Configurability & Extensibility | Flexible AI users, coders | Modular design, customizable |

### Trend Signals
- Persistent demand for robust context window management.
- Significant user friction around authentication and billing discrepancies.
- Increasing user requests for cross-platform stability, particularly on Windows.
- Ongoing need for improved performance and reduced token consumption.
- Community driving feature requests for enhanced IDE and TUI capabilities.

---

## Per-Tool Detailed Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Community Highlights

> Data source: [anthropics/skills](https://github.com/anthropics/skills)

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
| 514 | document-typography | N/A | OPEN | Improves typographic quality control for AI-generated documents, preventing common visual errors. |
| 83 | skill-quality-analyzer | N/A | OPEN | Analyzes skills across structure, documentation, and security for marketplace readiness. |
| 210 | frontend-design | N/A | OPEN | Enhances clarity and actionability of frontend design guidance for Claude. |
| 335 | masonry-generate-image-and-videos | N/A | OPEN | Enables AI-powered image and video generation via Masonry CLI. |
| 181 | SAP-RPT-1-OSS predictor | N/A | OPEN | Predicts outcomes using SAP's open-source tabular foundation model for business data. |
| 486 | ODT skill | N/A | OPEN | Creates, fills, and parses OpenDocument Text files (ODT) to/from HTML. |

### Demand Trends
- Enhanced security for community skills to prevent impersonation and trust boundary abuse.
- Improved robustness and reliability of skill deployment and management APIs.
- Better alignment of `skill-creator` with operational best practices and token efficiency.
- Standardization of skill interaction through MCPs for predictable API exposure.
- Broader support for different compute environments, like AWS Bedrock.

### Pending Skills
- #514: Adds `document-typography` skill for controlling visual document quality. [Link](https://github.com/anthropics/skills/pull/514)
- #83: Integrates `skill-quality-analyzer` and `skill-security-analyzer` into the marketplace. [Link](https://github.com/anthropics/skills/pull/83)
- #335: Introduces `masonry-generate-image-and-videos` for AI media generation. [Link](https://github.com/anthropics/skills/pull/335)
- #181: Adds `SAP-RPT-1-OSS predictor` for SAP data analytics. [Link](https://github.com/anthropics/skills/pull/181)
- #486: Implements `ODT skill` for OpenDocument text manipulation. [Link](https://github.com/anthropics/skills/pull/486)

### TL;DR
The community's top ask is for improved security and reliability of the Claude Skills ecosystem, especially concerning trust boundaries and API stability.

---

### Highlights
- Screen flickering bug with in-progress calls remains the most discussed issue, indicating a significant TUI stability concern.
- Multiple issues updated on 2026-03-16 point to ongoing investigations or community engagement on core functionality like phone verification and VSCode extension behavior.
- Significant activity on PRs related to terminal scrolling, Windows workarounds, and CI updates suggests ongoing maintenance and platform improvements.

### Releases
(None)

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #769 | [BUG] In-progress Call causes Screen Flickering | 293 | 284 | High engagement on a critical TUI stability issue likely impacting UX. |
| #34229 | [BUG] Phone verification | 127 | 176 | High engagement on a core authentication/onboarding bug. |
| #22016 | [BUG] VSCode ext - "Fork conversation from here" doesn't do anything | 20 | 25 | Indicates a broken workflow in a key IDE integration. |
| #16446 | [FEATURE] LaTeX rendering in "Claude Code for VS Code" plugin | 12 | 31 | Community demand for improved scientific/mathematical rendering in IDE. |
| #34083 | Max plan: 1M context window shows 200k, Remote Control unavailable | 11 | 2 | User reports plan limitations not being met, affecting core features. |
| #31326 | [BUG] Thinking block content empty (thinking_len=0) since v2.1.69 — only encrypted signature returned | 11 | 0 | Indicates a potential data corruption or output issue in model responses. |
| #12383 | [BUG] Claude Code for Desktop always shows "Claude API Account" instead of subscription account (NOT caused by API key) | 10 | 4 | Authentication display bug, potentially confusing users about their plan status. |
| #32778 | [BUG] Claude unable to run any bash commands | 6 | 1 | Critical failure for users relying on core CLI shell integration. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #34798 | Root cause analysis: terminal scrolls to top during agent execution (Ink cursorUp+eraseLines) | CLOSED | Fixes terminal scrolling issue for agent output on Windows. |
| #34789 | Add Windows workaround for Chrome extension bridge connection failure | CLOSED | Provides a script to fix extension bridge issues on Windows. |
| #34862 | TEST-3001: Add HTML comment to top of README.md | OPEN | Updates README.md with a test comment. |
| #34865 | TEST-3002: Add HTML comment to top of README.md | OPEN | Updates README.md with another test comment. |
| #32755 | feat(plugins): add edit-verifier plugin for post-edit verification | OPEN | Adds a plugin to verify edits made by the Edit tool. |
| #34757 | Create XtVjH | CLOSED | (Undisclosed) |
| #34735 | ci: update actions | OPEN | Updates Continuous Integration actions. |
| #14842 | fix: update documentation links to point to the new Claude Code site | OPEN | Corrects documentation links to the updated website. |

### Trends
- [pain] Screen flickering in TUI persists as a major stability issue.
- [bug] Issues with platform-specific bugs (Windows, macOS) are frequently updated.
- [feature] Demand for enhanced IDE integrations (VS Code, Python dev containers) is present.
- [pain] Authentication and billing display discrepancies continue to cause user confusion.
- [feature] Users are requesting better handling of complex document formats like PDFs.
- [pain] Subagent output file management and context compaction issues impact workflow reliability.
- [feature] Users desire improved CLI interface features, such as message timestamps and agent context headers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Highlights
- Major focus on Windows-specific bugs, particularly around auth, tool execution, and memory management.
- Continued development on app server SDKs, exec server transport, and macOS sandboxing permissions.
- Ongoing issue with rapid token consumption and VS Code extension performance.

### Releases
- rust-v0.115.0-alpha.26: Pre-release build
- rust-v0.115.0-alpha.25: Pre-release build

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#12764](https://github.com/openai/codex/issues/12764) | The codex cli giving: 401 unauthorized | 69 | 4 | Authentication failures blocking CLI usage. |
| [#14593](https://github.com/openai/codex/issues/14593) | Still burning tokens very fast with today's VS Code extension update | 67 | 40 | High token usage impacting user costs. |
| [#4212](https://github.com/openai/codex/issues/4212) | Windows approval “Allow for this session” isn’t remembered | 42 | 22 | Windows security feature not persisting. |
| [#10917](https://github.com/openai/codex/issues/10917) | Thread disappeared that was inside a Project and on a Worktree | 21 | 5 | Data loss and thread persistence issues. |
| [#3269](https://github.com/openai/codex/issues/3269) | dotnet command hangs until timeout, with high cpu | 18 | 5 | .NET tool execution failures and resource drain. |
| [#10939](https://github.com/openai/codex/issues/10939) | Unable to set "gpt-5.3-codex" via /model. \| NO API | 16 | 2 | New model accessibility issues. |
| [#9370](https://github.com/openai/codex/issues/9370) | Mouse Properties dialog opens unexpectedly on Windows | 14 | 3 | Unwanted UI interactions during CLI use. |
| [#14671](https://github.com/openai/codex/issues/14671) | Subagent Custom Agent Model/Reasoning Config Not being Respected | 12 | 2 | Custom agent configurations ignored by system. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#14806](https://github.com/openai/codex/pull/14806) | feat: improve skills cache key to take into account config layering | OPEN | Fixes sub-agent config overrides and cache invalidation. |
| [#14804](https://github.com/openai/codex/pull/14804) | feat: explorer read only | OPEN | Implements read-only mode for the explorer. |
| [#14563](https://github.com/openai/codex/pull/14563) | core: preserve compaction tail writes and cap retry loop | OPEN | Safeguards compaction by preserving history and capping retries. |
| [#14771](https://github.com/openai/codex/pull/14771) | [oai] Add approved dynamic tool arguments steering | OPEN | Allows dynamic tool argument validation and replacement. |
| [#14707](https://github.com/openai/codex/pull/14707) | [oai] Log host app-server auth decisions for auth 401s | OPEN | Improves logging for app-server authentication events. |
| [#14665](https://github.com/openai/codex/pull/14665) | [oai] Use request permission profile in app server | OPEN | Updates app server permission requests to a unified profile. |
| [#14655](https://github.com/openai/codex/pull/14655) | [oai] Add exec-server transport for unified exec | OPEN | Introduces exec-server transport for coordinated command execution. |
| [#14648](https://github.com/openai/codex/pull/14648) | [oai] Publish codex app-server Python SDK core and bundled packages | OPEN | Publishes core and bundled Python SDK packages for app server. |

### Trends
- [pain] Widespread authentication errors (401 Unauthorized) on Windows CLI.
- [pain] High token consumption by VS Code extension and general usage.
- [feature] Improvements to Windows OS compatibility and stability, particularly around tool execution and background processes.
- [feature] Enhancements to app server SDKs and unified execution capabilities.
- [pain] Memory leaks and process management issues in the Codex App and on Windows.
- [feature] Development of new sandboxing features for macOS.
- [pain] Unexpected UI behavior and data loss issues within the app and CLI.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Highlights
- `v1.2.27` released with core fixes including VCS watcher logic and permission module cleanup.
- Multiple issues from early March continue to see high engagement, particularly around SSE timeouts and code display problems.
- Significant feature development is underway, including improved configuration options and enhanced TUI functionality.

### Releases
- v1.2.27: v1.2.27

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | [OPEN] [bug] always stuck at “Preparing write...” | 42 | 19 | Persistent issue affecting core write functionality for users. |
| [#17318](https://github.com/anomalyco/opencode/issues/17318) | [OPEN] [bug, core] Error： SSE read timed out | 33 | 22 | Widespread problem with timeouts during file writing operations. |
| [#16470](https://github.com/anomalyco/opencode/issues/16470) | [OPEN] [bug, core] Code output unreadable in light mode | 22 | 17 | Critical UI bug impacting code readability for a segment of users. |
| [#13546](https://github.com/anomalyco/opencode/issues/13546) | [OPEN] [bug, windows] [Bug] Custom OpenAI-compatible provider errors with "Unknown parameter: 'reasoningSummary'" for GPT-5 series models | 16 | 11 | Compatibility issue with custom providers and newer models. |
| [#4208](https://github.com/anomalyco/opencode/issues/4208) | [OPEN] [documentation] No opencode.json file | 16 | 5 | User confusion regarding essential configuration file location. |
| [#8140](https://github.com/anomalyco/opencode/issues/8140) | [OPEN] [enhancement] Feature Request: Configurable context limit and auto-compaction threshold | 13 | 25 | User demand for finer control over context management and cost optimization. |
| [#4704](https://github.com/anomalyco/opencode/issues/4704) | [OPEN] [bug, opentui, windows] /undo and /timeline undo does not revert file edits | 13 | 10 | Core functionality bug in undo/revert operations affecting file integrity. |
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | [OPEN] [opentui, discussion] [FEATURE]: Session context usage (similar to /context in Claude) | 11 | 54 | High demand for advanced context management features. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#17763](https://github.com/anomalyco/opencode/pull/17763) | fix(core): detect vLLM context overflow errors | OPEN | Handles context overflow from vLLM, improving stability. |
| [#17766](https://github.com/anomalyco/opencode/pull/17766) | fix(provider): treat Anthropic billing_error as context overflow for auto-compaction | CLOSED | Improves auto-compaction by recognizing Anthropic billing errors. |
| [#17774](https://github.com/anomalyco/opencode/pull/17774) | feat: auto-convert unsupported image formats (AVIF, HEIC) to PNG | OPEN | Enables AI vision processing of commonly unsupported image formats. |
| [#17758](https://github.com/anomalyco/opencode/pull/17758) | fix: sanitize JSON-escaped lone surrogates in API request body | OPEN | Resolves API errors caused by malformed Unicode in requests. |
| [#17784](https://github.com/anomalyco/opencode/pull/17784) | fix(ui): avoid WebKit diff viewer crashes | OPEN | Prevents crashes in the diff viewer on WebKit-based browsers. |
| [#17779](https://github.com/anomalyco/opencode/pull/17779) | fix(core): honor compaction.auto on provider overflow | OPEN | Ensures user-defined compaction settings are respected during overflow. |
| [#17709](https://github.com/anomalyco/opencode/pull/17709) | feat(opencode): biome LSP sensible defaults and LSP server message visibility | OPEN | Enhances LSP integration with better defaults and user feedback. |
| [#17764](https://github.com/anomalyco/opencode/pull/17764) | docs: Add JSDoc for Hash, Color, Context, and EventLoop utility namespaces | CLOSED | Improves code maintainability with detailed documentation. |

### Trends
- [pain] Persistent SSE timeouts impacting core functionality.
- [pain] Unreadable code output in light mode requires immediate attention.
- [feature] Growing demand for advanced context management and control.
- [feature] Need for more flexible and modular configuration options.
- [pain] Issues with undo/revert operations compromising file integrity.
- [feature] Enhancements for TUI and user interface interactions are active.
- [pain] Compatibility issues with custom OpenAI-compatible providers.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*