'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface NavbarProps {
  onOpenDrawer?: () => void;
}

export default function Navbar({ onOpenDrawer }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Produk', href: '/produk' },
    { name: 'Sewa', href: '/sewa-scaffolding' },
    { name: 'Jual', href: '/jual-scaffolding' },
    { name: 'Kalkulator', href: '/kalkulator' },
    { name: 'Kontak', href: '/kontak' },
  ];

  // Homepage: overlay over hero (fixed), becomes dark blurred on scroll. Inner pages: standard sticky white.
  const headerBaseClass = isHome
    ? `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md text-white shadow-xl'
          : 'bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-transparent text-white'
      }`
    : 'sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md text-slate-950 transition-all';

  const utilityBarClass = isHome
    ? `py-1.5 px-4 text-[11px] hidden sm:block transition-colors ${
        scrolled
          ? 'bg-slate-950/90 text-slate-400'
          : 'bg-transparent text-slate-300'
      }`
    : 'bg-slate-950 text-slate-400 py-1.5 px-4 text-[11px] hidden sm:block';

  return (
    <header className={headerBaseClass}>
      {/* Sleek Minimalist Top Utility Bar - Ringkas & Padat */}
      <div className={utilityBarClass}>
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-2.5">
            <span className={isHome ? 'text-slate-200' : 'text-slate-300'}>Gudang: Surabaya & Sidoarjo</span>
            <span className={isHome && !scrolled ? 'text-slate-500' : 'text-slate-700'}>•</span>
            <span className="text-emerald-400 font-semibold">Pipa Real 1.8mm SNI</span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              WhatsApp:{' '}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition ${isHome ? 'text-orange-400 hover:text-white font-semibold' : 'text-white hover:text-orange-400'}`}
              >
                {COMPANY_INFO.whatsappHanifa.formatted}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Corporate Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/branding/logo-msc.jpeg"
                alt="MSC Scaffolding Logo PT Mitra Solusi Cahaya"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div>
              <div
                className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                  isHome
                    ? 'text-white group-hover:text-orange-400'
                    : 'text-slate-950 group-hover:text-orange-600'
                }`}
              >
                MSC <span className="text-orange-500 font-extrabold">SCAFFOLDING</span>
              </div>
              <div
                className={`text-[10px] uppercase tracking-wider font-semibold ${
                  isHome ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                PT MITRA SOLUSI CAHAYA
              </div>
            </div>
          </Link>

          {/* Clean Desktop Navigation Links - Inti 5 Menu */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              let linkClasses = '';
              if (isHome) {
                linkClasses = isActive
                  ? 'text-orange-400 bg-white/10 font-semibold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10 font-medium';
              } else {
                linkClasses = isActive
                  ? 'text-orange-600 bg-orange-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50 font-medium';
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm px-3.5 py-2 rounded-full transition-all duration-150 ${linkClasses}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop SPH Action CTA - Ringkas */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappTender.number}?text=${encodeURIComponent(
                'Halo Tim MSC Scaffolding, kami ingin mengajukan permintaan Surat Penawaran Harga (SPH) resmi.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm active:scale-95 ${
                isHome
                  ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-950/20'
                  : 'bg-slate-950 hover:bg-orange-600 text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-orange-200" />
              <span>Minta SPH</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                if (onOpenDrawer) {
                  onOpenDrawer();
                } else {
                  setMobileOpen(!mobileOpen);
                }
              }}
              className={`p-2 rounded-md transition-colors ${
                isHome
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Buka Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Fallback Inline Mobile Dropdown */}
      {mobileOpen && (
        <div
          className={`lg:hidden border-t px-4 pt-3 pb-6 space-y-1 shadow-2xl ${
            isHome
              ? 'bg-slate-950 border-slate-800 text-white'
              : 'bg-white border-slate-100 text-slate-900'
          }`}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            const activeClass = isHome
              ? isActive
                ? 'text-orange-400 bg-white/10 font-semibold'
                : 'text-slate-200 hover:bg-white/5 hover:text-white font-medium'
              : isActive
                ? 'text-orange-600 bg-orange-50 font-semibold'
                : 'text-slate-800 hover:bg-slate-50 hover:text-orange-600 font-medium';

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${activeClass}`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className={`pt-3 border-t mt-2 space-y-2 ${isHome ? 'border-slate-800' : 'border-slate-100'}`}>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-md text-xs transition shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hubungi Bu Hanifa ({COMPANY_INFO.whatsappHanifa.formatted})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
