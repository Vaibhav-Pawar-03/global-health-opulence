"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function CostaRicaHospitals() {
  const hospitals = [
    {
      title: "Hospital Clínica Bíblica – San José",
      desc: "Internationally accredited and highly rated.",
      img: "/cr1.png",
    },
    {
      title: "CIMA Hospital – San José",
      desc: "Modern hospital trusted by global patients.",
      img: "/cr2.png",
    },
    {
      title: "Hospital La Católica – San José",
      desc: "Affordable excellence for medical travellers.",
      img: "/cr3.png",
    },

    // ---- Mock Cards ----
    {
      title: "Mock Hospital – Costa Rica",
      desc: "Placeholder medical facility for UI preview.",
      img: "/cr1.png",
    },
    {
      title: "Mock Care Institute – Alajuela",
      desc: "Sample mock card for testing alignment.",
      img: "/cr2.png",
    },
    {
      title: "Mock Medical Center – Liberia",
      desc: "Temporary mock content placeholder.",
      img: "/cr3.png",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Costa Rica"
      description="Where wellness meets world-class care in a sustainable medical environment."
      hospitals={hospitals}
    />
  );
}
