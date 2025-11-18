"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Hospital {
  title: string;
  desc: string;
  img: string;
}

interface HospitalCarouselProps {
  countryName: string;
  description: string;
  hospitals: Hospital[];
}

export default function HospitalCarousel({
  countryName,
  description,
  hospitals,
}: HospitalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1073B9] mb-3">
            {countryName}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {description}
          </p>
        </div>

        <style>{`
          /* Hide scrollbar for Chrome, Safari, Edge */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for Firefox */
          .hide-scrollbar {
            scrollbar-width: none;
          }
        `}</style>

        {/* Cards Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth hide-scrollbar pb-6"
          >
            {hospitals.map((item, index) => (
              <div
                key={index}
                className="group min-w-[320px] md:min-w-[380px] bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
              >
                <div className="w-full h-[240px] md:h-[260px] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="font-bold text-xl text-[#25282B] leading-tight mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                    {item.desc}
                  </p>

                  <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#1073B9] to-[#0d5a94] text-white text-base font-semibold flex items-center justify-center gap-2 hover:from-[#0d5a94] hover:to-[#094573] transition-all duration-300 shadow-md hover:shadow-lg">
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="flex items-center justify-end gap-3 mt-8">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#1073B9] text-[#1073B9] flex items-center justify-center hover:bg-[#1073B9] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1073B9] text-white flex items-center justify-center hover:bg-[#0d5a94] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
