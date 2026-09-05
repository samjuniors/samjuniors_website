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
| **Deployment** | **Vercel / Node.js Container (Edge Ready)** | High-availability global CDN caching with instant rollback capabilities. ⚠ **Candidate, not selected (noted 2026-09-05)**: no deploy target has been chosen and nothing is configured — Phase 12 has not started. `next build` currently emits 12 fully static routes, so the site is host-agnostic today. The choice carries one hard obligation: see [§11.2](#112-security--resilience-baseline)'s CDN caveat. |

---

## 3. Directory Structure & Module Boundaries

The application enforces a strict modular hierarchy where content, presentation, interaction, and system utilities remain decoupled.

> [!IMPORTANT]
> **Classified 2026-09-05 — §3.1 is the approved boundary *model*, not a description of the tree.** The diagram below was written in the architecture phase, before implementation; §3.2 records what is actually on disk and §3.3 lists every divergence. The *boundaries* held — content, presentation, interaction and utilities are genuinely decoupled, and no component hardcodes copy. The *paths* did not: five directories or files the model names were never created, three that ship were never named, and one (`components/ui/`) has been formally superseded by founder decision. Read §3.1 for intent and §3.2 for fact; where they disagree on a path, §3.2 is correct.
>
> This classification is documentation-only. **No `src/` change is implied or authorised by it** — the divergences in §3.3 are either already-sanctioned (`components/ui/`, `styles/animations.css`) or benign naming drift, and none is registered as debt.

### 3.1 Approved module-boundary model (target)

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

### 3.2 As-built tree (verified 2026-09-05)

Every path below was confirmed present on disk. Each `*.tsx` component sits beside its own `*.module.css` unless noted; those sibling files are collapsed here as `+ .module.css` to keep the shape readable.

```
src/
├── app/                              # Flat App Router — no route group
│   ├── page.tsx                      # Homepage: the five ADR-001 scenes + organizationGraph JSON-LD
│   ├── layout.tsx                    # Root shell, next/font, metadata, skip link
│   ├── globals.css                   # Reset, typography, .btn-primary/.btn-secondary/.text-link/.hairline-divider
│   ├── error.tsx  not-found.tsx       # Error + 404 boundaries       (status-page.module.css, shared)
│   ├── icon.svg  opengraph-image.tsx  # Favicon + generated OG image
│   ├── robots.ts  sitemap.ts          # Generated crawl surface       (see §11.1)
│   ├── about/page.tsx                 + .module.css
│   ├── contact/page.tsx               + .module.css
│   ├── products/page.tsx              + .module.css
│   │   └── [slug]/page.tsx            + .module.css  # + productGraph JSON-LD
│   ├── routes.test.tsx                # Route/metadata suite
│   ├── product-truth.test.tsx         # 25+ forbidden capability terms
│   └── company-hierarchy.test.tsx     # 15 parent-company-first assertions
│
├── components/
│   ├── interactive/                  # Client islands ('use client')
│   │   ├── Reveal.tsx                 + .module.css  # Scroll-reveal primitive
│   │   ├── StickyStage.tsx            + .module.css  # modes: 'scroll' | 'explore'
│   │   ├── SceneProgress.tsx          + .module.css  # Scene wayfinding
│   │   ├── LumoraWorkflowWalkthrough.tsx             # Responsive switch (no CSS module)
│   │   ├── LumoraWorkflowBody.tsx     + .module.css  # Desktop walkthrough
│   │   └── LumoraMobileStepper.tsx    + .module.css  # Mobile stepper (see debt D16)
│   ├── layout/
│   │   ├── Header.tsx                 + .module.css
│   │   ├── Footer.tsx                 + .module.css  # Two navs derived from the registry
│   │   └── CloseNavOnNavigate.tsx                    # Compact-nav dismissal
│   ├── narrative/                    # Server-rendered scenes
│   │   ├── HeroSection.tsx            + .module.css  # Scene 01 Overture
│   │   ├── ThesisSection.tsx          + .module.css  # Scene 02 Thesis
│   │   ├── LumoraFlagship.tsx         + .module.css  # Scene 03 Lumora
│   │   ├── FounderPresence.tsx        + .module.css  # Scene 04 Founder
│   │   └── HorizonSection.tsx         + .module.css  # Scene 05 Horizon
│   ├── product/
│   │   └── LumoraEvidence.tsx         + .module.css  # Evidence band + isDemoData tagging
│   └── seo/
│       └── JsonLd.tsx                                # Emits one schema.org graph
│
├── content/                          # Typed content repository
│   ├── company.ts                    # Purpose, differentiators, reputationPillars, founder (5 null fields)
│   ├── products.ts                   # Registry + the Lumora demonstration content
│   ├── lumora-workflow.ts            # Walkthrough step definitions (see debt D17)
│   ├── navigation.ts                 # Global nav entries & contextual CTAs
│   ├── proof.ts                      # Verified proof points
│   ├── types.ts                      # All content schemas
│   └── content.test.ts               # Schema/integrity suite
│
├── hooks/                            # Client hooks — directory not named in §3.1
│   ├── useMediaQuery.ts
│   ├── usePhaseSwap.ts
│   └── usePrefersReducedMotion.ts
│
├── lib/
│   ├── site.ts                       # siteUrl — single canonical-origin source
│   └── structured-data.ts            # organizationGraph() / productGraph()
│
└── styles/
    └── tokens.css                    # Colour, type scale, spacing, radii, easing

e2e/
└── smoke.spec.ts                     # Playwright journey smoke (repo root, outside src/)
```

### 3.3 Divergences between the model and the tree

| §3.1 says | Reality | Standing |
| :--- | :--- | :--- |
| `app/(marketing)/` route group wrapping the marketing routes | **No route group.** Routes are flat under `src/app/`, and the marketing chrome lives in the single root `layout.tsx`. | Benign. The group bought nothing with one layout; §4's routing topology is unaffected. |
| `contact/` — absent from the diagram | Ships as `app/contact/page.tsx`. | Diagram omission only; `/contact` is in §4's routing map and has been since IA freeze. |
| `app/api/contact/route.ts` | **Does not exist.** `/contact` is a static page with no form post and no route handler. | Correct as written for §7 (*future* boundary) — but §3.1 lists it as present structure, which it is not. Not debt: nothing was cut, the endpoint was never built. |
| `components/ui/` — "Reusable design primitives (Buttons, Badges, Modals, Cards)" | **Does not exist, and never shipped under that name.** | **Formally superseded.** Founder decision 2026-09-05: the sanctioned interactive primitives are the global classes `.btn-primary` / `.btn-secondary` / `.text-link` / `.hairline-divider` in `globals.css` ([component-inventory.md §4.8](component-inventory.md)). Debt D9 is closed **OBSOLETE**, not completed. Do not reintroduce this directory. |
| `components/seo/` — not in the model | Ships (`JsonLd.tsx`). | Additive; documented in §11.1. |
| `components/product/` — "Showcase, FeatureMatrix" | Ships one component: `LumoraEvidence`. | Naming drift. The named components were never built; the evidence band absorbed the role. |
| `components/narrative/` — "Hero, Thesis, Ecosystem" | Ships the five ADR-001 scenes; "Ecosystem" became `LumoraFlagship` + `HorizonSection`. | Superseded by [ADR-001](adr/ADR-001-homepage-experience-reconciliation.md). |
| `lib/accessibility.ts` (focus management, ARIA helpers, motion queries) | **Does not exist.** Motion queries live in `src/hooks/` (`usePrefersReducedMotion`, `useMediaQuery`); focus management is CSS-only (`:focus-visible`, `.skip-link`). | Benign — hooks are the idiomatic React home for these, and a whole top-level `hooks/` directory the model never named is the real correction here. |
| `lib/formatters.ts` | **Does not exist.** No date/string formatting is needed by any shipped surface. | Benign; unbuilt, not removed. |
| `lib/` — model lists neither | Ships `site.ts` + `structured-data.ts`. | Additive; documented in §11.1. |
| `styles/animations.css` | **Does not exist.** Easing curves are tokens in `tokens.css`; keyframes are scoped to the component modules that use them. | Sanctioned. Splitting motion into a global sheet would have created cross-component coupling the CSS-Modules contract exists to prevent. |
| Tests — not in the model | Colocated: `app/{routes,product-truth,company-hierarchy}.test.tsx`, `content/content.test.ts`; Playwright at `e2e/smoke.spec.ts`. | Additive. §2 names Vitest + Playwright but no location was ever specified. |
| Generated surfaces — not in the model | `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `icon.svg`, `error.tsx`, `not-found.tsx`. | Additive; documented in §11.1. |


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
// src/content/types.ts — abridged; the file itself is the source of truth
export interface Product {
  slug: string;
  name: string;
  category: string;              // e.g. 'Academic assessment platform'
  tagline: string;
  shortDescription: string;
  problem: string;
  audience: { primary: string; secondary: string[] };
  status: 'live' | 'beta' | 'research' | 'archived';
  statusLabel: string;           // Honest status line; never implies general availability
  principle: string;             // Load-bearing product principle, in the product's own terms
  isFlagship: boolean;
  workflow: ProductWorkflowStep[];
  capabilities: ProductCapability[];   // Implemented and observable today
  roadmap: ProductRoadmapItem[];       // Explicitly NOT available today
  evidence: ProductEvidenceItem[];
}
```

> [!NOTE]
> **Corrected 2026-09-05.** This block previously carried a hand-written "Example Schema" that had drifted from the code: it showed `description` (shipped as `shortDescription`), an inline `capabilities` object shape (now `ProductCapability[]`), and an optional `verifiableEvidence?` field — which does not exist, having become the required `evidence`. It also omitted eight fields that carry the product-truth contract. Two of those are the contract: `statusLabel` states the real stage in words, and `roadmap` names what is *not* available, so an unbuilt capability has a typed home and cannot be quietly promoted into `capabilities`. The `roadmap`/`capabilities` split is what [product-truth.test.tsx](../../src/app/product-truth.test.tsx) guards.

The typed contract is the enforcement point, not a convention: because `capabilities` and `roadmap` are separate required arrays, presenting a roadmap item as a shipped capability requires moving data between fields — a visible content edit that the product-truth suite fails on, rather than an invisible wording choice in a component.

This strict separation ensures that when backend APIs, dynamic CMS platforms, or internationalization systems are introduced in future phases, zero component templates require refactoring.

---

## 6. Performance, Accessibility & Engineering Quality (HUMAN-001)

1. **Server-First Execution**: The vast majority of components are compiled as pure HTML/CSS on the server. Client JavaScript bundles are restricted exclusively to interactive islands (such as interactive product canvases).
2. **Predictable Motion Budget**: Animations use CSS hardware transforms (`transform`, `opacity`). All animations automatically collapse to static views when `prefers-reduced-motion: reduce` is detected.
3. **Core Web Vitals Enforcement**:
   - **LCP (Largest Contentful Paint)**: <1.2s via preloaded font subsets and optimized image formats (WebP/AVIF).
   - **CLS (Cumulative Layout Shift)**: 0.00 via explicit aspect ratio containers and zero dynamic client font shifts.
   - **INP (Interaction to Next Paint)**: <50ms by avoiding heavy JavaScript execution on main rendering threads.
   - ⚠ **These are targets, not measurements (noted 2026-09-05).** No Core Web Vitals profiling has been run and no result is recorded anywhere in the suite — "Enforcement" overstates what exists. The architectural conditions for hitting them are in place (server-first rendering, self-hosted `next/font`, transform/opacity-only motion, 12 static routes), but none of the three numbers above has been observed. Profiling is an open Phase 11 item; until it runs, cite these as intent.
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

---

## 11. As-Built Surfaces Documented After the Fact

> [!NOTE]
> **Added 2026-09-05, documentation-only.** Both surfaces below shipped inside implementation commits and were specified nowhere in this document. They are recorded here so the architecture reflects the deployed posture; **no `src/` change is implied.** §11.1 ships from `9c3f311` + `a7816d8`, §11.2 from `5b58001` — the commit that carried an empty body, which is how a real security posture ended up buried in a product commit. Numbered 11 rather than inserted mid-document because §5, §6, §7, §9 and §10 anchors are deep-linked from four other files.

### 11.1 Machine-Readable & Metadata Surface

| Artifact | Emits | Notes |
| :--- | :--- | :--- |
| `src/lib/site.ts` | `siteUrl` | Single canonical-origin constant. Every absolute URL below derives from it, so a domain change is one edit. |
| `src/app/robots.ts` | `/robots.txt` | Next.js metadata route. Allows all, declares the sitemap. |
| `src/app/sitemap.ts` | `/sitemap.xml` | Enumerates the static routes plus one entry per product in the registry — new products appear without a code change. |
| `src/app/opengraph-image.tsx` | Generated OG image | Rendered at build; no binary asset checked in. |
| `src/app/icon.svg` | Favicon | Vector, no raster fallbacks. |
| `src/lib/structured-data.ts` | `organizationGraph()`, `productGraph(product)` | schema.org graphs built from `src/content/` — no hand-written JSON, so structured data cannot drift from the content repository. |
| `src/components/seo/JsonLd.tsx` | One `<script type="application/ld+json">` | Presentation-free; takes a graph object and serialises it. |

**JSON-LD ships on two routes only.** `organizationGraph()` on `/` ([src/app/page.tsx:42](../../src/app/page.tsx)) and `productGraph()` on `/products/[slug]` ([src/app/products/[slug]/page.tsx:72](../../src/app/products/%5Bslug%5D/page.tsx)). `/about`, `/products` and `/contact` emit none — `/about` has no `Person`/`AboutPage` graph (correctly, while `companyContent.founder` is still five `null` fields awaiting founder copy), and `/products` has no `CollectionPage` graph. Neither omission is a defect against any approved spec, since none specified structured data at all; both are noted here so a future SEO pass starts from fact rather than rediscovering the gap.

### 11.2 Security & Resilience Baseline

Set in [next.config.ts](../../next.config.ts) and applied to `/:path*`:

| Header | Value | Buys |
| :--- | :--- | :--- |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains` | Two-year HTTPS pin, subdomains included. Not `preload` — that is a one-way registry submission and belongs to the launch decision, not the code. |
| `X-Content-Type-Options` | `nosniff` | Blocks MIME-type sniffing. |
| `X-Frame-Options` | `DENY` | No framing. Equivalent to `frame-ancestors 'none'`, which is why its absence from the omitted CSP costs nothing. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Origin only cross-site, no path leakage. |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Denies the three device APIs outright. |

Also set: `poweredByHeader: false` (drops `X-Powered-By`) and `reactStrictMode: true`.

**Content-Security-Policy is deliberately omitted.** The reasoning is recorded in the config's own comment and repeated here because it is an architectural decision, not an oversight: Next.js injects inline bootstrap scripts, so a CSP on this site would need either `'unsafe-inline'` — which buys almost nothing — or per-request nonces via middleware, which is more moving parts than a static, cookie-free marketing site with no auth, no form posts and no third-party embeds justifies. **Revisit the moment any of those four facts changes** — a contact form that posts, an embedded video, an analytics script, or the `src/app/api/` handlers §7 anticipates would each independently reopen this decision.

> [!WARNING]
> **`headers()` only applies when the Next.js server serves the response.** Behind a CDN, static export, or a host that terminates TLS and serves assets itself, these five headers must also be set at that layer or they silently vanish. This cannot be closed yet: **no deploy target has been chosen** (Phase 12 not started), so there is no host configuration to write them into. Whoever selects the deploy target owns re-verifying all five against the live response — treat it as a launch gate, not a code task.


