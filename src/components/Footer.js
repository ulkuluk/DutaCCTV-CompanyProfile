import site from "../content/site";
import Container from "./Container";

export default function Footer() {
  const PRIMARY = "#a7000bff";
  return (
    <footer className="border-t border-slate-200 bg-[#a7000bff] ">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div
            className="grid h-8 w-8 place-items-center rounded-lg overflow-hidden bg-white"
            // gunakan bg putih agar logo transparan kontras; bisa pakai PRIMARY_DARK kalau mau
          >
            <img
              src={site.brand.logo}
              alt={site.brand?.name || "Logo"}
              className="h-8 w-8 object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              {site.brand.name}
            </div>
            <div className="text-xs text-white">{site.footer.copyright}</div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          
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
