# OpenClaw Ecosystem Digest 2026-03-14

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-14 11:26 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Significant regression in core functionality impacting chat, CLI commands, and various channel integrations (WhatsApp, Telegram, Feishu, Slack).
- Latest releases introduce UI redesigns and pre-release packages.
- Active development on privacy, memory management, and platform support (Slack, Feishu).

### Releases
- v2026.3.13: OpenClaw 2026.3.13 with Android/iOS UI updates and appcast updates.
- v2026.3.13-beta.1: Pre-release for npm beta tag v2026.3.13-beta.1.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #45471 | [bug, regression] [Bug]: UI chat not opening | 35 | 0 | Critical bug preventing chat functionality after update. |
| #34830 | [bug, regression] [Bug]: 401 missing authentication header | 14 | 0 | Authentication errors breaking API access after update. |
| #45171 | [bug, regression] [Bug]: WhatsApp outbound send path broken: auto-reply works, message tool / CLI send fails with "No active WhatsApp Web listener" (2026.3.12) | 14 | 0 | WhatsApp messaging broken, impacting core communication channel. |
| #41690 | [bug, regression] [Bug]: Config validation failed: models.providers.kimi-coding.models.0.compat: Unrecognized key: "requiresOpenAiAnthropicToolPayload" | 14 | 0 | Configuration errors impacting specific model providers. |
| #45074 | [bug, regression] [Bug]: CRITICAL: Tools intermittent 'Tool not found' after 2026.3.11 upgrade | 12 | 0 | Intermittent tool failures making core agent functionality unreliable. |
| #41778 | openclaw-message OOM on 4GB servers since v2026.3.7 | 12 | 3 | Memory issues causing CLI instability on lower-spec servers. |
| #44755 | [bug, bug:behavior] [Bug]: After 2026.03.12 update selecting /compact option from the top center UI, crashes the main webchat with a white triangulat logo which i cannot restore | 12 | 0 | UI crash making the main webchat unusable. |
| #40157 | [Bug]: kimi-coding/k2p5 sub-agent tool calls returned as plain text instead of structured tool_use blocks | 12 | 0 | Tool integration issues with specific models. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #44855 | feat(telegram): show waiting reaction when queue has active tasks | OPEN | Improves user experience by showing queue status in Telegram. |
| #45444 | Add /btw side questions | OPEN | Introduces side-question functionality for asynchronous inquiries. |
| #45545 | feat(memory): add heading-aware chunking option for improved search | OPEN | Enhances memory search relevance by preserving semantic structure. |
| #43353 | fix(sessions): thread agentChannel through sessions_send instead of hardcoding INTERNAL_MESSAGE_CHANNEL | OPEN | Fixes routing issues for inter-session messages. |
| #45783 | feat(privacy): add privacy detection and replacement filter for LLM traffic | OPEN | Protects sensitive data by filtering LLM traffic. |
| #45132 | feat(slack): add mux receiver for multi-gateway deployments | OPEN | Enables multi-gateway Slack deployments via WebSocket. |
| #46020 | fix(telegram): use HTML-aware chunking for delivery queue recovery | OPEN | Prevents message loss in Telegram due to character limits. |
| #45939 | fix(memory): watch for external file changes and auto-reindex | OPEN | Automatically re-indexes memory when files change externally. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #45471 | [bug, regression] [Bug]: UI chat not opening | critical | No |
| #45074 | [bug, regression] [Bug]: CRITICAL: Tools intermittent 'Tool not found' after 2026.3.11 upgrade | critical | No |
| #41778 | openclaw-message OOM on 4GB servers since v2026.3.7 | high | No |
| #45171 | [bug, regression] [Bug]: WhatsApp outbound send path broken: auto-reply works, message tool / CLI send fails with "No active WhatsApp Web listener" (2026.3.12) | high | No |
| #44755 | [bug, bug:behavior] [Bug]: After 2026.03.12 update selecting /compact option from the top center UI, crashes the main webchat with a white triangulat logo which i cannot restore | high | No |

