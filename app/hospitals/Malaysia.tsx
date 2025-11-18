"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function MalaysiaHospitals() {
  const hospitals = [
    {
      title: "Gleneagles Hospital – Kuala Lumpur",
      desc: "Premium multispecialty care for international patients.",
      img: "/mal1.png",
    },
    {
      title: "Prince Court Medical Centre – Kuala Lumpur",
      desc: "Benchmark for medical hospitality.",
      img: "/mal2.png",
    },
    {
      title: "Sunway Medical Centre – Subang Jaya",
      desc: "Leading tertiary private hospital.",
      img: "/mal3.png",
    },

    // ---- Mock 3 Cards ----
    {
      title: "Mock Hospital – Malaysia",
      desc: "Placeholder text for testing UI.",
      img: "/mal1.png",
    },
    {
      title: "Mock Health Institute – Penang",
      desc: "Additional mock entry for preview.",
      img: "/mal2.png",
    },
    {
      title: "Mock Wellness Centre – Johor Bahru",
      desc: "Sample mock description.",
      img: "/mal3.png",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Malaysia"
      description="Combining tropical tranquility with world-accredited healthcare."
      hospitals={hospitals}
    />
  );
}
