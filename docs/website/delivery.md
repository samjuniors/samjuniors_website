# SamJuniors Website — Delivery

> **Build order, QA gates, and launch checklist**: the vertical slice validation gate, frontend development protocol, QA & testing standards, launch & deployment procedures, and the phase review & sign-off record protocol.
>
> **Authority**: Sequencing governed by [ROADMAP.md](../../ROADMAP.md) and [INDEX.md](INDEX.md). Design rules and HUMAN-001 tests are governed in [design-system.md](design-system.md). The concrete acceptance criteria that define "done" for every page and component are governed in [qa-checklist.md](qa-checklist.md). Formal decision records live in [decisions.md](decisions.md).

---

## 1. Delivery Lifecycle & Gate Order

```
UI Design (approved) ──> VERTICAL SLICE VALIDATION (mandatory gate) ──> Frontend Development
        ──> QA & Testing ──> Launch
```

- The **Vertical Slice Validation** is a hard gate: failure blocks frontend development until findings are resolved and re-validated.
- QA quality gates must pass with formal sign-off before launch.
- Formal sign-off on the pre-launch checklist is required before production deployment.
- All phase transitions are recorded through the review & sign-off protocol in [§6](#6-phase-review--sign-off-records).

---

## 2. Vertical Slice Validation (Mandatory Quality Gate)

*Validates one representative, end-to-end user experience in full before committing to full-scale frontend implementation, surfacing UX, design, content, technical, and performance risks at the smallest viable scope — before they propagate across the entire frontend build.*

> [!IMPORTANT]
> **FAILURE of the Vertical Slice blocks frontend development.**
> Issues identified during the vertical slice must be resolved and re-validated before full implementation begins.

### 2.1 Sequencing Rule

The Vertical Slice Validation occurs:

**AFTER:**
- UX Principles & User Flows — Approved (see [product-spec.md §6](product-spec.md#6-ux-principles-personas--user-flows))
- Content Strategy — Approved (see [product-spec.md §4](product-spec.md#4-content-strategy--messaging-framework))
- Wireframes — Approved (see [design-system.md §4](design-system.md#4-strategic-design-direction))
- Design System — Approved (see [design-system.md §6](design-system.md#6-design-system-specification))
- UI Design — Initial design approved (see [design-system.md §7](design-system.md#7-ui-design-phase-protocol-phase-8))

**BEFORE:**
- Frontend Development — Full implementation

This is not a soft gate. Frontend development may not begin until the Vertical Slice has passed sign-off.

### 2.2 Proposed Validation Slice

> [!NOTE]
> **Status: PROPOSED** — Subject to formal approval during UI design. The following represents the current recommended slice for stakeholder review.

The proposed representative experience covers the primary visitor journey:

```
Homepage
  → SamJuniors Story Section
  → Lumora Reveal
  → Lumora Exploration
  → Trust & Social Proof Section
  → Primary Call-to-Action
```

This slice is selected because it exercises:
- The brand introduction narrative
- The flagship product reveal
- The trust-building proof elements
- The primary conversion action

It represents the most critical and highest-risk user journey on the site.

### 2.3 Validation Dimensions

The vertical slice must be validated across **all** of the following dimensions. Each dimension requires a documented outcome (Pass / Conditional Pass / Fail) with specific findings.

| # | Dimension | What is Evaluated |
|---|---|---|
| 1 | **UX** | Navigation clarity, progressive disclosure, cognitive load, and visitor journey coherence |
| 2 | **Content** | Message clarity, voice alignment, CTA strength, and content pacing |
| 3 | **Visual Design** | Fidelity to approved UI design, brand coherence, hierarchy, and aesthetic quality |
| 4 | **Interaction** | Hover states, click targets, interaction feedback, and micro-interaction correctness |
| 5 | **Motion** | Animation timing, easing, purpose, performance cost, and accessibility (reduced-motion) |
| 6 | **Responsive Behaviour** | Correct reflow and layout integrity across mobile, tablet, and desktop breakpoints |
| 7 | **Accessibility** | WCAG 2.1 AA/AAA: contrast, keyboard navigation, screen reader, focus management |
| 8 | **Performance** | Core Web Vitals (LCP, CLS, FID/INP), Lighthouse score against defined budgets |
| 9 | **Frontend Architecture** | Component structure soundness, scalability, code quality, and build pipeline health |
| 10 | **Analytics / Event Model** | Correct instrumentation of tracking events where analytics requirements are defined |

### 2.4 Deliverables

When this phase activates, the following documents will be produced:

| Document | Description |
|---|---|
| `vs-scope.md` | Formal scope definition of the validated slice (approved) |
| `vs-validation-matrix.md` | Outcome record for each validation dimension |
| `vs-findings.md` | Detailed findings, evidence, and required remediation |
| `vs-sign-off.md` | Formal sign-off record granting clearance to full frontend development |

### 2.5 Entry Criteria

This phase activates only after all of the following are formally approved:

- [ ] UX Principles & User Flows — Signed off
- [ ] Content Strategy — Signed off
- [ ] Wireframes — Signed off
- [ ] Design System — Signed off
- [ ] UI Design — Initial homepage and primary journey designs approved

### 2.6 Exit Criteria

This phase is complete and frontend development may begin only when:

- [ ] All 10 validation dimensions documented with outcomes
- [ ] All Fail / Conditional Fail findings resolved or formally accepted with risk record
- [ ] Formal sign-off recorded in `vs-sign-off.md`
- [ ] Sign-off reviewed and approved by project lead / founder

### 2.7 Guidelines

- The vertical slice is implemented using production-grade code and tooling — it is not a prototype.
- **Design & Implementation Governance (HUMAN-001)**: The slice must evaluate whether visual elements and frontend implementation demonstrate deliberate human-level craft and pass the Distinctiveness Test without generic AI tropes.
- Do not scope-creep the vertical slice to cover additional pages or journeys beyond the approved scope.
- If a Fail finding requires changes to approved UX, wireframes, design system, or UI design, those upstream documents must be formally updated and re-approved before the vertical slice proceeds.
- Analytics instrumentation is required only where analytics requirements have been formally defined in an upstream phase.

---

## 3. Frontend Development (Gated on Vertical Slice Sign-Off)

> [!IMPORTANT]
> Frontend development may NOT begin until the Vertical Slice Validation has been formally signed off. See [§2](#2-vertical-slice-validation-mandatory-quality-gate) for entry criteria.

**Purpose**: Document technical architecture, implementation plans, coding guidelines, and technical decisions:
- Architecture Decision Records (ADRs)
- Technology selection rationale
- Directory structure, module boundaries, and state management specifications
- Integration and build pipeline specifications

**Guidelines**
- Code implementation must not begin until technical specifications are reviewed and approved.
- Technical architecture must satisfy requirements from all preceding phases.
- **Engineering Governance (HUMAN-001)**: Frontend implementation must demonstrate deliberate engineering judgment—avoiding unnecessary abstractions, unvetted dependencies, duplicated generated patterns, arbitrary animations, and performance/accessibility regressions for novelty.
- All implementation must comply with coding standards established during this phase per [AGENTS.md](../../AGENTS.md).

---

## 4. QA & Testing (Gated on Frontend Development Completion)

> The **executable** acceptance checklist — global gates (build health, placeholder/leak probes, token integrity, links, WCAG contrast table, responsive, performance floors, copy parity, HUMAN-001 spot checks), the per-page acceptance matrix, the known-debt register, and the sign-off record format — lives in [qa-checklist.md](qa-checklist.md). This section defines the phase protocol; that file defines *done*.

**Purpose**: Document quality assurance test plans, verification matrices, and audit logs:
- Functional test matrices and acceptance criteria validation
- Cross-browser and cross-device testing logs
- Accessibility (WCAG 2.1 AA/AAA) audit reports
- Performance benchmarks (Lighthouse, Core Web Vitals) and SEO audit reports
- Security and dependency vulnerability scans

**Guidelines**
- All quality gates defined here must pass with formal sign-off before entering launch.
- Accessibility standards must comply with WCAG 2.1 AA as a minimum; AAA where achievable, per [AGENTS.md](../../AGENTS.md).
- **Design & Quality Governance (HUMAN-001)**: Audits must include human-authorship and distinctiveness validation, verifying that the final build avoids generic AI visual clichés and exhibits deliberate engineering craftsmanship.

---

## 5. Launch (Gated on QA Sign-Off)

**Purpose**: Document pre-launch, cutover, deployment, and post-launch operations:
- Pre-launch verification checklist
- Production deployment steps and hosting configurations
- DNS routing, SSL certificate setup, and domain management records
- Analytics, error tracking, and monitoring setup
- Post-launch smoke tests and rollback plans

**Guidelines**
- Formal sign-off on the pre-launch checklist is required before production deployment.
- All QA quality gates must be passed before this phase activates.

---

## 6. Phase Review & Sign-Off Records

*Formal phase review records, stakeholder feedback logs, and approval sign-offs across the website project lifecycle.*

**Purpose**
- Maintain an auditable history of phase transitions.
- Record review feedback, action items, and resolution logs.
- Document explicit approval decisions before advancing to subsequent phases.

**Record Format**
Each review document is named `YYYY-MM-DD-phase-<phase-name>-review.md` and includes:
1. **Phase Reviewed**: (e.g., Phase 1 — Discovery)
2. **Reviewers**: Stakeholders and agents involved.
3. **Artifacts Inspected**: Links to documents reviewed.
4. **Findings & Action Items**: Required modifications or clarifications.
5. **Approval Status**: `APPROVED` / `CHANGES_REQUESTED` / `REJECTED`.

**Where records live**: With the consolidation of the documentation suite, review records and approval outcomes are tracked as entries in [decisions.md](decisions.md) (the single running decision log) and in the repository's pull-request history. Review documents may still be committed using the naming convention above when detailed findings require a standalone record; approval outcomes must always be reflected in [decisions.md](decisions.md).
