"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const specialisations = [
  {
    title: "Cosmetic & Plastic Surgery",
    desc: "Advanced aesthetic procedures with an emphasis on safety and artistry.",
    img: "/DS1.png",
  },
  {
    title: "Orthopaedic Surgery",
    desc: "Robotic joint replacements and sports injury care trusted by global athletes.",
    img: "/DS2.png",
  },
  {
    title: "Cardiac Care",
    desc: "Minimally invasive heart surgeries supported by cutting-edge diagnostic imaging.",
    img: "/DS3.png",
  },
  {
    title: "Fertility & IVF",
    desc: "Success rates matching global leaders with discreet patient handling.",
    img: "/DS4.png",
  },
  {
    title: "Dental Excellence",
    desc: "Same-day implants and smile makeovers in ultra-modern clinics.",
    img: "/DS5.png",
  },
];

export default function Specialisations() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B] mb-10">
        Areas of <span className="text-[#1073B9]">Expertise</span>
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
