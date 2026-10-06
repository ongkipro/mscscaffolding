# Build Log — mscscaffolding

Record only durable implementation changes, validation evidence, and gotchas that the next maintainer needs. Temporary task narration belongs in neither this file nor global memory.

## 2026-10-06 — SEO, Content Accuracy & Quality Hardening (TASK-28)

- **SEO**: added `src/lib/seo.ts` (`pageMetadata()`); every page now has a self canonical, full Open Graph + Twitter card and a JPG share image. Removed the root-layout canonical (Next.js inherited it on every page that omitted one, pointing them at the homepage). Titles ≤ 60 and descriptions 70–160 chars on all 35 built pages; product pages use `Product.seoTitle`.
- **Gotcha — Next.js metadata merge is shallow**: a page that sets `openGraph: { title }` replaces the whole parent `openGraph` (site name, images, locale are lost). Always build the full object via `pageMetadata()`.
- **Structured data**: visible breadcrumbs + `BreadcrumbList` (`Breadcrumbs.tsx`), product `Offer`s (sale, `LeaseOut` monthly rental, refurbished), `AggregateOffer` computed from rate tables, `FAQPage` with visible FAQ on `/sewa-scaffolding` and all city hubs, `WebApplication` on `/kalkulator`, noindex 404 with its own title. All 104 JSON-LD blocks parse.
- **Content accuracy**: product specs aligned to `docs/raw-sources/Deskripsi product.txt` (Pre-Galvanis material, weights, catwalk Kanal C, jack base/U-head Ø30 13×13 plate, pipe support 260–380 cm, lock pin, etc.); `resiko` → `risiko`; inflated "puluhan ribu" stock wording → "ribuan".
- **Calculator bug**: old model priced 2 frames per bay (shared frames double-counted), hardcoded prices, clamped input while typing (could not clear the field) and capped stairs at 4. Now `estimateScaffolding()` (shared-frame model, prices from `products.ts` built on the server) with `npm test` coverage; bundle 11.5 kB → 6 kB by not shipping the catalogue. Estimates are lower than before for the same dimensions.
- **Lead-loss bug**: contact form showed "Berhasil Diterima" without sending anything. It now opens WhatsApp with the prefilled SPH request and tracks the conversion.
- **Tracking bug**: 4 components called the tracker on click while the global listener also tracked every `wa.me`/`tel:` anchor → every conversion counted twice. Components now only set `data-track-label`.
- **A11y/UX**: hero slider no autoplay under reduced motion, `aria-current` on dots, internal K3 CTA same-tab `next/link`; viewport zoom re-enabled; calculator selects labelled; warehouse button relabelled "WhatsApp Gudang".
- **Owner follow-up (same day)**: certification/legal claims left as-is (proof shared via WhatsApp, not on site). Replaced invented `/tentang-kami` milestone years with the source-backed service process; Surabaya postal code 60293 → 60295; Sidoarjo address "Pergudangan Tritan Hub, Wedi, Gedangan"; removed `Bangkalan` from `areaServed`; consultation hours aligned to 07.30–17.00; removed unlabelled `AW-…` conversion events.
- **Verification**: `npx tsc --noEmit` OK; `npm test` 6/6 pass; `npm run build` OK (41 pages); scratch SEO audit 35/35 pages OK; `next start` smoke: 16 routes 200, unknown product 404 + noindex, OG images 200.

## 2026-09-21 — UI/UX Refinement, AI-Slop Purge & Typography Precision

- **Design System & AI-Slop Elimination**:
  - Purged all cheesy AI-slop artifacts: removed rainbow gradient text (`text-transparent bg-clip-text`), pulsating pill badges, floating misplaced badges, and ambient glowing blur blobs (`blur-3xl`).
  - Implemented crisp corporate typography using Next.js Google Fonts (`Inter` for `--font-sans` and `JetBrains_Mono` for `--font-mono`), standardizing headline scales, weights, and monospace engineering tags.
  - Image Precision & Aspect-Ratio Stabilization: Eliminated layout shifts and image distortion by locking all image frames to precise aspect ratios (`aspect-[4/3]`, `aspect-[16/10]`, and full-width `sizes` configurations) across catalog cards, hero slides, warehouse cards, and service blocks.
  - Photo Framing & City Cards Minimalism: Eliminated double-boxing and clunky inner borders on all product cards, warehouse showcases, and consultant portraits. Upgraded regional city cards (`/area-layanan` & `/area-layanan/[kota]`) to minimalist pure white canvas with clean data hierarchy, subtle industrial tags, and refined hover states.
  - Tactile Micro-Interactions: Upgraded all buttons and interactive elements across all pages with physical click feedback (`active:scale-[0.98] transition-all`), uniform `rounded-md`/`rounded-xl` corners, and hairline borders (`border-slate-200/80`).
  - Interactive Contact & Inquiry Form (`ContactInquiryForm.tsx`): Built dual-mode inquiry submission with real-time field validation, Indonesian phone regex matching, error clearing, and direct 1-click WhatsApp message generation.
