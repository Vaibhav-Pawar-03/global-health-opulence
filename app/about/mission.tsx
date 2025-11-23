"use client";

import { Star, Eye } from "lucide-react";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400", "500", "600"],
});

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-20 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        
        {/* Our Mission */}
        <div className="bg-[#D5EFEA] rounded-4xl p-10">
          <div className="flex items-center gap-4 mb-4">
            <Star className="text-[#006341]" size={70} strokeWidth={2.5} />
            <h3 className="text-5xl font-semibold text-[#0D2B29]">
              Our Mission
            </h3>
          </div>
          <p className={`${body1.className} text-gray-700 text-lg leading-relaxed`}>
            We make world-class healthcare accessible by combining medical
            expertise with tailored care, ensuring every patient feels confident,
            cared for, and seen.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-[#D5EFEA] rounded-4xl p-10">
          <div className="flex items-center gap-4 mb-4">
            <Eye className="text-[#006341]" size={70} strokeWidth={2.5} />
            <h3 className="text-5xl font-semibold text-[#0D2B29]">
              Our Vision
            </h3>
          </div>
          <p className={`${body1.className} text-gray-700 text-lg leading-relaxed`}>
            We envision a world in which luxury medical travel sets the benchmark
            for precise, customised, and perfectly polished experiences.
          </p>
        </div>

      </div>
    </section>
  );
}
