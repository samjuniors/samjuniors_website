# Changelog

All notable changes to the SamJuniors Website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Changed — Documentation Reconciliation Against Shipped Code (2026-09-05, documentation-only)

Four days of code had shipped past the documentation. This pass reconciled the record and changed **no** production code — every code finding is registered, not fixed.

- **Three unrecorded commits documented retroactively**: `5b58001`, `9c3f311` and `a7816d8` shipped with no QA Run Record and no decision entry. Records are reconstructed from the diffs and marked `RETROACTIVELY RECONSTRUCTED` — they are not contemporaneous verification and must not be read as such (decisions.md TODO 13).
- **Palette record corrected, code left alone** (founder decision): copper `#c89666` plus the `--color-evidence-*` roles are canonical, and the deleted steel-blue family **must not be reintroduced**. This is the one place where "documentation governs, code must be refactored" is deliberately overridden, because applying it mechanically would restore a product misrepresentation.
- **Primitives record corrected to reality** (founder decision): the global `.btn-primary` / `.btn-secondary` / `.text-link` / `.hairline-divider` classes in `globals.css` are the sanctioned styling path. component-inventory §4.8/§4.9 were rewritten, §1's "only sanctioned styling path" claim corrected, and debt **D9 closed as OBSOLETE, not completed** — it had been recorded as resolved for five days against components that no longer existed.
- **Four latent documentation defects fixed**: an invalid GFM table separator that prevented the debt register from rendering at all, a published `themeColor` (`#0c0d10`) that did not match the code (`#0b0c0f`), a published contrast ratio (`18.1:1`) that did not match `tokens.css` (`17.4:1`), and **two failing ratios (3.3:1 and 2.1:1) published as the AA standard** — a gate that certified a failure.
- **Gate hole closed**: the colour-literal probe was scoped to `--glob '*.tsx'`, so hardcoded literals inside CSS Modules fell outside it entirely; the probe now covers `*.tsx` and `*.module.css`, and the token-existence check runs in both directions.
- **Six new debt items registered** (**D12–D17**) rather than fixed, and six findings opened as founder decisions (decisions.md TODOs 13–18) — including that ADR-001's signature scene no longer renders on the homepage.
- **Phase ledger refreshed** in PROJECT.md and INDEX.md: Phases 8 and 10 are now recorded as implemented-without-sign-off rather than pending, Phase 9's gate as the one that genuinely ran, Phase 11 as partial.

### Added — Company/Product Hierarchy Correction (2026-09-03, `8296651`)

Every route audited against one question: if Lumora were temporarily removed, would this still clearly be a SamJuniors company website? Each change below is a place where the answer was no.

- Hero primary CTA moved from `/products/lumora` to `/products`, with the product demoted to a supporting text link — the site's strongest action had been product-scoped, so removing Lumora removed the primary ask. Hero topline's internal governance vocabulary ("Parent Technology Ecosystem") replaced with "AI-first technology company".
- Primary nav `About` → `Company`; the flat footer link row became two labelled navs (Company, Products) with product entries derived from the registry, so a second product needs no navigation edit.
- `/products` gained a company-scoped eyebrow and lead, a `Flagship product` chip, and a closing company-standard band rendering `reputationPillars` — dead data until then — with an onward path to `/about`. The page previously ended after the product panel.
- `/about`'s H1 now states what the company is, not only how it builds, closing with a bridge that names the flagship once as an output of the filters. `/contact` asks what the visitor wants from SamJuniors, with product access as one of three named reasons. Scene 03 and `/contact` carry company attribution above the product name.
- **New guard** `src/app/company-hierarchy.test.tsx` (15 tests): company named before any product in visible text on every route, company-scoped primary CTA, the portfolio standard rendered only from company content so it survives an empty registry, footer groups keeping products out of the company group, and no internal governance vocabulary in rendered output.
- Nineteen strings registered `PROPOSED` in copy.md §12. Two need a founder ruling rather than a sign-off: where the reputation pillars belong, and what `/about`'s new H1 claims that page to be (decisions.md TODO 12).

