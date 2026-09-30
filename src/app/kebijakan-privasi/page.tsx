import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi PT Mitra Solusi Cahaya (MSC Scaffolding). Komitmen perlindungan data pelanggan, penggunaan cookie, dan transparansi tracking iklan.',
  alternates: {
    canonical: 'https://mscscaffolding.com/kebijakan-privasi',
  },
  openGraph: {
    title: 'Kebijakan Privasi - MSC Scaffolding',
    description: 'Kebijakan privasi dan komitmen perlindungan data pelanggan PT Mitra Solusi Cahaya (MSC Scaffolding).',
    url: 'https://mscscaffolding.com/kebijakan-privasi',
    siteName: 'MSC Scaffolding',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function KebijakanPrivasiPage() {
  const lastUpdated = '30 September 2026';

  return (
    <div className="bg-white min-h-screen">
      {/* Clean Unified Header */}
      <section className="bg-slate-50 py-10 sm:py-14 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Kebijakan Privasi</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
              <span>Transparansi &amp; Keamanan Data</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">
              Kebijakan Privasi
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
              <Lock className="w-5 h-5 text-orange-600 shrink-0" />
              <span>1. Komitmen Privasi Kami</span>
            </h2>
            <p>
              Selamat datang di <strong>MSC Scaffolding</strong> (dioperasikan oleh <strong>{COMPANY_INFO.legalName}</strong>). Kami sangat menghargai privasi setiap pelanggan, kontraktor, mandor, dan mitra bisnis kami. Dokumen Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi yang Anda berikan saat mengakses situs web <Link href="/" className="text-orange-600 underline font-medium">mscscaffolding.com</Link> atau menggunakan layanan sewa dan jual scaffolding kami.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-orange-600 shrink-0" />
              <span>2. Informasi yang Kami Kumpulkan</span>
            </h2>
            <p>Kami mengumpulkan data yang diperlukan untuk kelancaran transaksi dan layanan pelanggan:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>Data Kontak &amp; Identitas:</strong> Nama pemesan, nama perusahaan/badan usaha, nomor telepon/WhatsApp, dan alamat email yang Anda berikan melalui formulir permintaan penawaran atau tombol chat WhatsApp.
              </li>
              <li>
                <strong>Data Lokasi Proyek:</strong> Alamat titik bongkar proyek dan kota tujuan (Surabaya, Sidoarjo, Gresik, Pasuruan, Mojokerto) untuk keperluan estimasi biaya transportasi armada (mob-demob) dan jadwal pengiriman.
              </li>
              <li>
                <strong>Data Teknis Log &amp; Cookies:</strong> Alamat IP, jenis browser, halaman yang dilihat, waktu kunjungan, dan preferensi navigasi untuk memastikan kestabilan sistem dan kenyamanan akses Anda.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-orange-600 shrink-0" />
              <span>3. Penggunaan Cookie &amp; Iklan Digital (Google Ads)</span>
            </h2>
            <p>
              Situs kami menggunakan cookie dan tag pelacakan analitik seperti Google Analytics dan Google Ads Conversion Tracking (Tag ID: <code className="text-xs bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-mono">AW-18484671476</code>). Tag ini berfungsi mengukur efektivitas kampanye promosi dan pelacakan konversi kontak (klik panggilan telepon dan tombol WhatsApp).
            </p>
            <p>
              Cookie ini <strong>tidak mengumpulkan data identitas sensitif</strong> seperti password, data keuangan, atau rekening bank. Anda dapat menonaktifkan atau menghapus cookie kapan saja melalui pengaturan browser web Anda atau melalui layanan Google Ads Settings.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950">
              4. Tujuan Penggunaan Informasi
            </h2>
            <p>Data pribadi yang dikumpulkan digunakan semata-mata untuk:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Menerbitkan Surat Penawaran Harga (SPH), Surat Perjanjian Sewa (SPS), dan Faktur Pajak PKP resmi.</li>
              <li>Menghitung estimasi teknis kebutuhan unit (Bill of Quantity / BOQ) melalui kalkulator online.</li>
              <li>Mengkoordinasikan jadwal kirim, muat, dan tarik unit scaffolding bersama tim logistik dan sopir armada.</li>
              <li>Memberikan informasi pembaruan ketersediaan stok komponen atau promo sewa berkala.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950">
              5. Keamanan &amp; Perlindungan Data
            </h2>
            <p>
              Kami menerapkan standar enkripsi Secure Sockets Layer (SSL/HTTPS) di seluruh situs web kami. Data Anda disimpan dalam lingkungan peladen yang aman dan <strong>tidak akan pernah diperjualbelikan, disewakan, atau dibagikan</strong> kepada pihak ketiga di luar keperluan pengiriman armada resmi PT Mitra Solusi Cahaya.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950">
              6. Hak Pengguna &amp; Hubungi Kami
            </h2>
            <p>
              Anda berhak meminta pembaruan, verifikasi, atau penghapusan data kontak Anda dari basis data korespondensi kami. Apabila ada pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi tim kami:
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs sm:text-sm">
              <div className="font-bold text-slate-900">{COMPANY_INFO.legalName}</div>
              <div className="flex items-start gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.warehouses[0].address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-orange-600 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Hotline: {COMPANY_INFO.primaryPhone.formatted}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
