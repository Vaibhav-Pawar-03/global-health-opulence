'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/cosmetic-surgery/hero";
import Treatment from "@/app/service/cosmetic-surgery/Treatment";
import Footer from "@/app/components/Footer";


export default function CosmeticSurgeryPage() {
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
