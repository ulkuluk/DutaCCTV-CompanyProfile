export default function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
      {children}
    </span>
  );
}
