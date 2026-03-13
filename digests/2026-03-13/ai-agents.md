# OpenClaw Ecosystem Digest 2026-03-13

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-13 11:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- The Control UI dashboard has been significantly refreshed with modular views and enhanced chat tools.
- A new release, v2026.3.12, is now available, incorporating updates to the Control UI and OpenAI/GPT-5.4 compatibility.
- Over 500 issues and 500 PRs were active in the last 24 hours, indicating high development and community engagement.

### Releases
- **v2026.3.12:** openclaw 2026.3.12

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #3460 | [enhancement] Internationalization (i18n) & Localization Support | 99 | 2 | Essential for global reach and user accessibility. |
| #26534 | Add DingTalk as a first-install channel option | 67 | 22 | Improves initial user setup for a key communication channel. |
| #32828 | [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | 55 | 10 | Misleading errors impact user confidence and troubleshooting. |
| #39062 | [Bug]: OpenClaw lost filesystem tools (exec/read/write) | 18 | 0 | Critical functionality loss impacts agent capabilities. |
| #39611 | Control UI "device identity required" error after page navigation in 2026.3.7 | 13 | 7 | UI instability breaks user workflow and experience. |
| #16629 | [enhancement] Brave Search API no longer free | 13 | 2 | Requires adaptation to new pricing for web search functionality. |
| #34830 | [Bug]: 401 missing authentication header | 13 | 0 | Authentication issues prevent service access. |
| #9873 | [Bug]: MSTeams Channel Replies Not Being Sent | 13 | 0 | Core messaging functionality failure in a key channel. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #45043 | fix(agent): restore command execution for legacy local onboarding profiles | OPEN | Fixes command execution for older local onboarding setups. |
| #44535 | fix(discord): add text-based mention fallback for thread messages | OPEN | Improves @mention handling within Discord threads. |
| #45004 | docs: fix Brave Search cost info rendering by escaping $ symbols | OPEN | Corrects documentation display of Brave Search costs. |
| #44872 | feat: add /default_model command to set default model persistently | OPEN | Allows persistent default model setting via chat command. |
| #45039 | fix: keep heartbeat turns from polluting main session metadata | OPEN | Prevents synthetic turns from overwriting session metadata. |
| #44349 | feat(slack): add thread-aware requireMentionInThreads config | OPEN | Enhances Slack mentioning control in threads and channels. |
| #41724 | feat(plugins): pluggable session store adapter via plugin API | OPEN | Enables custom session store backends via plugins. |
| #41171 | fix(config): add missing params field to agents.list[] validation schema | CLOSED | Fixes config validation for agent parameters. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #39062 | [Bug]: OpenClaw lost filesystem tools (exec/read/write) | Critical | No |
| #32828 | [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | High | No |
| #39611 | Control UI "device identity required" error after page navigation in 2026.3.7 | High | No |
| #44755 | [Bug]:After 2026.03.12 update selecting /compact option from the top center UI, crashes the main webchat with a white triangulat logo which i cannot restore | High | No |
| #34830 | [Bug]: 401 missing authentication header | High | No |

### Trends
- Increasing focus on UI/UX improvements with new dashboard features and chat enhancements.
- Persistent issues with API integration and rate limiting continue to be a pain point for users.
- File system tool failures indicate a need for robust testing of core agent capabilities.
- WebSocket connectivity issues and authentication errors suggest ongoing stability challenges.
- Community engagement remains high with a large volume of reported issues and pull requests.
- Requests for expanded channel support and improved provider integrations are ongoing.
- Bug regressions highlight the importance of thorough regression testing for releases.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The generative AI agent ecosystem is marked by rapid development, with a strong emphasis on expanding integrations and refining agent capabilities. OpenClaw leads in UI enhancements and broad community engagement, while PicoClaw focuses on core agent refactoring and security. NanoClaw addresses critical usability blockers and memory enhancements.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 500+ | 500+ | 1 | 🟢 |
| PicoClaw | 24 | 8 | 1 | 🟡 |
| NanoClaw | 3 | 7 | 0 | 🟡 |

