# Vishal’s portfolio

A compact, single-page React portfolio with Vite and Tailwind CSS. It uses the original VXSH logo, a dark cyan/red palette, locally bundled fonts, and a small custom wireframe illustration.

## Run locally

Use Node.js 22.12+:

```sh
npm ci
npm run dev
```

If your installed Node version is older, use:

```sh
npx --yes --package=node@22 -- npm run dev
```

Build with `npm run build`, preview with `npm run preview`, and deploy `dist/` to a static host. The old `projects.html` address redirects to the main page for compatibility.

## Add a project

Project content lives in `src/projects.js`. OpticBets, Ace Rithm, and Gym In Progress are summarized from the supplied PDF and Pages resumes. Their source descriptions are recorded in the catalog; repository/demo URLs are omitted until supplied or confirmed. Duplicate a template, give it a unique `id` and `slug`, replace its content, and set `template: false`. Entries with `template: false` appear in the work section. Two projects are shown initially; visitors can expand the list or select a category. Templates stay in the source file for editing and are hidden from visitors.

Each project supports a category, tags, status, year, description, problem, approach steps, outcome, and lessons. Details expand in place. Algorithm projects can include `complexity: { time: 'O(n log n)', space: 'O(n)' }`; use your actual analysis. Add a screenshot to `public/projects/` and reference it with `image: '/projects/my-project.png'`. Add complete URLs for `repositoryUrl` and `demoUrl`; empty links are omitted. Direct links use `/#project-your-slug`.

## Personalize

Edit `src/profile.js` for the experience timeline and grouped technical skills, cross-checked against both supplied resumes. Role highlights expand on demand. Edit `src/main.jsx` for the biography, LinkedIn URL, and certifications. The existing facts come from the supplied LinkedIn profile. Certification dates and credential IDs appear in expandable rows. Edit `src/styles.css` for the design and `index.html` for page metadata.

The original file at `public/vxsh.png` is unchanged. The header uses CSS to hide its empty black margins without recoloring or distorting the lettering. The favicon is a vector reconstruction of the V from that image, keeping its red/cyan edges and dark interior sharp at small sizes. Keyboard navigation, visible focus, mobile navigation, and reduced-motion support are included. No API keys or external font/image services are required.
