import { useEffect, useRef, useState } from "react";

export default function useCountUp(target = 0, duration = 1200) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    let raf = null;
    const start = performance.now();
    startRef.current = start;

    const tick = (now) => {
      const progress = Math.min((now - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}
