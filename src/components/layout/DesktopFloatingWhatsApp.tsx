'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { COMPANY_INFO } from '@/data/company';
import { trackWhatsAppConversion } from '@/utils/analytics';

export default function DesktopFloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    let heroIntersecting = false;
    let footerIntersecting = false;

    // Helper to evaluate visibility
    const updateVisibility = () => {
      // 1. Hero check: on home, if scrollY is less than 450px or hero section is intersecting
      const scrollY = window.scrollY;
      const inHeroArea = isHome ? (scrollY < 450 || heroIntersecting) : (scrollY < 180);
      
      // 2. Footer check: if footer is intersecting in viewport
      const shouldShow = !inHeroArea && !footerIntersecting;
      setIsVisible(shouldShow);
    };

    // Observer for Hero Section
    let heroObserver: IntersectionObserver | null = null;
    const heroElement = document.querySelector('section[aria-label="MSC Scaffolding Hero Showcase"]');
    if (heroElement) {
      heroObserver = new IntersectionObserver(
        ([entry]) => {
          heroIntersecting = entry.isIntersecting;
          updateVisibility();
        },
        { threshold: 0.1 }
      );
      heroObserver.observe(heroElement);
    }

    // Observer for Footer Section
    let footerObserver: IntersectionObserver | null = null;
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          footerIntersecting = entry.isIntersecting;
          updateVisibility();
        },
        { threshold: 0.05 }
      );
      footerObserver.observe(footerElement);
    }

    const handleScroll = () => {
      updateVisibility();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroObserver) heroObserver.disconnect();
      if (footerObserver) footerObserver.disconnect();
    };
  }, [isHome]);

  const defaultWaText = encodeURIComponent(
    'Halo Tim MSC Scaffolding, saya ingin konsultasi kebutuhan sewa/jual scaffolding.'
  );

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp Desktop"
      className={`hidden md:flex fixed bottom-8 right-8 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-6 pointer-events-none scale-90'
      }`}
    >
      <a
        href={`https://wa.me/${COMPANY_INFO.primaryPhone.number}?text=${defaultWaText}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppConversion('desktop_floating_sticky')}
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl shadow-emerald-950/30 transition-all"
        aria-label="Hubungi WhatsApp Hotline MSC Scaffolding"
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current shrink-0"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.006L2 22l5.13-1.319C8.566 21.493 10.235 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.031 18.062c-1.637 0-3.155-.494-4.428-1.34l-.317-.213-3.287.863.878-3.21-.207-.33c-.927-1.479-1.423-3.197-1.423-4.996 0-5.111 4.159-9.27 9.271-9.27 5.113 0 9.27 4.159 9.27 9.27 0 5.113-4.157 9.226-9.456 9.226z" />
        </svg>

        {/* Text Label */}
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-medium leading-none text-emerald-100">
            Hotline Konsultasi
          </span>
          <span className="text-xs font-bold leading-tight tracking-wide">
            Chat WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
}
