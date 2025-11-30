# Design System Toolkit

Summary: Modular, accessible component library and token pipeline accelerating UI iteration across products.
Stack: React, TypeScript, Storybook, Tailwind

Goals:

- Establish design tokens (colors, spacing, typography) with theming.
- Build core components (Button, Input, Modal) with a11y baked in.
- Document with Storybook; add visual regression tests later.

Planned scaffold:

- Vite + React + TypeScript
- Tailwind for utilities + token bridge
- Storybook for docs and component QA

Getting started:

```
cd projects/design-system
npm install
npm run dev
```

Build and preview:

```
npm run build
npm run preview
```

Storybook:

```
npm run storybook
```

Open http://localhost:6006 to view component docs.

Components included:

- Button (variants: primary, secondary, ghost; sizes: sm, md, lg)
- Input (label, description, error with proper aria props)
- Modal (focus-trapped, Esc/backdrop close)
- Checkbox (label + description)

Tests:

```
npm run test
```

Runs Vitest with jsdom and Testing Library.

Milestones:

- M1: Tokens + theming
- M2: Core primitives + accessibility
- M3: Storybook documentation site
- M4: Release pipeline (versioning, changelog)
