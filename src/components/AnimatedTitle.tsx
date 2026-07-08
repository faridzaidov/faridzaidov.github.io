"use client";

import { motion } from "framer-motion";

export default function AnimatedTitle({
  text,
  inView,
  className = "",
  baseDelay = 0,
}: {
  text: string;
  inView: boolean;
  className?: string;
  baseDelay?: number;
}) {
  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
          aria-hidden="true"
        >
          {Array.from(word).map((letter, li) => {
            const delay = baseDelay + letterIndex * 0.03;
            letterIndex += 1;
            return (
              <motion.span
                key={li}
                className="inline-block"
                style={{ transformOrigin: "bottom" }}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay }}
              >
                {letter}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
