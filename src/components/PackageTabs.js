// src/components/PackageTabs.jsx
import cn from "../utils/cn";

export default function PackageTabs({ brands, activeBrand, setActiveBrand, categories, activeCat, setActiveCat }) {
  return (
    <div className="space-y-3">
      {/* Brand tabs */}
      <div className="flex flex-wrap gap-2">
        {brands.map(b => (
          <button
            key={b.slug}
            onClick={() => { setActiveBrand(b.slug); setActiveCat(null); }}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              activeBrand === b.slug ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 hover:bg-slate-50"
            )}
          >
            {b.brand}
          </button>
        ))}
      </div>

      {/* Category tabs (kecuali EZVIZ yang cuma satu) */}
      {!!categories?.length && (
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c.slug}
              onClick={() => setActiveCat(c.slug)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition",
                activeCat === c.slug ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 hover:bg-slate-50"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
