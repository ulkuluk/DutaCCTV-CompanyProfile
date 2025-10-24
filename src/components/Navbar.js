// src/components/Navbar.jsx
import site from "../content/site";
import Container from "./Container";
import Button from "./Button";
import packages from "../content/packages";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const brands = packages.map((b) => ({ label: b.brand, slug: b.slug }));
  const PRIMARY = "#a7000bff"; // merah utama (sesuai company profile)
  const PRIMARY_DARK = "#A50E19"; // hover / ring

  return (
    <div
      className="sticky top-0 z-40 w-full border-b bg-white/0 backdrop-blur supports-[backdrop-filter]:bg-white/0"
      style={{ borderColor: PRIMARY, backgroundColor: PRIMARY }}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
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
          <span>{site.brand.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((n) => {
            if (n.label === "Paket CCTV") {
              const brands = packages.map((b) => ({
                label: b.brand,
                slug: b.slug,
              }));
              return (
                <div key={n.href} className="relative group">
                  {/* trigger */}
                  <div className="flex items-center gap-1">
                    <a
                      href={n.href}
                      className="text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ focusVisible: { ringColor: PRIMARY_DARK } }}
                    >
                      {n.label}
                    </a>
                    <aside className="space-y-4">
                      <ChevronDown
                        className="mt-1 h-4 w-4 text-white"
                        strokeWidth={3}
                      />
                    </aside>
                  </div>

                  {/* dropdown */}
                  <div
                    className="
                      absolute left-0 top-full z-50 w-56
                      rounded-xl border bg-white p-2 shadow-lg
                      opacity-0 invisible translate-y-2
                      transition
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                      pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto
                    "
                    style={{ borderColor: PRIMARY + "33" /* 20% opacity */ }}
                  >
                    <a
                      href="/packages"
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ "--tw-ring-color": PRIMARY_DARK }}
                    >
                      Semua Merek
                    </a>
                    <div
                      className="my-2 h-px"
                      style={{ backgroundColor: PRIMARY + "33" }}
                    />
                    {brands.map((b) => (
                      <a
                        key={b.slug}
                        href={`/packages/${b.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        style={{ "--tw-ring-color": PRIMARY_DARK }}
                      >
                        {b.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            if (n.label === "Contact Us") {
              // DROPDOWN Contact Us → Customer Service + FAQ + Recruitment
              return (
                <div key="contact-dd" className="relative group">
                  <div className="flex items-center gap-1">
                    <a
                      href="/customer-service"
                      className="text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ "--tw-ring-color": PRIMARY_DARK }}
                    >
                      Contact Us
                    </a>
                    <aside className="space-y-4">
                      <ChevronDown
                        className="mt-1 h-4 w-4 text-white"
                        strokeWidth={3}
                      />
                    </aside>
                  </div>

                  <div
                    className="absolute left-0 top-full z-50 w-56
                      rounded-xl border bg-white p-2 shadow-lg
                      opacity-0 invisible translate-y-2
                      transition
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                      pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto"
                    style={{ borderColor: PRIMARY + "33" }}
                  >
                    <a
                      href="/customer-service"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ "--tw-ring-color": PRIMARY_DARK }}
                    >
                      Customer Service
                    </a>
                    <a
                      href="/faq"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ "--tw-ring-color": PRIMARY_DARK }}
                    >
                      FAQ
                    </a>
                    <a
                      href="/recruitment"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ "--tw-ring-color": PRIMARY_DARK }}
                    >
                      Recruitment
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ "--tw-ring-color": PRIMARY_DARK }}
              >
                {n.label}
              </a>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
