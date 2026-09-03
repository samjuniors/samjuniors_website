# SamJuniors Website — Component Inventory & Pattern Contract

> **The closed set of components that exist, their props/variants, and the one mandatory styling pattern.** This is the map an agent reads before building anything, so work *reuses* the system instead of drifting into one-off inline styles — the exact failure mode that produced the current inline-styled pages (see [§9 drift register](#9-drift-register-violations--resolution-state)).
>
> **Authority**: Tokens are governed by [design-system.md §6](design-system.md#6-design-system-specification) (the only token spec) and implemented in `src/styles/tokens.css`. Content contracts are governed by [architecture.md §5](architecture.md#5-content--data-boundary-architecture). Literal copy for every string lives in [copy.md](copy.md). QA for anything built here: [qa-checklist.md](qa-checklist.md).
>
> **How to use**: For any page or component task, read the relevant spec section + [copy.md](copy.md) + this file's matching entries. Do not read [decisions.md](decisions.md) or [docs/company/foundation.md](../company/foundation.md) unless the task concerns brand identity or historical rationale.

---

## 1. The Closed-Set Rule

> [!IMPORTANT]
> **Build from this inventory first.** If a needed pattern already exists (button, section header, panel, workbench, narrative section), reuse or extend it. If it genuinely doesn't exist, follow the [extension protocol (§10)](#10-extension-protocol) — which includes updating this file. **Never** create a parallel styling approach for an existing pattern. The `src/components/ui/` primitives and the CSS-Modules-with-tokens pattern are the *only* sanctioned styling path for page and component work.

---

## 2. Mandatory Pattern Contract (binding for all component/page work)

1. **CSS Modules + tokens, always.** Every component styles itself via a colocated `*.module.css` file whose values consume custom properties from `src/styles/tokens.css`. No inline `style={{...}}` props in pages or components. No global class soup for component-scoped styles.
2. **Tokens only, never literals.** No hardcoded hex/rgba colors, font stacks, or spacing values in TSX. The sanctioned color/spacing/font variables are listed in [§6](#6-design-token-quick-reference). Note the real token names — `--container-narrow`, `--color-accent-blue`, `--color-bg-base` (NOT the broken aliases `--container-narrow-width`, `--color-accent-flagship`, `--color-bg-canvas` that currently appear in the inline-styled pages — they resolve to nothing).
3. **Content comes from the content layer.** Components and pages never hardcode company claims or product copy; they import from `src/content/` ([architecture.md §5](architecture.md#5-content--data-boundary-architecture), content API in [§7](#7-content-layer-api)). Literal approved strings: [copy.md](copy.md).
4. **Server components by default.** Only interactive islands carry `'use client'` (currently only `LumoraStage`). Motion via CSS transforms/opacity only, with reduced-motion collapse (`tokens.css` global override).
5. **Accessibility is part of the component contract.** Landmark/heading discipline, `:focus-visible` (global style in `globals.css`), aria labels on icon-only controls, `role="tablist"` for tabs, ≥ 44×44px touch targets.
6. **Global utility classes** (`.container`, `.container-narrow`, `.container-editorial`, `.sr-only`, `.hairline-divider`) come from `src/app/globals.css` and may be composed alongside module classes (see `Header`/`Footer` usage).
7. **Global button/link primitives**: `.btn-primary`, `.btn-secondary`, `.text-link` exist in `globals.css` AND as the typed `Button` component in `src/components/ui/` — prefer the `Button` component in React code.

---

## 3. Directory Map

```
src/
├── app/                          # Routes (App Router)
│   ├── layout.tsx                # Root shell: Header + main#main-content + Footer, metadata, themeColor #0c0d10
│   ├── page.tsx                  # / (Home) — composes the 5 narrative components
│   ├── about/page.tsx + about.module.css            # /about — ✅ converted 2026-08-31 (D4/D5)
│   ├── contact/page.tsx + contact.module.css        # /contact — ✅ converted 2026-08-31 (D2/D4/D5)
│   ├── products/page.tsx + products.module.css      # /products — ✅ converted 2026-08-31 (D4/D5/D6)
│   ├── products/[slug]/page.tsx + product-detail.module.css  # /products/{slug} — ✅ converted 2026-08-31 (D1/D4/D5/D6/D7)
│   ├── not-found.tsx + not-found.module.css         # 404 — ✅ converted 2026-08-31 (D4/D5/D9)
│   ├── routes.test.tsx           # Route render tests (RTL)
│   └── globals.css               # Reset, global utilities, focus states (fonts self-hosted via next/font since 2026-08-31 — D10)
├── components/
│   ├── layout/       Header, Footer
│   ├── narrative/    HeroSection, ThesisSection, FounderLetter, HorizonSection
│   ├── interactive/  LumoraStage (client island)
│   └── ui/           Button, SectionHeader (reusable primitives)
├── content/          company.ts, products.ts, proof.ts, navigation.ts, lumora-demo.ts, types.ts (+ content.test.ts)
└── styles/
    └── tokens.css    Certified Phase 7 token set (single token authority)
```

> [!NOTE]
> **ADR-001 (2026-08-31; implemented 2026-09-01 vertical slice + propagation pass)**: `Reveal` (§4.10), `StickyStage` (§4.12), and `SceneProgress` (§4.11) are **implemented and QA-verified**; the workbench body is shared across both H4 modes via `LumoraWorkbenchBody` (§4.15) and the `/products/lumora` explore-mode exhibit ships as `LumoraDemoExplore` (§4.16). Supporting additions from the same slice: `LumoraPhaseVisual` (§4.13), `LumoraMobileStepper` (§4.14), and the motion hooks `src/hooks/usePrefersReducedMotion.ts` / `src/hooks/useMediaQuery.ts` (`useSyncExternalStore`-based, SSR-safe). The decision record lives in [docs/website/adr/](adr/).

---

## 4. Component Catalog

### 4.1 `src/components/layout/Header.tsx` (+ `Header.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `siteNavigation.primaryLinks`, `siteNavigation.primaryCta`, `companyContent.name`.
- **Renders**: brand link (wordmark dot + `SamJuniors`, aria-label `SamJuniors Home`), `<nav aria-label="Main Navigation">` list, header CTA.
- **CSS classes**: `header`, `inner`, `brand`, `brandMark`, `nav`, `navLink`, `cta`. Composes global `.container`.
- **Responsive**: collapses at ≤ 768px.
- **Notes**: no mobile hamburger in this repo — nav hides at small widths (gap to address in UI phase; the sandbox port of this site implements one — reference only).

### 4.2 `src/components/layout/Footer.tsx` (+ `Footer.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `siteNavigation.footerGroups`, `companyContent` (name, tagline, legalEntity).
- **Renders**: brand column (name + tagline), one labelled `<nav>` per footer group (`Company`, `Products` — the products group enumerates the registry), bottom row (dynamic-year copyright + legal entity).
- **CSS classes**: `footer`, `inner`, `topRow`, `brandCol`, `brandName`, `tagline`, `groups`, `group`, `groupLabel`, `links`, `link`, `bottomRow`.
- **Layout contract**: `body` is `min-height:100vh; display:flex; column` with `main { flex: 1 }` (globals.css) — footer naturally sticks to viewport bottom on short pages and is pushed down on long pages. Preserve this when touching layout.

### 4.3 `src/components/narrative/HeroSection.tsx` (+ `HeroSection.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `companyContent.name`, `getFlagshipProduct()` (CTA label `Experience {flagship.name}`).
- **Renders**: topline (status pulse + `Parent Technology Ecosystem`), H1 with italic emphasis, lead, CTA row (`#lumora` primary button, `#thesis` text link), 3-item tenets row (`aria-label="Institutional Building Tenets"`).
- **CSS classes**: `hero`, `topline`, `statusPulse`, `statementArea`, `headline`, `lead`, `actionRow`, `primaryBtn`, `textLink`, `tenetsRow`, `tenetItem`, `tenetHeader`, `tenetNumber`, `tenetTitle`, `tenetBody`.
- **Responsive**: tenets stack at ≤ 880px.

### 4.4 `src/components/narrative/ThesisSection.tsx` (+ `ThesisSection.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `companyContent.buildingCycle` (6 stages).
- **Renders**: section header (index `02` / `Building Philosophy`), H2 statement + lead, asymmetric editorial grid: left spine = numbered 6-step cycle `<ol>`, right column = 3 conviction prose blocks.
- **CSS classes**: `thesis`, `headerArea`, `labelRow`, `indexNumber`, `divider`, `label`, `statement`, `statementLead`, `editorialGrid`, `cycleColumn`, `columnLabel`, `cycleList`, `cycleStep`, `stepMarker`, `stepNum`, `stepLine`, `stepContent`, `stepTitle`, `stepDesc`, `convictionColumn`, `proseBlock`, `proseHeading`, `proseText`.
- **Anchor**: `id="thesis"` (hero secondary link target).
- **Responsive**: grid collapses at ≤ 880px.

### 4.5 `src/components/narrative/FounderLetter.tsx` (+ `FounderLetter.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `companyContent.name`, `companyContent.legalEntity`.
- **Renders**: label row (`04` / `Perspective`), blockquote letter with italic emphasis, signature block (signer name `Founder & Leadership`, title = legal entity, `Est. 2026` stamp).
- **CSS classes**: `letterSection`, `labelRow`, `indexNumber`, `divider`, `label`, `quoteWrapper`, `letterBody`, `signatureBlock`, `signerDetails`, `signerName`, `signerTitle`, `dateStamp`.
- **Responsive**: ≤ 640px adjustments.
- **Copy note**: founder name is a pending copy gap ([copy.md §10](copy.md#10-placeholder--missing-copy-registry-pending-founder-copy)).

### 4.6 `src/components/narrative/HorizonSection.tsx` (+ `HorizonSection.module.css`)
- **Type**: Server component. **Props**: none.
- **Renders**: two-column closing grid — Ecosystem column (`05`, `An Expanding Ecosystem`, `Explore Portfolio Architecture →` → `/products`) and Collaboration column (`06`, `Initiate Dialogue`, `Connect With Leadership →` → `/contact`).
- **CSS classes**: `section`, `grid`, `col`, `labelRow`, `indexNumber`, `divider`, `label`, `actionLink`.
- **Responsive**: columns stack at ≤ 860px.

### 4.7 `src/components/interactive/LumoraStage.tsx` (+ `LumoraStage.module.css`) — *the interactive island → Scene 03 (Lumora Reveal)*
- **Type**: **Client component** (`'use client'`) — the scene orchestrator (one of the closed set of client components: `LumoraStage`, `StickyStage`, `Reveal`, plus the `src/hooks/` motion hooks).
- **Props**: none. **State**: phase ownership moved to `StickyStage` (§4.12) per [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md) H4/H5 — this component selects the composition: mobile (`useMediaQuery('(max-width: 979px)')`) renders `LumoraMobileStepper` (§4.14); desktop renders `StickyStage mode={reduced ? 'explore' : 'scroll'}` wrapping the `Workbench` body; reduced motion selects tap-only explore mode (§6.8.8).
- **Data**: `LUMORA_DEMO_STEPS` / `LUMORA_DEMO_STEP_ORDER` from `src/content/lumora-demo.ts` (all 4 steps' literal demo strings — full text in [copy.md §4](copy.md#4-home--lumora-stage-lumorastage-anchor-lumora); exhibit-fiction boundary preserved: demonstration data, not product claims).
- **Renders**: scene header (`03` / `Flagship Expression`, H2, lead); workbench frame with window chrome (`lumora_os // academic_intelligence_loop`); 4 `role="tab"` step tabs (≥ 44px); 3-column body — sources panel (left), center canvas stage with per-step visuals via `LumoraPhaseVisual` (§4.13) + explanation caption, diagnostics panel (right); status bar with prev/next cycle controls and `n / 4` indicator (`aria-live="polite"`); philosophy bridge + 3-row ledger below. Phase changes cross-fade via Web Animations API (transform/opacity only, 320ms, staggered regions, fill `backwards`; skipped on mount and under reduced motion).
- **Scene grammar (§6.8.5/§6.8.6)**: elevated lighting band (`--color-bg-surface-subtle`) + **breakout width** (`stageWidth` = `min(1560px, 100%)` — wider than the 1240px container); workbench body fixed height 640px at desktop (frame never resizes between phases — §6.8.5 state continuity); status/HUD slots laid out so phase text swaps change widths, never positions (§2.10.3).
- **Interaction contract**: tabs switch phases directly (always-present tap override, H5); prev/next wrap around; step indicator updates; `aria-selected` tracks state; icon-only buttons carry `aria-label` (`Previous Step` / `Next Step`).
- **Anchor**: `id="lumora"` (hero primary CTA target; `scroll-margin-top` clears the sticky header).
- **Responsive**: JS viewports ≤ 980px render the mobile vertical stepper (§4.14); the ≤ 980px workbench layout remains as the no-JS/SSR fallback with **no `display:none`** — panels stack with all content (debt D11 resolved).

### 4.8 `src/components/ui/Button.tsx` (+ `Button.module.css`) — *reusable primitive*
- **Type**: Server-safe component (no hooks).
- **Props** (`ButtonProps`): `children: ReactNode` · `href?: string` (internal `Link`, external `<a>` with `target="_blank" rel="noopener noreferrer"` when `http*`/`mailto:`) · `variant?: 'primary' | 'secondary' | 'link'` (default `primary`) · `icon?: ReactNode` (rendered `aria-hidden`) · `className?` · `onClick?` · `type?: 'button' | 'submit' | 'reset'` · `aria-label?`.
- **Variants**: `primary` (inverted solid: text-primary bg on base — white-on-obsidian), `secondary` (elevated surface + hairline border), `link` (editorial text link).
- **Accessibility**: min 44px touch target; focus-visible via global rule.
- **Status**: ✅ pattern-compliant. Adopted by `not-found.tsx` on 2026-08-31 (debt D9, Button half). Adopt this primitive for every new primary/secondary/link action.

### 4.9 `src/components/ui/SectionHeader.tsx` (+ `SectionHeader.module.css`) — *reusable primitive*
- **Type**: Server component.
- **Props** (`SectionHeaderProps`): `indexNumber: string` (e.g. `02`) · `kicker: string` (eyebrow label) · `title: ReactNode` (H2) · `lead?: ReactNode` · `id?: string` (heading id for `aria-labelledby`) · `className?` · `align?: 'left' | 'center'`.
- **Renders**: eyebrow row (`{indexNumber} / {kicker}`), `h2`, optional lead. This is the canonical section-opener pattern that narrative sections implement manually.
- **Status**: ✅ pattern-compliant. Still unadopted by sub-pages: adopting it requires new `indexNumber`/`kicker` strings, which are founder copy (debt D9's SectionHeader half stays open pending [copy.md](copy.md) sign-off).

### 4.10 `src/components/interactive/Reveal.tsx` (+ `Reveal.module.css`) — *first-entry reveal primitive (implemented)*
- **Type**: Client component (`'use client'` — required: owns an IntersectionObserver).
- **Purpose**: first-entry viewport reveal per [design-system §6.8.4](design-system.md#68-motion--micro-interactions): fade + ≤20px rise, 250–350ms `--ease-out`, once-only, stagger ≤ 3 siblings. Also carries the Scene 01 load choreography (§6.8.3) via per-element delays — server-visible default, JS-added pre-reveal, ≤ 500ms sequence.
- **Props** (`RevealProps`): `children: ReactNode` · `delay?: number` (stagger ms, ≤ 2 siblings × 90ms) · `as?: ElementType` (default `div`) · `className?` · `style?` (CSS custom properties allowed — `--reveal-distance`, used by Scene 01's 12px rise) · `aria-label?` · `id?`.
- **Binding contracts (verified 2026-09-01, qa-checklist §2.10)**: no-JS safety — content visible in server HTML; the pre-reveal class is applied only by the script's layout effect, never server-side; CLS safety — `transform`/`opacity` only, offset metrics identical pre/post (probed); reduced-motion — renders final state instantly (hook + global token override); unobserves after firing. Mobile choreography shortened by the module's ≤ 640px budget override (§6.8.7).
- **A11y**: purely presentational; no aria attributes; never wraps focusable content in a way that delays availability (content is in the DOM and visible from first paint).
- **Status**: ✅ **IMPLEMENTED (2026-09-01, ADR-001 vertical slice)** — adopted by `HeroSection` (Scene 01) and `ThesisSection` (Scene 02); verified against [qa-checklist §2.10](qa-checklist.md#210-motion--interaction-safety-adr-001-implementation-gates) (see the decisions.md QA run record).

### 4.11 `src/components/interactive/SceneProgress.tsx` (+ `SceneProgress.module.css`) — *persistent homepage wayfinding (implemented)*
- **Type**: Client component (`'use client'` — observes scene positions).
- **Purpose**: persistent homepage wayfinding per [design-system §6.8.6](design-system.md#686-scene-composition-rules-the-scene-grammar): mono-indexed `01–05` progress rail; unifies the current duplicated numbering (hero tenets `01–03` vs. section indices `02–06`) into one system.
- **Props** (`SceneProgressProps`): `scenes: Array<{ id: string; index: string }>` — homepage: `overture` / `thesis` / `lumora` / `founder` / `horizon` with indices `01`–`05` (declared as the `SCENES` constant in `src/app/page.tsx`; the section ids live on the scene `<section>` elements).
- **Rendering (implemented 2026-09-01)**: fixed left rail ≥ 1200px (28px wide, left 8px — inside the outer gutter, never reaching content text; vertically centered; entries 44px tall); compact top indicator strip below the page header < 1200px (same markup, media-query layout; glass token + blur; 44px targets). Active scene = the last section whose top has crossed the 40%-viewport line, re-derived from fresh rects per IO callback (dense thresholds, root band = top 50% of viewport — observation only, zero scroll capture); `aria-current="true"` on the active entry; micro-feedback only (150ms color + tick `scaleX`).
- **Binding contracts (verified)**: reduced-motion — visible and state-accurate without animated transitions (the global rule neutralizes the 150ms micro-feedback); no-JS — the full server-rendered anchor list keeps working natively with the active state simply absent (active-agnostic default); never hides or overlaps content (`pointer-events: none` on the rail, `auto` on the entries; z-index 90 under the page header's 100); anchor landings clear the fixed chrome via `scroll-margin-top` on the target sections.
- **Chrome strings**: registered in [copy.md §1.5](copy.md#15-scene-wayfinding-sceneprogress-homepage-only) (`Scene Progress` nav label + `Scene 01…05` template labels — wayfinding chrome, not narrative copy).
- **Status**: ✅ **IMPLEMENTED (2026-09-01, scene-grammar propagation pass)** — the last ADR-001 primitive; passed §2.10 gates (see decisions.md).

### 4.12 `src/components/interactive/StickyStage.tsx` (+ `StickyStage.module.css`) — *the signature-scene mechanism (implemented)*
- **Type**: Client component (`'use client'` — owns the phase state machine).
- **Purpose**: the Lumora signature-scene mechanism per [design-system §6.8.5](design-system.md#685-signature-scene--lumora-sticky-reveal-scene-03-adr-001-h4h5): sticky frame + scroll-linked 4-phase progression (homepage mode) or tap-only exploration — two modes over the shared `src/content/lumora-demo.ts` state model.
- **Props** (`StickyStageProps`): `mode: 'scroll' | 'explore'` · `phaseOrder?: readonly LumoraDemoStepId[]` (defaults to `LUMORA_DEMO_STEP_ORDER` from the content layer) · `children: (api) => ReactNode` render function providing `{ phase, phaseIndex, phaseCount, selectPhase }` — the `LumoraStage` workbench body re-composed as a function of the phase state.
- **Mechanics (implemented 2026-09-01; pacing rebalanced 2026-09-01 per founder review)**: geometry — tall container (`phaseCount × 100vh`) + `position: sticky` frame, applied **only** when the script activates (`data-scroll-active` set post-hydration; server HTML / no-JS / reduced motion / explore mode keep normal flow; a `prefers-reduced-motion` media override is the second defense line); phase sentinels — 4 invisible geometry markers whose band boundaries are **rebalanced after mount from measured geometry** (§6.8.5 phase pacing: entry/exit travel compensated, stable windows weighted 0.5/1/1/1.25; the server HTML keeps equal ¼ fractions as the no-JS default; recomputed on viewport/frame resize, guarded by an equal-band fallback below a 240px reference window), observed via IntersectionObserver (dense thresholds, root band = top 45% of viewport); on each browser-batched callback the active phase is re-derived from fresh sentinel rects (the sentinel covering the 40%-viewport trigger line) — **zero scroll listeners, zero scroll capture** (the resize listener used for re-measurement observes layout, not scroll); tap override — `selectPhase` sets state and an effect re-syncs the viewport to the matching sentinel via `scrollIntoView({ block: 'center' })` (state and viewport never disagree, ADR-001 H5); `useSyncExternalStore`-based `mounted`/media/reduced-motion hooks keep the machine hydration- and jsdom-safe.
- **Interaction contract (ADR-001 H5, binding — verified)**: native scroll 100% authoritative (verified with native wheel input forward and backward through the scene); monotonic phase progression 1→4 with no flicker (sampled at 7 scroll positions + reverse); tap controls always enabled and always override; reduced motion collapses sticky to flow with tap-only switching.
- **A11y**: phase tabs keep `role="tablist"`/`role="tab"`/`aria-selected`; the stage region keeps its `aria-label`; the phase state is announced via the step indicator (`aria-live="polite"`); controls ≥ 44×44px.
- **Status**: ✅ **IMPLEMENTED (2026-09-01, ADR-001 vertical slice)** — highest-risk primitive; passed all §2.10 gates plus §3 home-row checks (see the decisions.md QA run record). The `/products/lumora` explore-mode consumer arrives with the propagation pass.

### 4.13 `src/components/interactive/LumoraPhaseVisual.tsx` — *shared per-phase stage visuals*
- **Type**: Pure presentational component (no hooks; compiled into the client tree via its importers).
- **Props**: `phase: LumoraDemoStepId`.
- **Renders**: the four center-stage demonstration visuals (context timeline card · understanding forecast card with the Week-8 collision row · advisory recommendation card · action workspace card) — markup and strings extracted **verbatim** from the former `LumoraStage` body; styles consumed from `LumoraStage.module.css`.
- **Purpose**: single source for both Scene 03 compositions (desktop workbench active phase + mobile stepper segments) so content parity between them is structural, not maintained by hand (§6.8.7, qa-checklist §2.10.6).
- **Status**: ✅ pattern-compliant (added 2026-09-01 with the vertical slice; no new copy — copy.md §4.1–§4.4 literals only).

### 4.14 `src/components/interactive/LumoraMobileStepper.tsx` (+ `LumoraMobileStepper.module.css`) — *mobile Scene 03 recomposition*
- **Type**: Pure presentational component (no hooks, no state — rendered by `LumoraStage` below 980px).
- **Renders**: an anchor segmented control (`#lumora-phase-01..04`, 2×2 grid, every target ≥ 44px) + the four phases as sequential full-width segments, each carrying the full workbench parity set: badge, headline, narrative, HUD line, phase visual (`LumoraPhaseVisual`), inline sources panel (`Academic Context` / `Resolved`), inline diagnostics panel (`Diagnostics` / `Grounded`), status footer (engine + privacy lines) — **never `display:none`** (§6.8.7, qa-checklist §2.10.6). Segment anchors carry `scroll-margin-top` so navigation lands clear of the sticky header; anchors work with and without JavaScript.
- **Status**: ✅ pattern-compliant (added 2026-09-01 with the vertical slice; resolves debt D11's mobile-parity half — no new copy).

### 4.15 `src/components/interactive/LumoraWorkbenchBody.tsx` — *the shared workbench frame (both H4 modes)*
- **Type**: Client component (`'use client'`).
- **Origin**: extracted verbatim from the former `LumoraStage.tsx` body (2026-09-01 propagation pass — pure refactor, rendering byte-identical; the phase-swap hook and all registered §4 strings moved with it).
- **Props**: the `StickyStageChildrenApi` (`{ phase, phaseIndex, phaseCount, selectPhase }`) — state ownership remains with `StickyStage` (§4.12).
- **Renders**: the cinematic intelligence workbench frame — window chrome + step tabs, 3-column body (sources panel / center stage with `LumoraPhaseVisual` / diagnostics panel), status footer with prev/next controls — plus the phase-change cross-fades (WAAPI, 320ms, transform/opacity, skipped on mount/reduced motion). Styles consumed from `LumoraStage.module.css` (shared with the scene).
- **Consumers**: homepage Scene 03 (`LumoraStage` → `StickyStage` scroll mode) and `/products/lumora` (`LumoraDemoExplore` → explore mode) — one frame, two ADR-001 H4 presentation modes.
- **Status**: ✅ pattern-compliant (extraction verified rendering-identical; no new copy — copy.md §4.1–§4.4 literals only).

### 4.16 `src/components/interactive/LumoraDemoExplore.tsx` — *the /products/lumora interactive exhibit (H4 explore mode)*
- **Type**: Client component (`'use client'`).
- **Purpose**: ADR-001 H4 deep-dive tier — the same content/state model as the homepage signature scene in free/tap exploration: `StickyStage mode="explore"` (normal document flow, no sticky, no scroll linkage, no pacing geometry) wrapping `LumoraWorkbenchBody`.
- **Consumer**: `/products/[slug]` renders it for `type: 'demo'` evidence (the registered `Academic Intelligence Demonstration` strings frame the exhibit; static evidence types keep their card form). The honest-framing signals (evidence copy + `STATUS:` label) are rendered by the page around this component.
- **Safety**: explore mode is exactly the reduced-motion behavior — motion-safe by construction in every environment; no-JS renders the first phase + controls (server HTML verified).
- **Status**: ✅ **IMPLEMENTED (2026-09-01, scene-grammar propagation pass)** — completes the ADR-001 H4 dual-mode presentation.

---

## 5. Global Utility Classes (`src/app/globals.css`)

| Class | Purpose |
| :--- | :--- |
| `.container` | Max `--container-max` (1240px) + `--container-padding` gutters — the page shell |
| `.container-narrow` | Max 840px centered column |
| `.container-editorial` | Max 760px reading column |
| `.btn-primary` / `.btn-secondary` / `.text-link` | Global interactive primitives (prefer `Button` component in React) |
| `.hairline-divider` | 1px `--color-border-hairline` rule |
| `.sr-only` | Screen-reader-only text |

Also global: focus-visible outline (2px copper, 3px offset), heading `text-wrap: balance`, body flex column layout enabling the sticky-footer contract (§4.2), font `@import` (debt D10).

---

## 6. Design Token Quick Reference

Full specification: [design-system.md §6](design-system.md#6-design-system-specification). Implementation: `src/styles/tokens.css` (single authority — values are NOT repeated here to prevent drift).

| Token family | Variables |
| :--- | :--- |
| Canvas & surfaces | `--color-bg-base`, `--color-bg-surface`, `--color-bg-surface-elevated`, `--color-bg-surface-subtle`, `--color-bg-overlay`, `--color-bg-glass` |
| Text tones | `--color-text-primary`, `--color-text-secondary`, `--color-text-muted` (large/non-text only — see [qa-checklist §2.5](qa-checklist.md#25-accessibility-wcag-21-aa-minimum)), `--color-text-dim` (decorative only) |
| Borders | `--color-border-hairline`, `--color-border-subtle`, `--color-border-active`, `--color-border-solid` |
| Parent accent (copper) | `--color-accent-copper`, `-hover`, `-muted`, `-border`, `-glow` |
| Product accent (steel blue) | `--color-accent-blue`, `-hover`, `-muted`, `-border` |
| Status | `--color-status-warning`, `-bg`, `-border`; `--color-status-success`, `-bg` |
| Typography | `--font-sans`, `--font-mono`; `--leading-tight/snug/heading/body/relaxed` |
| Space scale | `--space-1` (4px) … `--space-10` (120px) |
| Layout | `--container-max` 1240px, `--container-narrow` 840px, `--container-editorial` 760px, `--container-padding`, `--section-spacing` |
| Radii / shadows | `--radius-xs/sm/md/lg/pill`; `--shadow-sm/md/lg` |
| Motion | `--duration-fast` 150ms, `--duration-normal` 250ms, `--ease-out`, `--ease-in-out` |
| Touch | `--min-touch-target` 44px |

Legacy aliases (`--bg-base`, `--text-main`, `--accent-copper`, …) exist in `tokens.css` for backwards compatibility — prefer the semantic `--color-*` names in new code. The broken names to eliminate: `--container-narrow-width`, `--color-accent-flagship`, `--color-bg-canvas` (debt D5).

---

## 7. Content Layer API

| Module | Export | Type / shape |
| :--- | :--- | :--- |
| `company.ts` | `companyContent` | `CompanyIdentity` — name, legalEntity, tagline, purpose, reputationPillars[3], buildingFilters[4] (id/title/description), buildingCycle[6] (stage/title/description) |
| `products.ts` | `products` | `Product[]` — slug, name, tagline, shortDescription, status `'live'\|'beta'\|'research'\|'archived'`, isFlagship, capabilities[] (title/description/isPlaceholder?), verifiableEvidence?[] (type/title/description) |
| `products.ts` | `getProductBySlug(slug)` | `Product \| undefined` (case-insensitive match) |
| `products.ts` | `getFlagshipProduct()` | `Product` (isFlagship, falls back to first) |
| `proof.ts` | `proofItems` | `VerifiedProofItem[]` — 3 items, 2 flagged `isPlaceholder: true` — **⚠ currently consumed by no view (debt D8)** |
| `navigation.ts` | `siteNavigation` | `NavigationStructure` — primaryLinks[3], footerGroups[2] (`Company`, `Products`; the products group is derived from the product registry, never hand-listed), primaryCta |
| `lumora-demo.ts` | `LUMORA_DEMO_STEPS` | `Record<LumoraDemoStepId, LumoraDemoStep>` — the 4-phase demonstration contract (exhibit fiction; [copy.md §4](copy.md#4-home--lumora-stage-lumorastage-anchor-lumora) parity; extracted from `LumoraStage.tsx` 2026-08-31 per [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md)) |
| `lumora-demo.ts` | `LUMORA_DEMO_STEP_ORDER` | `LumoraDemoStepId[]` — `['context', 'understanding', 'advisory', 'action']` |
| `types.ts` | interfaces | `CompanyIdentity`, `Product`, `NavigationItem`, `NavigationStructure`, `VerifiedProofItem` (domain schemas only — the Lumora demo types live in `lumora-demo.ts`, not here, to keep canonical company schemas separate from exhibit fiction) |

**Rules**: UI reads via these exports only; copy edits flow founder → [copy.md](copy.md) → these modules (string parity enforced by [qa-checklist §2.8](qa-checklist.md#28-content--copy-correctness)); `reputationPillars` still has no rendering destination (gap, not a feature); `verifiableEvidence` now renders on `/products/[slug]` — fixed 2026-08-31, debt D7).

---

## 8. Route Composition Map

| Route | Composes | Pattern state |
| :--- | :--- | :--- |
| `/` (Home) | `HeroSection` → `ThesisSection` → `LumoraStage` → `FounderLetter` → `HorizonSection` inside `.container` | ✅ Fully pattern-compliant (all 5 are module-styled, content-layer-fed) |
| All routes | `Header` + `main#main-content` + `Footer` via root `layout.tsx` | ✅ Compliant |
| `/products` | Module-styled page (cards grid, chips, links) via `products.module.css` | ✅ Converted 2026-08-31 (D4/D5/D6) |
| `/products/[slug]` | Module-styled page (breadcrumbs, badges, capability cards, `verifiableEvidence` card) via `product-detail.module.css` + `generateStaticParams` + `generateMetadata` + `notFound()` | ✅ Converted 2026-08-31 (D1/D4/D5/D6/D7) |
| `/about` | Module-styled page (filters grid, cycle grid) fed by `companyContent` via `about.module.css` | ✅ Converted 2026-08-31 (D4/D5) |
| `/contact` | Module-styled page (gateway card) via `contact.module.css` | ✅ Converted 2026-08-31 (D2/D4/D5) |
| 404 (`not-found.tsx`) | Terminal page styled via `not-found.module.css`; CTA uses the `Button` primitive | ✅ Converted 2026-08-31 (D4/D5/D9) |

**Home remains the reference implementation.** All five former debt pages were converted on 2026-08-31 to the same pattern (co-located module.css, tokens only, content-layer copy, [copy.md](copy.md) string parity). New pages follow that structure.

---

## 9. Drift Register (violations + resolution state)

Mirrors [qa-checklist.md §5](qa-checklist.md#5-known-debt-register-history--current-state) (single source for QA state; this register exists so builders encounter the violations at design time). Formerly tracked as [decisions.md](decisions.md) TODO 4 — **resolved in the 2026-08-31 second pass except where noted**.

| Violation (state before 2026-08-31) | Where | Contract rule broken | State |
| : | : | : | : |
| Inline `style={{...}}` everywhere | about / products / products[slug] / contact / not-found pages | §2.1 CSS Modules + tokens | **RESOLVED** — co-located module.css on all five pages |
| Undefined CSS vars (`--container-narrow-width`, `--color-accent-flagship`, `--color-bg-canvas`) | same pages | §2.2 tokens only (real names exist) | **RESOLVED** — mapped to `--container-narrow` / `--color-accent-blue` / `--color-bg-base` |
| Hardcoded stale color `rgba(112, 184, 255, 0.1)` | products pages | §2.2 tokens only (`--color-accent-blue-muted`) | **RESOLVED** — token applied |
| `[STRUCTURAL CAPABILITY CONTAINER]` label in render path | products/[slug] | Content rule — internal label must never render | **RESOLVED** — label removed; placeholder capabilities gated out |
| `(Server Action backend integration boundary prepared).` in visitor copy | contact page | Copy rule — no process language ([copy.md §9](copy.md#9-known-leaks--strings-that-must-not-ship)) | **RESOLVED** — sentence removed (no invented replacement; richer copy PENDING FOUNDER COPY) |
| `Button` / `SectionHeader` primitives bypassed | debt pages | §1 closed-set rule | **RESOLVED (Button)** — `not-found.tsx` uses it; SectionHeader adoption awaits founder kicker copy |
| `proofItems` + `verifiableEvidence` defined but unrendered | proof.ts / products.ts | Content↔UI contract (dead content) | **PARTIAL** — `verifiableEvidence` renders on the product detail page (D7); `proofItems` remains data-only (D8, founder-dependent) |
| Lumora demo narrative (4 phases × ~20 strings) hardcoded inside the client component | `LumoraStage.tsx` | §2.3 content-layer rule (found by the 2026-08-31 experience audit; formerly documented as "deliberate") | **RESOLVED 2026-08-31 (spec pass)** — extracted verbatim to `src/content/lumora-demo.ts` per [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md); rendering byte-identical (tsc/lint/tests/build + browser parity verified) |
| ~~Lumora workbench mobile: side panels `display: none` ≤ 980px (content loss); tab/step controls below 44px touch target~~ | `LumoraStage.module.css` | §2.5 a11y contract (44px) + Mobile Is First-Class parity ([product-spec §6.6](product-spec.md#66-core-ux-principles)) | **RESOLVED 2026-09-01 (D11)** by the ADR-001 vertical slice: mobile renders the `LumoraMobileStepper` composition (full parity, no `display:none`), the no-JS fallback stacks panels with all content, and all workbench controls meet ≥ 44px targets ([design-system §6.8.7](design-system.md#687-mobile-scene-recomposition-mobile-is-first-class-410)) |

---

## 10. Extension Protocol

To add a new component (only after confirming the pattern doesn't exist here):

1. **Justify reuse failure**: name the existing components considered and why none fit.
2. **Create** `src/components/<category>/<Name>.tsx` + colocated `<Name>.module.css`; category per §3 map (`layout` / `narrative` / `interactive` / `ui`).
3. **Obey the pattern contract (§2)**: tokens only, module classes only, content from `src/content/` (or `copy.md`-approved literals for narrative framing), `'use client'` only if interactive.
4. **Copy**: any new visitor-facing strings must exist in [copy.md](copy.md) first (status `PROPOSED` minimum).
5. **Register**: add the component to §4 (or §8 for pages) of this file in the same PR — an unregistered component is a contract violation.
6. **Verify**: pass [qa-checklist.md](qa-checklist.md) global gates for the touched surfaces; add a route-render test if the component changes navigation or routes.
