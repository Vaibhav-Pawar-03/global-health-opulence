import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MedicalPrecision from "./components/MedicalPrecision";
import HospitalNetwork from "./components/HospitalNetwork";
import Treatments from "./components/Treatments";
import Works from "./components/Works";
import CarePlan from "./components/CarePlan";
import Compare from "./components/Compare";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <main className="bg-white">
        <HeroSection />
        <MedicalPrecision />
        <HospitalNetwork />
        <Treatments />
        <Works />
        <CarePlan />
        <Compare />
        <Testimonials />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
