"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

export default function MosaicReveal({
  rows = 4,
  cols = 6,
}: {
  rows?: number;
  cols?: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const total = rows * cols;
  const order = useMemo(() => {
    const indices = Array.from({ length: total }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const positions = new Array<number>(total);
    indices.forEach((tileIndex, orderPos) => {
      positions[tileIndex] = orderPos;
    });
    return positions;
  }, [total]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 grid pointer-events-none z-10"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {order.map((orderPos, i) => (
        <motion.div
          key={i}
          className="bg-[#040d21]"
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 0 } : { opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: inView ? 0.1 + orderPos * (0.6 / total) : 0,
          }}
        />
      ))}
    </div>
  );
}
