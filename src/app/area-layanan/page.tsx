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
              Pengiriman same-day dari 2 gudang Rungkut Surabaya dan Buduran Sidoarjo ke seluruh kawasan industri & proyek Jawa Timur.
            </p>
          </div>
        </div>
      </section>

      {/* 2 Hub Advantage Section */}
      <section className="py-10 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Warehouse className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-950">
                    Distribusi Logistik dari 2 Hub Gudang Fisik
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Memastikan efisiensi jarak tempuh dan kecepatan mobilisasi armada ke lokasi proyek Anda.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Armada Siap Kirim Hari Ini (Same-Day)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Hub 1: Surabaya */}
              <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-50/70 border border-slate-100">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider text-orange-600 font-bold">
                      Gudang Utama 01
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200/60">
                      Tiba 2 - 4 Jam
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-950 text-base mb-1">
                    Hub Gudang Surabaya (Rungkut)
                  </h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Kawasan Industri Rungkut Industri Raya No. 45, Surabaya. Melayani Surabaya (Timur, Pusat, Utara, Barat) dan Koridor Industri Gresik.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500">PIC Logistik: Bu Hanifa</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    {COMPANY_INFO.whatsappHanifa.formatted}
                  </a>
                </div>
              </div>

              {/* Hub 2: Sidoarjo */}
              <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-50/70 border border-slate-100">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider text-orange-600 font-bold">
                      Depot Logistik 02
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200/60">
                      Tiba 2 - 4 Jam
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-950 text-base mb-1">
                    Depot Logistik Sidoarjo (Buduran)
                  </h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Pergudangan Lingkar Timur Km 5.5, Buduran, Sidoarjo. Akses langsung Tol Gempol–Pasuruan dan Tol Krian–Mojokerto.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500">PIC Logistik Sidoarjo</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
              Wilayah Layanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Wilayah Prioritas Layanan Proyek
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Pilih kota lokasi proyek Anda untuk melihat estimasi waktu tempuh, jalur tol armada, dan daftar kawasan industri yang kami layani.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/area-layanan/${loc.slug}`}
                className="bg-white hover:bg-slate-50/60 p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between group block border border-slate-200/80 hover:border-orange-500 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-bold text-xl sm:text-2xl text-slate-950 group-hover:text-orange-600 transition-colors tracking-tight">
                      {loc.city}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 shrink-0 bg-emerald-50 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      <span>{loc.leadTimeHours.split('(')[0].trim()}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {loc.description}
                  </p>

                  <div className="space-y-1.5 py-3 border-y border-slate-100 my-4 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-400">Jarak Tempuh</span>
                      <span className="font-semibold text-slate-900">{loc.distanceKm}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-400">Hub Keberangkatan</span>
                      <span className="font-medium text-slate-800 text-right">
                        {loc.warehouseHub.includes('Surabaya') ? 'Hub Surabaya (Rungkut)' : 'Hub Sidoarjo (Buduran)'}
                      </span>
                    </div>
                  </div>

                  {/* Kawasan Industri Utama */}
                  <div className="mb-4">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                      Cakupan Area Proyek
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed line-clamp-2">
                      {loc.industrialEstates.slice(0, 3).map((e) => e.split('(')[0].trim()).join(' • ')}
                      {loc.industrialEstates.length > 3 && ` • +${loc.industrialEstates.length - 3} lainnya`}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                  <span>Lihat Layanan {loc.city}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-600" />
                </div>
              </Link>
            ))}

            {/* 6th Card: Charter Luar Kota untuk melengkapi grid 3x2 secara simetris */}
            <div className="bg-slate-50/70 hover:bg-slate-50 p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between border border-dashed border-slate-300 hover:border-orange-500 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="font-bold text-xl sm:text-2xl text-slate-950 tracking-tight">
                    Jawa Timur Lainnya
                  </h3>
                  <span className="text-xs font-semibold text-orange-700 flex items-center gap-1.5 shrink-0 bg-orange-50 px-2.5 py-1 rounded-full">
                    <Truck className="w-3.5 h-3.5 text-orange-600" />
                    <span>Sistem Charter</span>
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  Melayani suplai scaffolding proyek skala besar ke kota-kota lain di Jawa Timur via armada charter khusus.
                </p>

                <div className="space-y-1.5 py-3 border-y border-slate-200/60 my-4 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-400">Radius Jangkauan</span>
                    <span className="font-semibold text-slate-900">Hingga 150 km</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-400">Hub Keberangkatan</span>
                    <span className="font-medium text-slate-800 text-right">
                      Surabaya & Sidoarjo
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                    Kota yang Dilayani
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Malang • Tuban • Lamongan • Bojonegoro • Jombang • Probolinggo
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                  'Halo Bu Hanifa, saya ingin tanya info pengiriman scaffolding untuk proyek di luar 5 kota utama Jawa Timur.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>Konsultasi Proyek Luar Kota</span>
                <ArrowRight className="w-4 h-4 transition-transform hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Guarantee */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
              Kapasitas Armada Logistik
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Pengiriman Tepat Waktu Langsung ke Titik Proyek
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Kami mengoperasikan armada mandiri dari pickup ringan hingga fuso tronton untuk menjamin ketersediaan material di site proyek Anda tanpa risiko keterlambatan pekerjaan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm mb-1">Pickup Express (L300)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pengiriman darurat same-day untuk penambahan komponen mendadak (1-2 jam tiba di lokasi proyek).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm mb-1">Colt Diesel Double (CDD)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kapasitas angkut 100 s/d 300 set scaffolding lengkap untuk kebutuhan proyek skala menengah.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm mb-1">Fuso & Tronton Drop</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mobilisasi massal hingga ribuan set perancah untuk konstruksi pabrik, smelter, dan gedung tinggi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-950 text-sm mb-1">SOP Bongkar Muat K3</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disertai helper logistik terlatih, Surat Jalan resmi, dan Berita Acara Serah Terima (BAST).
              </p>
            </div>
          </div>

          {/* Hotline Dispatch CTA Card */}
          <div className="bg-slate-950 text-white p-8 sm:p-10 rounded-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold block">
                  Jadwal Pengiriman Proyek
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Butuh Pengiriman Scaffolding Hari Ini?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Hubungi hotline Bu Hanifa untuk mengecek ketersediaan slot armada terdekat dan estimasi jam tiba di lokasi proyek Anda.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Same-day Surabaya & Sidoarjo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pengiriman malam hari ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Helper bongkar muat aman</span>
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide rounded-full transition shadow-md shadow-orange-950/40 text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Cek Jadwal Armada ({COMPANY_INFO.whatsappHanifa.formatted})</span>
                </a>
                <Link
                  href="/kalkulator"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide rounded-full transition text-center"
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
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
              FAQ Distribusi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Pertanyaan Umum Seputar Pengiriman
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Informasi teknis seputar waktu pemesanan, ongkir, dan ketentuan bongkar muat di lokasi site proyek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2">
                Bagaimana cara menghitung ongkos kirim ke proyek saya?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ongkir dihitung berdasarkan jarak tempuh dari hub gudang terdekat (Rungkut Surabaya atau Buduran Sidoarjo) dan jenis armada yang dibutuhkan. Untuk sewa volume besar atau durasi proyek di atas 3 bulan, kami sediakan skema subsidi ongkir.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2">
                Apakah bisa pengiriman di hari yang sama (Same-Day)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bisa. Untuk area Surabaya dan Sidoarjo, pemesanan yang terkonfirmasi administrasi sebelum pukul 13.00 WIB dapat dikirimkan di hari yang sama menggunakan armada pickup atau truk ready stock.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2">
                Apakah pengiriman sudah termasuk helper bongkar muat?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ya, setiap pengiriman armada MSC didampingi helper logistik terlatih untuk menurunkan dan menata komponen perancah secara aman di area drop site proyek Anda.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2">
                Bagaimana jika proyek memiliki jam larangan truk siang hari?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kami melayani pengiriman malam hari atau dini hari (20.00 – 05.00 WIB) sesuai jadwal izin masuk kendaraan berat di lokasi proyek Anda, tanpa biaya lembur tambahan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
