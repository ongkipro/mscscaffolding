import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';
import { COMPANY_INFO } from '@/data/company';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#020617',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mscscaffolding.com'),
  title: {
    default: 'MSC Scaffolding — Sewa & Jual Scaffolding Pipa 1.8mm SNI Standar K3 Jawa Timur',
    template: '%s | MSC Scaffolding PT Mitra Solusi Cahaya',
  },
  description: 'Pusat sewa dan jual scaffolding galvanis tebal pipa real 1.8mm SNI & heavy duty shoring system beban SWL 1.500 kg di Surabaya, Sidoarjo, Gresik, Pasuruan, Mojokerto. 2 gudang fisik, kirim same-day.',
  keywords: [
    'sewa scaffolding surabaya',
    'sewa scaffolding sidoarjo',
    'jual scaffolding galvanis',
    'harga sewa steger bulanan',
    'scaffolding pipa 1.8mm sni',
    'shoring system bekisting',
    'pt mitra solusi cahaya',
    'msc scaffolding',
  ],
  authors: [{ name: 'PT Mitra Solusi Cahaya' }],
  creator: 'PT Mitra Solusi Cahaya',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.mscscaffolding.com',
    siteName: 'MSC Scaffolding PT Mitra Solusi Cahaya',
    title: 'MSC Scaffolding — Sewa & Jual Scaffolding Pipa 1.8mm SNI Standar K3',
    description: 'Sewa & jual scaffolding steger galvanis SNI pipa 1.8mm dan heavy duty shoring 1.500 kg SWL. Siap kirim same-day dari 2 gudang di Surabaya & Sidoarjo.',
    images: [
      {
        url: '/images/hero/hero_slide_1_facade_engineer.jpg',
        width: 1200,
        height: 675,
        alt: 'MSC Scaffolding Proyek Konstruksi Fasad Jawa Timur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSC Scaffolding — Sewa & Jual Scaffolding Standar K3',
    description: 'Pusat sewa & jual scaffolding steger tebal pipa 1.8mm SNI & shoring system Jawa Timur.',
    images: ['/images/hero/hero_slide_1_facade_engineer.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MSC Scaffolding (PT Mitra Solusi Cahaya)',
    image: 'https://www.mscscaffolding.com/images/hero/hero_slide_1_facade_engineer.jpg',
    '@id': 'https://www.mscscaffolding.com',
    url: 'https://www.mscscaffolding.com',
    telephone: '+6282257664755',
    priceRange: 'IDR 45.000 - 585.000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kawasan Industri Rungkut Industri Raya No. 45',
      addressLocality: 'Surabaya',
      addressRegion: 'Jawa Timur',
      postalCode: '60293',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.3197,
      longitude: 112.7661,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:30',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/mscscaffolding',
      'https://www.instagram.com/mscscaffolding',
    ],
  };

  return (
    <html lang="id" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} font-sans antialiased bg-white text-slate-700`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
