# SamJuniors Website — QA & Acceptance Checklist

> **The concrete, verifiable definition of "done"** for every page, component, and release. This document turns the QA phase ([delivery.md §4](delivery.md#4-qa--testing-gated-on-frontend-development-completion)) into executable acceptance criteria: exact checks, exact thresholds, exact commands. A page is finished only when every applicable gate here passes — "it renders" is never sufficient.
>
> **Authority**: Thresholds align with the budgets already committed in [architecture.md §6](architecture.md#6-performance-accessibility--engineering-quality-human-001) (LCP < 1.2s, CLS 0.00, INP < 50ms) and the accessibility standards in [design-system.md §6.10](design-system.md#610-accessibility-standards). Governance in [AGENTS.md](../../AGENTS.md). Copy truth in [copy.md](copy.md). Component contracts in [component-inventory.md](component-inventory.md).
>
> **How to use**: For any page or component task, run §2 (global gates) plus the page's row in §3. Record outcomes in the sign-off block (§6). Failures found in shipped code go to the known-debt register (§5) if not fixed immediately — never silently ignored.

---

## 1. Tooling Baseline

| Tool | Command | Purpose |
| :--- | :--- | :--- |
| TypeScript | `bun run typecheck` (or `npm run typecheck`) | `tsc --noEmit` — zero errors |
| ESLint | `bun run lint` | `next lint` — zero errors, zero warnings |
| Vitest | `bun run test` | Unit + route-render suites (`src/content/content.test.ts`, `src/app/routes.test.tsx`) — all pass |
| Playwright | `bun run test:e2e` | Cross-viewport journey tests (`e2e/`) |
| Grep probes | §2.2 commands | Placeholder / leak / token-integrity scans |
| Lighthouse | `npx lighthouse <url> --preset=desktop` + `--preset=mobile` (or CI run) | Performance / a11y / best-practices / SEO floors |
| axe-core | axe DevTools browser extension or `@axe-core/playwright` | WCAG 2.1 AA automated audit |

> Every gate below states its pass condition. If a tool is unavailable in the environment, the equivalent manual check must be documented in the sign-off record — "not run" is a fail, not a pass.

---

## 2. Global Gates (apply to EVERY page and component)

### 2.1 Build & Code Health
- [ ] `tsc --noEmit` exits 0.
- [ ] `next lint` exits 0 with zero warnings.
- [ ] `vitest run` — all tests pass; no skipped tests without a tracked reason.
- [ ] `next build` succeeds (run before launch and before any release commit).
- [ ] No dead code, no unreferenced files/assets (`AGENTS.md` §8 preliminary rules).

### 2.2 No Placeholder or Internal Strings in Production UI

**The grep suite** (run from repo root; any hit in visitor-renderable code = FAIL):

```bash
# 1. Known placeholder/leak strings
rg -n "STRUCTURAL CAPABILITY CONTAINER|Server Action backend integration boundary|PENDING VERIFIED DATA|lorem|Lorem" src/

# 2. Decision IDs and internal codes (must exist ONLY in docs/, never src/)
rg -n "COMPANY-0|WD-0|IA-0|CONTENT-0|UX-0[0-9]|USER-FLOW-0|HUMAN-001" src/

# 3. Process/phase language leaking into UI copy
rg -n "placeholder|Placeholder|phase gate|Phase [0-9]|TODO|FIXME" src/ --glob '!*.test.*'
```

- [ ] Probe 1 returns zero hits in `src/` (former violations D1–D3 were fixed in the 2026-08-31 second pass; see §5).
- [ ] Probe 2 returns zero hits in `src/` (decision IDs live only in `docs/website/decisions.md`).
- [ ] Probe 3: every hit is either a code comment or the typed content-layer flag `isPlaceholder` — never rendered text.
- [ ] **Render gate for `isPlaceholder`**: no content item with `isPlaceholder: true` may ship to production output. Former flagged items (`proof-product`, `proof-evidence`) were removed from `src/content/proof.ts` in the 2026-08-31 second pass (founder copy still pending — see [copy.md §10](copy.md#10-placeholder--missing-copy-registry-pending-founder-copy)); the page render path additionally filters `isPlaceholder` items. Test: for each flagged item, assert it does not appear in rendered HTML.

### 2.3 Token & Pattern Integrity (design-system compliance)

- [ ] **No inline `style={{...}}` props** in `src/app/**/page.tsx` or `src/components/**` — all styling via CSS Modules consuming tokens (pattern contract: [component-inventory.md §2](component-inventory.md)). Former violations D4–D6 were fixed in the 2026-08-31 second pass (all five pages now use co-located CSS Modules).
  Probe: `rg -n "style=\{\{" src/app src/components`
- [ ] **Every CSS custom property referenced in code is defined** in `src/styles/tokens.css` or `src/app/globals.css`. Known-broken names that must be eliminated: `--container-narrow-width` (correct: `--container-narrow`), `--color-accent-flagship` (correct: `--color-accent-blue`), `--color-bg-canvas` (correct: `--color-bg-base`). Probe: `rg -o "var\(--[a-z-]+\)" src/ | sort -u` then check each name.
- [ ] **No hardcoded color literals in TSX** (e.g. `rgba(112, 184, 255, 0.1)` — the stale pre-Phase-7 blue, eliminated from the products pages in the 2026-08-31 second pass in favor of `--color-accent-blue-muted`; the remaining `themeColor: '#0c0d10'` in `layout.tsx` is a metadata value, not a styled element). Probe: `rg -n "#[0-9a-fA-F]{3,8}|rgba?\(" src/app src/components --glob '*.tsx'`
- [ ] Any new token values come from the certified Phase 7 set ([design-system.md §6.2](design-system.md#62-semantic-color-system)) — the superseded direction palette (`#08090c`, `#d4a373`, `#70b8ff`, `#f0f3f6`) must not be reintroduced.

### 2.4 Links & Navigation
- [ ] Zero broken internal links: every `href` resolves to an existing route (`/`, `/about`, `/contact`, `/products`, `/products/lumora`) or in-page anchor (`#lumora`, `#thesis` — anchors must have a matching element id).
- [ ] Header nav, header CTA, footer links, and every in-page action link are functional (click-through test on each route).
- [ ] Breadcrumbs on product detail render and link correctly (`SamJuniors / Products / {Product}`).
- [ ] Unknown product slug (`/products/nonexistent`) returns the 404 page — not a crash, not an empty render.
- [ ] No dead ends: every page ends in at least one onward pathway (No Dead Ends gate, [architecture.md §9](architecture.md#9-architecture-quality-gates)).

### 2.5 Accessibility (WCAG 2.1 AA minimum)
- [ ] axe-core automated audit: zero critical/serious violations per page.
- [ ] **Contrast** — token pairings meet AA (computed values below; re-verify with tooling at audit time):

| Foreground | Background | Computed ratio | AA verdict (body / large) |
| :--- | :--- | :--- | :--- |
| `#f4f6fa` text-primary | `#0b0c0f` base | ≈ 18.1:1 | ✅ / ✅ |
| `#959fae` text-secondary | `#0b0c0f` base | ≈ 7.3:1 | ✅ / ✅ |
| `#959fae` text-secondary | `#12141a` surface | ≈ 6.8:1 | ✅ / ✅ |
| `#c89666` accent-copper | `#0b0c0f` base | ≈ 7.5:1 | ✅ / ✅ |
| `#628cb3` accent-blue | `#0b0c0f` base | ≈ 5.5:1 | ✅ / ✅ |
| `#5a6372` text-muted | `#0b0c0f` base | ≈ 3.2:1 | ❌ body / ✅ large-text & non-text |
| `#5a6372` text-muted | `#12141a` surface | ≈ 3.0:1 | ❌ body / ⚠️ borderline — verify with tool |
| `#404652` text-dim | `#0b0c0f` base | ≈ 2.1:1 | decorative only — never used for meaningful text |

  **Usage rule**: `--color-text-muted` may only carry large text (≥ 24px, or ≥ 18.66px bold) or non-text UI markers (dividers, chips, timestamps); `--color-text-dim` is decorative only. Any new pairing must be ratio-checked before use.
- [ ] Keyboard: every interactive element reachable and operable by Tab/Enter/Space; tab order follows visual/reading order.
- [ ] Focus visible: the global `:focus-visible` style (2px copper outline, 3px offset) is present on all links, buttons, tabs.
- [ ] Semantic structure: exactly one `h1` per page; heading levels sequential; landmarks present (`header`, `nav[aria-label]`, `main#main-content`, `footer`, `section[aria-labelledby]`).
- [ ] ARIA correctness: workbench tabs use `role="tablist"`/`role="tab"`/`aria-selected`; prev/next controls have `aria-label`s; decorative elements are `aria-hidden`.
- [ ] `prefers-reduced-motion: reduce` collapses all animation to static layout (verify motion-related media query from `tokens.css` still applies and no JS animation bypasses it).
- [ ] Touch targets ≥ 44×44px for every interactive element ([design-system.md §4.10](design-system.md)).
- [ ] Images/icons have alt/aria treatment; purely decorative marked `aria-hidden`.

### 2.6 Responsive Integrity
- [ ] Breakpoints verified at **390px** (mobile), **768px**, **1024px**, **1440px** (desktop).
- [ ] Zero horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`) at every breakpoint.
- [x] Workbench ≤ 980px: JS viewports render the mobile vertical stepper (full parity, D11 resolved 2026-09-01); the no-JS/SSR fallback stacks panels with **no `display:none`**; hero tenets stack at ≤ 880px; horizon columns stack at ≤ 860px; header collapses at ≤ 768px; footer/letter stack at ≤ 640px.
- [ ] **Mobile content parity (ADR-001)**: no scene may lose content-bearing elements at mobile breakpoints — `display: none` may remove only decorative/ambient elements, never sources, diagnostics, or narrative copy (probe: `rg -n "display:\s*none" src/components --glob '*.css'` — every hit must be justified as decorative in review).
- [x] **Touch targets (enforced)**: every interactive element measures ≥ 44×44px (`--min-touch-target`) at mobile widths — measured on tabs, controls, links, buttons (workbench violation cleared with D11, 2026-09-01: all tabs/controls at 44px).
- [ ] No horizontal scroll traps; no content clipped or overlapping at 320px (extreme small viewport — graceful reflow).

### 2.7 Performance Floors
- [ ] **LCP < 1.2s** (target per [architecture.md §6](architecture.md#6-performance-accessibility--engineering-quality-human-001)); hard fail above 2.5s.
- [ ] **CLS = 0.00** target (hard fail above 0.1) — explicit dimensions for media, no late-loading layout-shifting elements.
- [ ] **INP < 50ms** target (hard fail above 200ms).
- [ ] **Lighthouse floors** (default gates, adjust only via a logged decision): Performance **≥ 90**, Accessibility **≥ 95**, Best Practices **≥ 90**, SEO **≥ 90** — on both desktop and mobile presets.
- [x] Fonts: self-hosted via `next/font/google` in `layout.tsx` (variables `--font-inter` / `--font-jetbrains-mono` consumed by the `--font-sans` / `--font-mono` tokens) — the render-blocking `@import` was removed in the 2026-08-31 second pass (debt D10). The two font variables are defined by next/font's generated CSS at build time (not in `tokens.css`) — expected, not a violation.
- [ ] Motion budget: micro-interactions 150–250ms; spatial transitions ≤ 350ms ([design-system.md §4.8](design-system.md) pacing budget).

### 2.8 Content & Copy Correctness
- [ ] **Copy parity**: every visitor-visible string in rendered output exists in [copy.md](copy.md) (string-for-string, ignoring dynamic interpolation). Any mismatch = either code drifted from copy.md (fix code) or copy.md is missing a string (flag for founder sign-off — do not silently accept).
- [ ] No fabricated claims: no testimonials, user counts, metrics, partners, or awards anywhere in output (Zero Fabrication — [product-spec.md §4.5](product-spec.md#45-contextual-proof-system)).
- [ ] Navigation labels match `siteNavigation` exactly (`Products` / `About` / `Contact` / `Explore Ecosystem`).
- [ ] Metadata per route matches [copy.md §1.3](copy.md#13-document-metadata-titles--descriptions) (titles, template, descriptions).
- [ ] Lifecycle status tags render honestly (`beta` shows as BETA) — Honest Roadmap rule.

### 2.9 HUMAN-001 Spot Checks (human audit, not tooling)
- [ ] **Distinctiveness Test**: could this page belong uniquely to SamJuniors, or does it read as a generic AI-startup template? (no purple/cyan gradients, no glowing orbs, no monotonous card walls — [design-system.md §4.6](design-system.md#46-human-authored-design-human-001)).
- [ ] **Truth Test**: does any element make a claim not backed by founder documentation?
- [ ] **Comprehension Test**: first-time visitor understands what SamJuniors is within 30 seconds (30-Second Rule).
- [ ] **Multi-Product Test**: layout still works if a second product replaces/flags alongside Lumora.

### 2.10 Motion & Interaction Safety (ADR-001 implementation gates)

*Added 2026-08-31 for the 5-scene cinematic experience ([ADR-001](adr/ADR-001-homepage-experience-reconciliation.md); spec: [design-system.md §6.8](design-system.md#68-motion--micro-interactions)). Every gate is BLOCKING for any change that introduces motion, reveals, sticky staging, or scroll-linked state — until then they apply as standing contracts to the current static build (2.10.1 no-JS baseline, 2.10.4 pre-existing).*

*First full run: 2026-09-01 vertical-slice implementation pass (scenes 01–03 + mobile stepper) — all gates executed and passing; D11 resolved. Run record: [decisions.md → QA Run Records](decisions.md#qa-run-records). Residual, reported: desktop CLS 0.0018 from text-node micro-shifts inside phase-content swaps (content state changes, not animations — 55× below the good threshold; zero on mobile; reveal boxes verified stable).*

- [ ] **2.10.1 No-JS safety**: with JavaScript disabled, every page renders 100% of its content, navigation, and copy in server HTML — `curl -s <url> | rg "<string>"` for key content strings; the Lumora exhibit renders its first phase with controls in the DOM. Motion is additive enhancement only, never a content gate.
- [ ] **2.10.2 Reduced-motion fallback**: emulate `prefers-reduced-motion: reduce` — load choreography skipped, reveals render instantly at final state, the sticky stage collapses to normal flow (tap-only phase switching), zero running animations (`document.getAnimations().length === 0` after settle). Output must be functionally identical to the static baseline.
- [ ] **2.10.3 CLS / reveal safety**: first-entry reveals use `transform`/`opacity` only — element bounding boxes are identical before/after reveal (assert via `getBoundingClientRect()` pre- and post-reveal); no layout-shifting animations anywhere; CLS stays at the §2.7 floor (0.00 target).
- [ ] **2.10.4 Touch targets ≥ 44px** (standing): all interactive elements ≥ 44×44px at mobile widths (extends §2.5/§2.6; known violation D11).
- [ ] **2.10.5 Sticky-scene continuity**: while scrolling through the Lumora scene — phase indicator changes monotonically 1→4 (scroll) with no flicker/back-jumps; tap controls remain enabled at all times and set the phase directly; viewport scroll never locks, snaps, or accelerates (`window.scrollY` responds to native wheel/touch input during the scene — test by scrolling backward through the scene); after a tap override, state and viewport agree (the matching sentinel is in view).
- [ ] **2.10.6 Mobile content parity** (standing, extends §2.6): no content-bearing element hidden at mobile breakpoints; the Lumora mobile composition renders sources + diagnostics content inline (vertical stepper per [design-system §6.8.7](design-system.md#68-motion--micro-interactions)).
- [ ] **2.10.7 Motion budgets**: every animation completes within its class budget (micro 100–200ms, scene transitions 250–350ms, load choreography ≤ 500ms total); all motion on `transform`/`opacity` only — probe: `rg -n "transition:|animation:" src/ --glob '*.css'` and confirm property lists.
- [ ] **2.10.8 Honest framing of the exhibit**: the Lumora scene keeps its conceptual-demonstration signals (`STATUS: BETA`, registered evidence copy, no simulated liveness at rest — no ticking timers/counters unless user-initiated). No mode may imply unimplemented product functionality is live (ADR-001 H4 boundary).

---

## 3. Per-Page Acceptance Matrix

| Route | Functional checks (all must pass) |
| :--- | :--- |
| **`/` Home** | All 5 sections render in order (Hero → Thesis → Lumora Stage → Founder Letter → Horizon); hero CTA scrolls to `#lumora` anchor; philosophy link scrolls to `#thesis`; workbench tabs switch all 4 steps via click AND prev/next cycle buttons; step indicator shows `n / 4` and wraps; `Experience {flagship}` resolves the flagship name from content; no console errors. *(ADR-001 cinematic pass will add: load choreography once-only, reveals, sticky phase progression with tap override, SceneProgress wayfinding, §2.10 gates — not yet applicable.)* |
| **`/products`** | Portfolio header renders; product cards show status chip, FLAGSHIP chip (flagship only), name, description, `Explore {Name} →` link; link navigates to `/products/lumora`. |
| **`/products/lumora`** | Breadcrumbs render + link; badges `FLAGSHIP PLATFORM` + `STATUS: BETA`; H1 + tagline; all 3 capability cards render with full descriptions; the `verifiableEvidence` card (`Academic Intelligence Demonstration`) renders below the capability grid (D7); placeholder strings and labels are gated out of output (D1); footer cross-links work. |
| **`/products/{unknown}`** | 404 route renders with `Product Not Found` metadata + not-found page; HTTP status is 404. |
| **`/about`** | Header renders; 4 filter cards with numbered `01–04`; 6 cycle cards `STAGE 01–06`; purpose lead matches `companyContent.purpose` exactly. |
| **`/contact`** | Gateway card renders; email `contact@samjuniors.com` present; NO `(Server Action backend integration boundary prepared)` in output — removed in the 2026-08-31 second pass (debt D2); card body is the single registered sentence. |
| **404 page** | Renders for unknown routes; `Return to Home` works. |
| **Global chrome** | Header on every route; footer sticky to viewport bottom on short pages, pushed down naturally on long pages (no overlap, no floating gap); dynamic year in copyright. |

---

## 4. Release Gate (before every merge to `main` affecting `src/` or copy)

1. §2.1, §2.2, §2.3 all green.
2. Full route matrix (§3) manually or via Playwright.
3. Copy parity (§2.8) re-run.
4. Lighthouse re-run on affected routes.
5. Sign-off recorded (§6) and, for substantive changes, an entry appended to [decisions.md](decisions.md).

---

## 5. Known-Debt Register (history + current state)

These were real, reproducible violations of this checklist found in `main` before the **2026-08-31 second-pass fix** (recorded as [decisions.md](decisions.md) TODO 4, now resolved). They are kept here — resolved state and all — so the history stays honest and re-introductions are detectable.

| ID | Gate violated | Finding (state before the 2026-08-31 pass) | Location | Fix direction | Status |
| : | : | : | : | : | : |
| D1 | §2.2 | `[STRUCTURAL CAPABILITY CONTAINER]` placeholder string in render path (shows when any capability is `isPlaceholder`) | `src/app/products/[slug]/page.tsx` | Remove label + gate placeholder content out of production output | **FIXED 2026-08-31** — label removed; `isPlaceholder` items filtered from render |
| D2 | §2.2 | Internal process note `(Server Action backend integration boundary prepared).` ships to visitors | `src/app/contact/page.tsx` | Replace with founder-approved visitor copy ([copy.md §8](copy.md#8-contact-page-contact)) | **FIXED 2026-08-31** — internal sentence removed; card body is the registered sentence; routing copy still PENDING FOUNDER COPY |
| D3 | §2.2 | Two content items flagged `isPlaceholder: true` (not rendered, but non-compliant in data layer) | `src/content/proof.ts` | Founder supplies verified proof copy or items are removed | **FIXED 2026-08-31** — both items removed (founder copy still pending, tracked in [copy.md §10](copy.md#10-placeholder--missing-copy-registry-pending-founder-copy)) |
| D4 | §2.3 | Inline `style={{...}}` objects throughout page components instead of CSS Modules + tokens | `about/page.tsx`, `products/page.tsx`, `products/[slug]/page.tsx`, `contact/page.tsx`, `not-found.tsx` | Convert to module.css classes consuming tokens (pattern contract) | **FIXED 2026-08-31** — all five pages converted to co-located module.css (1:1 style parity) |
| D5 | §2.3 | Broken CSS variable references — tokens that don't exist: `--container-narrow-width`, `--color-accent-flagship`, `--color-bg-canvas` | same pages as D4 | Map to real tokens: `--container-narrow`, `--color-accent-blue`, `--color-bg-base` | **FIXED 2026-08-31** — mapped; note this intentionally activates the 840px narrow column and steel-blue accents that the broken vars silently disabled |
| D6 | §2.3 | Hardcoded stale-palette color `rgba(112, 184, 255, 0.1)` (pre-Phase-7 blue) | `products/page.tsx`, `products/[slug]/page.tsx` | Replace with `var(--color-accent-blue-muted)` | **FIXED 2026-08-31** — replaced on both pages |
| D7 | §2.4 | `verifiableEvidence` content defined but never rendered (dead content) | `src/content/products.ts` + product detail page | Render it (spec requires proof) or remove until founder supplies evidence | **FIXED 2026-08-31** — rendered on `/products/[slug]` below the capability grid, using only registered copy.md strings (no new copy) |
| D8 | §2.4 | `proofItems` (Contextual Proof content) defined but never consumed by any view | `src/content/proof.ts` | Wire into a proof surface once founder supplies verified copy | **OPEN (founder)** — awaiting verified People/Product/Evidence copy; only the real `builder` item remains in the data layer |
| D9 | §2.3 | Reusable primitives `Button` and `SectionHeader` exist but pages re-implement their patterns inline | pages listed in D4 | Adopt the primitives during the D4 conversion | **FIXED 2026-08-31 (Button)** — `not-found.tsx` CTA now uses the `Button` primitive. `SectionHeader` remains unused by the sub-pages: adopting it would require new kicker/index strings, which is founder copy (not invented in a fix pass) |
| D10 | §2.7 | Render-blocking external Google Fonts `@import` in `globals.css` | `src/app/globals.css` | Move to self-hosted/`next/font` strategy | **FIXED 2026-08-31** — `next/font/google` self-hosting via `layout.tsx` |
| D11 | §2.6 / §2.10.4 | (Found by the 2026-08-31 experience audit) Lumora workbench: side panels hidden via `display: none` ≤ 980px — mobile content-parity loss; tab/step controls ≈ 28px — below the 44px touch-target floor | `LumoraStage.tsx` / `LumoraStage.module.css` | ADR-001 mobile vertical-stepper recomposition ([design-system §6.8.7](design-system.md#68-motion--micro-interactions)) + ≥ 44px controls | **RESOLVED 2026-09-01** — vertical slice: mobile stepper composition (measured 4 segments × full sources/diagnostics/visual parity, zero `display:none`), all controls ≥ 44×44px (measured 44px), no-JS fallback stacks panels with content |

---

## 6. Sign-Off Record Format

Each QA pass appends a dated block (newest on top) to the run log (commit alongside the change or record in [decisions.md](decisions.md)):

```markdown
### QA Run — YYYY-MM-DD — <scope: route(s) / component / release>
- Tooling: typecheck ✅/❌ · lint ✅/❌ · vitest ✅/❌ · axe ✅/❌ · Lighthouse (P/A/BP/SEO): desktop …/…/…/…, mobile …/…/…/…
- Global gates: 2.1 ✅ · 2.2 ✅ (probes clean) · 2.3 ❌ → debt D# · 2.4 ✅ · 2.5 ✅ · 2.6 ✅ · 2.7 ✅ · 2.8 ✅ · 2.9 ✅
- Page matrix: / ✅ · /products ✅ · /products/lumora ✅ · /about ✅ · /contact ❌ (D2) · 404 ✅
- New debt registered: none / D## …
- Verdict: PASS / PASS-WITH-DEBT (list) / FAIL (blocking)
- Approved by: <founder / lead>
```

**Blocking rule**: any §2.2 (placeholder/internal strings) or §2.5 (accessibility critical) failure blocks release. Debt items are allowed only in `PASS-WITH-DEBT` with explicit registration — never untracked.
