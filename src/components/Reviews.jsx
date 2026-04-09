import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../data/data';

const Reviews = () => {
  return (
    <section className="py-24 bg-premium-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">Testimonials</h2>
          <h3 className="text-4xl font-serif">What Our Customers Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-10 premium-shadow">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < review.rating ? 'text-black fill-black' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-lg font-light italic mb-8 leading-relaxed">"{review.comment}"</p>
              <div className="border-t pt-6">
                <p className="font-bold uppercase tracking-widest text-sm">{review.name}</p>
                <p className="text-xs text-gray-400 mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
