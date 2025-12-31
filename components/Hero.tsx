
import React from 'react';
import { ArrowRight, Smartphone, Key, Lock, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-[250px]"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-[200px]"></div>
        <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-24 sm:py-32 lg:py-40 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-pink-500/50 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-2" /> Ethiopia's Premier Access Partner
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[1] mb-8">
              ACCESS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse">REIMAGINED.</span>
            </h1>
            
            <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-80">
              Ward Smart Access & IT Solutions brings European-grade smart security to Addis Ababa. Retrofit your existing door with Nuki-inspired technology.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#/advisor"
                className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
              >
                Get Free Consultation
              </a>
              <a
                href="#/products"
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View Products
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-[100px] opacity-30"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-[3rem] shadow-2xl border border-white/20 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200"
                alt="Ward Retrofit Smart Lock"
                className="rounded-[2.5rem] w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-3xl shadow-xl text-purple-900 hidden md:block border border-white/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-black uppercase tracking-widest text-[10px]">Auto-Unlock Enabled</span>
                </div>
                <p className="text-xs text-purple-800 font-medium">Hands-free entry for your home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
