import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Truck,
  ChevronRight,
  ArrowUpRight,
  Phone,
} from 'lucide-react';
import { getAllLocations } from '@/services/locationService';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Area Layanan Scaffolding Jawa Timur — Surabaya, Sidoarjo, Gresik, Pasuruan, Mojokerto',
  description: 'Pengiriman scaffolding steger pipa 1.8mm SNI same-day dari gudang Rungkut Surabaya & Buduran Sidoarjo ke seluruh kawasan industri Jawa Timur.',
  openGraph: {
    title: 'Area Layanan Pengiriman Scaffolding Jawa Timur | MSC Scaffolding',
    description: 'Armada siap melayani Surabaya, Sidoarjo, Gresik, Pasuruan, dan Mojokerto.',
    url: 'https://www.mscscaffolding.com/area-layanan',
  },
};

const CITY_AREAS: Record<string, string> = {
  surabaya: 'SIER, Margomulyo, Tambak Langon, Surabaya Barat',
  sidoarjo: 'Berbek, Safe n Lock, Jabon, Sedati, Waru',
  gresik: 'JIIPE, Manyar, KIM, KIG, Petrokimia',
  pasuruan: 'PIER, Beji, Gempol, Pandaan, Pantura',
  mojokerto: 'Ngoro Industrial Park (NIP), Pungging, Mojosari, Jetis',
};

export default async function AreaLayananPage() {
  const locations = await getAllLocations();

  return (
    <div className="bg-white min-h-screen">
      {/* Header Bersih */}
      <section className="bg-white border-b border-slate-100 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-medium">Area Layanan</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Area Layanan & Distribusi
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Pengiriman cepat scaffolding same-day dari gudang Surabaya (Rungkut) dan Sidoarjo (Buduran).
          </p>
        </div>
      </section>

      {/* 6 Kota Layanan Utama */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Kota Layanan
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              Jangkauan pengiriman scaffolding ke kawasan industri di Jawa Timur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/area-layanan/${loc.slug}`}
                className="group bg-white hover:bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 hover:border-orange-500 hover:shadow-2xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base sm:text-lg text-slate-950 group-hover:text-orange-600 transition-colors">
                      {loc.city}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {CITY_AREAS[loc.slug] || loc.industrialEstates.join(', ')}
                  </p>
                </div>
              </Link>
            ))}

            {/* 6th Card: Luar Kota (Charter) */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                'Halo Bu Hanifa, saya ingin info pengiriman scaffolding untuk proyek di luar 5 kota utama Jawa Timur.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-50/50 hover:bg-slate-50 p-5 rounded-xl border border-dashed border-slate-300 hover:border-orange-500 hover:shadow-2xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-950 group-hover:text-orange-600 transition-colors">
                    Kota Lain di Jatim
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Malang, Tuban, Lamongan, Bojonegoro, Jombang, Probolinggo (Sistem Charter)
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Pilihan Armada */}
      <section className="py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Pilihan Armada
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2 mb-1.5">
                <Truck className="w-4 h-4 text-orange-600 shrink-0" />
                <h3 className="font-bold text-slate-950 text-sm">Pickup L300</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kapasitas s/d 50 set. Untuk pengiriman cepat atau tambahan komponen susulan di lokasi proyek.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2 mb-1.5">
                <Truck className="w-4 h-4 text-orange-600 shrink-0" />
                <h3 className="font-bold text-slate-950 text-sm">Colt Diesel (CDD)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kapasitas 100–300 set. Standar suplai untuk proyek ruko, gedung, dan gudang.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2 mb-1.5">
                <Truck className="w-4 h-4 text-orange-600 shrink-0" />
                <h3 className="font-bold text-slate-950 text-sm">Fuso & Tronton</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kapasitas 500+ set. Pengadaan massal untuk pabrik, smelter, dan gedung bertingkat.
              </p>
            </div>
          </div>

          {/* Hotline Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600">
            <div>
              <strong className="text-slate-900 font-semibold">Siap kirim same-day & malam hari.</strong> Sudah termasuk helper bongkar muat dan Surat Jalan resmi.
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                'Halo Bu Hanifa, saya ingin cek jadwal kirim scaffolding untuk proyek hari ini.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-orange-600 hover:text-orange-700 font-mono shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hubungi Logistik: {COMPANY_INFO.whatsappHanifa.formatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Ketentuan Pengiriman */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Ketentuan Pengiriman
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                Ongkir Terdekat
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dihitung dari gudang Rungkut atau Buduran. Subsidi ongkir untuk sewa volume besar.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                Same-Day Delivery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Area Surabaya & Sidoarjo untuk order terkonfirmasi sebelum pukul 13.00 WIB.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                Bongkar Muat
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Didampingi helper logistik untuk penataan aman di lokasi proyek.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                Kirim Malam Hari
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Melayani kirim malam (20.00 – 05.00 WIB) bebas aturan jam larangan truk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
