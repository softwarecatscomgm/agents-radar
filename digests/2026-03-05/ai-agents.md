# OpenClaw Ecosystem Digest 2026-03-05

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-05 11:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Significant increase in reported bugs, with several critical regressions appearing after the recent update.
- Active development on new features like workflow management and enhancements to existing channels.
- Continued focus on stability and security hardening across multiple components.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #34810 | [Bug] OpenClaw suddenly lost filesystem tools (exec/read/write) and can no longer create files or run commands | 14 | 0 | Critical functionality lost; core agent operations broken. |
| #35077 | [Bug]: You made openclaw a broken disaster, nothing works | 12 | 1 | User reports complete system failure post-update. |
| #75 | [enhancement, help wanted] Linux/Windows Clawdbot Apps | 33 | 58 | Missing OS support hinders broad adoption. |
| #1749 | [bug] Web UI: 'Unsupported schema node' error in Nodes/Accounts section | 21 | 3 | UI error blocks access to critical configuration. |
| #33641 | [Bug] Webchat: previous assistant message disappears when next message streams (blockStreamingDefault conflict) | 8 | 0 | User experience degraded; lost message history. |
| #29254 | [bug] [Bug]: Skill eligibility checks run on gateway host, not sandbox container — skills blocked despite binaries existing in sandbox | 8 | 0 | Skills are incorrectly blocked, limiting agent capabilities. |
| #4349 | [bug, tui] TUI /model picker shows all 600+ models instead of configured/available ones | 7 | 4 | TUI is unusable for model selection. |
| #34298 | [bug, bug:behavior] [Bug]: open http://127.0.0.1:18789/,then display "Not Found" | 7 | 2 | Web UI is inaccessible, preventing user interaction. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #36014 | feat(workflow): add workflow module with task tracking and DAG visualization | OPEN | Adds workflow tracking and DAG visualization to the platform. |
| #36021 | linux: relax systemctl availability and enabled checks | OPEN | Improves systemd integration reliability on Linux systems. |
| #36020 | Fix #35975: parse Anthropic content_block streaming events | OPEN | Correctly parses streaming events for Anthropic models. |
| #36016 | fix(feishu): strip bot mention in group context so slash commands are recognized | OPEN | Enables slash commands in Feishu group chats. |
| #35989 | acpx: recover NO_SESSION ensures with sessions new fallback | OPEN | Improves session recovery for ACP runtime. |
| #35997 | embedded-runner: avoid null spread in ollama num_ctx wrapper | OPEN | Prevents errors in Ollama context window handling. |
| #34425 | brand(auth): switch user-facing cloud/login copy to HiClaw Cloud | OPEN | Rebrands user-facing cloud authentication and login copy. |
| #36007 | Fix Telegram topic threadId routing for /new and /reset | OPEN | Fixes command routing for Telegram topics. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #34810 | [Bug] OpenClaw suddenly lost filesystem tools (exec/read/write) and can no longer create files or run commands | Critical | No |
| #35077 | [Bug]: You made openclaw a broken disaster, nothing works | Critical | No |
| #34241 | [Bug]: Intermittent no-tool execution after switching to azure-openai-responses/gpt-5.3-codex | High | No |
| #32991 | [Bug]: Tools return 'Tool not found' after update to 2026.3.2 | High | No |
| #35580 | [Bug]: Fix Misleading WhatsApp E.164 Validation Error | High | No |

### Trends
- Urgent need for stability and bug fixes, especially critical regressions post-update.
- Demand for broader OS support (Linux, Windows) in Clawdbot applications.
- Ongoing improvements to channel integrations (Feishu, Telegram, Mattermost, etc.).
- User interest in enhanced workflow management and agent concurrency controls.
- Focus on improving the user experience of the TUI and Web UI.
- Security hardening and robustness of authentication and download mechanisms.
- Continued expansion of model support and provider integrations.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The Claw ecosystem exhibits a clear split: OpenClaw faces critical stability issues and a scramble to address regressions, while PicoClaw and NanoClaw demonstrate agile development with ongoing feature expansion and community-driven improvements. A shared theme revolves around broader AI model support and enhanced communication channel integrations.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 9 | 9 | 0 | 🔴 |
| PicoClaw | 8 | 8 | 0 | 🟢 |
| NanoClaw | 5 | 7 | 0 | 🟡 |

