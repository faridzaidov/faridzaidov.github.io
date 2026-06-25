"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar, Code2, Briefcase } from "lucide-react";

const stats = [
  { icon: <Calendar size={22} />, value: "4+", label: "Years Experience" },
  { icon: <Code2 size={22} />, value: "10+", label: "Projects Built" },
  { icon: <Briefcase size={22} />, value: "4", label: "Companies" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="About Me"
          title="Crafting Digital Experiences"
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto md:mx-0"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#00D4FF]/40 animate-pulse" />
              <div className="absolute -inset-3 rounded-3xl border border-[#00D4FF]/10" />

              {/* Photo container */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#060e27] border border-white/5 flex items-center justify-center overflow-hidden relative">
                {/* Avatar placeholder */}
                <div className="flex flex-col items-center gap-3 text-slate-600">
                  <svg
                    className="w-24 h-24 text-slate-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <span className="text-xs font-mono text-slate-600">Photo</span>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#00D4FF]/10 to-transparent rounded-tl-2xl" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-[#060e27] border border-[#00D4FF]/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">
                  Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <MapPin size={14} className="text-[#00D4FF]" />
              <span>Baku, Azerbaijan</span>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Results-driven{" "}
              <span className="text-[#00D4FF] font-semibold">
                Frontend & Flutter Developer
              </span>{" "}
              with 4+ years of experience building scalable web and mobile
              applications.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              Proficient in{" "}
              <span className="text-white font-medium">
                Flutter & Dart
              </span>{" "}
              for cross-platform iOS & Android development, and in{" "}
              <span className="text-white font-medium">
                React, Next.js, TypeScript
              </span>{" "}
              for modern web applications. I love turning complex problems into
              clean, elegant solutions that users enjoy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center group hover:border-[#00D4FF]/30 transition-all duration-300"
                >
                  <div className="text-[#00D4FF] flex justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                    {s.icon}
                  </div>
                  <div className="font-heading font-bold text-2xl text-white">
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  tag,
  title,
  inView,
}: {
  tag: string;
  title: string;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <span className="inline-block px-3 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-mono uppercase tracking-widest mb-4">
        {tag}
      </span>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent mx-auto mt-4" />
    </motion.div>
  );
}
