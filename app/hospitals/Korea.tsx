"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function SouthKoreaHospitals() {
  const hospitals = [
    {
      title: "Asan Medical Center – Seoul",
      desc: "Korea's most advanced referral hospital.",
      img: "/kr1.png",
      url: "https://www.amc.seoul.kr/asan/lang/eng/main.do",
    },
    {
      title: "Samsung Medical Center – Seoul",
      desc: "Pioneer in robotics and personalized treatment.",
      img: "/kr2.png",
      url: "https://www.samsunghospital.com/gb/main/main.do",
    },
    {
      title: "Severance Hospital – Seoul",
      desc: "Global leader in multidisciplinary clinical excellence.",
      img: "/kr3.png",
      url: "https://sev.severance.healthcare/sev/index.do",
    },
    {
      title: "Seoul National University Hospital – Seoul",
      desc: "Academic institution of international repute.",
      img: "/snuh.png",
      url: "https://www.snuh.org/global/en/main.do",
    },
    {
      title: "Korea University Anam Hospital – Seoul",
      desc: "Renowned for high-end specialty care.",
      img: "/kuah.png",
      url: "https://www.anam.kumc.or.kr/int/main.do",
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
