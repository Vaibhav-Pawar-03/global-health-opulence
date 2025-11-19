"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function CostaRicaHospitals() {
  const hospitals = [
    {
      title: "Hospital Clínica Bíblica – San José",
      desc: "Internationally accredited and highly rated.",
      img: "/cr1.png",
      url: "https://www.clinicabiblica.com/",
    },
    {
      title: "CIMA Hospital – San José",
      desc: "Modern hospital trusted by global patients.",
      img: "/cr2.png",
      url: "https://www.hospitalcima.com/",
    },
    {
      title: "Hospital La Católica – San José",
      desc: "Affordable excellence for medical travellers.",
      img: "/cr3.png",
      url: "https://www.hospitalcatolica.com/",
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
