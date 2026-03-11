# OpenClaw Ecosystem Digest 2026-03-11

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-11 11:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- API rate limit errors persist despite functional APIs, impacting all models.
- Significant regression reported with macOS app builds exclusively for ARM64.
- Multiple reports indicate `kimi-coding/k2p5` is failing to execute tool calls, returning plain text instead.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #32828 | [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | 48 | 7 | Widespread issue preventing access to all AI models. |
| #26534 | Add DingTalk as a first-install channel option | 38 | 11 | Enhances initial setup experience for DingTalk users. |
| #28877 | [Bug]: macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | 18 | 2 | Breaks functionality on Intel Macs; regression needs urgent fix. |
| #13552 | [Bug]: macOS companion app fails to pass gateway auth token over SSH tunnel — no UI field, no auto-read from remote config | 16 | 6 | Prevents secure gateway connection for macOS users. |
| #36994 | [Bug]: Exec and tools keep breaking | 16 | 1 | Core functionalities like execution and tool usage are unreliable. |
| #39907 | [Bug]: 2026.3.7 regression: kimi-coding/k2p5 emits literal exec(...) text instead of structured tool calls | 15 | 5 | `kimi-coding/k2p5` model is broken for tool execution. |
| #9443 | [Enhancement]: Request: Prebuilt Android APK releases | 15 | 1 | Simplifies Android companion app deployment for users. |
| #40631 | Recurring execution stall: assistant confirms task but performs no actions | 14 | 0 | Agents confirm tasks but fail to execute them. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #43138 | fix(agents): ignore stale requiresOpenAiAnthropicToolPayload override for kimi-coding | OPEN | Fixes `kimi-coding/k2p5` tool execution and panic output. |
| #43136 | docs(zh-CN): add Chinese translation for channels/irc.md | CLOSED | Adds Chinese translation for IRC channel documentation. |
| #43137 | fix: add enabled field to heartbeat config schema (#43058) | OPEN | Allows disabling heartbeat configuration via an `enabled` field. |
| #42761 | fix(web_search): normalize Chinese locale-style search_lang variants | OPEN | Improves handling of Chinese language variants for web search. |
| #29793 | feat(concurrency): optional workspace mutation locking for shared-workspace agents | OPEN | Adds optional locking to prevent lost updates in shared workspaces. |
| #43118 | fix(agents): custom providers with local base URLs rejected with "No API key found" after onboarding | OPEN | Enables local custom providers to work correctly after onboarding. |
| #43131 | docs: add Memory Management concepts guide | CLOSED | Provides a guide explaining OpenClaw's memory management. |
| #43093 | logs: use active logger file path in logs --follow to fix cross-date gateway tailing | OPEN | Fixes `logs --follow` to correctly tail logs across dates. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #32828 | [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | critical | N/A |
| #28877 | [Bug]: macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | critical | N/A |
| #36994 | [Bug]: Exec and tools keep breaking | high | N/A |
| #39907 | [Bug]: 2026.3.7 regression: kimi-coding/k2p5 emits literal exec(...) text instead of structured tool calls | high | #43138 |
| #40631 | Recurring execution stall: assistant confirms task but performs no actions | high | N/A |

### Trends
- Persistent API rate limiting errors despite functional APIs.
- Regression in macOS app builds affecting Intel Macs.
- `kimi-coding/k2p5` tool execution is broken due to incorrect response formatting.
- Difficulty with macOS app installation and configuration, including SSH tunnel issues.
- Cron job failures observed after recent updates.
- Intermittent issues with tool execution and agent responsiveness.
- Need for better Android companion app deployment via prebuilt releases.
- Ongoing challenges with specific channel integrations (Feishu, Slack, Discord).

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The Claw ecosystem shows significant development effort across its projects, with OpenClaw facing critical API and platform-specific issues. PicoClaw is rapidly expanding its provider support and agent capabilities, while NanoClaw focuses on core functional bugs and new feature development like admin mode.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 8 | 8 | 0 | 🟡 steady |
| PicoClaw | 8 | 8 | 1 | 🟢 rapid |
| NanoClaw | 8 | 8 | 0 | 🟡 steady |

