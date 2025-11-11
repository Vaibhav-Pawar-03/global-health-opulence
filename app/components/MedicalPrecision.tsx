"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";


const interRegular = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const interSemiBold = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

const body1 = Inter({
  weight: ["400"],
});

export default function MedicalPrecision() {
  const countries = [
    { name: "Turkey", img: "/page2.1.png" },
    { name: "UAE", img: "/page2.2.png" },
    { name: "India", img: "/page2.3.png" },
    { name: "Singapore", img: "/page2.4.png" },
    { name: "South Korea", img: "/page2.5.png" },
    { name: "Thailand", img: "/page2.1.png" },
    { name: "Malaysia", img: "/page2.2.png" },
    { name: "Mexico", img: "/page2.3.png" },
    { name: "Brazil", img: "/page2.4.png" },
    { name: "Spain", img: "/page2.5.png" },
  ];

  // Create infinite loop by triplicating countries
  const extendedCountries = [...countries, ...countries, ...countries];

  const [activeIndex, setActiveIndex] = useState(countries.length); // Start at middle set
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  // Reset position when reaching clones for infinite effect
  useEffect(() => {
    if (activeIndex >= countries.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(countries.length);
      }, 500);
    } else if (activeIndex < countries.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(countries.length * 2 - 1);
      }, 500);
    }
  }, [activeIndex, countries.length]);

  return (
    <section className="relative bg-[#E9F5F2] py-16 md:py-24 px-6 rounded-4xl mx-4 md:mx-12 my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        {/* Section Heading */}
        <div className="space-y-3">
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

          <p className={`${body1.className} text-gray-600 max-w-4xl mx-auto leading-relaxed text-[18px]`}>
            Each facility meets rigorous international standards for surgical
            excellence, patient safety, and post-operative care. These aren't
            budget clinics. They're premium institutions serving global
            patients who expect exceptional outcomes.
          </p>
        </div>

        {/* ✅ Country Carousel */}
        <div className="overflow-hidden pt-4">
          <div
            className={`flex gap-40 justify-center items-center ${
              isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${activeIndex * (250 + 160)}px)`,
            }}
          >
            {extendedCountries.map((country, index) => (
              <div
                key={`${country.name}-${index}`}
                className="flex flex-col items-center justify-center space-y-4 flex-shrink-0"
              >
                <div className="relative w-[220px] h-[180px] md:w-[250px] md:h-80 overflow-hidden rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105">
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
