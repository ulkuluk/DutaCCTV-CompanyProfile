// src/components/Navbar.jsx
import site from "../content/site";
import Container from "./Container";
import Button from "./Button";
import packages from "../content/packages";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const brands = packages.map((b) => ({ label: b.brand, slug: b.slug }));

  return (
    <div className="sticky top-0 z-40 w-full border-b border-[#0E4A7E] bg-[#0E4A7E] backdrop-blur supports-[backdrop-filter]:bg-[#0E4A7E]">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">
            {site.brand.logoText}
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
                      className="text-sm font-medium text-white hover:text-black focus:outline-none"
                    >
                      {n.label}
                    </a>
                    <aside className="space-y-4">
                      <ChevronDown
                        className="mt-1 w-4 h-4 font-bold text-white"
                        strokeWidth={3}
                      />
                    </aside>
                  </div>

                  {/* dropdown */}
                  <div
                    className="
                          absolute left-0 top-full z-50 w-56
                          rounded-xl border border-slate-200 bg-white p-2 shadow-lg
                          opacity-0 invisible translate-y-2
                          transition
                          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                          group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                          pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto
                        "
                  >
                    <a
                      href="/packages"
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Semua Merek
                    </a>
                    <div className="my-1 h-px bg-slate-200" />
                    {brands.map((b) => (
                      <a
                        key={b.slug}
                        href={`/packages/${b.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        {b.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            if (n.label === "Contact Us") {
              // DROPDOWN Contact Us → Customer Service + FAQ
              return (
                <div key="contact-dd" className="relative group">
                  <div className="flex items-center gap-1">
                    <a
                      href="/customer-service"
                      className="text-sm font-medium text-white"
                    >
                      Contact Us
                    </a>
                    <aside className="space-y-4">
                      <ChevronDown
                        className="mt-1 w-4 h-4 font-bold text-white"
                        strokeWidth={3}
                      />
                    </aside>
                  </div>

                  <div
                    className="absolute left-0 top-full z-50 w-56
                          rounded-xl border border-slate-200 bg-white p-2 shadow-lg
                          opacity-0 invisible translate-y-2
                          transition
                          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                          group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                          pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto"
                  >
                    <a
                      href="/customer-service"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      Customer Service
                    </a>
                    <a
                      href="/faq"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      FAQ
                    </a>
                    <a
                      href="/recruitment"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
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
                className="text-sm font-medium text-white hover:text-black focus:outline-none"
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
