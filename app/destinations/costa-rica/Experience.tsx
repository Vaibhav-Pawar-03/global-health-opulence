"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Eco-Healing Environments",
    desc: "Rainforests, beaches, and mountain lodges provide therapeutic peace and oxygen-rich air.",
    image: "/DE1.png",
    alt: "Eco-Healing Environments",
  },
  {
    title: "Cultural Warmth",
    desc: "Costa Rica's hospitality and 'pura vida' philosophy make recovery emotionally nurturing.",
    image: "/DE2.png",
    alt: "Cultural Warmth",
  },
  {
    title: "Wholesome Nutrition",
    desc: "Organic produce, tropical fruits, and clean eating are central to Costa Rican wellness culture.",
    image: "/DE3.png",
    alt: "Wholesome Nutrition",
  },
  {
    title: "Sustainable Recovery",
    desc: "Many healthcare facilities operate under eco-certified, environmentally responsible frameworks.",
    image: "/DE4.png",
    alt: "Sustainable Recovery",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Beyond Treatment:{" "}
        <span className="text-[#1073B9]">The Costa Rican Experience</span>
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
