"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const specialisations = [
  {
    title: "Cardiology and Heart Care",
    desc: "Malaysia's cardiac institutes are internationally recognised for minimally invasive surgeries, advanced diagnostics, and rehabilitation programs focused on long-term recovery.",
    img: "/DS1.png",
  },
  {
    title: "Fertility and IVF",
    desc: "Comprehensive reproductive care combining modern fertility science with personalised counselling and high-success-rate treatment protocols.",
    img: "/DS2.png",
  },
  {
    title: "Orthopaedics and Sports Medicine",
    desc: "Hospitals in Kuala Lumpur and Penang provide leading orthopaedic and spine care with robotic precision, ensuring faster recovery and improved mobility.",
    img: "/DS3.png",
  },
  {
    title: "Health Screening and Preventive Medicine",
    desc: "Specialised wellness centres offer full-body assessments, genetic testing, and preventive programs that promote lasting wellbeing.",
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
