import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  ChevronRight, Home, CheckCircle2, 
  MessageSquare, User, PhoneCall, 
  MapPinned, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    from: '',
    to: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        phone: '',
        email: '',
        from: '',
        to: '',
        date: '',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-indigo-400" size={24} />,
      title: "Phone",
      details: ["+91 63972 37594"],
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <Mail className="text-indigo-400" size={24} />,
      title: "Email",
      details: [
        "Krishnafastpackersandmovers@gmail.com",
        "Info@krishnafastpackersandmovers.co.in"
      ],
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <MapPin className="text-indigo-400" size={24} />,
      title: "Address",
      details: [
        "Plot No. 20 Ground Floor, Khasra No. 57 & 58",
        "Nearby Kala Shrinkhala, Neelkanth Enclave Phase II",
        "Mauza Sikandra, Sunari, Agra, UP 282007"
      ],
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <Clock className="text-indigo-400" size={24} />,
      title: "Working Hours",
      details: ["Monday – Sunday", "8:00 AM – 8:00 PM"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <PageTransition>
      <div className="bg-[#0f0f0f] min-h-screen text-white">
        
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920" 
              alt="Moving truck on highway" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0f0f0f]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8"
            >
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home size={14} />
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-indigo-400">Contact</span>
            </motion.nav>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Krishna Fast</span> Packers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
            >
              Get in touch with us for reliable and professional relocation services in Agra and across India.
            </motion.p>
          </div>
        </section>

        <Section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={info.image} 
                    alt={info.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section className="py-24 bg-[#0a0a0a]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[800px] group"
            >
              <img 
                src="/gallery/about-card.jpeg" 
                alt="Movers packing household items" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-2">Professional Packing</h3>
                  <p className="text-gray-300">We use high-quality materials to ensure your belongings are safe during transit.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] -z-10" />
              
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Inquiry</h2>
                <p className="text-gray-400">Fill out the form below and our team will get back to you with a free quote.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                    <div className="relative group">
                      <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Moving From</label>
                    <div className="relative group">
                      <MapPinned className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="City, State"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                        value={formState.from}
                        onChange={(e) => setFormState({...formState, from: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Moving To</label>
                    <div className="relative group">
                      <MapPinned className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="City, State"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                        value={formState.to}
                        onChange={(e) => setFormState({...formState, to: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Moving Date</label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                    <input 
                      required
                      type="date" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                      value={formState.date}
                      onChange={(e) => setFormState({...formState, date: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-6 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-4 rounded-xl border border-emerald-400/20"
                  >
                    <CheckCircle2 size={18} />
                    <span>Thank you! Your inquiry has been sent successfully.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </Section>

        <section className="relative py-24">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" 
              alt="Transport truck" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Location</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 h-[500px]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.962450334814!2d77.93664367546312!3d27.219846676465493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477685603a789%3A0x7c7c7c7c7c7c7c7c!2sSikandra%2C%20Agra%2C%20Uttar%20Pradesh%20282007!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Krishna Fast Packers And Movers Location"
              ></iframe>
            </motion.div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920" 
              alt="Moving truck on road" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-indigo-900/80 backdrop-blur-sm" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Need Professional Packers And Movers in Agra?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto"
            >
              Krishna Fast Packers And Movers provides safe, reliable, and affordable relocation services.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a 
                href="tel:+916397237594"
                className="px-10 py-5 bg-white text-indigo-900 font-bold rounded-2xl shadow-xl hover:bg-indigo-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Get Free Quote
              </button>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
