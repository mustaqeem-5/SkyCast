# SkyCast — Weather & Climate Journal

A polished multi-page weather website built with Next.js App Router, TypeScript, server/client components, dynamic routes and the Open-Meteo API.

## Pages and features
- **Home** — hero section, current weather, benefits, featured articles and journal CTA
- **Weather** — live city search, current conditions, 5-day forecast, loading and error states
- **Journal** — 6 sample weather articles, live search, category filters, responsive article cards
- **Article details** — dynamic `/blog/[slug]` routes, reading layout, related articles, metadata
- **About** — project purpose and feature highlights
- **Custom 404 page**
- Responsive mobile navigation
- No API key needed for weather data

## Run it
1. Extract the ZIP and open the folder in VS Code.
2. Install Node.js 20.9+ if it is not installed.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Learning concepts
- `app/page.tsx` and other route pages use Server Components.
- `components/weather-dashboard.tsx` and `components/blog-explorer.tsx` use Client Components for interactivity.
- `/api/weather` is a Next.js Route Handler.
- `/blog/[slug]` demonstrates dynamic routing and `generateStaticParams`.
- `lib/weather.ts` calls Open-Meteo geocoding and forecast endpoints.
- `lib/posts.ts` is a simple local content source for sample blog articles.

## API
- Geocoding: https://geocoding-api.open-meteo.com/v1/search
- Forecast: https://api.open-meteo.com/v1/forecast

Weather requires an internet connection. Blog content is local sample content and works without an API key.

## Suggested next upgrades
- Add a real database/CMS for articles
- Add bookmarks or saved cities using localStorage
- Add proper unit switching (°C/°F)
- Add hourly forecast and weather maps
- Add newsletter signup backend

## Article photography

The journal cards and article detail pages use real photographs hosted by Unsplash. The images are loaded from `images.unsplash.com`, configured in `next.config.ts` for Next.js Image optimization. An internet connection is required to load these remote photographs.

## Start the project

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.
"# SkyCast" 
