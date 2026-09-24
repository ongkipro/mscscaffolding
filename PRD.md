# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## MSC Scaffolding Official Web Platform (PT Mitra Solusi Cahaya)

> **Document Status:** Active Specification (Next.js App Router — 100% Focused on Frontend & Content SEO)  
> **Slug:** `mscscaffolding`  
> **Author:** Antigravity / Solution Architect  
> **Framework:** Next.js 15 (App Router) + React 19 + Tailwind CSS + TypeScript  
> **Design Theme:** Professional, Minimalist Modern, Corporate, Industrial Theme Elegant  
> **Target Domain:** `www.mscscaffolding.com`  
> **Architecture Mode:** High-Performance SEO Frontend (Current Scope) + Future CMS Headless Extensibility (Phase 2 Deferred)  

---

## 1. EXECUTIVE SUMMARY & BUSINESS OBJECTIVES

### 1.1 Problem Statement
Kontraktor, mandor, engineering HSE, dan procurement purchasing di kawasan industri Jawa Timur (Surabaya, Sidoarjo, Gresik, Pasuruan, Mojokerto) membutuhkan kepastian stok scaffolding galvanis, transparansi sewa dan beli, ketepatan spesifikasi teknis pipa (OD 48.3mm, tebal pipa real 1.8mm tanpa pipa banci, SWL 1.500 kg/tiang), serta sertifikasi K3 resmi tanpa hambatan birokrasi penawaran yang lambat. Website vendor scaffolding konvensional umumnya memiliki visual usang, performa lambat, tata letak berantakan (banyak garis dan kotak bertumpuk), serta navigasi yang membingungkan.

### 1.2 Solution & Vision
Membangun platform web resmi **MSC Scaffolding (PT Mitra Solusi Cahaya)** berbasis **Next.js 15 App Router** dengan **fokus penuh 100% pada Frontend & Content SEO**:
1. **Design Theme: Professional, Minimalist Modern, Corporate, Industrial Theme Elegant**
   - Estetika industrial premium yang bersih: dominasi warna obsidian/slate gelap yang solid (`slate-950`, `slate-900`) dipadukan dengan latar belakang putih bersih (`bg-white`), kontras tajam, tipografi presisi (*precision mono & geometric sans*), serta aksen warna keselamatan industri (*Safety Orange* & *Emerald K3 Verified*).
   - Zero-clutter & borderless layout: tidak menggunakan bingkai atau kotak-kotak bertumpuk yang kaku. Menekankan ruang negatif (*whitespace*), tipografi editorial yang kuat, dan fotografi proyek/aset orisinal beresolusi tinggi.
2. **Extreme Performance & SEO Architecture:**
   - Next.js Server Components (RSC) dengan Static Site Generation (SSG) menghasilkan skor Core Web Vitals maksimal dan waktu muat instan (< 0.8s LCP).
   - Struktur JSON-LD Schema komprehensif (`LocalBusiness`, `Product`, `Service`, `FAQPage`, `TechArticle`, `WebApplication`, `BreadcrumbList`).
3. **Modular Data Architecture for Future Headless CMS Readiness:**
   - **Kebutuhan Admin/CMS Ditunda:** Sesuai arahan user, kebutuhan panel admin belum didevelop pada fase ini. Seluruh upaya difokuskan pada kesempurnaan frontend publik, kecepatan muat, estetika UI/UX, konversi WhatsApp, dan SEO.
   - **Repository Pattern Data Layer:** Seluruh pemanggilan data produk dan area layanan dibungkus dalam service abstraction (`productService.ts`, `locationService.ts`) serta model data statis (`src/data/`), sehingga saat CMS atau database backend ditambahkan di masa depan, komponen UI frontend sama sekali tidak perlu diubah.

---

## 2. USER PERSONAS & CORE USER JOURNEYS

