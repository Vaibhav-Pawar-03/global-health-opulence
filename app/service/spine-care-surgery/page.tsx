'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/spine-care-surgery/hero";
import Treatment from "@/app/service/spine-care-surgery/Treatment";
import Footer from "@/app/components/Footer";


export default function SpineCareSurgeryPage() {
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
