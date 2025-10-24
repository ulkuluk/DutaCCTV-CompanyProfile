import site from "../content/site";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Section from "../components/Section";
import Badge from "../components/Badge"; // hapus import ini jika tak pakai Badge
import ProjectSection from "../sections/ProjectsSection";
import PartnersSection from "../sections/PartnersSection";
import AppointmentBannerSection from "../sections/AppointmentBannerSection";

export default function About() {
  const a = site.about;
  const i = site.heroInteractive

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <section className="relative z-0 overflow-hidden">
        <img
          src={i.image}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-slate-900/60" />
        <Container className="py-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            {a.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-blue-100" >{a.hero.subtitle}</p>

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

      <Section kicker="Projects" title="Beberapa proyek terbaru">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {(a.projects || []).map((p) => (
            <figure
              key={p.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover hover:scale-[1.02] transition"
              />
              <figcaption className="p-4 text-sm font-medium text-slate-800">
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>  

      <PartnersSection />
      <AppointmentBannerSection />
      <Footer />
    </div>
  );
}
