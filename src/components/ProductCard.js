// src/components/ProductCard.jsx
export default function ProductCard({ title, img, desc }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-all duration-300">
      {/* Bagian gambar penuh */}
      <div className="relative h-96 w-full">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Konten teks */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wide" style={{ color: "#C7000D" }}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          {desc}
        </p>
      </div>
    </article>
  );
}
