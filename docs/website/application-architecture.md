# SamJuniors Website — Production Application Architecture

> **Authoritative Technical Architecture Document** defining the production stack, directory boundaries, routing topology, content/data isolation, and engineering guidelines for the SamJuniors web platform.
>
> **Authority Precedence**: Grounded in [docs/company/company-foundation.md](file:///d:/Projects/SamjuniorsWebsite/docs/company/company-foundation.md), [docs/website/architecture-manifesto.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/architecture-manifesto.md), and [HUMAN-001](file:///d:/Projects/SamjuniorsWebsite/docs/website/design-principles.md#human-made-design--implementation-human-001).

---

## 1. Stack Selection & Rationale

| Layer | Selected Technology | Architectural Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js (App Router / React 19)** | Server Components (RSC) by default for zero-client-JS content delivery, file-based nested routing, built-in image/font optimization, and seamless Server Actions for future full-stack expansion. |
| **Language** | **TypeScript (Strict Mode)** | Compile-time type safety across content models, component contracts, and routing parameters. Zero `any` tolerance. |
| **Styling** | **Vanilla CSS + CSS Modules + Design Tokens** | Maximum performance, zero runtime overhead, complete bespoke styling control without generic utility bloat; fully enforces [HUMAN-001](file:///d:/Projects/SamjuniorsWebsite/docs/website/design-principles.md#human-made-design--implementation-human-001). |
| **Motion** | **CSS Hardware Transforms + Web Animations API** | Restricted strictly to GPU composite properties (`transform`, `opacity`). Flawless `prefers-reduced-motion` static fallbacks. |
| **Data Layer** | **Typed Static Content Repository (`src/content/`)** | Absolute decoupling of content models from UI presentation. Enables future migration to headless CMS or database without rewriting UI components. |
| **Testing** | **Vitest + Playwright** | Vitest for unit/schema validation; Playwright for cross-device viewport and user-journey integration testing. |
| **Deployment** | **Vercel / Node.js Container (Edge Ready)** | High-availability global CDN caching with instant rollback capabilities. |

---

## 2. Directory Structure & Module Boundaries

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

## 3. Scalable Multi-Product Routing Strategy

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

### Direct Deep Entry Resilience
- **Autonomous Context**: Landing directly on `/products/lumora` delivers a complete, self-contained product experience while maintaining clear breadcrumbs to parent SamJuniors context.
- **Dynamic Prominence**: The homepage features whichever product is designated as `isFlagship: true` or `isFeatured: true` in `src/content/products.ts`, eliminating the need to restructure layout code when product priorities evolve.

---

## 4. Content / Data Boundary Architecture

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

## 5. Performance, Accessibility & Engineering Quality ([HUMAN-001](file:///d:/Projects/SamjuniorsWebsite/docs/website/design-principles.md#human-made-design--implementation-human-001))

1. **Server-First Execution**: The vast majority of components are compiled as pure HTML/CSS on the server. Client JavaScript bundles are restricted exclusively to interactive islands (such as interactive product canvases).
2. **Predictable Motion Budget**: Animations use CSS hardware transforms (`transform`, `opacity`). All animations automatically collapse to static views when `prefers-reduced-motion: reduce` is detected.
3. **Core Web Vitals Enforcement**:
   - **LCP (Largest Contentful Paint)**: <1.2s via preloaded font subsets and optimized image formats (WebP/AVIF).
   - **CLS (Cumulative Layout Shift)**: 0.00 via explicit aspect ratio containers and zero dynamic client font shifts.
   - **INP (Interaction to Next Paint)**: <50ms by avoiding heavy JavaScript execution on main rendering threads.
4. **Engineering Restraint**: Zero unnecessary dependencies, zero bloated component libraries, and zero generic AI UI templates.

---

## 6. Future Full-Stack & Backend Boundaries

| Domain | Phase Scope | Future Integration Boundary |
| :--- | :--- | :--- |
| **API Endpoints** | Phase 10 | Next.js Route Handlers (`src/app/api/`) for contact forms and newsletter intake. |
| **Authentication** | Future (Post-Launch) | NextAuth / Auth0 integration boundary isolated behind `/api/auth/` when product dashboards activate. |
| **Database / CMS** | Future (Post-Launch) | Prisma / Drizzle ORM connecting to PostgreSQL or Headless CMS, mapping cleanly to `src/content/types.ts`. |
| **Telemetry & Analytics** | Phase 11 (QA) | Privacy-respecting, cookieless analytics integrated via lightweight script loading. |
