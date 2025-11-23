"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
            Precision Spine Treatment <br />
            with{" "}
            <span className="text-[#0070BB]">
              Global Expertise
            </span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-lg">
            Leading neurosurgical and orthopedic centres worldwide specialize in advanced spine care, combining diagnostic precision with minimally invasive procedures for faster recovery. From disc replacement to spinal fusion, patients benefit from image-guided technologies and robotic-assisted surgeries that ensure accuracy and long-term relief. Rehabilitation programs further support mobility restoration and pain-free living.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white p-3">
            <Image
              src="/Spine Care and Surgery.png"
              alt="Spine Care and Surgery"
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
