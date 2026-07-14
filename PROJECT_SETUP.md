# Personal Website Template - Setup Guide

## Overview

This is a complete Next.js 14+ personal website template with TypeScript support. The template includes four main pages: Home, About, Projects, and Contact.

## Project Structure

```
.
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   │   ├── page.tsx
│   │   └── about.module.css
│   ├── contact/             # Contact page
│   │   ├── page.tsx
│   │   └── contact.module.css
│   ├── projects/            # Projects page
│   │   ├── page.tsx
│   │   └── projects.module.css
│   ├── layout.tsx           # Root layout with Navigation & Footer
│   ├── page.tsx             # Home page
│   ├── page.module.css      # Home page styles
│   └── globals.css          # Global styles & CSS variables
├── components/              # Reusable React components
│   ├── Navigation/
│   │   ├── Navigation.tsx
│   │   └── Navigation.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   └── ContactForm/
│       ├── ContactForm.tsx
│       └── ContactForm.module.css
├── public/                  # Static assets (add your images here)
├── .env.local.example       # Environment variables template
├── .gitignore              # Git ignore configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set Up Environment Variables

Copy the example environment file and update with your information:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your details:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 4. Build for Production

```bash
npm run build
npm start
```

## Features

### ✅ Implemented Features

- **Home Page**: Hero section with CTA buttons and "What I Do" highlights
- **About Page**: Bio section, skills grid, and experience timeline
- **Projects Page**: Project cards with technologies, live demo, and GitHub links
- **Contact Page**: Contact information and interactive form
- **Responsive Navigation**: Mobile hamburger menu with active page highlighting
- **Footer**: Quick links and social media integration
- **Contact Form**: Client-side validation, error handling, and accessibility
- **TypeScript**: Full TypeScript support for type safety
- **CSS Modules**: Component-scoped styling
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Responsive Design**: Mobile-first approach

## Customization Guide

### Update Personal Information

1. **Name & Branding**:
   - Update "Your Name" in all page titles and content
   - Modify the logo text in `components/Navigation/Navigation.tsx`

2. **Home Page** (`app/page.tsx`):
   - Update hero title, subtitle, and description
   - Modify "What I Do" cards with your services

3. **About Page** (`app/about/page.tsx`):
   - Replace bio content with your story
   - Update skills in Frontend, Backend, and Tools sections
   - Modify experience timeline with your work history

4. **Projects Page** (`app/projects/page.tsx`):
   - Replace the `projects` array with your actual projects
   - Update project titles, descriptions, technologies, and links

5. **Contact Page** (`app/contact/page.tsx`):
   - Update email address
   - Modify location
   - Update social media links

### Styling Customization

**Theme Colors** (`app/globals.css`):

```css
:root {
  --color-primary: #3b82f6;        /* Primary brand color */
  --color-primary-dark: #2563eb;   /* Darker shade */
  --color-secondary: #8b5cf6;      /* Secondary color */
  --color-accent: #06b6d4;         /* Accent color */
  /* ... more variables */
}
```

Modify these CSS custom properties to change the entire color scheme.

### Add Your Images

1. Place images in the `public/` folder
2. Reference them in your components:

```tsx
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

### Contact Form Integration

The contact form currently simulates submission. To integrate with a backend:

1. **Option 1: Next.js API Route**
   - Create `app/api/contact/route.ts`
   - Implement POST handler
   - Update `components/ContactForm/ContactForm.tsx` to call the API

2. **Option 2: Third-party Service**
   - Use services like Formspree, EmailJS, or SendGrid
   - Update the form submission logic

## Technologies Used

- **Framework**: Next.js 14.2.18 (App Router)
- **UI Library**: React 18.3.1
- **Language**: TypeScript 5.7.2
- **Styling**: CSS3 with CSS Modules
- **Linting**: ESLint with Next.js config

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Follow AWS deployment guide
- **Self-hosted**: Build with `npm run build` and serve with `npm start`

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Configure environment variables
3. ✅ Customize content with your information
4. ✅ Add your project images to `public/`
5. ✅ Update project data in Projects page
6. ✅ Test the website locally
7. ✅ Deploy to your preferred platform

## Support

For issues or questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [React Documentation](https://react.dev)
- Check TypeScript errors in your IDE

## License

MIT License - Free to use for personal and commercial projects.

---

**Note**: The TypeScript errors you see are expected until you run `npm install` to install all dependencies. Once installed, all errors will be resolved.