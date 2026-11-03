# Jackson Care Hospital website

A responsive, multi-page hospital website built with semantic HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. The site uses a static HTML rendering script so each page includes its meaningful content and page-specific metadata in the initial response.

## Run locally

Requirements: Node.js 22 or newer and pnpm 11. The package manager is pinned in `package.json`.

```bash
pnpm install
pnpm dev
```

Open the project Preview or visit the development server on port 3000. `pnpm dev` regenerates the eight static pages from `scripts/site-content.mjs` and then starts Vite. `pnpm build` regenerates the pages and builds the static site into `dist/`.

## Pages

- `index.html` — homepage and all ten hospital service areas.
- `about.html` — hospital introduction, proposed mission/vision, values, and image gallery.
- `services.html` — searchable service directory.
- `doctors.html` — illustrative clinician profile cards.
- `appointment.html` — appointment request demo with frontend validation and confirmation.
- `contact.html` — contact methods, emergency information, map/location information panel, and message demo.
- `patient-information.html` — practical visit-planning guidance.
- `faq.html` — keyboard-accessible FAQ accordion.

Shared site text and page metadata live in `scripts/site-content.mjs`. The HTML renderer in `scripts/render-pages.mjs` creates the root HTML pages, shared navigation/footer, and `public/manus-routes.json`. Styles are in `css/style.css`; browser interactions are in `js/script.js`.

## Demo and verification notes before public launch

Appointment, contact, and newsletter forms only validate and show a local confirmation. They do not transmit, persist, schedule, or subscribe any information. Do not enter sensitive health details. The doctor names, biographies, and portraits are fictional illustrative samples; they are not verified Jackson Care Hospital clinicians. Sample testimonial cards are not real patient endorsements and must be replaced with patient-approved feedback. Mission and vision copy is proposed wording for hospital review. The brief supplied no physical address or routine clinic hours, so the site asks patients to call for verified directions and hours; it states only that emergency support is available 24/7 as requested. Replace the map/location information panel with a verified Google Maps embed only after receiving the official address and integration details.

## Contact details

- Phone: [+1 325 430 7617](tel:+13254307617)
- Email: [jacksonhospital051@gmail.com](mailto:jacksonhospital051@gmail.com)

Generated hospital and clinician photography is served from the project's managed storage URLs. The local `images/` directory contains the custom SVG brand mark. Bootstrap, Bootstrap Icons, AOS, Swiper.js, SweetAlert2, and Google Fonts load from versioned CDNs, so an internet connection is needed for those assets and effects.
