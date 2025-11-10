"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";


const interRegular = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const interSemiBold = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

export default function MedicalPrecision() {
  const countries = [
    { name: "Turkey", img: "/page2.1.png" },
    { name: "UAE", img: "/page2.2.png" },
    { name: "India", img: "/page2.3.png" },
    { name: "Singapore", img: "/page2.4.png" },
    { name: "South Korea", img: "/page2.5.png" },
  ];

  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % countries.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? countries.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative bg-[#E9F5F2] py-16 md:py-24 px-6 rounded-4xl mx-4 md:mx-12 my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        {/* Section Heading */}
        <div className="space-y-3">
          <p className="text-sm md:text-base text-[#1073B9] font-regular tracking-wide">
            Global Destinations
          </p>

          <h2
            className={`${interRegular.className} text-3xl md:text-4xl font-normal text-[#002147]`}
          >
            Where Medical Precision{" "}
            <span
              className={`${interSemiBold.className} text-[#1073B9] text-[40px] leading-[125%] capitalize`}
            >
              Meets Paradise
            </span>
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Each facility meets rigorous international standards for surgical
            excellence, patient safety, and post-operative care. These aren't
            budget clinics. They're premium institutions serving global
            patients who expect exceptional outcomes.
          </p>
        </div>

        {/* ✅ Country Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-40 justify-center items-center pt-4">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div
                className={`relative w-[220px] h-[180px] md:w-[250px] md:h-80 overflow-hidden rounded-3xl shadow-xl transition-transform duration-300 ${
                  activeIndex === index ? "scale-105" : ""
                } hover:scale-105`}
              >
                <Image
                  src={country.img}
                  alt={country.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 240px"
                />
              </div>
              <p
                className={`${interSemiBold.className} text-[#002147] text-lg md:text-xl font-semibold`}
              >
                {country.name}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 pt-10">
          <button
           style={{
              width: "96px",
              height: "64px",
              borderRadius: "32px",
              borderWidth: "2px",
              paddingTop: "16px",
              paddingRight: "32px",
              paddingBottom: "16px",
              paddingLeft: "32px",
              opacity: 1,
            }}
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-[#006341] text-[#006341] flex items-center justify-center text-xl font-bold hover:bg-[#007B55] hover:text-white transition"
          >
            &lt;
          </button>
          <button
          style={{
              width: "96px",
              height: "64px",
              borderRadius: "32px",
              borderWidth: "2px",
              paddingTop: "16px",
              paddingRight: "32px",
              paddingBottom: "16px",
              paddingLeft: "32px",
              opacity: 1,
            }}
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-[#006341] text-[#006341] flex items-center justify-center text-xl font-bold hover:bg-[#007B55] hover:text-white transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
