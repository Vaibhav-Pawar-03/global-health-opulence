"use client";

function CheckIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft blue circle */}
      <circle cx="28" cy="28" r="28" fill="#E4F1FF" />

      {/* Blue check */}
      <path
        d="M20 28.5L25 33.5L36 22.5"
        fill="none"
        stroke="#1073B9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      desc: "Integrity entails being honest, transparent, and unwavering in our dedication to our obligations.",
    },
    {
      title: "Compassion",
      desc: "Each patient is guided by empathy, respect, and real concern.",
    },
    {
      title: "Excellence",
      desc: "We only work with top-tier hospitals & professionals who meet worldwide expectations.",
    },
    {
      title: "Respect",
      desc: "Your privacy, preferences, and dignity are protected at all times.",
    },
    {
      title: "Collaboration",
      desc: "We work together with medical & hospitality partners to provide seamless experiences.",
    },
    {
      title: "Smart Technology",
      desc: "Smart technologies and current technology make your travel faster, safer, and more advanced.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 flex justify-center">
      <div className="max-w-7xl w-full px-6">
        {/* Section Heading */}
        <h2 className="text-[40px] font-bold text-[#25282B] mb-14">
          Our Core <span className="text-[#1073B9]">Values</span>
        </h2>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {values.map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* SVG Icon */}
              <div className="shrink-0">
                <CheckIcon />
              </div>

              {/* Title + Text */}
              <div>
                <h3 className="text-[20px] font-semibold text-[#25282B]">
                  {item.title}
                </h3>
                <p className="text-[#52575C] text-[16px] leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
