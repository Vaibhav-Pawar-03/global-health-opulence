"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FAQSection from "@/app/components/FAQSection";
import Home from "@/app/destinations/Brazil/Home";
import Specialisations from "@/app/destinations/Brazil/Specialisations";
import Medical from "@/app/destinations/Brazil/Medical";
import Experience from "@/app/destinations/Brazil/Experience";   
import Why from "@/app/destinations/Brazil/Why";


export default function BrazilPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Specialisations />
      <Medical />
      <Experience />
      <Why />
      <FAQSection />
      <Footer />
    </>
  );
}