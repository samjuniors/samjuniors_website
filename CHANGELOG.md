# Changelog

All notable changes to the SamJuniors Website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Fixed — Second-Pass Production Code Fixes: qa-checklist debt register D1–D10 (code/debt-pass)

- **Placeholder & internal-string leaks eliminated (D1/D2/D3)**: the `[STRUCTURAL CAPABILITY CONTAINER]` label and its render path removed from `products/[slug]/page.tsx`, with `isPlaceholder`-flagged content gated out of production output everywhere; the internal process sentence `(Server Action backend integration boundary prepared).` removed from the contact card body (no invented replacement — richer routing copy remains PENDING FOUNDER COPY per copy.md §8); the two placeholder-flagged items removed from `src/content/proof.ts` (founder copy still pending, tracked in copy.md §10).
- **All five inline-styled pages converted to the binding pattern (D4)** — `about`, `contact`, `products`, `products/[slug]`, `not-found` now each ship a co-located `*.module.css` consuming only `src/styles/tokens.css` values (1:1 visual parity with the former inline styles).
- **Broken CSS variables fixed (D5)**: `--container-narrow-width` → `--container-narrow` (the 840px narrow column now actually applies), `--color-accent-flagship` → `--color-accent-blue` (page eyebrows/chips/links now actually render in the certified steel blue), `--color-bg-canvas` → `--color-bg-base` (via the `Button` primitive on the 404 CTA). These fixes intentionally activate styling the broken names had silently disabled.
- **Stale pre-Phase-7 blue removed (D6)**: hardcoded `rgba(112, 184, 255, 0.1)` replaced with `var(--color-accent-blue-muted)` on both products pages.
- **`verifiableEvidence` now renders (D7)**: the product detail page gained a contextual product-evidence surface (spec §4.5, Product class) below the capability grid — using only strings already registered in copy.md; no new copy was written.
- **Primitive adoption (D9, Button half)**: the 404 page's hand-rolled CTA now uses the `Button` component. `SectionHeader` remains unadopted: its `indexNumber`/`kicker` props require founder-approved strings (not invented in a fix pass).
- **Fonts self-hosted (D10)**: render-blocking Google Fonts `@import` removed from `globals.css`; Inter and JetBrains Mono load via `next/font/google` in `layout.tsx`, wired through the `--font-sans` / `--font-mono` tokens.
- **Verification**: `tsc --noEmit` clean · ESLint 0/0 · vitest 10/10 · `next build` succeeds (8 static pages) · qa-checklist §2.2/§2.3 grep probes clean · production-server browser + VLM inspection of every affected route (zero console errors, zero horizontal overflow at 390px/1440px, sticky footer, correct computed token values). Remaining open debt: D8 (`proofItems` proof surface) and the SectionHeader half of D9 — both founder-copy-dependent. QA run record: docs/website/decisions.md → QA Run Records.
- **Docs updated in lockstep (mandated by qa-checklist §4 release gate + copy.md parity rule)**: qa-checklist.md (§2.2/§2.3/§2.7/§3/§5 with per-item status), copy.md (§6/§8/§9/§10), component-inventory.md (file tree, route map, drift register, primitive status), decisions.md (TODO 4 resolved + QA Run Records), PROJECT.md (TODO checked off).

### Added — Operational Companion Documents: copy, QA checklist, component inventory (docs/copy-qa-components)

