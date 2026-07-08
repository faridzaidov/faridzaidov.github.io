"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, RefreshCw, Code2 } from "lucide-react";
import {
  SiGit,
  SiGithub,
  SiFigma,
  SiApple,
  SiAndroid,
  SiPostman,
  SiJira,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { SectionHeader } from "./About";

const extras: { name: string; Icon: IconType; color: string }[] = [
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Figma", Icon: SiFigma, color: "#A259FF" },
  { name: "REST APIs", Icon: Globe, color: "#00D4FF" },
  { name: "Agile / Scrum", Icon: RefreshCw, color: "#F59E0B" },
  { name: "iOS", Icon: SiApple, color: "#ffffff" },
  { name: "Android", Icon: SiAndroid, color: "#3DDC84" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "VS Code", Icon: Code2, color: "#007ACC" },
  { name: "Jira", Icon: SiJira, color: "#0052CC" },
];

const webSkills = [
  { name: "React", color: "#61DAFB", level: 95 },
  { name: "Next.js", color: "#ffffff", level: 90 },
  { name: "TypeScript", color: "#3178C6", level: 90 },
  { name: "JavaScript", color: "#F7DF1E", level: 95 },
  { name: "Redux Toolkit", color: "#764ABC", level: 85 },
  { name: "Tailwind CSS", color: "#06B6D4", level: 92 },
  { name: "Ant Design", color: "#1677FF", level: 80 },
  { name: "React Hook Form", color: "#EC5990", level: 85 },
  { name: "HTML / CSS", color: "#E34F26", level: 98 },
];

const mobileSkills = [
  { name: "Flutter", color: "#54C5F8", level: 90 },
  { name: "Dart", color: "#0553B1", level: 88 },
  { name: "BLoC", color: "#00D4FF", level: 80 },
  { name: "Provider", color: "#54C5F8", level: 85 },
  { name: "Firebase Auth", color: "#FFCA28", level: 78 },
  { name: "REST APIs", color: "#00D4FF", level: 92 },
  { name: "DIO / HTTP", color: "#82B1FF", level: 85 },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-[#060e27]/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Tech Stack" title="Skills & Technologies" inView={inView} />

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <SkillColumn
            title="Web Development"
            emoji="🌐"
            skills={webSkills}
            inView={inView}
            delay={0.1}
          />
          <SkillColumn
            title="Mobile Development"
            emoji="📱"
            skills={mobileSkills}
            inView={inView}
            delay={0.25}
          />
        </div>

        {/* Badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14"
        >
          <p className="text-center text-slate-500 text-sm font-mono uppercase tracking-widest mb-6">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {extras.map((extra) => (
              <ExtraBadge key={extra.name} {...extra} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExtraBadge({
  name,
  Icon,
  color,
}: {
  name: string;
  Icon: IconType;
  color: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/4 border text-sm transition-all duration-200 cursor-default"
      style={{
        borderColor: hovered ? `${color}4d` : "rgba(255,255,255,0.08)",
        color: hovered ? color : undefined,
        boxShadow: hovered ? `0 0 12px ${color}33` : "none",
      }}
    >
      <Icon
        size={15}
        style={{ color: hovered ? color : "#94a3b8" }}
        className="transition-colors duration-200"
      />
      <span className={hovered ? "" : "text-slate-400"}>{name}</span>
    </span>
  );
}

function SkillColumn({
  title,
  emoji,
  skills,
  inView,
  delay,
}: {
  title: string;
  emoji: string;
  skills: { name: string; color: string; level: number }[];
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
        <span>{emoji}</span>
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-slate-300 text-sm font-medium">
                {skill.name}
              </span>
              <span className="text-slate-500 text-xs font-mono">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 0.8, delay: delay + i * 0.06, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  boxShadow: `0 0 8px ${skill.color}60`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
