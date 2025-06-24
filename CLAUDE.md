# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Agrosken is a React + TypeScript + Vite application focused on agricultural technology services. It uses Tailwind CSS v4 for styling and Framer Motion for animations.

## Essential Commands

```bash
# Development
npm run dev          # Start Vite dev server at http://localhost:5173

# Building
npm run build        # Type check with tsc then build with Vite
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check if formatting is needed
```

## Architecture Overview

The application follows a component-based architecture with:

- **Pages**: Located in `src/pages/`, currently contains landing-page components
- **Components**: Reusable UI components in `src/components/`, organized by feature (Hero, Navbar, ServiceCard, Services)
- **Data Models**: Service definitions and types in `src/data/services.ts`
- **Styling**: Tailwind CSS v4 with Vite plugin, global styles in `src/index.css`
- **Animations**: Framer Motion for interactive animations

## Key Technical Details

- **React 19.1.0**: Latest React version with TypeScript support
- **TypeScript**: Strict mode enabled, project references setup with separate configs for app and node environments
- **Tailwind CSS v4**: New plugin-based approach via `@tailwindcss/vite`
- **ESLint**: Modern flat config with TypeScript and React plugins
- **Build Tool**: Vite for fast development and optimized production builds

## Development Workflow

1. All TypeScript files must pass type checking before build
2. Code formatting is enforced via Prettier
3. ESLint checks for code quality and React best practices
4. Components should be organized by feature in the components directory
5. Page-level components go in the pages directory

## Visual Testing Workflow

When making UI changes, ALWAYS:
1. Ensure dev server is running (`npm run dev`)
2. Run `npm run screenshot` to capture visual state
3. Use the Read tool to examine screenshots in `/screenshots/`:
   - `hero-section.png` - Hero section with Get Started button
   - `hero-hover.png` - Button hover state
   - `services-section.png` - Services display with icons
   - `full-page.png` - Complete page view
4. Verify visual changes match intended design
5. Check for regressions in animations, colors, and layouts

This automated visual testing helps ensure UI consistency and catch visual bugs early.