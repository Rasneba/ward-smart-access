import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, Sparkles, ArrowRight, UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';
import { databaseService } from '../services/databaseService.ts';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isRegisterMode) {
        // Registration
        await databaseService.registerUser(email, password);
        toast.success('Registration successful! Please login with your credentials.');
        setIsRegisterMode(false);
      } else {
        // Login
        const user = await databaseService.authenticateUser(email, password);
        if (user) {
          toast.success('Login successful!');
          // Store user session (you might want to use a proper auth context)
          localStorage.setItem('user', JSON.stringify(user));
          // Redirect to dashboard or home
          window.location.hash = '#/';
        } else {
          toast.error('Invalid credentials');
        }
      }
    } catch (error: any) {
      toast.error(error.message || `${isRegisterMode ? 'Registration' : 'Login'} failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Ward Access Control
          </div>
          <h1 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase">
            {isRegisterMode ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-white/80 text-lg">
            {isRegisterMode ? 'Join Ward Smart Access' : 'Access your security dashboard'}
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-white font-semibold text-sm uppercase tracking-widest">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                  placeholder="admin@ward.et"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-white font-semibold text-sm uppercase tracking-widest">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-white/80">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 rounded border-white/30 bg-white/20 text-purple-600 focus:ring-purple-500"
                />
                Remember me
              </label>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors font-semibold">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-bold rounded-2xl transition-all transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center uppercase tracking-widest text-sm"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-purple-900 border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : (
                <ArrowRight className="w-5 h-5 mr-2" />
              )}
              {isLoading ? (isRegisterMode ? 'Creating Account...' : 'Signing In...') : (isRegisterMode ? 'Create Account' : 'Sign In')}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
            <p className="text-white/80 text-xs text-center mb-2 font-semibold">Demo Credentials:</p>
            <p className="text-white/60 text-xs text-center">Email: admin@ward.et</p>
            <p className="text-white/60 text-xs text-center">Password: demo123</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            {isRegisterMode ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsRegisterMode(!isRegisterMode)}
              className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors"
            >
              {isRegisterMode ? 'Sign In' : 'Create Account'}
            </button>
          </p>
        </div>
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;