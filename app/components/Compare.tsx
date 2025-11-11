"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

function SafeImg({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const fallback =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="%239CA3AF" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 13l2.5 2.5L16 10"/></svg>`
    );
  const resolved = useMemo(
    () => (src && typeof src === "string" ? src : fallback),
    [src, fallback]
  );
  return (
    <img
      src={resolved}
      alt={alt}
      className={className}
      onError={(e) => {
        const el = e.currentTarget as HTMLImageElement;
        if (el.src !== fallback) el.src = fallback;
      }}
    />
  );
}

type CountryRow = {
  key: "india" | "turkey" | "mexico" | "malaysia" | "thailand";
  label: string;
  flag: string;
  cost: number;
};

export default function Compare() {
  const [procedure, setProcedure] = useState("Tummy Tuck");
  const [currency, setCurrency] = useState<"USD" | "INR" | "EUR">("USD");

  const dataByProcedure: Record<string, CountryRow[]> = {
    "Tummy Tuck": [
      { key: "india", label: "India", flag: "/India.png", cost: 3000 },
      { key: "turkey", label: "Türkiye", flag: "/Turkey.png", cost: 3800 },
      { key: "mexico", label: "Mexico", flag: "/Mexico.png", cost: 4200 },
      { key: "thailand", label: "Thailand", flag: "/Thailand.png", cost: 3500 },
      { key: "malaysia", label: "Malaysia", flag: "/Malaysia.png", cost: 8000 },
    ],
    "Heart Surgery": [
      { key: "india", label: "India", flag: "/India.png", cost: 5000 },
      { key: "thailand", label: "Thailand", flag: "/Thailand.png", cost: 6400 },
      { key: "mexico", label: "Mexico", flag: "/Mexico.png", cost: 6800 },
      { key: "turkey", label: "Türkiye", flag: "/Turkey.png", cost: 7500 },
      { key: "malaysia", label: "Malaysia", flag: "/Malaysia.png", cost: 12000 },
    ],
    "Knee Replacement": [
      { key: "india", label: "India", flag: "/India.png", cost: 4000 },
      { key: "thailand", label: "Thailand", flag: "/Thailand.png", cost: 5400 },
      { key: "mexico", label: "Mexico", flag: "/Mexico.png", cost: 5800 },
      { key: "turkey", label: "Türkiye", flag: "/Turkey.png", cost: 6000 },
      { key: "malaysia", label: "Malaysia", flag: "/Malaysia.png", cost: 10000 },
    ],
    "Cosmetic Surgery": [
      { key: "india", label: "India", flag: "/India.png", cost: 2500 },
      { key: "thailand", label: "Thailand", flag: "/Thailand.png", cost: 3100 },
      { key: "turkey", label: "Türkiye", flag: "/Turkey.png", cost: 3200 },
      { key: "mexico", label: "Mexico", flag: "/Mexico.png", cost: 3700 },
      { key: "malaysia", label: "Malaysia", flag: "/Malaysia.png", cost: 8200 },
    ],
    "Dental Implants": [
      { key: "india", label: "India", flag: "/India.png", cost: 800 },
      { key: "mexico", label: "Mexico", flag: "/Mexico.png", cost: 1200 },
      { key: "turkey", label: "Türkiye", flag: "/Turkey.png", cost: 1500 },
      { key: "thailand", label: "Thailand", flag: "/Thailand.png", cost: 1800 },
      { key: "malaysia", label: "Malaysia", flag: "/Malaysia.png", cost: 2500 },
    ],
    "Hip Replacement": [
      { key: "india", label: "India", flag: "/India.png", cost: 4500 },
      { key: "thailand", label: "Thailand", flag: "/Thailand.png", cost: 5800 },
      { key: "mexico", label: "Mexico", flag: "/Mexico.png", cost: 6200 },
      { key: "turkey", label: "Türkiye", flag: "/Turkey.png", cost: 6500 },
      { key: "malaysia", label: "Malaysia", flag: "/Malaysia.png", cost: 11000 },
    ],
  };

  
  const rows = dataByProcedure[procedure] || dataByProcedure["Tummy Tuck"];

 
  const conversionRates = { USD: 1, INR: 83, EUR: 0.92 };
  const convertCost = (usdCost: number) =>
    Math.round(usdCost * conversionRates[currency]);

  const symbol = currency === "USD" ? "$" : currency === "EUR" ? "€" : "₹";
  const maxCost = Math.max(...rows.map((r) => convertCost(r.cost)));

  return (
    <section className="bg-linear-to-b from-white to-[#F6FBFF] py-14 md:py-20 px-4 sm:px-6 md:px-24 transition-all duration-500">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Compare Your{" "}
          <span className="text-[#1073B9]">Surgical Costs Estimates</span>
        </h2>
        <p className={`${body1.className} text-[#52575C] mt-3 text-[18px] max-w-xl mx-auto md:mx-0`}>
          Surgery costs vary in each country. Select your medical procedure and
          see which country offers the best pricing:
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12">
        <label className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
          <span className="text-gray-700 text-sm md:text-base font-medium sm:w-36">
            Select Procedure
          </span>
          <div className="relative w-full sm:w-auto">
            <select
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              className="appearance-none w-full border-2 border-[#1073B9] rounded-xl py-2.5 md:py-3 px-4 md:px-6 pr-10 text-sm md:text-lg font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            >
              <option value="Tummy Tuck">Tummy Tuck</option>
              <option value="Heart Surgery">Heart Surgery</option>
              <option value="Knee Replacement">Knee Replacement</option>
              <option value="Cosmetic Surgery">Cosmetic Surgery</option>
              <option value="Dental Implants">Dental Implants</option>
              <option value="Hip Replacement">Hip Replacement</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3.5 text-blue-500" />
          </div>
        </label>

        <div className="relative w-full sm:w-auto">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as typeof currency)}
            className="appearance-none w-full border-2 border-gray-300 rounded-xl py-2.5 md:py-3 px-4 md:px-6 pr-10 text-sm md:text-lg font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-3.5 text-gray-600" />
        </div>
      </div>

      {/* Bars */}
      <div
        key={`${procedure}-${currency}`}
        className="space-y-5 md:space-y-6 transition-all duration-500"
      >
        {rows.map((row) => {
          const convertedCost = convertCost(row.cost);
          const pct = Math.max(
            8,
            Math.round((convertedCost / maxCost) * 100)
          );
          return (
            <div
              key={row.key}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 transition-all duration-700"
            >
              {/* Flag + Label */}
              <div className="flex items-center gap-3 sm:w-36 w-full shrink-0">
                <SafeImg
                  src={row.flag}
                  alt={`${row.label} flag`}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover shrink-0"
                />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  {row.label}
                </span>
              </div>

              {/* Bar */}
              <div className="flex-1 relative w-full">
                <div
                  className="h-6 sm:h-8 rounded-full bg-[#2FAF83] shadow-sm flex items-center pl-3 sm:pl-4 text-white font-semibold text-xs sm:text-sm whitespace-nowrap overflow-hidden transition-all duration-700 ease-in-out"
                  style={{ width: `${pct}%` }}
                >
                  {symbol}
                  {convertedCost.toLocaleString()}{" "}
                  {currency === "USD" || currency === "EUR" ? currency : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-10 md:mt-12 text-center md:text-left">
        <button className="bg-[#1073B9] hover:bg-blue-500 transition text-white text-sm sm:text-base md:text-lg font-semibold py-3 px-5 sm:px-6 md:px-8 rounded-xl shadow-md inline-flex items-center gap-2">
          Start My Consultation <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
