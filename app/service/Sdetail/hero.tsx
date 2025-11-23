"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Advanced Global Therapies <br />
            for{" "}
            <span className="text-[#0070BB]">
              Timeless Vitality
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            Leading wellness clinics across Europe and Asia offer evidence-based
            anti-aging programs that combine regenerative medicine, hormone
            optimization, and aesthetic rejuvenation. These treatments are
            designed to restore cellular health, enhance longevity, and preserve
            youthful energy through a science-driven approach. Personalized
            protocols often include bioidentical hormone therapy, peptide
            treatments, and regenerative infusions that target the root causes
            of biological aging.
          </p>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rounded-2xl  overflow-hidden bg-linear-to-br from-white  p-3">
            <Image
              src="/sd.png" 
              alt="Service Image"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
