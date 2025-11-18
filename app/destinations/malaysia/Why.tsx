"use client";

import React, { FC, useState, useEffect } from "react";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export interface WhyChooseMalaysiaProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imgAlt?: string;
}

const WhyChooseMalaysia: FC<WhyChooseMalaysiaProps> = ({
  title = "Why Choose Malaysia with Global Health Opulence",
  description =
    "Your Malaysia healthcare travel experience through Global Health Opulence is managed with precision, discretion, and personal care. Our collaborations with accredited hospitals and experienced medical specialists ensure safety, transparency, and consistent excellence. From pre-treatment consultations and travel coordination to private recovery arrangements and ongoing support, every step is designed to provide comfort and confidence. GHO makes your medical journey in Malaysia as seamless as it is transformative.",
  imageSrc = "/Doctor.png",
  imgAlt = "Doctor",
}) => {
  const safeTitle: string = typeof title === "string" ? title : String(title ?? "");
  const safeDescription: string =
    typeof description === "string" ? description : String(description ?? "");
  const safeAlt: string = typeof imgAlt === "string" ? imgAlt : "image";


  const validImageSrc: string =
    typeof imageSrc === "string" && imageSrc.length > 0 ? imageSrc : "/doctor.png";

  const [src, setSrc] = useState<string>(validImageSrc);

  useEffect(() => {
    setSrc(validImageSrc);
  }, [validImageSrc]);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const fallback = "/Doctor.png";
    const target = e.currentTarget;

    if (!target.src.includes(fallback)) {
      target.src = fallback;
    }
  };

  return (
    <section className="w-full px-6 md:px-24 py-20 bg-white">
      <div
        className="max-w-5xl mx-auto flex items-center rounded-2xl overflow-hidden p-6 md:p-10 bg-[#DBF0FF]"
        role="region"
        aria-label={safeTitle}
      >
        {/* LEFT — Image */}
        <div className="w-28 md:w-40 lg:w-48 shrink-0 flex items-center justify-center">
          <img
            src={src}
            alt={safeAlt}
            width={300}
            height={300}
            onError={handleImgError}
            className="object-contain rounded-lg max-h-[150px] md:max-h-[200px] lg:max-h-60"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="ml-4 md:ml-8 flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 md:mb-4 ">
            {safeTitle}
          </h2>

          <p className={`${body1.className} text-[18px] text-gray-700 leading-relaxed mb-4`}>
            {safeDescription}
          </p>

          <button
            type="button"
            className="inline-block px-5 py-2.5 bg-[#1073B9] text-white rounded-md text-sm font-semibold  hover:bg-blue-700 transition"
            aria-label="Transform Confidence into Healing"
            onClick={() => console.log("CTA clicked")}
          >
            Transform Confidence into Healing
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMalaysia;
