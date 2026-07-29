# MRR Technology Solutions — Website (v1 draft)

Static HTML/CSS/JS site, built for GitHub Pages. No build step — the contents of this
folder are the deployable site as-is.

## Folder structure

```
v1/
  index.html          Home
  about.html           About / founders
  experiences.html      Charter experiences
  fleet.html            Fleet showcase
  innovation.html       Project Blue Horizon (hybrid solar yacht platform)
  contact.html           Enquiry form + destinations
  CNAME                 Custom domain file for GitHub Pages (mrrtechsolutions.com)
  assets/
    css/style.css        All site styling (palette + type at the top of the file)
    js/main.js            Nav toggle + image placeholder logic
    images/
      brand/mrr-logo.png   Real logo (already in place)
      ...                   Drop real photos here — see table below
```

## Deploying to GitHub

Copy everything **inside** this `v1` folder (not the `v1` folder itself) into the root
of `mrr-website` repo, commit, and push to the branch GitHub Pages is set to build from.
`CNAME` is already included so the custom domain keeps working.

## How the image placeholders work

Every image on the site is a real `<img>` tag pointing at a file under
`assets/images/`. Until that file exists, a styled placeholder (icon + filename +
recommended size) shows in its place automatically — no code needs to change.

**To add a photo:** just save it into `assets/images/` using the *exact* filename
from the table below. The placeholder will disappear and your photo will appear the
next time the page loads.

**Why it won't get cropped:** each image panel has a fixed aspect ratio (so the
page layout never jumps), but the photo itself is displayed with `object-fit: contain`
— meaning the whole image is always shown, scaled to fit, letterboxed if needed,
never cut off. Shooting to the recommended dimensions below minimizes letterboxing,
but any aspect ratio will display in full.

## Image checklist

| Filename | Used on | Recommended size (W×H) | Ratio |
|---|---|---|---|
| `hero-yacht-sunset-main.jpg` | Home hero | 2400×1000 | 21:9 |
| `experience-luxury-charter.jpg` | Home, Experiences | 1200×900 | 4:3 |
| `experience-sundowner-cruise.jpg` | Experiences hero + card | 2200×1000 / 1200×900 | 21:9 / 4:3 |
| `experience-private-event-prewedding.jpg` | Home, Experiences | 1200×900 | 4:3 |
| `experience-corporate-charter.jpg` | Home, Experiences | 1200×900 | 4:3 |
| `experience-resort-mobility.jpg` | Experiences | 1200×900 | 4:3 |
| `experience-family-escape.jpg` | Experiences | 1200×900 | 4:3 |
| `fleet-yacht-01-exterior.jpg` | Fleet hero + cards, Home | 2200×1000 / 1200×900 | 21:9 / 4:3 |
| `fleet-yacht-01-interior.jpg` | Home, Fleet | 1200×1800 | 2:3 |
| `fleet-yacht-02-exterior.jpg` | Home, Fleet | 1200×900 | 4:3 |
| `fleet-yacht-03-exterior.jpg` | Home, Fleet | 1200×900 | 4:3 |
| `gallery-guests-onboard-01.jpg` | Home, Fleet | 1200×900 | 4:3 |
| `gallery-guests-onboard-02.jpg` | Fleet | 1200×900 | 4:3 |
| `gallery-sunset-couple.jpg` | Fleet | 1200×900 | 4:3 |
| `gallery-aerial-yacht-01.jpg` | Fleet | 1200×900 | 4:3 |
| `innovation-hybrid-solar-yacht-render.jpg` | Home, Innovation hero | 2200×1000 / 1200×1500 | 21:9 / 4:5 |
| `innovation-composite-hull-closeup.jpg` | Innovation | 1200×1500 | 4:5 |
| `about-founders-preetham-michelle.jpg` | About hero | 2200×1000 | 21:9 |
| `destination-mangalore-coast.jpg` | About, Contact, Destinations | 1200×1500 / 1200×1600 | 4:5 / 3:4 |
| `destination-udupi-backwaters.jpg` | Destinations | 1200×1600 | 3:4 |
| `destination-karwar-coastline.jpg` | Destinations | 1200×1600 | 3:4 |
| `destination-goa-cruise.jpg` | Destinations | 1200×1600 | 3:4 |
| `team-preetham-pinto-portrait.jpg` | About — founders | 1000×1000 | 1:1 |
| `team-michelle-dsouza-portrait.jpg` | About — founders | 1000×1000 | 1:1 |
| `contact-marina-background.jpg` | Contact hero | 2200×800 | 21:8 |

All 25 images above are listed once each, even where the same photo is reused
across multiple pages/sections.

## Known placeholders that still need real wiring

- **Contact form** (`contact.html`) is a static HTML form with no backend. Before
  launch, connect it to a form service (e.g. Formspree, Getform) or a small serverless
  function — GitHub Pages cannot process form submissions on its own.
- **Map** on the Contact page currently uses the Mangalore coast placeholder image;
  swap for an embedded Google Maps iframe once you have the exact marina/office pin.

## Content sources

Copy is drawn from the MRR Technology Solutions concept note, business model note,
the ELEVATE 2026 pitch deck, and waterz.in (for tone/format reference). Geography is
scoped to Karnataka's coastline (Mangalore, Udupi, Karwar) as the primary focus, with
Goa and further expansion positioned as secondary/growth markets, per direction from
RIED.

## Version history

- **v1** (this folder) — first draft: 6 pages, full navigation, placeholder images,
  brand palette + type applied, Karnataka-coast-first copy.
