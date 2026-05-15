import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <div className="nav__inner">
        <NavLink className="nav__brand" to="/">Emotion</NavLink>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`} to="/" end>Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`} to="/about">About Us</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`} to="/downloads">Downloads</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`} to="/documentation">Documentation</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`} to="/releases">Releases</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
