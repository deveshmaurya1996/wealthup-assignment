# WealthUp

India's most intelligent investment platform. A modern landing page for goal-based investing.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, BackedBy, FeatureCards, InfoCards, CTABanner, StepSection
│   └── ui/              # Slider, shared UI components
├── public/
│   └── assets/         # Images and icons
└── lib/                 # Utilities
```

## Sections

- **Hero** – Goal planning with car/travel/home/custom options and investment calculator
- **BackedBy** – Trusted partners (Razorpay, Nvidia, Startup India, etc.)
- **FeatureCards** – Platform features overview
- **InfoCards** – Carousel of information cards
- **CTABanner** – Call-to-action with gradient styling
- **StepSection** – How it works (Define Goal, Setup Account)

## License

Private
