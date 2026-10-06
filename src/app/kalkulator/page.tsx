import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ORGANIZATION_ID, pageMetadata, SITE_URL } from '@/lib/seo';
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
import { PRODUCTS } from '@/data/products';
import type { EstimatePrices } from '@/utils/scaffoldingEstimate';

// Calculator unit prices are read from the catalogue at build time; a renamed slug fails the build.
const priceOf = (slug: string) => {
  const p = PRODUCTS.find((x) => x.slug === slug);
  if (!p) throw new Error(`Calculator price source missing: ${slug}`);
  return { rent: p.rentalPriceMonthly, buy: p.purchasePriceNew };
};

const CALCULATOR_PRICES: EstimatePrices = {
  mainFrame: priceOf('main-frame-170'),
  crossBrace: priceOf('cross-brace-220'),
  jointPin: priceOf('joint-pin-galvanis'),
  catwalk: priceOf('catwalk-metal-plank'),
  jackBase: priceOf('jack-base-60'),
  uHead: priceOf('u-head-60'),
  pipeSupport: priceOf('pipe-support-ts90'),
  tangga: priceOf('tangga-bordes-170'),
};

export const metadata: Metadata = pageMetadata({
  title: 'Kalkulator Scaffolding: Hitung Kebutuhan',
  description: 'Kalkulator scaffolding online: hitung kebutuhan main frame, cross brace, catwalk, jack base, dan estimasi biaya sewa proyek di Surabaya, Sidoarjo, Gresik.',
  path: '/kalkulator',
});

export default function KalkulatorPage() {
  const calculationGuides = [
    {
      title: 'Rumus Lebar Bay (1.83 Meter)',
      desc: 'Satu modul horizontal scaffolding standar menggunakan Cross Brace 220cm dengan jarak antar kolom gawang tepat 1.83 meter. Jumlah bay = Pembulatan ke atas (Panjang Dinding ÷ 1.83m). Gawang dipakai bersama antar bay, jadi jumlah main frame per tingkat = bay + 1.',
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
      desc: 'Untuk perancah 3 tingkat atau lebih (di atas 5 meter), regulasi K3 Permenaker 01/1980 mewajibkan pemasangan angkur pengikat kaku ke dinding gedung setiap 3 tier.',
    },
  ];

  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Kebutuhan Scaffolding MSC',
    url: `${SITE_URL}/kalkulator`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'IDR' },
    provider: { '@id': ORGANIZATION_ID },
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      {/* Clean Unified Page Header */}
      <section className="bg-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-4" items={[{ name: 'Kalkulator Scaffolding' }]} />

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
          <ScaffoldingCalculator prices={CALCULATOR_PRICES} />
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

