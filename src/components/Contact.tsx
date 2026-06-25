"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { SectionHeader } from "./About";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "feridzaidovv@gmail.com",
      href: "mailto:feridzaidovv@gmail.com",
      color: "#00D4FF",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/faridzaidov",
      href: "https://www.linkedin.com/in/faridzaidov/",
      color: "#0A66C2",
    },
    {
      icon: <FaTelegram size={20} />,
      label: "Telegram",
      value: "@faridzaidov",
      href: "https://t.me/faridzaidov",
      color: "#29B5E8",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "github.com/faridzaidov",
      href: "https://github.com/faridzaidov",
      color: "#ffffff",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="Get in Touch" title="Let's Work Together" inView={inView} />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-400 leading-relaxed mb-8 text-base">
              I&apos;m currently{" "}
              <span className="text-[#00D4FF] font-semibold">
                open to new opportunities
              </span>
              . Whether you have a project in mind, want to collaborate, or just
              want to say hi — my inbox is always open!
            </p>

            <div className="space-y-4">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-white/15 transition-all duration-200 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${c.color}15`, color: c.color }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-mono mb-0.5">
                      {c.label}
                    </div>
                    <div className="text-slate-200 text-sm font-medium group-hover:text-[#00D4FF] transition-colors duration-200">
                      {c.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {sent ? (
              <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle size={52} className="text-[#00D4FF]" />
                </motion.div>
                <h3 className="font-heading font-bold text-white text-xl">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-[#00D4FF] text-sm hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 space-y-4"
              >
                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-1.5 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00D4FF]/50 focus:bg-[#00D4FF]/5 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00D4FF]/50 focus:bg-[#00D4FF]/5 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00D4FF]/50 focus:bg-[#00D4FF]/5 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#00D4FF] text-[#040d21] font-heading font-bold text-sm hover:bg-cyan-300 transition-all duration-200 disabled:opacity-60 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-[#040d21] border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
