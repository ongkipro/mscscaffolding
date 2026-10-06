# Status — mscscaffolding

Updated: 2026-10-06
Status: Active
State: VERIFIED
Review-Risk: R3 (ledger effective risk; declared R1)
Independent-Review: PASS
Primary-Worker: Antigravity
Independent-Reviewer: independent-subagent-a2fb10cc (read-only diff review, APPROVE)
Independent-Review-Head: 006ebe7

## Delivery state machine

Allowed forward path:

`PLANNED -> READY -> IMPLEMENTING -> VERIFYING -> REVIEWING -> INTEGRATING -> PRODUCTION_READY -> AWAITING_DEPLOY_APPROVAL -> DEPLOYED -> SMOKE_TESTING -> VERIFIED`

## Current state

Next.js 15 App Router static site (no backend). `TASK-28` (SEO, content accuracy and bug hardening) is implemented and locally verified in the working tree; nothing is committed or deployed.

- **Routes:** 41 generated pages — 11 core routes, 18 product pages (`/produk/[slug]`), 5 city hubs (`/area-layanan/[kota]`), plus 404, icons, `robots.txt`, `sitemap.xml` (34 URLs).
- **SEO:** central `pageMetadata()` (`src/lib/seo.ts`), per-page canonical, full OG/Twitter with JPG share images, breadcrumbs + `BreadcrumbList`, `Product`/`Offer`, `Service`, `FAQPage`, `WebApplication`, `TechArticle`, noindex 404.
- **Calculator:** shared-frame estimator (`src/utils/scaffoldingEstimate.ts`, `DEC-009`) priced from the catalogue; estimates are now lower than the previous double-counting model.
- **Contact form:** WhatsApp-only delivery (`DEC-010`); conversion tracking de-duplicated (`DEC-012`).

## Active work

Deployed: commit `006ebe7` → Vercel production deployment `mscscaffolding-hek79zos7` (READY, 2026-10-06). Follow-up: contact-form fallback link no longer double-counts a conversion (`data-no-track`).

## Blockers

None. Owner decisions (2026-10-06):

- Certification / standard / legal claims (SWL, SNI, EN 12811-1, PKP, etc.) stay as-is; proof is shared with customers via WhatsApp and is intentionally not referenced on the site.
- Resolved: `/tentang-kami` invented milestone years (2014/2018/2021/2026, PKP/BUMN story) replaced by the source-backed 4-step service process (`docs/raw-sources/Tentang Kami.txt`).
- Resolved: Surabaya hub postal code 60293 → 60295 (Medokan Ayu, Rungkut); Sidoarjo hub address = Pergudangan Tritan Hub, Wedi, Gedangan 61254 (public listings); `Bangkalan` removed from `areaServed` (not a target market).
- Resolved: consultation hours aligned to `operatingHours` (07.30–17.00); unverifiable "reply within 5 minutes" promise removed.
- Resolved: bare `AW-…` conversion events (no label) removed; only the labelled conversion action fires.
- Still open (needs data, not a blocker): Facebook/Instagram profile URLs for `sameAs`.

## Verification evidence (2026-10-06, local)

- `npx tsc --noEmit`: pass.
- `npm test` (`node --test tests/*.test.mjs`): 6/6 pass.
- `npm run build`: pass, 41/41 static pages; `/kalkulator` first-load JS 112 kB (route chunk 6 kB, was 11.5 kB).
- SEO audit over built HTML (scratch script): 35/35 pages OK — title 30–60 chars, description 70–160, one H1, canonical, `og:image`, `og:site_name`, Twitter = OG, no duplicate titles.
- JSON-LD: all 104 blocks across built pages parse.
- `next start` smoke (port 3344): 16 routes HTTP 200; unknown product → 404 with `noindex`; OG images return 200; every product image has a `.jpg` twin.
- Not done: rendered browser/visual check of the changed UI (contact form success state, calculator, hero CTA).

## Next verified action

Optional: rendered browser check of contact form, calculator and hero slider on production; add Facebook/Instagram `sameAs` when URLs are available.

## Production smoke (2026-10-06, https://mscscaffolding.com, commit 006ebe7)

- 13 core URLs (home, sewa, jual, kalkulator, k3, produk, product detail, city hub, tentang-kami, kontak, sitemap, robots, OG image) → 200; unknown product → 404.
- Live HTML confirms: "Cara Kami Bekerja" section, postal code 60295, self canonical, `WebApplication` schema, sitemap with 34 URLs.
