
import React, { useState } from 'react';
import { PRODUCTS } from '../constants.ts';
import { ChevronRight, ExternalLink } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Smart Locks', 'Sensors', 'Hubs'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs block mb-4">Ward Access Collection</span>
            <h2 className="text-5xl font-black text-blue-900 mb-6 tracking-tighter uppercase">Intelligent Hardware.</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We specialize in retrofit and replacement smart access solutions that integrate seamlessly with your existing IT infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-blue-900 text-white shadow-xl shadow-blue-200' 
                  : 'bg-gray-50 text-gray-400 hover:text-blue-900 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col md:flex-row bg-gray-50 rounded-[2.5rem] overflow-hidden hover:bg-blue-50 transition-all duration-500 border border-gray-100">
              <div className="md:w-1/2 overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                />
              </div>

              <div className="md:w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">{product.category}</span>
                    <span className="text-lg font-black text-blue-900">${product.price}</span>
                  </div>
                  <h3 className="text-3xl font-black text-blue-900 mb-4 tracking-tighter leading-tight uppercase">{product.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{product.description}</p>
                  
                  <ul className="space-y-3 mb-10">
                    {product.features.map(f => (
                      <li key={f} className="flex items-center text-xs font-bold text-gray-600 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-8 py-4 bg-blue-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center uppercase tracking-widest text-[10px]">
                    Technical Specs <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                  <button className="p-4 rounded-2xl border border-blue-100 text-blue-900 hover:bg-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
