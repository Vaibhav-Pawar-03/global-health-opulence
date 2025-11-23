"use client";

import Image from "next/image";

export default function Treatment() {
  const items = [
    {
      title: "Total and Partial Knee Replacement",
      img: "/Ortho.png",
    },
    {
      title: "Hip and Shoulder Replacement Surgery",
      img: "/Ortho.png",
    },
    {
      title: "Arthroscopy and Sports Injury Treatment",
      img: "/Ortho.png",
    },
    {
      title: "Spinal Alignment and Fracture Repair",
      img: "/Spine Care and Surgery.png",
    },
    {
      title: "Robotic-Assisted Orthopedic Surgeries",
      img: "/Ortho.png",
    },
    {
      title: "Post-Operative Physical Therapy",
      img: "/Ortho.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-semibold text-gray-600">
          <span className="text-[#1073B9]">Services</span> &nbsp;›&nbsp; Orthopaedics and Joint Replacement
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
