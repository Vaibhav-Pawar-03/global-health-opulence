"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            World-Class Vision Correction <br />
            and{" "}
            <span className="text-[#0070BB]">
              Ophthalmic Care
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            Ophthalmology centres worldwide are known for precision eye surgery, cutting-edge laser correction, and advanced cataract treatment. Expert surgeons employ next-generation equipment to ensure clarity, comfort, and long-term vision health.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/hero-eye-lasik.jpg"
              alt="Eye and LASIK Care"
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
