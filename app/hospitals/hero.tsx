"use client";
import Image from "next/image";

export default function HospitalsHero() {
  return (
    <section className="w-full bg-[#E3FBF4] py-20 px-6 md:px-20 lg:px-28 xl:px-32 font-[Inter]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-14 lg:gap-28">

        {/* LEFT CONTENT */}
        <div className="max-w-xl lg:max-w-[520px]">
          <p className="text-[#1073B9] text-base font-medium mb-3">
            Where World-Class Medicine Meets Refined Care
          </p>

          <h1 className="text-[40px] leading-tight md:text-[50px] font-extrabold text-[#0A0A0A] mb-6">
            World’s Leading <br /> Hospitals for Global <br /> Patients
          </h1>

          <p className="text-[#505050] text-lg leading-relaxed mb-10">
            At GHO, we believe exceptional healthcare should know no borders.
            Our global hospital partners represent the highest medical standards, 
            combining advanced clinical innovation, internationally trained 
            specialists, and hospitality-driven experiences. Each institution is 
            carefully selected for its accreditation, infrastructure, and global 
            reputation in medical excellence.
          </p>

          <button className="bg-[#1073B9] text-white text-[17px] font-semibold py-4 px-8 rounded-[14px] shadow-[0_6px_14px_rgba(0,94,190,0.35)] hover:bg-[#0B5C95] transition-all duration-300">
            Book a consultation →
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-full lg:w-auto flex flex-col gap-10">

          {/* TOP IMAGE → shifted slightly right */}
          <div className="relative w-full lg:w-[520px] h-[280px] rounded-[26px] overflow-hidden lg:ml-8 xl:ml-12">
            <Image
              src="/nd1.png"
              alt="Premium Medical Property"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* BOTTOM IMAGE → placed further right */}
          <div className="relative w-full lg:w-[480px] h-[250px] rounded-[26px] overflow-hidden lg:ml-20 xl:ml-52">
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
    </section>
  );
}
