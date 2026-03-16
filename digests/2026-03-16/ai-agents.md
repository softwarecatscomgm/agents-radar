# OpenClaw Ecosystem Digest 2026-03-16

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-16 11:50 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Focus on image handling across multiple channels, with significant discussion on Feishu and agent vision capabilities.
- Numerous bug reports highlight issues with local gateway reliability and intermittent connection failures.
- Ongoing work to improve cross-platform compatibility and robustness for Docker deployments.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #26534 | [OPEN] Add DingTalk as a first-install channel option | 72 | 26 | Improves initial setup flexibility for users. |
| #28744 | [OPEN] 支持Agent接收并识别图片内容 (视觉能力) | 15 | 0 | Enables agents to process visual input. |
| #20416 | [OPEN] [Feature]: Make llm_input / llm_output modifying hooks for middleware patterns (PII redaction, guardrails, content filtering) | 14 | 0 | Enhances customization for data handling. |
| #38902 | [OPEN] [bug, bug:behavior] [Bug]: run error: HTTP 422: "check open ai req parameter error" | 13 | 0 | Prevents successful model execution. |
| #3181 | [OPEN] [bug] [Bug]: Runaway heartbeat loop triggers excessive model calls + retries (high CPU / cost) | 13 | 0 | Causes high resource usage and costs. |
| #9873 | [CLOSED] [bug, stale] [Bug]: MSTeams Channel Replies Not Being Sent | 13 | 0 | Unsent replies disrupt communication. |
| #45222 | [OPEN] [bug, regression] [Bug]: Intermittent local gateway websocket handshake failures on loopback (ws://127.0.0.1:18789) | 12 | 0 | Frequent CLI and Cron failures. |
| #8983 | [OPEN] [bug, stale] [Bug]: The configuration menu is not allowing the API key to be changed, from OpenRouter. | 12 | 0 | Hinders secure API key management. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #48172 | [gateway, commands, size: XL, extensions: minimax, extensions: modelstudio, extensions: cloudflare-ai-gateway, extensions: byteplus, extensions: huggingface, extensions: kimi-coding, extensions: moonshot, extensions: synthetic, extensions: together, extensions: venice, extensions: volcengine, extensions: xiaomi] Onboarding: translate setup flow to zh-CN | OPEN | Localizes setup and onboarding to Chinese. |
| #45132 | [channel: slack, gateway, scripts, size: XL] feat(slack): add mux receiver for multi-gateway deployments | OPEN | Enables Slack integration in multi-gateway setups. |
| #48170 | [docs, gateway, cli, commands, agents, maintainer, size: L] Browser: support non-Chrome existing-session profiles via userDataDir | OPEN | Allows `existing-session` to target non-Chrome browsers. |
| #44126 | [agents, size: XL] feat(agents): add adaptive thinking level controls | OPEN | Introduces tools for dynamic agent thinking control. |
| #47604 | [app: android, size: XL] feat(android): add Wear OS app MVP | OPEN | Provides a Minimum Viable Product for Wear OS. |
| #48163 | [agents, size: M] fix(bedrock): support Application Inference Profile ARNs as model identifiers | OPEN | Enables Bedrock ARNs as model identifiers. |
| #48077 | [channel: feishu, size: M] fix(feishu): use routed account context for multi-account tool execution | OPEN | Prioritizes routed account context in Feishu tool execution. |
| #44729 | [docs, scripts, size: XL] extensions/memory-memoria: add Memoria-backed memory plugin | OPEN | Adds a new optional memory extension using Memoria. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #38902 | [Bug]: run error: HTTP 422: "check open ai req parameter error" | high | No |
| #3181 | [Bug]: Runaway heartbeat loop triggers excessive model calls + retries (high CPU / cost) | high | No |
| #45222 | [Bug]: Intermittent local gateway websocket handshake failures on loopback (ws://127.0.0.1:18789) | high | No |
| #45560 | [Bug]: local gateway CLI handshake fails (probe timeout / gateway call closed 1000) even though gateway is running and WS challenge is reachable | high | No |
| #46049 | [Bug]: LLM request timeout ignores configured timeout settings (agent/channel/tool timeouts not respected) | high | No |

