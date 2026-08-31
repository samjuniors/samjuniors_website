# UX Architecture Decision Log

This document tracks all formal decisions made during the **UX Architecture & User Principles** phase (UX-001 through UX-012).
All records adhere to the mandatory governance framework: **Decision, Reason, Alternatives Considered, Why Alternatives Were Rejected, Benefits, Risks, Future Review Criteria**.

---

## Decisions Summary

| Decision ID | Title | Scope | Status | Approved Date |
| :--- | :--- | :--- | :---: | :--- |
| [UX-001](#ux-001-primary-user-personas) | Primary User Personas | User Modeling | **APPROVED** | 2026-08-31 |
| [UX-002](#ux-002-user-goals--success-criteria) | User Goals & Success Criteria | User Goals & Metrics | **APPROVED** | 2026-08-31 |
| [UX-003](#ux-003-end-to-end-user-journeys) | End-to-End User Journeys | Journey Mapping | **APPROVED** | 2026-08-31 |
| [UX-004](#ux-004-progressive-branching) | Progressive Branching | Journey Topology | **APPROVED** | 2026-08-31 |
| [UX-005](#ux-005-progressive-discovery) | Progressive Discovery | Information Pacing | **APPROVED** | 2026-08-31 |
| [UX-006](#ux-006-visitor-led-discovery) | Visitor-Led Discovery | Content Hierarchy | **APPROVED** | 2026-08-31 |
| [UX-007](#ux-007-scene-based-storytelling) | Scene-Based Storytelling | Narrative Design | **APPROVED** | 2026-08-31 |
| [UX-008](#ux-008-zero-fatigue-principle) | Zero Fatigue Principle | Cognitive Ergonomics | **APPROVED** | 2026-08-31 |
| [UX-009](#ux-009-cognitive-load-first) | Cognitive Load First | Interaction Budget | **APPROVED** | 2026-08-31 |
| [UX-010](#ux-010-user-mental-model-first) | User Mental Model First | Information Taxonomy | **APPROVED** | 2026-08-31 |
| [UX-011](#ux-011-hybrid-navigation) | Hybrid Navigation | Navigation Topology | **APPROVED** | 2026-08-31 |
| [UX-012](#ux-012-hybrid-scroll--progression-model) | Hybrid Scroll & Progression Model | Scroll & Motion Dynamics | **APPROVED** | 2026-08-31 |

---

## Detailed Records

### UX-001: Primary User Personas
- **Decision**: Define five distinct personas: 1. Students, 2. Institutions, 3. Businesses, 4. Developers, 5. Investors.
- **Reason**: Targets the specific mindsets, evaluative questions, and technical fluencies required across key stakeholder groups.
- **Alternatives Considered**: Generic "Visitor" persona; Single enterprise B2B buyer persona.
- **Why Alternatives Were Rejected**: Generic personas fail to provide actionable UX constraints; enterprise-only personas ignore the core student and creator base.
- **Benefits**: Precise targeting of copy tone, technical depth, and conversion touchpoints.
- **Risks**: Must avoid fragmenting the site into disconnected silos.
- **Future Review Criteria**: Audience traffic analysis in Phase 12 post-launch telemetry.

---

### UX-002: User Goals & Success Criteria
- **Decision**: Define explicit primary goals, key questions, measurable success criteria, primary CTAs, secondary CTAs, and 5 UX success principles (Clarity, Confidence, Progress, Efficiency, Completion).
- **Reason**: Provides measurable benchmarks to evaluate whether wireframes and UI designs achieve user intent.
- **Alternatives Considered**: Qualitative personas without measurable completion criteria.
- **Why Alternatives Were Rejected**: Vague criteria lead to subjective design arguments without accountability.
- **Benefits**: Unambiguous quality gates for design validation.
- **Risks**: Metrics must be instrumented accurately in QA and analytics setup.
- **Future Review Criteria**: User testing completion rates during Phase 11 QA.

---

### UX-003: End-to-End User Journeys
- **Decision**: Map end-to-end journeys from entry to destination and onward loops for all 5 personas.
- **Reason**: Ensures every user flow is continuous, purposeful, and free of dead ends.
- **Alternatives Considered**: Isolated page wireframes without end-to-end flow mapping.
- **Why Alternatives Were Rejected**: Results in fragmented experiences and elevated bounce rates.
- **Benefits**: Guarantees coherent progression across pages.
- **Risks**: Requires regular audit as new products launch.
- **Future Review Criteria**: Funnel drop-off analytics in post-launch review.

---

### UX-004: Progressive Branching
- **Decision**: All visitors begin with a unified narrative (Vision → Founder → SamJuniors) before branching into persona-specific paths at the Product Ecosystem step.
- **Reason**: Establishes common institutional trust and vision before presenting specialized deep-dives.
- **Alternatives Considered**: Forcing visitors to choose their role upon initial landing (*"Are you a student or an investor?"*).
- **Why Alternatives Were Rejected**: Choice gates create immediate cognitive friction and undermine brand storytelling.
- **Benefits**: Seamless onboarding and natural intent-based branching.
- **Risks**: Shared entry must remain concise and universally compelling.
- **Future Review Criteria**: Early-scroll bounce rate analysis.

---

### UX-005: Progressive Discovery
- **Decision**: Reveal information progressively: one idea per scene, with layered deep-dives on demand.
- **Reason**: Protects working memory capacity and avoids cognitive overload.
- **Alternatives Considered**: Monolithic page layout with simultaneous multi-column feature dumps.
- **Why Alternatives Were Rejected**: High information density induces reading fatigue and choice paralysis.
- **Benefits**: Effortless reading flow and enhanced comprehension.
- **Risks**: Deep technical content must remain easily discoverable for power users.
- **Future Review Criteria**: Comprehension testing during discovery validation.

---

### UX-006: Visitor-Led Discovery
- **Decision**: Structure page sections to answer the visitor's next logical question (*"What is it?"* → *"Who built it?"* → *"How does it work?"* → *"Is it proven?"* → *"How do I start?"*).
- **Reason**: Creates natural narrative pull aligned with human curiosity.
- **Alternatives Considered**: Company-centric broadcast model (*"Here is our company history, here are our press releases"*).
- **Why Alternatives Were Rejected**: Self-centered marketing copy disengages modern web users.
- **Benefits**: High user engagement and organic storytelling resonance.
- **Risks**: Requires rigorous editorial discipline during content strategy.
- **Future Review Criteria**: Editorial review against visitor question framework.

---

### UX-007: Scene-Based Storytelling
- **Decision**: Frame the homepage as a sequence of cinematic, cohesive scenes with an intentional emotional progression: *Curiosity → Excitement → Understanding → Trust → Action*.
- **Reason**: Transforms the website from a static marketing brochure into an immersive documentary experience.
- **Alternatives Considered**: Traditional disconnected content blocks with arbitrary styling.
- **Why Alternatives Were Rejected**: Fails to create memorable emotional impact.
- **Benefits**: World-class presentation and high brand recall.
- **Risks**: Transitions must remain lightweight and performant.
- **Future Review Criteria**: Narrative scroll completion analytics.

---

### UX-008: Zero Fatigue Principle
- **Decision**: Eliminate visual, cognitive, and interaction fatigue through generous whitespace, high contrast, optimal line lengths (50–75 chars), and clean visual rest stops.
- **Reason**: Ensures visitors can explore complex technical ecosystems without mental exhaustion.
- **Alternatives Considered**: Dense high-density dashboard styling across marketing pages.
- **Why Alternatives Were Rejected**: Causes rapid reader fatigue and disinterest.
- **Benefits**: Elegant, calming, and premium reading experience.
- **Risks**: Requires spatial discipline in layout design.
- **Future Review Criteria**: Usability session length telemetry.

---

### UX-009: Cognitive Load First
- **Decision**: Evaluate every component, interaction, and animation based on whether it simplifies or complicates the user's task. Remove anything that adds unnecessary friction.
- **Reason**: Enforces functional purpose over superficial ornamentation.
- **Alternatives Considered**: Adding visual trends (e.g. 3D canvas backgrounds, particle animations) without UX justification.
- **Why Alternatives Were Rejected**: Drastically increases cognitive noise, battery drain, and rendering latency.
- **Benefits**: Blazing fast rendering and crystal-clear communication.
- **Risks**: Requires strict review to resist decorative feature creep.
- **Future Review Criteria**: Component audit during Design System reviews.

---

### UX-010: User Mental Model First
- **Decision**: Structure product categories and navigation around user goals and technological purpose, not internal corporate divisions.
- **Reason**: Visitors think in terms of outcomes (*"How do I build AI apps?"*, *"How do I learn STEM?"*), not corporate structures.
- **Alternatives Considered**: Organizing site by internal department structure.
- **Why Alternatives Were Rejected**: Disorients external visitors and hides relevant products.
- **Benefits**: Immediate intuitive navigation.
- **Risks**: Internal teams must adapt to outward-facing terminology.
- **Future Review Criteria**: User navigation success rate testing.

---

### UX-011: Hybrid Navigation
- **Decision**: Implement stable, familiar global navigation paired with contextual in-page indicators, single primary CTA, and full accessibility.
- **Reason**: Combines unshakeable navigational clarity with cutting-edge visual presentation.
- **Alternatives Considered**: Pure experimental navigation (e.g., hidden radial menus, horizontal scroll only).
- **Why Alternatives Were Rejected**: Frustrates users and destroys accessibility compliance.
- **Benefits**: Zero learning curve for navigation with maximum aesthetic polish.
- **Risks**: Header scroll minimize transitions must not cause layout shift.
- **Future Review Criteria**: Lighthouse accessibility audits (100/100 target).

---

### UX-012: Hybrid Scroll & Progression Model
- **Decision**: Default browser scrolling remains standard and uninterrupted; scroll-linked motion is used selectively for key scenes; zero scroll-jacking; animation purpose test enforced.
- **Reason**: Respects user agency and hardware controls while enabling tasteful cinematic visual storytelling.
- **Alternatives Considered**: Forced scroll hijacking; Full page snapping.
- **Why Alternatives Were Rejected**: Universally disliked by users, breaks touchpad gestures, and triggers motion sickness.
- **Benefits**: Fluid, natural interaction with captivating motion design.
- **Risks**: Scroll listeners must be passive and decoupled from rendering threads.
- **Future Review Criteria**: 60fps frame rate benchmarks during performance QA.