| Persona | Profil & Kebutuhan Lapangan | Tujuan Utama di Platform |
|---|---|---|
| **Pak Joko (Mandor / Pelaksana Fasad)** | Buka web lewat smartphone langsung di lokasi proyek; butuh 20 set scaffolding steger besok pagi untuk renovasi ruko/pabrik. | Menghitung kebutuhan set via kalkulator, mengecek tarif sewa bulanan, dan klik tombol WhatsApp Bu Hanifa untuk kirim *same-day*. |
| **Bu Melati (Purchasing / Procurement PT)** | Mengakses dari desktop/laptop kantor; membandingkan 3 vendor perancah untuk tender proyek komersial/BUMN di Sidoarjo. | Mengecek legalitas PT Mitra Solusi Cahaya, memverifikasi spek pipa 1.8mm SNI, mengunduh company profile, dan meminta Surat Penawaran Harga (SPH) resmi. |
| **Pak Rahmat (Safety Officer / HSE Manager)** | Memastikan seluruh perancah aman dari risiko kegagalan struktur sebelum diizinkan masuk lokasi proyek industri (SIER/JIIPE). | Memverifikasi sertifikasi K3 (Permenakertrans 01/1980 & EN 12811-1), tabel Safe Working Load (SWL 1.500 kg), dan SOP inspeksi scaffolding. |
| **Admin Internal MSC (Roadmap Phase 2)** | Tim operasional/sales MSC yang mengelola ketersediaan stok dan harga sewa/jual. | *Catatan: Fitur panel CMS admin ditunda untuk fase masa depan; belum didevelop pada rilis ini.* |

---

## 3. DESIGN THEME & BRAND IDENTITY SPECIFICATIONS

### 3.1 Theme Philosophy: Industrial Elegant & Minimalist Modern
- **Professional & Corporate:** Memancarkan reputasi perusahaan terpercaya, legalitas lengkap, dan kapasitas operasional skala besar (2 gudang logistik fisik di Surabaya dan Sidoarjo).
- **Minimalist Modern:** Desain lapang tanpa elemen dekoratif berlebihan. Menghilangkan garis pembatas tebal, kotak kartu bersarang (*nested cards*), dan efek visual norak.
- **Industrial Theme Elegant:** Merefleksikan kekuatan material baja pipa galvanis, presisi sambungan *joint pin/cross brace*, dan ketangguhan standar konstruksi internasional dengan penyajian yang mewah dan terkurasi.

### 3.2 Semantic Color Tokens
- **Background Primary:** `#FFFFFF` (Clean Stark White) untuk area baca konten dan katalog produk.
- **Background Industrial Dark:** `#020617` (Slate 950 / Obsidian Steel) untuk Header, Hero Media Canvas, Banner K3, dan Footer.
- **Background Subtle:** `#F8FAFC` (Slate 50) & `#F1F5F9` (Slate 100) untuk transisi section dan pill badges.
- **Text Headings:** `#020617` (Slate 950) pada light background, `#FFFFFF` pada dark background.
- **Text Body:** `#334155` (Slate 700) & `#475569` (Slate 600) untuk keterbacaan tinggi.
- **Brand Accent (Safety Industrial):** `#EA580C` (Orange 600) & `#F97316` (Orange 500) untuk conversion CTA, aksen angka metrik teknis, dan identitas keselamatan kerja.
- **Compliance Status (K3 Verified):** `#10B981` (Emerald 500) untuk live status, sertifikasi uji beban, dan SWL verified.

### 3.3 Typography
- **Primary Body & Headings:** `Geist Sans` / `Inter` — font sans-serif modern yang kokoh dan memiliki *x-height* tinggi.
- **Technical Metrics & Spec Labels:** `Geist Mono` / `JetBrains Mono` — font monospaced untuk ukuran pipa (1.8mm), bobot beban (1.500 kg), kode komponen (`SET-170`, `MF-190`), dan nomor kontak.

---

## 4. ROUTE ARCHITECTURE (100% FRONTEND & CONTENT SEO FOCUS)

