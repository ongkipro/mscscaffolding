import React from 'react';
import Image from 'next/image';
import { MapPin, ExternalLink, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function WarehouseShowcase() {
  const warehouses = [
    {
      ...COMPANY_INFO.warehouses[0],
      image: '/images/proyek/msc_service_jual_clean.jpg',
      coverage: 'Surabaya Pusat, Rungkut, Margomulyo, Kenjeran & sekitarnya',
    },
    {
      ...COMPANY_INFO.warehouses[1],
      image: '/images/proyek/msc_logistics_truck_clean.jpg',
      coverage: 'Kab. Sidoarjo, Waru, Berbek, Porong, Mojokerto & Pasuruan',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
            Fasilitas Fisik
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
            Gudang Surabaya & Sidoarjo
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {warehouses.map((wh) => (
            <div
              key={wh.name}
              className="group flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={wh.image}
                    alt={wh.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/10">
                      Depot {wh.city}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                    {wh.name}
                  </h3>
                  
                  <div className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                    <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{wh.address}</span>
                  </div>

                  <div className="text-xs text-slate-500">
                    Jangkauan: <span className="text-slate-800 font-medium">{wh.coverage}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <a
                  href={wh.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${wh.whatsapp}?text=${encodeURIComponent(
                    `Halo ${wh.name}, saya ingin tanya ketersediaan stok scaffolding di gudang.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-950 hover:bg-orange-600 text-white text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
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
  );
}
