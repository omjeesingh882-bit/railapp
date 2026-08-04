# 🚆 RailGaadi – Live Railway Tracking & Analytics Web App

**Live Demo:** [railapp-nine.vercel.app](https://railapp-nine.vercel.app/)  
**GitHub Repository:** [github.com/omjeesingh882-bit/railapp](https://github.com/omjeesingh882-bit/railapp)

RailGaadi is a modern, real-time Indian Railways tracking web application inspired by flight tracking platforms like Flightradar24. It provides live train positioning, interactive vector maps, station-by-station ETA timelines, live station weather, and topographical elevation profiles.

---

## ✨ Features

- 🛰️ **Live Train Tracking:** Track live GPS positions, speed, delay status, and station ETAs for Indian Railway trains.
- 🗺️ **Interactive Vector Map:** High-performance dark-themed maps rendered with MapLibre GL JS and MapTiler, featuring real-time polyline tracking and dynamic camera follow modes.
- ⏱️ **Station Timeline:** Interactive vertical timeline showing passed, current, and upcoming stations with live delay indicators (On Time / Late).
- 🌤️ **Travel Companion (Weather):** Fetches current weather reports (temperature, wind, humidity) for station coordinates via OpenWeather API.
- ⛰️ **Terrain & Elevation Profile:** Displays topographical elevation charts along railway routes using OpenTopography data.
- 🔍 **Debounced Search:** Quick train search by name or number with debounced client-side queries to prevent API spam.
- ⚡ **Optimized Caching:** Server-side API proxying with Upstash Redis caching to manage external rate limits cleanly.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Lucide Icons](https://lucide.dev/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Mapping & Geospatial:** [MapLibre GL JS](https://maplibre.org/), [Turf.js](https://turfjs.org/)
- **Database & Caching:** [Upstash Redis](https://upstash.com/)
- **External APIs:**
  - Rail Radar API (Live train status & route geometry)
  - MapTiler API (Vector map tiles)
  - OpenWeather API (Station weather data)
  - OpenTopography API (Elevation data)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Local Development Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/omjeesingh882-bit/railapp.git](https://github.com/omjeesingh882-bit/railapp.git)
cd railapp