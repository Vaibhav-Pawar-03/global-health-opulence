"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function ThailandHospitals() {
  const hospitals = [
    {
      title: "Bumrungrad International Hospital – Bangkok",
      desc: "Among the world's top international hospitals.",
      img: "/th1.png",
    },
    {
      title: "Bangkok Hospital / BDMS – Nationwide",
      desc: "The region's largest healthcare network.",
      img: "/th2.png",
    },
    {
      title: "Samitivej Hospitals – Bangkok",
      desc: "Recognised for premium maternity and family care.",
      img: "/th3.png",
    },
    {
      title: "Mock Hospital – Thailand",
      desc: "Temporary sample description for mock card.",
      img: "/th1.png",
    },
    {
      title: "Mock Wellness Centre – Phuket",
      desc: "Sample placeholder text for testing layout.",
      img: "/th2.png",
    },
    {
      title: "Mock Medical Institute – Chiang Mai",
      desc: "Additional mock sample card for UI consistency.",
      img: "/th3.png",
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
