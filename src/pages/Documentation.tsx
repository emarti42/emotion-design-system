import heroImg from '../assets/hero.png'

const pinImg = 'https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg'
import DownloadButton from '../components/Atoms/DownloadButton/DownloadButton'
import EmotionInput from '../components/Atoms/EmotionInput/EmotionInput'
import ThemeToggle from '../components/Atoms/ThemeToggle/ThemeToggle'
import Card from '../components/Molecules/Card/Card'
import Accordion from '../components/Organisms/Accordion/Accordion'

const colors = {
  'Brand': [
    { token: '--color-primary-dark',  label: 'Primary Dark',  hex: '#064e3b' },
    { token: '--color-primary-main',  label: 'Primary Main',  hex: '#10b981' },
    { token: '--color-primary-light', label: 'Primary Light', hex: '#d1fae5' },
  ],
  'Semantic': [
    { token: '--color-bg',          label: 'Background',    hex: 'var(--color-bg-main)' },
    { token: '--color-surface',     label: 'Surface',       hex: 'var(--color-bg-card)' },
    { token: '--color-text',        label: 'Text',          hex: 'var(--color-text-body)' },
    { token: '--color-text-strong', label: 'Text Strong',   hex: 'var(--color-text-header)' },
    { token: '--border-default',    label: 'Border',        hex: 'var(--color-border)' },
  ],
  'Status': [
    { token: '--color-success', label: 'Success', hex: '#10b981' },
    { token: '--color-warning', label: 'Warning', hex: '#fbbf24' },
    { token: '--color-danger',  label: 'Danger',  hex: '#f87171' },
  ],
  'Neutral Scale': [
    { token: '--n-0',   label: 'N-0',   hex: '#ffffff' },
    { token: '--n-100', label: 'N-100', hex: '#f3f4f6' },
    { token: '--n-200', label: 'N-200', hex: '#e5e7eb' },
    { token: '--n-300', label: 'N-300', hex: '#d1d5db' },
    { token: '--n-400', label: 'N-400', hex: '#9ca3af' },
    { token: '--n-500', label: 'N-500', hex: '#6b7280' },
    { token: '--n-700', label: 'N-700', hex: '#374151' },
    { token: '--n-900', label: 'N-900', hex: '#111827' },
  ],
}

const typeSizes = [
  { token: '--font-size-xs',      label: 'xs',      value: '0.75rem',  sample: 'The quick brown fox' },
  { token: '--font-size-sm',      label: 'sm',      value: '0.875rem', sample: 'The quick brown fox' },
  { token: '--font-size-md',      label: 'md',      value: '1rem',     sample: 'The quick brown fox' },
  { token: '--font-size-lg',      label: 'lg',      value: '1.25rem',  sample: 'The quick brown fox' },
  { token: '--font-size-xl',      label: 'xl',      value: '2rem',     sample: 'Display text' },
  { token: '--font-size-display', label: 'display', value: '3rem',     sample: 'Hero text' },
]

const typeWeights = [
  { token: '--font-weight-normal', label: 'Normal', value: '400' },
  { token: '--font-weight-medium', label: 'Medium', value: '500' },
  { token: '--font-weight-bold',   label: 'Bold',   value: '700' },
]

const spacingScale = [
  { token: '--spacing-xs', label: 'xs', value: '0.5rem',  px: '8px' },
  { token: '--spacing-sm', label: 'sm', value: '1rem',    px: '16px' },
  { token: '--spacing-md', label: 'md', value: '1.5rem',  px: '24px' },
  { token: '--spacing-lg', label: 'lg', value: '2rem',    px: '32px' },
]

const radii = [
  { token: '--border-radius-sm',   label: 'sm',   value: '8px' },
  { token: '--border-radius-md',   label: 'md',   value: '16px' },
  { token: '--border-radius-lg',   label: 'lg',   value: '24px' },
  { token: '--border-radius-full', label: 'full', value: '9999px' },
]

const shadows = [
  { token: '--shadow-sm',   label: 'shadow-sm',   value: '0 1px 2px 0 rgba(0,0,0,0.05)' },
  { token: '--shadow-card', label: 'shadow-card',  value: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)' },
]

