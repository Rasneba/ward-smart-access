# Netlify Deployment Guide

## 🚀 Deploy to Netlify

### Step 1: Prepare Your Project
1. Make sure your build works locally:
   ```bash
   npm run build
   ```

2. Your `dist` folder should contain the built files.

### Step 2: Set Up Neon Database (Optional but Recommended)
1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project
3. Copy the connection string (starts with `postgresql://`)
4. Add it to your `.env.local` as `VITE_NEON_DATABASE_URL`

### Step 3: Deploy to Netlify

#### Option A: Drag & Drop (Quick)
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag your entire `dist` folder to the deployment area
3. Your site will be live instantly!

#### Option B: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add environment variables in Netlify dashboard:
   - `VITE_NEON_DATABASE_URL` (your Neon database URL)
   - `VITE_SUPABASE_URL` (if using Supabase)
   - `VITE_SUPABASE_ANON_KEY` (if using Supabase)

### Step 4: Configure Custom Domain (Optional)
1. In Netlify dashboard, go to Site Settings > Domain Management
2. Add your custom domain or use the free `.netlify.app` subdomain

### Step 5: Test Your Live Site
- Visit your Netlify URL
- Test the login page (`/login`)
- Check all routes work correctly
- Verify the colorful design displays properly

## 🔧 Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Verify your Node.js version is 18+
- Check for TypeScript errors: `npx tsc --noEmit`

### Database Connection Issues
- Make sure your Neon database allows connections from `0.0.0.0/0`
- Check your environment variables are set correctly in Netlify
- The app falls back to mock data if database isn't configured

### Login Not Working
- Use demo credentials: `admin@ward.et` / `demo123`
- Check browser console for errors
- Ensure you're on the `/login` route

### SPA Routing Issues (404 Errors)
If you get 404 errors when refreshing pages or accessing routes directly:

1. **Check your `netlify.toml` file** - it should have:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Alternative: Use `_redirects` file** in your `public` folder:
   ```
   /*    /index.html   200
   ```

3. **For other hosting platforms:**

   **Vercel**: Add `vercel.json`:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

   **Firebase**: Add to `firebase.json`:
   ```json
   {
     "hosting": {
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

   **Apache**: Add `.htaccess`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **Nginx**: Add to server config:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

## 📊 Performance Tips

- Images are optimized automatically
- Code is split into chunks for faster loading
- Enable Netlify's asset optimization in site settings

## 🎉 You're Done!

Your colorful Ward Smart Access website is now live on Netlify with database integration and login functionality!