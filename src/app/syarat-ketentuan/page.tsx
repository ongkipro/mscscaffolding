import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ChevronRight, CheckCircle2, AlertTriangle, Truck, ShieldCheck, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat dan ketentuan sewa serta jual scaffolding PT Mitra Solusi Cahaya. Prosedur SPH, periode sewa, standar K3, pengiriman armada, dan garansi unit.',
  alternates: {
    canonical: 'https://mscscaffolding.com/syarat-ketentuan',
  },
  openGraph: {
    title: 'Syarat & Ketentuan - MSC Scaffolding',
    description: 'Syarat dan ketentuan resmi transaksi sewa dan jual scaffolding PT Mitra Solusi Cahaya (MSC Scaffolding).',
    url: 'https://mscscaffolding.com/syarat-ketentuan',
    siteName: 'MSC Scaffolding',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function SyaratKetentuanPage() {
  const lastUpdated = '30 September 2026';

  return (
    <div className="bg-white min-h-screen">
      {/* Clean Unified Header */}
      <section className="bg-slate-50 py-10 sm:py-14 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Syarat &amp; Ketentuan</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5 text-orange-600" />
              <span>Ketentuan Operasional &amp; Transaksi Resmi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">
              Syarat &amp; Ketentuan Layanan
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Terakhir diperbarui: {lastUpdated} • PT Mitra Solusi Cahaya (MSC Scaffolding)
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
              <span>1. Ketentuan Umum &amp; Definisi</span>
            </h2>
            <p>
              Syarat dan Ketentuan ini mengatur hubungan kontraktual antara <strong>PT Mitra Solusi Cahaya</strong> (&quot;MSC Scaffolding&quot; atau &quot;Pihak Penyedia&quot;) dengan pelanggan, kontraktor, atau pihak ketiga (&quot;Penyewa&quot; atau &quot;Pembeli&quot;) terkait penyewaan maupun pembelian peralatan perancah (scaffolding steger), komponen bekisting, dan aksesoris keselamatan kerja.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
              <span>2. Periode Sewa &amp; Perhitungan Biaya</span>
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>Durasi Standar:</strong> Periode sewa standar dihitung berdasarkan siklus bulanan (30 hari kalender).
              </li>
              <li>
                <strong>Mulai Sewa:</strong> Masa sewa dihitung sejak unit scaffolding diterima di lokasi proyek Penyewa (dibuktikan dengan Surat Jalan / Berita Acara Serah Terima).
              </li>
              <li>
                <strong>Perpanjangan Sewa:</strong> Penyewa wajib menginformasikan perpanjangan masa sewa minimal 3 (tiga) hari kerja sebelum masa sewa berakhir untuk penerbitan invoice perpanjangan resmi.
              </li>
              <li>
                <strong>Pengembalian Dini:</strong> Jika proyek selesai lebih cepat dari durasi kontrak (misalnya selesai dalam 15 hari pada kontrak sewa bulanan), penarikan dapat dilakukan namun biaya sewa minimum 1 bulan tetap berlaku.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-orange-600 shrink-0" />
              <span>3. Pengiriman, Pengambilan &amp; Mob-Demob</span>
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                Biaya transportasi pengiriman ke lokasi (mobilisasi) dan penarikan kembali ke gudang (demobilisasi) dihitung terpisah berdasarkan jarak radius lokasi proyek dari hub gudang terdekat kami (Surabaya / Sidoarjo).
              </li>
              <li>
                Penyewa wajib memastikan akses jalan menuju titik bongkar aman dan dapat dilalui oleh armada truk/pickup yang ditugaskan.
              </li>
              <li>
                Tenaga bongkar muat di lokasi proyek dikoordinasikan sesuai kesepakatan tertulis pada Surat Penawaran Harga (SPH).
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" />
              <span>4. Standar K3 &amp; Tanggung Jawab Operasional Lapangan</span>
            </h2>
            <p>
              Seluruh unit scaffolding yang disuplai oleh MSC Scaffolding menggunakan pipa tebal 1.8mm SNI dan telah lolos uji inspeksi visual pra-kirim. Namun demikian:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>Pemasangan &amp; Ereksi:</strong> Penyewa bertanggung jawab memastikan perancah dirakit oleh tenaga terlatih (scaffolder bersertifikat) sesuai regulasi Permenaker No. 01/MEN/1980 dan instruksi keselamatan teknis.
              </li>
              <li>
                <strong>Garansi Unit Cacat:</strong> Jika terdapat komponen yang bengkok, retak las, atau tidak presisi saat unit tiba di lokasi, MSC Scaffolding memberikan garansi tukar unit baru dalam waktu 1x24 jam kerja tanpa biaya tambahan.
              </li>
              <li>
                <strong>Kerusakan / Kehilangan di Lokasi:</strong> Komponen yang rusak akibat kelalaian operasional (tertimpa alat berat, terbakar las, atau hilang di area proyek) menjadi tanggung jawab Penyewa untuk penggantian sesuai tarif ganti rugi resmi.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950">
              5. Pembayaran &amp; Faktur Pajak Resmi
            </h2>
            <p>
              PT Mitra Solusi Cahaya merupakan Pengusaha Kena Pajak (PKP) resmi. Seluruh transaksi didukung oleh Surat Penawaran Harga (SPH), Surat Perjanjian Sewa (SPS), Kwitansi, dan Faktur Pajak elektronik (e-Faktur) resmi. Pembayaran dilakukan via transfer rekening bank korporasi atas nama PT Mitra Solusi Cahaya.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950">
              6. Layanan Bantuan &amp; Konsultasi Kontrak
            </h2>
            <p>
              Untuk klarifikasi teknis mengenai pasal perjanjian sewa atau klausul tender proyek, silakan hubungi tim legal &amp; tender kami:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 text-slate-700">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>WhatsApp Tender &amp; SPH: <strong>{COMPANY_INFO.whatsappTender.formatted}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Telepon Kantor: <strong>{COMPANY_INFO.officePhone}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
