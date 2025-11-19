"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Cancún & Riviera Maya Beaches",
    desc: "Recover by turquoise waters with wellness spa programs.",
    image: "/mexico-exp-1.jpg",
    alt: "Cancún & Riviera Maya Beaches",
  },
  {
    title: "Teotihuacan & Chichen Itza",
    desc: "Explore ancient pyramid complexes and cultural heritage.",
    image: "/mexico-exp-2.jpg",
    alt: "Teotihuacan & Chichen Itza",
  },
  {
    title: "Mexican Cuisine Experiences",
    desc: "Taste local delicacies like tacos al pastor and mole poblano.",
    image: "/mexico-exp-3.jpg",
    alt: "Mexican Cuisine Experiences",
  },
  {
    title: "Colonial Cities & Art Walks",
    desc: "Visit Oaxaca, San Miguel de Allende, and Guadalajara's vibrant galleries.",
    image: "/mexico-exp-4.jpg",
    alt: "Colonial Cities & Art Walks",
  },
  {
    title: "Cenote Diving & Nature Escapes",
    desc: "Discover underground lakes and jungle retreats near Tulum.",
    image: "/mexico-exp-1.jpg",
    alt: "Cenote Diving & Nature Escapes",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        <span className="text-[#1073B9]">Things to Do</span> in Mexico
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
