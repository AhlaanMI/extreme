# Developer Quick Reference

## Project Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## File Structure Quick Reference

| Path                       | Purpose                                         |
| -------------------------- | ----------------------------------------------- |
| `src/App.tsx`              | Main app component - all sections imported here |
| `src/components/layout/`   | Navbar, Footer - global layout                  |
| `src/components/sections/` | Major page sections                             |
| `src/components/ui/`       | Reusable button, card, badge components         |
| `src/utils/constants.ts`   | All content data (edit this first!)             |
| `src/utils/animations.ts`  | Framer Motion animation presets                 |
| `src/types/index.ts`       | TypeScript type definitions                     |
| `src/index.css`            | Global styles and Tailwind utilities            |
| `tailwind.config.ts`       | Tailwind color palette and theme                |

## Most Common Edits

### 1. Change Gym Name

**File**: `src/utils/constants.ts`

```typescript
export const SITE_NAME = "YOUR GYM NAME";
```

### 2. Change Colors

**File**: `tailwind.config.ts`

```typescript
primary: {
  DEFAULT: "#YOUR_COLOR";
}
accent: {
  DEFAULT: "#YOUR_COLOR";
}
```

### 3. Update Services/Classes

**File**: `src/utils/constants.ts`

- Edit `SERVICES` array
- Edit `MEMBERSHIPS` array
- Edit `TRAINERS` array

### 4. Update Copy/Content

**File**: `src/utils/constants.ts` or individual section components

- `FAQs`
- `TESTIMONIALS`
- `TRANSFORMATIONS`

### 5. Add New Section

1. Create `src/components/sections/YourSection.tsx`
2. Import in `src/App.tsx`
3. Add to `<main>` in `App.tsx`

## Component Template

```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export const YourSection: React.FC = () => {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="section-title"
        >
          Your Title
        </motion.h2>
      </div>
    </section>
  );
};
```

## Useful Tailwind Classes

### Spacing

- `section` = py-20 md:py-32 (padding top/bottom)
- `container-max` = max-w-7xl mx-auto (max width container)

### Text

- `section-title` = Large heading
- `section-subtitle` = Smaller descriptive text
- `gradient-text` = Gradient colored text

### Components

- `glass` = Glassmorphism effect
- `glass-dark` = Dark glassmorphism
- `card` = Card with hover effects
- `btn` = Button base styles
- `btn-primary`, `btn-secondary`, `btn-outline` = Button variants
- `badge`, `badge-accent` = Small badges

### Effects

- `glow-blue`, `glow-blue-lg` = Blue glow effect
- `glow-accent` = Green glow effect
- `shadow-glow-lg` = Large glow shadow

## Animation Presets

Common animations in `src/utils/animations.ts`:

```typescript
fadeInUp; // Fade in from bottom
fadeInDown; // Fade in from top
fadeInLeft; // Fade in from left
fadeInRight; // Fade in from right
scaleIn; // Scale up while fading in
rotateIn; // Rotate while appearing
slideInRight; // Slide in from right
slideInLeft; // Slide in from left
container; // Stagger children
item; // Individual item animation
```

## Using Animations

```typescript
// Simple animation
<motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
  Content
</motion.div>

// Staggered children
<motion.div variants={container} initial="hidden" whileInView="visible">
  {items.map(item => (
    <motion.div key={item} variants={item}>
      Item
    </motion.div>
  ))}
</motion.div>

// Hover animation
<motion.div whileHover={{ y: -10 }}>
  Hover me
</motion.div>
```

## Lucide Icons

Available in components. Common ones:

```typescript
import {
  Dumbbell, // Weights
  Users, // Group
  Zap, // Energy/bolt
  Heart, // Health
  TrendingUp, // Growth
  ChevronDown, // Expand/collapse
  Star, // Rating
  ArrowRight, // Navigation
  Menu, // Hamburger
  X, // Close
  Mail, // Email
  Phone, // Telephone
  MapPin, // Location
} from "lucide-react";
```

Find more at [lucide.dev](https://lucide.dev)

## Responsive Design

```typescript
// Mobile-first classes
<div className="
  px-4 sm:px-6 lg:px-8     // Padding responsive
  text-lg md:text-2xl      // Font size responsive
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // Columns
  gap-4 md:gap-8           // Spacing responsive
">
```

Breakpoints:

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## Debugging

### Check TypeScript errors

```bash
npm run build
```

### Test production locally

```bash
npm run build
npm run preview
```

### Check console for JS errors

Open browser DevTools → Console tab

### Check for CSS issues

- Right-click element → Inspect
- Check "Computed" styles
- Verify Tailwind classes are present

## Performance Tips

### Image Optimization

- Use `.webp` format when possible
- Compress with TinyPNG or ImageOptim
- Use lazy loading for below-fold images

### Code Splitting

Already optimized in `vite.config.ts`, but avoid:

- ❌ Importing huge libraries at top level
- ✅ Dynamic imports: `const lib = await import('package')`

### CSS

- Tailwind purges unused CSS automatically
- Don't add custom CSS for every variant
- Use Tailwind utilities instead

## Deployment Checklist

Before deploying:

- [ ] `npm run build` passes with no errors
- [ ] `npm run preview` looks correct
- [ ] Updated all placeholder content
- [ ] Added your logo and images
- [ ] Changed colors to your brand
- [ ] Tested on mobile device
- [ ] Updated meta tags in `index.html`
- [ ] Checked all links work
- [ ] Removed any debug console.logs

## Common Issues

| Issue                  | Solution                                                 |
| ---------------------- | -------------------------------------------------------- |
| Changes don't show     | Clear cache, restart dev server                          |
| TypeScript errors      | Run `npm run build` to see full errors                   |
| Styling broken         | Check class names, verify Tailwind config                |
| Images not showing     | Check image paths start with `/`                         |
| Animations not working | Verify component has `initial`, `animate`, `whileInView` |
| Build fails            | Delete `node_modules`, run `npm install` again           |

## Resources

- [React Docs](https://react.dev)
- [Framer Motion](https://framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [Vite Docs](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

---

**Quick Tip**: Start with updating `src/utils/constants.ts` - that's where 90% of customization happens!
