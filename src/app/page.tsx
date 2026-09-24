import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import CoreServices from '@/components/home/CoreServices';
import CatalogPreview from '@/components/home/CatalogPreview';
import K3Banner from '@/components/home/K3Banner';
import WarehouseShowcase from '@/components/home/WarehouseShowcase';
import ConsultantCTA from '@/components/home/ConsultantCTA';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import ClientTrustBar from '@/components/home/ClientTrustBar';

export default function HomePage() {
  return (
    <>
      {/* 1. Full-Width 16:9 Cinema Hero Slider */}
      <HeroSlider />

      {/* 2. Client & Contractor Trust Bar */}
      <ClientTrustBar />

      {/* 3. Core Services (Sewa, Jual, Shoring System) */}
      <CoreServices />

      {/* 3. Catalog Highlights (6 Products on clean white canvas) */}
      <CatalogPreview />

      {/* 4. Real Project & Facility Showcase (High-res Photo Grid) */}
      <ProjectShowcase />

      {/* 5. K3 Safety Standards & Zero Incident Charter */}
      <K3Banner />

      {/* 6. 2 Physical Logistics Hubs (Surabaya & Sidoarjo) */}
      <WarehouseShowcase />

      {/* 7. Personal Consultation with Bu Hanifa & Tender Procurement */}
      <ConsultantCTA />
    </>
  );
}
