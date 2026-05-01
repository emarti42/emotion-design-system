import React, { useState, useRef, useEffect } from 'react'
import './About.css'

export default function About() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    if (open) {
      el.style.maxHeight = el.scrollHeight + 'px'
    } else {
      el.style.maxHeight = '0px'
    }
  }, [open])

  return (
    <div className="about">
      <button
        type="button"
        className={`about__button ${open ? 'about__button--open' : ''}`}
        aria-expanded={open}
        aria-controls="about-panel"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="about__label">About Us</span>
        <span className="about__chev" aria-hidden>{open ? '▾' : '▸'}</span>
      </button>

      <div
        id="about-panel"
        ref={panelRef}
        className={`about__panel ${open ? 'about__panel--open' : ''}`}
        role="region"
        aria-hidden={!open}
      >
        <p className="about__text">
          Reachy Mini is an expressive micro-robot platform used to explore and
          demonstrate emotion-driven interactions. It maps sensor inputs and
          internal state to subtle facial and motion cues so users can study
          affective responses in a compact, safe form factor.
        </p>
      </div>
    </div>
  )
}