### OpenClaw vs Peers
-   **UI/UX Leadership:** OpenClaw's refreshed Control UI and advanced chat tools significantly outpace the UI focus in PicoClaw and NanoClaw.
-   **Integration Breadth:** OpenClaw boasts a wider array of active PRs concerning channel integrations (Discord, Slack, MSTeams) compared to PicoClaw's specific additions (Azure OpenAI, ModelScope) and NanoClaw's new channels (Signal, Feishu, Telegram).
-   **Release Cadence:** OpenClaw's regular versioned releases (v2026.3.12) and nightly builds contrast with PicoClaw's nightly builds and NanoClaw's lack of recent formal releases.
-   **Core Functionality Stability:** OpenClaw's critical bug (#39062: lost filesystem tools) and frequent auth/rate limit issues highlight potential stability concerns not as prominently featured in PicoClaw's or NanoClaw's reported bugs.
-   **Community Engagement:** OpenClaw's exceptionally high issue and PR counts dwarf the activity seen in PicoClaw and NanoClaw, indicating a much larger and more active developer and user community.

### Shared Directions
-   **Channel Expansion & Improvement:** All projects are actively working on adding new messaging channels and improving existing ones (OpenClaw: DingTalk, MSTeams; PicoClaw: Matrix, LINE, Telegram; NanoClaw: Signal, Feishu, Telegram). (OpenClaw, PicoClaw, NanoClaw)
-   **Provider Integration:** There's a clear push to support a wider range of AI models and services (OpenClaw: OpenAI/GPT-5.4; PicoClaw: Azure OpenAI, ModelScope; NanoClaw: Claude subscription). (OpenClaw, PicoClaw, NanoClaw)
-   **Agent Memory & Recall:** Enhancements to how agents store and retrieve information are critical, with conversation indexing and search being a key focus (NanoClaw), and context management in PicoClaw. (PicoClaw, NanoClaw)
-   **Configuration & Setup Usability:** Improving the ease of setting up and configuring agents, especially for local models, is a shared concern (PicoClaw: local Ollama models; NanoClaw: OAuth token expiry). (PicoClaw, NanoClaw)
-   **Security & Robustness:** Addressing vulnerabilities and ensuring stable operation, including handling API rate limits and authentication, is a persistent theme. (OpenClaw, PicoClaw, NanoClaw)

### Trend Signals
-   Increasing demand for **multi-channel integration** and seamless communication across various platforms.
-   Growing emphasis on **agent memory and recall capabilities** through advanced indexing and search.
-   The critical need for **stable authentication and authorization** mechanisms for continuous operation, especially in headless environments.
-   Development focus shifting towards **pluggable architectures** for providers and session stores for flexibility.
-   Ongoing efforts to enhance **user experience and simplify onboarding** for both developers and end-users.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Agent refactoring continues with focus on context management and defining agent boundaries.
- Security vulnerabilities in Matrix and LINE channels related to unbounded request bodies are being addressed.
- New provider support for Azure OpenAI and ModelScope is being integrated.

### Releases
- nightly: Nightly Build **v0.2.2-nightly.20260313.19835b2f**

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #1218 | [Agent refactor]what an Agent is | 24 | 0 | Defines core concepts for Pico Agent's personality. |
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? (agent runs but produces no response) | 17 | 0 | Crucial for local development and testing. |
| #1437 | 使用手机热点供另一台手机picoclaw连网后，飞书不能正常收到消息 | 4 | 0 | Network connectivity issues impacting Feishu notifications. |
| #1439 | [Agent refactor] Context management: boundaries, compression, and token budgeting | 4 | 0 | Improves agent's ability to manage conversation history. |
| #1405 | [BUG] Matrix channel downloads media into memory without size limits | 4 | 0 | Potential DoS via unbounded media downloads. |
| #1216 | Meta: Agent refactor | 3 | 0 | Long-term plan for agent architecture improvements. |
| #1328 | [Feature] Native Telegram reactions for low-noise acknowledgements | 3 | 0 | Enhances user experience with lighter interactions. |
| #1424 | [Feature] Add support for Azure OpenAI provider | 2 | 0 | Expands cloud AI model integration options. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #1422 | feat(provider): add support for azure openai provider | OPEN | Enables Azure OpenAI provider integration. |
| #1179 | fix: Fixed the bug where the bus was closed and consumers had unfinished messages. | OPEN | Ensures graceful shutdown preventing message loss. |
| #1508 | #434 is missing NetBSD support for picoclaw-launcher{-tui} | OPEN | Adds NetBSD support to launcher binaries. |
| #1507 | feat(web): use a global WebSocket for Pico chat sessions | CLOSED | Centralizes chat WebSocket for better session management. |
| #303 | fix: make bot greeting name configurable via bot_name setting | OPEN | Allows customization of bot greeting name. |
| #434 | feat: add NetBSD to the list of released platforms | CLOSED | Includes NetBSD in build release platforms. |
| #982 | feat(web_search): add load balance and failover for api keys | CLOSED | Improves web search API key resilience. |
| #1187 | make gateway aware of config.json change | CLOSED | Gateway now detects config file changes. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #1405 | [BUG] Matrix channel downloads media into memory without size limits | high | No |
| #1407 | [BUG] LINE webhook handler reads unlimited bodies (DoS risk) | high | No |
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? (agent runs but produces no response) | medium | No |
| #1437 | 使用手机热点供另一台手机picoclaw连网后，飞书不能正常收到消息 | medium | No |
| #1502 | [BUG] Mistral integration fails with "Extra inputs..." | medium | No |

