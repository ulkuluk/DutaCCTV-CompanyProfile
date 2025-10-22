export default function Tag({ children }) {
  return (
    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}
