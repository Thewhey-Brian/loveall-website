# LoveAll.ai - Tennis Intelligence Platform

A modern, artistic website for LoveAll.ai - reimagining tennis analytics through the intersection of advanced machine learning and classical aesthetics.

## Features

- **Dual-View Design**: Toggle between LoveAll (main product) and LIO (research division)
- **Artistic Animations**: Canvas-based animated backgrounds with oil painting effects
- **Smooth Transitions**: Framer Motion powered animations throughout
- **Mobile Responsive**: Fully responsive design with mobile-optimized navigation
- **Contact Form**: Integrated email validation and form handling
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Error Boundaries**: Graceful error handling with user-friendly fallbacks

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── AnimatedSection.jsx    # Reusable animation wrapper
│   ├── ErrorBoundary.jsx      # Error boundary component
│   ├── FeatureCard.jsx        # Feature display card
│   ├── Features.jsx           # Features section
│   ├── Footer.jsx             # Footer with contact form
│   ├── GallerySection.jsx     # Image gallery showcase
│   ├── Hero.jsx               # Hero section
│   ├── Lio.jsx                # LIO research page
│   ├── LivingBackground.jsx   # Animated canvas background
│   ├── LoadingScreen.jsx      # Loading state component
│   ├── Navigation.jsx         # Main navigation with mobile menu
│   ├── OilPaintingFilter.jsx  # SVG filters for artistic effects
│   └── SEO.jsx                # SEO meta tag manager
├── App.jsx                    # Main app component
├── main.jsx                   # App entry point
└── index.css                  # Global styles

## Color Palette

### LoveAll Theme (Home)
- Royal Blue: #1e3a8a
- Light Blue: #3b82f6, #60a5fa
- Navy: #172554
- Cream: #f3f0e6

### LIO Theme (Lab)
- Hermès Orange: #fc4c02, #ea580c
- Charcoal: #292524, #44403c
- Stone: #1c1917
- Warm Grey: #f5f5f4

## Customization

### Updating Content

Edit the component files in `src/components/` to update:
- Hero messaging (`Hero.jsx`)
- Feature descriptions (`Features.jsx`)
- Gallery images (`GallerySection.jsx`)
- Footer content (`Footer.jsx`)

### Styling

The project uses Tailwind CSS. Customize the theme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      'cream': '#f3f0e6',
      // Add more custom colors
    }
  }
}
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Upload the `dist/` folder to your hosting provider.

## Performance Optimizations

- Lazy loading for images
- Framer Motion animations use GPU acceleration
- Canvas animations optimized with requestAnimationFrame
- Code splitting with React.lazy() (ready for expansion)
- Tailwind CSS purges unused styles in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 LoveAll AI Inc. All rights reserved.

## Contact

For questions or support, visit the contact section on the website.
