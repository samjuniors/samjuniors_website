# Architectural Content Model

> **Structural Specification** defining the domain content model, entity relationships, and content modularity for the SamJuniors web platform.
>
> **Governance Note**: This document outlines the **Architectural Content Model** (data & entity topology). It is **not** a finalized navigation menu or sitemap.

---

## 1. Domain Content Architecture Tree

```
SamJuniors (Parent Entity)
├── Company
│   ├── Vision & Purpose
│   ├── Philosophy & Values
│   ├── Building Cycle
│   └── Story & Origin
├── Founder
│   ├── Leadership Perspective
│   ├── Founder Essay / Journey
│   └── Architectural Ethos
├── Products (Ecosystem)
│   ├── Lumora (Flagship Product)
│   │   ├── Value Proposition & Overview
│   │   ├── Core Capabilities / Demos
│   │   ├── Technical Architecture
│   │   └── Exploration / Onboarding
│   └── Future Products (Scalable Nodes: Product B, Product C...)
│       ├── Strategic Overview
│       ├── Lifecycle Status
│       └── Domain Impact
├── Proof (Credibility System)
│   ├── People (User Feedback & Testimonials)
│   ├── Product (Verifiable Shipped Tech & Benchmarks)
│   ├── Builder (Engineering & Leadership Credentials)
│   └── Verifiable Evidence (Milestones & Metrics)
├── Future (Horizon Layer)
│   ├── Committed Roadmap
│   ├── Active Research & Exploration
│   └── Visionary Horizons
└── Participation (Action Pathways)
    ├── Community / Discord / Forums
    ├── Institutional / Educational Partnerships
    ├── Developer Access / Documentation
    └── Direct Contact / Inquiries
```

---

## 2. Content Entity Specifications

### 1. Parent Company Entity (`Company`)
- **Core Role**: Anchors the enduring institutional narrative and establishes the organization's overarching reason for being.
- **Attributes**: Entity Name, Long-term Purpose, Guiding Principles, Engineering Philosophy, Building Filter Criteria.
- **Relationships**: Parent of all Products, Custodian of the Proof System, Anchor of the Future Layer.

### 2. Leadership Entity (`Founder`)
- **Core Role**: Humanizes the company vision, provides authentic builder credibility, and articulates the long-term technical worldview.
- **Attributes**: Founder Name, Role/Title, Leadership Perspective, Extended Essay, Origin Narrative.
- **Depths Supported**:
  - *Surface Depth*: Integrated quote / sign-off on company and homepage scenes.
  - *Deep Depth*: Comprehensive essay on philosophy, methodology, and technology architecture.

### 3. Product Entities (`Products`)
- **Core Role**: Tangible proof points and functional expressions of SamJuniors' engineering capability.
- **Attributes**: Product Name, Slug, Tagline, Category, Lifecycle Status (*Alpha*, *Beta*, *Active*, *Research*), Strategic Prominence Tier (*Flagship*, *Featured*, *Standard*, *Archived*), Feature Breakdown, Technical Specifications, Action CTA.
- **Special Entity — Lumora**: Currently assigned *Flagship* status as the primary demonstration of SamJuniors technology.

### 4. Credibility & Proof Entities (`Proof`)
- **Core Role**: Resolves visitor skepticism and builds objective confidence through multi-dimensional evidence.
- **Classification Types**:
  - `PeopleProof`: Verified student, institutional, or developer quotes with attributed source credentials.
  - `ProductProof`: Interactive demonstrations, capability checklists, verified feature accomplishments.
  - `BuilderProof`: Technical whitepapers, engineering blog posts, architectural integrity manifests.
  - `VerifiableEvidence`: Verifiable milestones, performance benchmarks, institutional partnerships.

### 5. Future & Horizon Entities (`Future`)
- **Core Role**: Outlines forward-looking direction without marketing hyperbole.
- **Classification Tiers**:
  - `RoadmapMilestone`: Scheduled release target with verified technical scope.
  - `ExplorationDomain`: Active research inquiry with documented hypotheses.
  - `VisionHorizon`: Broad philosophical and technological direction.

### 6. Participation Entities (`Participation`)
- **Core Role**: Provides frictionless, intent-aligned conversion touchpoints for specific visitor personas.
- **Destinations**: Learner Onboarding, Institutional Engagement, Developer Portals, Partner Channels.

---

## 3. Information Depth Mapping

Each content entity is designed to expose data across the three non-linear information depths:

| Entity Type | Instant Depth (5–15s) | Understand Depth (1–3m) | Deep Dive Depth (Extended) |
| :--- | :--- | :--- | :--- |
| **Company** | Core Purpose & Differentiator | Parent Vision & Building Cycle | Architecture Manifesto & Foundation |
| **Founder** | Leadership Sign-off & Headline | Builder Philosophy & Role | Full Founder Essay & Journey |
| **Products (Lumora)** | Hero Headline & Key Benefit | Core Feature Walkthrough & Video | Technical Architecture & Docs |
| **Proof** | Key Metric / Highlight Quote | Contextual Case Study / Story | Detailed Benchmarks / Data |
| **Future** | Next Major Milestone Preview | Roadmap Status by Tier | Research Notes & Whitepapers |
| **Participation** | Single Clear Primary CTA | Program Overview & Requirements | Application / Integration Specs |

---

## 4. Multi-Product Scalability Rules

1. **Decoupled Topologies**: Adding a new product entity (e.g., *Product B*) requires creating an additional node under `Products` and assigning its Prominence Tier without restructuring parent-level metadata.
2. **Prominence Tier Governance**:
   - `Flagship`: Up to 1–2 products highlighted on the primary cinematic homepage narrative.
   - `Featured`: Highlighted within the dedicated Products showcase.
   - `Standard`: Catalogued in the comprehensive portfolio directory.
   - `Research / Incubating`: Listed in the Future/Exploration registry.
3. **Template Reusability**: All product nodes adhere to the same schema (Instant, Understand, Deep Dive), ensuring unified layout and design token application in downstream phases.
