"use client";

import Image from "next/image";

export default function Works() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We handle your medical records with utmost privacy and care.",
      position: "bottom",
      icon: "/consultation-icon.png",
    },
    {
      number: 2,
      title: "Individually Curated Treatment Directions",
      description: "Our expert healthcare officer shall guide you with multiple options",
      position: "top",
      icon: "/treatment-directions.png",
    },
    {
      number: 3,
      title: "Travel and Stay Orchestration",
      description: "You have worldwide choices for your treatment and rejuvenation.",
      position: "bottom",
      icon: "/travel-orchestration.png",
    },
    {
      number: 4,
      title: "Treatment with Personal Stewardship",
      description: "Your steward ensures discreet support throughout your treatment.",
      position: "top",
      icon: "/stewardship.png",
    },
    {
      number: 5,
      title: "Restoration and Return",
      description: "Aftercare and virtual follow-ups ensure seamless healing beyond discharge.",
      position: "bottom",
      icon: "/restoration.png",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8FBFF] py-12 md:py-20 px-4 sm:px-6 overflow-visible">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#25282B]">
            How It Works
          </h2>
        </div>

        {/* Desktop View - Horizontal Timeline */}
        <div className="hidden lg:block min-h-[600px] relative">
          <div className="relative" style={{ paddingTop: '200px', paddingBottom: '200px' }}>
            {/* Main horizontal dashed line */}
            <div className="absolute left-0 right-0 border-t-2 border-dashed border-[#60A5FA]"
                 style={{ top: '50%', transform: 'translateY(-50%)' }} />

            {/* Timeline circles and content */}
            <div className="relative flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="relative" style={{ flex: 1 }}>
                  {/* Vertical connector line */}
                  <div
                    className="absolute left-1/2 w-0.5 bg-[#60A5FA]"
                    style={{
                      height: '140px',
                      transform: 'translateX(-50%)',
                      top: step.position === 'top' ? 'auto' : '50%',
                      bottom: step.position === 'top' ? '50%' : 'auto',
                    }}
                  />

                  {/* Circle with number - centered on the horizontal line */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-[#60A5FA] bg-opacity-20 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border-4 border-[#2563EB] bg-white flex items-center justify-center">
                        <span className="text-[#2563EB] text-xl font-bold">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content box */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      width: '240px',
                      top: step.position === 'top' ? 'auto' : 'calc(50% + 140px)',
                      bottom: step.position === 'top' ? 'calc(50% + 140px)' : 'auto',
                    }}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 flex items-center justify-center">
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-base font-bold text-[#25282B] mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Vertical Timeline */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                {/* Left side - Timeline */}
                <div className="flex flex-col items-center pt-2">
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#60A5FA] bg-opacity-20 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-[#2563EB] bg-white flex items-center justify-center">
                        <span className="text-[#2563EB] text-lg sm:text-xl font-bold">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Vertical line */}
                  {index < steps.length - 1 && (
                    <div className="w-0.5 bg-[#60A5FA] flex-grow mt-2" style={{ minHeight: '80px' }} />
                  )}
                </div>

                {/* Right side - Content */}
                <div className="flex-grow pb-4 pt-2">
                  {/* Icon */}
                  <div className="mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 inline-flex items-center justify-center">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#25282B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
