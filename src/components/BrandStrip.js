export default function BrandStrip({ brands = [] }) {
  if (!brands.length) return null;
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-medium text-slate-600">Brands</div>
      <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-6">
        {brands.map((b) => (
          <div key={b.name} className="grid place-items-center">
            <img
              src={b.logo}
              alt={b.name}
              className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition"
              loading="lazy"
              decoding="async"
              title={b.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
