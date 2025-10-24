import { useEffect, useMemo, useState } from "react";
import { fetchArticlesIndex } from "../lib/articles";
import Container from "../components/Container";
import Section from "../components/Section";
import ArticleCard from "../components/ArticleCard";
import ArticleFilters from "../components/ArticleFilters";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroComp from "../components/HeroComp";
import site from "../content/site";

export default function Articles() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const h = site.heroInteractive;
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetchArticlesIndex();
      setItems(data);
      setLoading(false);
    })();
  }, []);

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    let arr = items;
    if (category !== "All") arr = arr.filter((i) => i.category === category);
    if (q.trim()) {
      const s = q.toLowerCase();
      arr = arr.filter(
        (i) =>
          i.title.toLowerCase().includes(s) ||
          (i.excerpt || "").toLowerCase().includes(s)
      );
    }
    return [...arr].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [items, category, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const paged = filtered.slice((current - 1) * pageSize, current * pageSize);

  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <HeroComp
        title={"Articles"}
        subtitle={"Tips & Edukasi CCTV, dan Berita Rekaman CCTV."}
        image={h.image}
      />
    

      <Section className="pt-8">
        <ArticleFilters
          categories={categories.slice(1)} // komponen kamu mengharapkan list tanpa "All"
          value={category}
          onChange={(v) => {
            setCategory(v);
            setPage(1);
          }}
          search={q}
          onSearch={(v) => {
            setQ(v);
            setPage(1);
          }}
        />

        {loading ? (
          <div className="mt-10 text-center text-slate-600">
            Memuat artikel…
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {paged.map((a) => (
                <ArticleCard
                  key={a.slug}
                  title={a.title}
                  excerpt={a.excerpt}
                  href={`/articles/${a.slug}`}
                  cover={`/articles/${a.slug}/${a.cover}`}
                  date={a.date}
                />
              ))}
              {paged.length === 0 && (
                <div className="col-span-full rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-600">
                  Tidak ada artikel yang cocok.
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                  disabled={current === 1}
                >
                  ‹ Prev
                </button>
                <span className="text-sm text-slate-600">
                  Page <strong>{current}</strong> of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
                  disabled={current === totalPages}
                >
                  Next ›
                </button>
              </div>
            )}
          </>
        )}
      </Section>

      <Footer />
    </div>
  );
}