### Trends
- Widespread regressions impacting core chat, CLI, and channel integrations after recent updates.
- Key integrations like WhatsApp and Telegram are experiencing significant issues.
- UI improvements for mobile and desktop are being rolled out.
- Ongoing work to enhance privacy and memory management.
- Expanding support for various platforms and multi-gateway deployments.
- Issues with specific model providers and tool integration persist.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The agent framework ecosystem is experiencing a surge in development, with a strong emphasis on enhancing core agent capabilities, expanding channel integrations, and improving memory management. OpenClaw faces significant regression issues impacting stability, while PicoClaw and NanoClaw are actively pushing forward with architectural refactors and new feature development.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 8 | 8 | 2 | 🟡 |
| PicoClaw | 8 | 8 | 1 | 🟢 |
| NanoClaw | 8 | 8 | 0 | 🟢 |

### OpenClaw vs Peers
- OpenClaw is heavily impacted by critical regressions, hindering its ability to leverage recent UI and platform support advancements, unlike PicoClaw and NanoClaw which exhibit more stable, feature-driven progress.
- While PicoClaw and NanoClaw focus on core agent refactoring and intelligent features like skill self-creation, OpenClaw is grappling with fundamental operational failures across chat and integrations.
- OpenClaw's broad platform support (Slack, Feishu) and UI redesigns are overshadowed by critical bugs, whereas PicoClaw and NanoClaw are steadily adding provider support (Azure OpenAI) and refining existing integrations (WhatsApp).
- OpenClaw's advanced privacy features are a differentiator, but their impact is diminished by widespread instability.

### Shared Directions
- Enhancing agent learning and self-improvement capabilities (NanoClaw, PicoClaw)
- Expanding communication channel integrations (OpenClaw, PicoClaw, NanoClaw)
- Improving memory management and persistence (OpenClaw, NanoClaw)
- Strengthening security defaults and practices (PicoClaw, NanoClaw)
- Integrating new model providers and enhancing tool usage (OpenClaw, PicoClaw)
- Addressing critical stability and regression issues (OpenClaw, PicoClaw, NanoClaw)

### Trend Signals
- The critical need for robust stability and regression testing in agent frameworks.
- Increasing sophistication of agent learning and self-creation mechanisms.
- Growing demand for diverse and reliable communication channel integrations.
- Emphasis on secure by default configurations for agent deployments.
- Advancements in memory retrieval and semantic understanding for agents.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Agent refactor to event-driven with hooks and interrupts is a major ongoing effort.
- Security vulnerabilities in channel setup and exec tooling are being actively addressed.
- Significant progress on provider support and bug fixes across various domains.

### Releases
- v0.2.3-nightly.20260314.c68b4f39: Nightly Build

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #1316 | [Agent refactor] Event-driven agent loop with hooks, interrupts, and steering | 10 | 1 | Enhances agent observability, control, and extensibility. |
| #1506 | [Feature] Expose local file path in Feishu inbound messages | 9 | 1 | Enables agent file tool usage for non-image Feishu messages. |
| #1216 | Meta: Agent refactor | 5 | 0 | Addresses architectural debt for future agent development. |
| #1493 | [BUG] 新增一个模型在会话中不生效，需重启gateway后才生效 | 3 | 0 | Newly added models require gateway restart to function. |
| #1424 | [Feature] Add support for Azure OpenAI provider | 3 | 0 | Integrates PicoClaw with Azure OpenAI services. |
| #528 | Problemas com agendamento pelo chat usando cron | 3 | 0 | Issues with scheduling tasks via chat using cron. |
| #1530 | Security: pico setup should not enable query-token auth and wildcard origins by default | 2 | 0 | Improves security by defaulting to safer channel configurations. |
| #1372 | [Feature]openim plugin? | 2 | 0 | Explores integration possibilities with OpenIM. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #1544 | fix: merge PR #1514 #1513 #1512 #1510 #1509 | CLOSED | Merges multiple bug fixes and enhancements. |
| #1514 | feat: Add support for Kimi For Coding model | OPEN | Integrates Kimi For Coding model with USER_AGENT adjustments. |
| #1559 | fix: merge PR #1327 #1319 #1318 #1313 | CLOSED | Merges multiple bug fixes and enhancements. |
| #1558 | fix: merge PR #1344 #1342 #1341 #1331 | CLOSED | Merges multiple bug fixes and enhancements. |
| #1563 | fix: Use secure defaults for Pico channel setup and stop leaking the token in the URL | OPEN | Secures Pico channel setup and prevents token leakage. |
| #1562 | bug fix: gateway should not start when gateway server is not running | OPEN | Prevents gateway startup if server is unavailable. |
| #1555 | fix: merge PR #1390 #1389 #1383 #1381 | CLOSED | Merges multiple bug fixes and enhancements. |
| #1564 | docs: update wechat qrcode | CLOSED | Updates the WeChat QR code in documentation. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1493 | [BUG] 新增一个模型在会话中不生效，需重启gateway后才生效 | high | None |
| #1530 | Security: pico setup should not enable query-token auth and wildcard origins by default | high | #1563 |
| #1532 | [BUG] picoclaw cron add指令有严重的bug | critical | None |
| #1533 | [BUG] tool: Tool not found {tool=skill_vetter}，但已经安装了skill-vetter | medium | None |
| #1150 | pool: factory panic leaves inflight entry orphaned, causing permanent deadlock for that target | critical | None |

