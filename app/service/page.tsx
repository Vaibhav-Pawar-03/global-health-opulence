"use client";

import Navbar from "../components/Navbar";
import Hero from "@/app/service/Hero";
import Ghoinfo from "@/app/service/GhoInfo";
import Cards  from "@/app/service/Cards";
import Begin from "@/app/service/Begin";
import FAQSection from "../components/FAQSection";
import Footer from "@/app/components/Footer";



export default function ServicePage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Ghoinfo />
        <Cards />
        <Begin />
        <FAQSection />
        <Footer />
    </>
  );
}
