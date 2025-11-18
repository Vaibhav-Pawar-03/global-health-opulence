"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FAQSection from "@/app/components/FAQSection";
import { Breadcrumb } from "@/app/components/ui/breadcrumb";
import Home from "@/app/destinations/thailand/Home";
import Specialisations from "@/app/destinations/thailand/Specialisations";
import Medical from "@/app/destinations/thailand/Medical";
import Experience from "@/app/destinations/thailand/Experience";
import Why from "@/app/destinations/thailand/Why";


export default function ThailandPage() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="bg-white px-6 md:px-24">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Thailand" },
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
