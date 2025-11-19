"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function SingaporeHospitals() {
  const hospitals = [
    {
      title: "Singapore General Hospital – Singapore",
      desc: "The nation's flagship hospital with world-class care.",
      img: "/sg1.png",
      url: "https://www.sgh.com.sg/",
    },
    {
      title: "Mount Elizabeth Hospital – Singapore",
      desc: "Premier private hospital known for medical excellence.",
      img: "/sg2.png",
      url: "https://www.mountelizabeth.com.sg/",
    },
    {
      title: "Raffles Hospital – Singapore",
      desc: "Integrated healthcare facility with international standards.",
      img: "/sg3.png",
      url: "https://www.rafflesmedicalgroup.com/",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Singapore"
      description="Asia's medical hub, combining innovation, quality, and efficiency in healthcare."
      hospitals={hospitals}
    />
  );
}
