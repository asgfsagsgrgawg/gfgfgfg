# Jackson Care Hospital — Website Plan

## Product scope

Build the complete eight-page hospital website from the attached brief: Home, About Us, Medical Services, Our Doctors, Appointment Booking, Contact Us, Patient Information, and Frequently Asked Questions. All pages share responsive navigation, brand styling, and a multi-column footer. Use the supplied hospital contact information consistently: **+1 325 430 7617** (`tel:+13254307617`) and **jacksonhospital051@gmail.com** (`mailto:jacksonhospital051@gmail.com`).

The public-facing experience will include a homepage hero with “Your Health, Our Priority.”, appointment and services calls to action, emergency/opening-hours/service/appointment shortcuts, an introduction with mission/vision/values, the ten requested service areas, a “Why Choose Us?” section, clinician profiles, and patient testimonials. Dedicated pages will expand hospital/about content, searchable/filterable services, clinician profiles, appointment booking, contact information and form, patient information, and FAQs. The contact page will include an explicitly labeled map/location panel because no street address or verified map location was supplied.

The appointment form will include full name, email, phone, department, preferred doctor, date, time, and reason; it will validate the inputs in the browser and show a confirmation interface with a success notification. The appointment, contact, and newsletter forms will be frontend demonstrations only: no server-side booking, message delivery, newsletter enrollment, or persistence was requested or provisioned. The UI will not claim that a real appointment or message was sent. Content for clinician biographies and testimonials will be clearly marked as illustrative sample content until the hospital supplies verified staff details and patient-approved quotations; no real person or endorsement will be fabricated.

## Implementation approach

Use a semantic, multi-page HTML5 site with the requested CSS3, vanilla JavaScript (ES6+), and Bootstrap 5 responsive components. Use Bootstrap Icons, AOS, Swiper.js, SweetAlert2, and Google Fonts where they add value; load these as pinned/versioned CDN assets to keep the project light. Vite will provide the local development server and multi-page static build, with output in `dist/`; there is no application backend or database. Each page will be directly addressable as a static HTML document, and internal navigation will use relative URLs. Forms, search, carousel, accordion, gallery, counters, mobile navigation, smooth scrolling, and back-to-top behavior will be implemented on the client.

The supplied phone/email, emergency links, opening-hours content, contact form, WhatsApp shortcut, interactive service cards, responsive behavior, accessibility semantics, descriptive image alt text, page-specific SEO titles/descriptions, and the eight-route manifest will be wired into the site. The visual assets will use generated, purpose-made healthcare photography for planned hero/section placements and distinct clinician portrait imagery for the illustrative profile cards. The generated photos are delivered through managed storage and will be referenced by their exact project URLs; local brand assets will be kept under `images/`.

## Design direction

- **Design movement:** Contemporary healthcare editorial, borrowing the clarity of modern clinical wayfinding and the quiet confidence of premium hospital communications.
- **Core principles:** Human reassurance; clinical clarity; accessible contrast and readable hierarchy; mobile-first utility.
- **Color philosophy:** White and soft warm-neutral surfaces keep the experience calm and legible. Deep navy anchors trust and navigation, clear medical blue carries primary actions and wayfinding, and a restrained soft green signals wellbeing and reassurance.
- **Layout paradigm:** A spacious editorial flow with asymmetric image/text pairings, generous whitespace, and offset information bands. Use responsive Bootstrap grids for reliable behavior, while varying section composition so it does not feel like a repeated grid of cards.
- **Signature elements:** A compact cross-and-heart-inspired line mark; thin blue section rules with a small green signal; rounded appointment panels and image corners.
- **Interaction philosophy:** Every control gives clear feedback. Key actions remain obvious, forms explain errors inline, and decoration never competes with appointment access or emergency contact information.
- **Animation:** Subtle fade/slide-on-scroll, restrained hover elevation, and a gentle count-up; respect `prefers-reduced-motion` and avoid movement that delays access to content.
- **Typography system:** Manrope for display/headings and DM Sans for body/UI text, with a clear scale, comfortable line-height, and strong small-screen legibility.
- **Brand essence:** A dependable, patient-first hospital website for patients and families seeking accessible, coordinated care; **reassuring, capable, attentive**.
- **Brand voice:** Clear, warm, and direct. Example lines: “Your health, our priority.” “Care that listens, expertise you can trust.”
- **Wordmark & logo:** A simple custom inline SVG mark combining a medical cross with a heart/continuous-care line, paired with a restrained Jackson Care wordmark; the mark remains legible in the navigation and footer.
- **Signature brand color:** Deep clinical navy, balanced by medical blue and a small amount of healing green.

## Main project structure

```text
jacksoncare/
├── index.html                    # Home
├── about.html                    # About, mission, vision, values
├── services.html                 # Searchable ten-service directory
├── doctors.html                  # Illustrative clinician profiles
├── appointment.html              # Validated frontend appointment flow
├── contact.html                  # Contact details, form, hours, map/location panel
├── patient-information.html      # Patient preparation and practical information
├── faq.html                      # Accessible FAQ accordion
├── css/
│   └── style.css                 # Shared design tokens, layout, responsive styles
├── js/
│   └── script.js                 # Shared navigation, forms, search, UI interactions
├── images/                       # Local brand assets; managed photo URLs are referenced in HTML
├── public/
│   └── manus-routes.json         # Canonical page route manifest
├── package.json                  # Pinned Vite scripts/dependency
├── vite.config.js                # Multi-page development/build configuration
├── README.md                     # Setup, page map, interaction and demo-content notes
├── plan.md                        # This approved implementation plan
└── TODO.md                        # Outcome-based delivery requirements
```

## Serving and delivery

The site will run on the initialized project's port 3000 through Vite, bind to `0.0.0.0`, and serve its static files in Preview. The static build will be configured for `dist/` and can be published as static output if the project's existing publishing settings permit. No production data store, patient-record processing, appointment scheduling service, contact-email transport, or newsletter backend will be added. The finished project will include all source files and a README; a source ZIP will be prepared for download.
