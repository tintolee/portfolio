# Projects Workspace

This repository now includes a `projects/` workspace with dedicated folders for each showcased sample project from the portfolio. These directories are the place where we will build out the full implementations.

Projects:

- design-system — Design System Toolkit

  - Summary: Modular, accessible component library and token pipeline accelerating UI iteration across products.
  - Stack: React, TypeScript, Storybook, Tailwind

- realtime-collab — Realtime Collaboration Suite

  - Summary: OT + CRDT editor enabling presence, comments, offline sync, and conflict resolution.
  - Stack: React, WebSocket, CRDT, Node

- performance-dashboard — Performance Insights Dashboard
  - Summary: Dashboards aggregating core web vitals, error traces, and release metrics for engineering teams.
  - Stack: Next.js, D3, PostgreSQL

Structure:

- Each project folder contains an initial README with scope and milestones, plus a `.gitkeep` in `src/` so we can start committing code incrementally.

Quick start:

- Design System:

  ```
  cd projects/design-system
  npm install
  npm run dev
  ```

- Realtime Collab (two terminals):

  ```
  cd projects/realtime-collab/server && npm install && npm start
  # in another terminal
  cd projects/realtime-collab/client && npm install && echo "VITE_WS_PORT=4000" > .env && npm run dev
  ```

- Performance Dashboard:
  ```
  cd projects/performance-dashboard
  npm install
  npm run dev
  ```

Implement minimal slices next, then expand features per README milestones.
