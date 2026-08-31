# Contributing to SamJuniors Website

Thank you for contributing. This project operates under a strict **documentation-first**, AI-assisted engineering methodology.

---

## 1. Core Principles

1. **Documentation Before Code**: Never write code or create design artifacts before the corresponding documentation is approved.
2. **Founder Truth Supremacy**: All company values, goals, and descriptions originate strictly from [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company).
3. **No Assumptions**: Unconfirmed requirements or decisions must be tracked as open TODOs.

---

## 2. Development Workflow

All contributions must follow this sequence:

```
Discover ──> Decide ──> Document ──> Review ──> Approve ──> Implement ──> Verify ──> Merge
```

1. **Discover & Align**: Check [PROJECT.md](file:///d:/Projects/SamjuniorsWebsite/PROJECT.md), [ROADMAP.md](file:///d:/Projects/SamjuniorsWebsite/ROADMAP.md), and [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company).
2. **Draft Documentation**: Create or update specifications in the appropriate directory under [docs/website/](file:///d:/Projects/SamjuniorsWebsite/docs/website).
3. **Submit for Review**: Open a review request and document feedback in [docs/website/reviews/](file:///d:/Projects/SamjuniorsWebsite/docs/website/reviews).
4. **Implement**: Once approved, implement the specification.
5. **Verify**: Ensure all verification and testing criteria are satisfied.

---

## 3. Branch Naming Conventions

Use structured branch names indicating the type and scope:

- `docs/<phase>-<description>` (e.g., `docs/00-discovery-stakeholders`)
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
- AI agents assisting with reviews must cross-reference claims against [docs/company/](file:///d:/Projects/SamjuniorsWebsite/docs/company).
- Review logs must be retained in [docs/website/reviews/](file:///d:/Projects/SamjuniorsWebsite/docs/website/reviews).
