import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/Atoms/DownloadButton/DownloadButton'
import Card from './components/Molecules/Card/Card'
import ThemeToggle from './components/Atoms/ThemeToggle/ThemeToggle'
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
