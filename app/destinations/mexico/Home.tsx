"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function MexicoHero() {
  return (
    <section className="relative w-full h-[700px] md:h-[750px] flex items-center">

      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/Bd1.png"
          alt="Mexico Healthcare Scene"
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
          Mexico
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Accessible Excellence <br />
          Close to <span className="text-[#1073B9]">Home</span>
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          Renowned for its high medical standards and welcoming environment, Mexico offers world-class healthcare within reach. The country's accredited hospitals and globally trained surgeons deliver precision care across diverse specialities, making Mexico healthcare travel a preferred choice for patients who value excellence and affordability in equal measure.
        </p>

      </div>
    </section>
  );
}
