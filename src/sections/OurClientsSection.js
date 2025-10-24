// src/sections/OurClientsSection.jsx
import site from "../content/site";
import Section from "../components/Section";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { motion } from "framer-motion";
import useCountUp from "../hooks/useCountUp";

function StatItem({ label, value, delay = 0 }) {
  const v = useCountUp(value, 1200);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
    >
      <div className="text-3xl font-semibold " style={{ color: "#C7000D" }}>
        {v.toLocaleString()}+
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </motion.div>
  );
}

export default function OurClientsSection() {
  const stats = site.stats || [];
  return (
    <Section
      id="clients"
      kicker="Our Clients"
      title="Dipercaya berbagai bisnis"
    >
      {/* Grid klien + carousel */}
      <div className="grid gap-8 md:grid-cols-5">
        {/* Logo klien (3 kolom pada md+) */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {site.clients.map((c) => (
              <div
                key={c.name}
                className="grid place-items-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel testimoni (2 kolom pada md+) */}
        <div className="md:col-span-2">
          <TestimonialCarousel images={site.testimonialGallery} />
        </div>
      </div>
      <div className="mt-7 grid gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <StatItem
            key={s.label}
            label={s.label}
            value={s.value}
            delay={i * 0.05}
          />
        ))}
      </div>
    </Section>
  );
}
