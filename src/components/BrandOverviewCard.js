// src/components/BrandOverviewCard.jsx
import { Link } from "react-router-dom";

function formatIDR(n) {
  return "Rp " + (n?.toLocaleString?.("id-ID") ?? n);
}

export default function BrandOverviewCard({ brand }) {
  const cats = brand.categories?.map(c => c.name) || [];
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 w-full overflow-hidden bg-slate-100">
        <img src={brand.cover} alt={brand.brand} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-slate-900/20" />
        {brand.logo && (
          <img src={brand.logo} alt={`${brand.brand} logo`} className="absolute left-4 top-4 h-8 w-auto object-contain drop-shadow" />
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{brand.brand}</h3>
        <p className="mt-1 text-sm text-slate-600">{brand.summary}</p>

        {/* kategori badge */}
        <div className="mt-3 flex flex-wrap gap-2">
          {cats.slice(0, 4).map((n) => (
            <span key={n} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
              {n}
            </span>
          ))}
        </div>

        {/* price + CTA */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Mulai <span className="font-semibold text-slate-900">{formatIDR(brand.startFrom)}</span>
          </div>
          <Link
            to={`/packages/${brand.slug}`}
            className="rounded-full bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Lihat semua paket
          </Link>
        </div>
      </div>
    </article>
  );
}
