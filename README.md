
# SAZARO / STS ENTERPRISES WEBSITE
## Website Blueprint — Version 1.0

### 1. Project Goal
Build a premium, modern, responsive ecommerce-style business website for:

- Business: STS Enterprises
- Customer-facing brand: SAZARO
- Product types:
  1. LED Acrylic
  2. MDF
  3. Customisable Products

The website should feel trustworthy, clean, premium and product-focused without making exaggerated claims.

---

## 2. Core Brand Direction

### Visual Style
- Premium modern
- Minimal but not empty
- Editorial/product-catalog feel
- Strong typography
- Generous spacing
- High-quality product photography as the visual focus
- Responsive on mobile, tablet and desktop

### Tone
Use honest, practical messaging:
- Good quality products
- Careful finishing
- Secure/careful packing
- Timely dispatch
- Clear product information
- Customer-focused service

Avoid unsupported claims such as:
- "1 crore+ sales"
- "India's #1"
- "Best seller"
- "100% guaranteed"
unless the business later provides proof.

---

# 3. Website Structure

## Main Navigation

Header:
- SAZARO
- Small "BY STS ENTERPRISES" label
- Home
- Products
- Reviews
- About
- Contact
- Hamburger menu on smaller screens

Footer:
- SAZARO / STS Enterprises
- Short business description
- Product category links
- Main navigation links
- Contact details
- Copyright
- Social links when supplied later

---

# 4. Pages

## Page 01 — Home
File:
`index.html`

Sections:

1. Header
2. Hero section
   - Main headline
   - Short brand statement
   - Primary CTA: Explore Products
   - Secondary CTA: About Us
3. Brand/value introduction
4. Three product-category cards
   - LED Acrylic
   - MDF
   - Customisable
5. Why choose us
   - Quality-focused materials & finishing
   - Careful packing & dispatch
   - Clear product information
   - Customer-focused service
6. Featured products
7. Short review/testimonial preview
8. Final CTA
9. Footer

---

## Page 02 — Products
File:
`products.html`

Features:
- Product grid
- Category filters:
  - All
  - LED Acrylic
  - MDF
  - Customisable
- Product image
- Product name
- Category
- Short description
- View Product button

Product cards are generated from the central product data file.

---

## Page 03 — LED Acrylic Category
File:
`led-acrylic.html`

Purpose:
- Dedicated landing page for LED Acrylic products
- Category introduction
- Product grid filtered to LED Acrylic
- Category-specific visual styling/content
- Links back to all products

---

## Page 04 — MDF Category
File:
`mdf.html`

Purpose:
- Dedicated landing page for MDF products
- Category introduction
- Product grid filtered to MDF
- Links back to all products

---

## Page 05 — Customisable Category
File:
`customisable.html`

Purpose:
- Dedicated landing page for customisable products
- Explain that selected products can be personalised
- Product grid filtered to Customisable
- Links back to all products

---

## Page 06 — Individual Product
File:
`product.html`

URL format:
`product.html?id=product-01`

Features:
- Product title
- Category
- Main product image
- Thumbnail gallery
- 1–4 product photos
- Product description
- Product information/specifications
- Customisation information when applicable
- Contact/enquiry CTA
- Related products

The page reads product information from the central product data file.

---

## Page 07 — Reviews
File:
`reviews.html`

Sections:
- Review introduction
- Customer review cards
- Rating display
- Review category/product reference where available
- CTA to explore products

Until real reviews are provided, sample content must be clearly marked as placeholder content and should not pretend to be genuine customer reviews.

---

## Page 08 — About
File:
`about.html`

Sections:
- About STS Enterprises
- SAZARO brand introduction
- Business approach
- Quality and packing philosophy
- Customer service
- Honest brand statement

No invented history, awards or statistics.

---

## Page 09 — Contact
File:
`contact.html`

Sections:
- Contact heading
- Email
- Phone/WhatsApp
- Business location
- Contact/enquiry CTA
- Social links when available

The first version can use a visual contact form only.
A real form backend can be added later.

---

# 5. File & Folder Architecture

```text
sazaro-website/
│
├── index.html
├── products.html
├── led-acrylic.html
├── mdf.html
├── customisable.html
├── product.html
├── reviews.html
├── about.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── products.js
│   └── app.js
│
├── assets/
│   ├── branding/
│   │   ├── logo.svg
│   │   └── favicon.svg
│   │
│   └── products/
│       ├── acrylic/
│       ├── mdf/
│       └── custom/
│
└── README.md
```

---

# 6. Product Data System

All product information should be controlled from:

`js/products.js`

Each product will contain:

