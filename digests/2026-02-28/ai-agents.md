# OpenClaw Ecosystem Digest 2026-02-28

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-02-28 11:21 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Significant increase in open issues (414) and PRs (396) over 24 hours, indicating high activity and potential bottlenecks.
- Multiple critical bugs reported across various channels (Discord, Telegram, Slack, macOS app), suggesting widespread stability concerns.
- Active development on parallel tool execution, memory plugins, and channel enhancements, pointing towards future performance and feature gains.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|--------------------------------------------------------------------------------------|----|----|-------------------------------------------|
| #1818 | [CLOSED] [bug] [Bug]: Onboarding wizard does not install Systemd service on Ubuntu 22.04 | 31 | 25 | Core setup failure on a major Linux distro. |
| #26534 | Add DingTalk as a first-install channel option | 22 | 6 | Improves onboarding for a significant user base. |
| #21653 | [bug] [Bug]: Custom API providers defaulted to a 4096-token context window, causing the completion to fail | 20 | 0 | Prevents API integrations from functioning. |
| #23538 | [Bug] Anthropic setup-token auth returns 401 Invalid bearer token on 2026.2.21-2 (isolated profile repro) | 15 | 0 | Authentication issues with a key provider. |
| #10287 | [CLOSED] [bug] [Bug]: Config warnings:\n- plugins.entries.feishu: plugin feishu: duplicate plugin id detected; later plugin may be overridden (/usr/local/lib/node_modules/openclaw/extensions/feishu/index.ts) | 11 | 3 | Duplicate plugin IDs can cause unexpected behavior. |
| #1797 | [CLOSED] [bug] [Bug]: GitHub Copilot Enterprise accounts fail with HTTP 421 Misdirected Request | 10 | 0 | Major integration failure for Copilot Enterprise. |
| #28877 | [bug] [Bug]: macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | 10 | 0 | Breaks functionality for Intel Mac users. |
| #2102 | [CLOSED] [bug, stale] [Bug]: HTTP_PROXY is ignored | 10 | 19 | Network connectivity issues for users behind proxies. |

### Key PRs
| # | Title | Status | What it does |
|---|--------------------------------------------------------------------------------------------------------------------|--------|-----------------------------------------------|
| #29703 | [app: web-ui, gateway, size: XS] fix(webchat): prevent long responses from disappearing after stream c… | OPEN | Ensures long WebChat responses are visible. |
| #29582 | [gateway, commands, channel: feishu, size: S] gateway: warn on node event JSON parse errors | OPEN | Improves debugging of node event JSON errors. |
| #29705 | [docs, app: web-ui, size: S] Control UI Chat: session picker + new session + rename | OPEN | Enhances session management in Control UI Chat. |
| #20791 | [app: web-ui, gateway, scripts, agents, channel: feishu, stale, size: XL] Feature/aeon memory plugin | OPEN | Introduces a high-performance memory plugin. |
| #26323 | [agents, size: XL] feat(agents): parallel tool execution, per-tool timeout, caching, and context compression | OPEN | Enables parallel tool execution for improved performance. |
| #29581 | [gateway, channel: feishu, size: XS] gateway: log shutdown close errors | OPEN | Logs errors during gateway shutdown for better debugging. |
| #29587 | [channel: mattermost, size: S] feat(mattermost): add replyToMode support (off | first | all) | OPEN | Adds `replyToMode` support for Mattermost channel. |
| #29583 | [agents, channel: feishu, size: XS] subagents: log ended hook failures | OPEN | Logs subagent hook failures for debugging. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|
| #1818 | [CLOSED] [bug] [Bug]: Onboarding wizard does not install Systemd service on Ubuntu 22.04 | critical | N/A |
| #28877 | [bug] [Bug]: macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | critical | N/A |
| #21653 | [bug] [Bug]: Custom API providers defaulted to a 4096-token context window, causing the completion to fail | high | N/A |
| #23538 | [Bug] Anthropic setup-token auth returns 401 Invalid bearer token on 2026.2.21-2 (isolated profile repro) | high | N/A |
| #26207 | [bug] [Bug]: 2026.2.24 regression — setGlobalDispatcher breaks HTTP proxy for all outbound requests | high | N/A |

### Trends
- Users are experiencing significant compatibility and setup issues across different operating systems and distributions.
- Authentication and API integration failures are impacting key providers like Anthropic and GitHub Copilot Enterprise.
- Network proxy configurations and their correct handling remain a persistent pain point for users.
- Stability issues are prevalent in channel integrations, including Discord, Telegram, and Slack, leading to message loss and errors.
- The macOS application's binary compatibility has regressed, impacting a subset of users.
- Feature requests revolve around expanding channel support and improving existing integrations, like DingTalk and Mattermost.
- Development focus includes parallel processing, caching, and better error logging to enhance performance and maintainability.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The broader LLM application ecosystem shows strong activity and feature development across multiple projects. Key themes include expanding channel integrations, improving provider connectivity, and enhancing agent capabilities. However, stability and security concerns are emerging as critical challenges requiring immediate attention.

