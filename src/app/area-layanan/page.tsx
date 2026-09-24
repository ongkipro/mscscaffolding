import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Truck,
  Warehouse,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { getAllLocations } from '@/services/locationService';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Area Layanan Sewa & Jual Scaffolding Jawa Timur — Surabaya, Sidoarjo, Gresik, Pasuruan, Mojokerto',
  description: 'Jangkauan pengiriman scaffolding steger pipa 1.8mm SNI ke seluruh kawasan industri Jawa Timur. Didukung 2 gudang fisik di Rungkut Surabaya dan Buduran Sidoarjo. Pengiriman same-day express.',
  openGraph: {
    title: 'Area Layanan Pengiriman Scaffolding Jawa Timur | MSC Scaffolding',
    description: 'Armada pengiriman siap melayani Surabaya, Sidoarjo, Gresik, Pasuruan, dan Mojokerto.',
    url: 'https://www.mscscaffolding.com/area-layanan',
  },
};

export default async function AreaLayananPage() {
  const locations = await getAllLocations();

  return (
    <div className="bg-white min-h-screen">
      {/* Clean Unified Page Header */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Area Layanan</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Area Layanan & Distribusi
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Pengiriman same-day dari 2 gudang Rungkut & Buduran ke seluruh kawasan industri Jawa Timur.
            </p>
          </div>
        </div>
      </section>

      {/* 2 Hub Advantage Section */}
      <section className="py-8 sm:py-10 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-8 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Warehouse className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-950">
                    Distribusi dari 2 Hub Gudang Fisik
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Mobilisasi armada cepat langsung dari Rungkut & Buduran ke lokasi proyek.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Armada Siap Kirim Hari Ini (Same-Day)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-5 sm:pt-6">
              {/* Hub 1: Surabaya */}
              <div className="flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-slate-50/70 border border-slate-100">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-orange-600 font-bold">
                      Gudang Utama 01
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200/60">
                      Tiba 2 - 4 Jam
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-950 text-base mb-1">
                    Hub Surabaya (Rungkut)
                  </h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Kawasan Industri SIER, Rungkut. Melayani Surabaya Raya dan koridor industri Gresik.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500">PIC Logistik: Bu Hanifa</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orange-600 hover:text-orange-700 transition-colors font-mono"
                  >
                    {COMPANY_INFO.whatsappHanifa.formatted}
                  </a>
                </div>
              </div>

              {/* Hub 2: Sidoarjo */}
              <div className="flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-slate-50/70 border border-slate-100">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-orange-600 font-bold">
                      Depot Logistik 02
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200/60">
                      Tiba 2 - 4 Jam
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-950 text-base mb-1">
                    Depot Sidoarjo (Buduran)
                  </h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Pergudangan Lingkar Timur Km 5.5. Akses cepat Tol Gempol–Pasuruan & Tol Sumo.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500">PIC Logistik Sidoarjo</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orange-600 hover:text-orange-700 transition-colors font-mono"
                  >
                    {COMPANY_INFO.whatsappTender.formatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Locations Grid (6 balanced cards: 3x2 on desktop) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-1 block">
              Wilayah Layanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Wilayah Prioritas Layanan Proyek
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/area-layanan/${loc.slug}`}
                className="bg-white hover:bg-slate-50/50 p-5 sm:p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between group border border-slate-200/80 hover:border-orange-500 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-bold text-xl sm:text-2xl text-slate-950 group-hover:text-orange-600 transition-colors tracking-tight">
                      {loc.city}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 flex items-center gap-1.5 shrink-0 bg-emerald-50 px-2.5 py-1 rounded-full font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      <span>{loc.leadTimeHours}</span>
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Warehouse className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="font-medium text-slate-800">{loc.warehouseHub}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed pl-5">
                      {loc.industrialEstates.join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                  <span>Detail Layanan {loc.city}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-600" />
                </div>
              </Link>
            ))}

            {/* 6th Card: Charter Luar Kota untuk melengkapi grid 3x2 secara simetris */}
            <div className="bg-slate-50/60 hover:bg-slate-50 p-5 sm:p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between border border-dashed border-slate-300 hover:border-orange-500 hover:shadow-sm group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-bold text-lg sm:text-2xl text-slate-950 tracking-tight">
                    Kota Lain di Jatim
                  </h3>
                  <span className="text-[11px] sm:text-xs font-semibold text-orange-700 flex items-center gap-1.5 shrink-0 bg-orange-50 px-2 sm:px-2.5 py-1 rounded-full font-mono">
                    <Truck className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>Sistem Charter</span>
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Warehouse className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="font-medium text-slate-800">Hub Surabaya & Sidoarjo</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-5">
                    Malang Raya • Tuban • Lamongan • Bojonegoro • Jombang • Probolinggo
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                  'Halo Bu Hanifa, saya ingin tanya info pengiriman charter scaffolding untuk proyek di luar 5 kota utama Jawa Timur.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 mt-5 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>Konsultasi Proyek Luar Kota</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Guarantee */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-1.5 block">
              Armada Logistik
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Kapasitas Armada Pengiriman
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm mb-1">Pickup Express (L300)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tiba 1–2 jam untuk kebutuhan darurat atau tambahan komponen.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm mb-1">Colt Diesel Double (CDD)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kapasitas 100–300 set scaffolding untuk proyek menengah.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm mb-1">Fuso & Tronton Drop</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Suplai massal ratusan hingga ribuan set untuk industri & gedung tinggi.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm mb-1">Standar Bongkar Muat K3</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Helper terlatih, Surat Jalan resmi, dan Berita Acara (BAST).
              </p>
            </div>
          </div>

          {/* Hotline Dispatch CTA Card */}
          <div className="bg-slate-950 text-white p-6 sm:p-10 rounded-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold block">
                  Jadwal Pengiriman Proyek
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Butuh Pengiriman Scaffolding Hari Ini?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Hubungi Bu Hanifa untuk cek slot armada terdekat dan estimasi jam tiba di lokasi Anda.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Same-day Surabaya & Sidoarjo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Siap kirim malam hari</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Helper bongkar muat</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                    'Halo Bu Hanifa, saya ingin tanya jadwal kirim scaffolding untuk proyek hari ini.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide rounded-full transition shadow-md shadow-orange-950/40 text-center"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Cek Jadwal Armada <span className="font-mono whitespace-nowrap">({COMPANY_INFO.whatsappHanifa.formatted})</span></span>
                </a>
                <Link
                  href="/kalkulator"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide rounded-full transition text-center"
                >
                  <span>Hitung di Kalkulator Sewa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics FAQ */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
              FAQ Distribusi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Pertanyaan Umum Pengiriman
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-1.5">
                Bagaimana perhitungan ongkos kirim?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dihitung dari jarak gudang terdekat (Rungkut/Buduran) dan jenis armada. Tersedia <strong className="text-slate-900 font-semibold">subsidi / gratis ongkir</strong> untuk volume besar atau durasi proyek panjang.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-1.5">
                Apakah bisa kirim hari ini (Same-Day)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-semibold">Bisa.</strong> Area Surabaya dan Sidoarjo dilayani same-day untuk konfirmasi order sebelum <strong className="text-slate-900 font-semibold">pukul 13.00 WIB</strong>.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-1.5">
                Apakah sudah termasuk bongkar muat?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-semibold">Sudah termasuk.</strong> Setiap armada didampingi <strong className="text-slate-900 font-semibold">helper logistik</strong> untuk bongkar dan penataan di titik drop proyek.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-1.5">
                Bisa kirim malam hari (bebas jam truk)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-semibold">Bisa.</strong> Melayani pengiriman malam hari (<strong className="text-slate-900 font-semibold">20.00 – 05.00 WIB</strong>) mengikuti jam izin masuk truk proyek tanpa biaya tambahan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
