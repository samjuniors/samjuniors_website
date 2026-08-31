# SamJuniors Website — Architecture

> **Authoritative technical architecture document**: the production stack, directory boundaries, routing topology, content/data isolation, engineering guidelines, and the architectural constitution (core philosophy, quality gates, and freeze policy) governing the website lifecycle.
>
> **Authority Precedence**: Grounded in [docs/company/foundation.md](../company/foundation.md) and aligned with the product direction in [product-spec.md](product-spec.md) and the design rules in [design-system.md](design-system.md) (including HUMAN-001). Formal decision records live in [decisions.md](decisions.md).

---

## 1. Core Philosophy — Why This Website Exists

The SamJuniors website is the primary digital home and institutional anchor for SamJuniors. It exists to:
1. **Represent Visionary Leadership**: Articulate the long-term technological vision and foundational philosophy of SamJuniors and its founder.
2. **Establish Institutional Trust**: Build lasting credibility with students, parents, partners, institutions, and builders through transparent, evidence-based execution.
3. **Unify the Product Ecosystem**: Serve as the coherent connective tissue uniting AI, Lumora, SaaS, Apps, Games, and Education.
4. **Inspire and Empower**: Provide a platform that motivates creators, learners, and partners to join the journey.

### 1.1 User Experience Philosophy
- **Trust Before Conversion**: Prioritize credibility, authentic proof, and integrity before requesting any commercial or personal commitment.
- **Experience Before Explanation**: Demonstrate capability through interactive, memorable experiences rather than passive text.
- **Story Before Marketing**: Frame the website as a continuous, engaging documentary narrative rather than disconnected marketing collateral.
- **Purpose Before Decoration**: Every visual element, motion transition, and component must have a functional or cognitive purpose.
- **Progressive Discovery**: Deliver simplicity first—one idea per scene—allowing visitors to dive deeper into technical complexity at their own pace.
- **Visitor-Led Discovery**: Answer the visitor's next logical question naturally rather than broadcasting company-centric announcements.
- **Scene-Based Storytelling**: Guide users through an intentional emotional arc (*Curiosity → Excitement → Understanding → Trust → Action*).
- **Zero Fatigue Principle**: Ensure effortless reading through generous whitespace, high contrast, and optimal line lengths (50–75 characters).
- **Cognitive Load First**: Eliminate unnecessary cognitive, interaction, and visual noise before introducing any new component.
- **User Mental Model First**: Structure the ecosystem around user goals and outcomes rather than internal corporate hierarchies.
- **Hybrid Navigation**: Combine stable, familiar global navigation with innovative, accessible content presentation.
- **Hybrid Scroll & Progression Model**: Preserve standard browser scroll momentum; zero scroll-jacking; strictly enforce the animation purpose test.
- **Progressive Branching**: Unify all visitors in a shared introductory narrative before branching into persona-specific journeys.

### 1.2 Information Architecture Philosophy
- **Continuous Narrative**: The website flows as one uninterrupted story connecting vision, founder, company, products, proof, and action.
- **Connected Pages**: No siloed dead ends; every page contextually links into the broader narrative arc.
- **Hero Product Focus**: **Lumora** acts as the definitive flagship anchor, making ecosystem discovery intuitive.
- **Ecosystem Thinking**: Individual products are presented as harmonious nodes within a singular technological mission.

### 1.3 Design Philosophy
- **Premium**: Crafted with obsessive attention to detail, typographic precision, and refined aesthetic restraint.
- **Purposeful**: Zero superfluous ornament; every token, margin, and interaction serves user comprehension.
- **Timeless**: Rooted in foundational design discipline (inspired by Apple, Stripe, Linear, Vercel) rather than fleeting trends.
- **Original**: Proprietary visual identity and custom signature moments that cannot be replicated merely by changing logos or colors.
- **Accessible**: Built to WCAG 2.1 AA/AAA accessibility standards across all viewports and devices.
- **Fast**: High-performance architecture ensuring instant page transitions, smooth 60fps animations, and zero layout shift.

---

## 2. Stack Selection & Rationale

| Layer | Selected Technology | Architectural Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js (App Router / React 19)** | Server Components (RSC) by default for zero-client-JS content delivery, file-based nested routing, built-in image/font optimization, and seamless Server Actions for future full-stack expansion. |
| **Language** | **TypeScript (Strict Mode)** | Compile-time type safety across content models, component contracts, and routing parameters. Zero `any` tolerance. |
| **Styling** | **Vanilla CSS + CSS Modules + Design Tokens** | Maximum performance, zero runtime overhead, complete bespoke styling control without generic utility bloat; fully enforces HUMAN-001. |
| **Motion** | **CSS Hardware Transforms + Web Animations API** | Restricted strictly to GPU composite properties (`transform`, `opacity`). Flawless `prefers-reduced-motion` static fallbacks. |
| **Data Layer** | **Typed Static Content Repository (`src/content/`)** | Absolute decoupling of content models from UI presentation. Enables future migration to headless CMS or database without rewriting UI components. |
| **Testing** | **Vitest + Playwright** | Vitest for unit/schema validation; Playwright for cross-device viewport and user-journey integration testing. |
| **Deployment** | **Vercel / Node.js Container (Edge Ready)** | High-availability global CDN caching with instant rollback capabilities. |