### 4.1 Next.js App Router Structure
Fokus pengerjaan adalah 100% pada rute publik yang ramah SEO, berkecepatan tinggi (<0.8s LCP), dan berorientasi konversi:
```
src/app/
├── layout.tsx                  # Public Root Layout (Navbar, Footer, Floating Mobile Bar, Public SEO, JSON-LD)
├── page.tsx                    # Homepage (Hero, Core Services, Catalog Preview, Warehouses, CTA)
├── tentang-kami/
│   └── page.tsx                # Corporate Profile, 2 Warehouses, Facility Tours, Team
├── produk/
│   ├── page.tsx                # Full Catalog Index with Category Filters & Search
│   └── [slug]/
│       └── page.tsx            # Product Detail Page (15 Components with Technical Specs)
├── sewa-scaffolding/
│   └── page.tsx                # Rental Service, Rates Table, Same-day Delivery SOP, FAQ
├── jual-scaffolding/
│   └── page.tsx                # Sales Service (New Factory-made & Graded Used Units), SPH Flow
├── k3-panduan/
│   └── page.tsx                # HSE & Safety Guide, Permenaker SOP, Inspection Checklist
├── kalkulator/
│   └── page.tsx                # Interactive Scaffolding Grid & Component Estimator
├── area-layanan/
│   ├── page.tsx                # Regional Service Hubs Overview
│   └── [kota]/
│       └── page.tsx            # Hyper-local Landing Pages (Surabaya, Sidoarjo, Gresik, Pasuruan, Mojokerto)
├── kontak/
│   └── page.tsx                # Contact Directory, Dual Hotlines, Google Maps Embeds
├── not-found.tsx               # Clean 404 Error Page
├── robots.ts                   # Dynamic robots.txt
└── sitemap.ts                  # Dynamic sitemap.xml for all 29 public routes

*Catatan Arsitektur: Kebutuhan dashboard admin CMS dan backend database ditunda ke Phase 2.*
```

### 4.2 Comprehensive 15 Products Catalog
1. `set-scaffolding-170`: 1 Set Scaffolding Standar Fasad T170 (Main Frame, Cross Brace, Joint Pin)
2. `set-scaffolding-190`: 1 Set Scaffolding Headroom T190
3. `main-frame-170`: Main Frame T170 Pipa 1.8mm Galvanis SNI
4. `main-frame-190`: Main Frame T190 Pipa 1.8mm Galvanis SNI
5. `ladder-frame-90`: Ladder Frame T90
6. `catwalk-metal-plank`: Catwalk Pijakan Metal Plank Anti-Slip 50x183cm
7. `tangga-bordes-170`: Tangga Scaffolding Bordes Baja Fasad 170
8. `cross-brace-220`: Cross Brace Silang Galvanis 220cm
9. `joint-pin-galvanis`: Joint Pin Penyambung Tiang Scaffolding
10. `jack-base-60`: Jack Base T60cm Solid Ulir Baja
11. `u-head-60`: U-Head Jack T60cm Penyangga Balok Bekisting
12. `pipe-support-ts90`: Pipe Support Prop Baja Teleskopik TS-90
13. `caster-wheel-6-inch`: Roda Scaffolding Karet Heavy Duty 6 Inch + Rem
14. `caster-wheel-8-inch`: Roda Scaffolding Karet Heavy Duty 8 Inch + Rem
15. `lock-pin-presisi`: Lock Pin Pengunci Pengaman Scaffolding

---

## 5. FUNCTIONAL & SYSTEM REQUIREMENTS (EARS-STYLE)

### REQ-1: Core Branding & Industrial Minimalist Layout
- **Ubiquitous:** The system shall render all public pages using the Professional Minimalist Modern Corporate Industrial theme without visible nested card borders or visual clutter.
- **Acceptance Criteria:**
  1. Header features sticky positioning, brand logo, clean navigation links, and direct WhatsApp quote action.
  2. Mobile view renders a lightweight off-canvas navigation drawer with high-contrast touch targets.
  3. Mobile view displays a fixed bottom action bar containing direct Call, WhatsApp, and Calculator shortcuts.
  4. Footer renders corporate identity, K3 compliance pill, product links, regional hubs, clickable hotlines, and copyright.

