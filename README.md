# Axiom Canine - Next.js SEO-Optimized Website

A modern Next.js web application for Axiom Canine dog training services, built with TypeScript, Tailwind CSS, and SEO best practices.

## 🚀 Features

### Technical Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React 18** for UI components

### SEO Features
- ✅ **Server-Side Rendering (SSR)** and Static Site Generation (SSG)
- ✅ **Structured Data** (JSON-LD) for LocalBusiness, Service, and BreadcrumbList schemas
- ✅ **Dynamic Sitemap** generation at `/sitemap.xml`
- ✅ **Dynamic Robots.txt** generation at `/robots.txt`
- ✅ **Meta Tags** including OpenGraph and Twitter cards
- ✅ **Clean URLs** with route groups for better organization

### Local SEO
- Dynamic location pages for 5 cities (Jacksonville, Ponte Vedra, Mandarin, Orange Park, St. Augustine)
- Location-specific structured data
- Service area markup
- Local business schema

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pmau45/laughing-palm-tree.git
cd laughing-palm-tree
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Business Information
Edit `src/lib/constants.ts` to update:
- Business name, phone, email, address
- Service offerings
- Service areas/locations
- Social media links

### SEO Configuration
- **Site URL**: Update `SITE_URL` in `src/lib/constants.ts`
- **Google Verification**: Set `NEXT_PUBLIC_GOOGLE_VERIFICATION` environment variable
- **Metadata**: Edit metadata in `src/app/layout.tsx`

## 🌐 Routes

### Static Routes
- `/` - Homepage
- `/about` - About page
- `/services` - Services listing
- `/contact` - Contact form

### Dynamic Routes
- `/services/[slug]` - Individual service pages
- `/locations/[city]` - Location-specific pages

### SEO Routes
- `/robots.txt` - Robots exclusion standard
- `/sitemap.xml` - XML sitemap

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
