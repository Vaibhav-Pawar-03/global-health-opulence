"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Cultural Heritage and Innovation",
    desc: "Explore a nation where ancient palaces coexist with high-tech cities, creating a serene yet stimulating atmosphere for recovery.",
    image: "/DE1.png",
    alt: "Cultural Heritage and Innovation",
  },
  {
    title: "Wellness and Natural Renewal",
    desc: "Thermal spas, herbal therapies, and forest wellness retreats invite deep restoration.",
    image: "/DE2.png",
    alt: "Wellness and Natural Renewal",
  },
  {
    title: "Healing Cuisine",
    desc: "Korean nutrition focuses on balance and immunity with dishes like bibimbap, ginseng broth, and fermented specialties.",
    image: "/DE3.png",
    alt: "Healing Cuisine",
  },
  {
    title: "Leisure and Discovery",
    desc: "Luxury shopping, art spaces, and coastal escapes offer fulfilling post-care experiences.",
    image: "/DE4.png",
    alt: "Leisure and Discovery",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Beyond Treatment:{" "}
        <span className="text-[#1073B9]">Discover South Korea's Spirit</span>
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
