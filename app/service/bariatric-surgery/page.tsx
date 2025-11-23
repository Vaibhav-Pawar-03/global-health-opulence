'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/bariatric-surgery/hero";
import Treatment from "@/app/service/bariatric-surgery/Treatment";
import Footer from "@/app/components/Footer";


export default function BariatricSurgeryPage() {
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
