import { CompanyInfo } from '@/types';

export const COMPANY_INFO: CompanyInfo = {
  legalName: 'PT MITRA SOLUSI CAHAYA',
  brandName: 'MSC Scaffolding',
  tagline: 'Penyedia Sewa & Jual Scaffolding Pipa 1.8mm SNI Terpercaya di Jawa Timur',
  whatsappHanifa: {
    number: '6282257664755',
    formatted: '0822-5766-4755',
    label: 'Bu Hanifa (Konsultan Sewa Cepat)',
    role: 'Konsultasi Teknis, Sewa Retail & Proyek Ruko/Mandor',
  },
  whatsappTender: {
    number: '628132562024',
    formatted: '0813-2562-024',
    label: 'CS Kantor Tender (B2B Procurement)',
    role: 'Pengadaan Tender BUMN/Swasta, Surat Penawaran Harga (SPH), Beli Unit Baru',
  },
  officePhone: '0822-5766-4755',
  email: 'sales@mscscaffolding.com',
  operatingHours: 'Senin - Sabtu: 07.30 - 17.00 WIB (Layanan Pengiriman Proyek 24/7 By Request)',
  warehouses: [
    {
      name: 'Gudang Utama Surabaya (Rungkut)',
      city: 'Surabaya',
      address: 'Kawasan Industri Rungkut Industri Raya No. 45, Rungkut Kidul, Surabaya, Jawa Timur 60293',
      phone: '0822-5766-4755',
      whatsapp: '6282257664755',
      mapUrl: 'https://maps.google.com/?q=-7.3197,112.7661',
      coordinates: {
        lat: -7.3197,
        lng: 112.7661,
      },
    },
    {
      name: 'Gudang Logistik Sidoarjo (Buduran)',
      city: 'Sidoarjo',
      address: 'Kawasan Pergudangan Lingkar Timur Km 5.5, Buduran, Kab. Sidoarjo, Jawa Timur 61252',
      phone: '0813-2562-024',
      whatsapp: '628132562024',
      mapUrl: 'https://maps.google.com/?q=-7.4288,112.7389',
      coordinates: {
        lat: -7.4288,
        lng: 112.7389,
      },
    },
  ],
};
