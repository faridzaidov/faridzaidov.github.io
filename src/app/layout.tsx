import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://faridzaidov.netlify.app"),
  title: "Farid Zaidov — Frontend & Flutter Developer",
  description:
    "Results-driven Frontend & Flutter Developer with 4+ years of experience building scalable web and mobile applications. Proficient in React, Next.js, TypeScript, Flutter & Dart.",
  keywords: [
    "Farid Zaidov",
    "Frontend Developer",
    "Flutter Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Dart",
    "Baku Azerbaijan",
  ],
  authors: [{ name: "Farid Zaidov", url: "https://faridzaidov.netlify.app" }],
  creator: "Farid Zaidov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faridzaidov.netlify.app",
    title: "Farid Zaidov — Frontend & Flutter Developer",
    description:
      "Results-driven Frontend & Flutter Developer with 4+ years of experience building scalable web and mobile applications.",
    siteName: "Farid Zaidov Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 930,
        height: 1200,
        alt: "Farid Zaidov — Frontend & Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farid Zaidov — Frontend & Flutter Developer",
    description:
      "Results-driven Frontend & Flutter Developer with 4+ years of experience.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
