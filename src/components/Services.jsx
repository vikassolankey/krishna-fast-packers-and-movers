import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Car, Bike, Dog, Package, ArrowUpCircle, Truck } from 'lucide-react';
import Section from './Section';

const services = [
  {
    title: 'Packers And Movers Agra',
    description: 'Complete relocation services across India with safe packing and transportation.',
    icon: Truck,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10'
  },
  {
    title: 'Household Shifting',
    description: 'Furniture, kitchen, electronics, and fragile item packing with safe transport.',
    icon: Home,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Office Shifting',
    description: 'Office equipment, computers, furniture, and document relocation.',
    icon: Building2,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    title: 'Car Transport',
    description: 'Professional car carrier services for safe vehicle relocation.',
    icon: Car,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    title: 'Bike Transport',
    description: 'Secure bike shifting with specialized packing materials.',
    icon: Bike,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  },
  {
    title: 'Pet Transport',
    description: 'Safe and comfortable relocation for your beloved pets.',
    icon: Dog,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10'
  },
  {
    title: 'Packing & Unpacking',
    description: 'Expert packing using high-quality materials and careful unpacking.',
    icon: Package,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
  {
    title: 'Loading & Unloading',
    description: 'Skilled labor for safe handling of all your belongings.',
    icon: ArrowUpCircle,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  }
];

export default function Services() {
  return (
    <Section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Premium Relocation Services
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
            >
              <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={service.color} size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
