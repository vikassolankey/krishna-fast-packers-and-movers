import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Section from './Section';
import Counter from './Counter';

export default function About() {
  const solutions = [
    'Packing', 'Loading', 'Transportation', 'Unloading', 'Unpacking', 'Rearrangement'
  ];

  return (
    <Section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden mb-6 aspect-video relative group">
              <img 
                src="https://picsum.photos/seed/relocation-truck/800/600" 
                alt="Krishna Fast Relocation Truck" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 w-48 h-48 rounded-3xl border-4 border-slate-900 overflow-hidden shadow-2xl hidden md:block"
            >
              <img 
                src="https://picsum.photos/seed/packing/400/400" 
                alt="Professional Packing" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="absolute bottom-8 right-8 bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-xl hidden sm:block">
              <div className="text-4xl font-bold text-indigo-400">
                <Counter value={15} suffix="+" />
              </div>
              <div className="text-gray-400 text-sm font-medium">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Safe, Affordable, and <br />
              <span className="text-indigo-400">Reliable Relocation</span>
            </h3>
            
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Krishna Fast Packers And Movers was founded with the mission of providing safe, affordable, and reliable relocation services. 
              Under the leadership of <span className="text-white font-semibold">Shri Satyapal Singh</span>, the company has served hundreds of satisfied customers.
            </p>

            <p className="text-gray-400 mb-8">
              We provide complete relocation solutions including:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {solutions.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-indigo-500" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative h-48 rounded-3xl overflow-hidden border border-white/10 mb-12 group">
              <img 
                src="https://picsum.photos/seed/moving-team/800/400" 
                alt="Our Professional Team" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <div className="text-white font-bold text-sm uppercase tracking-widest">Our Professional Team</div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-8">
              <p className="text-sm italic text-gray-400">
                "Our mission is to make every move stress-free and secure, ensuring your belongings reach their destination exactly as they left."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">SS</div>
                <div>
                  <div className="text-white font-bold text-sm">Shri Satyapal Singh</div>
                  <div className="text-gray-500 text-xs">Founder & Director</div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
