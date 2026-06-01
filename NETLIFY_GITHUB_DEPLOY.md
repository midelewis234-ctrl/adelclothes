# Deploy to Netlify via GitHub (Step-by-Step)

## ✅ Current Status
- ✅ Production build ready: `dist/index.html` (776.44 kB)
- ✅ Admin panel: http://localhost:5175/admin (ready to deploy)
- ✅ Public website: http://localhost:5175/ (ready to deploy)

---

## 📋 Step 1: Initialize Git Repository

Run this in your project folder:

```bash
git init
git add .
git commit -m "Initial commit: Adel Clothe portfolio with Supabase integration"
git branch -M main
```

---

## 🐙 Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create repository named: `adel-clothe` (or your preferred name)
3. **DO NOT** initialize with README/license (your code is already ready)
4. Click **Create repository**

---

## 📤 Step 3: Push Code to GitHub

After creating the repo, GitHub will show you commands. Run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/adel-clothe.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🌐 Step 4: Deploy to Netlify

### Option A: Simple Web Interface (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** or **"New site from Git"**
3. Select **GitHub** and authorize Netlify
4. Choose your `adel-clothe` repository
5. Configure build settings:
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"** and wait ~2 minutes

### Option B: Drag & Drop Deploy (Instant)

If you don't want to use GitHub:

1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag the entire `dist/` folder onto the page
3. Your site is instantly live (temporary URL)
4. Later can connect to GitHub for automatic updates

---

## ⚙️ Step 5: Configure Environment Variables

After deployment, you need to set Supabase credentials:

1. Go to Netlify dashboard → Your site
2. Click **Site settings** → **Build & deploy** → **Environment**
3. Click **Edit variables** and add:

```
VITE_SUPABASE_URL = https://fobnodfctrjgolwcckqj.supabase.co
VITE_SUPABASE_ANON_KEY = sb_publishable_yVstd-ttRj9fHx4POTt2rg_065dZSF0
VITE_SUPABASE_BUCKET = images
```

4. Click **Deploy site** (or go to **Deploys** → **Trigger deploy**)
5. Wait for rebuild (~1 minute)

---

## ✨ After Deployment

### Your Site URLs

**GitHub + Netlify method:**
- **Free subdomain:** `your-site.netlify.app` (auto-generated)
- **Custom domain:** Add in **Site settings** → **Domain management**

**Drag & drop method:**
- Temporary URL provided (8 hours)
- Upgrade account or connect GitHub for permanent URL

### Testing

1. Visit `https://your-site.netlify.app/`
   - Should show public website homepage
   
2. Visit `https://your-site.netlify.app/admin`
   - Should show admin login
   - Demo credentials: 
     - Email: `admin@elegancecouture.com`
     - Password: `admin123`

3. In admin panel → Gallery → Upload Images
   - Should upload to Supabase
   - If "Bucket not found" error, see troubleshooting below

---

## 🔧 Troubleshooting

### "Build failed" error
**Check:**
- All dependencies installed: `npm install`
- `.env.local` exists with correct Supabase credentials
- No syntax errors in code

**Fix in Netlify:**
- Go to **Deploys** → failed deploy → **Deploy log**
- Read error message and fix code locally
- Push fix: `git add . && git commit -m "Fix" && git push`

### "Supabase upload fails with 'Bucket not found'"
**Root causes:**
1. Bucket doesn't exist in Supabase
2. Bucket is not marked as public
3. RLS policies block uploads

**Fix:**
1. Log into [app.supabase.com](https://app.supabase.com)
2. Go to **Storage** → **Buckets**
3. Verify `images` bucket exists and is **Public**
4. If not public, click bucket → **Settings** → toggle **Public**
5. Click **Redeploy** in Netlify

### Styles look broken
- Build may have failed silently
- Check Netlify build logs for errors
- Verify CSS compiled correctly

---

## 📱 Custom Domain Setup (Optional)

If you have your own domain:

1. In Netlify: **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `adelclothe.com`)
4. Follow DNS setup instructions

---

## 🚀 Next: Connect Supabase Bucket

Once site is deployed and working, troubleshoot image uploads:

1. **Verify bucket is public** (see troubleshooting above)
2. **Test upload in admin panel**
3. **Check Supabase dashboard** for uploaded files

If still not working, may need to:
- Configure RLS policies
- Enable CORS in Supabase
- Use auth key instead of anon key

---

**Ready?** Follow Steps 1-5 above and reply when done! 🎉
