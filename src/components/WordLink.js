import { ChevronRight } from "lucide-react";

export default function WordLink({ href, children }) {
  return (
    <a
      href={href}
      className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:underline"
      style={{ color: "#C7000D" }} 
    >
      {children} <ChevronRight className="mt-1 h-4 w-4" />
    </a>
  );
}
