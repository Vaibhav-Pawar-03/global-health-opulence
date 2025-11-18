"use client";
import Image from "next/image";

export default function ComplimentaryConsultation() {
  return (
    <section className="w-full px-6 md:px-14 py-10 md:py-16">
      <div className="bg-[#D7ECFF] rounded-[28px] w-full flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-md px-6 md:px-10 py-10 gap-8">

        {/* LEFT IMAGE BLOCK */}
        <div className="relative flex justify-center md:justify-start md:w-[30%]">
          {/* Circular backdrop shape */}
          <div className="absolute bottom-0 w-[330px] h-[330px] bg-[#A3D3FF] rounded-full"></div>

          {/* Doctor Image */}
          <div className="relative z-10">
            <Image
              src="/doctor2.png"
              alt="Doctor"
              width={330}
              height={330}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="md:w-[60%]">
          <h2 className="text-[28px] md:text-[36px] font-semibold leading-tight text-gray-900">
            Book Your Complimentary<br /> Consultation Today
          </h2>

          <p className="text-gray-700 mt-4 text-[16px] md:text-[18px] leading-relaxed max-w-[600px]">
            Let GHO connect you to the world’s most trusted medical destinations and deliver
            care that matches your expectations for excellence.
          </p>
        </div>

      </div>
    </section>
  );
}
