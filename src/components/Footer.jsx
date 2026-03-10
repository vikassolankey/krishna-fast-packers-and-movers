import React, { useEffect, useState } from 'react';
import { Home, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, Twitter, Info, Image as ImageIcon, Play, Truck, Car, Bike, Dog, Package, ArrowUpCircle } from 'lucide-react';

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const key = 'kfpm_visitor_count';
    const current = parseInt(localStorage.getItem(key) || '0', 10) + 1;
    localStorage.setItem(key, String(current));
    setVisits(current);
  }, []);
  
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;
    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line no-undef
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
        'google_translate_footer'
      );
    };
    const s = document.createElement('script');
    s.id = 'google-translate-script';
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <footer className="py-16 border-t border-white/10 relative bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="/gallery/logo.png"
              alt="Company Logo"
              className="h-20 w-auto mb-4 object-contain"
            />
            <p className="text-gray-400 leading-relaxed">
              Krishna Fast Packers & Movers is your trusted relocation partner across India. We specialize in safe, reliable, and affordable shifting services for homes, offices, and vehicles.
            </p>
            <div className="mt-5 text-xs text-gray-500 space-y-1">
              <div>ISO Certified Company</div>
            </div>
            <div className="mt-6">
              <div className="text-sm font-semibold text-gray-300 mb-2">Select Language</div>
              <div id="google_translate_footer" className="inline-block bg-white/5 border border-white/10 rounded-xl px-3 py-2"></div>
            </div>
          </div>

          <div>
            <div className="text-2xl font-extrabold text-yellow-400 mb-4">Quick Links</div>
            <ul className="space-y-3 text-gray-300">
              {[
                { label: 'Home', href: '/', Icon: Home },
                { label: 'About Us', href: '/about', Icon: Info },
                { label: 'Services', href: '/services', Icon: Package },
                { label: 'Why Us', href: '/why-choose-us', Icon: ArrowUpCircle },
                { label: 'Gallery', href: '/gallery', Icon: ImageIcon },
                { label: 'Videos', href: '/videos', Icon: Play },
                { label: 'Contact Us', href: '/contact', Icon: Phone }
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-2 hover:text-white transition-colors">
                    <Icon size={16} />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
                <div className="mb-3 mt-4">
            Visitor Count: <span className="font-semibold text-yellow-400">{visits.toLocaleString()}</span>
          </div>
          </div>

          <div>
            <div className="text-2xl font-extrabold text-yellow-400 mb-4">Our Services</div>
            <ul className="space-y-3 text-gray-300">
              {[
                { label: 'Relocation Service', Icon: Package },
                { label: 'Household Shifting Service', Icon: Home },
                { label: 'Shifting Service', Icon: ArrowUpCircle },
                { label: 'Transport Service', Icon: Truck },
                { label: 'Car Transport Service', Icon: Car },
                { label: 'Bike Transport Service', Icon: Bike },
                { label: 'Pet Transport Service', Icon: Dog }
              ].map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon size={16} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-2xl font-extrabold text-yellow-400 mb-4">Contact Info</div>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <div>
                  Plot No. 20 Ground Floor, Khasra No. 57 & 58<br />
                  Nearby Kala Shrinkhala, Neelkanth Enclave Phase II<br />
                  Mauza Sikandra, Sunari, Agra, UP 282007
                </div>
              </div>
              <a href="tel:+916397237594" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-yellow-400" />
                +91 63972 37594
              </a>
              <a href="mailto:Krishnafastpackersandmovers@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-yellow-400" />
                Krishnafastpackersandmovers@gmail.com
              </a>
              <a href="mailto:Info@krishnafastpackersandmovers.co.in" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-yellow-400" />
                Info@krishnafastpackersandmovers.co.in
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"><Instagram size={16} /></a>
                <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"><Facebook size={16} /></a>
                <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"><Linkedin size={16} /></a>
                <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"><Youtube size={16} /></a>
                <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"><Twitter size={16} /></a>
              </div>
            </div>
         
          </div>
        </div>

        <div className="my-8 border-t border-white/10" />

        <div className="text-center text-sm text-gray-400">
         
          <div className="text-gray-500">
            © {new Date().getFullYear()} Krishna Fast Packers And Movers. All rights reserved.
          </div>
          <div className="mt-1">
            Designed by{' '}
            <a
              href="https://www.webworldhub.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Web World Hub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
