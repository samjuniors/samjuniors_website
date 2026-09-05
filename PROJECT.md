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

> [!NOTE]
> **Phase ledger refreshed 2026-09-05** under the documentation reconciliation pass the founder authorised — the pass's audit finding E was that this list still described the cinematic implementation as gated, omitted three shipped commits, and named a directory (`src/components/ui/`) that no longer exists. [PROJECT.md](PROJECT.md) is a governance file under [AGENTS.md §7](AGENTS.md#7-file-ownership--modification-rules), so the authorisation for these edits is that pass and nothing wider: statuses now describe **what is built**, and where something shipped without a recorded sign-off that is stated plainly rather than back-dated into an approval. Phase-status mirror: [INDEX.md §4](docs/website/INDEX.md#4-phase-master-map--merged-documents).
- [x] Phase 1 — Discovery & Website Strategy (Stages 1 & 2 complete; all discovery decisions recorded in [decisions.md](docs/website/decisions.md)).
- [x] Phase 2 — Information Architecture (Certified & Frozen; all IA decisions recorded in [decisions.md](docs/website/decisions.md)).
- [x] Phase 3 — Content Strategy (Messaging framework, content model, all content decisions recorded in [decisions.md](docs/website/decisions.md)).
- [x] Phase 4 — UX Principles & User Flows (all UX and user-flow decisions recorded in [decisions.md](docs/website/decisions.md)).
- [x] Phase 5 — Design Research (Evidence-driven research and implications documented in [design-system.md §3](docs/website/design-system.md#3-design-research)).
- [x] Phase 6 — Wireframes & Experience Prototyping (In-app experience prototype implemented in `src/app/` and `src/components/`; visual evidence recorded in [design-system.md §5](docs/website/design-system.md#5-phase-6-experience-prototype--visual-evidence--review-sheet)).
- [~] Phase 7 — Design System (Implemented in `src/styles/tokens.css` and `src/app/globals.css` — **formal sign-off pending**: the implementation occurred before a recorded Phase 6 sign-off; founder review requested, see [TODO 1](docs/website/decisions.md#consolidation-notes--open-todos)). *Corrected 2026-09-05: there is no `src/components/ui/` directory and never was one under that name — the sanctioned interactive primitives are the global classes `.btn-primary` / `.btn-secondary` / `.text-link` / `.hairline-divider` in `globals.css` (founder decision, [component-inventory.md §4.8](docs/website/component-inventory.md)), and the five real component directories are `interactive/`, `layout/`, `narrative/`, `product/`, `seo/`.*
- [~] Phase 8 — UI Design (**Implemented, never signed off**: high-fidelity component layouts, interactive states and responsive compositions shipped inside the ADR-001 experience passes rather than as a gated phase, so no Phase 8 approval record exists — see [TODO 18](docs/website/decisions.md#consolidation-notes--open-todos)).
- [x] Phase 9 — Vertical Slice Validation (Executed 2026-09-01: the founder required a slice before propagation — Overture → Thesis transition → Lumora Reveal → mobile stepper — then reviewed it and approved the core experience with two refinements (Lumora phase pacing rebalance, scene transition grammar). This is the one gate in Phases 8–11 that genuinely ran; record in [decisions.md](docs/website/decisions.md) QA Run Records).
- [~] Phase 10 — Frontend Development (**Implemented, no completion record**: the production App Router codebase, typed content repository, CSS Modules and accessible components are built and propagated site-wide, and two further passes have shipped on top of them (2026-09-03 hierarchy correction, 2026-09-01 product-truth rebuild) — but the phase was never formally closed. See [TODO 18](docs/website/decisions.md#consolidation-notes--open-todos)).
- [~] Phase 11 — QA (**Partial**: four Vitest suites (`content`, `routes`, `product-truth`, `company-hierarchy`) and a Playwright smoke spec exist, and the [qa-checklist.md §2.10](docs/website/qa-checklist.md) motion gates had a full recorded run on 2026-09-01. Not done: Core Web Vitals profiling and a full WCAG 2.1 AA audit — neither is recorded, and gate 2.10.6 is currently **failing** on debt D16).
- [ ] Phase 12 — Launch (Not started — no deploy target has been chosen).
- [x] Ingest and verify founder documentation in [docs/company/](docs/company) (COMPANY-001 through COMPANY-003 recorded).
- [ ] Ingest further founder documentation in [docs/company/](docs/company) as provided.
- [x] Experience/architecture audit + ADR-001 spec pass (executed 2026-08-31): founder ratified H1–H5 (5-scene executable experience with deferred unverified beats; Phase 7 palette canonical — TODO 2 closed; founder copy non-blocking; Lumora dual-mode presentation; scroll-linked progression with tap override). Documentation suite 11 → 12 files; the Lumora demo content extracted to `src/content/lumora-demo.ts` (the pass's only code change — rendering byte-identical, string parity verified). Full record in [decisions.md](docs/website/decisions.md) QA Run Records. *(Historical: `lumora-demo.ts` was **deleted** on 2026-09-01 by `5b58001` when the walkthrough was rebuilt on product-factual data — that content now lives in [`src/content/products.ts`](src/content/products.ts). Do not go looking for the file.)*
- [x] Cinematic experience implementation (executed 2026-09-01, no longer gated): the founder approved implementation from commit `1080890` vertical-slice-first; the slice was built, QA-verified and reviewed, two refinements were implemented, and the propagation phase then shipped in full — `SceneProgress` wayfinding, scene-owned widths, Founder stillness composition, Horizon closure, `/products` flagship composition, `/products/lumora` explore mode, bounded `/about` + `/contact` treatment. All ADR-001 primitives are implemented and the five-scene grammar is live site-wide. D11's touch-target and stepper halves were cleared inside the pass; its mobile-parity half is **not** fully closed — see debt **D16**. Full record in [decisions.md](docs/website/decisions.md) QA Run Records.
- [x] Product-truth rebuild (executed 2026-09-01, `5b58001`, 62 files, +2984/−2476): the Lumora demonstration was rebuilt on product-factual data, the failing text tones were replaced with WCAG-AA-clearing values, and [`src/app/product-truth.test.tsx`](src/app/product-truth.test.tsx) was added to guard 25+ forbidden capability terms. **The commit shipped with an empty body and no QA Run Record**; a record was reconstructed from the diff on 2026-09-05 and is marked `RETROACTIVELY RECONSTRUCTED` — founder ratification requested ([TODO 13](docs/website/decisions.md#consolidation-notes--open-todos)). Its 24 replacement copy strings are now registered as [copy.md §13](docs/website/copy.md) ([TODO 16](docs/website/decisions.md#consolidation-notes--open-todos)).
- [x] Company/product hierarchy correction (executed 2026-09-03, `8296651` — recorded contemporaneously): all five routes audited against one question — *if Lumora were temporarily removed, would this still clearly be a SamJuniors company website?* The hero's primary CTA moved from the product to `/products`, the internal-governance topline was replaced, the footer became two derived navs, `reputationPillars` were rendered for the first time, and nineteen visitor-facing strings were changed or added ([copy.md §12](docs/website/copy.md), `PROPOSED`). Guarded by `src/app/company-hierarchy.test.tsx` (15 tests). Two items need a founder ruling rather than a sign-off ([TODO 12](docs/website/decisions.md#consolidation-notes--open-todos)).
- [x] Company-identity accents + SEO/a11y baseline (executed 2026-09-03, `9c3f311` + `a7816d8`): the steel-blue accent token family was **deleted** as a product-truth violation (Lumora's brand forbids the hue; the token had been applied to parent-company chrome), the `--color-evidence-*` role set was introduced for the product evidence surface, link touch targets were brought to 44px, compact-nav dismissal was added, and schema.org graphs + a skip link shipped. Both commits carried contemporaneous bodies but **no QA Run Record**; reconstructed 2026-09-05 and marked as such ([TODO 13](docs/website/decisions.md#consolidation-notes--open-todos)).
- [x] Documentation reconciliation pass (executed 2026-09-05, documentation-only — zero `src/` changes): reconciled the approved record against the shipped code after three unrecorded commits. Executed three founder decisions (palette: correct the docs, not the code, and do not reintroduce the token; unrecorded commits: backfill from the diffs; primitives: document the global classes as the sanctioned path) and cleared audit findings A–F. Opened [TODOs 13–18](docs/website/decisions.md#consolidation-notes--open-todos) — six findings an agent could not close. Registered six new debt items **D12–D17** in [qa-checklist.md §5](docs/website/qa-checklist.md#5-known-debt-register-history--current-state) rather than fixing them, since no code change was authorised. Also fixed four latent documentation defects: an invalid GFM table separator that stopped the debt register from rendering, a published `themeColor` that did not match the code, a published contrast ratio that did not match `tokens.css`, and **two failing contrast ratios published as the AA standard**.
- [ ] Founder review of the open TODOs in [docs/website/decisions.md](docs/website/decisions.md): phase-transition certification for Phases 7–10 (TODOs 1, 18), missing screenshots (TODO 3), pillar placement + `/about` H1 (TODO 12), the retroactive commit reconstructions (TODO 13), the ADR-001 signature-scene move off the homepage (TODO 15), the Lumora copy registration incl. naming a third-party vendor on a public surface (TODO 16), and authorisation for a code pass to clear debt D12–D17 (TODO 17). Palette supersession is closed (TODO 2).
- [ ] Founder copy sign-off in [docs/website/copy.md](docs/website/copy.md) — all strings are currently `PROPOSED` or `PENDING FOUNDER COPY`; wet-sign per the copy.md §0.2 record, and supply the missing founder copy (founder name, testimonials, proof items, persona CTAs, contact experience). *Note: every founder-specific block in `FounderPresence` is gated on its own `companyContent.founder` field and all five are `null`, so Scene 04 currently renders a heading and one paragraph — nothing placeholder ships.*
- [x] Second-pass code fix (executed 2026-08-31): all five debt pages converted to CSS Modules + tokens, broken token names and stale colors fixed, the `[STRUCTURAL CAPABILITY CONTAINER]` placeholder leak removed, placeholder proof items removed, `verifiableEvidence` rendered, fonts self-hosted via `next/font` (qa-checklist debt D1–D7, D9-Button, D10 resolved; D8 + SectionHeader adoption await founder copy) — full record in [decisions.md](docs/website/decisions.md) QA Run Records. *(Superseded 2026-09-05: **D9 is OBSOLETE, not completed** — the `Button` and `SectionHeader` components this entry migrated toward were later deleted, and the founder ruled the global classes the sanctioned path. The stale colour fix named `--color-accent-blue`, a token deleted on 2026-09-03.)*
