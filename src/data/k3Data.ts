export interface K3Standard {
  code: string;
  title: string;
  scope: string;
  details: string[];
}

export interface InspectionChecklistItem {
  category: string;
  check: string;
  tolerance: string;
  critical: boolean;
}

export const K3_STANDARDS: K3Standard[] = [
  {
    code: 'Permenakertrans No. 01/MEN/1980',
    title: 'Standar Keselamatan dan Kesehatan Kerja pada Konstruksi Bangunan',
    scope: 'Regulasi wajib K3 Kementerian Ketenagakerjaan RI Bab V tentang Perancah (Scaffolding).',
    details: [
      'Pondasi perancah harus diletakkan di atas tanah padat dan menggunakan papan landasan (sole plate) serta jack base.',
      'Perancah dengan tinggi melebihi 4 kali lebar dasar harus diikat kuat pada dinding struktur bangunan (wall tie / anchoring).',
      'Pemasangan handrail keselamatan (tinggi 1 meter) dan toe board pembatas tepi pada lantai kerja.',
      'Hanya pekerja yang kompeten dan menggunakan APD lengkap (Safety Helmet, Full Body Harness, Safety Boots) yang diizinkan merakit.',
    ],
  },
  {
    code: 'EN 12811-1:2003',
    title: 'European Standard for Temporary Works Equipment — Scaffolds',
    scope: 'Standar internasional untuk perhitungan daya dukung beban, geometri rangka, dan kestabilan perancah modular.',
    details: [
      'Beban kerja aman (SWL) terdistribusi merata hingga 1.500 kg per kolom tiang penyangga utama.',
      'Toleransi defleksi maksimum lentur tiang perancah di bawah beban tidak melebihi L/500.',
      'Pengujian mekanik terhadap ketahanan geser pin kaitan dan las sambungan gawang.',
    ],
  },
  {
    code: 'Scafftag System Protocol',
    title: 'Sistem Labeling Inspeksi Harian Perancah',
    scope: 'Manajemen visual status kelaikan perancah di area proyek konstruksi.',
    details: [
      'Green Tag (HIJAU): Perancah telah diinspeksi resmi oleh HSE, aman dan laik dipakai penuh untuk bekerja.',
      'Yellow Tag (KUNING): Perancah dalam pengawasan khusus atau memiliki batasan kapasitas beban tertentu.',
      'Red Tag (MERAH): Perancah dalam proses perakitan, pembongkaran, atau rusak. DILARANG DILALUI / DIGUNAKAN.',
    ],
  },
];

export const INSPECTION_CHECKLIST: InspectionChecklistItem[] = [
  {
    category: 'Landasan & Tapak Bawah',
    check: 'Kondisi tanah padat, bebas genangan air, terpasang sole plate dan jack base kokoh',
    tolerance: 'Kemiringan tapak maks 1%',
    critical: true,
  },
  {
    category: 'Struktur Tiang & Rangka Vertikal',
    check: 'Pipa tegak lurus sempurna tanpa deformasi bengkok atau penyok',
    tolerance: 'Deviasi ketegakan maks 1:500',
    critical: true,
  },
  {
    category: 'Pengaku Silang (Cross Brace)',
    check: 'Cross brace terpasang menyilang lengkap di kedua sisi dan terkunci rapat pada lock pin',
    tolerance: '100% terkunci tanpa oblak',
    critical: true,
  },
  {
    category: 'Lantai Kerja (Catwalk Metal Plank)',
    check: 'Pelat metal plank terpasang rapat tanpa celah berlebih, pengait terkunci pada rangka pipa',
    tolerance: 'Celah antar papan maks 25 mm',
    critical: true,
  },
  {
    category: 'Pengaman Tepi (Handrail & Toe Board)',
    check: 'Pagar pengaman atas (1 m) dan pengaman tengah (0.5 m) terpasang di semua sisi terbuka',
    tolerance: 'Tinggi handrail 950 - 1100 mm',
    critical: true,
  },
  {
    category: 'Ikatan Dinding (Wall Tie Anchoring)',
    check: 'Ikatan kaku ke struktur beton setiap 3 tingkat elevasi untuk menahan tiupan angin',
    tolerance: 'Jarak vertikal maks 6 meter',
    critical: true,
  },
];
