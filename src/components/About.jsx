import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-premium-gray -z-10 hidden md:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
            alt="About Our Brand" 
            className="w-full h-[600px] object-cover shadow-2xl"
          />
        </div>
        
        <div className="flex-1 space-y-8">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight">Gopal Cloth Collection</h3>
          <p className="text-lg text-premium-darkGray font-light leading-relaxed">
            Founded with a vision to make premium fashion accessible to everyone, Gopal Cloth Collection brings you the perfect blend of trend-setting designs and unmatched comfort.
          </p>
          <p className="text-lg text-premium-darkGray font-light leading-relaxed">
            We believe that quality shouldn't come at a premium price. Every piece in our collection is carefully selected for its fabric quality, durability, and style, ensuring you look your best without breaking the bank.
          </p>
          <div className="pt-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-3xl mb-2">10k+</h4>
              <p className="text-sm uppercase tracking-widest text-gray-500">Happy Customers</p>
            </div>
            <div>
              <h4 className="font-serif text-3xl mb-2">500+</h4>
              <p className="text-sm uppercase tracking-widest text-gray-500">Unique Designs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
