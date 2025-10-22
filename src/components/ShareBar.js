// src/components/ShareBar.jsx
export default function ShareBar({ title }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = encodeURIComponent(title || "Artikel");
  const shareUrl = encodeURIComponent(url);
  const btn = "rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a className={btn} href={`https://wa.me/?text=${text}%20${shareUrl}`} target="_blank" rel="noreferrer">WhatsApp</a>
      <a className={btn} href={`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`} target="_blank" rel="noreferrer">X/Twitter</a>
      <a className={btn} href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer">Facebook</a>
      <button
        className={btn}
        onClick={async () => {
          try { await navigator.clipboard.writeText(url); alert("Link disalin!"); } catch {}
        }}
      >
        Copy Link
      </button>
    </div>
  );
}
