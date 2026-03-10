# OpenClaw Ecosystem Digest 2026-03-10

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-10 11:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Significant increase in reported bugs related to local model providers (Ollama, Kimi) and recent version regressions.
- Ongoing development in memory backends and channel integrations, with a focus on robustness and specific platform nuances.
- Community continues to request internationalization support and enhancements for existing tool integrations.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #3460 | [enhancement] Internationalization (i18n) & Localization Support | 96 | 1 | Enhances accessibility for a global user base. |
| #34810 | [bug, bug:behavior] [Bug] OpenClaw suddenly lost filesystem tools (exec/read/write) and can no longer create files or run commands | 29 | 9 | Critical loss of core agent functionality. |
| #27009 | [enhancement] [Feature]: Support for using OpenCode Go subscription to onboard. | 19 | 24 | Integrates new, cost-effective model access. |
| #13812 | [bug, stale] [Bug]: v2026.2.9 cron announce → Telegram topic sends summary instead of full output | 13 | 5 | Impacts expected output format for scheduled tasks. |
| #5980 | [bug, stale] [Bug]: NVIDIA NIM provider causes gateway to hang/freeze during requests | 13 | 0 | Prevents usage of a specific LLM provider. |
| #11805 | [bug] openclaw gateway status fails on EC2/headless servers due to missing user-level systemd | 13 | 18 | Blocks essential gateway management on cloud servers. |
| #17613 | Embedded agent times out connecting to local OpenAI-compatible LLM despite direct curl working | 12 | 0 | Local LLM integration issues persist. |
| #6872 | [enhancement] [Feature]: xai support for responses and native tools: x_search, web_search, code_exec | 11 | 10 | Enhances explainability and tool utility. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #7113 | [docs, cli, commands, agents, size: L] feat(providers): add CommonStack provider support | OPEN | Adds support for the CommonStack LLM provider. |
| #42042 | [agents, size: S] fix(memory): add watcher error handling and non-zero default intervalMinutes | OPEN | Fixes silent watcher failures affecting memory index. |
| #42086 | [size: XS] fix(cron): clear lastError on successful job run | OPEN | Ensures cron job error status is cleared on success. |
| #42083 | [extensions: memory-lancedb, size: XS] fix(memory-lancedb): skip already-processed messages in auto-capture | OPEN | Prevents redundant embedding calls for processed messages. |
| #42085 | [size: S] fix(cron): clear stale runningAtMs in run() before already-running check (#41979) | OPEN | Fixes "Run Now" button issue with stale job markers. |
| #41626 | [size: S] fix(plugins): prefer higher-precedence manifests for duplicate plugin ids | OPEN | Resolves conflicts with duplicate plugin identifiers. |
| #33934 | [channel: feishu, size: S] fix(feishu): strip direct: prefix in Feishu target resolution | OPEN | Corrects Feishu target resolution for channel integration. |
| #40735 | [docs, size: XL] feat(memory): Add chain backend for multi-provider memory with plugin support | OPEN | Enables multi-provider memory management with plugins. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #34810 | [bug, bug:behavior] [Bug] OpenClaw suddenly lost filesystem tools (exec/read/write) and can no longer create files or run commands | critical | No |
| #11805 | [bug] openclaw gateway status fails on EC2/headless servers due to missing user-level systemd | high | No |
| #41690 | [bug, regression] [Bug]: Config validation failed: models.providers.kimi-coding.models.0.compat: Unrecognized key: "requiresOpenAiAnthropicToolPayload" | high | No |
| #41266 | [OPEN] [Bug]: Manual cron run enqueues but never executes on Linux (2026.3.8) | high | No |
| #37834 | Session context corruption: orphaned tool_use ID causes permanent 400 loop after abort | high | No |

### Trends
- Recurring issues with local LLM providers (Ollama, Kimi) including tool call failures and configuration errors.
- Performance regressions and unexpected behavior after recent version updates (2026.3.8).
- Need for improved error handling for cron jobs and background processes.
- Community interest in expanding supported LLM providers and subscription integrations.
- Persistent issues in specific channel integrations (WhatsApp, Feishu) related to message handling and replies.
- Desire for more robust file operations and sandbox behavior.
- Ongoing requests for enhanced internationalization and localization features.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The LLM agent ecosystem shows significant parallel development across projects, with a strong focus on expanding provider support, channel integrations, and agent capabilities. Security and robust tool usage remain critical areas of concern, alongside the ongoing refinement of core agent functionality and community-driven feature requests.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 5 | 8 | 0 | 🟡 steady |
| PicoClaw | 9 | 8 | 2 | 🟢 rapid |
| NanoClaw | 7 | 8 | 0 | 🟡 steady |