```javascript
{
  id: "product-01",
  name: "Product Name",
  category: "acrylic",
  categoryLabel: "LED Acrylic",
  price: "",
  shortDescription: "",
  description: "",
  features: [],
  customisable: false,
  images: [
    "assets/products/acrylic/product-01-1.jpg",
    "assets/products/acrylic/product-01-2.jpg",
    "assets/products/acrylic/product-01-3.jpg",
    "assets/products/acrylic/product-01-4.jpg"
  ]
}
```

Rules:
- 15 initial placeholder products
- 5 LED Acrylic
- 5 MDF
- 5 Customisable
- Every product supports 1–4 images
- Missing images automatically show a placeholder
- Product details should not need to be edited across multiple HTML files

---

# 7. Image System

Product photos will eventually be placed in:

### LED Acrylic
`assets/products/acrylic/`

### MDF
`assets/products/mdf/`

### Customisable
`assets/products/custom/`

Naming convention:

```text
product-01-1.jpg
product-01-2.jpg
product-01-3.jpg
product-01-4.jpg
```

Only use the number of images actually available.

The website should gracefully handle missing images.

---

# 8. Design System

## Typography
Use a modern combination such as:
- Manrope
- DM Mono

Primary body font:
Manrope

Accent/metadata font:
DM Mono

## Layout
- Maximum content width around 1200–1280px
- Large hero spacing
- Rounded cards where appropriate
- Strong image presentation
- Subtle borders
- Clean shadows
- Responsive grid

## Responsive Breakpoints
Desktop:
`1200px+`

Tablet:
`850px–1199px`

Mobile:
`560px–849px`

Small mobile:
`below 560px`

---

# 9. Interaction System

JavaScript handles:

- Mobile menu
- Product rendering
- Product category filtering
- Product detail loading by URL ID
- Product image gallery
- Thumbnail switching
- Related products
- Current year in footer
- Missing-image fallback
- Basic UI interactions

No framework is required for Version 1.

Technology:
- HTML5
- CSS3
- Vanilla JavaScript

This keeps the project easy to edit and easy to host on GitHub Pages.

---

# 10. Product Detail Flow

Example:

User opens:

`products.html`

Clicks:

`LED Acrylic Name Plate`

Website opens:

`product.html?id=product-01`

JavaScript finds:

`product-01`

inside:

`js/products.js`

Then it displays:
- Name
- Category
- Images
- Description
- Features
- Customisation status
- Related products

This means one product template can serve every product.

---

# 11. Future Expansion

The structure should leave room for:

- Real product pricing
- WhatsApp enquiry buttons
- Buy Now links
- Amazon links
- Flipkart links
- Search
- Sorting
- More product categories
- Real customer reviews
- Instagram feed
- Contact form backend
- Custom domain
- SEO metadata
- Google Analytics
- Product structured data
- FAQ section

These should be added after the core site is stable.

---

# 12. Deployment Plan

Primary hosting:
GitHub Pages

Basic deployment:

1. Create GitHub repository
2. Upload all website files
3. Keep `index.html` in the repository root
4. Enable GitHub Pages
5. Select the `main` branch
6. Select root `/`
7. Save
8. GitHub generates the public website URL

Later:
- Connect a custom domain
- Enable HTTPS
- Add SEO metadata
- Add Google Search Console

---

# 13. Build Order

We will build and download files in this exact order:

### Phase A — Foundation
1. `index.html`
2. `css/style.css`
3. `js/products.js`
4. `js/app.js`

### Phase B — Main Pages
5. `products.html`
6. `led-acrylic.html`
7. `mdf.html`
8. `customisable.html`
9. `product.html`

### Phase C — Business Pages
10. `reviews.html`
11. `about.html`
12. `contact.html`

### Phase D — Assets & Documentation
13. `assets/branding/logo.svg`
14. `assets/branding/favicon.svg`
15. `README.md`

Each file will be provided as its own downloadable file, not bundled into a ZIP unless a final backup ZIP is requested later.

---

# 14. Final Testing Checklist

Before going live:

- [ ] Home page works
- [ ] All navigation links work
- [ ] Mobile menu works
- [ ] Product filters work
- [ ] Product detail URLs work
- [ ] Product gallery works
- [ ] Missing-image fallback works
- [ ] All category pages work
- [ ] Footer appears on every page
- [ ] Contact details are correct
- [ ] No fake reviews remain
- [ ] No placeholder business claims remain
- [ ] Mobile layout tested
- [ ] Desktop layout tested
- [ ] All product images load
- [ ] GitHub Pages deployment tested
- [ ] Custom domain added later if required

---

## Build Principle

The site should be:
**premium in appearance, simple in structure, honest in messaging, easy to edit, and easy to deploy.**

The product data and images should be replaceable without rebuilding the entire website.
