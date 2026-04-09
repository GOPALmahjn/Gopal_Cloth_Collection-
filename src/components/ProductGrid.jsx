import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/data';

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Men', 'Women', 'Kids'];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">Our Collection</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Curated Just For You</h3>
          </div>
          
          <div className="flex space-x-6 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all border-b-2 py-2 ${
                  activeCategory === cat ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
