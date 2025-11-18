"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Hospitals() {
  const hospitals = [
    {
      name: "Apollo Hospitals – Chennai",
      desc: "Flagship multispecialty network with global patient programs.",
      img: "/apollo.png",
      link: "https://www.apollohospitals.com/",
    },
    {
      name: "Fortis Healthcare – Multiple Cities",
      desc: "Leader in tertiary and critical care.",
      img: "/fortis.png",
      link: "https://www.fortishealthcare.com/",
    },
    {
      name: "Medanta The Medicity – Gurugram",
      desc: "World-class quaternary referral hospital.",
      img: "/medanta.png",
      link: "https://www.medanta.org/",
    },

    
    { 
      name: "Mock Hospital – A", 
      desc: "Sample description.", 
      img: "/apollo.png", 
      link: "#" 
    },
    { 
      name: "Mock Hospital – B", 
      desc: "Sample description.", 
      img: "/fortis.png", 
      link: "#" 
    },
  ];

  const CARD_WIDTH = 420;
  const GAP = 40;
  const VISIBLE = 3;

  const maxIndex = hospitals.length - VISIBLE;
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="w-full bg-white py-20 px-4 md:px-20 lg:px-24 font-[Inter]">

      {/* Heading */}
      <p className="text-[#1073B9] text-regular font-medium mb-1">Hospitals</p>
      <h2 className="text-[34px] md:text-[40px] font-bold text-[#25282B] mb-2">
        Explore <span className="text-[#1073B9]">Top International Hospitals</span>
      </h2>

      {/* Sub heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1073B9]">India</h2>
      <p className="text-[#616161] text-[15px] mb-10 leading-relaxed">
        A trusted global hub for advanced and affordable medical care.
      </p>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden pb-20">
        <div
          className="flex transition-transform duration-500"
          style={{
            gap: `${GAP}px`,
            width: `${hospitals.length * (CARD_WIDTH + GAP)}px`,
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`
          }}
        >
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-[0_8px_35px_rgba(0,0,0,0.12)] overflow-hidden border border-[#E7E7E7] shrink-0"
              style={{ width: CARD_WIDTH }}
            >
              <div className="relative w-full h-[230px]">
                <Image src={h.img} alt={h.name} fill className="object-cover" />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-[19px] text-[#002147] leading-snug">
                  {h.name}
                </h3>
                <p className="text-[15px] text-[#5E5E5E] leading-relaxed">
                  {h.desc}
                </p>

                <a
                  href={h.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full border border-[#1073B9] text-[#1073B9] rounded-xl py-2.5 text-[15px] text-center font-medium hover:bg-[#1073B9] hover:text-white transition"
                >
                  Website →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-2 right-0 flex gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            className="h-[52px] w-[72px] rounded-full border border-gray-400 bg-white flex items-center justify-center hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className="h-[52px] w-[72px] rounded-full border border-gray-400 bg-white flex items-center justify-center hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
