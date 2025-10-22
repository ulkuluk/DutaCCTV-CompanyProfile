export async function fetchArticlesIndex() {
  const url = `${process.env.PUBLIC_URL}/articles/index.json`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export async function fetchArticle(slug) {
  const base = `${process.env.PUBLIC_URL}/articles/${slug}`;
  const [metaRes, bodyRes] = await Promise.all([
    fetch(`${base}/meta.json`, { cache: "no-store" }),
    fetch(`${base}/body.md`,   { cache: "no-store" }),
  ]);
  if (!metaRes.ok || !bodyRes.ok) throw new Error("Artikel tidak ditemukan");
  const meta = await metaRes.json();
  const body = await bodyRes.text();
  return { meta, body };
}
