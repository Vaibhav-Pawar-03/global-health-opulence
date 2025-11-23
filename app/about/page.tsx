'use client';

import Navbar from "../components/Navbar";
import Hero from "./hero";
import MissionVision from "./mission";
import CoreValues from "./corevalues";
import Who from "./who";
import Footer from "../components/Footer"; 


export default function AboutPage() { 
     return (
    <>
      <Navbar />   
        <Hero />
        <MissionVision />
        <CoreValues />
        <Who />
      <Footer />
    </>
  );
}  