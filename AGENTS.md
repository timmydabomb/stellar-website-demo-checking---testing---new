# Repository Guidelines

## Project Structure & Module Organization

The Next.js App Router application lives in `app/`; reusable landing-page sections are in `components/`. Global styles are in `app/globals.css`, and static assets can live in `public/`. Keep generated output and local dependencies out of version control.

## Build, Test, and Development Commands

Run `npm install` to install dependencies, `npm run dev` to start the local server, `npm run build` to create a production build, and `npm start` to serve that build. `npm run lint` runs ESLint. See `README.md` for the quick start.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Indent TSX and CSS consistently with two spaces; name components in PascalCase (`Services.tsx`) and variables/functions in camelCase. Use Tailwind utilities for layout and responsive behavior, with shared theme details and component-specific rules in `app/globals.css`. Use semantic HTML, accessible labels, and descriptive image alt text. Run `npm run lint` before submitting.

## Testing Guidelines

No test framework or coverage target is configured. For new behavior, add tests using the chosen framework's conventional `*.test.ts` or `*.test.tsx` naming and document the command. Check responsive layouts and form behavior when changing the landing page.

## Commit & Pull Request Guidelines

Git history contains no commits, so no established commit-message pattern can be inferred. Use short, imperative commit subjects (for example, `Refine services section`) and keep each commit focused. Pull requests should explain the change, list validation performed, link related issues when available, and include screenshots for visual changes. Note configuration or deployment changes clearly.

## Security & Configuration

Do not commit credentials, private keys, or environment-specific secrets. Local `.env*` files are ignored. The enquiry form currently uses a `mailto:` link for this demo, so it opens the visitor’s email app and requires them to review and send the message. Replace demo contact details and externally hosted placeholder images before launch.