### Trends
- Growing need for advanced image and visual processing capabilities in agents.
- Persistent issues with local gateway stability and network connectivity.
- Feature requests for enhanced flexibility in channel setup and configuration options.
- Demand for improved error handling and reporting for model interactions.
- Ongoing development for multi-gateway deployments and platform integrations.
- Increased focus on cross-platform compatibility, particularly for Docker environments.
- Community requests for more robust internationalization and localization support.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The Claw ecosystem shows parallel development across projects, with OpenClaw leading in broad channel integrations and image handling. PicoClaw is focusing on agent loop refactoring and broader web interactions, while NanoClaw prioritizes multi-LLM provider support and macOS containerization. All projects exhibit a need for improved stability and user experience.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 9 | 8 | 0 | 🟡 |
| PicoClaw | 8 | 8 | 1 | 🟢 |
| NanoClaw | 8 | 8 | 0 | 🟡 |

### OpenClaw vs Peers
- OpenClaw boasts the most comprehensive channel support out-of-the-box, offering integrations like Feishu and DingTalk (vs PicoClaw's growing Telegram focus and NanoClaw's Signal/Google Workspace ambitions).
- PicoClaw is uniquely focused on deep agent loop control with hooks and interrupts, a level of architectural refactoring not as prominent in the other two.
- NanoClaw's aggressive push for multi-LLM provider support directly addresses a critical vulnerability for users reliant on single vendors, a concern less explicitly highlighted in other projects' hot issues.
- OpenClaw's strength in image handling and agent vision features positions it for multimodal applications, an area less emphasized by PicoClaw and NanoClaw currently.
- OpenClaw's consistent bug reports regarding local gateway reliability present a significant stability hurdle compared to the more focused bug areas in PicoClaw and NanoClaw.

### Shared Directions
- **Enhanced Agent Control & Observability:** Need for more granular control over agent behavior, including hooks, interrupts, and context awareness (PicoClaw, OpenClaw).
- **Broader LLM Provider Support:** Reducing vendor lock-in and ensuring service reliability through support for diverse LLM backends (NanoClaw, OpenClaw).
- **Improved Stability & Reliability:** Addressing persistent bugs in core components like local gateways and startup sequences for a more robust user experience (OpenClaw, PicoClaw, NanoClaw).
- **Containerization & Platform Compatibility:** Optimizing for various deployment environments, including Docker and macOS-specific container runtimes (OpenClaw, PicoClaw, NanoClaw).
- **Extended Integration Capabilities:** Adding support for new messaging platforms and productivity suites to broaden agent utility (OpenClaw, PicoClaw, NanoClaw).
- **Performance & Resource Optimization:** Tackling issues like excessive logging and high CPU usage to improve efficiency (OpenClaw, PicoClaw, NanoClaw).

### Trend Signals
- **Multimodality is Key:** Growing emphasis on agents processing image and visual data signifies a shift towards more capable, multimodal AI interactions.
- **Agent Loop Architectures Maturing:** Projects are actively refactoring agent execution for better control, observability, and extensibility.
- **Vendor Agnosticism is Crucial:** The drive for multi-LLM provider support highlights a market demand for resilience against single-point-of-failure AI service providers.
- **Platform Integration is Expanding:** Agents are increasingly being designed to interact with a wider array of external services, from communication channels to productivity suites.
- **Deployment Flexibility is Paramount:** Robust support for containerization (Docker, Podman) and cross-platform compatibility (especially macOS) is essential for broad adoption.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Significant refactoring in the agent loop is proposed to create a more observable, hookable, and interruptible system.
- A critical bug affecting model configuration inheritance across providers has been identified.
- New features are being added to support autonomous browser operations and enhanced Telegram group interactions.

