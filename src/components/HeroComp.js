// src/components/HeroComp.jsx
import Container from "./Container";

export default function HeroComp({
  title,
  subtitle,
  image,                  // string URL ATAU JSX fragment
  overlay = "bg-slate-900/60",
  children,
}) {
  return (
    <section className="relative z-0 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {typeof image === "string" ? (
          <>
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className={`absolute inset-0 ${overlay}`} />
          </>
        ) : (
          image || null
        )}
      </div>

      {/* CONTENT */}
      <Container className="py-24">
        {title && (
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            {title}
          </h1>
        )}
        {subtitle && <p className="mt-4 max-w-3xl text-blue-100">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </Container>

      {/* wave */}
      <svg aria-hidden className="block h-8 w-full text-slate-50" viewBox="0 0 1440 40" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C240,40 480,40 720,20 C960,0 1200,0 1440,30 L1440,40 L0,40 Z" />
      </svg>
    </section>
  );
}
