# Capability Discovery, Reuse & Creation

> Extracted from `CLAUDE.md` Section 13 on 2026-09-05 to keep it out of the always-loaded
> context path. This is a periodic lifecycle policy, not per-turn guidance — CLAUDE.md §13
> retains a condensed resident core and points here for the full text.
> Restore point: `archive/context-optimization-2026-09-05/CLAUDE.md.round1.bak`.

Before starting any non-trivial task, determine what capabilities are actually required.

**Discover.** Check project-local `.claude/agents/`, project-local `.claude/skills/`, installed plugins, connected MCP servers, and built-in capabilities before assuming something needs to be built or installed.

**Match to task.** Identify what the task actually needs — specialized reasoning, independent review, browser interaction, visual inspection, documentation lookup, repo operations, security or performance analysis, design review, framework-specific knowledge — and use the smallest capability set that accomplishes it reliably. Don't invoke every available tool.

**Reuse before creating.** If an existing agent or skill sufficiently covers the need, use it. If it partially covers it, extend it only when that's clearly better than a new overlapping capability. Only create a focused project-local agent or skill for a recurring need nothing existing covers — never for a one-off trivial task.

**Agent creation criteria.** Create a project-local subagent when most of these hold: the task needs specialized reasoning, the responsibility is clearly separable, the workflow will recur, independent review adds real value, and the role has clear inputs/outputs (e.g. `design-critic`, `security-reviewer`, `architecture-reviewer`, `qa-reviewer`). Agents represent reasoning roles, not tool wrappers — don't create one merely to wrap an MCP.

**Cost model (measured 2026-09-05).** Only a subagent's `name` + `description` frontmatter occupies the main context window; the body is that subagent's own system prompt and loads only inside its separate window. So the lever for reducing agent context cost is trimming `description` fields, not deleting agents. Agent discovery is *recursive* into subdirectories of `.claude/agents/`, and identity comes only from the `name` field — moving a file into `.claude/agents/_archive/` does **not** disable it. There is no `disabled:` frontmatter field. Non-destructive disables: `permissions.deny: ["Agent(<name>)"]`, `--disallowedTools "Agent(<name>)"`, or removing the `description` field.

**Activation.** Use connected capabilities when the task actually benefits — documentation question → Context7, GitHub operation → GitHub, browser/E2E → Playwright, deep performance debugging → Chrome DevTools, Figma implementation → Figma, visual design audit → the relevant design skill, web research → Firecrawl. Don't invoke one just because it's installed.

**Installation boundary.** Don't auto-install new global MCPs, plugins, or third-party skills during ordinary implementation. If something's missing: check whether the task can be done reliably without it; if not, name the gap and why it's needed, then install only when that's safe and within scope — never "might be useful someday."

**Lifecycle.** Treat capabilities as project infrastructure, not a one-way accumulation. Periodically check: is this agent still used, is this skill still useful, is this MCP still necessary, does another capability now cover the same ground, has the architecture moved on. Retire what's redundant or unused — don't let it silently pile up.

**Prime rule:** Discover → Reuse → Adapt → Create → Use → Review → Retire. Never: install everything → create everything → use everything.

---

## Parallel Orchestration (full text of CLAUDE.md §13B)

When a task genuinely decomposes into independent pieces — an architecture review, a security review, and a UI critique on the same diff, or modules with no shared state — run them in parallel via subagents rather than serially, then synthesize the results before proceeding. Don't parallelize work that shares mutable state or where one piece depends on another's output; that's a dependency, not independent work, and parallelizing it produces conflicting or wasted results instead of speed.

---

## Current capability inventory (as measured 2026-09-05)

| Capability | State |
| :--- | :--- |
| Project subagents | 5 — `architecture-reviewer`, `design-critic`, `progress-auditor`, `qa-reviewer`, `security-reviewer`. All read-only reporters; all cite CLAUDE.md by section number. |
| User-level subagents | none — `~/.claude/agents/` does not exist |
| Project MCP servers | none — no `.mcp.json` in this repo; all MCP cost is user-scoped in `~/.claude.json` |
| Project skills | none — no `.claude/skills/` |
| Hooks | 2 — `check-progress-commit.sh` (PreToolUse/Bash), `pre-compact-reminder.sh` (PreCompact) |
| Slash commands | 3 — `/bootstrap`, `/no-idea`, `/resume` |

Deliberately absent, and why: **no Implementer agent** (delegating implementation costs the main session the diff it must review under CLAUDE.md §15) and **no Debugger agent** (debugging needs the main session's live reproduction state — CLAUDE.md §11).

**Diagnostics.** `/context all` is the only per-item view and shows each agent's source. `claude plugin details <name>` prints Always-on vs On-invoke token cost per plugin component. Claude Code warns at startup when non-built-in agent descriptions exceed 15,000 tokens.
