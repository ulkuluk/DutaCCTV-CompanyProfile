import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import site from "../content/site";
import Section from "../components/Section";

export default function WhyChooseUsSection() {
  const items = site.whyUs || [];
  return (
    <Section
      id="whyus"
      kicker="Why Choose Us"
      title="Mengapa memilih kami?"
      subtitle="Keunggulan layanan kami untuk kebutuhan keamanan Anda."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-4">
        {items.map((x, i) => {
          const Icon = Icons[x.icon] || Icons.Shield;
          return (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <Icon className="h-8 w-8" style={{ color: "#C7000D" }} />
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {x.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
