"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Wellness & Nature Escapes",
    desc: "India's diversity extends to its restorative environments — from Himalayan retreats to Kerala's Ayurvedic resorts designed for holistic post-operative recovery.",
    image: "/india-exp-1.jpg",
    alt: "Wellness & Nature Escapes",
  },
  {
    title: "Cultural Exploration",
    desc: "Explore the architectural marvels of Delhi, the heritage of Jaipur, or the spiritual calm of Rishikesh. Each region offers a rich cultural backdrop to your healing journey.",
    image: "/india-exp-2.jpg",
    alt: "Cultural Exploration",
  },
  {
    title: "Shopping & Leisure",
    desc: "Premium retail destinations in Mumbai and Delhi combine international luxury with authentic Indian craftsmanship.",
    image: "/india-exp-3.jpg",
    alt: "Shopping & Leisure",
  },
  {
    title: "Culinary Highlights",
    desc: "From aromatic curries to coastal delicacies, Indian cuisine nourishes both body and spirit, offering a perfect complement to wellness travel.",
    image: "/india-exp-4.jpg",
    alt: "Culinary Highlights",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Beyond Treatment –{" "}
        <span className="text-[#1073B9]">Experiences & Recovery</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl shadow-md bg-white overflow-hidden"
            >
              <div className="relative w-full h-[180px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-[#25282B] mb-2">
                  {card.title}
                </h3>

                <p className={`${body1.className} text-[18px] text-[#616161] leading-relaxed`}>
                  {card.desc}
                </p>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}
