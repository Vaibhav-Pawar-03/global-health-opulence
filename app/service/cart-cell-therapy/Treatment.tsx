"use client";

import Image from "next/image";

export default function Treatment() {
  const items = [
    {
      title: "CAR-T Therapy for Leukemia and Lymphoma",
      img: "/CAR-T Therapy for Leukemia and Lymphoma.png",
    },
    {
      title: "Immune Cell Engineering and Expansion",
      img: "/Immune Cell Engineering and Expansion.png",
    },
    {
      title: "Targeted Cellular Immunotherapy",
      img: "/Targeted Cellular Immunotherapy.png",
    },
    {
      title: "Combination Therapy with Chemotherapy and Radiotherapy",
      img: "/Combination Therapy with Chemotherapy and Radiotherapy.png",
    },
    {
      title: "Post-Therapy Monitoring and Support",
      img: "/Post-Therapy Monitoring and Support.png",
    },
    {
      title: "Advanced Immunotherapy Protocols",
      img: "/Immunotherapy and CAR-T Cell Therapy.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm font-semibold text-gray-600">
          <span className="text-[#1073B9]">Services</span> &nbsp;›&nbsp; CAR-T Cell Therapy
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