### Trends
- Ongoing work to enhance agent capabilities with event-driven architecture.
- Focus on improving security defaults for channel and execution tools.
- Demand for broader provider support, including Azure OpenAI.
- Need for better visibility into subagent status and introspection.
- Usability improvements for cron scheduling and model management.
- Addressing issues with media file handling within sandboxed environments.
- Desire for more flexible transcript persistence options.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Agent system prompts are being enhanced to teach learning behaviors (session search, structured memory, skill creation).
- Significant work on skill self-creation, including IPC handlers and security scanning for agents.
- WhatsApp channel integration is underway, with fixes for crashes related to QR codes and session logout.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #911 | Skill self-creation IPC handler with security scanning | 1 | 0 | Enables agents to create new skills securely after validation. |
| #1047 | bug: whatsapp channel crashes service on QR (non-macOS) and on session logout | 1 | 0 | Crucial fix for WhatsApp channel stability and recoverability. |
| #913 | Agent system prompt additions for learning behaviors | 1 | 0 | Improves agent's ability to learn and utilize core capabilities. |
| #912 | create_skill MCP tool for container agents | 1 | 0 | Allows agents to propose new skills from within their containers. |
| #910 | Structured memory with USER.md and character limits | 1 | 0 | Enhances agent memory management and user personalization. |
| #926 | Admin mode: intercept main-channel admin commands and add /capabilities read-only flow | 0 | 0 | First step towards administrative control and visibility. |
| #1052 | Proposal: Load global CLAUDE.md for main group too | 0 | 1 | Improves consistency in global memory loading across groups. |
| #1045 | setup: no validation of Claude token — invalid tokens only surface on first message | 0 | 0 | Prevents silent failures by validating tokens early in setup. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #1018 | Fix: Z.ai claude code api not work | OPEN | Fixes an issue with the Z.ai Claude Code API endpoint. |
| #988 | feat: smart token optimization (inline compaction + length control + CLAUDE.md compression) | CLOSED | Optimizes token usage by compacting transcripts and compressing memory. |
| #971 | feat: admin command interception + /capabilities | OPEN | Intercepts admin commands for better control and read-only capabilities. |
| #1051 | feat: WhatsApp channel integration (skill/whatsapp) | CLOSED | Integrates the WhatsApp channel into the main codebase. |
| #1063 | feat: add /add-user-memory skill for structured user profile (USER.md) | OPEN | Adds a skill to manage structured user profiles in USER.md. |
| #823 | feat: Add Google Workspace CLI integration skill | OPEN | Integrates official Google Workspace CLI for broad access. |
| #1061 | feat(memory): expose scope parameter in memoryStore and memorySearch | CLOSED | Enhances memory API with scope parameter for better control. |
| #1043 | feat: upgrade memory to memory-lancedb-pro (hybrid BM25+vector retrieval) | OPEN | Upgrades memory to a hybrid retrieval system for better recall. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1047 | bug: whatsapp channel crashes service on QR (non-macOS) and on session logout | critical | #1051 |
| #960 | MCP env vars not passed to containers after credential proxy migration | high | N/A |
| #1046 | bug: scheduled task containers don't receive MCP credential mounts | high | N/A |
| #1045 | setup: no validation of Claude token — invalid tokens only surface on first message | medium | N/A |
| #1053 | fix: agent-runner source not updating for existing groups | medium | #1053 |

### Trends
- Increasing focus on agent learning capabilities and self-improvement.
- Significant expansion of communication channels (WhatsApp, Signal, Nostr, White Noise).
- Development of new skills for enhanced data management and external service integration.
- Enhancements to memory systems for better long-term recall and structured data.
- Growing emphasis on security for agent-initiated actions like skill creation.
- Addressing critical stability issues in existing channels like WhatsApp.
- Introduction of administrative controls and command interception.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*