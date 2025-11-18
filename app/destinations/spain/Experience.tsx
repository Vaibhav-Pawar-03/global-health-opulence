"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Healing Climate",
    desc: "Spain's temperate weather and coastal air enhance post-surgical recovery and overall vitality.",
    image: "/DE1.png",
    alt: "Healing Climate",
  },
  {
    title: "Culture and Comfort",
    desc: "Architectural marvels, art museums, and seaside promenades create an uplifting recovery environment.",
    image: "/DE2.png",
    alt: "Culture and Comfort",
  },
  {
    title: "Nutrition and Lifestyle",
    desc: "The Mediterranean diet, rich in antioxidants and healthy fats, supports heart and immune health.",
    image: "/DE3.png",
    alt: "Nutrition and Lifestyle",
  },
  {
    title: "Recreation and Recovery",
    desc: "Coastal resorts and countryside villas offer privacy and tranquillity during recuperation.",
    image: "/DE4.png",
    alt: "Recreation and Recovery",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Beyond Treatment:{" "}
        <span className="text-[#1073B9]">Spain's Mediterranean Balance</span>
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
