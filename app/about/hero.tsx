"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">

        {/* LEFT - Text Content */}
        <div className="flex-1">
          <p className={`${body1.className} text-[#1073B9] font-semibold tracking-wide mb-2`}>
            Services
          </p>

          <h2 className="text-[42px] lg:text-[48px] font-extrabold text-[#25282B] leading-snug">
            Your Gateway to <br />
            <span className="text-[#1073B9]">World-Class Global Healthcare</span>
          </h2>

          <p className={`${body1.className} text-gray-600 text-[18px] leading-relaxed mt-5 max-w-lg`}>
            GHO connects you to world-class global medical care.
            Our concierge team provides a seamless, personalized journey from
            consultation to recovery, blending expert medicine with comfort and style.
          </p>

          {/* CTA Button */}
          <button className="mt-8 bg-[#1073B9] hover:bg-[#0d5a8a] transition text-white text-base font-semibold py-4 px-8 rounded-full shadow-md inline-flex items-center gap-3">
            Plan My Treatment Journey →
          </button>
        </div>

        {/* Image Side Section */}
            <div className="flex-1 mt-12 flex justify-end gap-8">
            
            {/* Image 1 */}
            <Image
                src="/Ah1.png"
                alt="Healthcare Destination"
                width={300}
                height={510}
                className="rounded-[20px] object-cover"
                priority
            />

            {/* Image 2 */}
            <Image
                src="/Ah2.png"
                alt="Premium Hospital Room"
                width={300}
                height={510}
                className="rounded-[20px] object-cover"
                priority
            />

            </div>


      </div>
    </section>
  );
}
