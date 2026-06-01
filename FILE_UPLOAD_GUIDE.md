# 📤 File Upload Feature Guide

## 🎉 NEW FEATURE: Upload Files Directly from Your Device!

You can now upload images and videos directly from your computer/phone instead of using URLs!

---

## ✨ What's New

### Before (Old Way):
- ❌ Find image online
- ❌ Copy image URL
- ❌ Paste URL in admin panel

### Now (New Way):
- ✅ Click upload area
- ✅ Select file from your device
- ✅ Automatic upload and compression
- ✅ Instant preview

---

## 📸 Where You Can Upload Files

### 1. **Logo Upload** (Settings Page)
- **Location:** Admin → Settings
- **File Type:** Images only
- **Max Size:** 5MB
- **Formats:** JPEG, PNG, GIF, WebP
- **What happens:** Logo appears in navbar and throughout site

### 2. **Hero Video Upload** (Hero Video Page)
- **Location:** Admin → Hero Video
- **File Type:** Videos only
- **Max Size:** 20MB (10MB recommended)
- **Formats:** MP4, WebM, OGG
- **What happens:** Video plays as background on homepage

### 3. **Gallery Images** (Gallery Page)
- **Location:** Admin → Gallery
- **File Type:** Images only
- **Max Size:** 5MB
- **Formats:** JPEG, PNG, GIF, WebP
- **What happens:** Images appear in gallery grid

### 4. **Service Images** (Services Page)
- **Location:** Admin → Services
- **File Type:** Images only
- **Max Size:** 5MB
- **Formats:** JPEG, PNG, GIF, WebP
- **What happens:** Images appear on service cards

### 5. **Testimonial Photos** (Testimonials Page)
- **Location:** Admin → Testimonials
- **File Type:** Images only
- **Max Size:** 5MB
- **Formats:** JPEG, PNG, GIF, WebP
- **What happens:** Photos appear with customer reviews

---

## 🚀 How to Upload Files

### Method 1: Click to Upload

1. **Find the upload area** (looks like this):
   ```
   ┌─────────────────────────────┐
   │         📷 or 🎥            │
   │                             │
   │  Click to upload or         │
   │  drag and drop              │
   │                             │
   │  [Choose File]              │
   └─────────────────────────────┘
   ```

2. **Click anywhere** in the upload area

3. **Select your file** from the file picker

4. **Wait for upload** (shows "Processing..." message)

5. **Preview appears** automatically

6. **Done!** The file is now uploaded

### Method 2: Drag and Drop

1. **Open your file explorer** (Finder on Mac, File Explorer on Windows)

2. **Find your image/video**

3. **Drag the file** over the upload area

4. **Drop the file** when the area highlights in gold

5. **Upload starts automatically**

6. **Done!**

---

## 🎨 Features

### ✅ Automatic Image Compression
- **What it does:** Reduces file size for faster loading
- **When:** Every image upload
- **Max dimensions:** 1920x1080px
- **Quality:** 80% (maintains excellent quality)
- **Result:** Faster website, better performance

### ✅ File Validation
- **Checks file type:** Only allows supported formats
- **Checks file size:** Prevents uploads that are too large
- **Shows errors:** Clear error messages if something is wrong

### ✅ Preview Before Saving
- **Images:** Full preview with zoom
- **Videos:** Playable preview with controls
- **Change:** Can replace file before saving
- **Remove:** Can delete and start over

### ✅ Drag and Drop Support
- **Desktop:** Drag files from anywhere
- **Smooth highlight:** Area lights up when dragging
- **Easy:** No need to click browse button

---

## 📋 Step-by-Step Examples

### Example 1: Upload Logo

1. **Login to admin panel** (`/login`)

2. **Go to Settings** (click "Website Settings" in sidebar)

3. **Find "Logo" section** (top-right of form)

4. **Click the upload area**

5. **Select your logo file** (PNG recommended for logos)

6. **Wait for upload** (few seconds)

7. **See preview** of your logo

8. **Click "Save Settings"** at bottom

9. **Check website** - logo appears in navbar!

