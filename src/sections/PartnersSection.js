import site from "../content/site";
import Section from "../components/Section";

export default function PartnersSection() {
  const a = site.about;
  return (
    <Section kicker="Partners & Certifications" title="Mitra & sertifikasi">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
        {(a.certifications || []).map((c) => (
          <div
            key={c.name}
            className="grid place-items-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            title={c.name}
          >
            <img
              src={c.logo}
              alt={c.name}
              className="max-h-96 w-auto object-contain hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
