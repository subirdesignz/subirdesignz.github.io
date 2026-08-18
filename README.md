# Bare-Bones Static Website Starter

A lightweight, high-performance, and SEO-optimized starter template for building modern static websites with standard HTML5, CSS, and essential web configuration files.

---

## 📁 Included Essential Files

This repository contains all the bare-bones files required for a production-ready static website:

| File | Purpose |
| :--- | :--- |
| **`index.html`** | Semantic HTML5 entry point with standard OpenGraph, Twitter Cards, responsive viewport, and SEO metadata. |
| **`robots.txt`** | Directs web crawlers and specifies sitemap indexing parameters. |
| **`sitemap.xml`** | Search engine XML schema mapping all valid site URLs and update frequencies. |
| **`index.css`** | Clean, responsive, CSS reset and modern typography styling rules. |
| **`LICENSE`** | Open-source MIT License granting permissive usage and modification. |
| **`README.md`** | Project documentation and deployment guidelines. |

---

## 🚀 Quick Start

### 1. Standalone Static Hosting
You can serve these files directly with any static file server or CDN:

```bash
# Using Python 3 built-in HTTP server
python3 -m http.server 8000

# Using Node.js npx serve
npx serve .
```

### 2. Development with Vite
If running within this development workspace:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production static bundle
npm run build
```

---

## ⚙️ Customization Guide

1. **Website Metadata (`index.html`)**:
   - Update `<title>`, `<meta name="description">`, and Open Graph `<meta property="og:*">` tags with your website details.
   - Set the `<link rel="canonical" href="...">` to your production domain.

2. **Domain & Sitemaps (`robots.txt` & `sitemap.xml`)**:
   - Replace `https://example.com` with your production URL.
   - Update `<lastmod>` timestamps in `sitemap.xml` whenever pages change.

3. **Styling (`index.css`)**:
   - Custom CSS variables for primary accent colors, font stacks, and layout max-widths are declared in `:root`.

---

## 🌐 Free Static Hosting Platforms

Deploy this static folder instantly to any modern hosting provider:
- **Cloudflare Pages** (Connect git or upload folder directly)
- **GitHub Pages** (Enable under Repository > Settings > Pages)
- **Vercel** (`npx vercel`)
- **Netlify** (`npx netlify deploy`)
- **Google Cloud Storage / Firebase Hosting**

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more details.
