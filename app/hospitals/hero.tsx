"use client";
import Image from "next/image";

export default function HospitalsHero() {
  return (
    <section className="w-full bg-[#E3FBF4] py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 xl:px-24 font-[Inter]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 xl:gap-20">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 max-w-xl lg:max-w-none lg:pr-8">
            <p className="text-[#1073B9] text-sm md:text-base font-semibold mb-4 tracking-wide uppercase">
              Where World-Class Medicine Meets Refined Care
            </p>

            <h1 className="text-[#0A0A0A] mb-5 md:mb-6">
              World's Leading <br /> Hospitals for Global <br /> Patients
            </h1>

            <p className="text-[#505050] text-base md:text-lg leading-[1.7] mb-8 md:mb-10">
              At GHO, we believe exceptional healthcare should know no borders.
              Our global hospital partners represent the highest medical standards,
              combining advanced clinical innovation, internationally trained
              specialists, and hospitality-driven experiences. Each institution is
              carefully selected for its accreditation, infrastructure, and global
              reputation in medical excellence.
            </p>

            <button className="bg-[#1073B9] text-white text-base md:text-[17px] font-semibold py-3.5 md:py-4 px-7 md:px-8 rounded-[14px] shadow-[0_6px_14px_rgba(0,94,190,0.35)] hover:bg-[#0B5C95] hover:shadow-[0_8px_18px_rgba(0,94,190,0.45)] transition-all duration-300">
              Book a consultation →
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 lg:pl-4">

            {/* TOP IMAGE → shifted slightly right */}
            <div className="relative w-full h-[240px] md:h-[280px] lg:h-[300px] rounded-[20px] md:rounded-[26px] overflow-hidden lg:ml-6 xl:ml-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/nd1.png"
                alt="Premium Medical Property"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* BOTTOM IMAGE → placed further right */}
            <div className="relative w-full max-w-[90%] md:max-w-[85%] h-[220px] md:h-[250px] lg:h-[270px] rounded-[20px] md:rounded-[26px] overflow-hidden lg:ml-16 xl:ml-24 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/nd2.png"
                alt="Retreat Healing Environment"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
