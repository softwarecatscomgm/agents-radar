# OpenClaw Ecosystem Digest 2026-03-18

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-18 11:48 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Significant bug reports related to gateway connectivity and AI model integration continue to be a major focus.
- Enhancements for provider integration and plugin system robustness are actively being merged.
- New features emerging include enhanced heartbeat configurations and structured output support for subagents.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | [enhancement, help wanted] Linux/Windows Clawdbot Apps | 41 | 63 | Extends platform support for core OpenClaw applications. |
| [#37757](https://github.com/openclaw/openclaw/issues/37757) | System prompt typo: IDENTITITY.md vs IDENTITY.md | 23 | 0 | Cosmetic issue affecting system prompt display. |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | [Bug] Anthropic setup-token auth returns 401 Invalid bearer token on 2026.2.21-2 (isolated profile repro) | 21 | 0 | Authentication failure for Anthropic models. |
| [#45772](https://github.com/openclaw/openclaw/issues/45772) | Gateway Heartbeat timer stops after 1-2 triggers (introduced in v2026.3.8) | 18 | 1 | Gateway heartbeat feature malfunctions. |
| [#34741](https://github.com/openclaw/openclaw/issues/34741) | [bug, regression] [Bug]: WhatsApp No active listener while status=connected — mid-session desync (v2026.3.2) | 16 | 2 | WhatsApp integration suffers mid-session desync. |
| [#38902](https://github.com/openclaw/openclaw/issues/38902) | [bug, bug:behavior] [Bug]: run error: HTTP 422: "check open ai req parameter error" | 15 | 0 | AI parameter check error during runtime. |
| [#2334](https://github.com/openclaw/openclaw/issues/2334) | [Bug]: Deploy with Render fails | 15 | 1 | Deployment issues with Render platform. |
| [#2868](https://github.com/openclaw/openclaw/issues/2868) | [Bug]: Unexpected high token consumption with Claude models | 14 | 7 | Excessive token usage with Claude models. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#48568](https://github.com/openclaw/openclaw/pull/48568) | feat: heartbeat.timeoutSeconds — per-heartbeat embedded run timeout | OPEN | Adds configurable timeout for heartbeat runs. |
| [#49769](https://github.com/openclaw/openclaw/pull/49769) | docs/types: clarify that omitting accountId in bindings matches default account only, not all accounts | OPEN | Clarifies account ID behavior in agent bindings. |
| [#49771](https://github.com/openclaw/openclaw/pull/49771) | fix: Complete Manusilized bug fixes and enhancements | OPEN | Enhances OpenClaw with Manusilized features and reliability. |
| [#49702](https://github.com/openclaw/openclaw/pull/49702) | fix(security): block build-tool and glibc env injection vectors in host exec sandbox | OPEN | Enhances security by blocking injection vectors in host execution. |
| [#49560](https://github.com/openclaw/openclaw/pull/49560) | Gateway: fix hook dispatch and Discord provider teardown | OPEN | Improves hook dispatch and Discord provider cleanup. |
| [#48100](https://github.com/openclaw/openclaw/pull/48100) | Plugins: add after_agent_complete hook | OPEN | Introduces a new hook for plugin actions after agent completion. |
| [#49767](https://github.com/openclaw/openclaw/pull/49767) | fix(feishu): @所有人 (@all) no longer triggers every bot unconditionally | OPEN | Fixes Feishu `@all` mentions from triggering all bots. |
| [#42626](https://github.com/openclaw/openclaw/pull/42626) | feat(auth): add openai-codex device-code login | OPEN | Adds device-code login for OpenAI Codex. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | [Bug] Anthropic setup-token auth returns 401 Invalid bearer token on 2026.2.21-2 (isolated profile repro) | High | No |
| [#45772](https://github.com/openclaw/openclaw/issues/45772) | Gateway Heartbeat timer stops after 1-2 triggers (introduced in v2026.3.8) | High | No |
| [#34741](https://github.com/openclaw/openclaw/issues/34741) | [Bug]: WhatsApp No active listener while status=connected — mid-session desync (v2026.3.2) | High | No |
| [#45560](https://github.com/openclaw/openclaw/issues/45560) | [Bug]: local gateway CLI handshake fails (probe timeout / gateway call closed 1000) even though gateway is running and WS challenge is reachable | High | No |
| [#49338](https://github.com/openclaw/openclaw/issues/49338) | Bug: OpenClaw 2026.3.13 npm package missing dist/gateway.js - Gateway fails to start, ERR_CONNECTION_REFUSED | Critical | No |

### Trends
- Persistent issues with gateway connectivity and CLI handshakes across various versions.
- Authentication failures and token handling problems with specific AI providers (Anthropic, Claude).
- Regressions in channel integrations, particularly WhatsApp and Discord, after recent updates.
- Feature requests focus on expanding platform support (Linux/Windows apps) and enhancing core functionalities.
- Ongoing need for improved error handling for transient API issues and rate limits.
- Community reports indicate frequent issues with session corruption and file lock contention after restarts.
- Development is actively adding new AI providers and refining existing ones for better consistency.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The decentralized AI agent ecosystem is rapidly evolving, with a strong emphasis on robust provider integration, channel expansion, and security. While OpenClaw focuses on core platform stability and broad provider support, PicoClaw is embracing multimedia capabilities and a user-friendly web UI. NanoClaw is prioritizing security hardening and multi-provider flexibility, indicating a broad push towards platform independence and enhanced functionality.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 65 | 9 | 0 | 🟡 steady |
| PicoClaw | 30 | 93 | 2 | 🟢 rapid |
| NanoClaw | 8 | 8 | 0 | 🟡 steady |

### OpenClaw vs Peers
*   **OpenClaw Advantage:** Mature gateway and plugin architecture, extensive provider integrations nearing completion.
*   **PicoClaw Advantage:** Rapid release cycle, focus on emergent features like TTS/ASR and WebUI.
*   **NanoClaw Advantage:** Strong security posture, explicit focus on non-Anthropic AI models.
*   **Gap:** OpenClaw lacks the rapid feature iteration seen in PicoClaw and the explicit multi-provider push of NanoClaw.
*   **Roadmap Contrast:** OpenClaw focuses on stabilizing existing components, while PicoClaw and NanoClaw are aggressively expanding feature sets and provider integrations.

### Shared Directions
*   **Enhanced Provider Support:** Moving beyond specific AI models to a more flexible, multi-provider ecosystem. (OpenClaw, PicoClaw, NanoClaw)
*   **Robust Channel Integrations:** Expanding connectivity to various communication platforms and services. (OpenClaw, PicoClaw, NanoClaw)
*   **Security Hardening:** Addressing vulnerabilities and improving the overall security posture of the agent frameworks. (OpenClaw, NanoClaw)
*   **Agent Efficiency & Context Management:** Optimizing how agents handle information and maintain context during long interactions. (PicoClaw, NanoClaw)
*   **Platform Expansion:** Broadening operational support for different operating systems and deployment methods. (OpenClaw, NanoClaw)
*   **Improved Observability & Debugging:** Enhancing tools for monitoring agent behavior and troubleshooting issues. (PicoClaw, NanoClaw)

### Trend Signals
*   **Provider Agnosticism:** Strong community demand for flexibility in AI model selection to avoid vendor lock-in and mitigate TOS risks.
*   **Multimedia AI Integration:** Growing interest in incorporating voice (TTS/ASR) and other media modalities into AI agent capabilities.
*   **Security as a Core Feature:** Increased prioritization of security fixes and architectural hardening in AI agent development.
*   **User Experience Focus:** Demand for accessible interfaces (e.g., WebUI) and streamlined configuration to broaden adoption.
*   **Cross-Platform Ubiquity:** Efforts to enable agents to run reliably across diverse operating systems and environments.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- New `v0.2.3` release available, with nightly build also updated.
- Significant activity with 29 issues and 93 PRs in the last 24 hours.
- Ongoing work on agent refactoring, enhanced tool capabilities, and new channel integrations.

### Releases
- nightly: Nightly Build `v0.2.3-nightly.20260318.513537d2`
- v0.2.3: v0.2.3

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) | [Feature] Adding TTS and ASR Support to PicoClaw | 10 | 0 | Adds voice interaction capabilities, crucial for broader AI integration. |
| [#1498](https://github.com/sipeed/picoclaw/issues/1498) | [Feature]期待功能增加：模型端搜索和fastembed | 8 | 0 | Enhances model search, improving efficiency and data retrieval. |
| [#1652](https://github.com/sipeed/picoclaw/issues/1652) | [BUG] GLM Coding Plan is not support PicoClaw | 5 | 0 | Prevents GLM provider from functioning, impacting users. |
| [#1439](https://github.com/sipeed/picoclaw/issues/1439) | [Agent refactor] Context management: boundaries, compression, and token budgeting | 5 | 0 | Critical for agent efficiency and managing long conversations. |
| [#1615](https://github.com/sipeed/picoclaw/issues/1615) | [Feature] Include current sender in dynamic context so the agent knows who sent the message | 5 | 0 | Improves agent awareness in group settings for better responses. |
| [#1307](https://github.com/sipeed/picoclaw/issues/1307) | [BUG] feishu(飞书) auth expired after 12h | 3 | 0 | Feishu integration intermittently fails due to auth issues. |
| [#806](https://github.com/sipeed/picoclaw/issues/806) | [Feature]: Add webUI support (Refactoring now) | 3 | 7 | Essential for user accessibility and broader adoption. |
| [#1574](https://github.com/sipeed/picoclaw/issues/1574) | The prompt_cache_key error is a picoclaw bug | 3 | 0 | Causes errors during prompt caching for certain configurations. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#626](https://github.com/sipeed/picoclaw/pull/626) | feat: add generic bidirectional webhook channel | CLOSED | Integrates a flexible webhook for advanced connectivity. |
| [#1618](https://github.com/sipeed/picoclaw/pull/1618) | Add model-native search (prefer_native) for OpenAI/Codex | OPEN | Uses native AI search, improving performance and accuracy. |
| [#1672](https://github.com/sipeed/picoclaw/pull/1672) | fix(feishu): retry REST calls after access token expiry | CLOSED | Improves Feishu reliability by retrying failed API requests. |
| [#1318](https://github.com/sipeed/picoclaw/pull/1318) | fix(feishu): invalidate cached token on auth error to enable retry recovery | CLOSED | Fixes Feishu token caching for successful authentication retries. |
| [#1023](https://github.com/sipeed/picoclaw/pull/1023) | fix: Avoid failure of the main agent process due to tool call failures | OPEN | Enhances agent stability by handling tool call errors gracefully. |
| [#1620](https://github.com/sipeed/picoclaw/pull/1620) | docs: add WhatsApp channel configuration guide | OPEN | Provides comprehensive setup instructions for WhatsApp. |
| [#835](https://github.com/sipeed/picoclaw/pull/835) | fix(openai_compat): exclude groq from prompt caching | CLOSED | Addresses prompt caching issues with Groq provider. |
| [#1537](https://github.com/sipeed/picoclaw/pull/1537) | Feature/feishu thread reply | OPEN | Fixes Feishu topic replies to ensure correct thread engagement. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#1652](https://github.com/sipeed/picoclaw/issues/1652) | [BUG] GLM Coding Plan is not support PicoClaw | High | No |
| [#1734](https://github.com/sipeed/picoclaw/issues/1734) | [BUG] when launcher with gui not success open log file, crash with no output | High | No |
| [#1746](https://github.com/sipeed/picoclaw/issues/1746) | [BUG] reasoning_channel_id not working with OpenAI-compatible provider in v0.2.3 despite PR #604 | High | No |
| [#1727](https://github.com/sipeed/picoclaw/issues/1727) | [BUG]feishu api error code=230099 | Medium | No |
| [#1713](https://github.com/sipeed/picoclaw/issues/1713) | [BUG] Subagents spawned via spawn tool have no tools | Medium | No |

### Trends
- Demand for enhanced voice interaction (TTS/ASR).
- Need for more efficient AI model search capabilities.
- Continued focus on improving agent context management for longer interactions.
- Addressing provider-specific integration issues (e.g., GLM, OpenAI compatible).
- Expanding channel support (e.g., Zalo, Webhook, WhatsApp).
- Requests for better UI/UX, including a web interface.
- Improving observability and debugging features (e.g., OpenTelemetry support).
- Enhancements to tool execution and security, including PTY/background task support.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Significant security work landed addressing command injection, read-only agent sources and auth.
- Multiple PRs focus on extending provider support beyond Anthropic's Claude.
- Several new features and bug fixes were introduced for improved stability and user experience.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #80 | [Type: Enhancement, Priority: Low] Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 25 | 47 | Enables alternative AI models, reducing vendor lock-in and Anthropic TOS risk. |
| #1210 | 使用阿里百炼 API 代理 claude 模型时，服务不可用 | 1 | 0 | Users in China experiencing service unavailability with specific API proxies. |
| #1103 | [Type: Bug, Priority: High] Apple Container: fix networking (host gateway + proxy bind address) | 1 | 0 | Crucial networking fix for macOS users on Apple Silicon containers. |
| #865 | [Type: Enhancement, Priority: High] Using containers alone doesn't make you more secure | 4 | 0 | Addresses fundamental security trust issues within the container architecture. |
| #1142 | [Type: Bug, Priority: High] Bug: Agent SDK pinned to v0.2.34 — containers default to outdated model | 2 | 0 | Prevents containers from automatically using the latest LLM models. |
| #1143 | [Type: Documentation, Priority: Medium] Bug: Skills docs reference /data/env path that no longer exists | 2 | 0 | Outdated documentation causing confusion for users configuring skills. |
| #1216 | Bug: Stale Claude Code session IDs cause permanent resume failures — no auto-recovery | 0 | 0 | Stale session IDs prevent successful task resumption, impacting long-term use. |
| #889 | [Type: Bug, Priority: High] Bug: lone Unicode surrogates in Bash tool output corrupt JSONL transcripts → HTTP 400 on next API call | 0 | 0 | Malformed transcripts break subsequent API calls, leading to data loss. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #1231 | security: fix command injection, read-only agent src, proxy bind, remote-control auth, min task interval | OPEN | Enhances security through multiple critical fixes. |
| #1229 | feat: Add Novita provider integration | CLOSED | Expands provider support to include Novita AI. |
| #1098 | fix: include weekday in message timestamps so agent knows the correct… | OPEN | Fixes timestamp formatting for improved agent accuracy. |
| #1086 | [PR: Skill, Status: Needs Review] add /capabilities and /status skills | CLOSED | Introduces skills for system introspection. |
| #963 | [PR: Feature, Status: Needs Review] feat: add OpenAI Codex SDK as opt-in alternative agent engine | OPEN | Allows opting into using the OpenAI Codex SDK. |
| #1221 | fix: handle APFS conflict artifacts that cause EDEADLK in file copy | OPEN | Resolves macOS file copy errors caused by APFS artifacts. |
| #1223 | feat: add HTTP whisper server support to use-local-whisper skill | OPEN | Extends whisper skill to support HTTP-based Whisper servers. |
| #1159 | fix: refresh tasks snapshot immediately after IPC task mutations | CLOSED | Ensures task snapshots are up-to-date after IPC mutations. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #1103 | Apple Container: fix networking (host gateway + proxy bind address) | High | No |
| #1142 | Agent SDK pinned to v0.2.34 — containers default to outdated model | High | No |
| #889 | lone Unicode surrogates in Bash tool output corrupt JSONL transcripts → HTTP 400 on next API call | High | No |
| #1216 | Stale Claude Code session IDs cause permanent resume failures — no auto-recovery | High | No |
| #1143 | Skills docs reference /data/env path that no longer exists | Medium | No |

### Trends
- Growing demand for multi-provider AI support beyond Anthropic Claude.
- Increased focus on security fixes and hardening the agent architecture.
- User-reported issues with specific regional API integrations and container networking.
- Features like new channel integrations (Feishu, Matrix) and improved task management are actively being developed.
- Ongoing efforts to refine documentation and ensure consistency across different platforms (macOS, Linux).
- Community interest in running NanoClaw without Docker presents a significant platform expansion opportunity.
- Bug reports highlight issues with session management and data corruption in transcript files.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*