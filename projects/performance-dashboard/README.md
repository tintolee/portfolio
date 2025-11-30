# Performance Insights Dashboard

Summary: Dashboards aggregating core web vitals, error traces, and release metrics for engineering teams.
Stack: Next.js, D3, PostgreSQL

Goals:

- Pull and store metrics (CWV, errors, releases) from sources.
- Visualize trends with D3 (time-series, distributions, correlation).
- Slice by release/version and dimension (route, device, region).

Planned scaffold:

- Next.js app for UI + API routes for ingestion
- Database (PostgreSQL) with Prisma or SQL migrations
- D3 for custom charts; consider nivo/recharts for bootstrapping

Getting started:

```
cd projects/performance-dashboard
npm install
npm run dev
```

Database (Prisma + SQLite):

```
echo "DATABASE_URL=\"file:./prisma/dev.db\"" > .env
npm run prisma:generate
npm run prisma:migrate:dev
npm run db:seed
```

Open Prisma Studio:

```
npm run prisma:studio
```

API usage:

- Ingest metric (POST): `POST /api/ingest` with JSON `{ t: ISODateString, lcp: number, fid: number, cls: number }`
- List metrics (GET): `GET /api/ingest`
  Seeded charts:
- The homepage renders simple SVG charts for LCP, FID, and CLS using data from `src/data/metrics.json`.
  Update this file to see charts refresh.
  Ingest form:
- The homepage includes a simple form to POST to `/api/ingest`. After submit, the page reloads and charts update using DB data.
  Build and start:

```
npm run build
npm start
```

Milestones:

- M1: Data model + seed; basic ingestion
- M2: Dashboards: vitals and error tracing
- M3: Release comparison and annotations
- M4: Team sharing and export
