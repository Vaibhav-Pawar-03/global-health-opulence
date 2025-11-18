"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function SouthKoreaHospitals() {
  const hospitals = [
    {
      title: "Asan Medical Center – Seoul",
      desc: "Korea's most advanced referral hospital.",
      img: "/kr1.png",
    },
    {
      title: "Samsung Medical Center – Seoul",
      desc: "Pioneer in robotics and personalized treatment.",
      img: "/kr2.png",
    },
    {
      title: "Severance Hospital – Seoul",
      desc: "Global leader in multidisciplinary clinical excellence.",
      img: "/kr3.png",
    },

    // ---- Mock Cards ----
    {
      title: "Mock Hospital – Seoul",
      desc: "UI placeholder for future data.",
      img: "/kr1.png",
    },
    {
      title: "Mock National Institute – Busan",
      desc: "Sample text for testing layout.",
      img: "/kr2.png",
    },
    {
      title: "Mock Medical Campus – Incheon",
      desc: "Temporary mock card for UI preview.",
      img: "/kr3.png",
    },
  ];

  return (
    <HospitalCarousel
      countryName="South Korea"
      description="The global benchmark for aesthetic, reconstructive, and precision medicine."
      hospitals={hospitals}
    />
  );
}
