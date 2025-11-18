"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const specialisations = [
  {
    title: "Oncology & Cancer Treatment",
    desc: "Advanced immunotherapies and targeted treatments guided by genomic analysis.",
    img: "/DS1.png",
  },
  {
    title: "Cardiology & Cardiac Surgery",
    desc: "Robotic-assisted valve repair and minimally invasive bypass procedures.",
    img: "/DS2.png",
  },
  {
    title: "Neurology & Neurosurgery",
    desc: "Specialised brain and spine centres using intraoperative MRI and neuronavigation.",
    img: "/DS3.png",
  },
  {
    title: "Orthopaedics",
    desc: "Regenerative therapies, joint replacements, and spinal corrections.",
    img: "/DS4.png",
  },
  {
    title: "Rehabilitation Medicine",
    desc: "Comprehensive post-surgical recovery in spa-integrated rehabilitation resorts.",
    img: "/DS5.png",
  },
];

export default function Specialisations() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B] mb-10">
        Core Medical <span className="text-[#1073B9]">Strengths</span>
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
