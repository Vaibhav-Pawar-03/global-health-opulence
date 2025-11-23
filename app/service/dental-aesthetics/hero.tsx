"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Comprehensive Dental Excellence <br />
            with{" "}
            <span className="text-[#0070BB]">
              Global Standards
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            Global Health Opulence offers access to internationally accredited dental centres in Mexico, Thailand, and Malaysia—regions known for advanced yet affordable dental tourism. Using 3D imaging, CAD/CAM crowns, and laser dentistry, these clinics combine technology, precision, and comfort for long-lasting results.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/Dental.png"
              alt="Dental Aesthetics"
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
