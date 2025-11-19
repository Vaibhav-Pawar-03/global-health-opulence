"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import DestinationHeroPlaceholder from "@/app/components/DestinationHeroPlaceholder";

const body1 = Inter({
  weight: ["400"],
});

export default function Home() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full h-[600px] flex items-center">
      {imageError ? (
        <DestinationHeroPlaceholder countryName="Malaysia" className="absolute inset-0" />
      ) : (
        <>
          <Image
            src="/malaysia-hero.jpg"
            alt="Malaysia Healthcare"
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
        </>
      )}

      <div className="relative z-10 max-w-3xl px-6 md:px-24 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1073B9] leading-tight">
          Where Modern Medicine Meets Heartfelt Hospitality
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          Malaysia has become one of Asia's most trusted names in medical tourism, known for its advanced healthcare system, English-speaking specialists, and exceptional patient comfort. The country offers the ideal balance of medical innovation and personal attention, making medical tourism in Malaysia a preferred choice for international patients seeking both quality and care.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          World-class hospitals equipped with international accreditations deliver a broad range of treatments, from complex surgeries to wellness therapies. With reliable infrastructure, affordable pricing, and an environment that feels calm and welcoming, Malaysia healthcare travel ensures that every patient's journey is safe, supported, and truly rejuvenating.
        </p>
      </div>
    </section>
  );
}
