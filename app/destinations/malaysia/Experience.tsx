"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

const cards = [
  {
    title: "Wellness and Nature Escapes",
    desc: "Malaysia's tropical rainforests, islands, and coastal resorts provide the perfect setting for rest and rehabilitation. Wellness retreats in Langkawi and Sabah combine traditional therapies with modern comfort.",
    image: "/DE1.png",
    alt: "Wellness and Nature Escapes",
  },
  {
    title: "Cultural Discovery",
    desc: "Experience Malaysia's cultural diversity through its heritage cities, colourful festivals, and architectural landmarks that reflect Malay, Chinese, and Indian influences.",
    image: "/DE2.png",
    alt: "Cultural Discovery",
  },
  {
    title: "Shopping and Urban Leisure",
    desc: "Premium malls, artisan boutiques, and open-air markets across Kuala Lumpur and Penang offer everything from international luxury brands to handcrafted souvenirs.",
    image: "/DE3.png",
    alt: "Shopping and Urban Leisure",
  },
  {
    title: "Culinary Highlights",
    desc: "Malaysia's cuisine is a celebration of flavours. Enjoy Nasi Lemak, Satay, and Laksa, each dish crafted with local ingredients and culinary artistry.",
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
