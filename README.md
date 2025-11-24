# eKazi

A lightweight React + Vite job board / recruitment UI template. It provides a responsive landing page, candidate profiles, job listings, and utility UI components for building a recruitment platform.

Core app entry points:
- [`App`](src/App.jsx) — routes and app layout
- [`main.jsx`](src/main.jsx) — React bootstrap
- [`index.css`](src/index.css) — global styles / Tailwind imports
- Components live in [`src/components`](src/components) (e.g. [`Footer`](src/components/Footer.jsx), [`HeroSection`](src/components/HeroSection.jsx))

## Quick start / Installation

Requirements:
- Node.js (v16+) and npm

Install and run locally:

```sh
# Install dependencies
npm install

# Start dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

See the project scripts in [package.json](package.json).

## Project structure (high level)

- src/
  - App.jsx — main router and pages
  - main.jsx — app entry
  - index.css — global styles & Tailwind
  - components/ — UI components (Navbar, Footer, Jobs, CandidateProfile, ...)
  - data/ — sample data (jobs, candidates, logos, links)
  - hooks/, lib/, pages/ — utilities, hooks, and pages

Open key files:
- [`src/App.jsx`](src/App.jsx)
- [`src/main.jsx`](src/main.jsx)
- [`src/index.css`](src/index.css)
- [`src/components/Footer.jsx`](src/components/Footer.jsx)
- [`vite.config.js`](vite.config.js)

## Tools & Dependencies

Primary runtime dependencies (see full list in [package.json](package.json)):

- React: react, react-dom — UI library
- Vite: vite — dev server / bundler
- Tailwind CSS: tailwindcss + @tailwindcss/vite — styling utility framework
- lucide-react — icon set used across components
- clsx & tailwind-merge — utility helpers for className merging

Key dev dependencies:
- @vitejs/plugin-react — React plugin for Vite
- eslint / plugins — linting

## Notes

- Styles rely on Tailwind; see [`index.css`](src/index.css) for font and Tailwind imports.
- Routing is handled with react-router; see [`App`](src/App.jsx).
- Sample data is in `src/data/` (jobs, candidates, logos, links), used by components such as [`FeaturesSection`](src/components/FeaturesSection.jsx) and [`JobsSection`](src/components/JobsSection.jsx).

## Links

- Website: https://ekazi.vercel.app
- Repository: https://github.com/ibrahimherith/ekazi
