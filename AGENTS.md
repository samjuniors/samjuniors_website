# AGENTS.md — AI Agent Operating Guidelines & Governance

This document establishes the binding operational rules, governance, and workflows for all AI agents (Claude Code, Codex, Gemini CLI, Cursor, Antigravity, etc.) and human contributors collaborating on the SamJuniors Website repository.

---

## 1. Core Directives & Behavioral Guardrails

1. **Company Philosophy & Identity**:
   - AI agents must **never** invent, assume, or improvise company philosophy, mission, values, voice, branding, or business strategy.
   - All foundational company identity must strictly reference [docs/company/](docs/company).
   - If information is missing, ambiguous, or unconfirmed, mark it explicitly as a **TODO** item for founder review. Never use placeholders pretending to be final decisions.
   - Never invent product capabilities, metrics, testimonials, evidence, or fictional future products.

2. **Strict Phase Boundaries**:
   - Do not write code, UI components, stylesheets, or frameworks before the documentation, design system, and architecture for that phase are reviewed and approved.
   - Respect phase order defined in [ROADMAP.md](ROADMAP.md) and [INDEX.md](docs/website/INDEX.md).
   - Phase-gate violations (implementation shipped before recorded sign-off) must be flagged as TODOs in [docs/website/decisions.md](docs/website/decisions.md), never silently accepted.

3. **Internal Knowledge ≠ Website Content (Build from Understanding, Not Transcription)**:
   - All documentation under `docs/company/` and `docs/website/` is **internal source material** for the design and engineering team.
   - Agents must **read, understand, synthesize, and apply** the underlying intent rather than transcribe documentation into UI.
   - Never mechanically copy documentation into website sections or assume documentation structure is website information architecture.
   - Never expose internal decision IDs (e.g., `COMPANY-001`, `UX-013`, `CONTENT-003`), phase numbers, research citations, or governance terminology on visitor-facing interfaces.
   - The visitor-facing website must communicate strategy through professional content, visual hierarchy, living product storytelling, and natural narrative pacing.

4. **Reading Scope (Documentation Efficiency Rule)**:
   - For any single page or component task, read only the relevant section of [docs/website/product-spec.md](docs/website/product-spec.md) (what it must communicate), [docs/website/copy.md](docs/website/copy.md) (the literal words), [docs/website/design-system.md](docs/website/design-system.md) (visual rules), and [docs/website/component-inventory.md](docs/website/component-inventory.md) (components & pattern contract). For homepage/experience-architecture tasks, also read the governing ADR in [docs/website/adr/](docs/website/adr/) (currently [ADR-001](docs/website/adr/ADR-001-homepage-experience-reconciliation.md)).
   - When verifying completed work, run the applicable gates in [docs/website/qa-checklist.md](docs/website/qa-checklist.md).
   - Do not read [docs/website/decisions.md](docs/website/decisions.md) or [docs/company/foundation.md](docs/company/foundation.md) unless the task specifically concerns brand identity or historical rationale — **or** is a review that must verify alignment with `docs/company/` under §6, in which case read the relevant section only.
   - **Copy rule**: agents never invent visitor-facing copy. New strings are drafted into copy.md as `PROPOSED` with the spec requirement they fulfill; only the founder promotes them to `APPROVED`.

---

## 2. Source of Truth Hierarchy

This is the **single binding precedence ladder** for the repository. `CLAUDE.md` §3 defers to it; do not maintain a competing list anywhere else. When resolving conflicts or gathering context, adhere strictly to this order:

