# LAPORAN ANALISA, VALIDASI & PERAPIHAN ASET DIGITAL
## PT MITRA SOLUSI CAHAYA (MSC SCAFFOLDING)

> **Dokumen Audit & Quality Control (QC)**  
> **Tanggal Validasi:** 17 September 2026  
> **Target Folder:** `~/Downloads/msc-scaffolding/Website MSC/`  
> **Auditor:** Assistant Antigravity  

---

## 1. EXECUTIVE SUMMARY

Telah dilakukan audit menyeluruh, verifikasi checksum (SHA-256), ekstraksi visual, analisis resolusi citra, serta normalisasi data teks terhadap seluruh aset yang diunduh dari folder Google Drive MSC Scaffolding.

### Ringkasan Temuan Audit:
1. **Total File Mentah:** 46 file (38 file citra, 6 dokumen teks, 2 aset branding).
2. **Duplikasi Citra Sempurna (Identik Byte-for-Byte):** Ditemukan 4 pasang file citra yang 100% identik (redundansi 9.8 MB).
3. **Cacat Ekstensi & Penamaan File:**
   - Ditemukan file dengan ekstensi ganda: `3. Galvanis Main Frame.jpg.jpeg`.
   - Ditemukan file dengan spasi ganda: `6. Galvanis Stair  Tangga T170.jpg`.
   - Ditemukan penomoran bentrok: `1. Galvanis Scaffolding Set ukuran 170.jpg` dan `1. Galvanis Scaffolding Set ukuran 190.jpg`.
4. **Validasi Seri Company Profile:**
   - File `1.png`, `2.png`, `3.png`, dan `5.png` terbukti merupakan halaman cetak Company Profile resmi MSC:
     - Page 01: Cover ("Building Higher Together - People, Equipment, Solution")
     - Page 02: Tentang Kami & Layanan ("Mitra Pengadaan Scaffolding untuk Proyek Anda")
     - Page 03: Nilai Kebutuhan Proyek vs Respons MSC + Catatan K3
     - *(Page 04 tidak disertakan di folder unduhan — merupakan katalog tabel produk yang terwakili di `Deskripsi product.txt`)*
     - Page 05: Alur Pengadaan 6 Langkah ("Proses Mudah, Hasil Lebih Pasti")
5. **Validasi Nomor Kontak & Alamat:**
   - Terverifikasi 2 saluran kontak resmi:
     - **Hotline WhatsApp 1:** `0822 5766 4755` (Hanifa - Marketing / PIC Sales)
     - **Hotline WhatsApp 2 / Kantor:** `0813 2562 024` (Layanan Pengadaan & Kantor)
   - Typo pada `kontak kami.txt` (`"Wharehouse:"`) telah dikoreksi menjadi `"Warehouse:"`.
   - Terverifikasi 2 gudang logistik aktif: Medokan Asri Utara (Surabaya) dan Pergudangan Tritan Hub (Sidoarjo).
6. **Tindakan Perapihan:**
   - Seluruh file asli telah diamankan 100% ke dalam folder `_arsip_original/` (tanpa ada data yang terhapus).
   - Telah dibentuk struktur folder baru yang bersih, profesional, dan siap produksi (`branding/`, `company-profile/`, `produk-komponen/`, `dokumentasi-proyek/`, `dokumen-teks/`).

---

## 2. HASIL AUDIT INTEGRITAS CITRA & DUPLIKASI (SHA-256)

Berdasarkan pengecekan nilai hash kriptografis SHA-256, ditemukan 4 file citra kembar yang tidak perlu dimuat ganda pada aset website:

| No | File Duplikat 1 | File Duplikat 2 | Ukuran | Hash SHA-256 (Awalan) | Status Tindakan |
|---|---|---|---|---|---|
| **1** | `image 1.png` | `image 2.png` | 2.65 MB | `a8febb13ece7...` | Diduplikasi dari foto ruko panjang. Disatukan menjadi `proyek-ruko-panjang.png`. |
| **2** | `image 3.png` | `image 4.png` | 2.49 MB | `9e722d2a8691...` | Diduplikasi dari foto ruko sudut. Disatukan menjadi `proyek-ruko-sudut.png`. |
| **3** | `image 6.png` | `image 7.png` | 2.63 MB | `c46b0ddd1d47...` | Diduplikasi dari foto finishing rumah 2 lantai. Disatukan menjadi `proyek-rumah-tinggal-2.png`. |
| **4** | `image 8.png` | `image 10.png` | 2.29 MB | `61fd4b59700e...` | Diduplikasi dari profil teknisi pria acung jempol. Disatukan menjadi `profil-teknisi-msc.png`. |

---

## 3. AUDIT RESOLUSI & REKOMENDASI PENGGUNAAN ASSETS

