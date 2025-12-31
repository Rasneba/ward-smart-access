-- Ward Smart Access Database Setup
-- Run this script in your Neon PostgreSQL database or Supabase

-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_forms table
CREATE TABLE IF NOT EXISTS contact_forms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert demo admin user (password: demo123)
-- Note: In production, use proper password hashing
INSERT INTO users (email, password_hash, role)
VALUES ('admin@ward.et', 'demo123', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample gallery images
INSERT INTO gallery_images (url, title, description, location) VALUES
('/images/gallery/photo_2025-12-30_23-20-18.jpg', 'Commercial Access Turnstiles', 'High-security tripod turnstile with biometric face recognition and card access integration.', 'Bole Business District'),
('/images/gallery/photo_2025-12-30_23-20-27.jpg', 'Frameless Glass Biometrics', 'Sleek black biometric handle designed specifically for frameless glass office partitions.', 'Kazanchis Corporate Hub'),
('/images/gallery/photo_2025-12-30_23-20-28.jpg', 'Smart Locker Solution', 'RFID-based digital locker systems for premium wellness and athletic clubs.', 'Old Airport District'),
('/images/gallery/photo_2025-12-30_23-20-30.jpg', 'Executive Rose Gold Series', 'Premium biometric mortise lock with multiple deadbolt protection and fingerprint sensor.', 'Sarbet Executive Suites'),
('/images/gallery/photo_2025-12-30_23-20-31.jpg', 'Hotel Management Access', 'Contactless card and biometric smart handles for high-occupancy hospitality management.', 'Downtown Addis Ababa'),
('/images/gallery/photo_2025-12-30_23-20-37.jpg', 'Modern Residential Access', 'Minimalist smart handle installation on white contemporary apartment doors.', 'CMC Heights'),
('/images/gallery/photo_2025-12-30_23-20-39.jpg', 'Industrial Gate Automation', 'Heavy-duty automated gate systems with RFID access control for industrial complexes.', 'Gerji Industrial Zone'),
('/images/gallery/photo_2025-12-30_23-20-40.jpg', 'Retail Security Integration', 'Advanced access control systems for shopping centers with multi-tenant management.', 'Dembel City Center'),
('/images/gallery/photo_2025-12-30_23-20-40 (2).jpg', 'Educational Campus Security', 'Comprehensive biometric access solutions for universities and educational institutions.', 'Addis Ababa University'),
('/images/gallery/photo_2025-12-30_23-20-41.jpg', 'Healthcare Facility Access', 'Secure entry systems for hospitals and medical centers with emergency override capabilities.', 'Black Lion Hospital'),
('/images/gallery/photo_2025-12-30_23-20-42.jpg', 'Premium Door Hardware', 'High-end electronic door hardware with integrated access control and monitoring.', 'Entoto Hill Residences'),
('/images/gallery/photo_2025-12-30_23-20-42 (2).jpg', 'Commercial Building Security', 'Complete security system integration for modern commercial buildings and offices.', 'Piassa Financial District')
ON CONFLICT DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_gallery_images_created_at ON gallery_images(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at DESC);