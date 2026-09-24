# Decision Register — mscscaffolding

Updated: 2026-09-21

Record accepted decisions that materially constrain product behavior,
architecture, security, data, operations, or delivery. Repository evidence must
support each decision; AI output alone is not evidence.

| ID | Status | Decision | Drivers | Evidence | Supersedes |
|---|---|---|---|---|---|
| DEC-001 | SUPERSEDED | Adopt Astro 7 (SSG) + Tailwind CSS v4 via `@tailwindcss/vite` + TypeScript | Initial static site evaluation | Archived build records | — |
| DEC-002 | SUPERSEDED | Enforce 11 Official Brand Tokens & DOKA Engineering Aesthetics | Initial design system baseline | Archived stylesheets | — |
| DEC-003 | ACCEPTED | Direct WhatsApp Lead Routing with 2 PICs & 4 Dynamic Business Templates | Frictionless contractor conversion; eliminate long formal forms for field mandors | `PRD.md`, `src/data/company.ts`, `docs/DESIGN.md` | — |
| DEC-004 | ACCEPTED | Authentic Local Project Evidence & Curated High-Resolution Industrial Media | High trust with East Java contractors, zero generic 3D or cartoon illustrations | `docs/images/`, `public/images/`, `PRD.md` | — |
| DEC-005 | ACCEPTED | Rebuild Platform on Next.js 15 App Router + React 19 + TypeScript | Enterprise scalability, unified React component ecosystem, seamless fullstack API boundaries | `PRD.md`, `PLAN.md`, `ARCHITECTURE.md` | DEC-001 |
| DEC-006 | ACCEPTED | Decouple Public SEO Frontend and Future CMS with Service Layer Abstraction | Ensure future headless CMS / backend database integration without rewriting UI components | `PRD.md`, `PLAN.md`, `docs/DEVELOPMENT.md` | — |
| DEC-007 | ACCEPTED | Adopt Professional, Minimalist Modern, Corporate, Industrial Theme Elegant | Eliminate nested card borders, boxy AI-slop containers, and visual clutter; enforce clean whitespace and obsidian steel contrast | `docs/DESIGN.md`, `docs/DEVELOPMENT.md` | DEC-002 |
| DEC-008 | ACCEPTED | Defer CMS & Admin Dashboard Development; Focus 100% on Frontend & Content SEO | User directive: Admin needs are not developed yet. Full focus on conversion, Core Web Vitals, mobile UX, and SEO content in Phase 1. | `PRD.md`, `PLAN.md`, `TASKS.md` | — |

Use stable IDs such as `DEC-001`. When a decision needs detailed alternatives or
consequences, add a repository-owned ADR and link it from this register. Never
rewrite history silently: mark the old decision superseded and add the new one.
