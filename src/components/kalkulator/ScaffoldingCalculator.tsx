'use client';

import React, { useState, useMemo } from 'react';
import {
  Calculator,
  RotateCcw,
  CheckCircle2,
  Copy,
  MessageSquare,
  Building,
  Ruler,
  Layers,
  ArrowRight,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { CalculationResult } from '@/types';

export function ScaffoldingCalculator() {
  const [length, setLength] = useState<number>(10);
  const [height, setHeight] = useState<number>(5.1);
  const [workType, setWorkType] = useState<'fasad' | 'cor'>('fasad');
  const [durationMonths, setDurationMonths] = useState<number>(1);
  const [selectedCity, setSelectedCity] = useState<string>('Surabaya');
  const [copied, setCopied] = useState<boolean>(false);

  // Calculation Logic
  const calc = useMemo<CalculationResult & { bays: number; tiers: number }>(() => {
    const validLength = Math.max(2, length);
    const validHeight = Math.max(1.7, height);

    // Standard bay length is ~1.83m, tier height is 1.70m
    const bays = Math.ceil(validLength / 1.83);
    const tiers = Math.ceil(validHeight / 1.7);
    const totalSets = bays * tiers;

    const mainFrames = totalSets * 2;
    const crossBraces = workType === 'cor' ? totalSets * 4 : totalSets * 2;
    const jointPins = tiers > 1 ? bays * (tiers - 1) * 2 : 0;
    const catwalks = workType === 'cor' ? bays * tiers : bays;
    const jackBases = (bays + 1) * 2;
    const uHeads = workType === 'cor' ? (bays + 1) * 2 : 0;
    const pipeSupports = workType === 'cor' ? bays * 2 : 0;
    const tangga = Math.min(tiers, 4);

    // Cost Estimations (Monthly per unit in IDR)
    // Set 170: 45.000 / mo | Catwalk: 30.000 / mo | Jackbase: 10.000 / mo | U-head: 10.000 / mo | Support: 25.000 / mo | Tangga: 35.000 / mo
    const monthlySetCost = totalSets * 45000;
    const monthlyCatwalkCost = catwalks * 30000;
    const monthlyJackBaseCost = jackBases * 10000;
    const monthlyUHeadCost = uHeads * 10000;
    const monthlySupportCost = pipeSupports * 25000;
    const monthlyTanggaCost = tangga * 35000;

    const estimatedRentalMonthly =
      (monthlySetCost +
        monthlyCatwalkCost +
        monthlyJackBaseCost +
        monthlyUHeadCost +
        monthlySupportCost +
        monthlyTanggaCost) *
      durationMonths;

    // Purchase New: Set ~580.000, Catwalk ~450.000, JackBase ~145.000, UHead ~145.000, Support ~320.000, Tangga ~490.000
    const estimatedPurchaseNew =
      totalSets * 580000 +
      catwalks * 450000 +
      jackBases * 145000 +
      uHeads * 145000 +
      pipeSupports * 320000 +
      tangga * 490000;

    return {
      bays,
      tiers,
      totalSets,
      mainFrames,
      crossBraces,
      jointPins,
      catwalks,
      jackBases,
      uHeads,
      pipeSupports,
      tangga,
      estimatedRentalMonthly,
      estimatedPurchaseNew,
    };
  }, [length, height, workType, durationMonths]);

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const boqText = useMemo(() => {
    return `ESTIMASI KEBUTUHAN SCAFFOLDING — PT MITRA SOLUSI CAHAYA
Lokasi Proyek: ${selectedCity}
Tipe Pekerjaan: ${workType === 'fasad' ? 'Fasad & Finishing Dinding' : 'Pengecoran Plat Beton / Shoring'}
Dimensi: Panjang ${length}m x Ketinggian ${height}m (${calc.bays} Bay x ${calc.tiers} Tingkat)
Durasi Sewa: ${durationMonths} Bulan

RINCIAN ESTIMASI BILL OF QUANTITY (BOQ):
- Total Set Scaffolding: ${calc.totalSets} Set
- Main Frame T170 (Pipa 1.8mm Real SNI): ${calc.mainFrames} Pcs
- Cross Brace 220cm (Galvanis): ${calc.crossBraces} Pcs
- Joint Pin Sambungan: ${calc.jointPins} Pcs
- Catwalk Metal Plank K3: ${calc.catwalks} Pcs
- Jack Base T60cm: ${calc.jackBases} Pcs
${calc.uHeads > 0 ? `- U-Head Adjuster T60cm: ${calc.uHeads} Pcs\n` : ''}${
      calc.pipeSupports > 0 ? `- Pipe Support TS-90: ${calc.pipeSupports} Pcs\n` : ''
    }- Tangga Bordes Baja: ${calc.tangga} Unit

Estimasi Biaya Sewa (${durationMonths} Bulan): ${formatIDR(calc.estimatedRentalMonthly)}
Estimasi Pembelian Unit Baru: ${formatIDR(calc.estimatedPurchaseNew)}

Mohon konfirmasi ketersediaan armada pengiriman dan penawaran harga resmi (SPH). Terima kasih.`;
  }, [selectedCity, workType, length, height, calc, durationMonths]);

  const handleCopy = () => {
    navigator.clipboard.writeText(boqText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const resetDefaults = () => {
    setLength(10);
    setHeight(5.1);
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
                  max={100}
                  step={1}
                  value={length}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (!isNaN(val)) setLength(Math.min(100, Math.max(1, val)));
                  }}
                  className="w-16 text-right font-mono text-xs font-bold text-slate-950 bg-slate-100 hover:bg-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 border border-slate-200 px-2 py-1 rounded transition"
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
              value={Math.min(60, Math.max(2, length))}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600 hover:accent-orange-500 transition"
              aria-label="Slider panjang bidang kerja"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
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
                  max={50}
                  step={0.5}
                  value={height}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (!isNaN(val)) setHeight(Math.min(50, Math.max(1, val)));
                  }}
                  className="w-16 text-right font-mono text-xs font-bold text-slate-950 bg-slate-100 hover:bg-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 border border-slate-200 px-2 py-1 rounded transition"
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
              value={Math.min(25, Math.max(1.7, height))}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600 hover:accent-orange-500 transition"
              aria-label="Slider tinggi bidang kerja"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
              <span>1.7m (1 Tingkat)</span>
              <span>Konversi: {calc.tiers} Tingkat Elevasi</span>
              <span>25m</span>
            </div>
          </div>

          {/* Duration & City */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                4. Durasi Sewa
              </label>
              <select
                value={durationMonths}
                onChange={(e) => setDurationMonths(Number(e.target.value))}
                className="w-full bg-white border border-slate-200 rounded-md p-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-600"
              >
                <option value={1}>1 Bulan</option>
                <option value={2}>2 Bulan</option>
                <option value={3}>3 Bulan</option>
                <option value={6}>6 Bulan (Proyek)</option>
                <option value={12}>12 Bulan (Tender)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                5. Kota Pengiriman
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-md p-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-600"
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
            <div className="p-3.5 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-2.5 text-amber-900 text-xs">
              <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Ketentuan K3 Ketinggian &gt; 3 Tingkat:</span> Sesuai
                Permenakertrans 01/1980, perancah dengan elevasi lebih dari 5 meter WAJIB dipasang
                wall tie (pengikat jangkar ke dinding) setiap 3 tier untuk mencegah gaya guling angin.
              </div>
            </div>
          )}
        </div>

        {/* Right Output Column (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-50/70 p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Hasil Estimasi Bill of Quantity (BOQ)
                </div>
                <div className="text-xl font-bold text-slate-950 mt-0.5">
                  {calc.totalSets} Set Scaffolding Modular
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
              <div className="flex justify-between items-center text-xs py-1.5">
                <span className="text-slate-600">Main Frame T170 (Pipa 1.8mm Real SNI)</span>
                <span className="font-mono font-bold text-slate-950">{calc.mainFrames} Pcs</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1.5">
                <span className="text-slate-600">Cross Brace 220cm (Pengaku Silang Galvanis)</span>
                <span className="font-mono font-bold text-slate-950">{calc.crossBraces} Pcs</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1.5">
                <span className="text-slate-600">Joint Pin (Sambungan Antar Tingkat)</span>
                <span className="font-mono font-bold text-slate-950">{calc.jointPins} Pcs</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1.5">
                <span className="text-slate-600">Catwalk Metal Plank (Lantai Kerja K3 Anti-Slip)</span>
                <span className="font-mono font-bold text-slate-950">{calc.catwalks} Pcs</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1.5">
                <span className="text-slate-600">Jack Base T60cm (Tapak Bawah Ulir Solid)</span>
                <span className="font-mono font-bold text-slate-950">{calc.jackBases} Pcs</span>
              </div>
              {calc.uHeads > 0 && (
                <div className="flex justify-between items-center text-xs py-1.5">
                  <span className="text-slate-600">U-Head Adjuster T60cm (Penyangga Balok Cor)</span>
                  <span className="font-mono font-bold text-slate-950">{calc.uHeads} Pcs</span>
                </div>
              )}
              {calc.pipeSupports > 0 && (
                <div className="flex justify-between items-center text-xs py-1.5">
                  <span className="text-slate-600">Pipe Support Teleskopik TS-90</span>
                  <span className="font-mono font-bold text-slate-950">{calc.pipeSupports} Pcs</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs py-1.5">
                <span className="text-slate-600">Tangga Bordes Baja 170 (Akses Aman)</span>
                <span className="font-mono font-bold text-slate-950">{calc.tangga} Unit</span>
              </div>
            </div>

            {/* Price Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-5 rounded-2xl shadow-xs">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Estimasi Sewa ({durationMonths} Bulan)
                </div>
                <div className="text-xl font-extrabold text-orange-600 mt-1">
                  {formatIDR(calc.estimatedRentalMonthly)}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Tarif mulai Rp 45.000/set/bulan
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-xs">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Estimasi Beli Unit Baru
                </div>
                <div className="text-xl font-extrabold text-slate-950 mt-1">
                  {formatIDR(calc.estimatedPurchaseNew)}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Fabrikasi SNI baru 100%
                </div>
              </div>
            </div>
          </div>

          {/* Single Action CTA */}
          <div className="space-y-3 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${encodeURIComponent(
                boqText
              )}`}
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
