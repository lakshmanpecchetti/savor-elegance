
import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! We will contact you soon.');
  };
  
  return (
    <section id="contact" className="section-padding bg-restaurant-dark relative">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <span className="text-restaurant-gold uppercase tracking-wider font-medium mb-2 inline-block">
            Get In Touch
          </span>
          <h2 className="heading-lg text-white mb-4">Contact Us</h2>
          <div className="divider"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-restaurant-gold text-restaurant-dark font-semibold py-3 rounded-md hover:bg-restaurant-gold/90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Map & Contact Info */}
          <div className="flex flex-col">
            {/* Map */}
            <div className="h-64 md:h-80 mb-8 rounded-xl overflow-hidden shadow-lg reveal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9877!3d40.7237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzI1LjMiTiA3M8KwNTknMTUuNyJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </div>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg flex items-start gap-4 reveal">
                <div className="bg-restaurant-gold rounded-full p-3 flex-shrink-0">
                  <MapPin className="text-restaurant-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-white/80">
                    123 Gourmet Avenue <br />
                    Culinary District <br />
                    New York, NY 10012
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg flex items-start gap-4 reveal">
                <div className="bg-restaurant-gold rounded-full p-3 flex-shrink-0">
                  <Clock className="text-restaurant-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Opening Hours</h3>
                  <p className="text-white/80">
                    Monday - Friday <br />
                    12:00 PM - 10:00 PM <br />
                    Weekends: 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg flex items-start gap-4 reveal">
                <div className="bg-restaurant-gold rounded-full p-3 flex-shrink-0">
                  <Phone className="text-restaurant-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-white/80">
                    <a href="tel:+1234567890" className="hover:text-restaurant-gold transition-colors">
                      +1 (234) 567-890
                    </a>
                    <br />
                    <a href="tel:+1234567891" className="hover:text-restaurant-gold transition-colors">
                      +1 (234) 567-891
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg flex items-start gap-4 reveal">
                <div className="bg-restaurant-gold rounded-full p-3 flex-shrink-0">
                  <Mail className="text-restaurant-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-white/80">
                    <a href="mailto:info@thindhamra.com" className="hover:text-restaurant-gold transition-colors">
                      info@thindhamra.com
                    </a>
                    <br />
                    <a href="mailto:reservations@thindhamra.com" className="hover:text-restaurant-gold transition-colors">
                      reservations@thindhamra.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
