# UX Architecture Decision Log

This document tracks all formal decisions made during the **UX Architecture & User Principles** phase (`UX-001` through `UX-019` and `USER-FLOW-001` through `USER-FLOW-005`).

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
| [UX-013](#ux-013-understanding-must-accompany-curiosity) | Understanding Must Accompany Curiosity | Cognitive Ergonomics | **APPROVED** | 2026-08-31 |
| [UX-014](#ux-014-interaction-must-earn-its-friction) | Interaction Must Earn Its Friction | Interaction Budget | **APPROVED** | 2026-08-31 |
| [UX-015](#ux-015-visitor-control) | Visitor Control | User Agency | **APPROVED** | 2026-08-31 |
| [UX-016](#ux-016-progressive-disclosure) | Progressive Disclosure | Depth Architecture | **APPROVED** | 2026-08-31 |
| [UX-017](#ux-017-mobile-is-first-class) | Mobile Is First-Class | Responsive Architecture | **APPROVED** | 2026-08-31 |
| [UX-018](#ux-018-predictable-restrained-navigation) | Predictable Restrained Navigation | Wayfinding | **APPROVED** | 2026-08-31 |
| [UX-019](#ux-019-recovery--continuity) | Recovery & Continuity | Fault Tolerance | **APPROVED** | 2026-08-31 |
| [USER-FLOW-001](#user-flow-001-first-time-visitor-journey) | First-Time Visitor Journey | Narrative Topology | **APPROVED** | 2026-08-31 |
| [USER-FLOW-002](#user-flow-002-multiple-valid-entry-points) | Multiple Valid Entry Points | Entry Topology | **APPROVED** | 2026-08-31 |
| [USER-FLOW-003](#user-flow-003-natural-next-move) | Natural Next Move | Interaction Progression | **APPROVED** | 2026-08-31 |
| [USER-FLOW-004](#user-flow-004-contextual-cta-hierarchy) | Contextual CTA Hierarchy | Conversion Architecture | **APPROVED** | 2026-08-31 |
| [USER-FLOW-005](#user-flow-005-returning-visitor-flow) | Returning Visitor Flow | Continuity & Retention | **APPROVED** | 2026-08-31 |

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

---

### UX-013: Understanding Must Accompany Curiosity
- **Decision**: Enforce that visual surprises, motion, and cinematic reveals must never compromise visitor comprehension. Visitors must continuously maintain a 4-part mental model (*Where am I? What am I seeing? Why does it matter? What can I do next?*).
- **Reason**: Prevents experiential disorientation where aesthetic visual spectacle obscures basic product communication.
- **Alternatives Considered**: Pure mystery-driven storytelling where answers are deferred until the final scene.
- **Why Alternatives Were Rejected**: Mystery-driven sites experience severe bounce rates from users who cannot quickly determine product relevance.
- **Benefits**: High engagement paired with crystal-clear value perception (*"I want to see what's next"*, not *"What am I looking at?"*).
- **Risks**: Requires tight coordination between copywriters and visual designers.
- **Future Review Criteria**: Comprehension evaluations in Phase 11 QA usability testing.

---

### UX-014: Interaction Must Earn Its Friction
- **Decision**: Require every interaction, animation, modal, gesture, or transition to deliver a positive value-to-friction ratio (providing meaningful info, discovery, comprehension, or progression). Prohibit novelty anti-patterns (custom cursor effects, scroll-jacking, forced horizontal scroll, hover-only info).
- **Reason**: Protects user energy and focus, ensuring high-value engagement across all devices.
- **Alternatives Considered**: Adding visual micro-interactions purely for portfolio flair.
- **Why Alternatives Were Rejected**: Novelty interactions generate immediate user annoyance and impair accessibility.
- **Benefits**: Lightweight, responsive, and respectful user experience.
- **Risks**: Interaction designers must balance restraint with polish.
- **Future Review Criteria**: Friction audit during Design System and Vertical Slice reviews.

---

### UX-015: Visitor Control
- **Decision**: Ensure the web experience guides attention without seizing control from the user. Visitors retain absolute control over scrolling, navigation, pacing, skipping, and exploration depth.
- **Reason**: Respects human agency and hardware ergonomics, fostering an empowering sense of discovery.
- **Alternatives Considered**: Linear guided slideshow tour with automated pacing.
- **Why Alternatives Were Rejected**: Automated tours feel imposed, frustrating users who read faster or want specific answers.
- **Benefits**: Natural, self-directed exploration with high user satisfaction.
- **Risks**: Layout must gracefully accommodate fast scrollers as well as careful readers.
- **Future Review Criteria**: Usability session recordings during Phase 9 Vertical Slice.

---

### UX-016: Progressive Disclosure (Depth Alignment)
- **Decision**: Expose complexity progressively in response to visitor interest (aligned with [CONTENT-003](file:///d:/Projects/SamjuniorsWebsite/docs/website/02-content-strategy/content-strategy.md#4-three-information-depths-content-003): Instant, Understand, Deep Dive) without forcing a rigid sequential funnel.
- **Reason**: Caters directly to varying visitor fluencies and intents.
- **Alternatives Considered**: Gated disclosure where deep documentation is locked behind introductory chapters.
- **Why Alternatives Were Rejected**: Artificial gates repel expert and technical visitors who require immediate deep specifications.
- **Benefits**: Universal accessibility for casual scanners and immediate depth for engineers.
- **Risks**: Deep content pathways must remain discoverable from top-level views.
- **Future Review Criteria**: Navigation success rates to technical documentation.

---

### UX-017: Mobile Is First-Class
- **Decision**: Treat mobile and desktop as independently composed, equally first-class experiences that preserve core narrative and meaning without mechanically scaling down desktop layouts. Prohibit hover-dependent critical content.
- **Reason**: Over 60% of modern web traffic originates on mobile devices with touch constraints.
- **Alternatives Considered**: Desktop-first layout with automatic CSS media-query shrinking.
- **Why Alternatives Were Rejected**: Direct shrinking produces illegible typography, compromised tap targets, and broken touch gestures.
- **Benefits**: Flawless, native-feeling mobile experience and WCAG touch target compliance.
- **Risks**: Requires parallel composition reviews for both form factors in Phase 8 UI Design.
- **Future Review Criteria**: Mobile Lighthouse performance and touch usability audits.

---

### UX-018: Predictable Restrained Navigation
- **Decision**: Maintain predictable, accessible, and dependable global navigation that supports wayfinding without competing with cinematic content. Prohibit hiding navigation purely for visual drama.
- **Reason**: Ensures visitors never feel lost or trapped in an unconventional layout.
- **Alternatives Considered**: Full-screen immersive mode with navigation hidden until mouse-shake or edge-hover.
- **Why Alternatives Were Rejected**: Hidden navigation destroys discoverability and violates accessibility guidelines.
- **Benefits**: Frictionless wayfinding across the entire ecosystem.
- **Risks**: Header styling must integrate seamlessly with diverse background themes.
- **Future Review Criteria**: Keyboard navigation and screen-reader accessibility benchmarks.

---

### UX-019: Recovery & Continuity
- **Decision**: Require every experience state to have an immediate, non-destructive recovery path (allowing continuing, skipping, revisiting, or reorienting). Explicitly support reduced-motion preferences, deep linking, and mid-story entry.
- **Reason**: Ensures resilience across varying network conditions, user abilities, and non-linear browsing habits.
- **Alternatives Considered**: Single-state monolithic apps where refreshing restarts the experience from the beginning.
- **Why Alternatives Were Rejected**: Fragile single-state flows generate high abandonment upon page refresh or network blips.
- **Benefits**: Robust, resilient, and fault-tolerant user experience.
- **Risks**: Frontend state management must cleanly support deep-linking and state restoration.
- **Future Review Criteria**: Deep-link entry tests and reduced-motion audit in Phase 11 QA.

---

### USER-FLOW-001: First-Time Visitor Journey
- **Decision**: Define the ideal first-time narrative progression: *Entry → SamJuniors Signal → Understanding → What We're Building → Lumora / Product Reveal → Why It Matters → Proof → Founder / Leadership → Future → Visitor Choice*. Explicitly clarify this as ideal topology, not a mandatory sequential funnel.
- **Reason**: Establishes an engaging, logical psychological journey that builds understanding and trust before requesting action.
- **Alternatives Considered**: Pure landing page with immediate sign-up form above the fold.
- **Why Alternatives Were Rejected**: Demanding sign-ups before communicating vision or value produces high bounce rates.
- **Benefits**: Compelling storytelling arc with natural conversion endpoints.
- **Risks**: Narrative pacing must remain tight to prevent mid-scroll drop-off.
- **Future Review Criteria**: Scroll-depth analytics and stage completion rates.

---

### USER-FLOW-002: Multiple Valid Entry Points
- **Decision**: Explicitly support non-homepage entry points (organic search, shared links, deep product URLs, docs) such that every destination page makes sense independently while connecting naturally to parent SamJuniors context.
- **Reason**: In modern web architectures, a significant portion of traffic bypasses the homepage entirely.
- **Alternatives Considered**: Forcing deep-linked visitors through an initial splash or introductory homepage redirect.
- **Why Alternatives Were Rejected**: Interstitial redirects create severe friction and damage SEO indexing.
- **Benefits**: Excellent SEO landing resilience and direct utility for referral traffic.
- **Risks**: Internal pages must include contextual parent-level breadcrumbs/signals.
- **Future Review Criteria**: Organic search bounce rate and referral page dwell times.

---

### USER-FLOW-003: Natural Next Move
- **Decision**: Ensure every major experience state provides an understandable, low-friction next step without visual forcing. Scale CTA prominence with demonstrated intent.
- **Reason**: Keeps visitor exploration continuous without inducing sales fatigue.
- **Alternatives Considered**: In-your-face floating modal CTAs appearing repeatedly on every scroll.
- **Why Alternatives Were Rejected**: Aggressive modals destroy reading immersion and brand credibility.
- **Benefits**: Respectful, persuasive, and organic conversion flow.
- **Risks**: CTAs must remain sufficiently visible and distinct in layout hierarchy.
- **Future Review Criteria**: Conversion micro-funnel analytics.

---

### USER-FLOW-004: Contextual CTA Hierarchy
- **Decision**: Enforce at most one dominant primary action per state, with secondary actions subordinate. Align action priority with current cognitive context (e.g. *Learn More* during discovery, *Try Demo* during product reveal).
- **Reason**: Eliminates choice conflict and guides visitor focus cleanly toward the next step.
- **Alternatives Considered**: Presenting 3–4 equal primary buttons on every section.
- **Why Alternatives Were Rejected**: Competing primary actions trigger decision paralysis (Hick's Law).
- **Benefits**: Maximum conversion clarity and visual elegance.
- **Risks**: Primary action definitions must be kept aligned with content strategy.
- **Future Review Criteria**: A/B testing of contextual CTA labels during Phase 11 QA.

---

### USER-FLOW-005: Returning Visitor Flow
- **Decision**: Enable returning visitors to bypass introductory storytelling and immediately reorient to current priorities, new product updates, and explorations through curated continuity. Prohibit noisy social-media chronological feeds.
- **Reason**: Respects returning visitors' existing context and maximizes their access to new utility.
- **Alternatives Considered**: 
  - Forcing returning visitors to re-experience full introductory scroll animations.
  - Adding a chaotic real-time social timeline feed to the homepage.
- **Why Alternatives Were Rejected**: Forcing intros frustrates repeat users; social timelines introduce visual clutter and dilute brand focus.
- **Benefits**: High utility for repeat users and long-term community retention.
- **Risks**: Curated update signals must be actively maintained.
- **Future Review Criteria**: Repeat visitor retention and navigation velocity.
