"use client";

import Image from "next/image";

export default function Treatment() {
  const items = [
    {
      title: "Chemotherapy and Targeted Therapy",
      img: "/Chemotherapy and Targeted Therapy.png",
    },
    {
      title: "Radiation Oncology (IMRT, CyberKnife, Proton Therapy)",
      img: "/Radiation Oncology (IMRT, CyberKnife, Proton Therapy).png",
    },
    {
      title: "Immunotherapy and CAR-T Cell Therapy",
      img: "/Immunotherapy and CAR-T Cell Therapy.png",
    },
    {
      title: "Surgical Oncology (Minimally Invasive and Robotic)",
      img: "/Surgical Oncology (Minimally Invasive and Robotic).png",
    },
    {
      title: "Bone Marrow and Stem Cell Transplantation",
      img: "/Bone Marrow and Stem Cell Transplantation.png",
    },
    {
      title: "Palliative and Integrative Cancer Care",
      img: "/Palliative and Integrative Cancer Care.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-semibold text-gray-600">
          <span className="text-[#1073B9]">Services</span> &nbsp;›&nbsp; Cancer Care and Oncology
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
