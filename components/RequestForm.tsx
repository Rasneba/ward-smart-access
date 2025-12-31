import React, { useState } from 'react';
import { Send, User, Mail, Phone, Building, MessageSquare, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { submitRequestForm } from '../services/formSubmissionService.ts';

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit form using the service
      await submitRequestForm(formData);

      // Show success state
      setIsSubmitted(true);
      toast.success('Request submitted successfully! We\'ll contact you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Request Submitted!</h2>
          <p className="text-white/80 mb-6">
            Thank you for your interest in Ward Smart Access solutions. Our team will contact you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Request Consultation
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">GET YOUR</span>
            <br />
            <span className="text-white">FREE ASSESSMENT</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Tell us about your security needs and we'll provide a customized solution with no obligation.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-sm uppercase tracking-widest flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="Your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-sm uppercase tracking-widest flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="your.email@company.com"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-sm uppercase tracking-widest flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="+251 XXX XXX XXX"
                  required
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-sm uppercase tracking-widest flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  placeholder="Company name"
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="space-y-2">
              <label className="text-white font-semibold text-sm uppercase tracking-widest">
                Service Interested In *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                required
              >
                <option value="" className="bg-purple-900">Select a service</option>
                <option value="smart-locks" className="bg-purple-900">Smart Locks & Access Control</option>
                <option value="security-systems" className="bg-purple-900">Complete Security Systems</option>
                <option value="it-infrastructure" className="bg-purple-900">IT Infrastructure & Networking</option>
                <option value="consultation" className="bg-purple-900">Security Consultation</option>
                <option value="maintenance" className="bg-purple-900">System Maintenance & Support</option>
                <option value="other" className="bg-purple-900">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-white font-semibold text-sm uppercase tracking-widest flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Tell Us About Your Needs *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all resize-none"
                placeholder="Describe your security requirements, current setup, location, and any specific challenges you're facing..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-2xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center mx-auto uppercase tracking-widest text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Submit Request
                  </>
                )}
              </button>
              <p className="text-white/60 text-sm mt-4">
                We typically respond within 24 hours. No spam, ever.
              </p>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white/80 mb-4">
            Prefer to speak directly? Call us at:
          </p>
          <a
            href="tel:+251912009497"
            className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white hover:bg-white/30 transition-all"
          >
            <Phone className="w-5 h-5 mr-3" />
            +251 912 009497
          </a>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;