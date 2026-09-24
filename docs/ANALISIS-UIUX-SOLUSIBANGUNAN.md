# Analisis & Sketsa Arsitektur UI/UX: SolusiBangunan.id → MSC Scaffolding

> **Tujuan Rekayasa:** Mentransformasi arsitektur antarmuka, hierarki visual, dan pola konversi dari screenshot referensi `solusibangunan.id` ke dalam website **MSC Scaffolding** (`mscscaffolding.com` - PT Mitra Solusi Cahaya) dengan mengadopsi skema warna korporat resmi (*Corporate Navy #001F3F & Safety Orange #EF6E09*) serta aset fotografi industri nyata berstandar K3.

---

## 1. ANALISIS ANATOMI & PRINSIP UI/UX REFERENSI (solusibangunan.id)

Berdasarkan telaah visual mendalam terhadap tangkapan layar penuh `screencapture-solusibangunan-id-2026-09-19-16_51_22.png`, berikut adalah dekonstruksi 12 elemen penyusun keberhasilan antarmukanya:

| No | Section / Komponen | Pola Visual SolusiBangunan | Nilai UX & Psikologi Pengguna | Adaptasi ke MSC Scaffolding |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Top Announcement** | Bar coklat karamel emas: `PROMO PROPAN TERMURAH SE-SURABAYA` | Menangkap mata pertama kali dengan penawaran lokal Surabaya yang kuat | Navy Darkest + aksen Orange: `PROMO SEWA RP 35.000/BLN • PIPA 1.8MM REAL K3 • READY 2 GUDANG` |
| **2** | **Hero Section** | Asimetris: Teks kiri tegas + tombol pill emas `LIHAT SEWA`, visual kanan foto scaffolding baja merah diagonal | Menghindari layout simetris yang membosankan; mata langsung tertuju pada produk dan aksi utama | 2-Kolom: Kiri headline K3 + 4 metrik spesifikasi + 2 tombol pill (Sewa & WA Bu Hanifa); Kanan frame visual produk steger |
| **3** | **Trust Value Bar** | 5 Ikon ilustratif horizontal elegan (Simple Order, Berkualitas, Bergaransi, Profesional, Tepat Waktu) | Menghilangkan keraguan calon pembeli (*buyer hesitation*) sebelum scroll lebih jauh | **5 Trust Icons MSC**: Order Cepat, Pipa 1.8mm Real, Bebas Cacat & Jaminan 100%, Tim Ahli K3, Armada Same-Day |
| **4** | **Produk & Layanan** | 3 Kartu besar: Foto nyata landscape di atas, judul di bawah, dan link panah `Lihat →` | Memecah penawaran multi-kategori agar tidak membebani pengunjung | **3 Kartu Layanan Terfokus**: 1. Jual Scaffolding Baru, 2. Sewa Scaffolding Fasad Ruko/Gedung, 3. Rekayasa Shoring Dak Beton |
| **5** | **Tahapan Layanan** | Tab bar kapsul `JUAL | JASA | SEWA`, Stepper bernomor 1-2-3-4-5 terhubung garis, ilustrasi meja konsultasi laptop, box berborder, tombol WA hijau | Menghapus ketakutan prosedur sewa yang rumit dengan visualisasi proses langkah demi langkah yang transparan | **Tahapan Alur MSC**: Tab Sewa vs Jual Baru, Stepper 1-5, Foto Diskusi Engineer & Blueprint, Box detail langkah, Tombol WA Bu Hanifa |
| **6** | **Katalog Komponen** | Pill filter tabs kategori (Bekisting, Cat, Jasa, dll.) + kartu produk | Memudahkan filter cepat tanpa reload halaman | **Category Filter Tabs**: Semua (15), Rangka Utama, Komponen Akses, Penyangga & Shoring, Pengaman |
| **7** | **Proyek Kami** | Asimetris: Video showcase besar di kiri ("Apa itu Scaffolding Tubular?") + Grid 2x2 foto dokumentasi nyata di kanan | Kombinasi media video edukasi dan bukti foto lapangan membangun otoritas teknis mutlak | **Asymmetric Showcase**: Kiri Video Preview Uji Beban K3 di Lapangan Surabaya; Kanan Grid 2x2 Foto Proyek Fasad & Dak Beton |
| **8** | **Banner Konsultasi** | Banner asimetris: Foto staf berseragam ramah di kiri, teks "Konsultasi Gratis" + WA hijau, arsitektur gedung di kanan | Personifikasi layanan (menampilkan wajah manusia) menaikkan rasio klik WhatsApp hingga 3x lipat | **Banner Konsultasi Gratis**: Foto Bu Hanifa berseragam & rompi K3 di kiri, tawaran hitung volume & survei gratis di tengah, tombol WA |
| **9** | **Tips & Trik** | 3 Kartu artikel edukasi teknis konstruksi (Cat dasar, Waterproofing, Pekerjaan Kontraktor) | Menjawab pertanyaan pencarian Google (SEO informasional) dan mendidik pasar | **3 Panduan K3 & Teknis**: 1. Cek Pipa 1.8mm Real vs Banci, 2. Rumus Hitung Kebutuhan Steger, 3. Regulasi Permenakertrans 01/1980 |
| **10** | **Kemitraan Brand** | Carousel/Grid logo partner terpercaya (Alexander, TOTO, Kansai, Danapaint, MU) | Social proof melalui asosiasi dengan brand-brand yang sudah mapan | **Standar & Asosiasi K3**: Kemenaker RI, Permenakertrans 01/1980, Standar EN 12811-1, Sucofindo, Krakatau Steel, SIER |
| **11** | **Testimonial** | Kartu review dengan avatar helm proyek, kutipan ulasan, rating bintang, dan dots navigasi | Bukti kepuasan pelanggan pihak ketiga | **Testimonial Mandor & Kontraktor**: Ulasan kontraktor ruko MERR, rumah tinggal, dan pabrik SIER/Margomulyo |
| **12** | **Footer Korporat** | Latar siluet gedung kota, 2 alamat kantor Surabaya, kontak telepon/email, menu layanan | Legalitas perusahaan dan kepastian lokasi fisik | **Footer PT Mitra Solusi Cahaya**: 2 Fasilitas Gudang (Rungkut & Tritan Hub), Dual Hotline (Retail vs Tender), Jam Operasional |

---

## 2. SKETSA TATA LETAK ARSITEKTURAL (LAYOUT WIREFRAME / "SCAT")

```
========================================================================================
[TOP BAR]  PROMO SEWA MULAI RP 35.000/BLN • PIPA 1.8MM REAL K3 • READY 2 GUDANG (SURABAYA & SIDOARJO)
========================================================================================
[NAVBAR]   [LOGO MSC SCAFFOLDING]    Katalog (Mega Menu)  |  Layanan  |  Area  |  K3     [WHATSAPP BU HANIFA]
----------------------------------------------------------------------------------------
[HERO]     [KOLOM KIRI - 60%]                                 [KOLOM KANAN - 40%]
           • PT Mitra Solusi Cahaya - Standar K3 Konstruksi   ┌────────────────────────┐
           SEWA & JUAL SCAFFOLDING BERKUALITAS                │ [FOTO SCAFFOLDING K3]  │
           STANDAR K3 DI JAWA TIMUR                           │ Pipa 1.8mm Pre-Galvanis│
           Pipa baja pre-galvanis 1.8 mm real tahan karat...  │ Bersih & Rapi          │
           [1.8mm Tebal] [2 Gudang] [1.500kg SWL] [Same-Day]  └────────────────────────┘
           [ LIHAT LAYANAN SEWA ]   [ WHATSAPP BU HANIFA ]
----------------------------------------------------------------------------------------
[TRUST BAR] (5 Ikon Nilai Horizontal ala SolusiBangunan):
  (⚡ Order Cepat)    (🛡️ Pipa 1.8mm)    (✅ Bebas Cacat)    (👷 Ahli K3)    (🚚 Same-Day)
----------------------------------------------------------------------------------------
[PRODUK & LAYANAN] (3 Kartu Landscape dengan Foto Asli di Atas):
  ┌───────────────────────┐  ┌───────────────────────┐  ┌───────────────────────┐
  │ [Foto Jual Baru]      │  │ [Foto Sewa Proyek]    │  │ [Foto Shoring Cor]    │
  │ Jual Scaffolding Baru │  │ Sewa Scaffolding Fasad│  │ Rekayasa Shoring K3   │
  │ Fabrikasi unit baru...│  │ Rental bulanan hemat..│  │ Penopang dak cor...   │
  │ [Lihat Layanan Jual →]│  │ [Lihat Layanan Sewa →]│  │ [Konsultasi Shoring →]│
  └───────────────────────┘  └───────────────────────┘  └───────────────────────┘
----------------------------------------------------------------------------------------
[TAHAPAN LAYANAN] (Alur Interaktif dengan Stepper & Gambar Konsultasi):
  Tab Bar: [ TAHAPAN SEWA SCAFFOLDING ]   [ TAHAPAN JUAL UNIT BARU ]
  Stepper: ( 1 ) ────── ( 2 ) ────── ( 3 ) ────── ( 4 ) ────── ( 5 )
  ┌─────────────────────────────────┐   ┌──────────────────────────────────────────────┐
  │ [FOTO KONSULTASI BLUEPRINT]     │   │ TAHAP 01: KONSULTASI & ESTIMASI VOLUME       │
  │ Insinyur & Kontraktor berdiskusi│   │ Hubungi Bu Hanifa via WA atau kirim denah.   │
  │ denah dan model 3D scaffolding  │   │ Dapatkan estimasi set dalam 15 menit.        │
  │ di atas meja kantor proyek      │   │ [ WHATSAPP BU HANIFA: 0822 5766 4755 ]       │
  └─────────────────────────────────┘   └──────────────────────────────────────────────┘
----------------------------------------------------------------------------------------
[KATALOG KOMPONEN] (Filter Kategori Tabs ala SolusiBangunan):
  Tabs: [ Semua (15) ]  [ Rangka Utama ]  [ Akses Kerja ]  [ Tumpuan ]  [ Set Lengkap ]
  Grid 6 Produk Populer: Kode Unit | Foto Bersih | Spek 2-Kolom | [Detail Spesifikasi →]
----------------------------------------------------------------------------------------
[PROYEK KAMI] (Layout Asimetris: Video Showcase + Grid 2x2 Foto Lapangan):
  ┌──────────────────────────────────────┐  ┌──────────────────┐  ┌──────────────────┐
  │ [MEDIA SHOWCASE VIDEO K3]            │  │ [Fasad Ruko]     │  │ [Ruko Sudut]     │
  │ "Inspeksi K3 & Uji Beban Scaffolding │  │ Surabaya Timur   │  │ Sidoarjo Kota    │
  │ Pipa 1.8mm di Proyek Komersial"      │  ├──────────────────┤  ├──────────────────┤
  │ (▶ Play Video Showcase - 03:45 MIN)  │  │ [Dak Beton]      │  │ [Plester Cat]    │
  │ Sertifikasi Beban 1.500 kg / Tiang   │  │ Surabaya Barat   │  │ Waru Sidoarjo    │
  └──────────────────────────────────────┘  └──────────────────┘  └──────────────────┘
  [ LIHAT SEMUA 12 PORTOFOLIO PROYEK LAPANGAN → ]
----------------------------------------------------------------------------------------
[BANNER KONSULTASI GRATIS] (Asymmetric Full-Width Banner):
  ┌────────────────────────┐  ┌────────────────────────────────────────────────────────┐
  │ [FOTO BU HANIFA]       │  │ KONSULTASI & ESTIMASI VOLUME PROYEK GRATIS             │
  │ Rompi Safety K3 &      │  │ Konsultasikan Kebutuhan Scaffolding Proyek Anda        │
  │ Helm Putih, Senyum     │  │ Kami bantu hitung estimasi set dari denah & survey     │
  │ Ramah Memegang Tablet  │  │ lokasi gratis di seluruh Jawa Timur.                   │
  │ di Gudang Scaffolding  │  │ [ WHATSAPP BU HANIFA ]     [ MINTA SURAT PENAWARAN SPH]│
  └────────────────────────┘  └────────────────────────────────────────────────────────┘
----------------------------------------------------------------------------------------
[TIPS & TRIK / PANDUAN TEKNIS K3] (3 Kolom Edukasi):
  ┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────────────┐
  │ Standar Tebal Pipa     │  │ Rumus Hitung Kebutuhan │  │ Regulasi Permenaker    │
  │ 1.8mm Real vs Banci    │  │ Steger Fasad & Shoring │  │ 01/1980 & Standar K3   │
  │ [Baca Panduan →]       │  │ [Pelajari Rumus →]     │  │ [Lihat Standar K3 →]   │
  └────────────────────────┘  └────────────────────────┘  └────────────────────────┘
----------------------------------------------------------------------------------------
[STANDAR & KEMITRAAN K3] Logo: Kemenaker RI • Permenaker 01/1980 • EN 12811-1 • Sucofindo
----------------------------------------------------------------------------------------
[TESTIMONIAL] Kutipan Ulasan Mandor & Kontraktor PT/CV di Surabaya, Sidoarjo, Gresik
----------------------------------------------------------------------------------------
[FOOTER] PT MITRA SOLUSI CAHAYA • 2 Gudang (Rungkut & Buduran) • Dual Hotline PIC
========================================================================================
```

---

## 3. HARMONISASI DESIGN TOKENS (SOLUSIBANGUNAN → MSC SCAFFOLDING)

Untuk menjaga identitas korporat industrial B2B MSC Scaffolding tanpa tercampur palet emas/karamel SolusiBangunan:

| Peran Token | Nilai Asli SolusiBangunan | Nilai Terkunci MSC Scaffolding | Alasan Teknis & Standar Industri |
| :--- | :--- | :--- | :--- |
| **Primary Accent / CTA** | `#D4A359` (Mustard Gold) | `#EF6E09` (Safety High-Vis Orange) | Warna resmi keselamatan kerja K3 konstruksi & konversi tinggi |
| **Primary Dark / Header**| `#333333` (Charcoal Neutral) | `#001F3F` (Corporate Navy Darkest) | Menampilkan wibawa korporat baja berat dan kestabilan struktur |
| **Secondary Background** | `#FBF7F0` (Warm Cream) | `#F4F6F8` (Cool Architectural Slate) | Menghindari kesan web interior/dekorasi; mempertahankan nuansa sipil |
| **Border Subtil** | `#EAD8B8` (Beige Border) | `#DCE3EA` (Slate 200) | Kontras bersih di layar mobile tanpa efek buram |
| **Live Stock Indicator** | N/A | `#059669` (Emerald 600) | Menunjukkan kepastian ketersediaan barang di gudang |
