"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GitHubStats from "@/components/GitHubStats";

export default function Home() {
  return (
    <main className="bg-[#040d21] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <GitHubStats />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
