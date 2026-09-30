import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Footer() {
  const catalogLinks = [
    { name: 'Set Scaffolding T170', href: '/produk/set-scaffolding-170' },
    { name: 'Set Scaffolding T190', href: '/produk/set-scaffolding-190' },
    { name: 'Main Frame T170 (1.8mm)', href: '/produk/main-frame-170' },
    { name: 'Catwalk Metal Plank', href: '/produk/catwalk-metal-plank' },
    { name: 'Tangga Bordes Baja 170', href: '/produk/tangga-bordes-170' },
    { name: 'Jack Base T60cm', href: '/produk/jack-base-60' },
    { name: 'U-Head Jack T60cm', href: '/produk/u-head-60' },
    { name: 'Pipe Support TS-90', href: '/produk/pipe-support-ts90' },
    { name: 'Roda Scaffolding 6" & 8"', href: '/produk/caster-wheel-6-inch' },
  ];

  const regionalLinks = [
    { city: 'Surabaya', leadTime: '2–4 Jam (Hub Rungkut)', href: '/area-layanan/surabaya' },
    { city: 'Sidoarjo', leadTime: '2–4 Jam (Hub Gedangan)', href: '/area-layanan/sidoarjo' },
    { city: 'Gresik', leadTime: '4–6 Jam (JIIPE & Manyar)', href: '/area-layanan/gresik' },
    { city: 'Pasuruan', leadTime: '4–8 Jam (PIER & Beji)', href: '/area-layanan/pasuruan' },
    { city: 'Mojokerto', leadTime: '4–8 Jam (NIP & Ngoro)', href: '/area-layanan/mojokerto' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Column 1: Corporate Profile & K3 Verified (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/images/branding/logo-msc-circle.png"
                  alt="MSC Scaffolding Logo PT Mitra Solusi Cahaya"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-white leading-tight">
                  MSC <span className="text-orange-500">SCAFFOLDING</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  {COMPANY_INFO.legalName}
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed pr-2">
              {COMPANY_INFO.slogan}. Sewa &amp; jual scaffolding steger galvanis pipa 1.8mm SNI di {COMPANY_INFO.serviceCoverage}.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-orange-400 text-[11px] font-semibold">
                {COMPANY_INFO.tagline}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-emerald-400 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Standar K3</span>
              </span>
            </div>

            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Hotline WA: <strong className="text-white">{COMPANY_INFO.primaryPhone.formatted}</strong>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.officePhone}`}
                  className="hover:text-white transition-colors"
                >
                  Telepon Kantor: <strong className="text-white">{COMPANY_INFO.officePhone}</strong>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-slate-400">{COMPANY_INFO.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Component Catalog (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Katalog Komponen
            </h3>
            <ul className="space-y-2 text-xs">
              {catalogLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/produk"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors whitespace-nowrap"
                >
                  <span>Semua Produk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Coverage (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Area Layanan
            </h3>
            <ul className="space-y-3 text-xs">
              {regionalLinks.map((reg) => (
                <li key={reg.city}>
                  <Link
                    href={reg.href}
                    className="group block space-y-0.5 text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    <div className="font-semibold text-slate-200 group-hover:text-orange-400 transition-colors">
                      {reg.city}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {reg.leadTime}
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/area-layanan"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors whitespace-nowrap"
                >
                  <span>Cek Area Layanan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: 2 Physical Warehouses (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Lokasi Gudang
            </h3>
            <div className="space-y-3.5 text-xs">
              {COMPANY_INFO.warehouses.map((wh) => (
                <div
                  key={wh.name}
                  className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2 hover:border-slate-700/80 transition-colors"
                >
                  <div className="font-bold text-white flex items-center gap-1.5 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{wh.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-5">
                    {wh.shortAddress || wh.address}
                  </p>
                  <div className="pl-5 pt-1 flex flex-wrap items-center gap-3 text-[11px]">
                    <a
                      href={wh.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold transition-colors whitespace-nowrap"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                    <span className="text-slate-700 hidden sm:inline">•</span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${encodeURIComponent(
                        `Halo Tim MSC Scaffolding, saya ingin cek stok di ${wh.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors whitespace-nowrap"
                    >
                      <MessageSquare className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>WA: {COMPANY_INFO.primaryPhone.formatted}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Compliance Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Hak Cipta Dilindungi.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <Link href="/k3-panduan" className="hover:text-slate-300 transition-colors">
              Standar Mutu K3
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/sewa-scaffolding" className="hover:text-slate-300 transition-colors">
              SOP &amp; Ketentuan Sewa
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/kontak" className="hover:text-slate-300 transition-colors">
              Lokasi Gudang
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
