# TechNative Academy Website

Professional website for TechNative Academy bootcamp programs.

## Features
- 5 Bootcamp course pages with detailed content
- Responsive design for desktop and mobile
- Professional hero sections with course-specific content
- Industry partner profiles and career progression data
- HubSpot integration for lead capture
- Modern React/Vite architecture

## Course Pages
- Software Development (West Sussex)
- Data Analytics (East Sussex)
- AI for Business (Multi-location)
- AI Video Production (AIMI Partnership)
- Digital Video Production (Latest TV Partnership)

## Quick Start

### Local Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push this repository to GitHub
2. Connect GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Automatic deployments on every commit

## Deployment Configuration
- Netlify configuration: `netlify.toml`
- Redirects for SPA routing: `public/_redirects`
- Build optimization: `vite.config.js`

## Project Structure
```
src/
├── components/
│   ├── Navigation.jsx     # Main navigation with dropdown
│   └── CoursePage.jsx     # Dynamic course page component
├── App.jsx               # Main application with routing
├── App.css              # Global styles
└── index.css            # Base styles

public/
├── _redirects           # Netlify SPA routing
├── netlify.toml         # Netlify configuration
└── assets/              # Images and static files
```

## Course Content Management
All course content is managed in `src/components/CoursePage.jsx` in the `courseData` object. Each course includes:
- Hero section content (title, subtitle, badges)
- Technical and professional skills
- Real-world projects
- Industry partner information
- Career progression data

## Deployment Pipeline
1. Code changes pushed to GitHub
2. Netlify automatically builds and deploys
3. Live site updates within minutes
4. Rollback capability if needed

## Support
For technical support or content updates, contact: dan@technativedigital.com

