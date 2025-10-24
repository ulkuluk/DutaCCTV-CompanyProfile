// src/components/TestimonialCarousel.jsx
import { useEffect, useMemo, useState } from "react";

export default function TestimonialCarousel({ images = [], interval = 4000 }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  const go = (dir) => {
    setIndex((i) =>
      dir === "next"
        ? (i + 1) % safeImages.length
        : (i - 1 + safeImages.length) % safeImages.length
    );
  };

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const id = setInterval(() => go("next"), interval);
    return () => clearInterval(id);
  }, [safeImages.length, interval]);

  if (!safeImages.length) return null;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {safeImages.map((img, i) => (
          <div key={i} className="w-full shrink-0">
            <img
              src={img.src}
              alt={img.alt || `Testimoni ${i + 1}`}
              className="h-80 w-full md:h-96"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      {safeImages.length > 1 && (
        <>
          <button
            onClick={() => go("prev")}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white focus:outline-none focus:ring"
            aria-label="Sebelumnya"
          >
            ‹
          </button>
          <button
            onClick={() => go("next")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white focus:outline-none focus:ring"
            aria-label="Berikutnya"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {safeImages.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {safeImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === index ? "bg-[#C7000D]" : "bg-slate-300"
              } focus:outline-none focus:ring-2 focus:ring-[#C7000D]`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
