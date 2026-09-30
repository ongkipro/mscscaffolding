import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  ShieldCheck,
  Ruler,
  ChevronRight,
  Truck,
  FileCheck2,
  Clock,
} from 'lucide-react';
import { ScaffoldingCalculator } from '@/components/kalkulator/ScaffoldingCalculator';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Kalkulator Scaffolding: Hitung Kebutuhan & Biaya',
  description: 'Hitung kebutuhan scaffolding modular, catwalk, jack base & tangga online. Estimasi jumlah set dan rincian biaya sewa proyek akurat dalam hitungan detik.',
  alternates: {
    canonical: 'https://www.mscscaffolding.com/kalkulator',
  },
  openGraph: {
    title: 'Kalkulator Scaffolding: Hitung Kebutuhan & Biaya - MSC Scaffolding',
    description: 'Simulasi gratis kebutuhan scaffolding modular, catwalk, jack base, dan tangga. Estimasi jumlah set dan biaya sewa proyek akurat.',
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

  return (
    <div className="bg-white min-h-screen">
      {/* Clean Unified Page Header */}
      <section className="bg-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Kalkulator Scaffolding</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Kalkulator Kebutuhan Scaffolding
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Masukkan panjang dan tinggi area kerja untuk estimasi jumlah set modular, komponen pendukung K3, serta estimasi rincian biaya.
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
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-orange-700 font-semibold mb-2 block">
              Dasar Perhitungan Teknis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
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
    </div>
  );
}

