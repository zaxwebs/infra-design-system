# Infra Design System

Captured: 2026-05-06

## 1. System Intent

Infra interfaces should feel like infrastructure made approachable: fast, technical, compact, and trustworthy. The visual language pairs a quiet SaaS marketing shell with product-like surfaces: terminal previews, dashboard walkthroughs, resource calculators, tables, docs navigation, and status-oriented controls.

The system should avoid glossy decoration. Use practical structure, restrained borders, neutral surfaces, and green only where it clarifies action, progress, or operational health.

## 2. Brand Personality

- Clear and technical: write in direct product language, especially around Git deploys, routing, builds, regions, TLS, access controls, replicas, CPU, RAM, and logs.
- Operationally calm: favor compact layouts, predictable grids, and visible system states.
- Developer-native: use terminal, monospace, repo, provider, and pipeline metaphors.
- Cost-aware: pricing and resource interfaces should feel precise, numeric, and transparent.
- Light by default, dark-ready: every surface must work in both themes using semantic tokens.

## 3. Design Tokens

### Color

Use semantic CSS custom properties as the source of truth. Do not hard-code theme colors in components unless the component intentionally represents a non-theme object such as terminal chrome.

```css
:root.light {
  --background: oklch(97.5% .004 250);
  --foreground: oklch(27% .012 260);
  --card: oklch(98.8% .003 250);
  --card-foreground: oklch(27% .012 260);
  --popover: oklch(98.8% .003 250);
  --popover-foreground: oklch(27% .012 260);
  --primary: oklch(55% .16 145);
  --primary-foreground: oklch(98.5% .002 250);
  --secondary: oklch(94% .005 250);
  --secondary-foreground: oklch(32% .012 260);
  --muted: oklch(94% .005 250);
  --muted-foreground: oklch(47% .01 260);
  --accent: oklch(93% .007 250);
  --accent-foreground: oklch(32% .012 260);
  --destructive: oklch(57.7% .245 27.325);
  --destructive-foreground: oklch(98.5% .002 250);
  --border: oklch(87.5% .006 250);
  --input: oklch(92.5% .005 250);
  --ring: oklch(55% .16 145);
  --warning: oklch(52% .135 72);
  --warning-foreground: oklch(98.5% .002 250);
  --placeholder: oklch(47% .01 260);
}

:root,
:root.dark {
  --background: #1a1a1a;
  --foreground: #e8e8e8;
  --card: #212121;
  --card-foreground: #e8e8e8;
  --popover: #2d2d2d;
  --popover-foreground: #e8e8e8;
  --primary: #4caf50;
  --primary-foreground: #fff;
  --secondary: #2d2d2d;
  --secondary-foreground: #e8e8e8;
  --muted: #2d2d2d;
  --muted-foreground: #9e9e9e;
  --accent: #383838;
  --accent-foreground: #e8e8e8;
  --destructive: #f44336;
  --destructive-foreground: #fff;
  --border: #404040;
  --input: #2d2d2d;
  --ring: #4caf50;
  --success: #4caf50;
  --warning: #ffc107;
  --warning-foreground: #1a1a1a;
  --placeholder: #9e9e9e;
  --chart-blue: #2196f3;
  --chart-teal: #00bcd4;
  --chart-amber: #ffc107;
}
```

Usage guidance:

- Primary green is for main actions, selected state, progress, success, focus rings, active tabs, and meaningful links.
- Muted surfaces are the default section backgrounds for marketing heroes, cards, sidebars, and inactive controls.
- Border is structural. Use 1px borders generously to organize product surfaces.
- Destructive red is reserved for errors and dangerous actions.
- Warning amber is reserved for pending or caution states.
- Blue appears in terminal or chart contexts, not as a competing brand accent.

### Typography

Use Geist for interface and marketing copy. Use Geist Mono for terminal, URL, code, numeric-rate, and build-log surfaces.

```css
@import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap");

body {
  font-family: Geist, sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.font-mono {
  font-family: "Geist Mono", ui-monospace, monospace;
}
```

Type scale:

| Use | Size | Weight | Line height |
| --- | --- | --- | --- |
| Hero title | clamp(2.25rem, 5vw, 3rem) | 700 | 1.15 |
| Page title | clamp(1.75rem, 3.5vw, 2.25rem) | 700 | 1.15 |
| Section title | clamp(1.9rem, 3.2vw, 2.75rem) | 700 | 1.08 |
| Card title | 0.9375rem to 1.125rem | 600-700 | 1.3 |
| Body | 0.875rem to 1rem | 400-500 | 1.45-1.65 |
| Small label | 0.6875rem to 0.75rem | 600-800 | 1.3 |
| Button | 13px to 15px | 500-600 | 1 |
| Terminal | 14px | 400 | 1.75 |

Labels and kickers use uppercase with small positive letter spacing:

```css
text-transform: uppercase;
letter-spacing: .03em; /* dense forms */
letter-spacing: .05em; /* marketing and status labels */
letter-spacing: .1em;  /* pricing summary labels */
```

### Radius

```css
--radius: .375rem; /* 6px app baseline */
```

- Inputs, selects, docs nav, search results: 6px.
- Marketing and product cards: 8px.
- Feature cards and pricing advantage panels: 12px.
- Pills, badges, toggles, progress tracks: 999px or 30px.

### Spacing

Base spacing follows a 4px rhythm.

- Page shell: max-width 1200px, horizontal padding clamp(16px, 4vw, 24px).
- App page container: max-width 1344px, padding 2rem 2.5rem.
- Marketing hero: 64px top, 80px bottom on desktop.
- Standard sections: 72px to 96px vertical padding.
- Dense product card padding: 14px to 20px.
- Marketing card padding: 24px to 32px.
- Control horizontal padding: 12px to 24px.
- Component gaps: 8px, 12px, 16px, 24px, 32px, 48px.

### Elevation

Keep elevation subtle and structural.

```css
box-shadow: 0 1px 3px #0000000d,
            0 1px 2px #0000001a,
            0 8px 16px -8px #0000001a;
```

Larger featured surfaces may use:

```css
box-shadow: 0 24px 64px #0f172a1a;
```

Terminal previews may use:

```css
box-shadow: 0 20px 50px #00000026;
```

### Motion

Motion is functional and brief.

- Hover and border transitions: 150ms to 200ms.
- Page entry: fade in or fade in up, 400ms to 500ms.
- Theme toggle handle: 200ms transform.
- Progress/timeline changes: 350ms width.
- Loaders: 1s linear rotation.

## 4. Layout Patterns

### Marketing Shell

- Sticky header, 64px high, border-bottom, background equals page background.
- Header content max-width: 1200px.
- Brand left, nav next to brand on desktop, actions right.
- Footer uses brand summary plus three link columns, then a bordered bottom row.
- Marketing nav is hidden below 768px; keep primary account action visible where space allows.

### Hero

The primary homepage hero uses a two-column grid: message on left, terminal/product visual on right.

- Background: `var(--muted)`.
- Bottom border: `1px solid var(--border)`.
- Grid: `1fr 1fr`, 48px gap.
- Mobile/tablet: single column, centered until 640px, then left-aligned.
- Badge: small uppercase status with green live dot.
- CTA group: primary, secondary, 16px gap, wraps.
- Trust note below actions in muted text.

### Product Walkthrough

The tutorial playback pattern is a dashboard-style composition:

- Outer card: `var(--card)`, 1px border, 8px radius, large shadow.
- Toolbar: muted background, status left, compact controls right.
- Main frame: left chapter rail, main screen, right detail panel.
- On narrow screens, chapter rail becomes a horizontal scroll list; detail panel stacks.
- Below 640px, this large walkthrough is hidden.

### Pricing Calculator

- Page hero is centered, muted, compact.
- Calculator grid: main inputs left, sticky bill summary right at desktop.
- Cards use muted headers with icon, title, and bordered body.
- Inputs are split into CPU/RAM/replica range sliders and number/select controls.
- Summary emphasizes a large lightweight total, then tabular numeric rows.
- Pricing tables use a responsive CSS grid rather than native table layout, while preserving ARIA table roles.

### Docs Layout

- Sidebar width: 200px, sticky at 88px.
- Content max-width: 720px.
- Search field appears above nav.
- Nav links are low-contrast until hover/active.
- Cards use auto-fill grid with min width 200px.
- On mobile, the sidebar becomes full width and nav wraps into chips.

