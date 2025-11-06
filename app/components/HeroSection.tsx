"use client";

import Image from "next/image";
import { Star, StarHalf, Quote, MessageSquare, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#F8FBFF] to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002147] leading-tight">
            Global Care, <br />
            <span className="text-[#007BFF]">Opulent Experience</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            Premium medical care abroad, curated with precision. We assist you
            with expert procedures for opulence rejuvenation!
          </p>

          {/* Buttons */}
         {/* Buttons */}
<div className="flex flex-col items-center md:items-start gap-4 pt-4">
  <button className="w-full sm:w-[380px] bg-[#007BFF] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#0066d6] transition">
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
          <div className="absolute top-16 right-[-30px]">
            
           <div>
              <Image
                src="/Happy.png"  
                alt="Star Rating"
                width={300}               
                height={36}
                className="object-contain"
              />


            </div>
          </div>

          {/* Floating Card: Easy Appointment Booking */}
          <div className="absolute bottom-24 left-[-20px] bg-white shadow-lg rounded-xl px-4 py-2 border flex items-center gap-2">
            <Star className="text-green-600" size={18} />
            <p className="text-sm font-semibold text-green-600">Easy Appointment Booking</p>
          </div>

          {/* Floating Quote Card */}
          <div className="absolute bottom-6 right-0 bg-white shadow-md rounded-xl px-4 py-3 border w-[300px]">
            <div className="flex gap-2 items-center text-green-600">
              <Quote size={20} />
            </div>
            <p className="text-gray-700 text-sm font-medium mt-1">
              Because Your Transformation Deserves a World-Class Experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
