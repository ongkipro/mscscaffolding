# DESIGN SYSTEM SPECIFICATION: MSC SCAFFOLDING
## Theme: Professional, Minimalist Modern, Corporate, Industrial Theme Elegant

> **Status:** Active Design Standard  
> **Brand Identity:** PT Mitra Solusi Cahaya (MSC Scaffolding)  
> **Target Audience:** B2B General Contractors, Site Managers, HSE/K3 Officers, Estimator & Procurement  
> **Visual Direction:** Seamless Architecture, Zero Clutter, Borderless Elegance, Precision Industrial Engineering  

---

## 1. CORE THEME PILLARS

### 1.1 Professional & Corporate Authority
- Mengedepankan wibawa korporasi legal berbadan hukum (**PT Mitra Solusi Cahaya**), kepemilikan 2 fasilitas gudang fisik di Surabaya dan Sidoarjo, serta kualifikasi suplai untuk proyek komersial dan BUMN.
- Bahasa visual tenang, stabil, dan berbobot tanpa gimmick marketing murahan.

### 1.2 Minimalist Modern (Clean & Borderless)
- **Zero Nested Boxes:** Menghilangkan seluruh kotak-kotak kaku, bingkai tebal, dan kartu bersarang (*nested cards*).
- **Whitespace-Driven Rhythm:** Pemisahan antar section menggunakan kontras latar belakang bersih (*seamless background planes*) dan ruang negatif yang lapang, bukan garis pembatas artifisial.
- **Cardless Content:** Konten katalog, fitur layanan, dan keunggulan teknis berdiri kokoh langsung di atas kanvas bersih dengan padding proporsional.

### 1.3 Industrial Theme Elegant
- Terinspirasi oleh standar rekayasa presisi industrial global (seperti Doka, PERI, Hilti, dan Leica Geosystems).
- Menampilkan karakter material baja pre-galvanis: kokoh, presisi, tahan beban ekstrem (SWL 1.500 kg), dan bersertifikasi uji mutu (Permenaker & EN 12811-1).
- Warna aksen *Safety Orange* digunakan secara terukur (*sparingly*) untuk fokus konversi dan indikator keselamatan kerja.

---

## 2. COLOR PALETTE & SEMANTIC DESIGN TOKENS

```css
:root {
  /* Canvas & Structural Backgrounds */
  --bg-primary:         #FFFFFF; /* Stark Clean White - for content, catalog, and readable typography */
  --bg-subtle:          #F8FAFC; /* Slate 50 - subtle contrast for alternating sections */
  --bg-muted:           #F1F5F9; /* Slate 100 - soft badges, pill backgrounds */
  --bg-industrial:      #0F172A; /* Slate 900 - secondary industrial contrast */
  --bg-obsidian:        #020617; /* Slate 950 - primary corporate dark (Header, Dark Canvas, Footer) */

  /* Text & Typographic Hierarchy */
  --text-headline:      #020617; /* Slate 950 - ultra high contrast on white canvas */
  --text-headline-dark: #FFFFFF; /* Pure White on obsidian canvas */
  --text-body:          #334155; /* Slate 700 - optimal body readability */
  --text-muted:         #64748B; /* Slate 500 - meta labels, secondary captions */
  --text-dim:           #94A3B8; /* Slate 400 - captions on dark sections */

  /* Semantic Industrial Accents */
  --accent-safety:      #EA580C; /* Orange 600 - primary conversion actions, structural safety points */
  --accent-safety-hover:#C2410C; /* Orange 700 - active/hover button state */
  --accent-k3-verified: #10B981; /* Emerald 500 - K3 verified badge, live availability indicator */
  --accent-steel:       #475569; /* Slate 600 - structural frame references */
}
```

### Tailwind Token Mappings
| Token Role | Tailwind Class | Penggunaan |
|---|---|---|
| **Clean Light Canvas** | `bg-white` | Default background untuk halaman, artikel, dan grid produk |
| **Subtle Light Canvas** | `bg-slate-50` | Area pendukung, panel kalkulator, atau background selang-seling |
| **Obsidian Dark Canvas** | `bg-slate-950` | Header, Hero Visual Frame, K3 Banner, dan Footer |
| **Primary Text** | `text-slate-950` | Judul H1-H3, nama produk, metrik angka utama |
| **Body Text** | `text-slate-700` | Paragraf deskripsi teknis, penjelasan layanan, panduan |
| **Meta / Specs Text** | `text-slate-500` | Label ukuran pipa, dimensi, sertifikat standar |
| **Safety Orange CTA** | `bg-slate-950 hover:bg-orange-600 text-white` | Tombol penawaran resmi SPH & aksi konversi utama |
| **Secondary Button** | `bg-slate-100 hover:bg-slate-200 text-slate-900` | Aksi sekunder, filter kategori, navigasi detail |
| **K3 Safety Status** | `bg-emerald-500` & `text-emerald-600` | Indikator live status, pipa SNI, lolos uji beban |