| Kategori | Nama File Bersih | Resolusi (Pixel) | Rasio / Format | Rekomendasi Penempatan di Website |
|---|---|---|---|---|
| **Branding** | `logo-msc.jpeg` | 640 x 640 | 1:1 (Kotak) | Favicon, Header Logo, Profile Picture WhatsApp Business |
| **Branding** | `identitas-msc.jpeg` | 1536 x 1024 | 3:2 (Landscape) | Brand Guideline Sheet, Media Kit, Lembar Presentasi |
| **Hero Web** | `hero-banner-scaff-horizontal.png` | 1672 x 940 | 16:9 (Wide) | **Hero Section Utama Beranda** (Fasad gedung megah) |
| **Profil Tim** | `tim-engineer-msc.png` *(image 9)* | 1224 x 1285 | ~1:1 (Portrait) | Section "Tentang Kami / Tim Konsultan" (Hanifa & Lead Engineer) |
| **Profil Tim** | `profil-teknisi-msc.png` *(image 8)* | 1024 x 1536 | 2:3 (Portrait) | Banner "Your Trusted Scaffolding Partner / Layanan K3" |
| **Portofolio** | `proyek-rumah-tinggal-1.png` *(image 5)* | 1330 x 1182 | Kotak | Galeri Proyek Perumahan / Renovasi Hunian Pribadi |
| **Portofolio** | `proyek-rumah-tinggal-2.png` *(image 6)* | 1214 x 1295 | Kotak | Galeri Proyek Pengecatan Eksterior & Pasang Batu Alam |
| **Portofolio** | `proyek-ruko-panjang.png` *(image 1)* | 1448 x 1086 | 4:3 (Landscape) | Galeri Proyek Komersial / Ruko Pertokoan |
| **Portofolio** | `proyek-ruko-sudut.png` *(image 3)* | 1349 x 1166 | 4:3 (Landscape) | Galeri Proyek Fasad & Pasang ACP |
| **Dokumentasi**| `onsite-01.jpg` s/d `onsite-05.jpg` | ~500–600 px | Dokumentasi | Dokumentasi lapangan nyata (*Real on-site delivery proof*) |

---

## 4. PEMETAAN DAN NORMALISASI NAMA FILE (MAPPING TABLE)

Berikut adalah tabel konversi dari nama file lama (acak/mentah) ke nama file baru (bersih dan terstruktur):

### A. Folder `branding/`
* `Logo MSC.jpeg` $\rightarrow$ `logo-msc.jpeg`
* `Identitas MSC.jpeg` $\rightarrow$ `identitas-msc.jpeg`

### B. Folder `company-profile/`
* `Foto gambar utama/1.png` $\rightarrow$ `page-01-cover.png`
* `Foto gambar utama/2.png` $\rightarrow$ `page-02-tentang-kami.png`
* `Foto gambar utama/3.png` $\rightarrow$ `page-03-nilai-proyek.png`
* `Foto gambar utama/5.png` $\rightarrow$ `page-05-alur-pengadaan.png`

### C. Folder `produk-komponen/`
* `1. Galvanis Scaffolding Set ukuran 170.jpg` $\rightarrow$ `01-set-scaffolding-170.jpg`
* `1. Galvanis Scaffolding Set ukuran 190.jpg` $\rightarrow$ `02-set-scaffolding-190.jpg`
* `2. Galvanis Ladder Frame Set T90.jpg` $\rightarrow$ `03-ladder-frame-set-90.jpg`
* `3. Galvanis Main Frame.jpg.jpeg` $\rightarrow$ `04-main-frame.jpg` *(Memperbaiki ekstensi .jpg.jpeg)*
* `4. Galvanis Ladder Frame T90.jpg` $\rightarrow$ `05-ladder-frame-90.jpg`
* `5. Galvanis Catwalk.jpg` $\rightarrow$ `06-catwalk-metal-plank.jpg`
* `6. Galvanis Stair  Tangga T170.jpg` $\rightarrow$ `07-stair-tangga-170.jpg` *(Memperbaiki spasi ganda)*
* `7. Galvanis Cross Brace & Cross Ladder.jpg` $\rightarrow$ `08-cross-brace-and-ladder.jpg`
* `8. Galvanis Join Pin.jpg` $\rightarrow$ `09-joint-pin.jpg`
* `9. U-Head T60.jpg` $\rightarrow$ `10-u-head-60.jpg`
* `10. Jack Base T60.jpg` $\rightarrow$ `11-jack-base-60.jpg`
* `11. Lock Pin.jpg` $\rightarrow$ `12-lock-pin.jpg`
* `12. Galvanis Pipe Support Ts 90.jpg` $\rightarrow$ `13-pipe-support-ts90.jpg`
* `13. Caster Wheel 6 inch or 8 inch.jpg` $\rightarrow$ `14-caster-wheel.jpg`
* `Diagram 1 set scaffolding (unit tunggal).jpg` $\rightarrow$ `diagram-1-set-scaffolding.jpg`
* `frame system.jpg` $\rightarrow$ `frame-system.jpg`
* `full comp 1.jpg` $\rightarrow$ `full-comp-1.jpg`
* `full comp 2.jpg` $\rightarrow$ `full-comp-2.jpg`

