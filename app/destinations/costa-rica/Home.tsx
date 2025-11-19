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
        <DestinationHeroPlaceholder countryName="Costa Rica" className="absolute inset-0" />
      ) : (
        <>
          <Image
            src="/costa-rica-hero.jpg"
            alt="Costa Rica Healthcare"
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
          Healing in Harmony with Nature
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          Costa Rica is emerging as Latin America's wellness and medical care haven. Its accredited hospitals, English-speaking doctors, and natural surroundings make medical tourism in Costa Rica a trusted choice for international patients.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          Here, advanced clinical care merges seamlessly with eco-conscious living. Costa Rica healthcare travel offers procedures that restore the body while the nation's lush landscapes rejuvenate the spirit.
        </p>
      </div>
    </section>
  );
}
