# israr.dev — Portfolio

Backend-developer-flavored 3D portfolio for Israr Ahmed. React + Vite + Tailwind v4 + React Three Fiber/Drei + Framer Motion.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

## Where things live

```
src/
  components/    Reusable UI: Navbar, Loader, ProjectCard, SkillChip, ContactForm, MagneticButton, BackToTop, CursorGlow, SectionHeading
  sections/      One file per page section: Hero, About, Skills, Projects, Experience, Contact, Footer
  three/         The 3D layer: HeroScene (Canvas+lighting), NetworkGraph (the signature wireframe), Particles
  data/          Content — profile.js, projects.js, skills.js, timeline.js, skillIcons.js
  hooks/         useMousePosition, useIsMobile, useReducedMotion
  lib/           Small utils
```

## Customizing

- **Content**: everything text-based lives in `src/data/*.js` — edit there, not in components.
- **Colors/fonts**: all design tokens are in `src/index.css` under the `@theme` block (Tailwind v4's CSS-based theme config — no `tailwind.config.js` needed).
- **The hero 3D object**: `src/three/NetworkGraph.jsx` builds a wireframe icosahedron from primitive Three.js geometry (no external model). To swap in your own `.glb`:
  1. Drop the file in `public/`
  2. In `NetworkGraph.jsx`, replace the component body with `const { scene } = useGLTF('/your-model.glb'); return <primitive object={scene} />`
  3. Keep the `mouse`/`reducedMotion` props wired the same way for parallax to keep working
- **Live project links**: `src/data/projects.js` — the 3 real projects from your CV don't have deployed URLs yet, so `live` is `null` (renders "no deploy yet" instead of a dead link). Add a URL once you deploy and it activates automatically. The 4th card is a template — duplicate it for your next project.
- **Contact form**: currently simulates submission (no backend). Wire `handleSubmit` in `src/components/ContactForm.jsx` to Formspree/Resend/EmailJS — instructions in a comment at the top of that file.

## Free 3D asset sources (if you want to go beyond primitives)

- [Sketchfab](https://sketchfab.com/features/free-3d-models) — filter by "Downloadable" + CC license, export as glTF
- [Poly Haven](https://polyhaven.com/models) — CC0, no attribution required, great HDRIs/textures too
- [Google Poly Archive mirrors](https://github.com/poly-pizza) via Poly Pizza — low-poly, portfolio-friendly
- Compress anything you download with [gltf-transform](https://gltf-transform.dev/) or [gltfpack](https://github.com/zeux/meshoptimizer) before shipping — raw exports are often 5-10x larger than needed

## Performance notes

- Three/Fiber/Drei are lazy-loaded (`React.lazy` + `Suspense`) and split into their own chunk — they only download once the Hero mounts, not in the initial bundle.
- Mobile/coarse-pointer devices get capped device-pixel-ratio and skip the ambient particle field.
- All motion respects `prefers-reduced-motion` (system-level, checked live via `useReducedMotion`).
