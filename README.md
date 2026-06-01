# Élégance Couture - Luxury Tailor & Fashion Designer Website

A modern, premium luxury tailoring and fashion design website with a powerful admin dashboard. Built with React, Vite, Tailwind CSS, and featuring complete content management capabilities.

## 🌟 Features

### Frontend Website
- ✨ **Cinematic Hero Section** with autoplay background video
- 🎨 **Premium Design** - Black & Gold luxury aesthetic
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎭 **Smooth Animations** - Framer Motion animations throughout
- 🖼️ **Dynamic Gallery** - Image gallery with lightbox preview
- 💼 **Services Showcase** - Detailed service listings
- 📅 **Booking System** - Appointment booking with form validation
- 💬 **Testimonials** - Customer reviews and ratings
- 📞 **Contact Integration** - WhatsApp, Email, and Contact form
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML

### Admin Dashboard
- 🔐 **Secure Authentication** - Protected admin routes
- 📊 **Dashboard Overview** - Statistics and recent activity
- ⚙️ **Complete Website Control**:
  - Website Settings (name, logo, colors, text)
  - Hero Video Management
  - Gallery Management
  - Services Management (CRUD operations)
  - Booking Management (approve, cancel, delete)
  - Testimonials Management
  - Contact Information
  - Blog Management (coming soon)
- 📤 **File Upload System** - Upload images/videos directly from device (NEW!)

### Special Features
- 🟢 **Floating WhatsApp Button** - Direct chat integration
- 🎥 **Autoplay Hero Video** - Fullscreen background video with overlay
- 🎨 **Glassmorphism Effects** - Modern UI design elements
- 🌙 **Dark Mode Ready** - Framework in place for dark theme
- 💾 **LocalStorage Persistence** - Data persists across sessions
- 🔄 **Real-time Updates** - Instant UI updates on data changes
- 📤 **Direct File Upload** - Upload images/videos from device (drag & drop supported)

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Data Persistence**: LocalStorage (Mock API)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔑 Admin Access

### Default Credentials
```
Email: admin@elegancecouture.com
Password: admin123
```

**Admin Panel URL**: `/login`

## 📱 Pages

### Public Pages
1. **Home** (`/`) - Hero section, about, services, gallery preview, testimonials
2. **About** (`/about`) - Company story, values, statistics
3. **Services** (`/services`) - Detailed service listings
4. **Gallery** (`/gallery`) - Filterable image gallery with lightbox
5. **Booking** (`/booking`) - Appointment booking form
6. **Contact** (`/contact`) - Contact information and quick actions

### Admin Pages
1. **Dashboard** (`/admin`) - Overview and statistics
2. **Settings** (`/admin/settings`) - Website settings management
3. **Hero Video** (`/admin/hero-video`) - Video upload and management
4. **Gallery** (`/admin/gallery`) - Add/remove gallery images
5. **Services** (`/admin/services`) - CRUD for services
6. **Bookings** (`/admin/bookings`) - Manage customer bookings
7. **Testimonials** (`/admin/testimonials`) - Add/edit testimonials
8. **Blog** (`/admin/blog`) - Blog management (coming soon)

## 🎨 Customization Guide

### Changing Website Content
1. Login to admin panel at `/login`
2. Navigate to **Settings** to change:
   - Site name and logo
   - Hero title and subtitle
   - About section text
   - Contact information
   - Social media links
   - Colors (primary, secondary)

### Managing Hero Video
1. Go to **Hero Video** in admin panel
2. Enter video URL (must be direct .mp4 link)
3. Video will autoplay, loop, and be muted automatically

### Adding Services
1. Go to **Services** in admin panel
2. Click "Add New"
3. Fill in service details (title, description, image, price, features)
4. Service appears immediately on website

### Managing Gallery
1. Go to **Gallery** in admin panel
2. Click "Add New"
3. Enter image URL, title, and category
4. Images can be filtered by category on the website

### Handling Bookings
1. Go to **Bookings** in admin panel
2. View all bookings with customer details
3. Approve, cancel, or delete bookings
4. Filter by status (pending, approved, completed, cancelled)

## 📞 WhatsApp Integration

