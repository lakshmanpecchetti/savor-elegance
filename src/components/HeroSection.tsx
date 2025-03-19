
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CalendarDays, UtensilsCrossed } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-chef-seasoning-vegetables-and-meat-33650-large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center container-padding mx-auto">
        <h1 className="text-white heading-xl mb-4 animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          THINDHAM <span className="text-restaurant-gold">RA</span>
        </h1>
        
        <div className="w-36 h-0.5 bg-restaurant-gold mb-8 animate-scale-in opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}></div>
        
        <h2 className="text-white text-2xl md:text-3xl font-light mb-8 max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
          A Paradise for Meat Lovers - Indulge in a Non-Veg Feast Like Never Before
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
          <a href="#menu" className="btn-primary flex items-center justify-center gap-2">
            <UtensilsCrossed size={18} />
            <span>Explore Menu</span>
          </a>
          
          <a href="#reservations" className="btn-secondary flex items-center justify-center gap-2">
            <CalendarDays size={18} />
            <span>Reserve a Table</span>
          </a>
          
          <a href="#order" className="btn-outline flex items-center justify-center gap-2">
            <span>Order Online</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-0.5 h-8 bg-white/50 relative">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
