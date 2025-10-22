// src/components/PromoStrip.jsx
export default function PromoStrip({ title, desc, href = "#contact" }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-900">
      <div className="text-sm font-medium tracking-wide uppercase">Promo</div>
      <div className="mt-1 text-lg font-semibold">{title}</div>
      <p className="mt-1 text-sm">{desc}</p>
      <a href={href} className="mt-3 inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Konsultasi Gratis
      </a>
    </div>
  );
}
