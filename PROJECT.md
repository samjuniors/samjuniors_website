# SamJuniors Website Project

## Project Goal
Establish a modern, high-performance, accessible, and brand-aligned web presence for SamJuniors through a structured, AI-assisted, documentation-first engineering workflow.

---

## Objectives
- Deliver a clear, authoritative digital presence representing SamJuniors.
- Maintain a single source of truth across company identity, architecture, and implementation.
- Enforce rigorous documentation-first engineering practices enabling seamless multi-agent collaboration.
- Ensure high standards of performance, accessibility, SEO, and maintainability.

---

## Scope
- Complete end-to-end website lifecycle: discovery, information architecture, content strategy, wireframing, design system specification, UI design, frontend development, testing, and launch.
- Continuous documentation maintenance across all project phases.
- Governance and workflow configuration for AI and human contributors.

---

## Non-Goals
- Inventing or altering company philosophy, vision, or business model outside of approved founder documentation.
- Premature technology selection or coding prior to phase approval.
- Placeholder copywriting or unverified speculative branding.
- Developing unapproved features, pages, or backend systems not defined in phase specifications.
- Generic, interchangeable AI-generated visual templates, saturated gradient blobs, or bloated implementation patterns ([HUMAN-001](docs/website/design-system.md#25-human-made-design--implementation-human-001)).

---

## Deliverables
- Consolidated documentation suite (12 files) indexed in [INDEX.md](docs/website/INDEX.md):
  - [docs/company/foundation.md](docs/company/foundation.md) & [docs/company/decision-log.md](docs/company/decision-log.md) — founder-owned truth.
  - [docs/website/product-spec.md](docs/website/product-spec.md) — product direction, IA, content strategy, personas & journeys.
  - [docs/website/design-system.md](docs/website/design-system.md) — tokens, layout, visual rules, HUMAN-001 tests.
  - [docs/website/architecture.md](docs/website/architecture.md) — technical structure & routing.
  - [docs/website/delivery.md](docs/website/delivery.md) — build order, QA gates, launch checklist.
  - [docs/website/decisions.md](docs/website/decisions.md) — single running decision log.
  - [docs/website/copy.md](docs/website/copy.md) — approved literal website text (SPEC vs COPY split) with placeholder/missing-copy registry.
  - [docs/website/qa-checklist.md](docs/website/qa-checklist.md) — concrete acceptance criteria: global gates, per-page matrix, performance floors, debt register.
  - [docs/website/component-inventory.md](docs/website/component-inventory.md) — closed component set, props/variants, mandatory CSS-Modules + tokens pattern contract.
  - [docs/website/adr/ADR-001-homepage-experience-reconciliation.md](docs/website/adr/ADR-001-homepage-experience-reconciliation.md) — Architecture Decision Record: 10-step strategic model vs. 5-scene executable homepage experience (ratifies founder decisions H1–H5; scene/motion spec in design-system §6.8; primitives specified in component-inventory §4.10–§4.12; QA gates in qa-checklist §2.10).
- Reviewed and approved wireframes, design system, and UI specifications.
- Production-grade, tested, and optimized website codebase.
- Deployment, testing, and launch verification records.

---

## Workflow
Development strictly adheres to the documentation-first lifecycle:

```
Discover ──> Decide ──> Document ──> Review ──> Approve ──> Implement ──> Verify ──> Merge
```

No implementation begins before relevant documentation is reviewed and approved.

---

## Project Phases
1. **Phase 1 — Discovery & Website Strategy**: Stakeholder alignment, target audience identification, functional/non-functional requirements gathering. *(→ [product-spec.md §1–2](docs/website/product-spec.md))*
2. **Phase 2 — Information Architecture**: Sitemap, page hierarchy, URL structure, data flows. *(→ [product-spec.md §3](docs/website/product-spec.md#3-information-architecture-certified--frozen))*
3. **Phase 3 — Content Strategy**: Messaging hierarchy, content outlines, voice guidelines. *(→ [product-spec.md §4–5](docs/website/product-spec.md#4-content-strategy--messaging-framework))*
4. **Phase 4 — UX Principles & User Flows**: User personas, visitor goals, journey maps, cognitive frameworks, and experiential principles. *(→ [product-spec.md §6](docs/website/product-spec.md#6-ux-principles-personas--user-flows))*
5. **Phase 5 — Design Research**: Evidence-driven competitive, interaction, visual, accessibility, and motion research producing actionable design implications. *(→ [design-system.md §3](docs/website/design-system.md#3-design-research))*
6. **Phase 6 — Wireframes**: Structural layout blueprints and user journey flows. *(→ [design-system.md §4](docs/website/design-system.md#4-strategic-design-direction))*
7. **Phase 7 — Design System**: Visual tokens, typography, color palettes, component specifications. *(→ [design-system.md §6](docs/website/design-system.md#6-design-system-specification))*
8. **Phase 8 — UI Design**: High-fidelity visual layouts and interaction design. *(→ [design-system.md §7](docs/website/design-system.md#7-ui-design-phase-protocol-phase-8))*
9. **Phase 9 — Vertical Slice Validation**: End-to-end validation of one representative journey before full frontend implementation. Mandatory quality gate. *(→ [delivery.md §2](docs/website/delivery.md#2-vertical-slice-validation-mandatory-quality-gate))*
10. **Phase 10 — Frontend Development**: Component implementation, state management, build integration. *(→ [architecture.md](docs/website/architecture.md), [delivery.md §3](docs/website/delivery.md#3-frontend-development-gated-on-vertical-slice-sign-off))*
11. **Phase 11 — QA**: Cross-browser testing, accessibility audit, performance benchmarking, security checks. *(→ [delivery.md §4](docs/website/delivery.md#4-qa--testing-gated-on-frontend-development-completion))*
12. **Phase 12 — Launch**: Production deployment, domain configuration, analytics, post-launch monitoring. *(→ [delivery.md §5](docs/website/delivery.md#5-launch-gated-on-qa-sign-off))*

---

## Dependencies
- Founder-approved company documentation in [docs/company/](docs/company).
- Formal phase review sign-offs before transitioning to subsequent phases.

---

## Open TODOs
- [x] Phase 1 — Discovery & Website Strategy (Stages 1 & 2 complete; all discovery decisions recorded in [decisions.md](docs/website/decisions.md)).
- [x] Phase 2 — Information Architecture (Certified & Frozen; all IA decisions recorded in [decisions.md](docs/website/decisions.md)).
- [x] Phase 3 — Content Strategy (Messaging framework, content model, all content decisions recorded in [decisions.md](docs/website/decisions.md)).
- [x] Phase 4 — UX Principles & User Flows (all UX and user-flow decisions recorded in [decisions.md](docs/website/decisions.md)).
- [x] Phase 5 — Design Research (Evidence-driven research and implications documented in [design-system.md §3](docs/website/design-system.md#3-design-research)).
- [x] Phase 6 — Wireframes & Experience Prototyping (In-app experience prototype implemented in `src/app/` and `src/components/`; visual evidence recorded in [design-system.md §5](docs/website/design-system.md#5-phase-6-experience-prototype--visual-evidence--review-sheet)).
- [~] Phase 7 — Design System (Implemented in `src/styles/tokens.css`, `src/app/globals.css`, and `src/components/ui/` — **formal sign-off pending**: the implementation occurred before a recorded Phase 6 sign-off; founder review requested, see TODO in [decisions.md](docs/website/decisions.md)).
- [ ] Phase 8 — UI Design (Pending Phase 7 sign-off).
- [ ] Phase 9 — Vertical Slice Validation (Pending Phase 8 initial approval).
- [ ] Phase 10 — Frontend Development (Gated on Phase 9 sign-off).
- [ ] Phase 11 — QA (Gated on Phase 10 completion).
- [ ] Phase 12 — Launch (Gated on Phase 11 sign-off).
- [x] Ingest and verify founder documentation in [docs/company/](docs/company) (COMPANY-001 through COMPANY-003 recorded).
- [ ] Ingest further founder documentation in [docs/company/](docs/company) as provided.
- [x] Experience/architecture audit + ADR-001 spec pass (executed 2026-08-31): founder ratified H1–H5 (5-scene executable experience with deferred unverified beats; Phase 7 palette canonical — TODO 2 closed; founder copy non-blocking; Lumora dual-mode presentation; scroll-linked progression with tap override). Documentation suite 11 → 12 files; the Lumora demo content extracted to `src/content/lumora-demo.ts` (the pass's only code change — rendering byte-identical, string parity verified). Full record in [decisions.md](docs/website/decisions.md) QA Run Records.
- [ ] Cinematic experience implementation (gated): production UI implementation of the 5-scene experience awaits explicit founder approval ([ADR-001 §8](docs/website/adr/ADR-001-homepage-experience-reconciliation.md)), then proceeds vertical-slice-first; resolves debt D11 (workbench mobile parity + touch targets) inside the pass.
- [ ] Founder review of remaining open TODOs in [docs/website/decisions.md](docs/website/decisions.md) (Phase 7 retroactive certification, missing screenshots — palette supersession is closed).
- [ ] Founder copy sign-off in [docs/website/copy.md](docs/website/copy.md) — all strings are currently `PROPOSED` or `PENDING FOUNDER COPY`; wet-sign per the copy.md §0.2 record, and supply the missing founder copy (founder name, testimonials, proof items, persona CTAs, contact experience).
- [x] Second-pass code fix (executed 2026-08-31): all five debt pages converted to CSS Modules + tokens, broken token names and stale colors fixed, the `[STRUCTURAL CAPABILITY CONTAINER]` placeholder leak removed, placeholder proof items removed, `verifiableEvidence` rendered, fonts self-hosted via `next/font` (qa-checklist debt D1–D7, D9-Button, D10 resolved; D8 + SectionHeader adoption await founder copy) — full record in [decisions.md](docs/website/decisions.md) QA Run Records.
