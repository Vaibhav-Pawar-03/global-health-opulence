"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const specialisations = [
  {
    title: "Aesthetic and Reconstructive Surgery",
    desc: "South Korea is globally recognised for cosmetic innovation, offering advanced facial contouring, rhinoplasty, and reconstructive artistry with exacting standards of safety.",
    img: "/DS1.png",
  },
  {
    title: "Hair Restoration Science",
    desc: "Techniques such as FUE and DHI deliver natural growth and high graft survival, supported by post-care programs tailored for international patients.",
    img: "/DS2.png",
  },
  {
    title: "Oncology and Immunotherapy",
    desc: "Precision cancer care through molecular diagnostics, targeted therapy, and advanced radiation systems ensures world-class outcomes.",
    img: "/DS3.png",
  },
  {
    title: "Reproductive and Fertility Medicine",
    desc: "IVF and women's health centres in Seoul combine advanced technology with compassionate patient care and strong success rates.",
    img: "/DS4.png",
  },
  {
    title: "Spinal and Orthopaedic Innovations",
    desc: "Minimally invasive spine and joint procedures, enhanced by robotics and rapid rehabilitation, restore movement and quality of life.",
    img: "/DS5.png",
  },
  {
    title: "Regenerative Medicine and Stem Cell Therapy",
    desc: "Cutting-edge biological research powers treatments for skin repair, anti-ageing, and chronic degenerative conditions.",
    img: "/DS6.png",
  },
];

export default function Specialisations() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B] mb-10">
        Signature Medical <span className="text-[#1073B9]">Expertise</span>
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
