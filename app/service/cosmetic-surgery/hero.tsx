"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Precision Aesthetics <br />
            with{" "}
            <span className="text-[#0070BB]">
              Global Expertise
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            Cosmetic and plastic surgery at Global Health Opulence unites advanced medical artistry with clinical precision. From facial refinement to body contouring, our partner hospitals deliver exceptional results under the care of internationally accredited surgeons. Patients choose GHO to experience aesthetic transformation supported by premium healthcare environments, personalised recovery, and discreet service across the world's leading medical destinations.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/hero-cosmetic-surgery.jpg"
              alt="Cosmetic and Reconstructive Surgery"
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
