// src/pages/CustomerService.jsx
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import HeroComp from "../components/HeroComp";
import Section from "../components/Section";
import Field from "../components/Field";
import Button from "../components/Button";
import site from "../content/site";

export default function CustomerService() {
  const h = site.heroInteractive;
  const s = site.support || {};
  const topics = s.topics || [];

  // gunakan endpoint formspree dari site.contact.formAction jika ada
  const action = site?.contact?.formAction || "";
  // di atas: tambah state
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const endpoint = site?.contact?.formAction; // "https://formspree.io/f/meorwlqb"

  // handler yang benar
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form); // <-- buat dulu!

    // honeypot anti-bot
    if (data.get("_gotcha")) return;

    // fallback jika belum set endpoint
    if (!endpoint) {
      window.open(waLink, "_blank");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        // bantu debug kalau ada error dari Formspree
        let err = "";
        try {
          const j = await res.json();
          err = j?.errors?.map((e) => e.message).join(", ");
          console.error("Formspree error:", j);
        } catch {}
        setStatus("error");
        alert("Form gagal dikirim. " + (err || "Coba lagi nanti."));
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert("Terjadi kendala jaringan. Coba lagi.");
    }
  }

  const waLink = useMemo(() => {
    const text =
      "Halo%2C%20saya%20ingin%20mengajukan%20keluhan%2Fpermintaan%20bantuan.";
    return `https://wa.me/${s.whatsapp || "6281310947486"}?text=${text}`;
  }, [s.whatsapp]);

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <HeroComp
        title="Customer Service"
        subtitle="Sampaikan keluhan atau permintaan dukungan Anda. Tim kami akan merespon secepatnya."
        image={h.image}
        overlay="bg-slate-900/50"
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {/* FORM */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {/* Tanpa backend: kirim ke Formspree jika 'action' di-set */}
              <form
                action={action || undefined}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* optional metadata */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Keluhan Customer Service — Website"
                />
                <input type="hidden" name="_template" value="table" />
                {/* honeypot anti-bot */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Nama" required>
                    <input
                      name="nama"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="Nama lengkap"
                    />
                  </Field>
                  <Field
                    label="No. WhatsApp"
                    required
                    hint="Contoh: 0812xxxxxx"
                  >
                    <input
                      name="whatsapp"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="0812xxxxxxx"
                    />
                  </Field>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="email@domain.com"
                    />
                  </Field>
                  <Field label="ID Order / Invoice">
                    <input
                      name="orderId"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="Opsional"
                    />
                  </Field>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Kategori Masalah" required>
                    <select
                      name="kategori"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pilih kategori
                      </option>
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Urgensi" required>
                    <div className="flex gap-3">
                      {["Normal", "Mendesak"].map((u) => (
                        <label
                          key={u}
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            name="urgensi"
                            value={u}
                            required
                            className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-600"
                          />
                          <span className="text-sm text-slate-700">{u}</span>
                        </label>
                      ))}
                    </div>
                  </Field>
                </div>
                <Field label="Judul Keluhan" required>
                  <input
                    name="judul"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                    placeholder="Contoh: Kamera depan tidak menampilkan gambar"
                  />
                </Field>
                <Field
                  label="Deskripsi"
                  required
                  hint="Sertakan kronologi, lokasi, dan jumlah perangkat terkait."
                >
                  <textarea
                    name="deskripsi"
                    required
                    rows={6}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                    placeholder="Jelaskan detail kendala yang dialami…"
                  />
                </Field>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Lampiran URL Foto/Video">
                    <input
                      name="lampiranUrl"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="Link Google Drive / Foto / Video"
                    />
                  </Field>
                  <Field label="Alamat Lokasi">
                    <input
                      name="alamat"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-600 focus:ring-2"
                      placeholder="Opsional"
                    />
                  </Field>
                </div>
                

                <div className="flex items-center gap-3 pt-2">
                  <Button type="submit">Kirim Keluhan</Button>
                  {status === "loading" && (
                    <span className="text-sm text-slate-500">Mengirim…</span>
                  )}
                  {status === "success" && (
                    <span className="text-sm text-green-700">
                      Terima kasih, keluhan Anda sudah kami terima.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-sm text-red-600">
                      Maaf, terjadi kendala. Coba lagi atau hubungi WhatsApp.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* INFO SAMPING */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Bantuan Cepat
              </h3>
              <p className="mt-1 text-sm text-slate-700">
                Jam layanan: {s.hours}
              </p>
              <p className="mt-1 text-sm text-slate-700">SLA: {s.sla}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:brightness-110"
              >
                WhatsApp Customer Service
              </a>
              <div className="mt-3 text-sm text-slate-700">
                Email:{" "}
                <a
                  href={`mailto:${s.email}`}
                  className="text-blue-700 underline"
                >
                  {s.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-900">
              <div className="text-sm font-medium tracking-wide uppercase">
                Tips
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm">
                <li>Foto perangkat & indikator lampu.</li>
                <li>Catat waktu kejadian & lokasi titik kamera.</li>
                <li>Jika urgent, hubungi WhatsApp untuk prioritas.</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
