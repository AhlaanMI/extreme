# Customization Guide

This guide shows you how to customize the Elite Performance landing page for your own gym brand.

## Quick Start Customization (15 minutes)

### 1. Update Site Content

Edit `src/utils/constants.ts`:

```typescript
export const SITE_NAME = "YOUR GYM NAME";
export const SITE_TAGLINE = "Your tagline here";
```

### 2. Update Navigation Links

In the same file, modify `NAV_LINKS` array:

```typescript
export const NAV_LINKS = [
  { label: "Classes", href: "#services" },
  { label: "Trainers", href: "#trainers" },
  // ... add your custom links
];
```

### 3. Update Colors to Match Your Brand

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // Your primary color
    light: '#FF8C5A',
    dark: '#CC4422',
  },
  accent: {
    DEFAULT: '#FFD700',  // Your accent color
    light: '#FFE033',
    dark: '#CCB000',
  },
}
```

### 4. Add Your Contact Info

In `src/components/layout/Footer.tsx`:

```typescript
<a href="mailto:YOUR_EMAIL@gym.com">YOUR_EMAIL@gym.com</a>
<a href="tel:+1234567890">(123) 456-7890</a>
```

## Detailed Customization

### Hero Section Customization

**File**: `src/components/sections/Hero.tsx`

```typescript
// Update headline
<h1>Your Headline Here</h1>

// Update subheadline
<p>Your subheadline here</p>

// Update badge
<Badge variant="accent">Your offer here</Badge>

// Update background image
<img src="your-image-url" alt="Your alt text" />
```

### Services/Classes Customization

**File**: `src/utils/constants.ts`

```typescript
export const SERVICES = [
  {
    icon: "Dumbbell", // Lucide icon name
    title: "Your Service",
    description: "Your description",
    features: ["Feature 1", "Feature 2"],
  },
  // Add more services
];
```

**Available Icons**: Visit [lucide.dev](https://lucide.dev) for full list. Examples:

- `Dumbbell` - Strength training
- `Zap` - Energy/HIIT
- `Users` - Group classes
- `Heart` - Wellness
- `Flame` - Cardio
- `TrendingUp` - Performance

### Pricing Customization

**File**: `src/utils/constants.ts`

```typescript
export const MEMBERSHIPS = [
  {
    name: "Your Tier",
    price: "$99",
    period: "per month",
    description: "Description",
    features: ["Feature 1", "Feature 2"],
    cta: "Your CTA text",
    highlighted: true, // Makes this tier stand out
  },
];
```

### Testimonials Customization

**File**: `src/utils/constants.ts`

```typescript
export const TESTIMONIALS = [
  {
    name: "Member Name",
    role: "Profession",
    image: "https://your-image-url.jpg",
    content: "What they said about your gym",
    rating: 5,
  },
];
```

### Team/Trainers Customization

**File**: `src/utils/constants.ts`

```typescript
export const TRAINERS = [
  {
    name: "Trainer Name",
    title: "Head Coach",
    specialty: "Strength Training",
    image: "https://trainer-image-url.jpg",
    bio: "Brief bio about trainer",
  },
];
```

### FAQ Customization

**File**: `src/utils/constants.ts`

```typescript
export const FAQ = [
  {
    question: "Your question here?",
    answer: "Your answer here",
  },
];
```

## Advanced Customization

### Adding New Sections

1. Create new component in `src/components/sections/NewSection.tsx`:

```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export const NewSection: React.FC = () => {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="section-title"
        >
          Your Section
        </motion.h2>
        {/* Your content */}
      </div>
    </section>
  );
};
```

2. Import and add to `src/App.tsx`:

```typescript
import { NewSection } from './components/sections/NewSection';

<NewSection />
```

### Custom Animations

Create new animation in `src/utils/animations.ts`:

```typescript
export const customAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
```

Use in components:

```typescript
<motion.div
  variants={customAnimation}
  initial="hidden"
  whileInView="visible"
