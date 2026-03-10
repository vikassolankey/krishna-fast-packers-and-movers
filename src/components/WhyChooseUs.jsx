import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Truck, PackageCheck, Banknote, Timer, Headset } from 'lucide-react';
import Section from './Section';
import Counter from './Counter';

const reasons = [
  { icon: ShieldCheck, title: '15+ Years Experience', desc: 'Proven track record of excellence' },
  { icon: Users, title: 'Professional Staff', desc: 'Trained and courteous team' },
  { icon: Truck, title: 'Skilled Drivers', desc: 'Safe and timely transit' },
  { icon: PackageCheck, title: 'Safe Packing', desc: 'Premium quality materials' },
  { icon: Banknote, title: 'Affordable Prices', desc: 'Best value for your money' },
  { icon: Timer, title: 'On-Time Delivery', desc: 'We respect your schedule' },
  { icon: Headset, title: '24/7 Support', desc: 'Always here to assist you' },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-us" className="py-24 bg-indigo-500/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Why Us</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Why Choose Krishna Fast?</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We combine years of experience with modern techniques to ensure your relocation is as smooth as possible. Our commitment to quality has made us a leader in the industry.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex flex-col items-center justify-center border border-indigo-500/20">
                  <span className="text-2xl font-bold text-white">
                    <Counter value={15} suffix="+" />
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold">Years Experience</div>
                  <div className="text-gray-500 text-sm">In relocation industry</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex flex-col items-center justify-center border border-emerald-500/20">
                  <span className="text-2xl font-bold text-white">
                    <Counter value={10} suffix="k+" />
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold">Happy Customers</div>
                  <div className="text-gray-500 text-sm">Across all major cities</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-900/50 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <reason.icon className="text-indigo-400" size={24} />
                </div>
                <h4 className="text-white font-bold mb-1">{reason.title}</h4>
                <p className="text-gray-500 text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
