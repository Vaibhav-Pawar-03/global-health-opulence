"use client";

import Image from "next/image";

export default function Treatment() {
  const items = [
    {
      title: "Laser Skin Resurfacing and Rejuvenation",
      img: "/Laser Skin Resurfacing and Rejuvenation .png",
    },
    {
      title: "Botox, Fillers, and Thread Lift Treatments",
      img: "/Botox, Fillers, and Thread Lift Treatments .png",
    },
    {
      title: "Acne Scar Revision and Pigmentation Correction",
      img: "/Acne Scar Revision and Pigmentation Correction .png",
    },
    {
      title: "PRP and Mesotherapy for Skin Renewal",
      img: "/PRP and Mesotherapy for Skin Renewal .png",
    },
    {
      title: "Chemical Peels and Anti-Aging Therapies",
      img: "/Chemical Peels and Anti-Aging Therapies .png",
    },
    {
      title: "Body Contouring and Skin Tightening",
      img: "/Body Contouring and Skin Tightening.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-semibold text-gray-600">
          <span className="text-[#1073B9]">Services</span> &nbsp;›&nbsp; Dermatology and Advanced Skin Aesthetics
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-20">
          Popular <span className="text-[#1073B9]">Treatments:</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer"
            >
              <div className="relative w-28 h-24 rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
