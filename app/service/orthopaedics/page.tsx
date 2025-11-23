'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/orthopaedics/hero";
import Treatment from "@/app/service/orthopaedics/Treatment";
import Footer from "@/app/components/Footer";


export default function OrthopaedicsPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Treatment />
            <Why />
            <FAQSection />
            <Footer />
        </>
    );
}