- **Verification**:
  - Local dev server (`http://localhost:3000`) confirmed HTTP 200 OK across all primary and secondary routes (`/`, `/produk`, `/sewa-scaffolding`, `/jual-scaffolding`, `/kalkulator`, `/k3-panduan`, `/tentang-kami`, `/kontak`, and all 5 city landing pages).

## 2026-09-21 — Next.js 15 Full Frontend & Content SEO Build (Production Ready)

- **Implementation Summary**:
  - Rebuilt complete application in **Next.js 15 App Router** (`src/app`) with React 19, TypeScript, and Tailwind CSS.
  - Executed all 27 tasks in `TASKS.md` across 8 structured milestones.
  - Admin and CMS requirements deferred to Phase 2 per user directive (`DEC-008`). All data access abstracted cleanly through Repository Pattern (`src/services/productService.ts` and `src/services/locationService.ts`).
- **Core Features Delivered**:
  - **Full-Width 16:9 Cinema Hero Slider:** 5 curated photorealistic industrial business slides with 6s auto-advance, pause on hover, active indicator pills, subtle navigation chevrons, deep obsidian gradient protection layer, 4-metric baseline grid (`1.8mm`, `1.5 Ton`, `2 Gudang`, `EN 12811`), and dual high-conversion CTAs.
  - **15 Authentic Component Catalog & SSG Detail Pages (`/produk` & `/produk/[slug]`):** Real-time category filtering, text search, quick engineering spec modal (`ProductQuickSpecModal.tsx`), technical specifications table, SWL ratings, and WhatsApp quote generators.
  - **Interactive Scaffolding Calculator (`/kalkulator`):** Real-time mathematical simulation calculating bay count, tier count, sets, main frames, catwalks, jack bases, u-heads, pipe supports, monthly rental budget, purchase cost, and 1-click WhatsApp message export.
  - **Commercial Pages:** `/sewa-scaffolding` (rental rates table, 6-step ordering SOP, FAQ schema) and `/jual-scaffolding` (brand new vs rekondisi Grade A comparison table, B2B tender procurement workflow).
  - **K3 Safety Authority Documentation (`/k3-panduan`):** Permenakertrans 01/1980 Bab V, European Standard EN 12811-1, SWL load matrix, step-by-step erection/dismantling SOP, visual Scafftag protocol (Green/Yellow/Red), 6-point critical inspection checklist, and `TechArticle` schema.
  - **Hyper-Local SEO Hubs (`/area-layanan` & `/area-layanan/[kota]`):** Static SSG landing pages for Surabaya, Sidoarjo, Gresik, Pasuruan, and Mojokerto with hyper-local industrial estates (SIER, Margomulyo, Buduran, JIIPE, PIER, NIP), transit times, and `Service` structured data.
  - **Corporate & Contact Pages:** `/tentang-kami` and `/kontak` with full corporate legal details (PT MITRA SOLUSI CAHAYA), dual hotlines (Bu Hanifa `0822-5766-4755` & Kantor Tender `0813-2562-024`), and physical warehouse GPS links.
  - **Technical SEO:** Dynamic `src/app/sitemap.ts` pre-rendering all 29 public URLs and `src/app/robots.ts`.
- **Verification Evidence**:
  - `npm run build`: Compiled cleanly in 2.5s with 34/34 static pages generated and zero errors.
  - Local HTTP Smoke Tests: All 15 tested endpoints returned `HTTP 200 OK`.
  - JSON-LD Schemas: Valid `LocalBusiness`, `Product`, `ItemList`, `FAQPage`, `TechArticle`, and `Service` metadata rendered.
  - Zero hard git commits or pushes performed (preserved for user approval).

## 2026-09-21 — Next.js 15 Rebuild Architecture & Complete Specification

- **Strategic Pivot**:
  - Transitioning project from Astro to **Next.js 15 App Router** (`src/app`) with React 19, TypeScript, and Tailwind CSS.
  - **Frontend-First Directive (`DEC-008`):** Admin & CMS dashboard requirements are formally deferred to Phase 2 per user command. Development scope is 100% dedicated to high-performance Frontend & Content SEO.
  - Introduced Repository Pattern Data Access Layer (`src/services/productService.ts` and `locationService.ts`) to ensure seamless future migration to Headless CMS or Postgres without frontend UI changes.
- **Design System Evolution**:
  - Upgraded to **Professional, Minimalist Modern, Corporate, Industrial Theme Elegant**.
  - Wiped legacy border-heavy card designs and rigid outlines; replaced with clean whitespace, natural contrast planes (`bg-white` over `bg-slate-50`, dark obsidian blocks `bg-slate-950`), and `orange-600` / `emerald-500` industrial accents.
  - Purged all stale cache artifacts (`.astro/`, `dist/`, `node_modules/`, `~/.cache/bluwy-giget`, and npm cache).

## 2026-09-18 — Astro Initial Build & Verification (Archived)

- Initial prototype built in Astro with 29 static routes.
- Fully verified and tested before pivoting to Next.js 15 App Router for fullstack/CMS enterprise readiness.

## 2026-09-17 — Development contract initialized

- Added repository-local project context files.
