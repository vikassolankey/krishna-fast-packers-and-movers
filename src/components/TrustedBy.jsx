import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { 
    name: 'HDFC Bank', 
    logo: 'https://tse1.mm.bing.net/th/id/OIP.JpDAuqFwMnLpEsa5WC3oLwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' 
  },
  { 
    name: 'ICICI Bank', 
    logo: 'https://tse2.mm.bing.net/th/id/OIP.pyUxWJpuHg1ocwHwTpzZcQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' 
  },
  { 
    name: 'Airtel', 
    logo: 'https://logosmarcas.net/wp-content/uploads/2020/11/Airtel-Emblema.png' 
  },
  { 
    name: 'Tata', 
    logo: 'https://tse1.mm.bing.net/th/id/OIP.qLfV9-PrqUwDgnDiP3JWVgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' 
  },
  { 
    name: 'Reliance', 
    logo: 'https://www.bing.com/th/id/OIP.rEn37xmKgjiNOYyReG2yAwHaEq?w=293&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2' 
  },
  { 
    name: 'Infosys', 
    logo: 'https://www.bing.com/th/id/OIP.b_ltADk6UB3og4_tMo4ivwHaHa?w=168&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2' 
  },
  { 
    name: 'Wipro', 
    logo: 'https://www.bing.com/th/id/OIP.YjODjDA0O2rDqD_LQUzKDgHaEK?w=231&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2' 
  },
  { 
    name: 'Amazon', 
    logo: 'https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=184&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2' 
  },
  { 
    name: 'Flipkart', 
    logo: 'https://www.bing.com/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAHaEK?w=302&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2' 
  },
  { 
    name: 'L&T', 
    logo: 'data:image/webp;base64,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' 
  },
];

const duplicatedCompanies = [...companies, ...companies];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-[#0f0f0f] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Trusted by Leading Companies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Proudly associated with <span className="text-indigo-400 font-semibold">10+ companies</span> who trust us for relocation and transport needs.
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 py-4"
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="flex-shrink-0 flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="w-24 h-12 flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter grayscale brightness-200 contrast-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-white font-semibold whitespace-nowrap tracking-wide">
                  {company.name}
                </span>
                
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
