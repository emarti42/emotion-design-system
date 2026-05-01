# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Emotion Design System

    This repository implements a small, token-driven design system built with React, TypeScript, and Vite. The project follows an Atomic Design organization (`src/components/Atoms`, `src/components/Molecules`, `src/components/Organisms`) and uses CSS custom properties (tokens) for colors, spacing, typography, radii, and elevation.

    **Quick start**
    - Install dependencies: `npm install`
    - Run dev server: `npm run dev`
    - Build for production: `npm run build`
    - Deploy to GitHub Pages (one-off): `npm run deploy`

    **Files of interest**
    - `src/styles/colors.css`: central token definitions and `:root[data-theme]` overrides.
    - `src/index.css`: imports tokens and contains global resets + legacy variable mappings.
    - `src/components`: atomic components grouped by role (Atoms/Molecules/Organisms).
    - `vite.config.ts`: project base configuration (update `base` for GitHub Pages if needed).
    - `package.json`: contains `predeploy`/`deploy` scripts and a `homepage` field placeholder.

    **Design tokens**
    The core tokens live in `src/styles/colors.css`. Key token categories:
    - Colors: `--color-primary`, `--color-secondary`, `--color-surface`, `--color-bg`, `--color-text`, `--color-muted`, etc.
    - Semantic aliases: `--brand`, `--info`, `--success`, `--danger`, etc.
    - Spacing: `--space-1`, `--space-2`, `--space-3` (used for margin/padding scale).
    - Typography: `--font-size-base`, `--font-size-sm`, `--font-size-lg`, `--font-family-base`.
    - Radii: `--radius-sm`, `--radius-md`, `--radius-lg`.
    - Elevation/shadows: `--shadow-1`, `--shadow-2`.

    Notes on theming:
    - JavaScript-driven theme switching writes a `data-theme` attribute to the `document.documentElement` (`<html>`). Tokens provide deterministic overrides via `:root[data-theme='dark']` and `:root[data-theme='light']` selectors.
    - The theme toggle component persists the selection in `localStorage` under the key `eds-theme`.

    Compatibility aliases
    - To allow incremental replacement of legacy variables, `src/index.css` maps old names (for example `--bg`, `--text`) to the current tokens. When refactoring, update files to use the canonical token names.

    Component conventions
    - Folder structure: `src/components/{Atoms,Molecules,Organisms}/ComponentName/ComponentName.tsx` and `ComponentName.css`.
    - CSS naming: BEM-like convention `block__element--modifier`. Keep block names tied to component folder names (e.g., `download-button`).
    - Accessibility: interactive components include appropriate `aria-*` attributes and semantic elements (`button`, `nav`, `article`, `header`, `section`). See component files for examples.

    Selected component APIs

    - `DownloadButton` (Atom)
      - Location: `src/components/Atoms/DownloadButton/DownloadButton.tsx`
      - Props: `fileUrl: string`, `filename?: string`, `label?: string`, `variant?: 'primary'|'secondary'|'ghost'`.
      - Behavior: Renders an anchor with `download` attribute. Variants map to token-driven colors and border styles.

    - `ThemeToggle` (Atom)
      - Location: `src/components/Atoms/ThemeToggle/ThemeToggle.tsx`
      - Behavior: Toggles `data-theme` on `<html>`, reads `prefers-color-scheme` as a default, and stores selection in `localStorage`.

    - `Card` (Molecule)
      - Location: `src/components/Molecules/Card/Card.tsx`
      - Props: `title: string`, `description?: string`, `imageUrl?: string`, `fileUrl?: string`, `filename?: string`, `showAction?: boolean`.
      - Behavior: Composes `DownloadButton` for downloads, supports `no-image` and `text-only` variations.

    - `Accordion` (Organism)
      - Location: `src/components/Organisms/Accordion/Accordion.tsx`
      - Behavior: Accessible accordion with single-open behavior in current implementation. Panels contain `Card` components; toggles use `aria-expanded` and `aria-controls`.

    - `Nav` (Organism)
      - Location: `src/components/Organisms/Nav/Nav.tsx`
      - Behavior: Simple horizontal navigation placeholder; use `nav` and `ul` for semantic structure.

    Accessibility notes
    - Keyboard: all interactive controls support keyboard focus and activation (Enter/Space for buttons).
    - Focus styles: focus rings use token `--focus-ring` to ensure visible, consistent focus states.
    - Landmarks & roles: header, nav, main, and aria attributes are used in components to help assistive tech navigate the UI.

    Build & deployment (GitHub Pages)
    - `package.json` includes:

    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "homepage": "https://<your-github-username>.github.io/emotion-design-system/"
    ```

    - Steps to publish manually:

    ```bash
    npm install
    npm run deploy
    ```

    - Important: set `homepage` to your GitHub pages URL and make sure `vite.config.ts` `base` is configured to the same path (for example `/emotion-design-system/`). Alternatively, `vite.config.ts` can read `process.env.VITE_BASE` so you can set `VITE_BASE=/emotion-design-system/ npm run build` in CI.

    - Optional CI (GitHub Actions) snippet (build + publish to `gh-pages`):

    ```yaml
    name: Deploy
    on:
      push:
        branches: [ main ]
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: pnpm/action-setup@v2
            with:
              node-version: '20'
          - run: npm ci
          - run: npm run build
          - uses: JamesIves/github-pages-deploy-action@v4
            with:
              branch: gh-pages
              folder: dist
    ```

    Replace the setup lines above with `npm` or `pnpm`/`yarn` equivalents as required.

    Developer workflow & conventions
    - TypeScript: components are written in TSX. Use `tsc -b` (project references) and `vite build` as configured in the `build` script.
    - Linting: ESLint is configured; run `npm run lint` to check the codebase.
    - Tokens: prefer canonical token names in `src/styles/colors.css` when writing CSS. Avoid direct hex values in component CSS unless absolutely necessary.
    - Incremental refactor: legacy variable aliases are available in `src/index.css` to keep the app stable during token migration.

    Contribution
    - Keep components small and focused. Place shared styles in `src/styles/*` and tokens in `src/styles/colors.css`.
    - Use the Atomic Design folders and BEM naming for CSS. Add new components under `src/components/Atoms` (small UI primitives), `src/components/Molecules` (composed components), or `src/components/Organisms` (layout or composed blocks).

    Where to look next
    - Tokens: `src/styles/colors.css`
    - Component examples: `src/App.tsx` (app wiring and examples)
    - Build config / GH Pages: `vite.config.ts` and `package.json`

    If you want, I can:
    - Add per-folder README.md files describing BEM and token usage.
    - Create a full token reference page and Storybook stories.
    - Add a GitHub Actions workflow and verify a test deploy.

    ---
    Generated and maintained by the project scaffolding in this workspace.
