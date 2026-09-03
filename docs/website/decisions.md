# SamJuniors Website — Decision Log

> **Single running log of every formal website decision**, consolidated from the former per-phase decision logs (discovery, information architecture, content strategy, UX). Newest entries appear on top. Each entry is tagged with the merged document its content now lives in:
> `[→ product-spec]` · `[→ design-system]` · `[→ architecture]` · `[→ delivery]`
>
> **Governance**: All records adhere to the mandatory framework: **Decision, Reason, Alternatives Considered, Why Alternatives Were Rejected, Benefits, Risks, Future Review Criteria**. Company-level decisions (COMPANY-001 through COMPANY-003) are recorded separately in the founder-owned [docs/company/decision-log.md](../company/decision-log.md). Decision ID codes live **only** in this document — they must never surface in visitor-facing interfaces or in the other merged documents.

---

## Consolidation Notes & Open TODOs

> [!WARNING]
> **Open TODOs requiring founder review** (conflicts and gaps found during consolidation — not silently resolved):

1. **TODO — Phase-gate violation (Phase 7)**: Phase 7 design-system code was implemented on the `feat/phase-6-visual-evidence` branch (commit `195fb50`, since merged into `main`) *before* a formal Phase 6 sign-off / Phase 7 approval record exists. `PROJECT.md` previously listed Phase 7 as "Pending Phase 6 sign-off" while the design-system documentation stated "Certified & Implemented." The consolidated docs record the implementation as fact; **founder review is requested to either retroactively certify the Phase 7 design system or request changes.**
2. **RESOLVED 2026-08-31 — Palette supersession (closed by [ADR-001 H2](adr/ADR-001-homepage-experience-reconciliation.md))**: founder approved the implemented Phase 7 token system (base `#0b0c0f`, text `#f4f6fa`, institutional copper `#c89666`, steel blue `#628cb3` — `src/styles/tokens.css`) as **canonical**. The strategic-direction palette (obsidian `#08090c`, text `#f0f3f6`, warm amber `#d4a373`, Lumora ice-blue `#70b8ff`) is formally **superseded historical context**; no competing palette definitions are maintained. Both value sets remain visible in [design-system.md](design-system.md) (§4.5 marked superseded, §6.2 canonical).
3. **TODO — Missing screenshot files**: The Phase 6 visual review sheet references four screenshot files that are **not present** in the repository `Screenshots/` directory: `desktop_03_lumora.png`, `desktop_04_founder_ending.png`, `mobile_03_lumora.png`, `mobile_04_founder_ending.png`. Committed evidence includes `desktop_01_hero.png`, `desktop_full_journey.png`, `lumora_interaction_close.png`, `mobile_01_hero.png`, `mobile_full_journey.png`. See [design-system.md §5](design-system.md#5-phase-6-experience-prototype--visual-evidence--review-sheet).
4. **RESOLVED 2026-08-31 — Second-pass production code fixes (executed as scheduled)**: the full qa-checklist debt register was executed in a dedicated code pass (scope limited to the already-specified fixes — no new product, design, copy, architecture, or scope decisions): all five inline-styled pages converted to co-located CSS Modules consuming tokens (D4) with the broken variable names mapped to real tokens (D5) and the stale pre-Phase-7 blue replaced with `--color-accent-blue-muted` (D6); the `[STRUCTURAL CAPABILITY CONTAINER]` render path removed and placeholder content gated out of production output (D1); the contact-page internal process sentence removed with no invented replacement (D2 — routing copy still PENDING FOUNDER COPY); the two placeholder proof items removed from the data layer (D3); `verifiableEvidence` rendered on the product detail page using only registered copy.md strings (D7); the 404 CTA migrated to the `Button` primitive (D9, Button half); fonts self-hosted via `next/font/google` (D10). Verification: `tsc --noEmit` clean, ESLint 0/0, vitest 10/10, `next build` succeeds (8 static pages), QA grep probes clean, browser + VLM inspection of all affected routes. Still open: D8 (`proofItems` wiring) and the SectionHeader half of D9 — both blocked on founder copy. Full record in the QA Run Records section below.
5. **Note — Duplicated records consolidated**: The experience principles (WD-015 through WD-027) were recorded in *both* the discovery decision log and the information architecture decision log with cosmetic wording differences. The single merged records below preserve the union of both variants; no substantive conflict existed between them.
6. **Note — reviews folder absorbed**: The former `docs/website/reviews/` folder (review record protocol) was consolidated into [delivery.md §6](delivery.md#6-phase-review--sign-off-records). Approval outcomes are now tracked in this log.
7. **Note — company decision log untouched**: Per founder-ownership rules, [docs/company/decision-log.md](../company/decision-log.md) was kept byte-for-byte unchanged during this consolidation.
8. **TODO — Founder copy sign-off (copy.md)**: A dedicated copy document now exists — [copy.md](copy.md) — containing every literal visitor-facing string with a three-level status model (`APPROVED` / `PROPOSED` / `PENDING FOUNDER COPY`). **Currently nothing is wet-signed**: all shipped strings are `PROPOSED` (drafted from approved docs / shipped prototype) and the placeholder registry (testimonials, founder name, proof items, persona CTAs, contact experience) is `PENDING FOUNDER COPY`. Founder review of [copy.md §0.2 sign-off record](copy.md#02-sign-off-record) is requested.
9. **Note — operational companion documents added**: Three implementation-grade documents were added alongside the consolidated suite (bringing it to 11 files at that time; 12 today with the ADR series — note 11): [copy.md](copy.md) (SPEC vs COPY split — the actual words), [qa-checklist.md](qa-checklist.md) (concrete acceptance criteria; absorbs the intent of the former 24-line testing stub with executable gates and a debt register), and [component-inventory.md](component-inventory.md) (closed component set + mandatory CSS-Modules + tokens pattern contract, with a drift register documenting the current inline-style violations). No approved decision content was altered; the debt register in qa-checklist.md §5 mirrors TODO 4.
10. **RESOLVED 2026-09-01 — Cinematic experience implementation (slice reviewed → refinements → propagation executed)**: The founder approved implementation from commit `1080890` with a mandatory vertical slice first (Overture → Thesis transition → Lumora Reveal → mobile stepper); the slice was implemented and QA-verified, then **the founder reviewed it and approved the core experience with two targeted refinements** (Lumora phase pacing rebalance + scene transition grammar). Both refinements were implemented, validated, and reported (QA Run Records below), after which the founder's standing approval for the propagation phase was executed in full: `SceneProgress` wayfinding (01–05 rail + compact indicator), scene-owned widths for Scenes 04–05, Founder stillness composition, Horizon closure tone, `/products` flagship composition, `/products/lumora` explore mode (`LumoraDemoExplore` + shared `LumoraWorkbenchBody`), and bounded `/about` + `/contact` editorial treatment. All ADR-001 primitives are now implemented; the five-scene grammar is live site-wide. **Open founder items: copy wet-sign (TODO 8), founder-dependent beats (D8/SectionHeader), and any founder response to the propagation review points** (see the QA Run Record's surfaced decisions).
11. **Note — ADR series established**: Formal Architecture Decision Records now live in [docs/website/adr/](adr/) (the mechanism required by the freeze policy; first record: ADR-001, 2026-08-31). Approval outcomes are always mirrored in this log (index + summary record below); the standalone file carries the detailed record per [delivery.md §6](delivery.md#6-phase-review--sign-off-records). Decision-ID confinement rule extended: ADR IDs live in the adr/ files, this log, and cross-reference notes in the merged docs — never in visitor-facing interfaces or `src/`.
12. **TODO — Company/product hierarchy strings + pillar placement (2026-09-03)**: The hierarchy pass (QA Run Record below) introduced or changed nineteen visitor-facing strings — hero topline and primary CTA pair, primary nav `Company`, footer group labels `Company`/`Products` + `All products`, Scene 03 company attribution, `/products` eyebrow + lead + `Flagship product` chip + the company-standard band heading and its onward link, `/about` eyebrow + H1 + bridge paragraph and link, `/contact` gateway body — all registered `PROPOSED` in [copy.md §12](copy.md#12-companyproduct-hierarchy-pass--2026-09-03-proposed). Two items need a founder decision rather than just a sign-off: (a) `companyContent.reputationPillars` are now **rendered** for the first time, as the closing band of `/products` (they were dead data; copy.md §7 recorded that they needed a destination) — the strings are the founder's own from [foundation.md](../company/foundation.md), but the placement is a choice, and `/about` is the other candidate home; (b) `/about`'s H1 changed from the process statement `How We Build` to the company statement `What SamJuniors is, and how it builds`, which changes what that page claims to be.

---

## QA Run Records

Dated sign-off blocks per [qa-checklist.md §6](qa-checklist.md#6-sign-off-record-format) (newest on top; released by commit reference).

### QA Run — 2026-09-03 — scope: company/product hierarchy pass across all five routes
- Question the pass was run against (founder directive): *"If Lumora were temporarily removed, would this still clearly be a SamJuniors company website?"* Every change below is a place where the answer was no, or could silently become no.
- Scope: (a) **CTA hierarchy** — the hero's `btn-primary`, the single strongest action on the site, pointed at `/products/lumora`; it now points at `/products` ("See what SamJuniors builds") with the product demoted to the supporting text link ("Lumora, our flagship platform"). (b) **Terminology** — hero topline `Parent Technology Ecosystem` → `AI-first technology company` (the former leaked the internal parent-company governance term and never stated what the company is); `/about` eyebrow `Company Foundation` → `Company`. (c) **Navigation** — primary nav `About` → `Company`; footer flat link row → two labelled `<nav>` groups (`Company` / `Products`) with product entries derived from the product registry (`NavigationStructure.footerLinks` → `footerGroups`, new `NavigationGroup` type), so a product is always a child of Products and never a peer of the company, and a second product needs no navigation edit (product-spec §5.4). (d) **`/products`** — eyebrow `What we build` → `SamJuniors portfolio`, lead rewritten with the company as grammatical subject, flagship chip `Flagship` → `Flagship product`, and a closing company-standard band rendering `companyContent.reputationPillars` (dead data until now — copy.md §7 recorded that they needed a destination) plus an onward company path to `/about`. The page previously ended after the product panel: removing Lumora left a header and nothing else. (e) **`/about`** — H1 `How We Build` → `What SamJuniors is, and how it builds`; new closing bridge naming the flagship once as an *output* of the four filters and linking to `/products`, not into the product page. (f) **Scene 03 homepage beat** — one-line company attribution above the product name ("The first product SamJuniors has taken to beta."). (g) **`/contact`** — gateway card body reframed from "what you want to do with Lumora" to what the visitor wants from SamJuniors, with product access as one of three named reasons.
- Not changed, deliberately: the ADR-001 five-scene order (already company → thesis → product → founder → horizon; §3.6 frozen); every cinematic primitive (`Reveal`, `StickyStage`, `SceneProgress`, `usePhaseSwap`, seams/ramps); the visual system (no new tokens, no new components — the two new bands reuse the existing hairline-rule + mono-ordinal treatments); `/products/lumora` (breadcrumbs, `Flagship product` chip and "A product of SamJuniors" footer already carried the hierarchy); `structured-data.ts` (`publisher: {'@id': organizationId}` + BreadcrumbList already encode it); no product invented, no `offers`, no roadmap claim, no backend.
- Tooling: typecheck ✅ (`tsc --noEmit`) · lint ✅ (0/0) · vitest ✅ (33/33, up from 17 — see new guard below) · `next build` ✅ (12 routes, unchanged route set; `/products` 1.18 kB, `/about` 1.1 kB) · Playwright ⚠️ not run (founder scoped it out unless an interaction/layout issue appeared; none did — the stale `/products` h1 assertion in `e2e/smoke.spec.ts` was corrected from `Product Ecosystem` to `Products` as a drift fix, not exercised).
- New guard: `src/app/company-hierarchy.test.tsx` (15 tests) encodes the invariants so this cannot erode silently — the company is named before any product in the *visible* text of all five routes (JSON-LD excluded, since the graph legitimately emits the product node first and carries the hierarchy through `publisher`); the first `.btn-primary` on the homepage is company-scoped; `/about` reaches `/products` and never the product page directly; `/products` closes with a company path; the portfolio's company-standard band is rendered only from `companyContent`, so it survives an empty product registry; the footer's `Products` group holds every registered product and the `Company` group holds none; and no internal governance vocabulary ("parent company", "company foundation", decision IDs) reaches rendered output. `content.test.ts` gained the structural footer assertion (products enumerated under `Products`, absent from every other group).
- Browser verification (dev server, 1280×900 + 375×812, text-based inspection — the Browser pane was not compositing, so screenshots were unavailable and geometry was read from computed boxes instead): homepage — first `.btn-primary` href `/products`, topline `AI-first technology company`, Scene 03 kicker present at 15.2px, footer `Company`[About, Contact] / `Products`[All products, Lumora] as two 120px columns with 44px link targets; `/products` — eyebrow `SamJuniors portfolio`, chip `Flagship product`, standard band three 365px columns with 44px onward link and the page's own hairline top rule; `/about` — eyebrow `Company`, H1 two lines at 54.4px, bridge link `/products` 44px; `/contact` — company-framed card body, mailto intact. Zero horizontal overflow at 1280 and 375 on every route; zero console errors. (Note: `next build` was run while the dev server was live, which left it serving a stale compile; the server was restarted before verification and all figures above are post-restart.)
- Interpretation decisions surfaced (not silent): (a) the `/products` H1 stays `Products` — the company statement was added to the eyebrow and lead rather than the heading, so the 2026-09-01 "ecosystem-of-one" tension stays closed without a heading change; (b) `reputationPillars` are rendered for the first time, and only as the company's own stated reputation goals from `docs/company/foundation.md` §"Desired Company Reputation" — no new claim was written for them, but their *placement* is a founder call (TODO 12); (c) the footer group labels are `<h2>`, which puts them at the same heading level as page sections — accepted because each group's accessible name comes from its `nav aria-label` and the alternative (a visually-hidden higher-level heading) would add markup for no visitor benefit; (d) `/about`'s bridge links to `/products` rather than `/products/lumora` on purpose, so the company page hands off to the portfolio and the portfolio introduces the product; (e) the new strings are registered `PROPOSED` in copy.md §12 — nothing here is wet-signed.
- Documentation: all nineteen new/changed strings are registered in [copy.md §12](copy.md#12-companyproduct-hierarchy-pass--2026-09-03-proposed) with old → new and an explicit "supersedes row X in §N" per row, plus §12.6 (two internal-vocabulary leaks closed, continuing §9's numbering), §12.7 (the two founder decisions) and §12.8 (what was left alone); `> [!IMPORTANT]` supersession pointers were added under copy.md §1.1, §1.2, §2, §6.1, §7 and §8, the §7 reputation-pillars NOTE now records the pillars' new destination, and sign-off row 10 was added to §0.2. Pre-existing copy.md drift found while doing this (the §1.1 header CTA, §2's CTA rows, the §6.1 H1) is flagged in place as drift and deliberately left unfixed — reconciling it is a copy-parity pass, not this one. `component-inventory.md` §4.2 and its content-layer table were corrected from `footerLinks` to `footerGroups`.
- Verdict: **PASS** — the removal test now holds on all five routes: with the product registry emptied, `/` keeps its company statement, tenets, thesis, founder and horizon beats and a company-scoped primary action, `/products` keeps its company frame and standard, `/about` is unaffected apart from a bridge that has nothing to name, `/contact` keeps its company framing, and the footer keeps its `Company` group.
- Approved by: engineering pass executed per founder directive "Audit and implement the company/product hierarchy across `/`, `/products`, `/products/lumora`, `/about`, `/contact`" (2026-09-03), with the standing constraints: no visual redesign, no new products, no backend, no wholesale copy rewrite. Founder sign-off of the new strings is requested alongside copy.md §0.2 (TODO 8, TODO 12).

### QA Run — 2026-09-01 — scope: founder-review refinements (phase pacing + transition grammar) + scene-grammar propagation
- Scope: (a) **Refinement 1 — Lumora phase pacing**: sentinel band boundaries rebalanced post-mount from measured geometry (entry/exit travel compensated; stable windows weighted 0.5/1/1/1.25; total scene scroll unchanged at 4 × 100vh). Measured at 1440×900 — before: phase 1 active 900px (275px pre-pin arrival inflating it) / phase 4 stable 435px (truncated by frame departure); after: phase 1 654px / phases 2–3 775px / phase 4 925px stable + 465px in-band departure. (b) **Refinement 2 — scene transition grammar**: dissolving seams on all four scene boundaries (Founder→Horizon seam carries the single copper tint), light ramps into/out of the signature scene's elevated zone (~14vh/~16vh), boundary spacing rhythm, Horizon two-column re-expansion reveal; Founder keeps deliberate stillness (no entry motion). (c) **Propagation**: `SceneProgress` (§4.11 — fixed left rail ≥1200px / compact top strip below; IO-derived `aria-current`; anchor links work no-JS), scene ids (`overture`/`founder`/`horizon`) + anchor scroll margins, scene-owned widths for Scenes 04–05, Founder stillness composition (72vh centered room), Horizon closure tone (`--color-bg-surface-subtle` + entry ramp, flowing into the footer end-credits), `/products` flagship composition (one flagship panel — honest at one-product scale; ventures grid renders only when ventures exist), `/products/lumora` explore mode (`LumoraWorkbenchBody` extraction — rendering-identical — + `LumoraDemoExplore`; demo-type evidence renders as the interactive exhibit framed by its registered copy + `STATUS:` label), `/about` + `/contact` calm editorial reveals.
- Tooling: typecheck ✅ (`tsc --noEmit`) · lint ✅ (repo 0/0; sandbox config 0/0 after refactoring the sentinel geometry into a pure `sentinelStyle()` helper for the stricter react-hooks v6 immutability rule) · vitest ✅ (10/10) · `next build` ✅ (8 static pages, same route set).
- §2.10 gates re-run: 2.10.1 no-JS ✅ (all five routes curl-probed — full server HTML incl. SceneProgress anchors, flagship panel, demo exhibit + first phase + tabs, `data-scroll-active="false"`) · 2.10.2 reduced-motion ✅ (sticky collapsed to 719px flow, scroll linkage never activates, rail visible + state-accurate, 0 substantive running animations — the single reported CSSAnimation is the sandbox-only view-enter fade at 0.01ms/finished) · 2.10.3 CLS ✅ (desktop 0.0011 — improved from 0.0018; seams/ramps/composition are static CSS) · 2.10.4 touch ✅ (rail entries 44px; compact strip 78×44 at 390px; product-page tabs 148×44–54 stacked) · 2.10.5 sticky + pacing ✅ (forward walk monotonic; reverse walk 4→3→2→1 fires at the same boundaries — 4400/3650/2850 vs forward 4452/3677/2902 within the 25–50px probe grid; tap lands on exact band centers 5048/3959 with state-first update; +300px nudge holds phase 4; bands measured [654, 768, 768, 1409]) · 2.10.6 mobile parity ✅ (home compact rail tracks scenes 01→04 across the 9.8k-px mobile page; product-page exhibit stacks with 4 sources + 4 diagnostics, 0 content `display:none`, no overflow) · 2.10.7 budgets ✅ (only the sanctioned motion classes; scene micro-feedback 150ms; no new animation systems) · 2.10.8 honest framing ✅ (explore exhibit framed by registered evidence copy + `STATUS: BETA`; zero new narrative copy — one invented chrome string caught and removed during implementation before commit).
- Visual verification (1440×900 + 390×844, browser + VLM): boundary screenshots — VLM design-director verdict 8.5/10 (T1 9 “chapter heading in a monograph”; T2 8; sticky phase 10 “strongest beat on the page”; T3 8 genuine decompression; T4 9 “absolute re-expansion”) with the grammar judged strong enough to propagate; full-page rhythm review 8/10 (breathing arc confirmed); Founder stillness close-up 9/10 (“confessional chamber”); secondary pages — `/products` 8.5/10 (“intentional scarcity, flagship scale”), `/products/lumora` 9/10 (strongest page — dual registers, credible interactivity), `/about` 8/10, `/contact` 7.5/10. Zero console/page errors on every route and flow.
- Interpretation decisions surfaced (not silent): (a) the Horizon columns keep their registered `05`/`06` sub-indices — renumbering under the unified 01–05 system would alter registered display copy, so the unification lives in the SceneProgress rail while the column indices await founder sign-off; (b) the `/products` H1 `Product Ecosystem` stays as registered — the VLM's “ecosystem-of-one” tension (plural heading, one product) is a founder copy decision (suggested alternatives: pipeline ghost cards or a singular retitle — both rejected here as fabrication/copy-change); (c) the Founder decompression beat was tightened from clamp(88px,12vh,144px) to clamp(72px,10vh,120px) after the full-page rhythm review flagged the original void as reading “empty” rather than “silent”; (d) the lumora demo exhibit replaced (not duplicated) the static demo-evidence card on `/products/lumora` — the evidence strings render as the exhibit's framing; (e) SceneProgress mounts outside the sandbox hash-router's animated view wrapper (a transform re-parents fixed positioning) — a sandbox-only structural note, the repo renders it in the page fragment.
- Verdict: **PASS** — both refinements validated; the scene-grammar propagation is complete site-wide within the approved architecture.
- Approved by: founder directive “VERTICAL SLICE REVIEW — APPROVED WITH TWO TARGETED REFINEMENTS … After the two refinements pass, you may continue with the propagation phase without waiting for another approval, but keep the work bounded to the approved architecture and existing specifications” (2026-09-01).

### QA Run — 2026-09-01 — scope: ADR-001 cinematic vertical slice (Scenes 01–03 + mobile Lumora stepper)
- Scope: production implementation of the founder-approved vertical slice only — Scene 01 Overture (full-viewport composition + staged load choreography via `Reveal`), Scene 02 Thesis transition (980px editorial measure + first-entry reveals), Scene 03 Lumora Reveal (`StickyStage` scroll-linked sticky scene + tap override + breakout width + elevated lighting + phase cross-fades), mobile vertical stepper (`LumoraMobileStepper` + `LumoraPhaseVisual`), page composition with per-scene widths. Zero visitor-facing copy changes (all strings from `copy.md §4`-registered sources; verified by probe).
- New components: `Reveal`, `StickyStage`, `LumoraPhaseVisual`, `LumoraMobileStepper` (+ `src/hooks/usePrefersReducedMotion.ts`, `useMediaQuery.ts`); `LumoraStage` recomposed as the scene orchestrator (phase ownership → `StickyStage`); `HeroSection`/`ThesisSection` restaged per §6.8.3/§6.8.4/§6.8.6; `tokens.css` + `--duration-scene`, `--header-height`.
- Tooling: typecheck ✅ (`tsc --noEmit`) · lint ✅ (0/0) · vitest ✅ (10/10 — jsdom-robustness guards added: matchMedia/IO/scrollIntoView) · `next build` ✅ (8 static pages; home 9.2 kB / 115 kB first load).
- §2.10 gates: 2.10.1 no-JS ✅ (curl probes: all key strings server-rendered; exhibit first phase + controls in DOM; `data-scroll-active="false"` in server HTML — sticky is script-added only) · 2.10.2 reduced-motion ✅ (Playwright `reducedMotion: 'reduce'`: sticky collapsed to flow (container 675px vs 3600px), 0 running animations after settle, reveals instant, tap-only switching works) · 2.10.3 CLS ✅-with-residual (mobile 0.0000; desktop 0.0018 — text-node micro-shifts inside phase content swaps, not animations; reveal offset-metrics identical pre/post (probed); frame fixed-height so the workbench never resizes between phases) · 2.10.4 touch targets ✅ (measured 44×44 on all tabs/controls; D11 closed) · 2.10.5 sticky continuity ✅ (phase monotonic 1→4 sampled at 7 positions + reverse; native wheel input verified forward/backward — zero scroll capture; tap override re-syncs viewport (measured: phase 4→2, scroll 5000→3486, frame pinned at 90px); indicator `aria-live`) · 2.10.6 mobile parity ✅ (4 segments × 4 sources + 4 diagnostics + visual each, zero `display:none` under #lumora; no horizontal overflow at 390px; anchor segmented control 4×44px, works without JS) · 2.10.7 budgets ✅ (choreography staged 0/60/120/180/240ms + 250ms = ≤500ms, sampled mid-sequence; phase swaps 320ms transform/opacity only; 18 animations during a phase change = 5 WAAPI swaps + micro-feedback transitions; 0 animations at rest) · 2.10.8 honest framing ✅ (static data, no ticking timers, 0 animations at rest, registered strings only).
- Visual verification (production build, 1440×900 + 390×844): hero exactly one viewport (828px at 900vh − 73px header); width rhythm measured 1240 → 980 → breakout 1360 (at 1440) + elevated band `#0e1015`; VLM design-director reviews — desktop trio ("deliberate full-viewport opening / calm reading zone / framed signature moment"), four sticky phases ("meaningful state differentiation, EXCELLENT fixed-frame continuity, no broken or empty phases — signature moment, A-"), mobile trio ("mobile-native, not a shrunken desktop; no overflow; adequate targets"). Keyboard: tabs focusable, focus-visible outline, Tab moves 01→02. Zero console/page errors, zero hydration warnings, on every probed flow.
- Interpretation decisions surfaced (not silent): (a) §4.12's "controls ≥ 44px" applied at ALL breakpoints (QA 2.10.4 scopes it to mobile; the stricter reading wins); (b) the hero load choreography treats the two natural headline lines as one staged element (splitting them would change registered text-wrap behavior); (c) `SceneProgress` deliberately NOT built (founder listed it under post-slice propagation); (d) desktop CLS 0.0018 residual reported as-is rather than freezing text slot widths that would alter registered compositions; (e) §2.3's zero-inline-style probe — static choreography values (Scene 01's 12px rise) moved into class-scoped module CSS; the three remaining `style` attributes carry only **dynamic motion/geometry parameters** (`--reveal-delay` stagger ms, `--phase-count`, sentinel top/height fractions — computed per prop/index, not token-bypassing styling values).
- Verdict: **PASS** — slice complete per the founder's instruction list; remaining scenes gated on founder review (TODO 10).
- Approved by: founder directive "APPROVED — BEGIN CINEMATIC IMPLEMENTATION" (2026-09-01): vertical-slice-first, prove the Lumora Reveal, STOP for review.

### QA Run — 2026-08-31 — scope: ADR-001 spec/documentation pass + Lumora demo content extraction
- Scope: documentation only (ADR-001 + product-spec §3.4/§3.4.1/§3.6/§4.7/§6.6, design-system §4.5/§6.8/§6.9, component-inventory §3/§4.7/§4.10–§4.12/§7/§9, qa-checklist §2.6/§2.10/§3/§5-D11, decisions, copy §4 note, INDEX/AGENTS/README/CONTRIBUTING/ROADMAP/PROJECT/CHANGELOG) plus **one code change mandated by the founder's item 5**: extraction of the Lumora demonstration data from `LumoraStage.tsx` into `src/content/lumora-demo.ts` with the component rewired to import it (zero visual change).
- Tooling: typecheck ✅ (`tsc --noEmit` clean) · lint ✅ (0 errors / 0 warnings) · vitest ✅ (10/10) · `next build` ✅ (8 static pages — same route set/sizes) · Playwright ⚠️ not run (equivalent manual browser verification below) · Lighthouse ⚠️ not run (no performance-affecting change; static parity verified).
- Extraction parity verification: **string-set parity PASS** (automated comparison of every string literal in the old in-component `ACADEMIC_STEPS` block vs `src/content/lumora-demo.ts` — zero missing, zero added); rendered-output parity on a production server (`next start`, 1440×900): 5 sections, h1/workbench title/initial tab state identical, tab interaction switches phases (HUD `Collision Detected`, indicator `2 / 4`), 4 source items + 4 diagnostic items rendered, zero console/page errors.
- New gates status: §2.10.1 no-JS baseline ✅ (all content server-rendered — the extraction added no client-side content dependency) · §2.10.4 touch targets ❌ known (D11, pre-existing, registered) · §2.10.6 mobile parity ❌ known (D11, pre-existing, registered) · remaining §2.10 gates: N/A (no motion introduced in this pass — by design).
- Global gates re-run: 2.2 ✅ (probes clean — new files contain no placeholder/internal strings; the terms "stage fiction"/"exhibit" in code comments are documentation language, not rendered copy) · 2.3 ✅ (no inline styles, no new vars — `lumora-demo.ts` is data-only) · 2.8 ✅ (copy parity — extracted strings match copy.md §4 verbatim; no new visitor-facing copy introduced anywhere in this pass).
- New debt registered: **D11** (workbench mobile content parity + sub-44px touch targets — pre-existing violations found by the 2026-08-31 experience audit; resolution owned by the ADR-001 cinematic pass).
- Verdict: **PASS** (spec pass; implementation debt D11 + D8 + SectionHeader-adoption remain open and registered).
- Approved by: founder directives H1–H5 (2026-08-31) — this pass executed items 1–7 of the spec-only instruction list verbatim.

### QA Run — 2026-08-31 — scope: second-pass debt fixes (D1–D10) on all routes
- Tooling: typecheck ✅ · lint ✅ (0 errors / 0 warnings) · vitest ✅ (10/10) · `next build` ✅ (8 static pages) · Playwright e2e ⚠️ not run (browsers unavailable in environment — equivalent manual browser verification performed and documented below) · axe ⚠️ not run (manual contrast/landmark/heading checks documented) · Lighthouse ⚠️ not run in this environment
- Global gates: 2.1 ✅ · 2.2 ✅ (probe 1 zero hits; probe 2 zero renderable hits — pre-existing comment/test-description references only; probe 3: hits are code comments + typed `isPlaceholder` flags + registered demo-exhibit copy) · 2.3 ✅ (zero inline styles; all var() names resolve — `--font-inter`/`--font-jetbrains-mono` are next/font build-time definitions; only remaining TSX color literal is the `themeColor` metadata value) · 2.4 ✅ (route matrix manually exercised) · 2.5 ✅-manual (one h1 per page, sequential headings, landmarks, sticky footer verified) · 2.6 ✅ (390px + 1440px: zero horizontal overflow on all routes) · 2.7 partial (fonts self-hosted D10; Lighthouse deferred) · 2.8 ✅ (no new strings; copy.md updated in lockstep) · 2.9 ✅ (no fabricated proof introduced)
- Page matrix: / ✅ · /products ✅ · /products/lumora ✅ · /about ✅ · /contact ✅ · 404 ✅ (unknown slug → 404 + Product Not Found metadata)
- Manual browser verification (production build, 1440×900 + 390×844): breadcrumbs, badges, capability grid, evidence card (D7), single-sentence contact card body, 404 Button primitive colors, computed token values (`max-width: 840px`, `rgb(98,140,179)`, `rgba(98,140,179,0.12)`), footer bottom === viewport bottom; zero console/page errors; VLM visual audit of `/products/lumora` confirmed all six visual criteria.
- New debt registered: none. Remaining open items: D8 (proofItems → proof surface) and SectionHeader adoption (D9 remainder) — both founder-copy-dependent.
- Verdict: **PASS-WITH-DEBT** (D8 + SectionHeader half of D9, both awaiting founder copy)
- Approved by: engineering pass executed per scheduled TODO 4; founder sign-off of the QA record requested alongside copy.md §0.2.

---

## Decisions Index

### Architecture Decision Records (ADR series)
| ADR | Title | Status | Approved | Record |
| :--- | :--- | :---: | :---: | :--- |
| ADR-001 | Homepage Experience Reconciliation: 10-Step Strategic Model → 5-Scene Executable Experience (ratifies H1–H5) | **APPROVED** | 2026-08-31 | [adr/ADR-001-homepage-experience-reconciliation.md](adr/ADR-001-homepage-experience-reconciliation.md) (detailed) + summary record below |

### UX & Flow Governance (newest)
| Decision ID | Title | Status | Approved | Merged into |
| :--- | :--- | :---: | :---: | :--- |
| HUMAN-001 | Human-Made Design & Implementation | **APPROVED** | 2026-08-31 | design-system |
| USER-FLOW-005 | Returning Visitor Flow | **APPROVED** | 2026-08-31 | product-spec |
| USER-FLOW-004 | Contextual CTA Hierarchy | **APPROVED** | 2026-08-31 | product-spec |
| USER-FLOW-003 | Natural Next Move | **APPROVED** | 2026-08-31 | product-spec |
| USER-FLOW-002 | Multiple Valid Entry Points | **APPROVED** | 2026-08-31 | product-spec |
| USER-FLOW-001 | First-Time Visitor Journey | **APPROVED** | 2026-08-31 | product-spec |
| UX-019 | Recovery & Continuity | **APPROVED** | 2026-08-31 | product-spec |
| UX-018 | Predictable Restrained Navigation | **APPROVED** | 2026-08-31 | product-spec |
| UX-017 | Mobile Is First-Class | **APPROVED** | 2026-08-31 | product-spec |
| UX-016 | Progressive Disclosure | **APPROVED** | 2026-08-31 | product-spec |
| UX-015 | Visitor Control | **APPROVED** | 2026-08-31 | product-spec |
| UX-014 | Interaction Must Earn Its Friction | **APPROVED** | 2026-08-31 | product-spec |
| UX-013 | Understanding Must Accompany Curiosity | **APPROVED** | 2026-08-31 | product-spec |
| UX-012 | Hybrid Scroll & Progression Model | **APPROVED** | 2026-08-31 | product-spec |
| UX-011 | Hybrid Navigation | **APPROVED** | 2026-08-31 | product-spec |
| UX-010 | User Mental Model First | **APPROVED** | 2026-08-31 | product-spec |
| UX-009 | Cognitive Load First | **APPROVED** | 2026-08-31 | product-spec |
| UX-008 | Zero Fatigue Principle | **APPROVED** | 2026-08-31 | product-spec |
| UX-007 | Scene-Based Storytelling | **APPROVED** | 2026-08-31 | product-spec |
| UX-006 | Visitor-Led Discovery | **APPROVED** | 2026-08-31 | product-spec |
| UX-005 | Progressive Discovery | **APPROVED** | 2026-08-31 | product-spec |
| UX-004 | Progressive Branching | **APPROVED** | 2026-08-31 | product-spec |
| UX-003 | End-to-End User Journeys | **APPROVED** | 2026-08-31 | product-spec |
| UX-002 | User Goals & Success Criteria | **APPROVED** | 2026-08-31 | product-spec |
| UX-001 | Primary User Personas | **APPROVED** | 2026-08-31 | product-spec |

### Content Strategy
| Decision ID | Title | Status | Approved | Merged into |
| :--- | :--- | :---: | :---: | :--- |
| CONTENT-010 | Future Layer Classification | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-009 | Founder Presence Architecture | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-008 | SamJuniors → Lumora Transition | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-007 | One Dominant Cognitive Purpose | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-006 | Contextual Proof System | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-005 | Primary Messaging Hierarchy | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-004 | Core SamJuniors Positioning | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-003 | Three Information Depths | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-002 | Hybrid Product Discovery | **APPROVED** | 2026-08-31 | product-spec |
| CONTENT-001 | Parent-Company-First Architecture | **APPROVED** | 2026-08-31 | product-spec |

### Information Architecture
| Decision ID | Title | Status | Approved | Merged into |
| :--- | :--- | :---: | :---: | :--- |
| WD-027 | Architecture Freeze Principle | **APPROVED** | 2026-08-31 | design-system, architecture |
| WD-026 | Timeless Design Principle | **APPROVED** | 2026-08-31 | design-system |
| WD-025 | Curiosity Loop Principle | **APPROVED** | 2026-08-31 | design-system |
| WD-024 | No Dead Ends Principle | **APPROVED** | 2026-08-31 | design-system |
| WD-023 | Show, Then Tell | **APPROVED** | 2026-08-31 | design-system |
| WD-022 | Evidence Before Claims | **APPROVED** | 2026-08-31 | design-system |
| WD-021 | Every Scroll Must Reward | **APPROVED** | 2026-08-31 | design-system |
| WD-020 | Progressive Conversion Principle | **APPROVED** | 2026-08-31 | design-system |
| WD-019 | Progressive Complexity Principle | **APPROVED** | 2026-08-31 | design-system |
| WD-018 | One Hero Product Principle | **APPROVED** | 2026-08-31 | design-system |
| WD-017 | Honest Roadmap Principle | **APPROVED** | 2026-08-31 | design-system |
| WD-016 | Narrative Scroll Principle | **APPROVED** | 2026-08-31 | design-system |
| WD-015 | Signature Experience Principle | **APPROVED** | 2026-08-31 | design-system |
| IA-009 | Narrative Links | **APPROVED** | 2026-08-31 | product-spec |
| IA-008 | Connected Website Principle | **APPROVED** | 2026-08-31 | product-spec |
| IA-007 | Distributed Trust Architecture | **APPROVED** | 2026-08-31 | product-spec |
| IA-006 | Intent-Based Conversion | **APPROVED** | 2026-08-31 | product-spec |
| IA-005 | Progressive Product Ecosystem | **APPROVED** | 2026-08-31 | product-spec |
| IA-004 | Homepage Architecture | **APPROVED** | 2026-08-31 | product-spec |
| IA-003 | Homepage Hero Strategy | **APPROVED** | 2026-08-31 | product-spec |
| IA-002 | Primary Navigation | **APPROVED** | 2026-08-31 | product-spec |
| IA-001 | Primary Homepage Journey | **APPROVED** | 2026-08-31 | product-spec |

### Discovery (oldest)
| Decision ID | Title | Status | Approved | Merged into |
| :--- | :--- | :---: | :---: | :--- |
| WD-014 | Brand Positioning Statement | **APPROVED** | 2026-08-31 | product-spec |
| WD-013 | Visual Personality | **APPROVED** | 2026-08-31 | product-spec, design-system |
| WD-012 | Brand Voice | **APPROVED** | 2026-08-31 | product-spec |
| WD-011 | Brand Archetype | **APPROVED** | 2026-08-31 | product-spec |
| WD-010 | Emotional Journey | **APPROVED** | 2026-08-31 | product-spec |
| WD-009 | Core Brand Differentiators | **APPROVED** | 2026-08-31 | product-spec |
| WD-008 | Core Brand Message | **APPROVED** | 2026-08-31 | product-spec |
| WD-007 | Website Narrative Framework | **APPROVED** | 2026-08-31 | product-spec |
| WD-006 | Website Success Criteria | **APPROVED** | 2026-08-31 | product-spec |
| WD-005 | Website Scope | **APPROVED** | 2026-08-31 | product-spec |
| WD-004 | Brand Positioning | **APPROVED** | 2026-08-31 | product-spec |
| WD-003 | Brand Personality | **APPROVED** | 2026-08-31 | product-spec |
| WD-002 | Primary Audience Priority | **APPROVED** | 2026-08-31 | product-spec |
| WD-001 | Website Vision & Objectives | **APPROVED** | 2026-08-31 | product-spec |

---

## Detailed Records — UX & Flow Governance

### ADR-001: Homepage Experience Reconciliation `[→ product-spec §3.4.1 · design-system §6.8 · component-inventory §4.10–§4.12 · qa-checklist §2.10]`
- **Decision**: Reconcile the certified-and-frozen 10-step homepage narrative ([product-spec §3.4](product-spec.md#34-homepage-narrative-architecture-10-steps)) into two tiers — the 10 steps remain the **strategic model** (target journey once verified proof/roadmap/testimonial/persona content exists); the **executable production experience** is the truthful 5-scene arc (01 Overture → 02 Thesis → 03 Lumora Reveal → 04 Founder Letter → 05 Horizon) with unverified beats explicitly deferred and never fabricated. Ratifies the founder's five approvals: **H1** two-tier reconciliation (this record); **H2** Phase 7 copper/steel palette canonical, supersession closed (resolves TODO 2 above); **H3** founder copy not a presentation blocker, founder scene structurally ready, no invented identity; **H4** Lumora dual-mode presentation (homepage scroll-driven reveal + `/products/lumora` tap exploration over one shared content contract, honest conceptual-demonstration boundary); **H5** scroll-linked phase progression with always-present tap override and 100% native scroll authority. Signature Moment #1 = the Lumora Reveal; Signature Moment #2 deferred with step 7.
- **Reason**: The 2026-08-31 experience/architecture audit of commit `cd32ba5` found the implementation ships a truthful 5-beat subset (steps 7–9 + persona CTAs unimplementable without fabrication) while the presentation layer under-delivers every approved experience principle (zero motion system, uniform scene density, fake-liveness workbench, mobile content loss) — the docs demanded a cinematic experience no spec made implementable.
- **Alternatives Considered**: (1) implement the 10-step form literally with placeholder-grade proof/roadmap/testimonial beats; (2) abandon and re-freeze on 5 scenes discarding the strategic model; (3) keep the 5 beats as currently presented (no scene grammar); (4) pursue cinematic effect through heavy motion (parallax/particles/scroll-hijack).
- **Why Alternatives Were Rejected**: (1) violates Zero Fabrication and the founder's explicit no-fabrication instruction; (2) discards correct certified strategic intent; (3) is the status quo the founder judged lifeless; (4) violates Zero Scroll-Jacking/Animation Purpose Test/HUMAN-001 and the founder's "cinematic ≠ more animation" directive.
- **Benefits**: truthful stageable experience with zero fabricated facts; an implementable scene/motion contract paying down the audit findings; content-layer extraction restoring the binding pattern contract; explicit activation path for deferred beats.
- **Risks**: wayfinding unification must not regress into duplicated numbering; the sticky signature scene is the highest-risk interactive element (gated by new §2.10 checks); scene rhythm touches every homepage module CSS (scope discipline required); the structurally-ready founder scene must not accumulate invented copy.
- **Future Review Criteria**: deferred beats activate only via founder-supplied verified content in [copy.md](copy.md); second Signature Moment activates with verified milestones; post-implementation QA re-verification (§2.10 + home row); post-launch scroll-depth/scene-completion analytics.
- **Full record**: [adr/ADR-001-homepage-experience-reconciliation.md](adr/ADR-001-homepage-experience-reconciliation.md).

---

### HUMAN-001: Human-Made Design & Implementation `[→ design-system §2.5]`
- **Decision**: Enforce a mandatory cross-phase quality and design governance constraint ensuring the website does not exhibit recognizable generic AI-generated visual or implementation patterns. Mandate that every major visual, interaction, and technical decision demonstrate deliberate human-level design judgment, authorship, restraint, and distinctiveness. Enforce the Distinctiveness Test and Human-Authorship Test across all design and development phases (design research through QA).
- **Reason**: Protects SamJuniors from falling into interchangeable "AI startup" aesthetic tropes (purple/cyan gradients, glowing blobs, excessive glassmorphism, repetitive card grids, generic copy) and ensures enduring, world-class brand credibility.
- **Alternatives Considered**:
  - Complete prohibition on AI tooling during design and development.
  - No governance constraint (allowing unvetted AI-generated design patterns).
- **Why Alternatives Were Rejected**: Tooling prohibition slows development unnecessarily; lack of governance leads to generic, low-craft visual and technical output.
- **Benefits**: Enduring, premium, highly distinctive brand presence with thoughtful, purposeful engineering.
- **Risks**: Reviewers must evaluate designs critically against generic AI tropes during quality gates.
- **Future Review Criteria**: Evaluated at every design quality gate from design research through QA.

---

### USER-FLOW-005: Returning Visitor Flow `[→ product-spec §6.8]`
- **Decision**: Enable returning visitors to bypass introductory storytelling and immediately reorient to current priorities, new product updates, and explorations through curated continuity. Prohibit noisy social-media chronological feeds.
- **Reason**: Respects returning visitors' existing context and maximizes their access to new utility.
- **Alternatives Considered**:
  - Forcing returning visitors to re-experience full introductory scroll animations.
  - Adding a chaotic real-time social timeline feed to the homepage.
- **Why Alternatives Were Rejected**: Forcing intros frustrates repeat users; social timelines introduce visual clutter and dilute brand focus.
- **Benefits**: High utility for repeat users and long-term community retention.
- **Risks**: Curated update signals must be actively maintained.
- **Future Review Criteria**: Repeat visitor retention and navigation velocity.

---

### USER-FLOW-004: Contextual CTA Hierarchy `[→ product-spec §6.8]`
- **Decision**: Enforce at most one dominant primary action per state, with secondary actions subordinate. Align action priority with current cognitive context (e.g. *Learn More* during discovery, *Try Demo* during product reveal).
- **Reason**: Eliminates choice conflict and guides visitor focus cleanly toward the next step.
- **Alternatives Considered**: Presenting 3–4 equal primary buttons on every section.
- **Why Alternatives Were Rejected**: Competing primary actions trigger decision paralysis (Hick's Law).
- **Benefits**: Maximum conversion clarity and visual elegance.
- **Risks**: Primary action definitions must be kept aligned with content strategy.
- **Future Review Criteria**: A/B testing of contextual CTA labels during QA.

---

### USER-FLOW-003: Natural Next Move `[→ product-spec §6.8]`
- **Decision**: Ensure every major experience state provides an understandable, low-friction next step without visual forcing. Scale CTA prominence with demonstrated intent.
- **Reason**: Keeps visitor exploration continuous without inducing sales fatigue.
- **Alternatives Considered**: In-your-face floating modal CTAs appearing repeatedly on every scroll.
- **Why Alternatives Were Rejected**: Aggressive modals destroy reading immersion and brand credibility.
- **Benefits**: Respectful, persuasive, and organic conversion flow.
- **Risks**: CTAs must remain sufficiently visible and distinct in layout hierarchy.
- **Future Review Criteria**: Conversion micro-funnel analytics.

---

### USER-FLOW-002: Multiple Valid Entry Points `[→ product-spec §6.8]`
- **Decision**: Explicitly support non-homepage entry points (organic search, shared links, deep product URLs, docs) such that every destination page makes sense independently while connecting naturally to parent SamJuniors context.
- **Reason**: In modern web architectures, a significant portion of traffic bypasses the homepage entirely.
- **Alternatives Considered**: Forcing deep-linked visitors through an initial splash or introductory homepage redirect.
- **Why Alternatives Were Rejected**: Interstitial redirects create severe friction and damage SEO indexing.
- **Benefits**: Excellent SEO landing resilience and direct utility for referral traffic.
- **Risks**: Internal pages must include contextual parent-level breadcrumbs/signals.
- **Future Review Criteria**: Organic search bounce rate and referral page dwell times.

---

### USER-FLOW-001: First-Time Visitor Journey `[→ product-spec §6.8]`
- **Decision**: Define the ideal first-time narrative progression: *Entry → SamJuniors Signal → Understanding → What We're Building → Lumora / Product Reveal → Why It Matters → Proof → Founder / Leadership → Future → Visitor Choice*. Explicitly clarify this as ideal topology, not a mandatory sequential funnel.
- **Reason**: Establishes an engaging, logical psychological journey that builds understanding and trust before requesting action.
- **Alternatives Considered**: Pure landing page with immediate sign-up form above the fold.
- **Why Alternatives Were Rejected**: Demanding sign-ups before communicating vision or value produces high bounce rates.
- **Benefits**: Compelling storytelling arc with natural conversion endpoints.
- **Risks**: Narrative pacing must remain tight to prevent mid-scroll drop-off.
- **Future Review Criteria**: Scroll-depth analytics and stage completion rates.

---

### UX-019: Recovery & Continuity `[→ product-spec §6.6]`
- **Decision**: Require every experience state to have an immediate, non-destructive recovery path (allowing continuing, skipping, revisiting, or reorienting). Explicitly support reduced-motion preferences, deep linking, and mid-story entry.
- **Reason**: Ensures resilience across varying network conditions, user abilities, and non-linear browsing habits.
- **Alternatives Considered**: Single-state monolithic apps where refreshing restarts the experience from the beginning.
- **Why Alternatives Were Rejected**: Fragile single-state flows generate high abandonment upon page refresh or network blips.
- **Benefits**: Robust, resilient, and fault-tolerant user experience.
- **Risks**: Frontend state management must cleanly support deep-linking and state restoration.
- **Future Review Criteria**: Deep-link entry tests and reduced-motion audit in QA.

---

### UX-018: Predictable Restrained Navigation `[→ product-spec §6.6]`
- **Decision**: Maintain predictable, accessible, and dependable global navigation that supports wayfinding without competing with cinematic content. Prohibit hiding navigation purely for visual drama.
- **Reason**: Ensures visitors never feel lost or trapped in an unconventional layout.
- **Alternatives Considered**: Full-screen immersive mode with navigation hidden until mouse-shake or edge-hover.
- **Why Alternatives Were Rejected**: Hidden navigation destroys discoverability and violates accessibility guidelines.
- **Benefits**: Frictionless wayfinding across the entire ecosystem.
- **Risks**: Header styling must integrate seamlessly with diverse background themes.
- **Future Review Criteria**: Keyboard navigation and screen-reader accessibility benchmarks.

---

### UX-017: Mobile Is First-Class `[→ product-spec §6.6]`
- **Decision**: Treat mobile and desktop as independently composed, equally first-class experiences that preserve core narrative and meaning without mechanically scaling down desktop layouts. Prohibit hover-dependent critical content.
- **Reason**: Over 60% of modern web traffic originates on mobile devices with touch constraints.
- **Alternatives Considered**: Desktop-first layout with automatic CSS media-query shrinking.
- **Why Alternatives Were Rejected**: Direct shrinking produces illegible typography, compromised tap targets, and broken touch gestures.
- **Benefits**: Flawless, native-feeling mobile experience and WCAG touch target compliance.
- **Risks**: Requires parallel composition reviews for both form factors in UI design.
- **Future Review Criteria**: Mobile Lighthouse performance and touch usability audits.

---

### UX-016: Progressive Disclosure (Depth Alignment) `[→ product-spec §6.6]`
- **Decision**: Expose complexity progressively in response to visitor interest (aligned with the three information depths: Instant, Understand, Deep Dive) without forcing a rigid sequential funnel.
- **Reason**: Caters directly to varying visitor fluencies and intents.
- **Alternatives Considered**: Gated disclosure where deep documentation is locked behind introductory chapters.
- **Why Alternatives Were Rejected**: Artificial gates repel expert and technical visitors who require immediate deep specifications.
- **Benefits**: Universal accessibility for casual scanners and immediate depth for engineers.
- **Risks**: Deep content pathways must remain discoverable from top-level views.
- **Future Review Criteria**: Navigation success rates to technical documentation.

---

### UX-015: Visitor Control `[→ product-spec §6.6]`
- **Decision**: Ensure the web experience guides attention without seizing control from the user. Visitors retain predictable and meaningful control over scrolling, navigation, pacing, skipping, revisiting, and depth of exploration.
- **Reason**: Respects human agency and hardware ergonomics, fostering an empowering sense of discovery.
- **Alternatives Considered**: Linear guided slideshow tour with automated pacing.
- **Why Alternatives Were Rejected**: Automated tours feel imposed, frustrating users who read faster or want specific answers.
- **Benefits**: Natural, self-directed exploration with high user satisfaction.
- **Risks**: Layout must gracefully accommodate fast scrollers as well as careful readers.
- **Future Review Criteria**: Usability session recordings during vertical slice validation.

---

### UX-014: Interaction Must Earn Its Friction `[→ product-spec §6.6]`
- **Decision**: Require every interaction, animation, modal, gesture, or transition to deliver a positive value-to-friction ratio (providing meaningful info, discovery, comprehension, or progression). Prohibit novelty anti-patterns (custom cursor effects, scroll-jacking, forced horizontal scroll, hover-only info).
- **Reason**: Protects user energy and focus, ensuring high-value engagement across all devices.
- **Alternatives Considered**: Adding visual micro-interactions purely for portfolio flair.
- **Why Alternatives Were Rejected**: Novelty interactions generate immediate user annoyance and impair accessibility.
- **Benefits**: Lightweight, responsive, and respectful user experience.
- **Risks**: Interaction designers must balance restraint with polish.
- **Future Review Criteria**: Friction audit during design system and vertical slice reviews.

---

### UX-013: Understanding Must Accompany Curiosity `[→ product-spec §6.6]`
- **Decision**: Enforce that visual surprises, motion, and cinematic reveals must never compromise visitor comprehension. Visitors must continuously maintain a 4-part mental model (*Where am I? What am I seeing? Why does it matter? What can I do next?*).
- **Reason**: Prevents experiential disorientation where aesthetic visual spectacle obscures basic product communication.
- **Alternatives Considered**: Pure mystery-driven storytelling where answers are deferred until the final scene.
- **Why Alternatives Were Rejected**: Mystery-driven sites experience severe bounce rates from users who cannot quickly determine product relevance.
- **Benefits**: High engagement paired with crystal-clear value perception (*"I want to see what's next"*, not *"What am I looking at?"*).
- **Risks**: Requires tight coordination between copywriters and visual designers.
- **Future Review Criteria**: Comprehension evaluations in QA usability testing.

---

### UX-012: Hybrid Scroll & Progression Model `[→ product-spec §6.6]`
- **Decision**: Default browser scrolling remains standard and uninterrupted; scroll-linked motion is used selectively for key scenes; zero scroll-jacking; animation purpose test enforced.
- **Reason**: Respects user agency and hardware controls while enabling tasteful cinematic visual storytelling.
- **Alternatives Considered**: Forced scroll hijacking; Full page snapping.
- **Why Alternatives Were Rejected**: Universally disliked by users, breaks touchpad gestures, and triggers motion sickness.
- **Benefits**: Fluid, natural interaction with captivating motion design.
- **Risks**: Scroll listeners must be passive and decoupled from rendering threads.
- **Future Review Criteria**: 60fps frame rate benchmarks during performance QA.

---

### UX-011: Hybrid Navigation `[→ product-spec §6.6]`
- **Decision**: Implement stable, familiar global navigation paired with contextual in-page indicators, single primary CTA, and full accessibility.
- **Reason**: Combines unshakeable navigational clarity with cutting-edge visual presentation.
- **Alternatives Considered**: Pure experimental navigation (e.g., hidden radial menus, horizontal scroll only).
- **Why Alternatives Were Rejected**: Frustrates users and destroys accessibility compliance.
- **Benefits**: Zero learning curve for navigation with maximum aesthetic polish.
- **Risks**: Header scroll minimize transitions must not cause layout shift.
- **Future Review Criteria**: Lighthouse accessibility audits (100/100 target).

---

### UX-010: User Mental Model First `[→ product-spec §6.6]`
- **Decision**: Structure product categories and navigation around user goals and technological purpose, not internal corporate divisions.
- **Reason**: Visitors think in terms of outcomes (*"How do I build AI apps?"*, *"How do I learn STEM?"*), not corporate structures.
- **Alternatives Considered**: Organizing site by internal department structure.
- **Why Alternatives Were Rejected**: Disorients external visitors and hides relevant products.
- **Benefits**: Immediate intuitive navigation.
- **Risks**: Internal teams must adapt to outward-facing terminology.
- **Future Review Criteria**: User navigation success rate testing.

---

### UX-009: Cognitive Load First `[→ product-spec §6.6]`
- **Decision**: Evaluate every component, interaction, and animation based on whether it simplifies or complicates the user's task. Remove anything that adds unnecessary friction.
- **Reason**: Enforces functional purpose over superficial ornamentation.
- **Alternatives Considered**: Adding visual trends (e.g. 3D canvas backgrounds, particle animations) without UX justification.
- **Why Alternatives Were Rejected**: Drastically increases cognitive noise, battery drain, and rendering latency.
- **Benefits**: Blazing fast rendering and crystal-clear communication.
- **Risks**: Requires strict review to resist decorative feature creep.
- **Future Review Criteria**: Component audit during design system reviews.

---

### UX-008: Zero Fatigue Principle `[→ product-spec §6.6]`
- **Decision**: Eliminate visual, cognitive, and interaction fatigue through generous whitespace, high contrast, optimal line lengths (50–75 chars), and clean visual rest stops.
- **Reason**: Ensures visitors can explore complex technical ecosystems without mental exhaustion.
- **Alternatives Considered**: Dense high-density dashboard styling across marketing pages.
- **Why Alternatives Were Rejected**: Causes rapid reader fatigue and disinterest.
- **Benefits**: Elegant, calming, and premium reading experience.
- **Risks**: Requires spatial discipline in layout design.
- **Future Review Criteria**: Usability session length telemetry.

---

### UX-007: Scene-Based Storytelling `[→ product-spec §6.6]`
- **Decision**: Frame the homepage as a sequence of cinematic, cohesive scenes with an intentional emotional progression: *Curiosity → Excitement → Understanding → Trust → Action*.
- **Reason**: Transforms the website from a static marketing brochure into an immersive documentary experience.
- **Alternatives Considered**: Traditional disconnected content blocks with arbitrary styling.
- **Why Alternatives Were Rejected**: Fails to create memorable emotional impact.
- **Benefits**: World-class presentation and high brand recall.
- **Risks**: Transitions must remain lightweight and performant.
- **Future Review Criteria**: Narrative scroll completion analytics.

---

### UX-006: Visitor-Led Discovery `[→ product-spec §6.6]`
- **Decision**: Structure page sections to answer the visitor's next logical question (*"What is it?"* → *"Who built it?"* → *"How does it work?"* → *"Is it proven?"* → *"How do I start?"*).
- **Reason**: Creates natural narrative pull aligned with human curiosity.
- **Alternatives Considered**: Company-centric broadcast model (*"Here is our company history, here are our press releases"*).
- **Why Alternatives Were Rejected**: Self-centered marketing copy disengages modern web users.
- **Benefits**: High user engagement and organic storytelling resonance.
- **Risks**: Requires rigorous editorial discipline during content strategy.
- **Future Review Criteria**: Editorial review against visitor question framework.

---

### UX-005: Progressive Discovery `[→ product-spec §6.6]`
- **Decision**: Reveal information progressively: one idea per scene, with layered deep-dives on demand.
- **Reason**: Protects working memory capacity and avoids cognitive overload.
- **Alternatives Considered**: Monolithic page layout with simultaneous multi-column feature dumps.
- **Why Alternatives Were Rejected**: High information density induces reading fatigue and choice paralysis.
- **Benefits**: Effortless reading flow and enhanced comprehension.
- **Risks**: Deep technical content must remain easily discoverable for power users.
- **Future Review Criteria**: Comprehension testing during discovery validation.

---

### UX-004: Progressive Branching `[→ product-spec §6.4]`
- **Decision**: All visitors begin with a unified narrative (Vision → Founder → SamJuniors) before branching into persona-specific paths at the Product Ecosystem step.
- **Reason**: Establishes common institutional trust and vision before presenting specialized deep-dives.
- **Alternatives Considered**: Forcing visitors to choose their role upon initial landing (*"Are you a student or an investor?"*).
- **Why Alternatives Were Rejected**: Choice gates create immediate cognitive friction and undermine brand storytelling.
- **Benefits**: Seamless onboarding and natural intent-based branching.
- **Risks**: Shared entry must remain concise and universally compelling.
- **Future Review Criteria**: Early-scroll bounce rate analysis.

---

### UX-003: End-to-End User Journeys `[→ product-spec §6.5]`
- **Decision**: Map end-to-end journeys from entry to destination and onward loops for all 5 personas.
- **Reason**: Ensures every user flow is continuous, purposeful, and free of dead ends.
- **Alternatives Considered**: Isolated page wireframes without end-to-end flow mapping.
- **Why Alternatives Were Rejected**: Results in fragmented experiences and elevated bounce rates.
- **Benefits**: Guarantees coherent progression across pages.
- **Risks**: Requires regular audit as new products launch.
- **Future Review Criteria**: Funnel drop-off analytics in post-launch review.

---

### UX-002: User Goals & Success Criteria `[→ product-spec §6.2]`
- **Decision**: Define explicit primary goals, key questions, measurable success criteria, primary CTAs, secondary CTAs, and 5 UX success principles (Clarity, Confidence, Progress, Efficiency, Completion).
- **Reason**: Provides measurable benchmarks to evaluate whether wireframes and UI designs achieve user intent.
- **Alternatives Considered**: Qualitative personas without measurable completion criteria.
- **Why Alternatives Were Rejected**: Vague criteria lead to subjective design arguments without accountability.
- **Benefits**: Unambiguous quality gates for design validation.
- **Risks**: Metrics must be instrumented accurately in QA and analytics setup.
- **Future Review Criteria**: User testing completion rates during QA.

---

### UX-001: Primary User Personas `[→ product-spec §6.1]`
- **Decision**: Define five distinct personas: 1. Students, 2. Institutions, 3. Businesses, 4. Developers, 5. Investors.
- **Reason**: Targets the specific mindsets, evaluative questions, and technical fluencies required across key stakeholder groups.
- **Alternatives Considered**: Generic "Visitor" persona; Single enterprise B2B buyer persona.
- **Why Alternatives Were Rejected**: Generic personas fail to provide actionable UX constraints; enterprise-only personas ignore the core student and creator base.
- **Benefits**: Precise targeting of copy tone, technical depth, and conversion touchpoints.
- **Risks**: Must avoid fragmenting the site into disconnected silos.
- **Future Review Criteria**: Audience traffic analysis in post-launch telemetry.

---

## Detailed Records — Content Strategy

### CONTENT-010: Future Layer Classification `[→ product-spec §4.8]`
- **Decision**: Categorize all forward-looking content into 4 strict tiers: 1. Company Vision, 2. Committed Roadmap, 3. Active Exploration, 4. Speculation (prohibited from external marketing). Eliminate generic futuristic hype.
- **Reason**: Maintains transparent, honest communication and builds institutional credibility by clearly differentiating shipped realities from future research.
- **Alternatives Considered**: Vague futuristic claims with undefined release dates; Omitting all future vision.
- **Why Alternatives Were Rejected**: Vague claims destroy trust when milestones slip; omitting vision makes the company look stagnant.
- **Benefits**: Authentic transparency, stakeholder confidence, aligned expectations.
- **Risks**: Roadmap status must be actively maintained as engineering schedules shift.
- **Future Review Criteria**: Quarterly roadmap status audit against actual engineering releases.

---

### CONTENT-009: Founder Presence Architecture `[→ product-spec §4.7]`
- **Decision**: Structure founder presence across two tiers: Surface Depth (concise contextual leadership/credibility quotes) and Deep Depth (dedicated founder essay/story for high-intent visitors). Enforce *SamJuniors ≠ Founder* boundary.
- **Reason**: Provides human connection and leadership accountability while ensuring the institution remains capable of growing larger than its founder.
- **Alternatives Considered**:
  - Making the website an autobiographical personal portfolio.
  - Erasing founder presence completely from all pages.
- **Why Alternatives Were Rejected**: Personal portfolio model prevents corporate scaling; erasing founder destroys authentic builder connection and early-stage credibility.
- **Benefits**: Authentic leadership signaling without institutional dependency.
- **Risks**: Editorial copy must strike the right balance between founder vision and company scale.
- **Future Review Criteria**: Audience engagement on dedicated founder essay section.

---

### CONTENT-008: SamJuniors → Lumora Transition `[→ product-spec §4.3]`
- **Decision**: Introduce Lumora as the first major proof of what SamJuniors is building through a structured transition: *Parent Vision → What We're Building → Opportunity/Shift → SamJuniors Response → Lumora Reveal → Explore.*
- **Reason**: Contextualizes Lumora within the larger institutional vision while delivering an exciting product reveal moment.
- **Alternatives Considered**: Immediate standalone Lumora landing page with zero parent narrative; Blurring SamJuniors and Lumora into an indistinguishable single brand.
- **Why Alternatives Were Rejected**: Standalone landing page squanders parent ecosystem trust; blurring brands damages future product expansion.
- **Benefits**: Captivating product reveal that reinforces parent company engineering capability.
- **Risks**: Must balance sufficient product depth with overall narrative flow.
- **Future Review Criteria**: Visitor interaction rates on Lumora reveal scene.

---

### CONTENT-007: One Dominant Cognitive Purpose `[→ product-spec §4.6]`
- **Decision**: Require every major scene or content block to have exactly one dominant cognitive purpose, with supporting details strictly subordinate. Base density on visual hierarchy rather than arbitrary element counts.
- **Reason**: Minimizes extraneous cognitive load and maximizes comprehension.
- **Alternatives Considered**: Multi-purpose dashboard-style layout blocks competing for attention; Rigid mechanical 3-element maximum rules.
- **Why Alternatives Were Rejected**: Competing elements create choice paralysis; mechanical element limits produce sparse, uninformative layouts.
- **Benefits**: Crystal-clear mental model formation and effortless scanning.
- **Risks**: Requires strict editorial and layout discipline during wireframing and UI design.
- **Future Review Criteria**: Comprehension evaluations in UX audits.

---

### CONTENT-006: Contextual Proof System `[→ product-spec §4.5]`
- **Decision**: Establish credibility contextually using 4 evidence types (People, Product, Builder, Evidence). Strictly prohibit fabricated testimonials, metrics, partnerships, awards, or false logos.
- **Reason**: Distributed proof resolves specific doubts at the exact moment they arise during reading, building authentic trust.
- **Alternatives Considered**: Single aggregated "Trust Us" badge wall at the bottom of the page; Fabricating sample metrics during drafting.
- **Why Alternatives Were Rejected**: Generic badge walls are ignored as marketing noise; fabricating data violates core governance and founder integrity rules.
- **Benefits**: Rock-solid credibility, high conversion trust, WCAG and legal compliance.
- **Risks**: Requires discipline to gather and verify real metrics and testimonials before publishing.
- **Future Review Criteria**: Trust and credibility feedback during user testing audits.

---

### CONTENT-005: Primary Messaging Hierarchy `[→ product-spec §4.2]`
- **Decision**: Enforce a 5-step primary narrative: *SamJuniors → What we're building (idea & system behind work) → Why it matters (opportunity / shift) → Proof (contextual evidence) → Explore (actionable pathways).*
- **Reason**: Constructs a coherent psychological progression (Curiosity → Understanding → Trust → Action).
- **Alternatives Considered**: Immediate product pitch on initial viewport; Pure corporate credential listing.
- **Why Alternatives Were Rejected**: Premature pitching lacks vision context; pure credentialing lacks product excitement.
- **Benefits**: Engaging storytelling flow that naturally guides visitors toward conversion.
- **Risks**: Pacing must remain snappy to avoid reader fatigue.
- **Future Review Criteria**: Drop-off rates across homepage narrative steps.

---

### CONTENT-004: Core SamJuniors Positioning `[→ product-spec §4.2]`
- **Decision**: Adopt the approved positioning direction: *"SamJuniors looks toward what could be next and turns ambitious ideas into real, useful technology."*
- **Reason**: Accurately derives from founder foundation (parent company identity & purpose; differentiator & building cycle) while maintaining adaptability across future product domains.
- **Alternatives Considered**: Narrow AI-only software tooling positioning; Overly abstract philosophical manifestos.
- **Why Alternatives Were Rejected**: Narrow tooling claims become obsolete quickly; abstract manifestos fail to communicate concrete technology building.
- **Benefits**: Clear, inspiring, and durable strategic direction.
- **Risks**: Must be supported by concrete product evidence in downstream copywriting.
- **Future Review Criteria**: Periodic positioning review during annual strategy updates.

---

### CONTENT-003: Three Information Depths `[→ product-spec §4.4]`
- **Decision**: Structure all content across three non-linear information depths: 1. Instant (5–15s), 2. Understand (1–3m), 3. Deep Dive (extended). Do not force these as a mandatory sequential funnel.
- **Reason**: Accommodates varying visitor intents (scanning learners, evaluating educators, technical developers) without imposing arbitrary reading hurdles.
- **Alternatives Considered**: Single uniform reading depth across all sections; Forced sequential gating (*"Read Overview to unlock Specs"*).
- **Why Alternatives Were Rejected**: Uniform depth alienates either scanners or technical researchers; sequential gating increases bounce rates.
- **Benefits**: Maximum reading accessibility and engagement across diverse personas.
- **Risks**: Visual design must clearly differentiate depth levels using consistent typography and affordances.
- **Future Review Criteria**: Dwell time and scroll depth metrics across information tiers.

---

### CONTENT-002: Hybrid Product Discovery `[→ product-spec §4.3]`
- **Decision**: Adopt a hybrid discovery model: cinematic, curated, progressive product discovery on the Homepage; structured, comprehensive, deeper exploration in a dedicated Products/Portfolio section.
- **Reason**: Balances emotional storytelling and brand immersion on the homepage with exhaustive, filterable technical evaluation for high-intent visitors.
- **Alternatives Considered**:
  - Full product catalog grid on the homepage.
  - Hiding all product details behind a separate portal with zero homepage showcase.
- **Why Alternatives Were Rejected**: Catalog grid destroys storytelling immersion; hiding products produces a vague, unconvincing marketing brochure.
- **Benefits**: High conversion resonance for first-time visitors and deep utility for evaluators.
- **Risks**: Navigation links between homepage showcases and dedicated product pages must be seamless.
- **Future Review Criteria**: Click-through rates from homepage product reveals to dedicated product documentation.

---

### CONTENT-001: Parent-Company-First Architecture `[→ product-spec §4.1]`
- **Decision**: Establish SamJuniors as the permanent narrative and brand center. Treat products and ventures as expressions of SamJuniors rather than definitions of the company. Curate product prominence strategically ("featured" ≠ "newest"). Ensure architecture scales to future products without redesign.
- **Reason**: Protects long-term brand equity, establishes institutional credibility, and ensures website infrastructure supports expanding ventures beyond Lumora.
- **Alternatives Considered**: Product-first branding where the website is titled and themed entirely around Lumora.
- **Why Alternatives Were Rejected**: Makes launching future products confusing, expensive, and destructive to parent company brand awareness.
- **Benefits**: Future-proof narrative, unified company credibility, frictionless multi-product scaling.
- **Risks**: Copywriting must clearly connect parent company vision to specific product utility without confusion.
- **Future Review Criteria**: Evaluated upon introduction of subsequent products (Product B, Product C).

---

## Detailed Records — Information Architecture

### WD-027: Architecture Freeze Principle `[→ design-system §2.4, architecture §10]`
- **Decision**: Lock certified Stage 3 Information Architecture; require formal ADRs for subsequent modifications.
- **Reason**: Prevents scope creep, provides stable blueprints for wireframes, and maintains documentation integrity.
- **Alternatives Considered**: Ad-hoc informal architectural edits during UI design.
- **Why Alternatives Were Rejected**: Leads to architectural entropy, contradictions, and broken governance.
- **Benefits**: Rock-solid foundation for wireframing and design systems.
- **Risks**: Changes require structured governance process.
- **Future Review Criteria**: Adherence verification during subsequent phase kickoffs.

---

### WD-026: Timeless Design Principle `[→ design-system §2.1]`
- **Decision**: Anchor design in typography, whitespace, and structural discipline (inspired by Apple, Stripe, Linear, Vercel).
- **Reason**: Ensures the website looks pristine for years without rapid obsolescence.
- **Alternatives Considered**: Following short-term design fads (e.g., heavy skeuomorphism, chaotic brutalism).
- **Why Alternatives Were Rejected**: Fads date rapidly and harm professional credibility.
- **Benefits**: Enduring brand prestige and reduced refactoring overhead.
- **Risks**: Demands strict typographic and spatial execution discipline.
- **Future Review Criteria**: Design longevity audits during milestone reviews.

---

### WD-025: Curiosity Loop Principle `[→ design-system §2.1]`
- **Decision**: Plant intriguing conceptual hooks that invite visitors into deeper ecosystem exploration.
- **Reason**: Fosters genuine curiosity about future vision and underlying architecture.
- **Alternatives Considered**: Completely closed, self-contained sections.
- **Why Alternatives Were Rejected**: Reduces cross-page discovery.
- **Benefits**: Transforms passive browsers into active followers of the journey.
- **Risks**: Loops must deliver satisfying payoff when explored.
- **Future Review Criteria**: Click-through rates on ecosystem deep-dive teasers.

---

### WD-024: No Dead Ends Principle `[→ design-system §2.3]`
- **Decision**: Every page, modal, and sub-section must provide clear contextual onward journeys.
- **Reason**: Keeps visitors engaged in continuous exploration.
- **Alternatives Considered**: Terminal footers with no contextual next steps.
- **Why Alternatives Were Rejected**: Leads directly to site exit.
- **Benefits**: Extended session duration and continuous learning loops.
- **Risks**: Links must remain relevant to current page context.
- **Future Review Criteria**: Exit rate analysis per page during QA.

---

### WD-023: Show, Then Tell `[→ design-system §2.4]`
- **Decision**: Lead with visual and interactive product demonstrations before explanatory copy.
- **Reason**: Visual comprehension is 60,000x faster than reading text; creates immediate conviction.
- **Alternatives Considered**: Lengthy descriptive paragraphs preceding screenshots.
- **Why Alternatives Were Rejected**: Passive text is skipped by modern web visitors.
- **Benefits**: Immediate engagement and visceral appreciation of product quality.
- **Risks**: Visual assets must be highly optimized for fast loading.
- **Future Review Criteria**: Asset weight and Largest Contentful Paint (LCP) audits.

---

### WD-022: Evidence Before Claims `[→ design-system §2.4]`
- **Decision**: Back every claim of performance or innovation with demonstrable proof.
- **Reason**: Establishes genuine authority in a market crowded with hollow AI claims.
- **Alternatives Considered**: Conventional hyperbolic marketing copy.
- **Why Alternatives Were Rejected**: Erodes trust among discerning developers and investors.
- **Benefits**: Institutional credibility and long-term brand equity.
- **Risks**: Requires rigorous evidence gathering and ongoing metric validation.
- **Future Review Criteria**: Content audits verifying all claims against live proof.

---

### WD-021: Every Scroll Must Reward `[→ design-system §2.1]`
- **Decision**: Every scroll increment reveals fresh value, insight, or aesthetic delight.
- **Reason**: Sustains curiosity and reading completion; eliminates boredom across long-form pages.
- **Alternatives Considered**: Static layouts with excessive empty margins; long static text sections with uniform spacing.
- **Why Alternatives Were Rejected**: Leads to reader disengagement and drop-off.
- **Benefits**: High user engagement and narrative retention.
- **Risks**: Avoid visual clutter; pacing must feel natural.
- **Future Review Criteria**: Scroll heatmap evaluations in QA.

---

### WD-020: Progressive Conversion Principle `[→ design-system §2.3]`
- **Decision**: Low-commitment actions precede high-commitment asks.
- **Reason**: Matches visitor psychological readiness and builds rapport before transaction.
- **Alternatives Considered**: Aggressive lead-capture popups on first scroll.
- **Why Alternatives Were Rejected**: Degrades brand elegance and elevates immediate bounce rates.
- **Benefits**: Higher conversion quality and respected visitor autonomy.
- **Risks**: Clear CTA visibility must be maintained without being aggressive.
- **Future Review Criteria**: Funnel conversion drop-off analysis.

---

### WD-019: Progressive Complexity Principle `[→ design-system §2.2]`
- **Decision**: Present high-level conceptual clarity first; reveal technical depth on user intent.
- **Reason**: Accommodates both casual learners and deep technical evaluators without alienating either.
- **Alternatives Considered**: Dumping exhaustive technical documentation directly on the homepage.
- **Why Alternatives Were Rejected**: Overwhelms non-technical audiences and hurts readability.
- **Benefits**: Universal accessibility across all audience personas.
- **Risks**: Deep layers must remain easily discoverable for developers.
- **Future Review Criteria**: Technical audience feedback in discovery reviews.

---

### WD-018: One Hero Product Principle `[→ design-system §2.2]`
- **Decision**: Designate **Lumora** as the flagship hero product anchoring the ecosystem (`SamJuniors` → `Lumora ⭐` → `Future Ecosystem`).
- **Reason**: Gives visitors an immediate, concrete focal point before exploring the wider suite.
- **Alternatives Considered**: Equal-weight multi-product launch carousel.
- **Why Alternatives Were Rejected**: Dilutes focus and confuses first-time visitors.
- **Benefits**: Crystal-clear product identity; clear brand recall and rapid visitor comprehension.
- **Risks**: Secondary products must still receive adequate contextual visibility.
- **Future Review Criteria**: Product adoption metrics and brand recall surveys.

---

### WD-017: Honest Roadmap Principle `[→ design-system §2.4]`
- **Decision**: Visually distinguish Live Products, Beta Products, Research, and Future Vision; zero misleading hype.
- **Reason**: Builds permanent trust by maintaining complete transparency.
- **Alternatives Considered**: Speculative "Coming Soon" marketing hype.
- **Why Alternatives Were Rejected**: Damages founder and company credibility when timelines shift.
- **Benefits**: Unassailable reputation for honesty and integrity.
- **Risks**: Requires disciplined internal status reviews.
- **Future Review Criteria**: Quarterly status updates against roadmap tiers.

---

### WD-016: Narrative Scroll Principle `[→ design-system §2.1]`
- **Decision**: The homepage flows as one seamless, continuous narrative.
- **Reason**: Engages visitors like a short documentary rather than a disjointed brochure.
- **Alternatives Considered**: Tabbed single-page app, Fragmented multi-page brochure, disjointed modular blocks.
- **Why Alternatives Were Rejected**: Fails to tell a cohesive emotional story; breaks immersion.
- **Benefits**: Natural reading progression and immersive engagement.
- **Risks**: Scroll hijacking is strictly forbidden; scroll must remain natural.
- **Future Review Criteria**: Scroll performance and user retention audits.

---

### WD-015: Signature Experience Principle `[→ design-system §2.1]`
- **Decision**: Every major page must include at least one memorable Signature Moment; differentiate through memorable experiences, not decoration.
- **Reason**: Establishes iconic, proprietary brand differentiation.
- **Alternatives Considered**: Static traditional pages / standard static marketing layouts.
- **Why Alternatives Were Rejected**: Indistinguishable from commodity competitors.
- **Benefits**: Exceptional brand recall; highly shareable, premium brand recognition.
- **Risks**: Must maintain 60fps performance and full accessibility.
- **Future Review Criteria**: Lighthouse and interaction frame rate testing in QA.

---

### IA-009: Narrative Links `[→ product-spec §3.5]`
- **Decision**: Contextual links and CTAs express narrative destinations rather than generic action verbs.
- **Reason**: Communicates destination context and maintains storytelling immersion.
- **Alternatives Considered**: Generic "Click here" and "Learn more" text.
- **Why Alternatives Were Rejected**: Poor accessibility, zero storytelling value, bad SEO.
- **Benefits**: Superior accessibility (screen readers), improved SEO, and richer narrative immersion.
- **Risks**: Link copy must remain concise to fit layout constraints.
- **Future Review Criteria**: Accessibility link audits during QA.

---

### IA-008: Connected Website Principle `[→ product-spec §3.5]`
- **Decision**: Structure the website as an interconnected knowledge web where pages contextually cross-reference related ecosystem nodes.
- **Reason**: Eliminates dead ends and encourages exploratory discovery.
- **Alternatives Considered**: Strict linear tree hierarchy with return-to-home requirements.
- **Why Alternatives Were Rejected**: Strict trees increase navigation friction and bounce rates.
- **Benefits**: High organic discoverability and improved session depth.
- **Risks**: Must prevent circular loops.
- **Future Review Criteria**: User session depth and cross-page navigation flows.

---

### IA-007: Distributed Trust Architecture `[→ product-spec §3.5]`
- **Decision**: Contextually integrate authentic testimonials, metrics, and proof points throughout sections rather than isolating them on a single testimonials page.
- **Reason**: Continuous validation reinforces credibility at the exact moments visitors evaluate products and claims.
- **Alternatives Considered**: Standalone "Testimonials" silo page only.
- **Why Alternatives Were Rejected**: Siloed pages are rarely visited and fail to support product evaluations in real time.
- **Benefits**: Persistent trust-building throughout the entire user journey.
- **Risks**: Quotes and proof points must remain authentic and verified.
- **Future Review Criteria**: Regular verification of testimonial freshness and customer consent.

---

### IA-006: Intent-Based Conversion `[→ product-spec §3.5]`
- **Decision**: Tailored conversion touchpoints mapped directly to visitor persona (Students, Partners, Developers, Institutions).
- **Reason**: Different audiences require distinct calls-to-action (e.g., student exploration vs. institutional partnership).
- **Alternatives Considered**: Singular "Sign Up" global CTA.
- **Why Alternatives Were Rejected**: Single generic CTAs alienate institutional and partner visitors.
- **Benefits**: High conversion relevance and clear user pathways.
- **Risks**: Must avoid visual clutter at terminal page sections.
- **Future Review Criteria**: Conversion rates across persona pathways.

---

### IA-005: Progressive Product Ecosystem `[→ product-spec §3.4]`
- **Decision**: Progressive disclosure model (`One Vision` → `One Hero Product` → `Interconnections` → `Full Ecosystem`) with responsive layouts.
- **Reason**: Prevents cognitive overload by allowing visitors to understand Lumora first before exploring wider ecosystem nodes.
- **Alternatives Considered**: Flat product grid, Accordion list.
- **Why Alternatives Were Rejected**: Flat grids disguise architectural relationships; accordions conceal the impressive breadth of the ecosystem.
- **Benefits**: Clear comprehension paired with rich interactive discovery.
- **Risks**: Desktop interactive node visualization requires fallback for low-power devices.
- **Future Review Criteria**: Mobile touch interaction telemetry.

---

### IA-004: Homepage Architecture `[→ product-spec §3.4]`
- **Decision**: 10-step cohesive narrative architecture connecting vision, founder, ecosystem, differentiation, timeline, social proof, roadmap, and conversion.
- **Reason**: Structured storytelling guides visitors effortlessly through the complete company narrative.
- **Alternatives Considered**: Disjointed modular widgets, Single-screen interactive app.
- **Why Alternatives Were Rejected**: Modular widgets feel like generic marketing templates; single-screen apps sacrifice SEO and narrative depth.
- **Benefits**: Delivers a rich, documentary-style exploration of SamJuniors.
- **Risks**: Requires strict performance budgets for multimedia and animations.
- **Future Review Criteria**: User engagement time per narrative section.

---

### IA-003: Homepage Hero Strategy `[→ product-spec §3.3]`
- **Decision**: "Vision First" opening hero answering "Why does SamJuniors exist?".
- **Reason**: Elevates SamJuniors above commodity tool vendors by establishing transformative long-term purpose.
- **Alternatives Considered**: Immediate SaaS Pricing Hero, Feature Grid Hero.
- **Why Alternatives Were Rejected**: Transactional pricing heroes alienate student/partner audiences and undermine premium positioning.
- **Benefits**: Powerful first impression aligned with brand vision.
- **Risks**: Must quickly bridge vision into concrete product realities.
- **Future Review Criteria**: Hero section 30-second comprehension testing in QA.

---

### IA-002: Primary Navigation `[→ product-spec §3.2]`
- **Decision**: Active Navigation: `Home`, `Products`, `What We Build`, `Our Story`, `Portfolio`, `Contact`. Deferred items cataloged for future phases.
- **Reason**: Maintains high signal-to-noise ratio during initial launch without overwhelming visitors.
- **Alternatives Considered**: Mega-menu with all future roadmap items, Single-button minimalist hamburger menu.
- **Why Alternatives Were Rejected**: Mega-menus create dead links and confusion for unlaunched products; pure hamburger on desktop harms discoverability.
- **Benefits**: Clean, intuitive, focused information hierarchy.
- **Risks**: Future additions must be managed carefully to avoid navigation bloat.
- **Future Review Criteria**: Review navigation usability when secondary products launch.

---

### IA-001: Primary Homepage Journey `[→ product-spec §3.1]`
- **Decision**: Homepage sequence: `Vision` → `Founder` → `SamJuniors` → `Products` → `Why We're Different` → `Proof & Trust` → `Get Started`.
- **Reason**: Natural trust-building sequence (*Vision → Credibility → Company → Products → Differentiation → Proof → Action*) maximizes user conviction before conversion.
- **Alternatives Considered**: Direct Product-First Catalog, Founder Biography Landing, Minimal Splash Page.
- **Why Alternatives Were Rejected**: Product catalogs lack emotional resonance; biography-first ignores institutional capability; minimal splash pages provide zero educational depth.
- **Benefits**: Establishes emotional alignment and credibility before presenting offerings.
- **Risks**: Longer page length requires engaging scroll pacing.
- **Future Review Criteria**: Homepage bounce rate and scroll depth metrics evaluated in QA.

---

## Detailed Records — Discovery

### WD-014: Brand Positioning Statement `[→ product-spec §2.8]`
- **Decision**: *"SamJuniors creates premium, purpose-driven technology products through original thinking, exceptional craftsmanship, and long-term vision."*
- **Reason**: Definitive constitutional statement uniting all brand touchpoints.
- **Alternatives Considered**: Unfocused multi-paragraph mission statements.
- **Why Alternatives Were Rejected**: Lacks punch and memorability.
- **Benefits**: Clear compass for every design and engineering decision.
- **Risks**: None.
- **Future Review Criteria**: Annual brand alignment audit.

---

### WD-013: Visual Personality `[→ product-spec §2.7, design-system §1.2]`
- **Decision**: Principles inspired by Apple (40%), Stripe (30%), Linear (20%), Vercel (10%). Rule: Learn from principles; never copy.
- **Reason**: Draws from the world's highest standard of digital craftsmanship.
- **Alternatives Considered**: Generic web agency templates.
- **Why Alternatives Were Rejected**: Fails to deliver a wow factor.
- **Benefits**: World-class visual sophistication.
- **Risks**: High technical execution standard required in frontend development.
- **Future Review Criteria**: Design system token reviews.

---

### WD-012: Brand Voice `[→ product-spec §2.6]`
- **Decision**: Premium (50%), Inspirational (25%), Technical (15%), Friendly (10%). Rule: Demonstrate excellence through evidence.
- **Reason**: Professional and inspiring without marketing hyperbole.
- **Alternatives Considered**: Aggressive hype marketing, Dry academic textbook tone.
- **Why Alternatives Were Rejected**: Hype destroys trust; academic tone kills engagement.
- **Benefits**: Authoritative, elevated communication.
- **Risks**: Requires strict copy editing.
- **Future Review Criteria**: Content strategy audits.

---

### WD-011: Brand Archetype `[→ product-spec §2.5]`
- **Decision**: Visionary (50%), Innovator (30%), Creator (20%).
- **Reason**: Reflects bold technological horizon paired with builder craftsmanship.
- **Alternatives Considered**: Pure Rebel/Disruptor archetype, Pure Caregiver archetype.
- **Why Alternatives Were Rejected**: Disruptor lacks reliability; Caregiver lacks technological edge.
- **Benefits**: Harmonious blend of vision, technology, and art.
- **Risks**: Copywriters must balance all three archetypes.
- **Future Review Criteria**: Voice reviews in content strategy.

---

### WD-010: Emotional Journey `[→ product-spec §2.4]`
- **Decision**: Primary: Trust | Secondary: Confidence | Supporting: Curiosity.
- **Reason**: Establishes psychological safety before prompting action.
- **Alternatives Considered**: Urgency/FOMO-driven emotional hooks.
- **Why Alternatives Were Rejected**: Damages premium brand trust.
- **Benefits**: Respectful, long-term user relationships.
- **Risks**: Requires restrained visual pacing.
- **Future Review Criteria**: User feedback interviews.

---

### WD-009: Core Brand Differentiators `[→ product-spec §2.3]`
- **Decision**: (1) Exceptional Product Quality; (2) Original Thinking; (3) Technology with Purpose.
- **Reason**: Establishes pillars that competitors cannot easily duplicate.
- **Alternatives Considered**: "Cheapest pricing" or "fastest shipping" claims.
- **Why Alternatives Were Rejected**: Commodity race-to-the-bottom strategies.
- **Benefits**: Defensible premium brand equity.
- **Risks**: Demands uncompromising QA standards.
- **Future Review Criteria**: Product quality audits in UI design.

---

### WD-008: Core Brand Message `[→ product-spec §2.2]`
- **Decision**: *"A company driven by vision, innovation, and quality."*
- **Reason**: Concise, memorable anchor for all marketing and metadata.
- **Alternatives Considered**: Jargon-heavy tech slogans.
- **Why Alternatives Were Rejected**: Hard to understand and quickly dated.
- **Benefits**: High clarity and broad resonance.
- **Risks**: Must be substantiated with real product evidence.
- **Future Review Criteria**: Brand alignment checks during copywriting reviews.

---

### WD-007: Website Narrative Framework `[→ product-spec §2.1]`
- **Decision**: Sequence: `Vision` → `Founder` → `SamJuniors` → `Products` → `Customer Trust` → `Future Vision` → `Join the Journey`.
- **Reason**: Builds emotional connection and credibility before presenting offerings and asks.
- **Alternatives Considered**: Feature-first catalog, Reverse chronological blog.
- **Why Alternatives Were Rejected**: Lacks narrative structure and emotional hook.
- **Benefits**: Consistent user journey across all touchpoints.
- **Risks**: Pacing must sustain visitor attention.
- **Future Review Criteria**: User session length and narrative drop-off rates.

---

### WD-006: Website Success Criteria `[→ product-spec §1.7]`
- **Decision**: Priority: 1. Brand Recognition, 2. Product Adoption & Sales, 3. Founder Recognition, 4. Media Recognition, 5. Community Growth, 6. Investor Interest, 7. Business Partnerships, 8. Talent Attraction.
- **Reason**: Focuses initial launch on market awareness and product traction.
- **Alternatives Considered**: Revenue-only prioritization, Traffic-only prioritization.
- **Why Alternatives Were Rejected**: Fails to build lasting institutional brand value.
- **Benefits**: Balanced evaluation matrix.
- **Risks**: Metrics must be instrumented cleanly in analytics setup.
- **Future Review Criteria**: Quarterly analytics review.

---

### WD-005: Website Scope `[→ product-spec §1.6]`
- **Decision**: Must Have (Home, About, Founder, Products, AI/Lumora, Portfolio, Testimonials, Contact, Support, Privacy, Legal); Nice to Have (Community); Future (Research, Blog, Events, IR, Partners, Public Roadmap, Labs).
- **Reason**: Enforces disciplined delivery of essential core before expanding.
- **Alternatives Considered**: Launching all 18 pages simultaneously.
- **Why Alternatives Were Rejected**: Causes timeline delays and incomplete content.
- **Benefits**: Fast time-to-market with pristine quality.
- **Risks**: Clear communication of future roadmap needed.
- **Future Review Criteria**: Post-launch evaluation for activating secondary tiers.

---

### WD-004: Brand Positioning `[→ product-spec §1.5]`
- **Decision**: Cultivate visitor impression of extraordinary founder vision, top global innovation, premium craftsmanship, high trust, and building the future.
- **Reason**: Differentiates SamJuniors from incremental tool builders.
- **Alternatives Considered**: Feature-centric utility positioning.
- **Why Alternatives Were Rejected**: Commoditizes the brand.
- **Benefits**: Premium valuation, talent attraction, customer loyalty.
- **Risks**: High expectations require continuous proof points.
- **Future Review Criteria**: Brand recall and sentiment analysis.

---

### WD-003: Brand Personality `[→ product-spec §1.4]`
- **Decision**: Innovative, Professional, Premium, Reliable, Creative.
- **Reason**: Balances bleeding-edge technological excitement with unshakeable enterprise reliability.
- **Alternatives Considered**: Casual/playful startup tone, Ultra-formal conservative enterprise tone.
- **Why Alternatives Were Rejected**: Casual harms credibility with investors; ultra-formal bores students.
- **Benefits**: Cohesive emotional resonance across diverse demographics.
- **Risks**: Requires nuanced execution across copy and design tokens.
- **Future Review Criteria**: User sentiment audits in UI design.

---

### WD-002: Primary Audience Priority `[→ product-spec §1.3]`
- **Decision**: Priority: 1. Students, 2. Investors/Partners, 3. Parents, 4. Institutions, 5. Businesses, 6. Developers, 7. General Public, 8. Media, 9. Job Seekers.
- **Reason**: Reflects core mission of empowering learners while building strategic capital and institutional relationships.
- **Alternatives Considered**: Investor-first hierarchy, Enterprise-only B2B focus.
- **Why Alternatives Were Rejected**: Alienates the primary student and creator user base.
- **Benefits**: Clear guidance for CTA prioritization and narrative focus.
- **Risks**: Lower-tier audiences still need dedicated entry points.
- **Future Review Criteria**: Audience traffic and conversion telemetry.

---

### WD-001: Website Vision & Objectives `[→ product-spec §1.1]`
- **Decision**: Primary Objectives: (1) Position SamJuniors as world-class tech company; (2) Build long-term trust/credibility; (3) Showcase complete ecosystem; (4) Enable product discovery/sales. Requirements: Customer testimonials and dedicated Founder page.
- **Reason**: Establishes global positioning and commercial foundation for digital touchpoints.
- **Alternatives Considered**: Developer-only documentation portal, Pure corporate brochure.
- **Why Alternatives Were Rejected**: Fails to represent the breadth of the ecosystem or inspire students and partners.
- **Benefits**: Comprehensive alignment across institutional, commercial, and visionary goals.
- **Risks**: High scope requires disciplined progressive disclosure.
- **Future Review Criteria**: Annual review against company milestone progression.
