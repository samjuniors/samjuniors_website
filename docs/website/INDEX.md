# SamJuniors Website — Master Project & Documentation Index

> **Master Navigation Map & Governance Index** establishing the authoritative phase sequence, authority hierarchy, status, primary documents, and gating rules for the SamJuniors web platform.

---

## 1. Authority Hierarchy & Source of Truth

When resolving design, architectural, or content questions, adhere strictly to this precedence hierarchy:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. docs/company/ (Highest Authority — Founder Truth)       │
├─────────────────────────────────────────────────────────────┤
│ 2. Phase 1: Discovery & Website Strategy (00-discovery)     │
├─────────────────────────────────────────────────────────────┤
│ 3. Phase 2: Information Architecture (01-info-architecture) │
├─────────────────────────────────────────────────────────────┤
│ 4. Phase 3: Content Strategy & Messaging (02-content)       │
├─────────────────────────────────────────────────────────────┤
│ 5. Phase 4: UX Principles & Flows (03-ux-principles)        │
├─────────────────────────────────────────────────────────────┤
│ 6. Phase 5: Design Research (04-design-research)            │
├─────────────────────────────────────────────────────────────┤
│ 7. Phase 6: Design Direction & Prototype (05-wireframes)    │
├─────────────────────────────────────────────────────────────┤
│ 8. Phase 7: Design System (06-design-system)                │
├─────────────────────────────────────────────────────────────┤
│ 9. Phase 8: UI Design (07-ui)                               │
├─────────────────────────────────────────────────────────────┤
│ 10. Phase 9: Vertical Slice Validation                      │
├─────────────────────────────────────────────────────────────┤
│ 11. Phase 10: Frontend Development & Production App (src/)  │
├─────────────────────────────────────────────────────────────┤
│ 12. Phase 11: QA & Verification                             │
├─────────────────────────────────────────────────────────────┤
│ 13. Phase 12: Production Launch                             │
└─────────────────────────────────────────────────────────────┘
```

- **Permanent Rule**: [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company) governs all phases. No phase may invent, assume, or alter company identity, purpose, or product facts.
- **Cross-Phase Governance**: [HUMAN-001](file:///d:/Projects/SamjuniorsWebsite/docs/website/design-principles.md#human-made-design--implementation-human-001) applies across all design and development phases to guarantee human-level craft and eliminate generic AI clichés.

---

## 2. Phase Master Map & Document Index

| Phase # | Phase Name | Status | Primary Purpose | Primary Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **Foundation** | **Company Truth** | **Certified** | Authoritative founder intent, parent company identity, 4-point building filter, differentiator, and multi-product thesis. | [company-foundation.md](file:///d:/Projects/SamjuniorsWebsite/docs/company/company-foundation.md), [decision-log.md](file:///d:/Projects/SamjuniorsWebsite/docs/company/decision-log.md) |
| **Phase 1** | **Discovery & Strategy** | **Complete** | Target audiences, core brand narrative, strategic pillars, and governance constraints. | [00-discovery/README.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/00-discovery/README.md) |
| **Phase 2** | **Information Architecture** | **Complete** | Sitemaps, content hierarchy, navigation topology, and cross-product parent scaling models. | [01-information-architecture/](file:///d:/Projects/SamjuniorsWebsite/docs/website/01-information-architecture), [architecture-manifesto.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/architecture-manifesto.md) |
| **Phase 3** | **Content Strategy** | **Complete** | Messaging hierarchy, 3 information depths (Instant, Understand, Deep Dive), contextual proof system, and founder presence rules. | [02-content-strategy/content-strategy.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/02-content-strategy/content-strategy.md) |
| **Phase 4** | **UX Principles & User Flows** | **Complete** | Cognitive UX constraints (UX-001–019), non-linear narrative topologies (USER-FLOW-001–005), and visitor-controlled pacing. | [03-ux-principles/ux-principles.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/03-ux-principles/ux-principles.md), [user-flow-foundation.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/03-ux-principles/user-flow-foundation.md) |
| **Phase 5** | **Design Research** | **Complete** | Empirical research across 8 domains: cinematic web design, human craft, progressive disclosure, motion ergonomics, and mobile touch. | [04-design-research/design-research.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/04-design-research/design-research.md) |
| **Phase 6** | **Design Direction & Wireframes** | **In Progress** | Strategic visual/experiential direction and first interactive prototype implemented inside the real Next.js production scaffold. | [design-direction.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/05-wireframes/design-direction.md), [application-architecture.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/application-architecture.md) |
| **Phase 7** | **Design System** | **Pending Phase 6** | Formal visual design tokens (color, typography, spatial grid, elevation, motion) derived from validated experience direction. | [06-design-system/README.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/06-design-system/README.md) |
| **Phase 8** | **UI Design** | **Pending Phase 7** | High-fidelity component layouts, interactive states, and responsive visual compositions. | [07-ui/README.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/07-ui/README.md) |
| **Phase 9** | **Vertical Slice Validation** | **Pending Phase 8** | Interactive end-to-end slice testing core user journeys, performance, and accessibility before broad development. | [ROADMAP.md](file:///d:/Projects/SamjuniorsWebsite/ROADMAP.md#phase-9-vertical-slice-prototype) |
| **Phase 10** | **Frontend Development** | **Scaffold Ready** | Production Next.js 15 App Router codebase with typed content repository (`src/content/`), Vanilla CSS Modules, and accessible components. | [src/](file:///d:/Projects/SamjuniorsWebsite/src), [package.json](file:///d:/Projects/SamjuniorsWebsite/package.json) |
| **Phase 11** | **QA & Testing** | **Pending Phase 10** | Vitest unit/component suites, Playwright cross-device E2E validation, Core Web Vitals profiling, and WCAG 2.1 AA accessibility audit. | [e2e/](file:///d:/Projects/SamjuniorsWebsite/e2e), [vitest.config.ts](file:///d:/Projects/SamjuniorsWebsite/vitest.config.ts) |
| **Phase 12** | **Launch & Deployment** | **Pending Phase 11** | Production deployment, edge CDN configuration, domain routing, and post-launch verification. | [ROADMAP.md](file:///d:/Projects/SamjuniorsWebsite/ROADMAP.md#phase-12-launch--monitoring) |

---

## 3. Authoritative Reading Order

For contributors, reviewers, and AI agents onboarding to the project, review documentation in this sequential order:

1. [company-foundation.md](file:///d:/Projects/SamjuniorsWebsite/docs/company/company-foundation.md) — *Founder Truth & Identity (Highest Precedence)*
2. [ROADMAP.md](file:///d:/Projects/SamjuniorsWebsite/ROADMAP.md) & [PROJECT.md](file:///d:/Projects/SamjuniorsWebsite/PROJECT.md) — *Project Milestones & Governance*
3. [application-architecture.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/application-architecture.md) — *Production Stack & Application Architecture*
4. [content-strategy.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/02-content-strategy/content-strategy.md) — *Messaging Hierarchy & Information Depths*
5. [ux-principles.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/03-ux-principles/ux-principles.md) — *Cognitive Constraints & HUMAN-001*
6. [design-research.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/04-design-research/design-research.md) — *Empirical Research Findings*
7. [design-direction.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/05-wireframes/design-direction.md) — *Strategic Visual & Experiential Direction*

---

## 4. Current Phase & Explicit Next Action

- **Current Phase**: **Phase 6 — Wireframes & In-App Experience Prototyping**
- **Production Scaffold State**: Initialized in Next.js 15 App Router (`src/app/`, `src/content/`, `src/styles/tokens.css`, Vitest, Playwright).
- **Explicit Next Action**: Synthesize and implement the first living in-application homepage experience prototype inside `src/app/` adhering strictly to [design-direction.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/05-wireframes/design-direction.md).

---

## 5. Phase-Gating Rule

> [!IMPORTANT]
> **Strict Phase Boundary Policy**:
> 1. No phase may begin implementation until its preceding documentation and specifications have passed formal review and merge into `main`.
> 2. Full UI Design (Phase 8) and Design System tokens (Phase 7) must derive strictly from the validated Phase 6 experience prototype.
> 3. Production code in `src/` must reflect only approved architectural patterns and verified founder truth.
