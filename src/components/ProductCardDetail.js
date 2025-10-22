// src/components/ProductCardDetail.jsx
import { Check, ChevronRight } from "lucide-react";
import WordLink from "./WordLink";

export default function ProductCardDetail({ name, img, bullets = [] }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm
                 ring-1 ring-transparent transition hover:-translate-y-1 hover:shadow-lg hover:ring-blue-200"
    >
      {/* media */}
      <div className="relative bg-gradient-to-b from-slate-50 to-white">
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* body */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>

        {bullets?.length > 0 && (
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {bullets.slice(0, 4).map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <WordLink href={"/packages"}>{"Lihat Detail Produk"}</WordLink>
      </div>
    </article>
  );
}
