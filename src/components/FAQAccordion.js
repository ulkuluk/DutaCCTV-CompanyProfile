// src/components/FAQAccordion.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items = [] }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it, i) => {
        const active = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
            >
              <span className="font-medium text-slate-900">{it.q}</span>
              <ChevronDown className={`h-4 w-4 transition ${active ? "rotate-180" : ""}`} />
            </button>
            {active && (
              <div className="px-4 pb-4 text-sm leading-6 text-slate-700">{it.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
