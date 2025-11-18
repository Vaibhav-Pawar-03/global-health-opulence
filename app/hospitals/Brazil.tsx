"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function BrazilHospitals() {
  const hospitals = [
    {
      title: "Hospital Israelita Albert Einstein – São Paulo",
      desc: "South America's leading hospital.",
      img: "/br1.png",
    },
    {
      title: "Hospital Sírio-Libanês – São Paulo",
      desc: "Prestigious medical facility with global reputation.",
      img: "/br2.png",
    },
    {
      title: "Rede D'Or São Luiz – Nationwide",
      desc: "Brazil's largest and most comprehensive network.",
      img: "/br3.png",
    },

    // ---- Mock Cards ----
    {
      title: "Mock Hospital – Brazil",
      desc: "Temporary UI placeholder card.",
      img: "/br1.png",
    },
    {
      title: "Mock Medical Centre – Rio de Janeiro",
      desc: "Sample visual mock content.",
      img: "/br2.png",
    },
    {
      title: "Mock Specialist Institute – Brasilia",
      desc: "Prototype card for preview.",
      img: "/br3.png",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Brazil"
      description="A centre of medical innovation and world-renowned private healthcare."
      hospitals={hospitals}
    />
  );
}
