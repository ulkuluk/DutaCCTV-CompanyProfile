// src/components/PostMeta.jsx
export default function PostMeta({ author, date, readTime, className = "" }) {
  const d = date ? new Date(date).toLocaleDateString() : "";
  return (
    <div className={`text-sm text-blue-100/90 ${className}`}>
      {author && <span className="font-medium">{author}</span>} {date && "•"}{" "}
      {date && <time dateTime={date}>{d}</time>} {readTime && "•"}{" "}
      {readTime && <span>{readTime} min read</span>}
    </div>
  );
}
