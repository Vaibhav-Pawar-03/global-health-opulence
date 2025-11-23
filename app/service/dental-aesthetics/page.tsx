'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/dental-aesthetics/hero";
import Treatment from "@/app/service/dental-aesthetics/Treatment";
import Footer from "@/app/components/Footer";


export default function DentalAestheticsPage() {
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
