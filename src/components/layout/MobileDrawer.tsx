'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Phone, MessageSquare, Calculator, MapPin, ChevronRight, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const links = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Sewa', href: '/sewa-scaffolding' },
    { name: 'Jual', href: '/jual-scaffolding' },
    { name: 'Kalkulator', href: '/kalkulator' },
    { name: 'Panduan K3', href: '/k3-panduan' },
    { name: 'Area Layanan', href: '/area-layanan' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/branding/logo-msc.jpeg"
                alt="MSC Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">
                MSC <span className="text-orange-600">SCAFFOLDING</span>
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">
                PT Mitra Solusi Cahaya
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Shortcuts */}
        <div className="p-4 bg-slate-50/70 grid grid-cols-2 gap-2">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-white rounded-md border border-slate-100 text-xs font-semibold text-slate-900 shadow-xs hover:text-orange-600 transition"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="truncate">WhatsApp</span>
          </a>
          <Link
            href="/kalkulator"
            onClick={onClose}
            className="flex items-center gap-2 p-3 bg-white rounded-md border border-slate-100 text-xs font-semibold text-slate-900 shadow-xs hover:text-orange-600 transition"
          >
            <Calculator className="w-4 h-4 text-orange-600 flex-shrink-0" />
            <span className="truncate">Kalkulator</span>
          </Link>
        </div>

        {/* Navigation List with Active State */}
        <nav className="p-3 flex-1 space-y-1">
          {links.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-all ${
                  isActive
                    ? 'text-orange-600 bg-orange-50 font-semibold border-l-2 border-orange-500'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950 font-medium'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-orange-500' : 'text-slate-400'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Footer Contact */}
        <div className="p-5 bg-slate-950 text-slate-300 text-xs space-y-3">
          <div className="text-white font-semibold text-xs flex items-center gap-2 font-mono">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>2 Hub Gudang Jawa Timur</span>
          </div>
          <div className="text-[11px] text-slate-400 space-y-1">
            <div>Surabaya: Kawasan Rungkut Industri</div>
            <div>Sidoarjo: Lingkar Timur Buduran</div>
          </div>
          <div className="pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                'Halo Kantor Tender MSC, mohon informasi Surat Penawaran Harga (SPH).'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white font-semibold py-2.5 rounded-md text-xs transition"
            >
              <FileText className="w-4 h-4" />
              <span>Minta SPH</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
