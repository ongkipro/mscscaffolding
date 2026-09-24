'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Product } from '@/types';
import { COMPANY_INFO } from '@/data/company';

interface ProductQuickSpecModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductQuickSpecModal({ product, onClose }: ProductQuickSpecModalProps) {
  if (!product) return null;

  const waText = encodeURIComponent(
    `Halo Bu Hanifa, saya sedang melihat ${product.name} (SWL: ${product.swlKg} kg, Tebal: ${product.pipeThickness}). Mohon info penawaran sewa & beli.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider font-bold">
              Spesifikasi Teknis Cepat
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image - Clean Pure White (Zero Box/Frame) */}
            <div className="relative w-full aspect-[4/3] bg-white overflow-hidden flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain p-2"
              />
            </div>

            {/* Quick Pricing & Specs Summary */}
            <div className="space-y-3">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[10px] font-mono font-medium uppercase tracking-wider">
                {product.pipeThickness}
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-500 uppercase">Tarif Sewa</div>
                <div className="text-xl font-extrabold text-slate-950 font-mono">
                  Rp {product.rentalPriceMonthly.toLocaleString('id-ID')}
                  <span className="text-xs font-normal text-slate-500"> / set / bulan</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-500 uppercase">Harga Beli Baru SNI</div>
                <div className="text-base font-bold text-slate-800 font-mono">
                  Rp {product.purchasePriceNew.toLocaleString('id-ID')}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <div className="px-2.5 py-1 rounded bg-slate-100 text-slate-800">
                  SWL: <span className="font-bold">{product.swlKg} kg</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-slate-100 text-slate-800">
                  Berat: <span className="font-bold">{product.weightKg} kg</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>K3 Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-950 uppercase tracking-wider">
              Deskripsi Teknis
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Detailed Specs Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-950 uppercase tracking-wider">
              Tabel Parameter Pengujian
            </h4>
            <div className="rounded-2xl overflow-hidden border border-slate-100">
              <table className="w-full text-xs text-left">
                <tbody>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <td className="p-2.5 font-bold text-slate-700 w-1/2">Dimensi Fisik</td>
                    <td className="p-2.5 text-slate-900 font-mono">{product.dimensions}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-2.5 font-bold text-slate-700">Material Bahan</td>
                    <td className="p-2.5 text-slate-900">{product.material}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <td className="p-2.5 font-bold text-slate-700">Finishing Perlindungan</td>
                    <td className="p-2.5 text-slate-900">{product.finish}</td>
                  </tr>
                  {product.specs.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'border-b border-slate-100' : 'border-b border-slate-100 bg-slate-50/70'}>
                      <td className="p-2.5 font-bold text-slate-700">{item.label}</td>
                      <td className="p-2.5 text-slate-900 font-mono">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-950 uppercase tracking-wider">
              Keunggulan Mutu MSC
            </h4>
            <div className="space-y-1.5">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/produk/${product.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-orange-600 transition-colors"
          >
            <span>Halaman Detail Lengkap</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
          </Link>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white font-semibold text-xs transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pesan via Bu Hanifa</span>
          </a>
        </div>
      </div>
    </div>
  );
}