---

## 3. Directory Structure & Module Boundaries

The application enforces a strict modular hierarchy where content, presentation, interaction, and system utilities remain decoupled:

```
src/
├── app/                              # Next.js App Router (Routing & Layout Shells)
│   ├── (marketing)/                  # Marketing & narrative route group
│   │   ├── page.tsx                  # SamJuniors Homepage (Parent narrative + flagship spotlight)
│   │   ├── layout.tsx                # Global marketing layout (Header, Canvas, Footer)
│   │   ├── about/                    # Company narrative & thesis route
│   │   │   └── page.tsx
│   │   └── products/                 # Product ecosystem routes
│   │       ├── page.tsx              # Products portfolio index
│   │       └── [slug]/               # Dynamic product detail page (e.g. /products/lumora)
│   │           └── page.tsx
│   ├── api/                          # Future Server Actions & API endpoints (lead capture, contact)
│   │   └── contact/route.ts
│   ├── layout.tsx                    # Root HTML/Head shell & global font definitions
│   └── globals.css                   # Global reset, typography, and root CSS variables
│
├── components/                       # UI Component Architecture
│   ├── layout/                       # Structural layout components (Header, Navigation, Footer)
│   ├── narrative/                    # Server-rendered narrative sections (Hero, Thesis, Ecosystem)
│   ├── product/                      # Product presentation modules (Showcase, FeatureMatrix)
│   ├── interactive/                  # Client-side interactive islands ('use client')
│   └── ui/                           # Reusable design primitives (Buttons, Badges, Modals, Cards)
│
├── content/                          # Typed Content & Data Layer (Source of Truth for copy/data)
│   ├── company.ts                    # Parent company purpose, differentiators, 4-point filter
│   ├── products.ts                   # Products registry (Lumora, Future Ventures, metadata)
│   ├── navigation.ts                 # Global navigation entries & contextual CTAs
│   ├── proof.ts                      # Contextual verified proof points & benchmarks
│   └── types.ts                      # TypeScript interfaces defining all content schemas
│
├── lib/                              # Shared Utilities & Helpers
│   ├── accessibility.ts              # Focus management, ARIA helpers, motion queries
│   └── formatters.ts                 # Date, string, and metadata formatting utilities
│
└── styles/                           # Core Design System Tokens
    ├── tokens.css                    # Color palette, typographic scale, spacing grid, radii
    └── animations.css                # Standard easing curves and keyframe transitions
```

---

## 4. Scalable Multi-Product Routing Strategy

The application architecture treats **SamJuniors** as the parent umbrella and **Lumora** as an individual product entity within a scalable product collection:

```
Company (SamJuniors)
 ├── /                     -> Parent Brand + Curated Flagship Spotlight (Lumora)
 ├── /products             -> Comprehensive Product Ecosystem Portfolio
 ├── /products/lumora      -> Dedicated Flagship Experience (Autonomous Entry)
 ├── /products/[slug]      -> Future Product Expressions (Product B, Venture C...)
 ├── /about                -> Company Vision, Building Philosophy & Founder Perspective
 └── /contact              -> Intent-aligned dialogue and partnership gateway
```

**Direct Deep Entry Resilience**
- **Autonomous Context**: Landing directly on `/products/lumora` delivers a complete, self-contained product experience while maintaining clear breadcrumbs to parent SamJuniors context.
- **Dynamic Prominence**: The homepage features whichever product is designated as `isFlagship: true` or `isFeatured: true` in `src/content/products.ts`, eliminating the need to restructure layout code when product priorities evolve.

---

## 5. Content / Data Boundary Architecture

UI components must **never** hardcode company claims or product copy inline. All data flows through strongly-typed contracts:

```typescript
// src/content/types.ts (Example Schema)
export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'research' | 'archived';
  isFlagship: boolean;
  capabilities: {
    title: string;
    description: string;
    detail?: string;
  }[];
  verifiableEvidence?: {
    type: 'benchmark' | 'demo' | 'case-study';
    title: string;
    description: string;
  }[];
}
```

This strict separation ensures that when backend APIs, dynamic CMS platforms, or internationalization systems are introduced in future phases, zero component templates require refactoring.

---

## 6. Performance, Accessibility & Engineering Quality (HUMAN-001)

