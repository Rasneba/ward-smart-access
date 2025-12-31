import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProductGrid from './components/ProductGrid.tsx';
import SecurityAdvisor from './components/SecurityAdvisor.tsx';
import Gallery from './components/Gallery.tsx';
import RequestForm from './components/RequestForm.tsx';
import Footer from './components/Footer.tsx';
import { ShieldCheck, Phone, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { router } from './services/router.ts';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(router.getCurrentPath() || '');

  useEffect(() => {
    // Listen for route changes
    const unsubscribe = router.onChange((path) => {
      setCurrentPath(path);
      window.scrollTo(0, 0);
    });

    // Set initial path if not set
    if (!currentPath) {
      const initialPath = router.getCurrentPath();
      setCurrentPath(initialPath);
    }

    return unsubscribe;
  }, []);

  const renderContent = () => {
    // Normalize path for matching
    const path = currentPath.replace(/^\//, '');

    switch (path) {
      case 'products':
        return <ProductGrid />;
      case 'advisor':
        return <SecurityAdvisor />;
      case 'gallery':
        return <Gallery />;
      case 'request':
        return <RequestForm />;
      case 'it-solutions':
        return (
          <div className="py-40 bg-white px-4">
             <div className="max-w-7xl mx-auto">
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">IT Solutions</span>
                <h1 className="text-6xl font-black text-blue-900 mb-12 tracking-tighter uppercase">INFRASTRUCTURE <br />THAT PROTECTS.</h1>
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                      <Cpu className="w-12 h-12 text-blue-600 mb-8" />
                      <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Network Security</h3>
                      <p className="text-gray-500 leading-relaxed mb-8">Full enterprise network deployment for businesses in Addis Ababa. We secure your traffic as much as your doors.</p>
                      <button className="text-blue-600 font-bold uppercase tracking-widest text-xs flex items-center">Learn More <ArrowUpRight className="ml-2 w-4 h-4" /></button>
                   </div>
                   <div className="p-12 bg-[#0A192F] text-white rounded-[3rem]">
                      <Globe className="w-12 h-12 text-blue-400 mb-8" />
                      <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Cloud Integration</h3>
                      <p className="text-blue-100/60 leading-relaxed mb-8">Connect your smart access system to the global cloud with redundant backup systems ensuring 100% uptime.</p>
                      <button className="text-blue-400 font-bold uppercase tracking-widest text-xs flex items-center">Consultation <ArrowUpRight className="ml-2 w-4 h-4" /></button>
                   </div>
                </div>
             </div>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            
            {/* Split Theme Section */}
            <section className="bg-white py-32 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div className="relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                       <img 
                        src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-[600px] object-cover" 
                        alt="Modern Smart Access" 
                       />
                       <div className="absolute inset-0 bg-blue-900/10 hover:bg-transparent transition-all"></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Nuki Standard</span>
                    <h2 className="text-5xl font-black text-blue-900 mb-8 leading-[1.1] tracking-tighter uppercase">RETROFIT YOUR <br /> LIFE IN ADDIS.</h2>
                    <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                      Ward Smart Access is a specialist in non-invasive security. No drilling, no cable mess. Our Nuki-inspired retrofit locks are installed in minutes and controlled from anywhere.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8">
                       <div className="p-6 border border-gray-100 rounded-2xl">
                          <span className="text-3xl font-black text-blue-900 block mb-2">99%</span>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Door Compatibility</span>
                       </div>
                       <div className="p-6 border border-gray-100 rounded-2xl">
                          <span className="text-3xl font-black text-blue-900 block mb-2">0</span>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Structural Changes</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ProductGrid />
            
            {/* Dark Sky Blue Banner */}
            <section className="bg-[#0A192F] text-white py-32 relative overflow-hidden">
               <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[150px] opacity-10"></div>
               </div>
              <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <ShieldCheck className="w-16 h-16 text-blue-400 mx-auto mb-10" />
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">TRUSTED BY <br /> PROFESSIONALS.</h2>
                <p className="text-blue-100/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                  From residential Bole high-rises to tech hubs in Kazanchis, Ward provides the backbone of modern access control.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="tel:+251912009497" className="px-12 py-5 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center uppercase tracking-widest text-[10px]">
                    <Phone className="w-4 h-4 mr-3" /> Call +251 912 009497
                  </a>
                </div>
              </div>
            </section>

            {/* Parking Gates Section */}
            <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-32">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                  <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Parking Solutions</span>
                  <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-8 tracking-tighter uppercase">AUTOMATED ACCESS <br />FOR VEHICLES.</h2>
                  <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                    Complete parking gate automation with RFID/NFC access control. Sales, installation, and comprehensive maintenance services for residential complexes, offices, and commercial properties.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Gate Sales</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">Heavy-duty automated parking barriers with RFID/NFC integration. Custom installation for any property size.</p>
                    <div className="text-3xl font-black text-blue-900 mb-2">$1,200</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">Complete System</div>
                  </div>

                  <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Installation</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">Professional installation by certified technicians. Includes wiring, testing, and user training.</p>
                    <div className="text-3xl font-black text-blue-900 mb-2">$300</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">Installation Fee</div>
                  </div>

                  <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Maintenance</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">Annual maintenance contracts with emergency repair services. Keep your gates operating smoothly.</p>
                    <div className="text-3xl font-black text-blue-900 mb-2">$150</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">Annual Service</div>
                  </div>
                </div>

                <div className="text-center mt-16">
                  <a href="#/request" className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 uppercase tracking-widest text-sm">
                    Request Parking Gate Quote
                  </a>
                </div>
              </div>
            </section>

            <SecurityAdvisor />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-gradient-to-r selection:from-purple-500 selection:to-pink-500 selection:text-white font-['Inter']">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            borderRadius: '1rem',
          },
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">Smart Home Solutions in Ethiopia</h1>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;