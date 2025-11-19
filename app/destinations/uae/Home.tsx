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
        <DestinationHeroPlaceholder countryName="UAE" className="absolute inset-0" />
      ) : (
        <>
          <Image
            src="/uae-hero.jpg"
            alt="UAE Healthcare"
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
          Experience World-Class Care with Unmatched Comfort
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          The UAE has rapidly become a global destination for medical tourism, blending advanced healthcare infrastructure with the luxury hospitality the region is famous for. From Dubai to Abu Dhabi, international patients experience top-tier facilities, board-certified doctors, and concierge-level care.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          Medical tourism in the UAE stands out for its precision technology, minimal waiting times, and the seamless integration of healthcare and leisure. English-speaking medical teams, personalised recovery suites, and direct airport-to-hospital coordination make the UAE healthcare travel experience exceptionally refined.
        </p>
      </div>
    </section>
  );
}
