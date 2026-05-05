# Deployment Guide

This guide covers deploying your Elite Performance landing page to various hosting platforms.

## Pre-Deployment Checklist

- [ ] Update all content in `src/utils/constants.ts`
- [ ] Replace placeholder images with your own
- [ ] Update colors in `tailwind.config.ts` to match your brand
- [ ] Update meta tags in `index.html`
- [ ] Test on mobile, tablet, and desktop
- [ ] Run `npm run build` and verify no errors
- [ ] Test production build locally with `npm run preview`

## Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized, minified files ready for deployment.

## Deployment Options

### 1. Vercel (Recommended for Vite projects)

Vercel provides the best experience for Vite projects with zero-config deployment.

**Option A: Using Git**

```bash
npm i -g vercel
vercel
```

**Option B: GitHub Integration**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys

**Option C: Using Dashboard**

1. Drag and drop the `dist/` folder to Vercel dashboard
2. Get instant deployment

### 2. Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

Or connect your Git repository on [netlify.com](https://netlify.com) for automatic deployments on push.

### 3. GitHub Pages

```bash
# Update vite.config.ts
# Set: base: '/repo-name/'

npm run build
npm i -g gh-pages

npx gh-pages -d dist
```

Then enable GitHub Pages in repository settings, pointing to `gh-pages` branch.

### 4. AWS S3 + CloudFront

```bash
npm run build

# Configure AWS CLI
aws configure

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name

# Invalidate CloudFront (if applicable)
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### 5. Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build and run:

```bash
docker build -t elite-gym .
docker run -p 3000:3000 elite-gym
```

### 6. Traditional Hosting (cPanel, Shared Hosting)

1. Build project: `npm run build`
2. Upload `dist/` folder contents via FTP to your `public_html` folder
3. No server-side configuration needed (static files)

## Environment Variables for Production

Create `.env.production`:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_GA_ID=YOUR_GOOGLE_ANALYTICS_ID
```

Reference in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Custom Domain Setup

### For Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records (instructions provided)

### For Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Netlify provides auto DNS setup (recommended)

### For Others

Point your domain's DNS to the hosting provider's nameservers or IP address.

## SSL/HTTPS

- **Vercel**: Automatic HTTPS for all deployments
- **Netlify**: Automatic HTTPS with Let's Encrypt
- **AWS**: Use AWS Certificate Manager (ACM)
- **Others**: Most provide free SSL or Let's Encrypt integration

## Performance Optimization

### Before Deploying

```bash
# Analyze bundle size
npm install -g vite-plugin-visualizer

# In vite.config.ts, add:
import visualizer from 'rollup-plugin-visualizer'
plugins: [visualizer()]

npm run build  # Creates stats.html
```

### Post-Deployment

1. **Enable Gzip Compression** (automatic on most hosts)
2. **Set Cache Headers** for static assets (long expiry)
3. **Use CDN** for images and static files
4. **Monitor Performance** with Lighthouse and PageSpeed Insights

### Image Optimization

Replace placeholder URLs with optimized images:

```bash
# Use services like:
# - ImageOptim
# - TinyPNG
# - Cloudinary (with on-the-fly optimization)
```

## Monitoring & Analytics

### Setup Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

### Setup Form Analytics

Track email signups:

```typescript
gtag("event", "sign_up", {
  method: "email",
});
```

## Continuous Deployment (CD)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"

      - run: npm ci
      - run: npm run build

      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Troubleshooting

### Build fails

- Clear `node_modules`: `rm -rf node_modules && npm install`
- Check Node version: `node -v` (should be 16+)
- Check for TypeScript errors: `npm run build` should show them

### Site doesn't work after deploy

- Check `dist/` folder isn't empty
- Verify base path in `vite.config.ts`
- Check browser console for errors
- Ensure all API URLs are correct for production

### Slow performance

- Run Lighthouse audit
- Check image sizes and formats
- Verify CSS/JS are minified in dist
- Enable gzip compression on server

## Security Checklist

- [ ] Remove console.log and debug code
- [ ] Update dependencies: `npm audit fix`
- [ ] Set proper CORS headers if using APIs
- [ ] Use HTTPS only
- [ ] Add security headers (CSP, X-Frame-Options, etc.)
- [ ] Test for vulnerabilities with OWASP ZAP

## Rollback Plan

If deployment has issues:

```bash
# Revert to previous version
git revert HEAD
npm run build
# Redeploy
```

---

**Happy Deploying!** Your Elite Performance landing page is now live. Monitor analytics and user feedback to optimize conversion rates.
