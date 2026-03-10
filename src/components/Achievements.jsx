import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import { Award, Users, Package, Calendar } from 'lucide-react';

const stats = [
  {
    label: 'Years of Experience',
    value: 15,
    suffix: '+',
    icon: Calendar,
    color: 'text-blue-400',
    glow: 'shadow-blue-500/20'
  },
  {
    label: 'Happy Customers',
    value: 500,
    suffix: '+',
    icon: Users,
    color: 'text-indigo-400',
    glow: 'shadow-indigo-500/20'
  },
  {
    label: 'Successful Relocations',
    value: 1200,
    suffix: '+',
    icon: Package,
    color: 'text-purple-400',
    glow: 'shadow-purple-500/20'
  },
  {
    label: 'Professional Staff',
    value: 25,
    suffix: '+',
    icon: Award,
    color: 'text-emerald-400',
    glow: 'shadow-emerald-500/20'
  }
];

export default function Achievements() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000" 
          alt="Logistics Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Achievements
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            Krishna Fast Packers And Movers has successfully handled hundreds of relocations with professionalism, safety, and customer satisfaction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className={`relative group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 shadow-xl ${stat.glow}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
              
              <div className={`absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 bg-gradient-to-br from-transparent to-white/5`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
