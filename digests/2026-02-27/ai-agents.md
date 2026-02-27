# OpenClaw Ecosystem Digest 2026-02-27

> Issues: 500 | PRs: 500 | Projects tracked: 3 | Generated: 2026-02-27 11:34 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

### Highlights
- External Secrets Management: New `openclaw secrets` workflow (`audit`, `configure`, `apply`, `reload`) for enhanced security.
- Runtime snapshot activation and strict validation for `secrets apply` ensure safer secret management.

### Releases
- v2026.2.26: openclaw 2026.2.26
- v2026.2.26-beta.1: openclaw 2026.2.26-beta.1

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #26534 | Add DingTalk as a first-install channel option | 21 | 6 | Improves onboarding for DingTalk users. |
| #3917 | [Bug]: windows installer error | 18 | 1 | Fixes broken Windows installation for new users. |
| #7631 | Windows: openclaw plugins install fails with spawn EINVAL | 16 | 1 | Enables plugin installation on Windows. |
| #23861 | Open claw installation fails on npm: ! npm install failed for openclaw@latest | 16 | 0 | Resolves critical installation failures. |
| #21653 | Custom API providers defaulted to a 4096-token context window, causing the completion to fail | 14 | 0 | Prevents completion failures with custom providers. |
| #18677 | Feature Proposal: Security Scan Hook API for skill:install | 14 | 0 | Enhances security for skill installations. |
| #11797 | [Bug]: Mattermost plugin does not receive channel message events via WebSocket | 12 | 1 | Restores Mattermost message event processing. |
| #11283 | [Bug]: OpenClaw tries to use local Ollama CLI instead of remote API endpoint | 11 | 2 | Fixes Ollama remote connectivity issues. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #28638 | fix(discord): make slow listener threshold configurable | OPEN | Allows configuring Discord listener timeout. |
| #28633 | Reply: skip empty block payload so Telegram gets no blank message bef… | OPEN | Prevents blank messages in Telegram. |
| #27880 | feat(tts/talk): Add minimax as tts provider | OPEN | Integrates MiniMax for text-to-speech. |
| #27960 | feat(talk): configurable TTS provider support | OPEN | Adds custom TTS provider options for Talk Mode. |
| #17113 | Windows: prefer PowerShell 7 (pwsh) in shell resolution | OPEN | Improves shell resolution on Windows. |
| #13873 | fix(sandbox): prevent Windows PATH from poisoning docker exec | OPEN | Prevents Windows PATH issues in Docker exec. |
| #24278 | Handle dev=0 on Windows in sameFileIdentity | OPEN | Fixes file identity checks on Windows. |
| #26049 | test(bash-tools): fix Windows CI path prepend assertion | OPEN | Corrects Windows CI test for PATH prepending. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #3917 | [Bug]: windows installer error | High | Yes |
| #7631 | [Bug]: Windows: openclaw plugins install fails with spawn EINVAL | High | No |
| #23861 | [Bug]: Open claw installation fails on npm: ! npm install failed for openclaw@latest | High | No |
| #21653 | [Bug]: Custom API providers defaulted to a 4096-token context window, causing the completion to fail | Medium | No |
| #11797 | [Bug]: Mattermost plugin does not receive channel message events via WebSocket | Medium | No |

### Trends
- Increasing reports of installation and plugin issues on Windows.
- Growing demand for more configuration options and flexibility in providers and features.
- User frustration with API rate limits and authentication errors across various services.
- Need for improved error handling and graceful degradation during network instability.
- Feature requests for enhanced channel integrations and agent communication.
- Security enhancements are a recurring theme, with new secrets management features emerging.
- Bug fixes related to specific channel integrations (Discord, Telegram, Mattermost) are frequent.

---

## Cross-Ecosystem Comparison

