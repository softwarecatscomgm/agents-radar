# OpenClaw Ecosystem Digest 2026-02-27

> Issues: 282 | PRs: 500 | Projects tracked: 3 | Generated: 2026-02-27 06:00 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)

---

## OpenClaw Deep Report

## OpenClaw Project Digest - 2026-02-27

**1. Today's Highlights**

OpenClaw demonstrated exceptionally high activity today, with a significant volume of updates to both Issues (282) and Pull Requests (500). The release of two new versions (v2026.2.26 and v2026.2.26-beta.1) highlights ongoing development efforts, with a strong focus on enhancing external secrets management capabilities. The substantial PR activity suggests active development across various fronts, indicating a healthy pace of feature implementation and bug fixing within the project.

**2. Releases**

*   **v2026.2.26** and **v2026.2.26-beta.1**:
    *   **Highlight**: Introduction of a comprehensive `openclaw secrets` workflow including `audit`, `configure`, `apply`, and `reload` commands. This feature offers runtime snapshot activation, strict `secrets apply` target-path validation, safer migration scrubbing, ref-only auth-profile support, and dedicated documentation.

**3. Project Progress**

Today's activity was dominated by a surge in Pull Requests. Notable advancements include:

*   **Secrets Management Evolution**: PR #27275 (`feat:secrets management`) signifies a major step in native credential management, addressing secure storage, agent access control, and approval workflows. This is closely aligned with the highlights of the latest releases.
*   **External Secrets Workflow Enhancements**: PR #24911 (`feat: OpenAI Responses API WebSocket mode for multi-tool-call acceleration`) introduces a more efficient WebSocket transport for OpenAI Responses API, crucial for accelerating multi-tool-call workflows.
*   **Channel & Plugin Development**: Significant additions include the implementation of a QQ Bot API v2 channel plugin (PR #28348) and the addition of an AOMS HTTP memory backend plugin (PR #28372), expanding OpenClaw's integration capabilities.
*   **Bug Fixes & Stabilization**: Several PRs address critical stability issues, such as message delivery reliability with SQLite journals (PR #27939) and stabilization of high-frequency browser tool runs (PR #25072).

The sheer volume of PRs indicates strong ongoing development and a robust pipeline of improvements.

**4. Community Hot Topics**

The most active discussions revolve around various bug reports and feature requests impacting core functionality and specific channel integrations.

*   **External LLM Integration Issues**:
    *   **Issue #11283 [OPEN] [bug] OpenClaw tries to use local Ollama CLI instead of remote API endpoint**: Users are experiencing issues with OpenClaw incorrectly attempting to use local Ollama CLI binaries instead of configured remote API endpoints, impacting LLM availability when models are hosted separately. (11 comments)
    *   **Issue #4349 [OPEN] [bug, tui] TUI /model picker shows all 600+ models instead of configured/available ones**: Users find the TUI model picker overwhelming, displaying all available models instead of a filtered list of configured or authorized ones, hindering efficient model switching. (6 comments)
*   **Channel-Specific Bugs**:
    *   **Issue #20397 [OPEN] Signal channel schema missing `groups` config — requireMention silently drops all group messages**: A critical gap in the Signal channel schema prevents proper handling of group messages, as `requireMention` defaults to `true` without a way to disable it, leading to silent message drops. (7 comments)
    *   **Issue #7564 [OPEN] [bug] [telegram] Images not being passed to local Ollama vision model (qwen2.5vl)**: A bug prevents Telegram image uploads from being processed by local Ollama vision models, limiting multimodality features. (5 comments)
*   **Secrets Management and Security Concerns**:
    *   **Issue #15913 [OPEN] ClawHub: False positive VirusTotal flag on link-brain skill**: A skill in ClawHub is being flagged as suspicious by VirusTotal, raising concerns about the skill's integrity and the automated security scanning process. (7 comments)
    *   **PR #27275 [OPEN] [cli, scripts, agents, size: XL] feat:secrets management**: This PR addresses a significant gap in native credential management, indicating user need for enhanced security and controlled access to sensitive information.

**5. Bugs & Stability**

Several critical bugs and potential regressions were reported today:

**High Severity:**

*   **Issue #11283 [OPEN] [bug] OpenClaw tries to use local Ollama CLI instead of remote API endpoint**: This bug directly impacts the ability to use remote LLM providers, potentially causing agent functionality to fail. (Fix PR: None reported)
*   **Issue #20397 [OPEN] Signal channel schema missing `groups` config — requireMention silently drops all group messages**: This leads to lost communication within Signal groups, a significant functional defect. (Fix PR: None reported)
*   **Issue #27984 [OPEN] [bug] [Bug]: Telegram: files ~5-20MB cause silent deadlock (no error, no timeout, locks entire chat)**: A silent deadlock in Telegram file handling can lock entire chats, impacting usability. (Fix PR: None reported)
*   **Issue #19168 [OPEN] [bug] [Bug]: Gateway crashes with `TypeError: Cannot read properties of null (reading 'setSession')`**: A crash in the gateway related to TLS session resumption after connection drops could lead to service instability. (Fix PR: None reported)

**Medium Severity:**

*   **Issue #3917 [CLOSED] [bug, r: support] [Bug]: windows installer error**: An old bug related to the Windows installer failing due to incorrect npm execution would have prevented installation for Windows users. (Status: Closed, indicating a potential fix might exist but not explicitly linked to a specific recent PR.)
*   **Issue #8044 [OPEN] [bug] [Bug]: Mac OS openclaw - Peekaboo Bridge discovery after the OpenClaw rename**: This bug impacts macOS users' ability to perform UI automation and screenshot operations. (Fix PR: Not explicitly linked, though the author notes a PR exists.)
*   **Issue #12354 [OPEN] [bug, stale] Gateway crashes on network loss instead of graceful degradation**: The gateway failing to handle network loss gracefully is a stability concern. (Fix PR: None reported)
*   **Issue #15582 [OPEN] [bug] [Bug]: Remote CDP (Browserless) blocked with “Port is in use … but not by openclaw” (OpenClaw 2026.2.12)**: Issues with remote CDP connections could disrupt browser automation functionality. (Fix PR: None reported)

Numerous other bugs reported across various channels (Discord, Slack, Telegram, iMessage, etc.) highlight ongoing challenges with message processing, attachment handling, and provider integrations.

**6. Feature Requests & Roadmap Signals**

Several feature requests and ongoing developments provide signals for the project's roadmap:

*   **Enhanced Secrets Management**: The release highlight and PR #27275 clearly indicate a strong focus on improving secrets management, suggesting enhanced security and credential handling will continue to be a priority.
*   **Improved Channel Integrations**: The addition of a QQ channel plugin (PR #28348) and the Telegram improvements (PR #28351 focusing on group verification) demonstrate an effort to broaden and deepen integration with communication platforms.
*   **Performance and Efficiency**: PR #24911 introducing WebSocket for OpenAI Responses API and PR #27918 with the TokenRanger context compression extension point towards a strategic push for performance optimization and cost reduction.
*   **Easier User Onboarding and Development**: The request for prebuilt Android APK releases (Issue #9443) and the continued efforts to make contributions easier (PR #12785 mentioning starter PRs) signal a commitment to accessibility for end-users and developers. The addition of community best practices within the skill-creator (PR #28246) also aligns with this.

**7. User Feedback Summary**

User feedback extracted from issue comments highlights several key pain points and use cases:

*   **Reliability and Stability**: Users frequently report crashes (e.g., Issue #19168, #13136), hangs (Issue #9717, #27984), and silent failures (Issue #20397) across various channels, indicating a need for more robust error handling and stable deployments.
*   **LLM Integration Challenges**: Difficulty in configuring and connecting to LLM providers (Issue #11283, #15582) and issues with specific model features (Issue #9837 regarding Anthropic parameters) are common.
*   **Channel-Specific Functionality Gaps**: Users are encountering limitations with specific channels, such as image handling in Telegram (Issue #7564), group message processing in Signal (Issue #20397), and attachment support in iMessage (Issue #3547).
*   **Usability and UX**: Overwhelming model pickers (Issue #4349) and unclear error messages (Issue #14784) detract from the user experience.
*   **Security and Credential Management**: The ongoing focus on secrets management (highlighted in releases and PRs) directly addresses user needs for secure handling of sensitive information.

**8. Backlog Watch**

*   **Issue #11283 [OPEN] [bug] OpenClaw tries to use local Ollama CLI instead of remote API endpoint**: This is a critical bug impacting LLM provider integration. With 11 comments and no immediate fix PR identified, it warrants attention.
*   **Issue #20397 [OPEN] Signal channel schema missing `groups` config**: This issue directly leads to silent message drops and has significant implications for Signal users. Its high comment count (7) and lack of an apparent fix highlight it as a concern.
*   **Issue #3917 [CLOSED] [bug, r: support] [Bug]: windows installer error**: While closed, the fact that this was a significant installation blocker for Windows users suggests maintaining a robust installer experience is crucial.
*   **Issue #8044 [OPEN] [bug] [Bug]: Mac OS openclaw - Peekaboo Bridge discovery after the OpenClaw rename**: This macOS-specific bug impacts core functionality, and the author's note of an existing PR suggests it might be close to resolution, but the issue itself remains open.

The large number of open and active issues, many with multiple comments, indicates a vibrant community actively reporting and discussing problems. The project's health appears strong due to the high volume of development activity, but continued focus on bug resolution, particularly for stability and core integrations, will be key.

---

## Cross-Ecosystem Comparison

## Cross-Project Comparative Analysis: AI Agent Open-Source Ecosystem (2026-02-27)

This analysis compares the recent community activity and development trajectories of OpenClaw, PicoClaw, and NanoClaw, offering insights into the current state of the AI agent and personal assistant open-source landscape.

### 1. Ecosystem Overview

The open-source landscape for AI agents and personal assistants is characterized by rapid iteration and a strong emphasis on expanding integration capabilities. Projects are actively developing robust channel support, improving LLM provider compatibility, and enhancing core agent functionalities like memory and tool use. This dynamic ecosystem is driven by a community eager to deploy intelligent agents across diverse communication platforms and leverage a growing variety of AI models. The focus remains on making these agents more reliable, versatile, and user-friendly, bridging the gap between complex AI capabilities and everyday practical applications.

### 2. Activity Comparison

| Metric        | OpenClaw                                          | PicoClaw                                             | NanoClaw                                          |
| :------------ | :------------------------------------------------ | :--------------------------------------------------- | :------------------------------------------------ |
| **Issues**    | 282 (Today)                                       | High Volume (Today)                                  | High Volume (Today)                               |
| **PRs**       | 500 (Today)                                       | High Volume with significant updates (Today)         | 46 (Today)                                        |
| **Releases**  | 2 (v2026.2.26, v2026.2.26-beta.1)                   | 0                                                    | 0                                                 |
| **Health**    | High activity, strong development pace, focus on secrets management. | Highly active, expanding channel support, core enhancements. | Significant surge in PRs, expanding integrations, focus on channels. |

### 3. OpenClaw's Position in the Ecosystem

**Advantages vs. Peers:**
OpenClaw stands out with its exceptionally high volume of daily Issues and PRs, indicating a mature and very active development community. Its recent releases, particularly the detailed `openclaw secrets` workflow, demonstrate a focus on enterprise-grade security and credential management, a more advanced and robust offering compared to the initial stages of PicoClaw and NanoClaw. The direct mention of "external secrets management" also suggests a higher level of complexity and integration with external security systems.

**Technical Roadmap Differences:**
While all projects are expanding channel support, OpenClaw's roadmap signals a deeper dive into advanced capabilities. The introduction of WebSocket for OpenAI Responses API for multi-tool-call acceleration, along with an AOMS HTTP memory backend plugin, points towards optimizing performance for complex, high-throughput agent interactions. The focus on native credential management and runtime snapshots suggests a direction geared towards production-ready, secure deployments.

**Community Size Comparison:**
OpenClaw exhibits the largest absolute volume of activity based on the provided data (282 issues and 500 PRs today). While PicoClaw and NanoClaw also show "high volume" and "significant surge" respectively, OpenClaw's raw numbers indicate a proportionally larger developer base or a more intense development sprint cycle.

### 4. Shared Technical Directions

Several common needs and directions are emerging across these projects:

*   **Expanded Channel Integrations:** All three projects are actively working to integrate with a wider array of messaging platforms.
    *   **OpenClaw:** QQ Bot API v2 channel plugin.
    *   **PicoClaw:** Facebook Messenger, Matrix, XMPP, Email channels, highlighting a strategic push for broad interoperability.
    *   **NanoClaw:** Signal integration (highly active PRs), Mattermost, Slack, with WhatsApp setup issues also noted.

*   **Improved LLM Provider Flexibility and Compatibility:** Projects are acknowledging the need to support a diverse range of LLM backends and address specific provider quirks.
    *   **OpenClaw:** Issue #11283 highlights issues with local vs. remote Ollama CLI, indicating a need for more precise configuration of LLM endpoints.
    *   **PicoClaw:** Issue #748 flags Groq API compatibility issues, and PRs for Mistral AI and MiniMax support show a trend towards broader LLM provider integration.
    *   **NanoClaw:** Issue #342 directly addresses Anthropic-compatible API support and `readSecrets()` for third-party providers, aiming for greater flexibility in LLM backend selection.

*   **Enhanced File and Attachment Handling:** The ability to send and receive files is a recurring theme, crucial for practical agent use.
    *   **PicoClaw:** Multiple issues (#619, #441, #348) and a PR (#457) directly address file attachment support, with a critical bug related to media file deletion.
    *   **NanoClaw:** PR #510 introduces an image-sending skill, a step towards richer media capabilities.

*   **Core Stability and Bug Fixes:** All projects are actively addressing bugs that impact basic functionality and user experience.
    *   **OpenClaw:** Significant focus on message delivery reliability (SQLite journals), browser tool stabilization.
    *   **PicoClaw:** Efforts to fix issues with oversized messages, system message filtering, and atomic

---

## Peer Project Detailed Reports

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw Project Digest - 2026-02-27

### 1. Today's Highlights

PicoClaw experienced a highly active development day, with a significant surge in PR activity, particularly in channel integrations and core functionality improvements. While no new releases were made, the substantial number of updated issues and merged PRs indicates strong ongoing development and a responsive community. The project appears to be in a healthy state of active development, with a clear focus on expanding channel support and refining existing features.

### 2. Releases

No new releases were published today.

### 3. Project Progress

A notable amount of progress was made today, primarily through the merging and closing of Pull Requests. Key advancements include:

*   **Expanded Channel Support:** Significant contributions have been made to integrate new communication channels. PRs like #247 (Facebook Messenger), #356 (Matrix channel), #396 (XMPP channel), and #402 (Email channels) demonstrate a strong push to broaden PicoClaw's interoperability.
*   **Core Functionality Enhancements:** Several PRs focus on refining core agent and provider functionalities. Examples include #848 (separating ContextWindow from MaxTokens), #733 (per-model request_timeout for providers), and #766 (OpenRouter provider fix).
*   **Bug Fixes and Stability:** PRs addressing specific issues, such as #251 (Telegram oversized messages), #631 (ignoring system messages in Discord), #644 (filtering empty messages), and #706 (unified atomic file write), highlight efforts to improve reliability and robustness.
*   **CI/CD Improvements:** Contributions like #768 (32-bit ARM builds) and #776 (ARMv81 arch support) indicate a commitment to broader platform compatibility and build system improvements.

The high volume of PR activity suggests strong community involvement and a healthy pace of feature development and bug resolution.

### 4. Community Hot Topics

The community remains highly engaged, with several issues and PRs generating significant discussion:

*   **File Handling and Attachments:**
    *   **Issue #619: Bug: downloaded media files deleted before async consumer reads them** (7 comments) highlights a critical issue with media file handling, impacting multiple channel integrations.
    *   **Issue #441: [type: enhancement] Add file attachment support to message tool for Discord/Telegram** (5 comments) and **Issue #61: Implement file sending and receiving in chat.** (5 comments) represent a recurring user need for robust file management within chat interfaces, with a PR (#457) explicitly addressing #441.
    *   **Issue #348: [type: enhancement, priority: high, type: roadmap] [Feature] General Attachment Support: Handling Files, Documents, and Media across Channels** (2 comments) underscores the strategic importance of this feature.

*   **Channel-Specific Issues:**
    *   **Issue #310: [CLOSED] [type: bug] [BUG] Telegram messages stuck on "Thinking..." due to allowlist mismatch in HandleMessage** (7 comments) points to a specific Telegram integration flaw.
    *   **Issue #639: [OPEN] [type: bug] [BUG] Picoclaw can't send image over discord like OpenClaw** (5 comments) indicates an ongoing challenge with image sending on Discord.
    *   **Issue #381: [OPEN] [type: bug] [BUG]Telegram messages show raw JSON tool calls instead of formatted content** (5 comments) and **Issue #244: Telegram: message too long error on send** (4 comments) reveal persistent issues with message formatting and length limits on Telegram. PR #251 aims to address the length issue.
    *   **Issue #667: [OPEN] [type: bug] [BUG] the telegram channel can't work** (3 comments) points to a critical Telegram bot conflict.

*   **LLM Provider and Model Compatibility:**
    *   **Issue #748: [OPEN] [type: bug] [BUG] Groq API compatibility: tool call format error (tool_use_failed / invalid_request_error)** (4 comments) flags an incompatibility with the Groq API. PR #246 (Mistral AI support) and issues like #675 and #729 (MiniMax support) indicate a need for broader LLM provider integration.
    *   **Issue #783: [OPEN] [type: bug] [BUG] Model list entries with / in model field cause provider resolution failure** (2 comments) highlights a parsing issue within model configurations.

### 5. Bugs & Stability

Several bugs and stability concerns were reported and are being addressed:

*   **Critical/High Severity:**
    *   **Issue #619: Bug: downloaded media files deleted before async consumer reads them** (7 comments): This bug directly impacts media processing and can lead to data loss. No specific fix PR is immediately apparent in the provided data, but it's an active area of discussion.
    *   **Issue #310: [CLOSED] [type: bug] [BUG] Telegram messages stuck on "Thinking..." due to allowlist mismatch in HandleMessage** (7 comments): A critical issue for Telegram users, preventing responses. This has been closed, indicating a resolution.
    *   **Issue #667: [OPEN] [type: bug] [BUG] the telegram channel can't work** (3 comments): "Conflict: terminated by other getUpdates request" suggests a fundamental issue with Telegram bot operation that needs urgent attention.
    *   **Issue #651: [OPEN] [type: bug] [BUG] Incorrect volume mount path for config.json in docker-compose.yml causes container to crash** (2 comments): A show-stopping bug for Docker users, preventing the application from starting.

*   **Medium Severity:**
    *   **Issue #244: Telegram: message too long error on send** (4 comments): Causes failed messages on Telegram. **PR #251** is a direct fix for this issue.
    *   **Issue #639: [OPEN] [type: bug] [BUG] Picoclaw can't send image over discord like OpenClaw** (5 comments): Affects image sharing on Discord.
    *   **Issue #748: [OPEN] [type: bug] [BUG] Groq API compatibility: tool call format error** (4 comments): Prevents usage of the Groq API.

*   **Minor Severity/Informational:**
    *   **Issue #100: [CLOSED] [Possible BUG] "I've completed processing but have no response to give."** (6 comments): While closed, the recurring nature of this message suggests optimization or deeper LLM interaction tuning may still be relevant.
    *   **Issue #285: Discord integration - occasionaly error during responses** (5 comments): Discusses handling long messages on Discord, with potential solutions like splitting messages or file attachments.
    *   **Issue #381: [OPEN] [type: bug] [BUG]Telegram messages show raw JSON tool calls instead of formatted content** (5 comments): Affects user experience on Telegram.
    *   **Issue #783: [OPEN] [type: bug] [BUG] Model list entries with / in model field cause provider resolution failure** (2 comments): A parsing issue affecting model configuration.

### 6. Feature Requests & Roadmap Signals

The project is actively receiving and acting upon feature requests:

*   **High Demand Features:**
    *   **WhatsApp Channel Integration:** **Issue #99: Feat: Add Whatsapp channel** (5 comments) is a clear request for a major communication channel.
    *   **File Attachment Support:** **Issue #61: Implement file sending and receiving in chat.** (5 comments) & **Issue #441: [type: enhancement] Add file attachment support to message tool for Discord/Telegram** (5 comments) are consistently raised. **PR #457** is a direct response to #441.
    *   **New LLM Provider Support:** Requests for **MiniMax** (**Issue #675** & **Issue #729**, both with 3 comments) and potentially others are indicative of a growing need for diverse and cost-effective LLM options. **PR #246** (Mistral AI support) shows prompt action on this.

*   **Roadmap Signals & Potential Next Steps:**
    *   **Channel Expansion:** The numerous PRs for new channels (Facebook Messenger, Matrix, XMPP, Email, Webhook) indicate that channel diversification is a high priority on the roadmap.
    *   **Advanced Tooling & Agent Communication:** **Issue #627: [type: enhancement] [Feature] Add tools/tool_choice controller** (2 comments) and **Issue #669: [type: enhancement] [Feature] remote agent communication** (3 comments) signal a direction towards more sophisticated agent capabilities and inter-agent communication.
    *   **Refactoring for Scalability:** **Issue #621: [type: roadmap] [Refactor]: Channel System Refactoring** (2 comments) with significant progress indicated suggests a focus on improving the underlying architecture for future growth.
    *   **User Experience Enhancements:** **Issue #570: [Feature] Unify slash commands across all channels** (3 comments) and **Issue #577: [Feature] Improve `picoclaw doctor` discoverability** (2 comments) point to efforts to standardize and simplify user interaction.

### 7. User Feedback Summary

User feedback predominantly highlights the desire for broader connectivity and more robust handling of media and files.
*   **Connectivity Needs:** Users are actively seeking to integrate PicoClaw with platforms beyond the commonly supported ones, with WhatsApp being a prominent request.
*   **File Handling Frustrations:** The inability to reliably send and receive files, including media, is a significant pain point, impacting practical usability for tasks involving documents, images, or other data.
*   **Channel-Specific Annoyances:** Users on Telegram and Discord frequently encounter issues related to message length, formatting, and media transfer, indicating areas for focused refinement.
*   **LLM Provider Diversity:** There's a clear interest in leveraging a wider array of LLM providers, likely for cost optimization, performance, or specific model capabilities.
*   **Agent Interaction Issues:** Bugs like messages getting stuck or raw tool calls being displayed directly detract from the "assistant" experience and point to the need for seamless interaction.

### 8. Backlog Watch

*   **Issue #61: Implement file sending and receiving in chat.** (5 comments, last updated 2026-02-26): This long-standing and highly supported feature request (4 👍) is crucial for PicoClaw's utility and needs continued attention. While PR #457 addresses a part of this (#441), a comprehensive solution covering all aspects of file handling remains a high priority.
*   **Issue #9: Urgent need of rate limiters** (3 comments, last updated 2026-02-26): Despite being marked as "Urgent," this issue has received limited attention in terms of proposed solutions or PRs. Ensuring robust rate limiting is essential for API stability and preventing bans, making this a critical oversight for maintainers.
*   **Issue #285: Discord integration - occasionaly error during responses** (5 comments, last updated 2026-02-26): The discussion around long messages and potential solutions like splitting or file attachments has been ongoing. While not explicitly a bug at the moment, it points to a potential recurring issue that needs a well-defined solution.
*   **Issue #440: Replace hard iteration limit with context-window bounding and loop detection** (3 comments, last updated 2026-02-26): The hardcoded iteration limit is described as "too restrictive," leading to legitimate workflows failing. Addressing this is key to enabling more complex agent tasks and preventing premature task termination.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw Project Digest - 2026-02-27

### 1. Today's Highlights

NanoClaw is experiencing a significant surge in development activity today, with a notable increase in Pull Request updates (46 total). This indicates a robust pace of feature development and bug fixing. While no new releases were published, the high volume of PRs suggests that the project is actively moving towards a future release. The project is also seeing substantial community engagement through new issues and ongoing discussions around integration and functionality, demonstrating a healthy and active ecosystem.

### 2. Releases

No new releases were published today.

### 3. Project Progress

Today's activity highlights significant advancements in expanding NanoClaw's integration capabilities and improving its core functionality. Notable PRs that have been merged or closed suggest the following progress:

*   **`/add-slack` Skill Integration**: PR #484 ([feat(skills): add /add-slack skill for Slack channel integration](https://github.com/qwibitai/nanoclaw/pull/484)) has been closed, indicating the successful addition of Slack as a communication channel.
*   **Dependency Security Update**: PR #551 ([Fix Rollup CVE via npm audit fix](https://github.com/qwibitai/nanoclaw/pull/551)) has been opened and updated, addressing a security vulnerability in Rollup, which boosts the overall stability and security posture of the project.
*   **IPC Handling Fix**: PR #550 ([fix(agent-runner): break for-await loop after result to unblock IPC handling](https://github.com/qwibitai/nanoclaw/pull/550)) has been opened, aiming to resolve issues with IPC message handling and prevent unblocking, suggesting improvements to inter-process communication efficiency.
*   **Refactored Channel Architecture**: PR #500 ([refactor: implement pluggable channel architecture and dynamic setup](https://github.com/qwibitai/nanoclaw/pull/500)) has been updated, indicating progress towards a more modular and extensible system for communication channels.

The high volume of open PRs also points to a strong pipeline of new features and fixes under active review and development.

### 4. Community Hot Topics

The project is seeing significant community interest, particularly around expanding communication channels and addressing core agent behavior.

*   **Signal Integration Push**:
    *   **Issue #29 ([enhancement] feat: Add Signal as messaging channel](https://github.com/qwibitai/nanoclaw/issues/29))** (Updated 2026-02-26, 3 comments) is a key feature request to add Signal as a communication channel, mirroring existing integrations like Telegram and Slack.
    *   **PR #499 ([Add Signal as a channel via signal-cli daemon (TCP JSON-RPC).](https://github.com/qwibitai/nanoclaw/pull/499))** (Updated 2026-02-27) and **PR #490 ([feat: add /add-signal skill for Signal channel via signal-cli](https://github.com/qwibitai/nanoclaw/pull/490))** (Updated 2026-02-26) are actively addressing this need with different implementation approaches, indicating strong community desire for Signal support.
*   **Anthropic-compatible API Support**: Issue #342 ([feat: readSecrets() support for third-party Anthropic-compatible API environment variables](https://github.com/qwibitai/nanoclaw/issues/342)) (Updated 2026-02-27, 1 comment) highlights a technical challenge with integrating third-party Anthropic-compatible APIs, specifically concerning how secrets are read. This points to a need for greater flexibility in API provider configurations.
*   **Sabotage Mode Feature**: PR #547 ([feat: add Shabbat mode 🕯️](https://github.com/qwibitai/nanoclaw/pull/547)) (Updated 2026-02-27) introduces a unique "Shabbat mode," which received 0 reactions but indicates a potential use case for scheduled bot downtime and religious observance.

### 5. Bugs & Stability

Several bugs and stability issues have been reported and are being addressed:

*   **Duplicate Messages on Fast Requests**: Issue #529 ([Message loop fallback causes duplicate messages on fast successive requests](https://github.com/qwibitai/nanoclaw/issues/529)) (Reported 2026-02-26) details a bug where rapid successive requests lead to duplicate agent responses. PR #550 ([fix(agent-runner): break for-await loop after result to unblock IPC handling](https://github.com/qwibitai/nanoclaw/pull/550)) appears to be a direct fix for this problem.
*   **Agent Time Confusion**: Issue #526 ([Agent is repeatedly confused about the local time](https://github.com/qwibitai/nanoclaw/issues/526)) (Reported 2026-02-26, 1 👍) highlights an agent confusion regarding local time, impacting its Chronological accuracy. This issue is currently unassigned and lacks a direct fix PR.
*   **Write Access to Read-Only Paths**: Issue #527 ([Main group CLAUDE.md documents write access to read-only paths](https://github.com/qwibitai/nanoclaw/issues/527)) (Reported 2026-02-26) identifies a critical configuration issue where the agent attempts to write to read-only paths within the workspace, leading to failures. This seems to be a configuration or documentation oversight.
*   **WhatsApp Sync Issues**: Issue #537 ([Issues during /setup](https://github.com/qwibitai/nanoclaw/issues/537)) (Reported 2026-02-26) describes setup difficulties, particularly with WhatsApp Sync (groups), requiring manual fixes. This suggests potential friction in the onboarding process.
*   **WhatsApp Pairing Code Issue**: PR #548 ([fix: strip leading + from phone number in WhatsApp pairing code auth](https://github.com/qwibitai/nanoclaw/pull/548)) (Updated 2026-02-26) addresses an issue with WhatsApp pairing code authentication by correctly handling phone number prefixes, improving the setup experience.
*   **Telegram Markdown Rendering**: PR #543 ([fix: render Markdown in Telegram messages](https://github.com/qwibitai/nanoclaw/pull/543)) (Updated 2026-02-26) is working to correctly render Markdown in Telegram messages, addressing a presentation issue for Telegram users.

### 6. Feature Requests & Roadmap Signals

A strong theme of expanding communication channels and integrating with external services is evident in today's feature requests:

*   **New Messaging Channels**: The desire for Signal integration (Issue #29, PRs #499, #490) is clearly a priority. The opening of PR #546 ([Add Mattermost channel skill (/add-mattermost)](https://github.com/qwibitai/nanoclaw/pull/546)) for Mattermost also indicates a continuation of this trend.
*   **Improved LLM Provider Flexibility**: Issue #342 highlights the need for better support of Anthropic-compatible APIs, which is a significant enabler for users on alternative LLM providers.
*   **Enhanced Agent Capabilities**:
    *   PR #510 ([skill: add /add-image-sending](https://github.com/qwibitai/nanoclaw/pull/510)) introduces the ability to send images, a key visual communication enhancement.
    *   PR #545 ([Feat: add Composio skill for 100+ pre-built integrations via MCP](https://github.com/qwibitai/nanoclaw/pull/545)) and PR #498 ([feat: add google-drive skill using @modelcontextprotocol/server-gdrive](https://github.com/qwibitai/nanoclaw/pull/498)) signal a push towards deeper integration with a wide array of applications through Model Context Protocol (MCP) and specific services like Google Drive.
    *   PR #544 ([feat: add skill for claude-mem cross-session memory integration](https://github.com/qwibitai/nanoclaw/pull/544)) proposes enhancing memory persistence across sessions.
*   **Sandbox Options**: Issue #520 ([Proposal: Optional BoxLite sandbox backend (experimental)](https://github.com/qwibitai/nanoclaw/issues/520)) suggests adding BoxLite as an optional sandbox backend, indicating user interest in more robust isolation options.

Based on the PR activity, **Signal integration, Slack integration, and enhancements to LLM provider flexibility appear to be on a fast track to integration.** The Composio and Google Drive integrations also show strong momentum.

### 7. User Feedback Summary

User feedback today primarily revolves around **ease of integration and agent reliability.**

*   **Onboarding Pain Points**: Issue #537 indicates that the setup process, particularly for WhatsApp group sync, can be complex and require manual intervention, suggesting a need for clearer documentation or a more streamlined setup wizard.
*   **Integration Needs**: The ongoing requests for new messaging channels (Signal, Mattermost) and deep integrations with productivity tools (Google Drive, Composio) highlight that users want NanoClaw to be a central hub for their digital interactions and workflows.
*   **Agent Behavior Accuracy**: Issue #526 reveals that users expect consistent and accurate agent behavior, particularly concerning time awareness, and are frustrated when the agent fails to perform reliably in this regard.
*   **Configuration Flexibility**: Issue #342 points to a need for greater flexibility in configuring API providers, allowing users to leverage their preferred LLM services without encountering limitations.

### 8. Backlog Watch

*   **Issue #342 ([feat: readSecrets() support for third-party Anthropic-compatible API environment variables](https://github.com/qwibitai/nanoclaw/issues/342))**: This issue, logged on 2026-02-21 and updated today, addresses a technical limitation that prevents seamless integration with a range of LLM providers. Given its impact on API flexibility, maintainers should prioritize investigating a solution.
*   **Issue #526 ([Agent is repeatedly confused about the local time](https://github.com/qwibitai/nanoclaw/issues/526))**: Reported on 2026-02-26 with a 👍, this is a direct bug impacting the agent's core functionality. The lack of an assignee or related PR warrants attention from the maintainers.
*   **Issue #527 ([Main group CLAUDE.md documents write access to read-only paths](https://github.com/qwibitai/nanoclaw/issues/527))**: This configuration issue prevents agents from performing their tasks correctly. While reported on 2026-02-26, it lacks immediate assignment or a linked PR, indicating a potential oversight.

</details>