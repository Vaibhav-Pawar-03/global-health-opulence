'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can easily upgrade or downgrade your plan from your account settings anytime.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your subscription anytime. You’ll retain access until the end of your billing period.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Absolutely. You can add business details, tax numbers, or additional notes before downloading your invoice.',
    },
  ];

  return (
    <section className="bg-linear-to-b from-white to-[#F6FBFF] py-20 px-6 md:px-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* ✅ Left Card */}
        <div className="bg-[#E8F5F0] rounded-2xl p-10 flex flex-col items-center text-center shadow-sm">
          {/* ✅ 3 Separate Images */}
          <div className="flex -space-x-3 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Fp1.png" alt="team member 1" className="w-12 h-12 rounded-full border-2 border-white" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Fp2.png" alt="team member 2" className="w-12 h-12 rounded-full border-2 border-white" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Fp3.png" alt="team member 3" className="w-12 h-12 rounded-full border-2 border-white" />
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-700 text-sm mb-6 max-w-sm">
            We're here for you. Talk to us and let us know how we can help.
          </p>
          <button className="bg-[#1073B9] hover:bg-blue-400 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md transition inline-flex items-center gap-2">
            Talk to us <span>→</span>
          </button>
        </div>

        {/* ✅ Right Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center text-left focus:outline-none hover:text-[#1073B9] transition-colors duration-200 group"
              >
                {/* ✅ Question (font-semibold) */}
                <span className="font-semibold text-gray-700 text-base md:text-lg">
                  {faq.question}
                </span>
                <div className="transition-transform duration-300">
                  {openIndex === i ? (
                    <Minus className="text-gray-500 group-hover:text-[#1073B9] transition-all duration-300" size={20} />
                  ) : (
                    <Plus className="text-gray-500 group-hover:text-[#1073B9] transition-all duration-300" size={20} />
                  )}
                </div>
              </button>

              {/* ✅ Answer (font-regular) with smooth animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer && (
                  <p className="font-regular text-gray-500 mt-3 text-medium leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
