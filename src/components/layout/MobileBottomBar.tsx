'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function MobileBottomBar() {
  return (
    <aside aria-label="Aksi Cepat Mobile" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-3 py-2">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_INFO.officePhone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 mb-1 text-slate-300" />
          <span className="text-[10px] font-bold tracking-tight">Telepon</span>
        </a>

        {/* WhatsApp Bu Hanifa Direct Button (High-conversion centerpiece) */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=Halo%20Bu%20Hanifa,%20saya%20butuh%20info%20sewa%20scaffolding`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-lg shadow-orange-950/40 transition-all scale-[1.02]"
        >
          <MessageSquare className="w-4 h-4 mb-1 text-white" />
          <span className="text-[10px] font-extrabold tracking-tight">WhatsApp</span>
        </a>

        {/* Calculator Shortcut */}
        <Link
          href="/kalkulator"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
        >
          <Calculator className="w-4 h-4 mb-1 text-orange-400" />
          <span className="text-[10px] font-bold tracking-tight">Kalkulator</span>
        </Link>
      </div>
    </aside>
  );
}
