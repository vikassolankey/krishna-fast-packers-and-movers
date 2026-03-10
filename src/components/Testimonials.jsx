import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Section from './Section';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Homeowner',
    text: 'Krishna Fast Packers made my move from Agra to Bangalore incredibly smooth. Their team was professional and handled my fragile items with great care.',
    rating: 5
  },
  {
    name: 'Priya Verma',
    role: 'Office Manager',
    text: 'Relocating our office was a huge task, but Satyapal ji and his team managed it perfectly. Everything was set up in the new location within 24 hours.',
    rating: 5
  },
  {
    name: 'Amit Gupta',
    role: 'Car Owner',
    text: 'I was worried about my car transport, but they used a specialized carrier and delivered it without a single scratch. Highly recommended!',
    rating: 5
  },
  {
    name: 'Sneha Patel',
    role: 'Homeowner',
    text: 'Packing quality was excellent and delivery was on time. The team was polite and helpful throughout.',
    rating: 5
  },
  {
    name: 'Vikas Mehta',
    role: 'Business Owner',
    text: 'They moved our office furniture and systems with care. Zero damage and quick setup.',
    rating: 5
  },
  {
    name: 'Ankita Roy',
    role: 'Student',
    text: 'Shifted from hostel to PG without any hassle. Transparent pricing and responsive support.',
    rating: 5
  },
  {
    name: 'Manoj Kumar',
    role: 'Car Owner',
    text: 'Car transport was handled professionally. Tracking and delivery updates were timely.',
    rating: 5
  },
  {
    name: 'Deepika Singh',
    role: 'HR Lead',
    text: 'Company relocation was smooth. The team coordinated perfectly and ensured deadlines were met.',
    rating: 5
  }
];

export default function Testimonials() {
  const full = testimonials;
  const marquee = [...full, ...full];
  return (
    <Section className="py-24 bg-indigo-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-white">Customer Satisfaction</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our priority is delivering reliable and stress-free relocation services. We believe in building long-term relationships through trust.
          </p>
        </div>

        <div className="grid md:hidden gap-8">
          {full.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-8 bg-slate-900/50 border border-white/10 rounded-[2.5rem] relative backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-8 text-indigo-500/20" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i2) => (
                  <Star key={i2} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div>
                <div className="text-white font-bold">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block overflow-hidden">
          <motion.div
            className="flex gap-8 will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content' }}
          >
            {marquee.map((t, idx) => (
              <motion.div
                key={`${t.name}-${idx}`}
                className="w-[28rem] flex-none p-8 bg-slate-900/50 border border-white/10 rounded-[2.5rem] relative backdrop-blur-sm"
              >
                <Quote className="absolute top-6 right-8 text-indigo-500/20" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i2) => (
                    <Star key={i2} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
