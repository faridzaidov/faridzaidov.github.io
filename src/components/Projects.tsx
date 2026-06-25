"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Smartphone, Globe } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    id: 1,
    emoji: "☁️",
    name: "Bcloud",
    description:
      "Cloud-based file storage & management platform with seamless cross-device sync and intuitive UI.",
    tech: ["Flutter", "Dart", "Provider", "REST APIs"],
    type: "mobile" as const,
    highlight: true,
  },
  {
    id: 2,
    emoji: "📄",
    name: "AzDoc Mobile",
    description:
      "Cross-platform document management application for efficient handling of official documentation.",
    tech: ["Flutter", "Dart", "REST APIs"],
    type: "mobile" as const,
    highlight: false,
  },
  {
    id: 3,
    emoji: "⚖️",
    name: "Mobile Court Management System",
    description:
      "Legal case and document management mobile app with task/case tracking and document processing.",
    tech: ["Flutter", "Dart", "REST APIs"],
    type: "mobile" as const,
    highlight: false,
  },
  {
    id: 4,
    emoji: "🚗",
    name: "Mashin.al",
    description:
      "Online car marketplace platform serving thousands of users with advanced search and filtering.",
    tech: ["React", "Next.js", "TypeScript", "Ant Design", "REST APIs"],
    type: "web" as const,
    url: "https://mashin.al",
    highlight: true,
  },
  {
    id: 5,
    emoji: "🏢",
    name: "InfiniTech Website",
    description:
      "Corporate website for Enterprise IT Integration company, built from scratch with modern design.",
    tech: ["Next.js", "TypeScript", "React"],
    type: "web" as const,
    url: "https://infinitech.az",
    highlight: false,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader tag="Portfolio" title="Featured Projects" inView={inView} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative glass rounded-2xl p-6 flex flex-col gap-4 card-hover ${
        project.highlight ? "border-[#00D4FF]/20" : ""
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <span className="text-4xl">{project.emoji}</span>
        <TypeBadge type={project.type} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-[#00D4FF] transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded-md bg-[#00D4FF]/8 border border-[#00D4FF]/15 text-[#00D4FF] text-xs font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#00D4FF] transition-colors duration-200 font-medium group/link w-fit"
        >
          <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
          View Project
        </a>
      ) : (
        <span className="flex items-center gap-2 text-sm text-slate-600 font-medium">
          <Smartphone size={14} />
          Mobile App
        </span>
      )}

      {/* Highlight glow */}
      {project.highlight && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "inset 0 0 30px rgba(0,212,255,0.05)" }}
        />
      )}
    </motion.div>
  );
}

function TypeBadge({ type }: { type: "mobile" | "web" }) {
  if (type === "mobile") {
    return (
      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#54C5F8]/10 border border-[#54C5F8]/20 text-[#54C5F8] text-xs font-mono">
        <Smartphone size={11} />
        Mobile
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-xs font-mono">
      <Globe size={11} />
      Web
    </span>
  );
}
