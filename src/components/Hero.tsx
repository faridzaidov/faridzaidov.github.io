"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[#040d21]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00D4FF]/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />
      </div>

      <FloatingLogos />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-5xl md:text-7xl text-white mb-4 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span
            className="text-[#00D4FF]"
            style={{ textShadow: "0 0 30px rgba(0,212,255,0.4)" }}
          >
            Farid Zaidov
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-3xl font-heading font-semibold text-slate-300 mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Flutter Developer",
              2000,
              "React & Next.js Expert",
              2000,
              "Mobile App Builder",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-slate-200"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Results-driven developer with{" "}
          <span className="text-[#00D4FF] font-semibold">4+ years</span> of
          experience building scalable web and mobile applications. I craft
          seamless experiences with{" "}
          <span className="text-white font-medium">React, Next.js, TypeScript</span>{" "}
          and <span className="text-white font-medium">Flutter & Dart</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-xl bg-[#00D4FF] text-[#040d21] font-heading font-bold text-base hover:bg-cyan-300 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:-translate-y-0.5"
          >
            View My Work
          </button>

          <a
            href="/faridzaidov_cv.pdf"
            download="Farid_Zaidov_CV.pdf"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-[#00D4FF]/40 text-white font-heading font-semibold text-base hover:border-[#00D4FF] hover:bg-[#00D4FF]/5 transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <Download
              size={18}
              className="group-hover:animate-bounce transition-all"
            />
            Download CV
          </a>

          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 font-heading font-semibold text-base hover:border-white/25 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: <Github size={20} />, href: "https://github.com/faridzaidov", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/faridzaidov/", label: "LinkedIn" },
            { icon: <FaTelegram size={20} />, href: "https://t.me/faridzaidov", label: "Telegram" },
            { icon: <Mail size={20} />, href: "mailto:feridzaidovv@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingLogos() {
  return (
    <>
      <motion.div
        className="absolute top-24 right-16 md:right-32 opacity-20 hidden sm:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="72" height="72" viewBox="0 0 32 32" fill="none">
          <path d="M4 20.5L13.5 11H32L22.5 20.5H4Z" fill="#54C5F8" />
          <path d="M4 20.5L13.5 30H22.5L13.5 20.5H4Z" fill="#01579B" />
          <path d="M13.5 20.5L22.5 11H32L22.5 20.5H13.5Z" fill="#29B6F6" />
          <path d="M13.5 20.5L18 25L22.5 20.5L18 16L13.5 20.5Z" fill="#29B6F6" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-8 md:left-24 opacity-15 hidden sm:block"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="64" height="64" viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
          <circle r="2.05" />
          <g fill="none" stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-8 md:right-40 opacity-15 hidden sm:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="56" height="56" viewBox="0 0 15 15" fill="none">
          <path
            d="M7.5 1.5a6 6 0 100 12 6 6 0 000-12zM4.5 9.5V5.5l5 4V5.5"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-4 md:left-16 opacity-15 hidden md:block"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <svg width="48" height="48" viewBox="0 0 400 400" fill="none">
          <rect width="400" height="400" rx="50" fill="#3178C6" fillOpacity="0.8" />
          <path
            d="M87.7 242v28.2c4.5 2.4 9.8 4.2 16 5.4s12.6 1.8 19.3 1.8c6.5 0 12.7-.6 18.5-1.9 5.8-1.3 10.9-3.3 15.3-6 4.4-2.8 7.9-6.3 10.5-10.6 2.6-4.3 3.9-9.5 3.9-15.6 0-4.4-.7-8.3-2-11.6-1.3-3.4-3.2-6.4-5.7-9-2.5-2.6-5.5-5-8.9-7-3.4-2.1-7.2-4-11.3-5.9-3.1-1.4-5.9-2.7-8.4-4-2.5-1.3-4.7-2.6-6.5-3.9a16.8 16.8 0 01-4.2-4.4c-1-1.6-1.5-3.5-1.5-5.6 0-1.9.5-3.6 1.4-5.1.9-1.5 2.3-2.8 3.9-3.9 1.7-1.1 3.7-1.9 6-2.5 2.3-.6 4.8-.9 7.5-.9 2 0 4.1.2 6.3.5 2.2.3 4.4.8 6.6 1.5 2.2.7 4.3 1.5 6.3 2.6 2 1 3.8 2.2 5.4 3.5V202c-3.3-1.2-6.9-2.1-10.8-2.7-3.9-.6-8.2-.9-12.9-.9-6.4 0-12.5.7-18.3 2.1-5.8 1.4-10.9 3.5-15.3 6.3-4.4 2.8-7.9 6.4-10.4 10.6-2.5 4.3-3.8 9.3-3.8 15.1 0 7.4 2.2 13.8 6.5 19.1 4.3 5.3 10.9 9.8 19.7 13.5 3.3 1.4 6.4 2.7 9.1 4.1 2.8 1.3 5.2 2.7 7.2 4.1 2 1.4 3.6 3 4.8 4.7 1.2 1.7 1.7 3.7 1.7 5.9 0 1.8-.4 3.4-1.3 4.9-.9 1.4-2.1 2.7-3.8 3.7-1.7 1-3.7 1.8-6.2 2.4-2.5.6-5.3.8-8.5.8-5.5 0-11-.9-16.4-2.8-5.4-1.9-10.4-4.8-14.9-8.6zm99.5-69.9h38.8v108.4h24.3V172.1h38.9v-20H187.2v20z"
            fill="white"
          />
        </svg>
      </motion.div>
    </>
  );
}
