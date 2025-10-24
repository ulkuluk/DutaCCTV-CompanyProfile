import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import HeroComp from "../components/HeroComp";
import Section from "../components/Section";
import PackageCardSimple from "../components/PackageCardSimple";
import packages from "../content/packages";
import site from "../content/site";
import FAQSection from "../sections/FaqSection";
import faqItems from "../content/faq";
import AppointmentBannerSection from "../sections/AppointmentBannerSection";
import { i } from "framer-motion/m";

function pickShowcaseCategory(brand) {
  return brand.categories?.[0];
}

export default function Packages() {
  const { brand: brandParam } = useParams(); // ← cek apakah /packages/:brand
  const h = site.heroInteractive;

  // ====== BRAND PAGE ======
  const brand = useMemo(
    () => packages.find((b) => b.slug === brandParam),
    [brandParam]
  );
  const isBrandPage = Boolean(brandParam && brand);

  // ====== LANDING (semua merek) ======
  const brandsToShow = ["hikvision", "hilook", "ezviz"];
  const showcase = useMemo(
    () =>
      packages
        .filter((b) => brandsToShow.includes(b.slug))
        .map((b) => ({ ...b, cat: pickShowcaseCategory(b) })),
    []
  );

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <HeroComp
        title="Paket CCTV"
        subtitle={
          isBrandPage
            ? `${brand.brand} — semua paket & kategori`
            : "Paket Full HD dari Hikvision, HiLook, dan EZVIZ. Instalasi rapi, garansi resmi."
        }
        image={h.image}
        overlay="bg-slate-900/50"
      />

      {/* ================= LANDING /packages ================= */}
      {!isBrandPage && (
        <>
          <Container className="py-10">
            <p className="mx-auto max-w-4xl text-justify text-center text-slate-700">
              Duta CCTV adalah penyedia terkemuka dalam solusi keamanan
              terintegrasi, khususnya dalam sistem keamanan dan CCTV. Dengan
              pengalaman puluhan tahun di industri ini, kami telah membuktikan
              diri sebagai mitra yang dapat diandalkan untuk memenuhi kebutuhan
              keamanan pelanggan kami. Kami siap membantu Anda dalam semua
              kebutuhan instalasi, perbaikan, dan pemeliharaan sistem keamanan
              CCTV. Kami menjamin kualitas layanan yang profesional, cepat, dan
              efisien.
            </p>
          </Container>

          {showcase.map((b) => (
            <Section key={b.slug} title={b.brand}>
              {b.cat?.items?.length ? (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {b.cat.items.map((pkg, i) => (
                    <PackageCardSimple key={i} pkg={pkg} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-600">
                  Belum ada data paket untuk {b.brand}.
                </div>
              )}
            </Section>
          ))}
        </>
      )}

      {/* =============== BRAND PAGE /packages/:brand =============== */}
      {isBrandPage && (
        <>
          {brand.categories?.map((cat) => (
            <Section
              key={cat.slug || cat.name}
              title={`${brand.brand} — ${cat.name}`}
            >
              {cat.items?.length ? (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {cat.items.map((pkg, i) => (
                    <PackageCardSimple key={i} pkg={pkg} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-600">
                  Belum ada paket untuk kategori ini.
                </div>
              )}
            </Section>
          ))}
        </>
      )}

      <FAQSection items={faqItems} />
      <AppointmentBannerSection />
      <Footer />
    </div>
  );
}
