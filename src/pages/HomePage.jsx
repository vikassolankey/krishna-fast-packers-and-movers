import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Achievements from '../components/Achievements';
import TrustedBy from '../components/TrustedBy';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import OurTeam from '../components/OurTeam';

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Achievements />
        <OurTeam />
        <TrustedBy />
        <Testimonials />
        <Contact />
      </main>
    </PageTransition>
  );
}
