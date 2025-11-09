"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

export default function CarePlan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F2EF] to-[#DFF3EC] flex flex-col items-center py-10 md:py-16 px-4 md:px-6">
      <div className="text-center max-w-3xl mb-10 px-2">
        <p className="text-[#007B5E] font-regular text-sm md:text-base">
          Select a Personalised Care Plan
        </p>
        <h1 className="text-2xl md:text-4xl font-semibold mt-3 leading-tight">
          Your Treatment. Your Timeline.
          <br />
          Your Perfect Destination.
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base px-2 md:px-0">
          Design your ideal treatment journey with complete flexibility or reach
          out for expert guidance.
        </p>

        {/* ✅ Centered Button */}
        <div className="flex justify-center mt-6">
          <Button
            className="bg-[#1073B9] hover:bg-[#006b52] text-white text-base md:text-lg font-semibold flex items-center justify-center transition-all duration-300 w-[90%] md:w-[403px] h-[56px] md:h-[68px] rounded-[12px]"
          >
            Speak with a GHO Advisor →
          </Button>
        </div>
      </div>

      {/* ✅ Cards Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 w-full max-w-5xl relative z-0 px-2 md:px-0">
        {/* ✅ GHO Signature Care Package */}
        <div
          className="bg-white shadow-lg flex flex-col relative mx-auto md:mx-0"
          style={{
            borderRadius: "28px",
            borderWidth: "3px",
            borderColor: "#E0E0E0",
            marginTop: "100px",
            overflow: "visible",
            width: "100%",
            maxWidth: "405px",
            height: "auto",
          }}
        >
          {/* Header */}
          <div
            className="flex flex-col justify-center text-white p-6 md:p-8"
            style={{
              backgroundColor: "#006341",
              borderTopLeftRadius: "28px",
              borderTopRightRadius: "28px",
            }}
          >
            <h3 className="text-lg md:text-xl font-semibold">
              GHO Signature Care Package
            </h3>
            <p className="text-sm md:text-base mt-2 opacity-90">
              A seamless blend of expert care and end-to-end coordination.
            </p>
          </div>

          {/* Body */}
          <div
            className="flex-1 bg-white p-6 md:p-8"
            style={{
              borderBottomLeftRadius: "28px",
              borderBottomRightRadius: "28px",
            }}
          >
            <ul className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base">
              {[
                "Pre-treatment consultations with board-certified specialists",
                "Comprehensive medical coordination and record management",
                "24/7 medical and travel support via WhatsApp",
                "Visa assistance and travel logistics",
                "Post-treatment follow-up coordination",
                "Secured Medical records",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#1BAF75] mt-[2px] flex-shrink-0"
                    size={18}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ GHO Luxe Recovery Package */}
        <div
          className="bg-white shadow-xl flex flex-col relative z-10 mx-auto md:mx-0"
          style={{
            borderRadius: "44px",
            borderWidth: "4px",
            borderColor: "#1BAF75",
            marginTop: "60px",
            boxShadow: "0px 4px 40px rgba(16, 115, 185, 0.25)",
            overflow: "visible",
            width: "100%",
            maxWidth: "455px",
            height: "auto",
          }}
        >
          {/* ⭐ Star Badge */}
          <div className="absolute -top-10 right-4 md:-top-12 md:right-8 z-50">
            <Image
              src="/Cstar.png"
              alt="Guest Favourite Badge"
              width={90}
              height={90}
              className="object-contain drop-shadow-xl"
            />
          </div>

          {/* Header */}
          <div
            className="flex flex-col justify-center text-white p-6 md:p-8"
            style={{
              backgroundColor: "#006341",
              borderTop: "10px solid #1BAF75",
              marginTop: "-4px",
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
            }}
          >
            <div className="bg-[#1BAF75] text-white text-xs md:text-sm font-bold inline-block px-3 py-1 rounded-md w-fit mb-2">
              Guest Favourite
            </div>
            <h3 className="text-lg md:text-xl font-semibold">
              GHO Luxe Recovery Package
            </h3>
            <p className="text-sm md:text-base mt-2 opacity-90">
              Premium healthcare paired with indulgent comfort and privacy.
            </p>
            <p className="text-base md:text-xl text-[#2FAF83] font-semibold mt-2 opacity-100">
              Includes All from the Signature Care Package, Plus:
            </p>
          </div>

          {/* Body */}
          <div
            className="flex-1 bg-white p-6 md:p-8"
            style={{
              borderBottomLeftRadius: "44px",
              borderBottomRightRadius: "44px",
            }}
          >
            <ul className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base">
              {[
                "Extended luxury stays (pre- or post-treatment)",
                "Luxury accommodation during treatment and recovery",
                "Private airport and medical facility transfers",
                "Private nursing care during recovery",
                "Companion accommodation and travel",
                "Wellness treatments and spa services",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1BAF75] mt-[6px] flex-shrink-0"
                    size={18}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
