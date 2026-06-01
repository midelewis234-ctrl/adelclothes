# Netlify Deployment Guide

## Overview
Deploy your Adel Clothe portfolio website to Netlify with a free subdomain or custom domain.

**Current Build Status:**
- ✅ Production build: 776.44 kB (217.11 kB gzipped)
- ✅ Output folder: `dist/`
- ✅ Environment variables configured in `.env.local`

---

## Option 1: Deploy via Git (Recommended)

### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/adel-clothe.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **GitHub** and authorize Netlify
5. Choose your `adel-clothe` repository
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Add environment variables:
   ```
   VITE_SUPABASE_URL=https://fobnodfctrjgolwcckqj.supabase.co
   VITE_SUPABASE_ANON_KEY=sb_publishable_yVstd-ttRj9fHx4POTt2rg_065dZSF0
   VITE_SUPABASE_BUCKET=images
   ```
8. Click **"Deploy site"**

### Step 3: Configure Domain
- **Free Netlify subdomain:** `your-site.netlify.app` (auto-generated)
- **Custom domain:** 
  1. Go to **Site settings** → **Domain management**
  2. Click **"Add custom domain"**
  3. Enter your domain (e.g., `adelclothe.com`)
  4. Follow DNS configuration instructions

---

## Option 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Deploy
```bash
# Login to Netlify
netlify login

# Deploy from dist folder
netlify deploy --prod --dir=dist
```

### Step 3: Configure Environment Variables
```bash
# Set env variables
netlify env:set VITE_SUPABASE_URL "https://fobnodfctrjgolwcckqj.supabase.co"
netlify env:set VITE_SUPABASE_ANON_KEY "sb_publishable_yVstd-ttRj9fHx4POTt2rg_065dZSF0"
netlify env:set VITE_SUPABASE_BUCKET "images"
```

### Step 4: Redeploy
```bash
netlify deploy --prod --dir=dist
```

---

## Post-Deployment Checklist

### Before Going Live
- [ ] Build production bundle: `npm run build`
- [ ] Verify `dist/index.html` exists and is ~776 KB
- [ ] Test admin login (demo credentials still work)
- [ ] Test gallery upload (requires Supabase bucket to be public)
- [ ] Test public website pages load correctly
- [ ] Verify environment variables are set in Netlify

### Security
- [ ] Keep Supabase anon key in Netlify env vars (not hardcoded)
- [ ] Ensure Supabase bucket is public for public URL generation
- [ ] Set CORS policy in Supabase if needed

### Monitoring
- [ ] Enable Netlify Analytics (optional, paid)
- [ ] Set up Netlify Forms (if you want form submissions)
- [ ] Monitor Supabase storage usage (free tier: 1 GB)

---

## Troubleshooting

### "Cannot find module" errors
**Cause:** Environment variables not set in Netlify
**Fix:** 
1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add all VITE_* variables from `.env.local`
3. Trigger rebuild: **Deploys** → **Trigger deploy**

### Supabase upload fails with "Bucket not found"
**Cause:** Supabase bucket doesn't exist or isn't public
**Fix:**
1. Log into [app.supabase.com](https://app.supabase.com)
2. Go to **Storage**
3. Create bucket named `images` if it doesn't exist
4. Make sure **Public** is checked
5. Test upload again

### Admin panel redirects to login
**Cause:** Demo credentials not configured
**Fix:** Admin login will always work with:
- Email: `admin@elegancecouture.com`
- Password: `admin123`

---

## Custom Domain Setup (Optional)

### If you have a domain (e.g., adelclothe.com)

**With Netlify DNS:**
1. Transfer domain to Netlify (optional)
2. In Netlify: **Domain management** → **Add custom domain**
3. Follow on-screen DNS instructions

**With external DNS:**
1. In Netlify: **Domain management** → **Add custom domain**
2. Add these DNS records to your domain provider:
   ```
   CNAME: your-site.netlify.com
   ```

**SSL/HTTPS:**
- Automatically provisioned by Netlify (free)
- Takes ~24 hours to activate

---

## Performance Tips

- **Gzip compression:** Enabled by default on Netlify
- **Cache invalidation:** Netlify automatically invalidates on deploy
- **CDN:** Global CDN provided by Netlify (free)
- **Build caching:** Netlify caches node_modules between builds

---

## Next Steps

1. **Push to GitHub** (if using git deployment)
2. **Connect Netlify** to your repository
3. **Set environment variables** in Netlify dashboard
4. **Trigger deploy** and watch build logs
5. **Test live site** at `your-site.netlify.app`
6. **Configure custom domain** (optional)

---

**Need help?** 
- Netlify Docs: https://docs.netlify.com/
- Supabase Docs: https://supabase.com/docs/
- Build logs: Available in Netlify dashboard
