// src/content/products.js
const products = [
  {
    slug: "cctv",
    title: "CCTV",
    blurb:
      "Solusi pengawasan lengkap untuk rumah & bisnis — IP Camera, Analog, hingga Wireless.",
    variants: [
      {
        name: "Kamera IP",
        img: "/products/cctv/ip.jpg",
        bullets: ["Resolusi hingga 4K", "PoE / NVR Ready", "Aplikasi mobile"],
      },
      {
        name: "Kamera Analog CCTV",
        img: "/products/cctv/analog.jpg",
        bullets: ["HDCVI/TVI/AHD", "DVR hemat", "Upgrade dari analog lama"],
      },
      {
        name: "Kamera Wireless",
        img: "/products/cctv/wireless.jpg",
        bullets: ["Instalasi cepat", "Cloud/SD Card", "Ideal untuk rumah/toko"],
      },
    ],
    brands: [
      { name: "HIKVISION", logo: "/brands/hikvision.png" },
      { name: "Dahua", logo: "/brands/dahua.png" },
      { name: "EZVIZ", logo: "/brands/ezviz.png" },
      { name: "Honeywell", logo: "/brands/honeywell.png" },
      { name: "Uniview", logo: "/brands/uniview.png" },
    ],
  },
  {
    slug: "access-control",
    title: "Access Control",
    blurb:
      "Pengamanan akses pintu kayu/kaca (frame aluminium & frameless) dengan reader & controller.",
    variants: [
      {
        name: "Pintu Kayu & Kaca (Frame Aluminium)",
        img: "/products/access/aluminium.jpg",
        bullets: ["Magnetic lock/Strike", "Push button & sensor", "Exit switch"],
      },
      {
        name: "Pintu Kaca Single Frameless",
        img: "/products/access/frameless.jpg",
        bullets: ["Glass door lock", "Bracket khusus", "Rapi & elegan"],
      },
    ],
    brands: [
      { name: "ZKTeco", logo: "/brands/zkteco.png" },
      { name: "ENIGMA", logo: "/brands/enigma.png" },
      { name: "entrypass", logo: "/brands/entrypass.png" },
    ],
  },
  {
    slug: "mesin-absensi",
    title: "Mesin Absensi",
    blurb:
      "Sistem kehadiran karyawan dengan pilihan Fingerprint, Face Recognition, Kartu, & Telapak Tangan.",
    variants: [
      { name: "Fingerprint", img: "/products/attendance/fingerprint.jpg", bullets: ["Akurat & cepat", "Laporan otomatis"] },
      { name: "Kartu Akses", img: "/products/attendance/card.jpg", bullets: ["RFID/Mifare", "Fleksibel"] },
      { name: "Deteksi Wajah", img: "/products/attendance/face.jpg", bullets: ["Anti-bobol", "Masa kini"] },
      { name: "Telapak Tangan", img: "/products/attendance/palm.jpg", bullets: ["Higienis", "Aman"] },
    ],
    brands: [
      { name: "Solution", logo: "/brands/solution.png" },
      { name: "ZKTeco", logo: "/brands/zkteco.png" },
      { name: "Fingerspot", logo: "/brands/fingerspot.png" },
    ],
  },
  {
    slug: "retail-machine",
    title: "Retail Machine",
    blurb:
      "Perangkat pendukung kasir/retail: POS, mobile printer, cash drawer, dan scanner barcode.",
    variants: [
      { name: "Desktop POS", img: "/products/retail/pos.jpg", bullets: ["All-in-one", "Stabil untuk toko"] },
      { name: "Mobile Printer", img: "/products/retail/printer.jpg", bullets: ["Thermal 58/80mm", "Bluetooth/Wi-Fi"] },
      { name: "Cash Drawer", img: "/products/retail/drawer.jpg", bullets: ["RJ11/USB", "Kuat & awet"] },
      { name: "Scanner Barcode", img: "/products/retail/scanner.jpg", bullets: ["1D/2D", "Auto-sense"] },
    ],
    brands: [
      { name: "Honeywell", logo: "/brands/honeywell.png" },
      { name: "JANZ", logo: "/brands/janz.png" },
      { name: "ZEBRA", logo: "/brands/zebra.png" },
    ],
  },
  {
    slug: "smart-home",
    title: "Smart Home",
    blurb:
      "Sensor & otomasi untuk keamanan dan kenyamanan hunian.",
    variants: [
      { name: "Door Sensor", img: "/products/smarthome/door.jpg", bullets: ["Notifikasi buka/tutup", "Integrasi app"] },
      { name: "Beam Sensor", img: "/products/smarthome/beam.jpg", bullets: ["Perimeter", "Anti-intrusi"] },
      { name: "Temperature Sensor", img: "/products/smarthome/temp.jpg", bullets: ["Alert suhu", "Smart scene"] },
    ],
    brands: [
      { name: "BARDI", logo: "/brands/bardi.png" },
      { name: "EZVIZ", logo: "/brands/ezviz.png" },
    ],
  },
  {
    slug: "alarm-system",
    title: "Alarm System",
    blurb:
      "Paket alarm dengan sensor lengkap untuk proteksi kebakaran & intrusi.",
    variants: [
      { name: "Door Magnetic Sensor", img: "/products/alarm/door-magnetic.jpg", bullets: ["Pintu/jendela", "Low power"] },
      { name: "PIR Sensor", img: "/products/alarm/pir.jpg", bullets: ["Deteksi gerak", "Jangkauan luas"] },
      { name: "Beam Sensor", img: "/products/alarm/beam.jpg", bullets: ["Perimeter luar", "Anti-sabotase"] },
      { name: "Temperature Sensor", img: "/products/alarm/temp.jpg", bullets: ["Altert suhu naik", "Early warning"] },
      { name: "Smoke/Fire Sensor", img: "/products/alarm/smoke.jpg", bullets: ["Deteksi asap/panas", "Siren otomatis"] },
    ],
    brands: [
      { name: "HIKVISION", logo: "/brands/hikvision.png" },
      { name: "Honeywell", logo: "/brands/honeywell.png" },
      { name: "Dahua", logo: "/brands/dahua.png" },
      { name: "ALBOx", logo: "/brands/albox.png" },
    ],
  },
];

export default products;