### Example 2: Upload Hero Video

1. **Login to admin panel**

2. **Go to Hero Video** (click in sidebar)

3. **Click upload area** at top

4. **Select video** from your device
   - **Tip:** Use MP4 format
   - **Tip:** Keep under 10MB for best performance

5. **Wait for upload** (may take 10-30 seconds for video)

6. **Preview appears** with video player

7. **Video automatically saved**

8. **Check homepage** - video plays as background!

### Example 3: Upload Gallery Image

1. **Login to admin panel**

2. **Go to Gallery** (click in sidebar)

3. **Click "+ Add New"** button

4. **Upload area appears**

5. **Click to select image** OR **drag image into area**

6. **Wait for compression** (few seconds)

7. **Preview appears**

8. **Enter title** (e.g., "Wedding Dress 2024")

9. **Enter category** (e.g., "Wedding")

10. **Click "Add Item"**

11. **Image appears in gallery grid**

12. **Check website** - image in gallery!

### Example 4: Upload Service Image

1. **Login to admin panel**

2. **Go to Services**

3. **Click "+ Add New"** (or "Edit" for existing)

4. **Upload area is at top of form**

5. **Click and select image**

6. **Preview appears**

7. **Fill in other fields**:
   - Title: "Bespoke Suits"
   - Description: "Handcrafted..."
   - Price: "From ₦250,000"
   - Features: Add 4 features

8. **Click "Add Service"**

9. **Service appears with your image**

---

## 💡 Tips & Best Practices

### For Images:

✅ **DO:**
- Use high-quality images (but under 5MB)
- Use JPEG for photos
- Use PNG for logos and graphics with transparency
- Use landscape orientation for services (800x600px)
- Use portrait for gallery (800x1000px)
- Use square for testimonials (150x150px)

❌ **DON'T:**
- Upload images over 5MB
- Use BMP or TIFF formats
- Use extremely large dimensions

### For Videos:

✅ **DO:**
- Use MP4 format (best compatibility)
- Keep under 10MB for best performance
- Use 1080p or 720p resolution
- Use landscape orientation (16:9)
- Test video plays smoothly

❌ **DON'T:**
- Upload videos over 20MB
- Use 4K resolution (too large)
- Use portrait orientation

### For Best Performance:

1. **Optimize before upload** (optional):
   - Use tools like TinyPNG.com for images
   - Use HandBrake for videos
   - This reduces file size

2. **Use correct dimensions**:
   - Logo: 200x200px
   - Services: 800x600px
   - Gallery: 800x1000px
   - Testimonials: 150x150px
   - Hero Video: 1920x1080px

3. **Choose right format**:
   - Photos: JPEG
   - Graphics/Logos: PNG
   - Videos: MP4

---

## 🔄 Managing Uploaded Files

### Change/Replace File

1. **Go to the page** with the uploaded file

2. **See preview** of current file

3. **Click "Change" button** (bottom-right of preview)

4. **Select new file**

5. **Old file replaced** automatically

### Remove File

1. **See preview** of uploaded file

2. **Click red X button** (top-right corner)

3. **File removed** immediately

4. **Upload area appears** again

5. **Can upload new file** or leave empty

---

## ⚙️ Technical Details

### How It Works:

1. **You select file** from device

2. **File is validated**:
   - Checks type (JPEG, PNG, etc.)
   - Checks size (under limit)
   - Shows error if invalid

3. **Image compression** (for images):
   - Resizes to max 1920x1080px
   - Compresses to 80% quality
   - Maintains aspect ratio

4. **Conversion to base64**:
   - File converted to text format
   - Stored in browser localStorage
   - No external server needed

5. **Preview generated**:
   - Shows the uploaded file
   - Allows changes/removal

6. **Saved on form submit**:
   - Becomes part of website data
   - Appears on live website

### Storage:

- **Where:** Browser localStorage
- **Limit:** ~5-10MB total per domain
- **Persistence:** Survives page refresh
- **Cleared:** Only if you clear browser data

### Performance:

