# OpenClaw Ecosystem Digest 2026-03-02

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-03-02 11:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- Agents/Thinking defaults have been updated to `adaptive` for Anthropic Claude 4.6 models.
- Gateway/Container probes now include built-in HTTP liveness/readiness checks.
- A new release, v2026.3.1, has been published.

### Releases
- v2026.3.1: Agents/Thinking defaults set to adaptive for Claude 4.6; Gateway/Container probes added.

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| [#1749](https://github.com/openclaw/openclaw/issues/1749) | Web UI: 'Unsupported schema node' error in Nodes/Accounts section | 21 | 3 | UI errors prevent configuration management. |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | Windows: openclaw plugins install fails with spawn EINVAL | 20 | 1 | Plugin installation is blocked on Windows. |
| [#5871](https://github.com/openclaw/openclaw/issues/5871) | CLI is extremely slow on pi4b | 17 | 11 | CLI is unusable due to extreme slowness. |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | 14 | 1 | Intel Macs are unable to run the latest macOS app. |
| [#29632](https://github.com/openclaw/openclaw/issues/29632) | Duplicate feishu plugin causes pairing failure after v2026.2.26 upgrade | 13 | 0 | Feishu integration is broken after upgrade. |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Request: Prebuilt Android APK releases | 12 | 1 | No easy way to install the Android companion app. |
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | Discord WebSocket reconnect drops events (seq gap), mentions lost | 12 | 0 | Discord communication is unreliable. |
| [#21872](https://github.com/openclaw/openclaw/issues/21872) | Telegram streaming not working with MiniMax model | 11 | 1 | Telegram streaming is broken for specific models. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| [#31631](https://github.com/openclaw/openclaw/pull/31631) | fix(cli): expose tool deny and sandbox status in agents list | OPEN | Shows agent security posture in CLI. |
| [#31619](https://github.com/openclaw/openclaw/pull/31619) | fix(heartbeat): relay exec results back to originating channel after approval | OPEN | Fixes executive command results delivery. |
| [#31255](https://github.com/openclaw/openclaw/pull/31255) | [Bug Fix] plugins CLI: preserve non-plugin config keys on write | OPEN | Plugins CLI preserves other config during writes. |
| [#31630](https://github.com/openclaw/openclaw/pull/31630) | feat(telegram): native sendMessageDraft streaming (Bot API 9.5) | OPEN | Improves Telegram streaming UX. |
| [#20051](https://github.com/openclaw/openclaw/pull/20051) | fix(mattermost): fix chatmode: "onmessage" to work correctly in mattermost | OPEN | Mattermost mentions now work as expected. |
| [#31078](https://github.com/openclaw/openclaw/pull/31078) | feat(signal): implement instant ACK reactions for reactionLevel=ack | OPEN | Signal ACKs now sent for 'ack' reaction level. |
| [#23118](https://github.com/openclaw/openclaw/pull/23118) | fix(slack): await draft stream flush before messageId check | OPEN | Fixes Slack streaming message ID checks. |
| [#22952](https://github.com/openclaw/openclaw/pull/22952) | fix(browser): suggest remote profile when local Chrome is not installed | OPEN | Improves browser tool experience in containers. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| [#1749](https://github.com/openclaw/openclaw/issues/1749) | Web UI: 'Unsupported schema node' error in Nodes/Accounts section | High | - |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | Windows: openclaw plugins install fails with spawn EINVAL | High | - |
| [#5871](https://github.com/openclaw/openclaw/issues/5871) | CLI is extremely slow on pi4b | High | - |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | Critical | - |
| [#29632](https://github.com/openclaw/openclaw/issues/29632) | Duplicate feishu plugin causes pairing failure after v2026.2.26 upgrade | Critical | - |

### Trends
- Ongoing issues with Windows plugin installation and CLI performance on ARM devices.
- macOS app compatibility regression impacting Intel-based Macs.
- Network and connection errors persist across various messaging platforms (Discord, Telegram, Slack).
- Authentication and configuration issues with newer model versions (e.g., Anthropic Opus 4.6).
- Requests for enhanced capabilities like Android APK releases and improved multimodal support.
- Security vulnerability identified in the `/api/metrics/database` endpoint.
- Users seeking better documentation and error guidance for complex setups like Docker.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The AI agent orchestration landscape shows distinct specialization. OpenClaw leads in core agent capabilities and integrations, while PicoClaw focuses on extensibility and multimodal features. NanoClaw prioritizes platform integrations and user experience enhancements, with a strong emphasis on security across various messaging applications.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 9 | 8 | 1 | 🟢 |
| PicoClaw | 7 | 8 | 0 | 🟡 |
| NanoClaw | 8 | 8 | 0 | 🟡 |

### OpenClaw vs Peers
- OpenClaw has a significant advantage in its release cadence, pushing a new version while peers have none.
- OpenClaw exhibits a strong focus on stability with probes and fixes for existing integrations, whereas peers are more feature-driven.
- PicoClaw's emphasis on multi-agent "Teams" and multimodal vision support offers a distinct architectural advantage for complex tasks.
- NanoClaw's deep dive into rich messaging features (typing indicators, read receipts) for platforms like WhatsApp sets it apart for specific user experience needs.
- OpenClaw's adoption of 'adaptive' thinking for specific models positions it for advanced AI integration, a direction less explicitly stated in peers.

### Shared Directions
- **Enhanced Provider Integration:** All projects see community demand for supporting a wider array of LLM providers beyond default options. (OpenClaw, PicoClaw, NanoClaw)
- **Improved Channel Connectivity:** Robustness and new features for messaging platforms (Feishu, Telegram, Discord, Slack, WhatsApp) are actively being developed. (OpenClaw, PicoClaw, NanoClaw)
- **Security & Stability:** Both critical security vulnerabilities and ongoing bug fixes for core functionality are a persistent concern across the board. (OpenClaw, PicoClaw, NanoClaw)
- **Agent/Tooling Enhancements:** Improving agent capabilities, tool functionality, and configuration management are common development themes. (OpenClaw, PicoClaw, NanoClaw)
- **Multi-Modal Capabilities:** The integration of vision and other multi-modal inputs is emerging as a key differentiator and future direction. (PicoClaw, NanoClaw)

### Trend Signals
- Increasing demand for multi-provider support to avoid vendor lock-in.
- Growing importance of robust security measures for sensitive data and credentials.
- Evolution towards more sophisticated agent architectures (e.g., agent teams).
- Development of richer user experiences on messaging platforms with advanced features.
- Need for improved tooling and documentation for broader accessibility.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- New issues highlight critical bugs like credential leakage (issue #972) and failure to initialize providers (issue #984).
- Significant PR activity includes adding multimodal image support (PR #981) and implementing agent teams (PR #976).
- Community interest remains high for various provider integrations and tool enhancements.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #901 | [CLOSED] [type: bug, help wanted, domain: provider] I can't add openrouter/free model in picoclaw | 11 | 0 | Addresses reported inability to add specific provider models. |
| #978 | [OPEN] [type: bug, help wanted, domain: channel, priority: high] [BUG]配置飞书之后发消息没有反应 | 1 | 0 | High priority bug with Feishu channel not responding to messages. |
| #675 | [OPEN] [type: enhancement, domain: provider] Add MiniMax LLM Provider Support | 4 | 0 | Feature request for MiniMax LLM provider integration. |
| #618 | [OPEN] [type: enhancement, domain: build] [Task] self-upgrade support | 3 | 2 | Essential for continuous feature and security updates. |
| #266 | [CLOSED] [wontfix] Feature Request: Integration of Baidu Browser and Baidu Search where relevant | 2 | 0 | Community feature request for Chinese developer tools. |
| #964 | [CLOSED] [BUG] Safety guard blocks redirecting to /dev/null commands | 1 | 0 | Security guard incorrectly blocks valid commands. |
| #797 | [OPEN] [type: bug, domain: tool] [BUG] guardCommand 方法的判断是不是有bug | 1 | 0 | Potential bug in command guarding logic within tools. |
| #972 | [OPEN] [BUG] Critical: Subagent spawns leak credentials to tool output via cli or channel | 0 | 0 | Critical security vulnerability with credential leakage. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #983 | skill self-config (unsupportable) | OPEN | Adds self-configuration for PicoClaw with secrets redaction. |
| #982 | feat(web_search): add load balance and failover for api keys | OPEN | Implements load balancing for web search API keys. |
| #976 | feat: agent team | OPEN | Introduces a multi-agent "Teams" architecture for task delegation. |
| #981 | feat: add multimodal image support for vision-capable LLMs | OPEN | Enables forwarding of images to vision LLMs via channels. |
| #980 | feat: 使用正确的飞书接口下载对话中的媒体资源 | OPEN | Correctly downloads media resources from Feishu conversations. |
| #893 | Add WeCom AIBot channel implementation and tests | OPEN | Integrates WeCom AIBot channel with configuration and tests. |
| #647 | Improve WebFetchTool text extraction with HTML entity decoding and structure preservation | OPEN | Enhances WebFetchTool with better HTML parsing. |
| #500 | [domain: channel] [refactor]use line bot sdk | OPEN | Refactors Line bot channel to use the official SDK. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #972 | Critical: Subagent spawns leak credentials to tool output via cli or channel | critical | None |
| #978 | [BUG]配置飞书之后发消息没有反应 | high | None |
| #964 | Safety guard blocks redirecting to /dev/null commands | high | None |
| #965 | Writing to /dev/mmcblk* and /dev/nvme* should also be blocked along with /dev/sd* | high | None |
| #973 | Connected to QQ and DingTalk, kept online overnight, PANIC and exited. | high | None |

### Trends
- Continued demand for broad LLM provider support (MiniMax, openrouter).
- User-reported issues with security guards and command execution blocking.
- Growing interest in enhancing agent capabilities with self-configuration and teams.
- Need for improved channel integrations and error handling (Feishu, QQ, DingTalk).
- Focus on performance optimizations and robust tooling (WebFetchTool, memory cache).
- Feature requests for self-upgrade and enhanced security frameworks.
- Community contributions addressing specific provider integrations and tool functionalities.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Significant work on Telegram and Feishu/Lark integration continues across multiple PRs.
- Enhancements for improved WhatsApp user experience, including typing indicators and read receipts, were merged.
- New RFC and security issue highlight ongoing efforts to broaden provider support and secure sensitive data.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #80 | [enhancement] Support runtime(s) other than Claude (aka support opencode, codex, gemini, etc) | 16 | 33 | Essential for avoiding vendor lock-in and ensuring continued operation. |
| #642 | RFC: CLI Channel for Claude Code Integration | 0 | 0 | Enables file-based IPC for greater Claude Code skill flexibility. |
| #635 | Security: WhatsApp auth files created with insecure permissions (644 instead of 600) | 0 | 0 | Security vulnerability risking sensitive session credential exposure. |
| #633 | Spec kit | 0 | 0 | Streamlines development with templates and scripts for core principles. |
| #618 | [enhancement] feat: quote/reply support — context-aware message threading | 0 | 0 | Improves conversational flow and user experience in threads. |
| #617 | feat: message steering — inject new user messages into active agent run | 0 | 0 | Enhances responsiveness by integrating new messages during active agent runs. |
| #181 | [enhancement] Upgrade Skill | 3 | 0 | Adds a much-needed `/upgrade` skill for easier maintenance. |
| #621 | feat: typing indicators during agent processing | 1 | 0 | Improves user experience by showing agent activity. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #644 | feat: multi-modal agent — voice, file sending, vision | CLOSED | Adds voice transcription, file/image sending and vision capabilities. |
| #641 | skill: add /configure-model for interactive provider configuration | OPEN | Provides interactive guide for switching between AI model providers. |
| #640 | fix: 4 bugs in /add-telegram skill | OPEN | Addresses critical bugs in the Telegram integration skill. |
| #628 | fix: normalize wrapped WhatsApp messages before reading content | CLOSED | Ensures correct processing of various WhatsApp message types. |
| #638 | Add value investing agent with price monitoring and research tools | CLOSED | Introduces a specialized agent for value investing with research tools. |
| #623 | feat(skills): add add-codex-engine and add-feishu skills | OPEN | Adds support for Codex and Feishu/Lark AI engines and channels. |
| #573 | feat: add support for custom Anthropic API endpoint | CLOSED | Allows configuration of custom Anthropic API endpoints. |
| #635 | Security: WhatsApp auth files created with insecure permissions (644 instead of 600) | OPEN | Fixes insecure file permissions for WhatsApp authentication data. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #635 | Security: WhatsApp auth files created with insecure permissions (644 instead of 600) | critical | No (Open Issue) |
| #640 | fix: 4 bugs in /add-telegram skill | high | Yes (#640) |
| #639 | fix: resolve launch stalls and startup reliability issues | high | Yes (#639) |
| #643 | fix: use TIMEZONE constant for 'once' scheduled task timestamps | medium | Yes (#643) |
| #628 | fix: normalize wrapped WhatsApp messages before reading content | medium | Yes (#628) |

### Trends
- Growing demand for multi-provider support beyond Claude.
- Ongoing enhancements for rich messaging features on platforms like WhatsApp.
- Increased focus on security vulnerabilities, particularly concerning sensitive data.
- Community contributions adding new channel integrations (Feishu/Lark, Telegram).
- Efforts to improve developer tooling and maintainability (spec kit, update skill).
- Need for robust handling of agent processing, including messaging and context management.
- Continued evolution of agent capabilities with multi-modal features.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*