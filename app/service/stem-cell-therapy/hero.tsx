"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Regenerative Medicine <br />
            Redefining{" "}
            <span className="text-[#0070BB]">
              Global Healthcare
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            Stem cell therapy is one of the most sought-after medical breakthroughs, offering restorative solutions for chronic and degenerative diseases. Leading hospitals in Germany, Thailand, and Mexico provide advanced stem cell treatments that support tissue regeneration, reduce inflammation, and enhance mobility. Each program is backed by rigorous clinical standards, using autologous or donor-derived cells for safe and effective recovery.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/Stem Cell Therapy.png"
              alt="Stem Cell Therapy"
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
