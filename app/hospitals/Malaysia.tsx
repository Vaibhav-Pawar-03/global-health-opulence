"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function MalaysiaHospitals() {
  const hospitals = [
    {
      title: "Gleneagles Hospital – Kuala Lumpur",
      desc: "Premium multispecialty care for international patients.",
      img: "/mal1.png",
      url: "https://www.gleneagles.com.my/",
    },
    {
      title: "Prince Court Medical Centre – Kuala Lumpur",
      desc: "Benchmark for medical hospitality.",
      img: "/mal2.png",
      url: "https://www.princecourt.com/",
    },
    {
      title: "Sunway Medical Centre – Subang Jaya",
      desc: "Leading tertiary private hospital.",
      img: "/mal3.png",
      url: "https://www.sunwaymedical.com/",
    },
    {
      title: "KPJ Healthcare – Nationwide",
      desc: "Trusted name in patient-first medical services.",
      img: "/kpj.png",
      url: "https://www.kpjhealth.com.my/",
    },
    {
      title: "Pantai Hospital – Multiple Locations",
      desc: "Reputed for consistent international care.",
      img: "/pantai.png",
      url: "https://www.pantai.com.my/",
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
