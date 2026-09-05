# PRODUCT.md — Product Definition

> **Derived summary, not a source of truth.** This file was reconciled (2026-09-05) from the pre-existing
> authoritative documents rather than through a bootstrap interview, per CLAUDE.md's bootstrap preliminary
> check. Authority order is unchanged: [docs/company/](docs/company) → [PROJECT.md](PROJECT.md) /
> [ROADMAP.md](ROADMAP.md) → [docs/website/](docs/website) → protocols → code. If this file ever disagrees
> with those, **they win and this file is wrong**. Every claim below cites where it came from.

## Problem

SamJuniors is an AI-first parent company whose only public artifact so far is a single product. It has no
digital home that reads as a company rather than as that product's landing page, and no structure that can
absorb a second or third venture without a redesign. The website exists to be the institutional anchor:
to state what the company is, establish trust through demonstrated execution rather than claims, and
present products as expressions of the company instead of definitions of it.
*Source: [docs/company/foundation.md](docs/company/foundation.md) §1, §3; [architecture.md](docs/website/architecture.md) §1.*

## Target users

Nine audiences, ranked by strategic priority in [product-spec.md §1.3](docs/website/product-spec.md);
five of them are formalised as personas in [§6.1](docs/website/product-spec.md#61-primary-user-personas)
and no others may be added without founder review and an ADR:

1. **Students** (tier 1) — the primary persona: want to understand what the company builds and how its tools accelerate their own capability.
2. **Investors & strategic partners** (tier 2) — assess founder vision, defensibility, execution velocity, honest roadmap.
3. **Parents** (tier 3) — audience priority, no separate persona.
4. **Educational institutions** (tier 4) — validate academic rigour, compliance, pilot onboarding.
5. **Businesses** (tier 5) — evaluate SaaS/AI solutions against concrete operational problems.
6. **Developers** (tier 6) — inspect architecture, benchmarks, engineering integrity.
7. Parents · General public · Media · Job seekers — remaining priority tiers, no dedicated personas.

## Core idea (one paragraph)

A documentary-style, scene-based company website: five sequential scenes (company statement → thesis →
flagship product signature moment → founder presence → horizon) that a visitor scrolls through as one
continuous narrative, with the product demonstrated live rather than described. The parent-company
narrative is permanent; product prominence is curated and swappable from a typed content registry, so
adding a second product requires content edits, not layout edits.
*Source: [ADR-001](docs/website/adr/ADR-001-homepage-experience-reconciliation.md); [product-spec.md §3.4.1](docs/website/product-spec.md#341-current-executable-experience-5-scenes); [foundation.md](docs/company/foundation.md) §3.*

## v1 scope

Five routes, all implemented and building today:

- `/` — five-scene homepage experience (Overture, Thesis, Lumora sticky reveal, Founder, Horizon)
- `/products` — portfolio index with flagship panel and company-standard band
- `/products/[slug]` — flagship product experience (`/products/lumora`), autonomous deep entry with breadcrumbs
- `/about` — company statement and building philosophy
- `/contact` — intent-aligned gateway (`mailto:`, no backend)
- Plus `404`, `robots.txt`, `sitemap.xml`, `opengraph-image`, JSON-LD organisation/product graphs

*Source: [architecture.md §4](docs/website/architecture.md); verified against `next build` (12 routes, 2026-09-05).*

## Explicitly out of scope (for now)

- Backend of any kind — no API routes, no auth, no database, no CMS ([architecture.md §7](docs/website/architecture.md) defers all four to post-launch)
- Contact form submission (the gateway is `mailto:` only)
- Testimonials, benchmarks, case studies, and any other proof content — **blocked on founder-supplied verified copy**, and fabrication is prohibited
- Pages in [product-spec.md §1.6](docs/website/product-spec.md)'s must-have list that are not yet built: Founder, Portfolio, Testimonials, Support, Privacy, Legal
- Secondary/future scope: Community, Research, Blog, Events, Investor Relations, Partners, Public Roadmap, Labs
- Any second product — the registry supports one and inventing another is forbidden

## Constraints

- **Timeline:** TODO — never recorded in any document. Founder input needed.
- **Solo/team:** Solo founder plus AI agents; git author `samjuniors` is the only committer.
- **Budget/hosting:** Vercel / Node container is *specified* in [architecture.md §2](docs/website/architecture.md) but **not provisioned** — no `vercel.json`, no CI, no deploy has happened. TODO for founder.
- **Non-negotiable:**
  - Documentation-first lifecycle and phase gates ([AGENTS.md](AGENTS.md) §1.2, §3)
  - Never invent company philosophy, product capability, metric, testimonial, or visitor-facing copy ([AGENTS.md](AGENTS.md) §1.1; copy enters [copy.md](docs/website/copy.md) as `PROPOSED` and only the founder promotes it)
  - Never expose internal decision IDs, phase numbers, or governance vocabulary to visitors ([AGENTS.md](AGENTS.md) §1.3)
  - `SamJuniors ≠ Founder`, and the company must never read as an extension of one product ([foundation.md](docs/company/foundation.md) §1)
  - HUMAN-001: no generic AI visual clichés; distinctiveness and human-authorship tests apply ([design-system.md §2.5](docs/website/design-system.md#25-human-made-design--implementation-human-001))
  - Information architecture is **certified and frozen**; structural change requires a founder-approved ADR ([architecture.md §10](docs/website/architecture.md))
  - CSS Modules + tokens from `src/styles/tokens.css` only — no inline styles duplicating token values

## Stack

Next.js 15 App Router · React 19 · TypeScript strict · vanilla CSS + CSS Modules + design tokens ·
typed static content repository (`src/content/`) · Vitest + Playwright · zero runtime dependencies
beyond `next`/`react`/`react-dom`. Motion restricted to `transform`/`opacity` with
`prefers-reduced-motion` fallbacks. *Source: [architecture.md §2](docs/website/architecture.md), `package.json`.*

## Success criteria for v1

Ranked in [product-spec.md §1.7](docs/website/product-spec.md): brand recognition → product adoption &
sales → founder recognition → media recognition → community growth → investor interest → business
partnerships → talent attraction. Engineering-side definition of done is
[qa-checklist.md](docs/website/qa-checklist.md); the 30-second comprehension rule and the seven other
gates in [architecture.md §9](docs/website/architecture.md) apply to every page.

> These are directional outcomes, not instrumented metrics — no analytics exist yet
> ([architecture.md §7](docs/website/architecture.md) schedules telemetry for the QA phase).

## Open questions

Live founder decisions, all tracked in [decisions.md](docs/website/decisions.md) — see
[PROGRESS.md](PROGRESS.md) for the blocking list:

1. **Copy sign-off (TODO 8)** — every visitor-facing string is `PROPOSED`; nothing is wet-signed. Missing founder copy: founder name, testimonials, proof items, persona CTAs, contact experience.
2. **Phase 7 retroactive certification (TODO 1)** — the design system shipped before its sign-off record existed.
3. **Palette record vs. code (new, 2026-09-05)** — docs still name steel blue `#628cb3` as the canonical product accent; the code removed it as a product-truth violation. The record is stale and needs correcting, not the code.
4. **Reputation-pillar placement and `/about` H1 (TODO 12)** — placement is a founder call, not a sign-off.
5. **Missing screenshot evidence (TODO 3)** — four referenced files were never committed.
6. **Deploy target** — specified, never provisioned.
