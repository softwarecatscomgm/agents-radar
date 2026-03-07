# OpenClaw Ecosystem Digest 2026-03-07

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-07 11:22 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Critical bug: OpenClaw agent lost filesystem and command execution capabilities.
- Security concern: npm `moltbot` package is a placeholder owned by a third party, not the actual project.
- Installation failures are frequently reported on macOS and Windows.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #34810 | [Bug] OpenClaw suddenly lost filesystem tools (exec/read/write) and can no longer create files or run commands | 25 | 7 | Halts core functionality; agent unusable. |
| #3038 | [Bug]: zsh: command not found: moltbot | 15 | 9 | Documentation confusion; users can't start. |
| #4141 | This version of Antigravity is no longer supported. Please update to receive the latest features! | 12 | 5 | Authentication issues; users can't connect. |
| #4007 | [Bug, r: support] [Bug]: Install fails on MacOS 15 at npm install | 12 | 5 | Blocks new installations on macOS. |
| #2170 | [Feature]: Please add Feishu and WeChat support | 12 | 28 | Enhances regional adoption; expands user base. |
| #13688 | Discord: WebSocket 1005/1006 disconnects with failing resume logic and unbounded backoff | 11 | 2 | Causes persistent Discord bot downtime. |
| #3275 | [Security]: npm moltbot@latest still points to squatter's package - README instructs unsafe install | 8 | 5 | Security risk; users install malicious package. |
| #34052 | [Bug, bug:crash] [Bug]: Health monitor restarts ALL channels (stale-socket) in multi-account setup — 2026.3.2 | 7 | 0 | Disrupts all connected channels; breaks multi-account. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #38634 | fix(install): keep PowerShell window open on Windows install failure | OPEN | Prevents immediate PowerShell window closure on Windows install errors. |
| #38779 | feat: configurable heartbeat ack token | OPEN | Allows custom acknowledgment tokens for heartbeats. |
| #38805 | feat: notify user when context compaction starts and completes | OPEN | Informs users during agent silence from compaction. |
| #38790 | Browser: accept top-level act ref fields | OPEN | Corrects browser action handling for `act` commands. |
| #38718 | fix: add current date to system prompt + feat: add lastModel to cron | OPEN | Improves agent memory and cron job functionality. |
| #38804 | fix(cron): default delivery mode to "announce" for isolated agentTurn jobs | OPEN | Sets default delivery mode for cron jobs. |
| #38793 | fix(agents): preserve supportsUsageInStreaming for Azure OpenAI endpoints | OPEN | Correctly handles streaming usage for Azure OpenAI. |
| #38794 | fix(discord): honor commands.allowFrom in guild slash auth | OPEN | Enforces command authorization on Discord. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #34810 | [Bug] OpenClaw suddenly lost filesystem tools (exec/read/write) and can no longer create files or run commands | critical | No |
| #34052 | [Bug, bug:crash] [Bug]: Health monitor restarts ALL channels (stale-socket) in multi-account setup — 2026.3.2 | critical | No |
| #36229 | Bug: compaction corrupts thinking block signatures, causing unrecoverable session failure | high | No |
| #37834 | Session context corruption: orphaned tool_use ID causes permanent 400 loop after abort | high | No |
| #36182 | [Bug, regression] [Bug]: Perplexity Search API error (401) with OpenRouter | high | No |

### Trends
- Frequent installation failures on macOS and Windows.
- Critical bug impacting core agent functionality (filesystem access).
- Security concerns around the `moltbot` npm package authenticity.
- Persistent connectivity issues with Discord via WebSocket.
- User demand for broader messaging platform support (Feishu, WeChat).
- SSRF protection sometimes blocks legitimate CDN traffic.
- Issues with model configuration and support (e.g., GPT-5.4).

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The agent development ecosystem shows a divergence in stability and features. OpenClaw faces critical stability and security issues, hindering core functionality and adoption. PicoClaw and NanoClaw exhibit more active development focused on expanding integrations and addressing specific operational challenges, though they also present unique bug categories.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 8 | 8 | 0 | 🟡 steady |
| PicoClaw | 8 | 8 | 0 | 🟢 rapid |
| NanoClaw | 7 | 8 | 0 | 🟢 rapid |

