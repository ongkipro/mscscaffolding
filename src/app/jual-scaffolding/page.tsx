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
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Hammer,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Jual Scaffolding Baru & Rekondisi SNI 1.8mm — Harga Pabrik Surabaya Sidoarjo',
  description: 'Pusat penjualan steger scaffolding baru galvanis dan rekondisi Grade A bersertifikasi K3 di Jawa Timur. Siap supply proyek B2B, tender BUMN, faktur pajak resmi.',
  openGraph: {
    title: 'Jual Scaffolding Pipa 1.8mm SNI Baru & Rekondisi Berkualitas | MSC Scaffolding',
    description: 'Harga distributor tangan pertama mulai Rp 450.000/set. Ready stock ratusan set baru & rekondisi Grade A di Surabaya & Sidoarjo.',
    url: 'https://www.mscscaffolding.com/jual-scaffolding',
  },
};

export default function JualScaffoldingPage() {
  const saleProducts = [
    {
      item: '1 Set Scaffolding Fasad T170 (Baru)',
      specs: '2 Main Frame 170 + 2 Cross Brace 220 + 4 Joint Pin (Pipa 1.8mm SNI)',
      priceNew: 'Rp 580.000',
      priceRecon: 'Rp 450.000',
      warranty: 'Garansi Las & Uji Beban 1.500 kg',
    },
    {
      item: '1 Set Scaffolding T190 (Baru)',
      specs: '2 Main Frame 190 + 2 Cross Brace 220 + 4 Joint Pin (Headroom Luas)',
      priceNew: 'Rp 620.000',
      priceRecon: 'Rp 480.000',
      warranty: 'Garansi Las & Ketebalan Pipa',
    },
    {
      item: 'Catwalk Metal Plank Anti-Slip 50x183cm',
      specs: 'Plat Baja Galvanis Berlubang K3 + Double Lock Hook',
      priceNew: 'Rp 450.000',
      priceRecon: 'Rp 340.000',
      warranty: 'Bebas Karat & Anti-Bengkok',
    },
    {
      item: 'Tangga Bordes Scaffolding 170 (Baja)',
      specs: 'Rangka Pipa 1.8mm + 7 Trap Pijakan Bordes + Hook',
      priceNew: 'Rp 490.000',
      priceRecon: 'Rp 380.000',
      warranty: 'Kaitan Kokoh Standard EN 12811',
    },
    {
      item: 'Pipe Support Teleskopik TS-90',
      specs: 'Rentang 2.0 - 3.8 Meter, Drat Ulir Presisi, Base Plate 6mm',
      priceNew: 'Rp 320.000',
      priceRecon: 'Rp 240.000',
      warranty: 'Drat Lancar & Anti Selip',
    },
    {
      item: 'Jack Base T60cm / U-Head T60cm (Solid)',
      specs: 'Batang Ulir Solid Ø 32mm / 34mm, Tebal Plat 5mm',
      priceNew: 'Rp 145.000',
      priceRecon: 'Rp 110.000',
      warranty: 'Ulir Mulus Bebas Macet',
    },
    {
      item: 'Swivel Clamp & Fixed Clamp 1.5 - 2 Inch',
      specs: 'Baja Tempaan Drop Forged K3 Heavy Duty',
      priceNew: 'Rp 48.000',
      priceRecon: 'Rp 35.000',
      warranty: 'Baut T-Bolt Baja Grade 8.8',
    },
    {
      item: 'Roda Scaffolding Heavy Duty 6 Inch + Rem',
      specs: 'Karet Polyurethane PU Industrial, Kapasitas 250 kg/roda',
      priceNew: 'Rp 180.000',
      priceRecon: 'Rp 135.000',
      warranty: 'Bearing Mulus & Rem Pakem',
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

  const faqs = [
    {
      q: 'Apa perbedaan unit Scaffolding Baru dan Rekondisi Grade A MSC?',
      a: 'Unit Baru adalah fabrikasi 100% fresh dari pabrik dengan pipa baru tebal 1.8mm SNI dan finishing cat oven / galvanis mulus. Unit Rekondisi Grade A adalah pipa pilihan yang telah melewati quality control ketat: pipa dijamin lurus 100%, las-lasan telah diuji ulang, dicat anti-karat baru, dan memiliki daya dukung SWL setara unit baru dengan harga 20-30% lebih hemat.',
    },
    {
      q: 'Apakah bisa menerbitkan Faktur Pajak PPN 11% untuk pengadaan PT/BUMN?',
      a: 'Bisa. PT MITRA SOLUSI CAHAYA adalah Pengusaha Kena Pajak (PKP) resmi. Semua transaksi pembelian B2B dapat diterbitkan Faktur Pajak elektronik (e-Faktur PPN 11%) lengkap beserta kelengkapan legalitas perusahaan.',
    },
    {
      q: 'Apakah ada minimal pembelian untuk unit scaffolding baru?',
      a: 'Tidak ada batas minimum untuk retail atau mandor proyek, Anda bisa membeli mulai dari 1 set atau eceran aksesoris seperti clamp dan jack base. Untuk pembelian skala besar (di atas 100 set), kami memberikan diskon volume khusus kontraktor.',
    },
    {
      q: 'Bagaimana prosedur survei unit sebelum pembayaran?',
      a: 'Anda sangat dipersilakan mengunjungi Gudang Utama kami di Rungkut Surabaya atau Gudang Sidoarjo pada jam operasional (Senin-Sabtu: 07.30 - 17.00 WIB) untuk mengukur ketebalan pipa dengan micrometer caliper dan mengetes kelaikan unit secara langsung.',
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

      {/* Clean Unified Page Header with Visual Photo */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-14">
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
                  src="/images/proyek/msc_service_jual_clean.jpg"
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
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
              Daftar Harga Beli
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Harga Unit Baru vs Rekondisi
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Harga distributor tangan pertama belum termasuk PPN 11% dan ongkos kirim armada tronton/truk drop.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-950 text-white font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">Komponen / Set Scaffolding</th>
                  <th className="py-4 px-6 hidden sm:table-cell">Spesifikasi Material</th>
                  <th className="py-4 px-6 text-orange-400">Harga Unit Baru</th>
                  <th className="py-4 px-6 text-emerald-400">Harga Rekondisi A</th>
                  <th className="py-4 px-6 text-center">Aksi Cepat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {saleProducts.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-4 px-6 font-semibold text-slate-950">
                      <div>{row.item}</div>
                      <div className="text-xs text-slate-500 font-normal sm:hidden mt-0.5">
                        {row.specs}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-600 hidden sm:table-cell">
                      <div>{row.specs}</div>
                      <div className="text-[11px] text-emerald-600 font-medium mt-0.5">{row.warranty}</div>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-950">
                      {row.priceNew}
                      <span className="text-[10px] text-slate-500 font-normal block">/ unit baru</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-700">
                      {row.priceRecon}
                      <span className="text-[10px] text-slate-500 font-normal block">/ rekondisi</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                          `Halo Tim MSC, saya tertarik membeli unit: ${row.item}. Mohon informasi ketersediaan stock dan diskon volume.`
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
            <div>* Diskon kuantitas berlaku untuk pembelian borongan proyek &gt; 50 set.</div>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pertanyaan Seputar Pembelian</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">FAQ Jual Scaffolding</h2>
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

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Siapkan Kebutuhan Steger Proyek Anda Bersama MSC
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Hubungi tim procurement PT MITRA SOLUSI CAHAYA hari ini untuk mendapatkan penawaran harga terbaik dengan jaminan ketersediaan stock di gudang kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                'Halo Kantor Tender MSC, kami ingin konsultasi pembelian steger scaffolding untuk proyek.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded shadow-lg transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi CS Kantor Tender (0813-2562-024)</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                'Halo Bu Hanifa, kami ingin tanya stok unit scaffolding rekondisi Grade A.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded border border-slate-700 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tanya Bu Hanifa (0822-5766-4755)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
