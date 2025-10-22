import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { fetchArticle } from "../lib/articles";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroComp from "../components/HeroComp";
import site from "../content/site";
import { fetchArticlesIndex } from "../lib/articles";
import ArticleSidebar from "../components/ArticleSidebar";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [meta, setMeta] = useState(null);
  const [html, setHtml] = useState("");
  const [err, setErr] = useState("");
  const h = site.heroInteractive;
  const coverUrl = meta?.cover
  ? (meta.cover.startsWith("/") ? meta.cover : `/articles/${slug}/${meta.cover}`)
  : null;
  const [posts, setPosts] = useState([]);
  const [q, setQ] = useState("");


  useEffect(() => {
    (async () => {
      try {
        setErr("");
        const { meta, body } = await fetchArticle(slug);
        setMeta(meta);
        const raw = marked.parse(body);
        setHtml(DOMPurify.sanitize(raw));
      } catch (e) {
        setErr("Artikel tidak ditemukan.");
      }
    })();
  }, [slug]);

  useEffect(() => {
    // ambil index untuk sidebar (recent posts)
    fetchArticlesIndex().then(setPosts).catch(() => setPosts([]));
  }, []);

  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <HeroComp
        image={coverUrl || h.image}
        overlay={meta?.cover ? "bg-slate-900/60" : "bg-slate-900/40"}
      >
        <div className="max-w-3xl">
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {meta?.title || "Memuat…"}
          </h1>
          {meta && (
            <div className="mt-2 text-sm text-blue-100/90">
              <span className="font-medium">{meta.author || "Redaksi"}</span> •{" "}
              <time dateTime={meta.date}>
                {new Date(meta.date).toLocaleDateString()}
              </time>{" "}
            </div>
          )}
          {meta?.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {meta.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/25"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </HeroComp>

      {/* BODY */}
      <Container className="py-10">
        {err ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700">
            {err}
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12">
            {/* MAIN */}
            <main className="lg:col-span-8">
              {meta?.cover && (
                <figure className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src={coverUrl || meta.cover}
                    alt={meta?.title}
                    className="w-full object-cover"
                  />
                </figure>
              )}

              <article
                className="prose prose-slate prose-lg max-w-none
                           prose-headings:font-semibold prose-h2:text-slate-800
                           marker:font-semibold marker:text-slate-700
                           prose-img:rounded-lg prose-img:border prose-img:border-slate-200"
                dangerouslySetInnerHTML={{ __html: html || "<p>Memuat…</p>" }}
              />
            </main>

            {/* SIDEBAR */}
            <ArticleSidebar posts={posts} q={q} setQ={setQ} />
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
}
