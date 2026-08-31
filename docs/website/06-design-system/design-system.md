# 06 — SamJuniors Design System Specification

> **Phase 7 Reference Document**  
> **Status:** Approved / Implemented in `src/styles/tokens.css`, `src/app/globals.css`, and `src/components/ui/`  
> **Scope:** Authoritative design tokens, visual primitives, typography, layout models, motion rules, and accessibility standards for the SamJuniors web platform.

---

## 1. Design Philosophy & Aesthetic Foundation

The SamJuniors design language expresses a serious, enduring technology institution revealing its work. It embodies:
- **Architectural Restraint**: Deep obsidian foundations, surgical hairline dividers, and generous negative space.
- **Material Distinction**: Institutional Warm Copper (`#c89666`) for parent identity; Steel Blue (`#628cb3`) for product intelligence interaction.
- **Editorial Typography**: High-contrast, balanced typography hierarchy with clear semantic roles.
- **Human Craft ([HUMAN-001](file:///d:/Projects/SamjuniorsWebsite/docs/website/design-principles.md#human-made-design--implementation-human-001))**: Purposeful layouts that reject repetitive card templates, generic AI gradients, and superficial interface novelties.

---

## 2. Semantic Color System

| Token | Value | Role & Usage |
| :--- | :--- | :--- |
| `--color-bg-base` | `#0b0c0f` | Primary canvas background (Deep Obsidian). |
| `--color-bg-surface` | `#12141a` | Base component/workbench background. |
| `--color-bg-surface-elevated` | `#171a22` | Raised elements, cards, and modal layers. |
| `--color-bg-surface-subtle` | `#0e1015` | Recessed backgrounds and sidebar outliners. |
| `--color-bg-overlay` | `rgba(255, 255, 255, 0.03)` | Subtle hover fills and row highlights. |
| `--color-text-primary` | `#f4f6fa` | Main headlines and primary body text. |
| `--color-text-secondary` | `#959fae` | Secondary body text, subheadings, and captions. |
| `--color-text-muted` | `#5a6372` | Inactive labels, metadata, and timestamps. |
| `--color-text-dim` | `#404652` | De-emphasized technical identifiers. |
| `--color-border-hairline` | `rgba(255, 255, 255, 0.08)` | Section boundaries and major structural lines. |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.04)` | Internal item separators and subtle outlines. |
| `--color-border-active` | `rgba(200, 150, 102, 0.35)` | Active tab borders and focused element strokes. |
| `--color-accent-copper` | `#c89666` | SamJuniors parent brand accent and markers. |
| `--color-accent-copper-hover`| `#d8a676` | Interactive hover state for copper elements. |
| `--color-accent-copper-muted`| `rgba(200, 150, 102, 0.12)`| Accent badge fills and quiet indicators. |
| `--color-accent-blue` | `#628cb3` | Lumora / Product intelligence interaction state. |
| `--color-accent-blue-hover` | `#7ba3ca` | Product interaction hover state. |
| `--color-accent-blue-muted` | `rgba(98, 140, 179, 0.12)` | Product tag backgrounds. |
| `--color-status-warning` | `#ff9e66` | Collision and workload bottleneck indicators. |
| `--color-status-success` | `#4ea881` | Verified and resolved state indicators. |

---

## 3. Typography Hierarchy

### Font Families
- **Primary Sans**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`
- **Technical Mono**: `JetBrains Mono`, `ui-monospace`, `Menlo`, `monospace`

### Typographic Scale
- **Display (`h1.headline`)**: `clamp(2.6rem, 5.8vw, 4.4rem)`, line-height `1.08`, letter-spacing `-0.038em`, font-weight `500`
- **Section Headline (`h2.title`)**: `clamp(2.2rem, 4.2vw, 3.4rem)`, line-height `1.12`, letter-spacing `-0.03em`, font-weight `500`
- **Subsection Heading (`h3`)**: `1.25rem`, line-height `1.35`, letter-spacing `-0.015em`, font-weight `500`
- **Lead Paragraph (`.lead`)**: `clamp(1.1rem, 1.9vw, 1.3rem)`, line-height `1.62`, font-weight `300`, max-width `780px`
- **Body Text (`p`)**: `1.0rem`, line-height `1.65`, font-weight `300`
- **Small Body (`.bodySmall`)**: `0.88rem`, line-height `1.55`, font-weight `300`
- **Kicker / Eyebrow (`.kicker`)**: `0.76rem`, monospace, uppercase, letter-spacing `0.1em`, font-weight `500`
- **Metadata Tag (`.meta`)**: `0.72rem`, monospace, letter-spacing `0.04em`

---

## 4. Spacing & Rhythm

### Spacing Scale
- `--space-1`: `4px` (Micro gap)
- `--space-2`: `8px` (Icon/label gap)
- `--space-3`: `12px` (Tight component padding)
- `--space-4`: `16px` (Standard component padding)
- `--space-5`: `24px` (Card padding / item gap)
- `--space-6`: `32px` (Medium section gap)
- `--space-7`: `48px` (Large block gap)
- `--space-8`: `64px` (Major section padding)
- `--space-9`: `96px` (Section separator spacing)
- `--space-10`: `120px` (Hero top padding)

### Layout Boundaries
- `--container-max`: `1240px` (Wide viewport bound at 1440px)
- `--container-narrow`: `840px` (Perspective / Quote focus column)
- `--container-editorial`: `760px` (Constrained reading column)
- `--container-padding`: `clamp(20px, 4vw, 40px)`
- `--section-spacing`: `clamp(64px, 9vh, 104px)`

---

## 5. UI Primitives & Components

### 1. SectionHeader (`src/components/ui/SectionHeader.tsx`)
Standardized narrative anchor rendering sequential markers:
- Index number: `01`, `02`, `03`...
- Eyebrow kicker: uppercase monospace label
- Main heading: high-contrast balanced typography
- Optional lead paragraph: constrained reading line length

### 2. Button (`src/components/ui/Button.tsx`)
Standardized interactive elements satisfying accessibility and 44px+ minimum touch targets:
- `primary`: High-contrast solid button (`#f4f6fa` background with `#0b0c0f` text).
- `secondary`: Elevated surface with hairline border (`--color-bg-surface-elevated`).
- `link`: Clean inline/editorial text link with arrow indicators.

---

## 6. Surfaces & Anti-Card-Grid Policy

Surfaces are used only where structural containment enhances cognitive clarity:
- **Product Workbench**: Highlighting live simulation and demonstration.
- **Focus Sessions & Sprints**: Containing active timers and objectives.
- **Diagnostic Inspector**: Grouping key workload parameters.
- **General Content**: Presented via open editorial layouts, asymmetric columns, and vertical spines rather than repetitive 3-box card rows.

---

## 7. Lumora Exhibit Primitives

Presentation primitives for the flagship demonstration (isolated from internal product implementation):
- **Workbench Frame**: 3-column container with top chrome and status pill.
- **Step Tabs**: 4-phase sequential progression (`Context Ingest` → `Understanding` → `Decision Support` → `Action Workspace`).
- **Sources Outliner**: Left-hand sidebar displaying active academic inputs.
- **Canvas Stage & HUD**: Center visualization with timeline collision maps and mentor recommendations.
- **Diagnostics Inspector**: Right-hand telemetry readout.
- **Step Controls**: Backward/forward cycle buttons (`← [ 1 / 4 ] Next Step →`).

---

## 8. Motion & Micro-Interactions

- **Micro Feedback**: `150ms` `--duration-fast` with cubic-bezier `(0.16, 1, 0.3, 1)` for button hovers and tab selections.
- **Spatial Transitions**: `250ms` `--duration-normal` for modal reveals and panel changes.
- **Reduced Motion**: Complete override via `@media (prefers-reduced-motion: reduce)` ensuring instantaneous state transitions.
- **Strict Prohibitions**: Zero scroll-jacking, zero forced scroll snapping, zero ambient floating particles, zero infinite animated gradients.

---

## 9. Responsive Adaptation

- **Desktop (`1440px+`)**: Confident `1240px` content container, 3-column workbench, asymmetric dual-flow building cycle spine.
- **Tablet (`880px–1024px`)**: Dual-column collapses to single column with preserved vertical breathing room.
- **Mobile (`390px–640px`)**: Single-column vertical rhythm, workbench hides collateral sidebars to prioritize the central active stage, 44px minimum touch targets, zero horizontal scrolling or gesture traps.

---

## 10. Accessibility Standards

- **Color Contrast**: All text pairings meet or exceed WCAG 2.1 AA standards (minimum 4.5:1 for body text, 3:1 for large display text).
- **Focus Indicators**: Distinct `2px solid var(--color-accent-copper)` outline with `3px` offset on `:focus-visible`.
- **Semantic Structure**: Strictly enforced single `h1`, sequential `h2`/`h3` hierarchy, `<main>`, `<section>`, `<aside>`, and `<nav>` landmarks.