### OpenClaw vs Peers
- OpenClaw suffers from critical functional bugs (filesystem access) and security vulnerabilities (npm dependency) not seen in PicoClaw or NanoClaw.
- PicoClaw and NanoClaw are actively developing new channel integrations and provider support, while OpenClaw's feature requests are mainly for existing platforms like Feishu/WeChat.
- OpenClaw's installation failures on macOS/Windows are a significant blocker, contrasting with the more targeted bug fixes in PicoClaw and NanoClaw.
- NanoClaw's focus on LLM provider flexibility addresses a gap present in OpenClaw's current issues.

### Shared Directions
- Enhanced support for diverse messaging channels (Feishu, WeChat, QQ, Telegram, Discord) (OpenClaw, PicoClaw, NanoClaw).
- Robustness and security improvements for integrations and core agent functionalities (OpenClaw, PicoClaw, NanoClaw).
- Addressing installation and configuration complexities for broader user adoption (OpenClaw, PicoClaw).
- Expanding LLM provider compatibility and model integration (PicoClaw, NanoClaw).
- Improving error handling and debugging capabilities for better user experience (PicoClaw, NanoClaw).
- Security concerns around secret management and dependency vulnerabilities (OpenClaw, NanoClaw).

### Trend Signals
- Critical core functionality bugs can cripple agent usability.
- Containerization and root access introduce significant permission and security challenges.
- User demand for multi-platform messaging support is a strong driver of development.
- LLM provider diversity and flexibility are becoming key differentiation factors.
- Security of third-party dependencies and secret management are growing concerns.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Local Ollama model configuration and operational issues dominate recent bugs.
- Active development continues on enhancing various channels (QQ, Feishu, Telegram) and provider integrations.
- Addressing security concerns and tool behavior, particularly around URL handling and file reading, is a focus.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? (agent runs but produces no response) | 11 | 0 | Core functionality for local models is broken. |
| #1202 | [BUG]Does it support MCP? | 2 | 0 | Configuration issues impacting operational capabilities. |
| #1209 | Timeout error with context deadline exceeded | 0 | 0 | General instability and unexpected terminations. |
| #1103 | [BUG]添加自定义模型时，modelscope.cn的api调用不可用。 | 3 | 0 | Specific model provider integration is failing. |
| #1102 | [BUG]deepseek模型不可用。 | 2 | 0 | Another provider failure, impacting model access. |
| #1204 | [Feature] | 0 | 0 | Desire for air-gapped, local-only operation. |
| #1203 | [BUG] Safety guard incorrectly blocks commands containing URLs | 0 | 0 | Security feature is overzealous and hindering valid commands. |
| #1201 | Skill to call python script not working | 0 | 0 | Core agent capability for scripting is not functioning. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #1208 | feat(channels): enhance QQ channel with group/typing/media support and URL sanitization | OPEN | Adds advanced features and robustness to QQ channel integration. |
| #1187 | make gateway aware of config.json change | OPEN | Improves gateway responsiveness to configuration updates. |
| #1143 | fix: background task results silently dropped | CLOSED | Ensures background tool results are properly processed. |
| #177 | feat: Add Z.AI provider support | CLOSED | Integrates a new AI provider for broader model access. |
| #1207 | feat: no-truncate param | OPEN | Enhances CLI debugging by preventing log message truncation. |
| #1075 | fix(openai_compat): clarify HTML response parse errors | CLOSED | Improves error reporting for misconfigured OpenAI-compatible endpoints. |
| #1175 | feat(feishu): split messages with >5 tables to avoid API limit | OPEN | Handles long messages in Feishu by splitting them into parts. |
| #1181 | fix(openai_compat): avoid sending prompt_cache_key to non-OpenAI endpoints | OPEN | Prevents invalid fields from being sent to incompatible providers. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? (agent runs but produces no response) | critical | No |
| #1202 | [BUG]Does it support MCP? | high | No |
| #1203 | [BUG] Safety guard incorrectly blocks commands containing URLs | high | No |
| #1201 | Skill to call python script not working | high | No |
| #1103 | [BUG]添加自定义模型时，modelscope.cn的api调用不可用。 | high | No |

