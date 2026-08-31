# Contributing to SamJuniors Website

Thank you for contributing. This project operates under a strict **documentation-first**, AI-assisted engineering methodology.

---

## 1. Core Principles

1. **Documentation Before Code**: Never write code or create design artifacts before the corresponding documentation is approved.
2. **Founder Truth Supremacy**: All company values, goals, and descriptions originate strictly from [docs/company/](docs/company).
3. **No Assumptions**: Unconfirmed requirements or decisions must be tracked as open TODOs.

---

## 2. Development Workflow

All contributions must follow this sequence:

```
Discover ──> Decide ──> Document ──> Review ──> Approve ──> Implement ──> Verify ──> Merge
```

1. **Discover & Align**: Check [PROJECT.md](PROJECT.md), [ROADMAP.md](ROADMAP.md), and [docs/company/](docs/company).
2. **Draft Documentation**: Create or update specifications in the appropriate consolidated document under [docs/website/](docs/website) — product direction in [product-spec.md](docs/website/product-spec.md), literal visitor copy in [copy.md](docs/website/copy.md) (new strings drafted as `PROPOSED` only), visual rules in [design-system.md](docs/website/design-system.md), component contracts in [component-inventory.md](docs/website/component-inventory.md), technical structure in [architecture.md](docs/website/architecture.md), build/QA/launch in [delivery.md](docs/website/delivery.md).
3. **Submit for Review**: Open a review request; record feedback and approval outcomes in [docs/website/decisions.md](docs/website/decisions.md) (detailed findings may use the standalone review-record format defined in [delivery.md §6](docs/website/delivery.md#6-phase-review--sign-off-records)).
4. **Implement**: Once approved, implement the specification.
5. **Verify**: Ensure all applicable acceptance gates in [qa-checklist.md](docs/website/qa-checklist.md) are satisfied (global gates plus the touched pages' matrix rows).

---

## 3. Branch Naming Conventions

Use structured branch names indicating the type and scope:

- `docs/<description>` (e.g., `docs/ux-persona-validation`)
- `feat/<feature-name>` (e.g., `feat/header-component`)
- `fix/<issue-name>` (e.g., `fix/contrast-ratio-button`)
- `chore/<task-name>` (e.g., `chore/update-readme`)

---

## 4. Commit Message Conventions

Follow the Conventional Commits specification:

- `docs: <description>` (for documentation additions and updates)
- `feat: <description>` (for new features or components)
- `fix: <description>` (for bug fixes)
- `chore: <description>` (for maintenance and configuration tasks)
- `refactor: <description>` (for code refactoring without feature changes)

Example:
```
docs: add discovery stakeholder analysis specification
```

---

## 5. Review & Approval Protocol

- All pull requests and documentation updates require review.
- AI agents assisting with reviews must cross-reference claims against [docs/company/](docs/company).
- Review outcomes and approval decisions must be recorded in [docs/website/decisions.md](docs/website/decisions.md).
