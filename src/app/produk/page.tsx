import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Download } from 'lucide-react';
import { getAllProducts, getProductCategories } from '@/services/productService';
import ProductCatalogClient from '@/components/produk/ProductCatalogClient';

export const metadata: Metadata = {
  title: 'Katalog Scaffolding Galvanis SNI 1.8mm (15 Item Lengkap)',
  description: 'Daftar lengkap 15 komponen scaffolding steger galvanis standar K3 Permenakertrans: Main Frame, Catwalk, Tangga Bordes, U-Head, Jack Base, Pipe Support. Stok ready ribuan unit.',
  openGraph: {
    title: 'Katalog 15 Komponen Scaffolding Standar SNI 1.8mm | MSC Scaffolding',
    description: 'Pusat sewa & jual komponen perancah steger lengkap di Surabaya & Sidoarjo.',
    url: 'https://www.mscscaffolding.com/produk',
  },
};

export default async function ProductCatalogPage() {
  const products = await getAllProducts();
  const categories = await getProductCategories();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((prod, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://www.mscscaffolding.com/produk/${prod.slug}`,
      name: prod.name,
      image: `https://www.mscscaffolding.com${prod.image}`,
    })),
  };

  return (
    <div className="py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Katalog Produk</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="max-w-3xl space-y-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
              Katalog Scaffolding & Komponen
            </h1>
            <p className="text-sm text-slate-500">
              Pilihan set perancah pipa 1.8mm SNI dan aksesoris struktur ready stock Surabaya & Sidoarjo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/628132562024?text=Halo%20Tim%20Tender%20MSC,%20mohon%20kirimkan%20PDF%20Company%20Profile%20dan%20Daftar%20Harga%20Katalog%20Terbaru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>Price List PDF</span>
            </a>
          </div>
        </div>

        {/* Interactive Client Catalog with Search & Filter */}
        <ProductCatalogClient
          initialProducts={products}
          categories={categories}
        />
      </div>
    </div>
  );
}