The WhatsApp feature automatically opens a chat with your business number:

1. Set your WhatsApp number in **Settings** (format: +2348012345678)
2. Users can click:
   - Floating WhatsApp button (bottom-right)
   - WhatsApp buttons in navbar and footer
   - Contact page WhatsApp button

## 🎯 Default Services

1. **Bespoke Suits** - Handcrafted suits for modern gentlemen
2. **Native Wears** - Authentic African attire
3. **Wedding Outfits** - Bridal and groom wear
4. **Corporate Wears** - Professional business attire

## 🖼️ Image URLs

The application uses Unsplash images by default. To use custom images:

1. Upload images to a hosting service (Cloudinary, Imgur, etc.)
2. Update image URLs in admin panel
3. Recommended sizes:
   - Services: 800x600px
   - Gallery: 800x1000px
   - Testimonials: 150x150px
   - Logo: 200x200px

## 🎨 Color Scheme

- **Primary**: Black (#000000)
- **Secondary**: Gold (#D4AF37)
- **Accent**: White (#FFFFFF)

Colors can be changed in the Settings panel.

## 🔒 Security Notes

**Important for Production:**
- Current authentication uses localStorage (demo purposes)
- For production, implement proper backend with:
  - JWT tokens with refresh mechanism
  - Password hashing (bcrypt)
  - HTTPS only
  - Rate limiting
  - CSRF protection
  - Secure session management

## 📊 Data Structure

All data is stored in localStorage with the following structure:

```javascript
{
  settings: SiteSettings,
  services: Service[],
  gallery: GalleryItem[],
  testimonials: Testimonial[],
  bookings: Booking[],
  blogs: BlogPost[],
  users: User[]
}
```

## 🚀 Deployment

The build generates a single `index.html` file in the `dist` folder.

**Deploy to:**
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

**Build command:** `npm run build`
**Output directory:** `dist`

## 🎓 Usage Tips

1. **First Time Setup**:
   - Login to admin panel
   - Update all settings with your information
   - Replace hero video with your own
   - Add your services and gallery images
   - Update contact information

2. **Regular Maintenance**:
   - Check bookings regularly
   - Add new testimonials from satisfied clients
   - Update gallery with new work
   - Keep services and pricing current

3. **Customer Experience**:
   - Ensure hero video loads quickly (optimize file size)
   - Keep gallery images optimized for web
   - Respond to bookings promptly
   - Update WhatsApp number if it changes

## 🐛 Troubleshooting

**Video not autoplaying?**
- Browsers require user interaction for autoplay
- Video must be muted for autoplay to work
- Use direct .mp4 URL (not YouTube/Vimeo)

**Images not loading?**
- Ensure URLs are direct image links
- Check CORS if using external images
- Verify image URLs are HTTPS

**Data not persisting?**
- Check browser localStorage is enabled
- Clear cache if data seems corrupted
- localStorage has 5-10MB limit per domain

## 📝 Future Enhancements

- [ ] Real backend API integration
- [ ] Blog functionality
- [ ] Email notifications for bookings
- [ ] Multi-language support
- [ ] Payment integration
- [ ] Advanced analytics
- [ ] Image upload directly from admin panel
- [ ] Customer portal for tracking orders
- [ ] Newsletter system
- [ ] Advanced SEO tools

## 💼 Production Checklist

- [ ] Replace all demo content
- [ ] Update contact information
- [ ] Set up real backend API
- [ ] Configure proper authentication
- [ ] Add SSL certificate
- [ ] Set up email service
- [ ] Configure CDN for images
- [ ] Implement analytics
- [ ] Test on all devices
- [ ] Set up backup system

## 📄 License

This is a demonstration project. For commercial use, ensure you have proper licensing for all assets and dependencies.

## 🙏 Credits

- **Icons**: Lucide React
- **Images**: Unsplash (demo only)
- **Fonts**: Google Fonts (Playfair Display, Montserrat)
- **Video**: Mixkit (demo only)

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review the admin dashboard help sections
- Ensure all dependencies are up to date

---

**Built with ❤️ for luxury fashion businesses**

*A complete, production-ready luxury tailor website with powerful admin controls.*
