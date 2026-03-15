# RelayOps SaaS Landing Page Template

## Project Overview

RelayOps is a polished B2B SaaS landing page template for a fictional workflow operations platform. The project showcases a production-style marketing site with a product-led hero, dashboard preview, feature storytelling, social proof, pricing, FAQ, and final conversion layer.

It is designed as a portfolio-ready frontend project that demonstrates layout systems, reusable UI architecture, responsive design, accessible interaction patterns, and premium SaaS visual polish.

## Features

- Modern SaaS landing page layout
- Product showcase dashboard preview
- Feature highlight storytelling sections
- Testimonials and social proof
- Pricing section with monthly and yearly billing toggle
- FAQ accordion
- Responsive design across desktop, tablet, and mobile
- Accessible UI patterns with visible focus states and reduced-motion support

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui-style source components
- lucide-react

## Project Structure

```text
src/
  components/
    layout/     # shared page shells such as navbar, footer, container, section
    sections/   # landing page sections and section-specific composites
    ui/         # reusable UI primitives such as buttons, cards, accordion, badges
  lib/          # structured content, mock data, and utility helpers
  pages/        # page composition entry points
  styles/       # global tokens, utilities, and Tailwind-driven design system styles

public/
  favicon.svg   # simple branding placeholder for easy swapping
  og-image.svg  # social sharing image placeholder
```

## Running Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This project is ready for static deployment on Vercel.

- Framework preset: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

### Deploying on Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Vite settings, or confirm the build command is `npm run build`.
4. Confirm the output directory is `dist`.
5. Deploy.

Because the project is a static Vite app with no server runtime or required environment variables, it is compatible with standard Vercel static hosting out of the box.
