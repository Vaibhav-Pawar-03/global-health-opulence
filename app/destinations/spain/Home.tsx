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
        <DestinationHeroPlaceholder countryName="Spain" className="absolute inset-0" />
      ) : (
        <>
          <Image
            src="/spain-hero.jpg"
            alt="Spain Healthcare"
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
          European Excellence in Modern Medicine
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          As one of Europe's most advanced medical systems, Spain offers a rare combination of cutting-edge treatment and Mediterranean vitality. Patients choose medical tourism in Spain for access to world-class specialists, efficient care, and restorative surroundings.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          From regenerative medicine to advanced cardiac care, Spain healthcare travel is marked by professionalism, comfort, and a deep focus on holistic wellbeing.
        </p>
      </div>
    </section>
  );
}
