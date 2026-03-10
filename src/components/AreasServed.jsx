import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Section from './Section';

const cities = [
  'Agra', 'Delhi', 'Noida', 'Gurgaon', 'Jaipur', 'Lucknow', 
  'Kanpur', 'Mumbai', 'Pune', 'Hyderabad', 'Bangalore'
];

export default function AreasServed() {
  return (
    <Section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Coverage</h2>
          <h3 className="text-4xl font-bold text-white">Areas We Serve</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We provide seamless relocation services across all major Indian cities with our extensive network.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-full h-full bg-[url('https://picsum.photos/seed/map/1200/800')] bg-center bg-no-repeat bg-contain grayscale" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 relative z-10">
            {cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all cursor-default group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                  <MapPin size={16} className="text-indigo-400 group-hover:text-white" />
                </div>
                <span className="text-white font-medium">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
