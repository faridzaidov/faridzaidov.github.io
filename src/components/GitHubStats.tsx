"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function GitHubStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mt-12 flex flex-col items-center gap-4"
    >
      <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
        GitHub Activity
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-3xl">
        <img
          src="https://github-readme-stats.vercel.app/api?username=faridzaidov&show_icons=true&theme=transparent&hide_border=true&title_color=00D4FF&icon_color=00D4FF&text_color=94a3b8&bg_color=00000000&count_private=true"
          alt="GitHub Stats"
          className="rounded-xl max-w-full"
          loading="lazy"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=faridzaidov&theme=transparent&hide_border=true&ring=00D4FF&fire=00D4FF&currStreakLabel=00D4FF&sideLabels=94a3b8&dates=64748b&background=00000000"
          alt="GitHub Streak"
          className="rounded-xl max-w-full"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
