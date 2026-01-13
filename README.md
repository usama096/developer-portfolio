# Developer Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Static Site Generation (SSG)** - Lightning-fast page loads
- 🎨 **Modern UI** - Clean, professional design with dark/light mode
- 📝 **MDX Blog** - Write blog posts in Markdown with React components
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap
- 📱 **Fully Responsive** - Mobile-first design
- 🎭 **Subtle Animations** - Powered by Framer Motion
- 🚀 **Vercel Ready** - One-click deployment

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Blog:** MDX with next-mdx-remote
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
```

## Project Structure

```
portfolio-site/
├── components/         # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── ProjectCard.tsx
│   └── BlogCard.tsx
├── data/              # Static data (projects, etc.)
│   └── projects.ts
├── lib/               # Utility functions
│   └── posts.ts
├── pages/             # Next.js pages
│   ├── index.tsx
│   ├── about.tsx
│   ├── projects.tsx
│   └── blog/
│       ├── index.tsx
│       └── [slug].tsx
├── posts/             # MDX blog posts
│   └── union-find-algorithm.mdx
├── public/            # Static assets
│   ├── images/
│   ├── blog-images/
│   ├── robots.txt
│   └── sitemap.xml
├── styles/            # Global styles
│   └── globals.css
└── types/             # TypeScript types
    └── index.ts
```

## Adding Content

### New Blog Post

Create a new `.mdx` file in the `posts/` directory:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2026-01-15"
image: "/blog-images/your-image.png"
---

Your content here...
```

### New Project

Add a new project to `data/projects.ts`:

```typescript
{
  title: 'Project Name',
  description: 'Project description',
  image: '/images/projects/project.png',
  techStack: ['React', 'Node.js'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
}
```

## Customization

### Personal Information

Update the following files with your information:
- `components/Navbar.tsx` - Logo initials and name
- `components/Footer.tsx` - Contact info and social links
- `components/Layout.tsx` - Default SEO meta tags
- `pages/index.tsx` - Hero section content
- `pages/about.tsx` - About page content

### Styling

- Colors: Edit `tailwind.config.js` to change the primary color palette
- Fonts: Update font imports in `styles/globals.css`
- Components: Modify component styles in their respective files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy!

The site will automatically rebuild when you push changes.

### Other Platforms

Since this is a static site, you can deploy to any static hosting:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## License

MIT License - feel free to use this template for your own portfolio!

