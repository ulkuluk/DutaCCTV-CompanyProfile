import site from "../content/site";
import Section from "../components/Section";
import Button from "../components/Button";

export default function AppointmentBannerSection() {
  const a = site.about;
  return (
    <Section>
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-8 text-white shadow">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{a.cta.title}</h3>
            <p className="text-blue-100">{a.cta.desc}</p>
          </div>
          <Button
            href={a.cta.href}
            variant="secondary"
            className="bg-white text-slate-900"
          >
            {a.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
