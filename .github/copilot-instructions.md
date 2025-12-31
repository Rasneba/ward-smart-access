# Ward Smart Access - AI Coding Guidelines

## Architecture Overview
This is a React 19 SPA for Ethiopian smart access solutions featuring:
- **Custom hash-based routing** (`services/router.ts`) - no React Router, uses URL hash for navigation
- **Service layer architecture** - business logic in `services/` directory (database, forms, AI)
- **Dual database support** - Supabase/Neon production, mock fallback for development
- **Telegram integration** - instant notifications for form submissions via bot API

## Key Components & Data Flow
- `App.tsx` - Main app with route-based content rendering
- `constants.ts` - Product catalog and gallery data
- Forms → `formSubmissionService.ts` → Telegram bot + localStorage
- AI recommendations via `geminiService.ts` (Gemini 1.5 Flash with JSON schema)
- User auth via `databaseService.ts` (Supabase/Neon + mock fallback)

## Development Workflow
```bash
npm run dev          # Starts on port 3000
npm run build        # Outputs to dist/
npm run preview      # Test production build
```

## Critical Patterns
### Routing
- Use `router.navigate(path)` for programmatic navigation
- Hash-based: URLs like `#/products`, `#/gallery`
- Listen to route changes: `router.onChange(callback)`

### Form Handling
- Import `submitRequestForm` from `formSubmissionService.ts`
- Always show toast notifications: `toast.success/error()`
- Reset form after successful submission
- Data stored in localStorage for development

### Environment Configuration
- Vite env vars: `VITE_*` prefix (e.g., `VITE_TELEGRAM_ENABLED`)
- Telegram config: Bot token + chat ID for notifications
- Database: `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`

### Styling Conventions
- Tailwind with custom gradients (purple/pink/cyan themes)
- Rounded corners: `rounded-[2rem]` or `rounded-[3rem]`
- Typography: `font-black uppercase tracking-tighter`
- Animations: Framer Motion with `whileHover`/`whileTap`

### Product Management
- Update `PRODUCTS` array in `constants.ts`
- Types in `types.ts`: Product interface with brand/category/connectivity
- Ethiopian market pricing (Birr equivalent)
- Unsplash images for product photos

## Deployment
- **Netlify**: `npm run build` → upload `dist/` folder
- **Environment variables** required in Netlify dashboard
- **Database setup**: Neon PostgreSQL with Supabase client
- **Domain**: Free `.netlify.app` or custom domain

## Common Tasks
- **Add product**: Update `constants.ts` PRODUCTS array + types if needed
- **Modify form**: Edit `RequestForm.tsx` + `formSubmissionService.ts`
- **Change routing**: Update switch statement in `App.tsx`
- **Add notification**: Use `toast()` from react-hot-toast
- **Database query**: Use Supabase client from `databaseService.ts`
- **User registration**: Use `databaseService.registerUser()` and `Login.tsx` component

## Ethiopian Market Context
- Addis Ababa locations (Bole, Kazanchis, CMC Heights)
- Local pricing in USD (market equivalent)
- WhatsApp integration: `+251 912 009497`
- Bilingual considerations (Amharic/English)