### Trends
- Persistent issues with local Ollama model integration and configuration.
- Growing demand for enhanced channel support across various platforms (QQ, Telegram, Feishu).
- Ongoing efforts to refine provider integrations and error handling for diverse AI services.
- Development towards improved security features and tool robustness.
- User requests for simpler local/air-gapped operational modes.
- Need for better debugging features and more informative error messages.
- Focus on fixing background task processing and agent response delivery.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Container permission issues are a high-priority bug, potentially impacting root-level deployments.
- Security concerns around secret management are being addressed across multiple PRs.
- New skills are actively being developed for various communication channels and LLM providers.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #80 | Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 17 | 36 | Crucial for user flexibility and mitigating provider risks. |
| #777 | fix: container EACCES/ENOENT when host runs as root — debug dir and IPC input dir permissions | 2 | 0 | **High** bug; affects root deployments. |
| #709 | Risk of secret env var management diverging between the container allowlist and the Bash subprocess blocklist | 1 | 0 | **High** bug; security concern. |
| #783 | schedule_task has no idempotency key — same task accumulates across sessions | 0 | 0 | **Medium** bug; duplicate tasks. |
| #779 | Feature Request: Capability-Based Skill Security Model | 0 | 0 | **Medium** enhancement; improves container security. |
| #782 | how to setup this code without claude code | 0 | 0 | User question about alternative LLM providers. |
| #793 | TYPO: Incorrect section reference 4c in .claude/skills/setup/SKILL.md | 0 | 0 | Documentation fix. |
| #707 | Scheduled tasks cannot be updated without cancel + recreate | 0 | 0 | **Medium** enhancement; scheduling pain point. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #412 | feat(setup): add host machine authorization passthrough | Blocked | Adds a new host authorization option to setup. |
| #424 | fix(add-telegram): add state/code mismatch detection to SKILL.md | Needs Review | Improves Telegram skill robustness. |
| #488 | fix(add-discord): add state/code mismatch detection to SKILL.md | Needs Review | Enhances Discord skill for state synchronization. |
| #794 | fix broken step references in setup/SKILL.md | Needs Review | Corrects typographical errors in setup documentation. |
| #296 | fix: preempt active container when scheduled task is enqueued | Merged | Resolves delayed scheduled tasks. |
| #792 | fix: pause task on group-not-found to prevent infinite retry | Needs Review | Prevents infinite retries for missing groups. |
| #671 | feat(skills): add Feishu (Lark) channel skill | Needs Review | Adds support for the Feishu messaging channel. |
| #790 | refactor: migrate global CLAUDE.md from groups/global/ to groups/CLAUDE.md | Needs Review | Refactors global memory storage for CLAUDE.md. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #777 | fix: container EACCES/ENOENT when host runs as root — debug dir and IPC input dir permissions | High | No |
| #709 | Risk of secret env var management diverging between the container allowlist and the Bash subprocess blocklist | High | No |
| #747 | bug(whatsapp): pairing code expires before caller can display it | High | No |
| #692 | DB queries fetch unbounded message history — no LIMIT clause | Critical | No |
| #783 | schedule_task has no idempotency key — same task accumulates across sessions | Medium | No |

### Trends
- Growing interest in supporting diverse LLM providers beyond Claude.
- Ongoing efforts to improve container security and secret management.
- Active development of new skills for various messaging platforms and LLM providers.
- Focus on enhancing observability with status APIs, metrics, and dashboards.
- Users are requesting more robust scheduling capabilities, including task updates.
- Need for clearer documentation and reduced typos across skill setup guides.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*