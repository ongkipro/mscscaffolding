import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Warehouse,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  FileSpreadsheet,
  Building,
} from 'lucide-react';
import { getAllLocations, getLocationBySlug } from '@/services/locationService';
import { COMPANY_INFO } from '@/data/company';

interface Props {
  params: Promise<{ kota: string }>;
}

export async function generateStaticParams() {
  const locations = await getAllLocations();
  return locations.map((loc) => ({
    kota: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kota } = await params;
  const location = await getLocationBySlug(kota);

  if (!location) {
    return {
      title: 'Area Layanan Tidak Ditemukan | MSC Scaffolding',
    };
  }

  return {
    title: `Sewa & Jual Scaffolding ${location.city} — Siap Kirim ${location.leadTimeHours} Pipa 1.8mm SNI`,
    description: `Pusat rental steger scaffolding galvanis pipa 1.8mm di ${location.city}. Jangkauan kawasan industri ${location.industrialEstates.slice(0, 2).join(', ')}. Kirim dari ${location.warehouseHub}.`,
    openGraph: {
      title: `Sewa Scaffolding ${location.city} Murah & Cepat | MSC Scaffolding`,
      description: location.description,
      url: `https://www.mscscaffolding.com/area-layanan/${location.slug}`,
    },
  };
}

export default async function LocalizedServiceAreaPage({ params }: Props) {
  const { kota } = await params;
  const location = await getLocationBySlug(kota);

  if (!location) {
    notFound();
  }

  const allLocations = await getAllLocations();
  const otherLocations = allLocations.filter((l) => l.slug !== kota);

  const localServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Sewa & Jual Scaffolding ${location.city}`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.legalName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.city,
        addressRegion: 'Jawa Timur',
        addressCountry: 'ID',
      },
      telephone: COMPANY_INFO.officePhone,
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
    },
    description: location.description,
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />

      {/* Clean Unified Page Header */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/area-layanan" className="hover:text-orange-600 transition-colors">Area Layanan</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">{location.city}</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Sewa & Jual Scaffolding {location.city}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {location.description}
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                  `Halo Bu Hanifa, saya ingin pesan sewa scaffolding untuk lokasi proyek di ${location.city}. Mohon info armada kirim.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wide transition shadow-lg shadow-orange-950/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Sewa di {location.city} via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics SLA Bar */}
      <section className="py-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-400 text-[11px] font-mono uppercase">Estimasi Waktu Tiba</div>
                <div className="font-bold text-white font-mono">{location.leadTimeHours}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-400 text-[11px] font-mono uppercase">Radius Jarak Tempuh</div>
                <div className="font-bold text-white font-mono">{location.distanceKm}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                <Warehouse className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-400 text-[11px] font-mono uppercase">Hub Keberangkatan</div>
                <div className="font-bold text-white text-xs sm:text-sm truncate">{location.warehouseHub}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Estates Covered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded inline-block">
                Cakupan Zona Konstruksi
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                Kawasan Industri & Proyek di {location.city} yang Kami Layani
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Armada pengiriman kami secara rutin menjangkau area proyek komersial, pabrik industri, perumahan, hingga pemeliharaan fasilitas umum di seluruh penjuru {location.city}:
              </p>

              <div className="space-y-2 pt-2">
                {location.industrialEstates.map((estate, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-2.5 px-3.5 rounded-lg bg-slate-50/80 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{estate}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50/70 p-8 sm:p-10 rounded-3xl">
              <div className="text-xs font-mono text-orange-600 font-bold mb-2 uppercase">
                KEUNGGULAN MSC DI {location.city.toUpperCase()}
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-4">
                Mengapa Kontraktor di {location.city} Memilih Kami?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Pipa 1.8mm SNI Terjamin:</strong>
                    Komponen dijamin kokoh, lolos uji beban SWL 1.500 kg, dan aman untuk inspeksi safety HSE pabrik/gedung.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Stok Melimpah di 2 Gudang Jatim:</strong>
                    Tidak ada kekhawatiran stok kurang di tengah proyek berkat dukungan ribuan set di Rungkut & Buduran.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Administrasi & Faktur Pajak Siap:</strong>
                    Mendukung pembayaran termin untuk kontrak jangka panjang kontraktor, e-Faktur PPN 11%, dan dokumen SPH resmi.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                    `Halo Kantor Tender MSC, mohon penawaran harga pengadaan scaffolding proyek di ${location.city}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-950 hover:bg-orange-600 active:scale-[0.98] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition shadow-xs"
                >
                  <FileSpreadsheet className="w-4 h-4 text-orange-400" />
                  <span>Minta Surat Penawaran Harga Proyek {location.city}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Rates Snapshot */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
              Tarif Sewa Wilayah {location.city}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Biaya Sewa Scaffolding Wilayah {location.city}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Tarif sewa bulanan kompetitif dengan kualitas pipa terjamin tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/80 hover:bg-white p-6 rounded-2xl transition-all">
              <div className="text-xs text-slate-400 font-mono">1 Set Fasad T170</div>
              <div className="text-2xl font-bold font-mono text-orange-600 my-2">Rp 45.000</div>
              <div className="text-[11px] text-slate-500">/ set / bulan (2 Frame + 2 Cross + 4 Pin)</div>
            </div>

            <div className="bg-white/80 hover:bg-white p-6 rounded-2xl transition-all">
              <div className="text-xs text-slate-400 font-mono">1 Set Headroom T190</div>
              <div className="text-2xl font-bold font-mono text-orange-600 my-2">Rp 50.000</div>
              <div className="text-[11px] text-slate-500">/ set / bulan (Gawang Lebih Tinggi)</div>
            </div>

            <div className="bg-white/80 hover:bg-white p-6 rounded-2xl transition-all">
              <div className="text-xs text-slate-400 font-mono">Catwalk Metal Plank</div>
              <div className="text-2xl font-bold font-mono text-slate-950 my-2">Rp 30.000</div>
              <div className="text-[11px] text-slate-500">/ unit / bulan (Lantai Kerja K3 Anti-Slip)</div>
            </div>

            <div className="bg-white/80 hover:bg-white p-6 rounded-2xl transition-all">
              <div className="text-xs text-slate-400 font-mono">Tangga Bordes Baja</div>
              <div className="text-2xl font-bold font-mono text-slate-950 my-2">Rp 35.000</div>
              <div className="text-[11px] text-slate-500">/ unit / bulan (Akses 7 Trap Kokoh)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Links to Other Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h3 className="text-lg font-bold text-slate-950">
              Layanan Scaffolding di Kota Lainnya di Jawa Timur
            </h3>
            <p className="text-slate-500 text-xs mt-1">
              Jelajahi jangkauan armada kami di koridor industri sekitarnya:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/area-layanan/${other.slug}`}
                className="p-5 bg-slate-50/70 hover:bg-slate-50 rounded-2xl transition-all group"
              >
                <div className="font-bold text-slate-900 group-hover:text-orange-600 text-sm transition-colors">
                  {other.city}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 font-mono">
                  <span>{other.leadTimeHours}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
