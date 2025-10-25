// src/content/site.js
const site = {
  brand: {
    name: "We Make Your Life Secure",
    tagline: "Driving growth with clarity and execution.",
    logo: "/logo/logo.jpeg",
  },
  nav: [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Products", href: "/products" },
    { label: "Paket CCTV", href: "/packages" },
    { label: "Contact Us", href: "/customer-service" },
  ],
  hero: {
    title: "We turn strategy into measurable outcomes.",
    subtitle:
      "Partner with a senior team that blends business strategy, product thinking, and technology delivery.",
    primaryCta: { label: "Book a Consultation", href: "#contact" },
    secondaryCta: { label: "Our Work", href: "#cases" },
  },
  services: [
    {
      title: "Instalasi CCTV",
      desc: "Kami menyediakan layanan instalasi CCTV yang mencakup perencanaan lokasi kamera, pemasangan, dan konfigurasi sistem. Teknisi kami yang berpengalaman akan memastikan setiap sudut penting terpantau dengan optimal, memberikan Anda keamanan maksimal.",
      bullets: [
        "Market & competitive analysis",
        "Product & GTM strategy",
        "OKR design",
      ],
    },
    {
      title: "Perbaikan & Pemeliharaan",
      desc: "Apabila ada masalah pada sistem CCTV Anda, teknisi kami siap untuk melakukan perbaikan dengan cepat dan tepat. Kami juga menawarkan layanan pemeliharaan berkala untuk memastikan sistem CCTV Anda selalu berfungsi dengan baik dan tahan lama.",
      bullets: [
        "UX research & design",
        "Web & mobile engineering",
        "Cloud & DevOps",
      ],
    },
    {
      title: "Konsultasi Keamanan",
      desc: "Tim kami dapat memberikan konsultasi mengenai kebutuhan keamanan Anda, termasuk rekomendasi jenis dan jumlah kamera, serta penempatan yang strategis untuk memastikan cakupan yang maksimal.",
      bullets: ["Data engineering", "BI dashboards", "ML/AI prototypes"],
    },
    {
      title: "Upgrade Sistem",
      desc: "Kami juga menawarkan layanan upgrade untuk sistem CCTV yang sudah usang atau tidak lagi memenuhi kebutuhan keamanan Anda. Dengan teknologi terbaru, kami akan meningkatkan sistem keamanan Anda agar selalu up-to-date dan efektif.",
      bullets: ["Data engineering", "BI dashboards", "ML/AI prototypes"],
    },
  ],

  footer: {
    copyright: `© ${new Date().getFullYear()} Duta CCTV. All rights reserved.`,
    socials: [
      { label: "TikTok", href: "https://www.tiktok.com/@dutacctv6?_t=ZS-90pluNzqAs6&_r=1" , logo: "/logo/tiktok-logo.png"},
      { label: "Instagram", href: "https://www.instagram.com/dutacctv_tangerang?igsh=MXF2eGQ3dmhteHpnZQ==" , logo: "/logo/instagram-logo.png"},
      { label: "Shopee", href: "https://shopee.co.id/dutacctv734" , logo: "/logo/shopee-logo.png"},
      { label: "Tokopedia", href: "https://www.tokopedia.com/duta-cctv-tanger", logo: "/logo/tokopedia-logo.png" },
    ],
  },
  servicesProducts: [
    {
      title: "CCTV",
      img: "/products/cctv.png",
      desc: "Meningkatkan keamanan dengan perekaman video real-time. Cocok untuk rumah, toko, gudang, dan kantor.",
    },
    {
      title: "PABX Telepon",
      img: "/products/pabx.png",
      desc: "Sistem telekomunikasi internal untuk mengatur panggilan masuk/keluar tanpa operator, efisien untuk bisnis.",
    },
    {
      title: "Fingerprint",
      img: "/products/fingerprint.png",
      desc: "Verifikasi identitas berbasis sidik jari untuk absensi/akses, cepat dan akurat.",
    },
    {
      title: "Smarthome",
      img: "/products/smarthome.png",
      desc: "Maksimalkan kenyamanan dan efisiensi rumah Anda dengan fungsi smarthome. Kontrol pintu, lampu, dan suhu ruangan dengan mudah untuk menciptakan kehidupan yang lebih modern dan cerdas.",
    },
    {
      title: "Fire Alarm",
      img: "/products/firealarm.png",
      desc: "Sebuah sistem penanda bahaya terhadap kebakaran yang bekerja untuk mendeteksi keberadaan api dan asap yang tidak diinginkan dengan memonitor perubahan lingkungan yang terkait dengan pembakaran.",
    },
    {
      title: "Alarm System",
      img: "/products/alarmsystem.png",
      desc: "Sistem alarm rumah dapat memonitor keamanan rumah dan memberikan laporan kepada pemilik jika terjadi tindakan yang mengancam keamanan rumah sehingga hal-hal yang tidak diinginkan dapat diminimalisir.",
    },
  ],
  clients: [
    { name: "dbschenker", logo: "/clients/dbschenker.png" },
    { name: "superindo", logo: "/clients/superindo.png" },
    { name: "pokphand", logo: "/clients/pokphand.png" },
    { name: "strada", logo: "/clients/strada.png" },
    { name: "vepro-nusa-persada", logo: "/clients/vepro-nusa-persada.png" },
    { name: "berdikari-jaya-plastik", logo: "/clients/berdikari-jaya-plastik.png" },
    { name: "cargill", logo: "/clients/cargill.png" },
    { name: "wki", logo: "/clients/wki.png" },
    { name: "btcocoa", logo: "/clients/btcocoa.png" },
    { name: "bppt", logo: "/clients/bppt.png" },
    { name: "tripatra", logo: "/clients/tripatra.png" },
    { name: "cpl", logo: "/clients/cpl.png" },
    { name: "mahameru", logo: "/clients/mahameru.png" },
    { name: "kanemory", logo: "/clients/kanemory.png" },
    { name: "adilmart", logo: "/clients/adilmart.png" },
    { name: "jict", logo: "/clients/jict.png" },
  ],

  articles: [
    {
      title: "Tips Menentukan Titik CCTV yang Efektif",
      excerpt:
        "Area krusial seperti pintu masuk, kasir, dan gudang harus jadi prioritas…",
      href: "/blog/tips-titik-cctv",
      cover: "/articles/titik-cctv.jpg",
      date: "2025-10-01",
    },
    {
      title: "Analog vs IP Camera: Mana yang Tepat?",
      excerpt:
        "Bedah biaya, kualitas, dan skenario pemasangan untuk bisnis skala kecil-menengah…",
      href: "/blog/analog-vs-ip",
      cover: "/articles/analog-vs-ip.jpg",
      date: "2025-09-20",
    },
  ],
  testimonialGallery: [
    { src: "/testimonials/testi-01.png", alt: "Instalasi CCTV di ruko A" },
    { src: "/testimonials/testi-02.png", alt: "Pemasangan di gudang B" },
    { src: "/testimonials/testi-03.png", alt: "Monitoring room kantor C" },
    { src: "/testimonials/testi-04.png", alt: "Kamera dome indoor" },
  ],
  heroInteractive: {
    video: "/hero/security-loop.mp4", // letakkan di public/hero/security-loop.mp4
    image: "/hero/hero-fallback.png", // fallback kalau tidak pakai video
    heading: "Solusi Keamanan Terintegrasi untuk Bisnis Anda",
    subheading:
      "Instalasi, perawatan, dan monitoring CCTV profesional — cepat, rapi, bergaransi.",
    ctas: [
      { label: "Konsultasi Gratis", href: "#contact", variant: "primary" },
      { label: "Lihat Paket", href: "/packages", variant: "secondary" },
    ],
  },

  promo: {
    badge: "Promo",
    title: "Paket CCTV Oktober — Diskon hingga 15%",
    desc: "Gratis survei lokasi & training penggunaan aplikasi.",
    href: "#services",
  },

  whyUs: [
    {
      title: "Teknisi Berpengalaman",
      desc: "Tim bersertifikat, pengerjaan rapi & terdokumentasi.",
      icon: "ShieldCheck", // lucide-react icon name
    },
    {
      title: "Garansi Resmi",
      desc: "Produk original & dukungan after-sales responsif.",
      icon: "BadgeCheck",
    },
    {
      title: "Instalasi Cepat",
      desc: "Survey cepat, jadwal fleksibel, selesai tepat waktu.",
      icon: "Bolt",
    },
    {
      title: "Konsultasi Gratis",
      desc: "Rancang titik kamera & jaringan sesuai kebutuhan.",
      icon: "Handshake",
    },
  ],

  stats: [
    { label: "Proyek Selesai", value: 500 },
    { label: "Klien Puas", value: 320 },
    { label: "Tahun Pengalaman", value: 12 },
    { label: "Kota Terlayani", value: 25 },
  ],

  contact: {
    headline: "Let’s talk about your goals",
    email: "hugoamerta@dtsonline.co.id",
    phone: "+62 813-1094-7486",
    address:
      "Grand Boulevard, Jl. Citra Raya Boulevard No.209Jl Blok V01A, Ciakar, Kec. Panongan, Kabupaten Tangerang, Banten 15710",
    whatsapp:
      "https://wa.me/6281310947486?text=Hi%2C%20saya%20ingin%20konsultasi",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.976701042441!2d106.5254221!3d-6.266794399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4207b98b42d833%3A0xf5ada83235550c44!2sPT.DUTA%20TEKNIK%20SOLUSINDO!5e0!3m2!1sen!2sid!4v1761309577950!5m2!1sen!2sid",

    formAction: "https://formspree.io/f/meorwlqb",
  },
  support: {
    email: "hugoamerta@dtsonline.co.id",
    whatsapp: "6281310947486",
    hours: "Senin–Sabtu, 09.00–18.00",
    sla: "Respon awal ≤ 1 jam kerja • Kunjungan ≤ 1–2 hari",
    topics: [
      "Instalasi / Pemasangan",
      "Kamera / Gambar",
      "DVR/NVR & Penyimpanan",
      "Akses via HP / Online",
      "Billing / Garansi",
      "Lainnya",
    ],
  },
};

