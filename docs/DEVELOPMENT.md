# DEVELOPMENT & ARCHITECTURE MANUAL
## MSC Scaffolding Platform (PT Mitra Solusi Cahaya)

> **Document Status:** Authoritative Development Guide  
> **Framework:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS  
> **Theme:** Professional, Minimalist Modern, Corporate, Industrial Theme Elegant  

---

## 1. ARCHITECTURE PHILOSOPHY: 100% FRONTEND & SEO EXCELLENCE

Platform web resmi MSC Scaffolding dibangun dengan memprioritaskan performa tinggi, konversi WhatsApp tanpa hambatan, dan keramahan mesin pencari (SEO). Kebutuhan dashboard admin CMS saat ini ditunda ke Phase 2 roadmap.

### 1.1 Fokus Fase 1: Public Frontend Architecture
- Seluruh rute publik diorganisasikan langsung di bawah `src/app/` untuk kemudahan navigasi dan kecepatan muat instan: Beranda, Produk, Layanan Sewa/Jual, Panduan K3, Kalkulator, Area Layanan (5 Kota Industri), dan Kontak.
- Root layout (`src/app/layout.tsx`) menyediakan navigasi korporat yang kokoh, mobile drawer responsif, floating thumb bar untuk mandor di lapangan, serta injeksi schema JSON-LD terstruktur (`LocalBusiness`, `Product`, `Service`).
- **CMS Phase 2 Roadmap:** Desain data contracts tetap mempertahankan pola Service Abstraction (`src/services/`) dan model data modular (`src/data/`), sehingga saat CMS atau database backend ditambahkan di masa depan, integrasi berjalan *plug-and-play* tanpa refactoring pada komponen antarmuka.

---

## 2. DATA ACCESS LAYER: REPOSITORY PATTERN

Seluruh komponen tampilan di `src/app/(site)` **dilarang** mengimpor data mentah secara langsung jika berpotensi dinamis. Seluruh pemanggilan wajib melalui **Service Layer**:

```
[ Server Components (RSC) ]
            │
            ▼
[ Service Layer: src/services/productService.ts ]
            │
            ├── (Saat Ini) ──► Mengambil dari src/data/products.ts (In-memory TS)
            └── (Masa Depan) ─► Mengambil dari Headless CMS / PostgreSQL / D1 API
```

### Contoh Implementasi Service:
```typescript
// src/services/productService.ts
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product, ProductCategory } from '@/types';

export async function getAllProducts(): Promise<Product[]> {
  // Current static implementation
  return PRODUCTS;
  
  // Future CMS implementation:
  // const res = await fetch('https://api.mscscaffolding.com/products', { next: { revalidate: 3600 } });
  // return res.json();
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((item) => item.slug === slug);
}
```
Dengan pola ini, saat backend/CMS siap diintegrasikan, tidak ada satu baris kode pun di komponen UI publik yang perlu diubah atau di-refactor.

---

## 3. DESIGN SYSTEM & UI/UX STANDARDS

### 3.1 Pilar Desain: Minimalist Modern & Industrial Theme Elegant
1. **Zero Nested Boxes (Anti-Slop):**
   - Dilarang membuat kartu di dalam kartu (*nested cards*) dengan border garis keliling yang kaku.
   - Gunakan kontras latar belakang bersih: `bg-white` untuk kanvas utama, `bg-slate-50` untuk section transisi, dan `bg-slate-950` untuk blok industri (Header, Hero Canvas, Footer).
2. **Precision Industrial Accents:**
   - Gunakan `orange-600` (`#EA580C`) sebagai aksen keselamatan konstruksi dan tombol aksi konversi utama.
   - Gunakan `emerald-500` (`#10B981`) untuk indikator live status stok dan verifikasi kepatuhan K3.
