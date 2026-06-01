# Deploy to Supabase Static Sites

This project is already configured to use Supabase for image storage, and it can also be hosted on a free Supabase Static Site with a `*.supabase.app` domain.

## 1. Prepare the app

From the project root:

```bash
npm install
npm run build
```

## 2. Create / configure Supabase Static Site

1. Go to https://app.supabase.com and sign in.
2. Create a new project if you don't have one.
3. In your project, open **Static Sites** and click **New Site**.
4. Choose either:
   - **Connect Git provider** and select your repository, or
   - **Manual deploy** and upload the `dist` folder.

## 3. Set environment variables

Add these variables in the Supabase Static Site settings:

```env
VITE_SUPABASE_URL=https://fobnodfctrjgolwcckqj.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_yVstd-ttRj9fHx4POTt2rg_065dZSF0
VITE_SUPABASE_BUCKET=images
```

If your bucket name differs, set `VITE_SUPABASE_BUCKET` accordingly.

## 4. Deploy

- Build command: `npm run build`
- Publish directory: `dist`

Once deployed, Supabase will provide a free URL like `https://your-site-name.supabase.app`.

## 5. Verify the site

Open the generated URL and confirm:
- public pages load correctly
- admin panel works at `/admin`
- image upload works with your Supabase bucket

## 6. Optional custom domain

If you want your own domain:
1. Add the custom domain in Supabase Static Site settings.
2. Configure DNS records from your domain provider.
3. Enable HTTPS in Supabase.

---

### Notes

- The app already supports Vite env variables and `NEXT_PUBLIC_` fallbacks.
- If image upload fails with `Bucket not found`, create the bucket in Supabase Storage or update `VITE_SUPABASE_BUCKET`.