### REQ-2: Homepage Architecture & 5-Slide Full-Width Industrial Hero
- **Event-Driven:** When a visitor lands on `/`, the system shall present high-impact industrial storytelling:
  1. **Full-Width 16:9 Hero Slider:** An enterprise-grade, smooth carousel featuring 5 curated commercial photographic slides depicting real-world industrial implementation, professional human personnel, and the rental business model:
     - **Slide 1 (Fasad & Supervisi):** High-rise facade construction in Surabaya with civil engineer & safety inspector reviewing blueprints (`hero_slide_1_facade_engineer.jpg`).
     - **Slide 2 (Logistik & Armada):** 2-warehouse logistics depot with flatbed trucks loaded with scaffolding bundles & digital dispatch manifest review (`hero_slide_2_logistics_dispatch.jpg`).
     - **Slide 3 (Shoring Infrastruktur):** Heavy-duty shoring tower grid supporting elevated flyover concrete casting with lead engineer inspecting SWL alignment (`hero_slide_3_shoring_infrastructure.jpg`).
     - **Slide 4 (Kemitraan B2B & SPH):** Senior scaffolding consultant shaking hands with contractor procurement director with official SPH dossier (`hero_slide_4_business_partnership.jpg`).
     - **Slide 5 (K3 & Green Scafftag):** Industrial plant retrofit with HSE safety officers affixing official green Scafftag compliance label (`hero_slide_5_safety_inspection.jpg`).
  2. **Hero Slider Ergonomics:**
     - Auto-advance every 6 seconds with pause-on-hover.
     - Interactive slide indicators and previous/next chevron navigation.
     - Deep slate readability gradient overlay (`from-slate-950/90 via-slate-950/50 to-transparent`).
     - 4-metric baseline responsive grid: `1.8mm` (Pipa Real SNI), `1.5 Ton` (SWL per Tiang), `2 Gudang` (Surabaya & Sidoarjo), `EN 12811` (Standar Mutu K3).
     - Dual high-conversion CTAs: "Konsultasi Sewa Cepat (WA)" and "Hitung Kebutuhan Steger".
  3. **Core Services Showcase:** Sewa Scaffolding, Jual Scaffolding (Baru & Rekondisi Bergaransi), dan Heavy-Duty Shoring System.
  4. **Live Inventory & Catalog Highlights:** High-resolution component cards on pure white canvas.
  5. **Physical Logistics Hub Showcase:** Complete address, facilities, fleet capacity, and Google Maps routing for Surabaya (Rungkut) and Sidoarjo (Buduran) depots.
  6. **Bu Hanifa & Engineering Consultation Section:** Direct WhatsApp channel routing for retail contractors, HSE inquiries, and B2B procurement tenders.

### REQ-3: Product Catalog & Detailed Technical Specs (SSG)
- **Ubiquitous:** The system shall statically generate (`generateStaticParams`) product catalog pages at `/produk` and `/produk/[slug]` for all 15 items.
- **Acceptance Criteria:**
  1. Catalog index allows real-time category filtering (Semua, Rangka Utama, Pijakan & Tangga, Aksesoris & Support, Roda).
  2. Each product detail page displays high-resolution photography, technical specification table (Tebal Pipa, Berat, Kapasitas SWL, Dimensi, Material), rental vs purchase options, and a direct WhatsApp quote generator pre-filled with the component name.

### REQ-4: Interactive Scaffolding Calculator
- **Event-Driven:** When a user enters length, height, and project type (Fasad / Shoring Pengecoran) on `/kalkulator`, the system shall:
  1. Compute total sets, main frames, cross braces, joint pins, catwalks, jack bases, and U-heads required.
  2. Estimate rental budget (bulanan) and purchase budget (unit baru).
  3. Provide a one-click button to send the exact calculation summary directly to Bu Hanifa via WhatsApp.

