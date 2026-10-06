# Architecture — mscscaffolding (Next.js 15 App Router & SEO Frontend)

Updated: 2026-10-06  
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
              ├── /produk & /produk/[slug] (18 Products SSG)
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

- **Metadata:** every page builds metadata through `pageMetadata()` in `src/lib/seo.ts` (self canonical, full Open Graph + Twitter, JPG share image). The root layout sets only defaults and the `%s | MSC Scaffolding` title template; it must not set a canonical (Next.js would inherit it on pages that omit one). Product pages use `Product.seoTitle` (≤ 45 chars so the suffixed title stays ≤ 60).
- **Breadcrumbs:** `src/components/layout/Breadcrumbs.tsx` renders visible breadcrumbs plus `BreadcrumbList` JSON-LD on every non-home page.
- **404:** `not-found.tsx` is `noindex` with its own title.

JSON-LD rendered in the page body (verified by parsing every built HTML file):
- **Global (layout):** `@graph` with `Organization` (`@id` `/#organization`) and two warehouse `LocalBusiness` nodes with GPS coordinates; `WebSite` on the home page.
- **Product:** `Product` with `Offer`s (new sale, monthly rental `LeaseOut` with `UnitPriceSpecification`, refurbished), weight, seller → organization.
- **Services:** `Service` (provider → organization), `AggregateOffer` computed from the rate tables, `FAQPage` on `/sewa-scaffolding` and every `/area-layanan/[kota]` (FAQ text is also visible on the page).
- **Calculator:** `WebApplication`.
- **K3 Guide:** `TechArticle`.
- **Robots / Indexation:** Full search engine indexing via `src/app/robots.ts` and `src/app/sitemap.ts` (34 sitemap URLs: 11 core + 18 products + 5 cities).

## 3a. Client Interactivity & Conversion

- **Calculator:** `/kalkulator` (server) builds unit prices from `src/data/products.ts` and passes them to the `ScaffoldingCalculator` client island; quantities come from the pure `estimateScaffolding()` util (shared-frame model, `DEC-009`), covered by `npm test`.
- **Contact form:** validates, then opens WhatsApp with the prefilled SPH request; there is no backend submission (`DEC-010`).
- **Conversion tracking:** one global click listener in `ClientLayout.tsx` tracks every `wa.me` / `tel:` anchor, labelled via `data-track-label` (`DEC-012`).
- **Hero slider:** no autoplay under `prefers-reduced-motion`; internal CTAs use same-tab `next/link`.

---

## 4. Verification

The smallest verification commands:
- `npx tsc --noEmit` — type safety.
- `npm test` — calculator estimator invariants (Node built-in test runner, no extra dependency).
- `npm run build` — compilation and static pre-rendering (41 generated pages incl. 18 product and 5 city routes).
- `curl -I http://localhost:3000/` — Proves server response and clean HTTP 200 delivery.
