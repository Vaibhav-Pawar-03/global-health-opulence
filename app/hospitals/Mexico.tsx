"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function MexicoHospitals() {
  const hospitals = [
    {
      title: "Hospitales Ángeles – Nationwide",
      desc: "Mexico's largest private hospital network.",
      img: "/mex1.png",
    },
    {
      title: "Médica Sur – Mexico City",
      desc: "Leading tertiary hospital with advanced diagnostics.",
      img: "/mex2.png",
    },
    {
      title: "Centro Médico ABC – Mexico City",
      desc: "Renowned teaching and specialty hospital.",
      img: "/mex3.png",
    },

    // ---- Mock cards ---- //
    {
      title: "Mock Hospital – Mexico",
      desc: "Placeholder description for visual consistency.",
      img: "/mex1.png",
    },
    {
      title: "Mock Health Institute – Guadalajara",
      desc: "Sample placeholder text for mock listing.",
      img: "/mex2.png",
    },
    {
      title: "Mock Medical Centre – Monterrey",
      desc: "Prototype mock card for UI testing.",
      img: "/mex3.png",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Mexico"
      description="A preferred destination for advanced care at global standards and local value."
      hospitals={hospitals}
    />
  );
}
