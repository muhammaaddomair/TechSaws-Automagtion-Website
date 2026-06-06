# TechSaws

TechSaws is a polished marketing website for an AI automation, backend infrastructure, cyber defense, revenue systems, and digital experience agency. The site is built with the Next.js App Router and focuses on service discovery, case studies, credibility-building content, and clear conversion paths.

## Features

- Home page with animated media, service positioning, technology messaging, FAQs, and CTA sections
- Service index plus dynamic service detail pages for automation, backend infrastructure, cyber defense, revenue systems, conversion experiences, strategy, and specialized systems
- Case study index plus dynamic case study detail pages
- Static business pages for about, capabilities, methodology, engagement, contact, privacy, and terms
- Shared layout with site header, footer, loading screen, reusable sections, and UI primitives
- Media-rich public assets for hero videos, GIFs, service backgrounds, and brand imagery

## Tech Stack

- Next.js 16.2
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn-style component setup
- lucide-react icons
- ESLint 9

## Project Structure

```text
src/
  app/                 App Router pages, layouts, metadata, and routes
  components/          Reusable home, layout, media, section, service, and UI components
  lib/                 Shared data and utility helpers
public/
  assets/              Images, videos, animations, and static downloads
```

Important content sources:

- `src/lib/services.ts` controls the service navigation data.
- `src/lib/case-studies.ts` controls the case study list and generated case study routes.
- `src/app/services/[slug]/page.tsx` renders service detail pages.
- `src/app/case-studies/[slug]/page.tsx` renders case study detail pages.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs ESLint.

## Routes

- `/` - Home
- `/about` - Company overview
- `/services` - Service overview
- `/services/[slug]` - Individual service pages
- `/case-studies` - Case study overview
- `/case-studies/[slug]` - Individual case studies
- `/capabilities` - Capabilities overview
- `/methodology` - Delivery approach
- `/engagement` - Engagement model
- `/faq` - Frequently asked questions
- `/contact` and `/connect` - Contact and conversion pages
- `/privacy` and `/terms` - Legal pages

## Development Notes

This project uses Next.js 16, which includes App Router conventions and newer generated route typing patterns. Before making framework-level changes, check the local Next.js docs in `node_modules/next/dist/docs/`, especially for routing, metadata, images, and config behavior.

Static assets live in `public/assets`. Large videos and GIFs are part of the site experience, so check file sizes and loading behavior before adding new media.

## Deployment

The app can be deployed anywhere that supports Next.js. For a typical Vercel deployment:

1. Connect the GitHub repository to Vercel.
2. Use `npm install` for dependencies.
3. Use `npm run build` as the build command.
4. Let Vercel serve the Next.js output.

No required environment variables are currently defined in the repository.
