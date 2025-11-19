import HospitalCarousel from "../components/HospitalCarousel";

export default function TurkeyHospitals() {
  const hospitals = [
    {
      title: "Acıbadem Healthcare Group – Istanbul",
      desc: "Leading private hospital network serving global patients.",
      img: "/Acıbadem.png",
      url: "https://www.acibadem.com.tr/en/",
    },
    {
      title: "Anadolu Medical Centre – Kocaeli",
      desc: "In collaboration with Johns Hopkins Medicine.",
      img: "/Anadolu.png",
      url: "https://www.anadolusaglik.org/en",
    },
    {
      title: "Memorial Healthcare Group – Istanbul",
      desc: "Known for transplant and IVF excellence.",
      img: "/Memorial.png",
      url: "https://www.memorial.com.tr/en/",
    },
    {
      title: "Liv Hospital – Istanbul",
      desc: "Synonymous with medical precision and modern luxury.",
      img: "/liv.png",
      url: "https://www.livhospital.com/en",
    },
    {
      title: "Medicana Health Group – Nationwide",
      desc: "One of Turkey's most trusted healthcare networks.",
      img: "/medicana.png",
      url: "https://www.medicana.com.tr/en",
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
