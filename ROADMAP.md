# Project Roadmap

This roadmap defines the authoritative execution sequence for the SamJuniors website project. Phases must be completed sequentially. Each phase requires formal documentation, review, and approval before the next phase may begin.

> [!IMPORTANT]
> **Phase Sequencing Rule**: Phase 9 (Vertical Slice Validation) is a mandatory quality gate. It must occur **after** Phases 4–8 are fully approved, and **before** Phase 10 (Frontend Development) begins. Failure of the vertical slice blocks all subsequent phases until findings are resolved and re-validated.

**Documentation map**: each phase's governing specification lives in the consolidated 8-file documentation suite (see [INDEX.md](docs/website/INDEX.md)) — product direction in [product-spec.md](docs/website/product-spec.md), visual rules in [design-system.md](docs/website/design-system.md), technical structure in [architecture.md](docs/website/architecture.md), build/QA/launch gates in [delivery.md](docs/website/delivery.md), and all formal decisions in [decisions.md](docs/website/decisions.md).

---

## Phase 1: Discovery & Website Strategy

Establish the strategic foundation for the website project, grounded in approved company identity.

- Milestone 1.1: Stakeholder Alignment & Objectives
- Milestone 1.2: User Persona & Target Audience Definition
- Milestone 1.3: Functional & Technical Requirements Gathering
- Milestone 1.4: Discovery Phase Review & Sign-Off

> [!NOTE]
> This phase governs **website-level strategy only**. Company-level strategy, mission, values, and brand truth remain under the exclusive authority of [docs/company/](docs/company).

**Governing document**: [product-spec.md §1–2](docs/website/product-spec.md)

---

## Phase 2: Information Architecture

Define the site's structural skeleton: content hierarchy, URL taxonomy, navigation flows, and data relationships.

- Milestone 2.1: Site Map & Page Hierarchy
- Milestone 2.2: User Journey & Navigation Flows
- Milestone 2.3: URL Routing & Taxonomy Structure
- Milestone 2.4: Information Architecture Review & Sign-Off

