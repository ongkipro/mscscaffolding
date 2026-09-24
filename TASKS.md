# EXECUTION QUEUE (TASKS.md): MSC SCAFFOLDING (NEXT.JS APP ROUTER)
## Task Breakdown & Implementation Queue (100% Frontend & Content SEO Focus)

> **Project Slug:** `mscscaffolding`  
> **Status:** Production Ready (All 27 Tasks Verified)  
> **Framework:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + Lucide Icons  
> **Theme:** Professional, Minimalist Modern, Corporate, Industrial Theme Elegant  
> **Scope:** 100% Focused on Frontend & Content SEO (Admin & CMS Deferred to Phase 2)  

---

## PHASE 1: PROJECT INITIALIZATION & DESIGN SYSTEM SETUP

- [x] `TASK-01`: **Initialize Next.js 15 App Router Architecture**
  - Primary requirement: `REQ-1`, `REQ-8`, `REQ-10`
  - Dependencies: None
  - Scope: Setup Next.js 15, React 19, TypeScript, Tailwind CSS, and `lucide-react`. Configure `next.config.ts` and `tsconfig.json`. Create root directory skeleton with `src/app/` for public SEO routes.
  - Done when: `npm run dev` and `npm run build` run cleanly on the base Next.js skeleton.

- [x] `TASK-02`: **Configure Tailwind Industrial Tokens & Fonts**
  - Primary requirement: `REQ-1`
  - Dependencies: `TASK-01`
  - Scope: Configure colors (`slate-950`, `slate-900`, `orange-600`, `emerald-500`), font families (Inter / Geist Sans & Geist Mono), and base CSS reset for borderless minimalism without UI/UX legacy residue.
  - Done when: Global styles render correct brand palette without default browser styling glitches.

- [x] `TASK-03`: **Aset Pipeline Setup (Hero Slides, Product Photos & Renders)**
  - Primary requirement: `REQ-1`, `REQ-2`
  - Dependencies: `TASK-01`
  - Scope: Move/copy all 5 curated 16:9 hero slides to `public/images/hero/`, 15 component product photos to `public/images/produk/`, 11 high-res project renders to `public/images/proyek/`, and branding logo to `public/images/branding/`.
  - Done when: All images are accessible under `/images/hero/...`, `/images/produk/...`, and `/images/proyek/...` in the browser.

---

## PHASE 2: CORE DATA LAYER & REPOSITORY SERVICE ABSTRACTION

- [x] `TASK-04`: **Define TypeScript Interfaces & Data Models**
  - Primary requirement: `REQ-2`, `REQ-3`, `REQ-5`, `REQ-7`
  - Dependencies: `TASK-01`
  - Scope: Create `src/types/index.ts` covering `HeroSlide`, `Product`, `ProductCategory`, `ServiceArea`, `CompanyConfig`, and `CalculationResult`.
  - Done when: Type definitions compile without errors.

- [x] `TASK-05`: **Populate Authoritative Data Sets**
  - Primary requirement: `REQ-2`, `REQ-3`, `REQ-5`, `REQ-6`, `REQ-7`
  - Dependencies: `TASK-04`
  - Scope: Create `src/data/heroSlides.ts` (5 curated 16:9 slides with badges, titles, descriptions, and CTA links), `src/data/company.ts`, `src/data/products.ts` (all 15 items with exact dimensions & SWL), `src/data/locations.ts` (5 cities), and `src/data/k3Data.ts`.
  - Done when: Data files export complete typed arrays matching verified specifications.

- [x] `TASK-06`: **Build Service Layer Abstraction (Repository Pattern)**
  - Primary requirement: `REQ-10`
  - Dependencies: `TASK-04`, `TASK-05`
  - Scope: Create `src/services/productService.ts` and `src/services/locationService.ts` exposing typed retrieval functions (`getAllProducts`, `getProductBySlug`, `getCategories`, `getLocations`).
  - Done when: All data access is mediated through the service layer, ready for future CMS API swapping.

---

## PHASE 3: GLOBAL LAYOUTS & NAVIGATION

- [x] `TASK-07`: **Build Corporate Header & Navigation Bar**
  - Primary requirement: `REQ-1`, `REQ-7`
  - Dependencies: `TASK-02`, `TASK-05`
  - Scope: Create `src/components/layout/Navbar.tsx` featuring brand logo, clean horizontal links, and direct SPH tender quote action.
  - Done when: Navbar renders cleanly at the top with sticky background blur and smooth navigation links.

- [x] `TASK-08`: **Build Mobile Off-Canvas Drawer & Sticky Action Bar**
  - Primary requirement: `REQ-1`, `REQ-7`
  - Dependencies: `TASK-02`, `TASK-05`
  - Scope: Create `src/components/layout/MobileDrawer.tsx` (slide-out menu) and `src/components/layout/MobileBottomBar.tsx` (sticky Call, WhatsApp, Calculator buttons).
  - Done when: Tested on mobile viewport; drawer toggles smoothly and bottom bar remains fixed and functional.

