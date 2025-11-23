"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "600", "700"] });

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white py-24">
      <div className="relative max-w-7xl mx-auto">

        {/* MAIN CARD BACKGROUND */}
        <div className="bg-[#E9F7FF] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 max-w-2xl">
            <h2
              className={`text-[40px] md:text-[44px] font-bold text-[#0E1B27] leading-tight ${inter.className}`}
            >
              Who Are We?
            </h2>

            <p
              className={`mt-5 text-[18px] text-[#36454F] leading-relaxed ${inter.className}`}
            >
              Global Health Opulence (GHO) connects individuals from the US, Canada,
              Europe, Australia, and the UK to the best global medical care at optimal
              cost. We provide meticulously tailored journeys, blending luxurious
              vacation experiences with expert treatment and full concierge support.
              Focus on recovery, while GHO handles every detail with privacy, comfort,
              and personal attention.
            </p>

            {/* CTA BUTTON */}
            <button className="mt-10 bg-[#1073B9] hover:bg-[#0c5c91] text-white font-semibold text-lg py-4 px-8 rounded-full shadow-lg transition inline-flex gap-3 items-center">
              Speak with a GHO Advisor →
            </button>
          </div>

          {/* IMAGE — MOBILE/TABLET (INLINE) */}
          <div className="md:hidden w-full flex justify-center">
            <Image
              src="/who.png"
              alt="Doctor consulting patient"
              width={450}
              height={560}
              className="rounded-3xl drop-shadow-lg object-cover w-full"
              priority
            />
          </div>

        </div>

        {/* IMAGE — DESKTOP FLOATING RIGHT */}
        <div className="hidden md:block absolute right-0 bottom-0 translate-y-1">
          <Image
            src="/who.png"
            alt="Doctor consulting patient"
            width={460}
            height={570}
            className="rounded-[30px] drop-shadow-xl object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
