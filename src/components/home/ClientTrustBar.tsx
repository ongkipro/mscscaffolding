import React from 'react';

export default function ClientTrustBar() {
  const clients = [
    { name: 'PT Wijaya Karya (Persero) Tbk', short: 'WIKA' },
    { name: 'PT Pembangunan Perumahan (Persero) Tbk', short: 'PP' },
    { name: 'PT Adhi Karya (Persero) Tbk', short: 'ADHI KARYA' },
    { name: 'PT Total Bangun Persada Tbk', short: 'TOTAL' },
    { name: 'PT Waskita Karya (Persero) Tbk', short: 'WASKITA' },
    { name: 'PT Nindya Karya', short: 'NINDYA' },
    { name: 'PT Hutama Karya (Persero)', short: 'HUTAMA KARYA' },
  ];

  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block mb-6">
          Dipercaya Kontraktor di Jawa Timur
        </span>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
          {clients.map((c, i) => (
            <span
              key={i}
              className="text-slate-400 hover:text-slate-800 font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-colors cursor-default select-none"
              title={c.name}
            >
              {c.short}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
