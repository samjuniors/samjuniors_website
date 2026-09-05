# SamJuniors Website — Approved Copy (Literal Text)

> **The literal words that appear on the website.** This document holds the exact visitor-facing strings — headlines, leads, section copy, capability text, labels, CTAs, metadata — nothing paraphrased, nothing summarized.
>
> **SPEC vs COPY split (binding)**: [product-spec.md](product-spec.md) says what each page and section needs to *communicate* (intent, audience, depth, proof requirements). This document contains the *actual words*. An agent implementing a page reads the spec section for intent and this document for the strings. **If a string is not in this document, it does not ship.** Agents never write new visitor-facing copy; they propose it (status `PROPOSED`) and only the founder promotes it to `APPROVED`.
>
> **Authority**: `APPROVED` strings here are founder-wet-signed and outrank any conflicting string in `src/`. Implementation copy in `src/content/` and `src/app/` must match this document exactly; if they drift, this document governs and code is refactored. Nothing here may contradict [docs/company/foundation.md](../company/foundation.md) (founder truth).
>
> **How to use**: For any single page task, read the spec section + this file's matching section + the relevant [component-inventory.md](component-inventory.md) entry. Do not read [decisions.md](decisions.md) or [docs/company/foundation.md](../company/foundation.md) unless the task concerns brand identity or historical rationale.

---

## 0. Copy Status Model & Sign-Off Protocol

Every string in this document carries exactly one status:

