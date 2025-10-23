import site from "../content/site";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import WordLink from "../components/WordLink";

export default function ProductSection() {
  return (
    <Section
      id="product"
      kicker="Product"
      title="About Our Products"
      subtitle="Kami menyediakan solusi Security System yang lengkap untuk memastikan keamanan rumah, kantor, dan bisnis Anda. Dengan teknologi canggih dan berbagai pilihan sistem keamanan, kami siap membantu Anda melindungi aset berharga dan menciptakan lingkungan yang aman dan nyaman."
    >
      <div className="bg-white mt-8 md:mt-12 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {site.servicesProducts?.map((p) => (
              <ProductCard
                key={p.title}
                title={p.title}
                img={p.img}
                desc={p.desc}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <WordLink href={"/packages"}>{"Lihat Selengkapnya"}</WordLink>
          </div>

          {/* (Opsional) grid layanan lama di bawahnya
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {site.services.map((s) => (
              <article key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">{s.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </article>
            ))}
          </div>
          */}
        </div>
      </div>
    </Section>
  );
}
