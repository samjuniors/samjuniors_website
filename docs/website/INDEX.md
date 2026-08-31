# SamJuniors Website — Master Project & Documentation Index

> **Master navigation map & governance index** establishing the authoritative document structure, authority hierarchy, status, and gating rules for the SamJuniors web platform.
>
> The documentation suite was consolidated into **8 files**. The former 12 phase-numbered folders were merged without content loss; the consolidation record and open TODOs live in [decisions.md](decisions.md).

---

## 1. Documentation Structure (8 Files)

```
docs/
├── company/
│   ├── foundation.md          # Founder truth: identity, purpose, differentiator, building cycle, product architecture (founder-owned, never agent-edited)
│   └── decision-log.md        # Company-level decision records COMPANY-001…003 (founder-owned, never agent-edited)
└── website/
    ├── product-spec.md        # What pages exist, what each says, who it's for: discovery strategy, brand story, IA (certified & frozen), content strategy & model, UX principles, personas, journeys
    ├── design-system.md       # The ONLY doc governing tokens, layout, visual rules, and HUMAN-001 tests: brand visual direction, design & UX principles, design research, design direction, visual evidence, certified token system, UI phase protocol
    ├── architecture.md        # Technical structure: stack, directory boundaries, routing, data flow, component boundaries, quality gates, freeze policy
    ├── delivery.md            # Build order, QA gates, launch checklist: vertical slice validation, frontend development, QA, launch, review sign-off protocol
    ├── decisions.md           # Single running decision log (newest on top): every formal website decision with IDs, tagged by destination doc
    └── INDEX.md               # This file
```

Root governance files: [README.md](../../README.md) · [AGENTS.md](../../AGENTS.md) · [PROJECT.md](../../PROJECT.md) · [ROADMAP.md](../../ROADMAP.md) · [CONTRIBUTING.md](../../CONTRIBUTING.md) · [CHANGELOG.md](../../CHANGELOG.md)

---

## 2. Authority Hierarchy & Source of Truth

When resolving design, architectural, or content questions, adhere strictly to this precedence hierarchy:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. docs/company/ (Highest Authority — Founder Truth)        │
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

