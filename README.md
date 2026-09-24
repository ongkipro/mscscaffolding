# MSC Scaffolding Official Web Platform
## PT MITRA SOLUSI CAHAYA

Official web platform for **MSC Scaffolding (PT Mitra Solusi Cahaya)** — East Java's leading supplier for certified K3 scaffolding rental, sales, and heavy-duty shoring engineering.

> **Framework:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS  
> **Theme:** Professional, Minimalist Modern, Corporate, Industrial Theme Elegant  
> **Architecture:** 100% Focused on Public SEO Frontend (CMS & Admin Deferred to Phase 2)  
> **Authoritative Specs:** Safe Working Load (SWL) 1.500 kg/leg, Real 1.8mm SNI pipe thickness, Permenakertrans 01/1980 & EN 12811-1 certified.

---

## 🏛️ System Architecture

The application adopts Next.js 15 App Router focusing 100% on frontend performance, mobile responsiveness, and high conversion, backed by a clean Repository Pattern for future CMS extensibility:

```
src/
├── app/
│   ├── layout.tsx           # Public Layout (Navbar, Footer, Mobile Bar, SEO Schema)
│   ├── page.tsx             # Industrial Authority Homepage
│   ├── tentang-kami/page.tsx # Corporate Profile & 2 Warehouses
│   ├── produk/              # 15 Component Catalog with Category Filter & Search (SSG)
│   ├── sewa-scaffolding/    # Rental Service, Rates & Same-day Delivery SOP
│   ├── jual-scaffolding/    # Sales Service & SPH Procurement
│   ├── k3-panduan/          # HSE Compliance & Permenaker Guide
│   ├── kalkulator/          # Interactive Scaffolding Estimator Engine
│   ├── area-layanan/        # 5 East Java Regional Hubs (SSG)
│   ├── kontak/              # Dual Hotlines & Warehouse Directory
│   ├── not-found.tsx        # Clean 404 Error Page
│   ├── robots.ts            # Dynamic Robots.txt
│   └── sitemap.ts           # Dynamic Sitemap for All 29 Public Routes
│
*Note: CMS Admin Dashboard is deferred to Phase 2 roadmap.*
│
├── services/                    # Data Access Abstraction (Repository Pattern)
│   ├── productService.ts        # Typed Product Retrieval Functions
│   └── locationService.ts       # Typed Regional Hub Functions
│
├── data/                        # In-Memory Authoritative Data Stores
│   ├── company.ts               # PT Profile, Dual Hotlines, GPS Coordinates
│   ├── products.ts              # 15 Validated Scaffolding Components
│   ├── locations.ts             # Surabaya, Sidoarjo, Gresik, Pasuruan, Mojokerto
│   └── k3Data.ts                # Engineering SOP & Inspection Checklists
│
└── components/                  # Modular Presentation Components
    ├── layout/                  # Navbar, MobileDrawer, MobileBottomBar, Footer
    ├── home/                    # Hero, Services, CatalogPreview, K3Banner, WarehouseMap
    ├── produk/                  # ProductCard, ProductFilter, ProductSpecs
    └── kalkulator/              # ScaffoldingCalculator Engine
```

---

## 🎨 Design System: Industrial Elegant

- **Palette:** `bg-white` (Clean Canvas), `bg-slate-950` (Obsidian Steel Dark), `orange-600` (Safety Industrial Conversion), `emerald-500` (K3 Safety Verified).
- **Anti-Slop Standard:** Zero card-in-card nested borders, borderless layout with natural contrast planes, and monospaced engineering data alignment (`tabular-nums`).
- **Media Evidence:** 100% authentic local warehouse and realistic high-resolution civil project imagery.

---

## ⚡ Development & Scripts

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Build and validate static production export (29 routes)
npm run build

# Preview production build locally
npm run start
```

---

## 📚 Project Documentation Index

- [`PRD.md`](./PRD.md) — Product Requirements Document (EARS Requirements REQ-1 to REQ-10).
- [`PLAN.md`](./PLAN.md) — Technical Architecture & Route Topology Plan.
- [`TASKS.md`](./TASKS.md) — Phased Implementation Queue (27 Tasks).
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — System Boundaries & Service Layer Abstraction.
- [`docs/DEVELOPMENT.md`](./docs/DEVELOPMENT.md) — Developer Guide & CMS Integration Manual.
- [`docs/DESIGN.md`](./docs/DESIGN.md) — Design System & Visual Identity Guidelines.
- [`docs/DATA_LENGKAP_MSC_SCAFFOLDING.md`](./docs/DATA_LENGKAP_MSC_SCAFFOLDING.md) — Master Technical Database & Asset Registry.
