"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "./About";

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
            {[
              "Git",
              "GitHub",
              "Figma",
              "REST APIs",
              "Agile / Scrum",
              "iOS",
              "Android",
              "Postman",
              "VS Code",
              "Jira",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-slate-400 text-sm hover:border-[#00D4FF]/30 hover:text-[#00D4FF] transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
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