---

## 3. TYPOGRAPHY SYSTEM

- **Headings (H1 - H4):** `Geist Sans` / `Inter`
  - Font sans-serif geometris dengan *tight tracking* (`tracking-tight`), bobot tebal (`font-extrabold` / `font-bold`), dan leading proporsional (`leading-[1.08]`).
  - Menghasilkan impresi arsitektural yang berwibawa, tegas, dan modern.
- **Body Text:** `Geist Sans` / `Inter`
  - Bobot normal (`font-normal`), ukuran `text-base` atau `text-sm`, leading lega (`leading-relaxed`), warna `text-slate-700`.
- **Engineering & Metrics Data:** `Geist Mono` / `JetBrains Mono`
  - Digunakan khusus untuk:
    - Ukuran tebal pipa: `1.8mm`
    - Kapasitas beban: `SWL: 1.500 kg`
    - Kode komponen: `SET-170`, `MF-190`, `CB-220`, `JB-60`
    - Nomor hotline & koordinat GPS gudang

---

## 4. COMPONENT ARCHITECTURAL GUIDELINES

### 4.1 Header & Navigation
- **Prinsip:** Ramping, elegan, tidak memakan ruang pandang (*compact & floating*).
- **Desktop:**
  - Sticky dengan backdrop blur halus (`bg-white/90 backdrop-blur-md`).
  - Kiri: Logo resmi MSC Scaffolding + Brand Name.
  - Tengah: Menu navigasi horizontal berjarak lapang (`text-xs font-semibold uppercase tracking-wider`).
  - Kanan: Tombol CTA penawaran resmi SPH langsung terhubung ke CS Kantor Tender.
- **Mobile Drawer:**
  - Slide-over bersih dari sisi kanan dengan tautan menu berukuran besar dan ramah sentuhan.
- **Mobile Bottom Action Bar:**
  - Menempel di bagian bawah layar smartphone (`fixed bottom-0`):
    1. Telepon CS Kantor
    2. WhatsApp Bu Hanifa (Fast Response)
    3. Kalkulator Steger

### 4.2 Hero Section (Full-Width 16:9 Cinema Slider & Executive Authority)
- **Komposisi:** Full-Width Background Banner (16:9 responsive aspect ratio) dengan layer transisi *crossfade* berdurasi halus dan auto-advance 6 detik (pause saat kursor/pointer berada di atasnya).
- **Proteksi Keterbacaan Konten (Overlay Gradient):**
  - Menggunakan multi-stop gradient perlindungan: `from-slate-950/90 via-slate-950/60 to-slate-950/20` pada desktop, dan `from-slate-950/95 via-slate-950/80 to-slate-950/60` pada mobile.
  - Memastikan seluruh teks judul putih, pill badge, dan angka metrik terbaca dengan kontras tajam tanpa tertimpa warna foto yang bervariasi.
- **5 Kurasi Visual Implementasi Jasa Sewa (16:9):**
  1. `hero_slide_1_facade_engineer.jpg`: Pengawasan teknik fasad gedung tinggi Surabaya, engineer & inspector membaca cetak biru.
  2. `hero_slide_2_logistics_dispatch.jpg`: Kesiapan 2 armada gudang & truk muatan perancah siap jalan (same-day delivery).
  3. `hero_slide_3_shoring_infrastructure.jpg`: Menara shoring heavy-duty penyangga cor beton jembatan layang (SWL 1.500 kg).
  4. `hero_slide_4_business_partnership.jpg`: Kemitraan tender resmi B2B, jabat tangan konsultan perancah & direktur procurement.
  5. `hero_slide_5_safety_inspection.jpg`: Kepatuhan standar K3 kilang industri & pemasangan sertifikasi Green Scafftag.
