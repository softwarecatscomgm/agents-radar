# OpenClaw Ecosystem Digest 2026-03-12

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-12 11:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Critical security vulnerability addressed in Gateway/WebSocket regarding cross-site hijacking paths.
- Significant increase in both open issues and PRs suggests active development and community engagement.
- Multiple reports of cron job failures following recent updates indicate a critical area for investigation.

### Releases
- v2026.3.11: openclaw 2026.3.11
- v2026.3.11-beta.1: openclaw 2026.3.11-beta.1

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #26534 | [OPEN] Add DingTalk as a first-install channel option | 59 | 19 | Enhances onboarding for a popular communication platform. |
| #32828 | [CLOSED] [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | 53 | 8 | False alarms hinder usability and debugging. |
| #27009 | [CLOSED] [enhancement] [Feature]: Support for using OpenCode Go subscription to onboard. | 22 | 25 | Integrates new subscription models for broader access. |
| #40631 | [OPEN] Recurring execution stall: assistant confirms task but performs no actions | 15 | 0 | Stalled executions disrupt core agent functionality. |
| #36822 | [CLOSED] [bug, bug:behavior] [Bug]: Config-change-triggered restart fails via launchctl (ETIMEDOUT), gateway enters degraded state, memory indexes stuck at zero for hours | 15 | 0 | Restart failures and degraded states impact stability. |
| #39907 | [CLOSED] [bug, regression] [Bug]: 2026.3.7 regression: kimi-coding/k2p5 emits literal exec(...) text instead of structured tool calls | 15 | 6 | Tool call misinterpretation breaks critical agent capabilities. |
| #3344 | [CLOSED] [bug, stale] [Bug]: Gemini outputs fake tool call text instead of executing tools | 14 | 1 | Incorrect tool call generation hinders agent actions. |
| #8983 | [OPEN] [bug, stale] [Bug]: The configuration menu is not allowing the API key to be changed, from OpenRouter. | 11 | 0 | Users cannot update essential API credentials. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #43959 | [agents, size: S] fix(cron): normalizePayloadKind should only return true when value actually changes | OPEN | Prevents infinite loops in cron job fixes. |
| #43047 | [app: web-ui, size: S] fix(ui): fall back to daily message counts in usage metrics | OPEN | Improves accuracy of usage metric reporting. |
| #43981 | [size: XS] feat: expose startGatewayServer via package exports | OPEN | Enables programmatic gateway server integration. |
| #43982 | [app: web-ui, gateway, size: S] fix(gateway): strip inline image payloads from chat history | OPEN | Prevents large image data from bloating chat history. |
| #43984 | [gateway, size: S] fix(gateway): keep main sessions visible in active session lists | OPEN | Ensures important sessions remain accessible. |
| #43985 | [agents, size: XS] fix(agents): skip tool calls without valid name on model switch | OPEN | Resolves model switching errors with tool calls. |
| #43968 | [agents, size: S] feat(errors): enrich rate limit error messages with provider/model/retry context | OPEN | Provides better context for API rate limit errors. |
| #43916 | [app: web-ui, channel: feishu, size: M] fix(feishu): decode URL-encoded filenames when receiving files | OPEN | Correctly handles file names received via Feishu. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #36822 | [CLOSED] [bug, bug:behavior] [Bug]: Config-change-triggered restart fails via launchctl (ETIMEDOUT), gateway enters degraded state, memory indexes stuck at zero for hours | Critical | No | Restart failures and degraded states impact stability. |
| #39907 | [CLOSED] [bug, regression] [Bug]: 2026.3.7 regression: kimi-coding/k2p5 emits literal exec(...) text instead of structured tool calls | Critical | No | Tool call misinterpretation breaks critical agent capabilities. |
| #32828 | [CLOSED] [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | High | No | False alarms hinder usability and debugging. |
| #40631 | [OPEN] Recurring execution stall: assistant confirms task but performs no actions | High | No | Stalled executions disrupt core agent functionality. |
| #41266 | [CLOSED] [Bug]: Manual cron run enqueues but never executes on Linux (2026.3.8) | High | No | Cron job execution failures impact scheduled tasks. |