export default function Documentation() {
  return (
    <>
      <p className="app__lead">Foundations, design tokens, and component API reference.</p>

      <section className="app__showcase" aria-label="Documentation">

        {/* ── Design Tokens Overview ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Design Tokens</h3>
            <p className="showcase__desc">
              All visual decisions — color, type, spacing, shadow — are stored as CSS custom properties in
              <code> src/styles/colors.css</code>. Components reference semantic aliases; never use raw hex values directly.
            </p>
            <p className="showcase__desc" style={{ marginTop: 'var(--spacing-xs)' }}>
              Two layers:
            </p>
            <ul className="docs__list">
              <li><strong>Primitive tokens</strong> — raw values, e.g. <code>--n-900: #111827</code></li>
              <li><strong>Semantic tokens</strong> — role-based aliases, e.g. <code>--color-text-strong: var(--n-900)</code></li>
            </ul>
          </div>
          <div className="showcase__preview">
            <div className="docs__token-example">
              <div className="docs__token-row">
                <span className="docs__token-name">Primitive</span>
                <code className="docs__token-code">--color-primary-main: #10b981</code>
              </div>
              <div className="docs__token-arrow">↓ aliased as</div>
              <div className="docs__token-row">
                <span className="docs__token-name">Semantic</span>
                <code className="docs__token-code">--color-primary: var(--color-primary-main)</code>
              </div>
              <div className="docs__token-arrow">↓ used in components</div>
              <div className="docs__token-row">
                <span className="docs__token-name">Usage</span>
                <code className="docs__token-code">color: var(--color-primary)</code>
              </div>
            </div>
          </div>
        </div>

        {/* ── Color System ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Color System</h3>
            <p className="showcase__desc">
              Tokens adapt automatically to light and dark mode via <code>@media (prefers-color-scheme)</code> and
              the <code>data-theme</code> attribute set by ThemeToggle.
            </p>
            <p className="showcase__desc" style={{ marginTop: 'var(--spacing-xs)' }}>
              Always use semantic aliases in components — never hardcode hex values.
            </p>
          </div>
          <div className="showcase__preview">
            {Object.entries(colors).map(([group, swatches]) => (
              <div key={group} className="docs__swatch-group">
                <p className="docs__swatch-group-label">{group}</p>
                <div className="docs__swatches">
                  {swatches.map(({ token, label, hex }) => (
                    <div key={token} className="docs__swatch">
                      <div
                        className="docs__swatch-color"
                        style={{ backgroundColor: `var(${token})` }}
                        title={hex}
                      />
                      <span className="docs__swatch-label">{label}</span>
                      <code className="docs__swatch-token">{token}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Typography ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Typography</h3>
            <p className="showcase__desc">
              Base font: <strong>Inter</strong>, falling back to <code>system-ui</code>. All sizes use <code>rem</code> units
              relative to the 18px root (16px on mobile).
            </p>
            <table className="docs__props" style={{ marginTop: 'var(--spacing-sm)' }}>
              <thead><tr><th>Token</th><th>Value</th></tr></thead>
              <tbody>
                {typeSizes.map(({ token, label, value }) => (
                  <tr key={token}>
                    <td><code>{token}</code></td>
                    <td>{value} ({label})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <div className="docs__type-scale">
              {typeSizes.map(({ token, label, value, sample }) => (
                <div key={token} className="docs__type-row">
                  <span className="docs__type-meta">{label} / {value}</span>
                  <span style={{ fontSize: `var(${token})`, color: 'var(--color-text-strong)', lineHeight: 1.2 }}>
                    {sample}
                  </span>
                </div>
              ))}
            </div>
            <div className="docs__type-weights" style={{ marginTop: 'var(--spacing-md)' }}>
              {typeWeights.map(({ token, label, value }) => (
                <div key={token} className="docs__type-row">
                  <span className="docs__type-meta">{label} / {value}</span>
                  <span style={{ fontWeight: `var(${token})`, fontSize: 'var(--font-size-md)', color: 'var(--color-text-strong)' }}>
                    Emotion Design System
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Spacing System ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Spacing System</h3>
            <p className="showcase__desc">
              A four-step scale from 8px to 32px. Use these tokens for margin, padding, and gap — never raw pixel values.
            </p>
            <table className="docs__props" style={{ marginTop: 'var(--spacing-sm)' }}>
              <thead><tr><th>Token</th><th>Value</th><th>px</th></tr></thead>
              <tbody>
                {spacingScale.map(({ token, value, px }) => (
                  <tr key={token}>
                    <td><code>{token}</code></td>
                    <td>{value}</td>
                    <td>{px}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <div className="docs__spacing-scale">
              {spacingScale.map(({ token, label, px }) => (
                <div key={token} className="docs__spacing-row">
                  <span className="docs__spacing-label">{label} — {px}</span>
                  <div className="docs__spacing-track">
                    <div
                      className="docs__spacing-bar"
                      style={{ width: `var(${token})`, height: `var(${token})` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Border Radius ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Border Radius</h3>
            <p className="showcase__desc">
              Four radius steps. Use <code>sm</code> for inputs and buttons, <code>md</code> for cards,
              <code> lg</code> for large panels, and <code>full</code> for pills and avatars.
            </p>
            <table className="docs__props" style={{ marginTop: 'var(--spacing-sm)' }}>
              <thead><tr><th>Token</th><th>Value</th></tr></thead>
              <tbody>
                {radii.map(({ token, label, value }) => (
                  <tr key={token}>
                    <td><code>{token}</code></td>
                    <td>{value} ({label})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <div className="docs__radius-grid">
              {radii.map(({ token, label, value }) => (
                <div key={token} className="docs__radius-item">
                  <div
                    className="docs__radius-box"
                    style={{ borderRadius: `var(${token})` }}
                  />
                  <span className="docs__radius-label">{label}</span>
                  <code className="docs__swatch-token">{value}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Shadows ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Shadows &amp; Effects</h3>
            <p className="showcase__desc">
              Subtle elevation shadows. <code>shadow-sm</code> for form controls and small UI, <code>shadow-card</code> for
              cards and panels. Both are intentionally low-contrast to support dark mode.
            </p>
            <table className="docs__props" style={{ marginTop: 'var(--spacing-sm)' }}>
              <thead><tr><th>Token</th><th>Value</th></tr></thead>
              <tbody>
                {shadows.map(({ token, label, value }) => (
                  <tr key={token}><td><code>--{label}</code></td><td style={{ fontSize: '0.75rem' }}>{value}</td></tr>
                ))}
                <tr>
                  <td><code>--focus-ring</code></td>
                  <td style={{ fontSize: '0.75rem' }}>rgba(16,185,129,0.18) — primary-tinted ring</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <div className="docs__shadow-row">
              {shadows.map(({ token, label }) => (
                <div key={token} className="docs__shadow-box" style={{ boxShadow: `var(${token})` }}>
                  <code>{label}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Component API: DownloadButton ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">DownloadButton</h3>
            <p className="showcase__desc">Triggers a file download. Three visual variants share the same token-based color system.</p>
            <table className="docs__props">
              <thead><tr><th>Prop</th><th>Type</th><th>Default</th></tr></thead>
              <tbody>
                <tr><td>fileUrl</td><td>string</td><td>—</td></tr>
                <tr><td>filename</td><td>string</td><td>—</td></tr>
                <tr><td>label</td><td>string</td><td>"Download"</td></tr>
                <tr><td>variant</td><td>'primary' | 'secondary' | 'ghost'</td><td>'primary'</td></tr>
                <tr><td>disabled</td><td>boolean</td><td>false</td></tr>
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
              <DownloadButton fileUrl={heroImg} filename="hero.png" label="Primary" variant="primary" />
              <DownloadButton fileUrl={heroImg} filename="hero.png" label="Secondary" variant="secondary" />
              <DownloadButton fileUrl={heroImg} filename="hero.png" label="Ghost" variant="ghost" />
              <DownloadButton fileUrl={heroImg} filename="hero.png" label="Disabled" variant="primary" disabled />
            </div>
          </div>
        </div>

        {/* ── Component API: EmotionInput ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">EmotionInput</h3>
            <p className="showcase__desc">Text input with three validation states. Fully accessible with ARIA labels and error announcements.</p>
            <table className="docs__props">
              <thead><tr><th>Prop</th><th>Type</th><th>Default</th></tr></thead>
              <tbody>
                <tr><td>label</td><td>string</td><td>—</td></tr>
                <tr><td>placeholder</td><td>string</td><td>—</td></tr>
                <tr><td>state</td><td>'default' | 'error' | 'success'</td><td>'default'</td></tr>
                <tr><td>errorMessage</td><td>string</td><td>—</td></tr>
                <tr><td>value</td><td>string</td><td>—</td></tr>
                <tr><td>onChange</td><td>(e) =&gt; void</td><td>—</td></tr>
                <tr><td>disabled</td><td>boolean</td><td>false</td></tr>
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <EmotionInput label="Default" placeholder="Type here" />
              <EmotionInput label="Error" placeholder="Invalid" state="error" errorMessage="This field is required" />
              <EmotionInput label="Success" placeholder="Looks good" state="success" />
              <EmotionInput label="Disabled" placeholder="Not editable" disabled />
            </div>
          </div>
        </div>

        {/* ── Component API: ThemeToggle ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">ThemeToggle</h3>
            <p className="showcase__desc">
              Switches between light and dark mode by toggling a <code>data-theme</code> attribute on{' '}
              <code>document.documentElement</code>. No props required.
            </p>
            <table className="docs__props">
              <thead><tr><th>Prop</th><th>Type</th><th>Default</th></tr></thead>
              <tbody>
                <tr><td colSpan={3} style={{ color: 'var(--color-text)', fontStyle: 'italic' }}>No props</td></tr>
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <ThemeToggle />
          </div>
        </div>

        {/* ── Component API: Card ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Card</h3>
            <p className="showcase__desc">Content container with optional image, title, description, and download action.</p>
            <table className="docs__props">
              <thead><tr><th>Prop</th><th>Type</th><th>Default</th></tr></thead>
              <tbody>
                <tr><td>title</td><td>string</td><td>—</td></tr>
                <tr><td>description</td><td>string</td><td>—</td></tr>
                <tr><td>imageUrl</td><td>string</td><td>—</td></tr>
                <tr><td>fileUrl</td><td>string</td><td>—</td></tr>
                <tr><td>filename</td><td>string</td><td>—</td></tr>
                <tr><td>showAction</td><td>boolean</td><td>true</td></tr>
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <Card
              title="Sample Card"
              description="Card with image and download action."
              imageUrl={pinImg}
              fileUrl={heroImg}
              filename="hero.png"
              showAction={true}
            />
          </div>
        </div>

        {/* ── Component API: Accordion ── */}
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Accordion</h3>
            <p className="showcase__desc">Collapsible list of card items. Each item expands to reveal a Card with the provided props.</p>
            <table className="docs__props">
              <thead><tr><th>Prop (item)</th><th>Type</th><th>Default</th></tr></thead>
              <tbody>
                <tr><td>id</td><td>string</td><td>—</td></tr>
                <tr><td>title</td><td>string</td><td>—</td></tr>
                <tr><td>description</td><td>string</td><td>—</td></tr>
                <tr><td>imageUrl</td><td>string</td><td>—</td></tr>
                <tr><td>fileUrl</td><td>string</td><td>—</td></tr>
                <tr><td>showAction</td><td>boolean</td><td>true</td></tr>
              </tbody>
            </table>
          </div>
          <div className="showcase__preview">
            <Accordion
              items={[
                { id: 'doc-1', title: 'Item one', description: 'First accordion panel.', showAction: false },
                { id: 'doc-2', title: 'Item two', description: 'Second accordion panel.', showAction: false },
              ]}
            />
          </div>
        </div>

      </section>
    </>
  )
}
