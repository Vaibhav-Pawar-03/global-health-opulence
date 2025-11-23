'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/gynecology/hero";
import Treatment from "@/app/service/gynecology/Treatment";
import Footer from "@/app/components/Footer";


export default function GynecologyPage() {
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
