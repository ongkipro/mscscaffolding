import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Building2,
  MapPin,
  Clock,
  Phone,
  Award,
  Users,
  Warehouse,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Tentang Kami — Profil PT MITRA SOLUSI CAHAYA (MSC Scaffolding)',
  description: 'Profil perusahaan penyedia sewa dan jual scaffolding pipa 1.8mm SNI di Surabaya & Sidoarjo. Lebih dari satu dekade melayani kontraktor B2B dan proyek infrastruktur Jawa Timur.',
  openGraph: {
    title: 'Tentang PT MITRA SOLUSI CAHAYA | MSC Scaffolding Jawa Timur',
    description: 'Penyedia scaffolding steger profesional dengan 2 hub gudang di Surabaya & Sidoarjo.',
    url: 'https://www.mscscaffolding.com/tentang-kami',
  },
};

export default function TentangKamiPage() {
  const values = [
    {
      title: 'Standar Pipa 1.8mm Real SNI',
      desc: 'Kami menetapkan standar ketat: hanya menyediakan scaffolding dengan pipa baja hitam dan galvanis berketebalan 1.8mm riil, tanpa pipa afkiran yang tipis dan berisiko.',
      icon: ShieldCheck,
    },
    {
      title: 'Dua Hub Gudang Terintegrasi',
      desc: 'Gudang Rungkut Surabaya dan Gudang Buduran Sidoarjo menjamin kecepatan distribusi same-day ke seluruh kawasan industri Jawa Timur.',
      icon: Warehouse,
    },
    {
      title: 'Legalitas PKP & Siap Tender',
      desc: 'PT MITRA SOLUSI CAHAYA adalah entitas PKP resmi yang siap menerbitkan Faktur Pajak PPN 11%, SPH resmi, dan dokumen sertifikasi untuk tender swasta & BUMN.',
      icon: Award,
    },
    {
      title: 'Dedikasi Konsultasi Personal',
      desc: 'Didukung oleh Bu Hanifa dan tim engineer berpengalaman untuk menghitungkan kebutuhan steger proyek Anda secara presisi tanpa pemborosan anggaran.',
      icon: Users,
    },
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Pendirian & Gudang Pertama',
      desc: 'Memulai operasi penyewaan perancah konstruksi di Surabaya Timur dengan komitmen awal standardisasi pipa tebal.',
    },
    {
      year: '2018',
      title: 'Ekspansi Hub Gudang Sidoarjo',
      desc: 'Membuka depot logistik kedua di Buduran Sidoarjo untuk melayani lonjakan proyek industri di koridor Sidoarjo-Pasuruan.',
    },
    {
      year: '2021',
      title: 'Pengukuhan PT MITRA SOLUSI CAHAYA',
      desc: 'Transformasi badan usaha menjadi PT resmi dengan sertifikasi PKP, memperluas pengadaan tender B2B dan suplai kontraktor BUMN.',
    },
    {
      year: '2026',
      title: 'Inovasi Digital & Shoring Heavy Duty',
      desc: 'Pengembangan armada shoring tower heavy-duty untuk proyek jembatan dan integrasi layanan digital konsultasi 24/7.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Clean Unified Page Header */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Tentang Kami</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-mono font-medium">
              <Building2 className="w-3.5 h-3.5 text-orange-600" />
              <span>Profil Perusahaan & Dedikasi K3</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Sistem Perancah Aman di Jawa Timur
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              PT MITRA SOLUSI CAHAYA (MSC Scaffolding) adalah mitra terpercaya kontraktor nasional, developer properti, dan aplikator fasad dalam penyediaan sistem perancah steger pipa 1.8mm SNI dan shoring tower heavy-duty.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded inline-block">
                Kualitas & Integritas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Mengapa Memilih MSC Scaffolding?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dalam dunia konstruksi, keselamatan pekerja di atas ketinggian bukanlah hal yang bisa ditawar. Kami menyadari bahwa banyak perancah sewaan di pasaran menggunakan pipa tipis (1.2mm - 1.4mm) yang mudah bengkok dan membahayakan nyawa.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Di MSC Scaffolding, setiap batang pipa, main frame, dan catwalk kami fabrikasi dan seleksi dengan ketebalan riil 1.8mm standar SNI. Kami melayani pelanggan dengan sistem teratur, kepastian stok di 2 gudang fisik, dan respon konsultasi yang cepat.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-black text-slate-950 font-mono">1.8 mm</div>
                  <div className="text-xs text-slate-500 font-medium">Ketebalan Pipa Garansi</div>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-3xl font-black text-orange-600 font-mono">1.500 kg</div>
                  <div className="text-xs text-slate-500 font-medium">Kapasitas Beban Aman SWL</div>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-3xl font-black text-slate-950 font-mono">2 Hub</div>
                  <div className="text-xs text-slate-500 font-medium">Gudang Fisik Jatim</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/hero/hero_slide_4_business_partnership.jpg"
                  alt="Kemitraan B2B PT MITRA SOLUSI CAHAYA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-slate-950 text-white p-5 rounded-2xl flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-orange-600/10 text-orange-500 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-orange-400 font-bold mb-1">LEGALITAS PKP & BADAN USAHA RESMI</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pengusaha Kena Pajak (PKP) resmi siap menerbitkan e-Faktur PPN 11%, Surat Penawaran Harga (SPH), invoice korporat, dan sertifikasi uji beban untuk verifikasi K3 tender B2B dan rekanan BUMN.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars - Clean Borderless */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
              Prinsip Kerja
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              4 Pilar Utama Pelayanan Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-white/80 hover:bg-white p-7 rounded-2xl transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-950 text-base mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
              Jejak Langkah
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Perjalanan & Pertumbuhan MSC Scaffolding
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-slate-50/70 hover:bg-slate-50 p-7 rounded-2xl transition-colors">
                <div className="text-2xl font-black text-orange-600 font-mono mb-2">{m.year}</div>
                <h3 className="font-bold text-slate-950 text-base mb-2">{m.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 Warehouses Showcase */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 bg-white/[0.05] px-3 py-1 rounded-full inline-block mb-3">
              Fasilitas & Depot Fisik
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              2 Lokasi Gudang Siap Melayani Kebutuhan Anda
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Kunjungi gudang kami untuk memeriksa langsung kualitas material atau konsultasi teknis dengan tim lapangan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.warehouses.map((wh, idx) => (
              <div key={idx} className="bg-white/[0.04] hover:bg-white/[0.07] rounded-2xl p-7 sm:p-8 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-orange-400 font-bold block mb-1">
                      DEPOT {wh.city.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-white">{wh.name}</h3>
                  </div>
                  <Warehouse className="w-8 h-8 text-slate-700 flex-shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{wh.address}</span>
                </p>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={wh.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  </a>
                  <a
                    href={`https://wa.me/${wh.whatsapp}?text=${encodeURIComponent(
                      `Halo ${wh.name}, saya ingin menjadwalkan kunjungan inspeksi stok scaffolding.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-orange-600 active:scale-95 text-white text-xs font-semibold rounded-full transition shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                    <span>Hubungi Gudang</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4">
            Ingin Bermitra dengan MSC Scaffolding?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8">
            Hubungi kami sekarang untuk penawaran harga sewa proyek atau pembelian unit baru bersertifikasi.
          </p>
          <div className="flex justify-center">
            <Link
              href="/kontak"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-sm tracking-wide rounded-full shadow-lg shadow-orange-950/30 transition inline-flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi Hotline Kami ({COMPANY_INFO.whatsappHanifa.formatted})</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
