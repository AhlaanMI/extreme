# 🚀 Quick Start Guide

Get your Elite Performance gym landing page running in 5 minutes.

## Prerequisites

- Node.js 16+ installed ([download here](https://nodejs.org))
- Git (optional, for version control)
- Any text editor (VS Code recommended)

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

This installs all required packages (React, Tailwind, Framer Motion, etc.)

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

Your site opens automatically at `http://localhost:3000`

## Step 3: Make Your First Customizations (3 minutes)

### Update Site Name

Open `src/utils/constants.ts` and change:

```typescript
export const SITE_NAME = "YOUR GYM NAME";
export const SITE_TAGLINE = "Your tagline here";
```

Save the file - changes appear automatically in browser!

### Change Colors

Open `tailwind.config.ts` and update:

```typescript
primary: {
  DEFAULT: '#FF6B35',    // Change to your color
}
accent: {
  DEFAULT: '#FFD700',    // Change to your color
}
```

### Update Content

Still in `src/utils/constants.ts`, customize:

- `NAV_LINKS` - Navigation menu items
- `SERVICES` - Your gym classes/services
- `MEMBERSHIPS` - Pricing tiers
- `TRAINERS` - Team members
- `FAQ` - Frequently asked questions

## Step 4: Add Your Images

1. Create `public/images/` folder
2. Add your photos there
3. Update image URLs in components or constants

Example in `src/utils/constants.ts`:

```typescript
image: "/images/your-photo.jpg";
```

## Step 5: Deploy (See DEPLOYMENT.md)

When ready to go live:

```bash
npm run build
```

Then deploy the `dist/` folder to:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Any web host

## What's Next?

- 📖 Read [CUSTOMIZATION.md](CUSTOMIZATION.md) for advanced changes
- 🚀 Read [DEPLOYMENT.md](DEPLOYMENT.md) to go live
- 💻 Read [DEVELOPER.md](DEVELOPER.md) for technical reference
- 🎨 Explore components in `src/components/` to understand structure

## Common Customizations

### Change Pricing

Edit `src/utils/constants.ts` → `MEMBERSHIPS` array

### Update Testimonials

Edit `src/utils/constants.ts` → `TESTIMONIALS` array

### Modify Hero Headline

Edit `src/components/sections/Hero.tsx` → Update h1 text

### Add New Section

1. Create new file in `src/components/sections/`
2. Import in `src/App.tsx`
3. Add to main component

## Helpful Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

## File Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Services, Pricing, etc.
│   └── ui/          # Button, Card, Badge
├── utils/
│   ├── constants.ts  # ALL CONTENT GOES HERE
│   └── animations.ts # Animation presets
└── App.tsx          # Main component
```

## Need Help?

- **Content not updating?** - Restart dev server: `npm run dev`
- **TypeScript errors?** - Run `npm run build` to see full error
- **Styling looks wrong?** - Clear browser cache (Ctrl+Shift+R)
- **Page looks broken?** - Check browser console (F12)

## You're Ready! 🎉

Your premium gym landing page is live in development. Now:

1. ✅ Customize with your content
2. ✅ Add your images and logo
3. ✅ Test on phone/tablet
4. ✅ Deploy to production

For more details, check the other documentation files:

- [CUSTOMIZATION.md](CUSTOMIZATION.md) - How to customize everything
- [DEPLOYMENT.md](DEPLOYMENT.md) - How to deploy live
- [DEVELOPER.md](DEVELOPER.md) - Technical reference

---

**Questions?** Check the FAQ section in the landing page itself, or refer to CUSTOMIZATION.md for detailed guides on every aspect of the page.

Happy building! 💪
