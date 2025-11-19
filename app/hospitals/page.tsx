'use client';

import Navbar from "../components/Navbar";
import FAQSection from "../components/FAQSection";
import Hospitals from "./Hospitals";
import Consultation from "./Consultation";
import Hero from "./hero";
import Footer from "../components/Footer";

export default function HospitalsPage() {
    return (
        <>

        < Navbar />
        < Hero />
        < Hospitals />
        < Consultation />
        < FAQSection />
        < Footer />

        </>
    );}
