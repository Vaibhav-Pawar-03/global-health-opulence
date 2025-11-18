"use client";

import HospitalCarousel from "../components/HospitalCarousel";

export default function Hospitals() {
  const hospitals = [
    {
      title: "Apollo Hospitals – Chennai",
      desc: "Flagship multispecialty network with global patient programs.",
      img: "/apollo.png",
    },
    {
      title: "Fortis Healthcare – Multiple Cities",
      desc: "Leader in tertiary and critical care.",
      img: "/fortis.png",
    },
    {
      title: "Medanta The Medicity – Gurugram",
      desc: "World-class quaternary referral hospital.",
      img: "/medanta.png",
    },
    {
      title: "Mock Hospital – A",
      desc: "Sample description.",
      img: "/apollo.png",
    },
    {
      title: "Mock Hospital – B",
      desc: "Sample description.",
      img: "/fortis.png",
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      {/* Main Heading */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 mb-8">
        <p className="text-[#1073B9] text-sm md:text-base font-semibold mb-2 uppercase tracking-wide">Hospitals</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#25282B] mb-6">
          Explore <span className="text-[#1073B9]">Top International Hospitals</span>
        </h2>
      </div>

      {/* India Carousel */}
      <HospitalCarousel
        countryName="India"
        description="A trusted global hub for advanced and affordable medical care."
        hospitals={hospitals}
      />
    </section>
  );
}
