import Section from "../components/Section";
import ArticleCard from "../components/ArticleCard";
import { fetchArticlesIndex } from "../lib/articles";
import { useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import site from "../content/site";
import WordLink from "../components/WordLink";

export default function ArticlesSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const h = site.heroInteractive;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetchArticlesIndex();
      setItems(data);
      setLoading(false);
    })();
  }, []);

  return (
    <Section
      id="articles"
      kicker="Articles"
      title="Edukasi & Tips Keamanan"
      subtitle="Artikel pilihan seputar CCTV, access control, dan sistem keamanan."
    >
      {loading ? (
        <div className="mt-10 text-center text-slate-600">Memuat artikel…</div>
      ) : (
        <>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-2">
            {items.slice(0, 2).map((a) => (
              <ArticleCard
                key={a.slug}
                title={a.title}
                excerpt={a.excerpt}
                href={`/articles/${a.slug}`}
                cover={a.cover}
                date={a.date}
              />
            ))}
          </div>

          {/* Tambahkan tombol di dalam Section */}
          <div className="mt-10 text-center">
            <WordLink href={"/articles"}>{"Lihat Semua Artikel"}</WordLink>
          </div>
        </>
      )}
    </Section>
  );
}
