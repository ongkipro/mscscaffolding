'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { trackWhatsAppConversion, trackPhoneConversion } from '@/utils/analytics';

export default function MobileBottomBar() {
  const hotlineDigits = COMPANY_INFO.primaryPhone.formatted.replace(/[^0-9]/g, '');

  return (
    <aside
      aria-label="Aksi Cepat Mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-4 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Direct Call Hotline (Same Number: 0822-5766-4755) */}
        <a
          href={`tel:${hotlineDigits}`}
          onClick={() => trackPhoneConversion('mobile_bottom_bar')}
          className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 active:scale-95 text-white transition-all shadow-sm"
          aria-label={`Telepon Hotline ${COMPANY_INFO.primaryPhone.formatted}`}
        >
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-200 shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-slate-400 font-medium leading-none mb-0.5">Hotline</span>
            <span className="text-xs font-bold text-white tracking-tight leading-tight">Telepon</span>
          </div>
        </a>

        {/* WhatsApp Direct Hotline (Same Number: 0822-5766-4755) */}
        <a
          href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent('Halo Tim MSC Scaffolding, saya butuh info sewa/jual scaffolding.')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppConversion('mobile_bottom_bar')}
          className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold transition-all shadow-lg shadow-emerald-950/40"
          aria-label="Chat WhatsApp Hotline MSC Scaffolding"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.006L2 22l5.13-1.319C8.566 21.493 10.235 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.031 18.062c-1.637 0-3.155-.494-4.428-1.34l-.317-.213-3.287.863.878-3.21-.207-.33c-.927-1.479-1.423-3.197-1.423-4.996 0-5.111 4.159-9.27 9.271-9.27 5.113 0 9.27 4.159 9.27 9.27 0 5.113-4.157 9.226-9.456 9.226z" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-emerald-100 font-medium leading-none mb-0.5">Chat Respon</span>
            <span className="text-xs font-bold text-white tracking-tight leading-tight">WhatsApp</span>
          </div>
        </a>
      </div>
    </aside>
  );
}
