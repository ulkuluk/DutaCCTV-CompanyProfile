import site from "../content/site";
import Section from "../components/Section";
import Button from "../components/Button";

export default function AppointmentBannerSection() {
  const a = site.about;
  const PRIMARY = "#ff5151ff"; // merah lebih muda dari navbar
  const PRIMARY_DARK = "#c7000dff";
  return (
    <Section>
      <div
        className="rounded-2xl p-8 text-white shadow"
        style={{
          background: `linear-gradient(to right, ${PRIMARY_DARK}, ${PRIMARY})`,
        }}
      >
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{a.cta.title}</h3>
            <p className="text-white">{a.cta.desc}</p>
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
