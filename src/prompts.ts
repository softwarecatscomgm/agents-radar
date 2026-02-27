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

  return `You are a technical analyst focused on AI developer tools. Based on the following GitHub data, generate a ${cfg.name} community digest for ${dateStr}.

# Data source: github.com/${cfg.repo}

## Latest Releases (past 24 hours)
${releasesText}

## Latest Issues (updated in the past 24 hours) ${issueNote}
${issuesText}

## Latest Pull Requests (updated in the past 24 hours) ${prNote}
${prsText}

---

Please generate a well-structured English digest covering the following sections:

1. **Today's Highlights** - Summarize the most important developments in 2-3 sentences
2. **Releases** - If new versions were published, summarize the changes; omit if none
3. **Hot Community Issues** - Pick the 10 most noteworthy Issues, explain why they matter and how the community is responding
4. **Important PR Progress** - Pick 10 significant PRs, describe the feature or fix
5. **Feature Request Trends** - Distill the most frequently requested feature directions from all Issues (e.g. IDE integration, performance, new model support)
6. **Developer Pain Points** - Summarize recurring complaints or high-frequency requests from developer feedback

Writing style: concise and professional, suitable for technical developers. Include a GitHub link for each item.
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

  return `You are an open-source project analyst specializing in AI agents and personal AI assistants. Based on the following GitHub data from ${cfg.name} (github.com/${cfg.repo}), generate a project digest for ${dateStr}.

# Data Overview
- Issues updated in the past 24 hours: ${totalIssues} (open/active: ${openIssues}, closed: ${closedIssues})
- PRs updated in the past 24 hours: ${totalPrs} (open: ${openPrs}, merged/closed: ${mergedPrs})
- New releases: ${releases.length}

## Latest Releases
${releasesText}

## Latest Issues ${issueSampleNote}
${issuesText}

## Latest Pull Requests ${prSampleNote}
${prsText}

---

Please generate a well-structured ${cfg.name} project digest covering the following sections:

1. **Today's Highlights** - Summarize the project's overall status in 3-5 sentences, including an activity assessment
2. **Releases** - If new versions were published, detail the changes, breaking changes, and migration notes; omit if none
3. **Project Progress** - Important PRs merged/closed today; what features or fixes were advanced; overall project momentum
4. **Community Hot Topics** - The most active, most-commented, most-reacted Issues/PRs today (with links); analyze the underlying needs
5. **Bugs & Stability** - Bugs, crashes, and regressions reported today, ordered by severity; note whether a fix PR exists
6. **Feature Requests & Roadmap Signals** - New feature requests from users; assess which are likely to make it into the next release based on existing PRs
7. **User Feedback Summary** - Distill real user pain points, use cases, and satisfaction levels from Issue comments
8. **Backlog Watch** - Long-unresponsive important Issues or PRs; flags for maintainers

Writing style: objective and professional, data-driven, highlighting project health. Include a GitHub link for each item.
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

  return `You are a senior technical analyst specializing in the open-source ecosystem for AI agents and personal AI assistants. Below are community activity summaries for each open-source project as of ${dateStr}.

${openclawSection}

---

${peerSections}

---

Based on the above, generate a cross-project comparative analysis covering the following sections:

1. **Ecosystem Overview** - Summarize the overall landscape of personal AI assistant / autonomous agent open-source projects in 3-5 sentences
2. **Activity Comparison** - Summarize each project's Issues count, PR count, releases, and health assessment in a table
3. **OpenClaw's Position in the Ecosystem** - Advantages vs. peers, technical roadmap differences, community size comparison
4. **Shared Technical Directions** - Common needs emerging across multiple projects (note which projects and the specific requests)
5. **Differentiation Analysis** - Key differences in feature focus, target users, and technical architecture
6. **Community Momentum & Maturity** - Activity tiers: which projects are in rapid iteration, which are in quality consolidation
7. **Notable Trend Signals** - Distill industry trends from community feedback; what's relevant for AI agent developers

Writing style: concise and professional, data-supported, suitable for technical decision-makers and developers.
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

  return `You are a technical analyst focused on the Claude Code ecosystem. Below is data from github.com/anthropics/skills (the official Claude Code Skills repository). Please analyze the community's most discussed Skills activity as of ${dateStr}.

