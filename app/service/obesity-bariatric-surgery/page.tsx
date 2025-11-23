'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/obesity-bariatric-surgery/hero";
import Treatment from "@/app/service/obesity-bariatric-surgery/Treatment";
import Footer from "@/app/components/Footer";


export default function ObesityBariatricSurgeryPage() {
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
