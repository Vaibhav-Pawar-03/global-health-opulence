"use client";

import Image from "next/image";
import { Inter } from "next/font/google";


const body1 = Inter({
  weight: ["400"],
});

export default function GhoInfo() {
  return (
    <section className="w-full flex justify-center items-center py-4 bg-white">
      <div className="w-full max-w-6xl bg-[#D5EFEA] rounded-[30px] p-4 flex flex-col lg:flex-row items-center gap-6 shadow-sm">

        {/* Text Content */}
        <div className="flex-1  px-4">
          <p className={`${body1.className} text-gray-600 text-[18px]`}>
            At Global Health Opulence (GHO), every treatment pathway is shaped with thoughtful
            planning, international expertise, and concierge-level support. Our global network
            includes leading hospitals, pioneering specialists, and highly successful treatment
            centres across Asia, Europe, and the Americas.
            <br />
            Whether you are seeking aesthetic refinement, advanced surgery, life changing
            wellness, or specialised medical solutions, GHO ensures seamless coordination,
            transparent guidance, and a care experience that reflects world class medical luxury.
            <br />
            Your health deserves an elevated global journey. GHO brings that vision to life with
            excellence, comfort, and trust at every step.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/gdoctor.png"
            alt="Doctor Image"
            width={300}
            height={350}
            className="rounded-[22px] object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
