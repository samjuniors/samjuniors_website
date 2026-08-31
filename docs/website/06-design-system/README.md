# 06 — Design System

This directory houses the formal specifications for **Phase 7: SamJuniors Design System**.

**Status:** Certified & Implemented in `src/styles/tokens.css`, `src/app/globals.css`, and `src/components/ui/`.

---

## Authoritative Specification

- **[design-system.md](file:///d:/Projects/SamjuniorsWebsite/docs/website/06-design-system/design-system.md)**: Full design system reference documenting:
  1. Design philosophy and foundation
  2. Semantic color tokens
  3. Typography scale and line-heights
  4. Spatial grid, container widths, and rhythm
  5. UI Primitives (`SectionHeader`, `Button`, hairline dividers)
  6. Surfaces and anti-card-grid policy
  7. Lumora exhibit primitives
  8. Motion tokens and accessibility compliance
  9. Responsive adaptation models

---

## Guidelines

- All website components in `src/components/` must strictly consume design tokens from [tokens.css](file:///d:/Projects/SamjuniorsWebsite/src/styles/tokens.css).
- **Design Governance ([HUMAN-001](file:///d:/Projects/SamjuniorsWebsite/docs/website/design-principles.md#human-made-design--implementation-human-001))**: Reject generic AI startup gradients, excessive glassmorphism, or floating glowing orbs; preserve bespoke color hierarchy, typography, and human-crafted layout rhythms.
