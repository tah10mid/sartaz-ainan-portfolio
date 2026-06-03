# Sartaz Ainan — Personal Portfolio

A polished, fully responsive single-page portfolio for **Sartaz Ainan** — Materials &
Metallurgical Engineer and content creator. Built with semantic **HTML5**, **Tailwind CSS**
(compiled to a static stylesheet), and **vanilla JavaScript** — no framework, no backend.

> **Hosting needs no build step:** the compiled `css/app.css` is committed, so you can drag
> the folder to any static host as-is. The build step is only needed when you *change styles*.

> **Design:** industrial / engineering theme — steel-blue (`#3e6e9c`) + amber accents,
> sharp corners, hairline borders, a blueprint grid motif, and monospaced technical labels.
> Display type **Space Grotesk**, body **Inter**, labels **JetBrains Mono**. Auto light/dark
> (follows the device, with a manual toggle), scroll-reveal animations, and scroll-spy nav.

---

## File tree

```
sartaz-ainan-portfolio/
├── index.html              # the whole page (all sections); links to css/app.css
├── css/
│   └── app.css             # COMPILED Tailwind output (committed; do not edit by hand)
├── src/
│   └── input.css           # Tailwind source: @tailwind directives + @apply components
├── tailwind.config.js      # palette (lavender/ink), fonts, content globs
├── package.json            # build/watch scripts + tailwindcss devDependency
├── js/
│   ├── icons.js            # inline SVG social/brand icons (no icon CDN)
│   └── main.js             # dark mode, mobile menu, scroll-spy, reveal, contact form
├── images/
│   ├── professional-photo.jpg       # web-optimized hero headshot (~36 KB)
│   ├── professional-photo-480.jpg   # smaller variant for mobile (srcset)
│   ├── og-image.jpg                 # 1200×630 Open Graph / social-share image
│   ├── favicon.svg                  # "SA" monogram favicon (scalable)
│   ├── favicon-32.png               # PNG fallback
│   └── apple-touch-icon.png         # 180×180 iOS home-screen icon
├── vercel.json             # Vercel build config (runs `npm run build`)
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

- **Tailwind is compiled to a static file** (`css/app.css`) with the Tailwind CLI — no
  runtime CDN, so styling is instant and deterministic (no flash, no console warning).
- **Custom component classes** (`.card`, `.chip`, `.yt-card`, …) use Tailwind's `@apply`
  and live in `src/input.css`; the palette/fonts live in `tailwind.config.js`.
- Hosts for free with zero configuration on **Netlify**, **GitHub Pages**, or **Vercel**.
  Because `css/app.css` is committed, none of them strictly need to run the build.

### Editing styles (rebuild the CSS)

If you change any Tailwind classes or the component styles, rebuild the stylesheet:

```bash
npm install          # first time only — installs the tailwindcss dev dependency
npm run build        # writes css/app.css (minified)
# or, while developing:
npm run watch        # rebuilds on every save
```

Then commit the updated `css/app.css`. (Tailwind only includes classes it finds in
`index.html` / `js/**/*.js`, per the `content` globs in `tailwind.config.js`.)

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

Verified content was pulled from the **Google Scholar** profile (name, affiliation,
research interests, and the SSRN paper title/authors/year) and is already filled in.
**Nothing was invented.** LinkedIn (login-gated) and YouTube (JS-rendered) stayed
blocked, so a few fields remain `TODO`:

| Where (`index.html`)         | Status / what to fill in                                    |
| ---------------------------- | ----------------------------------------------------------- |
| Hero tagline                 | ✅ Filled — "Materials & Metallurgical Engineering Researcher · BUET" |
| About bio                    | ✅ Filled from Scholar facts — **expand** with a personal bio from LinkedIn |
| Research Interests chips     | ✅ Filled from Scholar (Metallurgy, Semiconductors, Ceramics, Dielectric Materials, Steel Making) |
| Featured SSRN card           | ✅ Filled — real title, authors, year                       |
| Experience / Skills / Leadership | ✅ Filled from your CV (Anwar Ispat, internships, labs, BUET Career Club, etc.) |
| Research & Projects          | ✅ Filled — thesis (SSRN/ICME) + 4 projects                  |
| Contact emails / phone / location | ✅ Filled — emails, +880 1553-064653, Dhaka, Bangladesh |
| Media → YouTube cards        | ✅ Filled — 3 real videos (thumbnails pulled from the channel feed) |
| Contact                      | ✅ WhatsApp button (+880 1553-064653) + email/phone/location |

Everything is filled in — no remaining placeholders.

> **Privacy:** full street/permanent home addresses and your referees' phone numbers were
> intentionally left off this public site. Add them only if you really want them public.

All **social/profile links are wired** (LinkedIn, Google Scholar, ResearchGate, YouTube,
Instagram, Facebook), the **SSRN paper link** points to `abstract_id=6215898`, and
`<meta og:url>` is set to the live Vercel URL.

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
