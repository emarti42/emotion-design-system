import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/Atoms/DownloadButton/DownloadButton'

function App() {
  return (
    <main className="app">
      <h1 className="app__title">Emotion Design System</h1>
      <p className="app__lead">Example: download an asset using the design tokens</p>
      <DownloadButton fileUrl={heroImg} filename="hero.png" label="Download hero image" />
    </main>
  )
}

export default App
