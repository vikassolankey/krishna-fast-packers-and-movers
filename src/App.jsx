import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import GalleryPage from './pages/GalleryPage';
import VideosPage from './pages/VideosPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoModalOpen(true);
    }, 2000);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (e) => {
      const target = e.target;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const isHomePage = window.location.pathname === '/';
        if (isHomePage) {
          e.preventDefault();
          const element = document.querySelector(anchor.hash);
          if (element) {
            lenis.scrollTo(element, {
              offset: -80,
              duration: 1.5,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-white selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
        <BookingModal isOpen={isAutoModalOpen} onClose={() => setIsAutoModalOpen(false)} />
        <TopBar />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[100] origin-left"
          style={{ scaleX }}
        />
        <Background3D />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
