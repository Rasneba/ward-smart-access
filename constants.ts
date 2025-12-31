import { Product } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: 'ward-retrofit-pro',
    brand: 'Yale', 
    name: 'Ward Retrofit Smart Lock Pro',
    category: 'Smart Locks',
    price: 289,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600',
    description: 'The ultimate retrofit solution. Simply mount it over your existing lock without replacing the deadbolt. Perfect for Addis Ababa apartments.',
    features: ['Auto-Unlock on Arrival', 'Remote Access', 'Rechargeable Power Pack'],
    connectivity: ['Wi-Fi', 'Bluetooth', 'Matter']
  },
  {
    id: 'ward-assure-2',
    brand: 'Yale',
    name: 'Ward Assure Touch',
    category: 'Smart Locks',
    price: 259,
    image: 'https://images.unsplash.com/photo-1631541496225-789a742877a5?auto=format&fit=crop&q=80&w=600',
    description: 'A sleek, integrated deadbolt replacement with biometrics. The gold standard in physical security.',
    features: ['Biometric Sensor', 'Weatherproof', 'Keyless Entry'],
    connectivity: ['Bluetooth', 'Wi-Fi']
  },
  {
    id: 'ward-presence-fp2',
    brand: 'Aqara',
    name: 'Ward AI Presence Sensor',
    category: 'Sensors',
    price: 85,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600',
    description: 'Advanced mmWave detection. Automate your home based on where you are, not just motion.',
    features: ['Fall Detection', 'Multi-zone detection', 'No-entry alerts'],
    connectivity: ['Wi-Fi', 'Zigbee']
  },
  {
    id: 'ward-g3-hub',
    brand: 'Aqara',
    name: 'Ward Vision Hub G3',
    category: 'Hubs',
    price: 115,
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?auto=format&fit=crop&q=80&w=600',
    description: 'AI-powered camera hub that recognizes your face and gestures to trigger smart home scenes.',
    features: ['Face Recognition', '360° Viewing', 'Infrared Control'],
    connectivity: ['Wi-Fi', 'Zigbee 3.0']
  },
  {
    id: 'rfid-access-card',
    brand: 'RFID Solutions',
    name: 'RFID Access Card',
    category: 'RFID Cards',
    price: 5,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
    description: 'High-security RFID proximity cards for access control systems. Perfect for offices, residential complexes, and commercial buildings.',
    features: ['125kHz Frequency', 'Durable PVC Material', 'Anti-collision Technology'],
    connectivity: ['RFID Reader']
  },
  {
    id: 'rfid-wristband',
    brand: 'RFID Solutions',
    name: 'RFID Wrist Band',
    category: 'Wrist Bands',
    price: 8,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=600',
    description: 'Comfortable silicone RFID wristbands for events, gyms, and access control. Waterproof and durable for daily use.',
    features: ['Waterproof Design', 'Adjustable Fit', 'Multi-color Options'],
    connectivity: ['RFID Reader']
  },
  {
    id: 'nfc-business-card',
    brand: 'NFC Tech',
    name: 'NFC Business Card',
    category: 'NFC Tags',
    price: 12,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
    description: 'Smart NFC business cards that instantly share contact information when tapped with a smartphone.',
    features: ['Contact Sharing', 'URL Linking', 'Custom Branding'],
    connectivity: ['NFC']
  },
  {
    id: 'parking-gate-system',
    brand: 'Gate Systems',
    name: 'Automated Parking Gate',
    category: 'Parking Gates',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    description: 'Heavy-duty automated parking gate system with RFID/NFC access control. Includes barrier arm, control unit, and remote management.',
    features: ['RFID/NFC Access', 'Remote Control', 'Vehicle Detection'],
    connectivity: ['Wi-Fi', 'Ethernet']
  },
  {
    id: 'parking-gate-maintenance',
    brand: 'Gate Systems',
    name: 'Parking Gate Maintenance Service',
    category: 'Access Control',
    price: 150,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600',
    description: 'Comprehensive maintenance and repair service for automated parking gates. Includes inspection, lubrication, and emergency repairs.',
    features: ['Annual Inspection', 'Emergency Repair', 'Performance Optimization'],
    connectivity: ['On-site Service']
  }
];

export const GALLERY_IMAGES = [
  {
    url: '/images/gallery/photo_2025-12-30_23-20-18.jpg',
    title: 'Commercial Access Turnstiles',
    description: 'High-security tripod turnstile with biometric face recognition and card access integration.',
    location: 'Bole Business District'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-27.jpg',
    title: 'Frameless Glass Biometrics',
    description: 'Sleek black biometric handle designed specifically for frameless glass office partitions.',
    location: 'Kazanchis Corporate Hub'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-28.jpg',
    title: 'Smart Locker Solution',
    description: 'RFID-based digital locker systems for premium wellness and athletic clubs.',
    location: 'Old Airport District'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-30.jpg',
    title: 'Executive Rose Gold Series',
    description: 'Premium biometric mortise lock with multiple deadbolt protection and fingerprint sensor.',
    location: 'Sarbet Executive Suites'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-31.jpg',
    title: 'Hotel Management Access',
    description: 'Contactless card and biometric smart handles for high-occupancy hospitality management.',
    location: 'Downtown Addis Ababa'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-37.jpg',
    title: 'Modern Residential Access',
    description: 'Minimalist smart handle installation on white contemporary apartment doors.',
    location: 'CMC Heights'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-39.jpg',
    title: 'Industrial Gate Automation',
    description: 'Heavy-duty automated gate systems with RFID access control for industrial complexes.',
    location: 'Gerji Industrial Zone'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-40.jpg',
    title: 'Retail Security Integration',
    description: 'Advanced access control systems for shopping centers with multi-tenant management.',
    location: 'Dembel City Center'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-40 (2).jpg',
    title: 'Educational Campus Security',
    description: 'Comprehensive biometric access solutions for universities and educational institutions.',
    location: 'Addis Ababa University'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-41.jpg',
    title: 'Healthcare Facility Access',
    description: 'Secure entry systems for hospitals and medical centers with emergency override capabilities.',
    location: 'Black Lion Hospital'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-42.jpg',
    title: 'Premium Door Hardware',
    description: 'High-end electronic door hardware with integrated access control and monitoring.',
    location: 'Entoto Hill Residences'
  },
  {
    url: '/images/gallery/photo_2025-12-30_23-20-42 (2).jpg',
    title: 'Commercial Building Security',
    description: 'Complete security system integration for modern commercial buildings and offices.',
    location: 'Piassa Financial District'
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Solutions', href: '#/' },
  { name: 'Smart Access', href: '#/products' },
  { name: 'RFID & NFC', href: '#/products' },
  { name: 'Parking Gates', href: '#/products' },
  { name: 'Gallery', href: '#/gallery' },
  { name: 'Request Quote', href: '#/request' },
  { name: 'IT Services', href: '#/it-solutions' },
  { name: 'Security Advisor', href: '#/advisor' },
];