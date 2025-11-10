"use client";

import Image from "next/image";

export default function Works() {
  return (
    <section className="relative bg-linear-to-b from-white to-[#F8FBFF] py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Section Heading */}
        <div className="space-y-3">
          <p className="text-sm md:text-base text-[#007B55] font-regular tracking-wide">
            Patient Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B]">
            How It Works
          </h2>
        </div>

        {/* ✅ Combined Image with exact Figma properties */}
        <div className="mt-8 flex justify-center">
          <div
            className="relative"
            style={{
              width: "1405px",
              height: "573px",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            <Image
              src="/Work2.1.png" 
              alt="How It Works Combined Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
