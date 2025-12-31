
import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A192F] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter">WARD</span>
                <span className="text-[9px] font-bold text-blue-300/60 tracking-[0.2em] uppercase">Smart Access & IT</span>
              </div>
            </div>
            <p className="text-blue-100/60 text-sm leading-relaxed mb-8 max-w-xs">
              Pioneering intelligent security and seamless IT solutions for the modern Ethiopian home and enterprise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-xl bg-blue-900/50 hover:bg-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-xl bg-blue-900/50 hover:bg-blue-600 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="mailto:info@wardsmart.com" className="p-3 rounded-xl bg-blue-900/50 hover:bg-blue-600 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-blue-400 mb-8">Solutions</h4>
            <ul className="space-y-4 text-blue-100/60 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Residential Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise IT Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Hotel Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-blue-400 mb-8">Quick Access</h4>
            <ul className="space-y-4 text-blue-100/60 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Request a Quote</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ecosystem Advisor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-blue-400 mb-8">Contact Us</h4>
            <ul className="space-y-6 text-blue-100/60 text-sm">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-widest">+251 912 009497</span>
                  <span className="text-[10px] uppercase">Available 24/7</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-widest uppercase">Addis Ababa, Ethiopia</span>
                  <span className="text-[10px] uppercase">Bole Subcity, Area 02</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2024 Ward Smart Access & IT Solutions. Designed for Addis Ababa.
          </p>
          <div className="flex gap-8 text-blue-100/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span>Empowering Smart Living</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
