
import React, { useState } from 'react';
import { Menu, X, User, Search, ShieldCheck } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants.ts';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.location.hash = '/'}>
            <div className="relative">
              <ShieldCheck className="w-8 h-8 text-purple-600 group-hover:text-pink-500 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent uppercase">WARD</span>
              <span className="text-[8px] font-bold text-gray-500 tracking-[0.2em] uppercase">Smart Access & IT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-400 hover:text-pink-500 transition-colors"><Search className="w-5 h-5" /></button>
            <a href="tel:+251912009497" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Consult Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-white/20 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-5 text-sm font-black text-gray-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:bg-white/50 uppercase tracking-widest border-b border-gray-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
               <a href="tel:+251912009497" className="block w-full text-center py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:from-pink-600 hover:to-purple-700 transition-all">Call Support</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
