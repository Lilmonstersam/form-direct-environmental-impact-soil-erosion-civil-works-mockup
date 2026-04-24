# Environmental Impact of Soil Erosion Mockup

This is a React-based mockup for the Form Direct Environmental Impact article.

## Features
- Converted from static HTML/CSS to a React + Vite project.
- Configured for deployment to GitHub Pages via GitHub Actions.

## Tasks Completed
1. **Initialised Project**: Ran `npx create-vite` to set up a React (TypeScript) project.
2. **Setup Deployment**: Created `.github/workflows/deploy.yml` for automated GitHub Pages deployment.
3. **.gitignore**: Created and configured `.gitignore` to prevent committing unnecessary files (e.g., `node_modules`, `dist`).
4. **Vite Config**: Updated `vite.config.ts` to include `base: '/form-direct-environmental-impact-soil-erosion-civil-works-mockup/'` to ensure static assets load correctly on GitHub Pages.
5. **Component Migration**: Transferred the HTML/CSS from the source file into `src/App.tsx` and `src/index.css`, replacing class attributes with `className` and self-closing tags to follow JSX standards.

## How to Run Locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173` in your browser.