### Added — Structured Data, Skip Link, Evidence-Band Honesty (2026-09-03, `a7816d8`)

Carried a detailed commit body but **no QA Run Record**; reconstructed 2026-09-05 (decisions.md TODO 13).

- schema.org graphs emitted through the `JsonLd` component — on **two routes only**, not site-wide.
- Skip link (`.skip-link`, WCAG 2.4.1) added; the evidence band reworked so what it shows matches what was actually captured.

### Changed — Company-Identity Accents, 44px Targets, Compact-Nav Dismissal (2026-09-03, `9c3f311`)

Carried a detailed commit body but **no QA Run Record**; reconstructed 2026-09-05 (decisions.md TODO 13).

- **Removed** `--color-accent-blue` with its `-hover` / `-muted` / `-border` variants, plus the `--accent-blue`, `--accent-steel` and `--accent-emerald` aliases. The token was being applied to parent-company chrome, inverting the company→product hierarchy, and Lumora's own brand system forbids the hue outright ("No indigo. No blue.", primary `#372198`) — which made a blue "Lumora accent" a fabricated product attribute rather than a styling choice.
- **Added** the `--color-evidence-*` role set for the product's light evidence surface, led by `--color-evidence-accent #4f3db0`.
- Link touch targets raised to 44px; `CloseNavOnNavigate` added so the compact nav dismisses on navigation.

### Changed — Product-Truth Correction & Lumora Workflow Walkthrough (2026-09-01, `5b58001`)

62 files, +2984/−2476, **committed with an empty body** — seven unrelated concerns in one commit. Reconstructed from the diff alone on 2026-09-05; founder ratification requested (decisions.md TODO 13).

