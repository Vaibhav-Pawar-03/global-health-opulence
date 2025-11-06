"use client";

import Image from "next/image";

export default function Works() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8FBFF] py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Section Heading */}
        <div className="space-y-3">
          <p className="text-sm md:text-base text-[#007B55] font-semibold tracking-wide">
            Patient Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147]">
            How It Works
          </h2>
        </div>

        {/* Stepper Timeline */}
        <div className="relative mt-12">
          {/* Horizontal line */}
          <div className="absolute top-[50%] left-0 w-full border-t-2 border-dashed border-[#B0D4E3]" />

          {/* Steps */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center md:w-[180px] text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#1073B9] text-white font-bold rounded-full shadow-md relative z-10">
                1
              </div>
              <div className="mt-6 space-y-3">
                <Image
                  src="/consultation.png" // ✅ replace with your logo
                  alt="Initial Consultation"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <h3 className="font-semibold text-[#002147]">
                  Initial Consultation
                </h3>
                <p className="text-gray-600 text-sm">
                  We handle your medical records with utmost privacy and care.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center md:w-[180px] text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#1073B9] text-white font-bold rounded-full shadow-md relative z-10">
                2
              </div>
              <div className="mt-6 space-y-3">
                <Image
                  src="/healthcare.png"
                  alt="Treatment Directions"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <h3 className="font-semibold text-[#002147]">
                  Individually Curated Treatment Directions
                </h3>
                <p className="text-gray-600 text-sm">
                  Our expert healthcare officer shall guide you with multiple
                  options.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center md:w-[180px] text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#1073B9] text-white font-bold rounded-full shadow-md relative z-10">
                3
              </div>
              <div className="mt-6 space-y-3">
                <Image
                  src="/travel.png"
                  alt="Travel and Stay"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <h3 className="font-semibold text-[#002147]">
                  Travel and Stay Orchestration
                </h3>
                <p className="text-gray-600 text-sm">
                  You have worldwide choices for your treatment and rejuvenation.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center md:w-[180px] text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#1073B9] text-white font-bold rounded-full shadow-md relative z-10">
                4
              </div>
              <div className="mt-6 space-y-3">
                <Image
                  src="/insurer.png"
                  alt="Personal Stewardship"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <h3 className="font-semibold text-[#002147]">
                  Treatment with Personal Stewardship
                </h3>
                <p className="text-gray-600 text-sm">
                  Your steward ensures discreet support throughout your treatment.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center md:w-[180px] text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#1073B9] text-white font-bold rounded-full shadow-md relative z-10">
                5
              </div>
              <div className="mt-6 space-y-3">
                <Image
                  src="/Return.png"
                  alt="Restoration and Return"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <h3 className="font-semibold text-[#002147]">
                  Restoration and Return
                </h3>
                <p className="text-gray-600 text-sm">
                  Aftercare and virtual follow-ups ensure seamless healing beyond discharge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
