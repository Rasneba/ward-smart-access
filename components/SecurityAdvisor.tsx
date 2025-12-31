
import React, { useState, useRef } from 'react';
import { Sparkles, Send, Loader2, Camera, DoorOpen, ShieldAlert } from 'lucide-react';
import { getSmartRecommendation, analyzeDoorImage } from '../services/geminiService.ts';
import { RecommendationRequest } from '../types.ts';

const SecurityAdvisor: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [doorAnalysis, setDoorAnalysis] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<RecommendationRequest>({
    doorType: 'Front Door',
    usageType: 'Single Family Home',
    connectivityPreference: 'Wi-Fi & Bluetooth',
    budget: 'Medium'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null); // Clear previous result immediately

    try {
      const recommendation = await getSmartRecommendation(form);
      setResult(recommendation);
    } catch (error) {
      console.error('Recommendation failed:', error);
      setResult({ error: 'Unable to generate recommendation. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = (reader.result as string).split(',')[1];
        const analysis = await analyzeDoorImage(base64String);
        setDoorAnalysis(analysis);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-4 h-4 mr-2" /> AI Powered
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Security Advisor</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Answer a few questions or upload a photo of your door, and our Gemini AI will recommend the perfect Ward Smart Access solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Door Type</label>
                <select 
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={form.doorType}
                  onChange={e => setForm({...form, doorType: e.target.value})}
                >
                  <option>Front Door</option>
                  <option>Interior Door</option>
                  <option>Sliding Door</option>
                  <option>Gate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Usage</label>
                <select 
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={form.usageType}
                  onChange={e => setForm({...form, usageType: e.target.value})}
                >
                  <option>Single Family Home</option>
                  <option>Rental / Airbnb</option>
                  <option>Office</option>
                  <option>Garage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Ecosystem Preference</label>
                <select 
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={form.connectivityPreference}
                  onChange={e => setForm({...form, connectivityPreference: e.target.value})}
                >
                  <option>Wi-Fi & Bluetooth</option>
                  <option>Z-Wave</option>
                  <option>Apple HomeKit</option>
                  <option>Matter</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-colors flex items-center justify-center disabled:bg-gray-400"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 mr-2" /> Get Recommendation</>}
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-4 rounded-xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
                >
                  <Camera className="w-6 h-6" />
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileUpload} 
                />
              </div>
            </div>
          </form>

          {/* Results Area */}
          <div className="space-y-6">
            {!result && !doorAnalysis && !loading && (
              <div className="h-full border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-12 text-center text-gray-400">
                <ShieldAlert className="w-12 h-12 mb-4 opacity-50" />
                <p>Complete the form or upload an image to see your custom security plan.</p>
              </div>
            )}

            {loading && (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-medium">Gemini is analyzing your needs...</p>
              </div>
            )}

            {doorAnalysis && (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-lg font-bold text-gray-900 flex items-center mb-3">
                  <DoorOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Door Analysis Results
                </h3>
                <div className="prose prose-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                  {doorAnalysis}
                </div>
              </div>
            )}

            {result && (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Recommended Product</span>
                  <h3 className="text-2xl font-bold text-gray-900">{result.recommendedProductId}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {result.reasoning}
                </p>
                <div className="space-y-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Security Best Practices</span>
                  {result.securityTips.map((tip: string, i: number) => (
                    <div key={i} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold mr-3 mt-1 shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-600">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAdvisor;