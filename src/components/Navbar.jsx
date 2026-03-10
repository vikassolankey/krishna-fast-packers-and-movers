import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Why Us', href: '/why-choose-us' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Videos', href: '/videos' },
  { name: 'Contact', href: '/contact' },
];

const PinterestIcon = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.49 2 2 6.32 2 11.6c0 3.96 2.53 7.34 6.1 8.56-.08-.72-.16-1.83.03-2.62.18-.76 1.16-4.88 1.16-4.88s-.29-.58-.29-1.44c0-1.35.78-2.36 1.75-2.36.83 0 1.23.62 1.23 1.36 0 .83-.53 2.07-.81 3.22-.23.94.5 1.71 1.48 1.71 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.73-4.08-4.2-4.08-2.86 0-4.54 2.14-4.54 4.35 0 .86.33 1.78.75 2.28.08.1.09.19.07.29-.07.32-.24 1.02-.27 1.16-.04.13-.14.18-.26.11-1-.49-1.63-2.03-1.63-3.27 0-2.66 1.93-5.1 5.57-5.1 2.93 0 5.22 2.09 5.22 4.9 0 2.92-1.84 5.27-4.4 5.27-.86 0-1.68-.45-1.96-.98l-.53 2.02c-.19.73-.71 1.65-1.06 2.21.8.25 1.65.39 2.53.39 5.51 0 10-4.32 10-9.6S17.51 2 12 2z" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return false;
    return location.pathname === href;
  };

  return (
    <nav
      className={cn(
        'fixed top-9 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-black/60 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/gallery/logo.png"
              alt="Company Logo"
              className="h-16 md:h-25 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              const isExternal = link.href.startsWith('/#');
              
              const content = (
                <span className="relative py-1">
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: active ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {active && (
                    <motion.span
                      layoutId="activeGlow"
                      className="absolute -inset-x-2 -inset-y-1 bg-indigo-500/10 blur-md rounded-lg -z-10"
                    />
                  )}
                </span>
              );

              if (isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "transition-colors text-sm font-medium",
                      active ? "text-indigo-400" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {content}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "transition-colors text-sm font-medium",
                    active ? "text-indigo-400" : "text-gray-300 hover:text-white"
                  )}
                >
                  {content}
                </Link>
              );
            })}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-gray-300 hover:text-white transition-colors">
                <PinterestIcon size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                const isExternal = link.href.startsWith('/#');
                
                if (isExternal) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block text-lg font-medium transition-all",
                        active ? "text-indigo-400 translate-x-2" : "text-gray-300 hover:text-white hover:translate-x-2"
                      )}
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block text-lg font-medium transition-all",
                      active ? "text-indigo-400 translate-x-2" : "text-gray-300 hover:text-white hover:translate-x-2"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" aria-label="Pinterest" className="text-gray-300 hover:text-white transition-colors">
                  <PinterestIcon size={20} />
                </a>
                <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
