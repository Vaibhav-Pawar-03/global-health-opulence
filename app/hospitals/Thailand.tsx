"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function ThailandHospitals() {
  const hospitals = [
    {
      title: "Bumrungrad International Hospital – Bangkok",
      desc: "Among the world's top international hospitals.",
      img: "/th1.png",
      url: "https://www.bumrungrad.com/en",
    },
    {
      title: "Bangkok Hospital / BDMS – Nationwide",
      desc: "The region's largest healthcare network.",
      img: "/th2.png",
      url: "https://www.bangkokhospital.com/en",
    },
    {
      title: "Samitivej Hospitals – Bangkok",
      desc: "Recognised for premium maternity and family care.",
      img: "/th3.png",
      url: "https://www.samitivejhospitals.com/",
    },
    {
      title: "BNH Hospital – Bangkok",
      desc: "Heritage hospital delivering trusted private care.",
      img: "/bnh.png",
      url: "https://www.bnhhospital.com/",
    },
    {
      title: "Bangkok Hospital Phuket – Phuket",
      desc: "Ideal for luxury recovery and medical travel.",
      img: "/bhphuket.png",
      url: "https://www.phukethospital.com/",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Thailand"
      description="Asia's wellness capital, blending world-class hospitals with serene recovery environments."
      hospitals={hospitals}
    />
  );
}
