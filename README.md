# SamJuniors Website

Production-grade, AI-first repository for the SamJuniors Website project.

---

## Overview

This repository uses a strict **documentation-first** engineering methodology designed for high-precision human and AI collaboration. Every stage of development—from discovery to launch—is systematically documented, reviewed, and approved before any implementation occurs.

---

## Core Governance & Workflow

- **[INDEX.md](docs/website/INDEX.md)**: Master document map, authority hierarchy, and phase status.
- **[AGENTS.md](AGENTS.md)**: Operating guidelines and rules for AI agents and contributors.
- **[PROJECT.md](PROJECT.md)**: Project goals, scope, non-goals, and open TODOs.
- **[ROADMAP.md](ROADMAP.md)**: Sequential phase milestones.
- **[CONTRIBUTING.md](CONTRIBUTING.md)**: Development, branching, and review processes.
- **[CHANGELOG.md](CHANGELOG.md)**: Project version history.

---

## Development Lifecycle

```
Discover ──> Decide ──> Document ──> Review ──> Approve ──> Implement ──> Verify ──> Merge
```

1. **Source of Truth**: All foundational company identity is preserved in [docs/company/](docs/company).
2. **Consolidated Specifications**: Website strategy, design, architecture, and delivery are governed by the 11-file documentation suite in [docs/website/](docs/website).
3. **No Implementation Before Approval**: Code is never written before relevant documentation is reviewed and signed off.

---

## Documentation Structure

```
docs/
├── company/                     # Permanent source of truth (Founder documentation — never agent-edited)
│   ├── foundation.md            # Company identity, purpose, differentiator, building cycle, product architecture
│   └── decision-log.md          # Company decision records (COMPANY-001…003)
└── website/                     # Website lifecycle documentation (consolidated)
    ├── product-spec.md          # Pages, messaging, IA (certified & frozen), content strategy, personas, journeys
    ├── design-system.md         # Tokens, layout, visual rules, design research, direction, HUMAN-001 tests
    ├── architecture.md          # Technical structure, routing, data flow, component boundaries
    ├── delivery.md              # Build order, vertical slice gate, QA gates, launch checklist, review protocol
    ├── decisions.md             # Single running decision log (newest entries on top)
    ├── copy.md                  # Approved literal website text: headlines, descriptions, CTAs + placeholder registry (founder sign-off model)
    ├── qa-checklist.md          # Concrete acceptance criteria: global gates, per-page matrix, floors, debt register
    ├── component-inventory.md   # Closed component set, props/variants, mandatory CSS-Modules + tokens pattern contract
    └── INDEX.md                 # Master index, authority hierarchy, phase status map
```

---

## Getting Started

1. Review [INDEX.md](docs/website/INDEX.md) and [company/foundation.md](docs/company/foundation.md).
2. Review governance rules in [AGENTS.md](AGENTS.md) and milestones in [PROJECT.md](PROJECT.md).
3. For page or component work, read only the relevant sections of [product-spec.md](docs/website/product-spec.md), [copy.md](docs/website/copy.md), [design-system.md](docs/website/design-system.md), and [component-inventory.md](docs/website/component-inventory.md).
4. Check open TODOs in [decisions.md](docs/website/decisions.md) and [PROJECT.md](PROJECT.md) before starting work.