### Trends
- Increased demand for integrating new AI model subscriptions and platforms.
- Recurring issues with cron job execution stability post-updates are a significant pain point.
- Users are encountering persistent "API rate limit reached" errors, often falsely.
- Security vulnerabilities in WebSocket handling require immediate attention.
- Users are requesting easier ways to manage API keys and configuration.
- Multiple reports of tool calls not being interpreted correctly by various models.
- Feature requests focus on enhanced communication channel integration and real-time capabilities.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The Claw ecosystem shows a maturing landscape with OpenClaw focusing on core agent stability and integrations, PicoClaw rapidly expanding channel support and agent orchestration, and NanoClaw prioritizing security, cost optimization, and performance. All projects are actively addressing bugs, enhancing features, and showing community engagement.

### Activity
| Project    | Issues | PRs | Releases | Momentum |
|------------|--------|-----|----------|----------|
| OpenClaw   | 192    | 34  | 2        | 🟡 steady  |
| PicoClaw   | 27     | 119 | 3        | 🟢 rapid   |
| NanoClaw   | 12     | 9   | 0        | 🟡 steady  |

### OpenClaw vs Peers
- OpenClaw leads in addressing critical security vulnerabilities in its gateway, a proactive stance not as explicitly highlighted in PicoClaw or NanoClaw's recent activity.
- PicoClaw exhibits significantly higher PR activity, indicating rapid feature development and integration, especially in channel support and agent capabilities, outpacing OpenClaw and NanoClaw.
- NanoClaw shows a strong, focused effort on token optimization and security enhancements for containerized environments, a niche not as prominent in the other projects' current metrics.
- OpenClaw faces recurring issues with cron job failures, a stability concern that PicoClaw and NanoClaw, with their different architectures, do not appear to have at the same critical level.
- PicoClaw's agent refactoring and team functionality suggest a deeper architectural shift towards more complex agent orchestration, a direction less evident in OpenClaw's current hot issues.

### Shared Directions
- **Enhancing Security:** All projects are actively addressing security concerns, from gateway vulnerabilities (OpenClaw) to DoS risks (PicoClaw) and credential management (NanoClaw).
- **Improving Agent Stability & Reliability:** Ongoing efforts to fix execution stalls, restarts, and handling of tool calls are critical across OpenClaw and PicoClaw.
- **Provider & Channel Integrations:** Expansion of supported AI providers and communication channels is a common theme, seen in OpenClaw's feature requests and PicoClaw's extensive channel work.
- **User Experience & Configuration:** Efforts to simplify configuration, fix false alarms, and improve reporting are evident in OpenClaw and NanoClaw.
- **Performance & Latency Optimization:** NanoClaw's specific focus on Gemini Pro latency is mirrored in OpenClaw's general need for functional APIs and PicoClaw's ongoing refactoring that implicitly aims for better performance.

### Trend Signals
- **Heightened Security Scrutiny:** Increased focus on vulnerabilities, DoS risks, and secure credential management across projects.
- **AI Provider and Channel Proliferation:** Continued demand for integrating a wider array of LLM providers and communication platforms.
- **Agent Orchestration and Modularity:** Development trends point towards more sophisticated agent capabilities, including teams and event-driven architectures.
- **Performance and Cost Optimization as Key Drivers:** Significant attention is being paid to reducing latency and token consumption for efficiency.
- **Robustness Against Dynamic Environmental Changes:** Addressing issues like expired tokens and unstable cron jobs highlights the need for resilience in deployed agents.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Significant activity with 27 issues and 119 PRs in the last 24 hours, alongside 3 new releases.
- Focus on agent refactoring, channel enhancements (Matrix, QQ, Discord), and provider integrations (Azure OpenAI, LongCat).
- Several critical bug fixes for memory leaks, configuration issues, and tool usage are actively being addressed.

