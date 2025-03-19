
import React, { useEffect, useState } from 'react';
import { Menu, Phone, Facebook, Instagram, Twitter, X, MapPin, Clock, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Quick Links Bar */}
      <div className="bg-restaurant-dark text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-restaurant-gold" />
              <span>123 Gourmet Street, Foodville</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-restaurant-gold" />
              <span>Open: 11:00 AM - 11:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#reservations" className="flex items-center gap-2 hover:text-restaurant-gold transition-colors">
              <CalendarDays size={16} />
              <span>Book a Table</span>
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-restaurant-gold transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-restaurant-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-restaurant-gold transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
          isScrolled 
            ? 'bg-restaurant-dark py-3 shadow-lg' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="text-white font-playfair text-2xl font-bold">
              THINDHAM <span className="text-restaurant-gold">RA</span>
            </h1>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white hover:text-restaurant-gold transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <a
              href="tel:+1234567890"
              className="bg-restaurant-burgundy text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-restaurant-burgundy/90 transition-all duration-300"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-restaurant-dark pt-20 px-4 z-40 flex flex-col transition-transform duration-300 ease-in-out lg:hidden',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Quick Links for Mobile */}
          <div className="mb-6 border-b border-gray-800 pb-4">
            <div className="flex items-center gap-2 mb-3 text-restaurant-gold">
              <MapPin size={16} />
              <span className="text-white">123 Gourmet Street, Foodville</span>
            </div>
            <div className="flex items-center gap-2 mb-3 text-restaurant-gold">
              <Clock size={16} />
              <span className="text-white">Open: 11:00 AM - 11:00 PM</span>
            </div>
            <a href="#reservations" className="flex items-center gap-2 text-restaurant-gold mb-3" onClick={() => setIsMobileMenuOpen(false)}>
              <CalendarDays size={16} />
              <span className="text-white">Book a Table</span>
            </a>
          </div>

          <ul className="flex flex-col gap-4">
            {['Home', 'Menu', 'About Us', 'Gallery', 'Reservations', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:text-restaurant-gold transition-colors duration-300 text-lg block py-2 border-b border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 flex items-center justify-center gap-6">
            <a href="#" className="text-white hover:text-restaurant-gold transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-restaurant-gold transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-restaurant-gold transition-colors">
              <Twitter size={24} />
            </a>
          </div>
          
          <a
            href="tel:+1234567890"
            className="mt-8 bg-restaurant-burgundy text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-restaurant-burgundy/90 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