- **Typography & Action Elements di atas Hero Slider:**
  - **Live Corporate Pill:** `PT Mitra Solusi Cahaya | K3 Spesialis Jawa Timur` dengan pulsing green status dot.
  - **H1 Headline:** *"Sewa & Jual Scaffolding Pipa 1.8mm SNI Standar K3"*
  - **Subheadline:** Menegaskan ketersediaan stok besar, jaminan beban kerja SWL 1.500 kg/tiang, serta kecepatan kirim hari yang sama.
  - **4-Column Precision Metric Grid:**
    - `1.8 mm` — Pipa Real SNI (bukan pipa banci)
    - `1.5 Ton` — SWL per Tiang (Uji Tarik & Tekan)
    - `2 Gudang` — Surabaya (Rungkut) & Sidoarjo (Buduran)
    - `EN 12811` — Standar Mutu K3 Internasional
  - **Dual High-Conversion Action Buttons:**
    - Tombol Utama: *"Konsultasi Sewa Cepat (WA Bu Hanifa)"* (`bg-orange-600 hover:bg-orange-500 text-white font-bold`)
    - Tombol Sekunder: *"Hitung Kebutuhan Steger"* (`bg-white/10 hover:bg-white/20 text-white backdrop-blur-md`)
  - **Slider Controls:** Indikator bar tipis di bawah dengan progress aktif, serta tombol navigasi panah kiri/kanan berdesain minimalis industrial.

### 4.3 Product Catalog Cards (Clean Stark Presentation)
- **Background Produk:** Latar belakang putih bersih (`bg-white`) dengan padding lapang.
- **Foto Produk:** Foto komponen resolusi tinggi di tengah kanvas (`aspect-4/3 object-contain`).
- **Tag Teknis:** Badge monospaced halus di sudut atas (`SET-170`, `SWL: 1.500 kg`).
- **Data Spesifikasi:** Informasi tebal pipa, berat, dan dimensi disajikan dengan label yang teratur dan jelas.
- **Action:** Tombol interaktif untuk melihat spesifikasi lengkap dan direct WhatsApp link pre-filled dengan nama komponen.

### 4.4 Interactive Scaffolding Estimator (Calculator)
- **Desain:** Formulir perhitungan interaktif yang bersih dan terstruktur.
- **Input:**
  - Panjang Bidang Kerja (meter)
  - Tinggi Struktur / Fasad (meter)
  - Mode Pekerjaan: Fasad / Finishing Ruko vs Shoring Pengecoran Plat Beton
- **Output Real-time:**
  - Total set scaffolding lengkap
  - Rincian kebutuhan komponen: Main Frame, Cross Brace, Joint Pin, Catwalk, Tangga Bordes, Jack Base, U-Head Jack
  - Estimasi budget sewa bulanan dan estimasi budget beli baru
  - Tombol 1-klik: *"Kirim Hasil Hitungan ke Bu Hanifa via WhatsApp"*

### 4.5 Footer (Deep Obsidian Industrial Block)
- **Background:** `bg-slate-950` solid tanpa garis batas atas yang mencolok.
- **Kolom 1:** Legalitas korporat PT Mitra Solusi Cahaya & K3 Compliance badge.
- **Kolom 2:** Katalog 15 komponen dengan tautan langsung.
- **Kolom 3:** Daftar area layanan 5 kota Jawa Timur beserta badge lead time pengiriman.
- **Kolom 4:** Alamat 2 gudang fisik di Surabaya & Sidoarjo lengkap dengan Google Maps direct link dan hotline telepon/WhatsApp yang aktif.
- **Copyright Bar:** Sederhana, elegan, dilengkapi tautan privasi dan standar K3.

---

## 5. ANTI-AI-SLOP DISCIPLINE

1. **Dilarang Menambahkan Kotak Bertumpuk:** Tidak boleh ada kartu di dalam kartu (*nested cards*) yang memecah konsentrasi pengguna.
2. **Dilarang Menggunakan Border Garis Sembarangan:** Struktur visual harus dibangun menggunakan ruang dan kontras bidang warna, bukan garis keliling (*outline borders*).
3. **Dilarang Menaruh Tombol Tidak Aktif:** Setiap tombol, badge kota, dan nomor telepon wajib memiliki link aktif yang dapat diklik.
4. **Disiplin Bahasa Teknis Konstruksi:** Tidak menggunakan jargon AI klise. Seluruh istilah harus sesuai terminologi proyek sipil Indonesia (*steger, main frame, cross brace, catwalk, jack base, safe working load, SPH, RAB*).
