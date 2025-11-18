"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const specialisations = [
  {
    title: "Oncology and Targeted Therapy",
    desc: "Leading cancer institutes provide personalised treatment through genetic profiling, immunotherapy, and high-precision radiation techniques.",
    img: "/DS1.png",
  },
  {
    title: "Cardiac and Vascular Sciences",
    desc: "World-renowned heart centres specialise in minimally invasive surgeries, advanced cardiac imaging, and post-recovery cardiac rehabilitation.",
    img: "/DS2.png",
  },
  {
    title: "Neurology and Neurosurgery",
    desc: "Singapore's neuro-institutes perform complex brain and spine procedures with robotic assistance and advanced neuro-monitoring systems.",
    img: "/DS3.png",
  },
  {
    title: "Transplant Medicine",
    desc: "Liver, kidney, and bone marrow transplants achieve some of the region's highest success rates under multidisciplinary care teams.",
    img: "/DS4.png",
  },
  {
    title: "Fertility and Women's Health",
    desc: "Modern IVF centres combine evidence-based treatment with strong ethical oversight and privacy-focused patient support.",
    img: "/DS5.png",
  },
  {
    title: "Preventive and Executive Health",
    desc: "Singapore's integrated wellness programs offer detailed diagnostics and lifestyle optimisation for early disease prevention.",
    img: "/DS6.png",
  },
];

export default function Specialisations() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B] mb-10">
        Advanced Care <span className="text-[#1073B9]">Portfolio</span>
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