## 5. Components

### Brand Mark

Text mark:

- Size: 20px.
- Weight: 700.
- Letter spacing: -0.025em.

Use lowercase consistently. If the brand includes a punctuation mark or separator, render it in muted foreground to create a quiet visual signal.

### Buttons

Primary app button:

```css
.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
  border: 1px solid var(--primary);
  border-radius: var(--radius);
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
}
```

Primary marketing button:

```css
.btn-primary {
  border-radius: 30px;
  padding: 10px 24px;
  font-size: 15px;
  font-weight: 600;
}
```

Secondary button:

- Background: `var(--secondary)`.
- Border: `var(--border)`.
- Text: `var(--foreground)` for marketing, `var(--secondary-foreground)` for app.
- Hover: stronger border, often foreground or muted-foreground.

Header account pill:

- Background: foreground.
- Text: background.
- Radius: 8px.
- Padding: 10px 20px.

Disabled controls:

```css
opacity: .55;
cursor: not-allowed;
filter: grayscale(.65) saturate(.35);
transform: none;
```

### Cards and Panels

Default app card:

- Background: `var(--card)`.
- Border: `1px solid var(--border)`.
- Radius: `var(--radius)` or 8px.
- Padding: 24px.
- Subtle shadow for dashboard contexts.

Marketing feature card:

- Background: `var(--muted)`.
- Border: transparent until hover.
- Radius: 12px.
- Padding: 32px.
- Hover: border becomes `var(--border)`, background becomes `var(--card)`.

Information panel:

- Use tinted token mixes for semantic panels.
- Success/climate panels mix `success` into background at 7% and border at 26%.

### Forms

Text input:

```css
.input-field {
  background: var(--input);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--foreground);
  padding: 8px 12px;
  font-size: 14px;
}

.input-field:focus {
  border-color: var(--ring);
  outline: none;
}
```

Docs search adds a stronger focus affordance:

```css
box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 14%, transparent);
```

Number inputs with suffix:

- Input radius: 6px 0 0 6px.
- Suffix radius: 0 6px 6px 0.
- Suffix text uppercase, 10px, bold.
- Input font should be monospace for numeric precision.

Select picker:

- Trigger: full width, input background, 8px/12px padding, 14px text.
- Chevron color: muted foreground.
- Dropdown: absolute, top 100%, z-index 20.
- Options: 13px text, hover background `var(--secondary)`.
- Selected marker: 8px green dot aligned right.

Range input:

- Track height: 6px.
- Radius: 4px.
- Filled track: primary.
- Remaining track: border.
- Thumb: 18px circle, primary fill, 2px card border.
- Hover: scale to 1.06.

### Navigation

Marketing nav:

- Links: 14px, 500, muted by default, foreground on hover.
- Desktop only from 768px.

Tabs:

- Sticky top, border-bottom, background page background.
- Active tab uses primary text and 2px primary underline.
- Padding: 1.25rem 0.

Docs nav:

- Link radius: 6px.
- Padding: .5rem .75rem.
- Active and hover background: `var(--muted)`.
- Active text: foreground, 600 weight.

### Status Indicators

Use small circular dots for live, recording, selected, and healthy states.

- Dot size: 8px.
- Success color: `var(--success)` or `var(--primary)`.
- Pulsing only for live badge; keep it subtle at 2s.

Badges:

- Radius: 999px.
- Border: `var(--border)`.
- Text: muted foreground.
- Padding: 5px 10px.
- Font: 0.75rem, 700.

### Terminal and Code Surfaces

Terminal card:

- Background: `#1e1e1e`.
- Radius: 8px.
- Width: max 480px.
- Header: `#ffffff0d`, border `#ffffff1a`, 12px/16px padding.
- Window dots: red `#ef444480`, yellow `#eab30880`, green `#22c55e80`.
- Body padding: 24px, minimum height 240px.
- Code font: Geist Mono, 14px, line-height 1.75.

Terminal semantic colors:

- Prompt/dim: gray.
- Edge/build progress: blue `#60a5fa`.
- Success: green `#4ade80`.
- URL/final output: near-white.

Logs card:

- Background: `#111827`.
- Text: `#d1d5db`.
- Label: `#9ca3af`.
- Use single-line ellipsis for log records inside compact side panels.

