"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Treatments() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#F6FBFA] py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <p className="text-sm md:text-base text-[#007B55] font-semibold tracking-wide">
            Treatments
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147]">
            Popular <span className="text-[#007B55]">Treatments</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine to complex, elective to life-saving. GHO specializes
            in connecting patients with expert care across:
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-[20px] shadow-lg group cursor-pointer">
            <Image
              src="/Cosmetic.png"
              alt="Cosmetic & Elective Procedures"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[20px]" />
            {/* Content */}
            <div className="absolute bottom-6 left-0 w-full text-left px-6 text-white">
              <h3 className="text-lg font-semibold mb-3">
                Cosmetic & Elective Procedures
              </h3>
              <button className="bg-[#28a745] hover:bg-[#218838] text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-[20px] shadow-lg group cursor-pointer">
            <Image
              src="/Oncology.png"
              alt="Oncology (Cancer Care)"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[20px]" />
            <div className="absolute bottom-6 left-0 w-full text-left px-6 text-white">
              <h3 className="text-lg font-semibold mb-3">
                Oncology (Cancer Care)
              </h3>
              <button className="bg-[#28a745] hover:bg-[#218838] text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-[20px] shadow-lg group cursor-pointer">
            <Image
              src="/Ortho.png"
              alt="Orthopaedics"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[20px]" />
            <div className="absolute bottom-6 left-0 w-full text-left px-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Orthopaedics</h3>
              <button className="bg-[#28a745] hover:bg-[#218838] text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 pt-8">
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center text-xl font-bold hover:bg-[#007B55] hover:text-white hover:border-[#007B55] transition">
            <ChevronLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center text-xl font-bold hover:bg-[#007B55] hover:text-white hover:border-[#007B55] transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
