'use client';

import React, { useState, useMemo } from 'react';
import { RotateCcw, CheckCircle2, Copy, MessageSquare, Ruler, Layers, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import {
  estimateScaffolding,
  MAX_HEIGHT_M,
  MAX_LENGTH_M,
  type EstimatePrices,
  type WorkType,
} from '@/utils/scaffoldingEstimate';

const DEFAULT_LENGTH = '10';
const DEFAULT_HEIGHT = '5.1';

// `prices` is built on the server from the product catalogue (see app/kalkulator/page.tsx)
// so the calculator never drifts from the price list and the catalogue is not shipped to the client.
export function ScaffoldingCalculator({ prices }: { prices: EstimatePrices }) {
  // Inputs are kept as raw strings so users can clear and retype; clamping happens in the estimator.
  const [length, setLength] = useState<string>(DEFAULT_LENGTH);
  const [height, setHeight] = useState<string>(DEFAULT_HEIGHT);
  const [workType, setWorkType] = useState<WorkType>('fasad');
  const [durationMonths, setDurationMonths] = useState<number>(1);
  const [selectedCity, setSelectedCity] = useState<string>('Surabaya');
  const [copied, setCopied] = useState<boolean>(false);

  const calc = useMemo(
    () =>
      estimateScaffolding(
        { lengthM: Number(length), heightM: Number(height), workType, durationMonths },
        prices
      ),
    [length, height, workType, durationMonths, prices]
  );

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const { qty } = calc;

  const boqText = useMemo(() => {
    return `ESTIMASI KEBUTUHAN SCAFFOLDING — PT MITRA SOLUSI CAHAYA
Lokasi Proyek: ${selectedCity}
Tipe Pekerjaan: ${workType === 'fasad' ? 'Fasad & Finishing Dinding' : 'Pengecoran Plat Beton / Shoring'}
Dimensi: Panjang ${calc.lengthM}m x Ketinggian ${calc.heightM}m (${calc.bays} Bay x ${calc.tiers} Tingkat)
Durasi Sewa: ${calc.durationMonths} Bulan

RINCIAN ESTIMASI BILL OF QUANTITY (BOQ):
- Main Frame T170: ${qty.mainFrame} Pcs
- Cross Brace 220cm: ${qty.crossBrace} Pcs
- Joint Pin Sambungan: ${qty.jointPin} Pcs
- Catwalk Metal Plank: ${qty.catwalk} Pcs
- Jack Base 60cm: ${qty.jackBase} Pcs
${qty.uHead > 0 ? `- U-Head 60cm: ${qty.uHead} Pcs\n` : ''}${
      qty.pipeSupport > 0 ? `- Pipe Support TS-90: ${qty.pipeSupport} Pcs\n` : ''
    }- Tangga Bordes 170: ${qty.tangga} Unit

Estimasi Biaya Sewa (${calc.durationMonths} Bulan): ${formatIDR(calc.rentTotal)}
Estimasi Pembelian Unit Baru: ${formatIDR(calc.buyNew)}

Mohon konfirmasi ketersediaan armada pengiriman dan penawaran harga resmi (SPH). Terima kasih.`;
  }, [selectedCity, workType, calc, qty]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(boqText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(() => {
        // Clipboard can be blocked (insecure context / permissions); WhatsApp button still works.
        setCopied(false);
      });
  };

  const resetDefaults = () => {
    setLength(DEFAULT_LENGTH);
    setHeight(DEFAULT_HEIGHT);
    setWorkType('fasad');
    setDurationMonths(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
      {/* Top Header - Clean White */}
      <div className="bg-white border-b border-slate-100 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
            Simulasi Kebutuhan Komponen Scaffolding
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Hitung perkiraan jumlah set, komponen struktural, dan biaya sewa atau beli.
          </p>
        </div>

        <button
          onClick={resetDefaults}
          type="button"
          className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-950 transition px-3.5 py-2 rounded-md bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 self-start sm:self-auto font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
          <span>Reset Input</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Work Type */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
              1. Tipe Pekerjaan Konstruksi
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setWorkType('fasad')}
                className={`p-3.5 rounded-lg text-left transition border ${
                  workType === 'fasad'
                    ? 'border-orange-600 bg-orange-50/50 text-slate-950 ring-1 ring-orange-600'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="font-bold text-sm">Fasad & Finishing</div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Pengecatan, pasang bata, ACP, kaca, perbaikan dinding luar.
                </div>
              </button>

              <button
                type="button"
                onClick={() => setWorkType('cor')}
                className={`p-3.5 rounded-lg text-left transition border ${
                  workType === 'cor'
                    ? 'border-orange-600 bg-orange-50/50 text-slate-950 ring-1 ring-orange-600'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="font-bold text-sm">Pengecoran / Shoring</div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Penahan bekisting cor plat lantai, balok beton, tower heavy load.
                </div>
              </button>
            </div>
          </div>

          {/* Length Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="length-input" className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-orange-600" />
                <span>2. Panjang Area Kerja</span>
              </label>
              <div className="flex items-center gap-1">
                <input
                  id="length-input"
                  type="number"
                  min={2}
                  max={MAX_LENGTH_M}
                  step={1}
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-20 text-right font-mono text-[16px] font-bold text-slate-950 bg-slate-100 hover:bg-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 border border-slate-200 px-2.5 py-1.5 rounded-lg transition touch-manipulation"
                  aria-label="Panjang bidang kerja dalam meter"
                />
                <span className="text-xs font-mono text-slate-500 font-bold">m</span>
              </div>
            </div>
            <input
              type="range"
              min={2}
              max={60}
              step={1}
              value={Math.min(60, Math.max(2, Number(length) || 2))}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600 hover:accent-orange-500 transition touch-manipulation"
              aria-label="Slider panjang bidang kerja"
            />
            <div className="flex justify-between text-xs text-slate-500 font-mono mt-1">
              <span>2m</span>
              <span>Konversi: ~{calc.bays} Bay (kolom horizontal)</span>
              <span>60m</span>
            </div>
          </div>

          {/* Height Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="height-input" className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-orange-600" />
                <span>3. Ketinggian Kerja</span>
              </label>
              <div className="flex items-center gap-1">
                <input
                  id="height-input"
                  type="number"
                  min={1.7}
                  max={MAX_HEIGHT_M}
                  step={0.5}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-20 text-right font-mono text-[16px] font-bold text-slate-950 bg-slate-100 hover:bg-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 border border-slate-200 px-2.5 py-1.5 rounded-lg transition touch-manipulation"
                  aria-label="Tinggi bidang kerja dalam meter"
                />
                <span className="text-xs font-mono text-slate-500 font-bold">m</span>
              </div>
            </div>
            <input
              type="range"
              min={1.7}
              max={25}
              step={1.7}
              value={Math.min(25, Math.max(1.7, Number(height) || 1.7))}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600 hover:accent-orange-500 transition touch-manipulation"
              aria-label="Slider tinggi bidang kerja"
            />
            <div className="flex justify-between text-xs text-slate-500 font-mono mt-1">
              <span>1.7m (1 Tingkat)</span>
              <span>Konversi: {calc.tiers} Tingkat Elevasi</span>
              <span>25m</span>
            </div>
          </div>

          {/* Duration & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="duration-select" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                4. Durasi Sewa
              </label>
              <select
                id="duration-select"
                value={durationMonths}
                onChange={(e) => setDurationMonths(Number(e.target.value))}
                className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-[16px] font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer touch-manipulation"
              >
                <option value={1}>1 Bulan</option>
                <option value={2}>2 Bulan</option>
                <option value={3}>3 Bulan</option>
                <option value={6}>6 Bulan (Proyek)</option>
                <option value={12}>12 Bulan (Tender)</option>
              </select>
            </div>

            <div>
              <label htmlFor="city-select" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                5. Kota Pengiriman
              </label>
              <select
                id="city-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-[16px] font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer touch-manipulation"
              >
                <option value="Surabaya">Surabaya</option>
                <option value="Sidoarjo">Sidoarjo</option>
                <option value="Gresik">Gresik</option>
                <option value="Pasuruan">Pasuruan</option>
                <option value="Mojokerto">Mojokerto</option>
              </select>
            </div>
          </div>

          {/* K3 Safety Anchor Notice */}
          {calc.tiers >= 3 && (
            <div className="p-3.5 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-2.5 text-amber-900 text-xs leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Ketentuan K3 Ketinggian ≥ 3 Tingkat:</span> Sesuai
                Permenakertrans 01/1980, perancah dengan elevasi lebih dari 5 meter WAJIB dipasang
                wall tie (pengikat jangkar ke dinding) setiap 3 tier untuk mencegah gaya guling angin.
              </div>
            </div>
          )}
        </div>

        {/* Right Output Column (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-50/70 p-5 sm:p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Hasil Estimasi Bill of Quantity (BOQ)
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-950 mt-0.5">
                  Setara {calc.modules} Modul Scaffolding
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-mono font-bold rounded-full">
                  {calc.bays} Bay × {calc.tiers} Tingkat
                </span>
              </div>
            </div>

            {/* Component Breakdown List (Clean, No Dividing Border Lines) */}
            <div className="space-y-1 mb-6">
              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5">
                <span className="text-slate-600">Main Frame T170 (Pipa 1.8mm Real SNI)</span>
                <span className="font-mono font-bold text-slate-950 shrink-0 ml-2">{qty.mainFrame} Pcs</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5">
                <span className="text-slate-600">Cross Brace 220cm (Pengaku Silang Galvanis)</span>
                <span className="font-mono font-bold text-slate-950 shrink-0 ml-2">{qty.crossBrace} Pcs</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5">
                <span className="text-slate-600">Joint Pin (Sambungan Antar Tingkat)</span>
                <span className="font-mono font-bold text-slate-950 shrink-0 ml-2">{qty.jointPin} Pcs</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5">
                <span className="text-slate-600">Catwalk Metal Plank (Lantai Kerja K3 Anti-Slip)</span>
                <span className="font-mono font-bold text-slate-950 shrink-0 ml-2">{qty.catwalk} Pcs</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5">
                <span className="text-slate-600">Jack Base T60cm (Tapak Bawah Ulir Solid)</span>
                <span className="font-mono font-bold text-slate-950 shrink-0 ml-2">{qty.jackBase} Pcs</span>
              </div>
              {qty.uHead > 0 && (
                <div className="flex justify-between items-center text-xs sm:text-sm py-1.5">
                  <span className="text-slate-600">U-Head Adjuster T60cm (Penyangga Balok Cor)</span>
                  <span className="font-mono font-bold text-slate-950 shrink-0 ml-2">{qty.uHead} Pcs</span>
                </div>
              )}
              {qty.pipeSupport > 0 && (
                <div className="flex justify-between items-center text-xs sm:text-sm py-1.5">
                  <span className="text-slate-600">Pipe Support Teleskopik TS-90</span>
                  <span className="font-mono font-bold text-slate-950 shrink-0 ml-2">{qty.pipeSupport} Pcs</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5">
                <span className="text-slate-600">Tangga Bordes Baja 170 (Akses Aman)</span>
                <span className="font-mono font-bold text-slate-950 shrink-0 ml-2">{qty.tangga} Unit</span>
              </div>
            </div>

            {/* Price Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xs">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Estimasi Sewa ({durationMonths} Bulan)
                </div>
                <div className="text-xl font-extrabold text-orange-600 mt-1">
                  {formatIDR(calc.rentTotal)}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Tarif mulai Rp 27.000/set/bulan
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xs">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Estimasi Beli Unit Baru
                </div>
                <div className="text-xl font-extrabold text-slate-950 mt-1">
                  {formatIDR(calc.buyNew)}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Harga unit baru sesuai katalog
                </div>
              </div>
            </div>
          </div>

          {/* Single Action CTA */}
          <div className="space-y-3 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
                boqText
              )}`}
              data-track-label="calculator_boq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 sm:py-4 px-6 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wide rounded-full shadow-lg shadow-orange-950/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Kirim Hasil Hitungan via WhatsApp</span>
            </a>

            <div className="text-center">
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs text-slate-500 hover:text-slate-800 transition inline-flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Salin Ringkasan BOQ</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
