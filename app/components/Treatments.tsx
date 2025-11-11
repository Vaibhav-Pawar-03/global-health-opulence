"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function Treatments() {
  const cards = [
    { title: "Cosmetic & Elective Procedures", img: "/Cosmetic.png" },
    { title: "Oncology (Cancer Care)", img: "/Oncology.png" },
    { title: "Orthopaedics", img: "/Ortho.png" },
    { title: "Cardiology & Heart Surgery", img: "/Cardio.png" },
    { title: "Neurology & Spine", img: "/Neuro.png" },
    { title: "Fertility Treatments", img: "/Fertility.png" },
    { title: "Bariatric Surgery", img: "/Bariatric.png" },
    { title: "Dental Care", img: "/Dental.png" },
    { title: "Eye Care & LASIK", img: "/EyeCare.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Handle responsive visible count with proper hydration
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < cards.length - visibleCount)
      setActiveIndex(activeIndex + 1);
  };

  return (
    <section className="relative bg-linear-to-b from-white to-[#F6FBFA] py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#002147]">
            Popular Treatments
          </h2>
          <p className={`${body1.className} text-gray-600 max-w-4xl leading-relaxed text-[18px] whitespace-nowrap`}>
            From routine to complex, elective to life-saving. GHO specializes in connecting patients with expert care across:
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full">
          {/* Overflow container with padding for scale effect */}
          <div className="overflow-hidden px-4 md:px-0 -mx-4 md:mx-0">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
                gap: visibleCount === 1 ? "16px" : "32px", // 16px mobile, 32px desktop
              }}
            >
              {cards.map((card, index) => {
                // Check if card is in visible range
                const isVisible =
                  index >= activeIndex && index < activeIndex + visibleCount;

                return (
                  <div
                    key={index}
                    className="shrink-0 relative"
                    style={{
                      flex:
                        visibleCount === 1
                          ? "0 0 calc(100% - 16px)" // mobile: full width minus gap
                          : "0 0 calc(33.3333% - 21.33px)", // desktop: 3 per view with gap
                    }}
                  >
                    {/* Card container with consistent height */}
                    <div
                      className={`relative w-full overflow-hidden rounded-[20px] shadow-lg group cursor-pointer transition-all duration-500 ${
                        visibleCount === 1 ? "h-[280px]" : "h-[400px]"
                      }`}
                    >
                      {/* Image container - no scale transform here */}
                      <div className="relative w-full h-full">
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className="object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[20px]" />

                      {/* Text + Button */}
                      <div className="absolute bottom-4 md:bottom-6 left-0 w-full text-left px-4 md:px-6 text-white">
                        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                          {card.title}
                        </h3>
                        <button className="bg-[#28a745] hover:bg-[#218838] text-white px-4 py-2 md:px-5 md:py-2 rounded-md font-semibold flex items-center gap-2 cursor-pointer text-sm md:text-base transition-colors">
                          Learn More <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ✅ Navigation Dots */}
        <div className="flex justify-center items-center gap-3 pt-8">
          {Array.from({
            length: cards.length - visibleCount + 1,
          }).map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#007B55] scale-110"
                  : "bg-gray-300 hover:bg-[#007B55]/50"
              }`}
            />
          ))}
        </div>

        {/* ✅ Navigation Buttons */}
        <div
          className="flex justify-end items-center pt-2"
          style={{
            width: "208px",
            height: "64px",
            gap: "10px",
            opacity: 1,
            marginLeft: "auto",
          }}
        >
          {/* Left Button */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            style={{
              width: "96px",
              height: "64px",
              borderRadius: "32px",
              borderWidth: "2px",
            }}
            className={`border-gray-300 flex items-center justify-center transition cursor-pointer ${
              activeIndex === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-[#007B55] hover:text-white hover:border-[#007B55]"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={activeIndex >= cards.length - visibleCount}
            style={{
              width: "96px",
              height: "64px",
              borderRadius: "32px",
              borderWidth: "2px",
            }}
            className={`border-gray-300 flex items-center justify-center transition cursor-pointer ${
              activeIndex >= cards.length - visibleCount
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-[#007B55] hover:text-white hover:border-[#007B55]"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
