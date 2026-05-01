import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <div className="nav__inner">
        <a className="nav__brand" href="#">Emotion</a>
        <ul className="nav__list">
          <li className="nav__item"><a className="nav__link nav__link--active" href="#">Home</a></li>
          <li className="nav__item"><a className="nav__link" href="#about">About Us</a></li>
          <li className="nav__item"><a className="nav__link" href="#downloads">Downloads</a></li>
          <li className="nav__item"><a className="nav__link" href="#docs">Docs</a></li>
        </ul>
      </div>
    </nav>
  )
}
