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
> **ADR-001 (2026-08-31)**: three experience primitives are **SPECIFIED but not yet implemented** — `Reveal` (§4.10), `SceneProgress` (§4.11), `StickyStage` (§4.12). They enter `src/components/` only in the approved cinematic-implementation pass ([ADR-001 §8](adr/ADR-001-homepage-experience-reconciliation.md)). The decision record lives in [docs/website/adr/](adr/).

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
- **Content deps**: `siteNavigation.footerLinks`, `companyContent` (name, tagline, legalEntity).
- **Renders**: brand column (name + tagline), footer link list, bottom row (dynamic-year copyright + legal entity).
- **CSS classes**: `footer`, `inner`, `topRow`, `brandCol`, `brandName`, `tagline`, `links`, `link`, `bottomRow`.
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

### 4.7 `src/components/interactive/LumoraStage.tsx` (+ `LumoraStage.module.css`) — *the interactive island*
- **Type**: **Client component** (`'use client'`) — the only one in the codebase.
- **Props**: none. **State**: `activeStep: LumoraDemoStepId` (`'context' | 'understanding' | 'advisory' | 'action'`).
- **Data**: `LUMORA_DEMO_STEPS` / `LUMORA_DEMO_STEP_ORDER` from `src/content/lumora-demo.ts` (all 4 steps' literal demo strings — full text in [copy.md §4](copy.md#4-home--lumora-stage-lumorastage-anchor-lumora); strings extracted verbatim from this component on 2026-08-31 per [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md) — the former in-component constant was an unregistered §2.3 violation, resolved in the spec pass; the file header preserves the exhibit-fiction boundary: demonstration data, not product claims). The component aliases them locally (`ACADEMIC_STEPS` / `STEP_KEYS`) — rendering is byte-identical to the pre-extraction state.
- **Renders**: section header (`03` / `Flagship Expression`, H2, lead); workbench frame with window chrome (`lumora_os // academic_intelligence_loop`); 4 `role="tab"` step tabs; 3-column body — sources panel (left), center canvas stage with per-step visuals (timeline card / forecast card / advisory card / workspace card) + explanation caption, diagnostics panel (right); status bar with prev/next cycle controls and `n / 4` indicator; philosophy bridge + 3-row ledger below.
- **Interaction contract**: tabs switch steps directly; prev/next wrap around; step indicator updates; `aria-selected` tracks state; icon-only buttons carry `aria-label` (`Previous Step` / `Next Step`).
- **CSS classes**: `stage`, `intro`, `eyebrowRow`, `indexNumber`, `eyebrowDivider`, `eyebrow`, `headline`, `lead`, `workbench`, `windowChrome`, `windowBrand`, `windowDots`, `dot`, `windowTitle`, `titleIcon`, `stepTabs`, `tabBtn`, `tabBtnActive`, `tabNum`, `workbenchBody`, `sourcesPanel`, `panelHeader`, `panelBadge`, `sourcesList`, `sourceItem`, `sourceItemActive`, `sourceDetails`, `sourceTitle`, `sourceSubtitle`, `sourceTag`, `canvasArea`, `canvasHud`, `hudBadge`, `hudInfo`, `canvasCenter`, `canvasGrid`, `visualCard`, `cardHeaderRow`, `cardTitle`, `cardTag`, `cardWarningTag`, `timelineRows`, `timelineRow`, `weekLabel`, `barItem`, `barWarning`, `warningIcon`, `advisoryContainer`, `advisoryTop`, `advisoryPill`, `advisoryImpact`, `advisoryHeadline`, `advisoryBody`, `advisoryBottom`, `verifiedTag`, `explainableTag`, `workspaceContainer`, `workspaceHeader`, `timerBadge`, `pulseDot`, `trackLabel`, `workspaceObjective`, `objectiveLabel`, `objectiveText`, `workspaceTags`, `tagItem`, `explanationArea`, `explanationBadge`, `explanationTitle`, `explanationText`, `canvasFooter`, `statusInfo`, `engineTag`, `privacyTag`, `stepControls`, `controlBtn`, `controlBtnPrimary`, `stepIndicator`, `diagnosticsPanel`, `diagnosticsList`, `diagItem`, `diagLabel`, `diagValue`, `philosophyBridge`, `bridgeContent`, `bridgeEyebrow`, `bridgeQuote`, `bridgeLedger`, `ledgerRow`, `ledgerKey`, `ledgerVal`.
- **Anchor**: `id="lumora"` (hero primary CTA target).
- **Responsive**: side panels collapse ≤ 980px, central stage prioritized.

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

### 4.10 `Reveal` (SPECIFIED, ADR-001)
- **Files (at implementation)**: `src/components/interactive/Reveal.tsx` + `Reveal.module.css` — not yet implemented (ADR-001 §8 gating).
- **Type**: Client component (`'use client'` — required: owns an IntersectionObserver).
- **Purpose**: first-entry viewport reveal per [design-system §6.8.4](design-system.md#68-motion--micro-interactions): fade + ≤20px rise, 250–350ms `--ease-out`, once-only, stagger ≤ 3 siblings.
- **Props** (`RevealProps`): `children: ReactNode` · `delay?: number` (stagger ms, ≤ 2 siblings × 90ms) · `as?: keyof JSX.IntrinsicElements` (default `div`) · `className?`.
- **Binding contracts**: no-JS safety — content visible in server HTML; the pre-reveal class is applied only by the script itself, never server-side; CLS safety — `transform` only, flow position/dimensions identical pre/post; reduced-motion — renders final state instantly (query + global token override); unobserves after firing.
- **A11y**: purely presentational; no aria attributes; never wraps focusable content in a way that delays availability (content is in the DOM and visible from first paint).
- **Status**: 🔒 SPECIFIED — implement only in the approved ADR-001 cinematic pass; verify against [qa-checklist §2.10](qa-checklist.md#210-motion--interaction-safety-adr-001-implementation-gates).

### 4.11 `SceneProgress` (SPECIFIED, ADR-001)
- **Files (at implementation)**: `src/components/interactive/SceneProgress.tsx` + `SceneProgress.module.css` — not yet implemented (ADR-001 §8 gating).
- **Type**: Client component (`'use client'` — observes scene positions).
- **Purpose**: persistent homepage wayfinding per [design-system §6.8.6](design-system.md#686-scene-composition-rules-the-scene-grammar): mono-indexed `01–05` progress rail; unifies the current duplicated numbering (hero tenets `01–03` vs. section indices `02–06`) into one system.
- **Props** (`SceneProgressProps`): `scenes: Array<{ id: string; index: string }>` (target section ids + display numbers; homepage: `overture`-equivalent existing section ids — final ids fixed at implementation).
- **Rendering**: fixed left rail ≥ 1200px; compact top indicator below; `aria-current="true"` on the active scene; each entry is an anchor link to its scene (keyboard operable, focus-visible via global rule).
- **Binding contracts**: reduced-motion — visible but without animated indicator transitions; no-JS — degrades to a plain in-page anchor list (server-rendered, default state active-agnostic); never hides or overlaps content (`pointer-events` limited to the entries; z-index below modals).
- **Status**: 🔒 SPECIFIED — same gating as `Reveal`.

### 4.12 `StickyStage` (SPECIFIED, ADR-001)
- **Files (at implementation)**: `src/components/interactive/StickyStage.tsx` + `StickyStage.module.css` — not yet implemented (ADR-001 §8 gating).
- **Type**: Client component (`'use client'` — owns the phase state machine).
- **Purpose**: the Lumora signature-scene wrapper per [design-system §6.8.5](design-system.md#685-signature-scene--lumora-sticky-reveal-scene-03-adr-001-h4h5): sticky frame + scroll-linked 4-phase progression (homepage mode) or tap-only exploration (`/products/lumora` mode) — two modes over the shared `src/content/lumora-demo.ts` state model.
- **Props** (`StickyStageProps`): `mode: 'scroll' | 'explore'` · `children` (the workbench frame — the existing `LumoraStage` body re-composed) · phase content injected from `LUMORA_DEMO_STEPS`.
- **Interaction contract (ADR-001 H5, binding)**: scroll-linked mode observes phase sentinels via IntersectionObserver; native scroll 100% authoritative (no jacking/snap/momentum interference); tap controls always visible and always override (and re-sync the viewport to the matching sentinel); `prefers-reduced-motion: reduce` collapses sticky to normal flow with tap-only switching.
- **A11y**: phase tabs keep `role="tablist"`/`role="tab"`/`aria-selected`; the stage region keeps its `aria-label`; the phase state is announced via the existing step indicator; controls ≥ 44×44px.
- **Status**: 🔒 SPECIFIED — highest-risk primitive; must pass all §2.10 gates plus §3 home-row checks before merge.

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
| `navigation.ts` | `siteNavigation` | `NavigationStructure` — primaryLinks[3], footerLinks[3], primaryCta |
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
| Lumora workbench mobile: side panels `display: none` ≤ 980px (content loss); tab/step controls below 44px touch target | `LumoraStage.module.css` | §2.5 a11y contract (44px) + Mobile Is First-Class parity ([product-spec §6.6](product-spec.md#66-core-ux-principles)) | **OPEN — registered as debt D11**; resolved by the ADR-001 mobile vertical-stepper recomposition ([design-system §6.8.7](design-system.md#687-mobile-scene-recomposition-mobile-is-first-class-410)) in the pending cinematic pass |

---

## 10. Extension Protocol

To add a new component (only after confirming the pattern doesn't exist here):

1. **Justify reuse failure**: name the existing components considered and why none fit.
2. **Create** `src/components/<category>/<Name>.tsx` + colocated `<Name>.module.css`; category per §3 map (`layout` / `narrative` / `interactive` / `ui`).
3. **Obey the pattern contract (§2)**: tokens only, module classes only, content from `src/content/` (or `copy.md`-approved literals for narrative framing), `'use client'` only if interactive.
4. **Copy**: any new visitor-facing strings must exist in [copy.md](copy.md) first (status `PROPOSED` minimum).
5. **Register**: add the component to §4 (or §8 for pages) of this file in the same PR — an unregistered component is a contract violation.
6. **Verify**: pass [qa-checklist.md](qa-checklist.md) global gates for the touched surfaces; add a route-render test if the component changes navigation or routes.
