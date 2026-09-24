import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Footer() {
  const catalogLinks = [
    { name: '1 Set Scaffolding Fasad T170', href: '/produk/set-scaffolding-170' },
    { name: '1 Set Scaffolding Headroom T190', href: '/produk/set-scaffolding-190' },
    { name: 'Main Frame T170 Pipa 1.8mm', href: '/produk/main-frame-170' },
    { name: 'Catwalk Metal Plank 50x183cm', href: '/produk/catwalk-metal-plank' },
    { name: 'Tangga Bordes Baja Fasad 170', href: '/produk/tangga-bordes-170' },
    { name: 'Jack Base T60cm Solid Ulir', href: '/produk/jack-base-60' },
    { name: 'U-Head Jack T60cm Penyangga', href: '/produk/u-head-60' },
    { name: 'Pipe Support Teleskopik TS-90', href: '/produk/pipe-support-ts90' },
    { name: 'Roda Scaffolding 6 & 8 Inch', href: '/produk/caster-wheel-6-inch' },
  ];

  const regionalLinks = [
    { city: 'Surabaya', leadTime: '2-4 Jam (Gudang Rungkut)', href: '/area-layanan/surabaya' },
    { city: 'Sidoarjo', leadTime: '2-4 Jam (Gudang Buduran)', href: '/area-layanan/sidoarjo' },
    { city: 'Gresik (JIIPE/Manyar)', leadTime: '4-6 Jam', href: '/area-layanan/gresik' },
    { city: 'Pasuruan (PIER/Beji)', leadTime: '4-8 Jam', href: '/area-layanan/pasuruan' },
    { city: 'Mojokerto (NIP/Ngoro)', leadTime: '4-8 Jam', href: '/area-layanan/mojokerto' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Column 1: Corporate Profile & K3 Verified */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900">
                <Image
                  src="/images/branding/logo-msc.jpeg"
                  alt="MSC Scaffolding Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-white">
                  MSC <span className="text-orange-500">SCAFFOLDING</span>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  {COMPANY_INFO.legalName}
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Sewa & jual scaffolding steger galvanis pipa 1.8mm SNI dan sistem shoring SWL 1.500 kg di Jawa Timur.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 text-emerald-400 text-xs font-mono font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Standar K3 Permenaker</span>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Component Catalog */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Katalog Komponen
            </div>
            <ul className="space-y-2 text-xs">
              {catalogLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/produk"
                  className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Semua Produk</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Coverage */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Area Layanan
            </div>
            <ul className="space-y-2.5 text-xs">
              {regionalLinks.map((reg) => (
                <li key={reg.city}>
                  <Link
                    href={reg.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors block"
                  >
                    <div className="font-semibold text-slate-300">{reg.city}</div>
                    <div className="text-[11px] font-mono text-slate-500">{reg.leadTime}</div>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/area-layanan"
                  className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Cek Area Layanan</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: 2 Physical Warehouses */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Lokasi Gudang
            </div>
            <div className="space-y-4 text-xs">
              {COMPANY_INFO.warehouses.map((wh) => (
                <div key={wh.name} className="space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span>{wh.name}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 pl-5 leading-relaxed">
                    {wh.address}
                  </div>
                  <div className="pl-5 pt-0.5 flex items-center gap-3 text-[11px]">
                    <a
                      href={wh.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span>•</span>
                    <a
                      href={`https://wa.me/${wh.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white"
                    >
                      WA: {wh.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Compliance Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/k3-panduan" className="hover:text-slate-300 transition-colors">
              Standar Mutu K3
            </Link>
            <span>•</span>
            <Link href="/sewa-scaffolding" className="hover:text-slate-300 transition-colors">
              SOP & Ketentuan Sewa
            </Link>
            <span>•</span>
            <Link href="/kontak" className="hover:text-slate-300 transition-colors">
              Lokasi Gudang
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
