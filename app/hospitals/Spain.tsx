"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function SpainHospitals() {
  const hospitals = [
    {
      title: "Hospital Clínic de Barcelona – Barcelona",
      desc: "Leading teaching hospital with international recognition.",
      img: "/sp1.png",
      url: "https://www.clinicbarcelona.org/en",
    },
    {
      title: "Hospital Universitario La Paz – Madrid",
      desc: "Major referral center for complex medical procedures.",
      img: "/sp2.png",
      url: "https://www.comunidad.madrid/hospital/lapaz/",
    },
    {
      title: "Quirónsalud Madrid – Madrid",
      desc: "Spain's largest private hospital group with advanced care.",
      img: "/sp3.png",
      url: "https://www.quironsalud.com/",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Spain"
      description="Mediterranean healthcare excellence, blending tradition with modern medical innovation."
      hospitals={hospitals}
    />
  );
}
