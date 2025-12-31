import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase environment variables not found. Using mock database.');
}

// Create Supabase client
export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Mock database functions for development
export const mockDatabase = {
  users: [
    { id: 1, email: 'admin@ward.et', password: 'demo123', role: 'admin' }
  ],

  async authenticateUser(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return {
        id: user.id,
        email: user.email,
        role: user.role,
        token: 'mock-jwt-token-' + Date.now()
      };
    }
    return null;
  },

  async getGalleryImages() {
    // This would normally fetch from Neon DB
    return [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
        title: 'Commercial Access Turnstiles',
        description: 'High-security tripod turnstile with biometric face recognition.',
        location: 'Bole Business District',
        created_at: new Date().toISOString()
      }
    ];
  },

  async saveContactForm(data: any) {
    console.log('Mock saving contact form:', data);
    return { success: true, id: Date.now() };
  }
};

// Database service that uses Supabase if available, otherwise mock
export const databaseService = {
  async authenticateUser(email: string, password: string) {
    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
        return data;
      } catch (error) {
        console.error('Supabase auth error:', error);
        throw error;
      }
    } else {
      return mockDatabase.authenticateUser(email, password);
    }
  },

  async signOut() {
    if (supabase) {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    }
  },

  async getGalleryImages() {
    if (supabase) {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } else {
      return mockDatabase.getGalleryImages();
    }
  },

  async saveContactForm(formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  }) {
    if (supabase) {
      const { data, error } = await supabase
        .from('contact_forms')
        .insert([formData]);

      if (error) throw error;
      return data;
    } else {
      return mockDatabase.saveContactForm(formData);
    }
  }
};