"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function MexicoHospitals() {
  const hospitals = [
    {
      title: "Hospitales Ángeles – Nationwide",
      desc: "Mexico's largest private hospital network.",
      img: "/mex1.png",
      url: "https://www.hospitalesangeles.com/en/",
    },
    {
      title: "Médica Sur – Mexico City",
      desc: "Leading tertiary hospital with advanced diagnostics.",
      img: "/mex2.png",
      url: "https://www.medicasur.com.mx/",
    },
    {
      title: "Centro Médico ABC – Mexico City",
      desc: "Renowned teaching and specialty hospital.",
      img: "/mex3.png",
      url: "https://www.abchospital.com/",
    },
    {
      title: "Christus Muguerza – Monterrey",
      desc: "Trusted global brand with strong medical ethics.",
      img: "/christus.png",
      url: "https://www.christusmuguerza.com.mx/",
    },
    {
      title: "Star Médica – Multiple Cities",
      desc: "Expanding chain providing accessible quality care.",
      img: "/starmedica.png",
      url: "https://www.starmedica.com/",
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
