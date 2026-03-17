# OpenClaw Ecosystem Digest 2026-03-17

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-17 11:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Gateway restarts every ~50 minutes with no specified reason are causing significant disruption.
- Internationalization support remains a long-requested feature but is hindered by lack of bandwidth.
- Several critical bugs are affecting WhatsApp and Feishu integrations, including connection issues and garbled filenames.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | [enhancement] Internationalization (i18n) & Localization Support | 102 | 3 | Makes OpenClaw accessible to a wider global user base. |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | Add DingTalk as a first-install channel option | 73 | 26 | Improves initial setup experience for DingTalk users. |
| [#75](https://github.com/openclaw/openclaw/issues/75) | [enhancement, help wanted] Linux/Windows Clawdbot Apps | 40 | 62 | Addresses missing app support for major desktop platforms. |
| [#48205](https://github.com/openclaw/openclaw/issues/48205) | [bug, bug:crash] [Bug]: # Gateway Restarts Every Avg.~50 Minutes with "reason=none" | 20 | 0 | Frequent, unexplained gateway restarts disrupt service availability. |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | 支持Agent接收并识别图片内容 (视觉能力) | 19 | 0 | Enables agents to understand and process image content. |
| [#4686](https://github.com/openclaw/openclaw/issues/4686) | [bug] [Bug]: WhatsApp linking stuck at "logging in" after initial successful link - cannot relink any number | 16 | 18 | Prevents users from relinking WhatsApp numbers after initial setup. |
| [#30177](https://github.com/openclaw/openclaw/issues/30177) | Announce queue delivery fails with 'No active WhatsApp Web listener' despite WhatsApp being connected | 15 | 1 | Intermittent failure in sending announcements via WhatsApp. |
| [#36182](https://github.com/openclaw/openclaw/issues/36182) | [bug, regression] [Bug]: Perplexity Search API error (401) with OpenRouter | 14 | 1 | Regression breaks Perplexity search integration via OpenRouter. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#48845](https://github.com/openclaw/openclaw/pull/48845) | [channel: feishu, size: S] Feishu | OPEN | Fixes Feishu API issues with missing chat_type field. |
| [#41158](https://github.com/openclaw/openclaw/pull/41158) | [agents, size: M] fix: add global 429 rate-limit retry with exponential backoff at StreamFn boundary | OPEN | Adds retries for 429 rate limits to prevent immediate failover. |
| [#35757](https://github.com/openclaw/openclaw/pull/35757) | [size: XS] fix(tui): ensure messages display immediately when no delta events (#35523) | OPEN | Fixes TUI message display issues after quick assistant replies. |
| [#29793](https://github.com/openclaw/openclaw/pull/29793) | [docs, channel: discord, channel: matrix, channel: telegram, app: macos, scripts, commands, agents, size: XL, extensions: acpx] feat(concurrency): optional workspace mutation locking for shared-workspace agents | OPEN | Prevents lost updates in shared-workspace agents with optional locking. |
| [#48363](https://github.com/openclaw/openclaw/pull/48363) | [docs, channel: bluebubbles, channel: discord, channel: googlechat, channel: imessage, channel: matrix, channel: msteams, channel: nostr, channel: signal, channel: slack, channel: telegram, channel: tlon, channel: voice-call, channel: whatsapp-web, channel: zalo, channel: zalouser, app: web-ui, gateway, extensions: llm-task, extensions: lobster, extensions: qwen-portal-auth, cli, scripts, commands, docker, agents, channel: feishu, channel: twitch, extensions: talk-voice, size: XL, extensions: openai, extensions: minimax, extensions: modelstudio, extensions: cloudflare-ai-gateway, extensions: byteplus, extensions: huggingface, extensions: kimi-coding, extensions: moonshot, extensions: synthetic, extensions: together, extensions: venice, extensions: volcengine, extensions: xiaomi, extensions: kilocode, extensions: nvidia, extensions: qianfan, extensions: vercel-ai-gateway] fix: copy ACP metadata to thread-bound sessions | CLOSED | Fixes ACP metadata issues in thread-bound sessions. |
| [#48825](https://github.com/openclaw/openclaw/pull/48825) | [commands, size: M] fix(healthcheck): respect brew install update guidance | OPEN | Improves health check guidance for Homebrew installs. |
| [#48826](https://github.com/openclaw/openclaw/pull/48826) | [docs, size: XS] docs(browser): use wss for Browserless CDP URL | OPEN | Updates Browserless CDP URL to use wss for secure connections. |
| [#48929](https://github.com/openclaw/openclaw/pull/48929) | [app: android, size: XS] fix(android): read bootstrapToken from setup code and support Android 11 | OPEN | Fixes Android pairing issues and adds support for Android 11. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#48205](https://github.com/openclaw/openclaw/issues/48205) | [bug, bug:crash] [Bug]: # Gateway Restarts Every Avg.~50 Minutes with "reason=none" | Critical | No |
| [#4686](https://github.com/openclaw/openclaw/issues/4686) | [bug] [Bug]: WhatsApp linking stuck at "logging in" after initial successful link - cannot relink any number | High | No |
| [#30177](https://github.com/openclaw/openclaw/issues/30177) | Announce queue delivery fails with 'No active WhatsApp Web listener' despite WhatsApp being connected | High | No |
| [#48388](https://github.com/openclaw/openclaw/issues/48388) | [bug, bug:behavior] [Bug]: Feishu file names with Chinese characters are garbled (UTF-8 encoding issue) | Medium | No |
| [#36182](https://github.com/openclaw/openclaw/issues/36182) | [bug, regression] [Bug]: Perplexity Search API error (401) with OpenRouter | Medium | No |

### Trends
- High volume of critical and high-severity bugs impacting core channels like WhatsApp and Feishu.
- Regression bugs are frequently reported following recent updates.
- Users are requesting expanded channel support and improved agent capabilities (e.g., image recognition).
- Gateway stability issues (frequent restarts) are a major concern for users.
- Developer experience improvements like enhanced logging and clearer update guidance are being addressed.
- Community engagement remains high with numerous feature requests and bug reports.
- Internationalization and localization remain a key area for future development.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The "Claw" agent framework ecosystem is characterized by rapid development, a strong emphasis on expanding LLM provider support, and a focus on improving user experience and security. While OpenClaw leads in channel integrations and critical bug fixes, PicoClaw and NanoClaw are actively pursuing broader model support and unique feature sets, often inspired by each other.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 8 | 8 | 0 | 🟡 steady |
| PicoClaw | 8 | 8 | 1 | 🟢 rapid |
| NanoClaw | 7 | 8 | 0 | 🟡 steady |

### OpenClaw vs Peers
- OpenClaw leads in channel integration breadth and active bug resolution, notably for WhatsApp and Feishu.
- PicoClaw exhibits extremely high PR volume, indicating rapid iterative development, particularly in backend and agent functionality.
- NanoClaw shows strong community demand for broader LLM provider support, a key differentiator from OpenClaw's current focus.
- OpenClaw's critical gateway stability issues are a major concern not explicitly mirrored in other projects' top issues.

### Shared Directions
- **LLM Provider Expansion:** All projects are seeing user requests for support beyond initial providers (OpenClaw: Perplexity, PicoClaw: GLM, NanoClaw: Many). (OpenClaw, PicoClaw, NanoClaw)
- **Agent Capability Enhancement:** Improvements in agent context, reasoning, and tool usage are consistently requested. (OpenClaw, PicoClaw)
- **Platform Stability & Reliability:** Addressing critical bugs and ensuring consistent operation is a primary concern, especially gateway restarts and cron job failures. (OpenClaw, PicoClaw)
- **Integration with Communication Platforms:** Demand for seamless integration with popular messaging apps (WhatsApp, Feishu, Slack, Telegram) is high. (OpenClaw, PicoClaw, NanoClaw)
- **Developer Experience (DX) Improvements:** Requests for better tooling, documentation, and installation processes are present across the board. (OpenClaw, PicoClaw, NanoClaw)
- **Security Hardening:** Growing emphasis on security features like authentication, access control, and responsible disclosure. (NanoClaw, PicoClaw)

### Trend Signals
- **Convergent Evolution of Agent Frameworks:** Projects are independently arriving at similar solutions and feature sets, often inspired by cross-project visibility.
- **Decentralization and User Choice in AI Providers:** A strong community push towards avoiding vendor lock-in and supporting a diverse LLM ecosystem.
- **Focus on Practical Integrations:** User demand is heavily skewed towards integrating AI capabilities into existing communication and workflow tools.
- **Rising Importance of Robust Agent Tooling:** Beyond basic LLM interaction, users need sophisticated control over agent behavior, including error handling and diagnostics.
- **Security as a Foundational Requirement:** As AI agents become more integrated, security concerns are escalating from niche to mainstream.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- New nightly build `v0.2.3-nightly.20260317.79b0568d` released.
- Significant PR activity with 64 PRs submitted in the last 24 hours.
- Several open issues highlight potential improvements in provider support, agent functionality, and channel integration.

### Releases
- nightly: Nightly Build `v0.2.3-nightly.20260317.79b0568d`

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #1498 | [Feature]期待功能增加：模型端搜索和fastembed | 7 | 0 | Adds desired model-side search and fastembed capabilities. |
| #39 | Feature Request: Add `picoclaw doctor` command | 5 | 0 | A diagnostic tool for validation and repair is requested. |
| #1615 | [Feature] Include current sender in dynamic context | 4 | 0 | Agents need sender info for better group chat interaction. |
| #1652 | [BUG] GLM Coding Plan is not support PicoClaw | 4 | 0 | GLM Coding Plan errors due to lack of PicoClaw support. |
| #1297 | [BUG]light模型路由bug，应该和model_list里面的匹配后再返回 | 2 | 1 | Light model routing bug needs to match model list first. |
| #1648 | [Feature] Adding TTS and ASR Support to PicoClaw | 2 | 0 | Enhances PicoClaw with text-to-speech and speech-to-text. |
| #1574 | The prompt_cache_key error is a picoclaw bug | 2 | 0 | A bug related to `prompt_cache_key` is causing issues. |
| #1653 | Seeking Help: intermittent OpenRouter 'connection reset by peer' on small Linux boards, any known fix? | 1 | 0 | Intermittent OpenRouter connection reset impacting autonomous operation. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #1689 | refactor(backend): add darwin no-cgo tray fallback | CLOSED | Adds a fallback for macOS tray support, enabling backend startup. |
| #1690 | docs(exec): document build tool guard limitation | OPEN | Clarifies limitations of the exec safety guard for child processes. |
| #1295 | Implement the latest long-connection mode for the WeCom AI Bot. | OPEN | Adds the latest long-connection mode for WeCom AI Bot integration. |
| #1688 | feat(web): whitelist private fetch targets | OPEN | Allows whitelisting private IP addresses for web fetching. |
| #1687 | feat: upload local QQ attachments before sending | OPEN | Improves QQ channel handling of local file attachments. |
| #1680 | fix(agent): recover direct answer after tool limit | CLOSED | Recovers direct answers when agent tool iterations are exhausted. |
| #1686 | fix(agent): recover direct answer after tool limit | OPEN | Recovers direct answers after agent hits maximum tool iterations. |
| #1618 | Add model-native search (prefer_native) for OpenAI/Codex | OPEN | Integrates model-native web search for improved efficiency. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1652 | [BUG] GLM Coding Plan is not support PicoClaw | High | No |
| #1297 | [BUG]light模型路由bug，应该和model_list里面的匹配后再返回 | Medium | No |
| #1574 | The prompt_cache_key error is a picoclaw bug | Medium | No |
| #1650 | [BUG] Picoclaw service Restarting Indefinitely | Critical | No |
| #1568 | [BUG] Cron tasks may occasionally fail to execute and only send task descriptions | Medium | No |

### Trends
- Demand for enhanced provider integration and model capabilities (e.g., fastembed, TTS/ASR).
- Improvements needed in agent context and dynamic information sharing.
- Ongoing work to address provider-specific bugs and connection issues.
- Requests for better tool usage and execution control (e.g., `picoclaw doctor`, exec controls).
- Channel-specific enhancements for platforms like Feishu and QQ are being prioritized.
- Security considerations are being addressed with features like IP whitelisting for `web_fetch`.
- Cron job reliability and configuration management are areas of active development.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- A security finding has been reported and a private disclosure channel is being requested.
- Multiple feature requests focus on expanding integration capabilities (Podman, Slack, OpenAI) and enhancing security.
- A significant batch of issues (15+) were closed today, primarily focusing on security, reliability, and feature enhancements inspired by other projects.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #80 | Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 23 | 47 | Critical for user adoption and platform longevity beyond one provider. |
| #730 | Bug: CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 each morning | 4 | 0 | Daily production blocker for users relying on the default setup. |
| #957 | Suggest supporting Podman as an alternative to Docker | 4 | 4 | Addresses user demand for containerization alternatives. |
| #1149 | Security finding — requesting private disclosure channel | 1 | 0 | Immediate security concern requiring responsible handling. |
| #876 | Slack integration? | 1 | 1 | High user interest in integration with popular communication platforms. |
| #1179 | DX: Natural language rules compiler for group policies | 1 | 0 | Enhances developer experience and policy management. |
| #1178 | DX: Standardized SKILL.md format with auto-discovery | 1 | 0 | Streamlines skill development and integration. |
| #1177 | Security: Per-session container authentication tokens | 1 | 0 | Crucial for isolating agent processes and preventing unauthorized access. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #1090 | fix: mount .claude.json as writable to prevent EROFS crash | Needs Review | Prevents EROFS errors by mounting session state as writable. |
| #1091 | fix: fall back to process.env when .env file not present on disk | Needs Review | Ensures credentials are loaded from environment variables when .env is absent. |
| #1089 | feat: add Linux/Docker deployment support | Needs Review | Enables NanoClaw deployment on Linux and Docker environments. |
| #1187 | feat: add /add-dashboard skill | Open | Introduces a skill for a web dashboard to monitor NanoClaw. |
| #1018 | fix: Z.ai claude code api not work | Needs Review | Fixes Z.ai's Claude Code API integration for compatibility. |
| #1069 | feat(telegram): download photos and save to group media directory | WIP | Downloads Telegram photos and saves them to group media directories. |
| #1126 | feat: optional remoteControl flag to disable /remote-control per group | Needs Review | Allows disabling `/remote-control` per group for security. |
| #1085 | feat: add sync-forks skill for community fork maintainers | Needs Review | Provides a skill to help community fork maintainers sync their changes. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #730 | Bug: CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 each morning | Critical | No |
| #1142 | Bug: Agent SDK pinned to v0.2.34 — containers default to outdated model | High | No |
| #1143 | Bug: Skills docs reference /data/env path that no longer exists | Medium | No |
| #698 | Bug: Agent cannot determine current day of week from ISO timestamps | Medium | No |
| #1079 | Install route for Intel Macs? | High | No |

### Trends
- Strong community interest in expanding LLM provider support beyond Anthropic.
- Recurring security enhancements are being proposed, indicating a focus on hardening the platform.
- A notable number of features are inspired by or replicating functionality from other "Claw" projects, suggesting a convergent evolution of agent frameworks.
- User experience improvements are a recurring theme, with requests for easier installation and better policy management.
- Integration with external services (Slack, Discord, Telegram, OpenAI) remains a high priority for users.
- Stability and reliability features, such as retry mechanisms and error handling, are being actively developed.
- The development of a community skill registry highlights a push towards modularity and user-contributed functionality.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*