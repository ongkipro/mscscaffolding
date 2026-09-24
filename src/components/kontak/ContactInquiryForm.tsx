'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Building,
  User,
  Phone,
  MapPin,
  ClipboardList,
  RotateCcw,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface FormState {
  nama: string;
  perusahaan: string;
  whatsapp: string;
  kota: string;
  layanan: string;
  estimasiJumlah: string;
  catatan: string;
}

interface FormErrors {
  nama?: string;
  whatsapp?: string;
  kota?: string;
  layanan?: string;
}

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState<FormState>({
    nama: '',
    perusahaan: '',
    whatsapp: '',
    kota: 'Surabaya',
    layanan: 'Sewa Scaffolding Bulanan',
    estimasiJumlah: '',
    catatan: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Validation function
  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.nama.trim()) {
      errs.nama = 'Nama lengkap wajib diisi.';
    } else if (formData.nama.trim().length < 3) {
      errs.nama = 'Nama minimal 3 karakter.';
    }

    const cleanWA = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Nomor WhatsApp wajib diisi.';
    } else if (cleanWA.length < 9 || cleanWA.length > 15) {
      errs.whatsapp = 'Nomor WhatsApp tidak valid (contoh: 08123456789).';
    }

    if (!formData.kota) {
      errs.kota = 'Pilih kota lokasi proyek.';
    }

    if (!formData.layanan) {
      errs.layanan = 'Pilih jenis layanan.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error clearing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const generateWhatsAppMessage = (): string => {
    return `PERMINTAAN PENAWARAN HARGA (SPH) — MSC SCAFFOLDING
Nama: ${formData.nama}
Perusahaan / Mandor: ${formData.perusahaan || '-'}
Nomor WhatsApp: ${formData.whatsapp}
Lokasi Proyek: ${formData.kota}
Layanan: ${formData.layanan}
Estimasi Kebutuhan: ${formData.estimasiJumlah || 'Belum dihitung, mohon dibantu estimasi'}
Catatan Proyek: ${formData.catatan || '-'}

Mohon informasi ketersediaan stok di gudang dan penawaran harga resmi. Terima kasih.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleDirectWhatsApp = () => {
    if (!validate()) return;
    const msg = encodeURIComponent(generateWhatsAppMessage());
    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${msg}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleReset = () => {
    setFormData({
      nama: '',
      perusahaan: '',
      whatsapp: '',
      kota: 'Surabaya',
      layanan: 'Sewa Scaffolding Bulanan',
      estimasiJumlah: '',
      catatan: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-slate-50/70 p-8 sm:p-12 rounded-3xl">
      {/* Form Header */}
      <div className="pb-4 mb-8">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 mb-1 block">
          Formulir Penawaran Cepat
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
          Ajukan Permintaan Harga & Konsultasi Teknis
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Lengkapi detail proyek Anda. Tim kami akan menyiapkan estimasi unit dan Surat Penawaran Harga (SPH) dalam 5-10 menit.
        </p>
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-950">
              Permintaan Anda Berhasil Diterima!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
              Terima kasih, <strong>{formData.nama}</strong>. Data kebutuhan steger proyek Anda di{' '}
              <strong>{formData.kota}</strong> telah tercatat.
            </p>
          </div>

          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                generateWhatsAppMessage()
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs rounded-md shadow-sm transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Buka Chat WhatsApp Sekarang</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-md transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Kirim Permintaan Lain</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Row 1: Nama & Perusahaan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nama"
                className="block text-xs font-semibold text-slate-900 mb-1.5"
              >
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Contoh: Bpk. Bambang Sutrisno"
                  className={`w-full px-3.5 py-2.5 rounded-md text-sm border bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 ${
                    errors.nama
                      ? 'border-red-400 focus:ring-red-200 focus:border-red-500'
                      : 'border-slate-200 hover:border-slate-300 focus:ring-orange-500/20 focus:border-orange-500'
                  }`}
                />
              </div>
              {errors.nama && (
                <div className="flex items-center gap-1 text-[11px] text-red-600 mt-1">
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  <span>{errors.nama}</span>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="perusahaan"
                className="block text-xs font-semibold text-slate-900 mb-1.5"
              >
                Nama Perusahaan / Kontraktor / Mandor
              </label>
              <input
                type="text"
                id="perusahaan"
                name="perusahaan"
                value={formData.perusahaan}
                onChange={handleChange}
                placeholder="Contoh: PT Bangun Cipta / Mandor Ruko"
                className="w-full px-3.5 py-2.5 rounded-md text-sm border border-slate-200 hover:border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Row 2: WhatsApp & Kota */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="whatsapp"
                className="block text-xs font-semibold text-slate-900 mb-1.5"
              >
                Nomor WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Contoh: 081234567890"
                className={`w-full px-3.5 py-2.5 rounded-md text-sm border bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 ${
                  errors.whatsapp
                    ? 'border-red-400 focus:ring-red-200 focus:border-red-500'
                    : 'border-slate-200 hover:border-slate-300 focus:ring-orange-500/20 focus:border-orange-500'
                }`}
              />
              {errors.whatsapp && (
                <div className="flex items-center gap-1 text-[11px] text-red-600 mt-1">
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  <span>{errors.whatsapp}</span>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="kota"
                className="block text-xs font-semibold text-slate-900 mb-1.5"
              >
                Lokasi Proyek / Kota <span className="text-red-500">*</span>
              </label>
              <select
                id="kota"
                name="kota"
                value={formData.kota}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-md text-sm border border-slate-200 hover:border-slate-300 bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
              >
                <option value="Surabaya">Surabaya</option>
                <option value="Sidoarjo">Sidoarjo</option>
                <option value="Gresik">Gresik</option>
                <option value="Pasuruan">Pasuruan</option>
                <option value="Mojokerto">Mojokerto</option>
                <option value="Wilayah Lain Jawa Timur">Wilayah Lain Jawa Timur</option>
              </select>
            </div>
          </div>

          {/* Row 3: Layanan & Estimasi Kebutuhan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="layanan"
                className="block text-xs font-semibold text-slate-900 mb-1.5"
              >
                Jenis Layanan Yang Dibutuhkan <span className="text-red-500">*</span>
              </label>
              <select
                id="layanan"
                name="layanan"
                value={formData.layanan}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-md text-sm border border-slate-200 hover:border-slate-300 bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
              >
                <option value="Sewa Scaffolding Bulanan">Sewa Scaffolding Bulanan</option>
                <option value="Beli Scaffolding Baru SNI 1.8mm">Beli Scaffolding Baru SNI 1.8mm</option>
                <option value="Beli Unit Rekondisi Grade A">Beli Unit Rekondisi Grade A</option>
                <option value="Heavy Duty Shoring Cor Dak">Heavy Duty Shoring Cor Dak</option>
                <option value="Konsultasi Estimasi BOQ Teknis">Konsultasi Estimasi BOQ Teknis</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="estimasiJumlah"
                className="block text-xs font-semibold text-slate-900 mb-1.5"
              >
                Perkiraan Jumlah Set / Durasi
              </label>
              <input
                type="text"
                id="estimasiJumlah"
                name="estimasiJumlah"
                value={formData.estimasiJumlah}
                onChange={handleChange}
                placeholder="Contoh: 20 set selama 2 bulan"
                className="w-full px-3.5 py-2.5 rounded-md text-sm border border-slate-200 hover:border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Row 4: Catatan / Keterangan */}
          <div>
            <label
              htmlFor="catatan"
              className="block text-xs font-semibold text-slate-900 mb-1.5"
            >
              Catatan Tambahan (Dimensi / Jadwal Kirim / Kebutuhan Aksesoris)
            </label>
            <textarea
              id="catatan"
              name="catatan"
              rows={3}
              value={formData.catatan}
              onChange={handleChange}
              placeholder="Contoh: Butuh catwalk metal plank 10 pcs dan jack base, rencana kirim hari Kamis pagi ke area Rungkut Industri."
              className="w-full px-3.5 py-2.5 rounded-md text-sm border border-slate-200 hover:border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-slate-950 hover:bg-slate-800 active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider transition-all disabled:opacity-50 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Memproses...' : 'Kirim Permintaan Penawaran'}</span>
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Kirim Cepat via WhatsApp</span>
            </button>
          </div>

          <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>Respon WhatsApp biasanya dalam 5 menit pada jam kerja (07.30 - 17.00 WIB).</span>
          </div>
        </form>
      )}
    </div>
  );
}
