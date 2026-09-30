import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';
import { COMPANY_INFO } from '@/data/company';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#020617',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mscscaffolding.com'),
  alternates: {
    canonical: 'https://www.mscscaffolding.com',
  },
  title: {
    default: 'Sewa & Jual Scaffolding Surabaya Sidoarjo - MSC Scaffolding',
    template: '%s - MSC Scaffolding',
  },
  description: 'Pusat sewa & jual scaffolding steger pipa 1.8mm SNI di Surabaya & Sidoarjo. Stok ribuan unit, standar K3, mulai Rp 27.000/bln. Siap kirim same-day ke proyek.',
  keywords: [
    'sewa scaffolding surabaya',
    'sewa scaffolding sidoarjo',
    'jual scaffolding surabaya',
    'jual scaffolding sidoarjo',
    'harga sewa scaffolding bulanan',
    'scaffolding pipa 1.8mm sni',
    'sewa steger surabaya',
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
    title: 'Sewa & Jual Scaffolding Surabaya Sidoarjo - MSC Scaffolding',
    description: 'Pusat sewa & jual scaffolding steger pipa 1.8mm SNI di Surabaya & Sidoarjo. Stok ribuan unit, standar K3, mulai Rp 27.000/bln. Siap kirim same-day ke proyek.',
    images: [
      {
        url: '/images/hero/hero_slide_1_facade_engineer.webp',
        width: 1200,
        height: 675,
        alt: 'Sewa dan Jual Scaffolding Pipa 1.8mm SNI MSC Scaffolding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sewa & Jual Scaffolding Surabaya Sidoarjo - MSC Scaffolding',
    description: 'Pusat sewa & jual scaffolding steger pipa 1.8mm SNI di Surabaya & Sidoarjo. Kirim same-day.',
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
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.mscscaffolding.com/#organization',
        name: 'PT MITRA SOLUSI CAHAYA',
        alternateName: 'MSC Scaffolding',
        url: 'https://www.mscscaffolding.com',
        logo: 'https://www.mscscaffolding.com/images/branding/logo-msc-circle.png',
        telephone: '+6282257664755',
        email: 'sales@mscscaffolding.com',
        sameAs: [
          'https://www.facebook.com/mscscaffolding',
          'https://www.instagram.com/mscscaffolding',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+6282257664755',
            contactType: 'customer service',
            areaServed: ['ID-JI'],
            availableLanguage: ['Indonesian', 'Javanese', 'English'],
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.mscscaffolding.com/#hub-surabaya',
        name: 'MSC Scaffolding — Hub Surabaya',
        parentOrganization: {
          '@id': 'https://www.mscscaffolding.com/#organization',
        },
        image: 'https://www.mscscaffolding.com/images/hero/hero_slide_1_facade_engineer.webp',
        url: 'https://www.mscscaffolding.com',
        telephone: '+6282257664755',
        priceRange: 'IDR 27.000 - 585.000',
        areaServed: ['Surabaya', 'Gresik', 'Bangkalan'],
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
          latitude: -7.3235,
          longitude: 112.7831,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '07:30',
            closes: '17:00',
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.mscscaffolding.com/#hub-sidoarjo',
        name: 'MSC Scaffolding — Hub Sidoarjo',
        parentOrganization: {
          '@id': 'https://www.mscscaffolding.com/#organization',
        },
        image: 'https://www.mscscaffolding.com/images/proyek/msc_logistics_truck_clean.webp',
        url: 'https://www.mscscaffolding.com',
        telephone: '+6282257664755',
        priceRange: 'IDR 27.000 - 585.000',
        areaServed: ['Sidoarjo', 'Pasuruan', 'Mojokerto'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Tritan Hub, Gedangan',
          addressLocality: 'Sidoarjo',
          addressRegion: 'Jawa Timur',
          postalCode: '61254',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -7.3885,
          longitude: 112.7291,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '07:30',
            closes: '17:00',
          },
        ],
      },
    ],
  };

  return (
    <html lang="id" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        {/* Google tag (gtag.js) - loaded via lazyOnload to prioritize FCP and LCP */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18484671476"
        />
        <Script
          id="google-tag-aw"
          strategy="lazyOnload"
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
