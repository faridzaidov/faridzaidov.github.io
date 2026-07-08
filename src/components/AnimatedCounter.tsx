"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  inView,
  duration = 1.5,
  delay = 0,
}: {
  value: string;
  inView: boolean;
  duration?: number;
  delay?: number;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || target === 0) return;
    started.current = true;

    const timeoutId = setTimeout(() => {
      const startTime = performance.now();
      const durationMs = duration * 1000;

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [inView, target, duration, delay]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
