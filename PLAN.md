# TECHNICAL ARCHITECTURE PLAN (PLAN.md)
## Rebuilding MSC Scaffolding with Next.js 15 App Router & CMS-Ready Architecture

> **Project:** MSC Scaffolding (PT Mitra Solusi Cahaya)  
> **Status:** Architecture Contract & Implementation Plan  
> **Framework:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Lucide Icons  
> **Aesthetic Foundation:** Professional, Minimalist Modern, Corporate, Industrial Theme Elegant  
> **Scope:** 100% Focused on Public Frontend & SEO Content Excellence (Admin & CMS Deferred to Phase 2)  

---

## 1. TECHNICAL FOUNDATIONS & TOPOLOGY

### 1.1 Next.js 15 App Router Directory Topology
Seluruh pengembangan difokuskan secara penuh pada performa dan konversi frontend publik di bawah `src/app/`. Arsitektur data tetap menggunakan Service Layer abstraction (`src/services/` & `src/data/`) agar saat CMS/admin ditambahkan di masa depan (Phase 2), integrasi berjalan plug-and-play tanpa mengubah komponen UI:

```
src/
├── app/
│   ├── layout.tsx                  # Public Root Layout (Navbar, Footer, Mobile Bars, Schema JSON-LD)
│   ├── page.tsx                    # Industrial Authority Homepage
│   ├── tentang-kami/page.tsx       # Corporate Profile & Physical Warehouses
│   ├── produk/
│   │   ├── page.tsx                # 15-Product Catalog with Reactive Category Filter & Search
│   │   └── [slug]/page.tsx         # SSG Product Detail Page (15 components)
│   ├── sewa-scaffolding/page.tsx   # Rental Service & SOP
│   ├── jual-scaffolding/page.tsx   # Sales Service & SPH Quote Flow
│   ├── k3-panduan/page.tsx         # HSE Standard & Permenaker Guidelines
│   ├── kalkulator/page.tsx         # Interactive Scaffolding Calculator
│   ├── area-layanan/
│   │   ├── page.tsx                # Regional Hubs Overview
│   │   └── [kota]/page.tsx         # SSG Local SEO Pages (5 Cities)
│   ├── kontak/page.tsx             # Contact Directory, Hotlines, Maps Embeds
│   ├── not-found.tsx               # Minimalist Industrial 404
│   ├── robots.ts                   # Dynamic robots.txt
│   └── sitemap.ts                  # Dynamic sitemap.xml (All 29 public routes)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                  # Sticky Header with Backdrop Blur
│   │   ├── MobileDrawer.tsx            # Slide-over Mobile Navigation Drawer
│   │   ├── MobileBottomBar.tsx         # Sticky Touch-friendly Action Bar
│   │   └── Footer.tsx                  # Deep Obsidian Industrial Footer
│   ├── home/
│   │   ├── HeroSlider.tsx              # 5-Slide 16:9 Cinema Slider ('use client')
│   │   ├── CoreServices.tsx            # Sewa, Jual, Shoring Showcase
│   │   ├── CatalogPreview.tsx          # Clean White Background Catalog Preview
│   │   ├── K3Banner.tsx                # Permenakertrans & EN 12811 Assurance
│   │   ├── WarehouseMap.tsx            # Surabaya & Sidoarjo Logistics Hubs
│   │   └── ConsultantCTA.tsx           # Bu Hanifa Engineering Consultation
│   ├── produk/
│   │   ├── ProductCard.tsx             # Borderless Product Card
│   │   ├── ProductFilter.tsx           # Interactive Category Tabs ('use client')
│   │   ├── ProductSpecs.tsx            # Monospaced Technical Specification Table
│   │   └── ProductQuickSpecModal.tsx   # Fast Engineering Specs & WhatsApp Trigger ('use client')
│   ├── kalkulator/
│   │   └── ScaffoldingCalculator.tsx   # Real-time Estimator Engine ('use client')
│   └── ui/
│       ├── PillBadge.tsx               # Status & Tag Pills
│       └── SectionHeading.tsx          # Consistent Section Typography
│
├── services/                           # Data Access Abstraction Layer (Repository Pattern)
│   ├── productService.ts               # getProducts(), getProductBySlug(), getCategories()
│   └── locationService.ts              # getLocations(), getLocationBySlug()
│
├── data/                               # Static Authoritative Data Layer
│   ├── company.ts                      # Company profile, hotlines, addresses, GPS
│   ├── heroSlides.ts                   # 5 Curated 16:9 slides (images, badges, titles, CTAs)
│   ├── products.ts                     # 15 Component models with exact specs
│   ├── locations.ts                    # 5 East Java industrial cities
│   └── k3Data.ts                       # SOP, SWL standards, inspection checklist
│
└── types/
    └── index.ts                        # TypeScript Data Contracts
```

---

## 2. DATA ACCESS ABSTRACTION (REPOSITORY PATTERN)

To ensure an effortless transition to a headless CMS (Payload CMS, Strapi, Sanity, or PostgreSQL/Drizzle) in the future without refactoring frontend components, all components interact **only with the service layer**:

```typescript
// src/services/productService.ts
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product, ProductCategory } from '@/types';

// CURRENT: In-memory static data retrieval
// FUTURE: Replace implementation with CMS fetch() or DB query without changing signatures!
export async function getAllProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug);
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  return CATEGORIES;
}
```

When the CMS is connected in the future, `getAllProducts()` can simply call `fetch('https://cms.mscscaffolding.com/api/products')` or query a local D1/Postgres database. The Server Components in `(site)` will continue consuming the exact same interface seamlessly.

---

## 3. STATIC SITE GENERATION (SSG) & PERFORMANCE

- All 29 public routes are pre-rendered at build time via `generateStaticParams`:
  - 15 products: `/produk/[slug]`
  - 5 cities: `/area-layanan/[kota]`
  - 9 static informational pages: `/`, `/tentang-kami`, `/sewa-scaffolding`, `/jual-scaffolding`, `/k3-panduan`, `/kalkulator`, `/area-layanan`, `/kontak`, `/404`
- **Core Web Vitals Target:**
  - LCP < 1.0s (Hero image pre-loaded with `fetchPriority="high"`)
  - CLS = 0 (Explicit image aspect ratios `aspect-4/3`)
  - FID / INP < 50ms (Zero unnecessary third-party tracking scripts)

---

## 4. UI/UX PURIFICATION & CACHE PURGE

- **Zero Clutter Discipline:**
  - Completely eliminate boxed borders (`border`, `border-slate-200`) wrapping product cards.
  - Rely on natural contrast planes (`bg-white` over `bg-slate-50`, and dark blocks in `bg-slate-950`).
  - Strict alignment of baseline typography (`flex items-baseline`).
- **All Previous Legacy Caches Purged:**
  - `.astro`, `dist`, and old bundle artifacts removed.
  - No legacy color tokens (`#0B2D5B`, `#02254A`).
  - Single authoritative styling vocabulary implemented via Tailwind CSS tokens.

---

## 5. VERIFICATION ROADMAP
1. Next.js 15 project structure initialized cleanly with Tailwind CSS industrial design tokens.
2. High-performance public frontend layout assembled with responsive navigation & mobile thumb bar.
3. Static generation (SSG) of all 29 public routes verified via `npm run build`.
4. Lighthouse audits verify Core Web Vitals (LCP < 1.0s, CLS = 0, FID < 50ms) and valid JSON-LD schemas.
5. Dev server verified at `http://localhost:3000/`.
