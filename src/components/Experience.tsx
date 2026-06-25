"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeader } from "./About";

const jobs = [
  {
    id: 1,
    company: "Bestcomp Group",
    role: "Frontend & Flutter Developer",
    period: "02/2025 — Present",
    location: "Baku, Azerbaijan",
    current: true,
    stack: ["TypeScript", "React", "Next.js", "Redux Toolkit", "Flutter", "Provider"],
    color: "#00D4FF",
  },
  {
    id: 2,
    company: "Alventures",
    role: "Front End Developer",
    period: "08/2024 — 02/2025",
    location: "Baku, Azerbaijan",
    current: false,
    stack: ["TypeScript", "React", "Next.js", "Redux Toolkit", "React Hook Form", "Ant Design"],
    color: "#54C5F8",
  },
  {
    id: 3,
    company: "BestComp Group",
    role: "Front End Developer",
    period: "06/2022 — 08/2024",
    location: "Baku, Azerbaijan",
    current: false,
    stack: ["TypeScript", "React", "Redux Toolkit", "React Hook Form", "Lodash"],
    color: "#818CF8",
  },
  {
    id: 4,
    company: "SoftEnd LLC",
    role: "Front End Developer",
    period: "06/2021 — 07/2022",
    location: "Baku, Azerbaijan",
    current: false,
    stack: ["JavaScript", "React", "Redux", "SCSS"],
    color: "#34D399",
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-[#060e27]/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader tag="Career" title="Work Experience" inView={inView} />

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/50 via-[#00D4FF]/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-7 w-5 h-5 rounded-full border-2 border-[#040d21] hidden sm:flex items-center justify-center -translate-x-1/2"
                  style={{ background: job.color, boxShadow: `0 0 12px ${job.color}60` }}
                >
                  {job.current && (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} style={{ color: job.color }} />
                        <h3 className="font-heading font-bold text-white text-base">
                          {job.company}
                        </h3>
                        {job.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 font-medium text-sm">{job.role}</p>
                    </div>
                    <div className="text-right text-xs text-slate-500 space-y-1">
                      <div className="font-mono text-slate-400">{job.period}</div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin size={10} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors duration-200"
                        style={{
                          borderColor: `${job.color}30`,
                          color: job.color,
                          background: `${job.color}08`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
