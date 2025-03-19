
import React, { useEffect } from 'react';
import { useRevealOnScroll } from '@/lib/animations';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedDishes from '@/components/FeaturedDishes';
import AboutUs from '@/components/AboutUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useRevealOnScroll();
  
  useEffect(() => {
    // Initialize reveal on first load
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add('active');
      }
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedDishes />
      <AboutUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
