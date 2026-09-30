'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  X,
  Phone,
  MessageSquare,
  Calculator,
  MapPin,
  ChevronRight,
  FileText,
  ShieldCheck,
  Package,
  Building2,
  ShoppingBag,
  Truck,
  Building,
  Home,
  Clock,
  Lock,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { trackWhatsAppConversion, trackPhoneConversion } from '@/utils/analytics';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Smooth mount and scroll lock
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const menuSections = [
    {
      label: 'Layanan & Produk',
      items: [
        { name: 'Beranda', href: '/', icon: Home },
        { name: 'Katalog Produk', href: '/produk', icon: Package, badge: 'SNI 1.8mm' },
        { name: 'Sewa Scaffolding', href: '/sewa-scaffolding', icon: Building2, badge: 'Mulai 27rb' },
        { name: 'Jual Scaffolding', href: '/jual-scaffolding', icon: ShoppingBag },
        { name: 'Kalkulator Kebutuhan', href: '/kalkulator', icon: Calculator },
      ],
    },
    {
      label: 'Standar & Area',
      items: [
        { name: 'Standar Mutu K3', href: '/k3-panduan', icon: ShieldCheck, badge: 'Permenaker' },
        { name: 'Area Layanan', href: '/area-layanan', icon: Truck, badge: '5 Kota' },
      ],
    },
    {
      label: 'Perusahaan & Legal',
      items: [
        { name: 'Tentang Kami', href: '/tentang-kami', icon: Building },
        { name: 'Kontak & Gudang', href: '/kontak', icon: MapPin },
        { name: 'Kebijakan Privasi', href: '/kebijakan-privasi', icon: Lock },
        { name: 'Syarat & Ketentuan', href: '/syarat-ketentuan', icon: FileText },
      ],
    },
  ];

  return (
    <aside
      aria-label="Menu Navigasi Mobile"
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ease-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Dark Blur Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Main Panel - Flat Minimalist Dark Slate */}
      <div
        className={`relative w-full max-w-[330px] sm:max-w-sm bg-slate-950 text-slate-100 h-full shadow-2xl border-l border-slate-900 flex flex-col z-10 overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-900 bg-slate-950 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/images/branding/logo-msc-circle.png"
                alt="MSC Logo"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white tracking-tight leading-none">
                MSC <span className="text-orange-500">SCAFFOLDING</span>
              </div>
              <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                PT Mitra Solusi Cahaya
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors active:scale-95"
            aria-label="Tutup Menu Navigasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Action Tiles - Flat Minimalist */}
        <div className="p-3 bg-slate-950 border-b border-slate-900 grid grid-cols-2 gap-2.5">
          {/* Direct WhatsApp */}
          <a
            href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
              'Halo Tim MSC Scaffolding, saya butuh informasi sewa/jual scaffolding.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppConversion('drawer_quick_action')}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-slate-700 text-white active:scale-95 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-[9px] text-slate-400 uppercase font-semibold tracking-wider leading-none">Hotline WA</span>
              <span className="text-xs font-bold text-white group-hover:text-emerald-400 truncate leading-tight mt-0.5">
                Konsultasi
              </span>
            </div>
          </a>

          {/* Calculator Shortcut */}
          <Link
            href="/kalkulator"
            prefetch={false}
            onClick={onClose}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-slate-700 text-white active:scale-95 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
              <Calculator className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-[9px] text-slate-400 uppercase font-semibold tracking-wider leading-none">Estimasi</span>
              <span className="text-xs font-bold text-white group-hover:text-orange-400 truncate leading-tight mt-0.5">
                Kalkulator
              </span>
            </div>
          </Link>
        </div>

        {/* Categorized Navigation List */}
        <nav className="p-3.5 flex-1 space-y-4">
          {menuSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1">
                {section.label}
              </div>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      prefetch={false}
                      onClick={onClose}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-colors ${
                        isActive
                          ? 'bg-slate-900 text-orange-400 font-semibold border-l-2 border-orange-500'
                          : 'text-slate-300 hover:bg-slate-900 hover:text-white font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? 'text-orange-400' : 'text-slate-400'
                          }`}
                        />
                        <span className="truncate">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        {item.badge && (
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                              isActive
                                ? 'bg-orange-500/15 text-orange-300 border border-orange-500/30'
                                : 'bg-slate-900 text-slate-400 border border-slate-800'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                        <ChevronRight
                          className={`w-3.5 h-3.5 ${
                            isActive ? 'text-orange-400' : 'text-slate-500'
                          }`}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Drawer Footer Information */}
        <div className="p-4 bg-slate-950 border-t border-slate-900 text-slate-300 text-xs space-y-3.5 mt-auto">
          {/* Warehouses Info Card */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
            <div className="text-white font-bold text-xs flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>2 Hub Gudang Fisik Jawa Timur</span>
            </div>
            <div className="text-[11px] text-slate-400 pl-5 space-y-0.5">
              <div>Surabaya: Medokan Asri Utara, Rungkut</div>
              <div>Sidoarjo: Tritan Hub, Gedangan</div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400 pl-5 pt-1 border-t border-slate-800/60 mt-1.5">
              <Clock className="w-3 h-3 text-slate-500 shrink-0" />
              <span>07.30 – 17.00 WIB (Kirim 24/7 By Request)</span>
            </div>
          </div>

          {/* Request SPH Action Button - Flat Minimalist Solid */}
          <div className="pt-0.5">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                'Halo Kantor Tender MSC, mohon informasi Surat Penawaran Harga (SPH) resmi.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppConversion('drawer_sph_button')}
              className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 active:scale-[0.98] text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-orange-200" />
              <span>Minta Surat Penawaran (SPH)</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