### Tables

Use bordered table containers with responsive grid rows.

- Container radius: 8px.
- Header row background: `var(--muted)`.
- Row padding: 14px 20px.
- Desktop columns for pricing: resource, rate, how billed, details.
- Tablet: two-column grid with how/details full width.
- Mobile: single-column row stack.
- Numeric values use tabular numbers or monospace where appropriate.

### Theme Toggle

- Size: 64px by 32px.
- Track: muted background, border.
- Handle: background color, width `calc(50% - 4px)`, height `calc(100% - 4px)`.
- Handle inset: 2px.
- Icons: sun and moon, 16px.
- Active icon uses foreground, inactive uses muted foreground.

## 6. Iconography

Use thin line icons with 2px strokes for interface actions. The site already uses icons shaped like search, check, terminal, activity, leaf, sun, moon, and chevron.

Guidelines:

- Icon size: 13px to 16px in dense controls.
- Pair icons with text for provider and complex action buttons.
- Use icon-only only for universally understood actions or when paired with a tooltip/aria label.
- Keep icon color inherited unless the icon carries semantic meaning.

## 7. Content Rules

Voice:

- Say what happens, not how impressive it is.
- Prefer concrete nouns: repository, app, build, release, region, domain, replica, log.
- Keep CTAs short: Create account, Pricing, Documentation, Pause, Back, Next.
- Use sentence case for headings and controls.
- Use uppercase only for labels, kickers, and abbreviations such as CPU, RAM, GB, TLS.

Examples:

- Good: "Deploy from Git. Run closer to users."
- Good: "Source provider and repository list"
- Good: "Estimated bill"
- Avoid: "Supercharge your cloud journey"
- Avoid: decorative feature descriptions without operational detail.

## 8. Accessibility

- Maintain visible focus on inputs, docs search, selects, nav links, and buttons.
- Use semantic buttons for interactive controls and links for navigation.
- Preserve ARIA labels for icon-only controls and simulated playback controls.
- For custom tables, include ARIA table, row, columnheader, and cell roles.
- For status badges, do not rely on color alone. Pair dots with text.
- Ensure terminal and playback visuals include accessible labels or equivalent text.
- Keep text contrast high in both light and dark themes.

## 9. Responsive Behavior

- Header nav appears at 768px and above.
- Marketing hero switches from two columns to one column at 1024px.
- Hero becomes left-aligned on small mobile.
- Tutorial playback switches from rail layout to stacked layout at 900px and hides below 640px.
- Docs layout switches from sidebar/content flex to single column at 768px.
- Pricing calculator becomes two-column only at 1024px.
- Pricing table collapses to two-column rows below 900px and single-column rows below 480px.

## 10. Implementation Checklist

- Use semantic tokens for all component colors.
- Import Geist and Geist Mono once at the app root.
- Default every component to light and dark compatibility.
- Use 6px radius for controls and 8px for dense panels.
- Reserve 12px radius for marketing feature cards and broader callout panels.
- Use green for primary action, active, selected, success, and focus only.
- Use muted surfaces for grouped areas, not decorative backgrounds.
- Keep product UI dense, bordered, and scannable.
- Prefer actual dashboard/terminal/data visuals over abstract illustrations.
- Test at mobile, tablet, and desktop widths.

## 11. Suggested Component Inventory

- `MarketingHeader`
- `MarketingFooter`
- `ThemeToggle`
- `Button`
- `Badge`
- `StatusDot`
- `Card`
- `FeatureCard`
- `InfoPanel`
- `TerminalCard`
- `TutorialPlayer`
- `ChapterList`
- `DocsSidebar`
- `DocsSearch`
- `DocsCard`
- `PagerLink`
- `Input`
- `NumberInputWithSuffix`
- `SelectPicker`
- `RangeInput`
- `PricingSummary`
- `ResponsivePricingTable`
- `LogsCard`

## 12. CSS Starter

```css
:root {
  --radius: .375rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--background);
  color: var(--foreground);
  min-height: 100vh;
  font-family: Geist, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 24px);
}

.surface {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.muted-surface {
  background: var(--muted);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.focus-ring:focus-visible {
  outline: none;
  border-color: var(--ring);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 14%, transparent);
}
```
