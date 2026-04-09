import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Categories from './components/Categories';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <About />
        <Reviews />
        <Contact />
      </main>
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-serif tracking-tighter mb-4">GOPAL CLOTH</h2>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Your destination for premium fashion and seasonal collections. Elevating your style since 1995.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-8 text-sm font-medium tracking-widest uppercase">
              <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-gray-400 transition-colors">Shop</a>
              <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            </div>
            <p className="text-xs text-gray-500 font-mono mt-4">
              © {new Date().getFullYear()} GOPAL CLOTH COLLECTION. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
