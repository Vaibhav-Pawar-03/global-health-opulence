"use client";

import Image from "next/image";

export default function HospitalNetwork() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F7FBFD] py-16 md:py-24 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Small heading */}
        <p className="text-sm md:text-base font-semibold text-[#007B55]">
          Hospital Highlights
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147]">
          Access The World’s{" "}
          <span className="text-[#1073B9]">Premier Healthcare Network</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our hospital partners set the standard in global healthcare,
          offering precise, expert-led treatment within thoughtfully designed,
          state-of-the-art facilities for an experience defined by excellence
          and discretion.
        </p>

        {/* Combined Hospital Logos Image */}
        <div className="flex justify-center mt-10">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/Hlogo.png" // ✅ your combined hospital image
              alt="Global Hospital Partners"
              width={1200}
              height={300}
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