- [x] `TASK-09`: **Build Deep Obsidian Industrial Footer**
  - Primary requirement: `REQ-1`, `REQ-7`
  - Dependencies: `TASK-02`, `TASK-05`
  - Scope: Create `src/components/layout/Footer.tsx` with 4 columns: Corporate Profile & K3 pill, Component Catalog, Regional Coverage, and Physical Warehouses with clickable hotlines.
  - Done when: Footer renders with deep slate background, zero harsh border lines, and active tel/wa links.

- [x] `TASK-10`: **Assemble Public Site Layout with JSON-LD Schema**
  - Primary requirement: `REQ-1`, `REQ-8`, `REQ-9`, `REQ-10`
  - Dependencies: `TASK-07`, `TASK-08`, `TASK-09`
  - Scope: Assemble `src/app/layout.tsx` incorporating metadata, Google Fonts, header, footer, mobile bar, and `LocalBusiness` structured data.
  - Done when: Public layout renders across all routes with valid schema script.

---

## PHASE 4: HOMEPAGE WITH MINIMALIST INDUSTRIAL AUTHORITY

- [x] `TASK-11`: **Build Full-Width 16:9 Cinema Hero Slider (`HeroSlider.tsx`)**
  - Primary requirement: `REQ-1`, `REQ-2`, `REQ-7`
  - Dependencies: `TASK-02`, `TASK-03`, `TASK-05`
  - Scope: Create `src/components/home/HeroSlider.tsx` ('use client') featuring 5 curated commercial slides (`heroSlides.ts`) with 6-second auto-advance, pause on hover, active indicator pills, subtle navigation chevrons, deep obsidian gradient protection layer (`from-slate-950/90`), 4-metric baseline grid (`1.8mm`, `1.5 Ton`, `2 Gudang`, `EN 12811`), and dual high-conversion CTAs ("Konsultasi Sewa Cepat" & "Hitung Kebutuhan Steger").
  - Done when: Hero slider renders full-width 16:9 seamlessly, auto-advances smoothly, allows manual slide navigation, and provides optimal typographic readability.

- [x] `TASK-12`: **Build Core Services & Capabilities Section**
  - Primary requirement: `REQ-2`
  - Dependencies: `TASK-02`, `TASK-06`
  - Scope: Create `src/components/home/CoreServices.tsx` detailing Sewa, Jual, and Shoring System on clean white/slate canvas without nested card borders.
  - Done when: Service items render cleanly with clear differentiators and action links.

- [x] `TASK-13`: **Build Catalog Preview & K3 Safety Assurance Section**
  - Primary requirement: `REQ-2`, `REQ-3`, `REQ-6`
  - Dependencies: `TASK-03`, `TASK-06`
  - Scope: Create `src/components/home/CatalogPreview.tsx` and `src/components/home/K3Banner.tsx` showcasing top components and Permenakertrans/EN-12811 certifications.
  - Done when: Product cards display crisp photos on pure white backgrounds with technical tags.

- [x] `TASK-14`: **Build Warehouse Hubs & Bu Hanifa Consultant Section**
  - Primary requirement: `REQ-2`, `REQ-7`
  - Dependencies: `TASK-03`, `TASK-06`
  - Scope: Create `src/components/home/WarehouseShowcase.tsx` and `src/components/home/ConsultantCTA.tsx` featuring real warehouse addresses, Google Maps links, and portrait of Bu Hanifa.
  - Done when: Warehouse details provide immediate navigation links and consultant CTA directs to WhatsApp.

- [x] `TASK-15`: **Assemble Homepage (`src/app/page.tsx`)**
  - Primary requirement: `REQ-2`
  - Dependencies: `TASK-11`, `TASK-12`, `TASK-13`, `TASK-14`
  - Scope: Compose complete homepage in `src/app/page.tsx` with optimized SEO metadata.
  - Done when: Homepage loads smoothly with 0 errors and all interactive sections function.

---

## PHASE 5: PRODUCT CATALOG & DETAIL PAGES (SSG)

- [x] `TASK-16`: **Build Product Catalog Index (`/produk`) with Real-time Filter & Search**
  - Primary requirement: `REQ-3`, `REQ-10`
  - Dependencies: `TASK-06`
  - Scope: Build `src/app/produk/page.tsx` with interactive category tabs (`Semua`, `Rangka Utama`, `Pijakan & Tangga`, `Aksesoris & Support`, `Roda`), search input, and clean product cards fed via `productService`.
  - Done when: Category filtering and search update the product grid instantly without page reload.

- [x] `TASK-17`: **Build Static Product Detail Pages (`/produk/[slug]`)**
  - Primary requirement: `REQ-3`, `REQ-9`, `REQ-10`
  - Dependencies: `TASK-06`, `TASK-16`
  - Scope: Build `src/app/produk/[slug]/page.tsx` using `generateStaticParams()` for all 15 items, featuring high-res imagery, technical spec table, SWL rating, and custom WhatsApp quote generator.
  - Done when: All 15 product routes pre-render statically and display accurate data.

---

