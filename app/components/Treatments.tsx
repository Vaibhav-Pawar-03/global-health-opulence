"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Treatments() {
  const cards = [
    {
      title: "Cosmetic & Elective Procedures",
      img: "/Cosmetic.png",
    },
    {
      title: "Oncology (Cancer Care)",
      img: "/Oncology.png",
    },
    {
      title: "Orthopaedics",
      img: "/Ortho.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[#F6FBFA] py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <p className="text-sm md:text-base text-[#007B55] font-regular tracking-wide">
            Treatments
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#002147]">
            Popular Treatments
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed">
            From routine to complex, elective to life-saving. GHO specializes
            in connecting patients with expert care across:
          </p>
        </div>

        {/* ✅ Cards — All visible at once */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[20px] shadow-lg group cursor-pointer transition-transform duration-500 ${
                activeIndex === index ? "scale-105" : "scale-100"
              }`}
            >
              <div
                className={`relative w-full h-[450px] rounded-[20px] transition-transform duration-500 ${
                  activeIndex === index ? "scale-105" : "group-hover:scale-105"
                }`}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-[20px] transition-transform duration-500"
                />
              </div>

              {/* Dark Overlay */}
              <div
                className={`absolute inset-0 rounded-[20px] transition-all duration-500 ${
                  activeIndex === index
                    ? "bg-gradient-to-t from-black/50 to-transparent"
                    : "bg-gradient-to-t from-black/70 to-transparent"
                }`}
              />

              {/* Text and Button */}
              <div className="absolute bottom-6 left-0 w-full text-left px-6 text-white">
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <button className="bg-[#28a745] hover:bg-[#218838] text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Navigation Buttons */}
        <div
          className="flex justify-end items-center pt-8"
          style={{
            width: "208px",
            height: "64px",
            gap: "16px",
            opacity: 1,
            marginLeft: "auto",
          }}
        >
          {/* Left Button */}
          <button
            onClick={handlePrev}
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
            className="border-gray-300 text-gray-600 flex items-center justify-center hover:bg-[#007B55] hover:text-white hover:border-[#007B55] transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
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
            className="border-gray-300 text-gray-600 flex items-center justify-center hover:bg-[#007B55] hover:text-white hover:border-[#007B55] transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
