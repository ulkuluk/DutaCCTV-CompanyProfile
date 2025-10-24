import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function ArticleSidebar({ posts = [], q, setQ, limit = 10 }) {
  const recent = useMemo(() => {
    const items = posts
      .slice() // copy
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    const filtered = q
      ? items.filter(
          (p) =>
            p.title.toLowerCase().includes(q.toLowerCase()) ||
            (p.excerpt || "").toLowerCase().includes(q.toLowerCase())
        )
      : items;
    return filtered.slice(0, limit);
  }, [posts, q, limit]);

  return (
    <aside className="lg:col-span-4 space-y-6">
      {/* Search */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Search
        </label>
        <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari artikel…"
            className="flex-1 px-3 py-2 text-slate-700 outline-none"
          />
          <button className="px-3 py-2 text-sm font-medium bg-[#C7000D] text-white hover:bg-blue-700">
            Cari
          </button>
        </div>
      </div>

      {/* Recent posts */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">Recent Posts</h3>
        <ul className="mt-3 space-y-3">
          {recent.map((p) => (
            <li key={p.slug} className="leading-snug">
              <Link
                to={`/articles/${p.slug}`}
                className=" hover:underline "
                style={{ color: "#C7000D" }}
              >
                {p.title}
              </Link>
              <div className="text-xs text-slate-500">
                {new Date(p.date).toLocaleDateString()}
              </div>
            </li>
          ))}
          {recent.length === 0 && (
            <li className="text-sm text-slate-500">Tidak ada posting.</li>
          )}
        </ul>
      </div>
    </aside>
  );
}
