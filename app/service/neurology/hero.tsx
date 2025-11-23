"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Advanced Neurological Care <br />
            across{" "}
            <span className="text-[#0070BB]">
              Global Centres
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            International neurology hospitals are redefining the treatment of brain and nerve disorders with precision diagnostics and targeted interventions. From neuro-oncology to stroke recovery, these centres combine advanced imaging, minimally invasive techniques, and neurorehabilitation for sustainable outcomes. Patients receive multidisciplinary support from top neurologists and neurosurgeons trained in world-class institutions.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/hero-neurology.jpg"
              alt="Neurology and Neurosurgery"
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