>
  Content
</motion.div>
```

### Changing Fonts

In `index.html`, replace Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Your Font', 'system-ui'],
}
```

### Adding Local Images

1. Create `public/images/` folder
2. Add your images there
3. Reference in components:

```typescript
<img src="/images/your-image.jpg" alt="Description" />
```

## Branding Elements

### Logo/Icon

Replace `public/elite-icon.svg` with your logo:

```bash
cp your-logo.svg public/elite-icon.svg
```

Or update reference in `index.html`.

### Favicon

1. Create favicon files (multiple sizes recommended)
2. Update `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />
```

### Meta Tags

**File**: `index.html`

```html
<meta name="description" content="Your gym description" />
<meta property="og:title" content="Your Gym Name" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="your-og-image.jpg" />
```

## Content Recommendations

### Effective Copy for Gyms

**Hero Section**: Lead with transformation, not features

- ❌ "State-of-the-art equipment"
- ✅ "Transform Your Body in 90 Days"

**Subheadline**: Address objections and provide proof

- ✅ "Join 5,000+ members who achieved their goals. Results guaranteed."

**CTA Text**: Action-oriented and benefit-focused

- ❌ "Sign Up"
- ✅ "Start My Transformation"

### Testimonials Best Practices

- Include specific results: "Lost 25 lbs", "Added 50 lbs to bench"
- Mention transformation timeframe: "In 3 months"
- Use real member names and professions
- Include professional headshots

## Performance Optimization

### Image Optimization

```typescript
// Use descriptive alt text
<img src="trainer.jpg" alt="Expert personal trainer John Smith" />

// Use proper image formats
// .webp for modern browsers (best compression)
// .jpg for general photos
// .png for graphics with transparency
```

### Lazy Loading

Already implemented via Framer Motion's `whileInView`, but ensure images use proper dimensions:

```typescript
<img
  src="image.jpg"
  alt="Description"
  loading="lazy"  // Add native lazy loading
/>
```

### CSS Class Organization

Keep custom CSS in `src/index.css` in `@layer` directives for proper Tailwind integration.

## Theme Variations

### Dark Mode Alternative

Create variations of color scheme in `tailwind.config.ts`:

```typescript
colors: {
  // Dark mode (current)
  primary: '#00d4ff',

  // Light mode alternative
  lightBg: '#ffffff',
  lightText: '#000000',
}
```

Apply with class:

```html
<div className="dark:bg-dark-950 bg-white"></div>
```

## Troubleshooting Customizations

### Changes not showing

- Clear cache: `npm run build` and restart dev server
- Check TypeScript errors: `npm run build`
- Verify file paths are correct

### Animations not working

- Check component is using Framer Motion
- Verify `initial`, `animate`, or `whileInView` props
- Check browser console for errors

### Styling issues

- Check Tailwind classes are spelled correctly
- Verify utility exists in `tailwind.config.ts`
- Clear Tailwind cache: delete node_modules, reinstall

## Common Customizations Checklist

- [ ] Updated `SITE_NAME` and `SITE_TAGLINE`
- [ ] Changed color scheme to match brand
- [ ] Updated all service/class descriptions
- [ ] Added trainer photos and bios
- [ ] Updated pricing tiers and features
- [ ] Added member testimonials
- [ ] Updated FAQ for your gym
- [ ] Changed contact information
- [ ] Added your logo
- [ ] Updated meta tags
- [ ] Added Google Analytics ID
- [ ] Replaced placeholder images

## Getting Help

If something breaks:

1. Check browser console for JavaScript errors
2. Run `npm run build` to check for TypeScript errors
3. Compare changes to original code
4. Reset the problematic section to original
5. Make changes incrementally and test each one

---

You now have a fully customizable premium fitness landing page. Start with the quick start checklist and gradually customize more advanced elements. Good luck with your gym! 💪
