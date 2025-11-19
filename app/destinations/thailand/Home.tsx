"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function ThailandHero() {
  return (
    <section className="relative w-full h-[700px] md:h-[750px] flex items-center">

      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/thailand-hero.jpg"
          alt="Thailand Healthcare Scene"
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
          Thailand
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Where Excellence in Care <br />
          Meets the Art of <span className="text-[#1073B9]">Tranquillity</span>
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          A global leader in medical tourism, Thailand combines advanced healthcare with an atmosphere of serenity. Known for internationally accredited hospitals, globally trained doctors, and exceptional service standards, medical tourism in Thailand offers precision and comfort that attract patients from across the world.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          From restorative surgeries to rejuvenating wellness therapies, Thailand's healthcare system is built around safety, innovation, and holistic recovery. For international patients, Thailand healthcare travel provides a seamless blend of medical sophistication and the country's renowned hospitality, turning treatment into a journey of renewal.
        </p>

      </div>
    </section>
  );
}
