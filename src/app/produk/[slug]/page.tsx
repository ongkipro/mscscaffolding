import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  ChevronRight,
  MessageSquare,
  FileText,
  CheckCircle2,
  Phone,
  Truck,
  Layers,
  ArrowRight,
} from 'lucide-react';
import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
} from '@/services/productService';
import { COMPANY_INFO } from '@/data/company';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan',
    };
  }

  return {
    title: `${product.name} — Spesifikasi Pipa 1.8mm SNI & Harga Sewa`,
    description: `${product.shortDesc} Tebal pipa ${product.pipeThickness}, SWL ${product.swlKg} kg, berat ${product.weightKg} kg. Sewa mulai Rp ${product.rentalPriceMonthly.toLocaleString('id-ID')}/bulan. Siap kirim same-day.`,
    openGraph: {
      title: `${product.name} | MSC Scaffolding PT Mitra Solusi Cahaya`,
      description: product.shortDesc,
      url: `https://www.mscscaffolding.com/produk/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = (await getProductsByCategory(product.category))
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const waText = encodeURIComponent(
    `Halo Bu Hanifa, saya ingin sewa/beli ${product.name} (SWL: ${product.swlKg} kg, Tebal: ${product.pipeThickness}). Mohon info penawaran harga & ketersediaan stok di gudang.`
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://www.mscscaffolding.com${product.image}`,
    description: product.description,
    sku: product.id,
    mpn: product.slug,
    brand: {
      '@type': 'Brand',
      name: 'MSC Scaffolding',
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.mscscaffolding.com/produk/${product.slug}`,
      priceCurrency: 'IDR',
      price: product.rentalPriceMonthly,
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Clean Unified Page Header */}
      <section className="bg-white border-b border-slate-100 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
            <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/produk" className="hover:text-orange-600 transition-colors">Produk</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">{product.name}</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-mono uppercase tracking-wider font-medium">
              {product.categoryName}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Product Detail Main Content */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Image Showcase - Clean Pure White (Zero Box/Frame) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full aspect-[4/3] bg-white overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2"
                />
              </div>

              {/* Quality & Safety Badges - Clean Borderless Pills */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-2xl bg-slate-50">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Kapasitas SWL</div>
                  <div className="text-sm font-bold text-slate-950 font-mono mt-0.5">{product.swlKg} kg</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Berat Bersih</div>
                  <div className="text-sm font-bold text-slate-950 font-mono mt-0.5">{product.weightKg} kg</div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/70">
                  <div className="text-[10px] font-mono text-emerald-700 uppercase tracking-wider">Standar K3</div>
                  <div className="text-sm font-bold text-emerald-800 font-mono mt-0.5">Verified</div>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Pricing & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                  Spesifikasi & Informasi Komponen
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Pricing Matrix - Clean Borderless Surface */}
              <div className="p-7 rounded-2xl bg-slate-50 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Tarif Sewa Bulanan</div>
                    <div className="text-2xl font-bold text-slate-950 font-mono mt-0.5">
                      Rp {product.rentalPriceMonthly.toLocaleString('id-ID')}
                      <span className="text-xs font-normal text-slate-500"> / set / bln</span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">
                      ✓ Bebas biaya ganti unit jika aus
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Harga Pembelian Unit Baru</div>
                    <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">
                      Rp {product.purchasePriceNew.toLocaleString('id-ID')}
                    </div>
                    {product.purchasePriceUsed && (
                      <div className="text-xs text-slate-600 font-mono mt-0.5">
                        Rekondisi: Rp {product.purchasePriceUsed.toLocaleString('id-ID')}
                      </div>
                    )}
                  </div>
                </div>

                {/* Single Conversion Action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappHanifa.number}?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-orange-600 hover:bg-orange-500 active:scale-[0.98] text-white text-sm font-semibold tracking-wide transition shadow-md shadow-orange-950/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Pesan / Konsultasi</span>
                  </a>
                </div>
              </div>

              {/* Delivery Lead Time Notice */}
              <div className="p-5 rounded-2xl bg-slate-50/60 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Truck className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>Kesiapan Pengiriman Gudang:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 pl-6">
                  <div>Surabaya & Sidoarjo: <strong>2 - 4 Jam (Same-Day)</strong></div>
                  <div>Gresik, Pasuruan, Mojokerto: <strong>4 - 6 Jam</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Spec List - Clean & De-duplicated */}
          <div className="mt-14 pt-10 border-t border-slate-100">
            <div className="max-w-2xl mb-6">
              <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-2 block">
                Spesifikasi Teknis
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                Parameter Teknis & Uji Kelaikan
              </h3>
            </div>

            {(() => {
              interface DisplaySpecItem {
                label: string;
                value: string;
                highlight?: 'orange' | 'emerald';
              }

              const primarySpecs: DisplaySpecItem[] = [
                { label: 'Dimensi Geometri', value: product.dimensions },
                { label: 'Ketebalan Pipa Riil', value: product.pipeThickness, highlight: 'orange' },
                { label: 'Kapasitas Beban Aman (SWL)', value: `${product.swlKg} kg`, highlight: 'emerald' },
                { label: 'Berat Total Komponen', value: `${product.weightKg} kg` },
                { label: 'Material Pipa', value: product.material },
                { label: 'Finishing Lapisan', value: product.finish },
              ];

              const extraSpecs: DisplaySpecItem[] = product.specs
                .filter((s) => {
                  const lower = s.label.toLowerCase();
                  return (
                    !lower.includes('tebal') &&
                    !lower.includes('swl') &&
                    !lower.includes('kapasitas')
                  );
                })
                .map((s) => ({ label: s.label, value: s.value }));

              const allSpecs: DisplaySpecItem[] = [...primarySpecs, ...extraSpecs];

              return (
                <div className="max-w-4xl divide-y divide-slate-100 border-y border-slate-100">
                  {allSpecs.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6 hover:bg-slate-50/50 transition-colors px-2"
                    >
                      <span className="text-xs sm:text-sm text-slate-500 font-medium">
                        {item.label}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-semibold font-mono ${
                          item.highlight === 'orange'
                            ? 'text-orange-600 font-bold'
                            : item.highlight === 'emerald'
                            ? 'text-emerald-700 font-bold'
                            : 'text-slate-900'
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Product Highlights & Features */}
          <div className="mt-12 pt-8 border-t border-slate-100 max-w-4xl">
            <h3 className="text-base font-bold text-slate-950 mb-4">
              Keunggulan Kualitas Komponen {product.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {product.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 py-1 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Komponen Terkait Kategori {product.categoryName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Komponen pelengkap yang biasa disewa bersama untuk proyek perancah:
                  </p>
                </div>
                <Link
                  href="/produk"
                  className="text-xs font-semibold text-orange-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Lihat Semua Produk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/produk/${rel.slug}`}
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative w-full aspect-[4/3] bg-white overflow-hidden mb-3 flex items-center justify-center">
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{rel.categoryName}</div>
                      <h4 className="text-base font-bold text-slate-950 group-hover:text-orange-600 transition-colors mt-1 line-clamp-1">
                        {rel.name}
                      </h4>
                    </div>
                    <div className="mt-3 flex items-baseline justify-between text-xs">
                      <span className="font-mono font-bold text-slate-950 text-sm">
                        Rp {rel.rentalPriceMonthly.toLocaleString('id-ID')}
                        <span className="text-[10px] font-normal text-slate-400"> /bln</span>
                      </span>
                      <span className="text-xs text-slate-900 group-hover:text-orange-600 font-bold flex items-center gap-1 transition-colors">
                        Detail <ArrowRight className="w-3 h-3 text-orange-500" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