- **`docs/website/copy.md` — approved literal website text (SPEC vs COPY split)**: every visitor-facing string compiled from the shipped codebase and content layer, organized page-by-page with a three-level status model (`APPROVED` founder-wet-signed / `PROPOSED` / `PENDING FOUNDER COPY`), a sign-off record, a known-leaks register (`[STRUCTURAL CAPABILITY CONTAINER]`, the contact-page process note), and a placeholder/missing-copy registry (founder name, testimonials, proof items, persona CTAs, contact experience, Privacy/Legal/Support scope). Product-spec keeps *intent*; copy.md owns *the words*. Agents may only draft `PROPOSED` strings; only the founder promotes to `APPROVED`.
- **`docs/website/qa-checklist.md` — concrete acceptance criteria**: turns the QA phase protocol into an executable definition of done — tooling baseline, global gates (build health; grep probe suite for placeholder/internal/decision-ID strings; token-integrity probes incl. the broken `--container-narrow-width` / `--color-accent-flagship` / `--color-bg-canvas` references; links; WCAG contrast table with computed token-pair ratios; responsive breakpoints; performance floors — LCP < 1.2s, CLS 0.00, INP < 50ms, Lighthouse ≥ 90/95/90/90; copy parity against copy.md; HUMAN-001 spot checks), per-page acceptance matrix, a 10-item known-debt register (D1–D10) honestly recording current violations, and a sign-off record format.
- **`docs/website/component-inventory.md` — closed component set & pattern contract**: full catalog of every component in `src/components/` (Header, Footer, HeroSection, ThesisSection, FounderLetter, HorizonSection, LumoraStage, Button, SectionHeader) with type, props, variants, content dependencies, and CSS-module class inventories; global utility classes; token quick reference; content-layer API; route composition map; a drift register documenting why `about/page.tsx` drifted into inline styles (no closed set existed); and a 6-step extension protocol. Binding pattern: CSS Modules + `tokens.css`, no inline styles, content from `src/content/` only.
- Cross-updated INDEX.md, product-spec.md, design-system.md, delivery.md, decisions.md (new TODO 8 founder copy sign-off + note 9), AGENTS.md (reading-scope rule now includes copy.md + component-inventory.md + qa-checklist.md; ownership table), PROJECT.md, README.md, CONTRIBUTING.md. Documentation suite: 8 → 11 files.

### Added — Documentation Consolidation: 44 files → 8 files (docs/consolidation)

- **Consolidated Documentation Suite**:
  - Merged the 12 phase-numbered folders under `docs/website/` plus `docs/company/` (44 files total) into a clean 8-file structure with zero content loss: `docs/company/foundation.md` (company-foundation.md + company README), `docs/website/product-spec.md` (discovery + information architecture + content strategy + UX principles), `docs/website/design-system.md` (design research + wireframes/design direction + design system + UI + brand foundation + design principles), `docs/website/architecture.md` (application architecture + architecture manifesto), `docs/website/delivery.md` (vertical slice + implementation + testing + launch + reviews protocol), `docs/website/decisions.md` (all four per-phase decision logs merged, newest-first, each entry tagged with its destination document).
  - `docs/company/decision-log.md` kept byte-for-byte unchanged (founder-owned).
  - `docs/website/INDEX.md` rewritten to reference only the new 8-file structure; `PROJECT.md`, `ROADMAP.md`, `AGENTS.md`, `README.md`, and `CONTRIBUTING.md` updated to remove all references to the old phase-numbered folders.
  - Added the reading-scope rule to `AGENTS.md`: for single page/component tasks, read only the relevant section of product-spec.md and design-system.md; do not read decisions.md or company/foundation.md unless the task concerns brand identity or historical rationale.
  - Decision ID codes (WD-xxx, IA-xxx, CONTENT-xxx, UX-xxx, USER-FLOW-xxx) now live exclusively inside decisions.md; merged product/design documents read as clean direction, not governance paperwork. HUMAN-001 remains a named governance constraint in design-system.md per its cross-phase role.
  - Open conflicts and gaps flagged as TODOs in decisions.md instead of silently resolved: Phase 7 phase-gate violation (implemented before recorded sign-off), design-direction palette vs certified Phase 7 token palette, four missing screenshot files referenced by the visual review sheet, and the second-pass code fixes for `about/page.tsx` / `products/[slug]/page.tsx` (inline styles + `[STRUCTURAL CAPABILITY CONTAINER]` placeholder string shipping to visitors).

### Added — Branch Reconciliation (chore/merge-visual-evidence)

- Merged `feat/phase-6-visual-evidence` into `main` (Phase 6 visual evidence + Phase 7 design system implementation: `src/styles/tokens.css`, `LumoraStage`, `ThesisSection`, `FounderLetter`, `HorizonSection`, `Button`/`SectionHeader` primitives, visual QA pass, screenshot evidence). PR #1 closed as merged; feature branch deleted from remote. All checks green on merge: `tsc --noEmit`, ESLint, and Vitest (10/10).

### Added — In-App Experience Prototype (feat/phase-6-experience-prototype)

