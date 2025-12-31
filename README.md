# Ward Smart Access & IT Solutions - Ethiopia

A modern, colorful React application for Ward Smart Access & IT Solutions, featuring a login system, database integration, and Netlify deployment.

## ✨ Features

- 🎨 **Colorful Design**: Vibrant gradients and modern UI with purple, pink, and cyan themes
- 🔐 **Login System**: Secure authentication with demo credentials
- 🗄️ **Database Integration**: Neon DB (PostgreSQL) support with Supabase client
- 📱 **Responsive Design**: Mobile-first approach with beautiful animations
- 🚀 **Netlify Ready**: Optimized for deployment on Netlify
- 📸 **Gallery Showcase**: Display of security installations across Addis Ababa

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS with custom gradients
- **Database**: Neon DB (PostgreSQL) via Supabase
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Animations**: Framer Motion
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**

   Copy `.env.local` and update the values:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here

   # Neon Database Configuration
   VITE_NEON_DATABASE_URL=your_neon_database_url_here
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔐 Demo Credentials

- **Email**: admin@ward.et
- **Password**: demo123

## 🌐 Netlify Deployment

### Option 1: Direct Deploy

1. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git" or drag & drop the `dist` folder

2. **Set Environment Variables:**
   In Netlify dashboard, go to Site Settings > Environment Variables and add:
   - `VITE_NEON_DATABASE_URL`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

3. **Deploy:**
   ```bash
   npm run build
   # Upload the dist folder to Netlify
   ```

### Option 2: Git Integration

1. **Push to GitHub/GitLab**
2. **Connect Repository to Netlify**
3. **Set Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Add Environment Variables** in Netlify dashboard

## 🗄️ Database Setup (Neon DB)

### 1. Create Neon Database

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project
3. Copy the connection string

### 2. Set up Tables

Create these tables in your Neon database:

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Gallery images table
CREATE TABLE gallery_images (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contact forms table
CREATE TABLE contact_forms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Supabase Setup (Alternative)

If using Supabase instead of direct Neon:

1. Create project at [Supabase](https://supabase.com)
2. Get your project URL and anon key
3. The database service will automatically use Supabase client

## 📱 Available Routes

- `/` - Home page with hero and features
- `/products` - Smart access products catalog
- `/gallery` - Installation showcase
- `/advisor` - Security advisor tool
- `/it-solutions` - IT services information
- `/login` - Authentication page

## 🎨 Customization

### Colors

The app uses a vibrant color scheme:
- **Primary**: Purple to Pink gradients
- **Secondary**: Cyan to Blue gradients
- **Accent**: Yellow to Orange highlights

### Adding New Colors

Update Tailwind config or use custom CSS variables for consistent theming.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, contact:
- **Phone**: +251 912 009497
- **Email**: admin@ward.et
- **Website**: [Ward Smart Access](https://ward.et)
