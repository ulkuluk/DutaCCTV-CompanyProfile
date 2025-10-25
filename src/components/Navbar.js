// src/components/Navbar.jsx
import { useEffect, useState, useCallback } from "react";
import site from "../content/site";
import Container from "./Container";
import packages from "../content/packages";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const PRIMARY = "#a7000bff";     // merah utama
  const PRIMARY_DARK = "#A50E19";  // hover / ring
  const brands = packages.map((b) => ({ label: b.brand, slug: b.slug }));

  // ====== State off-canvas mobile ======
  const [open, setOpen] = useState(false);
  const [openPkg, setOpenPkg] = useState(false);   // accordion "Paket CCTV"
  const [openContact, setOpenContact] = useState(false); // accordion "Contact Us"

  // Lock scroll body ketika drawer terbuka
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Tutup dengan ESC
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  return (
    <div
      className="sticky top-0 z-40 w-full border-b"
      style={{ borderColor: PRIMARY, backgroundColor: PRIMARY }}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg overflow-hidden bg-white">
            <img
              src={site.brand.logo}
              alt={site.brand?.name || "Logo"}
              className="h-8 w-8 object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
          <span className="whitespace-nowrap">{site.brand.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((n) => {
            if (n.label === "Paket CCTV") {
              return (
                <div key={n.href} className="relative group">
                  <div className="flex items-center gap-1">
                    <a
                      href={n.href}
                      className="text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ "--tw-ring-color": PRIMARY_DARK }}
                    >
                      {n.label}
                    </a>
                    <ChevronDown className="mt-1 h-4 w-4 text-white" strokeWidth={3} />
                  </div>
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
                    style={{ borderColor: PRIMARY + "33" }}
                  >
                    <a
                      href="/packages"
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ "--tw-ring-color": PRIMARY_DARK }}
                    >
                      Semua Merek
                    </a>
                    <div className="my-2 h-px" style={{ backgroundColor: PRIMARY + "33" }} />
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
                    <ChevronDown className="mt-1 h-4 w-4 text-white" strokeWidth={3} />
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
                    </a><a
                      href="/review"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ "--tw-ring-color": PRIMARY_DARK }}
                    >
                      Review Our Website
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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      {/* ====== OFF-CANVAS MOBILE NAV ====== */}
      {/* overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* panel */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85%] bg-white shadow-xl transition-transform md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header panel */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg overflow-hidden bg-white border">
              <img
                src={site.brand.logo}
                alt={site.brand?.name || "Logo"}
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="font-semibold text-slate-900">{site.brand.name}</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Isi menu */}
        <nav className="px-3 py-4">
          {site.nav.map((n) => {
            if (n.label === "Paket CCTV") {
              return (
                <div key={n.href} className="mb-2">
                  <button
                    className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-left text-slate-900 font-medium hover:bg-slate-100"
                    onClick={() => setOpenPkg((v) => !v)}
                    aria-expanded={openPkg}
                    aria-controls="pkg-accordion"
                  >
                    <span>{n.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openPkg ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    id="pkg-accordion"
                    className={`overflow-hidden transition-[max-height] duration-300 ${
                      openPkg ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <a
                      href="/packages"
                      className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      Semua Merek
                    </a>
                    <div className="my-1 h-px bg-slate-200" />
                    {brands.map((b) => (
                      <a
                        key={b.slug}
                        href={`/packages/${b.slug}`}
                        className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                        onClick={() => setOpen(false)}
                      >
                        {b.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            if (n.label === "Contact Us") {
              return (
                <div key="contact-mobile" className="mb-2">
                  <button
                    className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-left text-slate-900 font-medium hover:bg-slate-100"
                    onClick={() => setOpenContact((v) => !v)}
                    aria-expanded={openContact}
                    aria-controls="contact-accordion"
                  >
                    <span>Contact Us</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openContact ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    id="contact-accordion"
                    className={`overflow-hidden transition-[max-height] duration-300 ${
                      openContact ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <a
                      href="/customer-service"
                      className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      Customer Service
                    </a>
                    <a
                      href="/faq"
                      className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      FAQ
                    </a>
                    <a
                      href="/recruitment"
                      className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      Recruitment
                    </a>
                    <a
                      href="/review"
                      className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      Review Our Website
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={n.href}
                href={n.href}
                className="block rounded-lg px-3 py-2 text-slate-900 font-medium hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        {/* Aksen warna di bawah panel */}
        <div
          className="mt-auto h-1 w-full"
          style={{ background: `linear-gradient(to right, ${PRIMARY}, ${PRIMARY_DARK})` }}
        />
      </aside>
    </div>
  );
}
