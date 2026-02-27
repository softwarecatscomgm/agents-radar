# OpenClaw Project Daily Digest 2026-02-23

> Data source: [openclaw/openclaw](https://github.com/openclaw/openclaw) | Issues: 500 | PRs: 500 | Generated: 2026-02-23 13:19 UTC

# OpenClaw Project Daily Digest | 2026-02-23

## 1. Today at a Glance

OpenClaw showed **extremely high activity** today, with 500 Issue updates in 24 hours (247 new/active, 253 closed), 500 PR updates (366 pending merge, 134 merged/closed), and 1 version release. The community focused on **v2026.2.22 version adaptation issues** — numerous users reported Chrome extension browser relay authentication changes (HMAC-derived tokens), Telegram/WhatsApp and other channel plugin loading failures, and Windows environment configuration validation issues. Meanwhile, Mistral provider support officially launched, and multi-language memory search expansion (Turkish, Danish, etc.) continued to progress. Overall project health is good, but attention is needed on regression issue handling efficiency after the release.

---

## 2. Version Releases

### v2026.2.22: openclaw 2026.2.22
**Release link**: https://github.com/openclaw/openclaw/releases/tag/v2026.2.22

| Change Item | Details |
|--------|------|
| **New Feature** | **Mistral provider support** (#23845) — includes memory embedding and voice support |
| **Core Update** | New optional built-in auto-updater (`update.auto.*`), disabled by default, supports stable release delay+jitter and beta hourly checks |
| **Breaking Change** | **Browser extension relay authentication mechanism change** — switched from raw gateway token to HMAC-SHA256 derived token, causing many users' configurations to become invalid |
| **Migration Note** | Users need to reconfigure tokens on the Chrome extension options page, or wait for subsequent PR to restore backward compatibility (see #24489, #24436) |

---

## 3. Project Progress

### Important PRs Merged/Closed Today

| PR | Author | Core Contribution | Project Advancement |
|:---|:---|:---|:---|
| [#24479](https://github.com/openclaw/openclaw/pull/24479) | @merc1305 | **Security fix**: Sanitize sensitive keys in dynamic config paths (`env.GROQ_API_KEY`, etc.) | Resolves `config.get` leaking API keys, raises security baseline |
| [#24471](https://github.com/openclaw/openclaw/pull/24471) | @gitwithuli | **Internationalization**: Add Turkish stopword filtering, expand multi-language memory search support | Memory search language coverage increased to 6 (Spanish/Portuguese/Japanese/Korean/Arabic/Turkish) |
| [#24335](https://github.com/openclaw/openclaw/pull/24335) | @Kay-051 | **Fix**: Prevent reasoning content leaking to WhatsApp/Telegram when `thinking=low` | Resolves #24290 regression, improves message privacy |
| [#24413](https://github.com/openclaw/openclaw/pull/24413) | @justinhuangcode | **Fix**: Stop misidentifying macOS menu bar app as competing gateway service | Eliminates #23846 false positive, improves macOS user experience |
| [#24485](https://github.com/openclaw/openclaw/pull/24485) | @chilu18 | **Fix**: Replace stale doctor/restart command prompts | Resolves misleading CLI prompts from #24351 and #24220 |
| [#24431](https://github.com/openclaw/openclaw/pull/24431) | @s1korrrr | **CI fix**: Install PyYAML in skills-python job | Fixes #24342 test failure, ensures skill system CI stability |
| [#24410](https://github.com/openclaw/openclaw/pull/24410) | @chilu18 | **CI fix**: Same as above (duplicate submission, merged) | — |

**Overall progress**: Today's merged PRs primarily focused on **security hardening** (key sanitization), **internationalization expansion** (Turkish), **version regression fixes** (reasoning leaks, false positive elimination), and **infrastructure stability** (CI fixes). The project is making steady progress in multi-language support and security compliance, but the adaptation issues caused by v2026.2.22's authentication changes still require significant community resources to address.

---

## 4. Community Hotspots

### Most Actively Discussed Issues

| Issue | Comments | Core Demand | Analysis |
|:---|:---|:---|:---|
| [#23861](https://github.com/openclaw/openclaw/issues/23861) | **10** | Raspberry Pi installation failure: `npm install` breaks the system | **Edge device deployment pain point** — Users report 3 Pi devices broken during installation, reflecting insufficient robustness of installation scripts for ARM/embedded environments |
| [#8576](https://github.com/openclaw/openclaw/issues/8576) | **29** | Feishu plugin installation error `@openclaw/feishu` | **Critical need for Chinese enterprise users** — Feishu integration issues have long remained unresolved, 29 comments show enterprise deployment is blocked, risk of being replaced by competitors |
| [#17019](https://github.com/openclaw/openclaw/issues/17019) | **27** | `400 Item 'rs_...' of type 'reasoning' was provided without its required following item` | **Reasoning model compatibility** — High-frequency technical error affecting reasoning functionality for models like Claude, users report recurrence multiple times |
| [#7309](https://github.com/openclaw/openclaw/issues/7309) | **5** | Support DeepSeek API as a first-class LLM provider | **Domestic model demand** — 12 👍, users want native DeepSeek support instead of manual configuration, reflecting Chinese market demand |
| [#13248](https://github.com/openclaw/openclaw/issues/13248) | **7** | Full MCP (Model Context Protocol) support | **Ecosystem expansion demand** — 12 👍, users notice the codebase already has MCP infrastructure but lacks user-level configuration, hoping to unlock standardized tool invocation |

**Underlying demand**: The core tension in the community is **"feature breadth vs. stability depth"** — users want rapid integration of new models (DeepSeek, Gemini 3.1) and protocols (MCP), while being held back by regression issues in basic features (installation, authentication, channel plugins). Enterprise users' (Feishu, DingTalk) integration experience directly influences adoption decisions.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Description | Status | Fix PR |
|:---|:---|:---|:---|:---|
| **P0 - Blocker** | [#24395](https://github.com/openclaw/openclaw/issues/24395) | **All channel plugins disabled in v2026.2.22** — config writes to `channels.<id>.enabled` but loader reads `plugins.entries.<id>.enabled` | 🔴 Open | [#24428](https://github.com/openclaw/openclaw/pull/24428), [#24231](https://github.com/openclaw/openclaw/pull/24231) |
| **P0 - Blocker** | [#24358](https://github.com/openclaw/openclaw/issues/24358) | **Chrome extension relay authentication failure** — HMAC token change causes "Gateway token rejected" | 🔴 Open | [#24489](https://github.com/openclaw/openclaw/pull/24489), [#24436](https://github.com/openclaw/openclaw/pull/24436), [#24437](https://github.com/openclaw/openclaw/pull/24437) |
| **P1 - High** | [#24499](https://github.com/openclaw/openclaw/issues/24499) | OpenAI adapter sends `ROLE_UNSPECIFIED` causing Moonshot/Kimi API 400 error | 🟡 Open | None |
| **P1 - High** | [#24496](https://github.com/openclaw/openclaw/issues/24496) | Windows 11 ByteString error — character value 1047 > 255 | 🟡 Open | None |
| **P1 - High** | [#24263](https://github.com/openclaw/openclaw/issues/24263) | WhatsApp channel config broken on Windows — `Unrecognized key: "enabled"` | 🟡 Open | [#24300](https://github.com/openclaw/openclaw/pull/24300) |
| **P2 - Medium** | [#24494](https://github.com/openclaw/openclaw/issues/24494) | macOS browser control service not listening on port base+2 | 🟡 Open | None |
| **P2 - Medium** | [#24414](https://github.com/openclaw/openclaw/issues/24414) | Desktop app "Check for Updates" shows old version as new version | 🟡 Open | None |
| **P2 - Medium** | [#24374](https://github.com/openclaw/openclaw/issues/24374) | MS Teams channel `startAccount` resolves immediately causing restart loop | 🟡 Open | [#24391](https://github.com/openclaw/openclaw/pull/24391) |

**Stability assessment**: The v2026.2.22 release triggered **2 P0 blocker issues** (channel plugins disabled, extension authentication failure), directly affecting core user experience. 5+ PRs have been submitted for targeted fixes, but the merge cadence needs to accelerate. Regression test coverage for Windows platform and third-party API adaptation (Moonshot) is insufficient.

---

## 6. Feature Requests & Roadmap Signals

| Feature Request | Heat | Technical Feasibility | Signal for Next Version Inclusion |
|:---|:---|:---|:---|
| **DeepSeek native support** (#7309) | 12 👍 | High (OpenAI-compatible) | 🔶 Possible — High community demand, requires official provider registration |
| **Full MCP support** (#13248) | 12 👍 | Medium (infrastructure exists) | 🔶 Possible — Codebase already has `mcporter`, needs user configuration layer |
| **Task-level intelligent model routing** (#19166) | 5 comments | Medium | 🔶 Possible — Aligned with existing `model-router` plugin direction |
| **reasoningDefault config key** (#24491, #24161) | 2 duplicates | High | 🟢 High probability — Simple config extension, PR ready |
| **GitHub native channel** (#24386) | 0 👍 | Medium | 🔶 Possible — Enterprise scenario, requires webhook + API bidirectional support |
| **Mobile-friendly Web UI** (#22590) | 3 comments | Medium | 🔶 Possible — Specific demand from Chinese users |
| **Agent-level tool permission restrictions** (#24372) | 0 👍 | Medium | 🔶 Possible — Security enhancement, essential for multi-agent scenarios |
| **Session archiving/persistence** (#24066) | 2 comments | Medium | 🔶 Possible — Related to existing compaction/memory system |

**Roadmap signals**: The next version (v2026.2.23 or v2026.3.x) will likely focus on:
1. **Configuration experience optimization** (`reasoningDefault`, config validation)
2. **Chinese ecosystem adaptation** (DeepSeek, mobile Web UI, Feishu stability)
3. **Enterprise security** (tool permissions, session isolation)

---

## 7. User Feedback Summary

### Real Pain Points

| Scenario | Feedback Source | Core Dissatisfaction |
|:---|:---|:---|
| **Config invalidated after version upgrade** | #24395, #24358, #24414 | "Every update breaks existing settings" — trust erosion |
| **Poor cross-platform consistency** | #24263 (Windows), #24494 (macOS) | "Windows always has more issues" — platform fairness questioned |
| **Misleading error messages** | #24220, #24351 | Suggested commands don't exist, debugging time wasted |
| **Fragile enterprise integrations** | #8576 (Feishu), #24374 (MS Teams) | Enterprise IM integrations unstable, affects production deployments |
| **Security vs. convenience balance** | #24384 (API key leak) | Status messages leak sensitive information, security awareness awakening |

### Satisfaction Points
- **Multi-language expansion is proactive** (Turkish, Danish PRs receive fast responses)
- **Auto-updater is live** (long-requested feature)
- **Mistral support is timely** (quick follow-up on new models)

---

## 8. Pending Backlog

### Long-Unaddressed Important Issues

| Issue | Created | Last Updated | Risk | Suggested Action |
|:---|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) Internationalization (i18n) & localization support | 2026-01-28 | Today | 66 comments, 0 👍, officially stated "no bandwidth to support" | Establish community translation program, official team provides technical framework |
| [#5380](https://github.com/openclaw/openclaw/pull/5380) Preserve recent messages when compaction fails | 2026-01-31 | Today | Experience issue, risk of user data loss | Evaluate for merge, or incorporate into compaction refactoring |
| [#7175](https://github.com/openclaw/openclaw/issues/7175) Pre-compaction hook | 2026-02-02 | Today | Data protection requirement | Coordinate design with #13032 (`session:before_end` hook) |
| [#7598](https://github.com/openclaw/openclaw/issues/7598) Session history backup layer | 2026-02-03 | Today | Core reliability | Escalate priority, related to #24066 session archiving |
| [#8255](https://github.com/openclaw/openclaw/issues/8255) Workspace file post-write hooks | 2026-02-03 | Today | Automation workflows | Evaluate integration with skills system |

**Maintainer reminder**: Among the backlog issues, **#3460 Internationalization** and **#7598 Session backup** are architecture-level requirements. It is recommended to explicitly address them in the next quarter's roadmap to prevent community contributors from leaving due to lack of direction.

---

*Daily digest generated: 2026-02-23 | Data source: OpenClaw GitHub repository*

---
*This daily digest was automatically generated by [agents-radar](https://github.com/duanyytop/agents-radar).*