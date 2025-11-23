"use client";

import Image from "next/image";

export default function Treatment() {
  const items = [
    {
      title: "Hormone Replacement and Balancing Therapy",
      img: "/treat1.png",
    },
    {
      title: "Regenerative Cell and Peptide Therapy",
      img: "/treat2.png",
    },
    {
      title: "PRP and Stem Cell Facial Rejuvenation",
      img: "/treat3.png",
    },
    {
      title: "Anti-Aging Nutrient and IV Infusions",
      img: "/treat4.png",
    },
    {
      title: "Advanced Skin Tightening and Wrinkle Correction",
      img: "/treat5.png",
    },
    {
      title: "Longevity and Metabolic Health Programs",
      img: "/treat6.png",
    },
  ];

  return (
    <div className="w-full bg-white">    {/* ← full page white */}
      <section className="max-w-7xl mx-auto px-6 ">
        
        {/* Breadcrumb */}
        <p className="text-sm font-semibold text-gray-600">
          <span className="text-[#1073B9]">Services</span> &nbsp;›&nbsp; Anti-Aging
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-20">
          Popular <span className="text-[#1073B9]">Treatments:</span>
        </h2>

        {/* Grid */}
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
