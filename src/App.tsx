import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ThemeToggle from './components/Atoms/ThemeToggle/ThemeToggle'
import Nav from './components/Organisms/Nav/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Downloads from './pages/Downloads'
import Documentation from './pages/Documentation'
import Releases from './pages/Releases'

function App() {
  return (
    <HashRouter>
      <main className="app">
        <header className="app__header">
          <h1 className="app__title">Emotion Design System</h1>
          <div className="app__toggle">
            <ThemeToggle />
          </div>
        </header>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/releases" element={<Releases />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
