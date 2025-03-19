
import React from 'react';
import { ArrowRight, Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-restaurant-dark relative pt-20 pb-8">
      {/* Footer pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-restaurant-gold rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-restaurant-burgundy rounded-full"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div>
            <h3 className="text-white font-playfair text-2xl font-bold mb-6">
              THINDHAM <span className="text-restaurant-gold">RA</span>
            </h3>
            <p className="text-white/70 mb-6">
              Experience the ultimate celebration of non-vegetarian cuisine, where tradition meets innovation
              in an atmosphere of refined elegance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-restaurant-gold transition-all duration-300 flex items-center justify-center text-white hover:text-restaurant-dark"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-restaurant-gold transition-all duration-300 flex items-center justify-center text-white hover:text-restaurant-dark"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-restaurant-gold transition-all duration-300 flex items-center justify-center text-white hover:text-restaurant-dark"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="flex-shrink-0 text-restaurant-gold mt-1" size={18} />
                <span>
                  123 Gourmet Avenue <br />
                  Culinary District <br />
                  New York, NY 10012
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="flex-shrink-0 text-restaurant-gold" size={18} />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="flex-shrink-0 text-restaurant-gold" size={18} />
                <a href="mailto:info@thindhamra.com" className="hover:text-white transition-colors">
                  info@thindhamra.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-restaurant-gold transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={14} />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-white/70">
                <span>Monday - Thursday</span>
                <span>12:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Friday</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Sunday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter (Disabled for now) */}
        {/*
        <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h4 className="text-white text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-white/70">
                Stay updated with our latest specials, events, and exclusive offers
              </p>
            </div>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-white/10 border border-white/20 rounded-l-md px-4 py-3 text-white placeholder-white/60 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-restaurant-gold text-restaurant-dark px-6 py-3 rounded-r-md hover:bg-restaurant-gold/90 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        */}
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            © {currentYear} THINDHAM RA. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
