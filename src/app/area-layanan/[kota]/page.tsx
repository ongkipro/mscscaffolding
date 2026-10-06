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
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ORGANIZATION_ID, SITE_URL, pageMetadata } from '@/lib/seo';
import type { ServiceArea } from '@/types';

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
      title: 'Area Layanan Tidak Ditemukan',
      robots: { index: false },
    };
  }

  return pageMetadata({
    title: `Sewa & Jual Scaffolding ${location.city}`,
    description: `Sewa & jual scaffolding ${location.city} mulai Rp 27.000/set/bln. Estimasi tiba ${location.leadTimeHours} ke ${location.industrialEstates[0]} & sekitarnya. Pipa 1.8mm SNI.`,
    path: `/area-layanan/${location.slug}`,
  });
}

function cityFaqs(location: ServiceArea) {
  return [
    {
      q: `Berapa lama pengiriman scaffolding ke ${location.city}?`,
      a: `Estimasi tiba ${location.leadTimeHours} setelah konfirmasi pesanan (jarak tempuh ${location.distanceKm.replace(/^Radius /, '')}), dikirim dari ${location.warehouseHub}.`,
    },
    {
      q: `Kawasan mana saja di ${location.city} yang dilayani?`,
      a: `Armada kami rutin mengirim ke ${location.industrialEstates.join(', ')}, serta proyek perumahan, ruko, dan gedung di seluruh ${location.city}.`,
    },
    {
      q: `Berapa harga sewa scaffolding di ${location.city}?`,
      a: `Sewa 1 set scaffolding T170 mulai Rp 27.000 per bulan dan set T190 Rp 29.000 per bulan, belum termasuk PPN 11% dan ongkos kirim. Harga final tercantum di Surat Penawaran Harga (SPH).`,
    },
    {
      q: `Apakah bisa membeli scaffolding baru untuk proyek di ${location.city}?`,
      a: `Bisa. Kami menjual unit baru dan rekondisi, lengkap dengan SPH resmi dan faktur pajak PPN untuk kebutuhan tender maupun kontraktor.`,
    },
  ];
}

export default async function LocalizedServiceAreaPage({ params }: Props) {
  const { kota } = await params;
  const location = await getLocationBySlug(kota);

  if (!location) {
    notFound();
  }

  const allLocations = await getAllLocations();
  const otherLocations = allLocations.filter((l) => l.slug !== kota);
  const faqs = cityFaqs(location);

  const localServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Sewa & Jual Scaffolding ${location.city}`,
    serviceType: 'Sewa dan Jual Scaffolding',
    url: `${SITE_URL}/area-layanan/${location.slug}`,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: { '@type': 'State', name: 'Jawa Timur' },
    },
    description: location.description,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Clean Unified Page Header */}
      <section className="bg-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Area Layanan', href: '/area-layanan' }, { name: location.city }]} />

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Sewa & Jual Scaffolding {location.city}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {location.description}
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
                  `Halo Tim MSC Scaffolding, saya ingin pesan sewa scaffolding untuk lokasi proyek di ${location.city}. Mohon info armada kirim.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wide transition shadow-lg shadow-orange-950/20 text-center"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Konsultasi Sewa di {location.city} via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics SLA Bar */}
      <section className="py-6 bg-slate-900 text-white">
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-orange-700 font-semibold mb-2 block">
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

            <div className="lg:col-span-6 bg-slate-50/70 p-6 sm:p-10 rounded-2xl">
              <div className="text-xs uppercase tracking-widest text-orange-700 font-semibold mb-2">
                Keunggulan Layanan di {location.city}
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
                    Tidak ada kekhawatiran stok kurang di tengah proyek berkat dukungan ribuan set di Rungkut & Gedangan.
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
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-950 hover:bg-orange-600 active:scale-[0.98] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition shadow-xs text-center"
                >
                  <FileSpreadsheet className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Minta Surat Penawaran (SPH) {location.city}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Rates Snapshot */}
      <section className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-widest text-orange-700 font-semibold mb-2 block">
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
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-orange-500 hover:shadow-xs transition-all">
              <div className="text-xs text-slate-500 font-medium">1 Set Fasad T170</div>
              <div className="text-2xl font-bold font-mono text-orange-600 my-2">Rp 27.000</div>
              <div className="text-xs text-slate-500">/ set / bulan (2 Frame + 2 Cross + 4 Pin)</div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-orange-500 hover:shadow-xs transition-all">
              <div className="text-xs text-slate-500 font-medium">1 Set Headroom T190</div>
              <div className="text-2xl font-bold font-mono text-orange-600 my-2">Rp 29.000</div>
              <div className="text-xs text-slate-500">/ set / bulan (Gawang Lebih Tinggi)</div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-orange-500 hover:shadow-xs transition-all">
              <div className="text-xs text-slate-500 font-medium">Catwalk Metal Plank</div>
              <div className="text-2xl font-bold font-mono text-slate-950 my-2">Rp 30.000</div>
              <div className="text-xs text-slate-500">/ unit / bulan (Lantai Kerja K3 Anti-Slip)</div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-orange-500 hover:shadow-xs transition-all">
              <div className="text-xs text-slate-500 font-medium">Tangga Bordes Baja T170</div>
              <div className="text-2xl font-bold font-mono text-slate-950 my-2">Rp 50.000</div>
              <div className="text-xs text-slate-500">/ unit / bulan (Akses Trap Kokoh K3)</div>
            </div>
          </div>
        </div>
      </section>

      {/* City FAQ (mirrors FAQPage JSON-LD above) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-orange-700 font-semibold mb-2 block">
            FAQ {location.city}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6">
            Pertanyaan Seputar Scaffolding di {location.city}
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
        </div>
      </section>

      {/* Cross Links to Other Cities */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-lg font-bold text-slate-950">
              Layanan Scaffolding di Kota Lainnya di Jawa Timur
            </h2>
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
