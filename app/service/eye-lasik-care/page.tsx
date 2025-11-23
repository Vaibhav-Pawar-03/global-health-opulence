'use client';

import Navbar from "@/app/components/Navbar";
import FAQSection from "@/app/components/FAQSection";
import Why from "@/app/destinations/brazil/Why";
import Hero from "@/app/service/eye-lasik-care/hero";
import Treatment from "@/app/service/eye-lasik-care/Treatment";
import Footer from "@/app/components/Footer";


export default function EyeLasikCarePage() {
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
