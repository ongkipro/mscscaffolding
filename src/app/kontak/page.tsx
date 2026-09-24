import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Warehouse,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import ContactInquiryForm from '@/components/kontak/ContactInquiryForm';

export const metadata: Metadata = {
  title: 'Hubungi Kami — Kontak & Lokasi Gudang MSC Scaffolding Jawa Timur',
  description: 'Hotline sewa & beli scaffolding pipa 1.8mm SNI di Surabaya & Sidoarjo. Hubungi Bu Hanifa (0822-5766-4755) atau CS Kantor Tender (0813-2562-024). Respons cepat dalam 5 menit.',
  openGraph: {
    title: 'Kontak & Alamat Gudang MSC Scaffolding Surabaya & Sidoarjo',
    description: 'Hotline resmi sewa scaffolding cepat dan tender B2B PT MITRA SOLUSI CAHAYA.',
    url: 'https://www.mscscaffolding.com/kontak',
  },
};

export default function KontakPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Clean Unified Page Header */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Kontak & Lokasi</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-mono font-medium">
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>Konsultasi & Pengadaan Cepat</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Hubungi Tim MSC Scaffolding
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Konsultasikan kebutuhan sewa perancah, pembelian unit baru pipa 1.8mm SNI, atau permintaan Surat Penawaran Harga (SPH) resmi bersama tim spesialis kami.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Direct Hotlines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Bu Hanifa Card */}
            <div className="bg-slate-50/80 p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-white text-orange-800 text-xs font-mono font-bold rounded-full mb-3 shadow-xs">
                  Sewa & Retail
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-1">
                  {COMPANY_INFO.whatsappHanifa.label}
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  {COMPANY_INFO.whatsappHanifa.role}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="w-4 h-4 text-orange-600" />
                    <span className="font-mono font-bold text-lg text-slate-950">
                      {COMPANY_INFO.whatsappHanifa.formatted}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-xs">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Layanan Konsultasi Cepat (07.30 - 21.00 WIB)</span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                  'Halo Bu Hanifa, saya ingin konsultasi sewa scaffolding untuk proyek.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 active:scale-[0.99] text-white font-semibold text-xs uppercase tracking-wider rounded-md shadow-xs transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Bu Hanifa</span>
              </a>
            </div>

            {/* Tender Card */}
            <div className="bg-slate-950 p-8 sm:p-10 rounded-3xl flex flex-col justify-between text-white">
              <div>
                <div className="inline-block px-3 py-1 bg-white/[0.08] text-emerald-400 text-xs font-mono font-bold rounded-full mb-3">
                  Tender & B2B
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {COMPANY_INFO.whatsappTender.label}
                </h2>
                <p className="text-xs text-slate-400 mb-6">
                  {COMPANY_INFO.whatsappTender.role}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono font-bold text-lg">
                      {COMPANY_INFO.whatsappTender.formatted}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                  'Halo Tim Procurement MSC Scaffolding, kami ingin mengajukan penawaran harga tender resmi (SPH).'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.1] hover:bg-white/[0.15] active:scale-[0.99] text-white font-semibold text-xs uppercase tracking-wider rounded-md transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat CS Tender</span>
              </a>
            </div>
          </div>

          {/* Interactive Form Section */}
          <div className="mb-20">
            <ContactInquiryForm />
          </div>

          {/* Warehouses Map Section */}
          <div className="mb-16">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 mb-1 block">
                Kunjungan & Inspeksi Unit
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                Alamat Fisik 2 Hub Gudang Kami
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Anda dipersilakan melakukan inspeksi fisik ketebalan pipa dan kelaikan unit langsung di gudang kami sebelum memutuskan menyewa atau membeli.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {COMPANY_INFO.warehouses.map((wh, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 hover:bg-slate-50 p-8 rounded-3xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                      <Warehouse className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950 text-base">{wh.name}</h3>
                      <span className="text-[11px] text-slate-500 font-mono">Kota {wh.city}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{wh.address}</span>
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={wh.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-950 hover:bg-orange-600 active:scale-[0.98] text-white text-xs font-semibold rounded-md transition shadow-xs"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Buka Google Maps</span>
                    </a>
                    <a
                      href={`https://wa.me/${wh.whatsapp}?text=${encodeURIComponent(
                        `Halo ${wh.name}, saya ingin tanya lokasi gudang dan konfirmasi kunjungan.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-800 text-xs font-medium rounded-md border border-slate-200 transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Telepon Gudang</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Legal Notice */}
          <div className="p-6 bg-slate-950 text-slate-300 rounded-xl border border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div>
              <span className="font-bold text-white block mb-1">
                {COMPANY_INFO.legalName} (Pengusaha Kena Pajak Resmi)
              </span>
              <p className="text-slate-400">
                Penyedia Resmi Perancah Baja Tubular & Shoring Sistem Jawa Timur. NPWP, NIB, & Rekening Giro Perusahaan tersedia untuk verifikasi rekanan.
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-mono text-orange-400 font-bold block">{COMPANY_INFO.operatingHours}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
