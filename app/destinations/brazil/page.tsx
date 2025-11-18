"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FAQSection from "@/app/components/FAQSection";
import { Breadcrumb } from "@/app/components/ui/breadcrumb";
import Home from "@/app/destinations/brazil/Home";
import Specialisations from "@/app/destinations/brazil/Specialisations";
import Medical from "@/app/destinations/brazil/Medical";
import Experience from "@/app/destinations/brazil/Experience";
import Why from "@/app/destinations/brazil/Why";


export default function BrazilPage() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="bg-white px-6 md:px-24">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Brazil" },
          ]}
        />
      </div>
      <Specialisations />
      <Medical />
      <Experience />
      <Why />
      <FAQSection />
      <Footer />
    </>
  );
}