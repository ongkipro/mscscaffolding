import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex p-4 bg-orange-50 rounded-2xl text-orange-600">
          <FileQuestion className="w-12 h-12" />
        </div>
        <div>
          <div className="text-4xl font-extrabold text-slate-950 font-mono tracking-tight">404</div>
          <h1 className="text-xl font-bold text-slate-900 mt-2">Halaman Tidak Ditemukan</h1>
          <p className="text-sm text-slate-600 mt-2">
            Halaman atau rute scaffolding yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-slate-950 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/produk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Lihat Katalog Produk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
