"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";


const body1 = Inter({
  weight: ["400"],
});

const treatments = [
  {
    title: "Cosmetic and Reconstructive Surgery",
    desc: "Internationally recognized surgeons offer natural, lasting cosmetic procedures: rhinoplasty, facelifts, liposuction, and reconstructive corrections.",
    icon: "/BL1.png",
    link: "/service/cosmetic-surgery",
  },
  {
    title: "Hair Restoration Excellence",
    desc: "FUE, DHI, Sapphire techniques and regenerative boosters deliver dense, natural, and aesthetically designed results trusted by thousands of global patients each year.",
    icon: "/S2.png",
    link: "/service/hair-restoration",
  },
  {
    title: "Dental Aesthetics and Full Smile Rehabilitation",
    desc: "Advanced centres offer veneers, implants, full mouth rehabilitation, aligners, and smile makeovers using digital dentistry for exceptional precision.",
    icon: "/BL2.png",
    link: "/service/dental-aesthetics",
  },
  {
    title: "Cancer Care and Oncology",
    desc: "Multidisciplinary oncology teams deliver comprehensive programs including targeted therapy, immunotherapy, precision radiation, and complex oncologic surgery.",
    icon: "/BL4.png",
    link: "/service/cancer-care",
  },
  {
    title: "Fertility and IVF Programs",
    desc: "High success IVF, ICSI, donor programs, egg freezing, fertility preservation, and genetic testing delivered by globally accredited reproductive centres.",
    icon: "/BL5.png",
    link: "/service/fertility-ivf",
  },
  {
    title: "Cardiac Care and Cardiac Surgery",
    desc: "Leading hospitals provide minimally invasive cardiac interventions, bypass surgery, valve repair, heart rhythm correction, and advanced cardiac diagnostics.",
    icon: "/S6.png",
    link: "/service/cardiac-care",
  },
  {
    title: "Orthopaedics and Joint Replacement",
    desc: "Patients access global experts for knee replacement, spine correction, hip replacement, sports injury management, and regenerative orthopaedic techniques.",
    icon: "/BL3.png",
    link: "/service/orthopaedics",
  },
  {
    title: "Neurology and Neurosurgery",
    desc: "Advanced imaging and minimally invasive procedures enable effective treatment of neurological disorders including stroke, epilepsy, Parkinson's disease, and spinal nerve conditions.",
    icon: "/S8.png",
    link: "/service/neurology",
  },
  {
    title: "Organ Transplant Excellence",
    desc: "Ethically governed transplant programs offer kidney, liver, heart, and corneal transplants with strict compliance to international safety and postoperative care standards.",
    icon: "/S9.png",
    link: "/service/organ-transplant",
  },
  {
    title: "Dermatology and Advanced Skin Aesthetics",
    desc: "Aesthetic dermatology combines clinical science with luxury skin rejuvenation. Services include anti aging procedures, laser resurfacing, pigmentation correction, acne solutions, and regenerative skin therapies.",
    icon: "/S10.png",
    link: "/service/dermatology",
  },
  {
    title: "Bariatric and Metabolic Surgery",
    desc: "Internationally trusted centres offer gastric sleeve, bypass, metabolic correction, and comprehensive weight management with high long term success rates.",
    icon: "/S11.png",
    link: "/service/bariatric-surgery",
  },
  {
    title: "Anti-Aging and Longevity Medicine",
    desc: "Leading wellness clinics across Europe and Asia offer evidence-based anti-aging programs that combine regenerative medicine, hormone optimization, and aesthetic rejuvenation.",
    icon: "/Anti-Aging.png",
    link: "/service/Sdetail",
  },
  {
    title: "Gynecology and Women's Health",
    desc: "Comprehensive gynecological care including minimally invasive procedures, fertility treatments, reproductive health services, and advanced surgical interventions delivered by specialist teams.",
    icon: "/Gynecology Treatment.png",
    link: "/service/gynecology",
  },
  {
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive laparoscopic procedures across multiple specialties offer reduced recovery time, minimal scarring, and precision treatment for abdominal, gynecological, and urological conditions.",
    icon: "/Laparoscopic Surgery.png",
    link: "/service/laparoscopic-surgery",
  },
  {
    title: "Eye Care and LASIK",
    desc: "Advanced ophthalmology centers provide LASIK vision correction, cataract surgery, retinal treatments, and comprehensive eye care using state-of-the-art laser and diagnostic technology.",
    icon: "/Eye and LASIK Care.png",
    link: "/service/eye-lasik-care",
  },
  {
    title: "Stem Cell Therapy",
    desc: "Cutting-edge regenerative medicine programs utilize stem cell treatments for orthopedic conditions, neurological disorders, autoimmune diseases, and anti-aging protocols with scientifically validated approaches.",
    icon: "/Stem Cell Therapy.png",
    link: "/service/stem-cell-therapy",
  },
  {
    title: "Obesity and Weight Management",
    desc: "Comprehensive obesity treatment programs combine medical weight management, lifestyle modification, nutritional counseling, and surgical options tailored to individual metabolic needs.",
    icon: "/Obesity & Bariatric Surgery.png",
    link: "/service/obesity-bariatric-surgery",
  },
  {
    title: "Spine Care and Surgery",
    desc: "Specialized spine centers offer minimally invasive spinal surgery, disc replacement, scoliosis correction, pain management, and rehabilitation programs for complex spinal conditions.",
    icon: "/Spine Care and Surgery.png",
    link: "/service/spine-care-surgery",
  },
  {
    title: "Laser Surgery and Aesthetics",
    desc: "Precision laser technology enables minimally invasive treatments for vision correction, skin resurfacing, hair removal, vascular lesions, and cosmetic enhancement procedures.",
    icon: "/Laser Surgery.png",
    link: "/service/laser-surgery",
  },
  {
    title: "CAR-T Cell Therapy",
    desc: "Revolutionary immunotherapy using genetically modified T-cells offers breakthrough treatment for certain blood cancers and lymphomas at internationally accredited oncology centers.",
    icon: "/CAR-T Cell.png",
    link: "/service/cart-cell-therapy",
  },
  {
    title: "ENT and Head & Neck Surgery",
    desc: "Expert ear, nose, and throat specialists provide advanced treatment for hearing disorders, sinus conditions, sleep apnea, thyroid surgery, and complex head and neck procedures.",
    icon: "/ENT.png",
    link: "/service/ent-surgery",
  },
];

