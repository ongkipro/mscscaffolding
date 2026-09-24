import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ChevronRight,
  HardHat,
  Scale,
  Award,
  BookOpen,
  ArrowRight,
  ClipboardCheck,
} from 'lucide-react';
import { K3_STANDARDS, INSPECTION_CHECKLIST } from '@/data/k3Data';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Panduan K3 Scaffolding & Standar Safety — Permenakertrans 01/1980 & EN 12811-1',
  description: 'Pedoman keselamatan kerja perancah steger besi: kapasitas beban SWL 1.500 kg, SOP perakitan dan pembongkaran, protokol Scafftag inspection, dan checklist harian HSE.',
  openGraph: {
    title: 'Panduan Teknis K3 Scaffolding Standar Kemenaker & Internasional | MSC Scaffolding',
    description: 'Panduan keselamatan kerja perancah steger besi, kapasitas SWL, checklist inspeksi, dan sistem Scafftag hijau-merah.',
    url: 'https://www.mscscaffolding.com/k3-panduan',
  },
};

export default function K3PanduanPage() {
  const swlMatrix = [
    {
      component: 'Main Frame Pipa 1.8mm SNI',
      swl: '1.500 kg / kolom tiang',
      safetyFactor: '4:1 (Ultimate 6.000 kg)',
      notes: 'Beban vertikal terdistribusi merata dengan jack base kokoh',
    },
    {
      component: 'Catwalk Metal Plank Berlubang',
      swl: '250 kg / m² (Beban Merata)',
      safetyFactor: '3:1 (Ultimate 750 kg/m²)',
      notes: 'Kapasitas 2 pekerja aktif + peralatan perkakas kerja',
    },
    {
      component: 'Tangga Bordes Baja Scaffolding',
      swl: '200 kg beban dinamis',
      safetyFactor: '3:1 (Ultimate 600 kg)',
      notes: 'Hanya untuk satu pekerja melintas pada satu trap tangga',
    },
    {
      component: 'Jack Base T60cm (Batang Solid)',
      swl: '3.000 kg beban aksial',
      safetyFactor: '3:1 (Ultimate 9.000 kg)',
      notes: 'Maksimum ulir terbuka tidak boleh melebihi 40 cm',
    },
    {
      component: 'Swivel Clamp & Fixed Clamp 2"',
      swl: '600 kg beban slip / geser',
      safetyFactor: '2.5:1 (Torque kencang 40-50 Nm)',
      notes: 'Baut T-Bolt baja tempaan heavy duty',
    },
  ];

  const erectionSteps = [
    {
      step: '01',
      title: 'Pemeriksaan Landasan (Sole Plate)',
      desc: 'Pastikan tanah atau lantai kerja padat, rata, dan kering. Pasang papan landasan kayu (sole plate tebal min 3 cm) jika bertumpu di atas tanah terbuka untuk mencegah ambles.',
    },
    {
      step: '02',
      title: 'Penyetelan Jack Base & Waterpass',
      desc: 'Tempatkan jack base di atas sole plate. Gunakan waterpass untuk memastikan bidang horizontal rata sebelum gawang pertama didirikan.',
    },
    {
      step: '03',
      title: 'Ereksi Gawang Utama & Pengaku Silang',
      desc: 'Pasang sepasang Main Frame di atas jack base, segera kunci dengan 2 unit Cross Brace 220cm di kedua sisi. Pastikan lock pin mengunci sempurna.',
    },
    {
      step: '04',
      title: 'Pemasangan Joint Pin & Tingkat Lanjutan',
      desc: 'Masukkan Joint Pin ke dalam ujung pipa tiang vertikal sebelum menumpuk Main Frame tingkat kedua. Pastikan sambungan presisi tanpa celah goyang.',
    },
    {
      step: '05',
      title: 'Pemasangan Lantai Kerja & Guardrail',
      desc: 'Pasang Catwalk Metal Plank dengan kait terkunci rapat. Pasang pagar pengaman (handrail 1m dan midrail 0.5m) serta toe board pembatas tepi pada lantai kerja.',
    },
    {
      step: '06',
      title: 'Angkur Pengikat Dinding (Wall Tie)',
      desc: 'Jika ketinggian melebihi 3 tingkat (5 meter), pasang ikatan angkur kaku ke kolom atau balok beton bangunan setiap 3 elevasi bertingkat.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Panduan Keselamatan Kerja K3 Scaffolding (Perancah Baja Tubular) Permenakertrans 01/1980',
    description: 'Panduan komprehensif keselamatan kerja perancah steger besi: kapasitas daya dukung SWL, SOP perakitan, dan sistem inspeksi Scafftag harian.',
    author: {
      '@type': 'Organization',
      name: COMPANY_INFO.legalName,
      url: 'https://www.mscscaffolding.com',
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.brandName,
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.mscscaffolding.com/images/branding/logo-msc.jpeg',
      },
    },
    datePublished: '2026-01-15',
    dateModified: '2026-09-21',
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Clean Unified Page Header */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Panduan K3 Scaffolding</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Panduan Keselamatan Scaffolding (K3)
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Panduan teknis kapasitas beban aman (Safe Working Load), SOP ereksi, dan standar Scafftag keselamatan kerja di ketinggian.
            </p>

            <div className="pt-2">
              <a
                href="#swl-matrix"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-950 hover:bg-orange-600 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide rounded-full transition shadow-xs"
              >
                <span>Tabel Beban SWL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Overview */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-emerald-600 font-semibold mb-2 block">
              Regulasi & Acuan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Landasan Hukum & Standar Internasional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {K3_STANDARDS.map((std, idx) => (
              <div key={idx} className="bg-white/80 hover:bg-white p-7 rounded-2xl transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-orange-600 mb-1">{std.code}</div>
                  <h3 className="font-bold text-base text-slate-950 mb-2">{std.title}</h3>
                  <p className="text-xs text-slate-500 mb-4">{std.scope}</p>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {std.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWL Load Matrix */}
      <section id="swl-matrix" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
              Engineering Calculations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Matriks Beban Kerja Aman (Safe Working Load - SWL)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Seluruh unit scaffolding MSC difabrikasi dari pipa baja baru tebal 1.8mm SNI dengan faktor keamanan keselamatan (Safety Factor) minimum 3:1 hingga 4:1.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-950 text-white font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">Komponen Struktural</th>
                  <th className="py-4 px-6 text-orange-400">Kapasitas SWL Kerja</th>
                  <th className="py-4 px-6 hidden sm:table-cell">Safety Factor</th>
                  <th className="py-4 px-6">Kondisi & Batasan Teknis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {swlMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-4 px-6 font-bold text-slate-950">{row.component}</td>
                    <td className="py-4 px-6 font-mono font-bold text-orange-600">{row.swl}</td>
                    <td className="py-4 px-6 font-mono text-slate-600 hidden sm:table-cell">{row.safetyFactor}</td>
                    <td className="py-4 px-6 text-slate-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scafftag Visual System */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded inline-block mb-3">
              Visual Safety Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Sistem Visual Scafftag Inspeksi Harian
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Prosedur penandaan visual wajib di area kerja konstruksi untuk mencegah pekerja menaiki perancah yang belum laik fungsi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.04] hover:bg-white/[0.07] p-7 rounded-2xl transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mb-4">
                HIJAU
              </div>
              <h3 className="font-bold text-base text-white mb-2">GREEN SCAFFTAG — AMAN</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Menandakan perancah telah diinspeksi oleh Scaffolding Inspector / HSE Officer resmi, terpasang lengkap dengan handrail, toe board, dan aman digunakan bekerja.
              </p>
              <div className="text-[11px] font-mono text-emerald-400">Masa berlaku: Maks 7 hari kalender</div>
            </div>

            <div className="bg-white/[0.04] hover:bg-white/[0.07] p-7 rounded-2xl transition-colors">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold text-xs mb-4">
                KUNING
              </div>
              <h3 className="font-bold text-base text-white mb-2">YELLOW SCAFFTAG — TERBATAS</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Menandakan perancah memiliki batasan khusus (misal: hanya boleh dilewati 1 orang, atau wajib menggunakan full body harness dengan double lanyard 100% tie-off).
              </p>
              <div className="text-[11px] font-mono text-yellow-400">Wajib izin kerja khusus (Permit)</div>
            </div>

            <div className="bg-white/[0.04] hover:bg-white/[0.07] p-7 rounded-2xl transition-colors">
              <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs mb-4">
                MERAH
              </div>
              <h3 className="font-bold text-base text-white mb-2">RED SCAFFTAG — DILARANG NAIK</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Menandakan perancah sedang dalam proses ereksi, pembongkaran, atau ditemukan komponen rusak/retak las. SIAPAPUN DILARANG MENAIKI PERANCAH INI.
              </p>
              <div className="text-[11px] font-mono text-red-400">Tindakan darurat isolasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Erection & Dismantling SOP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
              Standard Operating Procedure (SOP)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Tahapan Perakitan Scaffolding Sesuai SOP K3
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Prosedur baku ereksi untuk memastikan kestabilan geometri dan mencegah resiko rubuh atau perancah miring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {erectionSteps.map((step) => (
              <div key={step.step} className="bg-slate-50/70 hover:bg-slate-50 p-7 rounded-2xl transition-colors">
                <div className="text-xl font-black text-orange-600 font-mono mb-2">{step.step}</div>
                <h3 className="font-bold text-base text-slate-950 mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-50/80 rounded-2xl flex items-start gap-3.5 text-red-900 text-xs sm:text-sm">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">SOP Pembongkaran (Dismantling) — Dilarang Melempar Material:</span>
              <p className="mt-1 text-red-800 text-xs leading-relaxed">
                Pembongkaran harus dilakukan secara bertahap dari tingkat paling atas ke bawah (Top-Down). DILARANG KERAS menjatuhkan atau melempar komponen scaffolding dari ketinggian ke tanah karena dapat memicu mikroskopis deformasi las dan retak pipa yang membahayakan penggunaan selanjutnya. Gunakan tali tambang kerekan atau derek hoist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Checklist Table */}
      <section id="checklist-inspeksi" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
              Audit Kelaikan Proyek
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              6 Poin Kritis Checklist Inspeksi Harian Perancah
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Parameter yang wajib diperiksa oleh supervisor atau safety officer sebelum menandatangani Scafftag hijau.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-950 text-white font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">Kategori Pemeriksaan</th>
                  <th className="py-4 px-6">Item Yang Diperiksa</th>
                  <th className="py-4 px-6">Toleransi Maksimum</th>
                  <th className="py-4 px-6 text-center">Tingkat Kritis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {INSPECTION_CHECKLIST.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-4 px-6 font-bold text-slate-950">{item.category}</td>
                    <td className="py-4 px-6 text-slate-700">{item.check}</td>
                    <td className="py-4 px-6 font-mono text-orange-600">{item.tolerance}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-block px-2.5 py-0.5 bg-red-100 text-red-700 text-[11px] font-mono font-bold rounded">
                        CRITICAL (100%)
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety Consultation Bottom Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <HardHat className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Konsultasikan Kebutuhan Safety Scaffolding Proyek Anda
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Tim teknis PT MITRA SOLUSI CAHAYA siap membantu menyusun perhitungan beban shoring, dokumen sertifikasi material, dan penyediaan unit scaffolding pipa 1.8mm SNI yang lolos inspeksi HSE proyek.
          </p>
          <div className="flex justify-center">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                'Halo Tim Safety MSC, kami ingin konsultasi perhitungan beban dan sertifikasi K3 scaffolding untuk proyek.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wide rounded-full shadow-lg shadow-orange-950/40 transition"
            >
              <span>Konsultasi Teknis K3 via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
