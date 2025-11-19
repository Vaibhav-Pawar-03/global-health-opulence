"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function GermanyHospitals() {
  const hospitals = [
    {
      title: "Charité – Universitätsmedizin Berlin",
      desc: "Europe's largest university hospital with cutting-edge research.",
      img: "/ger1.png",
      url: "https://www.charite.de/en/",
    },
    {
      title: "Heidelberg University Hospital – Heidelberg",
      desc: "Renowned for oncology and precision medicine.",
      img: "/ger2.png",
      url: "https://www.klinikum.uni-heidelberg.de/",
    },
    {
      title: "Munich University Hospital – Munich",
      desc: "Leading center for advanced medical treatments and innovation.",
      img: "/ger3.png",
      url: "https://www.lmu-klinikum.de/",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Germany"
      description="Europe's healthcare powerhouse, renowned for precision medicine and advanced research."
      hospitals={hospitals}
    />
  );
}