### OpenClaw vs Peers
- OpenClaw leads in bug reporting volume, indicating a broader user base or more extensive testing alongside active development.
- PicoClaw shows rapid momentum with recent nightly builds and stable releases, suggesting a faster development cycle.
- NanoClaw highlights specific security vulnerabilities and a strong focus on agent learning, differentiating it from the others' primary focus on LLM integration and channel expansion.
- Internationalization is a distinct unmet need in OpenClaw, not prominently featured in peer roadmaps.

### Shared Directions
- Expanding LLM provider support and enhancing flexibility (OpenClaw, PicoClaw, NanoClaw).
- Improving channel integrations for broader accessibility (OpenClaw, PicoClaw, NanoClaw).
- Enhancing tool robustness, error handling, and execution capabilities (OpenClaw, PicoClaw, NanoClaw).
- Addressing security concerns, including prompt injection and credential management (OpenClaw, NanoClaw).
- Refinements to agent frameworks and core functionalities (OpenClaw, PicoClaw, NanoClaw).

### Trend Signals
- Demand for multi-provider LLM support is high across the board.
- Secure handling of credentials and agent outputs is a growing concern.
- Robustness of core agent tools (filesystem, command execution) needs continuous attention.
- Community-driven feature requests (i18n, new integrations) are shaping roadmaps.
- Nightly builds and rapid iteration cycles are becoming standard for rapid feedback and integration.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- New nightly build v0.2.1-nightly.20260310.b89f6445 released, aligning with gorelease and release notes.
- Significant activity in agent and channel domains, with numerous enhancements and bug fixes being addressed.
- Continued work on improving tool integration and provider support, including new providers and enhanced functionalities.

