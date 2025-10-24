// src/pages/Review.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Field from "../components/Field";
import Button from "../components/Button";
import HeroComp from "../components/HeroComp";
import site from "../content/site";

// Endpoint Formspree kamu
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meorybkb";

function Stars({ value = 0 }) {
  const v = Math.round(Number(value) || 0);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < v ? "fill-yellow-400" : "fill-slate-300"}`}
        >
          <path d="M10 15l-5.878 3.09L5.64 12.18.76 8.41l6.453-.94L10 1.5l2.787 5.97 6.453.94-4.88 3.77 1.518 5.91z" />
        </svg>
      ))}
    </div>
  );
}

export default function Review() {
  const h = site.heroInteractive;
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot anti-bot
    if (fd.get("_gotcha")) return;

    // validasi ringan
    const name = fd.get("name")?.trim();
    const rating = Number(fd.get("rating"));
    const message = fd.get("message")?.trim();
    if (!name || !rating || rating < 1 || rating > 5 || !message) {
      alert("Nama, Rating (1-5), dan Pesan wajib diisi.");
      return;
    }

    // metadata opsional untuk memudahkan di inbox Formspree
    fd.append("_subject", "Review Website — DUTA CCTV");
    fd.append("page", "review");

    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" }, // simple request (tanpa preflight)
        body: fd, // biarkan FormData -> Formspree auto-parse
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        // coba baca error dari Formspree
        let err = "";
        try {
          const j = await res.json();
          err = j?.errors?.map((e) => e.message).join(", ") || "";
          // contoh error umum: “email is invalid”
        } catch {}
        setStatus("error");
        alert("Gagal mengirim review. " + (err || "Coba lagi nanti."));
      }
    } catch (e2) {
      console.error(e2);
      setStatus("error");
      alert("Terjadi kendala jaringan. Coba lagi.");
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <HeroComp
        title="Ulasan Pelanggan"
        subtitle="Bagikan pengalaman Anda menggunakan layanan kami."
        image={h.image}
        overlay="bg-slate-900/50"
      />

      <Section>
        <div >
          {/* Form Review */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Nama" required>
                    <input
                      name="name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="Nama lengkap"
                    />
                  </Field>
                  <Field label="Email (opsional)">
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="email@domain.com"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Rating" required hint="1 = sangat buruk, 5 = sangat baik">
                    <select
                      name="rating"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                    >
                      <option value="" disabled>Pilih rating</option>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Layanan/Produk (opsional)">
                    <input
                      name="service"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="Contoh: Paket CCTV Rumah"
                    />
                  </Field>
                </div>

                <Field label="Judul (opsional)">
                  <input
                    name="title"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                    placeholder="Contoh: Instalasi rapi, teknisi ramah"
                  />
                </Field>

                <Field label="Pesan Ulasan" required>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                    placeholder="Ceritakan pengalaman Anda…"
                  />
                </Field>

                <Field label="URL Foto (opsional)" hint="Link Google Drive/Foto">
                  <input
                    name="photoUrl"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                    placeholder="https://…"
                  />
                </Field>

                <div className="flex items-center gap-3 pt-2">
                  <Button type="submit">Kirim Review</Button>
                  {status === "loading" && (
                    <span className="text-sm text-slate-500">Mengirim…</span>
                  )}
                  {status === "success" && (
                    <span className="text-sm text-green-700">
                      Terima kasih! Review Anda sudah terkirim.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-sm text-red-600">
                      Maaf, gagal mengirim. Coba lagi.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          
        </div>
      </Section>

      <Footer />
    </div>
  );
}
