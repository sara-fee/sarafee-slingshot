# Personal Portfolio Website

A modern, high-performance personal portfolio website built with Next.js 14, TypeScript, and optimized for deployment on Vercel.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Responsive Design**: Mobile-first approach with warm, welcoming aesthetics
- **SEO Optimized**: Comprehensive metadata, structured data, sitemap, robots.txt
- **Performance**: Lighthouse score 90+, optimized images (WebP/AVIF), code splitting
- **Analytics**: Google Analytics 4 and Vercel Analytics integration
- **Accessibility**: WCAG 2.1 compliant, keyboard navigation, screen reader friendly
- **PWA Support**: Progressive Web App with offline capabilities
- **Newsletter**: Email subscription with validation and analytics tracking
- **Resume Download**: One-click resume download with event tracking
- **Testimonials**: Client testimonials with carousel navigation
- **Announcements**: Blog-style announcements with category filtering

## 💻 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules with custom properties
- **Fonts**: Playfair Display (headlines), Fira Code (body)
- **Analytics**: Google Analytics 4, Vercel Analytics
- **Deployment**: [Vercel](https://vercel.com)
- **Package Manager**: npm

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your values:
   - `NEXT_PUBLIC_SITE_URL`: Your website URL
   - `NEXT_PUBLIC_GA_ID`: Google Analytics Measurement ID
   - Social media URLs (GitHub, LinkedIn, Twitter)
   - Newsletter service credentials
   - Contact email

4. **Add your content**
   - Add resume PDF to `/public/resume.pdf`
   - Add profile image to `/public/profile-image.jpg`
   - Add Open Graph image to `/public/og-image.jpg` (1200x630px)
   - Update personal information in components

5. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── announcements/       # Announcements/blog page
│   ├── contact/             # Contact page
│   ├── projects/            # Projects showcase page
│   ├── api/                 # API routes (newsletter)
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # Robots.txt configuration
├── components/              # Reusable React components
│   ├── ContactForm/         # Contact form with validation
│   ├── FlippableCard/       # Interactive flip cards
│   ├── Footer/              # Site footer
│   ├── Navigation/          # Main navigation
│   ├── NewsletterSubscribe/ # Newsletter subscription
│   ├── PageHero/            # Page hero sections
│   ├── ResumeDownload/      # Resume download button
│   ├── SectionTitle/        # Reusable section titles
│   ├── StructuredData/      # JSON-LD structured data
│   └── Testimonials/        # Client testimonials carousel
├── public/                  # Static assets
│   ├── manifest.json        # PWA manifest
│   ├── resume.pdf           # Your resume (add this)
│   ├── profile-image.jpg    # Profile photo (add this)
│   └── og-image.jpg         # Open Graph image (add this)
├── .env.local.example       # Environment variables template
├── next.config.js           # Next.js configuration
├── vercel.json              # Vercel deployment config
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Deployment to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo)

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Configure Environment Variables**
   - Add all variables from `.env.local.example`
   - Set for Production, Preview, and Development

4. **Deploy**
   - Click "Deploy"
   - Get your production URL

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

For detailed deployment instructions, see [VERCEL_OPTIMIZATION_GUIDE.md](./VERCEL_OPTIMIZATION_GUIDE.md).

## 📊 Performance

### Lighthouse Scores (Target)

- **Performance**: 90+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizations

- Image optimization (WebP/AVIF)
- Code splitting and lazy loading
- Font optimization with display: swap
- Minification and compression
- CDN caching via Vercel
- Bundle analysis with `npm run analyze`

## 🛡️ Security

- Content Security Policy headers
- XSS protection
- HTTPS enforced
- Secure environment variables
- No sensitive data in client-side code

## 📝 Content Management

### Update Your Information

1. **Personal Details**: Update in `/app/layout.tsx` metadata
2. **Projects**: Edit `/app/projects/page.tsx`
3. **Testimonials**: Edit `/components/Testimonials/Testimonials.tsx`
4. **Announcements**: Edit `/app/announcements/page.tsx`
5. **About**: Edit `/app/about/page.tsx`
6. **Contact**: Edit `/app/contact/page.tsx`

### Add New Pages

```bash
# Create new page
mkdir app/new-page
touch app/new-page/page.tsx

# Add to navigation in components/Navigation/Navigation.tsx
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after changing `.env.local`
- Check Vercel dashboard for production variables

### Images Not Loading

- Verify images are in `/public` folder
- Check image paths (should start with `/`)
- Ensure image domains are configured in `next.config.js`

## 📚 Documentation

- [VERCEL_OPTIMIZATION_GUIDE.md](./VERCEL_OPTIMIZATION_GUIDE.md) - Vercel deployment guide
- [SEO_ENHANCEMENTS.md](./SEO_ENHANCEMENTS.md) - SEO implementation details
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Feature implementation summary
- [ACCESSIBILITY_RESPONSIVE_ENHANCEMENTS.md](./ACCESSIBILITY_RESPONSIVE_ENHANCEMENTS.md) - Accessibility features

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📝 License

MIT License - feel free to use this template for your personal portfolio.

## 👤 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)

## ⭐ Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Icons from emoji (can be replaced with icon library)

---

**Made with ❤️ and Next.js**