'use client';

import { Button } from './ui/button';
import { CheckCircle2, Star } from 'lucide-react';

export default function CarePlan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F2EF] to-[#DFF3EC] flex flex-col items-center py-16 px-6">
      <div className="text-center max-w-3xl mb-10">
        <p className="text-[#007B5E] font-medium">Select a Personalised Care Plan</p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-3 leading-tight">
          Your Treatment. Your Timeline.<br />Your Perfect Destination.
        </h1>
        <p className="text-gray-600 mt-4">
          Design your ideal treatment journey with complete flexibility or reach out for expert guidance.
        </p>
        <Button className="mt-6 bg-[#007B5E] hover:bg-[#006b52] px-6 py-3 rounded-lg text-white text-lg">
          Speak with a GHO Advisor →
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* GHO Signature Care Package */}
        <div className="shadow-md rounded-2xl border-none bg-white overflow-hidden">
          <div className="bg-[#046A4D] h-16 w-full"></div>
          <div className="p-8 -mt-8">
            <h3 className="text-xl font-semibold text-white bg-[#046A4D] inline-block px-4 py-2 rounded-md mb-4">
              GHO Signature Care Package
            </h3>
            <p className="text-gray-700 mb-6">
              A seamless blend of expert care and end-to-end coordination.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                'Pre-treatment consultations with board-certified specialists',
                'Comprehensive medical coordination and record management',
                '24/7 medical and travel support via WhatsApp',
                'Visa assistance and travel logistics',
                'Post-treatment follow-up coordination',
                'Secured Medical records',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="text-[#1BAF75] mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GHO Luxe Recovery Package */}
        <div className="shadow-lg rounded-2xl border-none relative overflow-hidden bg-white">
          <div className="absolute top-4 right-4 bg-[#1BAF75] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
            <Star size={14} /> Guest Favourite
          </div>
          <div className="bg-[#046A4D] h-16 w-full"></div>
          <div className="p-8 -mt-8">
            <h3 className="text-xl font-semibold text-white bg-[#046A4D] inline-block px-4 py-2 rounded-md mb-4">
              GHO Luxe Recovery Package
            </h3>
            <p className="text-gray-700 mb-4">
              Premium healthcare paired with indulgent comfort and privacy.
            </p>
            <p className="text-gray-700 font-medium mb-6">
              Includes All from the Signature Care Package, Plus:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                'Extended luxury stays (pre- or post-treatment)',
                'Luxury accommodation during treatment and recovery',
                'Private airport and medical facility transfers',
                'Private nursing care during recovery',
                'Companion accommodation and travel',
                'Wellness treatments and spa services',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="text-[#1BAF75] mt-1" size={20} />
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