### Trends
- Ongoing refactoring of the agent module for better context management and structure.
- Concerns around security vulnerabilities in channel implementations, specifically unbounded request body reads.
- User demand for broader provider support, including Azure OpenAI and ModelScope.
- Requests for enhanced features like stable agent identity and structured event streaming for orchestration.
- Usability improvements are being requested, such as better configuration documentation and handling of special characters in session keys.
- Community interest in supporting alternative operating systems like OpenWrt and NetBSD.
- Desire for more flexible speech I/O integration via pluggable providers.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- OAuth token expiry remains a critical issue for headless operation, impacting Claude Code CLI users; a fix or workaround is urgently needed.
- Significant progress on conversation indexing and search capabilities is underway, aiming to enhance agent memory and recall.
- New channel integrations (Signal, Feishu, Telegram bots) are being actively developed, expanding NanoClaw's connectivity.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #730 | [Bug] CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 | 3 | 0 | Prevents headless operation; users lose access after a few hours. |
| #908 | [Enhancement] FTS5 conversation indexing and search | 2 | 0 | Enables agents to recall past conversations by keyword. |
| #909 | [Enhancement] Session search IPC flow and MCP tool | 1 | 0 | Connects search capabilities to agents within containers. |
| #1020 | [Bug] Fix: Duplicate messages sent to user when SDK returns multiple results | 1 | 0 | Users receive multiple replies, causing confusion and double processing. |
| #829 | [Bug] fix(templates): no SOUL.md rule against fabricating tool execution claims | 1 | 0 | Agent may falsely claim tool execution, impacting debugging and trust. |
| #1029 | [Question] Get nanoclaw to use Claude subscription | 1 | 0 | User seeks to use subscription instead of expiring OAuth tokens. |
| #827 | [Bug] fix(agent): FinishReason::ToolUse with 0 tool calls accepted as success | 1 | 0 | Protocol violation allows tool use completion with zero actual calls. |
| #341 | [Bug] add-discord skill contains outdated Apple Container code, breaks Docker users | 1 | 0 | Docker/Colima users cannot use the Discord skill due to container command issues. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #1016 | feat: add Signal channel skill (/add-signal) | Needs Review | Adds Signal as a Messaging channel using signal-cli. |
| #1028 | feat: add Telegram bot pool for agent swarm | Merged | Enables agent swarms with individual Telegram bots. |
| #920 | feat: add Feishu (Lark) channel integration | Needs Review | Integrates Feishu as a new messaging channel. |
| #843 | fix(security): sanitize WebFetch/WebSearch results via PostToolUse hook | Blocked | Protects against injection attacks from tool results. |
| #1027 | feat: implement session search IPC flow and MCP tool (#909, #908) | Needs Review | Implements FTS5 search with IPC/MCP integration. |
| #921 | feat(github): add autonomous governance self-healing lanes | Blocked | Adds autonomous governance features for self-healing. |
| #801 | fix(jarvis): automate Andy review ownership and stale cleanup | Blocked | Automates review ownership and stale cleanup processes. |
| #1026 | feat: autonomous loop criteria + push/land skill improvements | Merged | Adds autonomous loop criteria and improves push/land skills. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #730 | [Bug] CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 | critical | - |
| #1020 | [Bug] Fix: Duplicate messages sent to user when SDK returns multiple results | high | #1022 |
| #827 | [Bug] fix(agent): FinishReason::ToolUse with 0 tool calls accepted as success | high | - |
| #341 | [Bug] add-discord skill contains outdated Apple Container code, breaks Docker users | high | - |
| #829 | [Bug] fix(templates): no SOUL.md rule against fabricating tool execution claims | medium | - |

### Trends
- OAuth token expiration for Claude Code CLI users is a persistent blocker.
- Core functionality improvements focus on enhancing agent memory via conversation indexing.
- Expanding messaging channel support is a major driver, with new integrations being proposed.
- Security enhancements are addressing prompt injection risks in tool usage.
- Issues with Docker/Colima compatibility continue to affect skill usability.
- Agent behavior with tool calls and error handling requires refinement.
- Documentation updates are needed to address prompt injection and read-only path issues.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*