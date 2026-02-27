# OpenClaw Ecosystem Digest 2026-02-27

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-02-27 06:57 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- External Secrets Management introduces a full `openclaw secrets` workflow with runtime snapshot activation and improved validation.
- New i18n/l10n support is a highly requested feature, but current bandwidth is limited.
- Significant focus on message delivery reliability and error handling in the gateway.

### Releases
- v2026.2.26: External Secrets Management introduces a full `openclaw secrets` workflow.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | Internationalization (i18n) & Localization Support | 71 | 0 | Makes OpenClaw accessible to more users globally. |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | Add DingTalk as a first-install channel option | 20 | 6 | Improves onboarding for DingTalk users. |
| [#3917](https://github.com/openclaw/openclaw/issues/3917) | [Bug]: windows installer error | 18 | 1 | Fixes Windows installation failures. |
| [#13991](https://github.com/openclaw/openclaw/issues/13991) | [Proposal] Associative Hierarchical Memory: Human-Like Recall for Agent Memory Systems | 18 | 0 | Enhances agent memory recall capabilities. |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | Windows: openclaw plugins install fails with spawn EINVAL | 16 | 1 | Resolves Windows plugin installation issues. |
| [#23861](https://github.com/openclaw/openclaw/issues/23861) | Open claw installation fails on npm: ! npm install failed for openclaw@latest | 16 | 0 | Addresses critical installation failures. |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | Matrix: bot cannot verify its own account for E2EE (requestOwnUserVerification missing) | 12 | 2 | Enables secure E2EE communication on Matrix. |
| [#11283](https://github.com/openclaw/openclaw/issues/11283) | [Bug]: OpenClaw tries to use local Ollama CLI instead of remote API endpoint | 11 | 2 | Ensures correct Ollama API endpoint usage. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#27939](https://github.com/openclaw/openclaw/pull/27939) | fix(gateway): message delivery reliability with SQLite journal | OPEN | Improves message delivery reliability and recovery. |
| [#28412](https://github.com/openclaw/openclaw/pull/28412) | feat(pairing): add rate-limited pairing reminder | OPEN | Adds pairing reminders for users. |
| [#28413](https://github.com/openclaw/openclaw/pull/28413) | fix(android): send object params for node.canvas.capability.refresh | OPEN | Fixes Android canvas capability refresh RPC. |
| [#25531](https://github.com/openclaw/openclaw/pull/25531) | docs: add official Development section with codebase analysis docs | OPEN | Adds a dedicated development documentation section. |
| [#28365](https://github.com/openclaw/openclaw/pull/28365) | feat(pairing): add rate-limited pairing reminder | CLOSED | Adds pairing reminders for users. |
| [#28228](https://github.com/openclaw/openclaw/pull/28228) | fix(tui): preserve streamed text when tool-call delta truncates single text block | OPEN | Preserves text in TUI during tool calls. |
| [#28409](https://github.com/openclaw/openclaw/pull/28409) | fix(announce): prevent models from calling message tool during cron announce delivery | OPEN | Prevents announce deliveries from calling message tool. |
| [#16554](https://github.com/openclaw/openclaw/pull/16554) | fix(agent): prevent session deadlock on timeout during tool execution | OPEN | Prevents deadlocks during tool execution timeouts. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#3917](https://github.com/openclaw/openclaw/issues/3917) | [Bug]: windows installer error | high | Yes |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | Windows: openclaw plugins install fails with spawn EINVAL | high | No |
| [#23861](https://github.com/openclaw/openclaw/issues/23861) | Open claw installation fails on npm: ! npm install failed for openclaw@latest | high | No |
| [#11283](https://github.com/openclaw/openclaw/issues/11283) | [Bug]: OpenClaw tries to use local Ollama CLI instead of remote API endpoint | medium | No |
| [#1405](https://github.com/openclaw/openclaw/issues/1405) | [Bug]: OpenRouter API rate limit failover | medium | No |

### Trends
- High demand for internationalization and localization support.
- Persistent issues with Windows installer and plugin installations.
- Several reports of API rate limit failures and authentication errors.
- User requests for improved agent memory systems.
- Need for pre-built Android APK releases.
- Concerns regarding performance and token waste from file injection.
- Gateway stability and error handling issues reported.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The Claw ecosystem shows sustained activity across all projects, with significant focus on expanding channel integrations and improving agent core functionalities. OpenClaw leads in core feature development with external secrets management, while PicoClaw and NanoClaw are heavily investing in broadening their channel support and provider integrations, signaling a race for platform ubiquity.

### Activity
| Project   | Issues | PRs | Releases | Momentum |
|-----------|--------|-----|----------|----------|
| OpenClaw  | 9      | 8   | 1        | 🟡 steady  |
| PicoClaw  | 8      | 8   | 0        | 🟢 rapid   |
| NanoClaw  | 7      | 8   | 0        | 🟢 rapid   |

### OpenClaw vs Peers
- OpenClaw is ahead in core infrastructure features like robust secrets management and gateway reliability.
- PicoClaw and NanoClaw are aggressively pursuing broader channel support, aiming to cover a wider user base than OpenClaw's current focus.
- OpenClaw's significant focus on platform stability (gateway, Windows installer) contrasts with PicoClaw and NanoClaw's rapid feature expansion.
- User-driven features like advanced agent memory (OpenClaw) and file handling (PicoClaw, NanoClaw) show divergent priorities in agent capabilities.

### Shared Directions
- Expanding communication channel support (PicoClaw, NanoClaw)
- Enhancing file handling capabilities (PicoClaw, NanoClaw)
- Improving LLM provider integration and compatibility (PicoClaw, NanoClaw)
- Addressing persistent agent stability and error handling issues (OpenClaw, PicoClaw, NanoClaw)
- Streamlining setup and onboarding processes (OpenClaw, NanoClaw)
- Improving developer experience through documentation and tooling (OpenClaw, PicoClaw)

### Trend Signals
- Proliferation of new messaging channel integrations across all projects.
- Growing importance of robust file handling and media support in agent interactions.
- Increased focus on LLM provider diversity and API compatibility.
- Persistent challenges with platform stability, particularly installation and core functional bugs.
- User demand for more sophisticated agent memory and recall mechanisms.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Significant activity on PRs today, with 43 merged/closed and 77 open, indicating active development.
- Top issues revolve around channel integration issues (Telegram, Discord) and feature requests for enhanced file handling and new channel support.
- Several PRs focus on adding new channels (Google Chat, Facebook Messenger, Matrix, XMPP, Email) and provider support (Cloudflare AI Gateway, Mistral AI).

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#310](https://github.com/sipeed/picoclaw/issues/310) | [CLOSED] [type: bug] [BUG] Telegram messages stuck on "Thinking..." due to allowlist mismatch in HandleMessage | 7 | 0 | Prevents basic Telegram functionality for users with username-based allowlists. |
| [#619](https://github.com/sipeed/picoclaw/issues/619) | [CLOSED] Bug: downloaded media files deleted before async consumer reads them | 7 | 0 | Leads to data loss and broken message processing for media in asynchronous workflows. |
| [#61](https://github.com/sipeed/picoclaw/issues/61) | [OPEN] Implement file sending and receiving in chat. | 5 | 4 | Crucial for agent functionality, enabling users to interact with files. |
| [#441](https://github.com/sipeed/picoclaw/issues/441) | [OPEN] [type: enhancement] Add file attachment support to message tool for Discord/Telegram | 5 | 0 | Agents cannot send generated files to users, limiting output utility. |
| [#639](https://github.com/sipeed/picoclaw/issues/639) | [OPEN] [type: bug] [BUG] Picoclaw can't send image over discord like OpenClaw | 5 | 1 | Prevents image sharing on Discord, hindering rich media communication. |
| [#285](https://github.com/sipeed/picoclaw/issues/285) | [OPEN] Discord integration - occasionaly error during responses | 5 | 0 | Long messages in Discord can cause errors, impacting user experience. |
| [#381](https://github.com/sipeed/picoclaw/issues/381) | [OPEN] [type: bug] [BUG]Telegram messages show raw JSON tool calls instead of formatted content | 5 | 1 | Users see developer-level tool call details, not user-friendly output. |
| [#748](https://github.com/sipeed/picoclaw/issues/748) | [OPEN] [type: bug] [BUG] Groq API compatibility: tool call format error (tool_use_failed / invalid_request_error) | 4 | 0 | Groq provider integration is broken due to incorrect tool call formatting. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#825](https://github.com/sipeed/picoclaw/pull/825) | feat(feishu): implement TypingCapable interface with emoji reaction | CLOSED | Adds typing indicators to Feishu channel for better UX. |
| [#830](https://github.com/sipeed/picoclaw/pull/830) | feat(channels): add google chat channel support | OPEN | Integrates Google Chat as a new communication channel. |
| [#853](https://github.com/sipeed/picoclaw/pull/853) | feat(discord): add proxy support and tests | OPEN | Enhances Discord channel reliability in proxied environments. |
| [#851](https://github.com/sipeed/picoclaw/pull/851) | feat(providers): add Cloudflare AI Gateway support | OPEN | Adds support for Cloudflare's AI Gateway as an LLM provider. |
| [#655](https://github.com/sipeed/picoclaw/pull/655) | Added a native WhatsApp channel implementation. | OPEN | Introduces native support for sending/receiving messages via WhatsApp. |
| [#848](https://github.com/sipeed/picoclaw/pull/848) | fix: separate ContextWindow from MaxTokens configuration | OPEN | Corrects token configuration to prevent incorrect context window handling. |
| [#246](https://github.com/sipeed/picoclaw/pull/246) | feat: Add Mistral AI provider support | CLOSED | Enables integration with Mistral AI models for enhanced LLM capabilities. |
| [#356](https://github.com/sipeed/picoclaw/pull/356) | feat(channels/matrix): add Matrix channel integration | OPEN | Provides integration with the Matrix federated communication protocol. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#619](https://github.com/sipeed/picoclaw/issues/619) | Bug: downloaded media files deleted before async consumer reads them | high | No |
| [#639](https://github.com/sipeed/picoclaw/issues/639) | [BUG] Picoclaw can't send image over discord like OpenClaw | high | No |
| [#748](https://github.com/sipeed/picoclaw/issues/748) | [BUG] Groq API compatibility: tool call format error (tool_use_failed / invalid_request_error) | high | No |
| [#310](https://github.com/sipeed/picoclaw/issues/310) | [BUG] Telegram messages stuck on "Thinking..." due to allowlist mismatch in HandleMessage | medium | No |
| [#651](https://github.com/sipeed/picoclaw/issues/651) | [BUG] Incorrect volume mount path for config.json in docker-compose.yml causes container to crash | medium | No |

### Trends
- Growing demand for comprehensive file attachment and handling capabilities across channels.
- High interest in expanding the number of supported communication channels (WhatsApp, Google Chat, Matrix, XMPP, etc.).
- Ongoing issues with Telegram integration, including message length limits and allowlist incompatibilities.
- Need for improved error handling and clarity, such as distinguishing network timeouts from context window errors.
- Increasing support for diverse LLM providers and API gateways.
- Focus on refining tool usage and agent behavior for more robust and predictable interactions.
- Requests for better discoverability and integration of diagnostic tools like `picoclaw doctor`.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- 7 new issues reported, focusing on extending communication channels and addressing setup/configuration challenges.
- 45 PRs were active, with a strong emphasis on adding new communication channels and enhancing agent capabilities.
- Significant development in integrating new LLM providers and third-party services.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| [#527](https://github.com/qwibitai/nanoclaw/issues/527) | Main group CLAUDE.md documents write access to read-only paths | 0 | 0 | Prevents agent from performing essential file operations, causing failures. |
| [#526](https://github.com/qwibitai/nanoclaw/issues/526) | Agent is repeatedly confused about the local time | 0 | 1 | Impact daily task scheduling and time-sensitive interactions. |
| [#529](https://github.com/qwibitai/nanoclaw/issues/529) | Message loop fallback causes duplicate messages on fast successive requests | 0 | 0 | Leads to redundant agent responses and user confusion. |
| [#537](https://github.com/qwibitai/nanoclaw/issues/537) | Issues during /setup | 0 | 0 | Hinders new user onboarding and increases setup time. |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) | feat: Add Signal as messaging channel | 3 | 0 | Expands communication options beyond current channels. |
| [#342](https://github.com/qwibitai/nanoclaw/issues/342) | feat: readSecrets() support for third-party Anthropic-compatible API environment variables | 1 | 0 | Enables compatibility with a wider range of LLM providers. |
| [#520](https://github.com/qwibitai/nanoclaw/issues/520) | Proposal: Optional BoxLite sandbox backend (experimental) | 0 | 0 | Offers enhanced isolation for agent environments. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| [#552](https://github.com/qwibitai/nanoclaw/pull/552) | Test PR from Enzo | CLOSED | A test PR for workflow verification purposes. |
| [#551](https://github.com/qwibitai/nanoclaw/pull/551) | Fix Rollup CVE via npm audit fix | OPEN | Patches a security vulnerability in the Rollup dependency. |
| [#510](https://github.com/qwibitai/nanoclaw/pull/510) | skill: add /add-image-sending | OPEN | Enables agents to send images via WhatsApp. |
| [#550](https://github.com/qwibitai/nanoclaw/pull/550) | fix(agent-runner): break for-await loop after result to unblock IPC handling | OPEN | Fixes silent IPC handling issues for sequential agent messages. |
| [#549](https://github.com/qwibitai/nanoclaw/pull/549) | feat: add /use-avian skill for Avian LLM provider | OPEN | Integrates Avian LLM provider with OpenAI-compatible API. |
| [#296](https://github.com/qwibitai/nanoclaw/pull/296) | fix: preempt active container when scheduled task is enqueued | OPEN | Resolves delayed scheduled tasks when containers are idle. |
| [#547](https://github.com/qwibitai/nanoclaw/pull/547) | feat: add Shabbat mode 🕯️ | OPEN | Introduces a Shabbat mode for scheduled downtime. |
| [#339](https://github.com/qwibitai/nanoclaw/pull/339) | Feat/imessage channel | OPEN | Adds iMessage channel integration. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#529](https://github.com/qwibitai/nanoclaw/issues/529) | Message loop fallback causes duplicate messages on fast successive requests | High | No |
| [#527](https://github.com/qwibitai/nanoclaw/issues/527) | Main group CLAUDE.md documents write access to read-only paths | High | No |
| [#526](https://github.com/qwibitai/nanoclaw/issues/526) | Agent is repeatedly confused about the local time | Medium | No |
| [#537](https://github.com/qwibitai/nanoclaw/issues/537) | Issues during /setup | Medium | No |
| [#342](https://github.com/qwibitai/nanoclaw/issues/342) | feat: readSecrets() support for third-party Anthropic-compatible API environment variables | Medium | No |

### Trends
- Expanding to new messaging channels (Signal, iMessage, Mattermost) is a major focus.
- Enhancements to agent interaction with file systems and time zones are critical.
- Improving LLM provider compatibility and sandbox environments is ongoing.
- Efforts to streamline the setup process and improve developer workflow persist.
- Integration with external services like Google Drive and Composio is gaining traction.
- Addressing potential performance issues like message duplication is a priority.
- New experimental features like BoxLite sandbox are being explored.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*