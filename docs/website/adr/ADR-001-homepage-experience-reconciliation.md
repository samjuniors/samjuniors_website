# ADR-001 — Homepage Experience Reconciliation: 10-Step Strategic Model → 5-Scene Executable Experience

> **Status**: **APPROVED** (founder-ratified 2026-08-31 via the experience/architecture audit review).
> **Type**: Architecture Decision Record amending the Stage 3 Information Architecture freeze ([product-spec.md §3.6](../product-spec.md#36-stage-3-certification--freeze)).
> **Approval scope**: This single ADR ratifies five founder decisions (the H1–H5 approval bundle) recorded in §5 below; its summary and approval outcome are mirrored in [decisions.md](../decisions.md) per the governance rule that approval outcomes are always reflected there.
> **Implements**: nothing by itself. This is a specification-only decision — production UI implementation of the cinematic experience is a separate, gated pass (see §8).

---

## 1. Context

The certified-and-frozen Stage 3 homepage architecture ([product-spec.md §3.4](../product-spec.md#34-homepage-narrative-architecture-10-steps)) specifies a 10-step narrative with two mandatory Signature Moments. An experience/architecture audit of the production build (commit `cd32ba5`, 2026-08-31) established:

1. **The implementation ships 5 beats, not 10.** The implemented homepage (Hero → Thesis → Lumora Stage → Founder Letter → Horizon) is a truthful compression of the certified trust arc to the content that can be stated **without fabrication** (Zero Fabrication, [product-spec.md §4.5](../product-spec.md#45-contextual-proof-system)): no verified testimonials, metrics, milestones, or roadmap exist yet, so certified steps 7 (Journey/Timeline, Signature Moment #2), 8 (Social Proof), 9 (Future Roadmap), and the persona-conversion layer of step 10 **cannot be truthfully rendered today**.
2. **The presentation layer under-delivers the approved experience intent.** Approved principles — Every Scroll Must Reward, Signature Experience, Scene-Based Storytelling, Cinematic Language — demand a pacing/revelation choreography that no current specification makes implementable ([design-system.md §6.8](../design-system.md#68-motion--micro-interactions) specified only hover micro-feedback). The result renders every scene at the same density, width, and background with zero motion system, which the audit identified as the root cause of the "lifeless/conventional" experience.
3. **An unregistered contract violation exists**: the Lumora demonstration narrative (4 phases × ~20 strings) is hardcoded inside the client component `LumoraStage.tsx`, violating the content-layer binding contract ([component-inventory.md §2.3](../component-inventory.md#2-mandatory-pattern-contract-binding-for-all-componentpage-work)).
4. **Mobile parity is violated**: the Lumora workbench hides both side panels via `display: none` below 980px (content loss — [product-spec.md §6.6](../product-spec.md#66-core-ux-principles) Mobile Is First-Class), and its tab/step controls sit below the 44×44px touch-target floor ([design-system.md §4.10](../design-system.md#410-independent-mobile-composition-mobile-is-first-class)).

## 2. Decision

### 2.1 Two-tier homepage architecture (H1)

The homepage narrative architecture is reconciled into two explicitly separated tiers:

| Tier | Structure | Role |
| :--- | :--- | :--- |
| **Strategic model** | The certified **10-step narrative** ([product-spec.md §3.4](../product-spec.md#34-homepage-narrative-architecture-10-steps)) | The enduring target model: the full journey the homepage must deliver **once verified content exists**. Retained unchanged as the strategic north star. |
| **Executable experience** | The **5-scene production arc** (this ADR, §3) | What the homepage **is** today and shall be implemented as: the truthful subset of the strategic model, with unverified beats **explicitly deferred** — never fabricated to preserve the 10-step form. |

**Deferred-beats register** (steps not implementable without founder-supplied verified content; each activates by content availability, not by invention):

| Strategic step | Status | Activation condition |
| :--- | :--- | :--- |
| 6 — Why We're Different (as standalone step) | **Folded** into Scene 02 (Thesis — Core Convictions already carries this content truthfully) | — |
| 7 — Journey / Timeline (Signature Moment #2) | **Deferred** | Verified company milestones exist and are founder-supplied |
| 8 — Social Proof (Distributed Trust) | **Deferred** | Verified testimonials/proof ([copy.md §10](../copy.md#10-placeholder--missing-copy-registry-pending-founder-copy) rows 2–3) |
| 9 — Future Roadmap (Honest Roadmap) | **Deferred** | Verified engineering roadmap copy (copy.md §10 row 4) |
| 10 — persona-specific conversion CTAs | **Partially deferred** | Persona CTA copy (copy.md §10 row 5); the generic two-path ending (Scene 05) ships today |

**Signature Moments remapping**: the certified architecture requires two homepage Signature Moments. Under this ADR:
- **Signature Moment #1 → the Lumora Reveal (Scene 03)** — the sticky, progressively-revealed intelligence-loop demonstration. It replaces the "Interactive Vision Statement" concept (step 2), whose content never materialized; the flagship demonstration is the stronger, truthful, already-content-backed moment.
- **Signature Moment #2 → deferred** with step 7 (Journey/Timeline). One signature moment ships; the second is a tracked gap, not an invented one.

### 2.2 Palette supersession closed (H2)

The implemented Phase 7 token palette (institutional copper `#c89666`, steel blue `#628cb3`, obsidian `#0b0c0f`, text `#f4f6fa` — [design-system.md §6.2](../design-system.md#62-semantic-color-system), `src/styles/tokens.css`) is **canonical**. The earlier strategic-direction palette (`#08090c`, `#d4a373`, `#70b8ff`, `#f0f3f6`) is formally superseded historical context. No competing palette definitions are maintained; resolves [decisions.md](../decisions.md) TODO 2.

### 2.3 Founder copy is not a presentation blocker (H3)

The presentation architecture (scenes, motion, pacing, interaction) proceeds **without** founder identity copy. Founder identity, biography, and claims are never invented; the Founder Letter scene (Scene 04) is **structurally ready** for verified founder content (name, role, one-line bio per [copy.md §10](../copy.md#10-placeholder--missing-copy-registry-pending-founder-copy) row 1) and keeps its current honest placeholder signature ("Founder & Leadership") until supplied.

### 2.4 Lumora dual-mode presentation (H4)

The Lumora demonstration is presented through **two interaction modes over one shared content/state model** (`src/content/lumora-demo.ts`, §6):

| Mode | Location | Interaction | Depth tier |
| :--- | :--- | :--- | :--- |
| **Scroll-driven progressive reveal** | Homepage Scene 03 | Phase progression linked to native scroll position through a sticky stage; explicit tap controls override at any time | Understand (1–3 min) |
| **Free/tap exploration** | `/products/lumora` | Phase switching via tab/step controls only; no sticky, no scroll linkage | Deep Dive |

**Boundary constraint (binding)**: Lumora remains a **conceptual/product demonstration**. Neither mode may imply unimplemented product functionality is live. The framing is the already-registered copy: the "Interactive conceptual demonstration…" evidence copy, `STATUS: BETA` honest status, and the exhibit-fiction note ([copy.md §4](../copy.md#4-home--lumora-stage-lumorastage-anchor-lumora) note). SamJuniors (company) and Lumora (product) remain architecturally and conceptually distinct: the site *demonstrates/explains* Lumora; it does not *operate* it.

### 2.5 Scroll-linked progression with tap override (H5)

Lumora phase progression on the homepage is **scroll-linked**: driven by scroll position via IntersectionObserver thresholds on phase sentinels inside a `position: sticky` stage. **Native browser scrolling remains authoritative** — zero scroll-jacking, zero scroll trapping, zero scroll-snap enforcement, zero momentum alteration (per UX-015 Visitor Control and the Hybrid Scroll & Progression Model, [product-spec.md §6.6](../product-spec.md#66-core-ux-principles)). **Explicit tap controls (step buttons/tabs) are always present and always override** the scroll-derived state. `prefers-reduced-motion: reduce` collapses the scene to static, tap-only progression.

## 3. The 5-Scene Executable Experience

Scene order, treatments, and devices (the composition rules each scene must obey are specified implementably in [design-system.md §6.8](../design-system.md#68-motion--micro-interactions)):

| Scene | Beat | Strategic steps covered | Treatment | Primary device |
| :--- | :--- | :--- | :--- | :--- |
| **01 — Overture** (Hero) | Vision | 1 | Full-viewport statement; intentional emptiness; one-time staged load choreography | Scale + stillness |
| **02 — Thesis** (Building Philosophy) | Company & differentiation | 2 (folded), 4, 6 | Calm reading zone; strongest asymmetry; single first-entry reveals per block | Reading rhythm |
| **03 — Lumora Reveal** (Flagship) | Product proof | 5 | **Signature Moment** — sticky stage, scroll-linked 4-phase state progression, breakout width | Progressive revelation + state continuity |
| **04 — Founder Letter** | Human credibility | 3 | Near-empty viewport, quiet column, maximum negative space; no motion beyond first-entry reveal | Stillness as pacing beat |
| **05 — Horizon** | Ecosystem & action | 10 (partial) | Two-path ending; lighting shift to surface tone; end-credits footer treatment | Closure |

Persistent layer: a scene-progress wayfinding indicator (mono-indexed `01–05`) unifying the existing per-section numbering into one orientation device (replaces the current duplicated tenet/section numbering).

## 4. Alternatives Considered

1. **Implement the certified 10-step structure literally** — fabricating placeholder-grade proof/roadmap/testimonial beats to preserve the frozen form. **Rejected**: violates Zero Fabrication ([product-spec.md §4.5](../product-spec.md#45-contextual-proof-system)) and the founder's explicit instruction "Do NOT fabricate the missing proof, roadmap, testimonial, or persona-conversion content merely to preserve the old 10-step implementation."
2. **Abandon the 10-step model and re-freeze on 5 scenes.** **Rejected**: discards certified strategic intent that remains correct; the 10-step model is the target state as content arrives, and the audit found the beat *order* already truthful.
3. **Keep the 5 beats but present them as today** (no scene grammar, no motion system, no signature staging). **Rejected**: this is the status quo the founder judged "lifeless/conventional"; it implements the beats without *staging* them.
4. **Cinematic via heavy motion** (parallax, particles, scroll-hijacked sequences). **Rejected**: prohibited by approved principles (Zero Scroll-Jacking, Animation Purpose Test, HUMAN-001 anti-patterns) and by the founder's explicit "Do not equate cinematic with more animation."

## 5. Founder Decisions Ratified (H1–H5, 2026-08-31)

| ID | Decision | Status |
| :--- | :--- | :--- |
| H1 | Reconcile to the truthful 5-scene executable experience via this ADR; 10-step remains the strategic model; unverified beats explicitly deferred | **APPROVED** |
| H2 | Phase 7 copper/steel-blue palette canonical; palette supersession closed; no competing definitions maintained | **APPROVED** (resolves decisions.md TODO 2) |
| H3 | Founder copy is not a presentation blocker; no invented founder identity/claims; founder scene structurally ready | **APPROVED** |
| H4 | Lumora dual-mode presentation (homepage scroll-driven; `/products/lumora` tap exploration; shared content/state model; conceptual-demonstration boundary) | **APPROVED** |
| H5 | Scroll-linked phase progression with explicit tap override; native scroll authoritative; zero scroll hijacking | **APPROVED** |

## 6. Consequences

**Benefits**
- The shipped homepage becomes a truthful, honest, stageable experience without a single fabricated fact.
- The presentation layer gains an implementable spec (scene grammar, motion budget, sticky signature scene, mobile-native recomposition) that pays down the audit findings (uniform density, zero motion system, fake-liveness workbench, mobile content loss).
- The Lumora demo content moves into the content layer, restoring the binding contract and enabling the dual-mode reuse (H4).
- The deferred-beats register converts a silent gap into an explicit activation path.

**Risks & Obligations**
- Two numbering/wayfinding systems must be unified carefully at implementation time (hero tenets `01–03` vs. section indices `02–06`) to avoid regression to duplicated numbering.
- The sticky signature scene is the highest-risk interactive element in the codebase; it must pass the new motion-safety gates ([qa-checklist.md §2.10](../qa-checklist.md#210-motion--interaction-safety-adr-001-implementation-gates)) before merge.
- Scene composition rules (width/lighting/scale rhythm) will touch every homepage component's module CSS; scope discipline is required to avoid visual regressions on secondary pages.
- The "structurally ready" founder scene must not accumulate invented placeholder copy while awaiting verified content.

**Future Review Criteria**
- Each deferred beat activates only via founder-supplied verified content recorded in [copy.md](../copy.md).
- The second Signature Moment activates with verified milestones (step 7).
- QA re-verification after implementation: [qa-checklist.md](../qa-checklist.md) §2.10 gates + §3 home row + [decisions.md](../decisions.md) QA run record.
- Post-launch: scroll-depth and scene-completion analytics per USER-FLOW-001 review criteria.

## 7. Records & Cross-References

- Founder approval transcript: experience/architecture audit review session (2026-08-31), summarized in [decisions.md](../decisions.md) ADR index + summary record.
- Implementable scene & motion specification: [design-system.md §6.8](../design-system.md#68-motion--micro-interactions) (as extended by this ADR).
- Component contracts for the three new primitives: [component-inventory.md §4.10–§4.12](../component-inventory.md#410-reveal-specified-adr-001) (Reveal, SceneProgress, StickyStage — status SPECIFIED).
- Content contract for the demonstration: `src/content/lumora-demo.ts` (extracted from `LumoraStage.tsx` in the same spec pass; strings verbatim per [copy.md §4](../copy.md#4-home--lumora-stage-lumorastage-anchor-lumora) parity).
- Homepage executable-structure amendment: [product-spec.md §3.4.1](../product-spec.md#341-current-executable-experience-5-scenes) (new subsection; §3.4 retains the strategic model).
- Freeze amendment: [product-spec.md §3.6](../product-spec.md#36-stage-3-certification--freeze) ADR-001 note; [architecture.md §10](../architecture.md#10-architecture-freeze-policy) remains governing for all other structural changes.

## 8. Implementation Gating

This ADR authorizes **specification only**. Production UI implementation of the 5-scene cinematic experience (scene rhythm, motion system, sticky Lumora reveal, mobile recomposition, wayfinding) is **not yet authorized** and awaits explicit founder approval, then follows the vertical-slice-first sequence in [delivery.md §2](../delivery.md#2-vertical-slice-validation-mandatory-quality-gate) with the new QA gates as acceptance criteria.