### Releases
- v0.2.1-nightly.20260310.b89f6445: Nightly build for v0.2.1.
- v0.2.1: Stable release.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#1218](https://github.com/sipeed/picoclaw/issues/1218) | [Agent refactor]what an Agent is | 11 | 0 | Defines core Agent concepts for Pico Agent. |
| [#1210](https://github.com/sipeed/picoclaw/issues/1210) | picoclaw配置企业微信智能机器人 (AI Bot)？？？ | 10 | 0 | Configuration guidance for enterprise WeChat AI Bot. |
| [#1278](https://github.com/sipeed/picoclaw/issues/1278) | [Feature] Subagent support for tool access and inheritance (read_file, write_file, exec, etc.) | 5 | 0 | Enables subagents to utilize agent tools for autonomous tasks. |
| [#62](https://github.com/sipeed/picoclaw/issues/62) | BUG: Telegram allow_from with numeric user ID does not work when the user has a username | 4 | 0 | Telegram user ID filtering issue in `allow_from`. |
| [#906](https://github.com/sipeed/picoclaw/issues/906) | [Feature] Add configurable timeout for tool execution | 3 | 0 | Addresses hanging issues with tool execution timeouts. |
| [#988](https://github.com/sipeed/picoclaw/issues/988) | PicoClaw Roadmap: March 2026 (Week 2) | 2 | 4 | Outlines upcoming features and improvements for March. |
| [#1281](https://github.com/sipeed/picoclaw/issues/1281) | [BUG]Feishu messages doesn't show user_id of @ and msg sender | 2 | 0 | Feishu channel message sender ID is not displayed. |
| [#1011](https://github.com/sipeed/picoclaw/issues/1011) | [Feature] feat: add proxy for model access | 2 | 0 | Allows access to models via HTTP proxy. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#1284](https://github.com/sipeed/picoclaw/pull/1284) | feat: add anthropic-messages protocol for native Anthropic Messages API support | OPEN | Adds Anthropic Messages API protocol support. |
| [#1313](https://github.com/sipeed/picoclaw/pull/1313) | feat(cron): refactor scheduler to event-driven model and add unit tests | OPEN | Refactors cron scheduler to be event-driven. |
| [#1312](https://github.com/sipeed/picoclaw/pull/1312) | fix(agent): use resolved model ID when calling provider Chat (fixes #1247) | OPEN | Uses resolved model ID for provider Chat calls. |
| [#1308](https://github.com/sipeed/picoclaw/pull/1308) | Fix(provider) Prevent openrouter Provider models from getting cut | OPEN | Fixes model name truncation for OpenRouter provider. |
| [#1309](https://github.com/sipeed/picoclaw/pull/1309) | feat(docker): add launcher bundle image with all three binaries | CLOSED | Adds a launcher bundle Docker image. |
| [#1300](https://github.com/sipeed/picoclaw/pull/1300) | feat:Modify the location where version is obtained, and insert version information into the context | CLOSED | Centralizes version info retrieval and context insertion. |
| [#1239](https://github.com/sipeed/picoclaw/pull/1239) | refactor logger to zerolog | OPEN | Refactors the logger to use zerolog. |
| [#1311](https://github.com/sipeed/picoclaw/pull/1311) | fix: #1310 interactive mode handle wide characters correctlly | OPEN | Fixes wide character handling in interactive mode. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#1281](https://github.com/sipeed/picoclaw/issues/1281) | [BUG]Feishu messages doesn't show user_id of @ and msg sender | High | No |
| [#62](https://github.com/sipeed/picoclaw/issues/62) | BUG: Telegram allow_from with numeric user ID does not work when the user has a username | Medium | No |
| [#1310](https://github.com/sipeed/picoclaw/issues/1310) | [BUG]interactive mode handle wide character wrong cause duplicate lines in terminal | Medium | [#1311](https://github.com/sipeed/picoclaw/pull/1311) |
| [#1305](https://github.com/sipeed/picoclaw/issues/1305) | [BUG]new banner print to STDOUT, break completion flow | Medium | [#1306](https://github.com/sipeed/picoclaw/pull/1306) |
| [#1298](https://github.com/sipeed/picoclaw/issues/1298) | [BUG] Telegram slash command (/help /model etc) broken | Medium | No |

### Trends
- Enhancements for agent capabilities, including refactoring and subagent support.
- Ongoing efforts to improve channel integrations across various platforms (Feishu, Telegram, QQ, WeChat).
- Regular releases of nightly builds for continuous integration and testing.
- Focus on robust tool integration and error handling, especially for `read_file` and `exec`.
- User demand for more provider options and flexible configuration.
- Bug fixes addressing issues in interactive mode, logging, and API interactions.
- Exploration of new Docker image strategies for enhanced deployment.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Significant activity in agent learning system development, with multiple new tasks and an encompassing epic.
- Enhancements to communication channels continue, with Feishu and Signal integrations appearing.
- Security remains a focus, with discussions around prompt injection and credential exposure.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #80 | Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 21 | 38 | **Expands AI provider options**, crucial for flexibility and avoiding vendor lock-in. |
| #783 | schedule_task has no idempotency key — same task accumulates across sessions | 3 | 0 | Prevents **duplicate task execution**, ensuring reliable scheduling. |
| #29 | feat: Add Signal as messaging channel | 2 | 2 | **Broadens communication channels**, increasing user accessibility. |
| #924 | nanoclaw scored 92.1 (A+) on Nerq Trust Index — top 5 AI agents | 1 | 0 | **Highlights strong security posture**, boosting user confidence. |
| #908 | FTS5 conversation indexing and search | 1 | 0 | Enables **recall of past conversations**, key to agent learning. |
| #880 | SECURITY: Agent reveals secret keys and credentials in terminal/chat output | 1 | 0 | **Critical security vulnerability**, must be addressed immediately. |
| #891 | feat: Gmail security pipeline - prompt injection filter + isolated inbox group | 1 | 0 | **Enhances security for email integration**, preventing malicious inputs. |
| #865 | Using containers alone doesn't make you more secure | 0 | 0 | Addresses **container security concerns**, vital for robust deployment. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #921 | feat(github): add autonomous governance self-healing lanes | Blocked | Introduces **autonomous governance lanes** for self-healing. |
| #868 | skill: Per-group credential management and safe interactive reauth via channels | Needs Review | **Manages credentials per group**, enabling safe reauthentication. |
| #923 | fix: use platform-appropriate browser ID for WhatsApp pairing | Needs Review | **Corrects browser identification** for reliable WhatsApp pairing. |
| #920 | feat: add Feishu (Lark) channel integration | Needs Review | **Integrates Feishu (Lark) messaging channel**. |
| #919 | feat(skills): add docker-cli skill for host container management | Needs Review | **Adds Docker CLI skill** for container host management. |
| #922 | docs: remove stale data/env refs, clarify folder vs display name, drop Signal RFS | Needs Review | **Cleans up docs** and clarifies configuration details. |
| #918 | refactor(skills): simplify custom skill scripts | CLOSED | **Simplifies custom skill scripts** for better maintainability. |
| #886 | skill: add daily news briefing with AI agent swarms | Needs Review | **Adds daily news briefing skill** with AI agent swarms. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #880 | SECURITY: Agent reveals secret keys and credentials in terminal/chat output | Critical | None |
| #905 | Agent runner source mount is never updated after initial copy | High | None |
| #730 | CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 each morning | High | None |
| #889 | Bug: lone Unicode surrogates in Bash tool output corrupt JSONL transcripts → HTTP 400 on next API call | High | None |
| #783 | schedule_task has no idempotency key — same task accumulates across sessions | Medium | None |

### Trends
- **Agent Learning System Development:** New epic and numerous tasks indicate a push towards enhancing agent self-learning capabilities.
- **Channel Expansion:** Ongoing efforts to integrate new messaging platforms like Feishu and Signal.
- **Security Enhancements:** Continued focus on prompt injection, credential management, and container security.
- **Provider Flexibility:** Interest in supporting alternative AI models beyond Claude.
- **Skill Management:** Development of meta-skills and improvements to skill script handling.
- **Reliability & Debugging:** Issues related to task scheduling idempotency and container runtime permissions highlight areas for improvement.
- **User Experience:** Refinements in channel integration and documentation clarity aim to streamline user interaction.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*