"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FAQSection from "@/app/components/FAQSection";
import { Breadcrumb } from "@/app/components/ui/breadcrumb";
import Home from "@/app/destinations/turkey/Home";
import Specialisations from "@/app/destinations/turkey/Specialisations";
import Medical from "@/app/destinations/turkey/Medical";
import Experience from "@/app/destinations/turkey/Experience";
import Why from "@/app/destinations/turkey/Why";


export default function TurkeyPage() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="bg-white px-6 md:px-24">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Turkey" },
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
