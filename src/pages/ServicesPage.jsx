import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, Package, Home, Building2, Landmark, Box, 
  ArrowUpCircle, Car, Bike, Dog, ShieldCheck, 
  Star, CheckCircle2, MapPin, ChevronRight, Home as HomeIcon
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import AreasServed from '../components/AreasServed';

const breadcrumbs = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Services', href: '/services', icon: null },
];

const services = [
  {
    id: 'packers-movers',
    title: 'Packers And Movers Services',
    shortDesc: 'Complete relocation management from packing to final arrangement.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    icon: Truck,
    content: 'We provide complete packers and movers services in Agra and across India. Our team manages the entire relocation process including packing, loading, transportation, unloading, unpacking, and final arrangement. Whether you are shifting locally within Agra or moving to another city, we ensure safe and efficient relocation.'
  },
  {
    id: 'movers-packers',
    title: 'Movers And Packers Services',
    shortDesc: 'Professional packing using modern materials and techniques.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800',
    icon: Package,
    content: 'Our professional movers and packers team carefully packs all items using modern packing materials and techniques. Fragile items like glassware and electronics as well as heavy furniture are handled with complete care and responsibility.'
  },
  {
    id: 'household-shifting',
    title: 'Houseold Shifting Services',
    shortDesc: 'Careful planning and protection for your family relocation.',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800',
    icon: Home,
    content: 'Household relocation requires careful planning and protection. Our services include packing furniture and appliances, kitchen items and fragile goods, safe loading and unloading, secure transportation, and unpacking and arrangement.'
  },
  {
    id: 'office-relocation',
    title: 'Office Relocation Services',
    shortDesc: 'Efficient office shifting to minimize business interruption.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    icon: Building2,
    content: 'Office relocation requires careful coordination to avoid business interruption. Our team provides efficient office shifting services including packing office equipment, handling computers and electronics, transporting furniture and documents, and organized setup at the new location.'
  },
  {
    id: 'bank-shifting',
    title: 'Bank Shifting Services',
    shortDesc: 'Highly secure relocation for banks and financial institutions.',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800',
    icon: Landmark,
    content: 'Banks require highly secure relocation services. We provide specialized bank shifting services with professional handling of equipment, furniture, and documents.'
  },
  {
    id: 'packing-unpacking',
    title: 'Packing and Unpacking Services',
    shortDesc: 'Organized labeling and high-quality packing materials.',
    image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800',
    icon: Box,
    content: 'Packing is one of the most important parts of relocation. Our packing services include professional packing of goods, high-quality packing materials, organized labeling, and careful unpacking.'
  },
  {
    id: 'loading-unloading',
    title: 'Loading and Unloading Services',
    shortDesc: 'Trained staff using proper tools for safe handling.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    icon: ArrowUpCircle,
    content: 'Our trained staff uses proper tools and lifting techniques for safe loading and unloading of goods. We ensure every item is handled with care to prevent any damage during the process.'
  },
  {
    id: 'vehicle-transport',
    title: 'Vehicle Transportation Services',
    shortDesc: 'Secure car and bike transport across cities.',
    image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=800',
    icon: Car,
    content: 'We provide secure transportation for your vehicles. Our Car Transport Service uses specially designed carriers for safe delivery, while our Bike Transport Service ensures damage-free delivery using proper packing and secure loading methods.'
  },
  {
    id: 'pet-transport',
    title: 'Pet Transport Services',
    shortDesc: 'Safe and comfortable relocation for your furry family members.',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800',
    icon: Dog,
    content: 'We understand that pets are part of the family. Our pet relocation services ensure safe and comfortable transportation with proper care and safety guidelines, making the move stress-free for your pets.'
  },
  {
    id: 'insurance-services',
    title: 'Insurance Services',
    shortDesc: 'Protection against unexpected damage during transit.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    icon: ShieldCheck,
    content: 'We provide insurance services to protect your goods against unexpected damage during transportation. This ensures complete peace of mind throughout the relocation process.'
  },
  {
    id: 'iba-standard',
    title: 'IBA Standard Relocation Services',
    shortDesc: 'Professional industry standards for corporate relocations.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
    icon: Star,
    content: 'Our relocation services follow professional industry standards similar to IBA approved packers and movers, ensuring reliability and trust for corporate and institutional relocations.'
  }
];

const safetyMeasures = [
  'Professional packing materials',
  'Secure loading techniques',
  'Experienced drivers',
  'Proper vehicle handling',
  'Careful unloading procedures'
];

const promises = [
  { title: 'Safe Packing', desc: 'High-quality materials and expert techniques.' },
  { title: 'Trained Staff', desc: 'Professional team for every relocation task.' },
  { title: 'Transparent Pricing', desc: 'No hidden costs, affordable rates.' },
  { title: 'Timely Delivery', desc: 'Punctual service across all locations.' },
  { title: 'Customer Satisfaction', desc: 'Our top priority in every move.' }
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-32 md:pt-40 bg-[#0f0f0f] min-h-screen text-white">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
            alt="Services Hero"
            className="w-full h-full object-cover grayscale opacity-40 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0f0f0f]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center justify-center gap-2 mb-6 text-sm font-medium text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={crumb.name}>
                  <a href={crumb.href} className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                    {crumb.icon && <crumb.icon size={14} />}
                    {crumb.name}
                  </a>
                  {i < breadcrumbs.length - 1 && <ChevronRight size={14} />}
                </React.Fragment>
              ))}
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Our <span className="text-indigo-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional relocation, packing, and logistics services in Agra and across India.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="text-white" size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                <a 
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {services.map((service, i) => (
        <Section 
          key={service.id} 
          id={service.id}
          className={`py-24 ${i % 2 === 1 ? 'bg-white/5' : ''}`}
        >
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}
            >
              <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl hidden md:flex">
                <service.icon className="text-white" size={48} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={i % 2 === 1 ? 'lg:order-1' : ''}
            >
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Service Details</h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">{service.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {service.content}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">Safe Packing</div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">Timely Delivery</div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">Expert Team</div>
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      <Section className="py-24 bg-indigo-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center mb-8 mx-auto shadow-xl shadow-indigo-500/20">
            <ShieldCheck className="text-white" size={40} />
          </div>
          <h2 className="text-4xl font-bold mb-8">Our Commitment to <span className="text-indigo-400">Safety</span></h2>
          <p className="text-gray-400 text-lg mb-12">
            Safety is our top priority during relocation. We implement rigorous safety measures to ensure your belongings reach their destination in perfect condition.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {safetyMeasures.map((measure) => (
              <div key={measure} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/10 rounded-2xl">
                <CheckCircle2 className="text-indigo-400 shrink-0" size={24} />
                <span className="font-medium">{measure}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <AreasServed />

      <Section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our <span className="text-indigo-400">Promise</span></h2>
          <p className="text-gray-400 mt-4">Krishna Fast Packers And Movers promises excellence in every move.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {promises.map((promise, i) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center group hover:bg-indigo-600/10 transition-all"
            >
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-indigo-400" size={24} />
              </div>
              <h3 className="font-bold mb-2">{promise.title}</h3>
              <p className="text-gray-500 text-xs">{promise.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      </div>
    </PageTransition>
  );
}