- **Permanent Rule**: [docs/company/](../company/) governs all decisions. No phase may invent, assume, or alter company identity, purpose, or product facts.
- **Cross-Phase Governance**: [HUMAN-001](design-system.md#25-human-made-design--implementation-human-001) applies across all design and development phases to guarantee human-level craft and eliminate generic AI clichés.
- If code contradicts approved documentation, the documentation governs and code must be refactored.

---

## 3. Core Implementation Rule: Internal Knowledge ≠ Website Content

> [!CAUTION]
> **BUILD FROM UNDERSTANDING, NOT TRANSCRIPTION.**
>
> All documentation under `docs/company/` and `docs/website/` is **internal source material** for the design and engineering team. Contributors and AI agents must **READ, UNDERSTAND, SYNTHESIZE, and APPLY** the underlying intent.

### Explicit Prohibitions (Never Render to Visitors)
- Do NOT mechanically copy documentation into website sections.
- Do NOT expose internal decision IDs (e.g., `COMPANY-001`, `UX-013`, `CONTENT-003`).
- Do NOT expose UX principle names, research citations, or category labels on visitor-facing interfaces.
- Do NOT expose internal roadmap, phase numbers, or process terminology.
- Do NOT turn documentation headings or bullet points directly into website cards or sections.
- Do NOT create "documentation presented as a website."

### The Visitor Experience Standard
The visitor-facing website must communicate the underlying strategy through:
- Professional, high-craft editorial content
- Intentional visual hierarchy and spatial rhythm
- Authentic product storytelling and living interactive demonstration stages
- Intuitive composition, low-friction navigation, and natural narrative pacing

The final website should feel like a real, professionally designed technology company website.

*This binding rule applies across all implementation work: design direction, design system, UI design, vertical slice, frontend development, and QA.*

---

## 4. Phase Master Map → Merged Documents

The 12-phase project lifecycle (see [ROADMAP.md](../../ROADMAP.md)) maps onto the consolidated documentation as follows:

| Phase # | Phase Name | Status | Primary Purpose | Governing Document |
| :--- | :--- | :--- | :--- | :--- |
| **Foundation** | **Company Truth** | **Certified** | Founder intent, parent company identity, building filter, differentiator, multi-product thesis. | [company/foundation.md](../company/foundation.md), [company/decision-log.md](../company/decision-log.md) |
| **Phase 1** | **Discovery & Strategy** | **Complete** | Target audiences, core brand narrative, strategic pillars, governance constraints. | [product-spec.md §1–2](product-spec.md) |
| **Phase 2** | **Information Architecture** | **Complete — Certified & Frozen** | Sitemaps, content hierarchy, navigation topology, cross-product scaling models. | [product-spec.md §3](product-spec.md#3-information-architecture-certified--frozen) |
| **Phase 3** | **Content Strategy** | **Complete** | Messaging hierarchy, 3 information depths, contextual proof system, founder presence rules. | [product-spec.md §4–5](product-spec.md#4-content-strategy--messaging-framework) |
| **Phase 4** | **UX Principles & User Flows** | **Complete** | Cognitive UX constraints, non-linear narrative topologies, visitor-controlled pacing. | [product-spec.md §6](product-spec.md#6-ux-principles-personas--user-flows) |
| **Phase 5** | **Design Research** | **Complete** | Empirical research across 8 domains: cinematic web design, human craft, progressive disclosure, motion ergonomics, mobile touch. | [design-system.md §3](design-system.md#3-design-research) |
| **Phase 6** | **Design Direction & Prototype** | **Complete — Implemented** | Strategic visual/experiential direction and the in-app experience prototype implemented in the production scaffold. | [design-system.md §4–5](design-system.md#4-strategic-design-direction), [architecture.md](architecture.md) |
| **Phase 7** | **Design System** | **Implemented — sign-off pending (TODO)** | Formal visual design tokens (color, typography, spatial grid, elevation, motion). | [design-system.md §6](design-system.md#6-design-system-specification) |
| **Phase 8** | **UI Design** | **Pending Phase 7 sign-off** | High-fidelity component layouts, interactive states, responsive visual compositions. | [design-system.md §7](design-system.md#7-ui-design-phase-protocol-phase-8) |
| **Phase 9** | **Vertical Slice Validation** | **Pending Phase 8** | Interactive end-to-end slice testing core user journeys, performance, and accessibility. | [delivery.md §2](delivery.md#2-vertical-slice-validation-mandatory-quality-gate) |
| **Phase 10** | **Frontend Development** | **Scaffold ready — gated on Phase 9** | Production Next.js App Router codebase with typed content repository, CSS Modules, accessible components. | [architecture.md](architecture.md), [delivery.md §3](delivery.md#3-frontend-development-gated-on-vertical-slice-sign-off), [src/](../../src) |
| **Phase 11** | **QA & Testing** | **Pending Phase 10** | Vitest unit suites, Playwright E2E validation, Core Web Vitals profiling, WCAG 2.1 AA audit. | [delivery.md §4](delivery.md#4-qa--testing-gated-on-frontend-development-completion), [e2e/](../../e2e) |
| **Phase 12** | **Launch & Deployment** | **Pending Phase 11** | Production deployment, edge CDN configuration, domain routing, post-launch verification. | [delivery.md §5](delivery.md#5-launch-gated-on-qa-sign-off) |

**Decision history** for every phase is recorded in [decisions.md](decisions.md) (single running log, newest entries on top).

---

## 5. Authoritative Reading Order

For contributors, reviewers, and AI agents onboarding to the project:

1. [company/foundation.md](../company/foundation.md) — *Founder Truth & Identity (Highest Precedence)*
2. [ROADMAP.md](../../ROADMAP.md) & [PROJECT.md](../../PROJECT.md) — *Project Milestones & Governance*
3. [architecture.md](architecture.md) — *Production Stack & Application Architecture*
4. [product-spec.md](product-spec.md) — *Product Direction, IA, Messaging, Personas & Journeys*
5. [design-system.md](design-system.md) — *Visual Direction, Research, Tokens & HUMAN-001 Tests*
6. [decisions.md](decisions.md) — *Decision History (reference only, when historical rationale is needed)*

> **Reading-scope rule (binding for AI agents)**: For any single page or component task, read only the relevant section of [product-spec.md](product-spec.md) and [design-system.md](design-system.md). Do not read [decisions.md](decisions.md) or [company/foundation.md](../company/foundation.md) unless the task specifically concerns brand identity or historical rationale.

---

## 6. Current Phase & Explicit Next Action

- **Current Phase**: **UI Design (Phase 8) preparation** — the Phase 6 experience prototype and Phase 7 design system are implemented in `src/` (see [design-system.md §5](design-system.md#5-phase-6-experience-prototype--visual-evidence--review-sheet)).
- **Production Scaffold State**: Initialized in Next.js App Router (`src/app/`, `src/content/`, `src/styles/tokens.css`, Vitest, Playwright).
- **Explicit Next Action**: Founder review of the open TODOs in [decisions.md](decisions.md) (Phase 7 retroactive certification, palette supersession confirmation, missing screenshots), followed by formal Phase 7 sign-off and Phase 8 UI design activation.

---

## 7. Phase-Gating Rule

> [!IMPORTANT]
> **Strict Phase Boundary Policy**:
> 1. No phase may begin implementation until its preceding documentation and specifications have passed formal review and merge into `main`.
> 2. UI design and design system tokens must derive strictly from the validated experience prototype.
> 3. Production code in `src/` must reflect only approved architectural patterns and verified founder truth.
>
> Violations of this policy must be recorded as TODOs in [decisions.md](decisions.md) — see the Phase 7 gate violation currently flagged there.
