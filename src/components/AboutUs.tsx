
import React from 'react';
import { useRevealOnScroll, useCountUp } from '@/lib/animations';
import { Award, Clock, Cook, Users } from 'lucide-react';

const AboutUs = () => {
  useRevealOnScroll();
  
  const statistics = [
    { id: 1, value: 15, label: "Years of Excellence", icon: Clock },
    { id: 2, value: 12, label: "Expert Chefs", icon: Cook },
    { id: 3, value: 35, label: "Signature Dishes", icon: Award },
    { id: 4, value: 15000, label: "Happy Customers", icon: Users },
  ];
  
  return (
    <section id="about-us" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-restaurant-burgundy rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-restaurant-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="reveal">
              <span className="text-restaurant-burgundy uppercase tracking-wider font-medium mb-2 inline-block">
                Our Story
              </span>
              <h2 className="heading-lg text-restaurant-dark mb-6">
                A Legacy of Authentic <span className="text-restaurant-burgundy">Flavors</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Founded in 2008, THINDHAM RA has been serving authentic non-vegetarian cuisine with a 
                commitment to quality and tradition. Our journey began with a simple vision: to create 
                a dining experience that honors time-tested recipes while embracing modern culinary innovation.
              </p>
              
              <p className="text-gray-700 mb-6">
                Led by our Executive Chef Rahul Sharma, our kitchen team sources the finest ingredients, 
                focusing on sustainable practices and authentic preparation methods that have been 
                perfected over generations.
              </p>
              
              <p className="text-gray-700 mb-8">
                Every dish at THINDHAM RA tells a story - of heritage, passion, and the joy of 
                bringing people together around exceptional food. We invite you to be part of 
                our continuing story as we celebrate the art of fine non-vegetarian cuisine.
              </p>
              
              <a href="#reservations" className="btn-primary inline-flex items-center gap-2">
                <span>Book Your Experience</span>
              </a>
            </div>
          </div>
          
          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-full">
            <div className="flex flex-col gap-4">
              <div className="rounded-lg overflow-hidden h-48 reveal">
                <img 
                  src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&q=80" 
                  alt="Restaurant Chef" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 reveal" style={{ animationDelay: '200ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-12">
              <div className="rounded-lg overflow-hidden h-64 reveal" style={{ animationDelay: '300ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1564436872-f6d81182df12?auto=format&fit=crop&q=80" 
                  alt="Signature Dish" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 reveal" style={{ animationDelay: '400ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&q=80" 
                  alt="Restaurant Ambiance" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center reveal">
          {statistics.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat }: { stat: { id: number; value: number; label: string; icon: React.ElementType } }) => {
  const { count, countRef } = useCountUp(stat.value);
  const Icon = stat.icon;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
      <div className="mx-auto w-12 h-12 flex items-center justify-center bg-restaurant-burgundy/10 text-restaurant-burgundy rounded-full mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-3xl font-bold text-restaurant-dark mb-1">
        <span ref={countRef}>{count}</span>
        {stat.id === 4 && "+"} {/* Add + sign only for "Happy Customers" */}
      </h3>
      <p className="text-gray-600">{stat.label}</p>
    </div>
  );
};

export default AboutUs;
