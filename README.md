# Personal Portfolio — Shaik Babasaheb

A modern, single-page developer portfolio built with **Next.js 16**, **React 19**, and **TypeScript**. Features a custom animated cursor, scroll-reveal animations, a typing effect hero section, and a live tech ticker.

## Sections

- **Hero** — Animated typing effect with role titles
- **About** — Bio with animated stat counters
- **Skills** — Categorised tech stack cards
- **Experience** — Work history at SoftSuave Technologies and Qualex Consulting
- **Projects** — Showcase of live projects (Eastern Gate, ChromaCraft, Nirantara, MasterMind, and more)
- **Contact** — Contact form / links
- **Footer** — Social links and credits

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | CSS Modules + global CSS |
| Linting | ESLint 9 + eslint-config-next |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/          # Next.js App Router (layout, page, global styles)
├── components/   # Section components (Hero, About, Skills, …)
├── data/         # Static content (skills, experience, projects)
├── hooks/        # Custom hooks (useCounter, useReveal, useTyping)
└── types/        # Shared TypeScript types
public/           # Static assets (project screenshots)
```

## Deployment

Build and deploy to any platform that supports Node.js or static exports.

```bash
npm run build
npm run start
```

For one-click deployment, [Vercel](https://vercel.com) is recommended — connect your GitHub repo and it deploys automatically on every push.
