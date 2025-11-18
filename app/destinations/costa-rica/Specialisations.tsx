"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const specialisations = [
  {
    title: "Dental and Oral Restoration",
    desc: "Costa Rica is a global leader in dental tourism, offering implants, crowns, and smile reconstruction with North American-trained dentists.",
    img: "/DS1.png",
  },
  {
    title: "Orthopaedics and Joint Care",
    desc: "Advanced knee and hip replacements performed using minimally invasive methods and digital navigation systems.",
    img: "/DS2.png",
  },
  {
    title: "Plastic and Aesthetic Surgery",
    desc: "Reconstructive and cosmetic procedures follow international safety protocols while maintaining affordability.",
    img: "/DS3.png",
  },
  {
    title: "Fertility and Women's Health",
    desc: "Fertility clinics provide compassionate, confidential care with excellent IVF success rates.",
    img: "/DS4.png",
  },
  {
    title: "Regenerative and Stem Cell Therapy",
    desc: "Innovative treatments for chronic pain, arthritis, and tissue repair using cutting-edge biological research.",
    img: "/DS5.png",
  },
  {
    title: "Wellness and Holistic Programs",
    desc: "Recovery retreats combine medical supervision with yoga, nutrition, and tropical serenity.",
    img: "/DS6.png",
  },
];

export default function Specialisations() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B] mb-10">
        Centres of <span className="text-[#1073B9]">Excellence</span>
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