// --- ABOUT PAGE CONTENT ---
site.about = {
  hero: {
    image: "/hero/hero-fallback.jpg",
    title: "Tentang DUTA CCTV",
    subtitle:
      "Kami adalah integrator sistem keamanan — spesialis CCTV, access control, alarm, dan solusi monitoring untuk rumah & bisnis.",
  },
  badges: [
    { label: "15+ Years Experience" },
    { label: "Licensed & Insured" },
    { label: "Certified Technicians" },
    { label: "After-Sales Support" },
  ],
  intro:
    "DUTA CCTV melayani Jasa Pasang CCTV, Alarm Smart Home & Access Control, Instalasi Jaringan, Automatic Gate dan berbagai layanan keamanan lainnya. DUTA CCTV menjalin komunikasi dengan pelanggan secara dekat untuk memahami tujuan dan tantangan mereka. Kami memposisikan diri sebagai mitra bisnis untuk kesuksesan setiap klien dengan menyediakan solusi sistem keamanan terbaik. Secara konsisten memperkenalkan teknologi baru dan memperbarui solusi untuk beradaptasi dengan kebutuhan klien yang berubah dan dinamika pasar. Tujuan DUTA CCTV Tangerang adalah menjamin keamanan terbaik untuk membantu klien mencapai tujuan bisnis mereka. Segera Hubungi Kami Untuk Pemasangan CCTV atau Security System Lainnya!",
  projects: [
    { title: "Warehouse Monitoring", image: "/projects/proj-01.jpg" },
    { title: "Hotel & Hospitality", image: "/projects/proj-02.jpg" },
    { title: "Retail Store Chain", image: "/projects/proj-03.jpg" },
  ],
  team: [
    { name: "Andi Pratama", role: "Project Manager", photo: "/team/andi.jpg" },
    {
      name: "Rina Putri",
      role: "Solutions Architect",
      photo: "/team/rina.jpg",
    },
    { name: "Budi Santoso", role: "Lead Technician", photo: "/team/budi.jpg" },
  ],
  certifications: [
    { name: "Hikvision Partner 2023", logo: "/certs/hikvision2023.png" },
    { name: "Hikvision Partner 2024", logo: "/certs/hikvision2024.png" },
    { name: "Hugo Amerta", logo: "/certs/hugoamerta.png" },
  ],
  cta: {
    title: "Siap tingkatkan keamanan bisnis Anda?",
    desc: "Jadwalkan survei lokasi gratis dan dapatkan rekomendasi paket terbaik.",
    href: "https://wa.me/6281310947486?text=Hi%2C%20saya%20ingin%20menjadwalkan%20survei%20lokasi",
    label: "Jadwalkan Survei",
  },
};

export default site;