### REQ-5: Hyper-Local SEO Pages
- **Ubiquitous:** The system shall statically generate hyper-local landing pages at `/area-layanan/[kota]` for Surabaya, Sidoarjo, Gresik, Pasuruan, dan Mojokerto.
- **Acceptance Criteria:**
  1. Content tailored to specific industrial zones (e.g., SIER, Margomulyo, Rungkut untuk Surabaya; Buduran, Berbek untuk Sidoarjo; JIIPE, Manyar untuk Gresik; PIER untuk Pasuruan; NIP untuk Mojokerto).
  2. Displays exact delivery lead times and distance from the nearest MSC warehouse.

### REQ-6: K3 Safety & Engineering Documentation
- **Ubiquitous:** The system shall provide an engineering compliance guide at `/k3-panduan` detailing:
  1. Standar Permenakertrans No. 01/1980 dan EN 12811-1.
  2. Tabel Safe Working Load (SWL 1.500 kg per tiang).
  3. SOP Pemasangan & Pembongkaran Perancah bertahap.
  4. Scafftag system guide (Green Tag = Safe, Red Tag = Danger/Inspection).

### REQ-7: Dual WhatsApp Lead Routing & Conversion Mechanics
- **Ubiquitous:** The system shall route inquiries intelligently:
  1. **Bu Hanifa (`0822-5766-4755`):** Retail rentals, renovation, immediate contractor deliveries, calculator queries.
  2. **CS Kantor Tender (`0813-2562-024`):** Corporate B2B procurement, formal tender SPH/RAB, factory-direct bulk purchasing.

### REQ-8: Next.js Performance, Accessibility & Core Web Vitals
- **Non-Functional Requirement:**
  1. All pages achieve Lighthouse score >= 95 for Performance, Accessibility, Best Practices, and SEO.
  2. First Contentful Paint (FCP) < 0.6s, Largest Contentful Paint (LCP) < 1.2s, Cumulative Layout Shift (CLS) = 0.
  3. Full semantic HTML5 tags (`<main>`, `<article>`, `<header>`, `<footer>`, `<nav>`, `<aside>`).

### REQ-9: Structured Data & Schema Markup Engine
- **Ubiquitous:** The system shall inject structured JSON-LD into all routes:
  1. `LocalBusiness` & `Organization` with exact GPS coordinates and warehouse addresses.
  2. `Product` & `Offer` on individual product detail routes.
  3. `FAQPage` on `/sewa-scaffolding` and `/jual-scaffolding`.
  4. `WebApplication` on `/kalkulator`.
  5. `TechArticle` on `/k3-panduan`.
  6. `BreadcrumbList` on all detail and subpages.

### REQ-10: Modular Data Contracts & Headless Extensibility
- **Ubiquitous:** All frontend components shall retrieve data exclusively via typed service layer abstractions (`src/services/productService.ts`, `src/services/locationService.ts`) and static data definitions (`src/data/`), guaranteeing that UI views remain decoupled from data storage mechanisms.
- **Acceptance Criteria:**
  1. No hardcoded product specs directly inside React JSX views.
  2. Data fetching uses service layer abstractions returning strict TypeScript interfaces.
  3. Administration dashboard and CMS routes are explicitly deferred from Phase 1 development.

---

## 6. NON-GOALS (OUT OF SCOPE FOR INITIAL RELEASE)
- **Admin Dashboard UI & CMS management routes** (Deferred to Phase 2; Phase 1 is 100% focused on Frontend & Content SEO).
- Active headless CMS database write operations (editing products via database is reserved for Phase 2).
- Payment gateway integrations (e.g. Midtrans/Xendit) — B2B scaffolding transactions rely on official invoice/PO/SPH.
- Customer user authentication/login portal.