- **Compression:** Images automatically compressed
- **Loading:** Optimized for fast display
- **Caching:** Browser caches for speed
- **Fallback:** Can still use URLs if preferred

---

## ❓ Troubleshooting

### "File too large" error

**Problem:** File exceeds size limit

**Solution:**
- Compress image before upload (TinyPNG.com)
- Resize image to smaller dimensions
- For video, use HandBrake to compress
- Or use URL method instead

### "Invalid file type" error

**Problem:** File format not supported

**Solution:**
- Convert to JPEG or PNG (for images)
- Convert to MP4 (for videos)
- Use online converters (CloudConvert.com)

### Upload stuck at "Processing..."

**Problem:** Upload taking too long

**Solutions:**
- Check internet connection
- Reload page and try again
- Use smaller file size
- Try different browser
- Clear browser cache

### Preview not showing

**Problem:** File uploaded but no preview

**Solutions:**
- Refresh the page
- Check browser console for errors
- Try uploading again
- Use different file

### File not appearing on website

**Problem:** Uploaded but not visible

**Solutions:**
- Click "Save" button on form
- Wait for success notification
- Refresh website
- Check if you're logged in
- Try uploading again

---

## 🆚 Upload vs URL: When to Use Each

### Use File Upload When:

✅ You have files on your device
✅ You want automatic compression
✅ You want drag and drop
✅ You prefer simplicity
✅ Files are under size limits

### Use URL Method When:

✅ Image already online
✅ File is very large (>5MB image, >20MB video)
✅ Using external hosting (Cloudinary, etc.)
✅ Sharing files across sites
✅ Need specific CDN features

### Both Work Great!

You can use **BOTH** methods:
- Upload files directly for convenience
- Use URLs for large files or external hosting
- Mix and match as needed
- Switch between methods anytime

---

## 📊 File Size Limits

| Type | Max Size | Recommended | Format |
|------|----------|-------------|--------|
| Logo | 5MB | 200KB | PNG |
| Services | 5MB | 500KB | JPEG |
| Gallery | 5MB | 500KB | JPEG |
| Testimonials | 5MB | 100KB | JPEG |
| Hero Video | 20MB | 10MB | MP4 |

---

## 🎯 Quick Reference

### Upload Shortcuts:

- **Click upload area** → Opens file picker
- **Drag file** → Uploads immediately
- **Click "Change"** → Replace current file
- **Click X** → Remove file

### File Requirements:

**Images:**
- JPEG, PNG, GIF, WebP
- Max 5MB
- Auto-compressed
- Preview included

**Videos:**
- MP4, WebM, OGG
- Max 20MB (10MB recommended)
- Preview player
- Autoplay on homepage

---

## 🎉 Benefits of File Upload

### Before (URL Only):
1. Find image online
2. Right-click → Copy image URL
3. Paste in admin panel
4. Hope URL stays working
5. No compression

### Now (File Upload):
1. ✅ Click upload
2. ✅ Select from device
3. ✅ Automatic compression
4. ✅ Instant preview
5. ✅ Stored permanently

### Advantages:

✅ **Easier** - No need to find URLs
✅ **Faster** - Direct from device
✅ **Compressed** - Automatic optimization
✅ **Permanent** - Won't break like external URLs
✅ **Preview** - See before saving
✅ **Drag & Drop** - Super convenient
✅ **Validation** - Catches errors early

---

## 🚀 Start Uploading!

Ready to upload your files?

1. **Login:** `http://localhost:5173/login`
2. **Choose section:** Settings, Gallery, Services, etc.
3. **Click upload area**
4. **Select your file**
5. **Done!**

**It's that easy!** 🎊

---

## 📞 Need Help?

**Common issues:**
- File too large → Compress it
- Wrong format → Convert it
- Upload fails → Try smaller file
- Preview blank → Refresh page

**Still stuck?**
- Check browser console for errors
- Try incognito mode
- Clear browser cache
- Try different file

---

## ✨ You Can Now Upload Everything!

**No more hunting for image URLs!**

Just click, select, and upload! 🚀

Your luxury fashion website is now even easier to manage! 🌟
