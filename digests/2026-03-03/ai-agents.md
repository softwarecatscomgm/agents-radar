# OpenClaw Ecosystem Digest 2026-03-03

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-03 11:34 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Enhanced SecretRef coverage for expanded credential management across 64 targets, including new UX and fail-fast for unresolved references.
- Released v2026.3.2 and v2026.3.2-beta.1 with expanded SecretRef support.
- Significant focus on improving channel integration robustness, particularly for Telegram and Slack, alongside core agent functionality.

### Releases
- v2026.3.2: openclaw 2026.3.2 (expanded SecretRef support)
- v2026.3.2-beta.1: openclaw 2026.3.2-beta.1 (expanded SecretRef support)

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#5030](https://github.com/openclaw/openclaw/issues/5030) | [CLOSED] [bug, stale] [Bug]: no output | 39 | 9 | Users experiencing complete output failures impacting usability. |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | [OPEN] Add DingTalk as a first-install channel option | 26 | 10 | Improves onboarding experience for a popular communication platform. |
| [#2280](https://github.com/openclaw/openclaw/issues/2280) | [CLOSED] [enhancement] [Feature]: Azure OpenAI as model provider | 23 | 23 | Expands available model providers for greater flexibility. |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | [OPEN] [Bug] Anthropic setup-token auth returns 401 Invalid bearer token on 2026.2.21-2 (isolated profile repro) | 17 | 0 | Critical authentication issue for a major model provider. |
| [#29632](https://github.com/openclaw/openclaw/issues/29632) | [CLOSED] [bug] [Bug]: Duplicate feishu plugin causes pairing failure after v2026.2.26 upgrade | 14 | 0 | Blocks Feishu integration functionality after an upgrade. |
| [#1126](https://github.com/openclaw/openclaw/issues/1126) | [CLOSED] [bug] OpenAI Responses reasoning item replay causes 400 (missing following item) | 12 | 6 | Affects reasoning functionality with OpenAI models. |
| [#18974](https://github.com/openclaw/openclaw/issues/18974) | [CLOSED] [Bug] Telegram DM topics keep breaking: conflicting fixes suppress message_thread_id for private chats | 12 | 1 | Broke Telegram topic functionality, impacting threaded conversations. |
| [#12502](https://github.com/openclaw/openclaw/issues/12502) | [CLOSED] [bug, stale] Cron jobs not firing at scheduled times (v2026.2.3-1) | 10 | 0 | Cron jobs are unreliable, impacting scheduled tasks. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#25115](https://github.com/openclaw/openclaw/pull/25115) | fix(doctor): exclude known non-gateway services from duplicate detection | OPEN | Prevents false positives in doctor command for related services. |
| [#24212](https://github.com/openclaw/openclaw/pull/24212) | test(doctor): add e2e regression tests for --fix unrecognized key removal (#22272) | OPEN | Verifies config cleanup for unrecognized keys in doctor --fix. |
| [#24091](https://github.com/openclaw/openclaw/pull/24091) | fix: add EAGAIN to exec tool retry codes | OPEN | Improves exec tool robustness by retrying on transient OS errors. |
| [#25114](https://github.com/openclaw/openclaw/pull/25114) | fix(install): remove @discordjs/opus from optionalDependencies | OPEN | Simplifies Discord

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The LLM agent orchestration landscape shows a pattern of expanding integrations and core functionality enhancements. OpenClaw leads in stability and feature breadth, while PicoClaw and NanoClaw are rapidly adding new channels and tackling specific integration challenges.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 8 | 4 | 2 | 🟡 steady |
| PicoClaw | 8 | 8 | 0 | 🟢 rapid |
| NanoClaw | 8 | 8 | 0 | 🟢 rapid |

### OpenClaw vs Peers
*   **OpenClaw:** Maintains strong SecretRef support and core agent robustness, with recent releases focusing on expanding integrations.
*   **PicoClaw:** Exhibits rapid development with a high volume of PRs, but significant Gemini

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- High volume of activity with 106 issues and 234 PRs opened in the last 24 hours.
- Gemini 3 Flash Preview function call failures and incompatibility with Gemini 3 models are recurring issues.
- Significant interest in expanding provider support (LM Studio, Ollama, Azure OpenAI) and channel integrations (WhatsApp, Feishu).

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #190 | [OPEN] [type: documentation, question] Tutorial guide for installation on an Android Phone | 10 | 0 | User needs clear installation steps on Android. |
| #79 | [OPEN] [type: bug, domain: provider] Gemini 3 Flash Preview: Function call fails due to missing thought_signature | 9 | 0 | Critical bug affecting a specific LLM provider. |
| #148 | [OPEN] [type: enhancement, question, domain: skill] Can the openclaw official or third-party SKILLs be supported out of the box in picoclaw? | 8 | 2 | User wants to leverage existing skills for faster development. |
| #28 | [OPEN] [type: enhancement, domain: provider] Feat Request: LM Studio Easy Connect | 8 | 1 | Simplifies integration with a popular local LLM tool. |
| #297 | [CLOSED] [priority: medium, type: roadmap] Design: Create a cute Mantis Shrimp logo for PicoClaw! | 7 | 0 | Project needs a visual identity. |
| #109 | [OPEN] [type: bug, domain: provider] [Bug] 使用本地 Ollama (OpenAI 兼容端点) 时提示 "no API key configured" 错误 | 7 | 0 | Local Ollama integration failing with API key error. |
| #290 | [CLOSED] [priority: high, type: roadmap] Feature: Implement Model Context Protocol (MCP) support for extensible operations | 7 | 5 | Enhances extensibility with a standard protocol. |
| #161 | [OPEN] [type: bug, domain: provider] Incompatibility with Gemini 3 Pro/Flash due to Mandatory Thought Signatures | 6 | 1 | Another bug related to Gemini 3 and tool use. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #376 | feat: add native MCP integration with context7 compatibility | CLOSED | Adds native MCP integration, improving extensibility. |
| #358 | Fix terminate process | CLOSED | Fixes an issue with process termination. |
| #1012 | Fix a security bug: block SSRF in WebFetchTool by validating resolved IP addresses | OPEN | Fixes SSRF vulnerability in WebFetchTool. |
| #1023 | fix: Avoid failure of the main agent process due to tool call failures | OPEN | Prevents agent failure from tool call errors. |
| #1026 | Coolify deployment | OPEN | Adds Coolify deployment configuration for easier setup. |
| #268 | feat(web): Exa web search provider | CLOSED | Integrates Exa web search as a new provider. |
| #228 | Resolve data races in channels, logger, spawn, and subagent | CLOSED | Fixes data races across multiple components. |
| #853 | feat(discord): add proxy support and tests | OPEN | Adds proxy support for Discord channel integration. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #79 | Gemini 3 Flash Preview: Function call fails due to missing thought_signature | critical | No |
| #161 | Incompatibility with Gemini 3 Pro/Flash due to Mandatory Thought Signatures | high | No |
| #127 | Windows/Gemini: "404 v1main" on native provider & "No API Key" error when forcing OpenAI provider | high | No |
| #96 | apikey is already set,Error creating provider: no API key configured for provider (model: z-ai/glm4.7) | high | No |
| #109 | [Bug] 使用本地 Ollama (OpenAI 兼容端点) 时提示 "no API key configured" 错误 | high | No |

### Trends
- Persistent issues with Gemini 3 provider integration and function calls.
- Strong demand for expanded local LLM support (Ollama, LM Studio).
- User interest in integrating various third-party SKILLs and enhancing agent capabilities.
- Requests for new channel integrations like WhatsApp and improved Feishu support.
- Ongoing efforts to improve robustness, fix bugs, and enhance security (SSRF).
- Need for better user experience regarding memory optimization feedback and tool usage visibility.
- Efforts to reduce binary size and improve build process with Go build tags.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Multiple new channel integrations (Feishu, Discord, Signal, Google Chat) are being added.
- Significant architectural refactoring for pluggable channel architecture and configurable runtimes is underway.
- Several bugs related to scheduled tasks, container issues, and security permissions are being addressed.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #664 | different between nanoclaw vs claude code | 1 | 0 | Clarifies core functionality differences and agentic capabilities. |
| #571 | I use Opencode and not supper Windows Sys | 1 | 1 | User preference for specific environments/tools noted. |
| #574 | containers lack jq | 1 | 1 | Improves API response parsing and security in containers. |
| #595 | Bug: OOM crash after ~40h — ghost sockets accumulate on reconnect | 1 | 0 | Critical stability issue causing downtime. |
| #611 | Agent-runner source copy is never updated after initial creation | 1 | 0 | Prevents agent logic from staying up-to-date. |
| #613 | ANTHROPIC_MODEL=claude-sonnet-4-6 is ignored — CLI maps it to claude-sonnet-4-20250514 | 1 | 0 | Model selection is not working as expected. |
| #635 | Security: WhatsApp auth files created with insecure permissions (644 instead of 600) | 1 | 0 | Potential security vulnerability exposing credentials. |
| #642 | RFC: CLI Channel for Claude Code Integration | 1 | 0 | Proposes a new integration method for Claude Code skills. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #670 | fix: auto-retry messages when Claude hits an API rate limit | OPEN | Improves handling of API rate limits with retries. |
| #408 | docs(zh): sync README_zh.md with README.md | CLOSED | Synchronizes Chinese README with English version. |
| #672 | feat: support custom model selection via ANTHROPIC_MODEL env | OPEN | Enables custom Anthropic model selection via environment variable. |
| #671 | feat(skills): add Feishu (Lark) channel skill | OPEN | Integrates Feishu (Lark) as a new messaging channel. |
| #327 | feat: support third-party API endpoints in container agents | CLOSED | Allows container agents to use custom API endpoints. |
| #667 | feat: replace file-based IPC with Unix sockets | CLOSED | Replaces file IPC with efficient Unix sockets for communication. |
| #644 | feat: multi-modal agent — voice, file sending, vision | CLOSED | Adds multi-modal capabilities: voice, files, and vision. |
| #668 | init feishu | CLOSED | Initializes Feishu channel support with a new skill. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #595 | Bug: OOM crash after ~40h — ghost sockets accumulate on reconnect | Critical | No |
| #669 | Scheduled tasks run twice when container takes longer than SCHEDULER_POLL_INTERVAL (60s) | High | No |
| #652 | [BUG] Cron Notification Feedback Loop / Cron 提醒触发无限循环 | High | No  |
| #649 | Cron Notification Feedback Loop / Cron 提醒触发无限循环 | High | No |
| #635 | Security: WhatsApp auth files created with insecure permissions (644 instead of 600) | Medium | No |

### Trends
- Increased focus on adding support for diverse messaging channels (Feishu, Discord, Signal, Google Chat).
- Architectural improvements for better extensibility and configurability (pluggable channels, custom runtimes).
- Ongoing efforts to address core stability issues like OOM crashes and scheduled task duplication.
- Security considerations are being actively addressed (permissions, API security).
- Enhancements for multi-modal agent capabilities are progressing.
- Need for clearer differentiation from other LLM code interaction tools.
- User experience improvements through potential UIs and better error handling.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*