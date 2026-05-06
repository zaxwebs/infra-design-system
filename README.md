# Infra Design System

A design system for infrastructure interfaces — fast, technical, compact, and trustworthy.

Infra pairs a quiet SaaS marketing shell with product-like surfaces: terminal previews, dashboard walkthroughs, resource calculators, tables, docs navigation, and status-oriented controls.

## Quick start

Open [`demo/index.html`](demo/index.html) in your browser to explore the full component showcase.

## Structure

```
├── design-system.md    # Complete design system specification
└── demo/
    ├── index.html      # Interactive component demo page
    ├── styles.css      # All design tokens and component styles
    └── app.js          # Theme toggle, tabs, calculator, animations
```

## Design tokens

The system uses semantic CSS custom properties with full light and dark theme support.

| Token              | Purpose                                      |
| ------------------ | -------------------------------------------- |
| `--primary`        | Actions, selected state, progress, focus      |
| `--muted`          | Section backgrounds, inactive controls        |
| `--border`         | Structural borders throughout                 |
| `--destructive`    | Errors and dangerous actions                  |
| `--warning`        | Pending or caution states                     |
| `--card`           | Elevated surface backgrounds                  |

## Typography

- **UI & marketing:** [Geist](https://fonts.google.com/specimen/Geist)
- **Code & numeric:** [Geist Mono](https://fonts.google.com/specimen/Geist+Mono)

## Components

The demo showcases the following components:

- **Layout** — Marketing header, hero, footer, container
- **Buttons** — Primary, secondary, destructive, account pill, marketing pill, disabled states
- **Badges** — Status dots (live, healthy, degraded, down), info badges
- **Cards** — App cards, feature cards, info panels (success, warning, destructive)
- **Forms** — Text inputs, number inputs with suffix, select pickers, range sliders
- **Data** — Responsive pricing table with ARIA roles
- **Terminal** — Terminal card with syntax-colored output, logs surface
- **Navigation** — Tabs with active states, smooth-scroll anchors
- **Theme toggle** — Light/dark switch with localStorage persistence
- **Pricing calculator** — Interactive cost estimator with live updates

## Design principles

- Use green only where it clarifies action, progress, or operational health
- Keep product UI dense, bordered, and scannable
- Prefer actual dashboard/terminal/data visuals over abstract illustrations
- Every surface must work in both light and dark themes
- Motion is functional and brief (150–500ms)

## License

MIT
