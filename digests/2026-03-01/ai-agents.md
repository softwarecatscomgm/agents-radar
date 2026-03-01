# OpenClaw Ecosystem Digest 2026-03-01

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-01 11:22 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Significant increase in bug reports related to Web UI errors and Telegram channel integration failures.
- Multiple issues highlight regressions in recent releases, impacting macOS app compatibility and channel plugin stability.
- Active development addressing core functionality like PostgreSQL datastore support and improved Telegram DM topics.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 30 | 55 | Expands platform support for core functionality. |
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | Web UI Error: missing scope: operator.read | 29 | 11 | Blocks access to essential web interface features. |
| [#3741](https://github.com/openclaw/openclaw/issues/3741) | Telegram channel fails to start - auto-enable writes to plugins.entries instead of channels | 21 | 0 | Prevents reliable Telegram integration. |
| [#24718](https://github.com/openclaw/openclaw/issues/24718) | telegram plugin not available. | 18 | 1 | Critical failure for Telegram users. |
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | Browser Control Broken | 15 | 2 | Disrupts core browser automation capabilities. |
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | Discord WebSocket reconnect drops events (seq gap), mentions lost | 11 | 0 | Degrades Discord communication reliability. |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | 11 | 0 | Breaks compatibility for Intel Mac users. |
| [#15582](https://github.com/openclaw/openclaw/issues/15582) | Remote CDP (Browserless) blocked with “Port is in use … but not by openclaw” (OpenClaw 2026.2.12) | 9 | 9 | Hinders advanced browser automation setups. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#30583](https://github.com/openclaw/openclaw/pull/30583) | fix: exit 0 when gateway is already running (idempotent start) | OPEN | Makes gateway startup more robust and idempotent. |
| [#30572](https://github.com/openclaw/openclaw/pull/30572) | Add Azure AI Foundry support and improve SSE connection handling | CLOSED | Expands cloud AI integrations and connection robustness. |
| [#29008](https://github.com/openclaw/openclaw/pull/29008) | feat: add PostgreSQL as an alternative datastore backend | OPEN | Introduces PostgreSQL for data persistence. |
| [#30579](https://github.com/openclaw/openclaw/pull/30579) | [FEATURE] Telegram dm topics improved support | OPEN | Enhances Telegram DM functionality with topic support. |
| [#30580](https://github.com/openclaw/openclaw/pull/30580) | docs(browser): add high-reliability automation playbook | OPEN | Provides guidance for stable browser automation. |
| [#30584](https://github.com/openclaw/openclaw/pull/30584) | fix(line): dedupe webhook message replays by message id | OPEN | Prevents duplicate messages from LINE webhooks. |
| [#30577](https://github.com/openclaw/openclaw/pull/30577) | usage: fix misleading 'Day' label for long Codex reset windows | OPEN | Improves clarity of usage/reset period labels. |
| [#30297](https://github.com/openclaw/openclaw/pull/30297) | fix(subagents): trigger immediate parent turn after direct delivery | OPEN | Ensures parent sessions receive sub-agent results promptly. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | Web UI Error: missing scope: operator.read | critical | Yes (implied by close) |
| [#3741](https://github.com/openclaw/openclaw/issues/3741) | Telegram channel fails to start - auto-enable writes to plugins.entries instead of channels | high | Yes (implied by close) |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | critical | No |
| [#24395](https://github.com/openclaw/openclaw/issues/24395) | Regression: All channel plugins disabled in v2026.2.22 (works in 2026.2.19) | high | Yes (implied by close) |
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | Browser Control Broken | high | No |

### Trends
- Demand for comprehensive Linux and Windows desktop applications.
- Persistent issues with Telegram channel stability and integration.
- Regressions in recent releases impacting macOS compatibility and channel plugin functionality.
- Growing need for robust browser automation and remote control capabilities.
- Increasing reports of WebSocket connection instability and message delivery failures across multiple channels.
- Users encountering difficulties with cloud provider integrations and model catalog entries.
- Interest in alternative datastore backends like PostgreSQL for improved scalability.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The agent framework ecosystem shows a mix of stable platforms addressing core integrations and rapidly evolving projects pushing for broader LLM support and architectural flexibility. Stability concerns, particularly around integration failures and resource management, are prevalent.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 112 | 10 | 0 | 🟡 steady |
| PicoClaw | 10 | 71 | 1 | 🟢 rapid |
| NanoClaw | 9 | 9 | 0 | 🟡 steady |

### OpenClaw vs Peers
- **Advantage:** Broad platform support for core functionalities (Linux, Windows apps).
- **Advantage:** Robust PostgreSQL datastore integration in development.
- **Gap:** Significant stability issues with Telegram and Discord integrations compared to Pico/NanoClaw's focused integration efforts.
- **Gap:** Lags in immediate LLM diversification compared to NanoClaw's explicit features.
- **Roadmap:** Focus on core backend and platform expansion, less on broad LLM provider integration.

### Shared Directions
- **Enhanced Agent Capabilities:** Improving agent functionality and interaction models (PicoClaw, NanoClaw).
- **Multi-Channel Support:** Enabling seamless integration with various communication platforms (OpenClaw, PicoClaw, NanoClaw).
- **Stability and Error Handling:** Addressing critical bugs and improving reliability across deployments (OpenClaw, PicoClaw, NanoClaw).
- **Configuration and Deployment:** Simplifying setup, configuration, and deployment processes (PicoClaw, NanoClaw).
- **LLM Diversification:** Expanding support for a wider range of language models beyond initial offerings (NanoClaw, PicoClaw).

### Trend Signals
- **Platform Agnosticism:** Increasing demand for cross-platform applications and robust deployment options.
- **Integration Robustness:** Critical need for stable and reliable integrations with third-party services (messaging, cloud AI).
- **LLM Choice and Cost Optimization:** Growing desire to leverage diverse LLMs for performance and cost-effectiveness.
- **Developer Experience:** Focus on streamlined setup, clear documentation, and effective debugging tools.
- **Resource Management:** Ongoing challenges with memory leaks and application stability require continuous attention.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- PicoClaw released v0.2.0, updating WeChat qrcode and removing unused mp4 file.
- Intense PR activity with 71 submitted, focusing on agent/channel enhancements and bug fixes.
- Several key roadmap items like "Intelligent Model Routing" and "Agent System Refactor" are actively being worked on.

### Releases
- v0.2.0: Updated WeChat qrcode & deleted unused mp4 file.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #4 | I'm not seeing the gateway on the local network. | 11 | 0 | Gateway visibility issue impacting local deployment and testing. |
| #901 | I can't add openrouter/free model in picoclaw | 10 | 0 | Users struggle to integrate free models via OpenRouter. |
| #295 | Feature: Intelligent Model Routing for Cost & Performance Optimization | 9 | 0 | Optimizes costs and speed by routing AI model requests intelligently. |
| #621 | [Refactor]: Channel System Refactoring / [Refactor]: Channel系统重构 | 5 | 4 | Major refactor of channel system, 83% complete. Crucial for stability. |
| #671 | [BUG] `gateway status` launches an extra gateway worker process | 4 | 0 | Unmanaged gateway processes disrupt service and consistency. |
| #386 | Bug: exec tool blocks commands containing URLs due to path guard misidentifying URLs as file paths | 4 | 0 | `exec` tool incorrectly blocks commands with URLs. |
| #794 | [Bug]: 400 Bad Request on Codex API call with gpt-5.3-codex in Headless Device Auth mode | 3 | 0 | Authentication fails for Codex API with specific models. |
| #171 | Even smaller binaries with Go build tags | 3 | 0 | Pursuing smaller binaries for efficiency and deployment. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #950 | feat(agent): session management | CLOSED | Establishes command registry foundation across channels. |
| #949 | feat(telegram): support runtime model switching via model_list | OPEN | Enables model switching in Telegram via `/model` command. |
| #916 | docs: sync READMEs, examples, and channel docs to match current config | OPEN | Updates documentation to align with current configuration. |
| #947 | Fix voice transcription | OPEN | Addresses bug where voice messages are not processed correctly. |
| #919 | fix: improve error handling in GitHub Copilot provider | OPEN | Enhances error reporting for GitHub Copilot provider. |
| #896 | feat(config): Add support for env var configuration | OPEN | Allows configuration via environment variables. |
| #956 | fix: promptcachekey used for not openai models | OPEN | Corrects prompt caching implementation for non-OpenAI models. |
| #955 | docs: update wechat qrcode | CLOSED | Updates the WeChat QR code. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #671 | [BUG] `gateway status` launches an extra gateway worker process | high | #671 |
| #386 | Bug: exec tool blocks commands containing URLs due to path guard misidentifying URLs as file paths | high | #386 |
| #794 | [Bug]: 400 Bad Request on Codex API call with gpt-5.3-codex in Headless Device Auth mode | high | #794 |
| #945 | [BUG] voice package is not being used - `voice.GroqTranscriber` is not part of the process any more | high | #947 |
| #928 | skills search returns HTTP 404 in v0.2.0 (ClawHub registry mismatch) | high | #928 |

### Trends
- Ongoing refactoring of core systems (channels, agents) for improved modularity and performance.
- Demand for enhanced build customization to create smaller, more targeted binaries.
- Feature requests focus on better integration (custom base URLs, file attachments) and user experience.
- Addressing specific provider issues and improving error handling across integrations.
- Drive towards more robust and secure agent execution environments (e.g., sandboxing).
- Need for clearer configuration options, including environment variable support.
- Continued development in making PicoClaw more accessible and easier to use for diverse users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Significant influx of bug fixes identified and addressed, particularly around container stability and error handling.
- New feature development continues with focus on multi-channel architecture and enhanced agent capabilities.
- Open issues highlight a need for broader LLM support and potential architectural issues like source code synchronization.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #80 | Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 15 | 33 | Expands LLM options, reduces vendor lock-in and risk of service disruption. |
| #613 | ANTHROPIC_MODEL=claude-sonnet-4-6 is ignored — CLI maps it to claude-sonnet-4-20250514 | 0 | 0 | Prevents users from using desired Anthropic models, impacting performance. |
| #611 | Agent-runner source copy is never updated after initial creation | 0 | 0 | Stale agent code can lead to bugs and outdated functionality. |
| #595 | Bug: OOM crash after ~40h — ghost sockets accumulate on reconnect | 0 | 0 | Causes critical downtime and requires manual restarts, impacting reliability. |
| #603 | Fix website layout for mobile | 0 | 0 | Improves accessibility and user experience on mobile devices. |
| #585 | Test runner broken due to rollup dependency issue | 1 | 0 | Halts automated testing, hindering development and regression prevention. |
| #584 | Path traversal edge cases in mount security validation | 1 | 0 | Potential security vulnerability, though impact is mitigated by sandboxing. |
| #582 | Potential memory retention in container output buffers | 1 | 0 | Contributes to memory leaks and potential OOM errors. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #327 | feat: support third-party API endpoints in container agents | OPEN | Allows container agents to access external API secrets securely. |
| #500 | refactor: implement pluggable multi-channel architecture | OPEN | Overhauls NanoClaw for flexible integration with various communication channels. |
| #612 | fix: always sync agent-runner source to existing groups | OPEN | Ensures agent code is always up-to-date in containers, fixing stale code issues. |
| #407 | fix: repair three setup bugs found during WSL first-run | OPEN | Addresses critical setup issues for a smoother user experience. |
| #609 | fix: add CJK font support for Chromium screenshots | OPEN | Enables correct rendering of East Asian characters in screenshots. |
| #608 | feat: log tool_use calls in agent-runner for debugging | OPEN | Improves debuggability by logging agent tool invocations. |
| #607 | fix: prevent scheduler duplicate execution for long-running tasks | OPEN | Resolves a bug where long tasks could be executed multiple times. |
| #575 | feat: add update_project IPC host command | OPEN | Allows container agents to request upstream code updates. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #595 | Bug: OOM crash after ~40h — ghost sockets accumulate on reconnect | Critical | #596 |
| #585 | Test runner broken due to rollup dependency issue | High | None |
| #584 | Path traversal edge cases in mount security validation | Medium | None |
| #583 | Inconsistent retry logic after max retries exceeded | Medium | None |
| #578 | Race condition in GroupQueue task scheduling | High | None |

### Trends
- Growing demand for multi-LLM support beyond Anthropic's offerings.
- Continued focus on container stability, memory management, and crash prevention.
- Efforts to streamline setup and improve developer experience.
- Need for robust error handling and less silent failure.
- Enhancements to agent capabilities and tool integration.
- Architectural refactoring for flexibility and scalability.
- Addressing specific channel integration issues (e.g., WhatsApp).

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*