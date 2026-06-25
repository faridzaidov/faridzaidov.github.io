"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-heading font-bold text-white text-sm">
          <span className="text-[#00D4FF]">&lt;</span>
          FZ
          <span className="text-[#00D4FF]">/&gt;</span>
          <span className="text-slate-600 font-normal ml-3 text-xs">
            © {year} Farid Zaidov
          </span>
        </div>

        <p className="text-slate-600 text-xs text-center">
          Built with{" "}
          <span className="text-[#00D4FF]">Next.js</span> &{" "}
          <span className="text-[#00D4FF]">Tailwind CSS</span>
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: <Github size={16} />, href: "https://github.com/faridzaidov", label: "GitHub" },
            { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/faridzaidov/", label: "LinkedIn" },
            { icon: <Mail size={16} />, href: "mailto:feridzaidovv@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-slate-500 hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
