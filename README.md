# Arstyn

A modern, futuristic website built with Next.js 14, React, and Tailwind CSS featuring interactive 3D elements powered by Spline.

## Features

-   **Next.js 14 App Router**: Modern Next.js architecture with server and client components
-   **Interactive 3D Hero Section**: Powered by Spline for immersive user experience
-   **Smooth Animations**: Using Framer Motion for fluid page transitions
-   **Modern UI**: Built with Tailwind CSS for responsive, beautiful design
-   **SEO Optimized**: Built-in sitemap and metadata
-   **Test Page**: Backend connectivity test page at `/test`

## Tech Stack

-   **Next.js 14** - React framework with App Router
-   **React 18** - UI library
-   **Tailwind CSS** - Utility-first CSS framework
-   **Framer Motion** - Animation library
-   **Spline** - 3D design tool integration
-   **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

-   Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `.next` directory.

### Start Production Server

```bash
npm start
```

## Project Structure

```
arstyn/
├── src/
│   ├── app/
│   │   ├── layout.jsx         # Root layout with metadata
│   │   ├── page.jsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── sitemap.js         # SEO sitemap
│   │   └── test/
│   │       └── page.jsx       # Backend test page
│   └── components/
│       ├── AmbientBeams.jsx   # Ambient background effects
│       ├── Navbar.jsx         # Navigation header
│       ├── Hero.jsx           # Hero section with 3D Spline scene
│       ├── Solutions.jsx      # Services/solutions section
│       └── Footer.jsx         # Footer with contact info
├── public/
│   └── robots.txt             # SEO robots file
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── jsconfig.json              # Path aliases configuration
```

## Routes

-   `/` - Main landing page
-   `/test` - Backend connectivity test page

## Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

## Key Differences from Vite Version

### Next.js App Router Structure

-   Uses `src/app/` directory for routes
-   `page.jsx` files define routes
-   `layout.jsx` provides shared layout and metadata

### Client Components

Components using hooks or browser APIs need `'use client'` directive:

-   `Navbar.jsx`
-   `Hero.jsx`
-   `Solutions.jsx`
-   `test/page.jsx`

### Path Aliases

-   Use `@/` prefix for imports from `src/`
-   Example: `import Navbar from '@/components/Navbar'`

### Environment Variables

-   Use `NEXT_PUBLIC_` prefix for client-side env vars
-   Access via `process.env.NEXT_PUBLIC_*`

### Navigation

-   Use `Link` from `next/link` for client-side navigation
-   Hash links (`#expertise`) work with regular `<a>` tags

## Customization

### Updating the 3D Scene

The Spline 3D scene is located in `src/components/Hero.jsx`. Replace the scene URL with your own Spline project:

```jsx
<Spline
    scene="YOUR_SPLINE_SCENE_URL"
    style={{ width: "100%", height: "100%" }}
/>
```

### Updating Colors

The project uses Tailwind CSS. You can customize colors in `tailwind.config.js`.

### Updating Content

-   **Company Info**: Edit `src/components/Footer.jsx`
-   **Services**: Edit `src/components/Solutions.jsx`
-   **Hero Content**: Edit `src/components/Hero.jsx`
-   **SEO Metadata**: Edit `src/app/layout.jsx`

## SEO

The project includes:

-   Metadata in `src/app/layout.jsx`
-   Dynamic sitemap at `src/app/sitemap.js`
-   `robots.txt` in `public/`

Update these files to customize your SEO settings.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the project:

```bash
npm run build
```

Then deploy the `.next` folder with your hosting provider that supports Next.js.

## License

See the LICENSE file for details.
