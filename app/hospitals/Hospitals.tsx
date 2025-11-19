"use client";

import TurkeyHospitals from "./Turkey";
import MexicoHospitals from "./Mexico";
import ThailandHospitals from "./Thailand";
import VietnamHospitals from "./Vietnam";
import CostaRicaHospitals from "./Costa";
import UAEHospitals from "./UAE";
import IndiaHospitals from "./India";
import BrazilHospitals from "./Brazil";
import GermanyHospitals from "./Germany";
import MalaysiaHospitals from "./Malaysia";
import SingaporeHospitals from "./Singapore";
import SouthKoreaHospitals from "./Korea";
import SpainHospitals from "./Spain";

export default function Hospitals() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      {/* Main Heading */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 lg:px-24 mb-4 md:mb-6">
        <p className="text-[#1073B9] text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 uppercase tracking-wide">Hospitals</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#25282B] mb-4 sm:mb-6">
          Explore <span className="text-[#1073B9]">Top International Hospitals</span>
        </h2>
      </div>

      {/* Country Carousels in the same order as destinations */}
      <TurkeyHospitals />
      <MexicoHospitals />
      <ThailandHospitals />
      <VietnamHospitals />
      <CostaRicaHospitals />
      <UAEHospitals />
      <IndiaHospitals />
      <BrazilHospitals />
      <GermanyHospitals />
      <MalaysiaHospitals />
      <SingaporeHospitals />
      <SouthKoreaHospitals />
      <SpainHospitals />
    </section>
  );
}
