# OpenClaw Ecosystem Digest 2026-03-09

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-09 11:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- New `openclaw backup` CLI commands introduced for local state archives, including configuration-only backups and workspace exclusion.
- macOS specific fixes address gateway restarts via `launchctl` and potential timeouts.
- Recurring execution stalls and tool failures are a significant pain point for users.

### Releases
- v2026.3.8: OpenClaw 2026.3.8 released, with Mac assets reusing beta artifacts.
- v2026.3.8-beta.1: OpenClaw 2026.3.8-beta.1 released with added `openclaw backup` commands and macOS onboarding gate.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | [enhancement] Internationalization (i18n) & Localization Support | 92 | 1 | Community requests for broader accessibility unmet due to bandwidth. |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | 41 | 6 | False positives disrupt API usage and user trust. |
| [#75](https://github.com/openclaw/openclaw/issues/75) | [enhancement, help wanted] Linux/Windows Clawdbot Apps | 37 | 59 | Missing native support hinders cross-platform adoption. |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | [bug] Windows: openclaw plugins install fails with spawn EINVAL | 22 | 2 | Plugin installation failures on Windows block feature expansion. |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | [bug] Matrix: bot cannot verify its own account for E2EE (requestOwnUserVerification missing) | 20 | 3 | E2EE limitations prevent secure communication on Matrix. |
| [#35077](https://github.com/openclaw/openclaw/issues/35077) | [bug, regression] [Bug]: You made openclaw a broken disaster, nothing works | 16 | 2 | Severe regressions render the application unusable post-update. |
| [#36822](https://github.com/openclaw/openclaw/issues/36822) | [bug, bug:behavior] [Bug]: Config-change-triggered restart fails via launchctl (ETIMEDOUT), gateway enters degraded state, memory indexes stuck at zero for hours | 15 | 0 | Config changes cause instability and data access issues on macOS. |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) | [bug, regression] [Bug]: Exec and tools keep breaking | 15 | 0 | Frequent breaking of core execution tools hinders agent functionality. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| [#40933](https://github.com/openclaw/openclaw/pull/40933) | fix(macOS): use kickstart -k as primary restart method for LaunchAgent | OPEN | Fixes macOS gateway restarts by using a more robust command. |
| [#40928](https://github.com/openclaw/openclaw/pull/40928) | fix(bluebubbles): trim leading newlines from message text | OPEN | Prevents unwanted formatting in BlueBubbles messages. |
| [#40372](https://github.com/openclaw/openclaw/pull/40372) | feat(agents): add contextInjection mode to skip workspace files on subsequent messages | OPEN | Optimizes token usage by skipping redundant bootstrap file injection. |
| [#40926](https://github.com/openclaw/openclaw/pull/40926) | Skip plugin reinstalls when npm updates are already current | OPEN | Improves plugin update efficiency by checking versions first. |
| [#39226](https://github.com/openclaw/openclaw/pull/39226) | fix(voice-call): add speed and instructions to OpenAI TTS config schema | OPEN | Enhances OpenAI TTS configuration options in voice-call extension. |
| [#39312](https://github.com/openclaw/openclaw/pull/39312) | fix(daemon): extract schtasks result code across Windows versions and locales | OPEN | Improves reliability of Windows task result code extraction. |
| [#40890](https://github.com/openclaw/openclaw/pull/40890) | test(voice-call): add comprehensive unit tests for tunnel functionality | OPEN | Increases confidence in voice-call tunnel stability. |
| [#40921](https://github.com/openclaw/openclaw/pull/40921) | fix(config): include unknown keys in strict schema errors | OPEN | Improves clarity of configuration validation errors. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | critical | No |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | [bug] Windows: openclaw plugins install fails with spawn EINVAL | high | No |
| [#35077](https://github.com/openclaw/openclaw/issues/35077) | [bug, regression] [Bug]: You made openclaw a broken disaster, nothing works | critical | No |
| [#36822](https://github.com/openclaw/openclaw/issues/36822) | [bug, bug:behavior] [Bug]: Config-change-triggered restart fails via launchctl (ETIMEDOUT), gateway enters degraded state, memory indexes stuck at zero for hours | high | No |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) | [bug, regression] [Bug]: Exec and tools keep breaking | high | No |

### Trends
- Persistent issues with tool execution reliability and breaking.
- Regression bugs causing widespread application failures after updates.
- User experience concerns with API rate limit reporting and system stability on macOS.
- Demand for enhanced internationalization and localization support.
- Difficulties with plugin management and installation on Windows.
- Ongoing need for broader platform support (Linux/Windows apps).
- Users reporting message ordering conflicts and duplicate messages in channels.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The Claw ecosystem shows a divergence in focus: OpenClaw faces stability and reliability regressions while enhancing core features. PicoClaw is experiencing rapid development, driven by feature requests for AI interaction and platform integration. NanoClaw is prioritizing security and expanding its channel support, reflecting a mature approach to platform integration and risk mitigation.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 36994  | 8   | 2        | 🟡 steady |
| PicoClaw | 1275   | 10  | 0        | 🟢 rapid |
| NanoClaw | 872    | 10  | 0        | 🟢 rapid |

### OpenClaw vs Peers
- **Advantage:** OpenClaw boasts advanced backup CLI commands, a feature absent in PicoClaw and NanoClaw.
- **Gap:** OpenClaw lags behind PicoClaw and NanoClaw in active PR submission, indicating a slower development pace.
- **Gap:** PicoClaw and NanoClaw are actively expanding channel integrations (IRC, QQ, Feishu, etc.), a broad area not as emphasized in OpenClaw's recent activity.
- **Roadmap Difference:** PicoClaw is clearly pushing towards autonomous web operations, a distinctly ambitious direction not seen in the other projects.

### Shared Directions
- **Enhanced Security:** All projects show explicit or implicit focus on security, ranging from credential management (NanoClaw) to fixing API rate limit false positives (OpenClaw) and exploring security components (PicoClaw). (OpenClaw, PicoClaw, NanoClaw)
- **Improved Channel Integrations:** Expanding and stabilizing integrations with various messaging platforms is a common goal. (OpenClaw, PicoClaw, NanoClaw)
- **Robust Local State Management:** Features like backup commands (OpenClaw) and organized skill management (PicoClaw, NanoClaw) suggest a need for reliable local data handling. (OpenClaw, PicoClaw, NanoClaw)
- **Cross-Platform Support:** Efforts to ensure smooth operation and installation on different operating systems are evident. (OpenClaw, PicoClaw, NanoClaw)
- **Developer Experience:** Improvements in build processes, logging, and configuration ease are common themes for better maintainability and usability. (OpenClaw, PicoClaw, NanoClaw)

### Trend Signals
- **AI Agent Autonomy:** The strong push for autonomous browser operations (PicoClaw) signals a growing trend towards agents that can independently interact with the web.
- **Platform Integration Maturity:** The widespread emphasis on diverse channel integrations (PicoClaw, NanoClaw) indicates a maturing ecosystem where agents must seamlessly connect to existing communication tools.
- **Security-First Development:** Critical security fixes and features around credential management are becoming non-negotiable, driven by user demand and potentially regulatory pressures.
- **Multi-Provider/Multi-Runtime Flexibility:** The drive to support various AI models and providers (NanoClaw, PicoClaw) reflects a move away from vendor lock-in and towards adaptable AI solutions.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- The repository saw a significant increase in PR activity with 81 PRs submitted in the last 24 hours, indicating active development.
- Several new enhancement requests were opened, including feature requests for autonomous browser operations and IRC integration.
- No new releases were published in the last 24 hours.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #302 | [type: enhancement] [Feature] ghcr.io/sipeed/picoclaw is private | 6 | 2 | Making the GHCR container public is a core requirement for broader accessibility. |
| #293 | [type: roadmap] Feature: Autonomous Browser Operations | 5 | 4 | Enables AI to interact with websites, expanding PicoClaw's capabilities significantly. |
| #1017 | [type: enhancement, priority: low, domain: tool] [Feature] Command security component, based on go ebpf | 3 | 0 |  Essential for enterprise adoption and user safety in resource-constrained environments. |
| #63 | [type: enhancement, domain: channel, domain: corn] [Feature Request] Manage cronjobs within session | 2 | 0 |  Integrates cronjob management into chat platforms, improving user experience. |
| #1260 | [type: enhancement, domain: channel] [Feature] Could we add an IRC integration feature similar to OpenClaw? | 1 | 0 |  Extends PicoClaw's connectivity to another popular communication platform. |
| #1219 | [type: enhancement, domain: skill] Feature Request: Add uninstall_skill command | 1 | 0 |  Improves skill management and cleanup, vital for maintaining an organized environment. |
| #1245 | [type: bug, domain: skill] [BUG]skill安装不全 | 1 | 0 |  A critical bug affecting skill installation integrity. |
| #1247 | [type: bug, domain: provider] [BUG] OpenRouter provider keep removing "openrouter/" prefix when sending the POST request over the network | 1 | 0 |  A provider-specific bug impacting API communication. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #1275 | feat(web): migrate launcher to modular web frontend/backend and improve management UX | OPEN | Overhauls launcher with modular web architecture, enhancing UX. |
| #1250 | [type: enhancement, domain: config, go] add model command to set default model | OPEN | Introduces a command to easily change the default AI model. |
| #1175 | [type: bug, domain: channel] feat(feishu): split messages with >5 tables to avoid API limit | OPEN | Prevents API limits in Feishu by splitting large markdown messages. |
| #1271 | [type: enhancement] Enhance model selection and add footer navigation instructions | CLOSED | Improves model selection and adds navigation instructions. |
| #406 | [type: enhancement, domain: config] feat: write log on file | CLOSED | Implements configurable file-based logging for audit trails. |
| #630 | [type: enhancement, domain: channel, domain: config] feat(signal): add Signal channel via signal-cli | OPEN | Adds Signal messaging support through signal-cli integration. |
| #1274 | [type: enhancement, domain: ci, domain: build] feat(release): add macOS binary notarization via goreleaser | CLOSED | Integrates macOS binary notarization for releases. |
| #1273 | [type: enhancement, domain: provider, domain: config, go] * add minimax provider | CLOSED | Adds support for the Minimax AI provider. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1245 | [BUG]skill安装不全 | high | No |
| #1247 | [BUG] OpenRouter provider keep removing "openrouter/" prefix when sending the POST request over the network | high | No |
| #1242 | [BUG]QQ channel无法正确更具bindings区分agent | medium | No |
| #1262 | [BUG] About MCP | medium | No |
| #1256 | [BUG] spawn does not propagate proxy settings from model config to subagent environment | medium | No |

### Trends
- Growing demand for advanced AI capabilities like autonomous browser operations.
- Continued focus on improving channel integrations (IRC, Telegram Topics).
- Persistent need for robust security features, especially for enterprise use.
- Efforts to enhance developer experience through improved Docker images and CLI tools.
- Community interest in expanding provider support and optimizing configuration.
- Addressing bugs related to skill installation and provider communication.
- Enhancing logging and user feedback mechanisms for better debugging and UX.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- New PRs focus on enhancing security, expanding channel support (QQ, Feishu, DingTalk, Marmot), and improving multi-runtime capabilities.
- Several issues highlight critical security vulnerabilities related to credential exposure and message sanitization.
- Ongoing work strengthens media handling, per-group credential management, and refines the IPC communication.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #80 | Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 19 | 36 | Enables flexibility and reduces vendor lock-in. |
| #869 | (feat): Per-group credential management and interactive reauth via channels | 1 | 0 | Enhances security & user experience for multiple groups. |
| #722 | unified channel media support | 1 | 0 | Crucial for full functionality across all channels. |
| #865 | Using containers alone doesn't make you more secure | 0 | 0 | Addresses fundamental security trust issues in current architecture. |
| #828 | fix(tools): schedule_task says ISO8601 but code requires RFC3339 with timezone | 1 | 0 | Prevents silent failures in scheduled task scheduling. |
| #553 | Container execution fails after WhatsApp connection recovery | 2 | 0 | Impacts usability after network disruptions. |
| #842 | Security: WebFetch/WebSearch results not sanitized — vulnerable to Anthropic refusal string injection | 0 | 0 | Critical vulnerability risks session termination. |
| #737 | [Security] API Key Exposure via Process Environment Inspection | 1 | 1 | Security flaw allows agent to access secrets. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #871 | fix: harden credential proxy using unconditional OAuth injection, streaming, per-request creds | OPEN | Fixes security vulnerability by improving credential handling. |
| #869 | skill: Per-group credential management and safe interactive reauth via channels | OPEN | Adds per-group credentials and secure reauthentication for skills. |
| #722 | unified channel media support | OPEN | Standardizes media handling across all supported channels. |
| #850 | feat: channel-agnostic attachment interface and download pipeline | OPEN | Creates a shared interface for attachment handling. |
| #872 | feat: add Feishu (飞书) channel skill | CLOSED | Integrates NanoClaw with Feishu (Lark) for messaging. |
| #858 | feat: add Marmot / White Noise channel (MLS + Nostr E2EE) | OPEN | Introduces E2EE group messaging via Marmot and Nostr. |
| #864 | feat: add DingTalk integration and support third-party Anthropic-compatible model endpoints | OPEN | Adds DingTalk support and flexible model endpoint configuration. |
| #816 | feat: replace file-based IPC with JSON-RPC 2.0 over stdio | OPEN | Upgrades IPC to a more robust JSON-RPC protocol. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #737 | [Security] API Key Exposure via Process Environment Inspection | High | No |
| #842 | Security: WebFetch/WebSearch results not sanitized — vulnerable to Anthropic refusal string injection | High | No |
| #865 | Using containers alone doesn't make you more secure | High | No |
| #828 | fix(tools): schedule_task says ISO8601 but code requires RFC3339 with timezone | High | No |
| #553 | Container execution fails after WhatsApp connection recovery | Medium | No |

### Trends
- Growing demand for multi-runtime support beyond Claude.
- Increasing focus on security vulnerabilities and robust credential management.
- Expansion of channel integrations into new platforms like QQ, Feishu, DingTalk, and Marmot.
- Need for standardized and efficient media handling across all channels.
- Community is actively contributing fixes and features, indicating high engagement.
- Ongoing refinement of IPC mechanisms for better inter-process communication.
- Enhancements for user experience with per-group settings and interactive reauthentication.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*