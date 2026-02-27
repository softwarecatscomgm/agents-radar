# OpenClaw Ecosystem Digest 2026-02-27

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-02-27 07:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- External Secrets Management is now fully supported with a `openclaw secrets` workflow for auditing, configuring, applying, and reloading secrets with runtime snapshot activation.
- Strict validation, safer migration scrubbing, ref-only auth-profile support, and dedicated documentation have been introduced.

### Releases
- v2026.2.26: openclaw 2026.2.26
- v2026.2.26-beta.1: openclaw 2026.2.26-beta.1

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | [OPEN] [enhancement] Internationalization (i18n) & Localization Support | 71 | 0 | Expanding user base and accessibility globally. |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | Add DingTalk as a first-install channel option | 20 | 6 | Improves initial setup experience and platform integration. |
| [#3917](https://github.com/openclaw/openclaw/issues/3917) | [CLOSED] [bug, r: support] [Bug]: windows installer error | 18 | 1 | Fixes critical installation failure on Windows. |
| [#13991](https://github.com/openclaw/openclaw/issues/13991) | [CLOSED] [enhancement] [Proposal] Associative Hierarchical Memory: Human-Like Recall for Agent Memory Systems | 18 | 0 | Introduces advanced memory capabilities for agents. |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | [OPEN] [bug] Windows: openclaw plugins install fails with spawn EINVAL | 16 | 1 | Resolves recurring plugin installation issues on Windows. |
| [#23861](https://github.com/openclaw/openclaw/issues/23861) | [CLOSED] [bug] [Bug]: Open claw installation fails on npm: ! npm install failed for openclaw@latest | 16 | 0 | Fixes a widespread npm installation failure. |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | [OPEN] [bug] Matrix: bot cannot verify its own account for E2EE (requestOwnUserVerification missing) | 12 | 2 | Restores secure communication in Matrix channels. |
| [#11283](https://github.com/openclaw/openclaw/issues/11283) | [OPEN] [bug] [Bug]: OpenClaw tries to use local Ollama CLI instead of remote API endpoint | 11 | 2 | Corrects Ollama integration for remote API usage. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#28424](https://github.com/openclaw/openclaw/pull/28424) | fix(sessions): use agentId instead of storePath for transcriptPath resolution | OPEN | Correctly resolves session transcript paths. |
| [#28418](https://github.com/openclaw/openclaw/pull/28418) | fix(typing): skip typing indicator for isolated cron sessions | OPEN | Prevents phantom "typing..." for background jobs. |
| [#28419](https://github.com/openclaw/openclaw/pull/28419) | fix(cron): harden nextWakeAtMs against corrupt state | OPEN | Stabilizes cron scheduler against bad job state. |
| [#25531](https://github.com/openclaw/openclaw/pull/25531) | docs: add official Development section with codebase analysis docs | OPEN | Enhances developer documentation. |
| [#28422](https://github.com/openclaw/openclaw/pull/28422) | fix(models): honor explicit minimax-portal apiKey over oauth placeholder | OPEN | Correctly uses explicit API keys over OAuth. |
| [#28421](https://github.com/openclaw/openclaw/pull/28421) | fix(infra): clamp heartbeat setTimeout delay to prevent 32-bit overflow loop [AI] | OPEN | Prevents potential gateway crashes from long heartbeats. |
| [#20969](https://github.com/openclaw/openclaw/pull/20969) | Add DeJoy channel extension (Matrix-compatible protocol) | OPEN | Adds dedicated support for DeJoy protocol. |
| [#27880](https://github.com/openclaw/openclaw/pull/27880) | feat(tts/talk): Add minimax as tts provider | OPEN | Integrates MiniMax Speech as a TTS provider. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#3917](https://github.com/openclaw/openclaw/issues/3917) | [Bug]: windows installer error | Critical | Yes |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | [bug] Windows: openclaw plugins install fails with spawn EINVAL | High | No |
| [#11283](https://github.com/openclaw/openclaw/issues/11283) | [Bug]: OpenClaw tries to use local Ollama CLI instead of remote API endpoint | High | No |
| [#1405](https://github.com/openclaw/openclaw/issues/1405) | [Bug]: OpenRouter API rate limit failover | High | No |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | Performance: Workspace file injection wastes 93.5% of token budget | High | No |

### Trends
- Growing number of issues related to Windows installation and plugin failures.
- Frequent reports of API authentication and rate limit issues across providers.
- Demand for broader channel support and improved integration with new services.
- Continued focus on performance optimizations and token efficiency.
- User requests for more intuitive model selection and management.
- Ongoing challenges with specific platform integrations (e.g., Matrix, Discord).
- Increased interest in advanced memory and agent capabilities.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The LLM agent framework ecosystem shows robust activity, with OpenClaw leading in feature maturity and stability, while PicoClaw and NanoClaw focus on rapid expansion of channel support and core functionality improvements. All projects indicate a strong community drive towards broader integration and enhanced agent capabilities.

### Activity
| Project    | Issues | PRs | Releases     | Momentum |
|------------|--------|-----|--------------|----------|
| OpenClaw   | 8      | 8   | 2            | 🟢       |
| PicoClaw   | 8      | 8   | 0            | 🟢       |
| NanoClaw   | 7      | 8   | 0            | 🟡       |

### OpenClaw vs Peers
- OpenClaw offers mature secrets management, a significant advantage over peers.
- OpenClaw's stability and fewer critical bugs suggest a more mature codebase.
- PicoClaw and NanoClaw are rapidly expanding channel support, a key differentiator.
- NanoClaw has slower issue resolution and merge rates compared to OpenClaw and PicoClaw.
- OpenClaw's roadmap includes advanced memory systems, a futuristic direction not yet evident in peers.

### Shared Directions
- Expanding channel support to include more messaging platforms (PicoClaw, NanoClaw).
- Improving integration stability and bug fixing for existing channels like Discord and Telegram (OpenClaw, PicoClaw, NanoClaw).
- Enhancing file and attachment handling capabilities for richer communication (PicoClaw, NanoClaw).
- Addressing LLM provider compatibility and configuration challenges (OpenClaw, PicoClaw, NanoClaw).
- Implementing more robust plugin and extension architectures for extensibility (PicoClaw, NanoClaw).
- Optimizing performance and addressing token efficiency (OpenClaw).

### Trend Signals
- Growing demand for cross-platform messaging integration.
- Increased focus on agent reliability and error handling (e.g., time confusion, message loops).
- Drive for enhanced security, particularly around secrets management and dependency vulnerabilities.
- Development of advanced AI memory and recall mechanisms.
- The need for flexible deployment and sandboxing options.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Active development continues with a high volume of PRs, focusing on new channel integrations and feature enhancements.
- Several critical bugs are being addressed, including Telegram message handling, Groq API compatibility, and Discord image sending issues.
- File attachment support and improved agent iteration limits are key feature development areas.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #310 | [BUG] Telegram messages stuck on "Thinking..." due to allowlist mismatch | 7 | 0 | Prevents Telegram users from receiving timely responses. |
| #619 | Bug: downloaded media files deleted before async consumer reads them | 7 | 0 | Data loss for media handling, impacting user experience. |
| #99 | Feat: Add Whatsapp channel | 5 | 0 | Expands platform reach to a major messaging service. |
| #61 | Implement file sending and receiving in chat. | 5 | 4 | Essential for rich communication and data exchange. |
| #441 | [enhancement] Add file attachment support to message tool for Discord/Telegram | 5 | 0 | Enables agents to send files, enhancing utility. |
| #639 | [BUG] Picoclaw can't send image over discord like OpenClaw | 5 | 1 | Broken image sharing on Discord, hindering communication. |
| #285 | Discord integration - occasionaly error during responses | 5 | 0 | Unreliable Discord responses impact user interaction. |
| #381 | [BUG]Telegram messages show raw JSON tool calls instead of formatted content | 5 | 1 | Poor user experience with unreadable tool call output. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #640 | fix: ShengSuanYun default BaseUrl configuration and model ID normalize. | OPEN | Corrects configuration for a specific AI provider. |
| #473 | feat(hooks/plugin): add lifecycle hooks + phase-1 plugin contract | OPEN | Introduces plugin system for extensibility. |
| #825 | feat(feishu): implement TypingCapable interface with emoji reaction | CLOSED | Adds typing indicator for Feishu channel. |
| #830 | feat(channels): add google chat channel support | OPEN | Integrates PicoClaw with Google Chat. |
| #853 | feat(discord): add proxy support and tests | OPEN | Enhances Discord connectivity with proxy support. |
| #852 | * update wechat qrcode & delete unused mp4 file | CLOSED | Minor updates for Wechat integration. |
| #655 | Added a native WhatsApp channel implementation. | OPEN | Adds native support for the WhatsApp channel. |
| #851 | feat(providers): add Cloudflare AI Gateway support | OPEN | Integrates Cloudflare AI Gateway as a provider. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #310 | [BUG] Telegram messages stuck on "Thinking..." due to allowlist mismatch | critical | No |
| #619 | Bug: downloaded media files deleted before async consumer reads them | high | No |
| #639 | [BUG] Picoclaw can't send image over discord like OpenClaw | high | No |
| #748 | [BUG] Groq API compatibility: tool call format error | high | No |
| #651 | [BUG] Incorrect volume mount path for config.json in docker-compose.yml causes container to crash | critical | No |

### Trends
- Growing demand for support of new messaging channels (WhatsApp, Google Chat, etc.).
- Ongoing efforts to improve Telegram and Discord integration stability and functionality.
- Recurring issues with message length limits across various channels, especially Telegram.
- Strong focus on enhancing file and attachment handling capabilities.
- Investigations into various LLM provider compatibility and configuration issues (Groq, Cloudflare).
- Feature requests for improved agent iteration management and tool usage.
- Development of more robust plugin and extension architectures.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- **New Messaging Channel Integration:** Efforts are underway to add Signal as a messaging channel, mirroring existing integrations like Telegram and Slack.
- **Third-Party API Compatibility:** A fix is being developed to ensure compatibility with third-party Anthropic-compatible APIs, addressing "Not logged in" errors.
- **Setup and Configuration Improvements:** Several PRs focus on refining the `/setup` process, addressing issues like WhatsApp sync failures and Docker permission problems.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #29 | feat: Add Signal as messaging channel | 3 | 0 | Expands communication channel options for users. |
| #342 | feat: readSecrets() support for third-party Anthropic-compatible API environment variables | 1 | 0 | Fixes integration with alternative LLM providers. |
| #526 | Agent is repeatedly confused about the local time | 0 | 1 | Impacts agent reliability and task scheduling. |
| #537 | Issues during /setup | 0 | 0 | Hinders new user onboarding and setup process. |
| #529 | Message loop fallback causes duplicate messages on fast successive requests | 0 | 0 | Leads to redundant agent responses and user confusion. |
| #527 | Main group CLAUDE.md documents write access to read-only paths | 0 | 0 | Prevents agents from modifying workspace files correctly. |
| #520 | Proposal: Optional BoxLite sandbox backend (experimental) | 0 | 0 | Offers an additional isolation option for container execution. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #412 | feat(setup): add host machine authorization passthrough | OPEN | Adds host machine auth as setup option. |
| #424 | fix(add-telegram): add state/code mismatch detection to SKILL.md | OPEN | Improves Telegram skill reliability. |
| #488 | fix(add-discord): add state/code mismatch detection to SKILL.md | OPEN | Enhances Discord skill stability. |
| #512 | feat(setup): detect docker permission issues and prompt user for group fix | OPEN | Fixes Docker permission issues during setup. |
| #551 | Fix Rollup CVE via npm audit fix | OPEN | Patches security vulnerability in Rollup dependency. |
| #510 | skill: add /add-image-sending | OPEN | Enables agents to send images. |
| #550 | fix(agent-runner): break for-await loop after result to unblock IPC handling | OPEN | Resolves issue with blocked IPC handling. |
| #549 | feat: add /use-avian skill for Avian LLM provider | OPEN | Adds support for Avian LLM provider. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #529 | Message loop fallback causes duplicate messages on fast successive requests | high | No |
| #527 | Main group CLAUDE.md documents write access to read-only paths | medium | No |
| #526 | Agent is repeatedly confused about the local time | medium | No |
| #537 | Issues during /setup | medium | No |
| #342 | feat: readSecrets() support for third-party Anthropic-compatible API environment variables | medium | No |

### Trends
- Active development on adding Signal as a new communication channel.
- Ongoing work to improve compatibility with various LLM providers.
- Multiple PRs addressing bugs and usability issues within the `/setup` process.
- Refinements to existing channel integrations like Telegram and Discord to prevent silent failures.
- Exploration of new sandbox options like BoxLite for enhanced isolation.
- Attention to agent reliability regarding time zone confusion and message handling.
- Security patches for dependencies like Rollup are being integrated.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*