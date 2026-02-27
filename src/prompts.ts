/**
 * LLM prompt builders and item formatting.
 */

import type { RepoConfig, GitHubItem, GitHubRelease } from "./github.ts";
import type { WebFetchResult } from "./web.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RepoDigest {
  config: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
  summary: string;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

export function formatItem(item: GitHubItem): string {
  const labels   = item.labels.map((l) => l.name).join(", ");
  const labelStr = labels ? ` [${labels}]` : "";
  const body     = (item.body ?? "").replace(/\n/g, " ").trim().slice(0, 300);
  const ellipsis = (item.body ?? "").length > 300 ? "..." : "";
  return [
    `#${item.number} [${item.state.toUpperCase()}]${labelStr} ${item.title}`,
    `  Author: @${item.user.login} | Created: ${item.created_at.slice(0, 10)} | Updated: ${item.updated_at.slice(0, 10)} | Comments: ${item.comments} | 👍: ${item.reactions?.["+1"] ?? 0}`,
    `  URL: ${item.html_url}`,
    `  Summary: ${body}${ellipsis}`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Sampling helpers (shared)
// ---------------------------------------------------------------------------

const CLI_ISSUE_LIMIT = 30;
const CLI_PR_LIMIT    = 20;

/** Sort by comment count desc, take top N. */
function topN(items: GitHubItem[], n: number): GitHubItem[] {
  return [...items].sort((a, b) => b.comments - a.comments).slice(0, n);
}

function sampleNote(total: number, sampled: number, label: string): string {
  return total > sampled
    ? `(${total} total; showing top ${sampled} by comment count)`
    : `(${total} total)`;
}

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------

export function buildCliPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
): string {
  const sampledIssues = topN(issues, CLI_ISSUE_LIMIT);
  const sampledPrs    = topN(prs,    CLI_PR_LIMIT);

  const issuesText   = sampledIssues.map(formatItem).join("\n") || "None";
  const prsText      = sampledPrs.map(formatItem).join("\n") || "None";
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : "None";

  const issueNote = sampleNote(issues.length, sampledIssues.length, "issues");
  const prNote    = sampleNote(prs.length,    sampledPrs.length,    "prs");

  return `You are a technical analyst. Generate a dense, scannable ${cfg.name} digest for ${dateStr} from the data below.

# Data: github.com/${cfg.repo}

## Releases (past 24h)
${releasesText}

## Issues (past 24h) ${issueNote}
${issuesText}

## PRs (past 24h) ${prNote}
${prsText}

---

Output these sections in **exactly** this format. No intro text, no filler.

### Highlights
- (2-3 bullet points, one sentence each, most important developments only)

### Releases
(Version + one-line summary each. Omit section if none.)

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
(Top 8 by engagement. "Why it matters" must be ≤15 words.)

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
(Top 8 by significance. "What it does" must be ≤15 words.)

### Trends
- (5-7 bullet points combining feature requests and recurring pain points. One line each. Tag each as [feature] or [pain].)

Rules: No prose paragraphs. No "why the community is responding" essays. Every line earns its place with signal, not volume. Include GitHub links in issue/PR numbers.
`;
}

const PEER_ISSUE_LIMIT = 30;
const PEER_PR_LIMIT    = 20;

export function buildPeerPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  issueLimit = PEER_ISSUE_LIMIT,
  prLimit = PEER_PR_LIMIT,
): string {
  const totalIssues = issues.length;
  const totalPrs    = prs.length;

  const sampledIssues = topN(issues, issueLimit);
  const sampledPrs    = topN(prs,    prLimit);

  const issuesText   = sampledIssues.map(formatItem).join("\n") || "None";
  const prsText      = sampledPrs.map(formatItem).join("\n") || "None";
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : "None";

  const openIssues   = issues.filter((i) => i.state === "open").length;
  const closedIssues = issues.filter((i) => i.state === "closed").length;
  const openPrs      = prs.filter((p) => p.state === "open").length;
  const mergedPrs    = prs.filter((p) => p.state === "closed").length;

  const issueSampleNote = totalIssues > issueLimit
    ? `(${totalIssues} total; showing top ${sampledIssues.length} by comment count)`
    : `(${totalIssues} total)`;
  const prSampleNote = totalPrs > prLimit
    ? `(${totalPrs} total; showing top ${sampledPrs.length} by comment count)`
    : `(${totalPrs} total)`;

  return `You are a project analyst. Generate a dense, scannable ${cfg.name} digest for ${dateStr}.

# Stats
- Issues (24h): ${totalIssues} (open: ${openIssues}, closed: ${closedIssues})
- PRs (24h): ${totalPrs} (open: ${openPrs}, merged/closed: ${mergedPrs})
- Releases: ${releases.length}

## Releases
${releasesText}

## Issues ${issueSampleNote}
${issuesText}

## PRs ${prSampleNote}
${prsText}

---

Output these sections in **exactly** this format. No intro text, no filler.

### Highlights
- (2-3 bullet points, one sentence each)

### Releases
(Version + one-line summary. Omit section if none.)

### Hot Issues
| # | Title | 💬 | 👍 | Why it matters |
|---|-------|----|----|----------------|
(Top 8. "Why it matters" ≤15 words.)

### Key PRs
| # | Title | Status | What it does |
|---|-------|--------|--------------|
(Top 8. "What it does" ≤15 words.)

### Bugs
| # | Title | Severity | Fix PR? |
|---|-------|----------|---------|
(Top 5 bugs/crashes/regressions. Severity: critical/high/medium.)

### Trends
- (5-7 bullets combining feature requests and pain points. One line each.)

Rules: No prose paragraphs. No essays. Keep it scannable. Include GitHub links in issue/PR numbers.
`;
}

