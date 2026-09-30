import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
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
  alternates: {
    canonical: 'https://www.mscscaffolding.com',
  },
  title: {
    default: 'MSC Scaffolding - Solusi Akses Kerja di Ketinggian - Build Safer Together',
    template: '%s - MSC Scaffolding PT Mitra Solusi Cahaya',
  },
  description: 'PT Mitra Solusi Cahaya — Solusi akses kerja di ketinggian untuk proyek Anda. Sewa scaffolding steger pipa 1.8mm SNI mulai Rp 27.000/set/bulan di Surabaya, Sidoarjo, Pasuruan, Gresik. 2 gudang fisik, kirim same-day.',
  keywords: [
    'sewa scaffolding surabaya',
    'sewa scaffolding sidoarjo',
    'sewa scaffolding pasuruan',
    'sewa scaffolding gresik',
    'jual scaffolding galvanis',
    'harga sewa steger bulanan',
    'scaffolding pipa 1.8mm sni',
    'pt mitra solusi cahaya',
    'msc scaffolding',
  ],
  authors: [{ name: 'PT Mitra Solusi Cahaya' }],
  creator: 'PT Mitra Solusi Cahaya',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/images/branding/logo-msc-circle.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.mscscaffolding.com',
    siteName: 'MSC Scaffolding PT Mitra Solusi Cahaya',
    title: 'MSC Scaffolding - Sewa & Jual Scaffolding Pipa 1.8mm SNI Standar K3',
    description: 'Solusi akses kerja di ketinggian untuk proyek Anda. Sewa scaffolding mulai Rp 27.000/set/bulan. Siap kirim same-day dari 2 gudang di Surabaya & Sidoarjo.',
    images: [
      {
        url: '/images/hero/hero_slide_1_facade_engineer.webp',
        width: 1200,
        height: 675,
        alt: 'MSC Scaffolding Proyek Konstruksi Fasad Jawa Timur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSC Scaffolding — Build Safer Together',
    description: 'Pusat sewa & jual scaffolding steger tebal pipa 1.8mm SNI Jawa Timur.',
    images: ['/images/hero/hero_slide_1_facade_engineer.webp'],
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
    image: 'https://www.mscscaffolding.com/images/hero/hero_slide_1_facade_engineer.webp',
    logo: 'https://www.mscscaffolding.com/images/branding/logo-msc-circle.png',
    '@id': 'https://www.mscscaffolding.com/#organization',
    url: 'https://www.mscscaffolding.com',
    telephone: '+628132562024',
    priceRange: 'IDR 27.000 - 585.000',
    areaServed: ['Surabaya', 'Sidoarjo', 'Pasuruan', 'Gresik', 'Mojokerto'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Medokan Asri Utara, Rungkut',
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
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18484671476"
        />
        <Script
          id="google-tag-aw"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18484671476');
            gtag('config', 'AW-18484671476/b7jxCK-p3IsdEPTnlu5E', {
              'phone_conversion_number': '082257664755'
            });
          `}
        </Script>
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
