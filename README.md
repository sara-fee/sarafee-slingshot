# Personal Website Template

A modern, responsive personal website built with Next.js 14+ and React 18.

## Features

- 🏠 Home page with hero section and highlights
- 👤 About page with bio, skills, and experience
- 💼 Projects page showcasing your work
- 📧 Contact page with interactive form
- 📱 Fully responsive design
- ♿ Accessibility-focused (ARIA labels, semantic HTML)
- 🎨 Clean, modern UI with CSS custom properties
- ⚡ Built with Next.js App Router
- 📝 TypeScript support

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy `.env.local.example` to `.env.local` and update with your information:

```bash
cp .env.local.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Content

- **Home Page**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Projects Page**: Edit `app/projects/page.tsx`
- **Contact Page**: Edit `app/contact/page.tsx`

### Styling

- **Global Styles**: `app/globals.css`
- **Component Styles**: Individual CSS modules in component folders
- **Theme Colors**: Update CSS custom properties in `app/globals.css`

### Navigation & Footer

- **Navigation**: `components/Navigation/Navigation.tsx`
- **Footer**: `components/Footer/Footer.tsx`

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation/        # Navigation component
│   ├── Footer/           # Footer component
│   └── ContactForm/      # Contact form component
├── public/               # Static assets
└── package.json          # Dependencies
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

- Build the project: `npm run build`
- Start the production server: `npm start`

## Technologies Used

- **Framework**: Next.js 14.2.18
- **UI Library**: React 18.3.1
- **Language**: TypeScript 5.7.2
- **Styling**: CSS3 with CSS Modules
- **Linting**: ESLint

## License

MIT License - feel free to use this template for your personal website!

## Support

If you have any questions or need help customizing the template, please open an issue.