### Releases
- nightly: Nightly Build
  Nightly build for **v0.2.3-nightly.20260316.f2addff0**

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#1316](https://github.com/sipeed/picoclaw/issues/1316) | [Agent refactor] Event-driven agent loop with hooks, interrupts, and steering | 11 | 1 | Enhances agent observability, control, and extensibility. |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | Feature: Autonomous Browser Operations | 6 | 4 | Enables AI to interact directly with websites for automation. |
| [#1498](https://github.com/sipeed/picoclaw/issues/1498) | [Feature]期待功能增加：模型端搜索和fastembed | 6 | 0 | Adds model-side search and fastembed for performance. |
| [#1228](https://github.com/sipeed/picoclaw/issues/1228) | [Feature] Pre-install essential dev tools (python, curl, jq, git, etc.) in Docker image | 3 | 0 | Improves Docker image usability for development tasks. |
| [#1591](https://github.com/sipeed/picoclaw/issues/1591) | Support Telegram group observe-only mode: ingest all messages but reply only when tagged | 3 | 0 | Allows passive observation in Telegram groups with selective replies. |
| [#1635](https://github.com/sipeed/picoclaw/issues/1635) | [BUG] model_list does not inherit api_key/api_base from providers (even with matching protocol prefix) | 2 | 0 | Prevents inconvenient errors and duplicate configurations. |
| [#1615](https://github.com/sipeed/picoclaw/issues/1615) | [Feature] Include current sender in dynamic context so the agent knows who sent the message | 2 | 0 | Provides agent with sender information for context. |
| [#1612](https://github.com/sipeed/picoclaw/issues/1612) | [Feature] Add option for per-model cooldown for specific providers | 2 | 0 | Enhances provider management by allowing per-model cooldowns. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#1647](https://github.com/sipeed/picoclaw/pull/1647) | feat(web): add configurable cron command execution settings | OPEN | Makes cron command execution configurable in backend and UI. |
| [#1646](https://github.com/sipeed/picoclaw/pull/1646) | refactor gateway/helpers and add server.pid to health | OPEN | Refactors gateway helpers and includes server PID in health checks. |
| [#1645](https://github.com/sipeed/picoclaw/pull/1645) | Fix/mask bot tokens in logger | OPEN | Masks bot tokens in logger output to prevent leakage. |
| [#1644](https://github.com/sipeed/picoclaw/pull/1644) | feat:replace filename with local path in content for media refs | OPEN | Fixes identification of non-image files in media references. |
| [#1642](https://github.com/sipeed/picoclaw/pull/1642) | 新增asr和tts功能 | OPEN | Implements end-to-end voice conversation using ASR/TTS. |
| [#1522](https://github.com/sipeed/picoclaw/pull/1522) | Feat(credential)/launcher UI passphrase part2: base on 4921690b5ecb1775c779930b4f91c19d9504e2ea | OPEN | Adds passphrase management to launcher UI for credentials. |
| [#1422](https://github.com/sipeed/picoclaw/pull/1422) | feat(provider): add support for azure openai provider | CLOSED | Enables calls to LLM models from Azure OpenAI subscriptions. |
| [#1511](https://github.com/sipeed/picoclaw/pull/1511) | 添加使用火山coding plain配置参数 | CLOSED | Documents configuration parameters for VolcEngine Coding Plain. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#1635](https://github.com/sipeed/picoclaw/issues/1635) | [BUG] model_list does not inherit api_key/api_base from providers (even with matching protocol prefix) | High | No |
| [#1574](https://github.com/sipeed/picoclaw/issues/1574) | The prompt_cache_key error is a picoclaw bug | High | No |
| [#1641](https://github.com/sipeed/picoclaw/issues/1641) | [BUG]picclaw not work after a few days with max_tool_iterations erorr | Medium | No |
| [#1634](https://github.com/sipeed/picoclaw/issues/1634) | [BUG]per-agent model config selects model string but not provider — all agents share a single provider instance | High | No |
| [#1624](https://github.com/sipeed/picoclaw/issues/1624) | fix(provider/anthropic): model ID dots not normalized to dashes in API-key and anthropic-messages paths | Medium | No |

### Trends
- Demand for enhanced agent loop control and observability (hooks, interrupts).
- Need for broader web interaction capabilities (autonomous browser operations).
- Growing importance of efficient model management (model-side search, fastembed).
- Security concerns around default configurations and token handling.
- Requirements for more flexible provider and model configurations (per-model cooldown, inheritance).
- Improving Docker image usability with pre-installed development tools.
- Interest in advanced channel features like Telegram observe-only mode.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Significant focus on extending LLM provider support beyond Claude and improving containerization compatibility, especially for macOS.
- New skills for Google Workspace, MemOS, and Proton Mail are in development, enhancing agent capabilities.
- Persistent issues with log file growth and setup slowness are being actively addressed.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 22 | 45 | Essential for service reliability if Anthropic restricts access. |
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) | Suggest supporting Podman as an alternative to Docker | 3 | 4 | Broadens deployment options for users preferring Podman. |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) | feat: Add Signal as messaging channel | 3 | 2 | Expands communication options for agents. |
| [#1088](https://github.com/qwibitai/nanoclaw/issues/1088) | nanoclaw log == 27 GB after 5 days | 2 | 0 | Large log files consume disk space and might impact performance. |
| [#1015](https://github.com/qwibitai/nanoclaw/issues/1015) | does nanoclaw support other LLM providers? | 1 | 0 | User encountered issues with non-Claude LLM setup. |
| [#832](https://github.com/qwibitai/nanoclaw/issues/832) | feat: Chrome CDP browser relay for real browser control | 1 | 5 | Enables agents to control real browsers, bypassing limitations. |
| [#973](https://github.com/qwibitai/nanoclaw/issues/973) | Setup takes ages | 2 | 0 | Slow setup processes hinder user adoption. |
| [#1067](https://github.com/qwibitai/nanoclaw/issues/1067) | NanoClaw fails to start on reboot — Apple Container runtime race condition | 1 | 0 | Affects reliability on macOS after reboots. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#1133](https://github.com/qwibitai/nanoclaw/pull/1133) | fix: auto-accept remote-control prompt to prevent immediate exit | OPEN | Fixes immediate exit of remote control by auto-accepting prompts. |
| [#823](https://github.com/qwibitai/nanoclaw/pull/823) | feat: Add Google Workspace CLI integration skill | OPEN | Integrates Google Workspace CLI for agent access to services. |
| [#1131](https://github.com/qwibitai/nanoclaw/pull/1131) | Feat: Add MemOS Skill | OPEN | Integrates MemOS as an opt-in persistent memory backend. |
| [#1132](https://github.com/qwibitai/nanoclaw/pull/1132) | Initial setup | CLOSED | Renames assistant, adapts container runtime for Apple Container. |
| [#1128](https://github.com/qwibitai/nanoclaw/pull/1128) | fix: wait for Apple Container XPC service before startup | OPEN | Prevents crashes on macOS reboots by waiting for services. |
| [#1117](https://github.com/qwibitai/nanoclaw/pull/1117) | feat(skill): add Proton suite — Mail via Bridge (Phase 1) | OPEN | Adds Proton Mail integration via Proton Bridge. |
| [#1089](https://github.com/qwibitai/nanoclaw/pull/1089) | feat: add Linux/Docker deployment support | OPEN | Enables containerized NanoClaw deployments for Linux/Docker. |
| [#1114](https://github.com/qwibitai/nanoclaw/pull/1114) | add /add-time-mcp skill for date math and timezone conversions | OPEN | Adds a skill for date math and timezone conversions. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#1088](https://github.com/qwibitai/nanoclaw/issues/1088) | nanoclaw log == 27 GB after 5 days | High | No |
| [#1067](https://github.com/qwibitai/nanoclaw/issues/1067) | NanoClaw fails to start on reboot — Apple Container runtime race condition | High | No |
| [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) | Apple Container: fix networking (host gateway + proxy bind address) | High | No |
| [#1104](https://github.com/qwibitai/nanoclaw/issues/1104) | Apple Container: remove broken .env shadow mount | High | No |
| [#1105](https://github.com/qwibitai/nanoclaw/issues/1105) | Inject GH_TOKEN into containers (macOS Keychain inaccessible) | High | No |

### Trends
- Demand for multi-LLM provider support is high due to potential vendor lock-in.
- Containerization on macOS (Apple Container) remains a significant area of focus and bug fixing.
- Integration with external services like Google Workspace, Signal, and Proton Mail is a key development direction.
- Users are encountering performance issues, particularly with log file growth and slow initial setup.
- Efforts are underway to improve deployment flexibility with Podman and Linux/Docker support.
- Real browser control via CDP is a requested feature for enhanced web interaction.
- Security and authentication mechanisms, like token injection and credential validation, are being refined.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*