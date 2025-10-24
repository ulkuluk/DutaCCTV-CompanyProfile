import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroComp from "../components/HeroComp";
import Section from "../components/Section";
import Container from "../components/Container";
import site from "../content/site";
import jobs from "../content/jobs";

export default function Recruitment() {
  const h = site.heroInteractive;

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <HeroComp
        title="Recruitment"
        subtitle="Bergabung bersama tim kami — jadilah bagian dari tim profesional di bidang CCTV dan keamanan digital."
        image={h.image}
        overlay="bg-slate-900/50"
      />

      <Section title="Lowongan Tersedia" subtitle="Posisi yang saat ini sedang kami buka">
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {job.location} • {job.type}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                {job.summary}
              </p>

              <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">
                    Kualifikasi:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">
                    Benefit:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Container className="mt-10 text-center">
          <p className="text-slate-700">
            Kirim CV dan lamaran Anda ke{" "}
            <a
              href={`mailto:${site.recruitment?.email || "hr@bosscctv.id"}`}
              className="text-blue-700 underline"
            >
              {site.support?.email || "hr@dutacctv.id"}
            </a>{" "}
            atau hubungi HR kami via WhatsApp{" "}
            <a
              href={`https://wa.me/${site.support?.whatsapp || "62812xxxxxxx"}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline"
            >
              di sini
            </a>
            .
          </p>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
