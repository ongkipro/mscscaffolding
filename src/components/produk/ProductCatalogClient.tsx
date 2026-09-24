'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers } from 'lucide-react';
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
        {/* Search Input */}
        <div className="relative max-w-xl">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari komponen scaffolding..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-100 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-1.5 py-0.5"
            >
              Clear
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
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
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
        <div className="text-xs font-mono text-slate-400 pt-1 flex items-center justify-between">
          <span>{filteredProducts.length} dari {initialProducts.length} komponen</span>
          {selectedCategory !== 'semua' && (
            <span className="text-orange-600 font-bold">Kategori: {categories.find(c => c.slug === selectedCategory)?.name}</span>
          )}
        </div>
      </div>

      {/* Products Grid - Borderless Airy Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
          <Layers className="w-12 h-12 text-slate-400 mx-auto" />
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-800">
              Tidak Ada Komponen yang Sesuai
            </h4>
            <p className="text-xs text-slate-500">
              Tidak ditemukan produk dengan kata kunci &quot;{searchQuery}&quot;. Coba gunakan kata kunci lain atau reset filter.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('semua');
            }}
            className="px-4 py-2 bg-slate-950 hover:bg-orange-600 text-white text-xs font-bold rounded-md transition-colors"
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
