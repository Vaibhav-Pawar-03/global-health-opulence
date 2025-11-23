"use client";

import Image from "next/image";

export default function Treatment() {
  const items = [
    {
      title: "Facial Procedures: Rhinoplasty, Facelifts, Blepharoplasty",
      img: "/Facial Procedures.png",
    },
    {
      title: "Body Contouring: Liposuction, Tummy Tuck, BBL",
      img: "/Body Contouring.png",
    },
    {
      title: "Breast Aesthetics: Augmentation, Reduction, Lift",
      img: "/Breast Aesthetics.png",
    },
    {
      title: "Reconstructive Surgery: Trauma and Scar Correction",
      img: "/Reconstructive Surgery.png",
    },
    {
      title: "Hair Restoration: FUE and DHI Hair Transplants",
      img: "/Hair Restoration.png",
    },
    {
      title: "Advanced Aesthetic Procedures",
      img: "/Cosmetic.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm font-semibold text-gray-600">
          <span className="text-[#1073B9]">Services</span> &nbsp;›&nbsp; Cosmetic and Reconstructive Surgery
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
