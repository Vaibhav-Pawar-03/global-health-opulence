'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Thomas Daniel',
      image: '/Thomas.png',
      review:
        'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holistically cultivate tactical e-services before fully researched sources.',
    },
    {
      id: 2,
      name: 'Alena Alex',
      image: '/Alena.png',
      review:
        'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holistically cultivate tactical e-services before fully researched sources.',
    },
    {
      id: 3,
      name: 'Thomas Edison',
      image: '/Thomas2.png',
      review:
        'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holistically cultivate tactical e-services before fully researched sources.',
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#F6FBFF] py-20 px-6 md:px-24 relative">
      {/* Header */}
      <div className="text-left mb-12">
        <h4 className="text-green-700 font-medium text-lg mb-2">Testimonials</h4>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          What Our <span className="text-[#1073B9]">Clients Say</span>
        </h2>
        <p className="text-gray-600 font-regular mt-3 max-w-3xl">
          Your medical tour is a precious recovery journey, and we value it very much. We promise you the best experience
          with us! We let our clients define our expertise:
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 overflow-hidden transition-all">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`bg-white rounded-2xl shadow-md p-6 w-full md:w-1/3 transition-all duration-500 ease-in-out transform ${
              i === index ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                <div className="flex gap-1 text-yellow-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBF24" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{t.review}</p>
          </div>
        ))}
      </div>

      {/* ✅ Navigation Buttons (Right Aligned + Figma Properties) */}
      <div className="absolute right-6 md:right-40 top-[85%] flex gap-4 justify-end items-center mt-4">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center border-2 border-gray-400 text-gray-700 hover:bg-gray-100 transition"
          style={{
            width: '96px',
            height: '64px',
            borderRadius: '32px',
            opacity: 1,
            paddingTop: '16px',
            paddingRight: '32px',
            paddingBottom: '16px',
            paddingLeft: '32px',
            gap: '4px',
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="flex items-center justify-center border-2 border-gray-400 text-gray-700 hover:bg-gray-100 transition"
          style={{
            width: '96px',
            height: '64px',
            borderRadius: '32px',
            opacity: 1,
            paddingTop: '16px',
            paddingRight: '32px',
            paddingBottom: '16px',
            paddingLeft: '32px',
            gap: '4px',
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
