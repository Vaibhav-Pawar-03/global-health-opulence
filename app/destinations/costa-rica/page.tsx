"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FAQSection from "@/app/components/FAQSection";
import { Breadcrumb } from "@/app/components/ui/breadcrumb";
import Home from "@/app/destinations/costa-rica/Home";
import Specialisations from "@/app/destinations/costa-rica/Specialisations";
import Medical from "@/app/destinations/costa-rica/Medical";
import Experience from "@/app/destinations/costa-rica/Experience";
import Why from "@/app/destinations/costa-rica/Why";


export default function CostaRicaPage() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="bg-white px-6 md:px-24">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Costa Rica" },
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
