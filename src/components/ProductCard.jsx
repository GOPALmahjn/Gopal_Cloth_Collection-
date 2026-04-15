import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=Hi, I am interested in ordering the ${product.name} (ID: ${product.id}) for ₹${product.price}.`;

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'; // Placeholder image
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white premium-shadow premium-shadow-hover transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            Order on WhatsApp <ExternalLink size={14} className="ml-2" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1 font-bold">{product.category}</p>
        <h3 className="text-lg font-medium mb-2 group-hover:text-gray-600 transition-colors">{product.name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold font-serif">₹{product.price}</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-600 transition-colors">
            <ShoppingCart size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
