"use client";

import Navbar from "../components/Navbar";  
import Footer from "../components/Footer";
import Herosection from "../destinations/Hero";
import FAQSection from "../components/FAQSection";
import Locations from "../destinations/Locations";

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Locations />
        <FAQSection />
      <Footer />
    </>
  );
}
