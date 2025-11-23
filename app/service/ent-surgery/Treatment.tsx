"use client";

import Image from "next/image";

export default function Treatment() {
  const items = [
    {
      title: "Sinus Surgery and Septoplasty",
      img: "/Sinus Surgery and Septoplasty.png",
    },
    {
      title: "Cochlear Implants and Hearing Restoration",
      img: "/Cochlear Implants and Hearing Restoration.png",
    },
    {
      title: "Tonsil and Adenoid Surgery",
      img: "/Tonsil and Adenoid Surgery.png",
    },
    {
      title: "Voice and Speech Therapy",
      img: "/Voice and Speech Therapy.png",
    },
    {
      title: "Allergy and Sleep Apnea Treatment",
      img: "/Allergy and Sleep Apnea Treatment.png",
    },
    {
      title: "Advanced Head and Neck Procedures",
      img: "/ENT.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm font-semibold text-gray-600">
          <span className="text-[#1073B9]">Services</span> &nbsp;›&nbsp; ENT and Head & Neck Surgery
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
