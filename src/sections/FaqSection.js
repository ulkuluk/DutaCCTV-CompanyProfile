import { useState } from "react";

/**
 * FAQSection — komponen reusable untuk menampilkan daftar tanya-jawab.
 * props:
 * - items: array of { q, a }
 * - title: optional heading untuk section
 * - subtitle: optional subheading
 * - defaultOpenFirst: apakah pertanyaan pertama dibuka otomatis
 */
export default function FAQSection({
  items = [],
  title = "Pertanyaan Umum (FAQ)",
  subtitle = "Kami berkomitmen untuk memberikan layanan terbaik kepada pelanggan kami, baik itu sebelum maupun setelah penjualan. Jika Anda memiliki pertanyaan lebih lanjut tentang layanan after sales atau garansi pemasangan kami, jangan ragu untuk menghubungi kami.",
  defaultOpenFirst = true,
}) {
  return (
    <section className="py-10 bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-slate-600 text-sm">{subtitle}</p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <QA key={i} q={item.q} a={item.a} defaultOpen={i === 0 && defaultOpenFirst} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QA({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-base font-semibold text-slate-900">{q}</h3>
        <span className="ml-4 text-slate-500">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="mt-2 text-sm leading-6 text-slate-700 transition-all duration-200">
          {a}
        </p>
      )}
    </div>
  );
}
