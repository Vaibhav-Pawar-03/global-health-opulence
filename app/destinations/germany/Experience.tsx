"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Neuschwanstein Castle",
    desc: "Visit the fairy-tale castle in Bavaria surrounded by the Alps.",
    image: "/germany-exp-1.jpg",
    alt: "Neuschwanstein Castle",
  },
  {
    title: "Berlin's Cultural Circuit",
    desc: "Explore the Berlin Wall, Museum Island, and classical music concerts.",
    image: "/germany-exp-2.jpg",
    alt: "Berlin's Cultural Circuit",
  },
  {
    title: "Rhine River Cruises",
    desc: "Enjoy scenic boat rides past vineyards and medieval towns.",
    image: "/germany-exp-3.jpg",
    alt: "Rhine River Cruises",
  },
  {
    title: "Black Forest Retreats",
    desc: "Recover amid nature trails and mineral-rich thermal spas.",
    image: "/germany-exp-4.jpg",
    alt: "Black Forest Retreats",
  },
  {
    title: "Christmas Markets",
    desc: "Immerse in Europe's most festive shopping and dining experiences.",
    image: "/germany-exp-1.jpg",
    alt: "Christmas Markets",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Things to Do{" "}
        <span className="text-[#1073B9]">in Germany</span>
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
