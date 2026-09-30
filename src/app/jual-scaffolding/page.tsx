import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  FileCheck,
  Truck,
  CheckCircle2,
  FileSpreadsheet,
  Building2,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Hammer,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Jual Scaffolding Surabaya, Sidoarjo, Gresik Harga Pabrik',
  description: 'Jual scaffolding steger pipa 1.8mm SNI harga pabrik di Surabaya, Sidoarjo, dan Gresik. Sedia SPH resmi tender, faktur pajak PKP, dan kirim langsung ke proyek.',
  alternates: {
    canonical: 'https://mscscaffolding.com/jual-scaffolding',
  },
  openGraph: {
    title: 'Jual Scaffolding Surabaya, Sidoarjo, Gresik Harga Pabrik - MSC Scaffolding',
    description: 'Jual scaffolding steger pipa 1.8mm SNI harga pabrik di Surabaya, Sidoarjo, dan Gresik. Sedia SPH resmi tender, faktur pajak PKP, dan kirim langsung ke proyek.',
    url: 'https://mscscaffolding.com/jual-scaffolding',
  },
};

export default function JualScaffoldingPage() {
  const saleProducts = [
    {
      no: '01',
      item: 'MAIN FRAME T190',
      unit: 'PCS',
      specs: 'Gawang utama headroom 190cm pipa 1.8mm Real SNI',
      priceSale: 'Rp 210.000',
    },
    {
      no: '02',
      item: 'MAIN FRAME T170',
      unit: 'PCS',
      specs: 'Gawang utama fasad 170cm pipa 1.8mm Real SNI',
      priceSale: 'Rp 190.000',
    },
    {
      no: '03',
      item: 'LADDER FRAME T90',
      unit: 'PCS',
      specs: 'Rangka tangga tingkat setengah 90cm pipa SNI',
      priceSale: 'Rp 130.000',
    },
    {
      no: '04',
      item: 'CROSS BRACE 220',
      unit: 'PCS',
      specs: 'Pipa silang diagonal pengaku bentang 220cm',
      priceSale: 'Rp 50.000',
    },
    {
      no: '05',
      item: 'CROSS BRACE 190',
      unit: 'PCS',
      specs: 'Pipa silang diagonal pengaku bentang 190cm',
      priceSale: 'Rp 45.000',
    },
    {
      no: '06',
      item: 'JOIN PIN SGM',
      unit: 'PCS',
      specs: 'Pin sambungan vertikal tiang perancah SGM',
      priceSale: 'Rp 6.500',
    },
    {
      no: '07',
      item: 'JOIN PIN SG',
      unit: 'PCS',
      specs: 'Pin sambungan tiang perancah SG presisi K3',
      priceSale: 'Rp 7.500',
    },
    {
      no: '08',
      item: 'SCAFFOLDING T190',
      unit: 'SET',
      specs: '1 Set lengkap (2 Main Frame 190 + 2 Cross Brace 220 + 4 Joint Pin)',
      priceSale: 'Rp 540.000',
    },
    {
      no: '09',
      item: 'SCAFFOLDING T170',
      unit: 'SET',
      specs: '1 Set lengkap (2 Main Frame 170 + 2 Cross Brace 220 + 4 Joint Pin)',
      priceSale: 'Rp 500.000',
    },
    {
      no: '10',
      item: 'LADDER FRAME T90',
      unit: 'SET',
      specs: '1 Set lengkap (2 Ladder Frame 90 + 2 Cross Brace + 4 Joint Pin)',
      priceSale: 'Rp 350.000',
    },
    {
      no: '11',
      item: 'PIPE SUPPORT TS90',
      unit: 'PCS',
      specs: 'Tiang prop teleskopik 2.0 - 3.8 meter adjustable',
      priceSale: 'Rp 285.000',
    },
    {
      no: '12',
      item: 'STAIR T170',
      unit: 'PCS',
      specs: 'Tangga bordes baja 7 trap anti-slip untuk Main Frame 170',
      priceSale: 'Rp 440.000',
    },
    {
      no: '13',
      item: 'STAIR T190',
      unit: 'PCS',
      specs: 'Tangga bordes baja 8 trap anti-slip untuk Main Frame 190',
      priceSale: 'Rp 460.000',
    },
    {
      no: '14',
      item: 'CATWALK',
      unit: 'PCS',
      specs: 'Papan pijakan pelat baja galvanis berlubang anti-slip 50x183cm',
      priceSale: 'Rp 310.000',
    },
  ];

  const tenderWorkflows = [
    {
      step: '01',
      title: 'Permintaan SPH & BOQ',
      desc: 'Kirim rincian kebutuhan modul via WhatsApp Tender.',
    },
    {
      step: '02',
      title: 'Penerbitan SPH Resmi',
      desc: 'Penerbitan penawaran resmi berkop PT dalam 1-2 jam.',
    },
    {
      step: '03',
      title: 'Penerbitan PO & Kontrak',
      desc: 'Penerbitan PO resmi kontraktor & kesepakatan termin.',
    },
    {
      step: '04',
      title: 'Inspeksi Fisik Gudang',
      desc: 'Kunjungan QC fisik di Gudang Surabaya atau Sidoarjo.',
    },
    {
      step: '05',
      title: 'Faktur Pajak & Legalitas',
      desc: 'Penyediaan e-Faktur PPN 11% & sertifikat uji beban.',
    },
    {
      step: '06',
      title: 'Ekspedisi Langsung Proyek',
      desc: 'Pengiriman armada flatbed langsung ke lokasi konstruksi.',
    },
  ];

  const jualPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Jual Scaffolding Baru & Rekondisi Surabaya Sidoarjo',
    serviceType: 'Penjualan Scaffolding Steger Galvanis',
    provider: {
      '@id': 'https://mscscaffolding.com/#organization',
    },
    areaServed: ['Surabaya', 'Sidoarjo', 'Pasuruan', 'Gresik', 'Mojokerto'],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: 42000,
      highPrice: 540000,
      offerCount: 12,
      priceValidUntil: '2027-12-31',
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jualPageSchema) }}
      />

      {/* Clean Unified Page Header with Visual Photo */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Jual Scaffolding</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
                Jual Scaffolding Baru & Rekondisi
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Pengadaan pipa 1.8mm SNI fabrikasi presisi dan rekondisi Grade A siap pakai langsung dari gudang.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                    'Halo Tim Procurement MSC Scaffolding, kami ingin mengajukan permintaan Surat Penawaran Harga (SPH) untuk pembelian unit scaffolding.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wide transition shadow-lg shadow-orange-950/20"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Minta SPH Resmi</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/proyek/msc_service_jual_clean.webp"
                  alt="Gudang Stok Pengadaan Scaffolding Baru SNI MSC"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                  <span className="px-2.5 py-1 rounded bg-orange-600 font-semibold text-[11px]">
                    PKP & e-Faktur PPN 11%
                  </span>
                  <span className="font-bold text-[11px]">Distributor Tangan Pertama</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Grid - Clean Borderless */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white/80 hover:bg-white transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-base mb-2">Pipa Asli 1.8mm Bergaransi</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Kami menjamin ketebalan pipa real 1.8mm SNI dengan uji mikrometer di gudang. Tidak menggunakan pipa tipis afkiran (1.2mm/1.4mm) yang rawan patah.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/80 hover:bg-white transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-base mb-2">Legalitas PKP & Faktur Pajak</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                PT MITRA SOLUSI CAHAYA siap menerbitkan Faktur Pajak PPN 11%, Surat Penawaran Harga resmi, dan dokumen sertifikasi material untuk administrasi proyek Anda.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/80 hover:bg-white transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-base mb-2">Opsi Rekondisi Grade A Siap Pakai</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Solusi cerdas bagi pengadaan dengan anggaran efisien. Unit rekondisi telah diluruskan presisi, cat baru, dan diuji kekuatan las tanpa resiko safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 mb-1 block">
                Pricelist Terbuka
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                Daftar Harga Jual Scaffolding MSC
              </h2>
              <p className="text-xs text-slate-500 font-mono mt-1">
                *Tarif harga jual resmi PT Mitra Solusi Cahaya (belum termasuk PPN 11% &amp; ongkir armada)
              </p>
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-950 text-white font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-5">No &amp; Nama Item</th>
                  <th className="py-3.5 px-5 hidden sm:table-cell">Spesifikasi / Kelengkapan</th>
                  <th className="py-3.5 px-5 text-center">Sat</th>
                  <th className="py-3.5 px-5 text-orange-400">Harga Jual</th>
                  <th className="py-3.5 px-5 text-center">Aksi Cepat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {saleProducts.map((row) => (
                  <tr key={row.no} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5 font-semibold text-slate-950">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400 font-normal">{row.no}</span>
                        <span>{row.item}</span>
                      </div>
                      <div className="text-xs text-slate-500 font-normal sm:hidden mt-0.5">
                        {row.specs}
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-xs text-slate-600 hidden sm:table-cell">
                      {row.specs}
                    </td>
                    <td className="py-3.5 px-5 text-center font-mono font-semibold text-slate-600">
                      {row.unit}
                    </td>
                    <td className="py-3.5 px-5 font-bold font-mono text-slate-950">
                      {row.priceSale}
                    </td>
                    <td className="py-3.5 px-5 text-center">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                          `Halo Tim MSC Scaffolding, saya tertarik membeli unit: ${row.item} (${row.unit}) seharga ${row.priceSale}. Mohon informasi stok dan penawaran resmi.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Beli</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <div>* Tersedia opsi unit Rekondisi Grade A (hemat hingga 20-30%) dan diskon volume untuk pembelian proyek &gt; 50 set.</div>
            <Link href="/produk" className="text-orange-600 font-semibold hover:underline inline-flex items-center gap-1">
              <span>Semua Produk</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tender Workflow Section */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded inline-block mb-3">
              Alur Pengadaan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Alur Pengadaan & Tender
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Prosedur transaksi transparan, tertib administrasi, dan siap audit untuk kontraktor swasta nasional maupun rekanan BUMN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenderWorkflows.map((step) => (
              <div key={step.step} className="bg-white/[0.04] hover:bg-white/[0.07] p-7 rounded-2xl transition-colors">
                <div className="text-2xl font-black text-orange-500 font-mono mb-3">{step.step}</div>
                <h3 className="font-bold text-base text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Siapkan Kebutuhan Steger Proyek Anda Bersama MSC
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Hubungi tim procurement PT Mitra Solusi Cahaya untuk meminta Surat Penawaran Harga (SPH) resmi dan cek fisik stok di gudang Rungkut atau Gedangan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
                'Halo Tim Procurement MSC Scaffolding, kami ingin konsultasi pembelian steger scaffolding untuk proyek.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded shadow-lg transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Minta Penawaran Beli ({COMPANY_INFO.primaryPhone.formatted})</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
                'Halo Tim MSC Scaffolding, kami ingin tanya stok unit scaffolding baru & rekondisi Grade A.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded border border-slate-700 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Stok Gudang ({COMPANY_INFO.primaryPhone.formatted})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
