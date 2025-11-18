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
        alt="South Korea Healthcare"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

      <div className="relative z-10 max-w-3xl px-6 md:px-24 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1073B9] leading-tight">
          Pioneering Precision in Global Healthcare
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          Renowned for its technological innovation and medical excellence, South Korea stands at the forefront of modern healthcare. With internationally accredited hospitals, advanced infrastructure, and globally trained specialists, medical tourism in South Korea redefines precision and patient-centred care.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          Each year, international patients choose South Korea healthcare travel for treatments that unite scientific progress with a refined sense of service. From aesthetic enhancements to complex oncology, every journey reflects South Korea's mastery of modern medicine.
        </p>
      </div>
    </section>
  );
}
