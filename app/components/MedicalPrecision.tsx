"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const interRegular = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const interSemiBold = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

const body1 = Inter({
  weight: ["400"],
});

export default function MedicalPrecision() {
  const countries = [
    { name: "Turkey", img: "/turkey-new.jpg", slug: "turkey" },
    { name: "Mexico", img: "/mexico.jpg", slug: "mexico" },
    { name: "Thailand", img: "/thailand-new.jpg", slug: "thailand" },
    { name: "Vietnam", img: "/vietnam.jpg", slug: "vietnam" },
    { name: "Costa Rica", img: "/costa-rica.jpg", slug: "costa-rica" },
    { name: "UAE", img: "/uae.jpg", slug: "uae" },
    { name: "India", img: "/india.jpg", slug: "india" },
    { name: "Brazil", img: "/brazil.jpg", slug: "brazil" },
    { name: "Germany", img: "/germany.jpg", slug: "germany" },
    { name: "Malaysia", img: "/malaysia.jpg", slug: "malaysia" },
    { name: "Singapore", img: "/singapore.jpg", slug: "singapore" },
    { name: "South Korea", img: "/south-korea.jpg", slug: "south-korea" },
    { name: "Spain", img: "/spain.jpg", slug: "spain" },
  ];

  const viewportRef = useRef<HTMLDivElement | null>(null);

  // RESPONSIVE CARD WIDTH
  const [cardWidth, setCardWidth] = useState(360);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateSize = () => {
      const screen = window.innerWidth;

      if (screen < 500) {
        setCardWidth(screen - 60);
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const maxIndex = countries.length - visibleCards;

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

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

    if (isLeftSwipe && index < maxIndex) {
      handleNext();
    } else if (isRightSwipe && index > 0) {
      handlePrev();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="relative bg-[#E9F5F2] py-16 md:py-24 px-6 rounded-4xl mx-4 md:mx-12 my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        {/* Section Heading */}
        <div className="space-y-3">
          <h2
            className={`${interRegular.className} text-3xl md:text-4xl font-normal text-[#002147]`}
          >
            Where Medical Precision{" "}
            <span
              className={`${interSemiBold.className} text-[#1073B9] text-[40px] leading-[125%] capitalize`}
            >
              Meets Paradise
            </span>
          </h2>

          <p className={`${body1.className} text-gray-600 max-w-4xl mx-auto leading-relaxed text-[18px]`}>
            Each facility meets rigorous international standards for surgical
            excellence, patient safety, and post-operative care. These aren't
            budget clinics. They're premium institutions serving global
            patients who expect exceptional outcomes.
          </p>
        </div>

        {/* Country Carousel */}
        <div ref={viewportRef} className="relative w-full overflow-hidden py-4">
          <div
            className="flex transition-transform duration-700 px-1"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${index * (cardWidth + GAP)}px)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={`/destinations/${c.slug}`}
                className="shrink-0 block hover:scale-105 transition-all duration-300"
                style={{ width: cardWidth }}
              >
                <div
                  className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 pt-6">
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
      </div>
    </section>
  );
}
