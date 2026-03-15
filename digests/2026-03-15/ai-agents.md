# OpenClaw Ecosystem Digest 2026-03-15

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-15 11:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- A recovery release `v2026.3.13-1` was deployed to address issues with the `v2026.3.13` tag.
- Significant activity observed around memory leak (`#45064`) and E2EE verification issues (`#7649`).
- Numerous PRs focus on bug fixes, particularly for channel stability and gateway functionality.

### Releases
- v2026.3.13-1: Recovery release for `v2026.3.13` tag.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | [Bug]: 2026.3.12 Memory Leak - OOM on basic commands (gateway status, doctor) | 23 | 0 | CLI is unusable due to crashes on basic commands. |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | [Bug]: Matrix: bot cannot verify its own account for E2EE (requestOwnUserVerification missing) | 22 | 3 | Bot cannot participate in E2EE channels. |
| [#45772](https://github.com/openclaw/openclaw/issues/45772) | Gateway Heartbeat timer stops after 1-2 triggers (introduced in v2026.3.8) | 16 | 1 | Gateway heartbeat functionality is broken. |
| [#18677](https://github.com/openclaw/openclaw/issues/18677) | Feature Proposal: Security Scan Hook API for skill:install | 15 | 0 | Lacks a security hook before skill installation. |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) | [Bug]: Discord: WebSocket 1005/1006 disconnects with failing resume logic and unbounded backoff | 14 | 2 | Discord bot disconnects disruptively, losing messages. |
| [#3344](https://github.com/openclaw/openclaw/issues/3344) | [Bug]: Gemini outputs fake tool call text instead of executing tools | 14 | 2 | Gemini models fail to execute tools as expected. |
| [#13812](https://github.com/openclaw/openclaw/issues/13812) | [Bug]: v2026.2.9 cron announce → Telegram topic sends summary instead of full output | 14 | 5 | Cron job announcements not sending full content. |
| [#11797](https://github.com/openclaw/openclaw/issues/11797) | [Bug]: Mattermost plugin does not receive channel message events via WebSocket | 14 | 1 | Mattermost plugin misses inbound messages. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#45132](https://github.com/openclaw/openclaw/pull/45132) | feat(slack): add mux receiver for multi-gateway deployments | OPEN | Enables multi-gateway Slack deployments via external mux. |
| [#40936](https://github.com/openclaw/openclaw/pull/40936) | feat(feishu): full ACP agent support — /focus, /unfocus, /reset, and response delivery fix | OPEN | Full ACP agent interaction on Feishu. |
| [#45879](https://github.com/openclaw/openclaw/pull/45879) | feat(metabolism): add homeostatic token budget management system | OPEN | Improves agent token budget management for better flow. |
| [#37251](https://github.com/openclaw/openclaw/pull/37251) | telegram: require strict numeric reply_to_message_id parsing | OPEN | Strict parsing for Telegram reply IDs. |
| [#43190](https://github.com/openclaw/openclaw/pull/43190) | MS Teams: add channel archive persistence and deleted-channel cleanup | OPEN | Adds MS Teams channel archiving and cleanup. |
| [#40129](https://github.com/openclaw/openclaw/pull/40129) | feat(plugins): add registerOutboundTransform API for outbound text transforms | OPEN | Allows plugins to transform outbound streaming text. |
| [#46502](https://github.com/openclaw/openclaw/pull/46502) | Rescue: add watchdog core service and cron engine | OPEN | Adds isolated rescue watchdog for gateway repair. |
| [#47220](https://github.com/openclaw/openclaw/pull/47220) | test(security): add comprehensive DM policy security test suite | OPEN | Tests DM policy modes for blocking/allowing senders. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | [Bug]: 2026.3.12 Memory Leak - OOM on basic commands (gateway status, doctor) | Critical | No |
| [#45772](https://github.com/openclaw/openclaw/issues/45772) | Gateway Heartbeat timer stops after 1-2 triggers (introduced in v2026.3.8) | High | No |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) | [Bug]: Discord: WebSocket 1005/1006 disconnects with failing resume logic and unbounded backoff | High | No |
| [#44714](https://github.com/openclaw/openclaw/issues/44714) | [Bug]: `openclaw logs --follow` fails after 2026.3.12 upgrade with handshake timeout while gateway remains healthy | High | No |
| [#46659](https://github.com/openclaw/openclaw/issues/46659) | [Bug]: WhatsApp: message send fails "No active WhatsApp Web listener" but react succeeds (likely duplicate active-listener module) | High | No |

### Trends
- Memory leaks and crashes (`#45064`) are a critical concern impacting CLI usability.
- WebSocket disconnections and resume failures in various channels (Discord, Matrix) persist.
- Gateway heartbeat and connection stability issues are frequently reported.
- Several bugs relate to message delivery failures and incorrect formatting across channels.
- Feature requests focus on improving security (skill scan hook) and execution guardrails.
- Multi-gateway deployments and robust channel integration (Feishu, Slack) are areas of active development.
- Token budget management and prompt engineering for agent reliability are ongoing efforts.

---

## Cross-Ecosystem Comparison

This snapshot reveals a landscape of active development with a strong focus on agent reliability, channel integration, and security. OpenClaw leads in established features and stability, while PicoClaw and NanoClaw are rapidly expanding capabilities and tackling core architectural refactoring and new integrations, respectively.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 8 | 8 | 1 | 🟢 |
| PicoClaw | 8 | 9 | 1 | 🟡 |
| NanoClaw | 8 | 8 | 0 | 🟢 |

### OpenClaw vs Peers

*   **OpenClaw Advantage:** Mature multi-channel support with robust gateway functionality, established token management.
*   **Gaps:** Slower pace on core agent loop refactoring compared to PicoClaw. Less aggressive new channel integration compared to NanoClaw.
*   **Roadmap Differences:** OpenClaw appears focused on stability, recovery, and enhancing existing integrations (e.g., multi-gateway Slack, Feishu ACP), while peers explore more foundational agent architecture (PicoClaw) and rapid expansion into new platforms (NanoClaw).

### Shared Directions

*   **Agent Reliability & Stability:** Addressing critical bugs related to memory leaks, crashes, and disconnections across all projects. (OpenClaw, PicoClaw, NanoClaw)
*   **Enhanced Channel Integrations:** Expanding support for new messaging platforms and improving functionality of existing ones. (OpenClaw, PicoClaw, NanoClaw)
*   **Security Enhancements:** Implementing security hooks, scanning, and addressing vulnerabilities like prompt injection and improper tool execution validation. (OpenClaw, PicoClaw, NanoClaw)
*   **Token Management & Resource Optimization:** Improving the efficiency of agent operations, particularly in relation to model usage and communication. (OpenClaw, PicoClaw)
*   **Agent Extensibility & Modularity:** Developing frameworks for skills, plugins, and external integration discovery. (OpenClaw, PicoClaw, NanoClaw)
*   **Debugging and Observability:** Adding tools and improving logging mechanisms for better problem diagnosis. (OpenClaw, PicoClaw, NanoClaw)

### Trend Signals

*   **Escalating Demand for Security:** Community focus on prompt injection, tool execution integrity, and secure deployment.
*   **Multi-Channel Ubiquity:** Projects are striving for broad platform support, from enterprise (MS Teams, Mattermost) to consumer (Discord, Telegram, WhatsApp).
*   **Architectural Refinement:** Underpinning agent functionality with more flexible and observable core loops is a key development area.
*   **AI Governance & Control:** Features like token budgeting, skill marketplaces, and policy enforcement signal growing needs for managing AI behavior.
*   **Developer Productivity Tools:** Focus on deployment ease (Docker, Linux), introspection skills, and efficient development workflows.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
-   Agent refactoring for an event-driven, hookable, and interruptible loop is a major ongoing enhancement (#1316).
-   Significant dependency updates across the board, including frontend libraries and GitHub Actions.
-   Multiple new channel integrations (Mattermost) and improvements to existing ones (QQ, Telegram) are in progress.

### Releases
-   **v0.2.3-nightly.20260315.5a251b46**: Nightly Build of v0.2.3.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #1316 | [Agent refactor] Event-driven agent loop with hooks, interrupts, and steering | 11 | 1 | Enhances agent observability and control. |
| #1216 | Meta: Agent refactor | 7 | 0 | Strategic initiative to improve agent code quality. |
| #1498 | [Feature]期待功能增加：模型端搜索和fastembed | 5 | 0 | Adds potential new model provider capabilities. |
| #294 | Feature: Base Multi-agent Collaboration Framework & Shared Context | 3 | 0 | Foundation for future multi-agent architectures. |
| #1424 | [Feature] Add support for Azure OpenAI provider | 3 | 0 | Expands cloud provider integration. |
| #407 | [issue]look like feishu not support armv7 32bit | 3 | 0 | Addresses platform compatibility issues. |
| #1474 | [Feature] Capability discovery and profile enumeration endpoint for orchestration layers | 3 | 0 | Improves external integration discoverability. |
| #1591 | Support Telegram group observe-only mode: ingest all messages but reply only when tagged | 1 | 0 | Enhances Telegram group chat functionality. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #1610 | fix(web): require CIDR allowlist for public mode | OPEN | Enhances security for public mode. |
| #1349 | feat(qq): support parsing and replying to more attachment types | OPEN | Improves QQ channel interaction with attachments. |
| #1609 | chore(deps): bump @tanstack/react-router from 1.163.3 to 1.167.0 in /web/frontend | OPEN | Updates a core frontend routing library. |
| #1608 | chore(deps): bump dayjs from 1.11.19 to 1.11.20 in /web/frontend | OPEN | Updates a date/time manipulation library. |
| #1607 | chore(deps): bump react-i18next from 16.5.4 to 16.5.8 in /web/frontend | OPEN | Updates internationalization library for React. |
| #1606 | chore(deps-dev): bump @vitejs/plugin-react from 5.1.4 to 5.2.0 in /web/frontend | OPEN | Updates Vite React plugin. |
| #1605 | chore(deps): bump jotai from 2.18.0 to 2.18.1 in /web/frontend | OPEN | Updates a state management library. |
| #1604 | chore(deps): bump docker/login-action from 3 to 4 | OPEN | Updates Docker login action for CI/CD. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1561 | [BUG] 心跳消耗token问题 | high | No |
| #1582 | [BUG] Got mode xxx not found on multi agent setup | high | No |
| #1578 | [BUG] image\_model config field is not wired into agent loop — images always route to primary model | high | #1593 |
| #1574 | The prompt\_cache\_key error is a picoclaw bug | medium | No |
| #1568 | [BUG] Cron tasks may occasionally fail to execute and only send task descriptions | medium | No |

### Trends
-   Ongoing significant effort to refactor and improve the agent's core loop for greater flexibility and control.
-   Continued expansion of supported messaging channels, with Mattermost being the latest request.
-   Frequent dependency updates across frontend and backend components, indicating active maintenance.
-   Several issues related to multi-agent configurations and routing are being addressed.
-   Requests for improved media handling and richer attachment support in channel integrations.
-   Focus on security through dependency scanning and improved access control mechanisms.
-   Exploration of advanced provider features and fallback strategies to ensure robustness.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- 17 new issues and 50 new PRs in the last 24 hours indicate high activity.
- Multiple critical and high-priority bugs reported, including significant log file growth and startup failures.
- Several new channel integrations (Telegram, QQ) and feature enhancements (FTS5 search, hybrid memory retrieval) are under active development.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #384 | Nanoclaw needs a skill marketplace/registry | 8 | 14 | Core security enhancement for modular agent growth. |
| #908 | FTS5 conversation indexing and search | 2 | 0 | Crucial for agent recall and improving past conversation utility. |
| #1088 | nanoclaw log == 27 GB after 5 days | 0 | 0 | Indicates major logging issue impacting disk space. Critical. |
| #1067 | NanoClaw fails to start on reboot — Apple Container runtime race condition | 0 | 0 | Prevents reliable auto-starting on macOS. High priority. |
| #829 | fix(templates): no SOUL.md rule against fabricating tool execution claims | 1 | 0 | Security vulnerability regarding tool execution claims. Medium. |
| #411 | Add Indirect Prompt Injection Risks to Security Consideration and Docs | 2 | 0 | Highlights a critical security vulnerability in documentation. Medium. |
| #753 | bug(register): assistant name not updated in groups/main/CLAUDE.md | 0 | 0 | Assistant registration bug affecting core configurations. Medium. |
| #698 | Agent cannot determine current day of week from ISO timestamps | 0 | 0 | Limits agent's ability to handle time-sensitive requests. Medium. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #1089 | feat: add Linux/Docker deployment support | Needs Review | Enables NanoClaw deployment on Linux and Docker environments. |
| #1090 | fix: mount .claude.json as writable to prevent EROFS crash | Needs Review | Resolves critical EROFS crash by mounting config file as writable. |
| #1087 | feat: add Telegram channel, voice transcription, and message deduplic… | Blocked | Adds Telegram integration, voice transcription, and message deduplication. |
| #1093 | chore: rename agent to Claw and fix WhatsApp group sync | Needs Review | Renames agent persona and fixes WhatsApp group synchronization. |
| #1086 | add /capabilities and /status skills | Needs Review | Introduces introspection skills for system capabilities and status. |
| #1092 | Support for OpenAI API | Needs Review | Adds support for OpenAI API for locally run models. |
| #1085 | feat: add sync-forks skill for community fork maintainers | Needs Review | Skill for community fork maintainers to sync their customized NanoClaw. |
| #1091 | fix: fall back to process.env when .env file not present on disk | Needs Review | Improves environment variable loading for containerized deployments. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1088 | nanoclaw log == 27 GB after 5 days | Critical | None |
| #1067 | NanoClaw fails to start on reboot — Apple Container runtime race condition | High | None |
| #908 | FTS5 conversation indexing and search | High | None |
| #829 | fix(templates): no SOUL.md rule against fabricating tool execution claims | Medium | None |
| #753 | bug(register): assistant name not updated in groups/main/CLAUDE.md | Medium | None |

### Trends
- High demand for new channel integrations (Telegram, QQ, Slack).
- Critical need for robust logging and error handling improvements.
- Growing interest in advanced memory retrieval and FTS5 search capabilities.
- Persistent challenges with containerized deployments on macOS and Linux.
- User-reported difficulties with sandbox environment configuration and file access.
- Increasing focus on security considerations like indirect prompt injection.
- Requests for enhanced agent autonomy and tool execution verification.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*