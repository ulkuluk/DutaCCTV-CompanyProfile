// src/content/packages.js
export const whatsapp = "62812xxxxxxx"; // ganti nomor WA

const packages = [
  {
    brand: "Hikvision",
    slug: "hikvision",
    logo: "/brands/hikvision.png",
    cover: "/packages/hikvision/cover.jpg",
    summary: "Paket analog & IP dengan kualitas stabil, cocok untuk rumah & ruko.",
    startFrom: 4400000,
    categories: [
      {
        name: "Full HD",
        slug: "full-hd",
        theme: "blue",
        items: [
          {
            title: "2 Channel Hikvision Full HD",
            price: 4400000,
            img: "/packages/hikvision/fullhd-2ch.jpg",
            features: [
              "2 Unit Indoor/Outdoor",
              "DVR 4 Channel",
              "HDD 500 GB",
              "Kabel RG59+P 30 m",
              "Adaptor 12V-2A",
              "4x BNC Drat, 2x Jack DC",
            ],
          },
          {
            title: "4 Channel Hikvision Full HD",
            price: 6200000,
            img: "/packages/hikvision/fullhd-4ch.jpg",
            features: [
              "4 Unit Indoor/Outdoor",
              "DVR 4 Channel",
              "HDD 500 GB",
              "Kabel RG59+P 60 m",
              "Adaptor 12V-5A",
              "8x BNC Drat, 4x Jack DC",
            ],
          },
          {
            title: "6 Channel Hikvision Full HD",
            price: 8500000,
            img: "/packages/hikvision/fullhd-6ch.jpg",
            features: [
              "6 Unit Indoor/Outdoor",
              "DVR 8 Channel",
              "HDD 1 TB",
              "Kabel RG59+P 90 m",
              "PSU 12V-10A",
              "12x BNC Drat, 6x Jack DC",
            ],
          },
          {
            title: "8 Channel Hikvision Full HD",
            price: 10000000,
            img: "/packages/hikvision/fullhd-8ch.jpg",
            features: [
              "8 Unit Indoor/Outdoor",
              "DVR 8 Channel",
              "HDD 1 TB",
              "Kabel RG59+P 120 m",
              "PSU 12V-10A",
              "16x BNC Drat, 8x Jack DC",
            ],
          },
        ],
      },
      { name: "Audio", slug: "audio", theme: "blue", items: [] },
      { name: "Full Color", slug: "full-color", theme: "blue", items: [] },
      { name: "IP CAM", slug: "ip-cam", theme: "blue", items: [] },
    ],
  },

  {
    brand: "Dahua",
    slug: "dahua",
    logo: "/brands/dahua.png",
    cover: "/packages/dahua/cover.jpg",
    summary: "Pilihan hemat dengan fitur lengkap & dukungan purna jual.",
    startFrom: 4200000,
    categories: [
      {
        name: "Full HD",
        slug: "full-hd",
        theme: "blue",
        items: [
          {
            title: "2 Channel Dahua Full HD",
            price: 4200000,
            img: "/packages/dahua/fullhd-2ch.jpg",
            features: [
              "2 Unit Indoor/Outdoor",
              "XVR 4 Channel",
              "HDD 500 GB",
              "Kabel RG59+P 30 m",
              "Adaptor 12V-2A",
              "4x BNC, 2x Jack DC",
            ],
          },
          {
            title: "4 Channel Dahua Full HD",
            price: 6000000,
            img: "/packages/dahua/fullhd-4ch.jpg",
            features: [
              "4 Unit Indoor/Outdoor",
              "XVR 4 Channel",
              "HDD 500 GB",
              "Kabel RG59+P 60 m",
              "Adaptor 12V-5A",
              "8x BNC, 4x Jack DC",
            ],
          },
        ],
      },
    ],
  },

  {
    brand: "HiLook",
    slug: "hilook",
    logo: "/brands/hilook.png",
    cover: "/packages/hilook/cover.jpg",
    summary: "Sub-brand Hikvision, harga ramah & kualitas teruji.",
    startFrom: 3990000,
    categories: [
      {
        name: "Full HD",
        slug: "full-hd",
        theme: "blue",
        items: [
          {
            title: "2 Channel HiLook Full HD",
            price: 3990000,
            img: "/packages/hilook/fullhd-2ch.jpg",
            features: [
              "2 Unit Indoor/Outdoor",
              "DVR 4 Channel",
              "HDD 500 GB",
              "Kabel RG59+P 30 m",
              "Adaptor 12V-2A",
              "4x BNC, 2x Jack DC",
            ],
          },
          {
            title: "4 Channel HiLook Full HD",
            price: 5800000,
            img: "/packages/hilook/fullhd-4ch.jpg",
            features: [
              "4 Unit Indoor/Outdoor",
              "DVR 4 Channel",
              "HDD 500 GB",
              "Kabel RG59+P 60 m",
              "Adaptor 12V-5A",
              "8x BNC, 4x Jack DC",
            ],
          },
        ],
      },
    ],
  },

  {
    brand: "EZVIZ",
    slug: "ezviz",
    logo: "/brands/ezviz.png",
    cover: "/packages/ezviz/cover.jpg",
    summary: "Kamera smart Wi-Fi untuk rumah, instalasi cepat & cloud ready.",
    startFrom: 2799000,
    categories: [
      {
        name: "Paket",
        slug: "paket",
        theme: "blue",
        items: [
          {
            title: "EZVIZ C3N + C6N (2 Channel)",
            price: 2790000,
            img: "/packages/ezviz/2ch.jpg",
            features: [
              "C3N Outdoor 1 Unit",
              "C6N Indoor 1 Unit",
              "MicroSD 32GB (2)",
              "Kabel Power 5 m",
              "Stop Kontak 2, Steker 2",
              "Garansi 1 Tahun",
            ],
          },
          {
            title: "EZVIZ C3N + C6N (4 Channel)",
            price: 4950000,
            img: "/packages/ezviz/4ch.jpg",
            features: [
              "C3N Outdoor 2 Unit",
              "C6N Indoor 2 Unit",
              "MicroSD 32GB (4)",
              "Kabel Power 10 m",
              "Stop Kontak 4, Steker 4",
              "Garansi 1 Tahun",
            ],
          },
        ],
      },
    ],
  },
];

export default packages;
