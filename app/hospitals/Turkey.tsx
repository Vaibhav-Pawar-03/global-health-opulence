import HospitalCarousel from "../components/HospitalCarousel";

export default function TurkeyHospitals() {
  const hospitals = [
    {
      title: "Acıbadem Healthcare Group – Istanbul",
      desc: "Leading private hospital network serving global patients.",
      img: "/Acıbadem.png",
    },
    {
      title: "Anadolu Medical Centre – Kocaeli",
      desc: "In collaboration with Johns Hopkins Medicine.",
      img: "/Anadolu.png",
    },
    {
      title: "Memorial Healthcare Group – Istanbul",
      desc: "Known for transplant and IVF excellence.",
      img: "/Memorial.png",
    },
    {
      title: "Liv Hospital – Ankara",
      desc: "Advanced multidisciplinary care with international standards.",
      img: "/Acıbadem.png",
    },
    {
      title: "Florence Nightingale Hospital – Istanbul",
      desc: "Renowned for cardiac surgery and robotic procedures.",
      img: "/Anadolu.png",
    },
    {
      title: "Medicana International – Izmir",
      desc: "Premium patient care with modern medical technology.",
      img: "/Memorial.png",
    },
  ];

  return (
    <HospitalCarousel
      countryName="Türkiye (Turkey)"
      description="A global destination for modern, value-driven healthcare in Europe and Asia."
      hospitals={hospitals}
    />
  );
}
