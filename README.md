# Axiom Canine Landing Page

A professional, Netlify-ready landing page for Axiom Canine dog training services in Jacksonville, FL.

## Overview

This is a single-page responsive website featuring the Axiom Canine dog training business. The site showcases their 3-pillar training method (Structure, Consistency, Results) and provides comprehensive information about their services across Northeast Florida.

### Key Features

- **Modern Design**: Clean, professional aesthetic with a gold and dark theme
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, structured data, and local SEO for Jacksonville, FL
- **Smooth Animations**: Scroll-reveal animations using IntersectionObserver
- **Zero Build Process**: Static HTML with embedded CSS and JavaScript
- **Netlify Ready**: Configured for instant deployment

## Deployment to Netlify

### Quick Deploy

1. **Connect to Netlify**
   - Log in to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git repository
   - Select this repository

2. **Configure Build Settings**
   - Build command: `echo 'No build needed'` (or leave empty)
   - Publish directory: `.` (root directory)
   - These settings are already configured in `netlify.toml`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live in seconds!

### Manual Deploy

Alternatively, you can drag and drop the entire folder to Netlify:

1. Log in to [Netlify](https://netlify.com)
2. Drag the project folder to the deploy area
3. Your site is live instantly

### Custom Domain

To add a custom domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Local Development

Since this is a static HTML site, you can simply open the `index.html` file in any web browser.

### Using a Local Server

For a better development experience with hot reload:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server package)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open your browser to `http://localhost:8000`

## File Structure

```
.
├── index.html      # Main landing page (contains HTML, CSS, and JavaScript)
├── netlify.toml    # Netlify configuration
├── README.md       # This file
└── image.png       # Optional: Local fallback hero image
```

## Customization Guide

### Updating Content

#### Contact Information
Search for these values in `index.html` and update:
- Phone: `(904) 458-7561` or `9044587561`
- Instagram: `@axiomcanine` or `https://instagram.com/axiomcanine`
- Facebook: `/axiomcanine` or `https://facebook.com/axiomcanine`

#### Hero Section
Locate the `.hero` section and modify:
```html
<h1>Structure. Consistency. Results.</h1>
<p>Professional dog training in Jacksonville, FL</p>
```

#### Service Areas
Find the `.locations-grid` section to add or remove locations:
```html
<div class="location-item reveal">
    <i class="fas fa-map-marker-alt"></i> New City Name
</div>
```

### Styling Changes

All styles are embedded in the `<style>` tag in the HTML head. Key customization points:

#### Colors (CSS Variables)
```css
:root {
    --gold: #C8962E;        /* Primary brand color */
    --gold-lt: #E2B860;     /* Light gold */
    --gold-dk: #8A6518;     /* Dark gold */
    --ink: #0C0C0C;         /* Background */
    --light: #F4F0E8;       /* Text on dark */
}
```

#### Typography
The site uses Google Fonts:
- Display headings: `Bebas Neue`
- Serif quotes: `DM Serif Display`
- Body text: `DM Sans`

To change fonts, update the Google Fonts link and the CSS font-family declarations.

### Adding Netlify Forms

To enable the contact form with Netlify Forms:

1. Add the `netlify` attribute to the `<form>` tag:
```html
<form netlify>
```

2. Add a hidden input for the form name:
```html
<input type="hidden" name="form-name" value="contact">
```

3. Add `name` attributes to all form fields (already present)

4. Redeploy the site

Form submissions will appear in your Netlify dashboard under Forms.

### Images

#### Hero Background
The hero section uses a fallback system:
1. First tries to load `image.png` from the root directory
2. Falls back to an Unsplash image URL

To use a custom hero image:
1. Add your `image.png` file to the root directory
2. Or update the URL in the CSS:
```css
.hero {
    background: linear-gradient(rgba(12, 12, 12, 0.6), rgba(12, 12, 12, 0.6)),
                url('your-image-url.jpg');
}
```

## SEO & Performance

### Included SEO Features

- **Meta Tags**: Complete title, description, and keywords
- **OpenGraph**: Social media sharing optimization
- **Structured Data**: Schema.org LocalBusiness JSON-LD
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Mobile Optimized**: Viewport meta tag and responsive design
- **Fast Loading**: Minimal external dependencies

### Performance Optimizations

- Google Fonts loaded with `preconnect`
- Font Awesome loaded from CDN
- Lazy-loaded scroll animations
- Optimized images with Unsplash parameters

## Browser Support

This site supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Required Features
- CSS Grid
- CSS Custom Properties (variables)
- IntersectionObserver API
- Smooth scrolling

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern layout with Grid and Flexbox
- **Vanilla JavaScript**: No frameworks required
- **Font Awesome 6.0.0**: Icons
- **Google Fonts**: Typography

## Analytics & Tracking

To add Google Analytics:

1. Get your Google Analytics tracking ID
2. Add the script before the closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Site not loading after deployment
- Check that the publish directory is set to `.` (root)
- Verify `netlify.toml` is in the repository root
- Check Netlify deploy logs for errors

### Form not working
- Add the `netlify` attribute to enable Netlify Forms
- Ensure all inputs have `name` attributes
- Check the Forms tab in Netlify dashboard

### Images not displaying
- Verify image URLs are accessible
- Check browser console for loading errors
- Ensure images are optimized for web

## Support & Contact

For questions about the Axiom Canine business:
- **Phone**: (904) 458-7561
- **Instagram**: [@axiomcanine](https://instagram.com/axiomcanine)
- **Facebook**: [/axiomcanine](https://facebook.com/axiomcanine)

## License

© 2026 Axiom Canine. All rights reserved.

## Changelog

### Version 1.0.0 (Initial Release)
- Complete landing page with all sections
- Responsive design for all devices
- Scroll reveal animations
- SEO optimization
- Netlify-ready deployment configuration
