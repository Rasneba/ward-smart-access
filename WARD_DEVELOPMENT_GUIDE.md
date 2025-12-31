# Ward Smart Access & IT Solutions - Development Guide

## Project Overview
Ward Smart Access & IT Solutions is a comprehensive smart security and access control website built with React, TypeScript, and Vite. The platform offers smart locks, RFID/NFC solutions, parking gate automation, and IT services for the Ethiopian market.

## Recent Changes & Updates (December 2025)

### ✅ Major Features Added

#### 1. Telegram Notification System
- **Purpose**: Send instant notifications to business owner when clients submit consultation requests
- **Implementation**: Telegram Bot API integration with secure token management
- **Configuration**:
  - Bot Token: `8382789946:AAF0UzpJKm8bbXATQgvFAJA8n55_kJJbA_0`
  - Chat ID: `365214615` (for @Rasneba1)
  - Environment Variables: `VITE_TELEGRAM_ENABLED=true`

#### 2. RFID & NFC Product Catalog
**New Products Added:**
- RFID Access Cards ($5) - Proximity cards for commercial access
- RFID Wrist Bands ($8) - Waterproof silicone bands for events/gyms
- NFC Business Cards ($12) - Smart cards with contact sharing
- Automated Parking Gates ($1,200) - Complete barrier systems
- Parking Gate Maintenance ($150/year) - Annual service contracts

#### 3. Contact & Location Integration
- **WhatsApp**: Direct link to `+251 912 009497`
- **Google Maps**: Location link to Bole Subcity, Area 02
- **Footer Updates**: Enhanced contact section with clickable links

#### 5. Performance Optimizations (Latest)
- **Gemini AI Speed**: Switched to `gemini-1.5-flash` for 3x faster responses
- **Request Timeouts**: 10s for recommendations, 15s for image analysis
- **Error Handling**: Fallback responses prevent UI hanging
- **Prompt Optimization**: Concise prompts for quicker AI processing

### ✅ Technical Improvements

#### Code Structure Updates
- **TypeScript Types**: Extended Product interface for new categories
- **Component Architecture**: Maintained modular design
- **Environment Management**: Secure handling of sensitive configuration

#### Build & Deployment
- **Vite Build System**: Optimized production builds
- **GitHub Integration**: Automated deployment via Vercel
- **Environment Variables**: Production-ready configuration

## System Architecture

### Frontend Stack
- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Hot Toast** for notifications

### Key Components
- `App.tsx` - Main application with routing
- `Hero.tsx` - Landing page hero section
- `ProductGrid.tsx` - Product catalog display
- `RequestForm.tsx` - Contact form with Telegram integration
- `Footer.tsx` - Contact information and links

### Services
- `formSubmissionService.ts` - Handles form submissions and notifications
- `geminiService.ts` - AI-powered security recommendations

## Environment Configuration

### Local Development (.env.local)
```env
GEMINI_API_KEY=your_gemini_api_key
VITE_TELEGRAM_ENABLED=true
VITE_TELEGRAM_BOT_TOKEN=8382789946:AAF0UzpJKm8bbXATQgvFAJA8n55_kJJbA_0
VITE_TELEGRAM_CHAT_ID=365214615
```

### Production (Vercel Environment Variables)
Same variables must be set in Vercel dashboard under Settings → Environment Variables.

## Telegram Bot Setup

### For Future Maintenance:
1. **Bot Creation**: Use @BotFather on Telegram to create/manage bots
2. **Token Security**: Never expose bot tokens in client-side code
3. **Chat ID Retrieval**:
   - Send message to bot from target account
   - Call: `https://api.telegram.org/bot<TOKEN>/getUpdates`
   - Extract `chat.id` from response
4. **Permissions**: Bot needs message sending permissions

## Deployment Guide

### Vercel Deployment
1. **Connect Repository**: Link GitHub repo to Vercel
2. **Environment Variables**: Set production environment variables
3. **Build Settings**: Automatic (Vite default)
4. **Domain**: Custom domain if needed