1. **Server-First Execution**: The vast majority of components are compiled as pure HTML/CSS on the server. Client JavaScript bundles are restricted exclusively to interactive islands (such as interactive product canvases).
2. **Predictable Motion Budget**: Animations use CSS hardware transforms (`transform`, `opacity`). All animations automatically collapse to static views when `prefers-reduced-motion: reduce` is detected.
3. **Core Web Vitals Enforcement**:
   - **LCP (Largest Contentful Paint)**: <1.2s via preloaded font subsets and optimized image formats (WebP/AVIF).
   - **CLS (Cumulative Layout Shift)**: 0.00 via explicit aspect ratio containers and zero dynamic client font shifts.
   - **INP (Interaction to Next Paint)**: <50ms by avoiding heavy JavaScript execution on main rendering threads.
4. **Engineering Restraint**: Zero unnecessary dependencies, zero bloated component libraries, and zero generic AI UI templates.

---

## 7. Future Full-Stack & Backend Boundaries

| Domain | Phase Scope | Future Integration Boundary |
| :--- | :--- | :--- |
| **API Endpoints** | Frontend development phase | Next.js Route Handlers (`src/app/api/`) for contact forms and newsletter intake. |
| **Authentication** | Future (Post-Launch) | NextAuth / Auth0 integration boundary isolated behind `/api/auth/` when product dashboards activate. |
| **Database / CMS** | Future (Post-Launch) | Prisma / Drizzle ORM connecting to PostgreSQL or Headless CMS, mapping cleanly to `src/content/types.ts`. |
| **Telemetry & Analytics** | QA phase | Privacy-respecting, cookieless analytics integrated via lightweight script loading. |

---

## 8. Experience Principles Index

The architectural constitution is bound to the full set of experience and governance principles (complete direction and mandates in [design-system.md §2](design-system.md#2-design--ux-principles)):

| Principle | Core Mandate |
| :--- | :--- |
| **Signature Experience Principle** | Differentiate through memorable interactive moments, not surface decoration. |
| **Narrative Scroll Principle** | Deliver a continuous documentary-style story across page transitions. |
| **Honest Roadmap Principle** | Build trust through transparent, verified categorization (Live, Beta, Research, Vision). |
| **One Hero Product Principle** | Anchor the entire ecosystem around the flagship product (**Lumora**). |
| **Progressive Complexity Principle** | Keep top-level views crystal clear; provide deep-dive layers on demand. |
| **Progressive Conversion Principle** | Match calls-to-action to user readiness without aggressive interruptions. |
| **Every Scroll Must Reward** | Ensure every scroll increment reveals fresh value, insight, or aesthetic delight. |
| **Evidence Before Claims** | Validate assertions with concrete proof, metrics, and customer verification. |
| **Show, Then Tell** | Demonstrate tangible products and features visually before providing technical copy. |
| **No Dead Ends Principle** | Guarantee every section and subpage provides clear, contextual onward journeys. |
| **Curiosity Loop Principle** | Spark intellectual intrigue that compels visitors to explore deeper ecosystem layers. |
| **Timeless Design Principle** | Build on enduring design fundamentals that remain elegant across years, not months. |
| **Architecture Freeze Principle** | Lock approved architectures to prevent scope creep; changes require formal ADR sign-off. |

---

## 9. Architecture Quality Gates

Before any page or component advances to implementation, it must pass these 8 mandatory quality gates:

1. **30-Second Rule**: Within 30 seconds, a first-time visitor must understand what SamJuniors is, why it exists, and its flagship innovation.
2. **Evidence Before Claims**: Every claim of innovation, quality, or speed is accompanied by verifiable proof or demonstration.
3. **Progressive Complexity**: Information is structured in layers—instant comprehension at top level, exhaustive detail on inspection.
4. **No Dead Ends**: Every single page, modal, and terminal state provides a logical next step in the user journey.
5. **Every Scroll Rewards**: No dead zones or empty filler sections; scrolling continuously advances understanding or reveals interactive depth.
6. **Hero Product Prominence**: The flagship status of Lumora is immediately obvious across navigation, ecosystem charts, and product links.
7. **Signature Moment**: The page contains at least one proprietary, memorable interactive moment that reinforces brand identity.
8. **Trust First**: Testimonials, roadmap clarity, security, and founder integrity are front and center before transactional asks.

---

## 10. Architecture Freeze Policy

> [!IMPORTANT]
> **Stage 3 Information Architecture is Certified and Formally Frozen.**
>
> - The Information Architecture baseline (all IA and experiential decisions) is locked.
> - Downstream phases (UX principles & user flows, design research, wireframes, design system, UI design, vertical slice validation, frontend development) must strictly build upon this frozen specification.
> - Any structural, navigational, or taxonomic modifications require a formal Architecture Decision Record (ADR) reviewed and approved by the founder.
