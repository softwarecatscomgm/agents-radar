# OpenClaw Ecosystem Digest 2026-03-08

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-08 11:23 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- New `ContextEngine` plugin slot added for robust agent context management throughout the turn lifecycle.
- Significant focus on improving CLI version output with commit hashes for better traceability.
- Work continues on enhancing provider integration and model discovery with new AI services.

### Releases
- v2026.3.7: Introduction of a flexible `ContextEngine` plugin interface with comprehensive lifecycle hooks.
- v2026.3.7-beta.1: Identical release to v2026.3.7, likely an earlier build.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | [OPEN] [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | 35 | 5 | Impacts usability and trust in API integrations. |
| [#39651](https://github.com/openclaw/openclaw/issues/39651) | [OPEN] [bug, regression] 只会说话不会工作 | 23 | 0 | Agents cannot perform basic file operations due to permission issues. |
| [#9899](https://github.com/openclaw/openclaw/issues/9899) | [OPEN] [bug, stale] Include day of week in system prompt date/time injection | 13 | 4 | Agents struggle with calendar/schedule accuracy. |
| [#851](https://github.com/openclaw/openclaw/issues/851) | [CLOSED] [bug] [Bug] Tool call JSON leaking into chat instead of executing tool | 13 | 6 | Core tool functionality is broken, appearing as text. |
| [#861](https://github.com/openclaw/openclaw/issues/861) | [CLOSED] [bug] [Bug]: clawdbot: not found | 12 | 0 | Installation script fails to find a critical component. |
| [#323](https://github.com/openclaw/openclaw/issues/323) | [CLOSED] [bug] [Bug]: OAuth token refresh failed for anthropic | 11 | 0 | Authentication issues prevent Anthropic model usage. |
| [#36817](https://github.com/openclaw/openclaw/issues/36817) | [CLOSED] Tracking: gpt-5.4 model availability/support in OpenClaw | 10 | 23 | New powerful models are not selectable by users. |
| [#39081](https://github.com/openclaw/openclaw/issues/39081) | [CLOSED] Windows Gateway service inherits incomplete PATH; tools.exec cannot find installed CLI tools (docker, rg) | 9 | 0 | Windows CLI tools are inaccessible by the gateway service. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| [#39761](https://github.com/openclaw/openclaw/pull/39761) | [commands, agents, size: S] feat: enrich message_sending plugin hook with agent reasoning context (agentContext) | OPEN | Adds reasoning context to message sending plugin hooks. |
| [#38042](https://github.com/openclaw/openclaw/pull/38042) | [docs, gateway, commands, agents, size: L] feat: add Local Server Provider for fully custom inference endpoints | OPEN | Enables connection to any custom HTTP inference endpoint. |
| [#39766](https://github.com/openclaw/openclaw/pull/39766) | [app: web-ui, size: M] fix(config): make models.providers.<id>.models optional to allow credential-only entries | OPEN | Allows configuring providers without specifying models. |
| [#39748](https://github.com/openclaw/openclaw/pull/39748) | [channel: nostr, size: S] fix(nostr): validate relay URLs require WebSocket protocol (wss/ws) | OPEN | Ensures Nostr relay URLs use valid WebSocket protocols. |
| [#39755](https://github.com/openclaw/openclaw/pull/39755) | [size: S] fix(memory): truncate local embedding input to model context size | OPEN | Prevents local embedding indexing errors due to context limits. |
| [#39763](https://github.com/openclaw/openclaw/pull/39763) | [size: XS] fix(darwin): remove self-kickstart from launchd gateway restart; rely on KeepAlive | OPEN | Improves macOS gateway restart reliability with launchd. |
| [#39427](https://github.com/openclaw/openclaw/pull/39427) | [commands, agents, size: XS] fix(auth): accept newer Anthropic setup-token prefixes | OPEN | Supports newer Anthropic token prefixes for authentication. |
| [#39765](https://github.com/openclaw/openclaw/pull/39765) | [gateway, agents, channel: feishu, size: XL, extensions: acpx] Feishu: add ACP topic bindings | OPEN | Enables Feishu topic-bound ACP sessions for persistence. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | False 'API rate limit reached' on all models despite APIs being fully functional | Critical | No |
| [#39651](https://github.com/openclaw/openclaw/issues/39651) | 只会说话不会工作 (Cannot speak but cannot work) | Critical | No |
| [#851](https://github.com/openclaw/openclaw/issues/851) | Tool call JSON leaking into chat instead of executing tool | High | No |
| [#39081](https://github.com/openclaw/openclaw/issues/39081) | Windows Gateway service inherits incomplete PATH; tools.exec cannot find installed CLI tools | High | No |
| [#25692](https://github.com/openclaw/openclaw/issues/25692) | All agent tools unavailable after gateway restart — "Tool not found" | High | No |

### Trends
- Persistent issues with API rate limit reporting and actual API functionality.
- Agents failing to perform fundamental tasks like file creation due to permission errors.
- Need for more intelligent date/time handling for agents in system prompts.
- Tool execution failures and unexpected behavior where tool JSON appears in chat.
- Challenges with gateway and provider stability after restarts or in specific OS environments.
- Ongoing efforts to integrate new AI providers and improve model discovery.
- User desire for more granular control over agent execution security and trust.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The agent ecosystem shows dynamic development with focus on enhanced context management, robust provider integration, security enhancements, and expanded channel support. While OpenClaw leads with advanced context features, PicoClaw and NanoClaw are rapidly adding new integrations and refining core agent functionalities, though both face critical bug fixes.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 8 | 8 | 2 | 🟢 |
| PicoClaw | 7 | 8 | 0 | 🟡 |
| NanoClaw | 8 | 8 | 0 | 🔴 |

### OpenClaw vs Peers
- **Context Engine:** OpenClaw's `ContextEngine` addresses agent context throughout the turn lifecycle, a more advanced feature than currently detailed in peers.
- **Provider & Model Diversity:** OpenClaw's focus on AI services and model discovery aims for broader compatibility, while PicoClaw and NanoClaw are actively adding specific providers.
- **CLI Tracability:** OpenClaw's improved CLI version output with commit hashes is a niche but valuable feature for development and deployment.
- **API/Tooling Stability:** OpenClaw faces significant critical bugs related to API rate limits and tool execution, issues also mirrored to varying degrees in PicoClaw and NanoClaw.
- **Release Cadence:** OpenClaw has recent releases (v2026.3.7), while PicoClaw and NanoClaw show no recent releases, indicating a potential slowdown or focus on internal development.

### Shared Directions
- **Channel Expansion:** Significant effort across all projects to integrate new communication channels (Feishu, QQ, Matrix, custom web channels) (OpenClaw, PicoClaw, NanoClaw).
- **Provider Integration:** Ongoing work to support diverse LLM providers and local model configurations (OpenClaw, PicoClaw).
- **Agent Core Functionality:** Addressing bugs and enhancing agent capabilities, including reasoning and tool execution (OpenClaw, PicoClaw, NanoClaw).
- **Security Enhancements:** Improving security through credential management, command execution safeguards, and container isolation (PicoClaw, NanoClaw).
- **Developer Tooling:** Enhancing CI/CD workflows and build processes for efficiency (PicoClaw, NanoClaw).
- **Configuration Flexibility:** Improving configuration options for providers and models to allow for more custom setups (OpenClaw, PicoClaw, NanoClaw).

### Trend Signals
- **Ubiquitous Channel Integration:** The drive to connect agents to diverse messaging platforms is a dominant trend, democratizing AI agent access.
- **Local Model Access & Configuration Challenges:** Users increasingly want to use local LLMs, but integration complexity and configuration hurdles persist.
- **Agent Security as a Paramount Concern:** As agents gain more capabilities, safeguarding against prompt injection, unauthorized access, and ensuring secure execution becomes critical.
- **Developer Experience & CI/CD Maturity:** Projects are investing heavily in their CI/CD pipelines to ensure faster, more reliable releases and builds.
- **Evolving Agent Reasoning and Context:** The push for more sophisticated agent context management and accurate reasoning reflects a need for agents to perform complex tasks more effectively.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Significant activity in agent and channel enhancements, with multiple PRs addressing existing functionality and adding new capabilities.
- Several bug fixes are being addressed across providers and channels, with a focus on response parsing and message handling.
- New CI/CD workflows are being introduced to streamline development and deployment processes.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? (agent runs but produces no response) | 13 | 0 | Users struggle with local model integration, impacting core functionality. |
| #1210 | picoclaw配置企业微信智能机器人 (AI Bot)？？？ | 9 | 0 | Configuration questions for enterprise WeChat integration. |
| #1218 | [Agent refactor]what an Agent is | 7 | 0 | Defines core agent concepts, crucial for future development. |
| #675 | Add MiniMax LLM Provider Support | 6 | 0 | Request for broader LLM provider compatibility. |
| #966 | [BUG] Local Thinking model (Qwen 3.5) return empty content when reasoning consumes all tokens | 4 | 0 | Bug affecting reasoning models, leading to incomplete agent responses. |
| #1202 | [BUG]Does it support MCP? | 3 | 0 | Configuration issue with MCP, impacting its usability. |
| #62 | BUG: Telegram allow_from with numeric user ID does not work when the user has a username | 3 | 0 | Telegram channel bug impacting user authentication/access control. |
| #1017 | [Feature] Command security component, based on go ebpf | 2 | 0 | Enhancing security with eBPF for command execution. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #820 | fix(security): close shell denylist bypass vectors | OPEN | Mitigates prompt injection via shell command bypass vectors. |
| #1220 | feat: add Matrix channel support | OPEN | Integrates Matrix as a new communication channel. |
| #1171 | feat(feishu): add random reaction emoji config | OPEN | Adds configurable random reaction emojis for Feishu. |
| #1240 | feat: add nightly build GitHub Actions workflow | OPEN | Automates daily builds for continuous integration. |
| #1239 | refactor logger to zerolog | OPEN | Improves logging by transitioning to zerolog. |
| #1238 | ci: use native arm64 runners and add CI Docker builds | OPEN | Optimizes CI for ARM64 and standardizes Docker builds. |
| #1237 | fix(openai_compat): strip leaked Thinking/Final tags from content | OPEN | Cleans reasoning tags from OpenAI compatible provider responses. |
| #1236 | feat: add support for Markdown messages in QQ channel | OPEN | Enables Markdown message formatting in the QQ channel. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? (agent runs but produces no response) | High | No |
| #966 | [BUG] Local Thinking model (Qwen 3.5) return empty content when reasoning consumes all tokens | Medium | No |
| #1202 | [BUG]Does it support MCP? | Medium | No |
| #62 | BUG: Telegram allow_from with numeric user ID does not work when the user has a username | Medium | No |
| #1212 | [BUG] 同时在telegram发送多条消息后，telegram一直显示“正在输入...” | Medium | No |

### Trends
- Increased focus on agent architecture and refactoring for better performance and maintainability.
- Ongoing efforts to expand LLM provider support, with requests for MiniMax and others.
- Multiple enhancements to existing channels like Telegram and QQ, adding new features like Markdown and file uploads.
- Growing demand for enhanced CI/CD pipelines, including nightly builds and optimized runners.
- User feedback highlights challenges with local model configuration and integration.
- Security is a continuing concern, with PRs addressing shell command vulnerabilities.
- Feature requests for more intuitive channel interactions, like reply-to-message threading.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Multiple critical bugs reported yesterday related to task scheduling, agent response handling, and tool usage, indicating recent instability in core functionalities.
- Significant influx of new skills and channel integrations (Feishu, QQ, Google Workspace, iCloud), suggesting expansion across various platforms.
- Efforts underway to improve container security and integrate with real browser control, addressing key user needs.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#834](https://github.com/qwibitai/nanoclaw/issues/834) | Apple Container: .env shadow mount added in v1.2.6 breaks container startup | 0 | 0 | Prevents agent startup on Apple containers due to configuration mounting issue. |
| [#830](https://github.com/qwibitai/nanoclaw/issues/830) | fix: scheduled task fires silently dropped when session is busy | 0 | 0 | Scheduled tasks are lost if the target session is busy, causing missed execution. |
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) | fix(scheduler): once-task race condition — marked completed before fire handler runs | 0 | 0 | Race condition leads to tasks being marked completed too early, like the incident on 2026-03-08. |
| [#827](https://github.com/qwibitai/nanoclaw/issues/827) | fix(agent): FinishReason::ToolUse with 0 tool calls accepted as success | 0 | 0 | Agent incorrectly accepts `ToolUse` without actual calls as success, a protocol violation. |
| [#828](https://github.com/qwibitai/nanoclaw/issues/828) | fix(tools): schedule_task says ISO8601 but code requires RFC3339 with timezone | 0 | 0 | Mismatch between tool description and code requires specific datetime format, causing failures. |
| [#783](https://github.com/qwibitai/nanoclaw/issues/783) | schedule_task has no idempotency key — same task accumulates across sessions | 1 | 0 | Duplicate tasks can be created across sessions, leading to multiple executions. |
| [#833](https://github.com/qwibitai/nanoclaw/issues/833) | [bug]win11 opencode的如何配置 | 0 | 0 | Configuration question for Opencode on Windows 11. |
| [#813](https://github.com/qwibitai/nanoclaw/issues/813) | feat: Gmail email ingestion into fleeting notes pipeline | 0 | 0 | Request to integrate Gmail as a source for automated note-taking. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#831](https://github.com/qwibitai/nanoclaw/pull/831) | feat: add lightweight status HTTP server (health + identity) | Needs Review | Adds basic HTTP endpoints for system health and identity. |
| [#671](https://github.com/qwibitai/nanoclaw/pull/671) | feat(skills): add Feishu (Lark) channel skill | Needs Review, Pending Closure | Enables NanoClaw to communicate via Feishu using WebSockets. |
| [#798](https://github.com/qwibitai/nanoclaw/pull/798) | feat: enhance container environment isolation via credential proxy | Needs Review | Improves container security by proxying credentials from the host. |
| [#821](https://github.com/qwibitai/nanoclaw/pull/821) | feat(skills): add NapCat (QQ) channel via OneBot 11 WebSocket | Needs Review | Integrates NanoClaw with QQ messaging via the OneBot 11 protocol. |
| [#788](https://github.com/qwibitai/nanoclaw/pull/788) | feat(skills): add reply context to Discord, Telegram, and WhatsApp | Needs Review | Allows agents to understand message replies in supported chat platforms. |
| [#824](https://github.com/qwibitai/nanoclaw/pull/824) | feat(skills): add thinking stream skill | Needs Review | Provides real-time visibility into agent's thoughts and tool calls. |
| [#823](https://github.com/qwibitai/nanoclaw/pull/823) | feat: Add Google Workspace CLI integration skill | Needs Review | Integrates NanoClaw with Google Workspace services via CLI. |
| [#819](https://github.com/qwibitai/nanoclaw/pull/819) | add web-channel skill package with host bridge and web template | Needs Review | Adds a web channel integration using Vercel AI SDK. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#834](https://github.com/qwibitai/nanoclaw/issues/834) | Apple Container: .env shadow mount added in v1.2.6 breaks container startup | Critical | N/A |
| [#830](https://github.com/qwibitai/nanoclaw/issues/830) | fix: scheduled task fires silently dropped when session is busy | High | N/A |
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) | fix(scheduler): once-task race condition — marked completed before fire handler runs | High | N/A |
| [#827](https://github.com/qwibitai/nanoclaw/issues/827) | fix(agent): FinishReason::ToolUse with 0 tool calls accepted as success | High | N/A |
| [#828](https://github.com/qwibitai/nanoclaw/issues/828) | fix(tools): schedule_task says ISO8601 but code requires RFC3339 with timezone | High | N/A |

### Trends
- High volume of new skills and channel integrations across Feishu, QQ, Google Workspace, iCloud, and web.
- Critical bug reports highlight recent instability in task scheduling, agent execution, and tool handling.
- Ongoing work to enhance container security and isolation for sensitive credentials.
- Demand for more robust browser interaction capabilities, including Chrome CDP integration.
- Interest in improving agent reasoning and reporting accuracy, particularly around tool execution.
- User requests for simpler setup and configuration for various LLM providers beyond Claude.
- Need for better handling of group chat dynamics and reply contexts in communication channels.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*