| Status | Meaning | Who can set it | May render to visitors? |
| :--- | :--- | :--- | :---: |
| **APPROVED** | Founder wet-signed. Literal, final, immutable. | **Founder only** | ✅ Yes |
| **PROPOSED** | Drafted strictly from approved docs/shipped prototype; awaiting founder signature. Ships only while no `APPROVED` alternative exists, and must be listed in the [sign-off table](#02-sign-off-record). | Agents may draft; founder approves | ⚠️ Provisionally (until review) |
| **PENDING FOUNDER COPY** | A real copy gap. No acceptable founder-approved text exists. The current placeholder string is recorded for traceability. | **Founder only** | ❌ No — replace before launch |
| **SUPERSEDED** | *(added 2026-09-05)* Recorded here as history, replaced by a later section. Retained rather than deleted so the record of what was once specified survives. | Agents may mark, citing the superseding section | ❌ No — implementing it is a regression |

**Rules**

1. `APPROVED` lines are immutable for agents. To change one, a founder edits this document and the change propagates to `src/` in the same task.
2. Zero-Fabrication standard applies to copy absolutely: no invented testimonials, metrics, partners, awards, user counts, or product claims ([product-spec.md §4.1](product-spec.md#41-core-content-strategy-principles), Zero Fabricated Evidence).
3. Placeholders during drafting are written exactly as `[PENDING VERIFIED DATA]` (per the content-strategy prohibition) — never as fake finished copy.
4. Internal process language (phase names, decision IDs, integration-boundary notes, `isPlaceholder` markers) never appears in copy ([INDEX.md §3](INDEX.md#3-core-implementation-rule-internal-knowledge--website-content)). Current violations are listed in [§9 Known Leaks](#9-known-leaks--strings-that-must-not-ship).
5. On sign-off, the founder initials the row in [§0.2](#02-sign-off-record) and updates the string's status inline.

### 0.2 Sign-Off Record

| # | Section | Status | Founder Sign-Off | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 1 | §1 Global chrome (header / nav / footer / metadata / 404) | PROPOSED | — | Derived from navigation.ts + company.ts + layout.tsx |
| 2 | §2 Home — Hero | PROPOSED | — | Shipped in Phase 6/7 prototype |
| 3 | §3 Home — Building Philosophy (thesis) | PROPOSED | — | Cycle/filters text is foundation-derived |
| 4 | §4 Home — Lumora Stage (workbench) | **SUPERSEDED** | — | ⚠️ **Do not implement.** Specifies an "academic operating system" the product is not; ≥11 strings are blocked by `product-truth.test.tsx`. Retained as history; replaced by §13 |
| 5 | §5 Home — Founder letter + horizon | PROPOSED | — | Founder name missing — see §10 |
| 6 | §6 /products + /products/lumora | PROPOSED | — | Descriptions marked `isPlaceholder: false` in code. ⚠️ Parity vs `products.ts` not re-audited after `5b58001` — see §13.5 |
| 7 | §7 /about | PROPOSED | — | All strings foundation-derived |
| 8 | §8 /contact | PROPOSED | — | Contains one internal leak to replace (§9) |
| 9 | §9–10 Proof & testimonial layer | **PENDING FOUNDER COPY** | — | Zero-Fabrication: only founder can supply |
| 10 | §12 Company/product hierarchy pass (2026-09-03) | PROPOSED | — | Nav, footer groups, hero topline + CTA pair, Scene 03 attribution, `/products` frame + company-standard band, `/about` header + products bridge, `/contact` gateway body. Supersedes the affected rows in §1.1, §1.2, §2, §4, §6.1, §7, §8 |
| 11 | §13 Lumora workflow walkthrough — product-truth correction (2026-09-01, registered retroactively 2026-09-05) | PROPOSED | — | **24 strings, 4 of them factual product claims and 2 naming a third-party vendor (`Google Gemini`).** Provenance is the Lumora product repository via `products.ts`; only the founder can confirm it holds. Supersedes §4 entirely |

---

## 1. Global Chrome (Header, Navigation, Footer, Metadata, 404)

### 1.1 Header
> [!IMPORTANT]
> Nav link 2 is superseded by [§12](#12-companyproduct-hierarchy-pass--2026-09-03-proposed) (`About` → `Company`). The header CTA row below is pre-existing drift from an earlier pass (the shipped label is `Get in touch`) and was left as recorded — it is outside the hierarchy pass's scope.

| Element | Literal text | Source |
| :--- | :--- | :--- |
| Brand name | `SamJuniors` | company.ts (foundation-derived) |
| Brand link aria-label | `SamJuniors Home` | Header.tsx |
| Nav link 1 | `Products` → `/products` | navigation.ts |
| Nav link 2 | `About` → `/about` | navigation.ts |
| Nav link 3 | `Contact` → `/contact` | navigation.ts |
| Header CTA | `Explore Ecosystem` → `/products` | navigation.ts |

### 1.2 Footer
> [!IMPORTANT]
> The three flat footer links are superseded by the labelled groups in [§12](#12-companyproduct-hierarchy-pass--2026-09-03-proposed). Their recorded labels below are also pre-existing drift: what actually shipped was `Products` / `About` / `Contact`, not `Products Portfolio` / `Company Foundation` / `Inquiries`. The brand, tagline, copyright and legal-entity rows are unchanged.

| Element | Literal text | Source |
| :--- | :--- | :--- |
| Brand name | `SamJuniors` | company.ts |
| Tagline | `Turning ambitious ideas into real, useful technology.` | company.ts (foundation-derived) |
| Footer link 1 | `Products Portfolio` → `/products` | navigation.ts |
| Footer link 2 | `Company Foundation` → `/about` | navigation.ts |
| Footer link 3 | `Inquiries` → `/contact` | navigation.ts |
| Copyright line | `© {current year} SamJuniors. All rights reserved.` | Footer.tsx (dynamic year) |
| Legal entity line | `SamJuniors Technology Ecosystem` | company.ts |

### 1.3 Document Metadata (titles & descriptions)
| Route | Title | Description |
| :--- | :--- | :--- |
| Root default | `SamJuniors — Technology Ecosystem` | `SamJuniors aims to build an AI-first technology ecosystem, turning ambitious ideas into real products that solve meaningful problems and create impact.` |
| Title template | `%s | SamJuniors` | — |
| `/about` | `Company Foundation & Philosophy` | *(inherits root description)* |
| `/products` | `Products Portfolio` | `Explore the expanding portfolio of AI-first products and platforms developed by SamJuniors.` |
| `/products/lumora` | `Lumora — AI-native Academic Operating System.` | *(product shortDescription, §6.2)* |
| Unknown `/products/{slug}` | `Product Not Found` | — |

### 1.4 404 Page
| Element | Literal text |
| :--- | :--- |
| Eyebrow | `404 // ROUTE_NOT_FOUND` |
| H1 | `Page Not Found` |
| Body | `The requested resource or product entity does not exist in the active ecosystem.` |
| CTA button | `Return to Home` → `/` |

### 1.5 Scene Wayfinding (`SceneProgress`, homepage only)
UI chrome for the persistent scene rail (design-system §6.8.6). The visible numerals reuse the unified scene indices `01`–`05`; the only new strings are the two template labels below (functional wayfinding chrome, not narrative copy).
| Element | Literal text | Source |
| :--- | :--- | :--- |
| Nav aria-label | `Scene Progress` | SceneProgress.tsx |
| Entry aria-label (×5) | `Scene 01` … `Scene 05` (template: `Scene ` + index) | SceneProgress.tsx |
| Entry visible text | `01` … `05` (aria-hidden — the numeral is decorative; the label carries meaning) | page.tsx `SCENES` |

---

## 2. Home — Hero (`HeroSection`)

> [!IMPORTANT]
> The topline, primary-CTA and secondary-link rows are superseded by [§12](#12-companyproduct-hierarchy-pass--2026-09-03-proposed). The CTA rows below are additionally pre-existing drift: what shipped before that pass was `See what Lumora does` → `/products/lumora` and `Why we build this way →` → `#thesis`, not the labels recorded here. The H1, lead and tenets are unchanged.

| Element | Literal text | Status |
| :--- | :--- | :--- |
| Topline (with status pulse) | `Parent Technology Ecosystem` | PROPOSED |
| H1 | `We see what could be next — `***`and build the technology to reach it.`*** *(second phrase italic)* | PROPOSED |
| Lead | `SamJuniors bridges visionary computing concepts and production-grade systems. We engineer enduring software, intelligent platforms, and human interfaces designed for sovereign control and long-term utility.` | PROPOSED |
| Primary CTA | `Experience Lumora` + `↓` → `#lumora` | PROPOSED |
| Secondary link | `Our Building Philosophy →` → `#thesis` | PROPOSED |

**Institutional Building Tenets** (row aria-label: `Institutional Building Tenets`)

| # | Tenet title | Tenet body |
| :--- | :--- | :--- |
| 01 | `Durable Compounding` | `Systems designed to accumulate value over decades, deliberately rejecting disposable software cycles.` |
| 02 | `Grounded Intelligence` | `Machine intelligence engineered to expand human comprehension, decision quality, and creative autonomy.` |
| 03 | `Local Sovereignty` | `Zero cloud telemetry, retention, or platform lock-in on private coursework, research, and personal data.` |

---

## 3. Home — Building Philosophy (`ThesisSection`, anchor `#thesis`)

| Element | Literal text |
| :--- | :--- |
| Section label row | `02` / `Building Philosophy` |
| H2 | `Technology should compound in value over decades, not fade with the `***`next cycle`***`.` |
| Lead | `We deliberately avoid disposable wrappers and speculative hype. True technological institutions are built on deep utility, sovereign human control, and rigorous engineering craft.` |

### 3.1 The Building Cycle (left column; column label `The Building Cycle`, list aria-label `The SamJuniors Building Cycle`)
Cycle strings are foundation-derived (founder building cycle, verbatim) — **highest-confidence copy in this file**:

| Stage | Title | Description |
| :--- | :--- | :--- |
| 01 | `See What Could Be Next` | `Anticipate future technological shifts and human requirements.` |
| 02 | `Identify Meaningful Opportunity` | `Filter through our core criteria to find fundamental, structural problems.` |
| 03 | `Build It Seriously` | `Engineer robust, production-grade systems with zero superficial wrappers.` |
| 04 | `Make It Genuinely Useful` | `Eliminate deep workflow friction to deliver measurable daily utility.` |
| 05 | `Learn From Real People` | `Validate through authentic usage, understanding human needs in practice.` |
| 06 | `Evolve Continuously` | `Refine and compound platform value over decades of sustained craft.` |

### 3.2 Core Convictions (right column; column label `Core Convictions`)

| Heading | Body |
| :--- | :--- |
| `Durable Compounding vs. Ephemeral Novelty` | `Every system we engineer is designed to eliminate deep structural friction in professional and academic workflows. Rather than packaging superficial API wrappers, we build foundational tools that grow more dependable with everyday use.` |
| `Human Mastery Over Passive Automation` | `Computing should expand human creative mastery, not diminish it. We construct instruments that give creators, researchers, and thinkers sovereign precision, speed, and deeper comprehension—keeping the human at the center of every meaningful decision.` |
| `Local Sovereignty & Data Ownership` | `Private intellect, research notes, and creative assets belong entirely on the user's machine. Our platforms prioritize client-side execution and open standards, ensuring total privacy, zero telemetry retention, and lifetime ownership of your work.` |

---

## 4. Home — Lumora Stage (`LumoraStage`, anchor `#lumora`)

<!-- Heading text deliberately unchanged 2026-09-05: ADR-001 (founder-owned, not agent-editable),
     design-system.md, product-spec.md and component-inventory.md all deep-link to this heading's
     generated anchor. Renaming it would break four cross-references to fix one stale word. The
     supersession is carried by the CAUTION block below instead. -->



> [!CAUTION]
> **SUPERSEDED 2026-09-05 — DO NOT IMPLEMENT §4.1–§4.5. This section specifies a product that Lumora is not.**
>
> Commit `5b58001` (2026-09-01) replaced this entire experience as a **product-truth correction**, verified
> against the Lumora repository itself. Lumora is an **AI-native academic assessment & progression
> platform**: teachers define rubrics, submissions are evaluated against them by a hosted model, results are
> confidence-banded, and **no grade reaches a student without a teacher releasing it**. It is *not* an
> "academic operating system", a degree planner, a scheduling optimiser, or a local-only privacy product.
>
> The strings in §4.1–§4.5 below describe that second thing. They are now **guarded against by an executable
> test** — [`src/app/product-truth.test.tsx`](../../src/app/product-truth.test.tsx) fails the build on
> `academic operating system`, `syllabus`, `air-gapped`, `privacy vault`, `zero private data`, `zero cloud`,
> `sovereign`, `context ingest`, `decision support`, `workload collision`, `deep-work sprint` and 14 more
> terms, checking **both rendered output and source text**. At least 11 of the strings tabled below contain a
> forbidden term. Implementing this section would fail CI.
>
> **This is the copy analogue of the palette conflict** ([design-system.md §4.5](design-system.md#45-visual-language--aesthetic-synthesis)):
> read literally, [AGENTS.md §2](../../AGENTS.md#2-source-of-truth-hierarchy)'s "documentation governs, code
> must be refactored" would mandate reintroducing a misrepresentation of a real product. It does not apply
> here. **The code is right and this section is the stale artifact.**
>
> Tables are **retained unedited as history** — §11 makes approved strings founder-editable only, and this
> section's rows carry `APPROVED`-lineage status. What ships today is registered in
> **[§13](#13-lumora-workflow-walkthrough--product-truth-correction-2026-09-01-proposed)** as `PROPOSED`,
> awaiting the founder's wet-sign. Until then §13 governs the code and this section governs nothing.
>
> *Structural note: the walkthrough no longer renders on the homepage at all — see [§13.0](#130-where-this-now-renders).
> The "Home —" in this heading is itself stale.*

> [!NOTE]
> **Original source-of-truth note (2026-08-31, [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md))**: these strings live in `src/content/lumora-demo.ts` (the demonstration content contract), imported by `LumoraStage.tsx` — they were extracted verbatim from the component (string-set parity verified). No literal text changed in the extraction; this table remains the copy authority per §0.2/§11. *Retained verbatim as the record of what was true on 2026-08-31. Both files named here were deleted by `5b58001`; `lumora-workflow.ts` and `LumoraWorkflowWalkthrough.tsx` replaced them with different content. The "copy authority" claim in this note is what §13 supersedes.*

| Element | Literal text |
| :--- | :--- |
| Section label row | `03` / `Flagship Expression` |
| Company attribution *(added 2026-09-03, [§12](#12-companyproduct-hierarchy-pass--2026-09-03-proposed) row 7)* | `The first product SamJuniors has taken to beta.` |
| H2 | `Lumora — AI-Native Academic Operating System` |
| Lead | `Our first major flagship platform. Lumora turns fragmented coursework, research deadlines, syllabi, and degree requirements into continuous understanding, grounded advisory guidance, and focused action.` |
| Workbench window title | `◈` + `lumora_os // academic_intelligence_loop` |
| Left panel header / badge | `Academic Context` / `Resolved` |
| Right panel header / badge | `Diagnostics` / `Grounded` |
| Step controls | `←` (aria-label `Previous Step`) · indicator `1 / 4` · `Next Step →` (aria-label `Next Step`) |
| Tab labels (displayed) | `Context Ingest` · `Understanding` · `Decision Support` · `Action Workspace` (tab numbers `01`–`04` render separately) |

### 4.1 Step 01 — Context Ingest
| Slot | Literal text |
| :--- | :--- |
| Badge | `Phase 01 // Fragmented Academic Input` |
| Headline | `Fragmented Academic Signals Converge` |
| Narrative | `Course syllabi, research milestones, exam dates, and degree requirements exist in isolated silos. Lumora continuously unifies these signals into an active academic state.` |
| Sources list | `CS 3410: Distributed Systems` / `Course Syllabus & Labs` / `Ingested` · `MATH 4210: Nonlinear Optimization` / `Problem Sets & Exams` / `Ingested` · `Senior Thesis: Consensus Protocols` / `Department Milestone Track` / `Active` · `Degree Audit: Core Requirements` / `Institutional Record` / `Synced` |
| HUD | `Raw Signals Unified` · `4 Disconnected Syllabi & Schedules Resolved` |
| Center stage title/subtitle | `Continuous Academic Ingest` *(subsumed by HUD)* |
| Visual card | header `Resolved Academic Signal` / `Active Stream`; rows: `CS 3410` — `Distributed Systems · Lab 3 & Consensus Readings`; `MATH 4210` — `Nonlinear Optimization · Convex Analysis P-Set`; `Thesis` — `Formal Verification of Leader Election Lemmas` |
| Diagnostics | `Ingested Signals` — `4 Courses · 18 Credit Units` · `Raw Deadlines` — `14 Deliverables across 6 Weeks` · `Signal Coherence` — `Resolving Course Interdependencies` · `Privacy Vault` — `Local Air-Gapped Student Record` |
| Status bar | `Context Engine: Ingest Complete` · `Zero Private Data Sent to Cloud` · `Proceed to Situation Understanding →` |

### 4.2 Step 02 — Understanding
| Slot | Literal text |
| :--- | :--- |
| Badge | `Phase 02 // Situation Analysis` |
| Headline | `Lumora Synthesizes the Situation` |
| Narrative | `Rather than passively displaying deadlines, Lumora models workload pressure and cognitive collision points weeks before they occur.` |
| Sources list | `Workload Diagnostic: Week 8` / `Critical Collision Forecast` / `⚠ Collision` · `Distributed Systems Exam` / `Midterm 2 · 30% Weight` / `High Stake` · `Thesis Chapter 3 Proofs` / `Advisor Milestone Deliverable` / `Due W8` · `Optimization Problem Set 4` / `Theoretical Derivations` / `Due W8` |
| HUD | `Collision Detected` · `3 Major Deliverables Cluster within a 48-Hour Window` |
| Center stage title | `Week 8 Academic Collision` |
| Visual card | header `Academic Trajectory Forecast` / `Friction Point`; rows: `Week 07` — `Standard Pacing · 2 Problem Sets · Normal Load`; `Week 08` — `⚠ Midterm Exam 2 + Thesis Chapter 3 Draft due simultaneously`; `Week 09` — `Elective Sequencing Window · Thesis Peer Review` |
| Diagnostics | `Detected Friction` — `Severe Workload Spike in Week 8` · `Cognitive Risk` — `High probability of rushed exam prep` · `Prerequisite Balance` — `Theory & Systems colliding simultaneously` · `Analysis Mode` — `Contextual Trajectory Simulation` |
| Status bar | `Diagnostic: Friction Point Pinpointed` · `Local Contextual Synthesis` · `Proceed to Decision Support →` |

### 4.3 Step 03 — Decision Support
| Slot | Literal text |
| :--- | :--- |
| Badge | `Phase 03 // Grounded Guidance` |
| Headline | `Explainable Advice Before Crisis Points` |
| Narrative | `Lumora generates grounded, transparent recommendations to rebalance study time, protect deep comprehension, and relieve peak stress.` |
| Sources list | `Advisory: Shift Thesis Proofs` / `Pacing Optimization` / `Recommended` · `Exam Review Window` / `+6.5 Hours Preserved` / `Protected` · `Office Hours Synthesis` / `3 Targeted Proof Questions` / `Prepared` · `Term Roadmap Impact` / `Zero Delay on Final Defense` / `Validated` |
| HUD | `Grounded Recommendation` · `Preserves 6.5 Hours of Dedicated Midterm Review` |
| Center stage title | `Advance Thesis Proofing to Week 7` |
| Advisory card | pills `Mentor Recommendation` · `High Impact (+6.5h)`; H4 `Shift Thesis Chapter 3 Proofs 4 Days Forward`; body `By finalizing formal consensus proofs in Week 7 instead of Week 8, you open 6.5 hours of calm, high-retention review for the Distributed Systems midterm without compromising thesis depth.`; tags `✓ Student-Validated Strategy` · `Explainable Rationale` |
| Diagnostics | `Strategic Recommendation` — `Front-load Chapter 3 proof milestones` · `Preserved Deep Work` — `+6.5 Hours for Systems revision` · `Reasoning Rationale` — `Eliminates peak panic without debt` · `Human Autonomy` — `100% Student-Decided Strategy` |
| Status bar | `Mentor Engine: Rationale Verified` · `Explainable Algorithmic Output` · `Proceed to Focus Action →` |

### 4.4 Step 04 — Action Workspace
| Slot | Literal text |
| :--- | :--- |
| Badge | `Phase 04 // Human Action & Focus` |
| Headline | `Direct Movement into Deep Execution` |
| Narrative | `Once approved, Lumora transitions the plan directly into an active, distraction-free study sprint with linked primary references and private notes.` |
| Sources list | `Sprint: Consensus Lemmas` / `Deep Work Block // 90m` / `In Progress` · `Primary Source: Raft Spec` / `Ongaro & Ousterhout (2014)` / `Attached` · `Problem Set Practice Lab` / `Scheduled for Tomorrow` / `Synced` · `Student Notes Vault` / `Encrypted & Local` / `Secured` |
| HUD | `Focus Sprint Active` · `42m Elapsed in 90m Protected Deep-Work Block` |
| Center stage title | `Distributed Consensus Proof Session` |
| Workspace card | timer `Focus Sprint // 42:18 Elapsed` · track `Senior Thesis / Proof Analysis`; label `Active Objective`; objective `Verify Raft leader election safety lemmas against edge-case network partitions.`; tags `Ref: Ongaro & Ousterhout (2014)` · `Notes: Local & Air-Gapped` |
| Diagnostics | `Active Session` — `Proof verification for Section 5.2` · `Linked References` — `Ongaro & Ousterhout (2014) §5.2` · `Distraction State` — `Shielded Workspace Active` · `Progress Tracking` — `Milestone 2.1 on Schedule` |
| Status bar | `Workspace: Deep Execution Active` · `All Notes Stored on Client Hardware` · `Cycle Complete // Autonomous Control` |

### 4.5 Philosophy Bridge & Ledger (below the workbench)
| Element | Literal text |
| :--- | :--- |
| Bridge eyebrow | `The Purpose of an Academic OS` |
| Bridge quote | `"Traditional institutions provide immense knowledge; Lumora provides the operating system to master it. By resolving fragmented records into grounded clarity, we give builders, researchers, and students sovereign agency over their intellectual trajectory."` |
| Ledger row 1 | `Context Convergence` — `Continuous synthesis of syllabi, milestones, and exams into a single active timeline.` |
| Ledger row 2 | `Grounded Guidance` — `Explainable recommendations that pinpoint cognitive friction weeks before deadlines collide.` |
| Ledger row 3 | `Sovereign Action` — `Distraction-free focus execution with zero cloud telemetry or private data extraction.` |

> [!NOTE]
> The workbench narrative strings (course names, week numbers, hour counts, the Raft citation) are **illustrative demonstration data** deliberately composed for the interactive exhibit — they are stage fiction, not product claims. They may ship because they visibly demonstrate a concept rather than assert traction; the Zero-Fabrication rule forbids only *credibility claims* (users, metrics, testimonials, partners), which these are not. Founder should still review whether the illustrative scenario reads as intended.

---

## 5. Home — Founder Letter & Horizon

### 5.1 Founder Letter (`FounderPresence`)
| Element | Literal text |
| :--- | :--- |
| Section label row | `04` / `Perspective` |
| Quote (blockquote) | `"We founded SamJuniors because software should be an `***`extension of human mastery`***`, not a substitute for it. The instruments we build are meant to disappear into your hands — fast, dependable, and sovereign."` |
| Signer name | `Founder & Leadership` **← PENDING FOUNDER COPY: real founder name not yet supplied** |
| Signer title | `SamJuniors Technology Ecosystem` |
| Date stamp | `Est. 2026` |

### 5.2 Horizon (`HorizonSection`, section aria-label `Ecosystem and Dialogue`)
| Column | Element | Literal text |
| :--- | :--- | :--- |
| 1 | Label row | `05` / `Ecosystem` |
| 1 | H2 | `An Expanding Ecosystem` |
| 1 | Body | `SamJuniors is built as an enduring technology institution. As we expand into new computing domains, every initiative shares our foundational architecture: client-side privacy, deterministic execution, and open standards.` |
| 1 | Action link | `Explore Portfolio Architecture →` → `/products` |
| 2 | Label row | `06` / `Collaboration` |
| 2 | H2 | `Initiate Dialogue` |
| 2 | Body | `We welcome conversations with engineering partners, researchers, and creators who share our conviction in enduring computing craft and sovereign tools.` |
| 2 | Action link | `Connect With Leadership →` → `/contact` |

---

## 6. Products Pages

### 6.1 `/products` — Portfolio Index

> [!IMPORTANT]
> The eyebrow, lead and flagship-chip rows are superseded by [§12](#12-companyproduct-hierarchy-pass--2026-09-03-proposed), which also adds a company-standard closing band not recorded below. The H1 row is pre-existing drift from an earlier pass (the shipped H1 is `Products`) and is now registered in §12 for accuracy.

| Element | Literal text |
| :--- | :--- |
| Eyebrow | `Portfolio Architecture` |
| H1 | `Product Ecosystem` |
| Lead | `Expressions of SamJuniors engineering, designed for lasting utility, human agency, and systemic scale.` |
| Card status chip | `BETA` *(uppercased lifecycle status of the product)* |
| Flagship chip | `FLAGSHIP` |
| Card H2 | `Lumora` |
| Card description | `Transforms fragmented coursework, research, deadlines, and degree milestones into coherent academic understanding and actionable guidance.` |
| Card link | `Explore Lumora →` → `/products/lumora` *(pattern: `Explore {Product Name} →`)* |

### 6.2 `/products/lumora` — Flagship Detail

> [!WARNING]
> **Four of the rows below no longer describe the shipped page (verified against `src/app/products/[slug]/page.tsx` on 2026-09-05).** `5b58001` reworked this surface and the table was not updated. Observed today: the badge row reads `Flagship product` + `product.statusLabel` (`Pre-launch · Phase 1 core workflow beta · in active development`), **not** `FLAGSHIP PLATFORM` and **not** `STATUS: BETA`; the capability heading is `Implemented and observable in the product`, not `Capability Architecture`; the evidence band is titled `Lumora as it stands today`; the roadmap band is `Named, so nobody has to guess`; and the page closes on `Lumora is not generally available yet`. The breadcrumb and H1 rows are still accurate.
>
> **The `STATUS: BETA` row is not merely stale — it is now prohibited.** Gate **2.10.8** in [qa-checklist.md §2.10](qa-checklist.md#210-motion--interaction-safety-adr-001-implementation-gates) forbids that chip, because a bare `BETA` overstates a pre-launch product. Do not restore it from this table.
>
> These rows are **approved copy**, so an agent may not rewrite them — only the founder can. This is the concrete result of the parity audit [§13.5](#135-what-this-section-does-not-cover) recorded as unrun; the findings are now attached to [decisions.md](decisions.md) TODO 16 for founder resolution. Anything not listed above remains unaudited.

| Element | Literal text |
| :--- | :--- |
| Breadcrumbs | `SamJuniors` (`/`) / `Products` (`/products`) / `Lumora` |
| Flagship badge | `FLAGSHIP PLATFORM` *(non-flagship products show `ECOSYSTEM VENTURE`)* |
| Status badge | `STATUS: BETA` *(pattern: `STATUS: {lifecycle status} uppercased`)* |
| H1 | `Lumora` |
| Tagline (lead) | `AI-native Academic Operating System.` |
| Capabilities H2 | `Capability Architecture` |
| Footer line | `An expression of ` + link `SamJuniors Ecosystem` (`/`) |
| Footer link | `← View All Products` → `/products` |

**Capability cards** (from `src/content/products.ts`, all `isPlaceholder: false`):

| Capability | Literal description |
| :--- | :--- |
| `Academic Context Synthesis` | `Unifies syllabi, course records, research tracks, and milestones into an active student context.` |
| `Intelligent Decision Guidance` | `Provides grounded academic advice, scheduling optimization, and degree trajectory planning.` |
| `Focused Action Workspace` | `Turns synthesized guidance directly into structured study sprints and research execution.` |

**Rendered on the product detail page since the 2026-08-31 second pass** (debt D7 — the surface sits below the capability grid; the card carries only these registered strings, no section label was invented). **Since the 2026-09-01 propagation pass, the `demo`-type evidence renders as the interactive exhibit** (ADR-001 H4 explore mode): the title/description strings above become the exhibit's framing (heading + lead + `STATUS:` label), wrapped around the same workbench demonstration as homepage Scene 03 — same registered §4 strings inside, tap-driven only. The static card form remains for non-demo evidence types:

| Evidence item | Literal text |
| :--- | :--- |
| `Academic Intelligence Demonstration` (type `demo`) | `Interactive conceptual demonstration of academic context synthesis and decision guidance.` |

---

## 7. About Page (`/about`)

> [!IMPORTANT]
> The eyebrow and H1 rows are superseded by [§12](#12-companyproduct-hierarchy-pass--2026-09-03-proposed), which also adds a closing products bridge section not recorded below. The lead, filters and cycle are unchanged.

| Element | Literal text |
| :--- | :--- |
| Eyebrow | `Company Foundation` |
| H1 | `How We Build` |
| Lead | `SamJuniors aims to build an AI-first technology ecosystem, turning ambitious ideas into real products that solve meaningful problems and create impact.` *(company purpose, foundation-derived)* |
| Section H2 (1) | `The Four Foundational Filters` |

**Filter cards** (numbers `01`–`04`, foundation-derived):

| Filter | Literal description |
| :--- | :--- |
| `Innovation` | `Does this advance technological capability or solve problems in a fundamentally better way?` |
| `User Value` | `Does this deliver tangible, measurable utility to real people?` |
| `Impact` | `Does this create meaningful, positive change in its target domain?` |
| `Long-Term Vision` | `Does this align with and reinforce the enduring technology ecosystem?` |

| Element | Literal text |
| :--- | :--- |
| Section H2 (2) | `Iterative Building Cycle` |

**Cycle cards** (chip `STAGE 01`…`STAGE 06`; strings identical to [§3.1](#31-the-building-cycle-left-column-column-label-the-building-cycle-list-aria-label-the-samjuniors-building-cycle) — single source `companyContent.buildingCycle`).

> [!NOTE]
> The reputation pillars (`Exceptional AI Innovation` · `Strong Engineering & Execution` · `Enduring Product Ecosystem`) got their destination on 2026-09-03: they render as the closing band of `/products` under the heading `What SamJuniors sets out to be known for` (see [§12](#12-companyproduct-hierarchy-pass--2026-09-03-proposed)). The strings themselves are unchanged foundation truth from `company.ts`; only the surface is new. They remain unrendered on `/about`.

---

## 8. Contact Page (`/contact`)

> [!IMPORTANT]
> The card-body row is superseded by [§12](#12-companyproduct-hierarchy-pass--2026-09-03-proposed). The eyebrow, H1, lead, card H2 and email rows are unchanged, and the PENDING FOUNDER COPY note below still stands — §12 reframed the existing sentence, it did not build the intent-routing model.

| Element | Literal text |
| :--- | :--- |
| Eyebrow | `Intent-Aligned Dialogue` |
| H1 | `Connect with SamJuniors` |
| Lead | `For inquiries regarding institutional partnership, technical research, or ecosystem collaboration.` |
| Card H2 | `Ecosystem Communications Gateway` |
| Card body | `Direct communication channels are established based on visitor intent.` (the internal process sentence `(Server Action backend integration boundary prepared).` was removed from code in the 2026-08-31 second pass — debt D2; any richer routing copy remains PENDING FOUNDER COPY, see §9/§10) |
| Email (mono) | `contact@samjuniors.com` |

**PENDING FOUNDER COPY — contact experience**: the current page is a static gateway card. The spec's intent-aligned dialogue model ([product-spec.md §6.2](product-spec.md#62-persona-goals-key-questions--success-criteria)) expects intent-routed pathways (institutional partnership / technical research / ecosystem collaboration). The founder must decide and supply: the real contact channel(s), any inquiry routing labels, and whether an inquiry form (already architected as an API boundary in [architecture.md §7](architecture.md#7-future-full-stack--backend-boundaries)) should ship. No agent-drafted form copy ships without founder sign-off.

---

## 9. Known Leaks — Strings That Must Not Ship

These strings currently exist in shipped code and violate the Internal Knowledge ≠ Website Content rule ([INDEX.md §3](INDEX.md#3-core-implementation-rule-internal-knowledge--website-content)). Each has a replacement status:

| # | String | Location | Violation | Replacement |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `[STRUCTURAL CAPABILITY CONTAINER]` | `src/app/products/[slug]/page.tsx` (renders when `cap.isPlaceholder === true`) | Internal structural label shipped to visitors | **REMOVED from code 2026-08-31** (debt D1) — label deleted and placeholder-flagged capabilities gated out of render; no replacement string needed. |
| 2 | `(Server Action backend integration boundary prepared).` | `src/app/contact/page.tsx` card body | Internal engineering note in visitor copy | **REMOVED from code 2026-08-31** (debt D2) — no invented replacement; the shipped card body is the registered first sentence alone. Richer routing copy remains PENDING FOUNDER COPY — see §8 |
| 3 | `STATUS: {status}` badge, `FLAGSHIP PLATFORM` / `ECOSYSTEM VENTURE` chips, `404 // ROUTE_NOT_FOUND` | product detail, 404 page | *Borderline* — system-flavored labels, currently accepted as the terminal/technical voice; founder may keep or humanize | Founder decision at sign-off |

## 10. Placeholder & Missing-Copy Registry (PENDING FOUNDER COPY)

Everything the site needs but no founder-approved words exist for yet. **Agents must not fill these with invented copy.** Each entry records what ships today so the gap is explicit, not hidden.

| # | Gap | What ships today | Needed for |
| :--- | :--- | :--- | :--- |
| 1 | **Founder identity** — name, role, one-line bio | `Founder & Leadership` + `Est. 2026` (no name anywhere) | Founder letter signature (§5.1); spec's dedicated Founder page & journey ([product-spec.md §1.2](product-spec.md#12-additional-requirements)) |
| 2 | **Testimonials / People proof** | Nothing (correctly absent per Zero Fabrication) | Social Proof step 8 of the certified homepage narrative ([product-spec.md §3.4](product-spec.md#34-homepage-narrative-architecture-10-steps)) |
| 3 | **Product proof items** | The two placeholder-flagged items (`Functional Proof Demonstration`, `Empirical Verification`) were **removed from `proof.ts` on 2026-08-31** (debt D3 — founder copy never arrived, placeholders may not ship). Only the real `builder` item remains in the data layer, still unrendered (debt D8). | Contextual Proof System ([product-spec.md §4.5](product-spec.md#45-contextual-proof-system)) — founder supplies verified evidence, then it is wired to a proof surface |
| 4 | **Future roadmap copy** | Nothing (Honest Roadmap step 9 not yet implemented) | Homepage steps 7–10 ([product-spec.md §3.4](product-spec.md#34-homepage-narrative-architecture-10-steps)) |
| 5 | **Persona-specific CTAs** | Shipped: `Experience Lumora`, `Explore Ecosystem`, `Explore Portfolio Architecture →`, `Connect With Leadership →`, `Our Building Philosophy →`. Not written: `Partner with SamJuniors`, `Explore Solutions`, `View Technical Architecture`, `Review Founder Journey`, `Join Student Community`, `Download Academic Overview`, `Explore Developer Hub`, `Contact Enterprise Team` (spec CTA labels from [product-spec.md §6.2](product-spec.md#62-persona-goals-key-questions--success-criteria)) | Intent-based conversion & Join-the-Journey step 10 |
| 6 | **Contact experience copy** | Static gateway card + email (§8) | Intent-aligned dialogue ([§8](#8-contact-page-contact)) |
| 7 | **Privacy / Legal / Support pages** | Nothing (in scope per [product-spec.md §1.6](product-spec.md#16-website-scope) Must Have; no routes exist) | Core initial scope |
| 8 | **Lumora demo/beta access path** | `Experience Lumora` scrolls to the homepage stage; no real demo/beta destination exists | Student success criterion "initiates a demo/beta signup within 2 interactions" ([product-spec.md §6.2](product-spec.md#62-persona-goals-key-questions--success-criteria)) |

## 11. Change Protocol

1. **Founder edits** an `APPROVED` string or promotes a `PROPOSED`/`PENDING` string → update this document (status + sign-off table §0.2) → update `src/content/` / component copy in the same change → run the copy-parity check in [qa-checklist.md](qa-checklist.md) (shipped strings must match this document).
2. **Agent proposes** new copy: draft it into the relevant section with status `PROPOSED`, citing the spec requirement it fulfills; founder approves or rewrites.
3. Copy disputes resolve by authority: [docs/company/](../company/) founder truth → this document's `APPROVED` strings → `PROPOSED` strings → code.

---

## 12. Company/Product Hierarchy Pass — 2026-09-03 (PROPOSED)

Register of every visitor-facing string this pass changed or added. The pass asked one question on each of the five routes — *if Lumora were temporarily removed, would this still clearly be a SamJuniors company website?* — and changed only what made the answer no.

Every string below is **PROPOSED** ([§0.2](#02-sign-off-record) row 10). None of it is invented positioning: company facts come from [docs/company/foundation.md](../company/foundation.md) via `companyContent`, and every product fact is read from the registry (`flagship.name`, `flagship.category`, `flagship.slug`) rather than written down.

**Out of scope, explicitly.** Pre-existing drift between this document and shipped code was not touched — the §1.1 header CTA (`Get in touch` ships, `Explore Ecosystem` is recorded), the §6.1 H1 (`Products` ships, `Product Ecosystem` is recorded), and the homepage scene copy rewritten by earlier passes. This section registers its own strings only.

### 12.1 Navigation & footer — `src/content/navigation.ts`

| # | Element | Was | Now | Supersedes |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Primary nav link 2 | `About` | `Company` | §1.1 nav link 2 |
| 2 | Footer group 1 label | *(no groups: three flat links)* | `Company` — containing `About`, `Contact` | §1.2 footer links 1–3 |
| 3 | Footer group 2 label | *(no groups: three flat links)* | `Products` — containing `All products`, then one entry per registered product | §1.2 footer links 1–3 |

The product entries are `products.map(...)`, so `Lumora` in the footer is the registry's `product.name`, not a copy string: adding a product must never require a navigation edit ([product-spec.md §5.4](product-spec.md#54-multi-product-scalability-rules)).

### 12.2 Homepage — Scene 01 Overture & Scene 03 Lumora

| # | Element | Was | Now | Supersedes |
| :--- | :--- | :--- | :--- | :--- |
| 4 | Hero topline | `Parent Technology Ecosystem` | `AI-first technology company` | §2 topline row; also closes leak #4 below |
| 5 | Hero primary CTA | `See what Lumora does` → `/products/lumora` | `See what SamJuniors builds` → `/products` | §2 primary CTA row |
| 6 | Hero secondary link | `Why we build this way →` → `#thesis` | `Lumora, our flagship platform →` → `/products/lumora` | §2 secondary link row |
| 7 | Scene 03 company attribution *(new line, between the label row and the H2)* | — | `The first product SamJuniors has taken to beta.` | new row in the §4 header table |

`Parent Technology Ecosystem` was internal governance vocabulary on the most-read line of the site ([INDEX.md §3](INDEX.md#3-core-implementation-rule-internal-knowledge--website-content)); the replacement is the company's own self-description from foundation truth. The CTA swap is the pass's single most consequential change — the site's strongest action was product-scoped, so removing Lumora removed the primary ask.

### 12.3 `/products` — Portfolio Index

| # | Element | Was | Now | Supersedes |
| :--- | :--- | :--- | :--- | :--- |
| 8 | Eyebrow | `What we build` | `SamJuniors portfolio` | §6.1 eyebrow |
| 9 | Lead | `One product is in beta today. SamJuniors would rather present a single real platform honestly than a portfolio page of intentions.` | `SamJuniors builds production software for the places where professional and academic work still breaks down. One platform is in beta today, and it is held to the same standard as everything that follows it — we would rather present one real product honestly than a portfolio of intentions.` | §6.1 lead |
| 10 | Flagship chip | `Flagship` | `Flagship product` | §6.1 flagship chip |
| 11 | Closing band H2 *(new section)* | — | `What SamJuniors sets out to be known for` | new |
| 12 | Closing band items *(new)* | — | `Exceptional AI Innovation` · `Strong Engineering & Execution` · `Enduring Product Ecosystem`, numbered `01`–`03` | new surface for existing `companyContent.reputationPillars` — resolves the §7 note |
| 13 | Closing band link *(new)* | — | `How SamJuniors decides what to build →` → `/about` | new |

The three pillars are the founder's own reputation goals from foundation truth, rendered for the first time; the pass gave them a destination rather than writing new company claims. The band is what makes this page survive the removal test — without it, `/products` is a header and one product panel.

### 12.4 `/about` — Company Page

| # | Element | Was | Now | Supersedes |
| :--- | :--- | :--- | :--- | :--- |
| 14 | Eyebrow | `Company Foundation` | `Company` | §7 eyebrow |
| 15 | H1 | `How We Build` | `What SamJuniors is, and how it builds` | §7 H1 |
| 16 | Bridge H2 *(new section)* | — | `What this has produced so far` | new |
| 17 | Bridge body *(new)* | — | `One platform has come through the filters and the cycle and is in beta today: Lumora, an AI-native Academic Operating System. It is the first product SamJuniors has taken this far, and for now it is the entire portfolio — the filters are meant to reject far more than they pass.` | new |
| 18 | Bridge link *(new)* | — | `See the SamJuniors portfolio →` → `/products` | new |

`Company Foundation` was internal vocabulary (leak #5 below). The H1 changed because `How We Build` is a process manifesto: it never says what SamJuniors *is*, which is the one thing the company page owes a visitor. In row 17 `Lumora` and `AI-native Academic Operating System` are `flagship.name` and `flagship.category` read from the registry — the category is not lowercased, which would corrupt `AI-native`. The link deliberately points at `/products`, not `/products/lumora`: the visitor should meet the portfolio before the product.

### 12.5 `/contact` — Gateway Card

| # | Element | Was | Now | Supersedes |
| :--- | :--- | :--- | :--- | :--- |
| 19 | Card body | `Tell us who you teach or what you build, and what you want to do with Lumora. Concrete beats formal — it gets you a more useful reply.` | `Tell us who you teach or what you build, and what you want from SamJuniors — Lumora access, a pilot, or engineering work. Concrete beats formal; it gets you a more useful reply.` | §8 card body |

Contact funnelled every inquiry through the product. The replacement keeps product access as one of three named reasons to write, so a partnership or engineering inquiry is no longer phrased as a Lumora inquiry. This does **not** implement the intent-routing model — §8's PENDING FOUNDER COPY entry still stands.

### 12.6 Internal-vocabulary leaks closed by this pass

Continues [§9](#9-known-leaks--strings-that-must-not-ship)'s numbering. Both were governance vocabulary from [docs/](../) reaching visitor surfaces:

| # | String | Location | Violation | Resolution |
| :--- | :--- | :--- | :--- | :--- |
| 4 | `Parent Technology Ecosystem` | homepage hero topline | `docs/` calls SamJuniors the parent company; a visitor has no second company to relate it to, and the line never said what SamJuniors is | **REMOVED 2026-09-03** → row 4 above |
| 5 | `Company Foundation` | `/about` eyebrow | `foundation.md` is an internal document name, not a visitor-facing section label | **REMOVED 2026-09-03** → row 14 above |

A regression guard now fails the build if either phrase (or `parent company`, `parent-company`, `decision id`, `COMPANY-001`) appears in the rendered output of any of the five routes or the footer: `src/app/company-hierarchy.test.tsx`. The bare word *phase* is deliberately not on that list — the product's registered status label legitimately contains `Phase 1 core workflow beta`.

### 12.7 Founder decisions to confirm at sign-off

Two judgement calls were made rather than deferred, because the pass could not otherwise close. Both are reversible in one edit:

1. **Reputation pillars placed on `/products`, not `/about`.** They read as the standard the portfolio is judged against, which is why they close the portfolio page. The §7 note that offered them to `/about` is now resolved this way. If the founder wants them on the company page instead, rows 11–13 move and `/products` needs a different closing beat — the page cannot go back to header-plus-one-panel without failing the removal test.
2. **`/about` H1 replaced.** `How We Build` is a process manifesto: it never says what SamJuniors *is*, which is the one thing the company page owes a visitor. The replacement keeps the method clause and adds the missing subject. Rule 1 of [§0](#0-copy-status-model--sign-off-protocol) is intact — every string this pass touched was `PROPOSED`, never `APPROVED`, so no immutable copy was overwritten. This is nevertheless the most substantive rewording in the pass and the one most worth the founder's eye.

### 12.8 Not changed, deliberately

The five-scene homepage order (frozen by [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md), and already company-first), every scene's body copy, the `/products` H1 (`Products` — the company statement went into the eyebrow and lead instead), the whole of `/products/lumora` (breadcrumbs already open on `SamJuniors`, the chip already reads `Flagship product`, the footer line already attributes the product to the company), and the structured-data graph (`publisher` + `BreadcrumbList` already encode the hierarchy). No new products, no roadmap language, no future-product hints.

---

## 13. Lumora Workflow Walkthrough — Product-Truth Correction (2026-09-01, PROPOSED)

> **Retroactive registration, written 2026-09-05.** These strings shipped in commit `5b58001` on 2026-09-01
> and were never registered here, breaching [AGENTS.md §1.4](../../AGENTS.md#1-core-directives--behavioral-guardrails)'s
> copy rule. This section closes that gap. Registering them does not approve them — every row is `PROPOSED`
> ([§0.2](#02-sign-off-record) row 11) and needs the founder's eye, because unlike §4's exhibit fiction
> **these are factual claims about a real product**.
>
> **Not invented.** [`src/content/products.ts`](../../src/content/products.ts) names its own source: *"the
> Lumora product repository (samjuniors/Lumoraglm)… Capabilities listed under `capabilities` are implemented
> and observable in the product today."* Every capability carries `isPlaceholder: false`. The Zero-Fabrication
> rule is satisfied by provenance, not by agent judgement — but the founder is the only one who can confirm
> the provenance holds, and two claims below name a **third party** (`Google Gemini`), which is a disclosure
> decision, not a copy decision.
>
> **What this supersedes:** the whole of [§4](#4-home--lumora-stage-lumorastage-anchor-lumora) (§4.1–§4.5),
> which specified an "academic operating system" that the product is not. §4 was `PROPOSED`, never `APPROVED`,
> so rule 1 of [§0](#0-copy-status-model--sign-off-protocol) is intact — no immutable copy was overwritten,
> and §4's tables are retained unedited as history.

### 13.0 Where this now renders

The four-step walkthrough is **not on the homepage.** This diverges from ADR-001 H4/H5 and from every doc
that still says "Scene 03 sticky reveal, homepage only" — recorded as a finding, not corrected here, because
ADR-001 is founder-owned ([decisions.md](decisions.md) TODO 15).

| Surface | Component | Composition |
| :--- | :--- | :--- |
| `/` Scene 03 | `LumoraFlagship` | Compact statement: eyebrow, company attribution, H2, category + status, lead, the four step labels as a static `<ol>`, the release principle, two CTAs — then one evidence item. No sticky stage. |
| `/products/lumora` | `LumoraWorkflowWalkthrough` | The full four-step sticky walkthrough (desktop scroll-linked · reduced-motion explore · mobile `LumoraMobileStepper`), plus the full evidence band. |

The homepage comment in [`src/app/page.tsx`](../../src/app/page.tsx) states the reason: *"the homepage does
not spend four viewport heights on a single product, which is what keeps this beat inside its share of the
page."* That is a defensible reading of the company-over-product rule — and it is also an ADR-governed
structural change made without a recorded decision. Both facts are true and both belong in the record.



### 13.1 Scene 03 statement — `LumoraFlagship` + `products.ts`

| # | Element | Literal text | Source |
| :--- | :--- | :--- | :--- |
| 1 | Index / eyebrow | `03` / `Flagship product` | component |
| 2 | Company attribution | `The first product SamJuniors has taken to beta.` | §12 row 7 — unchanged, `companyContent.name` interpolated |
| 3 | H2 | `Lumora — assessment the teacher still decides` | `product.name` + component |
| 4 | Category | `AI-native academic assessment & progression platform` | `product.category` |
| 5 | Status | `Pre-launch · Phase 1 core workflow beta · in active development` | `product.statusLabel` — ⚠️ contains the word *Phase*; deliberately allowed, see §12.6 |
| 6 | Lead | `Lumora evaluates student submissions against the teacher’s own rubric, tells the teacher how much to trust each evaluation, and requires an explicit human release before any grade reaches a student.` | `product.shortDescription` |
| 7 | Release principle | `AI recommends. Humans decide. Every grade released to a student requires educator action.` | `LUMORA_PRINCIPLE` — the load-bearing claim of the whole surface |
| 8 | Primary CTA | `How Lumora works` + `→` | component, `.btn-primary` |
| 9 | Secondary CTA | `Talk to us about Lumora →` | component, `.text-link` |
| 10 | Evidence band heading | `What the product actually does today` | component prop |
| 11 | Evidence band intro | `Lumora is in pre-launch beta and in active development. This is what its primary surface does today, verified against the product’s own build and running on seeded demonstration data — not a description of an intended future.` | component prop — the honesty framing that replaces §4's exhibit-fiction note |

### 13.2 The four steps — `products.ts` `workflow[]` (rendered on `/` as a static list)

| # | Order | Label | Summary |
| :--- | :--- | :--- | :--- |
| 12 | `01` | `Submission Intake` | `Course, assignment, and rubric or answer key are defined first. Students submit against that definition.` |
| 13 | `02` | `AI Evaluation` | `Google Gemini evaluates the submission against the teacher’s criteria and proposes a score with rubric-level feedback.` |
| 14 | `03` | `Confidence Triage` | `Each evaluation is banded High, Medium, or Review using calibration from the platform’s own accuracy and override record.` |
| 15 | `04` | `Teacher Review & Release` | `The teacher approves, edits, overrides, re-runs, or returns the work — then releases it. Release is the only path to the student.` |

> **Row 13 names a third-party vendor in visitor-facing copy.** `Google Gemini` appears here and in §13.3
> row 17. Whether SamJuniors discloses its model provider on its own marketing surface is a **founder and
> possibly commercial decision**, not a copy-style one. Flagged rather than resolved.

### 13.3 Walkthrough step detail — `lumora-workflow.ts` (`/products/lumora` only)

Each step renders: `order` / `actor` · `headline` · `narrative` · `decision` · a `detail` definition list ·
`handoff` prefixed by the label `Then`.

#### 13.3.1 Step 01 — `Submission Intake`
| # | Slot | Literal text |
| :--- | :--- | :--- |
| 16 | Actor | `Teacher sets up · student submits` |
| — | Headline | `Work arrives against a rubric, not into a void` |
| — | Narrative | `A teacher defines the course, the assignment, and the rubric or answer key the work will be judged against. Students submit against that definition from a browser or a phone. Nothing is evaluated until there is something concrete to evaluate it against.` |
| — | Detail | `Set up by the teacher` — `Course → assignment → rubric or answer key` · `Submitted by the student` — `Web workspace or mobile submission` · `Grading mode` — `Chosen per assignment, from fully manual to AI-assisted` · `Precondition` — `No evaluation without a rubric or answer key` |
| — | Decision | `The teacher decides what counts as correct before any AI sees the work.` |
| — | Handoff | `Submission queued for evaluation` |

#### 13.3.2 Step 02 — `AI Evaluation`
| # | Slot | Literal text |
| :--- | :--- | :--- |
| 17 | Actor | `Lumora evaluation pipeline` |
| — | Headline | `Evaluated against the teacher’s own criteria` |
| — | Narrative | `The submission is evaluated by Google Gemini against the rubric or answer key the teacher supplied — not against a generic model opinion. Each evaluation produces a proposed score and rubric-level feedback. Jobs that fail are held in a visible dead-letter queue for retry instead of being silently dropped.` |
| — | Detail | `Evaluation engine` — `Google Gemini` · `Graded against` — `The teacher’s rubric or answer key` · `Produces` — `A proposed score and rubric-level feedback` · `Failure handling` — `Dead-letter queue — visible, retryable, never silent` |
| — | Decision | `Output is a proposal. At this point nothing is a grade and nothing is visible to the student.` |
| — | Handoff | `Proposed score passed to triage` |

#### 13.3.3 Step 03 — `Confidence Triage`
| # | Slot | Literal text |
| :--- | :--- | :--- |
| 18 | Actor | `Lumora calibration` |
| — | Headline | `Not all AI output is treated as equally trustworthy` |
| — | Narrative | `Every evaluation is assigned a calibrated confidence band — High, Medium, or Review — so a teacher can see where their attention is actually required. Calibration is derived from the platform’s own record: historical accuracy, how often educators override, rubric quality, and evaluation consistency.` |
| — | Detail | `Bands` — `High · Medium · Review` · `Calibrated from` — `Historical accuracy and educator override frequency` · `Also weighted by` — `Rubric quality and evaluation consistency` · `Purpose` — `Direct the teacher’s attention — never replace it` |
| — | Decision | `Banding routes work to the teacher. It does not grant permission to skip them.` |
| — | Handoff | `Banded queue surfaced to the teacher` |

#### 13.3.4 Step 04 — `Teacher Review & Release`
| # | Slot | Literal text |
| :--- | :--- | :--- |
| 19 | Actor | `Teacher` |
| — | Headline | `No grade reaches a student without a teacher releasing it` |
| — | Narrative | `The teacher works a queue. Each item can be approved, edited, overridden, returned for revision, or re-run. Release is a separate, deliberate action — and only after release does the student see the score and its rubric-level feedback, with progression and mastery updating from there.` |
| — | Detail | `Teacher actions` — `Approve · edit score · edit feedback · override · re-run · return for revision` · `Release` — `An explicit step, separate from evaluation` · `Accountability` — `Every decision written to an immutable audit log` · `Student receives` — `Released score and feedback — then progression updates` |
| — | Decision | `The educator is the release gate. There is no automatic release path.` |
| — | Handoff | `Released to the student · progression and mastery update` |

### 13.4 Walkthrough chrome & accessibility strings

| # | Element | Literal text | Notes |
| :--- | :--- | :--- | :--- |
| 20 | Step-row group label | `Lumora workflow steps` | `aria-label`; same string on desktop `LumoraWorkflowBody` and mobile `LumoraMobileStepper` |
| 21 | Live region | `Step {n} of 4: {label}` | `sr-only`, `aria-live="polite"` — the phase change announcement |
| 22 | Handoff label | `Then` | precedes the handoff line |
| 23 | Step indicator | `{n} / 4` | |
| 24 | Prev / next `aria-label` | `Previous workflow step` / `Next workflow step` | glyphs `←` / `→` are `aria-hidden` |

The prev/next controls use `aria-disabled`, never `disabled`, so keyboard focus is never dropped to `<body>`
at the ends of the range. That is a deliberate accessibility choice recorded in the component and worth
keeping if this copy is ever restructured.

### 13.5 What this section does not cover

`/products/lumora`'s page frame (breadcrumbs, H1, capability grid, roadmap, evidence band) and the
`/products` index are governed by [§6](#6-products-pages) and were separately reworked by `5b58001` —
`products.ts` grew 158 lines in that commit. **A §6-vs-`products.ts` parity audit has not been run** and is
recorded as [decisions.md](decisions.md) TODO 16. Registering §13 closes the walkthrough gap only; it does
not certify the rest of the product surface.
