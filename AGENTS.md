# AGENTS.md — AI Agent Operating Guidelines & Governance

This document establishes the binding operational rules, governance, and workflows for all AI agents (Claude Code, Codex, Gemini CLI, Cursor, Antigravity, etc.) and human contributors collaborating on the SamJuniors Website repository.

---

## 1. Core Directives & Behavioral Guardrails

1. **Company Philosophy & Identity**:
   - AI agents must **never** invent, assume, or improvise company philosophy, mission, values, voice, branding, or business strategy.
   - All foundational company identity must strictly reference [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company).
   - If information is missing, ambiguous, or unconfirmed, mark it explicitly as a **TODO** item for founder review. Never use placeholders pretending to be final decisions.

2. **Strict Phase Boundaries**:
   - Do not write code, UI components, stylesheets, or frameworks before the documentation, design system, and architecture for that phase are reviewed and approved.
   - Respect phase order defined in [ROADMAP.md](file:///d:/Projects/SamjuniorsWebsite/ROADMAP.md).

---

## 2. Source of Truth Hierarchy

When resolving conflicts or gathering context, adhere strictly to this precedence hierarchy:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. docs/company/ (Highest authority — Founder Truth)       │
├─────────────────────────────────────────────────────────────┤
│ 2. PROJECT.md & ROADMAP.md (Project Scope & Milestones)    │
├─────────────────────────────────────────────────────────────┤
│ 3. Approved Phase Documentation in docs/website/            │
├─────────────────────────────────────────────────────────────┤
│ 4. AGENTS.md & CONTRIBUTING.md (Operating Protocols)       │
├─────────────────────────────────────────────────────────────┤
│ 5. Codebase Implementation (Lowest authority)              │
└─────────────────────────────────────────────────────────────┘
```

- If code contradicts approved documentation, the documentation governs and code must be refactored.
- If documentation contradicts [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company), [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company) governs.

---

## 3. Documentation-First Workflow

Every task and feature must strictly follow the lifecycle:

```
Discover ──> Decide ──> Document ──> Review ──> Approve ──> Implement ──> Verify ──> Merge
```

- **Discover**: Gather context, constraints, and dependencies from existing documentation.
- **Decide**: Formulate architectural or design proposals based strictly on verified inputs.
- **Document**: Write specifications, architecture docs, or content drafts in the appropriate `docs/website/` folder.
- **Review**: Solicit stakeholder / founder review. Place review records in [docs/website/reviews/](file:///d:/Projects/SamjuniorsWebsite/docs/website/reviews).
- **Approve**: Formal approval must be granted before starting implementation.
- **Implement**: Execute code, markup, or assets strictly matching the approved spec.
- **Verify**: Validate against testing criteria and quality gates.
- **Merge**: Integrate via verified PR / commit protocols.

---

## 4. Decision Recording Process

1. Architectural and structural decisions must be formally documented as Architecture Decision Records (ADRs) or phase-specific specification files within `docs/website/`.
2. Decision records must detail:
   - **Context**: Problem statement and constraints.
   - **Decision**: Chosen solution and rationale.
   - **Consequences**: Trade-offs, risks, and subsequent obligations.
   - **Status**: Proposed / Approved / Deprecated.

---

## 5. Branch Strategy

- `main`: Production-ready, stable branch. Direct commits prohibited.
- `develop`: Integration branch for active milestones.
- Feature / Phase branches:
  - `docs/<phase-name>-<topic>` (e.g., `docs/00-discovery-user-personas`)
  - `feat/<feature-name>` (e.g., `feat/navigation-component`)
  - `fix/<issue-name>` (e.g., `fix/mobile-breakpoint-overflow`)
  - `chore/<task-name>` (e.g., `chore/setup-linter`)

---

## 6. Review Process

- Documentation changes must be submitted via review pull requests.
- Reviews and review notes must be archived in [docs/website/reviews/](file:///d:/Projects/SamjuniorsWebsite/docs/website/reviews).
- AI agents conducting peer reviews must verify:
  1. Alignment with [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company).
  2. Completeness of specifications.
  3. Absence of unvalidated assumptions.
  4. Explicit tracking of open questions/TODOs.

---

## 7. File Ownership & Modification Rules

| Path Pattern | Ownership / Modification Rules |
| :--- | :--- |
| `docs/company/*` | **Founder/Leadership Only**. AI agents must NEVER modify unless explicitly commanded with approved founder input. |
| `docs/website/*` | AI agents may draft specifications, subject to human approval before implementation. |
| `AGENTS.md`, `PROJECT.md`, `ROADMAP.md` | Core governance files. Changes require explicit project lead approval. |
| `src/*` (future) | Implementation files. Modifiable only when corresponding docs are approved. |

---

## 8. Coding Standards (Placeholder)

> [!NOTE]
> Detailed coding standards, style guides, formatting configurations, and linting rules will be established during **Phase 7 (Frontend Development)** based on approved technical specifications.

- Preliminary rules:
  - Strict typing where supported.
  - Zero tolerance for dead code and unreferenced assets.
  - Consistent naming conventions aligned with domain terms in [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company).

---

## 9. Design Standards (Placeholder)

> [!NOTE]
> Visual design tokens, typography, color palettes, spacing grids, and component libraries will be defined during **Phase 5 (Design System)** and **Phase 6 (UI Design)**.

- Preliminary rules:
  - Accessible contrast ratios (WCAG 2.1 AA/AAA compliance).
  - Responsive layouts supporting mobile, tablet, and desktop breakpoints.
  - Semantic HTML element structure.

---

## 10. Communication & Reporting Rules

- Keep responses and documentation concise, structured, and actionable.
- Always use GitHub Flavored Markdown with clickable file links using `file:///` URIs.
- Explicitly surface risks, blocking unknowns, and TODO items rather than making silent assumptions.
