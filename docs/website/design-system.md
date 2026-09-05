# SamJuniors Design System & Visual Direction

> **The only document governing tokens, layout, visual rules, and the human-craft (HUMAN-001) tests.** Consolidates the brand's visual direction, the complete design & UX principles, evidence-driven design research, the strategic design direction, the Phase 6 visual review evidence, the certified design system specification, and the UI design phase protocol.
>
> **Authority**: Derived strictly from founder company truth in [docs/company/foundation.md](../company/foundation.md) and aligned with the product direction in [product-spec.md](product-spec.md). Formal decision records live exclusively in [decisions.md](decisions.md).
>
> **How to use**: For any single page or component task, read only the relevant section of this document, of [product-spec.md](product-spec.md), and of [component-inventory.md](component-inventory.md) (the closed component set and mandatory CSS-Modules + tokens pattern contract). The literal words for anything you build are in [copy.md](copy.md). Do not read [decisions.md](decisions.md) or [docs/company/foundation.md](../company/foundation.md) unless the task specifically concerns brand identity or historical rationale. All components in `src/components/` must strictly consume design tokens from `src/styles/tokens.css`.

---

## 1. Brand Foundation for Design

*The design-relevant core of the canonical brand foundation: how the brand looks, feels, and behaves visually.*

### 1.1 Brand Anchors
The full brand story (positioning statement, core message, pillars, narrative framework, emotional journey, archetype, voice & tone) is governed in [product-spec.md §2](product-spec.md#2-brand-story--identity). The anchors that bind design work:

- **Positioning**: *"SamJuniors creates premium, purpose-driven technology products through original thinking, exceptional craftsmanship, and long-term vision."*
- **Emotional target**: Trust (primary) → Confidence (secondary) → Curiosity (supporting).
- **Archetype mix**: Visionary 50% · Innovator 30% · Creator 20%.
- **Voice in UI copy**: Premium 50% / Inspirational 25% / Technical 15% / Friendly 10%.
- **Golden Voice Rule**: Demonstrate excellence through evidence rather than exaggerated marketing language — prefer demonstrable proof, concrete details, and clean typography over superlative fluff.

### 1.2 Visual Personality & Aesthetic Influences (Philosophical Only)
- **Apple (40%)**: Typographic discipline and mastery, generous whitespace, restraint, pristine product presentation and heroization, obsessive polish.
- **Stripe (30%)**: Clear visual hierarchy, meticulous detail and structured elegance, developer-grade precision, seamless micro-details.
- **Linear (20%)**: High-contrast refined dark aesthetics, speed, purposeful fluid micro-interactions.
- **Vercel (10%)**: Geometric precision, structural clarity, modern minimalism, clarity of technical hierarchy.

### 1.3 Implementation Rule
> **Learn from design principles; never copy components, layouts, or colors.**
> Design tokens and UI components must produce an original, unmistakable SamJuniors identity.

---

## 2. Design & UX Principles

*The complete canonical set of experiential, product presentation, conversion, trust, and governance principles.*

### 2.1 Experiential & Narrative Principles

**Signature Experience Principle**
> **"SamJuniors differentiates through memorable experiences, not decoration."**
- **Mandate**: Every major page must include at least one bespoke **Signature Moment** that visitors remember and share.
- **Rules**: Navigation remains frictionless; motion has purpose; simplicity precedes novelty; originality is achieved through experience design rather than ornamental clutter.
- **Golden Rule**: *If another company can recreate the website by only changing the logo and colors, the design has failed.*

**Narrative Scroll Principle**
> **"The homepage should feel like one continuous narrative."**
- **Mandate**: Visitors experience fluid progression rather than disjointed content blocks.
- **Goal**: Make the homepage feel like a **short documentary** rather than a static brochure.

**Every Scroll Must Reward**
> **"Every scroll increment must reveal fresh value, insight, or aesthetic delight."**
- **Mandate**: Eliminate visual dead space, boring text walls, and unrewarding scroll distances.
- **Rules**: Content pacing must provide micro-rewards (interactive reactions, reveal animations, data visualizations) at regular scroll intervals.

**Curiosity Loop Principle**
> **"Spark intellectual intrigue that compels visitors to explore deeper ecosystem layers."**
- **Mandate**: Introduce concepts with elegant simplicity while providing clear hooks and teasers that invite visitors to explore underlying architecture, research, or product tools.

**Timeless Design Principle**
> **"Design for enduring elegance, not ephemeral trends."**
- **Mandate**: Anchor visual hierarchy in fundamental typography, balanced whitespace, and structural clarity (drawing principles from Apple, Stripe, Linear, and Vercel) rather than fleeting stylistic fads.

### 2.2 Product Presentation & Architecture Principles

**Progressive Product Ecosystem**
> **"Reveal the SamJuniors ecosystem progressively instead of showing every product at once."**
- **UX Rule**: *Understand one product first. Discover the ecosystem second.*
- **Progression**: `One Vision` → `One Hero Product` → `How Everything Connects` → `Complete Ecosystem`.
- **Responsive Strategies**:
  - *Desktop*: Interactive node/ecosystem visualization.
  - *Tablet*: Simplified connected touch layout.
  - *Mobile*: Story-based stacked cards with relationship indicators.

**One Hero Product Principle**
> **"Every visitor should immediately understand the flagship product of SamJuniors."**
- **Flagship Anchor**: **Lumora** is the certified hero product anchoring the brand (`SamJuniors` → `Lumora ⭐` → `Future Ecosystem`).
- **Hierarchy Rule**: Maintain flagship clarity as the ecosystem expands so visitors are never disoriented.
- **Ecosystem Expansion**: The ecosystem encompasses AI, Lumora, SaaS, Apps, Games, and Education, structured as complementary capabilities rather than scattered experiments. Future products will always be presented with clear hierarchical relationships.

**Progressive Complexity Principle**
> **"Present simple concepts first; reveal depth upon user intent."**
- **Mandate**: High-level summaries must be consumable in seconds. Technical architecture, APIs, and deep specs are accessible via expandable drawers, tabs, or dedicated subpages.

**Connected Website Principle**
> **"The website is an interconnected knowledge network, not isolated silos."**
- **Mandate**: Products, founder journey, company values, and roadmap items cross-link seamlessly so visitors can navigate organically across dimensions.

**Narrative Links**
> **"Navigation links should tell a story, not just act as labels."**
- **Mandate**: Contextual text links and CTAs describe the narrative destination (e.g., *"Explore how Lumora powers learning"* rather than generic *"Click here"*).

### 2.3 Conversion & Action Principles

**Intent-Based Conversion**
> **"Align conversion actions with visitor intent and audience persona."**
- **Mandate**: Avoid aggressive, generic pop-ups. Provide tailored pathways for Students, Investors, Developers, Parents, and Institutions based on their active journey context.

**Progressive Conversion Principle**
> **"Build trust and conviction before asking for commitment."**
- **Mandate**: Low-friction actions (e.g., *Read the Vision*, *Explore Demo*) precede high-commitment actions (e.g., *Join Beta*, *Partner with Us*).

**No Dead Ends Principle**
> **"Never leave a visitor stranded at the end of a page or flow."**
- **Mandate**: Every terminal section must offer intuitive next steps, related chapters, or meaningful onward navigation.

### 2.4 Trust, Evidence & Governance Principles

**Distributed Trust Architecture**
> **"Weave trust indicators throughout the entire experience rather than isolating them on a single page."**
- **Mandate**: Embed customer quotes, verifiable performance benchmarks, and founder commitments contextually across hero sections, product demos, and footers.

**Evidence Before Claims**
> **"Validate every assertion with concrete proof."**
- **Mandate**: Avoid empty marketing superlatives. Support claims of speed, quality, or innovation with benchmarks, testimonials, and live product demos.

**Show, Then Tell**
> **"Demonstrate capability visually before offering lengthy explanations."**
- **Mandate**: Lead with product UI previews, interactive simulations, and functional demonstrations before providing explanatory text.

**Honest Roadmap Principle**
> **"Build trust through transparency; trust is more important than hype."**
- **Mandate**: Visually and textually categorize all initiatives into strict tiers: **Live Products**, **Beta Products**, **Research**, and **Future Vision**. Never market concepts as finished products.
- **Zero speculative "Coming Soon" marketing or unverified claims.**

**Architecture Freeze Principle**
> **"Lock certified architectures to establish a rock-solid foundation for design and development."**
- **Mandate**: Once a phase architecture is certified, changes are frozen. Any subsequent revisions require a formal Architecture Decision Record (ADR) approved by the founder.

### 2.5 Human-Made Design & Implementation (HUMAN-001)

> **"The website must never exhibit recognizable, generic AI-generated visual or implementation patterns. The final product must demonstrate deliberate human-level design judgment, authorship, restraint, and product thinking."**

- **Cross-Phase Quality/Governance Constraint**: This is a mandatory quality and governance constraint, not a prescriptive visual or implementation specification. Active across all design and development phases (design research, wireframes, design system, UI design, vertical slice, implementation, and QA).
- **Prohibited Generic AI Visual Patterns** (when used without specific, meaningful justification):
  - Generic AI startup gradient ramps (e.g., purple-cyan saturated glows)
  - Excessive glassmorphism and frosted acrylic overlays
  - Floating glowing blobs, nebulas, or orbs used merely as background decoration
  - Generic futuristic/cybernetic stock illustrations
  - Excessive, uniform rounded cards with heavy drop shadows
  - Repetitive, monotonous card grids
  - Template-like, interchangeable section structures
  - Meaningless decorative particle or continuous motion
  - Generic stock-like imagery and visual cliches
  - Visually interchangeable "AI company" aesthetics
  - Generic AI-generated marketing copy and buzzword fluff
- **Design Intent Requirement**: Every visual and structural decision must serve a defined purpose related to SamJuniors identity, comprehension, storytelling, emotional tone, interaction, hierarchy, or usability. Novelty alone is never sufficient.
- **The Distinctiveness Test**:
  > *"If the SamJuniors identity were removed, could this design be mistaken for a generic AI startup website?"*
  > *If yes, the design must be reconsidered and distinctive elements re-engineered.*
- **The Human-Authorship Test**:
  > *"Does this element exist because it communicates something intentionally, or because it is a common AI-generated design pattern?"*
  > *If the latter, redesign or eliminate it.*
- **Human-Quality vs. Artificial Roughness**: Human-level quality means **precise, premium, innovative, technically excellent, accessible, performant, restrained, and distinctive**. Do not introduce artificial roughness or flaws merely to appear "human."
- **Implementation Quality Constraints**: Frontend engineering must avoid unnecessary abstractions, unvetted dependencies, duplicated generated patterns, arbitrary animations, and performance/accessibility compromises made for visual novelty.
- **AI Tooling Boundary**: AI assistance is permitted for ideation, research, implementation, and iteration; the constraint governs the **quality, character, and deliberate excellence of the final product**.

---

## 3. Design Research

*Evidence-driven design research and implications governing visual hierarchy, interaction models, motion choreography, and brand distinctiveness. Research produces **evidence-driven design implications** that directly inform wireframing, the design system, and UI design — it is not an inspiration collection or a mood board; every research output must conclude with actionable design direction. Research is scoped to the needs of the SamJuniors website, informed by the approved UX principles ([product-spec.md §6](product-spec.md#6-ux-principles-personas--user-flows)) and the foundational company identity ([docs/company/foundation.md](../company/foundation.md)).*

### 3.1 Research Protocol
- **Research domains in scope** (applied where relevant):

| # | Domain | Purpose |
|---|---|---|
| 1 | **Competitive Experience Research** | Analyse how comparable products present brand story, product hierarchy, and conversion journeys. Extract structural patterns and failure modes. |
| 2 | **Interaction Pattern Research** | Identify proven UI and micro-interaction patterns relevant to the approved UX model (narrative scroll, progressive disclosure, zero-fatigue). |
| 3 | **Visual Language Research** | Research visual directions — typography, colour space, spatial rhythm, iconography — that are coherent with SamJuniors brand character and approved principles. |
| 4 | **Accessibility Research** | Surface WCAG 2.1 AA/AAA requirements as they apply to the proposed visual language, interaction model, and target audience. |
| 5 | **Motion & Interaction Research** | Research effective, purposeful animation and transition approaches; define anti-patterns that create friction or reduce accessibility. |
| 6 | **User Behaviour Evidence** | Review relevant behavioural evidence (scroll depth, attention models, cognitive load patterns) that corroborates or challenges approved UX decisions. |
| 7 | **Experience Feasibility** | Assess technical and creative feasibility of proposed design directions relative to frontend capabilities and performance budgets. |
| 8 | **Reference & Inspiration Analysis** | Structured review of reference work, annotated with specific design implications — not aesthetic borrowing. |
| 9 | **Anti-Pattern Research** | Document interaction, visual, and narrative patterns to avoid and the evidence for avoiding them. |
| 10 | **Research Conclusions** | Synthesise research findings into ranked, actionable design implications for use in wireframing and design system decisions. |

- **Output requirements**: Every research document must identify the **research question** it addresses; cite or reference observed evidence (not personal opinion); conclude with **specific, actionable implications** for wireframes, design system, or UI design; and note any **risks or open questions** requiring founder or lead review before design proceeds.
- **Integrity rule**: Do NOT fabricate research findings. If evidence is unavailable, mark the research question as `PENDING EVIDENCE` and flag for review.
- **HUMAN-001 in research**: Research must actively identify and catalogue generic AI visual clichés to avoid, enforcing the Distinctiveness Test.

### 3.2 Research Findings

#### Domain 1 — Cinematic Web Experiences
**Observable Evidence**
- **Apple (Hardware & Software Reveal Pages)**: Uses sequenced spatial scenes, tight typography-to-media lockups, and viewport-driven reveals. Observably, motion is linked to physical or structural demonstrations of the feature (e.g., exploded hardware views, active UI workflows).
- **Linear (Brand & Changelog Releases)**: Uses high-contrast typography, dark neutral backgrounds, and snappy micro-reveals. Motion operates as rapid state transitions rather than extended theatrical animations.
- **Raycast**: Showcases tool velocity through embedded, high-frame-rate screen captures and interactive keyboard shortcuts rather than decorative metaphor.
- **Experimental Showcase Failures**: WebGL-heavy agency portfolios and narrative experiment sites exhibit observable usability degradation when they impose multi-second loading screens, hijack scroll wheel speed, or defer core product information behind sequential animations.

**Design Pattern Interpretation**
- **Why it works**: Scene-based pacing allows readers to absorb one self-contained concept per viewport height. Sticky visual anchors (such as an interactive frame remaining fixed while explanatory copy progresses) preserve spatial orientation.
- **Why it fails**: Hijacking native scroll mechanics disorients users, degrades trackpad accessibility, and triggers high bounce rates among visitors seeking direct information.

**Risks & Anti-Patterns to Reject**
- **Scroll-jacking & Scroll Traps**: Overriding native browser scrolling velocity or freezing scroll progress to force animation playback.
- **Mandatory Loader Splash Screens**: Blocking initial content rendering behind animated logos or progress indicators.
- **Abstract Narrative Obscurity**: Concealing actual product capabilities behind abstract metaphorical graphics.

**SamJuniors Implication**: Structure the homepage as a sequence of distinct narrative scenes (Parent Brand → Lumora Reveal → Ecosystem → Proof → Leadership), but preserve 100% native scroll control and instant readable headlines. Cinematic feeling must derive from lighting, typography, and crisp visual pacing—never from removing user control.

#### Domain 2 — Human & Distinctive Visual Design
**Observable Evidence**
- **Prevalent AI Startup Visual Tropes**: Broad saturation of purple-cyan gradient ramps, frosted acrylic glassmorphism cards with thick glowing borders, generic 3D floating metallic spheres, and interchangeable tagline formulas (*"Supercharge your workflow with AI"*).
- **Teenage Engineering**: Establishes distinctive brand character through industrial schematic aesthetics, ultra-precise grid alignment, custom technical typography, tactile line diagrams, and total absence of decorative background glows.
- **Framework Computer / Linear / Stripe**: Differentiate by foregrounding genuine engineering schematics, actual UI components, code architecture, and high-density layouts over generic marketing illustrations.

**Design Pattern Interpretation**
- **Why it works**: Distinctive visual authorship is created by bespoke typography pairings, disciplined spatial rhythm, hairline borders (1px structural rules), and diagrams that explain real mechanics rather than decorating empty space.
- **Why it fails**: Relying on trending UI templates produces instant visual interchangeability with hundreds of other tech websites.

**Risks & Anti-Patterns to Reject**
- **Visual Interchangeability**: Adopting template card grids with identical corner radii, glowing borders, and particle backgrounds that look like an off-the-shelf theme.
- **Artificial Roughness**: Introducing fake retro dithering, artificial scanlines, or glitch artifacts merely to simulate "human" imperfection.

**SamJuniors Implication**: To satisfy HUMAN-001, SamJuniors must pass the Distinctiveness Test (*"If the logo were removed, could this design be mistaken for a generic AI startup?"*). Visual identity should lean into architectural precision, purposeful spatial rhythm, and genuine product schematics rather than decorative glowing gradients.

#### Domain 3 — Progressive Disclosure & Depth Architecture
**Observable Evidence**
- **Stripe (Product & Developer Docs)**: Surfaces a concise value proposition in the hero, followed immediately by tabbed interactive code snippets, backed by direct links into comprehensive API reference documentation.
- **Figma (Feature Launch Pages)**: Embeds interactive sandbox widgets directly in the page flow, allowing users to test tools inline while offering expandable sheets for deep technical mechanics.
- **B2B Technical Pitfalls**: Unstructured content dumps overwhelm non-technical visitors, whereas overly sparse marketing pages fail technical diligence from engineers and investors.

**Design Pattern Interpretation**
- **Why it works**: Layering information into three distinct depths (Instant takeaway → Understand demonstration → Deep Dive specification) satisfies diverse visitor fluencies without fragmenting the site into separate silos.
- **Why it fails**: Gating technical details behind forced introductory tutorials repels expert users who need immediate technical evaluation.

**Risks & Anti-Patterns to Reject**
- **Mandatory Sequential Funnels**: Requiring users to step through introductory stages before unlocking architectural documentation.
- **Hidden Information Traps**: Burying critical specifications inside nested, non-searchable accordions.

**SamJuniors Implication**: Directly align layout components with the three information depths. The homepage must provide instant conceptual clarity on initial glance, while providing immediate, non-linear jump points into deep technical specs for developers, researchers, and partners.

#### Domain 4 — Multi-Product Parent-Company Architecture
**Observable Evidence**
- **Alphabet / Google (DeepMind, Google Research, Android)**: Parent umbrella maintains enduring corporate and institutional credibility, while distinct sub-brands and products operate with dedicated visual identities and scopes.
- **Block (Square, Cash App, TIDAL, Spiral)**: Block acts as the foundational philosophy and ecosystem layer; each venture operates as a focused product with its own domain.
- **Vercel (Next.js, v0, Turborepack, AI SDK)**: Vercel maintains the parent platform narrative while showcasing flagship offerings (Next.js, v0) with high prominence, easily adjusting focus as new tools emerge.

**Design Pattern Interpretation**
- **Why it works**: Positioning the parent brand as the permanent narrative foundation allows the company to feature flagship products prominently without coupling the company's existence to a single product lifecycle.
- **Why it fails**: When a parent company fuses its entire visual identity with its first product, launching subsequent products requires an expensive and disorienting rebrand.

**Risks & Anti-Patterns to Reject**
- **Identity Fusion**: Allowing one flagship product to completely consume the parent brand identity, forcing a disruptive rebrand when subsequent products launch.
- **Cluttered Directory Syndrome**: Listing 20 unverified concept ideas as equal cards, which dilutes focus and undermines credibility.

**SamJuniors Implication**: SamJuniors remains the permanent umbrella narrative. Lumora receives certified flagship prominence, while the layout architecture uses modular ecosystem containers ready for future products.

#### Domain 5 — Motion, Interaction & Performance
**Observable Evidence**
- **Perceptual Response Times (Nielsen Norman Group / Miller)**: UI feedback within 100ms feels instantaneous; transitions between 100ms–300ms provide smooth spatial continuity without delaying user action.
- **Web Content Accessibility Guidelines (WCAG 2.1/2.2)**:
  - **SC 2.2.2 (Pause, Stop, Hide - Level A)**: Any moving or scrolling content lasting >5 seconds must have a pause/hide control.
  - **SC 2.3.3 (Animation from Interactions - Level AAA)**: Motion triggered by user interaction can be disabled unless essential to functionality.
  - **`prefers-reduced-motion` Media Query**: Industry standard for respecting user vestibular preferences by substituting spatial movement with static layout or subtle opacity cross-fades.
- **Rendering Performance (W3C / Browser Compositor Pipelines)**: Animating CSS `transform` and `opacity` properties executes on the GPU compositor thread without triggering costly browser layout reflows or repaints.

**Design Pattern Interpretation**
- **Why it works**: Micro-interactions that reinforce physical spatial models (e.g., subtle elevation on hover, downward press on click) enhance tactile confidence.
- **Why it fails**: Continuous un-throttled canvas animations degrade battery life, trigger thermal throttling on mobile devices, and cause frame drops below 60fps.

**Risks & Anti-Patterns to Reject**
- **Decorative CPU Waste**: Unconstrained floating particle scripts running in continuous render loops.
- **Hover-Dependent Critical Data**: Placing essential specifications or actions exclusively inside hover tooltips that are inaccessible on touch screens.

**SamJuniors Implication**: Enforce the *Animation Purpose Test* (*"If removing an animation harms comprehension, keep it; if it only alters decoration, delete it"*). Restrict animated styles strictly to hardware-accelerated properties (`transform`, `opacity`) and provide full static fallbacks when `prefers-reduced-motion` is active.

#### Domain 6 — Mobile Cinematic Experiences
**Observable Evidence**
- **Apple / Arc Browser (Mobile Web)**: Re-composes desktop widescreen demonstrations into native vertical card decks and full-width interactive video loops optimized for one-thumb scrolling.
- **Touch Target Specifications (Apple HIG / WCAG)**: Apple Human Interface Guidelines and WCAG 2.1 AAA (SC 2.5.5) recommend a minimum 44×44 CSS pixel target size for interactive controls; WCAG 2.2 AA (SC 2.5.8) mandates a minimum 24×24 CSS pixel target size.
- **Mobile Failure Modes**: Mechanically scaling desktop 3-column layouts down to mobile viewports results in illegible typography, compromised tap targets, and accidental mis-clicks.

**Design Pattern Interpretation**
- **Why it works**: Re-composing desktop content into native vertical stacks respects mobile thumb-reach ergonomics and allows uninterrupted one-handed browsing.
- **Why it fails**: Horizontal carousels that hijack vertical scroll gestures create friction and cause users to get stuck mid-scroll.

**Risks & Anti-Patterns to Reject**
- **Direct Viewport Shrinking**: Scaling desktop layouts mechanically, creating illegible fonts and cramped tap targets.
- **Gesture Conflict**: Intercepting vertical swipes for horizontal carousels without explicit visual pagination affordances.

**SamJuniors Implication**: Mobile is an independently composed, first-class experience that preserves the entire narrative arc while utilizing touch-native interactions with minimum 44×44px tap targets.

#### Domain 7 — Trust, Evidence & Credibility
**Observable Evidence**
- **Basecamp / Substack**: Establish founder trust through direct, signed editorial perspectives that explain *why* the technology is built rather than issuing third-person corporate press releases.
- **PostHog / Linear**: Demonstrate credibility by publishing verifiable technical architecture, live benchmarks, transparent roadmaps, and detailed customer case studies.
- **Failure Mode in Corporate Tech**: The generic "Logo Soup Wall" (featuring 50 unrecognizable grayscale logos) and vague quotes (*"This changed our world! — John D., CEO"*).

**Design Pattern Interpretation**
- **Why it works**: Placing concrete evidence (benchmarks, screenshots, architecture schematics) directly beside product claims provides immediate validation at the exact moment of evaluation.
- **Why it fails**: Isolating all proof onto a separate "Testimonials" page leads to low discovery, as most visitors never navigate there.

**Risks & Anti-Patterns to Reject**
- **Fabricated Social Proof**: Displaying unverified metrics, placeholder testimonials, or synthetic partner logos.
- **Corporate Distancing**: Using third-person corporate jargon that obscures who actually built the technology.

**SamJuniors Implication**: Contextual proof (People, Product, Builder, Evidence) must be woven directly into narrative scenes with a zero-fabrication standard.

#### Domain 8 — Cognitive Load, Ergonomics & Visual Rest
**Observable Evidence**
- **Cognitive Psychology & Ergonomics (Sweller / Cowan)**: Working memory is constrained (holding approximately 4±1 active information chunks in visual-spatial processing).
- **Web Reading Ergonomics (Nielsen Norman Group / Bringhurst)**: Reading fatigue increases rapidly when line lengths exceed 75–80 characters or drop below 45 characters. Optimal scanning occurs with generous paragraph spacing and distinct visual hierarchies.
- **Visual Rest in Editorial Design**: High-impact editorial layouts (e.g., Apple, Stripe Press) intersperse information-dense technical sections with clean typographical pause moments.

**Design Pattern Interpretation**
- **Why it works**: Limiting each viewport to one dominant cognitive purpose prevents reader choice paralysis (Hick-Hyman Law) and ensures effortless scanning.
- **Why it fails**: Simultaneous visual stimuli (animated banners, multiple primary buttons, auto-playing video) trigger sensory fatigue and high bounce rates.

**Risks & Anti-Patterns to Reject**
- **Visual Cacophony**: Displaying animated badges, competing gradient cards, auto-playing videos, and floating chat widgets simultaneously.
- **Infinite Sprawl**: Unbounded scrolling without clear visual section breaks, creating reader exhaustion.

**SamJuniors Implication**: Implement the Zero Fatigue Principle and One Dominant Cognitive Purpose per scene. Generous whitespace and typographic discipline will prevent reader fatigue across the entire narrative.

### 3.3 Research Conclusions — 8 Core Implications
The following implications govern wireframing, the design system, and UI design:

1. **Theatrical Pacing with Native Controls**: Deliver cinematic drama through lighting, high-contrast typography, and spatial composition while preserving 100% native scroll control and instant wayfinding (no scroll-jacking or mandatory loader screens).
2. **Distinctive Architectural Aesthetic (HUMAN-001)**: Reject generic AI visual cliches (saturated purple gradients, glowing orbs, monotonous cards); anchor visual identity in razor-sharp schematics, deliberate typography, and high-craft layout rhythm.
3. **Three-Layer Progressive Depth**: Structure all pages to deliver instant conceptual clarity on initial glance (passing the 5-second comprehension heuristic), progressive visual understanding on scroll, and deep technical specs on intent.
4. **Permanent Parent Umbrella with Spotlight Products**: Position SamJuniors as the enduring foundation and narrative anchor, with Lumora given flagship prominence within a scalable multi-product container.
5. **Comprehension-First Motion Budget**: Enforce the Animation Purpose Test across all transitions; restrict motion strictly to hardware-accelerated transforms (`transform`, `opacity`); provide comprehensive static fallbacks for `prefers-reduced-motion`.
6. **Native Touch Re-Composition**: Design mobile layouts as an independent, thumb-friendly vertical narrative with minimum 44×44px touch targets (Apple HIG / WCAG AAA) and zero hover-dependencies.
7. **Contextually Embedded Verifiable Proof**: Weave concrete product demonstrations, benchmarks, and authentic founder commitments directly beside relevant claims rather than using disconnected proof walls.
8. **Cognitive Rest & Spatial Discipline**: Protect reader energy using 50–75 character line lengths, generous section breathing room, and one dominant focal point per scene.

---

## 4. Strategic Design Direction

*The authoritative strategic design direction translating company truth, information architecture, content strategy, UX principles, and design research into a cohesive visual, spatial, and experiential design language.*

### 4.1 Experience Intent: The Visitor's Psychological Journey

```
┌─────────────────────────────────────────────────────────────┐
│ 1. FEEL: Calm, Authority & Purposeful Ambition              │
│    "This is an enduring technology institution, not hype."  │
├─────────────────────────────────────────────────────────────┤
│ 2. UNDERSTAND: Systemic Rigour & The 4-Point Filter        │
│    "They turn ambitious ideas into real, useful systems."   │
├─────────────────────────────────────────────────────────────┤
│ 3. BECOME CURIOUS: Tangible Craft in Action (Lumora)        │
│    "How does this tool actually feel to use and build with?"│
└─────────────────────────────────────────────────────────────┘
```

- **First 5 Seconds**: The visitor encounters immediate intellectual clarity—SamJuniors is an AI-first parent technology ecosystem. No confusing marketing riddles or slow-loading decorative video loops.
- **Middle Exploration**: As the visitor explores, they uncover the engineering ethos: a focus on enduring utility, human agency, high craft, and systemic scale.
- **Product Engagement**: Curiosity is rewarded by direct, tangible interaction with flagship expressions rather than passive sales copy.

### 4.2 Brand Experience: The AI-First Parent Company
SamJuniors does not present itself as a venture capital incubator, an agency, or a single-product SaaS startup. It feels like an **authoritative technology laboratory and product institution**:

- **Institutional Gravity with Builder Energy**: Serious, grounded, and enduring, yet pulsating with active engineering momentum.
- **Intellectual Restraint**: Expressed through quiet confidence. It avoids superlative marketing claims (*"revolutionary"*, *"magical"*, *"disruptive"*), allowing precision and verifiable architecture to build trust.
- **Human Leadership Boundary**: Founder presence adds authentic credibility, conviction, and craftsmanship without collapsing the company brand into a personal blog.

### 4.3 SamJuniors → Product Relationship
The visual and navigational architecture enforces a strict parent-to-expression hierarchy:

1. **Permanent Parent Narrative**: The homepage opens and concludes under the authoritative SamJuniors brand identity.
2. **Product as Proof**: Products (such as **Lumora**) are introduced as the physical, tangible proof of what SamJuniors builds, rather than isolated SaaS pitches.
3. **Dynamic Spotlight Prominence**: The interface provides dedicated spatial staging for current flagships without allowing any single product's visual identity to overwhelm the parent ecosystem.
4. **Autonomous Deep-Entry Integrity**: When a visitor lands directly on a product page (`/products/lumora`), the product identity takes visual prominence while parent navigation and breadcrumbs maintain clear corporate lineage.

### 4.4 Cinematic Language (Without Forced Friction)
Cinematic storytelling at SamJuniors is defined as **dramatic visual clarity and spatial depth**, strictly decoupled from interaction friction:

- **Zero Scroll-Jacking**: Natural, browser-native scroll physics are 100% preserved. The visitor retains predictable, continuous control over pacing (Visitor Control principle).
- **Spatial Rhythm**: Viewports breathe through generous negative space and deliberate contrast shifts between calm editorial reading zones and dynamic product spotlight stages.
- **Ambient Presence**: Subtle, continuous background depth (such as low-contrast ambient spatial coordinates) creates an atmosphere of deep computing space without competing with text legibility.
- **Concise Narrative Arcs**: The narrative unfolds across a tight, focused sequence that can be scanned in 15 seconds or explored deeply over minutes.

### 4.5 Visual Language & Aesthetic Synthesis
The visual language establishes high-end engineering craft through deliberate material contrast:

- **Contrast & Canvas Tone**: Deep, rich obsidian and dark slate backgrounds (`#08090c` to `#12151c`) paired with crisp, high-legibility text (`#f0f3f6`) to establish focus and visual rest.
- **Color Philosophy**:
  - **SamJuniors Parent Palette**: Architectural neutrals, warm stone accents (`#d4a373` / warm amber), and deep slate.
  - **Product Expression Accents**: Distinct product accent tones (e.g., Lumora's ice-blue `#70b8ff`) used with surgical restraint on interactive controls and spotlight badges.
- **Texture & Materiality**: Subtle hairline borders (`rgba(255, 255, 255, 0.08)`), refined matte surfaces, and focused glassmorphism used only where physical elevation hierarchy is required.
- **Product Visualization**: High-fidelity, functional interface canvases and structural schematics rather than generic 3D illustrations or abstract device frames.

> [!NOTE]
> **Palette reconciliation — RESOLVED by [ADR-001 H2](adr/ADR-001-homepage-experience-reconciliation.md) (founder-approved 2026-08-31), amended 2026-09-05**: the values above are the *superseded* strategic-direction palette, retained as historical context only. The certified Phase 7 token system (implemented in `src/styles/tokens.css` and specified in [§6](#6-design-system-specification)) is **canonical**: institutional warm copper `#c89666` (parent identity), obsidian `#0b0c0f` (base canvas), text `#f4f6fa`, and — for the product's own evidence surface only — the `--color-evidence-*` roles led by `#4f3db0` ([§6.2](#62-semantic-color-system)). No competing palette definitions are maintained.
>
> **Second supersession — the steel blue is gone (2026-09-05 amendment, recording commit `9c3f311` of 2026-09-03).** ADR-001 H2 and the two sections below previously named steel blue `#628cb3` as a third canonical accent for "product intelligence interaction". It was **removed from the token system as a product-truth correction** and this documentation was three commits behind that fact. Two independent reasons, both from the commit's own record: it was being applied to *parent-company* chrome (`/about` eyebrow and filter numerals, `/products` eyebrow, flagship chip, explore links), which inverts the company→product hierarchy the site exists to communicate; and Lumora's own brand system forbids the hue outright ("No indigo. No blue.", primary `#372198`), so a blue "Lumora accent" was a fabricated product attribute. The tokens `--color-accent-blue`, `-hover`, `-muted`, `-border` and the aliases `--accent-blue` / `--accent-steel` / `--accent-emerald` were deleted rather than left unreferenced. Those surfaces now carry the copper company accent; the product surface carries `--color-evidence-*`.
>
> **This amendment corrects the record, not the code — the token must not be reintroduced.** Founder decision, 2026-09-05: where [AGENTS.md §2](../../AGENTS.md#2-source-of-truth-hierarchy)'s "documentation governs, code must be refactored" would have mandated restoring `#628cb3`, the documentation was the stale artifact and the code was right. Any future request to restore a blue accent is a product-truth question for the founder, not a token edit.

### 4.6 Human-Authored Design (HUMAN-001)
True distinctiveness requires rejecting both generic AI startup clichés and reactionary "anti-AI" clichés:

```
┌─────────────────────────────────────────────────────────────┐
│ ❌ REJECTED AI STARTUP CLICHÉS                              │
│ • Purple/cyan blur gradients and floating glowing orbs      │
│ • Monotonous grids of rounded feature cards                │
│ • Decorative particle fields without semantic meaning       │
│ • Vague marketing slogans ("Supercharge your workflow")     │
├─────────────────────────────────────────────────────────────┤
│ ❌ REJECTED "ANTI-AI" CLICHÉS                               │
│ • Harsh brutalist monochrome grids everywhere               │
│ • Endless meaningless faux-terminal ASCII text              │
│ • Monotonous hairline wireframe boxes without visual rest   │
│ • Intentionally degraded or hostile typography              │
├─────────────────────────────────────────────────────────────┤
│  THE SAMJUNIORS SYNTHESIS                                 │
│ • Refined editorial typography with architectural precision │
│ • Purposeful negative space and calm visual pacing          │
│ • Tangible, interactive product stages                      │
│ • Verifiable engineering truth and transparent conviction   │
└─────────────────────────────────────────────────────────────┘
```

### 4.7 Typography Direction
The typographic system creates an intentional dialogue between **intellectual authority** and **tactile precision**:

- **Display Tier (Hero & Major Transitions)**: A modern grotesque or high-craft display face with tight letter-spacing, commanding immediate respect without shouting.
- **Body & Editorial Tier**: Clean, neutral, high-legibility sans-serif optimized for reading long-form thesis statements and capability descriptions.
- **Technical & Metadata Tier**: Crisp monospace (`JetBrains Mono` / system monospace) for structural badges, category markers, and verifiable benchmarks.
- **Hierarchy Restraint**: Strict typographical scale limiting variations to 4 distinct sizes per page to eliminate visual noise.

### 4.8 Motion Principles & Performance Boundaries
Motion exists to serve comprehension, not decoration:

- **What Motion Is For**:
  - Direct feedback on user-initiated actions (hover elevations, tab switches, mode changes).
  - Spatial orientation during progressive disclosure expansions.
  - Subtle ambient background presence establishing spatial depth.
- **What Motion Is NOT For**:
  - Distracting loop animations on static body copy.
  - Auto-playing carousels that strip reading control.
  - Long entrance delays that make visitors wait for text to become visible.
- **Pacing Budget**: All micro-interactions complete within **100ms–200ms**; spatial transitions complete within **250ms–350ms** using standard ease-out curves.
- **Accessibility**: Strict enforcement of `prefers-reduced-motion: reduce`. When active, all motion collapses instantly to clean static layouts (Recovery & Continuity principle).

### 4.9 Interaction Character
Interactions at SamJuniors are **discoverable, purposeful, low-friction, and visitor-controlled**:

- **Zero Mystery Meat**: Interactive elements feature clear visual affordances and cursor cues.
- **Progressive Disclosure on Demand**: High-level value propositions are instantly visible; deep technical specifications expand inline without navigating away from context.
- **Tactile Feedback**: Subtle, immediate state changes confirm user intent without heavy layout shifts.

### 4.10 Independent Mobile Composition (Mobile Is First-Class)
Mobile is designed as a first-class, independently composed experience:

- **Ergonomic Touch Targets**: All interactive targets adhere to a minimum of **44px × 44px**.
- **Thumb-Zone Layouts**: Primary actions and switcher tabs reside within natural thumb reach.
- **Fluid Vertical Rhythm**: Multi-column desktop grids re-compose into an intentional vertical editorial scroll rather than mechanically compressed cards.
- **Zero Horizontal Traps**: Prevents nested horizontal scroll containers from hijacking vertical thumb momentum.

### 4.11 Information Density & Cognitive Pacing
To prevent cognitive fatigue and scrolling exhaustion:

- **One Dominant Purpose per Stage**: Each spatial view focuses on a single core message (e.g., *Parent Vision*, *The 4 Filters*, *Lumora Showcase*, *Founder Perspective*).
- **Visual Rest Zones**: Generous vertical spacing (`clamp(80px, 12vh, 140px)`) between major sections allows the eye to rest and reset between dense topics.
- **Scannable Hierarchy**: Clear typographic anchors allow skimming visitors to grasp 100% of the core message in under 15 seconds.

### 4.12 Product Storytelling Strategy
Products are introduced through an organic, 3-step storytelling arc:

1. **The Technological Problem / Horizon**: The systemic challenge or opportunity being tackled.
2. **The Tangible Platform**: The living product interface or interactive demonstration stage.
3. **The Core Capabilities & Verification**: Verifiable features and architectural benchmarks that prove the solution works.

### 4.13 Scalability for Future Products
The design language scales effortlessly to future ventures:

- **Ecosystem Portfolio Surface (`/products`)**: A dedicated portfolio architecture for systematic exploration of all active, beta, and research tracks.
- **Pluggable Flagship Staging**: The homepage product showcase can rotate prominence or feature multiple products in parallel without modifying global typography, navigation, or footer architecture.

### 4.14 Design Anti-Patterns (Explicitly Prohibited)
1. **No Scroll-Jacking**: Never lock, hijack, or accelerate browser scroll behavior.
2. **No Fabricated Credibility**: Never invent fake testimonials, unverifiable metrics, or placeholder partner logos.
3. **No Decorative AI Fluff**: No glowing purple orbs, meaningless spinning 3D rings, or generic stock illustrations.
4. **No Pop-Up Traps**: Zero modal takeovers, forced lead capture overlays, or exit-intent popups.
5. **No Monotonous Card Walls**: Avoid repetitive grids of identical rounded rectangles.

### 4.15 Practical Design Tests
Every major design decision and component implementation must pass these 6 tests:

| Test | Core Evaluation Question |
| :--- | :--- |
| **1. Distinctiveness Test** | *Could this design belong uniquely to SamJuniors, or does it look like a generic tech template?* |
| **2. Comprehension Test** | *Does this visual choice increase understanding or does it create visual confusion?* |
| **3. Complexity Test** | *Does this interactive element earn its cognitive and engineering friction?* |
| **4. Multi-Product Test** | *Would this visual layout still work seamlessly if another flagship product was featured?* |
| **5. Mobile Test** | *Does this feel natively composed for a mobile thumb or is it a squished desktop layout?* |
| **6. Truth Test** | *Does this interface make any claims that are not backed by verified founder documentation?* |

### 4.16 Open Design Questions (For Founder & Stakeholder Review)
1. **Display Typography Selection**: Balancing a modern refined serif accent (intellectual gravitas) versus a pure modern grotesque (engineering precision) for primary headlines.
2. **Interactive Product Canvas Fidelity**: Determining the optimal level of interactive simulation in the homepage product showcase before deep-linking into the dedicated `/products/lumora` environment.
3. **Founder Presence Density**: Calibrating the spatial prominence of the signed founder letter on the homepage versus maintaining full depth on `/about`.

### 4.17 Wireframe Protocol
*Structural blueprint rules that governed prototyping. Wireframing documents low-fidelity layout blueprints and spatial arrangements:*
- Layout wireframes for core viewports (mobile, tablet, desktop)
- Structural placement of content blocks and CTAs
- Interaction flow blueprints and state transitions
- Responsive reflow rules and layout constraints

*Rules:*
- Focus exclusively on layout structure and content hierarchy, not visual styling or finalized graphics.
- Wireframe specifications must align with approved UX decisions (see [product-spec.md §6](product-spec.md#6-ux-principles-personas--user-flows)) and content structure (see [product-spec.md §4](product-spec.md#4-content-strategy--messaging-framework)).
- **Design Governance (HUMAN-001)**: Avoid repetitive card grids, cookie-cutter section blocks, and template-like layouts; enforce intentional spatial hierarchy and purposeful human authorship.
- Wireframe specifications must be reviewed and signed off prior to design system finalization.

---

## 5. Phase 6 Experience Prototype — Visual Evidence & Review Sheet

*Visual design review record capturing high-resolution rendered evidence from the revised Next.js production application at Desktop (1440px) and Mobile (390px) viewports.*

- **Application Preview URL**: `http://localhost:3000` *(running locally during review)*
- **Original review branch**: `feat/phase-6-visual-evidence` (since merged into `main` and deleted)
- **Source Directory**: [`Screenshots/`](../../Screenshots)

### 5.1 Key Architectural & Visual Transformations
1. **Elimination of Generic AI Atmosphere**:
   - Removed decorative floating particles and starfields. Replaced with authentic obsidian materiality, subtle 1px geometric alignment lines, and clean typographic spacing.
2. **Broken Card-Grid Monotony**:
   - Replaced repetitive card grids with dynamic compositional modes: asymmetric editorial layouts, a structural company coordinate ledger, and authentic long-form typography.
3. **Translation of Philosophy (No Documentation Transcription)**:
   - Removed literal transcription headers (*"THE BUILDING FILTER 01, 02, 03, 04"*).
   - Replaced with authentic company prose (*Why We Build: Utility Over Fleeting Novelty · Human Agency Over Automation · Local Privacy & Open Architecture*).
4. **Authentic, Restrained Lumora Product Stage**:
   - Removed glowing blue gradient orbs and dashed orbits.
   - Built a restrained, tactile product workbench showing real spatial node hierarchies, clean coordinate readouts, property inspectors, and client-side tab switching (*Spatial Graph*, *Context Engine*, *Target Export*).
5. **Human Editorial Founder Perspective**:
   - Replaced bordered card with an authentic essayistic letter layout, signature block, and warm typographic tone.
6. **Intentional Mobile Hierarchy**:
   - Re-composed with spacious vertical breathing room, high-legibility typographic scale, and zero horizontal swipe traps.

### 5.2 Desktop Screenshots (1440px Viewport)

| Required View | Description | File Path |
| :--- | :--- | :--- |
| **1440px Desktop Hero** | High-contrast editorial hero with company coordinate ledger | [`Screenshots/desktop_01_hero.png`](../../Screenshots/desktop_01_hero.png) |
| **Desktop Lumora Section** | Restrained spatial logic workbench and core pillars | `Screenshots/desktop_03_lumora.png` *(not present in repository — see TODO in [decisions.md](decisions.md))* |
| **Desktop Founder / Ending** | Signed leadership letter, expanding horizon, and dialogue | `Screenshots/desktop_04_founder_ending.png` *(not present in repository — see TODO in [decisions.md](decisions.md))* |
| **Desktop Full Journey** | Complete unbroken full-page scroll flow | [`Screenshots/desktop_full_journey.png`](../../Screenshots/desktop_full_journey.png) |

### 5.3 Mobile Screenshots (390px Viewport — iPhone 14 Standard)

| Required View | Description | File Path |
| :--- | :--- | :--- |
| **390px Mobile Hero** | Vertical typographic hierarchy with generous touch targets | [`Screenshots/mobile_01_hero.png`](../../Screenshots/mobile_01_hero.png) |
| **Mobile Lumora Section** | Mobile-adapted workbench and tactile feature stack | `Screenshots/mobile_03_lumora.png` *(not present in repository — see TODO in [decisions.md](decisions.md))* |
| **Mobile Ending** | Human perspective quote, ecosystem vision, and doorways | `Screenshots/mobile_04_founder_ending.png` *(not present in repository — see TODO in [decisions.md](decisions.md))* |
| **Mobile Full Journey** | Complete mobile full-page scroll render | [`Screenshots/mobile_full_journey.png`](../../Screenshots/mobile_full_journey.png) |

Additional committed evidence not listed in the original review sheet: [`Screenshots/lumora_interaction_close.png`](../../Screenshots/lumora_interaction_close.png).

---

## 6. Design System Specification

*The authoritative design tokens, visual primitives, typography, layout models, motion rules, and accessibility standards for the SamJuniors web platform. Status: **Approved / Implemented** in `src/styles/tokens.css` and `src/app/globals.css`.*

### 6.1 Design Philosophy & Aesthetic Foundation
The SamJuniors design language expresses a serious, enduring technology institution revealing its work. It embodies:
- **Architectural Restraint**: Deep obsidian foundations, surgical hairline dividers, and generous negative space.
- **Material Distinction**: Institutional Warm Copper (`#c89666`) carries parent identity everywhere in the obsidian environment — it is the *only* company accent. The flagship's evidence surface is distinguished by leaving that environment entirely (light canvas + `--color-evidence-*`, §6.2), not by a second accent hue in the same space. There is deliberately no "product interaction" accent: see the §4.5 supersession note.
- **Editorial Typography**: High-contrast, balanced typography hierarchy with clear semantic roles.
- **Human Craft (HUMAN-001)**: Purposeful layouts that reject repetitive card templates, generic AI gradients, and superficial interface novelties.

### 6.2 Semantic Color System

> [!NOTE]
> **Re-verified line-by-line against `src/styles/tokens.css` on 2026-09-05.** The audit found two wrong
> values, three obsolete rows and eleven missing tokens; all are corrected below. Two of the corrections are
> substantive rather than clerical and are recorded in [§4.5](#45-visual-language--aesthetic-synthesis)
> (steel-blue removal) and in the row notes below (text-tone contrast fix). Where this table and
> `tokens.css` disagree again, that gap is a finding to raise — not a licence to converge either way.

**The obsidian environment — SamJuniors (`tokens.css` §1)**

| Token | Value | Role & Usage |
| :--- | :--- | :--- |
| `--color-bg-base` | `#0b0c0f` | Primary canvas background (Deep Obsidian). |
| `--color-bg-surface` | `#12141a` | Base component/workbench background. |
| `--color-bg-surface-elevated` | `#171a22` | Raised elements, cards, and modal layers. |
| `--color-bg-surface-subtle` | `#0e1015` | Recessed backgrounds, sidebar outliners, the signature scene's elevated band and the Horizon closure tone. |
| `--color-bg-overlay` | `rgba(255, 255, 255, 0.03)` | Subtle hover fills and row highlights. |
| `--color-bg-glass` | `rgba(18, 20, 26, 0.85)` | Intended glass surface. ⚠️ **Defined, never referenced** — the sticky header hardcodes `rgba(11, 12, 15, 0.94)` instead (debt D12). |
| `--color-text-primary` | `#f4f6fa` | Main headlines and primary body text — **17.4:1** on base. |
| `--color-text-secondary` | `#959fae` | Secondary body text, subheadings, and captions — **7.3:1**. |
| `--color-text-muted` | `#7e8899` | Inactive labels, metadata, and timestamps — **5.5:1**. |
| `--color-text-dim` | `#6f7a8c` | De-emphasized technical identifiers — **4.5:1**. |
| `--color-border-hairline` | `rgba(255, 255, 255, 0.08)` | Section boundaries and major structural lines. |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.04)` | Internal item separators and subtle outlines. |
| `--color-border-active` | `rgba(200, 150, 102, 0.35)` | Active tab borders and focused element strokes. |
| `--color-border-solid` | `#212530` | Opaque structural divider for places a translucent hairline would vanish. |

| `--color-accent-copper` | `#c89666` | **The company accent** — parent brand markers, eyebrows, mono ordinals, link rules. The only accent hue in the obsidian environment. |
| `--color-accent-copper-hover` | `#d8a676` | Interactive hover state for copper elements. |
| `--color-accent-copper-muted` | `rgba(200, 150, 102, 0.12)` | Accent badge fills and quiet indicators. |
| `--color-accent-copper-border` | `rgba(200, 150, 102, 0.25)` | Copper-tinted borders on chips, active bands and cards. |
| `--color-accent-copper-glow` | `rgba(200, 150, 102, 0.4)` | Intended emphasis glow. ⚠️ **Defined, never referenced** — `HeroSection.module.css` hardcodes the identical value instead (debt D12). |
| `--color-status-warning` | `#ff9e66` | Collision and workload bottleneck indicators. ⚠️ **Defined, never referenced** (D13). |
| `--color-status-warning-bg` | `rgba(255, 158, 102, 0.1)` | Warning row fill. ⚠️ **Defined, never referenced** (D13). |
| `--color-status-warning-border` | `rgba(255, 158, 102, 0.3)` | Warning row stroke. ⚠️ **Defined, never referenced** (D13). |
| `--color-status-success` | `#4ea881` | Verified and resolved state indicators. ⚠️ **Defined, never referenced** (D13). |
| `--color-status-success-bg` | `rgba(78, 168, 129, 0.1)` | Resolved row fill. ⚠️ **Defined, never referenced** (D13). |

> **Text-tone correction (2026-09-05, recording commit `5b58001` of 2026-09-01).** This table previously
> listed `--color-text-muted: #5a6372` and `--color-text-dim: #404652`. Both **failed WCAG 2.1 AA for
> normal-size text** (3.3:1 and 2.1:1 against `--color-bg-base`) and were corrected in code to the values
> above; `tokens.css` carries the measurement inline plus the standing rule *keep any new tone at or above
> 4.5:1*. The correction shipped inside the product-truth commit and was never separately recorded — it is
> the one unambiguous accessibility *repair* in that otherwise unexplained diff.
> [qa-checklist.md §2.5](qa-checklist.md#25-accessibility-wcag-21-aa-minimum)'s contrast table was stale for
> the same reason and is corrected in the same pass. All four text tones now clear AA for body text.

**The product evidence surface — Lumora's own environment (`tokens.css` §1b)**

The evidence band deliberately *leaves* the obsidian environment and adopts the product's light canvas: what
is shown there belongs to Lumora, not to the parent company. This is the sanctioned way to distinguish
product material — **not** a second accent hue inside the company environment (§4.5). These roles exist so
the handoff is token-driven rather than hardcoded per component.

| Token | Value | Role & Usage |
| :--- | :--- | :--- |
| `--color-evidence-canvas` | `#f7f6f2` | The band's light canvas — the signal that the environment changed. |
| `--color-evidence-surface` | `#ffffff` | Cards and panels inside the band. |
| `--color-evidence-ink` | `#1b1a25` | Primary text on the light canvas. |
| `--color-evidence-ink-muted` | `#55525f` | Secondary text, captions and disclosures on the light canvas. |
| `--color-evidence-accent` | `#4f3db0` | The product's own accent — a violet in Lumora's real brand family (brand primary `#372198`). |
| `--color-evidence-border` | `rgba(27, 26, 37, 0.12)` | Hairlines and card strokes on the light canvas. |
| `--color-evidence-tag-bg` | `rgba(79, 61, 176, 0.08)` | Per-item tag fills (e.g. the demonstration-data label). |

**Aliases.** `tokens.css` also defines fourteen shorter aliases (`--accent-copper`, `--text-main`,
`--border-hairline`, `--bg-base`, …) resolving to the `--color-*` roles above. The token file labels them
*backward-compatibility*, but the 2026-09-05 audit found the codebase uses them far more than the canonical
names — `--accent-copper` appears 36 times against 7 for `--color-accent-copper`. Both forms resolve, so
nothing is broken; the naming is simply inconsistent, and this document's previous implication that the
`--color-*` forms were the names in use was wrong. Registered as **D14**: prefer `--color-*` in new work and
let a scheduled pass decide whether to converge or formally bless the short forms.

### 6.3 Typography Hierarchy

**Font Families**
- **Primary Sans**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`
- **Technical Mono**: `JetBrains Mono`, `ui-monospace`, `Menlo`, `monospace`

**Typographic Scale**
- **Display (`h1.headline`)**: `clamp(2.6rem, 5.8vw, 4.4rem)`, line-height `1.08`, letter-spacing `-0.038em`, font-weight `500`
- **Section Headline (`h2.title`)**: `clamp(2.2rem, 4.2vw, 3.4rem)`, line-height `1.12`, letter-spacing `-0.03em`, font-weight `500`
- **Subsection Heading (`h3`)**: `1.25rem`, line-height `1.35`, letter-spacing `-0.015em`, font-weight `500`
- **Lead Paragraph (`.lead`)**: `clamp(1.1rem, 1.9vw, 1.3rem)`, line-height `1.62`, font-weight `300`, max-width `780px`
- **Body Text (`p`)**: `1.0rem`, line-height `1.65`, font-weight `300`
- **Small Body (`.bodySmall`)**: `0.88rem`, line-height `1.55`, font-weight `300`
- **Kicker / Eyebrow (`.kicker`)**: `0.76rem`, monospace, uppercase, letter-spacing `0.1em`, font-weight `500`
- **Metadata Tag (`.meta`)**: `0.72rem`, monospace, letter-spacing `0.04em`

### 6.4 Spacing & Rhythm

**Spacing Scale**
- `--space-1`: `4px` (Micro gap)
- `--space-2`: `8px` (Icon/label gap)
- `--space-3`: `12px` (Tight component padding)
- `--space-4`: `16px` (Standard component padding)
- `--space-5`: `24px` (Card padding / item gap)
- `--space-6`: `32px` (Medium section gap)
- `--space-7`: `48px` (Large block gap)
- `--space-8`: `64px` (Major section padding)
- `--space-9`: `96px` (Section separator spacing)
- `--space-10`: `120px` (Hero top padding)

**Layout Boundaries**
- `--container-max`: `1240px` (Wide viewport bound at 1440px)
- `--container-narrow`: `840px` (Perspective / Quote focus column)
- `--container-editorial`: `760px` (Constrained reading column)
- `--container-padding`: `clamp(20px, 4vw, 40px)`
- `--section-spacing`: `clamp(64px, 9vh, 104px)`

### 6.5 UI Primitives & Components

> [!IMPORTANT]
> **Corrected 2026-09-05 (founder decision) — the primitives are global CSS classes, not React components.**
> This section previously specified `SectionHeader` and `Button` components under `src/components/ui/`. That
> directory was **deleted** in commit `5b58001` (2026-09-01) and no equivalent replaced it. The sanctioned
> path is the global class set in `src/app/globals.css`, consumed as `className` on a semantic `<a>`,
> `<Link>` or `<button>`. Documented here as it actually is; the founder's instruction was to document
> reality rather than rebuild the components. This closes debt **D9** as obsolete.

**Interactive primitives (`src/app/globals.css` — "Button & Interactive Link Primitives")**

Every one of the three sets `min-height: var(--min-touch-target)` (44px) and `display: inline-flex`, so the
WCAG 2.5.8 target size is a property of the primitive rather than something each caller has to remember.

| Class | Treatment | Adoption |
| :--- | :--- | :--- |
| `.btn-primary` | High-contrast solid: `--color-text-primary` background, `--color-bg-base` text, `12px 24px`, `--radius-sm`, 1px lift + shadow on hover. **The strongest action on a page** — [company-hierarchy.test.tsx](../../src/app/company-hierarchy.test.tsx) asserts the homepage's first one is company-scoped. | 6 files |
| `.btn-secondary` | Elevated surface (`--color-bg-surface-elevated`) with a hairline border that warms to `--color-border-active` on hover. | ⚠️ **0 uses — dead CSS (D15)** |
| `.text-link` | Editorial inline link: `--color-text-secondary` rising to primary on hover, `--space-2` gap for an arrow glyph. The quiet, supporting action. | 8 files |
| `.hairline-divider` | Structural utility: full-width 1px `--color-border-hairline` rule. | ⚠️ **0 uses — dead CSS (D15)** |

**Section headers** are composed per scene from §6.3's type roles (mono ordinal · uppercase kicker · balanced
`h2.title` · optional constrained `.lead`) inside each component's own CSS Module. There is deliberately no
shared component: the cinematic scenes own their widths and vertical rhythm (ADR-001), so a single header
component would have had to accept enough overrides to stop being a primitive. The *typographic* contract is
still binding — it lives in §6.3, not in a component.

> Full component contracts — every component's file, type, props, variants, CSS-module class inventory,
> content dependencies, the closed-set rule, and the binding CSS-Modules + tokens pattern contract — are
> governed in [component-inventory.md](component-inventory.md).

### 6.6 Surfaces & Anti-Card-Grid Policy
Surfaces are used only where structural containment enhances cognitive clarity:
- **Product Workbench**: Highlighting live simulation and demonstration.
- **Focus Sessions & Sprints**: Containing active timers and objectives.
- **Diagnostic Inspector**: Grouping key workload parameters.
- **General Content**: Presented via open editorial layouts, asymmetric columns, and vertical spines rather than repetitive 3-box card rows.

### 6.7 Lumora Exhibit Primitives
Presentation primitives for the flagship demonstration (isolated from internal product implementation):
- **Workbench Frame**: 3-column container with top chrome and status pill.
- **Step Tabs**: 4-phase sequential progression (`Context Ingest` → `Understanding` → `Decision Support` → `Action Workspace`).
- **Sources Outliner**: Left-hand sidebar displaying active academic inputs.
- **Canvas Stage & HUD**: Center visualization with timeline collision maps and mentor recommendations.
- **Diagnostics Inspector**: Right-hand telemetry readout.
- **Step Controls**: Backward/forward cycle buttons (`← [ 1 / 4 ] Next Step →`).

### 6.8 Motion & Micro-Interactions

> **Status**: extended 2026-08-31 by [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md) (founder-approved) from the prior micro-feedback-only spec into the implementable scene/motion contract for the 5-scene executable homepage ([product-spec.md §3.4.1](product-spec.md#341-current-executable-experience-5-scenes)). The original micro-feedback rules are retained unchanged as §6.8.1. This section is the implementation contract for the cinematic experience pass — until that pass is approved and built, the current static presentation remains compliant (everything below is progressive enhancement over a fully static, server-rendered baseline).

**Motion exists to serve comprehension, not decoration** ([§4.8](#48-motion-principles--performance-boundaries) governs intent; this section specifies implementation). Every motion element below must pass the Animation Purpose Test and is restricted to GPU-composite properties (`transform`, `opacity`) only.

#### 6.8.1 Micro Feedback (unchanged, baseline)
- **Micro Feedback**: `150ms` `--duration-fast` with cubic-bezier `(0.16, 1, 0.3, 1)` for button hovers and tab selections.
- **Spatial Transitions**: `250ms` `--duration-normal` for modal reveals and panel changes.
- **Reduced Motion**: Complete override via `@media (prefers-reduced-motion: reduce)` ensuring instantaneous state transitions.
- **Strict Prohibitions**: Zero scroll-jacking, zero forced scroll snapping, zero ambient floating particles, zero infinite animated gradients.

#### 6.8.2 Motion Classes & Budgets (total inventory)
| Class | Trigger | Budget | Properties |
| :--- | :--- | :--- | :--- |
| Micro feedback | hover / focus / active | 100–200ms | color, border, `translateY(≤2px)` |
| Scene transitions | sticky-phase state change, panel swap | 250–350ms `--duration-normal` | `transform`, `opacity` |
| Load choreography | once, on first page load | ≤ 500ms total sequence, 60–90ms stagger | `transform`, `opacity` |
| First-entry reveal | element first enters viewport | 250–350ms, stagger ≤ 3 siblings | `transform` (`translateY ≤ 20px`), `opacity` |
| Scroll-linked phase progression | scroll-position thresholds (Lumora scene only, ADR-001 H5) | state-driven (no time budget) | state classes; per-element transitions ≤ 350ms |

Nothing else animates. No looping, ambient, parallax, particle, or scroll-velocity-linked motion anywhere.

#### 6.8.3 Load Choreography — Scene 01 Overture
- Runs **once** per page load, homepage only; sequence: topline → headline lines → lead → action row → tenets baseline.
- Each element: `opacity 0 → 1` + `translateY(≤12px) → 0`, 250ms ease-out, 60–90ms stagger; total ≤ 500ms.
- **No-JS safety (binding)**: the default server-rendered state is fully visible; the entrance animation is *added* by JS (class application) only — with JavaScript disabled, the scene renders complete with zero visual difference.
- **Reduced motion**: skipped entirely.

#### 6.8.4 First-Entry Reveal (Reveal primitive)
- Applies to content blocks in Scenes 01–05 (excluding Scene 04's quote — see §6.8.7).
- `IntersectionObserver`, threshold ≥ 0.2, fire **once**, unobserve after.
- `opacity 0 → 1` + `translateY(20px) → 0`, 250–350ms `--ease-out`; maximum 3 staggered siblings per group.
- **No-JS safety (binding)**: content is visible by default; JS adds the pre-reveal class immediately before animating (must never leave content hidden if JS fails mid-flight). Implementation pattern: the pre-reveal state is applied by the same script that drives the reveal, never by the server HTML.
- **CLS rule (binding)**: reveal may not shift layout — translation only; the element's flow position and dimensions are identical pre/post reveal. Verified by qa-checklist §2.10.
- **Reduced motion**: elements render at final state instantly.

#### 6.8.5 Signature Scene — Lumora Sticky Reveal (Scene 03, ADR-001 H4/H5)

> [!CAUTION]
> **Location corrected 2026-09-05 — the heading is retained only because four documents deep-link to its
> anchor.** This mechanism is **not on the homepage**. In shipped code the sticky walkthrough
> (`LumoraWorkflowWalkthrough` → `StickyStage` → `LumoraWorkflowBody`) renders **only inside
> `/products/lumora`'s `#workflow` section**; the homepage's Scene 03 is `LumoraFlagship`, a compact static
> beat. Everything below is accurate *as a specification of the mechanism* — the pacing, the scroll authority,
> the override contract and the safety rules are all implemented as written — but every "homepage" in it is
> wrong. Moving a signature scene out of a founder-ratified ADR is not an agent's call to make or to ratify:
> registered as [decisions.md TODO 15](decisions.md#consolidation-notes--open-todos), awaiting either an
> ADR-001 amendment or a directive to restore it.

- **Staging**: the frame is wrapped in a sticky stage (`position: sticky; top: <offset>`; container height = phases × ~100vh) so the frame remains fixed while the visitor's own scrolling advances the four steps.
- **Phase pacing (intentional, rebalanced 2026-09-01 per founder review)**: sentinel band boundaries are rebalanced after mount from measured geometry so every phase gets an intentional **stable** (fully pinned) window — the pre-pin arrival travel is credited to the scene entry and the frame-departure travel to the scene exit, never to a phase's reading time. Stable windows are weighted **0.5 / 1 / 1 / 1.25** (brisk setup → argument, argument → payoff): phase 1 reads brisk because the stage arrival already previews the frame; phase 4 holds the longest stable window and yields gracefully during its departure. The total scene scroll (phases × 100vh) never changes. The server HTML / no-JS default remains equal ¼ fractions; a measured reference window below 240px falls back to equal bands. Verified symmetric forward (1→4) and reverse (4→1), and stable under tap-override re-sync.
- **Phase progression (scroll-linked mode — on `/products/lumora`, per the correction above)**: step sentinels inside the tall container drive an IntersectionObserver threshold state machine; each step sets the full body state from `src/content/lumora-workflow.ts`. The indicator reads `n / 4` and a polite live region announces `Step n of 4: <label>`. **The controls are not tabs**: they are a `role="group"` of buttons carrying `aria-pressed`, because activating one advances a single ordered explanation rather than swapping between sibling panels of equal standing — the earlier `aria-selected` specification here described a tablist that was never built and should not be.
- **Native scroll authority (binding)**: zero scroll-jacking, zero snap, zero momentum interference — the page scrolls normally at all times; the scene *observes* scroll, never *captures* it.
- **Tap override (binding)**: step buttons and prev/next controls are always visible, always enabled, and always set the step directly (also updating scroll position to the matching sentinel so state and viewport never disagree). Prev/next at the ends of the range use `aria-disabled`, **not** `disabled`, so keyboard focus is never dropped to `<body>`.
- **State continuity**: step changes transition body content via 250–350ms `transform`/`opacity` cross-fades; no content reflow jumps; the frame itself never resizes between steps (fixed frame, changing state — the anti-"fake liveness" rule: state changes must be visible and meaningful, not cosmetic).
- **Honest framing**: the section carries the registered honesty signals — the product's real status string, the evidence band's `isDemoData` disclosure, and the release-gate principle. *Corrected 2026-09-05: this bullet previously required `STATUS: BETA` and the "exhibit-fiction" framing of [copy.md §4](copy.md#4-home--lumora-stage-lumorastage-anchor-lumora), which is **superseded** — it framed Lumora as a conceptual demonstration of a product it is not. The shipped strings are [copy.md §13](copy.md#13-lumora-workflow-walkthrough--product-truth-correction-2026-09-01-proposed).* The walkthrough never simulates liveness it does not have (no ticking timers, no streaming counters at rest).
- **Reduced motion**: `StickyStage` switches to `explore` mode — normal document flow, tap-only step switching, no sticky geometry. *This is the tap-only composition; the bullet that previously assigned tap-only exploration to `/products/lumora` as a second location was describing the pre-`5b58001` build, where the two modes lived on two routes. Today one route carries all three compositions: scroll-linked, reduced-motion explore, and the mobile stepper (§6.8.7).*

#### 6.8.6 Scene Composition Rules (the scene grammar)
- **Scene seams (transition grammar, 2026-09-01)**: scene boundaries are 1px rules that **dissolve at their edges** (horizontal fade gradient, `--border-hairline` center) instead of full-width slab cuts. Exactly one seam on the page carries the warm copper tint (`--accent-copper-muted`): the Founder → Horizon boundary, the first note of the horizon invitation. Seams are static CSS on the closing scene's edge — same 1px geometry as the former borders, zero layout change.
- **Light ramps (transition grammar)**: the signature scene's elevated zone **rises** out of `--color-bg-base` on entry (~14vh) and **falls back into it** on exit (~16vh) — static background gradients communicating escalation (Thesis → Lumora) and decompression (Lumora → Founder) without any motion, scripts, or layout impact.
- **Boundary spacing rhythm (transition grammar)**: transitions that mean “arrival” or “silence” get a deeper top beat than `--section-spacing` (clamp ~88–144px): Overture → Thesis (arrival into editorial calm) and Lumora → Founder (decompression after the signature scene). Escalation and re-expansion boundaries keep the standard spacing — the width/light grammar carries them.
- **Entry behavior per scene role**: Overture = staged load choreography; Thesis = editorial first-entry reveals; Lumora = sticky emergence + phase cross-fades; Founder = **stillness** (no entry motion — see the stillness rule); Horizon = a single restrained two-column reveal (re-expansion). Never the same entrance twice in a row.
- **Width rhythm** (breaks the uniform 1240px conveyor): Scene 01 `--container-max` (1240px) → Scene 02 editorial column (≤ 980px reading measure) → Scene 03 **breakout wider than the container** (the flagship occupies more visual width than any other scene) → Scene 04 `--container-narrow` (840px quiet column) → Scene 05 `--container-max`.
- **Lighting rhythm**: `--color-bg-base` (01, 02) → elevated surface zone for the signature scene (03) → `--color-bg-base` (04) → `--color-bg-surface-subtle` closure tone (05) + footer end-credits treatment (mono, coordinate-style).
- **Scale rhythm**: hero display may extend above the current `clamp(2.6rem, 5.8vw, 4.4rem)` at large viewports while Scene 04 drops to the quietest scale on the page — restoring dynamic range at both ends; H1/H2 clamps must remain clearly separated (audit finding: near-identical ranges compress hierarchy).
- **Stillness rule**: Scene 04 (Founder Letter) permits **no motion beyond the first-entry reveal** — its emptiness and quiet are the pacing device after the signature scene.
- **Wayfinding (SceneProgress primitive)**: persistent mono-indexed `01–05` progress indicator (fixed left rail ≥ 1200px viewports; compact top indicator on smaller viewports); `aria-current` tracks the active scene; unifies the current duplicated numbering (hero tenets `01–03` vs section indices `02–06`) into one system.

#### 6.8.7 Mobile Scene Recomposition (Mobile Is First-Class, §4.10)
- Scene 03 becomes a **vertical stepper**: the same four phases render as sequential full-width segments with the same state evolution; sources and diagnostics content becomes inline per-phase summaries — **never `display: none` content loss** (qa-checklist §2.10 mobile parity gate).
- All phase controls (tabs/segmented controls, prev/next) meet `--min-touch-target` 44×44px.
- Load choreography shortened (≤ 300ms, fewer staggers); first-entry reveals retain the same budgets.
- All other scenes keep their composed vertical rhythm per current §6.9 breakpoints.

#### 6.8.8 Motion Safety Contracts (binding, enforced by qa-checklist §2.10)
- **Reduced motion**: with `prefers-reduced-motion: reduce`, load choreography is skipped, reveals render instantly, the sticky stage collapses to flow, and the scene becomes tap-only — output must be functionally identical to today's static site.
- **No-JS**: server HTML contains 100% of content and is fully styled; every motion behavior is additive enhancement; no content, navigation, or meaning may depend on JavaScript executing (with the sole exception of interactive state inside the Lumora exhibit, which degrades to its first phase with controls operable by native tab focus).
- **Performance**: all motion on composite properties only; no layout thrash; scroll observation via IntersectionObserver (no scroll-event state updates without rAF batching).

### 6.9 Responsive Adaptation
- **Desktop (`1440px+`)**: Confident `1240px` content container, 3-column workbench, asymmetric dual-flow building cycle spine.
- **Tablet (`880px–1024px`)**: Dual-column collapses to single column with preserved vertical breathing room.
- **Mobile (`390px–640px`)**: Single-column vertical rhythm, 44px minimum touch targets, zero horizontal scrolling or gesture traps. *(Current state: workbench hides collateral sidebars via `display: none` — a mobile content-parity violation registered as debt D11; the ADR-001 target composition is the vertical stepper specified in [§6.8.7](#687-mobile-scene-recomposition-mobile-is-first-class-410).)*

### 6.10 Accessibility Standards
- **Color Contrast**: All text pairings meet or exceed WCAG 2.1 AA standards (minimum 4.5:1 for body text, 3:1 for large display text).
- **Focus Indicators**: Distinct `2px solid var(--color-accent-copper)` outline with `3px` offset on `:focus-visible`.
- **Semantic Structure**: Strictly enforced single `h1`, sequential `h2`/`h3` hierarchy, `<main>`, `<section>`, `<aside>`, and `<nav>` landmarks.

### 6.11 Token Consumption Rule
All website components in `src/components/` must strictly consume design tokens from `src/styles/tokens.css` — **no inline styles, no hardcoded color literals, no undefined variable names**. The closed set of sanctioned components and the full pattern contract are enumerated in [component-inventory.md](component-inventory.md). Design governance (HUMAN-001) applies: reject generic AI startup gradients, excessive glassmorphism, or floating glowing orbs; preserve bespoke color hierarchy, typography, and human-crafted layout rhythms.

---

## 7. UI Design Phase Protocol (Phase 8)

*High-fidelity visual design rules. The UI design phase activates following completion and certification of the design system.*

**Purpose**: Document high-fidelity visual layouts, interactive states, and presentation specifications:
- High-fidelity component layouts consuming the design tokens specified in this document.
- Interactive states: default, hover, focus-visible, active, disabled.
- Micro-interactions, animation timings, and transition specifications.
- Responsive visual compositions across desktop, tablet, and mobile viewports.

**Guidelines**
- UI designs must strictly consume tokens and patterns from `src/styles/tokens.css` and this specification.
- **Design Governance (HUMAN-001)**: High-fidelity visual mockups must pass the Distinctiveness Test (*"Could this be mistaken for a generic AI startup website?"*) and Human-Authorship Test before submission for review.
- Designs must be formally approved before Vertical Slice Validation (see [delivery.md](delivery.md)).
