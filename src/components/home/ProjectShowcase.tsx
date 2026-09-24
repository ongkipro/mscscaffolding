import React from 'react';
import Image from 'next/image';

export default function ProjectShowcase() {
  const photos = [
    {
      title: 'Fasad Gedung Bertingkat Surabaya',
      location: 'Surabaya Pusat',
      image: '/images/proyek/msc_project_facade_hotel.jpg',
    },
    {
      title: 'Pusat Stok Gudang Utama SIER',
      location: 'Kawasan Industri SIER',
      image: '/images/proyek/msc_service_jual_clean.jpg',
    },
    {
      title: 'Shoring Falsework Girder Flyover',
      location: 'Infrastruktur Jawa Timur',
      image: '/images/proyek/msc_project_bridge_flyover.jpg',
    },
    {
      title: 'Maintenance Atrium Mall Surabaya',
      location: 'Komersial & Ritel',
      image: '/images/proyek/msc_project_mall_atrium.jpg',
    },
    {
      title: 'Piping Scaffolding Kilang Kimia',
      location: 'Kawasan Industri Gresik',
      image: '/images/proyek/msc_project_refinery_plant.jpg',
    },
    {
      title: 'Steger Perumahan & Ruko Modern',
      location: 'Sidoarjo Kota',
      image: '/images/proyek/msc_project_housing_cluster.jpg',
    },
    {
      title: 'Mobile Tower Maintenance Pabrik',
      location: 'Pabrik Industri Buduran',
      image: '/images/proyek/msc_project_factory_tower.jpg',
    },
    {
      title: 'Armada Pengiriman Truk Flatbed',
      location: 'Logistik Yard Surabaya',
      image: '/images/proyek/msc_project_loading_yard.jpg',
    },
    {
      title: 'Penopang Shoring Dak Beton Cor',
      location: 'Basement Gedung Komersial',
      image: '/images/proyek/msc_service_shoring_clean.jpg',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
            Proyek Kami
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
            Dokumentasi Proyek
          </h2>
        </div>

        {/* 9-Grid Clean Visual Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[10px] text-orange-400 uppercase tracking-wider font-semibold mb-1.5">
                  {item.location}
                </span>
                <h3 className="text-sm sm:text-base font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