### OpenClaw vs Peers
- OpenClaw is the most stable in terms of core functionality, but suffers from widespread API rate limit errors and platform-specific regressions (macOS ARM64).
- PicoClaw demonstrates stronger momentum with recent releases, broader LLM provider support (Kimi, Opencode), and core agent/tooling enhancements.
- NanoClaw is actively developing advanced features like admin mode and skill self-creation, but faces critical issues with agent responsiveness and container env var passing.

### Shared Directions
- Enhancing agent capabilities and tool integration (OpenClaw, PicoClaw, NanoClaw).
- Improving channel integrations and user experience for specific platforms (OpenClaw, PicoClaw).
- Addressing bugs in core execution, agent responsiveness, and tool usage (OpenClaw, PicoClaw, NanoClaw).
- Expanding LLM provider support and configuration clarity (OpenClaw, PicoClaw).
- Increasing documentation and ease of deployment (OpenClaw, PicoClaw, NanoClaw).

### Trend Signals
- Critical regressions in platform-specific builds (e.g., macOS ARM64) highlight the challenges of cross-platform development in AI agents.
- Robustness of tool execution and reliable API interaction remain paramount for AI agent functionality.
- Growing demand for specialized LLM integrations and advanced agent architectures (e.g., subagents, teams).
- User experience issues related to configuration, installation, and error handling necessitate clearer documentation and simpler deployment options.
- Security vulnerabilities in tool-exec paths and credential management are becoming increasingly important.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Multiple PRs merged addressing agent tool failures and improving provider robustness.
- New nightly release v0.2.1-nightly.20260311.9cd2d218 includes debug mode and Telegram forum topics enhancements.
- A critical security fix for unauthenticated tool-exec paths was merged.

### Releases
- v0.2.1-nightly.20260311.9cd2d218: Nightly Build with debug mode and Telegram forum topics support.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? | 14 | 0 | Users struggle with Ollama local model integration. |
| #1218 | [Agent refactor]what an Agent is | 12 | 0 | Clarifies agent definition for better understanding. |
| #297 | Design: Create a cute Mantis Shrimp logo for PicoClaw! | 9 | 0 | Community design effort for project branding. |
| #1270 | [Feature] Telegram Forum Topics Support for PicoClaw | 7 | 0 | Enhances chat organization in Telegram. |
| #1278 | [Feature] Subagent support for tool access and inheritance | 6 | 0 | Enables advanced autonomous task completion. |
| #292 | Feature: Android Device Automation & Remote Operations | 3 | 0 | Extends PicoClaw capabilities to mobile devices. |
| #1280 | [BUG] About IRC -Allow From | 3 | 0 | IRC configuration issue with character encoding. |
| #1281 | [BUG] Feishu messages doesn't show user_id of @ and msg sender | 3 | 0 | Missing user identifiers in Feishu messages. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #1361 | fix(agent): initialize MCP in direct agent mode | OPEN | Fixes MCP tool loading in direct agent mode. |
| #1355 | fix(agent): include TOOLS.md in bootstrap files and cache tracking | OPEN | Ensures TOOLS.md is loaded for agent context. |
| #1360 | fix(security): harden unauthenticated tool-exec paths | CLOSED | Prevents unauthorized remote command execution. |
| #933 | feat: add Kimi/Moonshot and Opencode provider support | OPEN | Adds support for Kimi and Opencode LLM providers. |
| #1330 | fix(session): sanitize '/' and '\' in session keys so forum topic key… | CLOSED | Fixes session key sanitization for forum topics. |
| #915 | Feat/team | OPEN | Implements multi-agent Teams architecture. |
| #976 | feat: agent team | OPEN | Further develops the multi-agent Teams architecture. |
| #1179 | fix: Fixed the bug where the bus was closed and consumers had unfinished messages. | OPEN | Ensures graceful shutdown of message bus. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1161 | [BUG]How to correctly configure PicoClaw with local Ollama models? | High | N/A |
| #1280 | [BUG] About IRC -Allow From | Medium | N/A |
| #1281 | [BUG] Feishu messages doesn't show user_id of @ and msg sender | Medium | N/A |
| #1350 | [BUG] launcher docker image manifest not available | Critical | N/A |
| #1290 | web backend Gateway config | High | N/A |

