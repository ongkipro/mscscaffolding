# Architecture — mscscaffolding (Next.js 15 App Router & SEO Frontend)

Updated: 2026-09-21  
Stack: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Lucide Icons  
Rendering Strategy: Static Site Generation (SSG) with React Server Components (RSC)  
Scope: 100% Focused on Public Frontend & SEO Content Excellence (Admin & CMS Deferred to Phase 2)  

---

## 1. Selected Capabilities

| Capability | Decision | Proven Operational |
|---|---|---|
| **Framework** | Next.js 15 App Router | Staged |
| **Language** | TypeScript 5.x Strict | Staged |
| **Styling** | Tailwind CSS (Custom Semantic Tokens) | Staged |
| **Rendering** | Static Site Generation (SSG / RSC default) | Staged |
| **Public Frontend** | `src/app` (Root Layout, Schema, SEO) | Staged |
| **Data Layer** | Service Abstraction (Repository Pattern) | Staged |
| **Icons** | `lucide-react` | Staged |
| **Client Islands** | React 19 (`'use client'`) for Calculator, Drawer, Filter | Staged |
| **SEO / Metadata** | Next.js `generateMetadata` + JSON-LD Scripts | Staged |
| **Deployment Target**| Vercel / Cloudflare Pages / Node VPS | Staged |
| **CMS / Admin** | Deferred to Phase 2 Roadmap | Deferred |

---

## 2. System Structure & Boundaries

```
[ Visitor / Contractor / Mandor / HSE / Procurement ]
                        │
                        ├── HTTP Request
                        ▼
            [ Next.js 15 App Router ]
              ├── Root Layout (Navbar, Footer, Mobile Thumb Bar, JSON-LD)
              ├── Informational Pages (Home, Sewa, Jual, K3, Tentang Kami, Kontak)
              ├── /produk & /produk/[slug] (15 Components SSG)
              ├── /kalkulator (Interactive Scaffolding Estimator)
              └── /area-layanan & /area-layanan/[kota] (5 Regional Hubs SSG)
                        │
                        ▼
      [ Service Layer Abstraction (Repository Pattern) ]
            ├── src/services/productService.ts
            └── src/services/locationService.ts
                        │
                        ├── (Phase 1 Current) ──► In-Memory Typed Data (src/data/...)
                        └── (Phase 2 Roadmap) ──► Headless CMS API / Database
```

---

## 3. SEO & Structured Data Architecture

Every public route injects deterministic JSON-LD schema into `<head>`:
- **Global:** `LocalBusiness`, `Organization`, `WebSite` with GPS coordinates.
- **Product:** `Product`, `Offer`, `BreadcrumbList`.
- **Services:** `Service`, `FAQPage`.
- **Calculator:** `WebApplication`.
- **K3 Guide:** `TechArticle`.
- **Robots / Indexation:** Full search engine indexing via `src/app/robots.ts` and `src/app/sitemap.ts`.

---

## 4. Verification

The smallest verification commands:
- `npm run build` — Proves type safety, compilation, and static pre-rendering of all 29 public routes.
- `curl -I http://localhost:3000/` — Proves server response and clean HTTP 200 delivery.
