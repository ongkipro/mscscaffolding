# Decision Register — mscscaffolding

Updated: 2026-10-06

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
| DEC-009 | ACCEPTED | Calculator uses a shared-frame model (n bays → n+1 frames per tier) priced per component from the product catalogue, implemented as a pure tested util | Old model priced 2 frames per bay (double-counted shared frames) and hardcoded prices that could drift from `products.ts` | `src/utils/scaffoldingEstimate.ts`, `tests/scaffoldingEstimate.test.mjs`, `src/app/kalkulator/page.tsx` | — |
| DEC-010 | ACCEPTED | Contact form delivers only via WhatsApp (no fake "received" state) until a real backend exists | Site has no backend; the old form showed success without sending anything (silent lead loss) | `src/components/kontak/ContactInquiryForm.tsx` | — |
| DEC-011 | ACCEPTED | Centralised SEO metadata via `pageMetadata()`: per-page canonical, full Open Graph + Twitter, JPG share images, no root-level canonical | Next.js shallow-merges `openGraph`/`alternates`, so pages that set partial objects dropped site name/images and inherited a homepage canonical; WhatsApp previews need JPG | `src/lib/seo.ts`, `src/app/layout.tsx` | — |
| DEC-012 | ACCEPTED | Click conversions are tracked only by the global `wa.me`/`tel:` listener (labels via `data-track-label`); `window.open` paths track explicitly | Components also called the tracker on click, double-counting every conversion | `src/components/layout/ClientLayout.tsx` | — |

Use stable IDs such as `DEC-001`. When a decision needs detailed alternatives or
consequences, add a repository-owned ADR and link it from this register. Never
rewrite history silently: mark the old decision superseded and add the new one.
