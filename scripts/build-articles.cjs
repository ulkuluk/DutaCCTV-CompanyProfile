// scripts/build-articles.cjs
const fs = require("fs/promises");
const path = require("path");

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public");
const ARTICLES_DIR = path.join(PUB, "articles");
const INDEX_PATH = path.join(ARTICLES_DIR, "index.json");

(async () => {
  await fs.mkdir(ARTICLES_DIR, { recursive: true });
  const entries = await fs.readdir(ARTICLES_DIR, { withFileTypes: true });

  const items = [];
  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    const slug = ent.name;
    const metaPath = path.join(ARTICLES_DIR, slug, "meta.json");
    try {
      const raw = await fs.readFile(metaPath, "utf8");
      const meta = JSON.parse(raw);
      items.push({
        slug,
        title: meta.title || slug,
        category: meta.category || "Tips",
        date: meta.date || new Date().toISOString().slice(0, 10),
        excerpt: meta.excerpt || "",
        cover: meta.cover || `/articles/${slug}/cover.jpg`,
      });
    } catch (e) {
      console.warn(`[skip] ${slug}: ${e.message}`);
    }
  }

  items.sort((a, b) => new Date(b.date) - new Date(a.date));
  await fs.writeFile(INDEX_PATH, JSON.stringify(items, null, 2), "utf8");
  console.log(`✓ Wrote ${INDEX_PATH} (${items.length} items)`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
