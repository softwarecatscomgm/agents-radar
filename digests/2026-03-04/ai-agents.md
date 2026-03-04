# OpenClaw Ecosystem Digest 2026-03-04

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-04 11:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- A significant number of recent bugs highlight issues with macOS arm64 builds and general application stability regressions across multiple versions.
- Multiple issues point to failures in critical functionalities like plugin installation, gateway startup, and tool execution, impacting core OpenClaw features.
- Robust development activity is evident in PRs addressing various bug fixes and feature enhancements across agents, channels, and core gateway components.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | [enhancement] Internationalization (i18n) & Localization Support | 75 | 0 | Community demand for broader language accessibility |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | Add DingTalk as a first-install channel option | 29 | 10 | Enhancing initial setup with more communication tools |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | [bug] [Bug]: macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | 17 | 2 | macOS Intel users can't run recent versions |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) | [bug, regression] [Bug]: Vertex embedded runs fail with "Cannot convert undefined or null to object" on v2026.3.1 (Telegram + cron) | 15 | 1 | Core Vertex integration broken for Telegram/cron |
| [#28835](https://github.com/openclaw/openclaw/issues/28835) | [bug] [Bug]: Telegram API requests fail with Network request failed after upgrade from v2026.2.23 to v2026.2.26 (Node HTTPS timeout while curl succeeds) | 13 | 1 | Unreliable Telegram communication post-upgrade |
| [#32833](https://github.com/openclaw/openclaw/issues/32833) | [bug, regression] [Bug]: exec plugin install fails on v2026.3.2 | 8 | 0 | Critical exec plugin installation failure |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | 7 | 1 | Misleading rate limit errors impacting all models |
| [#33453](https://github.com/openclaw/openclaw/issues/33453) | [bug, bug:behavior] [Bug]: Telegram Duplicate Messages with Partial Streaming | 7 | 0 | Duplicate and auto-deleted messages in Telegram |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#34364](https://github.com/openclaw/openclaw/pull/34364) | fix(discovery): guard tailscale JSON.parse against malformed output | OPEN | Prevents discovery crashes from malformed tailscale output |
| [#28884](https://github.com/openclaw/openclaw/pull/28884) | fix(agents): preserve mutating tool warnings when suppressToolErrors is enabled | OPEN | Fixes tool warnings when suppress errors is active |
| [#34360](https://github.com/openclaw/openclaw/pull/34360) | feat(agent): add --model flag for per-turn model override | OPEN | Allows per-turn model selection via CLI flag |
| [#28192](https://github.com/openclaw/openclaw/pull/28192) | Gateway: extract startup config preparation | OPEN | Refactors gateway startup config for better organization |
| [#25053](https://github.com/openclaw/openclaw/pull/25053) | fix(tools): add firecrawl block to config schema and respect FIRECRAWL_BASE_URL env | OPEN | Validates Firecrawl config and respects env var |
| [#28950](https://github.com/openclaw/openclaw/pull/28950) | feat(config): add models.providers.*.enabled flag to disable providers | OPEN | Allows disabling model providers via config |
| [#28932](https://github.com/openclaw/openclaw/pull/28932) | fix(control-ui): enable Save for default agent model/fallback edits | OPEN | Enables saving edits for default agent models |
| [#34363](https://github.com/openclaw/openclaw/pull/34363) | fix(sandbox): mount bundled skills dir read-only so agents can read SKILL.md | OPEN | Ensures agents can read SKILL.md in sandbox mode |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | [bug] [Bug]: macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | Critical | No |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) | [bug, regression] [Bug]: Vertex embedded runs fail with "Cannot convert undefined or null to object" on v2026.3.1 (Telegram + cron) | Critical | No |
| [#32833](https://github.com/openclaw/openclaw/issues/32833) | [bug, regression] [Bug]: exec plugin install fails on v2026.3.2 | Critical | No |
| [#34052](https://github.com/openclaw/openclaw/issues/34052) | [bug, bug:crash] [Bug]: Health monitor restarts ALL channels (stale-socket) in multi-account setup — 2026.3.2 | Critical | No |
| [#33468](https://github.com/openclaw/openclaw/issues/33468) | [bug, regression] [Bug]: googlechat not starting with error "failed (unknown) - Cannot convert undefined or null to object" | High | No |

### Trends
- Growing number of regressions and critical bugs impacting core functionalities like installations and channel integrations.
- Ongoing issues with macOS compatibility, particularly for Intel-based machines.
- High demand for internationalization and localization support.
- User frustration with misleading API rate limit errors.
- Need for improved handling of tool execution and error reporting.
- Community interest in integrating with newer protocols like MCP.
- Frequent issues reported with newer versions, highlighting potential stability concerns.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The Claw family of projects shows a mix of stability and evolving pain points. OpenClaw grapples with significant regressions and macOS compatibility issues, while PicoClaw focuses on essential integrations and user experience improvements, and NanoClaw emphasizes streamlined setup and robust agent control.

### Activity
| Project   | Issues | PRs | Releases | Momentum |
|-----------|--------|-----|----------|----------|
| OpenClaw  | 9      | 9   | 0        | 🟡 steady |
| PicoClaw  | 8      | 5   | 0        | 🟡 steady |
| NanoClaw  | 8      | 8   | 0        | 🟢 rapid |

### OpenClaw vs Peers
- **OpenClaw:** Continues to be the most feature-rich but suffers from critical stability regressions and platform-specific build issues (macOS arm64), a stark contrast to the more focused development in PicoClaw and NanoClaw.
- **PicoClaw:** Lags in feature set compared to OpenClaw but prioritizes core integrations (like DingTalk) and ecosystem growth (OpenClaw gateway node), which is less of a focus for NanoClaw.
- **NanoClaw:** Leads in user-friendliness with setup script enhancements and TUI, and boasts strong agent control features (sender allowlist), areas where OpenClaw and PicoClaw are less mature.
- **Roadmap Divergence:** OpenClaw's focus on extensive agent/channel support appears hampered by stability, while PicoClaw seeks direct integration, and NanoClaw aims for a more accessible, self-hosted experience.

### Shared Directions
- **Enhanced Stability and Error Handling:** All projects need to address bug reports impacting core functionalities and improve error message clarity. (OpenClaw, PicoClaw, NanoClaw)
- **Improved User Experience & Onboarding:** Simplifying initial setup and configuration is a common goal. (PicoClaw, NanoClaw)
- **Expanded Communication Channel Integrations:** Community and development efforts are geared towards supporting more communication platforms. (OpenClaw, PicoClaw, NanoClaw)
- **Flexible Model and Provider Management:** Enabling granular control over AI model usage and provider configuration is a growing necessity. (OpenClaw, PicoClaw, NanoClaw)
- **Robust Session and Context Management:** Ensuring reliable conversation history and context for agents is critical for usability. (PicoClaw, NanoClaw)

### Trend Signals
- **Platform Dependency Causing Regressions:** Build and compatibility issues (e.g., macOS arm64) are a significant hurdle for widespread adoption.
- **Emphasis on User-Friendly Deployment:** Simplified setup scripts and Docker integration are becoming key differentiators for self-hosted solutions.
- **Growing Demand for Granular Control:** Users want more fine-grained control over agent behavior, model selection, and communication channel features.
- **Integration as a Strategic Imperative:** Projects are actively seeking ways to integrate with each other and broader ecosystems (e.g., PicoClaw as OpenClaw node).
- **Community-Driven Feature Prioritization:** High engagement on features like internationalization and new channel integrations demonstrates user needs.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- New bugs reported related to API key configuration, voice processing, and cron job behavior.
- Several enhancements proposed for improved Docker integration and agent capabilities.
- Active PR development focuses on refining error handling, tool execution, and provider compatibility.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #1006 | #Error: error creating provider: failed to create provider for model "picolm-local": api_key or api_base is required for HTTP-based protocol "openai" | 4 | 0 | Prevents local model setup; critical for initial user experience. |
| #507 | [Feature] Possible to run a PicoClaw instance as a Node of an OpenClaw gateway instance? | 4 | 1 | Key for ecosystem integration and broader adoption. |
| #1037 | [BUG] - Your website is linking to a fraudulent project | 4 | 0 | Reputational risk; needs immediate correction. |
| #995 | [Feature] Add multi-user support | 4 | 0 | Essential for shared use; improves accessibility. |
| #572 | [Feature] Add `/new` or `/clear` command to start a fresh session | 3 | 1 | Enhances usability by managing conversation context. |
| #806 | [Feature]: Add webUI support (Refactoring now) | 2 | 7 | Lowers barrier to entry for non-technical users. |
| #1025 | [BUG] Command timed out after 1m0s | 1 | 0 | Affects agent task execution; needs configurable timeout. |
| #1068 | [BUG] Unclear error message when API returns HTML instead of JSON | 0 | 0 | Hinders debugging; needs clearer API error reporting. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #1075 | fix(openai_compat): clarify HTML response parse errors | OPEN | Improves error reporting for misconfigured API bases. |
| #1071 | Feat/add tool enable or disable configuration | OPEN | Allows granular control over available AI tools. |
| #732 | feat(memory): JSONL-backed session persistence | OPEN | Implements robust session persistence using JSONL files. |
| #1077 | feat: add Git repository skill installer and gateway background service | OPEN | Enables skill installation from Git and gateway background management. |
| #1066 | fix deepseek-chat bug | OPEN | Resolves DeepSeek provider

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- New setup script enhancements released, adding interactive service configuration and Docker auto-detection.
- Significant progress on channel integration with new skills for Feishu (Lark) and unified media support.
- Ongoing focus on agent security and control with sender allowlist features and model configuration.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#384](https://github.com/qwibitai/nanoclaw/issues/384) | Nanoclaw needs a skill marketplace/registry | 8 | 13 | Centralizes auditable skills for easier adoption and security. |
| [#664](https://github.com/qwibitai/nanoclaw/issues/664) | different between nanoclaw vs claude code | 2 | 0 | Clarifies Nanoclaw's unique value proposition for agentic capabilities. |
| [#690](https://github.com/qwibitai/nanoclaw/issues/690) | Add connectivity validation to setup script | 1 | 0 | Ensures smooth service integration post-setup. |
| [#689](https://github.com/qwibitai/nanoclaw/issues/689) | Add Docker auto-detection to setup script | 1 | 0 | Streamlines self-hosted service discovery. |
| [#688](https://github.com/qwibitai/nanoclaw/issues/688) | Add interactive setup script for services | 1 | 0 | Simplifies complex service configuration for users. |
| [#687](https://github.com/qwibitai/nanoclaw/issues/687) | Add service templates for common self-hosted apps | 1 | 0 | Accelerates setup with pre-defined configurations for popular services. |
| [#678](https://github.com/qwibitai/nanoclaw/issues/678) | Feature: sender allowlist for trigger gating and message filtering | 1 | 0 | Enhances security by controlling agent invocation. |
| [#692](https://github.com/qwibitai/nanoclaw/issues/692) | [bug] DB queries fetch unbounded message history — no LIMIT clause | 0 | 0 | Potential performance and memory issue with large message histories. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#691](https://github.com/qwibitai/nanoclaw/pull/691) | feat: per-group timezone architecture with context injection | OPEN | Ensures AI agent always uses local timezone for prompts. |
| [#441](https://github.com/qwibitai/nanoclaw/pull/441) | feat: add TUI interaction | OPEN | Introduces a Terminal UI for interactive chat. |
| [#657](https://github.com/qwibitai/nanoclaw/pull/657) | fix: atomic claim prevents scheduled tasks from executing twice | OPEN | Fixes a race condition in the task scheduler. |
| [#628](https://github.com/qwibitai/nanoclaw/pull/628) | fix: normalize wrapped WhatsApp messages before reading content | CLOSED | Improves handling of special WhatsApp message types. |
| [#627](https://github.com/qwibitai/nanoclaw/pull/627) | fix: inject date/time context into all agent prompts | OPEN | Adds explicit date/time to prompts for LLM reliability. |
| [#592](https://github.com/qwibitai/nanoclaw/pull/592) | feat: add third-party model support | CLOSED | Enables usage of custom API endpoints for LLMs. |
| [#677](https://github.com/qwibitai/nanoclaw/pull/677) | feat: configurable model selection | CLOSED | Allows runtime model selection via CLI command. |
| [#682](https://github.com/qwibitai/nanoclaw/pull/682) | feat(slack): thread-aware reply routing and App Home DM fix | OPEN | Improves Slack channel integration and DM handling. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#692](https://github.com/qwibitai/nanoclaw/issues/692) | [bug] DB queries fetch unbounded message history — no LIMIT clause | High | No |
| [#685](https://github.com/qwibitai/nanoclaw/issues/685) | third-party model not work | Medium | No |
| [#684](https://github.com/qwibitai/nanoclaw/issues/684) | Agent Swarms: in-process subagents silently terminate when main agent completes turn (SDK/container mode) | Critical | No |
| [#603](https://github.com/qwibitai/nanoclaw/issues/603) | Fix website layout for mobile | Medium | No |
| (None from PRs) |  |  |  |

### Trends
- Increased focus on simplifying setup and configuration for new users.
- Expansion of channel support with new integrations for Feishu (Lark).
- Enhancements to agent control and security, including sender allowlists.
- Improvements in handling various message types across different platforms.
- Active development in agent swarms and subagent behavior.
- Growing interest in third-party model integration and configuration.
- Refactoring for improved inter-process communication (IPC) efficiency.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*