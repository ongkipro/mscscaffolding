'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, X } from 'lucide-react';
import { Product, ProductCategory, CategorySlug } from '@/types';
import ProductCard from './ProductCard';
import ProductQuickSpecModal from './ProductQuickSpecModal';

interface ProductCatalogClientProps {
  initialProducts: Product[];
  categories: ProductCategory[];
}

export default function ProductCatalogClient({
  initialProducts,
  categories,
}: ProductCatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug>('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === 'semua' || product.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.dimensions.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.pipeThickness.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Clean Borderless Search & Category Filters */}
      <div className="space-y-4">
        {/* Search Input - 16px font-size prevents mobile auto-zoom */}
        <div className="relative max-w-xl">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari komponen scaffolding..."
            className="w-full pl-12 pr-12 py-3 rounded-full bg-slate-100 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all shadow-2xs"
            aria-label="Cari komponen scaffolding"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-200 active:scale-90 transition-all flex items-center justify-center"
              aria-label="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Tabs - Sleek Borderless Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 active:scale-95'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Counter Info */}
        <div className="text-xs font-mono text-slate-500 pt-1 flex flex-wrap items-center justify-between gap-2">
          <span>{filteredProducts.length} dari {initialProducts.length} komponen</span>
          {selectedCategory !== 'semua' && (
            <span className="text-orange-600 font-bold">Kategori: {categories.find(c => c.slug === selectedCategory)?.name}</span>
          )}
        </div>
      </div>

      {/* Products Grid - Borderless Airy Grid (2-Cols Mobile, 3-Cols Desktop) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
          <Layers className="w-12 h-12 text-slate-400 mx-auto" />
          <div className="space-y-1.5">
            <h4 className="text-base sm:text-lg font-bold text-slate-800">
              Tidak Ada Komponen yang Sesuai
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Tidak ditemukan produk dengan kata kunci &quot;{searchQuery}&quot;. Coba gunakan kata kunci lain atau reset filter.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('semua');
            }}
            className="px-5 py-2.5 bg-slate-950 hover:bg-orange-600 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-full transition-all shadow-sm"
          >
            Reset Semua Filter
          </button>
        </div>
      )}

      {/* Quick Spec Modal */}
      <ProductQuickSpecModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </div>
  );
}
