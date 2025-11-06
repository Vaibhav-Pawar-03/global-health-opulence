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
      answer: '',
    },
    {
      question: 'What is your cancellation policy?',
      answer: '',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: '',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#F6FBFF] py-20 px-6 md:px-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Card */}
        <div className="bg-[#E8F5F0] rounded-2xl p-10 flex flex-col items-center text-center shadow-sm">
          <div className="flex -space-x-3 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/COmbine.png" alt="team" className="w-23 h-12 rounded-full border-2 border-white" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-700 text-sm mb-6 max-w-sm">
            We're here for you. Talk to us and let us know how we can help.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md transition inline-flex items-center gap-2">
            Talk to us <span>→</span>
          </button>
        </div>

        {/* Right Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="text-gray-500" size={20} />
                ) : (
                  <Plus className="text-gray-500" size={20} />
                )}
              </button>
              {openIndex === i && faq.answer && (
                <p className="text-gray-600 mt-3 text-sm leading-relaxed max-w-xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
