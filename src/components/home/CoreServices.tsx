import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Headphones, FileText, Truck, ShieldCheck } from 'lucide-react';

export default function CoreServices() {
  const services = [
    {
      title: 'Sewa Scaffolding & Steger',
      image: '/images/proyek/msc_service_sewa_clean.jpg',
      link: '/sewa-scaffolding',
      ctaText: 'Lihat Sewa',
    },
    {
      title: 'Jual Unit Baru & Rekondisi',
      image: '/images/proyek/msc_service_jual_clean.jpg',
      link: '/jual-scaffolding',
      ctaText: 'Lihat Jual',
    },
    {
      title: 'Heavy-Duty Shoring Bekisting',
      image: '/images/proyek/msc_service_shoring_clean.jpg',
      link: '/produk',
      ctaText: 'Lihat Shoring',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Konsultasi Kebutuhan',
      desc: 'Estimasi modul via WhatsApp',
      icon: Headphones,
    },
    {
      step: '02',
      title: 'Penawaran SPH Resmi',
      desc: 'SPH resmi & faktur PKP',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Pengiriman Same-Day',
      desc: 'Armada langsung dari gudang',
      icon: Truck,
    },
    {
      step: '04',
      title: 'Siap Pakai & Garansi',
      desc: 'Lolos uji K3 & garansi tukar',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Inspirasi SolusiBangunan */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
            Layanan Utama
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
            Layanan Perancah
          </h2>
        </div>

        {/* 3 Service Cards - Clean Minimalist (Inspirasi SolusiBangunan) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="group block"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-600 flex items-center justify-center text-slate-600 group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tahapan Layanan Kami - 4 Langkah Ringkas */}
        <div className="mt-20 pt-14 border-t border-slate-100">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-1.5 block">
              Alur Kerja
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Alur Layanan
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100/80 space-y-3 hover:border-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-orange-600">
                      {st.step}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-orange-600 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">
                      {st.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
