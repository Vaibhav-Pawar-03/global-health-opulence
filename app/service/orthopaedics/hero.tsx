"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Comprehensive Orthopedic <br />
            <span className="text-[#0070BB]">
              Excellence Worldwide
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            International orthopedic hospitals deliver advanced joint and bone care, combining innovation with patient-centric recovery. Expert surgeons perform minimally invasive and robotic-assisted procedures that restore full mobility and relieve chronic pain. With advanced implant technologies and rehabilitation programs, patients regain function and quality of life faster.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/hero-orthopaedics.jpg"
              alt="Orthopaedics and Joint Replacement"
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
