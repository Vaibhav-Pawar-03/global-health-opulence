"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Safety and Regulation",
    desc: "Singapore's healthcare system is backed by robust governance, ensuring consistency, transparency, and ethical standards.",
    image: "/DE1.png",
    alt: "Safety and Regulation",
  },
  {
    title: "Urban Serenity",
    desc: "Green parks, waterfront promenades, and peaceful luxury hotels create a calm environment for post-treatment rest.",
    image: "/DE2.png",
    alt: "Urban Serenity",
  },
  {
    title: "Nutrition and Wellness",
    desc: "Singaporean cuisine promotes balance, incorporating nutrient-rich Asian ingredients ideal for recovery.",
    image: "/DE3.png",
    alt: "Nutrition and Wellness",
  },
  {
    title: "Connectivity and Comfort",
    desc: "As a global aviation hub, Singapore offers seamless medical travel supported by multilingual care teams.",
    image: "/DE4.png",
    alt: "Connectivity and Comfort",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Beyond Treatment:{" "}
        <span className="text-[#1073B9]">Singapore's Distinct Edge</span>
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
