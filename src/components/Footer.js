import site from "../content/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0E4A7E] ">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-white">
            {site.brand.logoText}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              {site.brand.name}
            </div>
            <div className="text-xs text-white">
              {site.footer.copyright}
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href="/terms"
            className="text-sm font-medium text-white hover:text-slate-900"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy"
            className="text-sm font-medium text-white hover:text-slate-900"
          >
            Privacy Policy
          </a>
          {site.footer.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-sm font-medium text-white hover:text-slate-900"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
