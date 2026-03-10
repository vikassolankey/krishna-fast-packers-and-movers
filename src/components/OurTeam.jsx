import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Linkedin, Mail } from 'lucide-react';

const members = [
 
  {
    name: 'Amit Verma',
    role: 'Operations Manager',
    image: 'https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330516.jpg?w=2000',
    desc: 'Oversees daily moves, routing, and quality assurance pan-India.',
    linkedin: '#',
    email: 'mailto:Info@krishnafastpackersandmovers.co.in',
  },
  {
    name: 'Neha Sharma',
    role: 'Logistics Head',
    image: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/e7c33664-df4a-48df-9012-0fbc4f893541.png',
    desc: 'Optimizes transport networks and ensures on-time, safe deliveries.',
    linkedin: '#',
    email: 'mailto:Info@krishnafastpackersandmovers.co.in',
  },
  {
    name: 'Rahul Singh',
    role: 'Support Manager',
    image: 'https://img.freepik.com/premium-photo/face-young-man-with-beard_251136-25985.jpg?w=2000',
    desc: 'Drives support excellence and transparent communication with customers.',
    linkedin: '#',
    email: 'mailto:Info@krishnafastpackersandmovers.co.in',
  },
  {
    name: 'Priya Gupta',
    role: 'Customer Success Lead',
    image: 'https://tse3.mm.bing.net/th/id/OIP.NKUA2BtpRFcwd9xmCR3qKQHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.8&o=7&rm=3',
    desc: 'Ensures smooth experiences and swift resolutions for every customer.',
    linkedin: '#',
    email: 'mailto:Info@krishnafastpackersandmovers.co.in',
  },
  {
    name: 'Anita Mehra',
    role: 'Finance Manager',
    image: 'https://th.bing.com/th/id/R.9b382759bd5387d7d186c4848996f717?rik=wzC1zVZtU6qKcQ&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-023.jpg&ehk=Vis5IW%2bFUXttSO882w%2fjgR9jSw1ZSmnQYLOuMcwy5A0%3d&risl=&pid=ImgRaw&r=0',
    desc: 'Manages transparent billing, vendor coordination, and compliance.',
    linkedin: '#',
    email: 'mailto:Info@krishnafastpackersandmovers.co.in',
  },
  {
    name: 'Ritika Malhotra',
    role: 'HR Manager',
    image: 'https://i.pinimg.com/736x/0b/7c/f4/0b7cf4a74a7d6966ea0c274b46887421.jpg',
    desc: 'Builds skilled, reliable teams with continuous training and support.',
    linkedin: '#',
    email: 'mailto:Info@krishnafastpackersandmovers.co.in',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Marketing Lead',
    image: 'https://i.pinimg.com/736x/8c/11/dd/8c11dd4a7110a437722370c4663f80ec.jpg',
    desc: 'Communicates our values and services across digital channels.',
    linkedin: '#',
    email: 'mailto:Info@krishnafastpackersandmovers.co.in',
  },
];



const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurTeam() {
  const full = members;
  const marquee = [...full, ...full];
  return (
    <Section className="py-24 bg-[#020617] text-white" variant="fadeUp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our Team</h2>
          <p className="mt-4 text-gray-400">
            Meet the dedicated professionals behind our trusted relocation services.
          </p>
        </div>

        {/* Mobile/Tablet grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8"
        >
          {full.map((m) => (
            <motion.div
              key={m.name}
              variants={item}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl bg-white/5 border border-white/10 shadow-md hover:shadow-2xl transition-shadow transform-gpu hover:scale-105 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-indigo-400 mb-1">{m.role}</div>
                <h3 className="text-lg font-bold">{m.name}</h3>
                <p className="text-gray-400 text-sm mt-3">{m.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={m.linkedin}
                    aria-label="LinkedIn"
                    className="p-2 rounded-full border border-white/10 text-gray-300 hover:text-indigo-300 hover:border-indigo-300/40 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={m.email}
                    aria-label="Email"
                    className="p-2 rounded-full border border-white/10 text-gray-300 hover:text-emerald-300 hover:border-emerald-300/40 transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop horizontal floating carousel */}
        <div className="hidden lg:block overflow-hidden">
          <motion.div
            className="flex gap-6 will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content' }}
          >
            {marquee.map((m, idx) => (
              <motion.div
                key={`${m.name}-${idx}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: (idx % 6) * 0.15 }}
                className="w-72 flex-none rounded-2xl bg-white/5 border border-white/10 shadow-md hover:shadow-2xl transition-shadow transform-gpu hover:scale-105 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-indigo-400 mb-1">{m.role}</div>
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <p className="text-gray-400 text-sm mt-3">{m.desc}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={m.linkedin}
                      aria-label="LinkedIn"
                      className="p-2 rounded-full border border-white/10 text-gray-300 hover:text-indigo-300 hover:border-indigo-300/40 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={m.email}
                      aria-label="Email"
                      className="p-2 rounded-full border border-white/10 text-gray-300 hover:text-emerald-300 hover:border-emerald-300/40 transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