### OpenClaw vs Peers
- **Critical Stability Issues:** OpenClaw is experiencing severe regressions, unlike PicoClaw and NanoClaw which are in active feature development.
- **Feature Parity:** PicoClaw and NanoClaw are actively developing integrations for broader AI models and communication channels, areas where OpenClaw is less prominent in this snapshot.
- **Workflow Focus:** OpenClaw's explicit focus on workflow management (PR #36014) is a unique differentiator not seen in the other projects' current PR activity.
- **UI/UX Focus:** OpenClaw has significant hot issues related to Web UI and TUI usability, indicating a need for immediate attention that isn't as pronounced in the other projects.
- **Brand Refresh:** OpenClaw is undergoing rebranding (PR #34425), a strategic move not paralleled in the other projects' current development.

### Shared Directions
- **Expanded AI Model Support:** All projects, particularly PicoClaw and NanoClaw, show strong community demand for integrating diverse LLMs beyond initial offerings (OpenClaw, PicoClaw, NanoClaw).
- **Communication Channel Integration:** All projects are actively adding or improving support for various messaging platforms (OpenClaw, PicoClaw, NanoClaw).
- **Extensibility and Customization:** Features like user-configurable hooks and remote skill references are desired to enhance agent capabilities (PicoClaw, NanoClaw).
- **Improved Diagnostics and Stability:** While OpenClaw urgently needs stability, PicoClaw is seeing requests for diagnostic tools, and all projects benefit from bug fixes (OpenClaw, PicoClaw, NanoClaw).
- **Enhanced User Experience:** Addressing UI/UX issues and simplifying installation/updates are common goals (OpenClaw, NanoClaw).
- **Security Hardening:** Safeguarding against duplicate instances and improving access controls are present themes (PicoClaw, NanoClaw).

### Trend Signals
- **"AI Agnosticism" is key:** Users are actively seeking to move away from vendor lock-in and reduce costs by demanding support for open-source and alternative LLMs.
- **Platformization of Agents:** The emergence of features like workflow management, skill marketplaces, and semantic memory points towards a trend of making AI agents more robust and enterprise-ready.
- **Channel Diversification is Essential:** The rapid iteration on new communication channel integrations highlights the need for AI agents to be accessible across a wide array of user touchpoints.
- **Stability Regressions Undermine Innovation:** Critical bugs and regressions, as seen in OpenClaw, can severely halt progress and erode user trust, overshadowing new feature development.
- **Open Ecosystems Drive Adoption:** Projects that facilitate easier integration and offer more choice in models and communication channels are likely to see greater community engagement.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- **High PR Volume:** 107 PRs opened in the last 24 hours indicate significant development activity.
- **Key Feature Developments:** Work continues on parallel tool execution (PR #1070) and IRC channel integration (Issue #1137, PR #1138).
- **Bug Fixes:** Focus on improving provider errors (PR #1075) and stabilizing cron jobs (Issue #1126).

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #88 | Chromebook user | 11 | 0 | User unable to download for Chromebook. |
| #39 | Feature Request: Add `picoclaw doctor` command | 4 | 0 | Enhances diagnostics and system health checks. |
| #329 | Remote-referenced Skill Model | 4 | 0 | Reduces disk bloat and enables automatic updates. |
| #738 | User-configurable hooks (pre/post tool execution, message events) | 4 | 0 | Increases extensibility and customizability for agents. |
| #243 | where are the skills, how can we integrate skills? | 3 | 1 | Clarifies skill integration and discovery. |
| #267 | Feature Request: Add CLI Logins for Openai and Gemini | 3 | 0 | Streamlines provider authentication via CLI. |
| #248 | WhatsApp support | 3 | 0 | Adds a popular communication channel. |
| #958 | Error: error creating provider: model "llama3.2" not found in model_list | 2 | 0 | Prevents usage of specific models from Ollama provider. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #1070 | feat: execute LLM tool calls in parallel for faster response | CLOSED | Executes multiple LLM tool calls concurrently for speed. |
| #1135 | fix(skills): retry ClawHub requests on HTTP 429 | OPEN | Retries ClawHub requests upon receiving HTTP 429 errors. |
| #1138 | feat(channels): add IRC channel integration | OPEN | Integrates IRC as a new messaging channel. |
| #1101 | feat(telegram): stream LLM responses via sendMessageDraft | OPEN | Streams LLM responses to Telegram in real-time. |
| #1075 | fix(openai_compat): clarify HTML response parse errors | OPEN | Improves error reporting for HTML responses from OpenAI endpoints. |
| #1140 | fix(qq): use correct API for group chat replies | OPEN | Correctly handles QQ group chat replies to avoid errors. |
| #1116 | fix(qq): use correct API for group chat replies | CLOSED | Correctly handles QQ group chat replies to avoid errors. |
| #633 | feat: add MiniMax provider support via OpenAI-compatible endpoint | OPEN | Adds support for the MiniMax provider. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #958 | Error: error creating provider: model "llama3.2" not found in model_list | High | No |
| #1134 | skills install may fail with persistent HTTP 429 from ClawHub download endpoint (no Retry-After handling) | High | #1135 |
| #1126 | Fix: Recurring cron jobs silently become one-time tasks (Fixes #1043) | High | Yes |
| #1103 | [BUG]添加自定义模型时，modelscope.cn的api调用不可用。 | High | No |
| #945 | [BUG] voice package is not being used - `voice.GroqTranscriber` is not part of the process any more | Medium | No |

### Trends
- **Enhanced Extensibility:** Strong demand for user-configurable hooks and remote skill references.
- **Provider Improvements:** Ongoing work to add and stabilize various LLM providers (MiniMax, Vivgrid, ModelScope).
- **Channel Expansion:** New channel integrations (IRC) and improvements to existing ones (Telegram streaming).
- **Diagnostic Tools:** User requests highlight the need for robust diagnostic tools like `picoclaw doctor`.
- **Performance Optimizations:** Efforts to improve speed through parallel execution of tool calls.
- **Security Hardening:** Focus on securing the shell tool execution.
- **Documentation Gaps:** Users are seeking clearer guidance on skill integration and command usage.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Active development continues with a focus on expanding AI model support beyond Claude & enhancing channel integrations.
- Several bug fixes address crucial issues with model configuration, timezone handling, and message processing.
- Community engagement is high, with numerous feature requests and enhancements being proposed.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 16 | 34 | Reduces vendor lock-in and cost, increases flexibility for users. |
| [#384](https://github.com/qwibitai/nanoclaw/issues/384) | Nanoclaw needs a skill marketplace/registry | 8 | 13 | Centralizes and simplifies skill discovery and management. |
| [#393](https://github.com/qwibitai/nanoclaw/issues/393) | Not clear how to update Nanoclaw? | 3 | 0 | Improves user experience and maintenance. |
| [#442](https://github.com/qwibitai/nanoclaw/issues/442) | The setup process cost me $5 in Claude API access, can we look into open source AI models to replace Claude? | 3 | 0 | Addresses cost concerns and opens up new model possibilities. |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) | feat: Add Signal as messaging channel | 3 | 1 | Expands communication channel options. |
| [#398](https://github.com/qwibitai/nanoclaw/issues/398) | Enable attenuating `WebFetch` and `WebSearch` | 3 | 0 | Enhances security and agent autonomy. |
| [#574](https://github.com/qwibitai/nanoclaw/issues/574) | containers lack jq | 2 | 1 | Improves API response handling and security. |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | ANTHROPIC_MODEL=claude-sonnet-4-6 is ignored — CLI maps it to claude-sonnet-4-20250514 | 2 | 0 | Fixes critical model configuration issue. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| [#727](https://github.com/qwibitai/nanoclaw/pull/727) | skill: add /add-memory — semantic memory with RAG | Needs Review | Adds RAG-based semantic memory for agent recall. |
| [#729](https://github.com/qwibitai/nanoclaw/pull/729) | fix: correct misleading send_message tool description for scheduled tasks | Needs Review | Clarifies `send_message` tool usage for scheduled tasks. |
| [#400](https://github.com/qwibitai/nanoclaw/pull/400) | Nostr communication channel | Needs Review | Introduces Nostr as a new communication channel. |
| [#680](https://github.com/qwibitai/nanoclaw/pull/680) | feat: add CLI send skill | Needs Review | Provides a CLI tool to send messages to the agent. |
| [#452](https://github.com/qwibitai/nanoclaw/pull/452) | feat: add SimpleX Chat channel with image support | WIP | Integrates SimpleX Chat with image handling. |
| [#643](https://github.com/qwibitai/nanoclaw/pull/643) | fix: use TIMEZONE constant for 'once' scheduled task timestamps | Needs Review | Standardizes timezone handling for scheduled tasks. |
| [#586](https://github.com/qwibitai/nanoclaw/pull/586) | feat: allow agents to send cross-group messages via send_message | Needs Review | Enables cross-group communication for agents. |
| [#565](https://github.com/qwibitai/nanoclaw/pull/565) | feat: add PID lockfile guard to prevent duplicate instances | Needs Review | Prevents multiple instances of NanoClaw from running. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | ANTHROPIC_MODEL=claude-sonnet-4-6 is ignored — CLI maps it to claude-sonnet-4-20250514 | High | - |
| [#472](https://github.com/qwibitai/nanoclaw/issues/472) | CLAUDE_MODEL env var doesn't work — model selection requires patching source | High | - |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | Bug: CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 each morning | High | - |
| [#157](https://github.com/qwibitai/nanoclaw/issues/157) | Setup script hangs during WhatsApp QR code generation on Node 20 | Medium | - |
| [#526](https://github.com/qwibitai/nanoclaw/issues/526) | Agent is repeatedly confused about the local time | Medium | - |

### Trends
- Strong desire for broader AI model compatibility beyond Anthropic Claude.
- Frequent requests to expand communication channel integrations (Signal, Nostr, SimpleX, etc.).
- Ongoing issues with timezone handling and clock synchronization across different environments.
- Need for improved documentation and simplified installation/update processes.
- Enhancements requested for agent memory, context management, and tool usage (e.g., `send_message` refinement).
- Security considerations are highlighted, with requests for better connection management and instance protection.
- Community is actively contributing new skills and bug fixes.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*