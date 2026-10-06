import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ORGANIZATION_ID, SITE_URL, pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  HelpCircle,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = pageMetadata({
  title: 'Sewa Scaffolding Surabaya Sidoarjo Gresik',
  description: 'Sewa scaffolding steger pipa 1.8mm SNI di Surabaya, Sidoarjo, dan Gresik. Tarif mulai Rp 27.000/set/bln, stok ribuan set, kirim same-day dari 2 gudang.',
  path: '/sewa-scaffolding',
});

export default function SewaScaffoldingPage() {
  const rentalRates = [
    {
      item: '1 Set Scaffolding Fasad T170 (Lengkap)',
      components: '2 Main Frame 170 + 2 Cross Brace 220 + 4 Joint Pin',
      rateMonthly: 'Rp 27.000',
      minRental: '1 Bulan',
      deposit: 'Fleksibel / SPH Kontraktor',
    },
    {
      item: '1 Set Scaffolding Headroom T190',
      components: '2 Main Frame 190 + 2 Cross Brace 220 + 4 Joint Pin',
      rateMonthly: 'Rp 29.000',
      minRental: '1 Bulan',
      deposit: 'Fleksibel / SPH Kontraktor',
    },
    {
      item: '1 Set Ladder Frame T90',
      components: '2 Ladder Frame 90 + 2 Cross Ladder 190',
      rateMonthly: 'Rp 20.000',
      minRental: '1 Bulan',
      deposit: 'Fleksibel / SPH Kontraktor',
    },
    {
      item: 'Main Frame T170 Eceran',
      components: '1 Unit Gawang Utama Pipa 1.8mm SNI',
      rateMonthly: 'Rp 7.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Main Frame T190 Eceran',
      components: '1 Unit Gawang Utama Headroom 190 Pipa 1.8mm SNI',
      rateMonthly: 'Rp 8.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Ladder Frame T90 Eceran',
      components: '1 Unit Rangka Tangga T90 Pipa SNI',
      rateMonthly: 'Rp 5.500',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Catwalk Metal Plank Anti-Slip',
      components: 'Metal Plank Galvanis Berlubang 50 x 180 cm K3',
      rateMonthly: 'Rp 30.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Tangga Bordes Scaffolding 170 / 190',
      components: 'Tangga Baja Bordes + Kaitan Pengunci Aman',
      rateMonthly: 'Rp 50.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Pipe Support Teleskopik TS-90',
      components: 'Rentang Ketinggian 2.6 - 3.8 Meter Adjustable',
      rateMonthly: 'Rp 15.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Cross Brace 220 / 190 Galvanis',
      components: 'Pipa Silang Diagonal Pengaku Gawang Scaffolding',
      rateMonthly: 'Rp 4.500',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Joint Pin SGM / SG',
      components: 'Pin Sambungan Tiang Scaffolding Galvanis Presisi',
      rateMonthly: 'Rp 1.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Konsultasi & Estimasi',
      desc: `Hitung modul steger via WhatsApp hotline ${COMPANY_INFO.primaryPhone.formatted} atau kalkulator online.`,
    },
    {
      num: '02',
      title: 'Konfirmasi Penawaran (SPH)',
      desc: 'Penerbitan SPH resmi, rincian tarif, dan estimasi ongkir.',
    },
    {
      num: '03',
      title: 'Administrasi Ringkas',
      desc: 'Verifikasi KTP / SIUP PT tanpa deposit berbelit.',
    },
    {
      num: '04',
      title: 'Pengiriman Same-Day',
      desc: 'Armada truk meluncur langsung dari gudang Surabaya/Sidoarjo.',
    },
    {
      num: '05',
      title: 'Serah Terima (BAST)',
      desc: 'Pengecekan fisik unit bersama tim di lokasi proyek.',
    },
    {
      num: '06',
      title: 'Penjemputan Unit',
      desc: 'Armada truk kami menjemput kembali scaffolding setelah masa sewa selesai.',
    },
  ];

  const rentalPrices = rentalRates.map((r) => Number(r.rateMonthly.replace(/\D/g, '')));

  const faqs = [
    {
      q: 'Berapa harga sewa scaffolding per bulan?',
      a: 'Sewa 1 set scaffolding T170 (2 main frame, 2 cross brace, 4 joint pin) mulai Rp 27.000 per bulan, set T190 Rp 29.000 per bulan. Komponen eceran mulai Rp 1.000 per bulan. Harga belum termasuk PPN 11% dan ongkos kirim.',
    },
    {
      q: 'Berapa minimal durasi sewa scaffolding?',
      a: 'Minimal sewa 1 bulan. Untuk proyek jangka panjang, durasi dan termin pembayaran dapat disepakati dalam Surat Penawaran Harga (SPH).',
    },
    {
      q: 'Dokumen apa yang dibutuhkan untuk sewa?',
      a: 'Cukup verifikasi KTP untuk perorangan atau dokumen perusahaan (SIUP/NIB) untuk badan usaha, tanpa prosedur deposit yang berbelit.',
    },
    {
      q: 'Apakah bisa kirim di hari yang sama?',
      a: 'Bisa. Pengiriman same-day untuk Surabaya dan Sidoarjo dengan estimasi tiba 2–4 jam, Gresik 4–6 jam, serta Pasuruan dan Mojokerto 4–8 jam setelah konfirmasi.',
    },
    {
      q: 'Siapa yang menjemput scaffolding setelah masa sewa selesai?',
      a: 'Armada kami menjemput kembali unit di lokasi proyek setelah masa sewa berakhir, didahului pengecekan fisik bersama tim Anda.',
    },
  ];

  const sewaPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sewa Scaffolding Surabaya, Sidoarjo & Gresik',
    serviceType: 'Rental Scaffolding Steger',
    url: `${SITE_URL}/sewa-scaffolding`,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: ['Surabaya', 'Sidoarjo', 'Pasuruan', 'Gresik', 'Mojokerto'],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: Math.min(...rentalPrices),
      highPrice: Math.max(...rentalPrices),
      offerCount: rentalPrices.length,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sewaPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Clean Unified Page Header with Visual Photo */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-4" items={[{ name: 'Sewa Scaffolding' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
                Sewa Scaffolding Surabaya, Sidoarjo & Gresik
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Stok ribuan set steger pipa 1.8mm SNI siap kirim same-day dari 2 gudang Surabaya & Sidoarjo ke Gresik, Pasuruan, dan Mojokerto.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
                    'Halo Tim MSC Scaffolding, saya ingin konsultasi paket sewa scaffolding bulanan untuk proyek.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wide transition shadow-lg shadow-orange-950/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi Sewa</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/proyek/msc_service_sewa_clean.webp"
                  alt="Proyek Sewa Scaffolding Fasad Gedung MSC"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                  <span className="px-2.5 py-1 rounded bg-orange-600 font-semibold text-[11px]">
                    Stok Ready 2 Hub
                  </span>
                  <span className="font-bold text-[11px]">Mulai Rp 27.000 / set / bln</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Table Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 mb-1 block">
                Pricelist Terbuka
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                Daftar Tarif Sewa Komponen Scaffolding
              </h2>
              <p className="text-xs text-slate-500 font-mono mt-1">
                *Tarif sewa bulanan, belum termasuk PPN 11% dan ongkos kirim armada tronton/truk drop
              </p>
            </div>
          </div>

          {/* Rates Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-950 text-white font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-5">Nama Komponen / Paket</th>
                  <th className="py-3.5 px-5 hidden sm:table-cell">Kelengkapan Standar</th>
                  <th className="py-3.5 px-5 text-orange-400">Tarif / Bulan</th>
                  <th className="py-3.5 px-5 text-center">Aksi Cepat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {rentalRates.map((rate, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5 font-semibold text-slate-950">
                      <div>{rate.item}</div>
                      <div className="text-xs text-slate-500 font-normal sm:hidden mt-0.5">{rate.components}</div>
                    </td>
                    <td className="py-3.5 px-5 text-xs text-slate-600 hidden sm:table-cell">
                      {rate.components}
                    </td>
                    <td className="py-3.5 px-5 font-bold font-mono text-slate-950">
                      {rate.rateMonthly}
                      <span className="text-[10px] font-normal text-slate-500 block">/ bulan</span>
                    </td>
                    <td className="py-3.5 px-5 text-center">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
                          `Halo Tim MSC Scaffolding, saya tertarik sewa unit: ${rate.item}. Mohon informasi ketersediaan stok.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Sewa</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6-Step SOP Section - Clean Borderless Panels */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 mb-1 block">
              Alur Sewa
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Alur Cepat Sewa Scaffolding
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Proses pemesanan praktis dan fleksibel tanpa birokrasi rumit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white/80 hover:bg-white p-7 rounded-2xl transition-all">
                <div className="text-xl font-bold font-mono text-orange-600 mb-2">{step.num}</div>
                <h3 className="font-bold text-slate-950 text-base mb-1.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (mirrors FAQPage JSON-LD above) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 mb-1 block">
            FAQ Sewa
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-orange-600 shrink-0" aria-hidden="true" />
            Pertanyaan Seputar Sewa Scaffolding
          </h2>
          <div className="divide-y divide-slate-100 border-y border-slate-100">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-sm sm:text-base font-semibold text-slate-900">
                  <span>{f.q}</span>
                  <ChevronRight className="w-4 h-4 mt-1 shrink-0 text-orange-600 transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Butuh hitungan cepat? Coba{' '}
            <Link href="/kalkulator" className="font-semibold text-orange-600 hover:underline">kalkulator scaffolding</Link>{' '}
            atau lihat{' '}
            <Link href="/area-layanan" className="font-semibold text-orange-600 hover:underline">area layanan</Link> kami.
          </p>
        </div>
      </section>
    </div>
  );
}
