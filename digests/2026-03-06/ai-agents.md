# OpenClaw Ecosystem Digest 2026-03-06

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-06 11:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Significant increase in issues and PRs in the last 24 hours, suggesting active development and community engagement.
- Several critical bugs reported, particularly around gateway installation, API rate limits, and model compatibility.
- New features like browser-side offline STT and expanded channel support are being integrated.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | [enhancement] Internationalization (i18n) & Localization Support | 80 | 0 | Essential for global user adoption and accessibility. |
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | [bug, bug:behavior] [Bug] OpenClaw suddenly lost filesystem tools | 19 | 4 | Critical functionality loss impacts core agent operations. |
| [#2493](https://github.com/openclaw/openclaw/issues/2493) | [bug] TUI shows no output for chat.send runs | 19 | 5 | TUI usability issue hinders debugging and interaction. |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | [Bug]: False 'API rate limit reached' on all models | 14 | 3 | Prevents model usage, creating false issues. |
| [#11283](https://github.com/openclaw/openclaw/issues/11283) | [bug] [Bug]: OpenClaw tries to use local Ollama CLI instead of remote API endpoint | 13 | 3 | Incorrect provider usage breaks LLM integration. |
| [#14749](https://github.com/openclaw/openclaw/issues/14749) | [bug] [Bug]: Duplicate tool names error when using Grok via OpenRouter | 12 | 0 | Specific model integration fails, limiting provider options. |
| [#2178](https://github.com/openclaw/openclaw/issues/2178) | [enhancement] [Feature]: improve Docker setup | 12 | 7 | Simplifies deployment, crucial for adoption. |
| [#3475](https://github.com/openclaw/openclaw/issues/3475) | [bug] [Bug]: Kimi/Moonshot OpenAI-compatible models fail silently | 12 | 5 | Key models are unusable, impacting performance. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#19073](https://github.com/openclaw/openclaw/pull/19073) | [docs, channel: voice-call, size: XL] feat(voice-call): streaming TTS, barge-in, silence filler, hangup, and voice agent config | OPEN | Enhances voice call plugin for natural, responsive interactions. |
| [#37714](https://github.com/openclaw/openclaw/pull/37714) | [size: XS] fix(bonjour): truncate DNS labels to 63 bytes max | OPEN | Prevents gateway crashes due to long instance names. |
| [#37643](https://github.com/openclaw/openclaw/pull/37643) | [agents, size: S] fix(web-search): support SecretRef in apiKey config | OPEN | Enables secure API key management for web search tool. |
| [#37707](https://github.com/openclaw/openclaw/pull/37707) | [channel: feishu, size: XS] fix(feishu): warn users when dmPolicy default changed from open to pairing | OPEN | Alerts users about critical Feishu DM policy changes. |
| [#37648](https://github.com/openclaw/openclaw/pull/37648) | [commands, size: XS] fix(models): include config-injected entries in models list --all | OPEN | Improves visibility of configurable models. |
| [#37709](https://github.com/openclaw/openclaw/pull/37709) | [agents, size: XS] fix(agents): preserve aliased params in required array | OPEN | Fixes parameter handling for non-Claude models. |
| [#37712](https://github.com/openclaw/openclaw/pull/37712) | [gateway, size: S, trusted-contributor] fix(bonjour): truncate mDNS labels to 63 bytes to prevent gateway crash | OPEN | Addresses critical mDNS label length issue for gateway stability. |
| [#37668](https://github.com/openclaw/openclaw/pull/37668) | [docs, size: XS] fix(docs): remove broken FAQ link to non-existent troubleshooting anchor | OPEN | Improves documentation accuracy and user navigation. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#37048](https://github.com/openclaw/openclaw/issues/37048) | [bug, regression] [Bug]: v2026.3.2 sends parallel_tool_calls to models that don't support it | Critical | Yes (see related PRs) |
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | [bug, bug:behavior] [Bug] OpenClaw suddenly lost filesystem tools | Critical | No |
| [#11283](https://github.com/openclaw/openclaw/issues/11283) | [bug] [Bug]: OpenClaw tries to use local Ollama CLI instead of remote API endpoint | High | No |
| [#37030](https://github.com/openclaw/openclaw/pull/37030) | [agents, size: M] fix(agents): add TTL grace + restart persistence for pending tool-result flush | High | Yes |
| [#33633](https://github.com/openclaw/openclaw/issues/33633) | [bug, bug:behavior] [Bug]: openclaw gateway install fails: systemctl is-enabled unavailable | High | No |

### Trends
- Growing demand for advanced internationalization and localization support.
- Persistent issues with model compatibility and API integration across various providers.
- Critical bugs affecting gateway installation and core agent functionalities.
- Ongoing enhancements to channel integrations and UI usability.
- Need for improved handling of rate limits and error states from external APIs.
- Community interest in expanding support for enterprise IM platforms.
- Focus on refining Docker setup and CI/CD processes for easier deployment.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The open-source agent ecosystem shows robust development, with significant activity in core functionalities like agent memory, channel integrations, and LLM provider compatibility. While OpenClaw leads in issue and PR volume, PicoClaw demonstrates strong progress in agent enhancements, and NanoClaw is actively addressing critical integration bugs, particularly with WhatsApp.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 9 | 8 | 0 | 🟢 rapid |
| PicoClaw | 8 | 9 | 0 | 🟢 rapid |
| NanoClaw | 10 | 8 | 0 | 🟢 rapid |

### OpenClaw vs Peers
- OpenClaw exhibits broader community engagement and critical bug reports, suggesting a larger, more complex user base.
- PicoClaw is heavily focused on agent-specific features like memory and session management, with fewer critical integration bugs reported.
- NanoClaw is prioritizing urgent channel integration fixes (WhatsApp) and new skills, while also addressing security concerns.
- OpenClaw's I18n enhancement indicates a push for global reach, a feature less explicitly prioritized in PicoClaw and NanoClaw.

### Shared Directions
- Enhanced LLM provider integration and compatibility (OpenClaw, PicoClaw).
- Improved agent memory and persistence mechanisms (PicoClaw, NanoClaw).
- Robust channel integrations and their associated bug fixes (OpenClaw, NanoClaw).
- Streamlined deployment and setup processes (OpenClaw, NanoClaw).
- Advanced agent capabilities and tool integration (OpenClaw, PicoClaw, NanoClaw).

### Trend Signals
- Increasing demand for robust, secure, and scalable enterprise integrations.
- Growing need for sophisticated agent memory and context management.
- Critical importance of reliable, intuitive multi-channel communication support.
- Ongoing challenges with LLM provider compatibility and API rate limit handling.
- Shift towards more hands-free and voice-initiated agent interactions.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- High PR volume (292) indicates active development, primarily in features and bug fixes.
- Several open issues focus on provider and configuration problems, highlighting areas for stability improvements.
- Active work on enhancing agent capabilities, including memory persistence, session management, and tool integration.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #100 | [Possible BUG] "I've completed processing but have no response to give." | 10 | 2 | User experiencing persistent processing messages without output. |
| #1177 | [BUG] When adding a custom model, clicking the modal backdrop unexpectedly closes the dialog. | 2 | 0 | User data loss on custom model input due to unexpected dialog closure. |
| #1025 | [BUG] Command timed out after 1m0s | 2 | 0 | Agents fail due to script execution timeouts, impacting agent functionality. |
| #1154 | Anthropic streaming error when using OpenRouter provider | 2 | 0 | Streaming issues with specific providers, impacting model responsiveness. |
| #1103 | [BUG]添加自定义模型时，modelscope.cn的api调用不可用。 | 2 | 0 | Custom model API calls failing, preventing model integration. |
| #958 | Error: error creating provider: model "llama3.2" not found in model_list | 2 | 0 | Provider creation failure due to missing model, blocking usage. |
| #284 | Introducing Swarm Mode: Multi-instance Collaboration for PicoClaw | 2 | 0 | Future feature roadmap for enhanced collaboration. |
| #1176 | [BUG] No skills loaded | 1 | 0 | Core functionality missing, preventing agent tool usage. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #1189 | feat: second brain memory database with search, tags, and categories | OPEN | Adds persistent memory database and agent tools for memory management. |
| #960 | feat(session): Session management [Phase 2/2] session lifecycle and scope management | OPEN | Implements scope-aware session lifecycle and management. |
| #1173 | feat(web): Update config page | CLOSED | Updates the web-based configuration page. |
| #1187 | make gateway aware of config.json change | OPEN | Ensures the gateway recognizes changes in the config file. |
| #1127 | fix(exec): block kill command pattern in safety guard | CLOSED | Prevents dangerous `kill` commands in the `exec` tool. |
| #1072 | add model command to set default model | CLOSED | Allows users to set the default model via a command. |
| #649 | Optimize memory and cache performance | OPEN | Improves memory usage and cache efficiency. |
| #714 | skills: install/reinstall CLI and refactor into skillsCmd | OPEN | Refactors skill installation CLI and adds reinstallation. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #1177 | [BUG] When adding a custom model, clicking the modal backdrop unexpectedly closes the dialog. | High | Maybe (#1180) |
| #1103 | [BUG]添加自定义模型时，modelscope.cn的api调用不可用。 | High | No |
| #958 | Error: error creating provider: model "llama3.2" not found in model_list | High | No |
| #1176 | [BUG] No skills loaded | High | No |
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? (agent runs but produces no response) | High | No |

### Trends
- Growing demand for improved provider integration and error handling.
- User issues with custom model configuration and availability.
- Ongoing development of agent memory and session management features.
- Need for more robust error reporting and debugging information.
- Enhancements to the user interface and command-line tooling.
- Requests for better handling of specific channel integrations (e.g., Discord, Feishu).
- Interest in advanced agent capabilities like "Swarm Mode".

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Several high-priority WhatsApp integration bugs identified, including pairing code expiration, service restart loops, and incorrect JID registration.
- Security vulnerability flagged for potential API key exposure via environment inspection.
- New skills for enhanced voice interaction (macOS), cloud storage (Dropbox), and Google Workspace integration actively under development.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
#747 | bug(whatsapp): pairing code expires before caller can display it | 0 | 0 | Severely hinders initial WhatsApp setup flow. |
#748 | bug(whatsapp): service restart hammers WhatsApp on auth failure | 0 | 0 | Risks WhatsApp account suspension due to excessive reconnections. |
#737 | [Security] API Key Exposure via Process Environment Inspection | 0 | 0 | Poses a significant risk to sensitive credentials. |
#750 | bug(whatsapp): DM-with-bot setup registers wrong JID and requires trigger | 0 | 0 | Causes incorrect message routing in DM-with-bot setup. |
#755 | register step does not create CLAUDE.md in new group folder — agent runs without persona | 0 | 0 | Prevents agents from loading their persona in new groups. |
#731 | setup: plist/systemd service uses ephemeral fnm node path, causing ERR_DLOPEN_FAILED after npm rebuild | 0 | 0 | Leads to runtime errors after dependency rebuilds. |
#732 | Send message after agent completes, not during streaming | 0 | 0 | Floods chats with partial responses during agent execution. |
#753 | bug(register): assistant name not updated in groups/main/CLAUDE.md | 0 | 0 | Assistant name inconsistencies in main channel configurations. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #691 | feat: timezone-aware context injection for agent prompts | Needs Review | Injects server time/timezone into prompts for better agent accuracy. |
| #735 | fix(db): add LIMIT to unbounded message history queries | Needs Review | Prevents OOM crashes and high token costs from large DB queries. |
| #742 | chore: enhance container environment isolation | Needs QA | Hardens container execution for better process isolation. |
| #768 | feat(telegram): add Deepgram voice transcription to add-telegram skill | Needs Review | Adds optional voice message transcription to Telegram skill. |
| #766 | fix: add-voice-transcription skill drops WhatsApp registerChannel call | Needs Review | Fixes a bug causing WhatsApp channel self-registration to be dropped. |
| #767 | feat: Voice assistant with TTS, transcription, and wake word daemon (macOS) | Needs Review | Introduces a full hands-free voice assistant for macOS. |
| #729 | fix: correct misleading send_message tool description for scheduled tasks | Needs Review | Clarifies `send_message` tool usage for scheduled tasks. |
| #765 | docs: fix NanoClaw clone command in README.md | Needs Review | Corrects the repository clone command in the README. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #747 | bug(whatsapp): pairing code expires before caller can display it | High | - |
| #748 | bug(whatsapp): service restart hammers WhatsApp on auth failure | High | - |
| #737 | [Security] API Key Exposure via Process Environment Inspection | Medium | - |
| #750 | bug(whatsapp): DM-with-bot setup registers wrong JID and requires trigger | High | - |
| #755 | register step does not create CLAUDE.md in new group folder — agent runs without persona | High | - |

### Trends
- Urgent need to address critical WhatsApp integration bugs affecting setup and stability.
- Ongoing focus on enhancing agent capabilities with new integrations (Dropbox, Google Workspace, Notion, GitHub).
- Development of advanced interaction methods, including full voice assistant support.
- Security vulnerabilities are being actively identified and addressed.
- Improvements to the containerized execution environment for robustness.
- Documentation and setup processes are being refined for clarity.
- Tools for managing and monitoring NanoClaw instances are expanding.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*