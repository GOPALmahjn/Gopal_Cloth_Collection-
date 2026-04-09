import React from 'react';
import { categories } from '../data/data';
import { motion } from 'framer-motion';

const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-premium-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">Explore</h2>
        <h3 className="text-4xl font-serif">Shop by Category</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto overflow-hidden">
        {categories.map((cat, index) => (
          <motion.a
            key={cat.name}
            href={cat.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-[500px] overflow-hidden"
          >
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center text-white">
              <h4 className="text-4xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{cat.name}</h4>
              <span className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-white pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Collection</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
