"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className="w-full bg-white py-20 flex flex-col items-center">
      
      {/* Top Text Section */}
      <div className="text-center max-w-3xl px-4">
        <p className={`${body1.className} text-[#1073B9] tracking-wide`}>
          Services
        </p>

        <h2 className="text-[46px] font-extrabold text-[#25282B]">
          Global Medical Excellence
        </h2>

        <h3 className="text-[46px] font-bold text-[#1073B9]">
          Designed for You
        </h3>

        <p className={`${body1.className} text-gray-600 text-[18px] max-w-md mx-auto`}>
          Access world-renowned hospitals, elite specialists, and personalised medical journeys
          across the most trusted destinations worldwide.
        </p>
      </div>

      {/* Exact Screenshot Image Layout */}
      <div className="w-full mt-14 flex flex-col items-center">

        {/* Row 1 - 5 Images */}
        <div className="flex justify-center gap-6 max-w-[2200px] px-4 w-full">

          <Image src="/sd.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

          <Image src="/SH2.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

          <Image src="/SH3.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

          <Image src="/SH4.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

          <Image src="/SH5.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

        </div>

        {/* Row 2 - Aligned under Row 1 gaps */}
        <div className="flex justify-center gap-6 max-w-[2200px] px-4 w-full mt-6">

          {/* Blank placeholder */}
          <div className="w-[420px]"></div>

          <Image src="/SH6.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

          <Image src="/SH7.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

          <Image src="/SH8.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

          <Image src="/SH9.png" alt="Image" width={420} height={350}
            className="rounded-[28px] object-cover w-[420px] h-[350px]" />

        </div>

      </div>

    </section>
  );
}
