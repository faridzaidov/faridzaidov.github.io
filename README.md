# Farid Zaidov — Portfolio

Personal portfolio site of **Farid Zaidov**, a Frontend & Flutter Developer based in Baku, Azerbaijan. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth scroll-based animations and interactive UI details.

**Live site:** [faridzaidov.netlify.app](https://faridzaidov.netlify.app)

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 14 (static export), React 18, TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion, `react-intersection-observer` |
| Icons | Lucide, React Icons |
| Deployment | Netlify |

## Features

- Responsive, single-page layout: Hero, About, Skills, Experience, Projects, Contact
- Scroll-triggered reveal animations, including letter-by-letter title reveals
- Animated stat counters
- 3D tilt + cursor spotlight effect on project cards
- Mosaic reveal transition on project screenshots
- Brand-colored hover states on the tech badge cloud
- Typing animation for the role subtitle in the hero section

## Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev

# open http://localhost:3000
```

### Other scripts

```bash
npm run build   # production build (static export to /out)
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project Structure

```
src/
├── app/                # App Router entry (layout, page, global styles)
└── components/         # Section components (Hero, About, Skills, Experience,
                         # Projects, Contact, Footer, Navbar) and shared
                         # animation helpers (AnimatedTitle, AnimatedCounter,
                         # MosaicReveal)
public/
├── avatar.jpg
├── faridzaidov_cv.pdf
└── projects/           # Project screenshots
```

## Contact

- Email: [feridzaidovv@gmail.com](mailto:feridzaidovv@gmail.com)
- GitHub: [github.com/faridzaidov](https://github.com/faridzaidov)
- LinkedIn: [linkedin.com/in/faridzaidov](https://www.linkedin.com/in/faridzaidov/)
- Telegram: [t.me/faridzaidov](https://t.me/faridzaidov)
