"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VietnamHospitals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.children[0].clientWidth + 32; // card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const hospitals = [
    {
      title: "FV Hospital – Ho Chi Minh City",
      desc: "International-standard facility for global patients.",
      img: "/vn1.png",
    },
    {
      title: "Vinmec Healthcare System – Nationwide",
      desc: "Modern private hospitals across Vietnam.",
      img: "/vn2.png",
    },
    {
      title: "Cho Ray Hospital – Ho Chi Minh City",
      desc: "Major public referral centre.",
      img: "/vn3.png",
    },

    // ---- Mock Cards ----
    {
      title: "Mock Hospital – Vietnam",
      desc: "Placeholder card for UI preview.",
      img: "/vn1.png",
    },
    {
      title: "Mock Care Institute – Da Nang",
      desc: "Sample mock content for layout.",
      img: "/vn2.png",
    },
    {
      title: "Mock Medical Center – Hanoi",
      desc: "Temporary card for testing alignment.",
      img: "/vn3.png",
    },
  ];

  return (
    <section className="w-full px-6 md:px-14 py-14 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1073B9]">
        Vietnam
      </h2>
      <p className="text-gray-600 mt-2 text-[15px]">
        Rising star in international healthcare, blending modern medicine with affordability.
      </p>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; }
      `}</style>

      {/* Cards Container */}
      <div className="relative mt-10 pb-16">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth hide-scrollbar"
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

        {/* Scroll Buttons */}
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