3. **Tabular & Monospaced Typography:**
   - Semua data metrik teknik (tebal pipa `1.8mm`, beban kerja `SWL: 1.500 kg`, dimensi, kode komponen `SET-170`) wajib menggunakan font monospaced (`font-mono`) dengan penyelarasan baseline yang presisi (`flex items-baseline`).

---

## 4. CONTENT SEO & STRUCTURED DATA CHECKLIST

Setiap rute wajib memenuhi standar teknis SEO:
1. **Metadata Dinamis:** Menggunakan fungsi `generateMetadata` untuk mengatur `title`, `description`, `canonical`, dan `openGraph`.
2. **Schema JSON-LD:**
   - Global: `LocalBusiness` & `Organization` (GPS Surabaya & Sidoarjo).
   - `/produk/[slug]`: `Product` & `Offer` schema.
   - `/sewa-scaffolding` & `/jual-scaffolding`: `Service` & `FAQPage` schema.
   - `/kalkulator`: `WebApplication` schema.
   - `/k3-panduan`: `TechArticle` schema.
3. **Robots & Sitemap:**
   - `src/app/sitemap.ts`: Otomatis mengindeks seluruh 29 rute publik.
   - `src/app/robots.ts`: Mengizinkan seluruh rute publik dan melarang (`Disallow: /admin`) rute CMS internal.

---

## 5. STRUKTUR FOLDER PROYEK

```
mscscaffolding/
├── docs/                               # Dokumentasi Proyek & Desain
│   ├── DATA_LENGKAP_MSC_SCAFFOLDING.md # Database spesifikasi asli
│   ├── DESIGN.md                       # Design System & UI/UX Charter
│   ├── DEVELOPMENT.md                  # Manual Arsitektur & Development (File Ini)
│   └── images/                         # Master backup 11 citra resolusi tinggi
├── public/
│   ├── images/
│   │   ├── branding/logo-msc.jpeg
│   │   ├── produk/                     # 15 foto katalog komponen
│   │   └── proyek/                     # 11 foto render proyek & gudang
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root Layout (Navbar, Footer, Mobile Bar, Schema)
│   │   ├── page.tsx                    # Homepage
│   │   ├── tentang-kami/page.tsx
│   │   ├── produk/
│   │   │   ├── page.tsx                # Catalog Index with Category Filter & Search
│   │   │   └── [slug]/page.tsx         # SSG Product Detail (15 components)
│   │   ├── sewa-scaffolding/page.tsx
│   │   ├── jual-scaffolding/page.tsx
│   │   ├── k3-panduan/page.tsx
│   │   ├── kalkulator/page.tsx
│   │   ├── area-layanan/
│   │   │   ├── page.tsx
│   │   │   └── [kota]/page.tsx         # SSG Local SEO (5 cities)
│   │   ├── kontak/page.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/                     # Navbar, MobileDrawer, MobileBottomBar, Footer
│   │   ├── home/                       # Hero, Services, CatalogPreview, K3Banner, Warehouse
│   │   ├── produk/                     # ProductCard, ProductFilter, ProductSpecs, QuickSpecModal
│   │   ├── kalkulator/                 # ScaffoldingCalculator
│   │   └── ui/                         # PillBadge, SectionHeading
│   ├── data/                           # In-memory typed data source
│   ├── services/                       # Data access abstraction (Repository)
│   └── types/                          # TypeScript contracts
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 6. DEVELOPMENT COMMANDS & CACHE PURGE PROTOCOL

### Perintah Rutin:
```bash
# Menjalankan dev server lokal
npm run dev

# Memvalidasi type safety & build statis
npm run build

# Menjalankan static preview lokal
npm run start
```

### Cache Purge Protocol:
Jika ada perubahan signifikan pada token styling, font, atau layout UI/UX:
```bash
# Hapus build artifacts & temporary cache Next.js
rm -rf .next dist out node_modules/.cache
```
Proses ini menjamin tidak ada residu CSS lama atau bundle kadaluwarsa yang mencemari tampilan pengguna.
