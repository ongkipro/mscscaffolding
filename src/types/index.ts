export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export type CategorySlug = 
  | 'semua'
  | 'rangka-utama'
  | 'pijakan-tangga'
  | 'aksesoris-support'
  | 'roda-aksesoris';

export interface ProductCategory {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface TechnicalSpecItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  categoryName: string;
  shortDesc: string;
  description: string;
  image: string;
  pipeThickness: string; // e.g. "1.8 mm Real SNI"
  weightKg: number;
  swlKg: number;         // e.g. 1500
  dimensions: string;    // e.g. "T 170 cm x L 122 cm"
  material: string;      // e.g. "Pipa Baja Hitam / Galvanis SNI"
  finish: string;        // e.g. "Celup Galvanis Anti Karat"
  rentalPriceMonthly: number; // in IDR
  purchasePriceNew: number;   // in IDR
  purchasePriceUsed?: number; // in IDR
  standards: string[];   // ["Permenaker 01/1980", "EN 12811-1"]
  specs: TechnicalSpecItem[];
  features: string[];
  inStock: boolean;
}

export interface WarehouseLocation {
  name: string;
  city: string;
  address: string;
  shortAddress?: string;
  phone: string;
  whatsapp: string;
  mapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ServiceArea {
  slug: string;
  city: string;
  title: string;
  distanceKm: string;
  leadTimeHours: string;
  industrialEstates: string[];
  description: string;
  warehouseHub: string;
}

export interface CompanyInfo {
  legalName: string;
  brandName: string;
  tagline: string;
  whatsappHanifa: {
    number: string;
    formatted: string;
    label: string;
    role: string;
  };
  whatsappTender: {
    number: string;
    formatted: string;
    label: string;
    role: string;
  };
  officePhone: string;
  email: string;
  operatingHours: string;
  warehouses: WarehouseLocation[];
}

export interface CalculatorState {
  length: number;
  height: number;
  type: 'fasad' | 'cor';
}

export interface CalculationResult {
  totalSets: number;
  mainFrames: number;
  crossBraces: number;
  jointPins: number;
  catwalks: number;
  jackBases: number;
  uHeads: number;
  pipeSupports: number;
  tangga: number;
  estimatedRentalMonthly: number;
  estimatedPurchaseNew: number;
}
