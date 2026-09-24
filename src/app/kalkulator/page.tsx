import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  ShieldCheck,
  Ruler,
  HelpCircle,
  ChevronRight,
  Truck,
  FileCheck2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { ScaffoldingCalculator } from '@/components/kalkulator/ScaffoldingCalculator';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Kalkulator Kebutuhan Scaffolding — Hitung Jumlah Set & Biaya Sewa Online',
  description: 'Simulasi gratis kebutuhan scaffolding steger modular, catwalk, jack base, dan tangga berdasarkan panjang dan tinggi bidang kerja. Dapatkan estimasi BOQ dan biaya dalam 10 detik.',
  openGraph: {
    title: 'Kalkulator Scaffolding Online — Hitung Kebutuhan & Biaya Proyek | MSC Scaffolding',
    description: 'Hitung kebutuhan set steger, catwalk, jack base, dan estimasi biaya sewa / beli real-time.',
    url: 'https://www.mscscaffolding.com/kalkulator',
  },
};

export default function KalkulatorPage() {
  const calculationGuides = [
    {
      title: 'Rumus Lebar Bay (1.83 Meter)',
      desc: 'Satu modul horizontal scaffolding standar menggunakan Cross Brace 220cm dengan jarak antar kolom gawang tepat 1.83 meter. Jumlah kolom = Pembulatan ke atas (Panjang Dinding ÷ 1.83m).',
    },
    {
      title: 'Rumus Ketinggian Tier (1.70 Meter)',
      desc: 'Setiap tingkat scaffolding menggunakan Main Frame T170 setinggi 1.70 meter. Jumlah elevasi vertikal = Pembulatan ke atas (Tinggi Target ÷ 1.70m).',
    },
    {
      title: 'Jack Base & Sole Plate',
      desc: 'Untuk kestabilan tanah dan perataan elevasi, setiap kolom kaki gawang bawah wajib menggunakan Jack Base T60cm dengan alas papan landasan (sole plate).',
    },
    {
      title: 'Ikatan Dinding (Wall Tie)',
      desc: 'Untuk perancah dengan tinggi di atas 3 tingkat (5 meter), regulasi K3 Permenaker 01/1980 mewajibkan pemasangan angkur pengikat kaku ke dinding gedung setiap 3 tier.',
    },
  ];

  const faqs = [
    {
      q: 'Apakah hasil kalkulator ini sudah akurat untuk acuan pemesanan?',
      a: 'Hasil simulasi kalkulator memberikan estimasi Bill of Quantity (BOQ) teknis sekitar 95% presisi untuk geometri dinding reguler. Untuk bentuk arsitektur tidak beraturan, melingkar, atau kebutuhan shoring beban berat, konsultan teknis kami siap menghitungkan gambar teknis CAD gratis.',
    },
    {
      q: 'Bagaimana jika proyek saya membutuhkan masa sewa kurang dari 1 bulan?',
      a: 'Periode minimum sewa standar kami adalah 1 bulan (30 hari kalender). Jika proyek selesai lebih awal (misal 2 minggu), unit tetap dapat ditarik kembali ke gudang sesuai kebutuhan Anda.',
    },
    {
      q: 'Apakah ongkos kirim armada tronton atau pickup sudah termasuk di kalkulator?',
      a: 'Estimasi di atas merupakan harga sewa/beli komponen. Biaya mob-demob (transportasi armada) dihitung terpisah berdasarkan jarak lokasi proyek dari gudang terdekat kami (Rungkut Surabaya atau Buduran Sidoarjo).',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Clean Unified Page Header */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Kalkulator Scaffolding</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Kalkulator Kebutuhan Scaffolding</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Kalkulator Scaffolding Online
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Masukkan dimensi panjang dan tinggi area kerja Anda untuk mendapatkan estimasi jumlah set modular, komponen pendukung K3, serta estimasi rincian anggaran sewa dan beli dalam hitungan detik.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Interactive Widget */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaffoldingCalculator />
        </div>
      </section>

      {/* Engineering Guidelines */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded inline-block mb-3">
              Dasar Perhitungan Teknis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Bagaimana Cara Menghitung Kebutuhan Scaffolding?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Prinsip perhitungan modular scaffolding MSC mengacu pada dimensi modul standar industri konstruksi Indonesia dan standar keselamatan K3.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculationGuides.map((guide, idx) => (
              <div key={idx} className="bg-white/80 hover:bg-white p-7 rounded-2xl transition-all">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 font-mono font-bold text-xs flex items-center justify-center mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-950 text-sm mb-2">{guide.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{guide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pertanyaan Teknis Kalkulator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">FAQ Perhitungan Steger</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50/70 hover:bg-slate-50 p-6 rounded-2xl transition-colors">
                <h3 className="text-base font-bold text-slate-950 mb-2 flex items-start gap-2.5">
                  <span className="text-orange-600 font-mono text-sm">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
