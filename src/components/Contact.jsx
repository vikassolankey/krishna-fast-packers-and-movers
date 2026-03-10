import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, User, Send } from 'lucide-react';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                  <User className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-1">Owner</div>
                  <div className="text-white font-bold text-lg">Shri Satyapal Singh</div>
                  <div className="text-gray-500 text-sm">S/o Shri Mahatab Singh</div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                  <Phone className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-1">Phone</div>
                  <a href="tel:+916397237594" className="text-white font-bold text-lg hover:text-indigo-400 transition-colors">+91 63972 37594</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                  <Mail className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-1">Emails</div>
                  <div className="space-y-1">
                    <a href="mailto:Krishnafastpackersandmovers@gmail.com" className="block text-white font-bold hover:text-indigo-400 transition-colors">Krishnafastpackersandmovers@gmail.com</a>
                    <a href="mailto:Info@krishnafastpackersandmovers.co.in" className="block text-white font-bold hover:text-indigo-400 transition-colors">Info@krishnafastpackersandmovers.co.in</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                  <MapPin className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-1">Address</div>
                  <p className="text-white font-bold leading-relaxed">
                    Plot No. 20 Ground Floor, Khasra No. 57 & 58, <br />
                    Nearby Kala Shrinkhala, Neelkanth Enclave Phase II, <br />
                    Mauza Skiandra, Sunari, Agra, UP 282007
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[3rem] backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="Inquiry about shifting"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-20 h-[400px] w-full bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.123456789!2d77.9!3d27.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEyJzAwLjAiTiA3N8KwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
