import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 text-xs text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4">
          <span className="text-gray-400 ">ISO No: ISO-000000</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">GSTIN: 00AAAAA0000A0Z0</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">UDYAM: UDYAM-00-0000000</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:Krishnafastpackersandmovers@gmail.com" className="flex items-center gap-1 hover:text-white transition-colors">
            <Mail size={14} />
            <span className="hidden sm:inline">Krishnafastpackersandmovers@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a href="tel:+916397237594" className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">+91 63972 37594</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}
