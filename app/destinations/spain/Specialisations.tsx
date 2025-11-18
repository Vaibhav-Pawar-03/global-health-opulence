"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const specialisations = [
  {
    title: "Cardiology and Cardiac Surgery",
    desc: "Spain's heart institutes lead Europe in minimally invasive procedures, advanced imaging, and rehabilitation science.",
    img: "/DS1.png",
  },
  {
    title: "Orthopaedics and Sports Medicine",
    desc: "World-class centres in Madrid and Barcelona attract international athletes for joint reconstruction and physiotherapy.",
    img: "/DS2.png",
  },
  {
    title: "Cosmetic and Reconstructive Surgery",
    desc: "Spanish surgeons are celebrated for aesthetic refinement, combining surgical precision with natural-looking outcomes.",
    img: "/DS3.png",
  },
  {
    title: "Fertility and Reproductive Health",
    desc: "Spain ranks among Europe's top destinations for IVF and egg donation, supported by progressive medical legislation.",
    img: "/DS4.png",
  },
  {
    title: "Oncology and Immunotherapy",
    desc: "Renowned cancer centres provide targeted and immune-based therapies with personalised treatment plans.",
    img: "/DS5.png",
  },
  {
    title: "Neurology and Stroke Rehabilitation",
    desc: "Spain's hospitals are global leaders in neuro-rehabilitation, helping patients regain mobility and cognition.",
    img: "/DS6.png",
  },
];

export default function Specialisations() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B] mb-10">
        Signature Medical <span className="text-[#1073B9]">Excellence</span>
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
