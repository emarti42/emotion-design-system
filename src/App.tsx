import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/Atoms/DownloadButton/DownloadButton'
import Card from './components/Molecules/Card/Card'

function App() {
  return (
    <main className="app">
      <h1 className="app__title">Emotion Design System</h1>
      <p className="app__lead">Example: download an asset using the design tokens</p>
      <section className="cards-grid">
        {/* Card variant: no image (has button) */}
        <Card
          title="No image card"
          description="This card has no image but includes the action button."
          fileUrl={heroImg}
          filename="hero.png"
        />

        {/* Card variant: no button (shows image only) */}
        <Card
          title="No button card"
          description="This card shows an image but hides the action button."
          // pass imageUrl to show image
          imageUrl={heroImg}
          fileUrl={heroImg}
          filename="hero.png"
          showAction={false}
        />

        {/* Card variant: text-only */}
        <Card
          title="Text only card"
          description="A simple text-only card without image or action."
          showAction={false}
        />
      </section>

      <div className="app__actions">
        <DownloadButton fileUrl={heroImg} filename="hero.png" label="Download (Primary)" variant="primary" />
        <DownloadButton fileUrl={heroImg} filename="hero.png" label="Download (Secondary)" variant="secondary" />
        <DownloadButton fileUrl={heroImg} filename="hero.png" label="Download (Ghost)" variant="ghost" />
      </div>
    </main>
  )
}

export default App