### Ecosystem Snapshot
The Claw ecosystem is actively expanding, with OpenClaw leading in feature stability and security enhancements. PicoClaw shows robust development momentum with broad channel integration and LLM compatibility efforts. NanoClaw focuses on channel expansion and WhatsApp stability, indicating a strong push for broader utility.

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
| OpenClaw | 9 | 8 | 2 | 🟡 steady |
| PicoClaw | 8 | 8 | 0 | 🟢 rapid |
| NanoClaw | 3 | 8 | 0 | 🟢 rapid |

### OpenClaw vs Peers
- OpenClaw offers mature external secrets management, a feature not as prominently highlighted in peers.
- PicoClaw exhibits significantly faster PR velocity, suggesting a more agile development cycle for new features.
- NanoClaw's core focus on WhatsApp stability and recovery addresses a critical pain point absent in the other projects' top issues.
- OpenClaw's release cadence (v2026.2.26) indicates a more established product lifecycle compared to PicoClaw and NanoClaw.
- PicoClaw's inclusion of a community-driven logo design highlights a strong engagement strategy.

### Shared Directions
- Expanding channel integrations (PicoClaw, NanoClaw)
- Enhancing LLM provider compatibility and configuration (OpenClaw, PicoClaw, NanoClaw)
- Improving media file handling and sending capabilities (PicoClaw, NanoClaw)
- Stabilizing and enhancing connection recovery for messaging platforms (OpenClaw, PicoClaw, NanoClaw)
- Addressing installation and setup complexities for new users (OpenClaw, NanoClaw)

### Trend Signals
- Growing demand for diverse communication channel integrations (e.g., Signal, WhatsApp, WeCom).
- Increasing emphasis on robust LLM provider support and flexible configuration.
- Critical need for reliable media file handling across various platforms.
- User pain points center on connectivity issues, message delivery failures, and context management.
- Security and secrets management are becoming foundational features.

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Highlights
- Significant activity in PRs, with 123 opened yesterday, indicating active development.
- Several issues focus on improving channel capabilities and handling media files.
- Key PRs address LLM provider compatibility and retry mechanisms, crucial for stability.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
| #100 | [CLOSED] [Possible BUG] "I've completed processing but have no response to give." | 8 | 1 | Indicates potential agent processing failures. |
| #310 | [CLOSED] [type: bug] [BUG] Telegram messages stuck on "Thinking..." due to allowlist mismatch in HandleMessage | 7 | 0 | Blocks user interaction on Telegram. |
| #619 | [CLOSED] Bug: downloaded media files deleted before async consumer reads them | 7 | 0 | Leads to lost or inaccessible media. |
| #290 | [OPEN] [priority: high, type: roadmap] Feature: Implement Model Context Protocol (MCP) support for extensible operations | 5 | 4 | Essential for expanding PicoClaw's integration capabilities. |
| #297 | [OPEN] [priority: medium, type: roadmap] Design: Create a cute Mantis Shrimp logo for PicoClaw! | 5 | 0 | Community engagement and branding effort. |
| #778 | [OPEN] [type: bug] [BUG] Summary contains no relevant context | 5 | 0 | Poor summaries hinder understanding and debugging. |
| #99 | [OPEN] Feat: Add Whatsapp channel | 5 | 0 | User request for a popular communication channel. |
| #61 | [OPEN] Implement file sending and receiving in chat. | 5 | 4 | Core functionality for richer chat interactions. |

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
| #872 | Add WeCom AIBot channel implementation and tests | OPEN | Adds a new WeCom AIBot channel integration. |
| #861 | refactor(modernize): apply safe modernize fixes | OPEN | Applies standard code modernization and style fixes. |
| #866 | feat(retry): complete bounded retry policy for LLM calls | OPEN | Implements robust LLM call retry logic. |
| #871 | fix: preserve tool call/response pairing in forceCompression | OPEN | Fixes tool call pairing issues during compression. |
| #655 | Added a native WhatsApp channel implementation. | OPEN | Introduces a native implementation for WhatsApp. |
| #802 | Fix Reasoning Content Being Silently Dropped by Adding Channel-Aware Reasoning Routing #645 | CLOSED | Ensures reasoning output is correctly routed and not lost. |
| #402 | feat: mail channels ; support long-lived connection and attachment | CLOSED | Adds email channel support for input and output. |
| #867 | fix: use Anthropic SDK provider for anthropic protocol with API key | OPEN | Correctly uses Anthropic SDK for Anthropic provider. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
| #100 | [Possible BUG] "I've completed processing but have no response to give." | High | No |
| #310 | [BUG] Telegram messages stuck on "Thinking..." due to allowlist mismatch in HandleMessage | High | No |
| #619 | Bug: downloaded media files deleted before async consumer reads them | High | No |
| #778 | [BUG] Summary contains no relevant context | Medium | No |
| #639 | [BUG] Picoclaw can't send image over discord like OpenClaw | High | No |

