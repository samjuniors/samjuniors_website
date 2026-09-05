# SamJuniors Website — Component Inventory & Pattern Contract

> **The closed set of components that exist, their props/variants, and the one mandatory styling pattern.** This is the map an agent reads before building anything, so work *reuses* the system instead of drifting into one-off inline styles — the exact failure mode that produced the current inline-styled pages (see [§9 drift register](#9-drift-register-violations--resolution-state)).
>
> **Authority**: Tokens are governed by [design-system.md §6](design-system.md#6-design-system-specification) (the only token spec) and implemented in `src/styles/tokens.css`. Content contracts are governed by [architecture.md §5](architecture.md#5-content--data-boundary-architecture). Literal copy for every string lives in [copy.md](copy.md). QA for anything built here: [qa-checklist.md](qa-checklist.md).
>
> **How to use**: For any page or component task, read the relevant spec section + [copy.md](copy.md) + this file's matching entries. Do not read [decisions.md](decisions.md) or [docs/company/foundation.md](../company/foundation.md) unless the task concerns brand identity or historical rationale.

---

## 1. The Closed-Set Rule

> [!IMPORTANT]
> **Build from this inventory first.** If a needed pattern already exists (button, panel, workflow body, narrative section), reuse or extend it. If it genuinely doesn't exist, follow the [extension protocol (§10)](#10-extension-protocol) — which includes updating this file. **Never** create a parallel styling approach for an existing pattern. The sanctioned styling path is **CSS Modules consuming `src/styles/tokens.css`, plus the global class primitives in `src/app/globals.css`** (§2 rule 7, [design-system.md §6.5](design-system.md#65-ui-primitives--components)).

> [!WARNING]
> **Corrected 2026-09-05 (founder decision).** This rule previously read "The `src/components/ui/` primitives and the CSS-Modules-with-tokens pattern are the *only* sanctioned styling path." **`src/components/ui/` does not exist** — it was deleted in commit `5b58001` (2026-09-01) along with `Button` and `SectionHeader`, and nothing replaced it. The interactive primitives are global CSS classes, and section headers are composed per scene. The founder ratified that outcome on 2026-09-05 rather than rebuilding the directory, which **closes debt D9 as obsolete**. §4.8 and §4.9 below are replaced accordingly.

---

## 2. Mandatory Pattern Contract (binding for all component/page work)

1. **CSS Modules + tokens, always.** Every component styles itself via a colocated `*.module.css` file whose values consume custom properties from `src/styles/tokens.css`. No inline `style={{...}}` props in pages or components. No global class soup for component-scoped styles.
2. **Tokens only, never literals.** No hardcoded hex/rgba colors, font stacks, or spacing values in TSX **or in CSS Modules**. The sanctioned color/spacing/font variables are listed in [§6](#6-design-token-quick-reference) and defined in `src/styles/tokens.css`. ⚠️ **Corrected 2026-09-05:** this rule previously told agents to use `--color-accent-blue`. **That token no longer exists** — it was deleted as a product-truth correction ([decisions.md](decisions.md) TODO 2, [design-system.md §4.5](design-system.md#45-visual-language--aesthetic-synthesis)). The company accent is `--color-accent-copper`; the product evidence surface uses `--color-evidence-*`. The other names flagged as broken here (`--container-narrow-width`, `--color-accent-flagship`, `--color-bg-canvas`) remain broken and unused. The "in TSX" scoping was itself the hole that let debt **D12** through — see [qa-checklist.md §5](qa-checklist.md#5-known-debt-register-history--current-state).
3. **Content comes from the content layer.** Components and pages never hardcode company claims or product copy; they import from `src/content/` ([architecture.md §5](architecture.md#5-content--data-boundary-architecture), content API in [§7](#7-content-layer-api)). Literal approved strings: [copy.md](copy.md).
4. **Server components by default.** Only interactive islands carry `'use client'` — currently `LumoraWorkflowWalkthrough`, `LumoraWorkflowBody`, `StickyStage`, `Reveal`, `SceneProgress`, `CloseNavOnNavigate`, `error.tsx`, and the three hooks. Everything else, including `LumoraMobileStepper` (anchor-driven) and `LumoraFlagship`, renders on the server. Motion via CSS transforms/opacity only, with reduced-motion collapse (`tokens.css` global override).
5. **Accessibility is part of the component contract.** Landmark/heading discipline, `:focus-visible` (global style in `globals.css`), aria labels on icon-only controls, ≥ 44×44px touch targets. ⚠️ **Corrected 2026-09-05:** this rule previously mandated `role="tablist"` for tabs. The workflow step controls deliberately use **`role="group"` with `aria-pressed`**, because they are not tabs — activating one does not swap between sibling panels of equal standing, it advances a single ordered explanation, and the arrow-key semantics a tablist promises are not implemented. See §4.15. Use `tablist` only where the pattern genuinely is tabs.
6. **Global utility classes** (`.container`, `.container-narrow`, `.container-editorial`, `.sr-only`, `.hairline-divider`) come from `src/app/globals.css` and may be composed alongside module classes (see `Header`/`Footer` usage).
7. **Global button/link primitives**: `.btn-primary`, `.btn-secondary`, `.text-link` in `globals.css` are **the** interactive primitives — compose them directly with `className`. ⚠️ **Corrected 2026-09-05:** this rule previously said they existed "AND as the typed `Button` component in `src/components/ui/` — prefer the `Button` component in React code." There is no `Button` component and no `src/components/ui/` directory; that guidance pointed agents at a file that has not existed since 2026-09-01. Full contract in [design-system.md §6.5](design-system.md#65-ui-primitives--components) and §4.8 below.

---

## 3. Directory Map

```
src/
├── app/                          # Routes (App Router)
│   ├── layout.tsx                # Root shell: skip link + Header + main#main-content + Footer, metadata
│   ├── page.tsx                  # / (Home) — composes the 5 narrative scenes
│   ├── error.tsx                 # Route-level error boundary (client)
│   ├── not-found.tsx             # 404 — styled by status-page.module.css
│   ├── status-page.module.css    # Shared 404/error page styling
│   ├── globals.css               # Reset, global utilities + interactive primitives, focus states
│   ├── icon.svg · robots.ts · sitemap.ts · opengraph-image.tsx   # Metadata & discovery assets
│   ├── about/page.tsx + about.module.css                         # /about
│   ├── contact/page.tsx + contact.module.css                     # /contact
│   ├── products/page.tsx + products.module.css                   # /products
│   ├── products/[slug]/page.tsx + product-detail.module.css      # /products/{slug}
│   ├── routes.test.tsx           # Route render tests (RTL)
│   ├── product-truth.test.tsx    # Product-misrepresentation guard (see §11)
│   └── company-hierarchy.test.tsx # Company-before-product guard (15 tests)
├── components/
│   ├── layout/       Header, Footer, CloseNavOnNavigate (client)
│   ├── narrative/    HeroSection, ThesisSection, LumoraFlagship, FounderPresence, HorizonSection
│   ├── interactive/  LumoraWorkflowWalkthrough, LumoraWorkflowBody, LumoraMobileStepper,
│   │                 StickyStage, Reveal, SceneProgress
│   ├── product/      LumoraEvidence
│   └── seo/          JsonLd
├── content/          company.ts, products.ts, proof.ts, navigation.ts, lumora-workflow.ts,
│                     types.ts (+ content.test.ts)
├── hooks/            usePrefersReducedMotion.ts, useMediaQuery.ts, usePhaseSwap.ts
├── lib/              site.ts (canonical origin), structured-data.ts (schema.org graphs)
└── styles/
    └── tokens.css    Certified Phase 7 token set (single token authority)
```

> [!WARNING]
> **§3 was rewritten 2026-09-05 from the actual tree.** The previous listing was three commits stale: it named `src/components/ui/` (deleted), `LumoraStage` (deleted), `FounderLetter` (renamed `FounderPresence`), `lumora-demo.ts` (renamed `lumora-workflow.ts`) and `not-found.module.css` (renamed `status-page.module.css`), and it omitted `src/hooks/`, `src/lib/`, `src/components/product/`, `src/components/seo/`, the two new guard test files, `error.tsx` and all four metadata assets. `next.config.ts` (repo root, added by `5b58001`) carries the baseline security headers and is specified nowhere — see [decisions.md](decisions.md) TODO 17.

> [!NOTE]
> **ADR-001 (2026-08-31; implemented 2026-09-01 vertical slice + propagation pass)**: `Reveal` (§4.10), `StickyStage` (§4.12) and `SceneProgress` (§4.11) are **implemented and QA-verified**. The four-step workflow body ships as `LumoraWorkflowBody` (§4.15) inside `LumoraWorkflowWalkthrough` (§4.16); `LumoraMobileStepper` (§4.14) carries the mobile path. Motion hooks: `usePrefersReducedMotion.ts` / `useMediaQuery.ts` / `usePhaseSwap.ts` (`useSyncExternalStore`-based, SSR-safe). ⚠️ **The walkthrough now renders on `/products/lumora` only — not as homepage Scene 03, which ADR-001 H4/H5 specify.** The homepage's Scene 03 is `LumoraFlagship`. That divergence is unresolved and founder-owned: [decisions.md](decisions.md) TODO 15. The decision record lives in [docs/website/adr/](adr/).

---

## 4. Component Catalog

### 4.1 `src/components/layout/Header.tsx` (+ `Header.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `siteNavigation.primaryLinks`, `siteNavigation.primaryCta`, `companyContent.name`.
- **Renders**: brand link (wordmark dot + `SamJuniors`, aria-label `SamJuniors Home`); a desktop `<nav aria-label="Main navigation">` list + desktop CTA; and a **compact `<details id="compact-nav">` disclosure** whose `<summary>` (aria-label `Navigation menu`) shows a bars glyph + the word `Menu`, opening a second `<nav aria-label="Site navigation">` with the same links and CTA. `CloseNavOnNavigate` (§4.18) is mounted last.
- **CSS classes**: `header`, `inner`, `brand`, `brandMark`, `desktopNav`, `nav`, `navLink`, `cta`, `desktopCta`, `compactNav`, `compactToggle`, `toggleBars`, `toggleWord`, `compactPanel`, `compactList`, `compactLink`. Composes global `.container`.
- **Responsive**: the desktop nav/CTA and the compact disclosure swap at the header's breakpoint — the links are **never hidden without an equivalent control taking their place**, which is the component's own stated contract ("Primary navigation is never hidden without an equivalent interaction taking its place").
- **No-JS contract**: `<details>` opens and closes natively, is keyboard-operable, and exposes expanded state through the browser. Script adds exactly one behaviour — collapsing the panel after a link is taken.
- **Unregistered strings**: `Menu`, `Navigation menu`, `Site navigation` are navigation chrome introduced with the disclosure and are not in [copy.md](copy.md) — folded into [decisions.md](decisions.md) TODO 16.

> [!NOTE]
> **Corrected 2026-09-05.** This entry described a header that hid its navigation at small widths, with a
> **Notes** line claiming "no mobile hamburger in this repo — nav hides at small widths (gap to address in UI
> phase)". Attributed from the file's history (`Header.tsx` has three commits total): the compact `<details>`
> disclosure arrived in **`5b58001`** (2026-09-01) and the `id="compact-nav"` + dismissal script in
> **`9c3f311`** (2026-09-03) — neither recorded until this pass. The `aria-label` was also recorded as
> `Main Navigation`; the code says `Main navigation`.

### 4.2 `src/components/layout/Footer.tsx` (+ `Footer.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `siteNavigation.footerGroups`, `companyContent` (name, tagline, legalEntity).
- **Renders**: brand column (name + tagline), one labelled `<nav>` per footer group (`Company`, `Products` — the products group enumerates the registry), bottom row (dynamic-year copyright + legal entity).
- **CSS classes**: `footer`, `inner`, `topRow`, `brandCol`, `brandName`, `tagline`, `groups`, `group`, `groupLabel`, `links`, `link`, `bottomRow`.
- **Layout contract**: `body` is `min-height:100vh; display:flex; column` with `main { flex: 1 }` (globals.css) — footer naturally sticks to viewport bottom on short pages and is pushed down on long pages. Preserve this when touching layout.

### 4.3 `src/components/narrative/HeroSection.tsx` (+ `HeroSection.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `companyContent.name`, `getFlagshipProduct()` (CTA label `Experience {flagship.name}`).
- **Renders**: topline (status pulse + `AI-first technology company`), H1 with italic emphasis, lead, CTA row (primary `See what {companyContent.name} builds` → `/products`, secondary text link naming the flagship), 3-item tenets row (`aria-label="Institutional Building Tenets"`: `01 Durable Compounding`, `02 Grounded Intelligence`, `03 Human Authority`). Staged load choreography via `Reveal` (topline → headline → lead → action row → tenets, 60ms stagger).
- **CSS classes**: `hero`, `topline`, `statusPulse`, `statementArea`, `headline`, `lead`, `actionRow`, `primaryBtn`, `textLink`, `tenetsRow`, `tenetItem`, `tenetHeader`, `tenetNumber`, `tenetTitle`, `tenetBody`.
- **Responsive**: tenets stack at ≤ 880px.

### 4.4 `src/components/narrative/ThesisSection.tsx` (+ `ThesisSection.module.css`)
- **Type**: Server component. **Props**: none.
- **Content deps**: `companyContent.buildingCycle` (6 stages).
- **Renders**: section header (index `02` / `Building Philosophy`), H2 statement + lead, asymmetric editorial grid: left spine = numbered 6-step cycle `<ol>`, right column = 3 conviction prose blocks.
- **CSS classes**: `thesis`, `headerArea`, `labelRow`, `indexNumber`, `divider`, `label`, `statement`, `statementLead`, `editorialGrid`, `cycleColumn`, `columnLabel`, `cycleList`, `cycleStep`, `stepMarker`, `stepNum`, `stepLine`, `stepContent`, `stepTitle`, `stepDesc`, `convictionColumn`, `proseBlock`, `proseHeading`, `proseText`.
- **Anchor**: `id="thesis"` (hero secondary link target).
- **Responsive**: grid collapses at ≤ 880px.

### 4.5 `src/components/narrative/FounderPresence.tsx` (+ `FounderPresence.module.css`) — *Scene 04*
- **Type**: Server component. **Props**: none.
- **Content deps**: `companyContent.name`, `companyContent.founder` (`name` / `role` / `bio` / `portrait` / `statement`, all `null` until the founder supplies them).
- **Renders**: label row (`04` / `The people layer`), H2 (`{name} is founder-led, and deliberately not a personal brand`), a body paragraph on how direction is set, then **two independently gated blocks**: a portrait + identity block rendered only when `founder.name` is non-null, and a statement blockquote rendered only when `founder.statement` **and** `founder.name` are both present.
- **CSS classes**: `letterSection`, `labelRow`, `indexNumber`, `divider`, `label`, `heading`, `body`, `founderBlock`, `portrait`, `founderDetails`, `founderName`, `founderRole`, `founderBio`, `quoteWrapper`, `statement`, `attribution`.
- **Anchor**: `id="founder"`. **Responsive**: ≤ 640px adjustments.
- **Zero-fabrication contract (read the component's header comment before touching it)**: the null-gating is the mechanism that stops a founder profile from being invented. The scene speaks about *how the company is led* without implying a founder profile exists, which also holds [foundation.md](../company/foundation.md) §1's boundary that SamJuniors is never equated with its founder. **Do not fill these fields with inferred or placeholder identity.** The founder name remains a pending copy gap ([copy.md §10](copy.md#10-placeholder--missing-copy-registry-pending-founder-copy)).

> [!WARNING]
> **Renamed and rewritten 2026-09-05 in the record; the code changed on 2026-09-01 (`5b58001`).** This entry
> previously documented `FounderLetter.tsx` — a blockquote "letter" with a signature block signed
> `Founder & Leadership`, a legal-entity title and an `Est. 2026` stamp. None of that exists: the component
> is `FounderPresence`, there is no letter, no signature block and no date stamp, and the class list above is
> almost entirely different. **The H2 and body paragraph are hardcoded in the component and are not
> registered in [copy.md](copy.md)** — further unregistered copy from the same commit as
> [decisions.md](decisions.md) TODO 16, and now included in that TODO's parity audit.

### 4.6 `src/components/narrative/HorizonSection.tsx` (+ `HorizonSection.module.css`) — *Scene 05*
- **Type**: Server component. **Props**: none.
- **Renders**: two-column closing grid inside `<section id="horizon" aria-label="Ecosystem and Dialogue">` — Ecosystem column (`05` / `Ecosystem`, H2 `What comes after the first product`, `.text-link` → `/products`) and Collaboration column (`Collaboration` label with **no index number**, H2 `Start a conversation`, `.btn-primary` `Get in touch` → `/contact`). Both columns are `Reveal`-wrapped (second staggered 90ms).
- **CSS classes**: `section`, `sectionInner`, `grid`, `col`, `labelRow`, `indexNumber`, `divider`, `label`, `actionLink`, `ctaLink`.
- **Responsive**: columns stack at ≤ 860px.

> [!NOTE]
> **Corrected 2026-09-05.** This entry previously recorded `An Expanding Ecosystem` / `Explore Portfolio
> Architecture →` and a `06` / `Initiate Dialogue` / `Connect With Leadership →` column. All five strings
> changed and the `06` sub-index was **removed** — which closes the tension the 2026-09-01 QA record recorded
> under interpretation decision (a) ("the Horizon columns keep their registered `05`/`06` sub-indices"), but
> closes it in code without a copy record. Folded into [decisions.md](decisions.md) TODO 16's parity audit.

### 4.7 `src/components/narrative/LumoraFlagship.tsx` (+ `LumoraFlagship.module.css`) — *homepage Scene 03*
- **Type**: **Server component** (no `'use client'`, no state, no observer). This is the significant change: Scene 03 is no longer an interactive island.
- **Content deps**: `companyContent.name`, `getFlagshipProduct()` → `name`, `slug`, `category`, `statusLabel`, `shortDescription`, `workflow[]`, `principle`, `evidence[]`.
- **Renders**: eyebrow row (`03` / `Flagship product`), a one-line company frame (`The first product {companyContent.name} has taken to beta.`), H2 (`{product.name} — assessment the teacher still decides`), category + status row (the `·` separator sits **inside** the status span so it wraps with the status text), lead from `shortDescription`, a **static `<ol>` of `product.workflow`** (order / `<h3>` label / summary per step), the release-gate `principle`, an action pair (`.btn-primary` → `/products/{slug}` `How {product.name} works`, `.text-link` → `/contact` `Talk to us about {product.name} →`), and finally `LumoraEvidence` (§4.13) with `items={product.evidence.slice(0, 1)}` — **one** item on the homepage.
- **CSS classes**: `stage`, `stageWidth`, `eyebrowRow`, `indexNumber`, `eyebrowDivider`, `eyebrow`, `companyFrame`, `headline`, `intro`, `category`, `status`, `statusDot`, `lead`, `workflow`, `workflowStep`, `workflowOrder`, `workflowLabel`, `workflowSummary`, `principle`, `actions`, `closing`.
- **Anchor**: `id="lumora"`, `aria-labelledby="lumora-heading"`.
- **Heading outline**: this scene contributes **two** H2s — its own (`#lumora-heading`) and `LumoraEvidence`'s (`#lumora-evidence-heading`, from the nested `<section>`), plus four H3s from the workflow list. Any heading-outline gate must expect that.
- **Unregistered strings**: the H2, the company-frame line, both action labels, and the two evidence props passed from here (`title` = `What the product actually does today`; a two-sentence `intro` naming pre-launch beta and seeded demonstration data) are **hardcoded in the component and absent from [copy.md](copy.md)** — folded into [decisions.md](decisions.md) TODO 16.
- **Why it is a statement and not a walkthrough** — the rationale is in [`src/app/page.tsx`](../../src/app/page.tsx): *"The full four-step workflow walkthrough lives on /products/lumora — the homepage does not spend four viewport heights on a single product, which is what keeps this beat inside its share of the page rather than consuming it."* It renders **without JavaScript in full**, which the sticky scene could not.

> [!CAUTION]
> **§4.7 was replaced 2026-09-05. It previously documented `LumoraStage.tsx`, which does not exist** — it and
> its 871-line stylesheet were deleted in `5b58001` (2026-09-01), along with `LumoraPhaseVisual`,
> `LumoraWorkbenchBody`, `LumoraDemoExplore` and `src/content/lumora-demo.ts`. The old entry described a
> four-phase academic *simulation* (`lumora_os // academic_intelligence_loop` window chrome, sources /
> canvas / diagnostics panels, `LUMORA_DEMO_STEPS`) that was removed as a **product misrepresentation**;
> its strings are now blocked by [`src/app/product-truth.test.tsx`](../../src/app/product-truth.test.tsx).
> **This is an ADR-001 divergence, not just a rename:** ADR-001 H4/H5 specify the sticky reveal as Scene 03
> of the homepage. It is now on `/products/lumora` only (§4.16). Founder-owned — [decisions.md](decisions.md)
> TODO 15. Old §4.13 (`LumoraPhaseVisual`) and §4.15 (`LumoraWorkbenchBody`) are likewise obsolete.

### 4.8 Interactive primitives — global CSS classes in `src/app/globals.css`
- **Not React components.** `.btn-primary`, `.btn-secondary`, `.text-link` and `.hairline-divider` are global classes composed directly via `className`, including alongside module classes (`` className={`text-link ${styles.actionLink}`} ``). All three interactive classes set `min-height: var(--min-touch-target)` (44px) and inherit the global `:focus-visible` ring; external links still need `target="_blank" rel="noopener noreferrer"` written explicitly, since no component supplies them.
- **Adoption (measured 2026-09-05):** `.btn-primary` 6 files · `.text-link` 8 files · `.btn-secondary` **0** · `.hairline-divider` **0**. The two unused classes are registered as debt **D15** — sanctioned primitives with no call sites.
- **Full contract**: [design-system.md §6.5](design-system.md#65-ui-primitives--components). Known defect: `.btn-primary:hover` hardcodes `#ffffff` instead of a token (debt **D12**).

### 4.9 Section headers — composed per scene, no shared component
- Each narrative scene builds its own opener from [design-system.md §6.3](design-system.md#63-typography-hierarchy)'s type roles: a mono eyebrow row (`{indexNumber}` / `{kicker}`), an H2, and an optional lead. See §4.3–§4.7 for the per-scene class names.
- **There is deliberately no `SectionHeader` component.** Adopting one would require new `indexNumber`/`kicker` strings on the sub-pages, which is founder copy — and the composition differs enough per scene (Scene 05 dropped its index entirely) that a shared component would be parameterised to the point of no benefit.

> [!IMPORTANT]
> **§4.8 and §4.9 were rewritten 2026-09-05 by founder decision; debt D9 is closed as obsolete.** They
> previously documented `src/components/ui/Button.tsx` (with a full `ButtonProps` contract and the claim
> *"Adopted by `not-found.tsx` on 2026-08-31"*) and `src/components/ui/SectionHeader.tsx`. **Neither file
> exists**; both were deleted in `5b58001` (2026-09-01), and `not-found.tsx` uses a raw
> `className="btn-primary"` link. The drift register marked D9 **RESOLVED** on the strength of an adoption
> that had since been reverted — a false completion, and the reason [§9](#9-drift-register-violations--resolution-state)
> now records verification-by-file-existence as a standing requirement.

### 4.10 `src/components/interactive/Reveal.tsx` (+ `Reveal.module.css`) — *first-entry reveal primitive (implemented)*
- **Type**: Client component (`'use client'` — required: owns an IntersectionObserver).
- **Purpose**: first-entry viewport reveal per [design-system §6.8.4](design-system.md#68-motion--micro-interactions): fade + ≤20px rise, 250–350ms `--ease-out`, once-only, stagger ≤ 3 siblings. Also carries the Scene 01 load choreography (§6.8.3) via per-element delays — server-visible default, JS-added pre-reveal, ≤ 500ms sequence.
- **Props** (`RevealProps`): `children: ReactNode` · `delay?: number` (stagger ms, ≤ 2 siblings × 90ms) · `as?: ElementType` (default `div`) · `className?` · `style?` (CSS custom properties allowed — `--reveal-distance`, used by Scene 01's 12px rise) · `aria-label?` · `id?`.
- **Binding contracts (verified 2026-09-01, qa-checklist §2.10)**: no-JS safety — content visible in server HTML; the pre-reveal class is applied only by the script's layout effect, never server-side; CLS safety — `transform`/`opacity` only, offset metrics identical pre/post (probed); reduced-motion — renders final state instantly (hook + global token override); unobserves after firing. Mobile choreography shortened by the module's ≤ 640px budget override (§6.8.7).
- **A11y**: purely presentational; no aria attributes; never wraps focusable content in a way that delays availability (content is in the DOM and visible from first paint).
- **Status**: ✅ **IMPLEMENTED (2026-09-01, ADR-001 vertical slice)** — verified against [qa-checklist §2.10](qa-checklist.md#210-motion--interaction-safety-adr-001-implementation-gates) (see the decisions.md QA run record). **Adoption is now six files, not two** (corrected 2026-09-05): `HeroSection` (6 uses), `ThesisSection` (5), `HorizonSection` (2), `/about` (2), `/products` (1, as `article`), `/contact` (1, as `div`). It is the most reused component in the repo and the `as` prop is load-bearing.

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
- **Purpose**: the Lumora walkthrough stage mechanism per [design-system §6.8.5](design-system.md#685-signature-scene--lumora-sticky-reveal-scene-03-adr-001-h4h5): sticky frame + scroll-linked 4-phase progression, or tap-only exploration — two modes over one state model.
- **Props** (`StickyStageProps`): `mode?: 'scroll' | 'explore'` (**default `'scroll'`**) · `phaseOrder?: readonly LumoraWorkflowStepId[]` (defaults to `LUMORA_WORKFLOW_STEP_ORDER` from `src/content/lumora-workflow.ts`) · `children: (api) => ReactNode` render function providing `StickyStageChildrenApi` = `{ phase, phaseIndex, phaseCount, selectPhase }`.
- **Sole consumer**: `LumoraWorkflowWalkthrough` (§4.16), which renders `LumoraWorkflowBody` (§4.15) as the stage body. Reduced motion selects `'explore'` at the call site; the hook is also read internally, so `mode="scroll"` under reduced motion still degrades safely.
- **Mechanics (implemented 2026-09-01; pacing rebalanced 2026-09-01 per founder review)**: geometry — tall container (`phaseCount × 100vh`) + `position: sticky` frame, applied **only** when the script activates (`data-scroll-active`, driven by a `useSyncExternalStore` client signal; server HTML / no-JS / reduced motion / explore mode keep normal flow; a `prefers-reduced-motion` media override is the second defense line); phase sentinels — 4 invisible geometry markers whose band boundaries are **rebalanced after mount from measured geometry** (weights `0.5 / 1 / 1 / 1.25`, sum 3.75; entry travel to the pin and exit travel off it are compensated separately and credited to the adjacent transitions, never to a phase's reading time; equal ¼ fractions remain the server/no-JS default and the fallback when the reference window drops below 240px or any band computes ≤ 0; recomputed on `resize` and via a `ResizeObserver` on the frame, both rAF-coalesced), observed via IntersectionObserver (21 thresholds, `rootMargin: 0px 0px -55% 0px` → root band = top 45% of viewport); on each browser-batched callback the active phase is re-derived from fresh sentinel rects (the sentinel spanning the 40%-viewport trigger line) — **zero scroll listeners, zero scroll capture** (the resize listener observes layout, not scroll); the pacing effect is gated on `phaseCount === 4`, since the weights are defined for four phases.
- **Tap override (two parts)**: `selectPhase(id)` sets state and bumps a `{ idx, nonce }` signal, so re-picking the same phase still re-syncs; an effect then scrolls with `window.scrollTo` to land the **trigger line a measured distance inside** the target band (`min(bandHeight/2, 25vh)`), `behavior: 'smooth'` unless reduced. Explore mode is pure state, no scrolling.
- **Interaction contract (ADR-001 H5, binding — verified)**: native scroll 100% authoritative (verified with native wheel input forward and backward); monotonic phase progression 1→4 with no flicker (sampled at 7 scroll positions + reverse); tap controls always enabled and always override; reduced motion collapses sticky to flow with tap-only switching.
- **A11y**: this component renders only geometry — the sentinels are `aria-hidden="true"` and carry `data-phase-index`. All roles, labels, the live-region announcement and the ≥44px controls belong to the stage body (§4.15).
- **Status**: ✅ **IMPLEMENTED (2026-09-01, ADR-001 vertical slice)** — highest-risk primitive; passed all §2.10 gates plus §3 home-row checks (see the decisions.md QA run record).

> [!NOTE]
> **Corrected 2026-09-05.** Three claims here were stale. (1) The content module is `lumora-workflow.ts`
> (`LumoraWorkflowStepId` / `LUMORA_WORKFLOW_STEP_ORDER`), not `lumora-demo.ts`; (2) the body is
> `LumoraWorkflowBody`, not the deleted `LumoraStage` workbench, and the stage no longer runs on the homepage
> at all ([decisions.md](decisions.md) TODO 15); (3) the tap re-sync **no longer uses
> `scrollIntoView({ block: 'center' })`** — that was replaced in `5b58001`, and the code comment records why:
> for a band taller than the viewport the browser aligns an edge instead of centring, which could leave the
> trigger line inside a *neighbouring* band, so the observer immediately overrode the tap and the control
> appeared to jump back a step. That is a real interaction bug fixed with no record; it is now the strongest
> single piece of evidence that `5b58001` contained deliberate engineering (see that commit's backfilled QA
> Run Record). The `aria-selected`/`role="tab"` claim moved to §4.15 and changed — see there.

### 4.13 `src/components/product/LumoraEvidence.tsx` (+ `LumoraEvidence.module.css`) — *the product evidence surface*
- **Type**: Server component. Uses `next/image`.
- **Props** (`LumoraEvidenceProps`): `items: ProductEvidenceItem[]` · `headingId: string` (for the section's `aria-labelledby`) · `title: string` · `intro: string`.
- **Render gates**: filters out `isPlaceholder` items and **returns `null`** if none remain — an empty evidence set produces no band rather than an empty one. A second gate, `hasCaptures = published.some(item => item.image)`, switches the framing: eyebrow `Product evidence` when a real capture exists, `Verified product behaviour` when none does, plus a capture-honesty note in the no-capture case (*"We have not published interface captures yet…"*). Per-item, `isDemoData` renders `Demonstration data` with a capture and `Observed on demonstration data` without one.
- **Renders**: `<section aria-labelledby={headingId}>` → header (eyebrow / H2 / intro / conditional capture note) → `<ul>` of items, each an optional `<figure>` + `<Image>` (`sizes="(max-width: 900px) 100vw, 720px"`) and a body of H3 title, optional demo tag, description, and a `<ul>` of `observed` lines. Items without an image use a full-width variant class.
- **Environment handoff (deliberate, [design-system §4.5](design-system.md#45-visual-language--aesthetic-synthesis)):** this is the one band where the SamJuniors obsidian environment gives way to the product's own light canvas, because the material being shown belongs to Lumora, not to the parent company.
- **Binding content rules (stated in the file):** interface evidence is a real capture of the shipping product or it is not published at all — nothing here reconstructs Lumora's UI in SamJuniors CSS; captures show seeded demonstration data and say so; demo-data indicators are never cropped out.
- **Consumers**: homepage Scene 03 via `LumoraFlagship` (§4.7) with `evidence.slice(0, 1)`, and `/products/[slug]` with the full filtered set. Both call sites pass **hardcoded `title`/`intro` strings absent from [copy.md](copy.md)** — [decisions.md](decisions.md) TODO 16.
- **Current state**: `products.ts` carries three evidence items, all `isPlaceholder: false` / `isDemoData: true` and **none with an `image`** — so the no-capture framing is what actually ships today. That is the honest branch, and it stays until the captures in [decisions.md](decisions.md) TODO 3 exist.

> [!CAUTION]
> **§4.13 was replaced 2026-09-05. It previously documented `LumoraPhaseVisual.tsx`, which does not exist** —
> deleted with the rest of the workbench in `5b58001`. It rendered the four "context timeline / understanding
> forecast / advisory recommendation / action workspace" cards, i.e. a **reconstruction of Lumora's interface
> in SamJuniors CSS**. The component that replaced it is built on the opposite rule, quoted above. This is the
> single clearest expression of what the product-truth correction was for.

### 4.14 `src/components/interactive/LumoraMobileStepper.tsx` (+ `LumoraMobileStepper.module.css`) — *mobile walkthrough composition*
- **Type**: No `'use client'` directive, no hooks, no state — pure presentational. It is imported by `LumoraWorkflowWalkthrough` (§4.16), so it compiles into that client boundary; it contributes no interactivity of its own.
- **Data**: `LUMORA_WORKFLOW_STEPS` / `LUMORA_WORKFLOW_STEP_ORDER`.
- **Renders**: an anchor `<nav aria-label="Lumora workflow steps">` of four `#lumora-step-01…04` links (order badge + label, ≥ 44px targets), then the four steps as sequential `<article>` segments, each with `aria-labelledby` on its own H3 and carrying: order badge, `actor`, `headline` (H3), `narrative`, `decision`, and a `Then` + `handoff` footer. Anchors work with and without JavaScript; segments carry `scroll-margin-top` so landings clear the sticky header.
- **Deliberate divergence from the desktop body**: the `detail` fact ledger (four label/value rows per step) is **not rendered here**. The file states the reason — *"one meaningful idea per step… four stacked specification tables is exactly what this composition exists to avoid."*
- **CSS classes**: `stepper`, `stepperNav`, `stepperTab`, `stepperTabNum`, `segment`, `segmentHeader`, `segmentNum`, `segmentActor`, `segmentTitle`, `segmentNarrative`, `segmentDecision`, `segmentStatus`, `segmentHandoffLabel`, `segmentHandoff`.

> [!WARNING]
> **Corrected 2026-09-05 — and the correction opens a parity question.** The previous entry described a mobile
> composition rendered by `LumoraStage` below 980px with "the full workbench parity set" (badge, headline,
> narrative, HUD line, `LumoraPhaseVisual`, inline sources panel, inline diagnostics panel, status footer)
> and credited it with resolving debt D11's mobile-parity half, citing
> [qa-checklist §2.10.6](qa-checklist.md#210-motion--interaction-safety-adr-001-implementation-gates). None of
> those panels exist now, and the anchors changed from `#lumora-phase-01…04` to `#lumora-step-01…04` (any
> external or documented deep link to the old ids is dead).
> **Parity now holds for claims but not for facts:** the 16 `detail` rows are desktop-only, including the
> `Evaluation engine · Google Gemini` vendor disclosure and `Failure handling · Dead-letter queue`. The Gemini
> disclosure does still reach mobile visitors through the step-02 `summary` in `products.ts` (rendered by
> §4.7 and the `/products/lumora` header), so nothing load-bearing is hidden — but §2.10.6's gate is written
> as *structural* parity, which this composition deliberately no longer provides. Registered as debt **D16**;
> the gate needs rewording to match the design intent, or the intent needs revisiting — see
> [decisions.md](decisions.md) TODO 14.

### 4.15 `src/components/interactive/LumoraWorkflowBody.tsx` (+ `LumoraWorkflowBody.module.css`) — *the stage body*
- **Type**: Client component (`'use client'`).
- **Props**: the `StickyStageChildrenApi` (`{ phase, phaseIndex, phaseCount, selectPhase }`) — state ownership stays with `StickyStage` (§4.12).
- **Data**: `LUMORA_WORKFLOW_STEPS[phase]` → `order`, `label`, `actor`, `headline`, `narrative`, `detail[]`, `decision`, `handoff`.
- **Renders**: a step row of four buttons (`role="group"` labelled `Lumora workflow steps`; each button carries `aria-pressed` and shows order + label) → an `sr-only` `aria-live="polite"` line (`Step {n} of {count}: {label}`) → the body: `main` column (order / `/` / `actor` row, H3 `headline`, `narrative`, `decision`) and a `detailWrap` `<dl>` of the four `detail` label/value rows → a footer with `Then` + `handoff`, an `{n} / {count}` indicator, and prev/next buttons (`aria-label` `Previous workflow step` / `Next workflow step`, glyphs `aria-hidden`).
- **Motion**: three `usePhaseSwap` refs stagger the cross-fade — main 0ms, detail 90ms, footer 150ms — and animation is skipped entirely under reduced motion.
- **Range behaviour**: prev/next **clamp, they do not wrap**, and the controls use `aria-disabled` rather than `disabled` so keyboard focus is never dropped to `<body>` at the ends of the range (`goTo()` ignores out-of-range offsets).
- **What it deliberately is not**: *"an explanation surface in the SamJuniors visual environment — not a reconstruction of Lumora's product interface. Real product interface evidence belongs in the evidence surface (LumoraEvidence), which uses actual captures of the product."*

### 4.16 `src/components/interactive/LumoraWorkflowWalkthrough.tsx` — *the composition selector*
- **Type**: Client component (`'use client'`). **Props**: none.
- **Behaviour**: reads `useMediaQuery('(max-width: 979px)')` and `usePrefersReducedMotion()`. Below 980px it returns `<LumoraMobileStepper />` (§4.14); otherwise `<StickyStage mode={reduced ? 'explore' : 'scroll'}>{(api) => <LumoraWorkflowBody {...api} />}</StickyStage>`.
- **Sole call site**: `/products/[slug]`, inside a `#workflow` section, gated by `showWorkflowWalkthrough = product.slug === 'lumora'` — a literal slug check, so a second product would silently get no walkthrough. Section framing around it (`How the workflow runs` / `Four steps, and the last one belongs to a person` / lead) is page-level copy, not this component's.
- **No-JS contract (stated in the file)**: server HTML renders the desktop composition with the sticky geometry inactive. The step controls need JS, so steps 02–04's narrative detail is JS-only — but *"every claim those steps make is also stated statically elsewhere on the page (the four step labels in this section, the capability list, and the release-gate principle) and on the homepage's four-step strip."* That is the honesty argument for the JS dependency, and it holds only while those static surfaces exist.

> [!CAUTION]
> **§4.15 and §4.16 were replaced 2026-09-05.** They documented `LumoraWorkbenchBody.tsx` and
> `LumoraDemoExplore.tsx`, **neither of which exists** — both were deleted in `5b58001`. The old §4.15
> described window chrome, a three-column sources/canvas/diagnostics workbench, `role="tablist"` /
> `role="tab"` / `aria-selected` tabs and prev/next controls that wrapped around; the replacement has none of
> those — flat step buttons with `aria-pressed`, a fact ledger instead of panels, and clamped controls. The
> old §4.16 described the `/products/lumora` exhibit as the *second* consumer of a dual-mode homepage scene;
> it is now the **only** consumer of the mechanism at all ([decisions.md](decisions.md) TODO 15). Anything
> still auditing for `role="tab"` on this surface — including [qa-checklist](qa-checklist.md) rows written
> against the workbench — is auditing a component that no longer exists.

### 4.17 `src/components/seo/JsonLd.tsx` — *structured-data emitter*
- **Type**: Server component. **Props**: `{ data: Record<string, unknown> }`.
- **Renders**: one `<script type="application/ld+json">` whose body is `JSON.stringify(data)` via `dangerouslySetInnerHTML` (with a scoped `react/no-danger` disable).
- **Why `dangerouslySetInnerHTML` is acceptable here** (stated in the file): the payload never contains visitor input, and `JSON.stringify` cannot emit a raw `</script>` sequence from the string values passed, so it is the escaping boundary. Server-rendered so the payload is in the initial HTML where crawlers read it. **If that first condition ever changes — any visitor-supplied value reaching a graph — this component needs escaping, not a comment.**
- **Content rule (binding, and an [AGENTS.md §1.1](../../AGENTS.md#1-core-directives--behavioral-guardrails) obligation restated in code)**: every property must be a fact already stated on the page. No ratings, prices, review counts or release dates the product does not have — *"an absent property costs a rich result, an invented one is a fabricated claim."*
- **Call sites**: `/` with `organizationGraph()` and `/products/[slug]` with `productGraph(product)`, both from `src/lib/structured-data.ts`. **`/about`, `/contact` and `/products` emit no structured data** — a coverage gap, not a rule.
- **Specification status**: this component, `src/lib/structured-data.ts` and `src/lib/site.ts` all arrived in `a7816d8` and are specified in **no** approved document — [architecture.md](architecture.md) has no structured-data section. Registered in [decisions.md](decisions.md) TODO 17.

### 4.18 `src/components/layout/CloseNavOnNavigate.tsx` — *compact-nav dismissal*
- **Type**: Client component (`'use client'`). **Props**: none. **Renders**: `null`.
- **Behaviour**: on mount, finds `#compact-nav`, verifies it is an `HTMLDetailsElement`, and sets `open = false` on any click whose target is inside an `<a>`. Removes the listener on cleanup.
- **Why it exists** (stated in the file): the header stays a server component and the disclosure stays native `<details>`, so it works with no script at all. What `<details>` cannot do alone is notice an App Router client navigation — the header is never remounted, so an open panel would stay expanded over the newly requested page. Listening for link activation also catches a link to the *current* route, which a `pathname`-based effect would miss.
- **Added**: `9c3f311` (2026-09-03), recorded for the first time by this pass.

---

## 5. Global Utility Classes (`src/app/globals.css`)

| Class | Purpose |
| :--- | :--- |
| `.container` | Max `--container-max` (1240px) + `--container-padding` gutters — the page shell |
| `.container-narrow` | Max `--container-narrow` (840px) centered column |
| `.container-editorial` | Max `--container-editorial` (760px) reading column |
| `.btn-primary` / `.btn-secondary` / `.text-link` | **The** sanctioned interactive primitives — full contract in §4.8. There is no `Button` component; the class is written by hand on a `Link` or `<a>` |
| `.hairline-divider` | 1px `--color-border-hairline` rule — **zero call sites** (debt D15) |
| `.sr-only` | Screen-reader-only text |
| `.skip-link` | The WCAG 2.4.1 bypass link, rendered as the first focusable element in `layout.tsx`. Styled on `:focus`, **not** `:focus-visible` — the file explains why: the link is off-screen and cannot be pointed at |

Also global: a focus-visible outline (2px `--color-accent-copper`, 3px offset) on `a` / `button` / `[tabindex]`; `#main-content:focus-visible { outline: none }` so skipping to content does not draw a box around the whole page; heading `text-wrap: balance`; body flex-column layout enabling the sticky-footer contract (§4.2). **No font `@import` remains** — debt D10 is closed and fonts load through `next/font/google` in `layout.tsx`; the previous note here still described the `@import`.

---

## 6. Design Token Quick Reference

Full specification: [design-system.md §6](design-system.md#6-design-system-specification). Implementation: `src/styles/tokens.css` (single authority — values are NOT repeated here to prevent drift).

| Token family | Variables |
| :--- | :--- |
| Canvas & surfaces | `--color-bg-base`, `--color-bg-surface`, `--color-bg-surface-elevated`, `--color-bg-surface-subtle`, `--color-bg-overlay`, `--color-bg-glass` |
| Text tones | `--color-text-primary` (17.4:1), `--color-text-secondary` (7.3:1), `--color-text-muted` (5.5:1), `--color-text-dim` (4.5:1) — measured against `--color-bg-base`. **All four now clear WCAG AA for normal-size text**; the earlier "large/non-text only" and "decorative only" restrictions were retired when the failing `#5a6372` / `#404652` values were replaced. Keep any new tone at or above 4.5:1 |
| Borders | `--color-border-hairline`, `--color-border-subtle`, `--color-border-active`, `--color-border-solid` |
| Parent accent (copper) | `--color-accent-copper`, `-hover`, `-muted`, `-border`, `-glow` |
| Product evidence surface (Lumora's own light environment — §4.13) | `--color-evidence-canvas`, `-surface`, `-ink`, `-ink-muted`, `-accent` (`#4f3db0`), `-border`, `-tag-bg` |
| Status | `--color-status-warning`, `-bg`, `-border`; `--color-status-success`, `-bg` |
| Typography | `--font-sans`, `--font-mono` (both resolving `next/font` variables); `--leading-tight/snug/heading/body/relaxed` |
| Space scale | `--space-1` (4px) … `--space-10` (120px) |
| Layout | `--container-max` 1240px, `--container-narrow` 840px, `--container-editorial` 760px, `--container-padding`, `--section-spacing`, `--header-height` 73px, `--wayfinding-strip` (0px desktop → 44px ≤ 1199px) |
| Radii / shadows | `--radius-xs/sm/md/lg/pill`; `--shadow-sm/md/lg` |
| Motion | `--duration-fast` 150ms, `--duration-normal` 250ms, `--duration-scene` 320ms, `--ease-out`, `--ease-in-out` |
| Touch | `--min-touch-target` 44px |

`tokens.css` also carries the global `prefers-reduced-motion` block that collapses every animation and transition to 0.01ms — components do not need to repeat it, only to avoid motion that survives it (§4.10, §4.12).

> [!CAUTION]
> **There is no steel-blue product accent.** This table previously listed a *"Product accent (steel blue)"*
> family — `--color-accent-blue`, `-hover`, `-muted`, `-border`. **None of those four tokens exists in
> `tokens.css`**; they were removed by the product-truth correction in `5b58001` (2026-09-01), because a
> blue product accent misrepresents Lumora's own brand. Copper is the parent accent and
> `--color-evidence-accent` (`#4f3db0`) is the product's. Do not re-add the blue family — the founder
> decision of 2026-09-05 was explicitly to correct the documentation, not the code. Same correction in
> [design-system §6.2](design-system.md#62-semantic-color-system) and §9's first two rows.

**Alias layer.** `tokens.css` defines 14 backwards-compatibility aliases (`--bg-base`, `--text-main`, `--accent-copper`, …). They were meant as a migration convenience, but the aliases now **outnumber the canonical forms in real use** — `--accent-copper` has 36 call sites against `--color-accent-copper`'s 7 (measured 2026-09-05, debt D14). Prefer the semantic `--color-*` names in new code. Note two aliases are not straight renames: `--text-muted` maps to `--color-text-secondary` and `--text-dim` maps to `--color-text-muted`, so an alias is one step lighter than its name suggests. Broken names to eliminate on sight: `--container-narrow-width`, `--color-accent-flagship`, `--color-bg-canvas` (debt D5).

---

## 7. Content Layer API

| Module | Export | Type / shape |
| :--- | :--- | :--- |
| `company.ts` | `companyContent` | `CompanyIdentity` — name, legalEntity, tagline, purpose, reputationPillars[3], buildingFilters[4] (id/title/description), buildingCycle[6] (stage/title/description), `founder: FounderPresence` (**all five fields `null`** — the founder gate in §4.5 depends on this), contactEmail |
| `products.ts` | `products` | `Product[]` — **one entry today (`lumora`)**. Per product: slug, name, category, tagline, shortDescription, problem, audience {primary, secondary[]}, status `'live'\|'beta'\|'research'\|'archived'`, statusLabel, principle, isFlagship, workflow[4], capabilities[7] (all `isPlaceholder: false`), roadmap[4] (all `horizon: 'planned'`), evidence[3] (all `isDemoData: true`, `isPlaceholder: false`, **none carrying an `image`**) |
| `products.ts` | `getProductBySlug(slug)` | `Product \| undefined` (case-insensitive match) |
| `products.ts` | `getFlagshipProduct()` | `Product` (first `isFlagship`, falls back to first) |
| `proof.ts` | `proofItems` | `VerifiedProofItem[]` — **one item** (`proof-builder`, category `builder`, no placeholder flag). The two placeholder-flagged items were deleted under debt D3; the gaps stay in [copy.md §10](copy.md#10-placeholder--missing-copy-registry-pending-founder-copy). **Still consumed by no view (debt D8).** |
| `navigation.ts` | `siteNavigation` | `NavigationStructure` — primaryLinks[3] (`Products` / `Company` / `Contact`), footerGroups[2] (`Company`, `Products`; product links derived via `products.map`, never hand-listed), primaryCta (`Get in touch` → `/contact`) |
| `lumora-workflow.ts` | `LUMORA_WORKFLOW_STEPS` | `Record<LumoraWorkflowStepId, LumoraWorkflowStep>` — the real four-step product workflow. Per step: id, `order` (**a string**, `'01'`–`'04'`), label, actor, headline, narrative, `detail[]` ({label, value} fact rows), decision, handoff |
| `lumora-workflow.ts` | `LUMORA_WORKFLOW_STEP_ORDER` | `LumoraWorkflowStepId[]` — `['intake', 'evaluation', 'triage', 'release']` |
| `lumora-workflow.ts` | `LUMORA_PRINCIPLE` | `string` — *"AI recommends. Humans decide. Every grade released to a student requires educator action."* Imported by `products.ts` as `lumora.principle`, so the principle has exactly one definition |
| `types.ts` | interfaces | `FounderPresence`, `ImageAsset`, `CompanyIdentity`, `ProductWorkflowStep`, `ProductCapability`, `ProductRoadmapItem`, `ProductEvidenceItem`, `Product`, `NavigationItem`, `NavigationGroup`, `NavigationStructure`, `VerifiedProofItem`. `LumoraWorkflowStep` / `LumoraWorkflowStepId` are declared in `lumora-workflow.ts`, not here — product-specific workflow types stay with the product content |

**Rules**: UI reads via these exports only; copy edits flow founder → [copy.md](copy.md) → these modules (string parity enforced by [qa-checklist §2.8](qa-checklist.md#28-content--copy-correctness)); `reputationPillars` renders in exactly one place — the `/products` closing company-standard band added 2026-09-03 (`products/page.tsx:121`); placement elsewhere is still open as [decisions.md](decisions.md) TODO 12; `evidence` renders through §4.13 on both `/` and `/products/[slug]`.

> [!WARNING]
> **The four workflow steps exist twice, in two different shapes.** `products.ts` carries a condensed
> `ProductWorkflowStep[]` (id / order / label / summary) and `lumora-workflow.ts` carries the full
> `LumoraWorkflowStep` record (nine fields including the `detail` fact ledger). `id`, `order` and `label` are
> duplicated **verbatim** across both, and nothing enforces that they stay that way: `routes.test.tsx`
> hardcodes the four labels and asserts they render on the homepage, but the homepage reads `products.ts`,
> so a drifted label in `lumora-workflow.ts` would change the desktop walkthrough with no test failing.
> This is deliberate in origin — the homepage scene needs a summary, the walkthrough needs the ledger — but
> the duplication is unguarded. Registered as debt **D17** in [decisions.md](decisions.md).

> [!NOTE]
> `lumora-workflow.ts`'s file header carries binding content rules, and they are the product-truth
> correction written down: this file must not reintroduce productivity-suite claims, on-device privacy
> claims, general-availability status, or internal economics. Read it before editing any Lumora string.

---

## 8. Route Composition Map

| Route | Composes | Pattern state |
| :--- | :--- | :--- |
| `/` (Home) | `JsonLd(organizationGraph())` → `SceneProgress` → `HeroSection` (01) → `ThesisSection` (02) → `LumoraFlagship` (03, which nests `LumoraEvidence`) → `FounderPresence` (04) → `HorizonSection` (05). The scene ids `overture` / `thesis` / `lumora` / `founder` / `horizon` and their `01`–`05` indices are declared **once**, in `page.tsx`'s `SCENES` const, and passed to `SceneProgress` | ✅ Compliant — and the only route with **no page-level stylesheet**: every scene owns its own module |
| All routes | `.skip-link` (first focusable element, WCAG 2.4.1) + `Header` + `main#main-content[tabIndex=-1]` + `Footer` via root `layout.tsx`; `CloseNavOnNavigate` enters through `Header`, not the layout. Fonts via `next/font/google` (Inter, JetBrains Mono → the `--font-sans` / `--font-mono` tokens), `metadataBase` from `lib/site.ts`, `themeColor` pinned to `--color-bg-base` | ✅ Compliant |
| `/products` | `products.module.css`. H1 band → flagship panel (`Reveal as="article"`) → non-flagship card grid (`<article>`, **empty today — one product**) → closing `.standard` company band (`#portfolio-standard-heading`) rendering `companyContent.reputationPillars` | ✅ Compliant |
| `/products/[slug]` | `product-detail.module.css` + `generateStaticParams` + `generateMetadata` + `notFound()`. `JsonLd(productGraph(product))` → breadcrumb/status band → `#framing-heading` (sr-only H2) → **`#workflow`** section wrapping `LumoraWorkflowWalkthrough` → `#implemented-heading` capabilities → `LumoraEvidence` (placeholder-filtered) → `#roadmap-heading` → `#cta-heading` | ⚠ Compliant, but the `#workflow` section is gated on `product.slug === 'lumora'` — see §4.16 |
| `/about` | `about.module.css`, fed by `companyContent` + `getFlagshipProduct()`. H1 band → building-filters section (`Reveal`) → building-cycle section (`Reveal`) → closing section | ✅ Compliant |
| `/contact` | `contact.module.css`. H1 band → `#contact-card-heading` gateway section, `Reveal as="div"` card, `companyContent.contactEmail` | ✅ Compliant |
| 404 (`not-found.tsx`) | `.container` + **`status-page.module.css`** (shared with the error page). Two links written with the global classes by hand: `className="btn-primary"` → `/` and `className="text-link"` → `/products` | ✅ Compliant with §4.8 as it now stands — **no `Button` primitive exists**; this row previously claimed one |

**The scene components, not the homepage, are the reference implementation.** Home holds no stylesheet of its own; each of its five scenes carries a colocated module. The four content routes and the 404 were converted to the pattern on 2026-08-31 (colocated `module.css`, tokens only, content-layer copy, [copy.md](copy.md) string parity). New pages follow that structure.

> [!NOTE]
> **Structured data covers two routes of five.** `/` and `/products/[slug]` emit JSON-LD; `/products`,
> `/about` and `/contact` emit none. See §4.17 — the emitter and `src/lib/structured-data.ts` are specified
> in no approved document.

---

## 9. Drift Register (violations + resolution state)

Mirrors [qa-checklist.md §5](qa-checklist.md#5-known-debt-register-history--current-state) (single source for QA state; this register exists so builders encounter the violations at design time). Originally tracked as [decisions.md](decisions.md) TODO 4. Rows D1–D11 were closed in the 2026-08-31 and 2026-09-01 passes; **D12–D17 were opened by the 2026-09-05 documentation reconciliation** and are code findings that pass registered rather than fixed — no `src/` change was authorised by it.

| Violation (state before 2026-08-31) | Where | Contract rule broken | State |
| :--- | :--- | :--- | :--- |
| Inline `style={{...}}` everywhere | about / products / products[slug] / contact / not-found pages | §2.1 CSS Modules + tokens | **RESOLVED** — co-located module.css on all five pages |
| Undefined CSS vars (`--container-narrow-width`, `--color-accent-flagship`, `--color-bg-canvas`) | same pages | §2.2 tokens only (real names exist) | **RESOLVED 2026-08-31** — mapped to `--container-narrow` / `--color-accent-blue` / `--color-bg-base`. ⚠ `--color-accent-blue` was itself deleted by the product-truth correction (`5b58001`); the live accent token is `--color-accent-copper`. What is recorded here is the historical fix, not a current token name — see [design-system §6.2](design-system.md#62-semantic-color-system) |
| Hardcoded stale color `rgba(112, 184, 255, 0.1)` | products pages | §2.2 tokens only (`--color-accent-blue-muted`) | **RESOLVED 2026-08-31** — token applied; that token is now `--color-accent-copper-muted`, same supersession as the row above |
| `[STRUCTURAL CAPABILITY CONTAINER]` label in render path | products/[slug] | Content rule — internal label must never render | **RESOLVED** — label removed; placeholder capabilities gated out |
| `(Server Action backend integration boundary prepared).` in visitor copy | contact page | Copy rule — no process language ([copy.md §9](copy.md#9-known-leaks--strings-that-must-not-ship)) | **RESOLVED** — sentence removed (no invented replacement; richer copy PENDING FOUNDER COPY) |
| `Button` / `SectionHeader` primitives bypassed | debt pages | §1 closed-set rule | **OBSOLETE 2026-09-05** — both primitives were deleted with `src/components/ui/` in `5b58001`. The global classes in `globals.css` are now the sanctioned path (§4.8), and section headers are composed per scene by design (§4.9). This row previously read *"RESOLVED (Button) — `not-found.tsx` uses it"*; that adoption was reverted by the same commit and the register was never corrected. Debt **D9 closed as obsolete**, not completed |
| `proofItems` + `verifiableEvidence` defined but unrendered | proof.ts / products.ts | Content↔UI contract (dead content) | **PARTIAL** — the evidence half renders on the product detail page (D7); `proofItems` remains data-only (D8, founder-dependent). ⚠ The field is no longer called `verifiableEvidence`: `5b58001` renamed the optional `verifiableEvidence?` to the **required** `evidence`, rendered by `LumoraEvidence` (§4.13). The name in this row is historical |
| Lumora demo narrative (4 phases × ~20 strings) hardcoded inside the client component | `LumoraStage.tsx` *(deleted)* | §2.3 content-layer rule (found by the 2026-08-31 experience audit; formerly documented as "deliberate") | **RESOLVED 2026-08-31 (spec pass)** — extracted verbatim to `src/content/lumora-demo.ts` per [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md); rendering byte-identical (tsc/lint/tests/build + browser parity verified). The **discipline still holds** at a different address: `5b58001` replaced the component with §4.7/§4.15 and the module with `src/content/lumora-workflow.ts`, and the strings stayed in the content layer. Both names in this row are historical |
| ~~Lumora workbench mobile: side panels `display: none` ≤ 980px (content loss); tab/step controls below 44px touch target~~ | `LumoraStage.module.css` *(deleted — now `LumoraWorkflowBody.module.css` + `LumoraMobileStepper.module.css`)* | §2.5 a11y contract (44px) + Mobile Is First-Class parity ([product-spec §6.6](product-spec.md#66-core-ux-principles)) | **RESOLVED 2026-09-01 (D11)** by the ADR-001 vertical slice: mobile renders the `LumoraMobileStepper` composition (no `display: none`), the no-JS fallback stacks all content, and all controls meet ≥ 44px ([design-system §6.8.7](design-system.md#687-mobile-scene-recomposition-mobile-is-first-class-410)). ⚠ **Parity has since narrowed**: the stepper deliberately drops the `detail` fact ledger, so 16 fact rows are desktop-only — debt **D16**, §4.14 |
| `.btn-primary:hover` hardcodes `#ffffff` instead of a token | `globals.css` | §2.2 tokens only | **OPEN (D12)** — one of several colour literals in CSS Modules; registered 2026-09-05 in [decisions.md](decisions.md) TODO 17 |
| Seven tokens defined in `tokens.css` with zero consumers | `src/styles/tokens.css` | Token hygiene | **OPEN (D13)** — dead tokens, not a rendering fault; registered 2026-09-05 |
| Alias forms dominate canonical forms (`--accent-copper` 36 uses vs `--color-accent-copper` 7) | all module stylesheets | §6.11 token consumption rule | **OPEN (D14)** — the alias layer was meant as a convenience, not the primary API; registered 2026-09-05 |
| `.btn-secondary` and `.hairline-divider` have zero call sites | `globals.css` | Closed-set rule cuts both ways — an unused sanctioned class is undocumented dead surface | **OPEN (D15)** — measured 2026-09-05, §4.8 |
| The four Lumora workflow steps exist twice, in two shapes, with `id` / `order` / `label` duplicated verbatim and no parity test | `products.ts` + `lumora-workflow.ts` | §2.3 content-layer rule (single definition per fact) | **OPEN (D17)** — §7's warning; `routes.test.tsx` pins only the `products.ts` side |

> [!IMPORTANT]
> **Closing a row requires verifying the artifact still exists, not just that a commit claimed it.**
> The `Button` row above sat at RESOLVED for five days after the file it named had been deleted, because the
> resolution was recorded from an adoption and never re-checked against the tree. Before marking any row
> RESOLVED: confirm the file, class or token named in it exists at the path given, and re-check it whenever a
> commit deletes or renames a component. A row naming a deleted artifact is worse than an open row — it
> reports a contract as satisfied by something that cannot satisfy anything.

---

## 10. Extension Protocol

To add a new component (only after confirming the pattern doesn't exist here):

1. **Justify reuse failure**: name the existing components considered and why none fit.
2. **Create** `src/components/<category>/<Name>.tsx` + colocated `<Name>.module.css`; category per §3 map (`layout` / `narrative` / `interactive` / `product` / `seo`). A component with no stylesheet is legitimate only when it renders nothing visual (`CloseNavOnNavigate`, `JsonLd`) — say so in its §4 entry.
3. **Obey the pattern contract (§2)**: tokens only, module classes only, content from `src/content/` (or `copy.md`-approved literals for narrative framing), `'use client'` only if interactive.
4. **Copy**: any new visitor-facing strings must exist in [copy.md](copy.md) first (status `PROPOSED` minimum).
5. **Register**: add the component to §4 (or §8 for pages) of this file in the same PR — an unregistered component is a contract violation. The 2026-09-05 reconciliation found two shipped components (§4.17 `JsonLd`, §4.18 `CloseNavOnNavigate`) that had never been registered, plus five §4 entries still describing deleted files. Registration is the step that gets skipped; treat it as part of the change, not paperwork after it.
6. **Verify**: pass [qa-checklist.md](qa-checklist.md) global gates for the touched surfaces; add a route-render test if the component changes navigation or routes.
7. **If the change deletes or renames anything**, sweep this file, §9's register and [qa-checklist.md §5](qa-checklist.md#5-known-debt-register-history--current-state) for the old name in the same PR. Every finding in the 2026-09-05 pass traces to a delete or rename that shipped without this sweep.

---

## 11. Executable Guards (the contract's enforced half)

Four Vitest suites, **33 tests total**, pin the rules the rest of this file states in prose. They are the
reason a stale document is a documentation problem rather than a shipping one.

| Suite | Tests | What it pins |
| :--- | :--- | :--- |
| `src/app/product-truth.test.tsx` | 6 | A 24-term `FORBIDDEN_CLAIMS` list — `academic operating system`, `local sovereignty`, `air-gapped`, `zero telemetry`, `local-first`, `degree planning`, `syllabus`, `decision support` and the rest. Checked twice: against the **rendered output** of all five routes, and against the **raw text of every source file under `src/`**. The source-text half is what makes the guard hard to defeat — a claim cannot be reintroduced in a comment, a variable name, or a content module either |
| `src/app/company-hierarchy.test.tsx` | 15 | Company-before-product ordering on all five routes (breadcrumb trail on the detail page), CTA hierarchy (homepage's first primary action is company-scoped; `/about` leads to the portfolio, not into the product; `/products` closes on a company path), that `/products` states the company standard **independently of product data**, that the footer separates `Company` from `Products` structurally, and a six-term `INTERNAL_VOCABULARY` block (`parent company`, `decision id`, `company-001`, …) — [AGENTS.md §1.3](../../AGENTS.md#1-core-directives--behavioral-guardrails) made executable |
| `src/app/routes.test.tsx` | 7 | Every route renders; the flagship CTA leaves the homepage (`/products/lumora`, not an in-page scroll); the four workflow-step labels appear as headings; **no fabricated founder identity renders while `companyContent.founder` is null** (no blockquote, no image); `/contact`'s `mailto` works; the Lumora page answers its required questions |
| `src/content/content.test.ts` | 5 | Company identity and purpose are present; the registry supports multiple products with Lumora flagged flagship; `getProductBySlug` handles an unknown slug; navigation structure is complete; products are enumerated **under the `Products` footer group, never as company peers** |

**Standing rule**: a rename or deletion that a guard references breaks the guard, not just this document.
`product-truth.test.tsx`'s forbidden list is deliberately not extensible — the file says so: *"Do not add an
exception to this list. If a term here is genuinely needed, the product truth has changed and the Lumora
repository is the thing to re-verify first."*

> [!NOTE]
> `beforeAll` in all three route-rendering suites installs no-op `IntersectionObserver` / `ResizeObserver`
> stubs, because jsdom has neither and §4.10/§4.12 depend on both. A new observer-driven component needs its
> stub added in each or the suite fails on the environment, not on the contract.
