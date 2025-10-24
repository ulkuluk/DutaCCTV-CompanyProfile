import site from "../content/site";
import Section from "../components/Section";

export default function ProjectSection() {
    const a = site.about;
  return (
    <Section title="Siapa kami" subtitle={a.intro}>
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {(site.whyUs || []).map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-sm font-semibold" style={{ color: "#C7000D" }}>{x.title}</div>
            <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
