# 🎛️ Complete Admin Panel Guide

## 🔐 Accessing the Admin Panel

### Login Credentials
- **URL:** `http://localhost:5173/login` (or your-domain.com/login)
- **Email:** `admin@elegancecouture.com`
- **Password:** `admin123`

### First Time Login
1. Go to `/login` in your browser
2. Enter the email and password above
3. Click "Sign In"
4. You'll be redirected to `/admin` (Dashboard)

---

## 📊 Admin Panel Structure

### Sidebar Navigation
The admin panel has a collapsible sidebar with 8 main sections:

```
📊 Dashboard          - Overview & statistics
⚙️  Website Settings   - Control all website content
🎥 Hero Video         - Manage background video
🖼️  Gallery            - Add/remove images
💼 Services           - Manage service listings
📅 Bookings           - Handle customer bookings
💬 Testimonials       - Manage customer reviews
📝 Blog               - Blog management (coming soon)
```

### Top Bar
- **Current Page Title** - Shows which section you're in
- **View Website Button** - Opens website in new tab
- **User Info** - Shows logged-in admin name

---

## 1️⃣ DASHBOARD PAGE (`/admin`)

### Overview Section
Shows welcome message and quick stats

### Statistics Cards
Four main metrics displayed:

**📊 Total Services**
- Shows count of all services
- Blue background
- Click-through to Services page

**🖼️ Gallery Items**
- Shows count of gallery images
- Green background
- Click-through to Gallery page

**📅 Total Bookings**
- Shows count of all bookings
- Yellow background
- Click-through to Bookings page

**⭐ Testimonials**
- Shows count of testimonials
- Purple background
- Click-through to Testimonials page

### Pending Bookings Panel
- Shows all bookings with status "pending"
- Displays customer name
- Shows service requested
- Shows date and time
- Shows when booking was created
- Limited to 5 most recent

### Recent Bookings Panel
- Shows 5 most recent bookings
- Color-coded status badges:
  - Yellow = Pending
  - Green = Approved
  - Blue = Completed
  - Red = Cancelled

### Quick Actions
Four shortcut buttons:
- **Add Service** → Services page
- **Add Gallery** → Gallery page
- **Add Testimonial** → Testimonials page
- **Settings** → Website Settings

---

## 2️⃣ WEBSITE SETTINGS (`/admin/settings`)

### Complete Control Over Website Content

This is the **MOST POWERFUL** section - control everything!

#### Basic Information
**Site Name**
- Changes website name everywhere
- Appears in navbar
- Appears in footer
- Appears in page titles

**Logo URL**
- Paste image URL for your logo
- Appears in navbar (circular, 48px)
- Supports any image format
- Example: `https://example.com/logo.png`

