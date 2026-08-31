# SamJuniors Website

Production-grade, AI-first repository for the SamJuniors Website project.

---

## Overview

This repository uses a strict **documentation-first** engineering methodology designed for high-precision human and AI collaboration. Every stage of development—from discovery to launch—is systematically documented, reviewed, and approved before any implementation occurs.

---

## Core Governance & Workflow

- **[AGENTS.md](file:///d:/Projects/SamjuniorsWebsite/AGENTS.md)**: Operating guidelines and rules for AI agents and contributors.
- **[PROJECT.md](file:///d:/Projects/SamjuniorsWebsite/PROJECT.md)**: Project goals, scope, non-goals, and open TODOs.
- **[ROADMAP.md](file:///d:/Projects/SamjuniorsWebsite/ROADMAP.md)**: Sequential phase milestones.
- **[CONTRIBUTING.md](file:///d:/Projects/SamjuniorsWebsite/CONTRIBUTING.md)**: Development, branching, and review processes.
- **[CHANGELOG.md](file:///d:/Projects/SamjuniorsWebsite/CHANGELOG.md)**: Project version history.

---

## Development Lifecycle

```
Discover ──> Decide ──> Document ──> Review ──> Approve ──> Implement ──> Verify ──> Merge
```

1. **Source of Truth**: All foundational company identity is preserved in [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company).
2. **Phase Specifications**: Each phase has a dedicated directory within [docs/website/](file:///d:/Projects/SamjuniorsWebsite/docs/website).
3. **No Implementation Before Approval**: Code is never written before relevant documentation is reviewed and signed off.

---

## Documentation Structure

```
docs/
├── company/                     # Permanent source of truth (Founder documentation)
└── website/                     # Website lifecycle documentation
    ├── 00-discovery/            # Requirements, user research, and stakeholder alignment
    ├── 01-information-architecture/ # Sitemap, navigation hierarchy, routing
    ├── 02-content-strategy/     # Content hierarchy, copywriting outlines, voice
    ├── 03-ux-principles/        # Experiential principles, personas, user journeys
    ├── 04-design-research/      # Evidence-driven design research & implications
    ├── 05-wireframes/           # Structural blueprints and layout specifications
    ├── 06-design-system/        # Design tokens, typography, component specs
    ├── 07-ui/                   # High-fidelity visual layouts and states
    ├── 08-vertical-slice/       # End-to-end representative experience validation
    ├── 09-implementation/       # Technical architecture and development specs
    ├── 10-testing/              # QA test plans, accessibility, performance audits
    ├── 11-launch/               # Launch checklist, DNS, deployment procedures
    └── reviews/                 # Phase review logs, sign-offs, and decisions
```

---

## Getting Started

1. Read [AGENTS.md](file:///d:/Projects/SamjuniorsWebsite/AGENTS.md) and [PROJECT.md](file:///d:/Projects/SamjuniorsWebsite/PROJECT.md).
2. Review company context in [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company).
3. Begin with [Phase 1: Discovery & Website Strategy](file:///d:/Projects/SamjuniorsWebsite/docs/website/00-discovery).
