import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { K3_STANDARDS } from '@/data/k3Data';

export default function K3Banner() {
  const points = [
    { title: 'Pipa Real 1.8mm SNI', desc: 'Baja tebal tahan tekuk & anti deformasi' },
    { title: 'SWL 1.500 kg / Tiang', desc: 'Daya dukung aman uji tekan laboratorium' },
    { title: 'Protokol Scafftag', desc: 'Inspeksi kelaikan harian Green Tag' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Narrative - Minimalist & Punchy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
              Standar K3 Permenaker
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Standar Keselamatan Kerja Konstruksi
            </h2>

            {/* 3 Clean Horizontal/Grid Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {points.map((pt, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.04] border border-white/5 space-y-1">
                  <div className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                    {pt.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/k3-panduan"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
              >
                <span>Panduan K3 Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Visual & Standards Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Real HSE Inspection Photo */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/proyek/msc_k3_inspection_clean.jpg"
                alt="Inspeksi K3 Scaffolding PT Mitra Solusi Cahaya"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white font-semibold text-[11px]">
                  HSE Green Tag Certified
                </span>
                <span className="text-slate-300 font-medium">
                  SWL 1.500 kg
                </span>
              </div>
            </div>

            {/* Standards Chips */}
            <div className="grid grid-cols-1 gap-2">
              {K3_STANDARDS.map((std) => (
                <div
                  key={std.code}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="text-orange-400 font-bold mr-2">{std.code}</span>
                    <span className="text-slate-200 font-medium">{std.title}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
