export default function Releases() {
  return (
    <>
      <p className="app__lead">Version history and changelog for the Emotion Design System.</p>

      <section className="app__showcase" aria-label="Releases">

        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">v1.0.0</h3>
            <p className="showcase__desc">May 2025 — Initial public release.</p>
          </div>
          <div className="showcase__preview">
            <ul className="releases__list">
              <li>Added <strong>DownloadButton</strong> atom with primary, secondary, and ghost variants</li>
              <li>Added <strong>EmotionInput</strong> atom with default, error, and success states</li>
              <li>Added <strong>ThemeToggle</strong> atom with light/dark mode switching</li>
              <li>Added <strong>Card</strong> molecule with optional image and download action</li>
              <li>Added <strong>Accordion</strong> organism for collapsible card lists</li>
              <li>Added <strong>Nav</strong> organism with responsive navigation</li>
              <li>Published design tokens for color, spacing, typography, and shadow</li>
              <li>Deployed to GitHub Pages</li>
            </ul>
          </div>
        </div>

        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">v0.9.0</h3>
            <p className="showcase__desc">April 2025 — Beta release for internal testing.</p>
          </div>
          <div className="showcase__preview">
            <ul className="releases__list">
              <li>Established token system: color scales, spacing, border radius, shadows</li>
              <li>Built initial component scaffolding with Vite + React + TypeScript</li>
              <li>Added light and dark color themes via CSS custom properties</li>
              <li>Integrated <strong>gh-pages</strong> deploy pipeline</li>
            </ul>
          </div>
        </div>

        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">v0.1.0</h3>
            <p className="showcase__desc">March 2025 — Project kickoff.</p>
          </div>
          <div className="showcase__preview">
            <ul className="releases__list">
              <li>Initialized repository with Vite, React 19, and TypeScript</li>
              <li>Defined design principles: emotion-first, accessible, token-driven</li>
              <li>Created initial file structure following Atomic Design methodology</li>
            </ul>
          </div>
        </div>

      </section>
    </>
  )
}
