# 🚆 RailGaadi – Live Railway Tracking & Analytics Web App

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MapLibre GL](https://img.shields.io/badge/MapLibre_GL-4.5-blue?style=for-the-badge&logo=maplibre&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-4.5-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Real-time Indian Railways tracking, telemetry, and route analytics web application.**  
Inspired by flight tracking dashboards like Flightradar24, built with high-performance vector maps, weather intelligence, and terrain elevation profiling.

[🌐 Live Demo](https://railapp-nine.vercel.app/) • [📂 GitHub Repository](https://github.com/omjeesingh882-bit/railapp) • [🐛 Report Bug](https://github.com/omjeesingh882-bit/railapp/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Routes & Data Flow](#-api-routes--data-flow)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running the App](#running-the-app)
- [Environment Variables Guide](#-environment-variables-guide)
- [Resilience & Fallback Architecture](#-resilience--fallback-architecture)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**RailGaadi** is a modern geospatial tracking and travel companion web application for Indian Railways passengers, rail enthusiasts, and commuters. It bridges the gap between raw timetable data and immersive, real-time journey intelligence.

Key capabilities include:
- Visualizing live train positions on interactive dark-themed vector maps.
- Real-time station arrival/departure tracking with accurate delay indicators.
- Live weather conditions at upcoming stations along the train route.
- 3D-inspired topographical elevation profiles across ghats and mountain passes.
- Instant train search with keyboard shortcuts (`⌘K` / `Ctrl+K`) and offline-capable cached train schedules.

---

## 🏗️ Architecture

```mermaid
flowchart TD
    subgraph Client ["Frontend (Next.js 14 App Router + React 18)"]
        UI[Pages & Components]
        Map[MapLibre GL JS Canvas]
        Store[Zustand State Store\n(Search, Favorites, Journey)]
        RQ[TanStack React Query]
    end

    subgraph Server ["Next.js Server API Routes & Proxy Layer"]
        TrainAPI["/api/train/[id]"]
        SearchAPI["/api/search"]
        WeatherAPI["/api/weather"]
        TerrainAPI["/api/terrain"]
        AnalyticsAPI["/api/analytics"]
        CacheLayer["In-Memory & Upstash Redis Cache"]
        LocalDB["Local Trains Database Fallback\n(200+ Trains)"]
    end

    subgraph External ["External Services & APIs"]
        RailRadar["RailRadar API\n(Live GPS, Status & Route)"]
        MapTiler["MapTiler API\n(Vector Tiles & Basemaps)"]
        OpenWeather["OpenWeatherMap API\n(Station Weather)"]
        OpenTopo["OpenTopography / Overpass\n(Elevation & Rails Topology)"]
    end

    UI --> Store
    UI --> RQ
    RQ --> Server
    Map --> MapTiler
    Server --> CacheLayer
    CacheLayer -.-> External
    Server -.-> LocalDB
    TrainAPI --> RailRadar
    WeatherAPI --> OpenWeather
    TerrainAPI --> OpenTopo
```

---

## ✨ Key Features

### 🛰️ Real-Time Live Train Tracking & Telemetry
- **Live GPS Position & Speed:** Track current location, speed (km/h), bearing/heading, and movement status.
- **Dynamic Delay Monitoring:** Live delay minutes (e.g., *+15 min late* or *On Time*) with color-coded status badges (`running`, `delayed`, `completed`, `cancelled`, `not_started`).
- **Journey Progress Ring:** Visual percentage of journey completion, distance covered vs. remaining distance, and updated estimated time of arrival (ETA).

### 🗺️ Interactive Vector Map (MapLibre GL JS)
- **Smooth Vector Polylines:** Real-time route rendering with station nodes and line geometry.
- **Dynamic Markers:** Custom animated pulse train marker and interactive station markers.
- **Camera Controls:** Dynamic camera follow mode, bounding-box auto-fit, and instant re-centering on the train's current coordinates.
- **Dark Mode Basemaps:** Styled with high-contrast MapTiler vector tiles for optimal night and day visibility.

### ⏱️ Smart Station Timeline
- **Milestone Tracking:** Vertical station timeline distinguishing **passed**, **current**, and **upcoming** stations.
- **Schedule vs. Actual:** Clear comparisons of scheduled vs. actual arrival and departure times.
- **Platform & Halt Durations:** Displays platform numbers and scheduled halt durations at intermediate stops.

### 🌤️ Station Weather Companion
- Real-time atmospheric metrics for intermediate and destination stations.
- Displays current temperature, weather conditions (Sunny, Rain, Fog, etc.), wind speed, humidity, and coordinates via OpenWeatherMap API.

### ⛰️ Topography & Elevation Profiling
- Route elevation chart powered by OpenTopography elevation models and Turf.js calculations.
- Highlights altitude fluctuations across mountain routes, tunnels, and ghat sections (e.g., Konkan Railway, Western Ghats, Himalayan foothills).

### 📊 Journey Analytics & Delay Statistics
- Average speed vs. maximum speed analysis.
- Punctuality metrics and delay trend projections across the scheduled itinerary.

### 🔍 Fast ⌘K Search & Discovery
- Debounced search bar with instant query matching for both **train numbers** (e.g., `12951`) and **train names** (e.g., `Mumbai Rajdhani`).
- Global keyboard shortcut (`⌘K` on macOS, `Ctrl+K` on Windows/Linux).
- Recent search history saved to persistent local storage with quick one-click replay.
- Curated quick-access shortcuts for premier express trains (Vande Bharat, Rajdhani, Shatabdi, Tejas).

### ⭐ Bookmarks & Favorites
- Bookmark frequent trains with one click.
- Dedicated `/favorites` dashboard to quickly check status without searching again.

### 🔗 Shareable Live Trips
- Generate clean, shareable links (`/share/[id]` and `/train/[id]`) to share live journey status with friends and family.

### 📱 Responsive Mobile-First Design
- Full touch-friendly responsive interface with slide-up bottom sheets, mobile navigation bar, and glassmorphism styling.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
|---|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) | App Router, React Server Components, API routes |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety across client and server |
| **UI & Styling** | [Tailwind CSS](https://tailwindcss.com/) | Modern utility-first styling with custom dark theme |
| **Icons & Motion** | [Lucide React](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/) | Polished icons and smooth UI animations |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) | Lightweight global stores with `localStorage` persistence |
| **Data Fetching** | [TanStack React Query v5](https://tanstack.com/query) | Client-side caching, polling, and automated refetching |
| **Geospatial & Maps** | [MapLibre GL JS](https://maplibre.org/), [Turf.js](https://turfjs.org/) | High-performance WebGL vector maps and spatial calculations |
| **Caching / Storage** | [Upstash Redis](https://upstash.com/) | Serverless low-latency caching layer for external APIs |
| **External APIs** | RailRadar, MapTiler, OpenWeather, OpenTopography | Live train status, vector tiles, weather, and elevation data |

---

## 📁 Project Structure

```text
RailGaadi/
├── app/                          # Next.js 14 App Router
│   ├── api/                      # Server-side API endpoints & proxies
│   │   ├── analytics/            # Journey analytics route
│   │   ├── search/               # Train search & query route
│   │   ├── terrain/              # Route elevation & topography route
│   │   ├── train/[id]/           # Live train status & schedule route
│   │   └── weather/              # Station weather proxy route
│   ├── favorites/                # Saved & bookmarked trains page
│   ├── share/[id]/               # Shareable live journey page
│   ├── train/[id]/               # Main interactive train tracking page
│   ├── layout.tsx                # Root layout, providers & navigation
│   └── page.tsx                  # Home page with hero & search dashboard
├── components/                   # Reusable UI components
│   ├── journey/                  # Timeline, JourneyCard, DelayBadge, ETAChip, ProgressRing
│   ├── layout/                   # Navbar, BottomNav, MobileJourneySummary
│   ├── search/                   # SearchBar, SearchResults, RecentSearches
│   └── ui/                       # Buttons, Skeletons, ErrorCards, Badges
├── config/                       # Environment configuration & constants
│   └── env.ts                    # Server and client environment variable mappings
├── features/                     # Feature-driven modules
│   ├── analytics/                # AnalyticsDashboard & ElevationProfile
│   ├── favorites/                # FavoriteButton & saved train managers
│   ├── maps/                     # MapView (MapLibre GL implementation)
│   ├── terrain/                  # Terrain & elevation visualizers
│   └── weather/                  # WeatherCard & WeatherPanel
├── hooks/                        # Custom React hooks
│   ├── useLiveJourney.ts         # Live train polling & data hook
│   └── useTrainSearch.ts         # Debounced train search hook
├── lib/                          # Core backend libraries & external integrations
│   ├── cache.ts                  # In-memory & Redis caching utilities
│   ├── opentopography.ts         # Elevation profile data fetcher
│   ├── openweather.ts            # Weather data fetcher
│   ├── overpass.ts               # OpenStreetMap railway line geometry
│   ├── railradar.ts              # RailRadar API wrapper & data transformer
│   └── trains-db.ts              # Local database of Indian trains (fallback)
├── store/                        # Zustand state management
│   ├── favorites.ts              # Saved trains store
│   ├── journey.ts                # Selected journey & filter store
│   └── search.ts                 # Recent queries & search state store
├── types/                        # TypeScript definitions & interfaces
│   ├── api.ts                    # Unified API response contracts
│   └── train.ts                  # Train, Station, LiveLocation, Journey models
├── utils/                        # General helper utilities
│   └── cn.ts                     # Tailwind class merging utility
├── public/                       # Static assets & icons
├── .env.example                  # Environment variable blueprint
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies & project scripts
├── tailwind.config.ts            # Tailwind CSS configuration & theme tokens
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 📡 API Routes & Data Flow

All external third-party API calls are routed through Next.js server-side route handlers to prevent exposing private API keys and avoid CORS constraints.

| Endpoint | Method | Params / Query | Cache TTL | Description |
|---|---|---|---|---|
| `/api/search` | `GET` | `?q={query}` | 60s | Search trains by name or number with local DB fallback |
| `/api/train/[id]` | `GET` | `id` (Train number) | 30s | Live tracking status, current GPS coordinates, and full station timeline |
| `/api/weather` | `GET` | `?lat={lat}&lng={lng}` | 10 min | Current weather conditions (temperature, humidity, wind) for a station |
| `/api/terrain` | `GET` | `?trainId={id}` | 1 hour | Elevation profile points along the train route polyline |
| `/api/analytics` | `GET` | `?trainId={id}` | 5 min | Speed statistics, delay metrics, and distance analysis |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:
- **Node.js**: `v18.17.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/omjeesingh882-bit/railapp.git
   cd railapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

### Environment Configuration

Create a `.env.local` file in the project root by copying `.env.example`:

```bash
cp .env.example .env.local
```

Populate the required API keys in `.env.local`:

```env
# RailRadar API Key (for live train GPS and status)
RAILRADAR_API_KEY=your_railradar_api_key_here

# MapTiler API Key (public key for vector map tiles)
NEXT_PUBLIC_MAPTILER_API_KEY=your_maptiler_api_key_here

# OpenWeather API Key (for station weather forecasts)
OPENWEATHER_API_KEY=your_openweather_api_key_here

# OpenTopography API Key (for route elevation profiles)
OPENTOPOGRAPHY_API_KEY=your_opentopography_api_key_here

# Upstash Redis (Optional - for distributed caching in production)
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

> 💡 **Tip:** RailGaadi includes a comprehensive built-in local database (`lib/trains-db.ts`) with realistic simulation fallback for popular Indian trains. You can test and run the app locally even with placeholder API keys!

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ⚙️ Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Next.js development server with hot-reloading on port 3000 |
| `npm run build` | Builds the production-optimized Next.js bundle |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint checks across all TypeScript and React files |

---

## 🔑 Environment Variables Guide

| Variable | Scope | Required | Description | Where to Obtain |
|---|---|---|---|---|
| `RAILRADAR_API_KEY` | Server | Optional* | Live Indian Railway status & GPS coordinates | [RailRadar API](https://railradar.in/) |
| `NEXT_PUBLIC_MAPTILER_API_KEY` | Client | Recommended | Vector map tiles & dark mode basemap rendering | [MapTiler Cloud](https://cloud.maptiler.com/) |
| `OPENWEATHER_API_KEY` | Server | Optional | Live weather reports for stations | [OpenWeatherMap](https://openweathermap.org/api) |
| `OPENTOPOGRAPHY_API_KEY` | Server | Optional | Elevation and terrain data across routes | [OpenTopography](https://opentopography.org/) |
| `UPSTASH_REDIS_REST_URL` | Server | Optional | Distributed serverless Redis URL for edge caching | [Upstash Console](https://console.upstash.com/) |
| `UPSTASH_REDIS_REST_TOKEN` | Server | Optional | REST token for Upstash Redis | [Upstash Console](https://console.upstash.com/) |

*\* When third-party API keys are omitted or rate-limited, RailGaadi gracefully switches to its rich offline fallback data and local schedule database.*

---

## 🛡️ Resilience & Fallback Architecture

To ensure a seamless user experience regardless of external network latency or API rate limits:

1. **In-Memory & Redis Hybrid Caching:** Responses from external providers are cached with granular TTLs (30s for live GPS, 10m for weather, 1h for terrain).
2. **Request Timeout Guards:** External requests use `AbortController` timeouts (4-second ceiling) to prevent server hangs or connection stalls.
3. **Local Train Schedule Database:** An embedded database (`lib/trains-db.ts`) covers hundreds of Indian trains with accurate stations, schedule timetables, and coordinate geometry.
4. **Graceful Degraded Mode:** If an upstream API returns an error or rate limit (HTTP 429), the server seamlessly constructs simulated real-time telemetry based on schedule clocks.

---

## 🤝 Contributing

Contributions, feature suggestions, and bug reports are welcome!

1. **Fork the Repository**
2. **Create your Feature Branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your Changes:**
   ```bash
   git commit -m "feat: Add interactive coach position indicator"
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Built with ❤️ for Indian Railways travelers and open-source developers.
</div>