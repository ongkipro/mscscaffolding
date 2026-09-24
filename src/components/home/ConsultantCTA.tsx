import React from 'react';
import Image from 'next/image';
import { MessageSquare, CheckCircle2, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function ConsultantCTA() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Consultant Portrait - Clean Floating Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/proyek/msc_hanifa_portrait_1789954872715.jpg"
                alt="Bu Hanifa Lead Consultant Scaffolding MSC"
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-sm font-bold text-slate-950">Bu Hanifa</div>
                <div className="text-xs text-orange-600 font-semibold">
                  Lead Scaffolding Consultant
                </div>
              </div>
            </div>
          </div>

          {/* Content & Actions - Inspirasi SolusiBangunan */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
                Konsultasi Teknis
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                Konsultasi Steger Proyek
              </h2>
            </div>

            {/* Concise Highlights */}
            <div className="space-y-3 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Respon cepat via WhatsApp langsung dengan konsultan</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Gratis perhitungan modul & Bill of Quantity (BOQ) proyek</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Jadwal pengiriman fleksibel same-day dari 2 gudang</span>
              </div>
            </div>

            {/* Single Pill Primary Action */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                  'Halo Bu Hanifa, saya ingin konsultasi kebutuhan sewa scaffolding untuk proyek.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-orange-950/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Bu Hanifa</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
