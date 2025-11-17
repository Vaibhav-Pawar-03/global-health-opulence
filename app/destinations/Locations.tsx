"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Locations() {
  const countries = [
    { name: "Turkey", img: "/page2.1.png", slug: "turkey" },
    { name: "UAE", img: "/page2.2.png", slug: "uae" },
    { name: "India", img: "/page2.3.png", slug: "india" },
    { name: "Singapore", img: "/page2.4.png", slug: "singapore" },
    { name: "South Korea", img: "/page2.5.png", slug: "south-korea" },
    { name: "Thailand", img: "/page2.1.png", slug: "thailand" },
    { name: "Malaysia", img: "/page2.2.png", slug: "malaysia" },
    { name: "Mexico", img: "/page2.3.png", slug: "mexico" },
    { name: "Brazil", img: "/page2.4.png", slug: "Brazil" },
    { name: "Spain", img: "/page2.5.png", slug: "spain" },
  ];

  const viewportRef = useRef<HTMLDivElement | null>(null);

  // RESPONSIVE CARD WIDTH
  const [cardWidth, setCardWidth] = useState(360);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateSize = () => {
      const screen = window.innerWidth;

      if (screen < 500) {
        setCardWidth(screen - 60); // mobile full width
        setVisibleCards(1);
      } else if (screen < 900) {
        setCardWidth(300);
        setVisibleCards(2);
      } else {
        setCardWidth(360);
        setVisibleCards(3);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const CARD_HEIGHT = 450;
  const GAP = 44;

  const [index, setIndex] = useState(0);
  const maxIndex = countries.length - visibleCards;

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="w-full py-20 px-6 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1073B9] mb-8">
        Leading Medical <span className="text-[#25282B]">Destinations</span>
      </h2>

      <div ref={viewportRef} className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${index * (cardWidth + GAP)}px)`,
          }}
        >
          {countries.map((c) => (
            <Link
              key={c.slug}
              href={`/destinations/${c.slug}`}
              className="shrink-0 block active:scale-95 transition-transform"
              style={{ width: cardWidth }}
            >
              <div
                className="rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_28px_50px_rgba(0,0,0,0.55)] transition"
                style={{ height: CARD_HEIGHT }}
              >
                <div className="relative w-full h-full">
                  <Image src={c.img} alt={c.name} fill className="object-cover" />
                  <p className="absolute bottom-4 left-8 text-white text-lg font-semibold px-4 py-2 bg-black/70 rounded-lg">
                    {c.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-10">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="flex items-center justify-center border-2 border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-40"
          style={{ width: 64, height: 64 }}
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={handleNext}
          disabled={index === maxIndex}
          className="flex items-center justify-center border-2 border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-40"
          style={{ width: 64, height: 64 }}
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
