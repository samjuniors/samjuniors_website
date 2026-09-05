# SamJuniors Website — Master Project & Documentation Index

> **Master navigation map & governance index** establishing the authoritative document structure, authority hierarchy, status, and gating rules for the SamJuniors web platform.
>
> The documentation suite was consolidated into **8 core files**, then extended with three operational companions — [copy.md](copy.md) (approved literal website text), [qa-checklist.md](qa-checklist.md) (concrete acceptance criteria), and [component-inventory.md](component-inventory.md) (closed component set + pattern contract) — and the ADR series ([adr/](adr/), inaugurated 2026-08-31 by [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md): homepage experience reconciliation) — **12 files total**. The former 12 phase-numbered folders were merged without content loss; the consolidation record and open TODOs live in [decisions.md](decisions.md).

---

## 1. Documentation Structure (12 Files)

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
    ├── copy.md                # THE literal visitor-facing words: approved headlines, descriptions, CTAs, metadata + placeholder/missing-copy registry (founder sign-off model)
    ├── qa-checklist.md        # Concrete definition of "done": global gates, per-page acceptance matrix, performance floors, placeholder/leak probes, debt register
    ├── component-inventory.md # Closed set of components with props/variants + the mandatory CSS-Modules + tokens pattern contract
    ├── adr/                   # Architecture Decision Records (freeze amendments; ADR-001: homepage experience reconciliation)
    │   └── ADR-001-homepage-experience-reconciliation.md
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
| **Phase 7** | **Design System** | **Implemented — sign-off pending** ([TODO 1](decisions.md#consolidation-notes--open-todos)) | Formal visual design tokens (color, typography, spatial grid, elevation, motion). | [design-system.md §6](design-system.md#6-design-system-specification) |
| **Phase 8** | **UI Design** | ⚠ **Implemented — no phase sign-off record** | High-fidelity component layouts, interactive states, responsive visual compositions. | [design-system.md §7](design-system.md#7-ui-design-phase-protocol-phase-8) |
| **Phase 9** | **Vertical Slice Validation** | **Executed & founder-reviewed (2026-09-01)** | Interactive end-to-end slice testing core user journeys, performance, and accessibility. | [delivery.md §2](delivery.md#2-vertical-slice-validation-mandatory-quality-gate) |
| **Phase 10** | **Frontend Development** | ⚠ **Implemented — no completion record** | Production Next.js App Router codebase with typed content repository, CSS Modules, accessible components. | [architecture.md](architecture.md), [component-inventory.md](component-inventory.md), [copy.md](copy.md), [delivery.md §3](delivery.md#3-frontend-development-gated-on-vertical-slice-sign-off), [src/](../../src) |
| **Phase 11** | **QA & Testing** | **Partial — suites ship green; no CWV profile or WCAG audit record** | Vitest unit suites, Playwright E2E validation, Core Web Vitals profiling, WCAG 2.1 AA audit. | [delivery.md §4](delivery.md#4-qa--testing-gated-on-frontend-development-completion), [qa-checklist.md](qa-checklist.md), [e2e/](../../e2e) |
| **Phase 12** | **Launch & Deployment** | **Not started** — no deploy target chosen | Production deployment, edge CDN configuration, domain routing, post-launch verification. | [delivery.md §5](delivery.md#5-launch-gated-on-qa-sign-off) |

**Decision history** for every phase is recorded in [decisions.md](decisions.md) (single running log, newest entries on top).

> [!IMPORTANT]
> **This ledger records what is built, not what was gated — the two are not the same here.** Phases 8 and 10
> shipped as a founder-authorised ADR-001 experience pass ([TODO 10](decisions.md#consolidation-notes--open-todos):
> approval to implement, mandatory slice first, slice reviewed, two refinements, propagation approved), not as
> recorded phase transitions — so the *implementation* was authorised while the *phase sign-offs* were never
> written. Phase 9's gate is the one that genuinely ran. Phase 11 is partial: four Vitest suites and a Playwright
> smoke spec ship green ([e2e/smoke.spec.ts](../../e2e/smoke.spec.ts)), but no Core Web Vitals profile or full
> WCAG 2.1 AA audit has been recorded. Per [AGENTS.md §1.2](../../AGENTS.md#1-core-directives--behavioral-guardrails)
> a gate order this far out of step is flagged, never silently accepted: [TODO 18](decisions.md#consolidation-notes--open-todos).

---

## 5. Authoritative Reading Order

For contributors, reviewers, and AI agents onboarding to the project:

1. [company/foundation.md](../company/foundation.md) — *Founder Truth & Identity (Highest Precedence)*
2. [ROADMAP.md](../../ROADMAP.md) & [PROJECT.md](../../PROJECT.md) — *Project Milestones & Governance*
3. [architecture.md](architecture.md) — *Production Stack & Application Architecture*
4. [product-spec.md](product-spec.md) — *Product Direction, IA, Messaging, Personas & Journeys*
5. [design-system.md](design-system.md) — *Visual Direction, Research, Tokens & HUMAN-001 Tests*
6. [copy.md](copy.md) & [component-inventory.md](component-inventory.md) — *Literal Words & Component Contracts (daily implementation companions)*
7. [qa-checklist.md](qa-checklist.md) — *Definition of Done (required when verifying any page/component)*
8. [decisions.md](decisions.md) — *Decision History (reference only, when historical rationale is needed)*

> **Reading-scope rule (binding for AI agents)**: For any single page or component task, read only the relevant section of [product-spec.md](product-spec.md) (what the page must communicate), [copy.md](copy.md) (the literal words), [design-system.md](design-system.md) (visual rules), and [component-inventory.md](component-inventory.md) (components & pattern contract); verify against [qa-checklist.md](qa-checklist.md) when done. Do not read [decisions.md](decisions.md) or [company/foundation.md](../company/foundation.md) unless the task specifically concerns brand identity or historical rationale.

---

## 6. Current Phase & Explicit Next Action

- **Current Phase**: **Cinematic experience implemented and propagated site-wide; documentation reconciled against it (2026-09-05).** The 5-scene executable experience is founder-ratified by [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md) (2026-08-31) and **built**: scene/motion contract in [design-system.md §6.8](design-system.md#68-motion--micro-interactions), primitives `Reveal`/`SceneProgress`/`StickyStage` implemented and specified in [component-inventory.md §4.10–§4.12](component-inventory.md), QA gates in [qa-checklist.md §2.10](qa-checklist.md#210-motion--interaction-safety-adr-001-implementation-gates). Two passes followed the build: the company/product hierarchy correction (2026-09-03) and the documentation reconciliation pass (2026-09-05) that produced [TODOs 13–18](decisions.md#consolidation-notes--open-todos). **One divergence from ADR-001 is open and founder-owned**: the signature sticky reveal renders on `/products/lumora`, not as homepage Scene 03 ([TODO 15](decisions.md#consolidation-notes--open-todos)).
- **Production Scaffold State**: Next.js App Router (`src/app/`, `src/components/`, `src/content/`, `src/styles/tokens.css`), four Vitest suites incl. [`product-truth.test.tsx`](../../src/app/product-truth.test.tsx), Playwright smoke spec. The Lumora demonstration content lives in [`src/content/products.ts`](../../src/content/products.ts) — the former `src/content/lumora-demo.ts` was **deleted** by `5b58001` (2026-09-01) when the walkthrough was rebuilt on product-factual data.
- **Explicit Next Action**: **Founder decisions**, not implementation — the documentation reconciliation left six open findings requiring a ruling: unrecorded-commit reconstructions ([TODO 13](decisions.md#consolidation-notes--open-todos)), the ADR-001 signature-scene move ([TODO 15](decisions.md#consolidation-notes--open-todos)), the retroactively registered Lumora copy incl. the third-party vendor naming ([TODO 16](decisions.md#consolidation-notes--open-todos)), authorisation for a code pass to clear debt **D12–D17** ([TODO 17](decisions.md#consolidation-notes--open-todos)), and phase-transition certification for Phases 7–10 ([TODO 1](decisions.md#consolidation-notes--open-todos), [TODO 18](decisions.md#consolidation-notes--open-todos)). Still open alongside them: missing screenshots ([TODO 3](decisions.md#consolidation-notes--open-todos)), founder copy wet-sign ([TODO 8](decisions.md#consolidation-notes--open-todos)), pillar placement + `/about` H1 ([TODO 12](decisions.md#consolidation-notes--open-todos)). Palette supersession is CLOSED (TODO 2, ADR-001 H2 + the 2026-09-05 amendment).

---

## 7. Phase-Gating Rule

> [!IMPORTANT]
> **Strict Phase Boundary Policy**:
> 1. No phase may begin implementation until its preceding documentation and specifications have passed formal review and merge into `main`.
> 2. UI design and design system tokens must derive strictly from the validated experience prototype.
> 3. Production code in `src/` must reflect only approved architectural patterns and verified founder truth.
>
> Violations of this policy must be recorded as TODOs in [decisions.md](decisions.md) — see the Phase 7 gate violation currently flagged there.
