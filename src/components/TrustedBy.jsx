import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { 
    name: 'HDFC Bank', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png' 
  },
  { 
    name: 'ICICI Bank', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png' 
  },
  { 
    name: 'Airtel', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Airtel_logo-01.svg/2560px-Airtel_logo-01.svg.png' 
  },
  { 
    name: 'Tata', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2560px-Tata_logo.svg.png' 
  },
  { 
    name: 'Reliance', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png' 
  },
  { 
    name: 'Infosys', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png' 
  },
  { 
    name: 'Wipro', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png' 
  },
  { 
    name: 'Amazon', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' 
  },
  { 
    name: 'Flipkart', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/1200px-Flipkart_logo.svg.png' 
  },
  { 
    name: 'L&T', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Larsen_%26_Toubro_logo.svg/2560px-Larsen_%26_Toubro_logo.svg.png' 
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
