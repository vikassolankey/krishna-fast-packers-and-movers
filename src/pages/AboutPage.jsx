import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, Clock, Handshake, ChevronRight, Home, Users, Target, Eye } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Counter from '../components/Counter';

const breadcrumbs = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: null },
];

const missionPoints = [
  {
    title: 'Safe Transportation',
    description: 'Provide safe and damage-free transportation of goods using modern techniques.',
    icon: Shield,
  },
  {
    title: 'Affordable Pricing',
    description: 'Offer reliable packing and moving services at competitive and affordable prices.',
    icon: Truck,
  },
  {
    title: 'Transparency & Trust',
    description: 'Maintain complete transparency and build long-term trust with our customers.',
    icon: Handshake,
  },
  {
    title: 'Timely Delivery',
    description: 'Ensure punctual delivery of your belongings with our efficient logistics network.',
    icon: Clock,
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-32 md:pt-40 bg-[#0f0f0f] min-h-screen text-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
            alt="Moving Truck"
            className="w-full h-full object-cover grayscale opacity-40 scale-105"
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
              About <span className="text-indigo-500">Krishna Fast</span> <br />
              Packers And Movers
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Trusted relocation and logistics services across India with professional packing and safe transportation.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 relative">
              <img
                src="/gallery/about-card.jpeg"
                alt="Movers packing"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-2xl hidden sm:block">
              <div className="text-4xl font-bold text-indigo-400">
                <Counter value={15} suffix="+" />
              </div>
              <div className="text-gray-400 text-sm font-medium">Years of Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Our Story</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">
              A Legacy of <span className="text-indigo-400">Trust & Excellence</span>
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Krishna Fast Packers And Movers is a trusted and professional relocation and logistics service provider based in Agra, Uttar Pradesh, India. With years of experience, dedication, and a commitment to quality service, we have built a strong reputation as one of the reliable packers and movers companies serving individuals, families, businesses, and institutions across India.
              </p>
              <p>
                Founded and managed by <span className="text-white font-semibold">Shri Satyapal Singh</span>, S/o Shri Mahatab Singh, our company focuses on providing safe, efficient, and affordable moving solutions.
              </p>
              <p>
                With <span className="text-white font-semibold">more than 15 years of industry experience</span>, the company has deep expertise in packing, logistics, transportation, and relocation services. Our professional team ensures that every move is handled carefully with proper planning, secure packing, and reliable delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-24 bg-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="text-indigo-400" size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our <span className="text-indigo-400">Vision</span></h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our vision is to become one of the <span className="text-white font-semibold">most trusted and recognized packers and movers companies in India</span> by delivering reliable relocation services with professionalism, transparency, and dedication.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>Adopting better packing techniques and modern logistics solutions.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>Continuous improvement through trained manpower and innovation.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>Maintaining safety, punctuality, and affordability at all times.</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video"
          >
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
              alt="Logistics Network"
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent" />
          </motion.div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-8 mx-auto">
            <Target className="text-indigo-400" size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Our <span className="text-indigo-400">Mission</span></h2>
          <p className="text-gray-400">
            Our mission at Krishna Fast Packers And Movers is to deliver efficient and customer-focused moving services that simplify relocation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-24 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Users className="text-indigo-400" size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-indigo-400">Leadership</span></h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center bg-slate-900/50 border border-white/10 rounded-[3rem] p-8 md:p-12"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/10">
              <img
                src="/gallery/owner-img.jpeg"
                alt="Mr. Kapil Singh"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Mr. Kapil Singh</h3>
              <p className="text-indigo-400 font-medium mb-6">Founder & Director</p>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  S/o Shri Mahatab Singh, Shri Satyapal Singh is the visionary behind Krishna Fast Packers And Movers.
                </p>
                <p>
                  With over <span className="text-white font-semibold">15 years of experience in the logistics and relocation industry</span>, he has built the company through dedication, professionalism, and hard work.
                </p>
                <p>
                  His expertise in relocation management, team coordination, transportation logistics, and customer service has helped the company grow steadily and maintain strong customer trust across India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      </div>
    </PageTransition>
  );
}
