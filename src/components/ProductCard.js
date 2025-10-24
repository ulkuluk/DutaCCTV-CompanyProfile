// src/components/ProductCard.jsx
export default function ProductCard({ title, img, desc }) {
  return (
    <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg">
      <h3
        className="text-xl font-bold text-center"
        style={{ color: "#C7000D" }}
      >
        {title}
      </h3>

      <div className="mt-4 flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="h-40 w-auto object-contain drop-shadow-sm"
          loading="lazy"
          decoding="async"
        />
      </div>

      <p className="mt-6 text-sm leading-6 text-slate-700">{desc}</p>
    </article>
  );
}
