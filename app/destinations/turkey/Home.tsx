"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function TurkeyHero() {
  return (
    <section className="relative w-full h-[700px] md:h-[750px] flex items-center">

      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/Bd1.png"
          alt="Türkiye Healthcare Scene"
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
          Türkiye
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Where Advanced Medicine <br />
          Meets <span className="text-[#1073B9]">Timeless Elegance</span>
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          Türkiye has become a distinguished name in global medical tourism, offering exceptional healthcare standards rooted in innovation, precision, and cultural hospitality. Known for its internationally accredited hospitals, world-renowned surgeons, and affordable treatment packages, medical tourism in Türkiye continues to attract patients seeking trusted expertise and refined care.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          From cosmetic and reconstructive procedures to complex organ transplants and fertility treatments, Türkiye's healthcare institutions combine cutting-edge technology with meticulous attention to detail. For discerning patients, Türkiye healthcare travel delivers not only medical excellence but also the sophistication of a European-Asian experience — modern, accessible, and deeply restorative.
        </p>

      </div>
    </section>
  );
}
