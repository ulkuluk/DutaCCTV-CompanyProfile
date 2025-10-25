import site from "../content/site";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Section from "../components/Section";
import Badge from "../components/Badge"; // hapus import ini jika tak pakai Badge
import ProjectSection from "../sections/ProjectsSection";
import PartnersSection from "../sections/PartnersSection";
import AppointmentBannerSection from "../sections/AppointmentBannerSection";
import gallery from "../content/gallery";

export default function About() {
  const a = site.about;
  const i = site.heroInteractive;

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <section className="relative z-0 overflow-hidden">
        <img
          src={"/hero/hero-about.png"}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-slate-900/60" />
        <Container className="py-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            {a.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-blue-100">{a.hero.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {(a.badges || []).map((b) => (
              <Badge key={b.label}>{b.label}</Badge>
            ))}
          </div>
        </Container>
        <svg
          aria-hidden
          className="block h-8 w-full text-slate-50"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,0 C240,40 480,40 720,20 C960,0 1200,0 1440,30 L1440,40 L0,40 Z"
          />
        </svg>
      </section>

      <ProjectSection />

      <Section
        kicker="Our Gallery"
        id="gallery"
        title="Galeri Kegiatan"
        subtitle="Dokumentasi berbagai kegiatan dan proyek instalasi yang telah kami kerjakan."
      >
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-200"
            >
              <img
                src={item.src}
                alt={item.caption || `Kegiatan ${idx + 1}`}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-sm text-white">
                  {item.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <PartnersSection />
      <AppointmentBannerSection />
      <Footer />
    </div>
  );
}