### Releases
- v0.2.2-nightly.20260312.6612ca09: Enabled rich-text messages in Matrix, added LongCat provider, fixed agent MCP initialization.
- v0.2.2: Added `allow_remote` config for exec, merged echo voice/audio transcription.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#1218](https://github.com/sipeed/picoclaw/issues/1218) | [Agent refactor]what an Agent is | 16 | 0 | Defines core agent concepts for better structure. |
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | [BUG]How to correctly configure PicoClaw with local Ollama models? | 15 | 0 | Essential for users running local AI models. |
| [#1316](https://github.com/sipeed/picoclaw/issues/1316) | [Agent refactor] Event-driven agent loop with hooks, interrupts, and steering | 7 | 1 | Enhances agent flexibility and observability. |
| [#748](https://github.com/sipeed/picoclaw/issues/748) | [BUG] Groq API compatibility: tool call format error | 6 | 0 | Fixes integration with a popular LLM provider. |
| [#440](https://github.com/sipeed/picoclaw/issues/440) | Replace hard iteration limit with context-window bounding and loop detection | 4 | 0 | Improves agent handling of complex tasks. |
| [#1407](https://github.com/sipeed/picoclaw/issues/1407) | [BUG] LINE webhook handler reads unlimited bodies (DoS risk) | 2 | 0 | Critical security fix to prevent DoS. |
| [#1405](https://github.com/sipeed/picoclaw/issues/1405) | [BUG] Matrix channel downloads media into memory without size limits | 2 | 0 | Critical security fix, prevents memory exhaustion. |
| [#1410](https://github.com/sipeed/picoclaw/issues/1410) | [BUG] SVG files served with incorrect MIME type (image/svg instead of image/svg+xml) | 2 | 0 | Affects web UI rendering of SVGs. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#1396](https://github.com/sipeed/picoclaw/pull/1396) | fix: 修复了飞书，企业微信代码多模态的处理代码,增加单页面WEB | OPEN | Fixes multi-modal handling, adds single-page web. |
| [#1220](https://github.com/sipeed/picoclaw/pull/1220) | feat: add Matrix channel support | CLOSED | Integrates Matrix channel with UI and docs. |
| [#1425](https://github.com/sipeed/picoclaw/pull/1425) | fix(web): render ansi logs with wrapped lines | CLOSED | Improves web log readability and styling. |
| [#1422](https://github.com/sipeed/picoclaw/pull/1422) | feat(provider): add support for azure openai provider | OPEN | Enables Azure OpenAI provider integration. |
| [#1385](https://github.com/sipeed/picoclaw/pull/1385) | fix(web): restore the last active chat session | OPEN | Persists and restores chat history in web UI. |
| [#1356](https://github.com/sipeed/picoclaw/pull/1356) | fix: spawn tool now respects target agent's model config | OPEN | Ensures subagents use correct model configurations. |
| [#976](https://github.com/sipeed/picoclaw/pull/976) | feat: agent team | OPEN | Implements multi-agent teams for complex task delegation. |
| [#1423](https://github.com/sipeed/picoclaw/pull/1423) | Fix/toolloop context loss | CLOSED | Fixes context loss in `RunToolLoop` for agent teams. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#1407](https://github.com/sipeed/picoclaw/issues/1407) | [BUG] LINE webhook handler reads unlimited bodies (DoS risk) | Critical | No |
| [#1405](https://github.com/sipeed/picoclaw/issues/1405) | [BUG] Matrix channel downloads media into memory without size limits | Critical | No |
| [#1410](https://github.com/sipeed/picoclaw/issues/1410) | [BUG] SVG files served with incorrect MIME type | High | No |
| [#748](https://github.com/sipeed/picoclaw/issues/748) | [BUG] Groq API compatibility: tool call format error | High | No |
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | [BUG]How to correctly configure PicoClaw with local Ollama models? | High | No |

### Trends
- Ongoing agent refactoring points towards improved modularity and flexibility.
- Multiple security vulnerabilities related to unbounded resource consumption are being addressed.
- Expansion of provider support continues with Azure OpenAI and LongCat.
- Enhancements to existing channels (Matrix, QQ, Feishu) and potential new ones (e.g., OpenIM plugin).
- User experience improvements for the web UI, including chat history persistence and log rendering.
- Focus on robust tool integration and agent team functionality for complex workflows.
- Configuration and model management features are being refined.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Token optimization efforts are gaining significant traction with multiple PRs aimed at reducing costs via inline compaction and response length control.
- Security concerns around container trust and credential management are being addressed through enhancements to the credential proxy and allowlist mechanisms.
- Latency issues with Gemini Pro containers are being tackled with specific optimizations to trim context and implement early exits.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #865 | Using containers alone doesn't make you more secure | 3 | 0 | Untrusted agent scripts and architectural trust issues highlight security gaps. |
| #732 | Send message after agent completes, not during streaming | 3 | 0 | Floods chat with partial responses during streaming. |
| #730 | Bug: CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 each morning | 2 | 0 | Overnight container failures due to expiring auth tokens. |
| #878 | feat: extend credential proxy to cover GROQ_API_KEY and OPENAI_API_KEY | 1 | 0 | Enhances credential security for additional API providers. |
| #830 | fix: scheduled task fires silently dropped when session is busy | 1 | 0 | Scheduled tasks are lost when sessions are occupied. |
| #989 | perf: reduce Gemini Pro container latency (trim context + early-exit) | 1 | 0 | High latency (3.5 min) for Gemini Pro tasks impacting performance. |
| #833 | [bug]win11 opencode的如何配置 | 1 | 0 | User asks for configuration help on Windows 11. |
| #957 | Suggest supporting Podman as an alternative to Docker | 1 | 0 | Feature request for Podman support. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #999 | feat: extend credential proxy to cover GROQ_API_KEY and OPENAI_API_KEY | OPEN | Routes Groq and OpenAI API requests through a proxy. |
| #998 | Cursor/docker vps 6c3c | CLOSED | Adds a new skill for Cursor/Docker VPS integration. |
| #995 | fix: relay agent text when turn ends with tool call instead of text | OPEN | Prevents agent replies from disappearing when ending with a tool call. |
| #996 | fix(queue): prevent scheduled task drops with improved queuing (Issue #830) | OPEN | Fixes silent dropping of scheduled tasks when sessions are busy. |
| #965 | fix(streaming): send message after agent completes, not during streaming | OPEN | Prevents WhatsApp message flooding by buffering streaming output. |
| #596 | fix: destroy old Baileys socket on reconnect to prevent OOM crash | OPEN | Prevents OOM crashes by destroying old Baileys sockets on reconnect. |
| #994 | fix(#989): Reduce Gemini Pro container latency (2-3x faster) | OPEN | Significantly reduces Gemini Pro container latency via context trim/early exit. |
| #988 | feat: smart token optimization (inline compaction + length control + CLAUDE.md compression) | OPEN | Implements inline compaction, response length control, and CLAUDE.md compression. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #730 | Bug: CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 each morning | High | No |
| #732 | Send message after agent completes, not during streaming | High | #965 |
| #830 | fix: scheduled task fires silently dropped when session is busy | High | #996 |
| #958 | Can not get a response from NanoClaw | High | No |
| #973 | Setup takes ages | Medium | No |

### Trends
- Increasing focus on security: addressing container trust and credential management securely.
- Drive for cost optimization: significant effort on token usage reduction via various compression and control mechanisms.
- Performance enhancements: addressing latency issues in specific model integrations like Gemini Pro.
- User experience improvements: fixing issues like message flooding and silent task drops.
- Expanding integrations: supporting alternative container runtimes like Podman and improving cloud/API integrations.
- Robustness and reliability: addressing memory leaks and connection stability issues.
- Feature development: adding new skills and memory capabilities for agents.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*