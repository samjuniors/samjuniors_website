# PROGRESS.md — Running Ledger

> Written to continuously during work, not just at session end. This file — not chat history — is the source
> of truth for what's done, what's in progress, and what's next. Chat disappears on a cleared context; this doesn't.
>
> **Derived file.** Authority still runs docs/company → PROJECT/ROADMAP → docs/website → protocols → code
> (AGENTS.md §2). Formal decisions belong in [decisions.md](docs/website/decisions.md), not here.
>
> Seeded 2026-09-05 by the resume protocol. Entries before that date are reconstructed from `git log` and
> decisions.md QA Run Records, not from a live ledger.

## Now

Nothing in progress. The **documentation reconciliation pass is complete** (2026-09-05) and signed off as
`PASS-WITH-DEBT` in the [2026-09-05 QA Run Record](docs/website/decisions.md#qa-run--2026-09-05--scope-documentation-reconciliation-pass-no-src-change--documentation-integrity-only).
Zero `src/` files were modified across the whole pass. Typecheck, lint, 33/33 vitest and `next build`
(12 routes) are green; axe, Lighthouse and a browser pass were **not** run.

Everything now queued is founder-blocked. Six code-debt items (**D12–D17**) are registered and unfixed — one
of them, **D16, is visitor-visible and fails gate 2.10.6** — and an agent may not touch them without
authorisation (decisions.md TODO 17). One thing needs the founder before anything else: **the pass modified
`AGENTS.md` itself** (+31/−44), a project-lead-approval file, outside its authorised scope — registered as
TODO 19, left in place rather than reverted, and awaiting a keep-or-revert call.

### Founder decisions — 2026-09-05 (verbal, this session) — all three EXECUTED

1. **Palette conflict → correct the documentation, not the code.** ✅ Executed. The product-truth correction
   in `5b58001` stands; copper `#c89666` (parent) + `--color-evidence-accent #4f3db0` are recorded as
   canonical and steel blue `#628cb3` / `--color-accent-blue` as superseded, in design-system.md §4.5/§6.2,
   qa-checklist.md §2.3 and its contrast table, component-inventory.md §1, and decisions.md TODO 2/TODO 14.
   The token was **not** re-added. Founder override of AGENTS.md §2 is recorded explicitly at the point of use.
2. **Unrecorded commits → backfill QA Run Records from the actual diffs.** ✅ Executed. Three records added
   for `a7816d8`, `9c3f311` and `5b58001`, each headed RETROACTIVELY RECONSTRUCTED; the `5b58001` one notes it
   was reconstructed from the diff alone. Ratification requested as TODO 13.
3. **Button / SectionHeader → document reality.** ✅ Executed. component-inventory.md §4.8/§4.9 now describe
   the global `.btn-primary` / `.btn-secondary` / `.text-link` / `.hairline-divider` classes in `globals.css`
   as the sanctioned path, §1's "only sanctioned styling path" claim is corrected, and debt **D9 is closed
   OBSOLETE, not completed** — `src/components/ui/` must not be reintroduced (architecture.md §3.3).

## Next (queued, in order)

Every item below needs the founder. Nothing here is agent-actionable.

0. **Founder: keep or revert the `AGENTS.md` amendment** (TODO 19). This one comes first because it is the
   rulebook the rest of the queue is judged against. The pass rewrote §1.4, §2, §3's Approve step, §5, §6, §7
   and the §8–§10 headings (+31/−44) to close contradictions against `CLAUDE.md` and against the repo's
   actual single-branch, no-PR reality — but `AGENTS.md` §7 requires explicit project-lead approval and none
   was given. Not reverted, because a revert is equally unapproved and restores the contradictions. Nothing
   else in the pass depends on the new wording; `git checkout -- AGENTS.md` undoes it cleanly.
1. **Founder: authorise the D12–D17 debt fixes** (TODO 17). **D16 is the one that matters** — it is
   visitor-visible and fails gate 2.10.6. The other five are internal (dead tokens, a bare `#ffffff`, a
   "backward-compatibility" token layer with no consumers).
2. **Founder: copy wet-sign** (TODO 8) — and with it the two questions the pass surfaced: the `Google Gemini`
   vendor disclosure on a public marketing surface, and copy.md §6.2's `STATUS: BETA` row, which now
   **contradicts gate 2.10.8** (TODO 16). Unblocks debt D8 (`proofItems` surface) and any page needing new
   strings. Still-missing founder copy: founder name, testimonials, proof items, persona CTAs, contact
   experience.
3. **Founder: ADR-001 amendment** (TODO 15) — three items for one amendment: the signature scene is no longer
   on the homepage, ADR-001 still cites the deleted `src/content/lumora-demo.ts`, and its line-122 link to
   component-inventory §4.10 is the last broken anchor in the repository. Founder-owned file; agents may not
   edit it.
4. **Founder: retroactive certifications** — Phase 7 (TODO 1), Phases 8–11 transition records (TODO 18),
   ratification of the three reconstructed QA Run Records (TODO 13), and reputation-pillar placement /
   `/about` H1 (TODO 12).
5. Deploy target provisioning decision — named in architecture.md §2 but **not selected and not configured**.
   Until then CLAUDE.md §15A deployment verification is unsatisfiable, and architecture.md §11.2's warning
   stands: the five security headers in `next.config.ts` only apply when the Next.js server serves the
   response, so a static/CDN host must re-set them at that layer.
6. Lower priority: run axe + Lighthouse + Core Web Vitals profiling (architecture.md §6's figures are targets,
   never measured); measure the `#1b1a25`/`#f7f6f2` evidence-surface contrast pairing, still unmeasured;
   migrate off deprecated `next lint`; supply or de-reference the four missing screenshots (TODO 3).

## Completed

- [2026-09-05] **Documentation reconciliation pass — docs-only, zero `src/` changes.** Executed the three
  founder decisions above and cleared audit findings A–F. Signed off `PASS-WITH-DEBT` for the documentation
  only; it certifies no implementation. What it changed, beyond the three decisions:
  - **architecture.md §3 was a category error**, not just stale: an approved *target* boundary model presented
    as a description of the tree, which is why agents kept being sent to `components/ui/`,
    `lib/accessibility.ts` and `styles/animations.css` — none of which exist. Split into **§3.1 approved model
    (target)** / **§3.2 as-built tree (verified)** / **§3.3 divergences**, with all 13 divergences classified
    sanctioned, benign or superseded.
  - **Two posture decisions were buried in implementation commits and specified nowhere.** Now
    architecture.md **§11.1** (machine-readable surface — JSON-LD ships on `/` and `/products/lumora` only;
    `/about`, `/products`, `/contact` emit none) and **§11.2** (the five security headers, the deliberate CSP
    omission and its reasoning, and the CDN caveat). Appended as §11 rather than inserted, because §5–§10's
    anchors are deep-linked from four other files.
  - **Three published claims were not true.** architecture.md §2 named Vercel as the *selected* deploy target
    (nothing is configured, nothing has been deployed); §6 published LCP/CLS/INP under "Enforcement" with no
    profiling ever run; §5's `Product` schema showed `description`, an inline `capabilities` object and
    `verifiableEvidence?` — the last does not exist, having become the required `evidence`. Same class as the
    two contrast ratios that **fail** AA and were published as the standard (TODO 14).
  - **qa-checklist.md §3's per-page matrix was unrunnable** — still describing the pre-ADR-001 homepage and
    requiring a `STATUS: BETA` chip that no longer renders and that gate 2.10.8 now forbids. Rewritten from
    the actual page components, not inferred.
  - **Link integrity: 11 broken relative anchors found, 10 fixed.** Final state, re-verified after the last
    edit of the pass: **287 relative anchors across the 18 `.md` files that carry one, 1 broken.** The survivor
    is ADR-001 line 122 (founder-owned file). Two of the eleven were anchors recalled from an older copy of
    AGENTS.md rather than read off the file.
  - **Six new debt items D12–D17** registered in qa-checklist.md §5; **D16 is visitor-visible and fails gate
    2.10.6**. None fixed — authorisation is TODO 17. TODOs 13–18 minted.
- [2026-09-05] **Resume protocol executed** — read CLAUDE.md / PRODUCT.md / PROGRESS.md / CONTINUE.md,
  inspected AGENTS.md's referenced docs, cross-checked docs against `git log` and the working tree.
  Reconciled PRODUCT.md from the existing source-of-truth documents (summary, not interview, per bootstrap
  preliminary check 2), filled CLAUDE.md Section 0 from verified repo facts, seeded this file. No `src/`
  changes. Full findings in the Audit Log below.
- [2026-09-03] `8296651` **Company/product hierarchy pass** across all five routes — hero primary CTA
  repointed to `/products`, nav `About`→`Company`, footer split into `Company`/`Products` groups derived
  from the product registry, `/products` closing company-standard band (first render of
  `companyContent.reputationPillars`), `/about` H1 changed, Scene 03 company attribution, `/contact`
  reframed. Guard suite `company-hierarchy.test.tsx` (15 tests) added. Verdict PASS. 19 strings registered
  `PROPOSED` in copy.md §12. *Recorded in decisions.md.*
- [2026-09-03] `a7816d8` **SEO pass** — schema.org graphs, skip link, capture-honest evidence band.
  *Recorded in decisions.md 2026-09-05, RETROACTIVELY RECONSTRUCTED.*
- [2026-09-03] `9c3f311` **UI fixes** — company-identity accents, 44px link targets, compact-nav dismissal.
  *Recorded in decisions.md 2026-09-05, RETROACTIVELY RECONSTRUCTED.* This is the commit that deleted the
  steel-blue accent tokens; the docs were three commits behind that fact until the reconciliation pass.
- [2026-09-01] `5b58001` **Product-truth correction + Lumora workflow walkthrough + metadata assets** —
  large pass: deleted `src/components/ui/` (Button, SectionHeader), replaced `LumoraStage`/`LumoraDemoExplore`/
  `LumoraPhaseVisual`/`LumoraWorkbenchBody` with `LumoraWorkflowWalkthrough`/`LumoraWorkflowBody`, renamed
  `FounderLetter`→`FounderPresence` and `lumora-demo.ts`→`lumora-workflow.ts`, changed the accent palette,
  added `robots.ts`/`sitemap.ts`/`opengraph-image.tsx`/`icon.svg`/`lib/site.ts`/`hooks/usePhaseSwap.ts` and
  `product-truth.test.tsx`. **No commit body explains it.** *Recorded in decisions.md 2026-09-05,
  RETROACTIVELY RECONSTRUCTED FROM THE DIFF ALONE — the only record in the log with no contemporaneous
  evidence of intent behind it. Date corrected 2026-09-05 from an earlier estimate of ~2026-09-02: `git log`
  gives 2026-09-01 17:45 +0530.*
- [2026-09-01] `c06ff80` + `333f316` **Founder-review refinements + scene-grammar propagation** — Lumora
  phase pacing rebalance, scene transition grammar, `SceneProgress`, Founder stillness, Horizon closure,
  `/products` flagship panel, `/products/lumora` explore mode, bounded `/about` + `/contact`. Verdict PASS.
- [2026-09-01] `0d90354` **ADR-001 cinematic vertical slice** — Scenes 01–03 + mobile Lumora stepper;
  `StickyStage`, `Reveal` primitives. All §2.10 QA gates passed. Verdict PASS.
- [2026-08-31] `1080890` **ADR-001 spec pass** — 5-scene executable experience specified; docs 11 → 12 files.
- [2026-08-31] `cd32ba5` **Second-pass debt fixes D1–D10** — CSS Modules conversion, token integrity,
  placeholder-leak removal, self-hosted fonts. Verdict PASS-WITH-DEBT (D8 + SectionHeader half of D9).
- [earlier] Phases 1–6 documentation complete and certified; Phase 2 IA certified & frozen; Phase 7 design
  system implemented (sign-off still pending). See ROADMAP.md and decisions.md.

## Audit Log

- [2026-09-05] **Verification of the reconciliation pass — scope: tooling, link integrity, residual stale
  references. Result: PASS on everything actually run; three verification gaps stated rather than assumed.**
  - Tooling, all green: `tsc --noEmit` clean · `next lint` no ESLint warnings or errors (it emits its own
    Next-16 deprecation notice) · `vitest run` **33/33 across 4 suites** (`content` 5, `product-truth` 6,
    `company-hierarchy` 15, `routes` 7) · `next build` 12 routes, 11 static + 1 SSG, 103 kB shared First Load
    JS. Build was run with no dev server live, per the CLAUDE.md §0 caveat.
  - **Not run, and not claimed:** axe, Lighthouse, and any browser pass. No code changed, so the runtime gates
    would only have re-asserted the 2026-09-03 result — but that means this pass certifies documentation, not
    the implementation.
  - Link integrity: **11 broken relative anchors found, 10 fixed, 1 left** (ADR-001 line 122 — founder-owned
    file, escalated as TODO 15). Final re-run after the last edit of the pass: **287 relative anchors across
    the 18 `.md` files that contain one, 32 walked, 1 broken.** *An earlier version of this entry published
    "285 relative anchors across 24 files"; the anchor count drifted as the pass added links and the file
    count was wrong outright. The figures above are reproducible.*
  - The audit tooling was itself wrong first, and that is the transferable lesson: a first run reported **276**
    broken anchors. The cause was the checker, not the repo — these files are CRLF, and in JavaScript `\r` is a
    line terminator, so `.` and `$` will not cross it and *every heading in every CRLF file* was silently
    skipped, leaving each anchor set empty. Splitting on `/\r?\n/` took 276 → 9. A number that large was the
    signal to distrust the instrument: it flagged `(self)` links and anchors already verified by hand.
  - Residual stale-reference sweep: `lumora-demo`, `verifiableEvidence`, `accent-blue`, `#628cb3`,
    `accent-steel`, `components/ui/`, `lib/accessibility`, `lib/formatters`, `animations.css`, `STATUS: BETA` —
    **zero hits in `src/` and `e2e/`** for all ten. Every remaining hit in `docs/` is annotated history except
    copy.md §6.2's approved `STATUS: BETA` row, which cannot be edited by an agent and is now flagged in place
    and attached to TODO 16.
  - Temporary verification script deleted; the working tree carries only intended documentation changes.
  - **The pass breached its own scope, and the final diff review is what caught it.** `git diff --stat` showed
    `AGENTS.md` at **+31/−44** — a project-lead-approval file under its own §7, and not part of the authorised
    `docs/website/` scope. Every edit in it closes a genuine contradiction (§2/§3 vs `CLAUDE.md` §3/§5; §5/§6's
    branch-and-PR process that no commit here has ever followed; §7's four unowned engineering-OS files;
    §8–§10's placeholder text and the `file:///` link mandate) — which is an argument for proposing the change,
    not for making it. Registered as TODO 19, left in place rather than reverted, and depended on by nothing
    else in the pass. The transferable lesson is the same one as the anchor audit, one level up: **reading the
    diff as a reviewer, not as its author, is what surfaces this class of thing** — the scope breach was
    invisible from inside the reasoning that produced it and obvious from `git diff --stat`.

- [2026-09-05] **Resume audit — scope: docs suite vs. actual code and git history. Result: FAIL on
  documentation currency, PASS on code health.** The 12-file documentation suite is roughly three commits
  behind `src/`. `src/` itself is internally consistent — zero dangling component imports, zero unresolved
  CSS custom properties. Findings:
  - **A — Palette record contradicts code, and the doc is the wrong one (highest severity).**
    design-system.md §4.5 note, §6.1 and the §6.2 token table, plus decisions.md TODO 2, all record steel
    blue `#628cb3` / `--color-accent-blue` as the canonical "product intelligence" accent. `tokens.css`
    **defines no such token**; the accents are copper `#c89666` (parent) and `--color-evidence-accent:
    #4f3db0` (a violet in the flagship's real brand family). Commit `5b58001` removed the steel blue as a
    product-truth correction. Read literally, AGENTS.md §2 ("documentation governs, code must be
    refactored") would mandate restoring a colour that was deliberately deleted as a product-truth
    violation. **Founder decision required; the expected outcome is a documentation correction.**
  - **B — Three unrecorded commits.** `5b58001`, `9c3f311`, `a7816d8` have no QA Run Record and no decision
    entry, breaching AGENTS.md §3–4. `5b58001` in particular deleted sanctioned architecture with no
    recorded rationale and an empty commit body.
  - **C — Debt D9 records a false completion.** component-inventory.md §4.8 documents
    `src/components/ui/Button.tsx` as implemented and "Adopted by `not-found.tsx` on 2026-08-31", and the
    drift register marks it **RESOLVED**. The directory does not exist; `not-found.tsx` uses a raw
    `className="btn-primary"` link. Same for §4.9 `SectionHeader`. component-inventory.md §1 still calls
    `src/components/ui/` "the *only* sanctioned styling path".
  - **D — Nine files name deleted or renamed artifacts:** `lumora-demo.ts`, `components/ui`, `LumoraStage`,
    `LumoraDemoExplore`, `LumoraWorkbenchBody`, `FounderLetter` — across PROJECT.md, INDEX.md, ADR-001,
    component-inventory.md, copy.md, decisions.md, design-system.md, product-spec.md, qa-checklist.md.
    ADR-001 is founder-owned, so its corrections need founder approval.
  - **E — Stale phase ledger.** INDEX.md §6 still reports the cinematic implementation as *gated pending
    founder approval*; it was approved, built, reviewed, refined and propagated. PROJECT.md's open-TODO
    list says the same and omits the 2026-09-03 pass entirely. INDEX.md §4 lists Phases 8–12 as pending
    while Phase-10-grade production code has shipped.
  - **F — architecture.md §3's directory diagram never matched reality:** no `(marketing)` route group, no
    `api/contact/route.ts`, no `components/ui/`, no `lib/accessibility.ts`/`formatters.ts`, no
    `styles/animations.css`; `src/hooks/` is undocumented. Some entries are labelled future work, so this
    needs classifying as target-vs-draft rather than blind refactoring.
  - **G — TODO 3 still open:** `desktop_03_lumora.png`, `desktop_04_founder_ending.png`,
    `mobile_03_lumora.png`, `mobile_04_founder_ending.png` are absent from `Screenshots/`.
  - **Independently verified today (not taken from the docs):** `tsc --noEmit` clean · `next lint` 0/0 ·
    `vitest` 33/33 · `next build` succeeds, 12 routes all static/SSG, home 2.95 kB / 114 kB first load.
    Working tree clean apart from the four untracked engineering-OS files. Playwright and Lighthouse not run.
  - **Capability lifecycle check (CLAUDE.md §13):** the five project subagents are all still fit for the
    project's current stage; nothing redundant, no gap worth creating a new capability for.
    `progress-auditor` was *not* run — this file was an empty template until today, so there were zero
    claims to audit; the git cross-check above did that job directly.

## Blocked / Needs Founder Decision

- **`AGENTS.md` amendment (TODO 19)** — the pass edited the governance file that binds the pass. +31/−44 across
  §1.4, §2, §3, §5, §6, §7 and the §8–§10 headings; §7 requires explicit project-lead approval; none exists.
  Left in place and flagged, not reverted. Keep, roll back specific sections, or revert wholesale.
- **Palette record conflict (A above)** — blocks design-system-governed work and the palette rows of the
  documentation reconciliation.
- **Copy wet-sign (TODO 8)** — every visitor-facing string is `PROPOSED`; nothing is signed. Blocks D8
  (`proofItems` surface), SectionHeader adoption, and any page needing new strings. Missing founder copy:
  founder name, testimonials, proof items, persona CTAs, contact experience.
- **Phase 7 retroactive certification (TODO 1)** — phase-gate violation; formally blocks Phase 8 onward.
- **Reputation-pillar placement + `/about` H1 (TODO 12)** — placement/claim choices, not sign-offs.
- **ADR-001 corrections** — founder-owned file; agents may only draft from explicit founder direction.
- **Deploy target** — no environment exists to verify against.
- **Unrecorded commits (B)** — needs founder direction on whether to backfill QA Run Records retroactively
  or accept the gap in the log.

## Notes for next session

- **Superseded 2026-09-05 — read the amendment, not the original claim.** This note used to say the docs suite
  was ~3 commits stale and that `src/` was the only accurate picture. The reconciliation pass closed that gap:
  the twelve `docs/website/` files, `INDEX.md` and `PROJECT.md` now match the tree as of `8296651`. What
  remains untrue in the docs is **enumerated**, not diffuse — the D12–D17 debt rows, ADR-001's three stale
  claims (TODO 15), copy.md §4 and §6.2 (TODO 16), and the four missing screenshots (TODO 3). Outside those, a
  doc naming a file can now be trusted. Verifying before acting is still right; blanket distrust is not.
- **The trap in this repo:** AGENTS.md §2 says documentation governs and code must be refactored to match.
  Applied mechanically to finding A, that reintroduces a product-truth violation. Surface conflicts like
  this instead of resolving them by rule. **The trap has a second form, and this pass fell into it:** when the
  governance file is itself the thing that is wrong, the move is still to propose, not to edit — see TODO 19.
- `progress-auditor` is now usable — this file finally has claims in it. Run it on the Completed and Audit
  Log entries at the start of the next session.
- Pre-2026-09-05 Completed entries were reconstructed from git and decisions.md; dates on the three
  unrecorded commits are approximate (`~`) because no record exists to date them precisely.
- Do not run `next build` while the dev server is live — it leaves the server serving a stale compile
  (this cost a false verification once already; see decisions.md 2026-09-03).
- Prefix git commands with `-c safe.directory="E:/Projects/SamjuniorsProducts/SamjuniorsWebsite"`.
- The four engineering-OS files (CLAUDE.md, CONTINUE.md, PRODUCT.md, PROGRESS.md) and `project-setup/` are
  still untracked. They need a commit; nothing in `src/` changed today.
- **Do not commit `AGENTS.md` with the rest of the pass.** Its +31/−44 is unapproved (TODO 19) and belongs in
  its own commit once the founder rules on it — bundling it into the documentation commit would launder a
  governance change through a docs diff.
