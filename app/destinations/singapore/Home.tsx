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
        <DestinationHeroPlaceholder countryName="Singapore" className="absolute inset-0" />
      ) : (
        <>
          <Image
            src="/hero.png"
            alt="Singapore Healthcare"
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
          Asia's Benchmark for Medical Precision and Trust
        </h1>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl pt-3`}>
          Globally recognised for its safety, efficiency, and innovation, Singapore stands as a benchmark for world-class healthcare. Its hospitals are ranked among the best in Asia, offering sophisticated medical technology and uncompromising patient care.
        </p>

        <p className={`${body1.className} text-[18px] text-[#333333] leading-relaxed max-w-xl`}>
          With a foundation built on trust, regulation, and clinical excellence, medical tourism in Singapore delivers peace of mind for patients seeking the highest international standards.
        </p>
      </div>
    </section>
  );
}
