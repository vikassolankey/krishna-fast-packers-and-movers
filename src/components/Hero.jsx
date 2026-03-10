import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Truck, Clock } from 'lucide-react';
import BookingModal from './BookingModal';
import Counter from './Counter';

const heroImages = [
  '/gallery/hero-bg1.png',
  '/gallery/hero-bg2.png',
  '/gallery/hero-bg3.png',
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-start pt-32 md:pt-48 lg:pt-56 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="Relocation Background"
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0f0f0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#0B63E6] text-sm font-medium mb-6"
            >
              <Shield size={16} />
              Trusted by 10,000+ Customers
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
              Welcome To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B63E6] to-[#2BBB6A]">
                Krishna Fast
              </span> <br />
              Packers And Movers
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Krishna Fast Packers And Movers is a trusted relocation service provider based in Agra, Uttar Pradesh. 
              We specialize in professional packing, moving, and relocation services across India with over 
              <span className="text-white font-semibold"> 15 years of experience</span>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#FF7A00] hover:bg-[#FF8A1A] text-white font-bold rounded-2xl transition-all shadow-lg flex items-center gap-2 group transform-gpu hover:scale-105 active:scale-95 will-change-transform"
              >
                Book Your Move
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#services"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-sm transform-gpu hover:scale-105 active:scale-95 will-change-transform"
              >
                Our Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">
                  <Counter value={15} suffix="+" />
                </div>
                <div className="text-sm text-gray-500">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <Counter value={500} suffix="+" />
                </div>
                <div className="text-sm text-gray-500">Cities Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  <Counter value={99} suffix="%" />
                </div>
                <div className="text-sm text-gray-500">Safe Delivery</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-[3rem] p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <Truck className="text-indigo-400 mb-4" size={32} />
                    <h3 className="text-white font-bold">Fast Moving</h3>
                    <p className="text-xs text-gray-500 mt-2">Express delivery across India</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <Shield className="text-emerald-400 mb-4" size={32} />
                    <h3 className="text-white font-bold">Secure Packing</h3>
                    <p className="text-xs text-gray-500 mt-2">Multi-layer safety materials</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <Clock className="text-purple-400 mb-4" size={32} />
                    <h3 className="text-white font-bold">On-Time</h3>
                    <p className="text-xs text-gray-500 mt-2">Punctual pickup & delivery</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs mb-4">24/7</div>
                    <h3 className="text-white font-bold">Support</h3>
                    <p className="text-xs text-gray-500 mt-2">Always here to help you</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
