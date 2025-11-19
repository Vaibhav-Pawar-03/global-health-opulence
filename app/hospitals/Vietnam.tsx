"use client";
import HospitalCarousel from "../components/HospitalCarousel";

export default function VietnamHospitals() {
  const hospitals = [
    {
      title: "FV Hospital – Ho Chi Minh City",
      desc: "International-standard facility for global patients.",
      img: "/vn1.png",
      url: "https://www.fvhospital.com/",
    },
    {
      title: "Vinmec Healthcare System – Nationwide",
      desc: "Modern private hospitals across Vietnam.",
      img: "/vn2.png",
      url: "https://www.vinmec.com/eng/",
    },
    {
      title: "Cho Ray Hospital – Ho Chi Minh City",
      desc: "Major public referral centre.",
      img: "/vn3.png",
      url: "https://www.choray.vn/",
    },
    {
      title: "Bach Mai Hospital – Hanoi",
      desc: "Recognised academic and specialty institution.",
      img: "/bachmai.png",
      url: "https://benhvienbachmai.vn/",
    },
    {
      title: "Hoan My Medical Corporation – Nationwide",
      desc: "Trusted private healthcare network.",
      img: "/hoanmy.png",
      url: "https://hoanmy.com/",
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
