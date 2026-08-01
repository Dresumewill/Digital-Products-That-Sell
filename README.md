# Digital Products That Sell — Landing Page

Static landing page. No build step required — open `index.html` or upload the whole folder to any host (Netlify, Vercel, GitHub Pages, cPanel).

## Structure
```
digital-products-that-sell/
├── index.html        # Page structure & content (edit text here)
├── css/styles.css    # All styling (colors, spacing, layout)
├── js/main.js        # Scroll reveals + animated counters
├── images/
│   ├── logo.png            # Digital Profit brand logo
│   ├── book-cover-3d.png   # Hero book (transparent background)
│   ├── 15-products.jpg      # "What's inside" infographic
│   └── author.jpg           # Author photo
├── robots.txt
└── sitemap.xml
```

## Common edits
- **Purchase links:** search `index.html` for `selar.com`, `payhip.com`, `play.google.com` and replace.
- **Brand colors:** edit the `:root` variables at the top of `css/styles.css`
  (`--grad` is the blue→green brand gradient, `--gold` the accent).
- **Reviews / FAQ / text:** all in `index.html`.
- **Domain:** update the URLs in `robots.txt`, `sitemap.xml`, and the
  `<link rel="canonical">` / `og:url` tags in `index.html`.

## Deploy
Upload the entire folder (keep the structure) so relative paths resolve.
