"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function UAEDestinations() {
  const cards = [
    {
      title: "Dubai",
      desc: "The UAE's medical tourism capital featuring luxury hospitals, specialized clinics, and premium recovery facilities with world-class service.",
      img: "/uae-med-1.jpg",
    },
    {
      title: "Abu Dhabi",
      desc: "Home to internationally accredited medical centres, advanced research facilities, and comprehensive healthcare services in a modern city setting.",
      img: "/uae-med-2.jpg",
    },
    {
      title: "Sharjah",
      desc: "Offering quality healthcare with competitive pricing, specialized dental clinics, and family-friendly medical facilities.",
      img: "/uae-med-3.jpg",
    },
    {
      title: "Ajman",
      desc: "Combines medical care with wellness retreats, offering spa-integrated recovery programs in serene coastal settings.",
      img: "/uae-med-4.jpg",
    },
  ];

  const CARD_WIDTH = 330;
  const CARD_GAP = 38;
  const VISIBLE = 3;

  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const maxIndex = cards.length - VISIBLE;

  const prev = () => setIndex(index === 0 ? maxIndex : index - 1);
  const next = () => setIndex(index === maxIndex ? 0 : index + 1);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-12">
        <span className="text-[#1073B9]">Leading Medical Destinations</span>{" "}
        <span className="text-[#25282B]">in the UAE</span>
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${CARD_GAP}px`,
            width: `${cards.length * (CARD_WIDTH + CARD_GAP)}px`,
            transform: `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative overflow-hidden shrink-0 rounded-[28px]"
              style={{
                width: `${CARD_WIDTH}px`,
                height: "400px",
                borderRadius: "28px",
                boxShadow: "0px 10px 40px #00000014",
              }}
            >
              {/* Background Image */}
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover rounded-[28px]"
              />

              {/* Bottom Gradient */}
              <div
                className="absolute bottom-0 left-0 w-full h-[55%] rounded-b-[28px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
                }}
              />

              {/* TEXT */}
              <div className="absolute bottom-0 left-4 w-full p-7 z-20">
                <h3 className="text-white text-[20px] font-semibold mb-2">
                  {card.title}
                </h3>
                <p className={`${body1.className} text-white text-[18px] opacity-90 leading-relaxed mb-4`}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-end gap-6 mt-6">
        <button
          onClick={prev}
          className="flex items-center justify-center border border-[#D8D8D8] bg-white shadow-sm"
          style={{
            width: "96px",
            height: "64px",
            borderRadius: "32px",
            padding: "16px 32px",
          }}
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={next}
          className="flex items-center justify-center border border-[#D8D8D8] bg-white shadow-sm"
          style={{
            width: "96px",
            height: "64px",
            borderRadius: "32px",
            padding: "16px 32px",
          }}
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