- **Production Next.js Experience Prototype (`src/app/page.tsx`, `src/components/`)**:
  - Implemented the living in-application experience prototype synthesized from upstream strategy, UX principles, and `HUMAN-001`.
  - Built `AmbientCanvas` spatial depth background with lightweight particle mesh.
  - Implemented `HeroSection` establishing immediate parent company clarity without marketing clichés.
  - Implemented `PhilosophySection` rendering the 4-point building filter in an editorial two-column layout.
  - Implemented `ShowcaseSection` & `LumoraWorkbench` providing an interactive living demonstration of Lumora (Spatial Graph, Intelligence, Universal Export) with zero scroll-jacking.
  - Implemented `EcosystemSection` (scalable multi-product container), `FounderSection` (signed conviction), and `GatewaySection` (contextual doorways).
  - Enforced `INTERNAL KNOWLEDGE != WEBSITE CONTENT`: zero decision IDs, zero process jargon, and zero fabricated claims.

### Added — Master Project Index & Design Direction Relocation (docs/website-navigation-map)

- **Master Project & Documentation Index (`docs/website/INDEX.md`)**:
  - Created concise master project map detailing all 12 phases, authority hierarchy, status, primary documents, authoritative reading order, and phase-gating rules without content duplication.
- **Relocated Strategic Design Direction (`docs/website/05-wireframes/design-direction.md`)**:
  - Moved design direction from `07-ui` to `05-wireframes` to serve as the bridge between research and in-app experience prototyping, preserving Phase 8 (`07-ui`) exclusively for high-fidelity UI design.
  - Synthesized psychological experience intent (Feel, Understand, Become Curious) and authoritative brand character.
  - Formulated visual synthesis (materials, typography dialogue, color philosophy) adhering strictly to `HUMAN-001`.
  - Removed fictional future product entities (`venture-b`) from visitor-facing application while retaining full multi-product architectural support.

### Added — Production Application Architecture (docs/application-foundation)

- **Application Architecture Specification (`docs/website/application-architecture.md`)**:
  - Established Next.js (App Router), TypeScript, Vanilla CSS / CSS Modules, and typed static data architecture (`src/content/`).
  - Defined multi-product routing topology (`/`, `/products`, `/products/[slug]`, `/about`, `/contact`) supporting dynamic product prominence and autonomous deep-entry resilience.
  - Decoupled content schemas from UI presentation to enable future CMS and database migration without component refactoring.
  - Enforced `HUMAN-001` engineering restraint, server-first execution, and Core Web Vitals budgets.

### Added — Phase 5 Design Research (docs/04-design-research)

- **Evidence-Driven Design Research (`docs/website/04-design-research/design-research.md`)**:
  - Synthesized empirical research and actionable implications across 8 key domains: Cinematic web experiences, Human/distinctive visual design, Progressive disclosure, Multi-product parent-company architecture, Motion/interaction ergonomics, Mobile touch adaptation, Contextual trust/evidence, and Cognitive load management.
  - Established 8 core research conclusions to govern Wireframing (Phase 6), Design System (Phase 7), and UI Design (Phase 8).
  - Enforced strict alignment with `HUMAN-001`, `CONTENT-001` through `CONTENT-010`, `UX-001` through `UX-019`, and `USER-FLOW-001` through `USER-FLOW-005`.

### Added — Cross-Phase Design Governance (docs/human-design-governance)

- **HUMAN-001: Human-Made Design & Implementation**:
  - Established cross-phase quality and design governance constraint ensuring the website does not exhibit recognizable generic AI-generated visual or implementation patterns.
  - Defined explicit prohibitions against generic AI tropes (purple/cyan gradient blobs, excessive glassmorphism, monotonous card grids, template section blocks, meaningless decorative particles, generic copy buzzwords) when used without meaningful justification.
  - Enforced the **Distinctiveness Test** (*"If the SamJuniors identity were removed, could this design be mistaken for a generic AI startup website?"*) and **Human-Authorship Test** across Phases 5 through 11.
  - Mandated deliberate engineering restraint (avoiding unnecessary abstractions, unvetted dependencies, and performance regressions for visual novelty).
  - Cross-referenced across `design-principles.md`, `ux-principles.md`, `ux-decision-log.md`, `ux-index.md`, `AGENTS.md`, `PROJECT.md`, and all downstream phase READMEs (`04-design-research` through `10-testing`).

