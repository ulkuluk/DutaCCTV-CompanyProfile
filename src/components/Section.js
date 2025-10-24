import Container from "./Container";
import cn from "../utils/cn";

export default function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <Container>
        {(kicker || title || subtitle) && (
          <header className="mb-10">
            {kicker && (
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "#C7000D" }} // warna kicker disesuaikan
              >
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-slate-900 text-justify indent-8">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
