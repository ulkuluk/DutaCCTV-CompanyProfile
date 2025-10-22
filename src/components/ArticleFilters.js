// src/components/ArticleFilters.jsx
import { useMemo } from "react";

export default function ArticleFilters({
  categories = [],
  value,
  onChange,
  search,
  onSearch,
}) {
  const all = useMemo(() => ["All", ...categories], [categories]);
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {/* Kategori */}
      <div className="flex flex-wrap gap-2">
        {all.map((c) => (
          <button
            key={c}
            onClick={() => onChange?.(c)}
            className={`rounded-full border px-3 py-1 text-sm ${
              value === c
                ? "border-blue-600 text-blue-700"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      {/* Pencarian */}
      <div className="relative">
        <input
          value={search}
          onChange={(e) => onSearch?.(e.target.value)}
          placeholder="Cari artikel…"
          className="w-64 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
    </div>
  );
}
