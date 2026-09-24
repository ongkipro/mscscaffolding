import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Truck,
  Clock,
  Warehouse,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
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
              Pengiriman same-day dari 2 gudang Rungkut Surabaya dan Buduran Sidoarjo ke seluruh kawasan industri & proyek Jawa Timur.
            </p>
          </div>
        </div>
      </section>

      {/* 2 Hub Advantage Banner */}
      <section className="py-8 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Warehouse className="w-8 h-8 text-white/90 flex-shrink-0" />
              <div>
                <div className="font-bold text-base">Distribusi dari 2 Gudang Strategis</div>
                <div className="text-xs text-orange-100">
                  Gudang Utama Surabaya (Rungkut) & Depot Logistik Sidoarjo (Lingkar Timur Buduran)
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-950/20 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wide">
              <span>ESTIMASI TIBA: 2 - 4 JAM (SAME-DAY)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Locations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded inline-block mb-3">
              Wilayah Layanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Wilayah Prioritas Layanan
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Pilih kota Anda untuk melihat detail waktu tempuh, kawasan industri yang terlayani, dan hub gudang keberangkatan armada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/area-layanan/${loc.slug}`}
                className="bg-slate-50/70 hover:bg-slate-50 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group block border border-slate-100 hover:border-slate-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-800 text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs">
                      <MapPin className="w-3 h-3 text-orange-600" />
                      <span>{loc.city}</span>
                    </div>
                    <div className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      <span>{loc.leadTimeHours}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-xl text-slate-950 mb-2 group-hover:text-orange-600 transition-colors">
                    Sewa Scaffolding {loc.city}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {loc.description}
                  </p>

                  <div className="space-y-2 mb-6 py-2 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-400 font-mono text-[11px]">JARAK</span>
                      <span className="font-mono font-bold text-slate-900">{loc.distanceKm}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-400 font-mono text-[11px]">HUB GUDANG</span>
                      <span className="font-medium text-slate-800">{loc.warehouseHub}</span>
                    </div>
                  </div>

                  {/* Industrial Estates */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                      Kawasan Industri
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.industrialEstates.slice(0, 3).map((estate, eIdx) => (
                        <span
                          key={eIdx}
                          className="px-2.5 py-1 bg-white text-slate-700 rounded-full text-[11px] shadow-xs"
                        >
                          {estate.split('(')[0].trim()}
                        </span>
                      ))}
                      {loc.industrialEstates.length > 3 && (
                        <span className="px-2 py-1 text-slate-400 text-[10px] font-mono">
                          +{loc.industrialEstates.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                    Lihat Layanan {loc.city}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-orange-600 flex items-center justify-center text-slate-700 group-hover:text-white transition-all shadow-2xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet & Guarantee */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded inline-block">
                Kapasitas Armada Logistik
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                Pengiriman Tepat Waktu Langsung ke Titik Titik Proyek
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kami mengoperasikan armada mandiri mulai dari truk pickup ringan untuk kebutuhan darurat retail hingga truk colt diesel ganda dan fuso tronton untuk mobilisasi ratusan set scaffolding sekaligus.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Jaminan penggantian unit langsung jika terjadi kerusakan di perjalanan.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Surat Jalan resmi lengkap dan Berita Acara Serah Terima (BAST).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Bongkar muat aman oleh tenaga helper logistik terlatih.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Siap pengiriman malam hari untuk proyek yang membatasi jam truk siang.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 text-white p-8 rounded-xl border border-slate-800">
              <div className="text-xs font-mono text-orange-400 font-bold mb-2">BUTUH PENGIRIMAN HARI INI?</div>
              <h3 className="text-xl font-bold mb-3">Jadwalkan Armada Kirim Proyek Anda Sekarang</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Hubungi hotline Bu Hanifa untuk mengecek antrean armada dan estimasi jam tiba di lokasi proyek Anda hari ini.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                  'Halo Bu Hanifa, saya ingin tanya jadwal kirim scaffolding untuk proyek hari ini.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide rounded-full transition shadow-md shadow-orange-950/40"
              >
                <span>Cek Jadwal Armada ({COMPANY_INFO.whatsappHanifa.formatted})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
