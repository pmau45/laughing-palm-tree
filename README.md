# Axiom Canine - Next.js Dog Training Website

A modern, SEO-optimized Next.js website for Axiom Canine dog training services in Jacksonville, FL.

## 🚀 Tech Stack

- **Next.js 15** with App Router
- **React 19** with Server Components
- **TypeScript 5.7** for type safety
- **Tailwind CSS 3.4** for styling
- **React Icons** for iconography

## ✨ Features

### SEO Optimizations
- ✅ Server-Side Rendering (SSR) and Static Generation
- ✅ Structured Data (JSON-LD) for LocalBusiness & Services
- ✅ Dynamic sitemap generation (`/sitemap.xml`)
- ✅ Dynamic robots.txt (`/robots.txt`)
- ✅ OpenGraph & Twitter Card meta tags
- ✅ Semantic HTML structure

### Performance
- ⚡ Optimized images (AVIF/WebP)
- ⚡ Code splitting & lazy loading
- ⚡ Standalone output for production
- ⚡ React Server Components

### Developer Experience
- 🛠️ TypeScript with strict mode
- 🛠️ ESLint & Prettier configured
- 🛠️ Hot module replacement
- 🛠️ Type checking scripts

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pmau45/laughing-palm-tree.git
   cd laughing-palm-tree
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🎨 Customization

### Business Information
Edit `src/lib/constants.ts`:
- Business name, phone, address
- Service offerings
- Service areas
- Social media links

### Environment Variables
Create `.env.local` from `.env.example`:
- `NEXT_PUBLIC_SITE_URL` - Production URL
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google Search Console

### Styling
- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.ts`
- CSS variables in `globals.css`

## 🌐 Routes

### Static Pages
- `/` - Homepage
- `/about` - About page
- `/services` - Services listing
- `/contact` - Contact form

### Dynamic Routes
- `/services/[slug]` - Service detail pages
- `/locations/[city]` - Location-specific pages

### Utility Routes
- `/robots.txt` - Search engine directives
- `/sitemap.xml` - XML sitemap

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── loading.tsx         # Loading UI
│   ├── robots.ts           # Robots.txt
│   └── sitemap.ts          # Sitemap generator
├── components/             # React components (flattened)
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & constants
└── styles/                 # Global styles
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t axiom-canine .
docker run -p 3000:3000 axiom-canine
```

### Other Platforms
Build the production bundle:
```bash
npm run build
npm start
```

## 📄 License

Private - © 2026 Axiom Canine

---

Built with ❤️ using Next.js 15, React 19, and Tailwind CSS
