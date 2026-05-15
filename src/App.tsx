import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/Atoms/DownloadButton/DownloadButton'
import EmotionInput from './components/Atoms/EmotionInput/EmotionInput'
import ThemeToggle from './components/Atoms/ThemeToggle/ThemeToggle'
import Card from './components/Molecules/Card/Card'
import Accordion from './components/Organisms/Accordion/Accordion'
import Nav from './components/Organisms/Nav/Nav'
import About from './components/Molecules/About/About'

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">Emotion Design System</h1>
        <div className="app__toggle">
          <ThemeToggle />
        </div>
      </header>
      <Nav />
      <About />

      <p className="app__lead">Example: download an asset using the design tokens</p>

      <section className="app__showcase" aria-label="Component showcase">
        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Download Button</h3>
            <p className="showcase__desc">Primary, secondary and ghost button variants using the primary green token.</p>
          </div>
          <div className="showcase__preview">
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
              <DownloadButton fileUrl={heroImg} filename="hero.png" label="Primary" variant="primary" />
              <DownloadButton fileUrl={heroImg} filename="hero.png" label="Secondary" variant="secondary" />
              <DownloadButton fileUrl={heroImg} filename="hero.png" label="Ghost" variant="ghost" />
            </div>
          </div>
        </div>

        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Emotion Input</h3>
            <p className="showcase__desc">Text input with default, error and success visual states.</p>
          </div>
          <div className="showcase__preview">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <EmotionInput label="Default" placeholder="Type here" />
              <EmotionInput label="Error" placeholder="Invalid" state="error" errorMessage="Invalid input" />
              <EmotionInput label="Success" placeholder="Looks good" state="success" />
            </div>
          </div>
        </div>

        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Theme Toggle</h3>
            <p className="showcase__desc">Toggle the design system theme between light and dark.</p>
          </div>
          <div className="showcase__preview">
            <ThemeToggle />
          </div>
        </div>

        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Card</h3>
            <p className="showcase__desc">Card molecule showing image, text, and action button.</p>
          </div>
          <div className="showcase__preview">
            <Card
              title="Sample Card"
              description="This card shows how the molecule looks in the preview state."
              imageUrl={heroImg}
              fileUrl={heroImg}
              filename="hero.png"
              showAction={true}
            />
          </div>
        </div>

        <div className="showcase__item">
          <div className="showcase__meta">
            <h3 className="showcase__title">Dropdown Cards</h3>
            <p className="showcase__desc">Three accordion panels demonstrating the card variants (no-image, no-button, text-only).</p>
          </div>
          <div className="showcase__preview">
            <Accordion
              items={[
                {
                  id: 'no-image-showcase',
                  title: 'No image card',
                  description: 'This card has no image but includes the action button.',
                  fileUrl: heroImg,
                  filename: 'hero.png',
                  showAction: true,
                },
                {
                  id: 'no-button-showcase',
                  title: 'No button card',
                  description: 'This card shows an image but hides the action button.',
                  imageUrl: heroImg,
                  fileUrl: heroImg,
                  filename: 'hero.png',
                  showAction: false,
                },
                {
                  id: 'text-only-showcase',
                  title: 'Text only card',
                  description: 'A simple text-only card without image or action.',
                  showAction: false,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <Accordion
        items={[
          {
            id: 'no-image',
            title: 'No image card',
            description: 'This card has no image but includes the action button.',
            fileUrl: heroImg,
            filename: 'hero.png',
            showAction: true,
          },
          {
            id: 'no-button',
            title: 'No button card',
            description: 'This card shows an image but hides the action button.',
            imageUrl: heroImg,
            fileUrl: heroImg,
            filename: 'hero.png',
            showAction: false,
          },
          {
            id: 'text-only',
            title: 'Text only card',
            description: 'A simple text-only card without image or action.',
            showAction: false,
          },
        ]}
      />

      <div className="app__actions">
        <DownloadButton fileUrl={heroImg} filename="hero.png" label="Download (Primary)" variant="primary" />
        <DownloadButton fileUrl={heroImg} filename="hero.png" label="Download (Secondary)" variant="secondary" />
        <DownloadButton fileUrl={heroImg} filename="hero.png" label="Download (Ghost)" variant="ghost" />
      </div>
    </main>
  )
}

export default App