## Repository Overview
anthropics/skills is the official Claude Code Skills collection. Each PR typically corresponds to a new or improved Skill. The community uses Issues to request new Skills or report problems; PRs represent actual Skill submissions.

## Trending Pull Requests (sorted by comment count; ${prs.length} total, showing top ${topPrs.length})
${prsText}

## Community Issues (sorted by comment count; ${issues.length} total, showing top ${topIssues.length})
${issuesText}

---

Please generate a Claude Code Skills community highlights report covering the following sections:

1. **Top Skills Ranking** - List the 5–8 most-discussed Skills (PRs) by comment/engagement; describe each Skill's purpose, key discussion points, and current status (open/merged/draft)
2. **Community Demand Trends** - Distill the most anticipated new Skill directions from Issues (e.g. workflow automation, code review, test generation, documentation)
3. **High-Potential Pending Skills** - Actively discussed PRs not yet merged; these Skills may land soon
4. **Skills Ecosystem Insight** - One-sentence summary: what is the community's most concentrated ask at the Skills layer right now?

Writing style: concise and professional; include a GitHub link for each item.
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

  return `You are a senior technical analyst focused on the AI developer tools ecosystem. Below are community activity summaries for major AI CLI tools as of ${dateStr}:

${sections}

---

Based on the above, generate a cross-tool comparative analysis covering the following sections:

1. **Ecosystem Overview** - Summarize the current state of AI CLI tools in 3-5 sentences
2. **Activity Comparison** - Summarize each tool's Issues count, PR count, and releases for today in a table
3. **Shared Feature Directions** - Needs that communities across multiple tools are focused on (note which tools and the specific requests)
4. **Differentiation Analysis** - Differences in feature focus, target users, and technical approach across tools
5. **Community Momentum & Maturity** - Which tool communities are most active; which are in rapid iteration
6. **Notable Trend Signals** - Industry trends distilled from community feedback; what's useful for developers

Writing style: concise and professional, data-supported, suitable for technical decision-makers and developers.
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

  return `You are a deep-content analyst specializing in AI, skilled at extracting strategic signals from official announcements, technical blogs, research papers, and product documentation.

Below is content crawled on ${dateStr} from Anthropic (claude.com / anthropic.com) and OpenAI (openai.com). ${firstRunNote}

${siteSections}

---

Please generate a comprehensive **AI Official Content Tracker Report** covering the following sections:

1. **Today's Highlights** — 3–5 sentences summarizing the most important new releases or developments; call out the key takeaways

2. **Anthropic / Claude Content Highlights** — Organize important content by category (news / research / engineering / learn, etc.):
   - Summarize each piece in 2–4 sentences covering core ideas, technical details, or business significance
   - Note the publication date and link to the original
   - If this is a first-run crawl, organize notable milestones chronologically

3. **OpenAI Content Highlights** — Same format as above, organized by category (research / release / company / safety, etc.)

4. **Strategic Signal Analysis** — Based on both companies' publishing cadence and content focus, analyze:
   - Each company's current technical priorities (model capability / safety / productization / ecosystem)
   - Competitive dynamics: who is setting the agenda, who is following
   - Potential implications for developers and enterprise users

5. **Details Worth Watching** — Extract implicit signals from titles, phrasing, and release timing, such as:
   - First appearances of new terms or topics
   - Dense publishing around a theme (may signal an upcoming product milestone)
   - Policy, compliance, or safety developments

${isAnyFirstRun ? "6. **Content Landscape Overview** — First-run exclusive: summarize the volume and distribution of content by category for each company, and describe their content strategy (academic-oriented vs. product-oriented vs. user-story-focused, etc.)\n\n" : ""}Writing style: English, professional and in-depth, suitable for AI researchers, product managers, and technical decision-makers. Every item must include a link to the original source.
`;
}
