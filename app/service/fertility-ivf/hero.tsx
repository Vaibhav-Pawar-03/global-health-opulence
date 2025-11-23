"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Global Fertility Expertise <br />
            with{" "}
            <span className="text-[#0070BB]">
              Personalized Care
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            World-class fertility centres combine cutting-edge reproductive science with individualized support to maximize conception success. Advanced labs, ethical practices, and experienced embryologists deliver effective outcomes for couples and individuals worldwide.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/hero-fertility.jpg"
              alt="Fertility and IVF Programs"
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
