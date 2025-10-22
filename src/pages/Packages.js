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

function pickShowcaseCategory(brand) {
  if (brand.slug === "ezviz") return brand.categories?.[0];
  return brand.categories?.find(
    (c) =>
      c?.slug?.toLowerCase() === "full-hd" ||
      c?.name?.trim().toLowerCase() === "full hd"
  );
}

export default function Packages() {
  const { brand: brandParam } = useParams();        // ← cek apakah /packages/:brand
  const h = site.heroInteractive;

  // ====== BRAND PAGE ======
  const brand = useMemo(
    () => packages.find((b) => b.slug === brandParam),
    [brandParam]
  );
  const isBrandPage = Boolean(brandParam && brand);

  // ====== LANDING (semua merek) ======
  const brandsToShow = ["hikvision", "dahua", "hilook", "ezviz"];
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
            : "Paket Full HD dari Hikvision, Dahua, dan HiLook — plus paket EZVIZ. Instalasi rapi, garansi resmi."
        }
        image={h.image}
        overlay="bg-slate-900/50"
      />

      {/* ================= LANDING /packages ================= */}
      {!isBrandPage && (
        <>
          <Container className="py-10">
            <p className="mx-auto max-w-3xl text-center text-slate-700">
              Harga sudah termasuk pemasangan standar, setting online, dan garansi.
              Hubungi kami untuk survei gratis & penawaran spesifik lokasi Anda.
            </p>
          </Container>

          {showcase.map((b) => (
            <Section
              key={b.slug}
              title={b.brand}
              subtitle={b.cat?.name ? `Kategori: ${b.cat.name}` : "Data paket belum tersedia."}
            >
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

      <Footer />
    </div>
  );
}
