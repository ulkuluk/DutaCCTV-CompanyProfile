import { motion } from "framer-motion";
import site from "../content/site";

export default function PromoBanner() {
  const p = site.promo;
  if (!p) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto my-8 max-w-6xl px-4"
    >
      <a
        href={p.href || "#"}
        className="block rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-6 text-white shadow hover:shadow-md transition"
      >
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="mr-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
              {p.badge}
            </span>
            <span className="text-xl font-semibold">{p.title}</span>
            <span className="block text-blue-100">{p.desc}</span>
          </div>
          <span className="mt-3 rounded-lg bg-white/15 px-4 py-2 text-sm md:mt-0">
            Lihat detail →
          </span>
        </div>
      </a>
    </motion.div>
  );
}
