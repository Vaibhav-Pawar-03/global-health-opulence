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
        <DestinationHeroPlaceholder countryName="India" className="absolute inset-0" />
      ) : (
        <>
          <Image
            src="/india-hero.jpg"
            alt="India Healthcare"
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
          Where World-Class Medicine Meets Time-Honoured Care
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          India stands at the forefront of global medical tourism, offering a rare balance of advanced medical expertise, cutting-edge infrastructure, and compassionate hospitality. From multi-speciality hospitals equipped with international accreditations to super-specialists educated at global institutions, medical tourism in India delivers world-class outcomes at a fraction of Western costs.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          As one of Asia's most trusted destinations for Indian healthcare travel, the country combines clinical excellence with cultural warmth. International patients benefit from seamless coordination, English-speaking medical teams, and comprehensive aftercare programs designed for complete recovery and peace of mind.
        </p>
      </div>
    </section>
  );
}