### Added — Phase 4 UX Principles & User Flow Foundation (docs/ux-principles-foundation)

- **Phase 4 UX Principles & Initial User Flow Foundation — UX-013 through UX-019 and USER-FLOW-001 through USER-FLOW-005 synchronized**:
  - **UX-013**: Understanding Must Accompany Curiosity (Cinematic reveals and surprises must preserve continuous comprehension across 4-part mental model).
  - **UX-014**: Interaction Must Earn Its Friction (Every interaction must deliver positive value-to-friction ratio; prohibited novelty anti-patterns).
  - **UX-015**: Visitor Control (Sovereign control over scroll, navigation, pacing, and skipping; zero forced waits or scroll-jacking).
  - **UX-016**: Progressive Disclosure (Aligned with 3 non-linear information depths from CONTENT-003).
  - **UX-017**: Mobile Is First-Class (Independently composed responsive experience; zero hover-dependencies).
  - **UX-018**: Predictable Restrained Navigation (Wayfinding clarity preserved; no navigation hidden for aesthetic drama).
  - **UX-019**: Recovery & Continuity (Immediate, non-destructive recovery path for every state; explicit support for reduced motion and deep links).
  - **USER-FLOW-001**: First-Time Visitor Journey (Ideal narrative progression topology; non-mandatory funnel).
  - **USER-FLOW-002**: Multiple Valid Entry Points (Direct links, organic search, deep product URLs supported autonomously).
  - **USER-FLOW-003**: Natural Next Move (Understandable next steps; CTA intensity scales with intent).
  - **USER-FLOW-004**: Contextual CTA Hierarchy (Single dominant primary action per state; intent-aligned).
  - **USER-FLOW-005**: Returning Visitor Flow (Curated continuity without forced intro reruns or noisy feeds).
- **User Flow Foundation Specification (`docs/website/03-ux-principles/user-flow-foundation.md`)**: Documented Core Flow Model (First Visit, Returning Visit, Deep Link Entry), entry point topologies, and contextual CTA mechanics.
- **UX Decision Log (`docs/website/03-ux-principles/ux-decision-log.md`)**: Structured decision records for `UX-013` through `UX-019` and `USER-FLOW-001` through `USER-FLOW-005`.

### Added — Phase 3 Content Strategy Milestone (docs/content-strategy-milestone)

