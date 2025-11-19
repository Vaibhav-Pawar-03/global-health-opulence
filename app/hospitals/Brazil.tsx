"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function BrazilHospitals() {
  const hospitals = [
    {
      title: "Hospital Israelita Albert Einstein – São Paulo",
      desc: "South America's leading hospital.",
      img: "/br1.png",
      url: "https://www.einstein.br/en",
    },
    {
      title: "Hospital Sírio-Libanês – São Paulo",
      desc: "Prestigious medical facility with global reputation.",
      img: "/br2.png",
      url: "https://www.hospitalsiriolibanes.org.br/",
    },
    {
      title: "Rede D'Or São Luiz – Nationwide",
      desc: "Brazil's largest and most comprehensive network.",
      img: "/br3.png",
      url: "https://www.rededorsaoluiz.com.br/",
    },
    {
      title: "Hospital Alemão Oswaldo Cruz – São Paulo",
      desc: "Renowned for high-complexity care.",
      img: "/oswaldocruz.png",
      url: "https://www.hospitaloswaldocruz.org.br/",
    },
    {
      title: "Hospital das Clínicas – São Paulo",
      desc: "Academic and research-focused institution.",
      img: "/clinicas.png",
      url: "https://www.hc.fm.usp.br/",
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
