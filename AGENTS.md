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
   - For any single page or component task, read only the relevant section of [docs/website/product-spec.md](docs/website/product-spec.md) and [docs/website/design-system.md](docs/website/design-system.md).
   - Do not read [docs/website/decisions.md](docs/website/decisions.md) or [docs/company/foundation.md](docs/company/foundation.md) unless the task specifically concerns brand identity or historical rationale.

---

## 2. Source of Truth Hierarchy

When resolving conflicts or gathering context, adhere strictly to this precedence hierarchy:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. docs/company/ (Highest authority — Founder Truth)       │
├─────────────────────────────────────────────────────────────┤
│ 2. PROJECT.md & ROADMAP.md (Project Scope & Milestones)    │
├─────────────────────────────────────────────────────────────┤
│ 3. Approved documentation in docs/website/                  │
│    (product-spec → design-system → architecture → delivery) │
├─────────────────────────────────────────────────────────────┤
│ 4. AGENTS.md & CONTRIBUTING.md (Operating Protocols)       │
├─────────────────────────────────────────────────────────────┤
│ 5. Codebase Implementation (Lowest authority)              │
└─────────────────────────────────────────────────────────────┘
```

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
- **Document**: Write specifications or content drafts in the appropriate consolidated document under `docs/website/` (product direction → [product-spec.md](docs/website/product-spec.md); visual rules → [design-system.md](docs/website/design-system.md); technical structure → [architecture.md](docs/website/architecture.md); build/QA/launch → [delivery.md](docs/website/delivery.md)).
- **Review**: Solicit stakeholder / founder review. Record review outcomes in [docs/website/decisions.md](docs/website/decisions.md) (detailed findings may use the standalone review-record format defined in [delivery.md §6](docs/website/delivery.md#6-phase-review--sign-off-records)).
- **Approve**: Formal approval must be granted before starting implementation.
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

- `main`: Production-ready, stable branch. Direct commits prohibited.
- `develop`: Integration branch for active milestones.
- Feature / Phase branches:
  - `docs/<topic-name>` (e.g., `docs/ux-persona-validation`)
  - `feat/<feature-name>` (e.g., `feat/navigation-component`)
  - `fix/<issue-name>` (e.g., `fix/mobile-breakpoint-overflow`)
  - `chore/<task-name>` (e.g., `chore/setup-linter`)

---

## 6. Review Process

- Documentation changes must be submitted via review pull requests.
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
| `docs/website/product-spec.md`, `design-system.md`, `architecture.md`, `delivery.md`, `INDEX.md` | AI agents may draft specification updates, subject to human approval before implementation. |
| `docs/website/decisions.md` | Running decision log. Agents append new entries and TODOs; existing approved records are immutable history. |
| `AGENTS.md`, `PROJECT.md`, `ROADMAP.md` | Core governance files. Changes require explicit project lead approval. |
| `src/*` | Production implementation files. Modifiable only when corresponding docs and architecture are approved. |

---

## 8. Coding Standards (Placeholder)

> [!NOTE]
> Detailed coding standards, style guides, formatting configurations, and linting rules will be established during **Phase 10 (Frontend Development)** based on approved technical specifications in [architecture.md](docs/website/architecture.md).

- Preliminary rules:
  - Strict typing where supported.
  - Zero tolerance for dead code and unreferenced assets.
  - Consistent naming conventions aligned with domain terms in [docs/company/](docs/company).
  - **Engineering Craft ([HUMAN-001](docs/website/design-system.md#25-human-made-design--implementation-human-001))**: Deliberate engineering judgment; avoid unnecessary abstractions, unvetted dependencies, and performance regressions for novelty.
  - All components must consume design tokens from `src/styles/tokens.css` — no inline styles duplicating token values.

---

## 9. Design Standards (Placeholder)

> [!NOTE]
> The authoritative design tokens, typography, color palettes, spacing grids, and component specifications are defined in [docs/website/design-system.md](docs/website/design-system.md).

- Preliminary rules:
  - Accessible contrast ratios (WCAG 2.1 AA/AAA compliance).
  - Responsive layouts supporting mobile, tablet, and desktop breakpoints.
  - Semantic HTML element structure.
  - **Human-Made Design ([HUMAN-001](docs/website/design-system.md#25-human-made-design--implementation-human-001))**: Prohibit generic AI visual clichés (saturated gradient blobs, excessive glassmorphism, monotonous card grids); enforce Distinctiveness and Human-Authorship tests.

---

## 10. Communication & Reporting Rules

- Keep responses and documentation concise, structured, and actionable.
- Always use GitHub Flavored Markdown with clickable file links using `file:///` URIs.
- Explicitly surface risks, blocking unknowns, and TODO items rather than making silent assumptions.
