"use client";

import Image from "next/image";
import { Star, StarHalf, Quote, Check, QuoteIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-[#F8FBFF] to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002147] leading-tight">
            Global Care, <br />
            <span className="text-[#1073B9]">Opulent Experience</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            Premium medical care abroad, curated with precision. We assist you
            with expert procedures for opulence rejuvenation!
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center md:items-start gap-4 pt-4">
            <button className="w-full sm:w-[380px] bg-[#1073B9] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#0066d6] transition">
              Plan My Treatment Journey →
            </button>

            <button className="w-full sm:w-[380px] border-2 border-[#007B55] text-[#007B55] text-lg font-semibold px-8 py-4 rounded-lg hover:bg-[#007B55] hover:text-white transition">
              Chat with My Care Concierge →
            </button>
          </div>
        </div>

        {/* ---------- RIGHT IMAGE + FLOATING ELEMENTS ---------- */}
        <div className="flex-1 relative">
          {/* Background Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/bg.png"
              alt="Global Health Opulence"
              width={600}
              height={400}
              className="rounded-3xl object-cover"
              priority
            />
          </div>

          {/* Floating Card: Happy Customers */}
          <div className="absolute top-10 -right-5 bg-white shadow-xl rounded-xl px-2 py-2 border w-[260px]">
            {/* Top Row: Images + Number */}
            <div className="flex items-center justify-center gap-3 mb-2">
              {/* Customer Images */}
              <div className="flex -space-x-2">
                <Image
                  src="/p1.png"
                  alt="Customer 1"
                  width={34}
                  height={34}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/p2.png"
                  alt="Customer 2"
                  width={34}
                  height={34}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/p3.png"
                  alt="Customer 3"
                  width={34}
                  height={34}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/p4.png"
                  alt="Customer 4"
                  width={34}
                  height={34}
                  className="rounded-full border-2 border-white"
                />
              </div>

              {/* Number */}
              <p className="text-lg font-bold text-[#002147] ml-1">2400+</p>
            </div>

            {/* Label */}
            <p className="text-sm font-semibold text-[#006341] text-center">
              Happy Customers
            </p>

            {/* Rating */}
            <div className="flex justify-center items-center text-yellow-400 text-sm mt-1">
              <Star size={14} fill="#FFD700" strokeWidth={0} />
              <Star size={14} fill="#FFD700" strokeWidth={0} />
              <Star size={14} fill="#FFD700" strokeWidth={0} />
              <Star size={14} fill="#FFD700" strokeWidth={0} />
              <StarHalf size={14} fill="#FFD700" strokeWidth={0} />
              <span className="text-gray-500 ml-1 text-xs">(4.7 Stars)</span>
            </div>
          </div>

          {/* Floating Card: Easy Appointment Booking */}
          <div className="absolute bottom-24 -left-5 bg-white shadow-lg rounded-xl px-4 py-2 border flex items-center gap-2">
            <Star className="text-[#006341]" size={18} />
            <p className="text-sm font-semibold text-[#006341]">
              Easy Appointment Booking
            </p>
          </div>

          {/* Floating Quote Card */}
          <div className="absolute bottom-0 right-[30px] translate-y-[50%] bg-white shadow-md rounded-xl px-5 py-4 border w-[320px] flex flex-col gap-2 items-start">
            {/* Custom Quote Image */}
            <Image
              src="/quote.png"   // <-- upload your custom quote image here
              alt="Quote"
              width={28}
              height={28}
              className="object-contain"
            />
            <p className="text-gray-700 text-sm font-medium leading-snug">
              Because Your Transformation Deserves a World-Class Experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