### D. Folder `dokumentasi-proyek/`
* `gambar scaff horizontal.png` $\rightarrow$ `hero-banner-scaff-horizontal.png`
* `image 1.png` (+ `image 2.png`) $\rightarrow$ `proyek-ruko-panjang.png`
* `image 3.png` (+ `image 4.png`) $\rightarrow$ `proyek-ruko-sudut.png`
* `image 5.png` $\rightarrow$ `proyek-rumah-tinggal-1.png`
* `image 6.png` (+ `image 7.png`) $\rightarrow$ `proyek-rumah-tinggal-2.png`
* `image 8.png` (+ `image 10.png`) $\rightarrow$ `profil-teknisi-msc.png`
* `image 9.png` $\rightarrow$ `tim-engineer-msc.png`
* `s1.jpg` $\rightarrow$ `site-photos/onsite-01.jpg`
* `s2.jpg` $\rightarrow$ `site-photos/onsite-02.jpg`
* `s3.jpg` $\rightarrow$ `site-photos/onsite-03.jpg`
* `s4.jpg` $\rightarrow$ `site-photos/onsite-04.jpg`
* `s5.jpg` $\rightarrow$ `site-photos/onsite-05.jpg`

### E. Folder `dokumen-teks/`
* `kontak kami.txt` $\rightarrow$ `kontak-kami.txt` *(Typo Wharehouse diperbaiki, hotline 2 ditambahkan)*
* `Bagaimana cara pemasangan scaffolding.txt` $\rightarrow$ `panduan-pemasangan-k3.txt` *(Urutan nomor disempurnakan)*
* `Kiat Memilih Scaffolding yang Baik.txt` $\rightarrow$ `kiat-memilih-scaffolding.txt`
* `Apa itu Scaffolding.txt` $\rightarrow$ `apa-itu-scaffolding.txt`
* `Deskripsi product.txt` $\rightarrow$ `deskripsi-produk.txt`
* `Tentang Kami.txt` $\rightarrow$ `tentang-kami.txt`

---

## 5. STRUKTUR DIREKTORI BERSIH (FILE TREE)

```
Website MSC/
├── DATA_LENGKAP_MSC_SCAFFOLDING.md      # Master data lengkap & spesifikasi teknis
├── LAPORAN_ANALISA_DAN_VALIDASI.md     # Dokumen audit & mapping ini
├── branding/
│   ├── identitas-msc.jpeg               # Brand guidelines & aplikasi helm/seragam
│   └── logo-msc.jpeg                    # Logo utama high-res
├── company-profile/
│   ├── page-01-cover.png                # Cover flyer
│   ├── page-02-tentang-kami.png         # Tentang kami & value
│   ├── page-03-nilai-proyek.png         # Kebutuhan vs respons K3
│   └── page-05-alur-pengadaan.png       # 6 langkah pengadaan
├── produk-komponen/
│   ├── 01-set-scaffolding-170.jpg
│   ├── 02-set-scaffolding-190.jpg
│   ├── 03-ladder-frame-set-90.jpg
│   ├── 04-main-frame.jpg
│   ├── 05-ladder-frame-90.jpg
│   ├── 06-catwalk-metal-plank.jpg
│   ├── 07-stair-tangga-170.jpg
│   ├── 08-cross-brace-and-ladder.jpg
│   ├── 09-joint-pin.jpg
│   ├── 10-u-head-60.jpg
│   ├── 11-jack-base-60.jpg
│   ├── 12-lock-pin.jpg
│   ├── 13-pipe-support-ts90.jpg
│   ├── 14-caster-wheel.jpg
│   ├── diagram-1-set-scaffolding.jpg
│   ├── frame-system.jpg
│   ├── full-comp-1.jpg
│   └── full-comp-2.jpg
├── dokumentasi-proyek/
│   ├── hero-banner-scaff-horizontal.png # Banner utama web
│   ├── profil-teknisi-msc.png           # Profil teknisi lapangan
│   ├── proyek-ruko-panjang.png          # Proyek ruko pertokoan
│   ├── proyek-ruko-sudut.png            # Proyek ruko fasad
│   ├── proyek-rumah-tinggal-1.png        # Proyek perumahan depan
│   ├── proyek-rumah-tinggal-2.png        # Proyek perumahan finishing
│   ├── tim-engineer-msc.png             # Hanifa & Engineering team
│   └── site-photos/
│       ├── onsite-01.jpg
│       ├── onsite-02.jpg
│       ├── onsite-03.jpg
│       ├── onsite-04.jpg
│       └── onsite-05.jpg
├── dokumen-teks/
│   ├── apa-itu-scaffolding.txt
│   ├── deskripsi-produk.txt
│   ├── kiat-memilih-scaffolding.txt
│   ├── kontak-kami.txt
│   ├── panduan-pemasangan-k3.txt
│   └── tentang-kami.txt
└── _arsip_original/                     # Backup 100% file asli sebelum penataan
    ├── Foto gambar utama/
    ├── Foto komponen/
    └── ...
```

---
*Laporan ini disusun secara otomatis dan diverifikasi melalui audit visual serta analisis hash oleh Assistant Antigravity.*