export default function Cards() {
  const [showMore, setShowMore] = useState(false);

  const visibleCards = showMore ? treatments : treatments.slice(0, 6);

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      
      <div className="text-left w-full max-w-6xl mb-10 px-3">
        <p className="text-[#006341] font-semibold mt-4">Treatments</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Popular Treatments</h2>
       <p className={`${body1.className} text-gray-600 text-[18px] mt-4`}>
          From routine to complex, elective to life-saving. GHO specializes in connecting
          patients with expert care across:
        </p>
      </div>

      {/* Cards Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-10 px-3">
            {visibleCards.map((item, index) => {
              const cardContent = (
                <div
                  className={`bg-white rounded-4xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-6 ${item.link ? 'cursor-pointer' : ''}`}
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className={`${body1.className} text-gray-600 text-[18px] mt-2`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );

              return item.link ? (
                <Link key={index} href={item.link}>
                  {cardContent}
                </Link>
              ) : (
                <div key={index}>
                  {cardContent}
                </div>
              );
            })}
        </div>


    {/* Show More Button */}
        <div className="w-full max-w-6xl px-3 mt-10 flex justify-start">
            <button
                onClick={() => setShowMore(!showMore)}
                className="border border-[#1073B9] text-[#1073B9] px-8 py-3 rounded-full text-base font-semibold flex items-center gap-3 hover:bg-[#1073B9] hover:text-white transition-all duration-300"
            >
                {showMore ? "Show less" : "Show more"}

                <Image
                src="/darrow.png"
                alt="Arrow Icon"
                width={18}
                height={18}
                className={`transition-transform duration-300 ${showMore ? "rotate-180" : "rotate-0"} ${
                    showMore ? "filter invert brightness-0" : "invert-0"
                }`}
                />
            </button>
        </div>
    </section>
  );
}
