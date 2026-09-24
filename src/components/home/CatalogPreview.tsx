import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/services/productService';

export default async function CatalogPreview() {
  const featured = await getFeaturedProducts(6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
              Katalog Produk
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
              Komponen Standar SNI 1.8mm
            </h2>
          </div>

          <Link
            href="/produk"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 hover:border-orange-500 hover:text-orange-600 text-xs font-semibold text-slate-800 transition-all shadow-2xs"
          >
            <span>Katalog Lengkap</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
          </Link>
        </div>

        {/* 6-Grid Products - Ultra Clean Minimalist (Inspirasi SolusiBangunan) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((prod) => (
            <Link
              key={prod.id}
              href={`/produk/${prod.slug}`}
              className="group block"
            >
              {/* Seamless Product Image - Zero Box / Border / Frame */}
              <div className="relative w-full aspect-square overflow-hidden mb-3 flex items-center justify-center">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Price - Pure and Sleek */}
              <div className="space-y-1 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                  {prod.name}
                </h3>
                <div className="text-sm font-bold text-slate-950">
                  Rp {prod.rentalPriceMonthly.toLocaleString('id-ID')}
                  <span className="text-xs font-normal text-slate-500"> / bulan</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
