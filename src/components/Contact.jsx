import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">Connect With Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Visit Our Store or Shop Online</h3>
            <p className="text-lg text-premium-darkGray font-light mb-12">
              Have questions about our collection or need help with your order? Our team is always here to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-premium-gray rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Call Us</h4>
                  <p className="text-lg font-light">+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-premium-gray rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">WhatsApp</h4>
                  <a href="https://wa.me/91XXXXXXXXXX" className="text-lg font-light hover:text-green-600 transition-colors">Order via WhatsApp</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-premium-gray rounded-full mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Store Location</h4>
                  <p className="text-lg font-light">123 Fashion Street, Main Market, City Name, State - 110001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-premium-gray p-8 md:p-12">
            <h4 className="text-2xl font-serif mb-8">Send us a Message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-white border-none px-4 py-4 text-sm focus:ring-2 focus:ring-black transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-white border-none px-4 py-4 text-sm focus:ring-2 focus:ring-black transition-all" placeholder="Your Email" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                <textarea rows="4" className="w-full bg-white border-none px-4 py-4 text-sm focus:ring-2 focus:ring-black transition-all" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-black text-white text-sm font-bold uppercase tracking-widest py-4 hover:bg-gray-900 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