### Trends
- Demand for wider LLM provider support, including Kimi and Opencode.
- Ongoing work to improve agent capabilities, particularly subagent functionality and tool integration.
- User queries regarding local model configuration highlight a need for clearer documentation.
- Bugs affecting channel integrations (IRC, Feishu, Telegram) require attention.
- Security enhancements are being prioritized with recent fixes.
- Interest in advanced features like Android automation and team-based agents is growing.
- Docker deployment issues are impacting users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- New uninstall tool "ByeByeClaw" released by @wanikua.
- Several `skill-maintenance` bugs related to merge-forward failures were closed.
- Active development on admin mode, structured memory, and skill self-creation.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #732 | [Type: Bug, Priority: High] Send message after agent completes, not during streaming | 2 | 0 | Floods chat with partial responses during streaming. |
| #960 | [Type: Bug, Priority: High] MCP env vars not passed to containers after credential proxy migration | 0 | 0 | Breakage for MCP servers relying on env var interpolation. |
| #958 | [Type: Bug, Priority: High] Can not get a response from NanoClaw | 0 | 0 | Users are unable to get any replies from the agent. |
| #926 | [Type: Enhancement, Priority: High] Admin mode: intercept main-channel admin commands and add /capabilities read-only flow | 1 | 0 | Initiates admin command path for new read-only capabilities. |
| #911 | [Type: Enhancement, Priority: High] Skill self-creation IPC handler with security scanning | 1 | 0 | Adds secure host-side validation for agent-created skills. |
| #941 | [Type: Bug, Priority: High] unnecessary TS recompilations degrade performance | 0 | 0 | Slow responses due to repeated TypeScript recompilation. |
| #732 | [Type: Bug, Priority: High] Send message after agent completes, not during streaming | 2 | 0 | Floods chat with partial responses during streaming. |
| #825 | [Type: Bug, Priority: Critical] fix(scheduler): once-task race condition — marked completed before fire handler runs | 1 | 0 | Caused "faking tool calls" incident due to scheduler race condition. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #412 | feat(setup): add host machine authorization passthrough | OPEN | Adds a new `/setup` authentication option. |
| #921 | feat(github): add autonomous governance self-healing lanes | OPEN | Implements self-healing lanes for autonomous governance. |
| #964 | feat: add Feishu/Lark channel | OPEN | Integrates Feishu/Lark as a new built-in channel. |
| #928 | fix: rotate oversized session files to prevent container timeouts | OPEN | Prevents container timeouts from large session files. |
| #930 | fix: automatically refresh expired OAuth tokens from Claude Code credentials | OPEN | Refreshes expired OAuth tokens automatically. |
| #942 | fix: container EACCES/ENOENT when host runs as root | OPEN | Fixes permission issues for containers when host runs as root. |
| #940 | fix: add PID lockfile to prevent multiple instances | OPEN | Prevents duplicate instances from running simultaneously. |
| #962 | fix: pass MCP env vars from .env to containers | CLOSED | Passes MCP env vars from .env to containers. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #732 | Send message after agent completes, not during streaming | High | No |
| #960 | MCP env vars not passed to containers after credential proxy migration | High | No |
| #958 | Can not get a response from NanoClaw | High | No |
| #941 | unnecessary TS recompilations degrade performance | High | No |
| #825 | fix(scheduler): once-task race condition — marked completed before fire handler runs | Critical | No |

### Trends
- Users are encountering issues with streaming messages and agents not responding.
- Ongoing efforts to improve container performance and reliability.
- Development of new features like admin mode and enhanced memory management.
- Demand for broader SDK and provider support (e.g., OpenAI Codex, Podman).
- Several `skill-maintenance` issues indicate potential problems with automated merging.
- Need for cleaner uninstallation processes.
- Enhancements in handling credentials and authentication for various services.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*