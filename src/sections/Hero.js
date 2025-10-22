import { motion } from "framer-motion";
import site from "../content/site";
import Button from "../components/Button";
import Container from "../components/Container";

export default function HeroInteractive() {
  const h = site.heroInteractive;

  return (
    <section id="home" className="relative z-0 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={h.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50" />
      </div>

      <Container className="min-h-[72vh] py-20 grid items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            {h.heading}
          </h1>
          <p className="mt-4 text-lg text-blue-100">{h.subheading}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {h.ctas.map((c) => (
              <Button key={c.label} href={c.href} variant={c.variant}>
                {c.label}
              </Button>
            ))}
          </div>
        </motion.div>
      </Container>

      <svg
        aria-hidden
        className="pointer-events-none block h-8 w-full"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563EB" /> {/* blue-600 */}
            <stop offset="100%" stopColor="#0EA5E9" /> {/* sky-500 */}
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,0 C240,40 480,40 720,20 C960,0 1200,0 1440,30 L1440,40 L0,40 Z"
        />
      </svg>
    </section>
  );
}
