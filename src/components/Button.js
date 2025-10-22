// src/components/Button.jsx
import cn from "../utils/cn";

export default function Button({
  href, // kalau ada -> <a>, kalau tidak -> <button>
  type = "button", // default button
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
    secondary:
      "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:ring-slate-400",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
  };

  const cls = cn(base, variants[variant], className);

  // Jika ada href => anchor; jika tidak => button native (bisa submit)
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} {...props}>
      {children}
    </button>
  );
}
