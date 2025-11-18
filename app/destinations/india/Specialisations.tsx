"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const specialisations = [
  {
    title: "Cardiac and Cardiothoracic Surgery",
    desc: "India is a global hub for advanced heart and vascular care. Accredited cardiac centres perform complex bypass and transplant surgeries with exceptional survival rates and affordability.",
    img: "/DS1.png",
  },
  {
    title: "Orthopaedics and Joint Replacement",
    desc: "Renowned for robotic knee and hip replacements, Indian orthopaedic institutes attract patients worldwide seeking precision-driven rehabilitation and long-term mobility restoration.",
    img: "/DS2.png",
  },
  {
    title: "Oncology and Cancer Care",
    desc: "World-leading oncologists use the latest radiation, immunotherapy, and surgical interventions, supported by genomic research and AI-enabled diagnostics.",
    img: "/DS3.png",
  },
  {
    title: "Fertility & IVF",
    desc: "State-of-the-art reproductive centres offer personalised fertility programs with high success rates and international patient support.",
    img: "/DS4.png",
  },
];

export default function Specialisations() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B] mb-10">
        Medical <span className="text-[#1073B9]">Specialities</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specialisations.map((spec, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md"
          >
            <div className="shrink-0 w-16 h-16 relative">
              <Image
                src={spec.img}
                alt={spec.title}
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="font-bold text-lg text-[#25282B] mb-2">
                {spec.title}
              </h3>
              <p className={`${body1.className} text-[18px] text-[#616161] leading-relaxed`}>
                {spec.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
