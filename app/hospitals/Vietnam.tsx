"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function VietnamHospitals() {
  const hospitals = [
    {
      title: "FV Hospital – Ho Chi Minh City",
      desc: "International-standard facility for global patients.",
      img: "/vn1.png",
    },
    {
      title: "Vinmec Healthcare System – Nationwide",
      desc: "Modern private hospitals across Vietnam.",
      img: "/vn2.png",
    },
    {
      title: "Cho Ray Hospital – Ho Chi Minh City",
      desc: "Major public referral centre.",
      img: "/vn3.png",
    },

    // ---- Mock Cards ----
    {
      title: "Mock Hospital – Vietnam",
      desc: "Placeholder card for UI preview.",
      img: "/vn1.png",
    },
    {
      title: "Mock Care Institute – Da Nang",
      desc: "Sample mock content for layout.",
      img: "/vn2.png",
    },
    {
      title: "Mock Medical Center – Hanoi",
      desc: "Temporary card for testing alignment.",
      img: "/vn3.png",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Vietnam"
      description="Rising star in international healthcare, blending modern medicine with affordability."
      hospitals={hospitals}
    />
  );
}
