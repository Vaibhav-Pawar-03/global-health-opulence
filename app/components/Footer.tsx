'use client';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1A1A] text-gray-200 py-20 px-8 md:px-24">
      <div className="grid md:grid-cols-4 gap-14 pb-8 items-start">
        {/* Logo and Info */}
        <div className="md:w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Flogo.png" alt="Global Health Opulence" className="w-48 mb-6" />
          <p className="text-base leading-relaxed text-gray-300">
            Premium Medical Concierge <br />
            Accredited Global Partners <br />
            24×7 Support
          </p>
        </div>

        {/* Support */}
        <div className="md:w-full">
          <h4 className="text-green-400 font-semibold text-lg mb-5">Support</h4>
          <ul className="space-y-3 text-base text-gray-300">
            <li><a href="#" className="hover:text-green-400 transition">Getting Started</a></li>
            <li><a href="#" className="hover:text-green-400 transition">FAQS</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Help Articles</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Report an issue</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Contact Help Desk</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:w-full">
          <h4 className="text-green-400 font-semibold text-lg mb-5">Services</h4>
          <ul className="space-y-3 text-base text-gray-300">
            <li><a href="#" className="hover:text-green-400 transition">Booking appointments</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Online consultations</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Prescriptions</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Medicine Refills</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Medical Notes</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="md:w-full">
          <h4 className="text-green-400 font-semibold text-lg mb-5">Legal</h4>
          <ul className="space-y-3 text-base text-gray-300">
            <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Cookie Notice</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Cookie Preferences</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Trust Center</a></li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6 order-2 md:order-1">
          <a href="#" className="text-green-500 hover:text-green-400 transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-green-500 hover:text-green-400 transition">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-green-500 hover:text-green-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-green-500 hover:text-green-400 transition">
            <Youtube size={24} />
          </a>
        </div>

        <div className="text-sm text-gray-400 order-1 md:order-2 text-center md:text-right">
          HealNet 2024 © All Rights Reserved
        </div>
      </div>
    </footer>
  );
}