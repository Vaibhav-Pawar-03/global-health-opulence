"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const interRegular = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const interSemiBold = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

const body1 = Inter({
  weight: ["400"],
});

export default function HospitalNetwork() {
  const logos = [
    { src: "/h1.png", width: 69.29, height: 74.11 },
    { src: "/h2.png", width: 66.68, height: 74.46 },
    { src: "/h3.png", width: 129.02, height: 74.35 },
    { src: "/h4.png", width: 271.71, height: 59.17 },
    { src: "/h5.png", width: 152.31, height: 56.7 },
    { src: "/h6.png", width: 121.41, height: 75 },
    { src: "/h7.png", width: 206, height: 56 },
  ];

  return (
    <section
      className={`${interRegular.className} bg-white py-16 md:py-24 text-center overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#002147]">
          Access The World's{" "}
          <span className="text-[#1073B9] font-semibold">
            Premier Healthcare Network
          </span>
        </h2>

        {/* Description */}
        <p className={`${body1.className} text-gray-600 max-w-4xl mx-auto leading-relaxed text-[18px]`}>
          Our hospital partners set the standard in global healthcare,
          offering precise, expert-led treatment within thoughtfully designed,
          state-of-the-art facilities for an experience defined by excellence
          and discretion.
        </p>
      </div>

      {/* Full-Width Auto-Rotating Ribbon */}
      <div className="relative mt-14 w-full overflow-hidden">
        <div className="flex animate-scroll-slow">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="shrink-0 flex items-center justify-center mx-[30px]"
              style={{
                width: `${logo.width}px`,
                height: "75px",
              }}
            >
              <Image
                src={logo.src}
                alt={`Hospital Logo ${(index % logos.length) + 1}`}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                priority={index < 3}
              />
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="shrink-0 flex items-center justify-center mx-[30px]"
              style={{
                width: `${logo.width}px`,
                height: "75px",
              }}
            >
              <Image
                src={logo.src}
                alt={`Hospital Logo ${(index % logos.length) + 1}`}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Third set of logos for extra smoothness on larger screens */}
          {logos.map((logo, index) => (
            <div
              key={`logo-3-${index}`}
              className="shrink-0 flex items-center justify-center mx-[30px]"
              style={{
                width: `${logo.width}px`,
                height: "75px",
              }}
            >
              <Image
                src={logo.src}
                alt={`Hospital Logo ${(index % logos.length) + 1}`}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll-slow {
          display: flex;
          width: max-content;
          animation: scroll-slow 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
