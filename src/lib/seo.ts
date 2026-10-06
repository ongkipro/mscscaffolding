import type { Metadata } from 'next';

export const SITE_URL = 'https://mscscaffolding.com';
export const SITE_NAME = 'MSC Scaffolding';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

interface OgImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

// JPG (not WebP) so WhatsApp/Facebook link previews render reliably.
export const DEFAULT_OG_IMAGE: OgImage = {
  url: '/images/hero/hero_slide_1_facade_engineer.jpg',
  width: 1376,
  height: 768,
  alt: 'Sewa dan jual scaffolding pipa 1.8mm SNI Surabaya, Sidoarjo, Gresik',
};

interface PageMetaInput {
  /** Page title without the brand suffix (keep <= 42 chars so the full title stays <= 60). */
  title: string;
  /** 70–160 chars. */
  description: string;
  /** Path starting with "/", e.g. "/produk". Use "/" for the homepage. */
  path: string;
  image?: OgImage;
  /** Use the title verbatim (no "| MSC Scaffolding" template suffix). */
  absoluteTitle?: boolean;
}

/**
 * Next.js merges metadata shallowly: a page-level `openGraph`/`twitter` object replaces the
 * root one entirely. Building every page's metadata here keeps canonical, OG and Twitter
 * fields complete and consistent with the visible <title>.
 */
export function pageMetadata({ title, description, path, image, absoluteTitle }: PageMetaInput): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      siteName: SITE_NAME,
      url,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

/** Product photos ship as both .webp and .jpg; previews use the .jpg twin. */
export function productOgImage(webpPath: string, alt: string): OgImage {
  return { url: webpPath.replace(/\.webp$/, '.jpg'), width: 800, height: 600, alt };
}
