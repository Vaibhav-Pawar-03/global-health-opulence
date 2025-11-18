"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MexicoHospitals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.children[0].clientWidth + 32; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const hospitals = [
    {
      title: "Hospitales Ángeles – Nationwide",
      desc: "Mexico’s largest private hospital network.",
      img: "/mex1.png",
    },
    {
      title: "Médica Sur – Mexico City",
      desc: "Leading tertiary hospital with advanced diagnostics.",
      img: "/mex2.png",
    },
    {
      title: "Centro Médico ABC – Mexico City",
      desc: "Renowned teaching and specialty hospital.",
      img: "/mex3.png",
    },

    // ---- Mock cards ---- //
    {
      title: "Mock Hospital – Mexico",
      desc: "Placeholder description for visual consistency.",
      img: "/mex1.png",
    },
    {
      title: "Mock Health Institute – Guadalajara",
      desc: "Sample placeholder text for mock listing.",
      img: "/mex2.png",
    },
    {
      title: "Mock Medical Centre – Monterrey",
      desc: "Prototype mock card for UI testing.",
      img: "/mex3.png",
    },
  ];

  return (
    <section className="w-full px-6 md:px-14 py-14 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1073B9]">
        Mexico
      </h2>
      <p className="text-gray-600 mt-2 text-[15px]">
        A preferred destination for advanced care at global standards and local value.
      </p>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; }
      `}</style>

      {/* Cards Scroll Container */}
      <div className="relative mt-10 pb-16">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ width: "100%" }}
        >
          {hospitals.map((item, index) => (
            <div
              key={index}
              className="shrink-0 w-[33.333%] bg-white rounded-2xl shadow-[0px_4px_30px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100"
            >
              <div className="w-full h-[220px] relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] mt-3 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <button className="px-6 py-2.5 rounded-xl border border-[#006400] text-[#006400] text-[15px] font-semibold flex items-center gap-2 hover:bg-[#006400] hover:text-white transition">
                  Website
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Buttons */}
        <div className="flex items-center gap-4 absolute right-0 -bottom-10 md:-bottom-12">
          <button
            onClick={() => scroll("left")}
            className="w-20 h-14 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-20 h-14 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
