'use client';

import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function SafeImg({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  const fallback =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="%239CA3AF" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 13l2.5 2.5L16 10"/></svg>`
    );
  const resolved = useMemo(() => (src && typeof src === 'string' ? src : fallback), [src, fallback]);
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
  key: 'india' | 'turkey' | 'mexico' | 'malaysia' | 'thailand';
  label: string;
  flag: string;
  cost: number;
};

export default function Compare() {
  const [procedure, setProcedure] = useState('Tummy Tuck');
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR'>('USD');

  const rows: CountryRow[] = [
    { key: 'india', label: 'India', flag: '/India.png', cost: 3000 },
    { key: 'turkey', label: 'Türkiye', flag: '/Turkey.png', cost: 4000 },
    { key: 'mexico', label: 'Mexico', flag: '/Mexico.png', cost: 4000 },
    { key: 'malaysia', label: 'Malaysia', flag: '/Malaysia.png', cost: 9000 },
    { key: 'thailand', label: 'Thailand', flag: '/Thailand.png', cost: 3000 },
  ];

  const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₹';
  const maxCost = Math.max(...rows.map((r) => r.cost));

  return (
    <section className="bg-gradient-to-b from-white to-[#F6FBFF] py-20 px-6 md:px-24">
      <div className="mb-10">
        <h4 className="text-green-700 font-medium text-lg mb-2">Price comparison section:</h4>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Compare Your <span className="text-[#1073B9]">Surgical Costs Estimates</span>
        </h2>
        <p className="text-[#52575C] font-regular mt-3">
          Surgery costs vary in each county. Select your medical procedure and see which country offers the best pricing:
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <label className="flex items-center gap-4">
          <span className="text-gray-700 w-40">Select Procedure</span>
          <div className="relative">
            <select
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              className="appearance-none border-2 border-blue-400 rounded-xl py-3 px-6 pr-10 text-lg font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              <option>Tummy Tuck</option>
              <option>Heart Surgery</option>
              <option>Knee Replacement</option>
              <option>Cosmetic Surgery</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3.5 text-blue-500" />
          </div>
        </label>

        <div className="relative">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as typeof currency)}
            className="appearance-none border-2 border-gray-300 rounded-xl py-3 px-6 pr-10 text-lg font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-3.5 text-gray-600" />
        </div>
      </div>

      {/* Bars */}
      <div className="max-w-5xl space-y-6">
        {rows.map((row) => {
          const pct = Math.max(8, Math.round((row.cost / maxCost) * 100));
          return (
            <div key={row.key} className="flex items-center gap-4">
              <div className="flex items-center gap-3 w-40 shrink-0">
                <SafeImg src={row.flag} alt={`${row.label} flag`} className="w-7 h-7 rounded-full" />
                <span className="text-gray-800 font-medium text-base">{row.label}</span>
              </div>

              {/* ✅ Bar with text inside (left aligned) */}
              <div className="flex-1 relative">
                <div
                  className="h-8 rounded-full bg-[#2FAF83] shadow-sm flex items-center pl-4 text-white font-semibold text-sm"
                  style={{ width: `${pct}%` }}
                  aria-label={`${row.label} ${row.cost} ${currency}`}
                >
                  {/* ✅ Value inside the bar (left side) */}
                  {symbol}
                  {row.cost.toLocaleString()} {currency === 'USD' || currency === 'EUR' ? currency : ''}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12">
        <button className="bg-[#1073B9] hover:bg-blue-500 transition text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-md inline-flex items-center gap-2">
          Start My Consultation <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
