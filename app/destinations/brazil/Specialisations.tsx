"use client";

import Image from "next/image";
import React from "react"; // Added React import for best practice
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function Specialisations() {
  const items = [
    {
      title: "Aesthetic and Plastic Surgery",
      desc: "Brazil’s surgeons are global icons in cosmetic and reconstructive excellence. From body contouring to facelifts and post-weight loss surgery, procedures are defined by artistry, precision, and safety.",
      icon: "/BL1.png",
    },
    {
      title: "Dental and Smile Design",
      desc: "Brazil is a top destination for veneers, implants, and smile design with artistic finishing and high precision.",
      icon: "/BL2.png",
    },
    {
      title: "Orthopaedics and Sports Medicine",
      desc: "Trusted globally for advanced joint reconstruction, sports injuries, and minimally invasive spine surgery.",
      icon: "/BL3.png",
    },
    {
      title: "Cardiology and Heart Surgery",
      desc: "High survival rates with world-class bypass, valve surgeries, and advanced cardiac imaging.",
      icon: "/BL4.png",
    },
    {
      title: "Fertility and Reproductive Medicine",
      desc: "Brazil leads in IVF success rates, reproductive endocrinology, and personalised fertility programs.",
      icon: "/BL5.png",
    },
    {
      title: "Wellness and Rehabilitation Medicine",
      desc: "Strong focus on physiotherapy, regenerative therapies, and recovery in serene natural settings.",
      icon: "/BL6.png",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#002147] mb-12">
        <span className="text-[#1073B9]">World-Renowned</span>{" "}
        <span className="text-[#25282B]">Specialisations</span>
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
              {/* Ensure you have BL1.png, BL2.png, etc., in your /public directory */}
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