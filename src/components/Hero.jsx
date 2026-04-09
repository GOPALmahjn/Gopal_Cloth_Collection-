import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-premium-gray">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Fashion" 
          className="w-full h-full object-cover opacity-60 md:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-black text-white">
            New Collection 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Gopal Cloth <br />
            <span className="font-light italic">Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-premium-darkGray mb-10 leading-relaxed font-light">
            Trendy & Affordable Fashion. Define your style with our premium collection of apparel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#products" 
              className="px-10 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-all transform hover:-translate-y-1"
            >
              Shop Now
            </a>
            <a 
              href="#categories" 
              className="px-10 py-4 border border-black text-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all transform hover:-translate-y-1"
            >
              Explore Categories
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-[1px] h-16 bg-black"></div>
      </div>
    </section>
  );
};

export default Hero;
