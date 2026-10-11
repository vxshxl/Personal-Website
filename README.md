# Vishal's Personal Website

A responsive React and Tailwind CSS portfolio for Vishal, a computer science student at Georgia Tech. Vite provides local development and static production builds. Fonts are bundled locally; no external image or font service is required.

## Development

Use Node.js 22.12+ (the cloud environment uses Node.js 24).

```sh
npm ci
npm run dev -- --port 5173
```

## Production

```sh
npm run build
npm run preview -- --port 4173
```

Deploy the generated `dist/` directory to a static hosting service.

## Personalize

Edit `src/main.jsx` for your biography, projects, and contact details. Edit `src/styles.css` for the design. The education section uses your provided Georgia Tech affiliation as social proof; no testimonials or other endorsements are invented. Future projects and contact details are clearly marked as upcoming.

No credentials or environment variables are required. The mobile navigation toggles with the Menu button, and the contact button copies the website URL on browsers that support the Clipboard API in a secure context.
