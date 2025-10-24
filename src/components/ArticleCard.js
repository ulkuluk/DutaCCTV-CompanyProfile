export default function ArticleCard({ title, excerpt, href, cover, date }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {cover && (
        <img
          src={cover}
          alt={title}
          className="h-44 w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="p-6">
        {date && (
          <div className="text-xs text-slate-500">
            {new Date(date).toLocaleDateString()}
          </div>
        )}
        <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{excerpt}</p>
        <a
          href={href}
          className="mt-4 inline-block text-sm font-medium hover:underline"
          style={{ color: "#C7000D" }}
        >
          Baca selengkapnya →
        </a>
      </div>
    </article>
  );
}
