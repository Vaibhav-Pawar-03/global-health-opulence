"use client";

import Image from "next/image";

export default function MedicalPrecision() {
  return (
    <section className="relative bg-[#E9F5F2] py-16 md:py-24 px-6 rounded-[32px] mx-4 md:mx-12 my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Section Heading */}
        <div className="space-y-3">
          <p className="text-sm md:text-base text-[#1073B9] font-semibold tracking-wide">
            Global Destinations
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147]">
            Where Medical Precision{" "}
            <span className="text-[#1073B9]">Meets Paradise</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each facility meets rigorous international standards for surgical
            excellence, patient safety, and post-operative care. These aren't
            budget clinics. They're premium institutions serving global
            patients who expect exceptional outcomes.
          </p>
        </div>

        {/* Combined Image */}
        <div className="relative flex justify-center ">
          <div className="overflow-hidden rounded-[24px] shadow-2xl">
            <Image
              src="/Taj.png" // ✅ your combined image here
              alt="Global Medical Destinations"
              width={1200}
              height={500}
              className="rounded-[24px] object-cover"
              priority
            />
          </div>
        </div>

        {/* Navigation Buttons (static for now) */}
        <div className="flex justify-center items-center gap-6 pt-8">
          <button className="w-12 h-12 rounded-full border-2 border-[#007B55] text-[#007B55] flex items-center justify-center text-xl font-bold hover:bg-[#007B55] hover:text-white transition">
            &lt;
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-[#007B55] text-[#007B55] flex items-center justify-center text-xl font-bold hover:bg-[#007B55] hover:text-white transition">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
