import React from 'react';
import Image from 'next/image';
import { MessageSquare, CheckCircle2, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function ConsultantCTA() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Consultant Portrait - Clean Floating Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/proyek/msc_hanifa_portrait_1789954872715.webp"
                alt="Bu Hanifa Lead Consultant Scaffolding MSC"
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-sm font-bold text-slate-950">Bu Hanifa</div>
                <div className="text-xs text-orange-700 font-semibold">
                  Lead Scaffolding Consultant
                </div>
              </div>
            </div>
          </div>

          {/* Content & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-orange-700 font-semibold mb-2 block">
                Dukungan Tim Profesional
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                Konsultasi Steger &amp; Estimasi Proyek
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Siap memberikan konsultasi dan solusi terbaik untuk kelancaran pekerjaan di ketinggian.
              </p>
            </div>

            {/* Concise Highlights */}
            <div className="space-y-3 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Respon cepat via WhatsApp Hotline <strong>{COMPANY_INFO.primaryPhone.formatted}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Gratis perhitungan modul &amp; Bill of Quantity (BOQ) presisi tanpa pemborosan</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Pengiriman tepat waktu ke lokasi proyek: Surabaya, Sidoarjo, Pasuruan, Gresik</span>
              </div>
            </div>

            {/* Single Pill Primary Action */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
                  'Halo Tim MSC Scaffolding, saya ingin konsultasi kebutuhan sewa scaffolding dan mendapatkan penawaran terbaik.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-orange-700 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-orange-950/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{COMPANY_INFO.ctaText}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