### Trends
- Requests for new channel integrations (e.g., WhatsApp, WeCom).
- Issues with media file handling across different channels.
- Need for improved LLM provider compatibility and error handling.
- Bugs causing messages to get stuck or not deliver correctly.
- Feature requests for better agent context management and multi-agent collaboration.
- User feedback on issues like "no response" and incorrect context summaries.
- Ongoing refactoring of core systems like the channel implementation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### Highlights
- Focus on enhancing channel integrations with Signal and Mattermost.
- Several PRs address critical WhatsApp connectivity and stability issues.
- Work is underway to improve AI provider compatibility and setup process robustness.

### Releases
None

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|
| #29 | [enhancement] feat: Add Signal as messaging channel | 3 | 0 | Expanding communication channels to include Signal. |
| #342 | feat: readSecrets() support for third-party Anthropic-compatible API environment variables | 1 | 0 | Enables use of alternative LLM providers like ZAI and Kimi. |
| #553 | Container execution fails after WhatsApp connection recovery | 0 | 0 | Critical bug impacting container execution after WhatsApp disconnects. |
| #537 | Issues during /setup | 0 | 0 | Setup issues hindering new user onboarding. |

### Key PRs
| # | Title | Status | What it does |
|---|---|---|---|
| #491 | fix: filter protocol messages before processing in WhatsApp handler | OPEN | Reduces unnecessary processing of system messages in WhatsApp. |
| #466 | fix: add exponential backoff to WhatsApp reconnect loop | OPEN | Prevents infinite loops during WhatsApp connection failures. |
| #499 | Add Signal as a channel via signal-cli daemon (TCP JSON-RPC). | OPEN | Integrates Signal as a communication channel. |
| #412 | feat(setup): add host machine authorization passthrough | OPEN | Simplifies setup with host machine auth reuse. |
| #424 | fix(add-telegram): add state/code mismatch detection to SKILL.md | OPEN | Improves robustness and error detection for Telegram setup skill. |
| #488 | fix(add-discord): add state/code mismatch detection to SKILL.md | OPEN | Enhances error detection for Discord setup skill sync issues. |
| #512 | feat(setup): detect docker permission issues and prompt user for group fix | OPEN | Improves Docker setup by handling permission errors. |
| #552 | Test PR from Enzo | CLOSED | Test pull request, safely closed. |

### Bugs
| # | Title | Severity | Fix PR? |
|---|---|---|---|
| #553 | Container execution fails after WhatsApp connection recovery | critical | No |
| #342 | feat: readSecrets() support for third-party Anthropic-compatible API environment variables | medium | No |
| #537 | Issues during /setup | medium | No |

### Trends
- Increasing demand for new communication channel integrations (Signal, Mattermost, iMessage).
- Ongoing effort to stabilize and improve WhatsApp connectivity and recovery.
- Need for broader compatibility with third-party Anthropic-compatible LLM APIs.
- Improving the user setup experience and detecting/resolving common setup issues.
- Enhancing agent capabilities with features like image sending.
- Addressing potential security vulnerabilities through dependency updates.
- Implementing more robust error handling and failure recovery mechanisms.

</details>

---
*This digest was auto-generated by [agents-radar](https://github.com/softwarecatscomgm/agents-radar).*