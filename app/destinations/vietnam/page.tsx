"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FAQSection from "@/app/components/FAQSection";
import { Breadcrumb } from "@/app/components/ui/breadcrumb";
import Home from "@/app/destinations/vietnam/Home";
import Specialisations from "@/app/destinations/vietnam/Specialisations";
import Medical from "@/app/destinations/vietnam/Medical";
import Experience from "@/app/destinations/vietnam/Experience";
import Why from "@/app/destinations/vietnam/Why";


export default function VietnamPage() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="bg-white px-6 md:px-24">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Vietnam" },
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
