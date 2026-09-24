import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product, ProductCategory, CategorySlug } from '@/types';

export async function getAllProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug);
}

export async function getProductsByCategory(category: CategorySlug): Promise<Product[]> {
  if (category === 'semua') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  return CATEGORIES;
}

export async function getFeaturedProducts(limit: number = 6): Promise<Product[]> {
  return PRODUCTS.slice(0, limit);
}
