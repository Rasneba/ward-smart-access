import React from 'react';
import { GALLERY_IMAGES } from '../constants.ts';
import { MapPin, Camera, Sparkles } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Header */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-40 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-[200px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-[200px] opacity-15"></div>
          <div className="absolute top-1/4 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-[150px] opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-pink-500/30 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 text-[10px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-2" /> Recent Works Archive
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            SECURITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse">IN MOTION.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Witness the transformation of access across Addis Ababa. Our portfolio showcases the seamless integration of European-standard hardware within Ethiopia's most prestigious environments.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {GALLERY_IMAGES.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur flex items-center justify-center text-white shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <Camera className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-purple-600 mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">{item.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter uppercase leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-200 mt-auto">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Installation Date: 2023-2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Inquiry Section */}
          <div className="mt-32 p-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-[4rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Launch your project <br />with Ward today.</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  We specialize in custom hardware configurations for commercial buildings, hotel chains, and premium residential developments.
                </p>
              </div>
              <a 
                href="tel:+251912009497" 
                className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-3xl hover:from-pink-600 hover:to-purple-700 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/25 uppercase tracking-widest text-xs"
              >
                Free On-Site Assessment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;