### Activity
| Project   | Issues | PRs | Releases | Momentum |
|-----------|--------|-----|----------|----------|
| OpenClaw  | 414    | 396 | 0        | 🟢 rapid |
| PicoClaw  | 150    | 100 | 0        | 🟢 rapid |
| NanoClaw  | 13     | 11  | 0        | 🟡 steady |

### OpenClaw vs Peers
- OpenClaw leads in raw issue and PR volume, indicating aggressive development and rapid iteration.
- PicoClaw shows substantial activity focused on provider integration and channel enhancements, mirroring some OpenClaw efforts but with a stronger emphasis on diverse LLM providers.
- NanoClaw, while less voluminous, is proactively addressing critical security vulnerabilities and architectural refactoring, suggesting a focus on foundational stability and future scalability.
- OpenClaw's macOS regression and widespread critical bugs highlight immediate release stability needs not as apparent in PicoClaw or NanoClaw's reported issues.

### Shared Directions
- **Enhanced Channel Support:** All projects are actively working on integrating or improving existing messaging and communication channels (Feishu, Mattermost, Signal, WhatsApp). (OpenClaw, PicoClaw, NanoClaw)
- **Provider Integration & Configuration:** Significant effort is dedicated to supporting a wider array of LLM providers and simplifying their configuration, including custom endpoints and authentication. (OpenClaw, PicoClaw, NanoClaw)
- **Agent Functionality & Performance:** Development focuses on improving agent capabilities such as tool execution, parallel processing, and memory management. (OpenClaw, PicoClaw, NanoClaw)
- **Error Handling & Resilience:** Projects are implementing better error logging, retry logic, and resilience against network disruptions and unexpected events. (OpenClaw, PicoClaw, NanoClaw)
- **Containerization & Environment Management:** Efforts are underway to improve container execution, setup, and management across different environments. (OpenClaw, NanoClaw)

### Trend Signals
- **Escalating Security Concerns:** Emerging vulnerabilities in NanoClaw (path traversal, error swallowing) highlight a growing need for robust security auditing in LLM applications.
- **Provider Landscape Fragmentation:** The breadth of LLM providers and the complexities of their APIs (e.g., Anthropic, custom endpoints) necessitate flexible and configurable integration layers.
- **Channel Proliferation Demands:** Users consistently request support for diverse communication platforms, indicating a trend towards LLM integration across all user touchpoints.
- **Performance Bottlenecks Identified:** Overcoming limitations in tool execution, memory management, and parallel processing is a shared technical challenge driving significant development effort.
- **Platform-Specific Stability Issues:** Regressions like the macOS binary conflict in OpenClaw underscore the ongoing challenge of maintaining consistent cross-platform stability.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- The project is seeing a high volume of issues and PRs, indicating active development and community engagement.
- Several key PRs focus on enhancing channel support (Feishu, Signal) and improving tool functionality (web fetch, exec timeout).
- A significant number of open issues highlight persistent challenges with provider configurations and API integrations.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #694 | [help wanted, domain: provider] How to set config for openrouter api? | 14 | 1 | Core provider configuration issues are hindering adoption. |
| #680 | [type: bug, domain: provider] [BUG] Default api_base is always set to GLM provider | 10 | 0 | Incorrect default API base prevents correct provider selection. |
| #4 | I'm not seeing the gateway on the local network. | 10 | 0 | Crucial gateway functionality is not working for users. |
| #88 | Chromebook user | 10 | 0 | Accessibility issue for a specific user platform. |
| #79 | Gemini 3 Flash Preview: Function call fails due to missing thought_signature | 9 | 0 | Functionality with a specific model is broken. |
| #100 | [Possible BUG] "I've completed processing but have no response to give." | 9 | 2 | Recurring error message impacting user experience. |
| #28 | Feat Request: LM Studio Easy Connect | 8 | 1 | Feature request for easier local LLM integration. |
| #148 | Can the openclaw official or third-party SKILLs be supported out of the box in picoclaw? | 8 | 2 | Inquiry about integrating existing skills. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #876 | Fix reasoning_content error in tool calls for kimi-k2.5 and other thi… | OPEN | Fixes tool call errors for specific models. |
| #909 | feat(tui): Add configurable Launcher and Gateway process management | OPEN | Enhances TUI with process management features. |
| #873 | feat(feishu): add tool progress feedback and user abort support | OPEN | Adds progress feedback and abort to Feishu channel. |
| #874 | feat(tools): add Bocha web search provider | OPEN | Integrates Bocha AI as a web search provider. |
| #908 | feat: Add configurable timeout for exec tool | OPEN | Allows configuring timeout for execution tool. |
| #664 | fix: support custom model protocols (e.g., zai-org/GLM-4.7) | OPEN | Fixes issues with custom model protocols. |
| #630 | feat(signal): add Signal channel via signal-cli | OPEN | Adds Signal messaging channel. |
| #865 | fix(pkg/bus):return correct boolean signal when channel is closed | OPEN | Fixes incorrect boolean signal on channel close. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #680 | [type: bug, domain: provider] [BUG] Default api_base is always set to GLM provider | high | No |
| #79 | Gemini 3 Flash Preview: Function call fails due to missing thought_signature | high | No |
| #545 | [type: bug] [BUG] - multiple answer after delegating task | medium | No |
| #639 | [type: enhancement, domain: agent] [BUG] Picoclaw can't send image over discord like OpenClaw | medium | No |
| #778 | [type: bug, domain: agent] [BUG] Summary contains no relevant context | medium | No |