## PHASE 6: SERVICES, INTERACTIVE TOOLS & PRODUCT ENHANCEMENT

- [x] `TASK-18`: **Build Sewa Scaffolding Page (`/sewa-scaffolding`)**
  - Primary requirement: `REQ-1`, `REQ-9`
  - Dependencies: `TASK-06`, `TASK-10`
  - Scope: Build rental rates table, 6-step ordering workflow, same-day delivery terms, and FAQ section with `FAQPage` schema.
  - Done when: Page renders complete rental breakdown with working SPH inquiry button.

- [x] `TASK-19`: **Build Jual Scaffolding Page (`/jual-scaffolding`)**
  - Primary requirement: `REQ-1`, `REQ-9`
  - Dependencies: `TASK-06`, `TASK-10`
  - Scope: Build sales page featuring brand-new galvanis units and graded reconditioned units with safety guarantee and B2B tender procurement flow.
  - Done when: Page provides clear comparison and instant purchase quotation routing.

- [x] `TASK-20`: **Build Interactive Scaffolding Calculator (`/kalkulator`)**
  - Primary requirement: `REQ-4`, `REQ-9`
  - Dependencies: `TASK-04`, `TASK-06`
  - Scope: Build `src/components/kalkulator/ScaffoldingCalculator.tsx` with dynamic inputs for length and height, computing sets, main frames, catwalks, jack bases, estimated budget, and 1-click WhatsApp dispatch.
  - Done when: Real-time calculation produces accurate component bills and generates a complete WhatsApp message.

- [x] `TASK-21`: **Build K3 Guide & Engineering SOP (`/k3-panduan`)**
  - Primary requirement: `REQ-6`, `REQ-9`
  - Dependencies: `TASK-06`
  - Scope: Build comprehensive safety documentation covering Permenakertrans 01/1980, EN 12811-1, SWL load matrix, step-by-step erection/dismantling SOP, and Scafftag inspection system.
  - Done when: Page renders complete engineering guidelines with `TechArticle` schema.

- [x] `TASK-22`: **Build Corporate Profile & Contact Pages (`/tentang-kami` & `/kontak`)**
  - Primary requirement: `REQ-1`, `REQ-7`
  - Dependencies: `TASK-06`
  - Scope: Build corporate history, mission, legal certificates, 2 warehouse profiles, direct telephone hotlines, email, and Google Maps embeds.
  - Done when: Both pages render cleanly with direct contact capabilities.

- [x] `TASK-23`: **Build Scaffolding Component Quick-Spec Modal & Inquiry Generator**
  - Primary requirement: `REQ-3`, `REQ-7`
  - Dependencies: `TASK-06`, `TASK-16`
  - Scope: Build `src/components/produk/ProductQuickSpecModal.tsx` allowing users on `/produk` to instantly inspect engineering dimensions, SWL, weight, and trigger customized WhatsApp inquiry without navigating away from the catalog grid.
  - Done when: Clicking "Quick Spec" on any product opens modal with complete data and active WhatsApp trigger.

---

## PHASE 7: HYPER-LOCAL SEO REGIONAL HUBS

- [x] `TASK-24`: **Build Service Areas Directory (`/area-layanan`)**
  - Primary requirement: `REQ-5`, `REQ-10`
  - Dependencies: `TASK-06`
  - Scope: Build landing page summarizing delivery coverage across East Java industrial belts using `locationService`.
  - Done when: Overview displays all 5 key cities with transit times and logistics distance.

- [x] `TASK-25`: **Build Static Localized Landing Pages (`/area-layanan/[kota]`)**
  - Primary requirement: `REQ-5`, `REQ-9`, `REQ-10`
  - Dependencies: `TASK-06`, `TASK-24`
  - Scope: Build localized pages with `generateStaticParams()` for Surabaya, Sidoarjo, Gresik, Pasuruan, dan Mojokerto with hyper-local industrial estates (SIER, Margomulyo, Buduran, JIIPE, PIER, NIP).
  - Done when: All 5 city pages pre-render statically with local keywords and transit times.

---

## PHASE 8: TECHNICAL SEO, SITEMAP & FINAL VERIFICATION

- [x] `TASK-26`: **Generate Dynamic Sitemap & Robots.txt**
  - Primary requirement: `REQ-8`, `REQ-9`, `REQ-10`
  - Dependencies: `TASK-17`, `TASK-25`
  - Scope: Implement `src/app/sitemap.ts` and `src/app/robots.ts` covering all 29 public routes with clean crawler directives.
  - Done when: `/sitemap.xml` outputs 29 public URLs and `/robots.txt` enables full public crawling.

- [x] `TASK-27`: **Build Verification, Cache Purge & UI/UX Audit**
  - Primary requirement: `REQ-1`, `REQ-8`
  - Dependencies: All tasks
  - Scope: Execute cache purge protocol, run `npm run build`, confirm 29 static pages build with 0 errors, audit local HTTP 200 responses, and verify zero layout shifts or missing assets.
  - Done when: Static build completes with 0 errors, 29 static pages generated, and dev server returns 200 OK.
