"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TurkeyHospitals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const amount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const hospitals = [
    {
      title: "Acıbadem Healthcare Group – Istanbul",
      desc: "Leading private hospital network serving global patients.",
      img: "/Acıbadem.png",
    },
    {
      title: "Anadolu Medical Centre – Kocaeli",
      desc: "In collaboration with Johns Hopkins Medicine.",
      img: "/Anadolu.png",
    },
    {
      title: "Memorial Healthcare Group – Istanbul",
      desc: "Known for transplant and IVF excellence.",
      img: "/Memorial.png",
    },
    {
      title: "Liv Hospital – Ankara",
      desc: "Advanced multidisciplinary care with international standards.",
      img: "/Acıbadem.png",
    },
    {
      title: "Florence Nightingale Hospital – Istanbul",
      desc: "Renowned for cardiac surgery and robotic procedures.",
      img: "/Anadolu.png",
    },
    {
      title: "Medicana International – Izmir",
      desc: "Premium patient care with modern medical technology.",
      img: "/Memorial.png",
    },
  ];

  return (
    <section className="w-full px-6 md:px-14 py-14 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1073B9]">
        Türkiye (Turkey)
      </h2>
      <p className="text-gray-600 mt-2 text-[15px]">
        A global destination for modern, value-driven healthcare in Europe and Asia.
      </p>

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
      <div className="relative mt-10 pb-16">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth hide-scrollbar"
        >
          {hospitals.map((item, index) => (
            <div
              key={index}
              className="min-w-[360px] bg-white rounded-2xl shadow-[0px_4px_30px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100"
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