1. **Explicit founder/user instruction in the current conversation** — overrides the documents below for the task at hand. If it contradicts approved documentation, do the work and flag the contradiction as a TODO in [decisions.md](docs/website/decisions.md); don't silently rewrite the spec.
2. **Security, privacy, and platform constraints** — never overridable by preference or convenience (CLAUDE.md §7).
3. **[docs/company/](docs/company)** — Founder Truth. Company philosophy, mission, values, voice, branding, strategy.
4. **[PROJECT.md](PROJECT.md) & [ROADMAP.md](ROADMAP.md)** — project scope and milestones.
5. **Approved documentation in [docs/website/](docs/website)** — product-spec → design-system → architecture → delivery. ADRs in [docs/website/adr/](docs/website/adr/) are freeze-level within their scope.
6. **Operating protocols** — this file, `CLAUDE.md`, [CONTRIBUTING.md](CONTRIBUTING.md).
7. **Codebase implementation** — lowest authority.

- If code contradicts approved documentation, the documentation governs and code must be refactored.
- If documentation contradicts [docs/company/](docs/company), [docs/company/](docs/company) governs.

---

## 3. Documentation-First Workflow

Every task and feature must strictly follow the lifecycle:

```
Discover ──> Decide ──> Document ──> Review ──> Approve ──> Implement ──> Verify ──> Merge
```

