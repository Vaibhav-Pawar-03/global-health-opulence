"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Healing Landscapes",
    desc: "From the tranquil Mekong Delta to Halong Bay's emerald waters, Vietnam offers naturally serene environments that foster recovery and mental calm.",
    image: "/vietnam-exp-1.jpg",
    alt: "Healing Landscapes",
  },
  {
    title: "Cultural and Heritage Discovery",
    desc: "Vietnam's temples, French-inspired architecture, and heritage towns like Hoi An invite patients to reconnect with culture during recuperation.",
    image: "/vietnam-exp-2.jpg",
    alt: "Cultural and Heritage Discovery",
  },
  {
    title: "Wellness and Nature Retreats",
    desc: "Holistic spas and herbal therapies across Da Nang and Phu Quoc blend traditional Vietnamese healing practices with modern spa comfort.",
    image: "/vietnam-exp-3.jpg",
    alt: "Wellness and Nature Retreats",
  },
  {
    title: "Cuisine and Nutrition",
    desc: "Vietnamese cuisine celebrates balance and freshness. Signature dishes like Pho, Goi Cuon, and Bun Cha complement recovery through nutrient-rich, wholesome ingredients.",
    image: "/vietnam-exp-4.jpg",
    alt: "Cuisine and Nutrition",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Beyond Treatment:{" "}
        <span className="text-[#1073B9]">Experience Vietnam's Charm</span>
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
