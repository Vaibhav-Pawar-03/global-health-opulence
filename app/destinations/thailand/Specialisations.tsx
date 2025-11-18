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
      title: "Cosmetic and Plastic Surgery",
      desc: "Thailand's board-certified surgeons are internationally respected for aesthetic precision and natural-looking results, supported by world-class post-operative care.",
      icon: "/BL1.png",
    },
    {
      title: "Dentistry",
      desc: "Cost-effective dental implants, veneers, and full-mouth restorations are performed in accredited clinics with long-term success rates above 85%.",
      icon: "/BL2.png",
    },
    {
      title: "Fertility and IVF",
      desc: "Advanced reproductive medicine with genetic screening, state-of-the-art embryology labs, and customised fertility programs designed for international couples.",
      icon: "/BL3.png",
    },
    {
      title: "Orthopaedics and Spine Surgery",
      desc: "Leading orthopaedic centres in Bangkok and Phuket provide robotic joint replacements, spinal corrections, and rehabilitation facilities focused on safe, rapid recovery.",
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