- **Discover**: Gather context, constraints, and dependencies from existing documentation.
- **Decide**: Formulate architectural or design proposals based strictly on verified inputs.
- **Document**: Write specifications or content drafts in the appropriate consolidated document under `docs/website/` (product direction → [product-spec.md](docs/website/product-spec.md); literal visitor copy → [copy.md](docs/website/copy.md); visual rules → [design-system.md](docs/website/design-system.md); component contracts → [component-inventory.md](docs/website/component-inventory.md); technical structure → [architecture.md](docs/website/architecture.md); build/QA/launch → [delivery.md](docs/website/delivery.md) with executable acceptance gates in [qa-checklist.md](docs/website/qa-checklist.md)).
- **Review**: Solicit stakeholder / founder review. Record review outcomes in [docs/website/decisions.md](docs/website/decisions.md) (detailed findings may use the standalone review-record format defined in [delivery.md §6](docs/website/delivery.md#6-phase-review--sign-off-records)).
- **Approve**: Founder approval is required before implementing anything that **changes an approved spec, visitor-facing copy, brand identity, an ADR, or is irreversible**. Reversible implementation work that follows an already-approved spec does **not** wait for approval — state the plan first per `CLAUDE.md` §5, then proceed per §14. This is the scope boundary between this gate and CLAUDE.md's "don't wait for approval on reversible work"; when in doubt about which side a task falls on, ask.
- **Implement**: Execute code, markup, or assets strictly matching the approved spec.
- **Verify**: Validate against testing criteria and quality gates.
- **Merge**: Integrate via verified PR / commit protocols.

---

## 4. Decision Recording Process

1. Architectural and structural decisions must be formally recorded in [docs/website/decisions.md](docs/website/decisions.md) — the single running decision log, newest entries on top — with their substantive content reflected in the relevant merged document.
2. Keep documentation concise and high-signal. Avoid creating sprawling decision-log ecosystems or redundant files for small iterative steps.
3. Decision records must detail:
   - **Context**: Problem statement and constraints.
   - **Decision**: Chosen solution and rationale.
   - **Consequences**: Trade-offs, risks, and subsequent obligations.
   - **Status**: Proposed / Approved / Deprecated.
4. Decision ID codes live **only** in decisions.md. Never propagate them into product-spec.md, design-system.md, architecture.md, or delivery.md — and never into visitor-facing interfaces.

---

## 5. Branch Strategy

**Current reality (2026-09-05): `main` is the only branch and it is the working branch.** There is no `develop`, no PR flow, and no CI. Committing directly to `main` is therefore permitted, on two conditions that replace the review gate: checkpoint before any risky or broad change (`CLAUDE.md` §12A), and run the completion standard in `CLAUDE.md` §15 before committing.

Target scheme once a second contributor or CI lands (**not in force now**): protected `main`, `develop` for milestone integration, and topic branches prefixed `docs/`, `feat/`, `fix/`, `chore/` — e.g. `feat/navigation-component`.

---

## 6. Review Process

- Documentation changes are submitted for founder review — via pull request once a PR flow exists (§5), otherwise as a diff plus a decision entry in the same commit.
- Review outcomes and approval decisions must be recorded in [docs/website/decisions.md](docs/website/decisions.md); detailed findings may additionally use the standalone review-record format defined in [delivery.md §6](docs/website/delivery.md#6-phase-review--sign-off-records).
- AI agents conducting peer reviews must verify:
  1. Alignment with [docs/company/](docs/company).
  2. Completeness of specifications.
  3. Absence of unvalidated assumptions.
  4. Explicit tracking of open questions/TODOs.

---

## 7. File Ownership & Modification Rules

| Path Pattern | Ownership / Modification Rules |
| :--- | :--- |
| `docs/company/*` | **Founder/Leadership Only**. AI agents must NEVER modify unless explicitly commanded with approved founder input. |
| `docs/website/product-spec.md`, `design-system.md`, `architecture.md`, `delivery.md`, `component-inventory.md`, `qa-checklist.md`, `INDEX.md` | AI agents may draft specification updates, subject to human approval before implementation. |
| `docs/website/adr/*` | Architecture Decision Records (freeze amendments). New ADRs and amendments require founder approval; agents may draft them only from explicit founder directives. |
| `docs/website/decisions.md` | Running decision log. Agents append new entries and TODOs; existing approved records are immutable history. |
| `docs/website/copy.md` | Literal visitor-facing text. Agents may draft `PROPOSED` strings citing the spec requirement; **only the founder** promotes to `APPROVED` or edits approved strings. |
| `AGENTS.md`, `PROJECT.md`, `ROADMAP.md`, `CONTRIBUTING.md` | Core governance files. Changes require explicit project lead approval. |
| `CLAUDE.md` | Agent operating rules. Agents may append to Section 0 (project context, frozen decisions) without approval; any other section requires project lead approval. **Section headings and numbers are load-bearing** — the subagents in `.claude/agents/` cite them, so never renumber a section without updating those files in the same commit. |
| `PRODUCT.md` | Product truth. Agents may fill in and correct it from confirmed founder input; never invent capabilities, metrics, or roadmap items (§1.1). |
| `PROGRESS.md`, `CHANGELOG.md` | Append-only work logs. Agents append every completed task per `CLAUDE.md` §15 — enforced by `.claude/hooks/check-progress-commit.sh`. Never rewrite or prune existing entries. |
| `CONTINUE.md` | Session handoff / current execution state. Agents overwrite freely; it is disposable by design. |
| `src/*` | Production implementation files. Modifiable only when corresponding docs and architecture are approved. |

---

## 8. Coding Standards

Detailed style, formatting, and linting rules live in [architecture.md](docs/website/architecture.md); general code-quality rules are in `CLAUDE.md` §6 and §8. Repo-specific additions:

- Strict typing where supported.
- Zero tolerance for dead code and unreferenced assets.
- Consistent naming conventions aligned with domain terms in [docs/company/](docs/company).
- All components must consume design tokens from `src/styles/tokens.css` — no inline styles duplicating token values.

---

## 9. Design Standards

The authoritative design tokens, typography, color palettes, spacing grids, and component specifications are defined in [docs/website/design-system.md](docs/website/design-system.md); [HUMAN-001](docs/website/design-system.md#25-human-made-design--implementation-human-001) §2.5 is the single authority on human-made design and engineering craft, and `CLAUDE.md` §9 carries the per-turn version. Repo-specific additions:

- Accessible contrast ratios (WCAG 2.1 AA/AAA compliance).
- Responsive layouts supporting mobile, tablet, and desktop breakpoints.
- Semantic HTML element structure.

---

## 10. Communication & Reporting Rules

- Keep responses and documentation concise, structured, and actionable.
- Use GitHub Flavored Markdown. Link files with repo-relative paths; `file:///` URIs only where an absolute local path is genuinely needed. Task completion reports follow the fixed template in `CLAUDE.md` §15 — that format governs.
- Explicitly surface risks, blocking unknowns, and TODO items rather than making silent assumptions.
