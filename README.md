# Amit Prajapati — React Portfolio

A responsive, dark-themed developer portfolio built with React 18 and Vite. The site includes About Me, Projects, Skills, Resume, and Contact sections, mobile navigation, reusable section components, and lazy-loaded below-the-fold sections.

## Requirements

- Node.js 18+ (LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local development URL (usually `http://localhost:5173`).

## Production build and local verification

```bash
npm run build
npm run preview
```

`npm run build` creates the optimized static site in `dist/`. Vite automatically bundles and minifies JavaScript and CSS for production. `npm run preview` serves that built output locally (usually `http://localhost:4173`) so you can check navigation, links, mobile layouts, and the console before deployment.

## Performance choices

- Below-the-fold Projects, Skills, Resume, and Contact sections use `React.lazy()` and `Suspense`, so they can be loaded separately from the initial page.
- Project visuals are CSS illustrations rather than large image files, reducing network requests. If you add project screenshots, use appropriately sized WebP/AVIF images and add `loading="lazy"` and meaningful `alt` text.
- Vite production build bundles and minifies JS/CSS and fingerprints assets for caching.
- Responsive CSS adapts to desktop, tablet, and mobile breakpoints.
- `prefers-reduced-motion` is respected for users who request reduced motion.

## Personalize before publishing

1. Replace placeholder email `your.email@example.com` and social URLs in `src/sections/Contact.jsx`.
2. Replace starter project descriptions in `src/sections/Projects.jsx` with your real project details and links.
3. Add your PDF resume at `public/resume.pdf`.
4. Update education/experience content in `src/sections/Resume.jsx`.
5. Check the page title and meta description in `index.html`.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in at [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import the repository. Vercel should detect Vite automatically.
4. Use build command `npm run build` and output directory `dist`.
5. Deploy, then open the generated URL and test it.
6. For a custom domain, open the project’s **Settings → Domains**, add your domain, and follow the DNS instructions Vercel provides. Vercel provisions HTTPS/SSL when DNS is correctly configured.

## Deploy to Netlify

1. Push the project to GitHub and import it into [Netlify](https://www.netlify.com/).
2. Set build command to `npm run build` and publish directory to `dist`.
3. Deploy the site and test the generated URL.
4. Under **Domain management**, add your custom domain and follow the displayed DNS setup. Netlify provisions HTTPS after the domain is configured.

## Deployment and QA checklist

- [ ] `npm run build` finishes without errors.
- [ ] `npm run preview` works and all sections and navigation links behave correctly.
- [ ] Replace placeholder email, project content, social URLs, and resume PDF.
- [ ] Check at 320px, 375px, 768px, 1024px, and desktop widths.
- [ ] Test latest Chrome, Firefox, Edge, and Safari where available.
- [ ] Test keyboard navigation, visible focus, and reduced-motion preference.
- [ ] Verify deployed links, email action, resume download, and HTTPS lock icon.
- [ ] Check browser console and network panel for errors after deployment.

## Challenges and solutions

- **Large initial page bundle:** moved secondary sections into lazy-loaded React components.
- **Small-screen navigation:** added a mobile menu and responsive layout breakpoints.
- **Production performance:** uses Vite's production bundling/minification; decorative artwork is CSS-based to avoid unnecessary image downloads.
- **Hosting and HTTPS:** static Vite output is deployed from `dist`; Vercel/Netlify handle HTTPS after DNS is configured.

## Notes

This is a ready-to-run starter portfolio, not a claim that deployment or cross-browser testing has already been performed on your machine. Run the checks above and test on the actual browsers/devices available to you before presenting it as fully verified.
