"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function VietnamHero() {
  return (
    <section className="relative w-full h-[700px] md:h-[750px] flex items-center">

      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/vietnam-hero.jpg"
          alt="Vietnam Healthcare Scene"
          fill
          priority
          className="object-cover object-center"
        />

        {/* LEFT side fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-3xl px-6 md:px-24 space-y-6">

        <p className="text-[#1073B9] text-base md:text-lg font-medium">
          Vietnam
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] leading-tight">
          A Rising Power in <br />
          Advanced and <span className="text-[#1073B9]">Affordable Healthcare</span>
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          Vietnam is fast becoming a trusted name in medical tourism, blending clinical precision with cultural warmth. The country's expanding network of internationally accredited hospitals, English-speaking specialists, and modern facilities positions medical tourism in Vietnam as one of Asia's most promising healthcare journeys.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          With a strong focus on safety, technology, and patient-centred care, Vietnam healthcare travel appeals to those seeking cost-effective medical treatments without compromising on expertise or experience.
        </p>

      </div>
    </section>
  );
}
