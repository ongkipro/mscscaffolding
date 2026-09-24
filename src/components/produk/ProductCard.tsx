'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/produk/${product.slug}`}
      className="group block"
    >
      {/* Seamless Product Image - Zero Box / Border / Frame */}
      <div className="relative w-full aspect-square overflow-hidden mb-3 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title & Price */}
      <div className="space-y-1 text-center">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="text-sm font-bold text-slate-950">
          Rp {product.rentalPriceMonthly.toLocaleString('id-ID')}
          <span className="text-xs font-normal text-slate-500"> / bulan</span>
        </div>
        <div className="pt-0.5">
          <span className="text-xs text-orange-600 font-medium group-hover:underline inline-flex items-center gap-1">
            Detail →
          </span>
        </div>
      </div>
    </Link>
  );
}
