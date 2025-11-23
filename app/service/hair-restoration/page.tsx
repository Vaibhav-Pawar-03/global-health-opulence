'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/hair-restoration/hero";
import Treatment from "@/app/service/hair-restoration/Treatment";
import Footer from "@/app/components/Footer";


export default function HairRestorationPage() {
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
