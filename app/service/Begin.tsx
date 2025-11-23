"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function Begin() {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-white">
      <div className="w-full max-w-6xl bg-[#D7ECFF] rounded-[30px] p-4 flex flex-col lg:flex-row items-center gap-6 shadow-md">
        
        {/* Doctor Image */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/doctor.png"
            alt="Doctor"
            width={300}
            height={300}
            className="rounded-[22px] object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left px-3">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
            Begin Your Global Treatment <br /> Journey With Confidence
          </h2>

          <p className={`${body1.className} mt-2 text-gray-600 text-[18px]`}>
            Share your medical goals and destination preferences. Our international care team
            will design a personalised treatment plan, curate hospital options, and provide
            transparent cost comparisons tailored exclusively for you.
            <br />
            Add form
          </p>

          {/* CTA Button */}
          <button className="mt-4 bg-[#1073B9] hover:bg-[#0d5a8a] text-white px-6 py-2.5 rounded-2xl text-sm lg:text-base font-semibold transition-all">
            Connect With GHO Today and Experience Excellence
          </button>
        </div>

      </div>
    </section>
  );
}