**Governing document**: [product-spec.md §3](docs/website/product-spec.md#3-information-architecture-certified--frozen) (certified & frozen)

---

## Phase 3: Content Strategy

Define the messaging framework, editorial standards, and content model for every page and section.

- Milestone 3.1: Content Hierarchy & Page Content Outlines
- Milestone 3.2: Copywriting Guidelines & Voice Alignment
- Milestone 3.3: Asset & Media Requirements Specification
- Milestone 3.4: Content Strategy Review & Sign-Off

**Governing document**: [product-spec.md §4–5](docs/website/product-spec.md#4-content-strategy--messaging-framework)

---

## Phase 4: UX Principles & User Flows

Establish the experiential principles, user personas, visitor goals, journey maps, and cognitive frameworks governing how the website is experienced.

- Milestone 4.1: User Persona Definitions & Validation
- Milestone 4.2: User Goals & Measurable Success Criteria
- Milestone 4.3: User Journey Mapping & Decision-Point Analysis
- Milestone 4.4: Core UX Principles & Cognitive Frameworks
- Milestone 4.5: UX Phase Review & Sign-Off

**Governing document**: [product-spec.md §6](docs/website/product-spec.md#6-ux-principles-personas--user-flows)

---

## Phase 5: Design Research

Conduct evidence-driven research across competitive, visual, interaction, accessibility, and motion domains to produce actionable design implications for wireframing and design system work.

- Milestone 5.1: Competitive Experience Research
- Milestone 5.2: Interaction Pattern & Visual Language Research
- Milestone 5.3: Accessibility & Motion Research
- Milestone 5.4: User Behaviour Evidence Review
- Milestone 5.5: Research Conclusions & Design Implication Synthesis
- Milestone 5.6: Design Research Review & Sign-Off

**Governing document**: [design-system.md §3](docs/website/design-system.md#3-design-research)

---

## Phase 6: Wireframes

Produce structural layout blueprints for all core pages and viewports, grounded in approved UX and content decisions.

- Milestone 6.1: Low-Fidelity Layout Blueprints
- Milestone 6.2: Responsive Viewport Layout Specifications
- Milestone 6.3: Interaction Flow Diagrams
- Milestone 6.4: Wireframe Review & Sign-Off

**Governing document**: [design-system.md §4](docs/website/design-system.md#4-strategic-design-direction)

---

## Phase 7: Design System

Define the visual language and component specifications that govern all UI design and frontend implementation.

- Milestone 7.1: Design Tokens (Color, Typography, Spacing, Elevation)
- Milestone 7.2: Core Component Specifications
- Milestone 7.3: Accessibility & Contrast Guidelines
- Milestone 7.4: Design System Review & Sign-Off

**Governing document**: [design-system.md §6](docs/website/design-system.md#6-design-system-specification) — implemented in `src/styles/tokens.css`; formal sign-off pending (see TODO in [decisions.md](docs/website/decisions.md))

---

## Phase 8: UI Design

Produce high-fidelity visual designs, interactive states, and motion specifications for all approved pages and components.

- Milestone 8.1: High-Fidelity Page Designs
- Milestone 8.2: Interactive States & Motion Guidelines
- Milestone 8.3: Asset Production & Export
- Milestone 8.4: UI Design Review & Sign-Off

**Governing document**: [design-system.md §7](docs/website/design-system.md#7-ui-design-phase-protocol-phase-8)

---

## Phase 9: Vertical Slice Validation

Validate one representative, end-to-end user experience in production-grade implementation before scaling to full frontend development.

**This is a mandatory quality gate. Failure blocks Phase 10.**

- Milestone 9.1: Vertical Slice Scope Definition & Approval
- Milestone 9.2: Production-Grade Slice Implementation
- Milestone 9.3: Full Validation Matrix Execution (UX, Content, Visual, Interaction, Motion, Responsive, Accessibility, Performance, Architecture, Analytics)
- Milestone 9.4: Findings Review, Remediation & Re-Validation
- Milestone 9.5: Vertical Slice Sign-Off & Phase 10 Clearance

> [!NOTE]
> The **proposed validation slice** is: Homepage → SamJuniors Story → Lumora Reveal → Lumora Exploration → Trust/Proof → Primary CTA. This selection is **PROPOSED** and requires formal approval during Phase 8. See [delivery.md §2](docs/website/delivery.md#2-vertical-slice-validation-mandatory-quality-gate) for full scope, validation dimensions, and entry/exit criteria.

---

## Phase 10: Frontend Development

Implement the full website codebase using the production-grade architecture validated in Phase 9.

- Milestone 10.1: Development Environment & Tooling Setup
- Milestone 10.2: Design System & Component Library Implementation
- Milestone 10.3: Page Assembly & Routing Implementation
- Milestone 10.4: Frontend Implementation Review & Sign-Off

**Governing documents**: [architecture.md](docs/website/architecture.md), [delivery.md §3](docs/website/delivery.md#3-frontend-development-gated-on-vertical-slice-sign-off)

---

## Phase 11: QA

Verify correctness, accessibility, performance, and security across all pages and environments.

- Milestone 11.1: Functional & Cross-Browser Verification
- Milestone 11.2: Accessibility (a11y) & Usability Audit
- Milestone 11.3: Performance, SEO, & Security Benchmarks
- Milestone 11.4: QA Sign-Off

**Governing document**: [delivery.md §4](docs/website/delivery.md#4-qa--testing-gated-on-frontend-development-completion)

---

## Phase 12: Launch

Execute production deployment and establish post-launch monitoring.

- Milestone 12.1: Pre-Launch Deployment Checklist
- Milestone 12.2: Production Deployment & DNS Setup
- Milestone 12.3: Post-Launch Monitoring & Verification
- Milestone 12.4: Project Completion & Handover

**Governing document**: [delivery.md §5](docs/website/delivery.md#5-launch-gated-on-qa-sign-off)
