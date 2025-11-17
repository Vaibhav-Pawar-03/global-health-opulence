"use client";
import Image from "next/image";

export default function PremiumDestinations() {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-white font-[Inter]">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        
        {/* LEFT TEXT AREA */}
        <div className="max-w-2xl">
          <p className="text-[#1073B9] text-base font-medium mb-4">
            Destinations
          </p>

          <h2 className="text-[42px] md:text-[48px] font-extrabold leading-tight text-[#0A0A0A] mb-8">
            Experience World-<br />
            Class Healthcare in <br />
            <span className="text-[#1073B9]">Exclusive Locales</span>
          </h2>

          <p className="text-[#505050] text-lg leading-relaxed">
            Your pursuit of transformation deserves a seamless, world-class experience.
            GLOBAL HEALTH extends its premium medical concierge services across a curated
            network of global destinations, including Turkey, UAE, India, Singapore, and
            South Korea. Each facility meets rigorous international standards for surgical
            excellence, patient safety, and post-operative care, ensuring you receive precise,
            expert-led treatment within thoughtfully designed, state-of-the-art facilities.
            Discover the perfect setting for your treatment and rejuvenation.
          </p>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="flex flex-col gap-10 w-full lg:w-[48%]">

          {/* TOP IMAGE — moved slightly LEFT + smaller */}
          <div className="relative h-[200px] lg:h-[215px] rounded-[26px] overflow-hidden self-start lg:w-[82%] lg:ml-[8px]">
            <Image
              src="/nd1.png"
              alt="Destination Luxury"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* BOTTOM IMAGE — Option B (strong shift right) + smaller */}
          <div className="relative h-[200px] lg:h-[215px] rounded-[26px] overflow-hidden self-end lg:w-[78%] lg:mr-[-45px]">
            <Image
              src="/nd2.png"
              alt="Retreat Scene"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
