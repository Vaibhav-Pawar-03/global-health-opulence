"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Revolutionary Immunotherapy <br />
            Transforming{" "}
            <span className="text-[#0070BB]">
              Cancer Care
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            CAR-T cell therapy represents a groundbreaking advancement in personalized cancer treatment. Leading oncology centres in the United States, Germany, and Singapore use engineered immune cells to target and destroy cancer cells, offering remarkable remission rates in specific blood cancers.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/CAR-T Cell.png"
              alt="CAR-T Cell Therapy"
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
