"use client";

import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function Specialisations() {
  const items = [
    {
      title: "Cardiac and Vascular Care",
      desc: "Vietnam's hospitals are now equipped with advanced cardiac cath labs and minimally invasive surgical technology, achieving global benchmarks in heart care.",
      icon: "/BL1.png",
    },
    {
      title: "Dental and Maxillofacial Treatments",
      desc: "Vietnam is a regional hub for dental tourism, offering implantology, cosmetic restorations, and full-mouth rehabilitation at a fraction of Western costs.",
      icon: "/BL2.png",
    },
    {
      title: "Cosmetic and Reconstructive Surgery",
      desc: "From aesthetic enhancements to post-trauma reconstructions, Vietnam's surgeons deliver outcomes with exceptional precision and artistry.",
      icon: "/BL3.png",
    },
    {
      title: "Orthopaedics and Rehabilitation",
      desc: "Specialised orthopaedic centres focus on joint replacements, sports medicine, and robotic-assisted spine surgeries supported by professional rehabilitation teams.",
      icon: "/BL4.png",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#002147] mb-12">
        <span className="text-[#25282B]">Medical Specialities</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              bg-white border border-[#E7E7E7] shadow-xl rounded-[28px] flex items-center gap-8 p-6 w-full
              md:max-w-[570px]
              min-h-[260px]
              transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01]
            "
          >
            {/* ICON */}
            <div className="shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={90}
                height={90}
                className="object-contain w-[70px] h-[70px] md:w-[90px] md:h-[90px]"
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#002147] leading-tight">
                {item.title}
              </h3>

              <p className={`${body1.className} text-[18px] text-gray-600 leading-relaxed`}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
