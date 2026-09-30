'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileDrawer from './MobileDrawer';
import MobileBottomBar from './MobileBottomBar';
import DesktopFloatingWhatsApp from './DesktopFloatingWhatsApp';
import Footer from './Footer';
import { trackWhatsAppConversion, trackPhoneConversion } from '@/utils/analytics';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleGlobalLinkClicks = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href') || '';
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        const label = target.getAttribute('aria-label') || target.innerText || 'WhatsApp Button';
        trackWhatsAppConversion(label.trim());
      } else if (href.startsWith('tel:')) {
        const label = target.getAttribute('aria-label') || target.innerText || 'Phone Call';
        trackPhoneConversion(label.trim());
      }
    };

    document.addEventListener('click', handleGlobalLinkClicks, { passive: true });
    return () => document.removeEventListener('click', handleGlobalLinkClicks);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Menuju konten utama
      </a>
      <Navbar onOpenDrawer={() => setDrawerOpen(true)} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main id="main-content" className="flex-1">{children}</main>
      <DesktopFloatingWhatsApp />
      <MobileBottomBar />
      <Footer />
    </div>
  );
}
