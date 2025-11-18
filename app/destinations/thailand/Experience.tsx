"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Wellness and Nature Escapes",
    desc: "Thailand's tropical beauty enhances recovery through beachfront resorts, mountain sanctuaries, and wellness spas offering yoga and traditional Thai therapies.",
    image: "/DE1.png",
    alt: "Wellness and Nature Escapes",
  },
  {
    title: "Cultural Exploration",
    desc: "Discover ornate temples, floating markets, and ancient traditions that reflect Thailand's harmony and mindfulness.",
    image: "/DE2.png",
    alt: "Cultural Exploration",
  },
  {
    title: "Shopping and Leisure",
    desc: "Luxury malls in Bangkok and artisanal markets in Chiang Mai make Thailand ideal for both modern and cultural shopping experiences.",
    image: "/DE3.png",
    alt: "Shopping and Leisure",
  },
  {
    title: "Culinary Highlights",
    desc: "Enjoy vibrant Thai cuisine such as Tom Yum Goong, Green Curry, and Mango Sticky Rice, each prepared with a focus on freshness and balance.",
    image: "/DE4.png",
    alt: "Culinary Highlights",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Beyond Treatment:{" "}
        <span className="text-[#1073B9]">Experiences and Recovery</span>
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
