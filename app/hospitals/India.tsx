"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function IndiaHospitals() {
  const hospitals = [
    {
      title: "Apollo Hospitals – Chennai",
      desc: "Flagship multispecialty network with global patient programs.",
      img: "/apollo.png",
      url: "https://www.apollohospitals.com/",
    },
    {
      title: "Fortis Healthcare – Multiple Cities",
      desc: "Leader in tertiary and critical care.",
      img: "/fortis.png",
      url: "https://www.fortishealthcare.com/",
    },
    {
      title: "Medanta The Medicity – Gurugram",
      desc: "World-class quaternary referral hospital.",
      img: "/medanta.png",
      url: "https://www.medanta.org/",
    },
    {
      title: "Max Healthcare – New Delhi",
      desc: "Modern tertiary network with international recognition.",
      img: "/max.png",
      url: "https://www.maxhealthcare.in/",
    },
    {
      title: "Narayana Health – Bengaluru",
      desc: "Globally reputed for cardiac and transplant excellence.",
      img: "/narayana.png",
      url: "https://www.narayanahealth.org/",
    },
    {
      title: "Aster DM Healthcare – Nationwide",
      desc: "Pan-India network with advanced patient support.",
      img: "/aster.png",
      url: "https://www.asterhospitals.in/",
    },
  ];

  return (
    <HospitalCarousel
      countryName="India"
      description="A trusted global hub for advanced and affordable medical care."
      hospitals={hospitals}
    />
  );
}
