"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HospitalImagePlaceholder from "./HospitalImagePlaceholder";

interface Hospital {
  title: string;
  desc: string;
  img: string;
  url?: string;
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
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      // Scroll amount matches card width + gap
      const amount = window.innerWidth < 640 ? 292 : window.innerWidth < 768 ? 336 : 432; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-4 md:px-16 lg:px-24 py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1073B9] mb-2 md:mb-3">
            {countryName}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
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
            className="flex gap-3 sm:gap-4 md:gap-8 overflow-x-auto scroll-smooth hide-scrollbar pb-6"
          >
            {hospitals.map((item, index) => (
              <div
                key={index}
                className="group w-[280px] sm:w-[320px] md:w-[400px] h-[420px] sm:h-[460px] md:h-[500px] bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex-shrink-0 flex flex-col"
              >
                <div className="w-full h-[180px] sm:h-[200px] md:h-[260px] relative overflow-hidden rounded-t-2xl">
                  {imageErrors[index] ? (
                    <HospitalImagePlaceholder
                      hospitalName={item.title}
                      className="w-full h-full"
                    />
                  ) : (
                    <>
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(index)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </div>

                <div className="p-4 sm:p-5 md:p-7 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl text-[#25282B] leading-tight mb-2 sm:mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2 sm:mb-2 md:mb-1 line-clamp-3 flex-1">
                    {item.desc}
                  </p>

                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#1073B9] to-[#0d5a94] text-white text-sm sm:text-base font-semibold flex items-center justify-center gap-2 hover:from-[#0d5a94] hover:to-[#094573] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ) : (
                    <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#1073B9] to-[#0d5a94] text-white text-sm sm:text-base font-semibold flex items-center justify-center gap-2 hover:from-[#0d5a94] hover:to-[#094573] transition-all duration-300 shadow-md hover:shadow-lg">
                      Learn More
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  )}
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