- **Lumora rebuilt on product-factual data**: the entire demonstration copy was replaced with a product-truthful string set that was never drafted into copy.md at the time. Registered retroactively as copy.md §13 (24 strings, `PROPOSED`), two of which name a third-party vendor as the evaluation engine on a public marketing surface — a disclosure call, not a copy-style one.
- **New guard** `src/app/product-truth.test.tsx`: fails on `academic operating system`, `syllabus`, `air-gapped`, `privacy vault`, `sovereign`, `context ingest`, `decision support` and 18 more terms, across both rendered output and source text. At least 11 of copy.md §4's strings contain a forbidden term, so **implementing that older approved-track spec would now fail CI**; §4 is marked SUPERSEDED and kept only as history.
- **Accessibility repair**: `--color-text-muted` `#5a6372` → `#7e8899` and `--color-text-dim` `#404652` → `#6f7a8c`, because both **failed WCAG 2.1 AA for normal-size text** (3.3:1 and 2.1:1). `tokens.css` now carries its measured ratios inline (17.4 / 7.3 / 5.5 / 4.5) and the standing rule "keep any new tone at or above 4.5:1". This was the one unambiguous accessibility fix in the commit, and it stayed invisible in the record for four days.
- **Removed** `src/content/lumora-demo.ts` (its content moved into `products.ts`) and the whole of `src/components/ui/` — `Button` and `SectionHeader` deleted with no replacement components and no rationale recoverable from the diff. The four global classes in `globals.css` became the primitives in practice; ratified 2026-09-05.
- **Security & resilience baseline**, specified nowhere until this pass documented it: new `next.config.ts` sets HSTS (`max-age=63072000; includeSubDomains`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, plus `poweredByHeader: false` and `reactStrictMode: true`. **Content-Security-Policy is deliberately omitted** — Next.js injects inline bootstrap scripts, so a CSP would need `'unsafe-inline'` or per-request nonces via middleware. Behind a CDN or static host the same headers must also be set at that layer, which is unresolved because no deploy target exists. `error.tsx` adds a route-level error boundary.
- **Added** `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `icon.svg`, and `lib/site.ts` as the single origin/URL source.
- **Moved the signature scene**: the sticky scroll-linked walkthrough now renders only on `/products/lumora`, and the homepage's Scene 03 became the compact `LumoraFlagship` closing with one evidence item. The stated reason is sound — the homepage does not spend four viewport heights on a single product — but ADR-001 H4/H5 specify that scene as homepage Scene 03, so this is a change to a frozen, founder-owned ADR made with no recorded decision. **Only the founder can amend it** (decisions.md TODO 15).

### Added — Scene-Grammar Propagation (2026-09-01, founder-approved continuation)

The founder's standing post-refinement approval executed in full — the five-scene grammar is now live site-wide, bounded to ADR-001 + existing specifications. Zero new narrative copy (one invented chrome string was caught and removed during implementation; every remaining string is registered).

- **`SceneProgress` wayfinding** (component-inventory §4.11 — the last ADR-001 primitive, now implemented): the unified 01–05 scene numbering as a persistent rail — fixed left rail ≥ 1200px (inside the outer gutter, never over content), compact top indicator strip below (glass token, 44px targets); IO-derived `aria-current` (observation only, zero scroll capture); every entry a native in-page anchor (`#overture`/`#thesis`/`#lumora`/`#founder`/`#horizon`) that works without JavaScript (active state simply absent — active-agnostic default). Scene ids + anchor scroll margins added to the sections. Chrome strings registered in copy.md §1.5.
- **Scene 04 Founder stillness composition**: the letter centers in a near-viewport-height quiet room (72vh, flex-centered, narrowest 840px measure, scene-owned width) — stillness is the pacing device; no entry motion. Decompression beat tuned after full-page rhythm review (clamp(72px, 10vh, 120px)); letter line-height tightened 1.55 → 1.5 for intimacy.
- **Scene 05 Horizon closure**: the scene settles into the closure tone (`--color-bg-surface-subtle`, flowing into the footer's end-credits register) with a gentle ~12vh entry ramp out of the Founder's base tone; scene-owned 1240px container inside the full-bleed tone.
- **`/products` flagship composition**: one real flagship at flagship scale — a spacious elevated panel (copper top edge via `--border-active`, first-entry reveal) instead of a uniform card grid; the ventures grid renders only when ventures exist. Honest at one-product scale (no fabricated products, no empty-state filler); VLM: "intentional scarcity rather than empty state."
- **`/products/lumora` explore mode** (ADR-001 H4 deep-dive tier, now implemented): demo-type evidence renders as the interactive conceptual demonstration — the same content/state model and workbench frame as the homepage signature scene in tap-only free exploration (normal flow, no sticky, no scroll linkage). The workbench body was extracted verbatim into `LumoraWorkbenchBody` (§4.15 — rendering-identical, shared by both H4 modes) and the exhibit ships as `LumoraDemoExplore` (§4.16). The static demo-evidence card is replaced by the exhibit framed by its own registered copy + `STATUS: BETA` — the page's "interactive" promise is now delivered. VLM: 9/10, "strongest page in the set."
  - ⚠ **Superseded 2026-09-01 by `5b58001`, annotated 2026-09-05.** Everything after "explore mode" in this bullet describes a tree that no longer exists: `LumoraWorkbenchBody` and `LumoraDemoExplore` were replaced by `LumoraWorkflowWalkthrough` → `StickyStage` / `LumoraWorkflowBody` / `LumoraMobileStepper`; there is no longer a *homepage* signature scene to share a frame with (it moved to this page — decisions.md TODO 15); and `STATUS: BETA` was replaced by `product.statusLabel` plus per-item `Demonstration data` tags. The entry is kept as the record of what that pass shipped, not as a description of the current code.
- **`/about` + `/contact` editorial treatment**: calm group reveals (each section surfaces once as a unit — ≤ 2 per page, existing `Reveal` primitive); no scene drama — distinct, role-appropriate identities per the founder's "do not make every page behave like Lumora."

### Changed — Vertical-Slice Review Refinements (2026-09-01, founder-directed)

Two targeted refinements from the founder's slice review — no scope beyond them; the five-scene architecture, native scrolling, sticky stage, phase model/content, mobile stepper, and all safety contracts are unchanged.

- **Lumora phase pacing rebalanced** (`StickyStage`): sentinel band boundaries are now measured and rebalanced after mount (entry/exit travel compensated, stable windows weighted 0.5 / 1 / 1 / 1.25 — brisk setup → argument → payoff). Before (1440×900): phase 1 active 900px (275px pre-pin arrival inflated it), phase 4 stable only 435px (truncated by the frame departure). After: phase 1 654px active, phases 2–3 775px, phase 4 925px stable + 465px graceful departure; total scene scroll unchanged (4 × 100vh). Server HTML / no-JS keeps equal ¼ fractions; re-measured on viewport/frame resize with an equal-band fallback; verified forward, reverse, tap-override re-sync, mobile, reduced motion. Docs: design-system §6.8.5 phase-pacing rule, component-inventory §4.12, qa-checklist §2.10.5.
- **Scene transition grammar established** (five scenes): boundaries now speak — **scene seams** (1px rules dissolving at their edges; the Founder → Horizon seam carries the single warm copper tint), **light ramps** on the signature scene (the elevated zone rises ~14vh out of the base tone on entry and falls back ~16vh on exit — escalation in, decompression out), **boundary spacing rhythm** (deeper top beats for the arrival into Thesis and the silence before Founder), and a restrained **Horizon re-expansion reveal** (two columns, existing `Reveal` primitive, 90ms stagger). Founder keeps its **stillness** (no entry motion — the stillness is the transition). All static CSS / existing tokens: zero layout change, no-JS and reduced-motion safe by construction, zero copy changes. Docs: design-system §6.8.6 (seams, light ramps, spacing rhythm, entry-per-role).

### Added — ADR-001 Cinematic Vertical Slice (implementation, 2026-09-01)

Founder-approved implementation of the mandatory vertical slice (Overture → Thesis transition → **Lumora Reveal** → mobile stepper); the remaining scenes stay gated on founder review of the slice (decisions.md TODO 10). Zero visitor-facing copy changes — every string comes from the registered `copy.md §4` sources.

- **Scene 01 Overture** (`HeroSection`): full-viewport composition (one viewport minus the sticky header, measured 828px at 900px viewport), intentional negative space (statement block centered between topline and tenets baseline), extended display scale (`clamp(2.6rem, 6vw, 5rem)`), and the staged load choreography — topline → headline → lead → actions → tenets at 60ms stagger, ≤ 500ms total, transform/opacity only, **server-visible by default with the sequence added by script only** (no-JS safe), skipped under reduced motion.
- **Scene 02 Thesis transition** (`ThesisSection`): the width/density change — scene narrows to its ≤ 980px editorial measure (1240 → 980 measured) — plus calm first-entry `Reveal` pacing (header, cycle spine, conviction blocks at ≤ 3-sibling stagger); the editorial composition itself unchanged.
- **Scene 03 Lumora Reveal — the Signature Moment** (`LumoraStage` + new **`StickyStage`**): the workbench frame wraps in a sticky stage (4 × 100vh container, frame pinned at `clamp(84px, 10vh, 128px)`) while the visitor's **native scrolling** advances the four phases via an IntersectionObserver sentinel state machine (Context Ingest → Understanding → Decision Support → Action Workspace — registered content, unchanged); **explicit tap controls always override** and re-sync the viewport to the matching sentinel; phase changes cross-fade the frame's state via Web Animations API (320ms, transform/opacity, staggered regions, `fill: backwards`); the frame **never resizes between phases** (fixed 640px body); **breakout width** (1560px cap — 1360px vs the 1240px container at 1440, measured) + elevated lighting band (`--color-bg-surface-subtle`). Zero scroll-jacking (verified with native wheel input both directions).
- **Mobile vertical stepper** (new **`LumoraMobileStepper`** + shared **`LumoraPhaseVisual`**): the same four phases as sequential full-width segments with **full content parity** (each: badge, headline, narrative, HUD, phase visual, inline sources, inline diagnostics, status footer — measured 4 × 4 sources + 4 diagnostics, zero `display:none`), an anchor segmented control at 44px targets that works with and without JavaScript, no horizontal overflow at 390px. The ≤ 980px no-JS/SSR fallback stacks the workbench panels with all content. **Debt D11 resolved.**
- **New primitives** (`Reveal` per component-inventory §4.10, `StickyStage` per §4.12 — both now ✅ IMPLEMENTED): SSR-safe, `useSyncExternalStore`-based motion hooks (`src/hooks/usePrefersReducedMotion.ts`, `useMediaQuery.ts`); jsdom-robustness guards; `SceneProgress` (§4.11) deliberately deferred to the propagation pass.
- **Safety contracts verified** (qa-checklist §2.10, full run recorded in decisions.md): no-JS 100% server content; reduced-motion = static, tap-only, 0 animations; mobile CLS 0.0000 / desktop 0.0018 (text-swap micro-shifts only, reported); reveal boxes identical pre/post; 44px targets; monotonic sticky progression with tap override; honest exhibit framing (0 animations at rest). Tooling: tsc ✅, ESLint 0/0, vitest 10/10, `next build` 8 static pages. VLM design reviews: desktop "deliberate cinematic opening / calm reading zone / framed signature moment"; four sticky phases "meaningful state differentiation, excellent fixed-frame continuity — signature moment (A-)"; mobile "mobile-native, not a shrunken desktop".

### Added — ADR-001 Experience Architecture Spec Pass (docs/spec-pass, 2026-08-31)

- **[ADR-001](docs/website/adr/ADR-001-homepage-experience-reconciliation.md) — Homepage Experience Reconciliation (founder-ratified H1–H5)**: the certified 10-step homepage narrative remains the **strategic model**; the **executable production experience** is the truthful 5-scene arc (01 Overture → 02 Thesis → 03 Lumora Reveal → 04 Founder Letter → 05 Horizon) with unverified beats (proof, roadmap, testimonials, persona CTAs) **explicitly deferred until verified founder content exists — never fabricated**. Signature Moment #1 = the Lumora Reveal; #2 deferred with the Journey/Timeline beat. Also ratified: Phase 7 copper/steel palette **canonical** (closes the palette supersession TODO); founder copy explicitly non-blocking for presentation; **Lumora dual-mode presentation** (homepage scroll-driven reveal + `/products/lumora` tap exploration, one shared content contract, honest conceptual-demonstration boundary — `STATUS: BETA`, no implied live functionality); **scroll-linked phase progression with always-present tap override** and 100% native scroll authority (zero scroll-jacking). New `docs/website/adr/` series (12th doc-suite file).
- **Implementable cinematic scene & motion specification** — [design-system.md §6.8](docs/website/design-system.md) extended from micro-feedback-only into the full scene contract: motion classes & budgets (load choreography ≤ 500ms once-only; first-entry reveals 250–350ms transform/opacity; scene transitions 250–350ms; the single sanctioned scroll-linked interaction), the Lumora **sticky reveal** staging (IntersectionObserver state machine, tap override, fixed-frame changing-state, honest framing, exploration mode), **scene composition rules** (width rhythm 1240 → editorial → breakout → 840 → 1240; lighting rhythm; scale rhythm; stillness rule for the founder scene; SceneProgress wayfinding unifying the duplicated numbering), **mobile vertical-stepper recomposition** (no `display:none` content loss, ≥ 44px controls), and binding **no-JS / reduced-motion / CLS safety contracts**. §4.5 palette note marked superseded-resolved; §6.9 annotated with the D11 target.
- **Three experience primitives SPECIFIED** (closed-set extension, not yet implemented): `Reveal` (first-entry reveal wrapper), `SceneProgress` (scene wayfinding rail), `StickyStage` (the Lumora signature-scene wrapper with `scroll`/`explore` modes) — full contracts in [component-inventory.md §4.10–§4.12](docs/website/component-inventory.md); implementation gated on founder approval per ADR-001 §8.
- **Lumora demonstration content extracted to the content layer**: `src/content/lumora-demo.ts` now owns the 4-phase demonstration contract (previously hardcoded inside `LumoraStage.tsx` — an unregistered content-layer-contract violation); component rewired to import it. **The pass's only production code change** — rendering byte-identical: string-set parity verified programmatically (zero missing/added), tsc/ESLint/vitest (10/10)/`next build` (8 static pages) all green, production-server browser parity (identical sections/tab state/HUD/indicator, zero console errors). Copy.md §4 gains a source-of-truth note (no string changed anywhere — zero new visitor-facing copy in this pass, per instruction).
- **New QA gates — qa-checklist §2.10 Motion & Interaction Safety**: no-JS safety (content 100% server-rendered), reduced-motion static fallback (identical to baseline), CLS/reveal safety (transform-only, bounding-box parity), ≥ 44px touch targets (standing), sticky-scene continuity (monotonic phases, tap override, no scroll lock), mobile content parity (no content-bearing `display:none`), motion budgets, honest exhibit framing. §2.6 extended (touch targets + mobile parity probes); **debt D11 registered** (workbench mobile content loss + sub-44px controls — pre-existing audit findings, resolved by the future ADR-001 pass).
- **Consistency updates**: product-spec.md (§3.4 strategic-model note + new §3.4.1 executable experience; §3.6 freeze amended by ADR-001; §4.7 founder-readiness; §6.6 Hybrid Scroll H5 execution), decisions.md (TODO 2 → RESOLVED; new TODOs 10–11; ADR index + summary record; spec-pass QA run record — verdict PASS), INDEX.md/AGENTS.md/README.md/CONTRIBUTING.md/ROADMAP.md/PROJECT.md updated (12-file suite, ADR reading-scope + ownership rules, current phase = specification complete / implementation gated).

### Fixed — Second-Pass Production Code Fixes: qa-checklist debt register D1–D10 (code/debt-pass)

- **Placeholder & internal-string leaks eliminated (D1/D2/D3)**: the `[STRUCTURAL CAPABILITY CONTAINER]` label and its render path removed from `products/[slug]/page.tsx`, with `isPlaceholder`-flagged content gated out of production output everywhere; the internal process sentence `(Server Action backend integration boundary prepared).` removed from the contact card body (no invented replacement — richer routing copy remains PENDING FOUNDER COPY per copy.md §8); the two placeholder-flagged items removed from `src/content/proof.ts` (founder copy still pending, tracked in copy.md §10).
- **All five inline-styled pages converted to the binding pattern (D4)** — `about`, `contact`, `products`, `products/[slug]`, `not-found` now each ship a co-located `*.module.css` consuming only `src/styles/tokens.css` values (1:1 visual parity with the former inline styles).
- **Broken CSS variables fixed (D5)**: `--container-narrow-width` → `--container-narrow` (the 840px narrow column now actually applies), `--color-accent-flagship` → `--color-accent-blue` (page eyebrows/chips/links now actually render in the certified steel blue), `--color-bg-canvas` → `--color-bg-base` (via the `Button` primitive on the 404 CTA). These fixes intentionally activate styling the broken names had silently disabled. *(⚠ Annotated 2026-09-05: `--color-accent-blue` was itself deleted on 2026-09-03 and the accent is now copper — this row records the historical mapping, not a current token name.)*
- **Stale pre-Phase-7 blue removed (D6)**: hardcoded `rgba(112, 184, 255, 0.1)` replaced with `var(--color-accent-blue-muted)` on both products pages.
- **`verifiableEvidence` now renders (D7)**: the product detail page gained a contextual product-evidence surface (spec §4.5, Product class) below the capability grid — using only strings already registered in copy.md; no new copy was written.
- **Primitive adoption (D9, Button half)**: the 404 page's hand-rolled CTA now uses the `Button` component. `SectionHeader` remains unadopted: its `indexNumber`/`kicker` props require founder-approved strings (not invented in a fix pass). *(⚠ Annotated 2026-09-05: both components were deleted with `src/components/ui/` in `5b58001`, reverting this adoption. Debt **D9 is closed as OBSOLETE, not completed** — the global classes in `globals.css` are the sanctioned path.)*
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

