# Sartaz Ainan — Personal Portfolio

A polished, fully responsive single-page portfolio for **Sartaz Ainan**, an academic
researcher and content creator. Built with semantic **HTML5**, **Tailwind CSS**, and
**vanilla JavaScript** — no framework, no backend, no build step required.

> **Design:** light theme, lavender/violet accent (`#8B7BB8`) pulled from the shirt in the
> hero photo, elegant serif headings (Fraunces) + clean sans body (Inter), soft shadows,
> rounded cards, scroll-reveal animations, scroll-spy nav, and an optional dark mode.

---

## File tree

```
sartaz-ainan-portfolio/
├── index.html              # the whole page (all sections)
├── css/
│   └── styles.css          # component classes (@apply), scroll-reveal, focus styles
├── js/
│   ├── icons.js            # inline SVG social/brand icons (no icon CDN)
│   └── main.js             # dark mode, mobile menu, scroll-spy, reveal, form, YouTube
├── images/
│   ├── professional-photo.jpg       # web-optimized hero headshot (~36 KB)
│   ├── professional-photo-480.jpg   # smaller variant for mobile (srcset)
│   ├── og-image.jpg                 # 1200×630 Open Graph / social-share image
│   ├── favicon.svg                  # "SA" monogram favicon (scalable)
│   ├── favicon-32.png               # PNG fallback
│   └── apple-touch-icon.png         # 180×180 iOS home-screen icon
└── README.md
```

---

## Preview locally

You only need a static file server. Pick one:

```bash
# Python 3 (built in on most systems)
cd sartaz-ainan-portfolio
python -m http.server 8000
# then open http://localhost:8000
```

```bash
# Or with Node (no install): npx serve
npx serve .
```

> Opening `index.html` directly with `file://` mostly works, but a local server is
> recommended so relative paths, fonts, and the contact-form fetch behave correctly.

---

## Tech / hosting notes

- **Tailwind via the Play CDN.** The `<script src="https://cdn.tailwindcss.com">` tag
  compiles utilities in the browser, so there is **no build step** — just upload the files.
  This is ideal for a small personal site. The trade-off is a small runtime cost and a
  console note that the CDN isn't for production. If you'd rather ship compiled CSS, see
  the next section.
- Hosts for free with zero configuration on **Netlify**, **GitHub Pages**, or **Vercel**.

### Optional: compile Tailwind with the CLI (removes the CDN)

If you prefer a precompiled stylesheet:

```bash
npm install -D tailwindcss
npx tailwindcss init
# Point `content` at ["./index.html", "./js/**/*.js"] and move the
# tailwind.config theme block from index.html into tailwind.config.js.
# Create src/input.css with: @tailwind base; @tailwind components; @tailwind utilities;
# plus the @apply rules currently in css/styles.css.
npx tailwindcss -i ./src/input.css -o ./css/tailwind.css --minify
```

Then replace the `cdn.tailwindcss.com` script tag in `index.html` with
`<link rel="stylesheet" href="css/tailwind.css">`.

---

## Deploy

### Option A — Netlify (drag & drop, easiest)

1. Go to <https://app.netlify.com/drop>.
2. Drag the **entire `sartaz-ainan-portfolio` folder** onto the page.
3. Netlify gives you a live URL in seconds (e.g. `https://random-name.netlify.app`).
4. (Optional) In **Site settings → Change site name**, set a nicer subdomain, or add a
   custom domain under **Domain management**.

### Option B — GitHub Pages

1. Create a new GitHub repo and push these files to the `main` branch:
   ```bash
   cd sartaz-ainan-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch = `main`** and **Folder = `/ (root)`**, then **Save**.
5. Wait ~1 minute; your site is live at `https://<you>.github.io/<repo>/`.

> After deploying, update `<meta property="og:url">` in `index.html` to your live URL so
> social-share previews resolve correctly.

---

## ⚠️ Placeholders you still need to fill in

Real content could not be auto-pulled (LinkedIn requires login; SSRN/Google Scholar/
ResearchGate/YouTube block automated scraping or render via JavaScript). **Nothing was
invented.** Search the code for `TODO` and replace these:

| Where (`index.html`)         | What to fill in                                              |
| ---------------------------- | ----------------------------------------------------------- |
| Hero tagline                 | Your title/tagline, e.g. "Researcher \| <field>"            |
| Hero supporting sentence     | One-line intro                                              |
| About bio                    | 2–4 sentence bio (from LinkedIn)                            |
| Research Interests chips     | Your real interests (replace the 5 placeholders)           |
| "What I do" cards            | Tailor the 3 descriptions (optional)                       |
| Featured SSRN card           | Real paper **title**, **year**, and **summary**            |
| Other publication cards      | Real titles / venues / years / summaries / DOI links       |
| Media → YouTube cards        | Real `data-video-id` (11-char IDs) + video titles          |
| Contact `mailto:`            | Your real email address                                    |
| Contact form `action`        | Your Formspree endpoint (`YOUR_FORM_ID`)                   |
| `<meta property="og:url">`   | Your live deployed URL                                     |

All **social/profile links are already wired** to the URLs you provided (LinkedIn,
Google Scholar, ResearchGate, YouTube, Instagram, Facebook) and the **SSRN paper link**
points to `abstract_id=6215898`.

### Formspree setup (contact form)

1. Create a free form at <https://formspree.io>.
2. Copy your endpoint, e.g. `https://formspree.io/f/abcwxyz`.
3. Replace `YOUR_FORM_ID` in the `<form action="...">` in `index.html`.

Until configured, the form shows a friendly "not configured yet" notice instead of
posting to a broken URL. The `mailto:` button works regardless once you set the address.

---

## Accessibility & SEO

- Semantic landmarks (`<header> <main> <section> <footer>`), skip-link, `aria-label`s on
  icon links, visible focus styles, `prefers-reduced-motion` support, alt text on the
  photo, and AA-contrast text.
- `<title>`, meta description, Open Graph + Twitter card tags (using the headshot), and an
  "SA" monogram favicon.
