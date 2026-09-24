import React from 'react';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Sewa Scaffolding Surabaya & Sidoarjo — Tarif Mulai Rp 45.000 / Set / Bulan',
  description: 'Layanan sewa perancah steger galvanis SNI pipa 1.8mm di Jawa Timur. Ready stock ribuan set, kirim same-day dari gudang Rungkut & Buduran, bebas biaya ganti unit rusak.',
  openGraph: {
    title: 'Sewa Scaffolding Pipa 1.8mm SNI Murah di Surabaya & Sidoarjo | MSC Scaffolding',
    description: 'Tarif sewa mulai Rp 45.000/set/bulan. Ready stock ribuan set di Surabaya & Sidoarjo.',
    url: 'https://www.mscscaffolding.com/sewa-scaffolding',
  },
};

export default function SewaScaffoldingPage() {
  const rentalRates = [
    {
      item: '1 Set Scaffolding Fasad T170 (Lengkap)',
      components: '2 Main Frame 170 + 2 Cross Brace 220 + 4 Joint Pin',
      rateMonthly: 'Rp 45.000',
      minRental: '1 Bulan',
      deposit: 'Fleksibel / SPH Kontraktor',
    },
    {
      item: '1 Set Scaffolding Headroom T190',
      components: '2 Main Frame 190 + 2 Cross Brace 220 + 4 Joint Pin',
      rateMonthly: 'Rp 50.000',
      minRental: '1 Bulan',
      deposit: 'Fleksibel / SPH Kontraktor',
    },
    {
      item: 'Main Frame T170 Eceran',
      components: '1 Unit Gawang Utama Pipa 1.8mm SNI',
      rateMonthly: 'Rp 18.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Catwalk Metal Plank Anti-Slip',
      components: 'Pelat Baja Galvanis Berlubang 50 x 183 cm',
      rateMonthly: 'Rp 30.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Tangga Bordes Scaffolding 170',
      components: 'Tangga Baja 7 Trap + Kaitan Pengunci',
      rateMonthly: 'Rp 35.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Jack Base T60cm / U-Head T60cm',
      components: 'Batang Ulir Solid Tebal 3.8mm + Plat Tapak',
      rateMonthly: 'Rp 10.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Pipe Support Teleskopik TS-90',
      components: 'Rentang Ketinggian 2.0 - 3.8 Meter Adjustable',
      rateMonthly: 'Rp 25.000',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
    {
      item: 'Roda Scaffolding Karet 6 Inch + Rem',
      components: '4 Roda Polyurethane Heavy Duty Swivel Lock',
      rateMonthly: 'Rp 60.000 / set (4 roda)',
      minRental: '1 Bulan',
      deposit: 'Sesuai Jumlah',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Konsultasi & Estimasi',
      desc: 'Hitung modul steger via WhatsApp atau kalkulator online.',
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
      desc: 'Truk kami menjemput kembali perancah setelah sewa selesai.',
    },
  ];

  const faqs = [
    {
      q: 'Berapa minimal sewa scaffolding di MSC?',
      a: 'Minimal periode sewa reguler adalah 1 bulan (30 hari). Untuk sewa mingguan atau proyek khusus, silakan hubungi Bu Hanifa untuk penawaran tarif harian/mingguan khusus.',
    },
    {
      q: 'Apakah bisa kirim hari ini (same-day delivery)?',
      a: 'Bisa! Untuk area Surabaya, Sidoarjo, dan Gresik dengan pemesanan sebelum jam 13.00 WIB, armada kami siap mengantar di hari yang sama langsung ke lokasi proyek.',
    },
    {
      q: 'Bagaimana jika ada komponen yang rusak atau macet saat pemakaian?',
      a: 'MSC memberikan garansi tukar unit gratis. Jika ditemukan cacat fungsi atau las sambungan aus, kami akan segera mengirimkan unit pengganti baru tanpa biaya sewa tambahan.',
    },
    {
      q: 'Apakah MSC melayani penerbitan faktur pajak dan SPH resmi untuk tender?',
      a: 'Ya, sebagai badan hukum resmi PT MITRA SOLUSI CAHAYA, kami menerbitkan Surat Penawaran Harga (SPH), BAST, dan Faktur Pajak PPN resmi untuk keperluan procurement tender BUMN dan swasta.',
    },
  ];

  const jsonLd = {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Clean Unified Page Header with Visual Photo */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Sewa Scaffolding</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-mono font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                <span>Sewa Scaffolding Pipa 1.8mm</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
                Sewa Scaffolding Pipa 1.8mm SNI di Surabaya & Sidoarjo
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Stok puluhan ribu set steger pipa 1.8mm SNI siap kirim same-day dari 2 hub gudang Surabaya & Sidoarjo.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                    'Halo Bu Hanifa, saya ingin konsultasi paket sewa scaffolding bulanan untuk proyek.'
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
                  src="/images/proyek/msc_service_sewa_clean.jpg"
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
                  <span className="font-bold text-[11px]">Mulai Rp 45.000 / set / bln</span>
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
                        href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                          `Halo Bu Hanifa, saya tertarik sewa unit: ${rate.item}. Mohon informasi ketersediaan stok.`
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

      {/* FAQ Section - Clean Borderless Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 mb-1 block">
              Tanya Jawab
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">FAQ Sewa Scaffolding</h2>
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
