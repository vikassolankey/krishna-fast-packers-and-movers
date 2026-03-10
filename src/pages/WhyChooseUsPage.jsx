import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Users, ShieldCheck, Truck, Banknote, 
  Clock, Headset, ChevronRight, Home as HomeIcon,
  CheckCircle2, Star, TrendingUp, Heart
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Counter from '../components/Counter';

const breadcrumbs = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Why Choose Us', href: '/why-choose-us', icon: null },
];

const features = [
  {
    title: '15+ Years Experience',
    desc: 'With more than 15 years of experience in relocation and logistics, our company has developed strong expertise in handling all types of moves safely and efficiently.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
    icon: Award,
  },
  {
    title: 'Professional Staff',
    desc: 'Our trained staff follows professional packing and moving techniques to ensure that every item is handled safely and responsibly.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800',
    icon: Users,
  },
  {
    title: 'Safe Packing Materials',
    desc: 'We use high-quality packing materials to protect fragile items, electronics, furniture, and household goods during transportation.',
    image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800',
    icon: ShieldCheck,
  },
  {
    title: 'Skilled Drivers',
    desc: 'Our experienced drivers ensure safe transportation and timely delivery of goods across cities with deep knowledge of Indian routes.',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
    icon: Truck,
  },
  {
    title: 'Affordable Pricing',
    desc: 'We provide transparent and affordable pricing with no hidden charges, ensuring value for every rupee you spend.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    icon: Banknote,
  },
  {
    title: 'On-Time Delivery',
    desc: 'Timely delivery is one of our core commitments. We ensure that goods reach their destination safely and on schedule.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    icon: Clock,
  },
  {
    title: 'Customer Support',
    desc: 'Our support team assists customers throughout the relocation process and answers queries whenever needed, 24/7.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800',
    icon: Headset,
  },
];

const stats = [
  { label: 'Years Experience', value: 15, suffix: '+', icon: Award },
  { label: 'Happy Customers', value: 500, suffix: '+', icon: Heart },
  { label: 'Successful Moves', value: 1000, suffix: '+', icon: TrendingUp },
  { label: 'Professional Staff', value: 20, suffix: '+', icon: Users },
];

export default function WhyChooseUsPage() {
  return (
    <PageTransition>
      <div className="pt-32 md:pt-40 bg-[#0f0f0f] min-h-screen text-white">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
            alt="Why Choose Us Hero"
            className="w-full h-full object-cover grayscale opacity-40"
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
              Why Choose <span className="text-indigo-500">Krishna Fast</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Reliable, safe, and professional relocation services you can trust.
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
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 group relative">
              <img
                src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1000"
                alt="Professional Movers"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 p-8 rounded-[2rem] shadow-2xl hidden sm:block">
              <Star className="text-white mb-2" size={32} />
              <div className="text-2xl font-bold text-white">Top Rated</div>
              <div className="text-indigo-200 text-sm">Packers & Movers</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Introduction</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">
              Your Trusted Partner in <br />
              <span className="text-indigo-400">Seamless Relocation</span>
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Krishna Fast Packers And Movers is known for providing <span className="text-white font-semibold">reliable, safe, and professional relocation services</span> across Agra and major cities in India.
              </p>
              <p>
                With over <span className="text-white font-semibold">15 years of experience</span>, our team understands the importance of careful packing, secure transportation, and timely delivery.
              </p>
              <p>
                We focus on <span className="text-white font-semibold">customer satisfaction, safety, transparency, and professional service</span>, ensuring that every relocation is smooth and stress-free.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-24 bg-white/5">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Our Features</h2>
          <h3 className="text-4xl font-bold">What Makes Us <span className="text-indigo-400">Different</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <feature.icon className="text-white" size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-900/50 border border-white/10 rounded-[3rem] p-12">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                      <stat.icon className="text-indigo-400" size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Experience</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">
              Trusted by <span className="text-indigo-400">Thousands of Families</span>
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                With our strong network, trained staff, and modern logistics practices, we ensure safe and timely relocation services for households and businesses.
              </p>
              <p>
                From packing and loading to transportation and unpacking, our team ensures that every step is handled with care and precision.
              </p>
              <p>
                We also provide insurance services to protect your valuable goods and ensure peace of mind during transit.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-24 bg-white/5">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Customer Satisfaction</h2>
          <h3 className="text-4xl font-bold">What Our <span className="text-indigo-400">Customers Say</span></h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Reliable Service', desc: 'They handled our household goods with great care and professionalism. The team was punctual and efficient.' },
              { title: 'Professional Team', desc: 'The staff was courteous and helpful throughout. Packing and moving were done without any damage.' },
              { title: 'Safe Transport', desc: 'Delivered on time with proper handling and packaging. Highly recommended for relocation services.' },
              { title: 'Great Experience', desc: 'Affordable pricing and safe delivery. The entire process was hassle-free and smooth.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#1a1a1a] border border-white/10 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Star className="text-yellow-500 fill-yellow-500" size={18} />
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      </div>
    </PageTransition>
  );
}
