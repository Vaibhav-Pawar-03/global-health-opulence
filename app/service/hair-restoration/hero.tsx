"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Advanced Hair Restoration <br />
            with{" "}
            <span className="text-[#0070BB]">
              Natural Results
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            Hair transplantation abroad is one of the most in-demand procedures in global healthcare travel, especially in Türkiye, India, and South Korea. GHO connects patients to internationally accredited hair restoration clinics that specialise in advanced FUE, DHI, and Sapphire techniques, achieving over 90% graft survival with natural, permanent results.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/hero-hair-restoration.jpg"
              alt="Hair Restoration"
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
