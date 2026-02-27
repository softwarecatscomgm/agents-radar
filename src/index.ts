/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   ANTHROPIC_API_KEY   - API key (Anthropic or Kimi Code)
 *   ANTHROPIC_BASE_URL  - Endpoint override (e.g. https://api.kimi.com/coding/)
 *   ANTHROPIC_MODEL     - Model name (default: claude-sonnet-4-6)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 */

import {
  type RepoConfig,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
  buildWebReportPrompt,
} from "./prompts.ts";
import { callLlm, saveFile, autoGenFooter } from "./report.ts";
import { loadWebState, saveWebState, fetchSiteContent, type WebFetchResult } from "./web.ts";

// ---------------------------------------------------------------------------
// Repo config
// ---------------------------------------------------------------------------

/** AI CLI tools — included in per-tool digests and cross-tool comparison. */
const CLI_REPOS: RepoConfig[] = [
  { id: "claude-code", repo: "anthropics/claude-code",   name: "Claude Code"   },
  { id: "codex",       repo: "openai/codex",             name: "OpenAI Codex"  },
  // { id: "gemini-cli",  repo: "google-gemini/gemini-cli", name: "Gemini CLI"    },
  // { id: "kimi-cli",    repo: "MoonshotAI/kimi-cli",      name: "Kimi Code CLI" },
  { id: "opencode",    repo: "anomalyco/opencode",       name: "OpenCode"      },
  // { id: "qwen-code",   repo: "QwenLM/qwen-code",         name: "Qwen Code"     },
];

/** OpenClaw — high-volume project tracked separately with its own prompt. */
const OPENCLAW: RepoConfig = {
  id: "openclaw",
  repo: "openclaw/openclaw",
  name: "OpenClaw",
  paginated: true,
};

/** Peer projects in the personal AI assistant / agent space — tracked for cross-ecosystem comparison. */
const OPENCLAW_PEERS: RepoConfig[] = [
  // { id: "zeroclaw",  repo: "zeroclaw-labs/zeroclaw",   name: "Zeroclaw"  },
  // { id: "easyclaw",  repo: "gaoyangz77/easyclaw",       name: "EasyClaw"  },
  // { id: "lobsterai", repo: "netease-youdao/LobsterAI",  name: "LobsterAI" },
  // { id: "zeptoclaw", repo: "qhkm/zeptoclaw",            name: "ZeptoClaw" },
  // { id: "nanobot",   repo: "HKUDS/nanobot",             name: "NanoBot",  paginated: true },
  { id: "picoclaw",  repo: "sipeed/picoclaw",            name: "PicoClaw", paginated: true },
  { id: "nanoclaw",  repo: "qwibitai/nanoclaw",          name: "NanoClaw"  },
  // { id: "ironclaw",  repo: "nearai/ironclaw",            name: "IronClaw"  },
  // { id: "tinyclaw",  repo: "TinyAGI/tinyclaw",           name: "TinyClaw"  },
];

/** Claude Code Skills — trending skills tracked separately, no date filter. */
const CLAUDE_SKILLS_REPO = "anthropics/skills";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function parseIssueFlags(raw: string): Set<string> {
  const trimmed = raw.trim().toLowerCase();
  if (!trimmed || trimmed === "none") return new Set();
  if (trimmed === "all") return new Set(["web", "cli", "agents"]);
  return new Set(trimmed.split(",").map(s => s.trim()).filter(s => ["web", "cli", "agents"].includes(s)));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");
  // requireEnv("ANTHROPIC_API_KEY");

  const now     = new Date();
  const since   = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = new Date(now.getTime() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const utcStr  = now.toISOString().slice(0, 16).replace("T", " ");
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  const issueFlags = parseIssueFlags(process.env["AR_ISSUES"] ?? "");

  const baseUrl = process.env["ANTHROPIC_BASE_URL"] ?? "api.anthropic.com";
  console.log(`[${now.toISOString()}] Starting digest | endpoint: ${baseUrl}`);

  // ── 1. Fetch all repos + web content in parallel ───────────────────────────

  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  console.log(`  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web`);

  const webState = loadWebState();

  const [fetched, skillsData, webResults] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        const [issuesRaw, prs, releases] = await Promise.all([
          fetchRecentItems(cfg, "issues", since),
          fetchRecentItems(cfg, "pulls", since),
          fetchRecentReleases(cfg.repo, since),
        ]);
        const issues = issuesRaw.filter((i) => !i.pull_request);
        console.log(`  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`);
        return { cfg, issues, prs, releases };
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO).then((d) => {
      console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
      return d;
    }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return { site: "anthropic", siteName: "Anthropic (Claude)", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
  ]);

  const peerIds         = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli      = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers    = fetched.filter((f) => peerIds.has(f.cfg.id));

  // ── 2. Generate CLI summaries + OpenClaw summary + Skills summary + Peer summaries in parallel

  const [cliDigests, openclawSummary, skillsSummary, peerDigests] = await Promise.all([
    Promise.all(
      fetchedCli.map(async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: "No activity in the past 24 hours." };
        }
        console.log(`  [${cfg.id}] Calling LLM for summary...`);
        try {
          const summary = await callLlm(buildCliPrompt(cfg, issues, prs, releases, dateStr));
          return { config: cfg, issues, prs, releases, summary };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: "⚠️ Summary generation failed." };
        }
      }),
    ),
    (async () => {
      const { cfg, issues, prs, releases } = fetchedOpenclaw;
      const hasData = issues.length || prs.length || releases.length;
      if (!hasData) {
        console.log(`  [openclaw] No activity, skipping LLM call`);
        return "No activity in the past 24 hours.";
      }
      console.log(`  [openclaw] Calling LLM for OpenClaw report...`);
      try {
        return await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr, 50, 30));
      } catch (err) {
        console.error(`  [openclaw] LLM call failed: ${err}`);
        return "⚠️ Summary generation failed.";
      }
    })(),
    (async () => {
      console.log("  [claude-code-skills] Calling LLM for skills report...");
      try {
        return await callLlm(buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr));
      } catch (err) {
        console.error(`  [claude-code-skills] LLM call failed: ${err}`);
        return "⚠️ Skills summary generation failed.";
      }
    })(),
    Promise.all(
      fetchedPeers.map(async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: "No activity in the past 24 hours." };
        }
        console.log(`  [${cfg.id}] Calling LLM for peer summary...`);
        try {
          return { config: cfg, issues, prs, releases,
                   summary: await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr)) };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: "⚠️ Summary generation failed." };
        }
      }),
    ),
  ]);

  // Build openclawDigest for peers comparison (reuses openclawSummary — zero extra LLM call)
  const openclawDigest: RepoDigest = {
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: openclawSummary,
  };

  // ── 3. Generate CLI comparison + peers comparison in parallel ──────────────

  console.log("  Calling LLM for CLI comparative analysis + peers comparison...");
  const [comparison, peersComparison] = await Promise.all([
    callLlm(buildComparisonPrompt(cliDigests, dateStr)),
    callLlm(buildPeersComparisonPrompt(openclawDigest, peerDigests, dateStr)),
  ]);

  const footer = autoGenFooter();

  // ── 4. Build merged CLI digest (comparison + per-tool details) ─────────────

  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${CLAUDE_SKILLS_REPO})`;

  const toolSections = cliDigests
    .map((d) => {
      // For Claude Code, prepend the skills section at the top of the details block
      const skillsSection = d.config.id === "claude-code"
        ? `## Claude Code Skills Community Highlights\n\n> Data source: [anthropics/skills](https://github.com/${CLAUDE_SKILLS_REPO})\n\n${skillsSummary}\n\n---\n\n`
        : "";
      return [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        skillsSection + d.summary,
        ``,
        `</details>`,
      ].join("\n");
    })
    .join("\n\n");

  const digestContent =
    `# AI CLI Tools Community Digest ${dateStr}\n\n` +
    `> Generated: ${utcStr} UTC | Tools tracked: ${cliDigests.length}\n\n` +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## Cross-Tool Comparison\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## Per-Tool Detailed Reports\n\n` +
    toolSections +
    footer;

  console.log(`  Saved ${saveFile(digestContent, dateStr, "ai-cli.md")}`);

  // ── 5. Save merged OpenClaw + peers report ────────────────────────────────

  const { issues: ocIssues, prs: ocPrs, releases: ocReleases } = fetchedOpenclaw;

  const peersRepoLinks =
    `- [OpenClaw](https://github.com/${OPENCLAW.repo})\n` +
    OPENCLAW_PEERS.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

  const peerDetailSections = peerDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  const openclawContent =
    `# OpenClaw Ecosystem Digest ${dateStr}\n\n` +
    `> Issues: ${ocIssues.length} | PRs: ${ocPrs.length} | Projects tracked: ${1 + OPENCLAW_PEERS.length} | Generated: ${utcStr} UTC\n\n` +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    `## OpenClaw Deep Report\n\n` +
    openclawSummary +
    `\n\n---\n\n` +
    `## Cross-Ecosystem Comparison\n\n` +
    peersComparison +
    `\n\n---\n\n` +
    `## Peer Project Detailed Reports\n\n` +
    peerDetailSections +
    footer;

  console.log(`  Saved ${saveFile(openclawContent, dateStr, "ai-agents.md")}`);

  // ── 6. Web report ──────────────────────────────────────────────────────────

  const hasNewWebContent = webResults.some((r) => r.newItems.length > 0);
  let webReportPath = "";

  if (hasNewWebContent) {
    console.log("  [web] Calling LLM for web content report...");
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr), 8192);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const mode = isFirstRun ? "First-run full crawl" : "Incremental update";
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const webContent =
        `# AI Official Content Tracker Report ${dateStr}\n\n` +
        `> ${mode} | New articles: ${totalNew} | Generated: ${utcStr} UTC\n\n` +
        `Data sources:\n` +
        `- Anthropic: [anthropic.com](https://www.anthropic.com) — ` +
          `${webResults.find((r) => r.site === "anthropic")?.newItems.length ?? 0} new articles` +
          ` (${webResults.find((r) => r.site === "anthropic")?.totalDiscovered ?? 0} total in sitemap)\n` +
        `- OpenAI: [openai.com](https://openai.com) — ` +
          `${webResults.find((r) => r.site === "openai")?.newItems.length ?? 0} new articles` +
          ` (${webResults.find((r) => r.site === "openai")?.totalDiscovered ?? 0} total in sitemap)\n\n` +
        `---\n\n` +
        webSummary +
        footer;

      webReportPath = saveFile(webContent, dateStr, "ai-web.md");
      console.log(`  Saved ${webReportPath}`);

      if (digestRepo && issueFlags.has("web")) {
        const webUrl = await createGitHubIssue(
          `🌐 AI Official Content Tracker ${dateStr}${isFirstRun ? " (first-run full crawl)" : ""}`,
          webContent,
          "web",
        );
        console.log(`  Created web issue: ${webUrl}`);
      }
    } catch (err) {
      console.error(`  [web] Report generation failed: ${err}`);
    }
  } else {
    console.log("  [web] No new content detected, skipping report.");
  }

  // Persist updated web state (runs regardless of whether a report was generated)
  saveWebState(webState);
  console.log("  [web] State saved.");

  // ── 7. Create GitHub issues (CLI + OpenClaw) ────────────────────────────────

  if (digestRepo && issueFlags.has("cli")) {
    const cliUrl = await createGitHubIssue(`📊 AI CLI Tools Community Digest ${dateStr}`, digestContent, "digest");
    console.log(`  Created CLI issue: ${cliUrl}`);
  }

  if (digestRepo && issueFlags.has("agents")) {
    const openclawUrl = await createGitHubIssue(`🦞 OpenClaw Ecosystem Digest ${dateStr}`, openclawContent, "openclaw");
    console.log(`  Created OpenClaw issue: ${openclawUrl}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
