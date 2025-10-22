// src/components/PackageCard.jsx
import { Phone } from "lucide-react";
import { whatsapp as wa } from "../content/packages";

function formatIDR(n) {
  return "Rp " + (n?.toLocaleString?.("id-ID") ?? n);
}

export default function PackageCard({ theme = "blue", item, brand }) {
  const href = `https://wa.me/${wa}?text=${encodeURIComponent(
    `Halo, saya tertarik paket ${brand} - ${item.title || (item.channels + " Channel")} (harga ${formatIDR(item.price)}).`
  )}`;

  const isBlue = theme === "blue";

  return (
    <article
      className={
        isBlue
          ? "rounded-2xl bg-[#164e72] text-white shadow-md border border-white/10"
          : "rounded-2xl bg-white text-slate-900 shadow-md border border-slate-200"
      }
    >
      <div className={isBlue ? "px-5 pt-5" : "px-5 pt-5"}>
        <div className={isBlue ? "text-center text-white/90" : "text-center text-slate-500"}>
          {item.channels ? <div className="text-xl font-semibold">{item.channels} Channel</div> : null}
        </div>

        <div className={isBlue ? "mt-3 rounded-xl bg-white/10 p-4 text-center" : "mt-3 rounded-xl bg-slate-50 p-4 text-center"}>
          <div className={isBlue ? "text-lg font-bold" : "text-lg font-bold text-slate-900"}>
            {formatIDR(item.price)}
          </div>
          <div className={isBlue ? "text-xs tracking-wide mt-1" : "text-xs tracking-wide mt-1 text-slate-500"}>
            {item.title || `${brand.toUpperCase()} ${item.channels || ""}`.trim()}
          </div>
        </div>

        {item.image ? (
          <div className="mt-3">
            <img src={item.image} alt={item.title} className="w-full rounded-lg object-cover" />
          </div>
        ) : null}

        <ul className={isBlue ? "mt-4 space-y-2 text-sm text-white/90" : "mt-4 space-y-2 text-sm text-slate-700"}>
          {item.features.map((f, i) => (
            <li key={i} className="flex gap-2">
              <span className={isBlue ? "mt-2 h-1.5 w-1.5 rounded-full bg-white/70" : "mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"} />
              <span className="leading-6">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={isBlue ? "p-5" : "p-5 border-t border-slate-200"}>
        <a
          href={href}
          className={
            isBlue
              ? "flex w-full items-center justify-center gap-2 rounded-full bg-[#2fc159] px-4 py-2 text-white hover:brightness-110"
              : "flex w-full items-center justify-center gap-2 rounded-full bg-[#2fc159] px-4 py-2 text-white hover:brightness-110"
          }
          target="_blank"
          rel="noreferrer"
        >
          <Phone className="h-4 w-4" />
          whatsapp
        </a>
      </div>
    </article>
  );
}
