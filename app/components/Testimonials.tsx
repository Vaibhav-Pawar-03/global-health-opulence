"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsCarousel() {
  const testimonials = [
    { id: 1, name: "Thomas Daniel", image: "/Thomas.png", review: "The team made my treatment journey smooth and stress-free." },
    { id: 2, name: "Alena Alex", image: "/Alena.png", review: "Excellent guidance and support throughout my medical trip." },
    { id: 3, name: "Thomas Edison", image: "/Thomas2.png", review: "Seamless experience with great coordination. Thank you!" },
    { id: 4, name: "Sophia Williams", image: "/Sophia.png", review: "Everything was handled perfectly, from consultation to travel." },
    { id: 5, name: "James Carter", image: "/James.png", review: "The staff was so supportive and kind. I felt confident throughout." },
    { id: 6, name: "Isabella Johnson", image: "/Isabella.png", review: "Professional service with genuine care. My recovery was smooth." },
    { id: 7, name: "Michael Brown", image: "/Michael.png", review: "Great communication and flawless execution. Thank you!" },
    { id: 8, name: "Emily Davis", image: "/Emily.png", review: "Loved the hospitality and coordination. Highly recommended!" },
  ];

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const gapPx = 24; // corresponds to gap-6 (1.5rem = 24px). Adjust if you change gap.
  const [visibleCount, setVisibleCount] = useState<number>(2);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [cardWidthPx, setCardWidthPx] = useState<number>(0);

  // calculate visible count and card width on mount + resize
  useEffect(() => {
    const updateSizes = () => {
      const vw = viewportRef.current?.clientWidth ?? window.innerWidth;
      if (window.innerWidth < 768) {
        setVisibleCount(1);
        // card width for mobile = full viewport width
        const cw = Math.max(0, vw);
        setCardWidthPx(cw);
      } else {
        setVisibleCount(2);
        // card width for desktop = (viewportWidth - gapBetweenCards) / 2
        const cw = Math.max(0, Math.floor((vw - gapPx) / 2));
        setCardWidthPx(cw);
      }
      // clamp activeIndex if needed
      setActiveIndex((prev) => Math.min(prev, Math.max(0, testimonials.length - (window.innerWidth < 768 ? 1 : 2))));
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [testimonials.length]);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const handlePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));

  // computed track width in px (cards + gaps)
  const trackWidthPx = testimonials.length * cardWidthPx + Math.max(0, testimonials.length - 1) * gapPx;
  const translateX = -(activeIndex * (cardWidthPx + gapPx)); // px

  return (
    <section className="relative bg-gradient-to-b from-white to-[#F6FBFF] py-20 px-6 md:px-24 overflow-hidden">
      {/* Header */}
      <div className="text-left mb-8">
        <h4 className="text-green-700 font-medium text-lg mb-2">Testimonials</h4>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          What Our <span className="text-[#1073B9]">Clients Say</span>
        </h2>
        <p className="text-gray-600 font-regular mt-3 max-w-3xl">
          Your medical tour is a precious recovery journey — here’s what clients shared:
        </p>
      </div>

      {/* Carousel viewport */}
      <div ref={viewportRef} className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${trackWidthPx}px`,
            gap: `${gapPx}px`,
            transform: `translateX(${translateX}px)`,
            // ensure no wrapping
            whiteSpace: "nowrap",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 bg-white rounded-2xl shadow-md p-6 border border-gray-100"
              style={{
                width: `${cardWidthPx}px`,
                boxSizing: "border-box",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{t.name}</h4>
                  <div className="flex gap-1 text-yellow-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FBBF24" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div
        className="flex justify-end items-center mt-6"
        style={{
          width: "208px",
          height: "64px",
          gap: "16px",
          marginLeft: "auto",
        }}
      >
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`flex items-center justify-center transition border-2 ${
            activeIndex === 0
              ? "text-gray-300 cursor-not-allowed border-gray-200"
              : "text-gray-600 hover:bg-[#007B55] hover:text-white hover:border-[#007B55]"
          }`}
          style={{
            width: "96px",
            height: "64px",
            borderRadius: "32px",
            padding: "16px 32px",
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex >= maxIndex}
          className={`flex items-center justify-center transition border-2 ${
            activeIndex >= maxIndex
              ? "text-gray-300 cursor-not-allowed border-gray-200"
              : "text-gray-600 hover:bg-[#007B55] hover:text-white hover:border-[#007B55]"
          }`}
          style={{
            width: "96px",
            height: "64px",
            borderRadius: "32px",
            padding: "16px 32px",
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
