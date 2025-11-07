'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function CarePlan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F2EF] to-[#DFF3EC] flex flex-col items-center py-16 px-6">
      <div className="text-center max-w-3xl mb-10">
        <p className="text-[#007B5E] font-regular">Select a Personalised Care Plan</p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-3 leading-tight">
          Your Treatment. Your Timeline.
          <br />
          Your Perfect Destination.
        </h1>
        <p className="text-gray-600 mt-4">
          Design your ideal treatment journey with complete flexibility or reach out for expert guidance.
        </p>

        {/* ✅ Centered Button */}
        <div className="flex justify-center mt-6">
          <Button
            className="bg-[#1073B9] hover:bg-[#006b52] text-white text-lg font-semibold flex items-center justify-center transition-all duration-300"
            style={{
              width: '403px',
              height: '68px',
              borderRadius: '12px',
              opacity: 1,
              paddingTop: '20px',
              paddingRight: '36px',
              paddingBottom: '20px',
              paddingLeft: '36px',
              gap: '12px',
              transform: 'rotate(0deg)',
            }}
          >
            Speak with a GHO Advisor →
          </Button>
        </div>
      </div>

      {/* ✅ Two Cards Side by Side */}
      <div className="grid md:grid-cols-2 gap-2 w-full max-w-5xl">
        {/* ✅ GHO Signature Care Package */}
        <div
          className="bg-white shadow-lg overflow-hidden flex flex-col"
          style={{
            width: '405px',
            height: '500px',
            borderRadius: '28px',
            borderWidth: '3px',
            borderColor: '#E0E0E0',
            opacity: 1,
            transform: 'rotate(0deg)',
            marginTop: '150px',
          }}
        >
          {/* Header */}
          <div
            className="flex flex-col justify-center text-white"
            style={{
              backgroundColor: '#006341',
              borderTopLeftRadius: '28px',
              borderTopRightRadius: '28px',
              borderBottomLeftRadius: '28px',
              borderBottomRightRadius: '28px',
              padding: '24px 32px',
            }}
          >
            <h3 className="text-xl font-semibold">GHO Signature Care Package</h3>
            <p className="text-sm-xl font-regular mt-2 opacity-90">
              A seamless blend of expert care and end-to-end coordination.
            </p>
          </div>

          {/* Body */}
          <div className="flex-1 bg-white p-8">
            <ul className="space-y-6 text-gray-700 text-sm">
              {[
                'Pre-treatment consultations with board-certified specialists',
                'Comprehensive medical coordination and record management',
                '24/7 medical and travel support via WhatsApp',
                'Visa assistance and travel logistics',
                'Post-treatment follow-up coordination',
                'Secured Medical records',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#1BAF75] mt-[2px]" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ GHO Luxe Recovery Package */}
        <div
          className="bg-white shadow-xl overflow-hidden flex flex-col relative"
          style={{
            width: '455px',
            height: '630px',
            borderRadius: '44px',
            borderWidth: '4px',
            borderColor: '#1BAF75',
            opacity: 1,
            transform: 'rotate(0deg)',
            marginTop: '60px',
            boxShadow: '0px 4px 40px rgba(16, 115, 185, 0.25)',
          }}
        >
          {/* ⭐ Star Badge half inside-half outside with small gap */}
          <div className="absolute -top-6 right-4 z-20">
            <Image
              src="/Cstar.png"
              alt="Guest Favourite Badge"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* ✅ Header — fixed gap overlap */}
          <div
            className="flex flex-col justify-center text-white"
            style={{
              backgroundColor: '#006341',
              borderTop: '10px solid #1BAF75', // ✅ thicker green strip on top
              marginTop: '-4px', // ✅ overlaps the border gap perfectly
              borderTopLeftRadius: '40px',
              borderTopRightRadius: '40px',
              borderBottomLeftRadius: '28px',
              borderBottomRightRadius: '28px',
              padding: '24px 32px',
            }}
          >
            <div className="bg-[#1BAF75] text-white text-sm font-bold inline-block px-3 py-1 rounded-md w-fit mb-2">
              Guest Favourite
            </div>
            <h3 className="text-xl font-semibold">GHO Luxe Recovery Package</h3>
            <p className="font-regular text-sm-x1 mt-2 opacity-90">
              Premium healthcare paired with indulgent comfort and privacy.
            </p>
            <p className="text-xl text-[#2FAF83] font-semibold mt-2 opacity-100">
              Includes All from the Signature Care Package, Plus:
            </p>
          </div>

          {/* Body */}
          <div className="flex-1 bg-white p-8">
            <ul className="space-y-6 text-gray-700 text-sm">
              {[
                'Extended luxury stays (pre- or post-treatment)',
                'Luxury accommodation during treatment and recovery',
                'Private airport and medical facility transfers',
                'Private nursing care during recovery',
                'Companion accommodation and travel',
                'Wellness treatments and spa services',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="text-[#1BAF75] mt-[10px]" size={18} />
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
