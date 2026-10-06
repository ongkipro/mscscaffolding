import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SITE_URL } from '@/lib/seo';

export interface Crumb {
  name: string;
  /** Omit for the current page (last crumb). */
  href?: string;
}

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD. "Beranda" is prepended automatically. */
export default function Breadcrumbs({ items, className = 'mb-4' }: { items: Crumb[]; className?: string }) {
  const trail: Crumb[] = [{ name: 'Beranda', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href === '/' ? '' : crumb.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
        {trail.map((crumb, idx) => (
          <li key={crumb.name} className="flex items-center gap-2">
            {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-orange-600 transition-colors">
                {crumb.name}
              </Link>
            ) : (
              <span className="text-slate-900 font-bold" aria-current="page">
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
