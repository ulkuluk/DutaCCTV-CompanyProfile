// src/pages/Products.jsx
import { useMemo, useState, useEffect } from "react";
import products from "../content/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Section from "../components/Section";
import ProductCardDetail from "../components/ProductCardDetail";
import BrandStrip from "../components/BrandStrip";
import HeroComp from "../components/HeroComp";
import site from "../content/site";

export default function Products() {
  const categories = products; // [{ slug, title, blurb, variants, brands }]
  const tabs = useMemo(
    () => [
      { slug: "all", title: "All" },
      ...categories.map((c) => ({ slug: c.slug, title: c.title })),
    ],
    [categories]
  );

  // default: All
  const [active, setActive] = useState("all");
  const h = site.heroInteractive;

  //   // optional: kalau user datang dengan hash #cctv, set filter sesuai hash
  //   useEffect(() => {
  //     const hash = window.location.hash?.replace("#", "");
  //     if (hash && tabs.some(t => t.slug === hash)) setActive(hash);
  //   }, [tabs]);

  const visible = useMemo(() => {
    if (active === "all") return categories;
    const found = categories.find((c) => c.slug === active);
    return found ? [found] : categories;
  }, [active, categories]);

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <HeroComp
        title="Products"
        subtitle="Pilihan perangkat keamanan & otomasi untuk rumah, kantor, hingga
            proyek skala besar."
        image={h.image}
        overlay="bg-slate-900/50"
      />
      <Container className="py-10">
        <p className="mx-auto max-w-4xl text-justify text-center text-slate-700">
          DUTA CCTV memiliki pengalaman dalam instalasi dan maintenance meliputi
          CCTV , Access Control , Mesin Absensi (time & attendance) , Alarm
          System , Smart Home , Retail Machine , Telepon PABX dan masih banyak
          lagi. Kami juga memiliki teknisi yang sangat handal di bidang kamera
          pengawas yang siap membantu memberikan solusi disaat Anda mengalami
          kendala dengan kamera. Jika Anda baru pertama kali membeli CCTV tanpa
          instalasi, kami menjadi solusi untuk Anda.
        </p>
      </Container>

      {/* FILTER TABS */}
      <Container className="pt-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => {
                setActive(t.slug);
                // update hash (opsional)
                // if (t.slug === "all") history.replaceState(null, "", "/products");
                // else location.hash = t.slug;
              }}
              className={`rounded-full border px-4 py-2 text-sm transition
                ${
                  active === t.slug
                    ? "border-red-600 text-red-700 bg-white"
                    : "border-red-200 hover:bg-red-50"
                }`}
            >
              {t.title}
            </button>
          ))}
        </div>
      </Container>

      {/* LIST KATEGORI (semua atau satu sesuai filter) */}
      {visible.map((cat) => (
        <Section
          key={cat.slug}
          id={cat.slug}
          title={cat.title}
          subtitle={cat.blurb}
          className="pt-6"
        >
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {cat.variants.map((v) => (
              <ProductCardDetail
                key={v.name}
                name={v.name}
                img={v.img}
                bullets={v.bullets}
              />
            ))}
          </div>
          <BrandStrip brands={cat.brands} />
        </Section>
      ))}

      <Footer />
    </div>
  );
}
