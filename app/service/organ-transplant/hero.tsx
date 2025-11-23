"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Life-Saving Global <br />
            <span className="text-[#0070BB]">
              Transplant Expertise
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            Renowned transplant programs around the world deliver advanced organ replacement procedures under rigorous medical and ethical standards. Each transplant unit combines surgical innovation, strict donor-recipient matching, and comprehensive aftercare for exceptional survival outcomes.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/hero-organ-transplant.jpg"
              alt="Organ Transplant"
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