#### Color Customization
**Primary Color**
- Default: Black (#000000)
- Controls main theme color
- Color picker interface
- Changes instantly

**Secondary Color (Gold)**
- Default: Gold (#D4AF37)
- Controls accent color
- Color picker interface
- Changes instantly

#### Hero Section
**Hero Title**
- Main headline on homepage
- Default: "Crafting Timeless Elegance"
- Large, bold display
- Animated entrance

**Hero Subtitle**
- Tagline below title
- Default: "Bespoke tailoring for the distinguished individual"
- Smaller, elegant font
- Animated entrance

#### About Section
**About Title**
- Not currently editable in form
- Controls about section heading

**About Description**
- Full paragraph for about section
- Tells your company story
- Appears on homepage and about page
- Textarea for long text

#### Contact Information
**WhatsApp Number**
- Format: +2348012345678
- Include country code
- No spaces or dashes
- Powers all WhatsApp buttons
- Opens direct chat

**Email**
- Your business email
- Powers all email links
- Opens default email client
- Example: contact@yourbusiness.com

**Phone**
- Display phone number
- Appears in footer and contact page
- Click-to-call on mobile
- Example: +234 801 234 5678

**Address**
- Full business address
- Appears in footer and contact page
- Multiple lines supported
- Example: 123 Fashion Avenue, Lagos, Nigeria

#### Social Media
**Instagram URL**
- Full Instagram profile URL
- Example: https://instagram.com/yourbusiness
- Shows icon in footer
- Opens in new tab

**Facebook URL**
- Full Facebook page URL
- Example: https://facebook.com/yourbusiness
- Shows icon in footer
- Opens in new tab

**Twitter URL**
- Full Twitter profile URL
- Example: https://twitter.com/yourbusiness
- Shows icon in footer
- Opens in new tab

#### Footer
**Footer Text**
- Copyright and footer message
- Default: "© 2024 Élégance Couture. All rights reserved."
- Appears at bottom of every page

### How to Update Settings
1. Click "Website Settings" in sidebar
2. Edit any field you want to change
3. All changes are instant (no save needed for viewing)
4. Click "Save Settings" button at bottom
5. Success notification appears
6. Changes appear on website immediately
7. Open website to see changes

---

## 3️⃣ HERO VIDEO MANAGER (`/admin/hero-video`)

### Video Management Interface

**Current Video Display**
- Shows current hero video URL
- Preview player below form
- Full controls (play, pause, volume)

**Change Video**
1. Enter new video URL in text field
2. Must be direct .mp4 link
3. Click "Save Video"
4. Success notification appears
5. Preview updates immediately
6. Video updates on website

### Video Requirements
- **Format:** MP4 only
- **Size:** Under 10MB recommended (for fast loading)
- **Orientation:** Landscape preferred
- **Quality:** 1080p or 720p
- **Duration:** Any (will loop)

### Free Video Sources
1. **Pexels.com** - Download fashion videos
2. **Pixabay.com** - Free stock videos
3. **Mixkit.co** - Free video clips
4. **Videvo.net** - Free stock footage

### How to Get Direct Video URL
1. Upload video to hosting service
2. Get direct link ending in .mp4
3. Or use services like:
   - Cloudinary
   - Vimeo (direct link)
   - Google Drive (public link)

### Video Behavior
- Autoplays on page load
- Loops continuously
- Always muted
- Fullscreen background
- 60% dark overlay
- Responsive on all devices

---

## 4️⃣ GALLERY MANAGER (`/admin/gallery`)

### Gallery Overview
- Shows total count: "Gallery Items (X)"
- Grid display of all images
- Add new button (top-right)

### Adding Gallery Items
1. Click "Add New" button
2. Form appears with fields:

**Image URL**
- Direct link to image
- Required field
- Example: https://unsplash.com/image.jpg

**Title**
- Image title/name
- Required field
- Appears on hover
- Example: "Evening Gown Collection"

**Category**
- Group similar images
- Required field
- Used for filtering
- Example: "Wedding", "Suits", "Native"

3. Click "Add Item"
4. Image appears instantly in grid
5. Shows on website immediately

### Managing Gallery
**View Images**
- Grid layout (3 columns on desktop)
- Each card shows:
  - Image preview
  - Title
  - Category
  - Delete button

**Delete Images**
1. Find image in grid
2. Click red "Delete" button
3. Confirm deletion
4. Image removed instantly
5. Updates on website immediately

### Best Practices
- **Image Size:** 800x1000px recommended
- **File Size:** Under 500KB per image
- **Format:** JPG or PNG
- **Quality:** High-quality, professional photos
- **Quantity:** 12-24 images minimum
- **Categories:** Use consistent naming

### Free Image Sources
1. **Unsplash.com** - Professional photos
2. **Pexels.com** - Free stock images
3. **Pixabay.com** - Free images

---

## 5️⃣ SERVICE MANAGER (`/admin/services`)

### Services Overview
- Shows total count: "Services (X)"
- Grid display of all services
- Add new / Edit / Delete options

### Adding New Service
1. Click "Add New" button
2. Form appears with fields:

**Title** (Required)
- Service name
- Example: "Bespoke Suits"

**Description** (Required)
- Service description
- 2-3 sentences
- Example: "Handcrafted suits tailored to perfection for the modern gentleman"

**Image URL** (Required)
- Direct image link
- 800x600px recommended
- Example: https://example.com/service.jpg

**Price** (Required)
- Pricing display
- Include "From" if starting price
- Example: "From ₦250,000"

**Features** (Up to 4)
- Service highlights
- Optional, but recommended
- Examples:
  - Premium fabrics
  - Custom fit
  - Hand-stitched details
  - Lifetime alterations

3. Click "Add Service"
4. Service appears in grid
5. Shows on website immediately

### Editing Services
1. Find service card in grid
2. Click blue "Edit" button
3. Form pre-fills with current data
4. Make changes
5. Click "Update Service"
6. Changes save instantly

### Deleting Services
1. Find service card
2. Click red "Delete" button
3. Confirm deletion
4. Service removed instantly

### Service Display
Each service card shows:
- Service image (top)
- Title and price (on image overlay)
- Description
- Edit and Delete buttons

---

## 6️⃣ BOOKING MANAGER (`/admin/bookings`)

### Bookings Overview
- Shows total count in header
- Filter dropdown (top-right)
- Full table view of bookings

### Filter Options
- **All Bookings** - Shows everything
- **Pending** - Awaiting approval
- **Approved** - Confirmed bookings
- **Completed** - Finished appointments
- **Cancelled** - Rejected bookings

### Booking Table Columns
1. **Name** - Customer full name
2. **Contact** - Email and phone number
3. **Service** - Requested service
4. **Date/Time** - Appointment date and time
5. **Status** - Current status with color badge
6. **Actions** - Approve/Cancel/Delete buttons

### Managing Bookings

**Approve Booking** (Pending only)
1. Find pending booking
2. Click green checkmark (✓) button
3. Status changes to "Approved"
4. Badge turns green
5. Customer should be notified manually

**Cancel Booking** (Pending only)
1. Find pending booking
2. Click red X button
3. Status changes to "Cancelled"
4. Badge turns red

**Delete Booking** (Any status)
1. Find booking row
2. Click trash icon
3. Confirm deletion
4. Booking removed permanently

### Booking Details Shown
Each booking contains:
- Customer name
- Email address
- Phone number
- Service requested
- Appointment date
- Appointment time
- Customer measurements (if provided)
- Additional message (if provided)
- Booking submission date
- Current status

### Status Badge Colors
- 🟡 **Yellow** = Pending
- 🟢 **Green** = Approved
- 🔵 **Blue** = Completed
- 🔴 **Red** = Cancelled

### Best Practices
1. Check bookings daily
2. Respond within 24 hours
3. Approve valid bookings promptly
4. Contact customer after approval
5. Update to completed after appointment
6. Use WhatsApp for quick communication

---

## 7️⃣ TESTIMONIAL MANAGER (`/admin/testimonials`)

### Testimonials Overview
- Shows total count
- Grid display (3 columns)
- Add new button

### Adding Testimonials
1. Click "Add New" button
2. Form appears with fields:

**Name** (Required)
- Customer full name
- Example: "Adebayo Johnson"

**Role** (Required)
- Job title or description
- Example: "CEO, Tech Innovations"

**Testimonial** (Required)
- Customer review text
- 2-3 sentences recommended
- Quote automatically added
- Example: "The attention to detail and craftsmanship is unparalleled."

**Image URL** (Required)
- Customer photo URL
- 150x150px recommended
- Circular display
- Example: https://example.com/customer.jpg

**Rating** (Required)
- Star rating dropdown
- Options: 5, 4, or 3 stars
- 5 stars recommended
- Displays as gold stars

3. Click "Add Testimonial"
4. Appears in grid instantly
5. Shows on website immediately

### Testimonial Display
Each card shows:
- Star rating (top)
- Testimonial text (quoted)
- Customer photo
- Customer name
- Customer role
- Delete button

### Deleting Testimonials
1. Find testimonial card
2. Click red "Delete" button
3. Confirm deletion
4. Removed instantly

### Best Practices
- Get permission from customers
- Use real photos
- Keep testimonials concise
- Focus on specific benefits
- Add 3-6 testimonials minimum
- Update regularly with new reviews

---

## 8️⃣ BLOG MANAGER (`/admin/blog`)

### Current Status
- **Coming Soon** placeholder
- Blog functionality not yet implemented
- Reserved for future enhancement

### Planned Features
- Create blog posts
- Edit existing posts
- Delete posts
- Add images to posts
- Categorize posts
- Publish/draft status
- SEO settings per post

---

## 🎨 ADMIN PANEL DESIGN

### Layout
- **Sidebar:** Fixed left side (collapsible)
- **Main Content:** Scrollable right side
- **Top Bar:** Fixed header with page title
- **Responsive:** Adapts to mobile/tablet

### Color Scheme
- **Background:** Light gray (#F3F4F6)
- **Sidebar:** Black (#000000)
- **Accent:** Gold (#D4AF37)
- **Cards:** White with shadows
- **Text:** Dark gray for readability

### Navigation
- **Active Page:** Gold background in sidebar
- **Hover:** Light highlight on menu items
- **Icons:** Lucide React icons
- **Transitions:** Smooth animations

---

## 🔐 SECURITY FEATURES

### Authentication
- Login required for all admin pages
- Protected routes
- Session management
- Logout functionality

### Session Handling
- Token stored in localStorage
- Persists across page refreshes
- Cleared on logout
- Auto-redirects if not logged in

### Logout
1. Click "Logout" button (bottom of sidebar)
2. Confirmation (automatic)
3. Redirects to login page
4. Session cleared
5. Must login again to access admin

---

## 📱 MOBILE ADMIN

### Mobile Responsive
- Sidebar becomes overlay
- Hamburger toggle button
- Touch-friendly buttons
- Optimized forms
- Scrollable tables

### Tablet View
- Sidebar can collapse
- More compact layout
- Touch-optimized
- All features accessible

---

## 💡 TIPS & TRICKS

### Efficient Workflow
1. **Dashboard First** - Check stats and pending items
2. **Handle Bookings** - Approve/respond daily
3. **Update Content** - Add gallery/testimonials weekly
4. **Check Settings** - Verify contact info monthly

### Common Tasks

**Quick Service Update:**
1. Services → Find service → Edit
2. Change price/description
3. Update → Done

**Bulk Gallery Upload:**
1. Prepare all image URLs
2. Gallery → Add New
3. Add one by one
4. Faster with URLs ready

**Booking Workflow:**
1. Bookings → Filter: Pending
2. Review details
3. Approve or cancel
4. Contact customer via WhatsApp
5. Update to completed after appointment

### Keyboard Shortcuts
- **Tab** - Navigate form fields
- **Enter** - Submit forms
- **Esc** - Close modals/forms
- **Ctrl+R** - Refresh data

---

## 🚨 TROUBLESHOOTING

### Can't Login
**Solutions:**
- Verify email: admin@elegancecouture.com
- Verify password: admin123
- Clear browser cache
- Try incognito mode
- Check console for errors

### Changes Not Saving
**Solutions:**
- Click "Save" button
- Wait for success notification
- Check internet connection
- Refresh page and try again
- Check browser console

### Images Not Displaying
**Solutions:**
- Use HTTPS URLs (not HTTP)
- Verify URL works in browser
- Check image is publicly accessible
- Try different image hosting
- Compress large images

### Video Not Playing
**Solutions:**
- Use direct .mp4 link
- Verify URL works in browser
- Compress video file
- Try different video hosting
- Check file size

---

## 📊 DATA MANAGEMENT

### Data Storage
All data stored in browser **localStorage**:
- Settings
- Services
- Gallery
- Testimonials
- Bookings
- Users

### Data Persistence
- Survives page refresh
- Stays until manually cleared
- 5-10MB storage limit
- Per domain

### Backup Data
**Manual Backup:**
1. Open browser console (F12)
2. Type: `localStorage`
3. Copy all data
4. Save to text file

**Restore Data:**
1. Paste data back into localStorage
2. Refresh page

### Clear Data
**Warning: This deletes everything!**
1. Browser console (F12)
2. Type: `localStorage.clear()`
3. Refresh page
4. Default data reloads

---

## 🎯 ADMIN PANEL CHECKLIST

### Daily Tasks
- [ ] Check new bookings
- [ ] Respond to pending bookings
- [ ] Monitor dashboard stats

### Weekly Tasks
- [ ] Add new gallery images
- [ ] Add new testimonials
- [ ] Review services
- [ ] Check all pages

### Monthly Tasks
- [ ] Update settings if needed
- [ ] Review pricing
- [ ] Backup data
- [ ] Check for broken links

---

## ✨ ADMIN CAPABILITIES SUMMARY

### ✅ You Can Control:
- ✅ Every word on the website
- ✅ Every image on the website
- ✅ Every video on the website
- ✅ Every color on the website
- ✅ All services (add/edit/delete)
- ✅ All gallery images (add/delete)
- ✅ All testimonials (add/edit/delete)
- ✅ All bookings (approve/cancel/delete)
- ✅ All contact information
- ✅ All social media links

### ✅ Changes Are:
- ✅ Instant (no delay)
- ✅ Real-time (updates immediately)
- ✅ Easy (no code required)
- ✅ Safe (can't break website)
- ✅ Reversible (can change back)

---

## 🎓 MASTERING THE ADMIN PANEL

### Beginner Level (Week 1)
- Learn to login/logout
- Update basic settings
- Add gallery images
- Manage bookings

### Intermediate Level (Week 2-3)
- Update all settings
- Manage services
- Add testimonials
- Customize colors

### Advanced Level (Week 4+)
- Change hero video
- Optimize workflow
- Manage all content efficiently
- Understand data structure

---

## 🎉 YOU'RE NOW AN ADMIN EXPERT!

You have **complete control** over your luxury tailor website through this powerful admin panel!

### Remember:
- 🔐 Keep login credentials safe
- 💾 Backup important data
- ✅ Test changes before announcing
- 📱 Check mobile view after updates
- 🎨 Keep branding consistent
- 📊 Monitor bookings regularly

**Enjoy managing your beautiful luxury fashion website!** 🌟

---

## 📞 Quick Reference

**Login:** `/login`
**Admin Panel:** `/admin`
**Email:** `admin@elegancecouture.com`
**Password:** `admin123`

**Need Help?**
- Check README.md
- Check QUICK_START.md
- Check browser console
- Clear cache and try again

**Happy Managing!** 🎊
