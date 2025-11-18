"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function Home() {
  return (
    <section className="relative w-full h-[600px] flex items-center">
      <Image
        src="/hero.png"
        alt="Germany Healthcare"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

      <div className="relative z-10 max-w-3xl px-6 md:px-24 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1073B9] leading-tight">
          Precision Medicine in the Heart of Europe
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          Germany is synonymous with clinical excellence and engineering precision, making it one of the most sought-after destinations for international healthcare travel. Renowned for evidence-based protocols, cutting-edge research, and stringent medical standards, Germany's hospitals consistently rank among the world's best.
        </p>
      </div>
    </section>
  );
}