### Trends
- Ongoing challenges with configuring and integrating various LLM providers (OpenRouter, Groq, native Gemini).
- User demand for broader channel support, with recent additions/requests for Signal and enhanced Feishu functionality.
- Need for improved tool capabilities, including configurable timeouts and reliable web fetching.
- Issues related to specific model integrations and their function call mechanisms persist.
- Requests for better local LLM integration, like LM Studio support and Ollama compatibility.
- Users are encountering bugs that misclassify network errors or cause duplicate responses.
- Feature requests revolve around enhanced user experience, such as easier setup (Windows) and better dashboard/API management.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- New issues highlight multiple potential security vulnerabilities including path traversal and error swallowing.
- Significant work to improve channel interaction abstraction and resilience in WhatsApp connectivity.
- Efforts to standardize agent setup and introduce new LLM provider integrations.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #553 | Container execution fails after WhatsApp connection recovery | 1 | 0 | Prevents core functionality after network changes. |
| #585 | Test runner broken due to rollup dependency issue | 0 | 0 | Inability to test new code reliably. |
| #584 | Path traversal edge cases in mount security validation | 0 | 0 | Potential unauthorized access to container file systems. |
| #583 | Inconsistent retry logic after max retries exceeded | 0 | 0 | Unreliable message processing and delivery. |
| #582 | Potential memory retention in container output buffers | 0 | 0 | Risk of memory leaks and application instability. |
| #581 | Missing upper bound validation for MAX_CONCURRENT_CONTAINERS | 0 | 0 | Resource exhaustion via excessively high container counts. |
| #580 | Silent error swallowing in whatsapp-auth.ts | 0 | 0 | Difficulties in diagnosing and fixing authentication issues. |
| #579 | Missing error handling for JSON.parse operations | 0 | 0 | Potential process crashes due to malformed data. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #577 | Cheuk/local changes 20260228 | CLOSED | Generic local changes, unclear impact. |
| #576 | fix: prevent IPC message drops and WhatsApp reconnect loop | OPEN | Stabilizes IPC and WhatsApp connection handling. |
| #575 | feat: add update_project IPC host command | OPEN | Enables agents to trigger project updates and restarts. |
| #573 | feat: add support for custom Anthropic API endpoint | OPEN | Allows routing API requests through custom endpoints. |
| #503 | fix: support ANTHROPIC_BASE_URL in containers + re-sync empty agentRunnerSrc | OPEN | Forwards custom API endpoint to containers. |
| #572 | feat: add Codex provider skill and codex-oauth package | OPEN | Introduces a new LLM provider integration. |
| #407 | fix: repair three setup bugs found during WSL first-run | OPEN | Resolves multiple setup issues on WSL environments. |
| #500 | refactor: implement pluggable multi-channel architecture | OPEN | Major refactor for flexible channel integration. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #585 | Test runner broken due to rollup dependency issue | high | No |
| #584 | Path traversal edge cases in mount security validation | medium | No |
| #583 | Inconsistent retry logic after max retries exceeded | high | No |
| #582 | Potential memory retention in container output buffers | medium | No |
| #580 | Silent error swallowing in whatsapp-auth.ts | medium | No |

### Trends
- Growing need for robust error handling and security in core components.
- Focus on multi-channel support and agent interaction standardization.
- Continuous improvement of setup processes and container management.
- Introduction of new LLM providers and API endpoint flexibility.
- Enhancements to network resilience and connection management for messaging services.
- Efforts to prevent duplicate instances and improve overall stability.
- Addressing testing infrastructure issues to ensure code quality.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*