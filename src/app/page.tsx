import React from 'react';
import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider';
import CoreServices from '@/components/home/CoreServices';
import CatalogPreview from '@/components/home/CatalogPreview';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import K3Banner from '@/components/home/K3Banner';
import WarehouseShowcase from '@/components/home/WarehouseShowcase';
import ConsultantCTA from '@/components/home/ConsultantCTA';

export const metadata: Metadata = {
  title: {
    absolute: 'Sewa & Jual Scaffolding Surabaya Sidoarjo - MSC Scaffolding',
  },
  description: 'Pusat sewa & jual scaffolding steger pipa 1.8mm SNI di Surabaya & Sidoarjo. Stok ribuan unit, standar K3, mulai Rp 27.000/bln. Siap kirim same-day ke proyek.',
  alternates: {
    canonical: 'https://mscscaffolding.com',
  },
  openGraph: {
    title: 'Sewa & Jual Scaffolding Surabaya Sidoarjo - MSC Scaffolding',
    description: 'Pusat sewa & jual scaffolding steger pipa 1.8mm SNI di Surabaya & Sidoarjo. Stok ribuan unit, standar K3, mulai Rp 27.000/bln. Siap kirim same-day ke proyek.',
    url: 'https://mscscaffolding.com',
    siteName: 'MSC Scaffolding',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero_slide_1_facade_engineer.webp',
        width: 1200,
        height: 675,
        alt: 'Sewa dan Jual Scaffolding Pipa 1.8mm SNI Surabaya Sidoarjo',
      },
    ],
  },
};

export default function HomePage() {
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MSC Scaffolding',
    alternateName: 'PT MITRA SOLUSI CAHAYA',
    url: 'https://mscscaffolding.com',
    description: 'Pusat sewa & jual scaffolding steger pipa 1.8mm SNI di Surabaya & Sidoarjo.',
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'Sewa Scaffolding',
        url: 'https://mscscaffolding.com/sewa-scaffolding',
      },
      {
        '@type': 'WebPage',
        name: 'Jual Scaffolding',
        url: 'https://mscscaffolding.com/jual-scaffolding',
      },
      {
        '@type': 'WebPage',
        name: 'Katalog Komponen',
        url: 'https://mscscaffolding.com/produk',
      },
      {
        '@type': 'WebPage',
        name: 'Kalkulator Kebutuhan',
        url: 'https://mscscaffolding.com/kalkulator',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      {/* 1. Full-Width 16:9 Cinema Hero Slider */}
      <HeroSlider />

      {/* 2. Core Services (Sewa, Jual, Shoring System) */}
      <CoreServices />

      {/* 3. Catalog Highlights (6 Products on clean white canvas) */}
      <CatalogPreview />

      {/* 4. Real Project & Facility Showcase (High-res Photo Grid) */}
      <ProjectShowcase />

      {/* 5. K3 Safety Standards & Zero Incident Charter */}
      <K3Banner />

      {/* 6. 2 Physical Logistics Hubs (Surabaya & Sidoarjo) */}
      <WarehouseShowcase />

      {/* 7. Personal Consultation & Tender Procurement */}
      <ConsultantCTA />
    </>
  );
}