export function buildPeersComparisonPrompt(
  openclawDigest: RepoDigest,
  peerDigests: RepoDigest[],
  dateStr: string,
): string {
  const openclawSection =
    `## OpenClaw (primary reference, github.com/${openclawDigest.config.repo})\n${openclawDigest.summary}`;

  const peerSections = peerDigests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\nNo activity in the past 24 hours.`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  return `You are a technical analyst. Generate a dense cross-project comparison for ${dateStr}.

${openclawSection}

---

${peerSections}

---

Output these sections in **exactly** this format. No intro text, no filler.

### Ecosystem Snapshot
(2-3 sentences max on the overall landscape.)

### Activity
| Project | Issues | PRs | Releases | Momentum |
|---------|--------|-----|----------|----------|
(One row per project. Momentum: 🔴 slow / 🟡 steady / 🟢 rapid.)

### OpenClaw vs Peers
- (3-5 bullets: advantages, gaps, and roadmap differences)

### Shared Directions
- (4-6 bullets: common needs across projects. Tag which projects in parentheses.)

### Trend Signals
- (3-5 bullets: industry-level trends emerging from community data)

Rules: No prose paragraphs. No redundant sections. Bullets and tables only.
`;
}

export function buildSkillsPrompt(
  prs: GitHubItem[],
  issues: GitHubItem[],
  dateStr: string,
): string {
  const topPrs    = topN(prs,    20);
  const topIssues = topN(issues, 15);

  const prsText    = topPrs.map(formatItem).join("\n") || "None";
  const issuesText = topIssues.map(formatItem).join("\n") || "None";

  return `You are a technical analyst. Generate a dense Claude Code Skills digest for ${dateStr}.

Data: github.com/anthropics/skills (official Skills repo. PRs = skill submissions, Issues = requests/bugs.)

## Trending PRs (${prs.length} total, top ${topPrs.length})
${prsText}

## Issues (${issues.length} total, top ${topIssues.length})
${issuesText}

---

Output these sections in **exactly** this format. No intro text, no filler.

### Top Skills
| # | Skill Name | 💬 | Status | Purpose (≤15 words) |
|---|-----------|-----|--------|---------------------|
(Top 6 PRs by engagement.)

### Demand Trends
- (4-6 bullets: most anticipated skill directions from Issues. One line each.)

### Pending Skills
- (3-5 bullets: actively discussed unmerged PRs likely to land soon. Link + one-liner.)

### TL;DR
(One sentence: the community's top ask at the Skills layer right now.)

Rules: No prose. No essays. Tables and bullets only. Include GitHub links.
`;
}

export function buildComparisonPrompt(digests: RepoDigest[], dateStr: string): string {
  const sections = digests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\nNo activity in the past 24 hours.`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  return `You are a technical analyst. Generate a dense cross-tool comparison for AI CLI tools as of ${dateStr}.

${sections}

---

Output these sections in **exactly** this format. No intro text, no filler.

### Ecosystem Snapshot
(2-3 sentences max.)

### Activity
| Tool | Issues | PRs | Releases | Momentum |
|------|--------|-----|----------|----------|
(One row per tool. Momentum: 🔴 slow / 🟡 steady / 🟢 rapid.)

### Shared Directions
- (4-6 bullets: common needs across tools. Tag which tools in parentheses.)

### Differentiation
| Tool | Focus | Target Users | Approach |
|------|-------|-------------|----------|
(One row per tool. Keep cells ≤10 words.)

### Trend Signals
- (3-5 bullets: industry trends from community data)

Rules: No prose paragraphs. Tables and bullets only.
`;
}

export function buildWebReportPrompt(results: WebFetchResult[], dateStr: string): string {
  const isAnyFirstRun = results.some((r) => r.isFirstRun);

  const siteSections = results
    .map(({ siteName, isFirstRun, newItems, totalDiscovered }) => {
      const mode = isFirstRun
        ? `First-run full crawl (${totalDiscovered} URLs in sitemap; showing the ${newItems.length} most recent articles)`
        : `Incremental update: ${newItems.length} new articles today`;

      if (newItems.length === 0) return `## ${siteName}\n\n(${mode}; no content available for analysis.)`;

      const itemsText = newItems
        .map((item) =>
          [
            `### [${item.title || item.url}](${item.url})`,
            `- Category: ${item.category} | Published/Updated: ${item.lastmod.slice(0, 10) || "unknown"}`,
            `- Content excerpt: ${item.content || "(unable to extract text content)"}`,
          ].join("\n"),
        )
        .join("\n\n");

      return `## ${siteName} (${mode})\n\n${itemsText}`;
    })
    .join("\n\n---\n\n");

  const firstRunNote = isAnyFirstRun
    ? "This is the first full crawl. Please focus on mapping the content landscape, historical arc, and core themes of each site rather than individual articles."
    : "This is an incremental update. Please focus on today's new content and assess its strategic significance in context.";

  return `You are a content analyst. Generate a dense AI content tracker report for ${dateStr}.

${firstRunNote}

${siteSections}

---

Output these sections in **exactly** this format. No intro text, no filler.

### Highlights
- (3-4 bullet points: most important new content across both companies. One sentence each.)

### Anthropic
| Title | Category | Date | Key takeaway (≤15 words) |
|-------|----------|------|--------------------------|
(All new articles. Include link in title. Write "No new content" if none.)

### OpenAI
| Title | Category | Date | Key takeaway (≤15 words) |
|-------|----------|------|--------------------------|
(All new articles. Include link in title. Group duplicates into one row.)

### Signals
- (3-5 bullets: strategic signals from publishing patterns, new terms, theme clusters, competitive moves)

${isAnyFirstRun ? "### Content Landscape\n(First-run only: 3-4 bullets on volume, category distribution, and content strategy per company.)\n\n" : ""}Rules: No prose paragraphs. No per-article essays. Tables and bullets only. Every item must link to source.
`;
}
