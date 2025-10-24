// src/components/PackageCardSimple.jsx
import { FaWhatsapp } from "react-icons/fa";

export default function PackageCardSimple({ pkg }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="relative h-72 bg-slate-50 flex items-center justify-center">
        <img
          src={pkg.img}
          alt={pkg.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-slate-900">{pkg.title}</h3>
        <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc list-inside">
          {pkg.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold" style={{ color: "#C7000D" }}>
            Rp {pkg.price.toLocaleString("id-ID")}
          </p>
          <a
            href={`https://wa.me/6281310947486?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(
              pkg.title
            )}`}
            className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white text-sm font-medium hover:bg-green-600"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
