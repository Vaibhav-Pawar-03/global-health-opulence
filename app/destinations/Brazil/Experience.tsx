"use client";
import Image from "next/image";

const cards = [
  {
    title: "Healing Environments",
    desc: "From rainforest lodges to ocean-view recovery suites, Brazil creates an atmosphere of natural calm that accelerates recovery and emotional wellbeing.",
    image: "/DE1.png",
    alt: "Healing Environments",
  },
  {
    title: "Culture and Spirit",
    desc: "The country's vibrant energy, music, and art create a positive healing environment that uplifts the mind and body alike.",
    image: "/DE2.png",
    alt: "Culture and Spirit",
  },
  {
    title: "Culinary Wellness",
    desc: "Brazilian cuisine emphasises nutrition and freshness, offering tropical fruits, lean proteins, and anti-inflammatory superfoods like açaí and cassava.",
    image: "/DE3.png",
    alt: "Culinary Wellness",
  },
  {
    title: "Leisure and Exploration",
    desc: "Whether exploring the beaches of Rio, the waterfalls of Iguaçu, or the historic towns of Salvador, every corner of Brazil offers renewal and discovery.",
    image: "/DE4.png",
    alt: "Leisure and Exploration",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24"> 
      <div className="max-w-6xl mx-auto w-full"> 
      
        <h1 className="text-[40px] md:text-[36px] font-semibold mb-10 text-[#25282B]">
          Beyond Treatment:{" "}
          <span className="text-[#1073B9]">The Brazilian Experience</span>
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

                <p className="text-[15px] text-[#616161] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