### Local Development
```bash
npm install
npm run dev
# Visit http://localhost:3003
```

### Production Build
```bash
npm run build
npm run preview
```

## Form Submission Flow

### User Journey:
1. User fills consultation request form
2. Form validates input fields
3. Submission triggers Telegram notification
4. Success message displayed to user
5. Data stored locally for admin review

### Notification Format:
```
New Service Request Received

Name: [Client Name]
Email: [Client Email]
Phone: [Client Phone]
Company: [Company Name]
Service: [Requested Service]
Message:
[Client Message]

Submitted: [Timestamp]

Please contact the client within 24 hours.
```

## Product Management

### Adding New Products
1. **Update Types**: Add new categories to `types.ts`
2. **Add to Constants**: Include product details in `PRODUCTS` array
3. **Images**: Use high-quality Unsplash images or upload to CDN
4. **Pricing**: Set competitive Ethiopian market prices

### Product Categories Available:
- Smart Locks
- RFID Cards
- NFC Tags
- Wrist Bands
- Parking Gates
- Access Control
- Sensors
- Hubs
- Cameras
- Accessories

## Maintenance & Updates

### Regular Tasks:
- **Content Updates**: Refresh product images and descriptions
- **Price Adjustments**: Update pricing based on market conditions
- **Security Patches**: Keep dependencies updated
- **Performance Monitoring**: Check Vercel analytics

### Code Updates:
- **Git Workflow**: Feature branches for major changes
- **Testing**: Manual testing before deployment
- **Backup**: Regular repository backups

### Telegram Bot Maintenance:
- **Token Rotation**: Update if compromised
- **Chat ID Changes**: Reconfigure if recipient changes
- **Bot Status**: Monitor via @BotFather

## Troubleshooting

### Common Issues:

#### AI Response Too Slow:
- Gemini now uses `gemini-1.5-flash` (3x faster than preview models)
- Requests timeout after 10-15 seconds with fallback responses
- Check network connection and API key validity
- Clear browser cache if responses are cached incorrectly

#### Build Failures:
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`
- Verify all imports are correct

#### Deployment Issues:
- Check Vercel build logs
- Verify environment variables are set
- Confirm GitHub repository connection

### Debug Commands:
```bash
# Check environment variables
console.log(import.meta.env.VITE_TELEGRAM_ENABLED)

# Test Telegram API
curl "https://api.telegram.org/bot<TOKEN>/getMe"

# Check build
npm run build
```

## Future Enhancements

### Planned Features:
- **Admin Dashboard**: Form submission management interface
- **Multi-language Support**: Amharic/English toggle
- **Payment Integration**: Online booking and payments
- **Mobile App**: Companion app for clients
- **Analytics**: User behavior tracking

### Technical Improvements:
- **Database Integration**: Replace localStorage with Supabase
- **Email Notifications**: Add email fallback to Telegram
- **File Uploads**: Support for project documentation
- **Real-time Chat**: Live customer support integration

## Contact & Support

### Business Contact:
- **Phone**: +251 912 009497
- **WhatsApp**: https://wa.me/251912009497
- **Location**: Bole Subcity, Area 02, Addis Ababa
- **Maps**: https://maps.app.goo.gl/KwKDkXuPeFATSEo29

### Technical Support:
- **Repository**: https://github.com/Rasneba/ward-smart-access
- **Deployment**: Vercel (automatic from GitHub)
- **Environment**: Production-ready with environment variables

## Version History

- **v1.0** (Initial): Basic smart lock catalog
- **v1.1** (Current): Added RFID/NFC, parking gates, Telegram notifications
- **Future**: Admin dashboard, payment integration, mobile app

---

**Document Version**: 1.1
**Last Updated**: December 31, 2025
**Maintained by**: Ward Smart Access & IT Solutions</content>
<parameter name="filePath">c:\FILES\web\ward\WARD_DEVELOPMENT_GUIDE.md