- **Phase 3 Content Strategy Milestone — CONTENT-001 through CONTENT-010 synchronized**:
  - **CONTENT-001**: Parent-Company-First Architecture (SamJuniors as permanent narrative/brand center, products as expressions, scalable multi-product architecture, strategically curated prominence).
  - **CONTENT-002**: Hybrid Product Discovery (Cinematic, curated, progressive product discovery on homepage; structured, comprehensive exploration in dedicated products area).
  - **CONTENT-003**: Three Information Depths (Instant, Understand, Deep Dive as non-linear information layers rather than a forced sequential funnel).
  - **CONTENT-004**: Core SamJuniors Positioning Direction (*"SamJuniors looks toward what could be next and turns ambitious ideas into real, useful technology"*).
  - **CONTENT-005**: Primary Messaging Hierarchy (5-step narrative: SamJuniors → What we're building → Why it matters → Proof → Explore/Participate).
  - **CONTENT-006**: Contextual Proof System (4 evidence types: People, Product, Builder, Evidence; strict zero-fabrication rule for testimonials, metrics, and logos).
  - **CONTENT-007**: One Dominant Cognitive Purpose (Cognitive focus per scene, visual hierarchy determining information density over mechanical minimalism).
  - **CONTENT-008**: SamJuniors → Lumora Transition (Lumora introduced as first major proof of system capability rather than generic SaaS ad).
  - **CONTENT-009**: Founder Presence Architecture (Surface depth for contextual leadership/credibility; Deep depth for dedicated founder essay; strict *SamJuniors ≠ Founder* boundary).
  - **CONTENT-010**: Future Layer Classification (Strict delineation between Company Vision, Committed Roadmap, Active Exploration, and Speculation; zero sci-fi hype).
- **Architectural Content Model (`docs/website/02-content-strategy/content-model.md`)**: Established domain entity architecture, attributes, depth mapping, and scalable multi-product schema (clarified as architectural data model, not finalized navigation).
- **Content Decision Log (`docs/website/02-content-strategy/content-decision-log.md`)**: Structured decision records for `CONTENT-001` through `CONTENT-010`.

### Added — Company Foundation Intake (docs/company-foundation)

- **Canonical Company Foundation Established (`docs/company/company-foundation.md`)**:
  - **COMPANY-001**: Parent Company Identity (AI-first ecosystem, enduring brand layer, Lumora as product not whole company, future-proof architecture), Company Purpose (founder-approved working direction), Desired Company Reputation (AI innovation, engineering execution, enduring ecosystem), Founder Role (visionary leader/builder/architect, human connection without *SamJuniors = Founder*), and 4-point Building Filter (Innovation, User Value, Impact, Long-term Vision).
  - **COMPANY-002**: Differentiator (turn ambitious ideas into real products, build toward what people need next) and 6-stage non-speculative Building Cycle (*See what could be next → Identify meaningful opportunity → Build seriously → Make useful → Learn from real people → Evolve*).
  - **COMPANY-003**: Cross-Product Thesis (Why we build + How we build) and Product Architecture Principle (permanent parent narrative, strategically curated prominence, multi-product scalability).
- **Company Decision Log (`docs/company/decision-log.md`)**: Formalized structured decision records for `COMPANY-001`, `COMPANY-002`, and `COMPANY-003`.
- **Docs Separation**: Reaffirmed strict hierarchy separating `docs/company/` (highest authority truth) from `docs/website/` (derived specifications).

### Changed — Roadmap Reconciliation (chore/reconcile-production-roadmap)

- **12-Phase Lifecycle Established**: Expanded `ROADMAP.md` from 9 phases to the authoritative 12-phase production lifecycle.
  - Phase 1: Discovery & Website Strategy
  - Phase 2: Information Architecture
  - Phase 3: Content Strategy
  - Phase 4: UX Principles & User Flows *(formalized from prior parallel track)*
  - Phase 5: Design Research *(new phase)*
  - Phase 6: Wireframes *(renumbered from Phase 4)*
  - Phase 7: Design System *(renumbered from Phase 5)*
  - Phase 8: UI Design *(renumbered from Phase 6)*
  - Phase 9: Vertical Slice Validation *(new mandatory quality gate)*
  - Phase 10: Frontend Development *(renumbered from Phase 7)*
  - Phase 11: QA *(renumbered from Phase 8)*
  - Phase 12: Launch *(renumbered from Phase 9)*

- **Phase Sequencing Rule**: Added formal rule to `ROADMAP.md` — Phase 9 (Vertical Slice Validation) is a mandatory blocking gate between UI Design and Frontend Development.

- **Directory Numbering Collision Resolved**: `docs/website/02-ux-principles/` and `docs/website/02-content-strategy/` shared the same numeric prefix. The duplicate has been resolved by migrating all phase directories to a consistent 0-indexed numbering scheme aligned with the 12-phase lifecycle. All migrations performed via `git mv` to preserve Git history.

- **Directory Migrations** (via `git mv`):
  - `02-ux-principles/` → `03-ux-principles/`
  - `03-wireframes/` → `05-wireframes/`
  - `04-design-system/` → `06-design-system/`
  - `05-ui/` → `07-ui/`
  - `06-implementation/` → `09-implementation/`
  - `07-testing/` → `10-testing/`
  - `08-launch/` → `11-launch/`

- **New Placeholder Directories Created**:
  - `docs/website/04-design-research/README.md` — Phase 5: Design Research. Defines 10 research domains, entry/exit criteria, and output requirements. Status: Placeholder, pending Phase 4 sign-off.
  - `docs/website/08-vertical-slice/README.md` — Phase 9: Vertical Slice Validation. Defines proposed validation slice (Homepage → Lumora reveal → Trust → CTA), 10 validation dimensions, entry/exit criteria, and deliverables. Status: PROPOSED, pending Phase 8 approval.

- **Cross-Reference Audit**: Updated stale `02-ux-principles` path references in `cognitive-ux-principles.md`, `ux-index.md`, `ux-principles.md`, `ux-003-user-journeys.md`, and `brand-foundation.md`.
  - Note: Historical `CHANGELOG.md` entries referencing `02-ux-principles` are intentionally preserved as immutable historical record.

- **Governance Files Updated**:
  - `AGENTS.md` — Phase number references in Sections 8 and 9 updated to Phase 10 (Frontend Development), Phase 7 (Design System), and Phase 8 (UI Design). All governance rules, authority hierarchy, and Discover→Merge workflow preserved.
  - `PROJECT.md` — Project Phases list expanded to 12 phases; Open TODOs updated to reflect reconciled status.

---

## [Historical — Pre-Reconciliation]

### Added
- **Phase 4 UX Milestone 1 Synchronized (UX-001 through UX-012)**:
  - Created `UX-001: Primary User Personas` (`docs/website/02-ux-principles/ux-001-personas.md`).
  - Created `UX-002: User Goals, Personas & Success Criteria` (`docs/website/02-ux-principles/ux-002-user-goals.md`).
  - Created `UX-003: User Journey Mapping` (`docs/website/02-ux-principles/ux-003-user-journeys.md`).
  - Created `Core UX Principles` (`docs/website/02-ux-principles/ux-principles.md`) capturing UX-004 through UX-012.
  - Created `Cognitive UX Principles` (`docs/website/02-ux-principles/cognitive-ux-principles.md`) detailing psychological foundations, working memory, and cognitive load theory.
  - Created `UX Decision Log` (`docs/website/02-ux-principles/ux-decision-log.md`) and `UX Master Index` (`docs/website/02-ux-principles/ux-index.md`).
  - Updated `architecture-manifesto.md` and `brand-foundation.md` with new UX philosophy.
- **Stage 3 (Information Architecture) Certified & Architecture Frozen**:
  - Created constitutional `architecture-manifesto.md` defining core philosophy, quality gates, and freeze policy.
  - Performed 10-dimension architectural audit and published `stage-3-certification.md`.
  - Expanded `design-principles.md` with complete principles WD-015 through WD-027 and IA-001 through IA-009.
  - Upgraded master and IA decision logs with mandatory structured framework (Decision, Reason, Alternatives Considered, Why Alternatives Were Rejected, Benefits, Risks, Future Review Criteria).
  - Certified Homepage Architecture specification (`ia-01-homepage-architecture.md`).
  - Stage 3 complete; repository certified and ready for Phase 4 (Wireframes).
- Phase 2 (Information Architecture) Part 2 approved Product Ecosystem architecture (`IA-005`), Honest Roadmap Principle (`WD-017`), and One Hero Product Principle (`WD-018`).
- Created canonical `design-principles.md` capturing experiential, product presentation, and transparency principles.
- Updated `brand-foundation.md` with Website Product Strategy (progressive disclosure, hero product, ecosystem expansion, honest roadmap).
- Phase 2 (Information Architecture) initialized with master index (`ia-index.md`) and decision log (`ia-decision-log.md`).
- Approved Homepage Architecture specification (`ia-01-homepage-architecture.md`).
- Approved Information Architecture decisions IA-001 (Primary Homepage Journey), IA-002 (Primary Navigation), IA-003 (Homepage Hero Strategy), and IA-004 (Homepage Narrative Architecture).
- Established permanent UX principles: WD-015 (Signature Experience Principle) and WD-016 (Narrative Scroll Principle) integrated into `brand-foundation.md`.
- Phase 1 (Website Discovery) Stage 2: Brand Story & Identity approved documentation (`stage-02-brand-story-and-identity.md`).
- Canonical Brand Foundation document establishing core messaging, narrative, brand pillars, emotional journey, archetype, voice, and visual personality (`docs/website/brand-foundation.md`).
- Approved Decision records WD-007 through WD-014 in `decision-log.md`.
- Phase 1 (Website Discovery) Stage 1: Vision & Strategy approved documentation (`stage-01-vision-and-strategy.md`).
- Approved Decision records WD-001 through WD-006 in `decision-log.md`.
- Phase 1 Discovery Index tracking stage progression (`discovery-index.md`).
- Initial project foundation and repository governance structure.
- AI agent operating guidelines and rules in `AGENTS.md`.
- Project definition, objectives, and scope in `PROJECT.md`.
- Phase-based milestone roadmap in `ROADMAP.md`.
- Contribution guidelines in `CONTRIBUTING.md`.
- Documentation structure under `docs/company/` and `docs/website/`.
- Repository `.gitignore` and `README.md`.

