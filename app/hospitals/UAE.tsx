"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function UAEHospitals() {
  const hospitals = [
    {
      title: "Cleveland Clinic Abu Dhabi – Abu Dhabi",
      desc: "World-class multispecialty hospital in partnership with Cleveland Clinic.",
      img: "/uae1.png",
      url: "https://www.clevelandclinicabudhabi.ae/en",
    },
    {
      title: "American Hospital Dubai – Dubai",
      desc: "Leading private hospital with international accreditation.",
      img: "/uae2.png",
      url: "https://www.ahdubai.com/",
    },
    {
      title: "Mediclinic City Hospital – Dubai",
      desc: "State-of-the-art facility with comprehensive medical services.",
      img: "/uae3.png",
      url: "https://www.mediclinic.ae/",
    },
  ];

  return (
    <HospitalCarousel
      countryName="UAE"
      description="A luxury healthcare destination combining cutting-edge technology with world-class hospitality."
      hospitals={hospitals}
    />
  );
}
