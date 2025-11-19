"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Desert Safari & Dune Adventures",
    desc: "Experience the golden dunes and luxury desert camps.",
    image: "/uae-exp-1.jpg",
    alt: "Desert Safari & Dune Adventures",
  },
  {
    title: "Burj Khalifa & Downtown Dubai",
    desc: "Visit the world's tallest building and designer shopping avenues.",
    image: "/uae-exp-2.jpg",
    alt: "Burj Khalifa & Downtown Dubai",
  },
  {
    title: "Sheikh Zayed Grand Mosque",
    desc: "Explore the architectural marvel in Abu Dhabi.",
    image: "/uae-exp-3.jpg",
    alt: "Sheikh Zayed Grand Mosque",
  },
  {
    title: "Spa & Wellness Retreats",
    desc: "Indulge in world-class recovery spas in Ras Al Khaimah and Fujairah.",
    image: "/uae-exp-4.jpg",
    alt: "Spa & Wellness Retreats",
  },
  {
    title: "Marina Cruises & Beachfront Leisure",
    desc: "Sail across Dubai Marina or unwind by the Arabian Gulf.",
    image: "/uae-exp-1.jpg",
    alt: "Marina Cruises & Beachfront Leisure",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
        Things to Do{" "}
        <span className="text-[#1073B9]">in the UAE</span>
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
